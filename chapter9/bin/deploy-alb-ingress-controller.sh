#!/usr/bin/env bash
echo "Deploy ALB Ingress Controller"
echo " adapted from https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html"

CLUSTER=${1:?You must specify the name of the EKS cluster.}
REGION=${2:-us-east-2}
VERSION=${3:-v1.1.4}

AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query 'Account' --output text)
IAM_ROLE_NAME="eks-alb-ingress-controller"
IAM_POLICY_NAME="ALBIngressControllerIAMPolicy"

kubectl config use-context "arn:aws:eks:$REGION:$AWS_ACCOUNT_ID:cluster/$CLUSTER"
eksctl utils associate-iam-oidc-provider \
    --region "$REGION" \
    --cluster "$CLUSTER" \
    --approve
IAM_POLICY_ARN=$(aws iam create-policy \
    --region "$REGION" \
    --policy-name "$IAM_POLICY_NAME" \
    --policy-document https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/$VERSION/docs/examples/iam-policy.json \
    --query 'Policy.Arn' \
    --output text)
aws iam attach-role-policy \
    --role-name "$IAM_ROLE_NAME" \
    --policy-arn="$IAM_POLICY_ARN"
kubectl apply -f "https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/$VERSION/docs/examples/rbac-role.yaml"
OIDC_PROVIDER=$(aws eks describe-cluster \
    --region "$REGION" \
    --name "$CLUSTER" \
    --query "cluster.identity.oidc.issuer" \
    --output text \
    | sed -e "s/^https:\/\///")
TMPFILE=$(mktmp)
cat > "$TMPFILE" <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::${AWS_ACCOUNT_ID}:oidc-provider/${OIDC_PROVIDER}"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "${OIDC_PROVIDER}:sub": "system:serviceaccount:kube-system:alb-ingress-controller"
        }
      }
    }
  ]
}
EOF
aws iam create-role \
    --role-name "$IAM_ROLE_NAME" \
    --assume-role-policy-document "file://$TMPFILE" \
    --description "EKS ALB Ingress controller"
kubectl apply -f "https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/$VERSION/docs/examples/alb-ingress-controller.yaml"
kubectl annotate serviceaccount \
    --overwrite \
    -n kube-system \
    alb-ingress-controller \
    "eks.amazonaws.com/role-arn=arn:aws:iam::$AWS_ACCOUNT_ID:role/$IAM_ROLE_NAME"
cat <<EOF
The AWS documentation on setting up an ALB Ingress controller states:

    Add a line for the cluster name after the --ingress-class=alb line. 
    If you're running the ALB Ingress Controller on Fargate, then you must
    also add the lines for the VPC ID, and AWS Region name of your cluster.
    Once you've added the appropriate lines, save and close the file. 


A sample would be:
 spec:
      containers:
      - args:
        - --ingress-class=alb
        - --cluster-name=$CLUSTER
        - --aws-vpc-id=vpc-03468a8157edca5bd
        - --aws-region=$REGION

Hit enter to run this command to edit the file:

    kubectl edit deployment.apps/alb-ingress-controller -n kube-system

EOF
#shellcheck disable=SC2034
read -r x
kubectl edit deployment.apps/alb-ingress-controller -n kube-system
echo "Sleeping for 5 seconds to let the ingress controller activate"
sleep 5
echo "Now running: kubectl get pods -n kube-system"
kubectl get pods -n kube-system

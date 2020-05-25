#!/usr/bin/env bash
set -euo pipefail
echo "Deploy ALB Ingress Controller"
echo " adapted from https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html"

CLUSTER=${1:?You must specify the name of the EKS cluster.}
REGION=${2:-us-east-2}
VERSION=${3:-v1.1.4}

AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query 'Account' --output text)
IAM_ROLE_NAME="eks-alb-ingress-controller"
IAM_POLICY_NAME="ALBIngressControllerIAMPolicy"
EKS_CONTEXT="arn:aws:eks:$REGION:$AWS_ACCOUNT_ID:cluster/$CLUSTER"
SLEEP_DURATION=10

echo "Switching context to $EKS_CONTEXT"
kubectl config use-context "$EKS_CONTEXT"
echo "Associating IAM OIDC provider"
set +e
eksctl utils associate-iam-oidc-provider \
    --region "$REGION" \
    --cluster "$CLUSTER" \
    --approve
set -e
echo -n "Finding OIDC provider: "
OIDC_PROVIDER=$(aws eks describe-cluster \
    --region "$REGION" \
    --name "$CLUSTER" \
    --query "cluster.identity.oidc.issuer" \
    --output text \
    | sed -e "s/^https:\/\///")
echo $OIDC_PROVIDER
echo "Getting IAM role"
AWS_IAM_ROLE=$(aws iam get-role \
    --role-name "$IAM_ROLE_NAME" \
    --query Role.Arn \
    --output text)
if [[ -z "$AWS_IAM_ROLE" ]]; then
    echo "Creating IAM Role"

    TMPFILE=$(mktemp)
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
fi
#shellcheck disable=SC2016
IAM_POLICY_ARN=$(aws iam list-policies \
    --query 'Policies[?PolicyName==`ALBIngressControllerIAMPolicy`].Arn' \
    --output text)
if [[ -z "$IAM_POLICY_ARN" ]]; then
    echo "Creating IAM policy $IAM_POLICY_NAME"
    IAM_POLICY_ARN=$(aws iam create-policy \
        --policy-name "$IAM_POLICY_NAME" \
        --policy-document "https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/$VERSION/docs/examples/iam-policy.json" \
        --query 'Policy.Arn' \
        --output text)
fi
echo "Attaching IAM Role Policy"
aws iam attach-role-policy \
    --role-name "$IAM_ROLE_NAME" \
    --policy-arn="$IAM_POLICY_ARN"
echo "Applying RBAC role config"
kubectl apply -f "https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/$VERSION/docs/examples/rbac-role.yaml"
echo "Applying ingress controller config"
kubectl apply -f "https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/$VERSION/docs/examples/alb-ingress-controller.yaml"
echo "Annotating alb-ingress-controller service account with IAM role"
kubectl annotate serviceaccount \
    --overwrite \
    -n kube-system \
    alb-ingress-controller \
    "eks.amazonaws.com/role-arn=arn:aws:iam::$AWS_ACCOUNT_ID:role/$IAM_ROLE_NAME"
echo "Getting VPC ID"
AWS_VPC_ID=$(aws eks describe-cluster \
    --name "$CLUSTER" \
    --region "$REGION" \
    --query 'cluster.resourcesVpcConfig.vpcId' \
    --output text)
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
        - --aws-vpc-id=$AWS_VPC_ID
        - --aws-region=$REGION

Hit enter to run this command to edit the file:

    kubectl edit deployment.apps/alb-ingress-controller -n kube-system

EOF
#shellcheck disable=SC2034
read -r x
kubectl edit deployment.apps/alb-ingress-controller -n kube-system
echo "Sleeping for $SLEEP_DURATION seconds to let the ingress controller activate"
sleep $SLEEP_DURATION
echo "Now running: kubectl get pods -n kube-system"
kubectl get pods -n kube-system

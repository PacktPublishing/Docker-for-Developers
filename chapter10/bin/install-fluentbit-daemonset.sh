#!/usr/bin/env bash
set -euo pipefail
# Thanks https://stackoverflow.com/a/246128
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
echo "Install fluentbit daemonset"
echo " adapted from https://aws.amazon.com/blogs/opensource/centralized-container-logging-fluent-bit/"
echo " with changes to support the AWS EKS QuickStart CloudFormation templates"

CF_STACK=${1:?You must specify the name of the AWS EKS Quickstart CloudFormation stack.}
REGION=${2:-us-east-2}
NAMESPACE=fluentbit-system

#shellcheck disable=SC2016
EKSSTACK=$(
    aws cloudformation describe-stack-resources \
        --region "$REGION" \
        --stack-name "$CF_STACK" \
        --query 'StackResources[?LogicalResourceId==`EKSStack`].PhysicalResourceId | [0]' \
        --output text \
   | cut -d: -f 6 \
   | cut -d/ -f 2
)
echo "EKSStack=$EKSSTACK"
#shellcheck disable=SC2016
ROLE_NAME=$(
    aws cloudformation describe-stacks \
        --region "$REGION" \
        --stack-name "$EKSSTACK" \
        --query 'Stacks[0].Outputs[?OutputKey==`NodeInstanceRoleArn`].OutputValue | [0]' \
        --output text \
        | cut -d/ -f2
)
echo "ROLE_NAME=$ROLE_NAME"

aws iam put-role-policy \
    --role-name "$ROLE_NAME" \
    --policy-name FluentBit-DS \
    --policy-document "file://$DIR/../eks-fluent-bit-daemonset-policy.json"

kubectl get namespace "$NAMESPACE" \
    || kubectl create namespace "$NAMESPACE"
kubectl -n "$NAMESPACE" get sa fluentbit \
    || kubectl -n "$NAMESPACE" create sa fluentbit
kubectl -n "$NAMESPACE" apply -f "$DIR/../eks-fluent-bit-daemonset-rbac.yaml"

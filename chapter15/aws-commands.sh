#!/bin/bash


# Update with your function and account details
aws events put-rule --name PacktContainerSecurity --event-pattern "{\"source\":[\"aws.guardduty\"]}"
aws events put-targets --rule PacktContainerSecurity --targets Id=1,Arn=arn:aws:lambda:<zone>:<ARN digits>:function:<function>
aws lambda add-permission --function-name <function> --statement-id 1 --action 'lambda:InvokeFunction' --principal events.amazonaws.com



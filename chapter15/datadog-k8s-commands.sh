#!/bin/bash

helm install datadog-agent -f values.yaml  --set datadog.apiKey={API KEY} stable/datadog

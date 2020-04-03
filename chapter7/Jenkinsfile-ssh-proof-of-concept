#!/usr/bin/env groovy
pipeline {
   agent any
   stages {
      stage('SSH') {
         steps {
            withCredentials([sshUserPrivateKey(
                credentialsId: 'jenkins.shipit', 
                keyFileVariable: 'keyfile')]) {
                    sh '''
prod=centos@192.2.0.10
cmd="docker ps"
ssh -i "$keyfile" -o StrictHostKeyChecking=no $prod $cmd
                       '''
                }
         }
      }
   }
}


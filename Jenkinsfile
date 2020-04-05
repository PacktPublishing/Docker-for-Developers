#!/usr/bin/env groovy
def appName = 'shipitclicker'
def dockerfile = 'chapter7/Dockerfile'
def registry = 'https://registry-1.docker.io/'
def getImageName(appName) {
  withCredentials([[$class: 'UsernamePasswordMultiBinding',
    credentialsId: 'shipit.dockerhub.id',
    usernameVariable: 'dh_user',
    passwordVariable: 'dh_password']]) {
      "${dh_user}/${appName}:${env.BUILD_ID}"
  }
}
def getTarget() {
  env.BRANCH_NAME == 'staging' ? 'staging' : 'prod'
}
pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        checkout scm
        script {
          docker.withRegistry(registry, 'shipit.dockerhub.id') {
            def image = docker.build(
              getImageName(appName),
              "-f ${dockerfile} --network host ./chapter7"
            )
            image.push()
            }
          }
      }
    }
    stage('deploy') {
      when {
        anyOf {
          branch 'master'
          branch 'staging'
        }
      }
      steps {
        echo "BRANCH_NAME is ${env.BRANCH_NAME}"
        echo "Deploying to ${getTarget()}"
        withCredentials([sshUserPrivateKey(
          credentialsId: 'jenkins.shipit',
          keyFileVariable: 'keyfile')]) {
            sh """
               set -a
               target=${getTarget()}
               image=${getImageName(appName)}
               keyfile=${keyfile}
               ./chapter7/bin/ssh-dep.sh
               """
          }
      }
    }
  }
}

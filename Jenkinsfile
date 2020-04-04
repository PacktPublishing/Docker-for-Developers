#!/usr/bin/env groovy
def appName = 'shipitclicker'
def dockerfile = 'chapter7/Dockerfile'
def registry = 'https://registry-1.docker.io/'
def getImageName() = {
  withCredentials([[$class: 'UsernamePasswordMultiBinding',
    credentialsId: 'shipit.dockerhub.id',
    usernameVariable: 'dh_user']) {
      return = "${env.dh_user}/${appName}:${env.BUILD_ID}"
  }
}
pipeline {
  agent any
  environment {
      imageName = getImageName()
  }
  stages {
    stage('build') {
      steps {
        checkout scm
        script {
          docker.withRegistry(registry, 'shipit.dockerhub.id') {
            def image = docker.build(
              env.imageName,
              "-f ${dockerfile} --network host ./chapter7"
            )
            image.push()
            }
          }
      }
    }
    stage('deploy') {
      steps {
        withCredentials([sshUserPrivateKey(
          credentialsId: 'jenkins.shipit',
          keyFileVariable: 'keyfile')]) {
            sh """
               set -a
               image=${env.imageName}
               keyfile=${keyfile}
               ./chapter7/bin/ssh-dep.sh
               """
          }
      }
    }
  }
}

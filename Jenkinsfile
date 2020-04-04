#!/usr/bin/env groovy
def dockerfile = 'chapter7/Dockerfile'
def registry = 'https://registry-1.docker.io/'
def organization = 'dockerfordevelopers/'
def appName = 'shipitclicker'
pipeline {
  agent any
  environment {
    image = "${env.organization}${env.appName}:${env.BUILD_ID}"
  }
  stages {
    stage('build') {
      steps {
        checkout scm
        script {
          docker.withRegistry(registry, 'shipit.dockerhub.id') {
            def image = docker.build(
              "${env.organization}${env.appName}:${env.BUILD_ID}",
              "-f ${env.dockerfile} --network host ./chapter7")
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
            sh 'keyfile=${keyfile} ./chapter7/bin/ssh-dep.sh'
          }
      }
    }
  }
}

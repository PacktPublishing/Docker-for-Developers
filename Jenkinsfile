#!/usr/bin/env groovy
pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                checkout scm
                script {
                    def dockerfile = 'chapter7/Dockerfile'
                    def registry = 'https://registry-1.docker.io/'
                    docker.withRegistry(registry, 'shipit.dockerhub.id') {
                        def image = docker.build(
                            "shipitclicker:${env.BUILD_ID}",
                            "-f ${dockerfile} ./chapter7")
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

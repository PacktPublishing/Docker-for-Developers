pipeline {
    agent { docker { image 'alpine:20191114' } }
    stages {
        stage('build') {
            steps {
                sh 'echo "Hello, World (Docker for Developers Chapter 7)"'
            }
        }
    }
}

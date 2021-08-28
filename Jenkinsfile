pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                    sh "npm install"
                    sh "ng build --prod"
                }
        }
        stage('Deploy Docker') {
            steps {
                        sh "docker-compose up -d"
                }
            }
    }
}
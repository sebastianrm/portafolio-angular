pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                    echo 'Pulling...' + env.BRANCH_NAME
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
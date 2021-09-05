pipeline {
    agent any

    stages {
        stage('main') {
            when {
                branch 'main'
            }
            steps {
                echo 'MAIN branch'
            }
        }
        stage('qa') {
            when {
                branch 'qa'
            }
            steps {
                echo 'qa branch'
            }
        }
        stage('prod') {
            when {
                branch 'prod'
            }

            steps {
                echo 'prod branch'
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
    }
}
pipeline {
    agent any

    stages {
        stage('develop') {
            when {
                branch 'dev'
            }
            steps {
                echo 'develop branch'
            }
        }
        stage('QA') {
            when {
                branch 'QA'
            }
            steps {
                echo 'develop branch'
            }
        }
        stage('production') {
            when {
                branch 'prod'
            }

            steps {
                echo 'develop branch'
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
    }
}
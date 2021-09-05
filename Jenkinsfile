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

                echo 'Buils Steps .....'
                sh "npm install"
                sh "ng build --prod"

                echo 'Deploy Docker Steps .....'
                sh "docker-compose up -d"
            }
        }
    }
}
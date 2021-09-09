pipeline {
    agent any

    stages {
        stage('clean') {

            steps {
            echo 'Limpia directorio de trabajo'
            deleteDir() /* clean up our workspace */
            }
            
        }

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
    post {
        always {
            echo 'Limpia directorio de trabajo'
            deleteDir() /* clean up our workspace */
        }
        success {
            echo 'I succeeded!'
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            echo 'I failed :('
        }
        changed {
            echo 'Things were different before...'
        }
    }

}
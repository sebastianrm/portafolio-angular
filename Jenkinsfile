pipeline {

    agent any

    stages {

        stage('Build') { // prepare angular demo app
            sh 'npm install'
        }

        stage('Build PROD') { // prepare angular demo app
            sh 'ng build --prod'
        }

        stage('Depoy Docker') { // prepare angular demo app
            sh 'docker-compose up'
        }
    }
}
pipeline {

    agent any

    stages {

        stage('Prepare Angular CLI') { // install global angular cli
            sh 'npm -g install @angular/cli'
            sh 'ng --version'
        }

        stage('Build') { // prepare angular demo app
            sh 'npm run build'
        }

        stage('Build PROD') { // prepare angular demo app
            sh 'ng build --prod'
        }

        stage('Depoy Docker') { // prepare angular demo app
            sh 'docker-compose up'
        }
    }
}
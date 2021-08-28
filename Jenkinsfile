pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
                    sh 'npm install'
                    sh 'ng build --prod'
                }
            }
        }
   stage('Deploy Docker') {
       steps {
            docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                 sh "docker-compose up"
            }
       }
    }
}
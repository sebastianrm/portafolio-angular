node {
   def commit_id
   stage('Build') {
     checkout scm
     sh "npm install"                        
   }
   stage('Build PROD') {
     nodejs(nodeJSInstallationName: 'nodejs') {
       sh "ng build --prod"
     }
   }
   stage('Deploy Docker') {
     docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
       sh "docker-compose up"
     }
   }
}
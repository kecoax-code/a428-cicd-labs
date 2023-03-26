node {
    docker.image('node:16-buster-slim').inside('-p 3000:3000'){
        stage('Build') {
            checkout scm
            sh 'npm install'
        }
        stage('Test') {
            sh './jenkins/scripts/test.sh'
        }
        stage('Manual Approval') {
            input message: 'Lanjutkan ke tahap Deploy?' 
        }
        stage('Deploy') {
            sh './jenkins/scripts/deliver.sh' 
            echo 'Kamu dapat access aplikasi ( http://207.148.116.177:3000 ) hanya 1 menit!'
            sleep 60
            sh './jenkins/scripts/kill.sh' 
        }
    }
}
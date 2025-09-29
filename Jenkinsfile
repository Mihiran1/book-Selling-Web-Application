pipeline {
    agent any
    environment {
        // ඔබගේ Docker Hub Username/Repository Name එක මෙතන දෙන්න
        DOCKER_IMAGE = "mihiran039/bookstore-frontend" 
        // Jenkins Credentials වලට දුන්නු ID එක
        DOCKER_CREDENTIALS_ID = 'dockerhub-creds' 
    }
    stages {
        stage('Checkout Code') {
           steps {
                // ඔබගේ Git Repository එකෙන් Code එක ලබා ගැනීම
                git branch: 'main', url: 'https://github.com/Mihiran1/book-Selling-Web-Application.git' 
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Dockerfile එක භාවිතයෙන් Image එක build කිරීම
                    // BUILD_NUMBER යනු Jenkins විසින් ලබා දෙන build අංකයයි
                    docker.build("${DOCKER_IMAGE}:${env.BUILD_NUMBER}", ".") 
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                // Docker Hub Login Credentials භාවිතයෙන් Image එක push කිරීම
                withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
                    
                    // Build අංකය සහිත Image එක Push කිරීම
                    sh "docker push ${DOCKER_IMAGE}:${env.BUILD_NUMBER}"
                    
                    // 'latest' Tag එක Push කිරීම
                    sh "docker tag ${DOCKER_IMAGE}:${env.BUILD_NUMBER} ${DOCKER_IMAGE}:latest"
                    sh "docker push ${DOCKER_IMAGE}:latest"
                    
                    sh "docker logout"
                }
            }
        }
    }
}
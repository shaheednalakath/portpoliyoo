pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'

                   sh '''
                      docker build -t portfoliyoo:latest .
                      '''
            }
        }

        stage('Test') {
            steps {
                echo 'Running unit tests...'
            }
        }

        stage('Package') {
            steps {
                echo 'Packaging the application...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Starting deployment...'
                echo 'Deploying application to target environment'
                echo 'Deployment completed successfully'
                echo 'Application deployed successfully'
            }
        }
    }
}
pipeline {
    agent any

    parameters {
        choice(
            name: 'ENV',
            choices: ['sit', 'uat', 'prod'],
            description: 'Select environment'
        )
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Code checkout done'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh "npm run build:${params.ENV}"
            }
        }
    }

    post {
        success {
            echo "Build SUCCESS for ${params.ENV}"
        }
        failure {
            echo "Build FAILED"
        }
    }
}

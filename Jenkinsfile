pipeline {
    agent any

    parameters {
        choice(
            name: 'ENV',
            choices: ['sit', 'uat', 'prod'],
            description: 'Select environment'
        )
    }

    environment {
        DEPLOY_BASE = 'C:\\deployments'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat "npm run build:${params.ENV}"
            }
        }

        stage('Deploy') {
            steps {
                bat """
                if not exist %DEPLOY_BASE%\\%ENV% mkdir %DEPLOY_BASE%\\%ENV%
                rmdir /s /q %DEPLOY_BASE%\\%ENV%
                xcopy build %DEPLOY_BASE%\\%ENV% /E /I /Y
                """
            }
        }
    }

    post {
        success {
            echo "Deployment successful for ${params.ENV}"
        }
    }
}

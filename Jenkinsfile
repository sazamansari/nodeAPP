pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = 'ap-south-1' // Set your AWS region
        AWS_CREDENTIALS_ID = 'AKIARNCOVCALJZN6L3WL' // ID for your stored AWS credentials in Jenkins
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'git@github.com:sazamansari/nodeAPP.git' // Replace with your repository URL
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Run your tests here
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Assuming you have the AWS CodeDeploy plugin installed and configured
                    awsCodeDeploy(
                        applicationName: 'my-app-deploy', // Replace with your AWS CodeDeploy application name
                        deploymentGroupName: 'dg-testapp', // Replace with your AWS CodeDeploy deployment group name
                        deploymentConfig: 'CodeDeployDefault.OneAtATime',
                        region: ap-south-1,
                        credentialsId: AKIARNCOVCALJZN6L3WL,
                        bundleType: 'zip', // Bundle type (zip or tar)
                        fileExistsBehavior: 'OVERWRITE'
                    )
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment succeeded!'
        }

        failure {
            echo 'Deployment failed.'
        }

        always {
            echo 'Cleaning up workspace'
            cleanWs() // Cleans up the workspace after the pipeline execution
        }
    }
}

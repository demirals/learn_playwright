pipeline {
  agent any 
  stages {
    stage('Pull') {
      steps {
        sh 'docker pull mcr.microsoft.com/playwright:v1.17.2-focal'
      }
    }
    stage('Run') {
      steps {
        sh 'docker run -it mcr.microsoft.com/playwright:v1.17.2-focal'
      }
    }
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
    }
  }
}
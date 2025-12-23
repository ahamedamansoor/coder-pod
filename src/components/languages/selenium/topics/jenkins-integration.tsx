'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Code,
  Copy,
  CheckCircle,
  AlertCircle,
  Server,
  Settings,
  Play,
  Pause,
  RefreshCw,
  GitBranch,
  Clock,
  FileText,
  Terminal,
  Package,
  Shield,
  Zap,
  Activity,
  Download,
  Upload
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function JenkinsIntegrationComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'pipeline' | 'scripted' | 'declarative'>('declarative');
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const jenkinsData = {
    pipeline: [
      {
        name: 'Basic Pipeline Setup',
        description: 'Configure a basic Jenkins pipeline for Selenium testing',
        causes: ['Missing Jenkinsfile', 'Incorrect pipeline syntax', 'Plugin dependencies', 'Node configuration'],
        solutions: ['Create Jenkinsfile in root', 'Use correct pipeline syntax', 'Install required plugins', 'Configure agent nodes'],
        code: String.raw`pipeline {
    agent any
    
    tools {
        maven 'Maven-3.8.6'
        jdk 'JDK-11'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-org/selenium-tests.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }
        
        stage('Test') {
            steps {
                sh 'mvn test -Dsuite=smoke'
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'target/surefire-reports',
                        reportFiles: 'index.html',
                        reportName: 'TestNG Report'
                    ])
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            emailext (
                subject: "Failed Pipeline: \${env.JOB_NAME} - \${env.BUILD_NUMBER}",
                body: "Check console output at \${env.BUILD_URL}",
                to: "team@example.com"
            )
        }
    }
}`
      },
      {
        name: 'Parallel Test Execution',
        description: 'Run Selenium tests in parallel across multiple browsers',
        causes: ['Sequential execution', 'Resource constraints', 'Browser availability', 'Test distribution'],
        solutions: ['Use parallel stages', 'Configure multiple agents', 'Implement browser matrix', 'Optimize test distribution'],
        code: `pipeline {
    agent any
    
    parameters {
        choice(
            name: 'BROWSER',
            choices: ['chrome', 'firefox', 'edge'],
            description: 'Select browser for testing'
        )
        choice(
            name: 'ENVIRONMENT',
            choices: ['dev', 'staging', 'prod'],
            description: 'Select test environment'
        )
    }
    
    stages {
        stage('Parallel Tests') {
            parallel {
                stage('Chrome Tests') {
                    steps {
                        script {
                            env.BROWSER = 'chrome'
                            sh 'mvn test -Dbrowser=chrome -Dparallel=tests -DthreadCount=4'
                        }
                    }
                    post {
                        always {
                            publishTestResults testResultsPattern: 'target/surefire-reports/chrome/*.xml'
                        }
                    }
                }
                
                stage('Firefox Tests') {
                    steps {
                        script {
                            env.BROWSER = 'firefox'
                            sh 'mvn test -Dbrowser=firefox -Dparallel=tests -DthreadCount=4'
                        }
                    }
                    post {
                        always {
                            publishTestResults testResultsPattern: 'target/surefire-reports/firefox/*.xml'
                        }
                    }
                }
                
                stage('Edge Tests') {
                    steps {
                        script {
                            env.BROWSER = 'edge'
                            sh 'mvn test -Dbrowser=edge -Dparallel=tests -DthreadCount=4'
                        }
                    }
                    post {
                        always {
                            publishTestResults testResultsPattern: 'target/surefire-reports/edge/*.xml'
                        }
                    }
                }
            }
        }
    }
}`
      },
      {
        name: 'Docker Integration',
        description: 'Run Selenium tests in Docker containers',
        causes: ['Environment inconsistencies', 'Browser version issues', 'Dependency conflicts', 'Setup complexity'],
        solutions: ['Use Docker containers', 'Maintain browser versions', 'Isolate dependencies', 'Simplify setup'],
        code: `pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'your-registry.com'
        SELENIUM_HUB = 'http://selenium-hub:4444'
    }
    
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    def appImage = docker.build("\${DOCKER_REGISTRY}/selenium-tests:\${BUILD_NUMBER}")
                    appImage.push()
                    appImage.push('latest')
                }
            }
        }
        
        stage('Start Selenium Grid') {
            steps {
                sh '''
                    docker-compose -f docker-compose.yml up -d
                    sleep 30
                '''
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
                    docker.image("\${DOCKER_REGISTRY}/selenium-tests:\${BUILD_NUMBER}").inside {
                        sh 'mvn test -Dselenium.grid.url=\${SELENIUM_HUB}'
                    }
                }
            }
        }
        
        stage('Cleanup') {
            steps {
                sh 'docker-compose -f docker-compose.yml down'
            }
            post {
                always {
                    cleanWs()
                }
            }
        }
    }
}`
      }
    ],
    scripted: [
      {
        name: 'Scripted Pipeline Example',
        description: 'Advanced scripted pipeline with conditional logic',
        causes: ['Complex requirements', 'Dynamic configuration', 'Conditional execution', 'Advanced error handling'],
        solutions: ['Use scripted syntax', 'Implement Groovy logic', 'Add conditional stages', 'Enhance error handling'],
        code: `node {
    def browsers = ['chrome', 'firefox', 'edge']
    def testResults = [:]
    
    try {
        stage('Checkout') {
            git url: 'https://github.com/your-org/selenium-tests.git', branch: 'main'
        }
        
        stage('Setup') {
            sh 'mvn clean install -DskipTests'
        }
        
        stage('Parallel Browser Tests') {
            parallel browsers.collectEntries { browser ->
                ["Test on \${browser}": {
                    node {
                        stage("\${browser.capitalize()} Tests") {
                            try {
                                sh "mvn test -Dbrowser=\${browser} -Dreport=\${browser}"
                                testResults[browser] = 'SUCCESS'
                            } catch (Exception e) {
                                testResults[browser] = 'FAILED'
                                currentBuild.result = 'UNSTABLE'
                                throw e
                            } finally {
                                publishTestResults testResultsPattern: "target/surefire-reports/\${browser}/*.xml"
                                publishHTML([
                                    reportDir: "target/reports/\${browser}",
                                    reportFiles: 'index.html',
                                    reportName: "\${browser.capitalize()} Report"
                                ])
                            }
                        }
                    }
                }]
            }
        }
        
        stage('Generate Report') {
            script {
                def summary = testResults.collect { k, v -> "\${k}: \${v}" }.join('\\n')
                writeFile file: 'test-summary.txt', text: summary
                archiveArtifacts artifacts: 'test-summary.txt'
            }
        }
        
    } catch (Exception e) {
        currentBuild.result = 'FAILURE'
        throw e
    } finally {
        stage('Cleanup') {
            cleanWs()
        }
        
        stage('Notifications') {
            script {
                def subject = "Build " + (currentBuild.result ?: 'SUCCESS') + ": " + env.JOB_NAME + " #" + env.BUILD_NUMBER
                def body = "Build Status: " + (currentBuild.result ?: 'SUCCESS') + "\\n" +
                          "Test Results: " + testResults.collect { k, v -> k + ": " + v }.join(', ') + "\\n" +
                          "Console Output: " + env.BUILD_URL + "console"
                
                emailext(
                    subject: subject,
                    body: body,
                    to: 'team@example.com',
                    attachLog: true
                )
            }
        }
    }
}`
      }
    ],
    declarative: [
      {
        name: 'Multi-Environment Pipeline',
        description: 'Deploy and test across multiple environments',
        causes: ['Environment-specific tests', 'Configuration management', 'Deployment complexity', 'Environment isolation'],
        solutions: ['Environment-specific stages', 'Configuration files', 'Automated deployment', 'Environment isolation'],
        code: `pipeline {
    agent any
    
    parameters {
        choice(
            name: 'ENVIRONMENT',
            choices: ['dev', 'staging', 'prod'],
            description: 'Target environment for testing'
        )
        booleanParam(
            name: 'RUN_PERFORMANCE_TESTS',
            defaultValue: false,
            description: 'Run performance tests along with functional tests'
        )
    }
    
    environment {
        APP_URL = (params.ENVIRONMENT == 'prod' ? 'https://app.example.com' : 
                    params.ENVIRONMENT == 'staging' ? 'https://staging.example.com' : 
                    'https://dev.example.com')
        TEST_CONFIG = params.ENVIRONMENT + '-config.properties'
    }
    
    stages {
        stage('Validate Environment') {
            steps {
                script {
                    if (params.ENVIRONMENT == 'prod') {
                        input message: 'Deploy to production?', ok: 'Deploy'
                    }
                }
                sh "curl -f " + APP_URL + "/health || exit 1"
            }
        }
        
        stage('Load Configuration') {
            steps {
                configFileProvider([
                    configFile(fileId: (params.ENVIRONMENT + "-config"), variable: 'CONFIG_FILE')
                ]) {
                    sh 'cp ' + CONFIG_FILE + ' src/test/resources/config.properties'
                }
            }
        }
        
        stage('Deploy Application') {
            when {
                not { 
                    anyOf {
                        branch 'main'
                        changeRequest()
                    }
                }
            }
            steps {
                script {
                    def deployScript = "\${params.ENVIRONMENT}/deploy.sh"
                    sh "./\${deployScript}"
                }
            }
        }
        
        stage('Functional Tests') {
            steps {
                sh "mvn test -Dapp.url=\${APP_URL} -Dconfig.file=\${TEST_CONFIG}"
            }
            post {
                always {
                    publishTestResults testResultsPattern: 'target/surefire-reports/*.xml'
                    publishHTML([
                        reportDir: 'target/site/serenity',
                        reportFiles: 'index.html',
                        reportName: 'Serenity Report'
                    ])
                }
            }
        }
        
        stage('Performance Tests') {
            when {
                expression { params.RUN_PERFORMANCE_TESTS }
            }
            steps {
                sh "mvn gatling:test -Dgatling.simulationClass=tests.PerformanceTest"
            }
            post {
                always {
                    publishHTML([
                        reportDir: 'target/gatling/results',
                        reportFiles: 'index.html',
                        reportName: 'Gatling Performance Report'
                    ])
                }
            }
        }
        
        stage('Security Tests') {
            when {
                branch 'main'
            }
            steps {
                sh "mvn zap:analyze -Dzap.target=\${APP_URL}"
            }
            post {
                always {
                    publishHTML([
                        reportDir: 'target/zap',
                        reportFiles: 'index.html',
                        reportName: 'OWASP ZAP Report'
                    ])
                }
            }
        }
    }
    
    post {
        always {
            archiveArtifacts artifacts: 'target/**/*', allowEmptyArchive: true
            cleanWs()
        }
        success {
            script {
                if (params.ENVIRONMENT == 'prod') {
                    slackSend(
                        channel: '#deployments',
                        color: 'good',
                        message: "✅ Production deployment successful: \${env.JOB_NAME} #\${env.BUILD_NUMBER}"
                    )
                }
            }
        }
        failure {
            script {
                slackSend(
                    channel: '#alerts',
                    color: 'danger',
                    message: "❌ Pipeline failed: \${env.JOB_NAME} #\${env.BUILD_NUMBER}\\nCheck: \${env.BUILD_URL}console"
                )
            }
        }
    }
}`
      }
    ]
  };

  const currentFeatures = jenkinsData[selectedLanguage];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Server}
        category="Selenium · CI/CD Integration"
        title="Jenkins Integration"
        description="Configure Jenkins pipelines for automated Selenium testing with detailed setup and examples"
        colorTheme="blue"
        badges={[
          { label: 'CI/CD', variant: 'secondary' },
          { label: 'Automation', variant: 'info' },
          { label: 'Pipeline', variant: 'secondary' },
        ]}
      />

      {/* Jenkins Pipeline Flow Diagram */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Jenkins Pipeline Flow
          </CardTitle>
          <CardDescription>Visual representation of Jenkins CI/CD pipeline for Selenium testing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Flow Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-x-auto">
              <div className="flex flex-col items-center min-w-[320px] max-w-2xl mx-auto gap-0">
                {/* Code Commit */}
                <div className="bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-100 text-center">Code Commit</div>
                  <div className="text-xs text-green-700 dark:text-green-300 text-center">Git push to repository</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600 -my-0"></div>
                
                {/* Jenkins Trigger */}
                <div className="bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">Jenkins Trigger</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 text-center">Webhook/Polling</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-blue-400 dark:bg-blue-600 -my-0"></div>
                
                {/* Build Stage */}
                <div className="bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Build Stage</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300 text-center">Compile & Package</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-purple-400 dark:bg-purple-600 -my-0"></div>
                
                {/* Test Execution */}
                <div className="bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-orange-900 dark:text-orange-100 text-center">Test Execution</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300 text-center">Selenium Tests</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-orange-400 dark:bg-orange-600 -my-0"></div>
                
                {/* Reports & Results */}
                <div className="bg-red-100 dark:bg-red-900/40 px-6 py-3 rounded-lg border-2 border-red-300 dark:border-red-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-red-900 dark:text-red-100 text-center">Reports & Results</div>
                  <div className="text-xs text-red-700 dark:text-red-300 text-center">TestNG, HTML, Screenshots</div>
                </div>
              </div>
            </div>
            
            {/* Pipeline Types Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Pipeline Types</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Declarative Pipeline</li>
                  <li>• Scripted Pipeline</li>
                  <li>• Shared Libraries</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Build Tools</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Maven Integration</li>
                  <li>• Gradle Support</li>
                  <li>• Docker Integration</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Test Features</h5>
                </div>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Parallel Execution</li>
                  <li>• Test Reports</li>
                  <li>• Notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pipeline Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-600" />
            Pipeline Examples
          </CardTitle>
          <CardDescription>
            Different Jenkins pipeline types and configurations for Selenium testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Pipeline Type Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            {(['declarative', 'scripted', 'pipeline'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedLanguage(type)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedLanguage === type
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Feature Cards */}
      <div className="space-y-6">
        {currentFeatures.map((feature, index) => (
          <Card 
            key={index} 
            className={`border-2 transition-all cursor-pointer ${
              selectedFeature === feature.name 
                ? 'border-blue-500 shadow-lg bg-blue-50 dark:bg-blue-950/20' 
                : 'border-slate-200 dark:border-slate-700 hover:border-blue-300'
            }`}
            onClick={() => setSelectedFeature(selectedFeature === feature.name ? null : feature.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selectedFeature === feature.name
                    ? 'bg-blue-100 dark:bg-blue-900/40'
                    : 'bg-slate-100 dark:bg-slate-900/40'
                }`}>
                  <Server className={`w-6 h-6 ${
                    selectedFeature === feature.name
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-400'
                  }`} />
                </div>
                {feature.name}
                <Badge variant={selectedFeature === feature.name ? "default" : "secondary"}>
                  {selectedLanguage}
                </Badge>
              </CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            
            {selectedFeature === feature.name && (
              <CardContent className="space-y-4">
                {/* Causes and Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Common Issues
                    </h5>
                    <ul className="space-y-1">
                      {feature.causes.map((cause, i) => (
                        <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Solutions
                    </h5>
                    <ul className="space-y-1">
                      {feature.solutions.map((solution, i) => (
                        <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Code Example */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Jenkinsfile
                    </h5>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(feature.code, `${feature.name} code`)}
                      className="gap-2"
                    >
                      <Copy className="w-3 h-3" />
                      Copy
                    </Button>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto text-slate-800 dark:text-slate-300">
                      <code>{feature.code}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Best Practices */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Jenkins Best Practices
          </CardTitle>
          <CardDescription>Proven strategies for effective Jenkins and Selenium integration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Pipeline Optimization</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Parallel Execution</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Run tests in parallel across multiple browsers and environments to reduce execution time.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <RefreshCw className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Docker Integration</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Use Docker containers for consistent environments and browser versions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Monitoring & Reporting</h5>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Test Reports</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Generate comprehensive HTML reports with screenshots and test artifacts.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Notifications</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Configure email, Slack, or Teams notifications for build status and test results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

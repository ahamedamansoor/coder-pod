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
  GitBranch,
  Play,
  Pause,
  RefreshCw,
  Clock,
  FileText,
  Terminal,
  Package,
  Shield,
  Zap,
  Activity,
  Download,
  Upload,
  Layers,
  Server,
  Container,
  Cpu,
  Database
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function GitLabCICDComponent() {
  const { toast } = useToast();
  const [selectedPipeline, setSelectedPipeline] = React.useState<'basic' | 'docker' | 'advanced'>('basic');
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const gitlabData = {
    basic: [
      {
        name: 'Basic Selenium Pipeline',
        description: 'Simple GitLab CI/CD pipeline for Selenium testing with Maven',
        causes: ['Missing .gitlab-ci.yml', 'Incorrect runner configuration', 'Browser installation issues', 'Test execution failures'],
        solutions: ['Create proper .gitlab-ci.yml', 'Configure GitLab Runner', 'Install browsers via Docker', 'Handle test failures properly'],
        code: `# .gitlab-ci.yml

stages:
  - build
  - test
  - report

variables:
  MAVEN_OPTS: "-Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository"
  SELENIUM_BROWSER: "chrome"

cache:
  paths:
    - .m2/repository/
  key: "$CI_COMMIT_REF_SLUG"

build:
  stage: build
  image: maven:3.8.6-openjdk-11
  script:
    - echo "Building the application..."
    - mvn clean compile
  artifacts:
    paths:
      - target/
    expire_in: 1 hour

selenium-tests:
  stage: test
  image: maven:3.8.6-openjdk-11
  services:
    - name: selenium/standalone-chrome:latest
      alias: selenium
  variables:
    SELENIUM_REMOTE_URL: "http://selenium:4444/wd/hub"
  before_script:
    - echo "Setting up test environment..."
    - apt-get update -qqy
    - apt-get install -y wget gnupg
    - wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
    - echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list
    - apt-get update -qqy
    - apt-get install -y google-chrome-stable
    - chromedriver --version
  script:
    - echo "Running Selenium tests..."
    - mvn test 
      -Dbrowser=chrome 
      -Dselenium.remote.url=$SELENIUM_REMOTE_URL
      -Dsurefire.suiteXmlFiles=testng.xml
  artifacts:
    when: always
    paths:
      - target/surefire-reports/
      - target/screenshots/
    reports:
      junit: target/surefire-reports/*.xml
    expire_in: 1 week
  dependencies:
    - build

test-report:
  stage: report
  image: alpine:latest
  script:
    - echo "Generating test report..."
    - apk add --no-cache curl
    - |
      echo "# Test Report" > test-report.md
      echo "Pipeline: $CI_PIPELINE_URL" >> test-report.md
      echo "Commit: $CI_COMMIT_SHORT_SHA" >> test-report.md
      echo "Branch: $CI_COMMIT_REF_NAME" >> test-report.md
      cat target/surefire-reports/*.xml | grep -o 'tests="[0-9]*"' | head -1 >> test-report.md
  artifacts:
    paths:
      - test-report.md
    expire_in: 1 month
  dependencies:
    - selenium-tests`
      },
      {
        name: 'Multi-Browser Testing',
        description: 'Test across multiple browsers using parallel jobs',
        causes: ['Single browser testing', 'Cross-browser compatibility', 'Limited test coverage', 'Sequential execution'],
        solutions: ['Parallel job execution', 'Browser matrix strategy', 'Docker containerization', 'Test distribution'],
        code: `# .gitlab-ci.yml

stages:
  - build
  - test
  - report

variables:
  MAVEN_OPTS: "-Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository"

cache:
  paths:
    - .m2/repository/
  key: "$CI_COMMIT_REF_SLUG"

build:
  stage: build
  image: maven:3.8.6-openjdk-11
  script:
    - mvn clean compile
  artifacts:
    paths:
      - target/
    expire_in: 1 hour

.chrome-tests:
  stage: test
  extends: .selenium-tests
  variables:
    SELENIUM_BROWSER: "chrome"
    BROWSER_VERSION: "latest"
  services:
    - name: selenium/standalone-chrome:latest
      alias: selenium

.firefox-tests:
  stage: test
  extends: .selenium-tests
  variables:
    SELENIUM_BROWSER: "firefox"
    BROWSER_VERSION: "latest"
  services:
    - name: selenium/standalone-firefox:latest
      alias: selenium

.edge-tests:
  stage: test
  extends: .selenium-tests
  variables:
    SELENIUM_BROWSER: "edge"
    BROWSER_VERSION: "latest"
  services:
    - name: selenium/standalone-edge:latest
      alias: selenium

.selenium-tests:
  image: maven:3.8.6-openjdk-11
  variables:
    SELENIUM_REMOTE_URL: "http://selenium:4444/wd/hub"
  before_script:
    - echo "Setting up $SELENIUM_BROWSER environment..."
  script:
    - echo "Running tests on $SELENIUM_BROWSER..."
    - mvn test 
      -Dbrowser=$SELENIUM_BROWSER 
      -Dselenium.remote.url=$SELENIUM_REMOTE_URL
  artifacts:
    when: always
    paths:
      - target/surefire-reports/
      - target/screenshots/$SELENIUM_BROWSER/
    reports:
      junit: target/surefire-reports/*.xml
    expire_in: 1 week
  dependencies:
    - build
  parallel: 3

merge-test-results:
  stage: report
  image: alpine:latest
  script:
    - echo "Merging test results..."
    - apk add --no-cache curl jq
    - |
      echo "# Combined Test Report" > combined-report.md
      echo "## Browser Test Results" >> combined-report.md
      echo "- Chrome Tests: $CHROME_TEST_STATUS" >> combined-report.md
      echo "- Firefox Tests: $FIREFOX_TEST_STATUS" >> combined-report.md
      echo "- Edge Tests: $EDGE_TEST_STATUS" >> combined-report.md
  artifacts:
    paths:
      - combined-report.md
    expire_in: 1 month
  dependencies:
    - .chrome-tests
    - .firefox-tests
    - .edge-tests`
      }
    ],
    docker: [
      {
        name: 'Docker Selenium Grid',
        description: 'Use Docker containers with Selenium Grid for scalable testing',
        causes: ['Resource constraints', 'Browser version management', 'Environment consistency', 'Scalability issues'],
        solutions: ['Docker containerization', 'Selenium Grid setup', 'Container orchestration', 'Environment isolation'],
        code: `# .gitlab-ci.yml

stages:
  - setup
  - test
  - cleanup
  - report

variables:
  DOCKER_DRIVER: overlay2
  DOCKER_TLS_CERTDIR: "/certs"

services:
  - docker:20.10.16-dind

before_script:
  - docker info
  - docker-compose --version

setup-selenium-grid:
  stage: setup
  image: docker:20.10.16
  script:
    - echo "Starting Selenium Grid..."
    - |
      cat > docker-compose.yml << EOF
      version: '3.8'
      services:
        selenium-hub:
          image: selenium/hub:4.8.0
          container_name: selenium-hub
          ports:
            - "4444:4444"
          environment:
            - GRID_MAX_SESSION=16
            - GRID_BROWSER_TIMEOUT=30000
            - GRID_TIMEOUT=30000
        
        chrome-node:
          image: selenium/node-chrome:4.8.0
          container_name: chrome-node
          depends_on:
            - selenium-hub
          environment:
            - HUB_HOST=selenium-hub
            - HUB_PORT=4444
            - NODE_MAX_SESSION=8
            - NODE_MAX_INSTANCES=8
        
        firefox-node:
          image: selenium/node-firefox:4.8.0
          container_name: firefox-node
          depends_on:
            - selenium-hub
          environment:
            - HUB_HOST=selenium-hub
            - HUB_PORT=4444
            - NODE_MAX_SESSION=8
            - NODE_MAX_INSTANCES=8
      EOF
    - docker-compose up -d
    - sleep 30
    - curl -f http://localhost:4444/wd/hub/status || exit 1
  artifacts:
    reports:
      dotenv: grid.env
    expire_in: 1 hour

selenium-tests:
  stage: test
  image: maven:3.8.6-openjdk-11
  variables:
    SELENIUM_REMOTE_URL: "http://selenium-hub:4444/wd/hub"
    MAVEN_OPTS: "-Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository"
  services:
    - name: selenium/standalone-chrome:latest
      alias: selenium
  cache:
    paths:
      - .m2/repository/
    key: "$CI_COMMIT_REF_SLUG"
  script:
    - echo "Running tests against Selenium Grid..."
    - mvn clean test 
      -Dselenium.remote.url=$SELENIUM_REMOTE_URL 
      -Dparallel=methods 
      -DthreadCount=4
  artifacts:
    when: always
    paths:
      - target/surefire-reports/
      - target/screenshots/
    reports:
      junit: target/surefire-reports/*.xml
    expire_in: 1 week
  dependencies:
    - setup-selenium-grid

cleanup-grid:
  stage: cleanup
  image: docker:20.10.16
  script:
    - echo "Cleaning up Selenium Grid..."
    - docker-compose down -v
    - docker system prune -f
  when: always
  dependencies:
    - setup-selenium-grid
    - selenium-tests

generate-report:
  stage: report
  image: alpine:latest
  script:
    - echo "Generating comprehensive report..."
    - apk add --no-cache curl jq
    - |
      echo "# Selenium Grid Test Report" > grid-test-report.md
      echo "## Pipeline Information" >> grid-test-report.md
      echo "- Pipeline: $CI_PIPELINE_URL" >> grid-test-report.md
      echo "- Commit: $CI_COMMIT_SHORT_SHA" >> grid-test-report.md
      echo "- Branch: $CI_COMMIT_REF_NAME" >> grid-test-report.md
      echo "- Grid URL: $SELENIUM_REMOTE_URL" >> grid-test-report.md
      echo "" >> grid-test-report.md
      echo "## Test Results" >> grid-test-report.md
      if [ -f "target/surefire-reports/TEST-TestSuite.xml" ]; then
        TESTS=$(grep -o 'tests="[0-9]*"' target/surefire-reports/TEST-TestSuite.xml | cut -d'"' -f2)
        FAILURES=$(grep -o 'failures="[0-9]*"' target/surefire-reports/TEST-TestSuite.xml | cut -d'"' -f2)
        ERRORS=$(grep -o 'errors="[0-9]*"' target/surefire-reports/TEST-TestSuite.xml | cut -d'"' -f2)
        echo "- Total Tests: $TESTS" >> grid-test-report.md
        echo "- Failures: $FAILURES" >> grid-test-report.md
        echo "- Errors: $ERRORS" >> grid-test-report.md
      fi
  artifacts:
    paths:
      - grid-test-report.md
    expire_in: 1 month
  dependencies:
    - selenium-tests`
      }
    ],
    advanced: [
      {
        name: 'Advanced Pipeline with Environments',
        description: 'Multi-environment pipeline with staging and production deployments',
        causes: ['Environment-specific configurations', 'Deployment complexity', 'Security concerns', 'Quality gates'],
        solutions: ['Environment variables', 'Conditional deployments', 'Security scanning', 'Automated quality gates'],
        code: `# .gitlab-ci.yml

stages:
  - validate
  - build
  - test
  - security
  - deploy-staging
  - integration-tests
  - deploy-production

variables:
  MAVEN_OPTS: "-Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository"
  SONAR_USER_HOME: "\${CI_PROJECT_DIR}/.sonar"
  CACHE_KEY: "\${CI_COMMIT_REF_SLUG}"

workflow:
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
    - if: $CI_COMMIT_TAG
    - if: $CI_MERGE_REQUEST_IID

cache:
  paths:
    - .m2/repository/
    - .sonar/cache/
  key: $CACHE_KEY

validate:
  stage: validate
  image: maven:3.8.6-openjdk-11
  script:
    - echo "Validating project structure..."
    - mvn validate
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"

build:
  stage: build
  image: maven:3.8.6-openjdk-11
  script:
    - echo "Building application..."
    - mvn clean compile package -DskipTests
  artifacts:
    paths:
      - target/*.jar
      - target/classes/
    expire_in: 1 hour
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
    - if: $CI_COMMIT_TAG
    - if: $CI_MERGE_REQUEST_IID

unit-tests:
  stage: test
  image: maven:3.8.6-openjdk-11
  script:
    - echo "Running unit tests..."
    - mvn test
  artifacts:
    when: always
    reports:
      junit: target/surefire-reports/*.xml
    paths:
      - target/surefire-reports/
    expire_in: 1 week
  coverage: '/Total coverage: (\d+\.\d+)%/'
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
    - if: $CI_COMMIT_TAG
    - if: $CI_MERGE_REQUEST_IID

selenium-tests:
  stage: test
  image: maven:3.8.6-openjdk-11
  services:
    - name: selenium/standalone-chrome:latest
      alias: selenium
  variables:
    SELENIUM_REMOTE_URL: "http://selenium:4444/wd/hub"
    TEST_ENVIRONMENT: "staging"
  script:
    - echo "Running Selenium tests on $TEST_ENVIRONMENT..."
    - mvn test 
      -Dbrowser=chrome 
      -Dselenium.remote.url=$SELENIUM_REMOTE_URL
      -Dtest.environment=$TEST_ENVIRONMENT
      -Dsurefire.suiteXmlFiles=testng-selenium.xml
  artifacts:
    when: always
    paths:
      - target/surefire-reports/
      - target/screenshots/
      - target/test-reports/
    reports:
      junit: target/surefire-reports/*.xml
    expire_in: 1 week
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
    - if: $CI_COMMIT_TAG
    - if: $CI_MERGE_REQUEST_IID

sonarqube-check:
  stage: security
  image: maven:3.8.6-openjdk-11
  variables:
    SONAR_HOST_URL: "https://sonarqube.example.com"
    SONAR_PROJECT_KEY: "your-project-key"
  script:
    - mvn verify sonar:sonar 
      -Dsonar.projectKey=$SONAR_PROJECT_KEY 
      -Dsonar.host.url=$SONAR_HOST_URL 
      -Dsonar.login=$SONAR_TOKEN
  allow_failure: true
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
    - if: $CI_MERGE_REQUEST_IID

deploy-staging:
  stage: deploy-staging
  image: alpine:latest
  environment:
    name: staging
    url: https://staging.example.com
  script:
    - echo "Deploying to staging environment..."
    - apk add --no-cache curl
    - |
      curl -X POST "https://api.staging.example.com/deploy" \\
        -H "Authorization: Bearer $STAGING_DEPLOY_TOKEN" \\
        -H "Content-Type: application/json" \\
        -d '{"version": "'$CI_COMMIT_SHA'", "environment": "staging"}'
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
  when: manual

integration-tests:
  stage: integration-tests
  image: maven:3.8.6-openjdk-11
  services:
    - name: selenium/standalone-chrome:latest
      alias: selenium
  variables:
    SELENIUM_REMOTE_URL: "http://selenium:4444/wd/hub"
    TEST_ENVIRONMENT: "staging"
    APP_URL: "https://staging.example.com"
  script:
    - echo "Running integration tests on staging..."
    - mvn test 
      -Dbrowser=chrome 
      -Dselenium.remote.url=$SELENIUM_REMOTE_URL
      -Dtest.environment=$TEST_ENVIRONMENT
      -Dapp.url=$APP_URL
      -Dsurefire.suiteXmlFiles=testng-integration.xml
  artifacts:
    when: always
    paths:
      - target/integration-reports/
      - target/screenshots/integration/
    reports:
      junit: target/integration-reports/*.xml
    expire_in: 1 week
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
  dependencies:
    - deploy-staging

deploy-production:
  stage: deploy-production
  image: alpine:latest
  environment:
    name: production
    url: https://example.com
  script:
    - echo "Deploying to production environment..."
    - apk add --no-cache curl
    - |
      curl -X POST "https://api.example.com/deploy" \\
        -H "Authorization: Bearer $PROD_DEPLOY_TOKEN" \\
        -H "Content-Type: application/json" \\
        -d '{"version": "'$CI_COMMIT_SHA'", "environment": "production"}'
  rules:
    - if: $CI_COMMIT_TAG
  when: manual
  dependencies:
    - integration-tests

production-smoke-tests:
  stage: deploy-production
  image: maven:3.8.6-openjdk-11
  services:
    - name: selenium/standalone-chrome:latest
      alias: selenium
  variables:
    SELENIUM_REMOTE_URL: "http://selenium:4444/wd/hub"
    TEST_ENVIRONMENT: "production"
    APP_URL: "https://example.com"
  script:
    - echo "Running smoke tests on production..."
    - mvn test 
      -Dbrowser=chrome 
      -Dselenium.remote.url=$SELENIUM_REMOTE_URL
      -Dtest.environment=$TEST_ENVIRONMENT
      -Dapp.url=$APP_URL
      -Dsurefire.suiteXmlFiles=testng-smoke.xml
  artifacts:
    when: always
    paths:
      - target/smoke-reports/
    reports:
      junit: target/smoke-reports/*.xml
    expire_in: 1 week
  rules:
    - if: $CI_COMMIT_TAG
  dependencies:
    - deploy-production`
      }
    ]
  };

  const currentFeatures = gitlabData[selectedPipeline];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={GitBranch}
        category="Selenium · CI/CD Integration"
        title="GitLab CI/CD"
        description="Configure GitLab CI/CD pipelines for automated Selenium testing with Docker integration"
        colorTheme="orange"
        badges={[
          { label: 'CI/CD', variant: 'secondary' },
          { label: 'Docker', variant: 'info' },
          { label: 'Pipeline', variant: 'secondary' },
        ]}
      />

      {/* GitLab CI/CD Flow Diagram */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Layers className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            GitLab CI/CD Pipeline Flow
          </CardTitle>
          <CardDescription>Visual representation of GitLab CI/CD pipeline for Selenium testing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Flow Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-x-auto">
              <div className="flex flex-col items-center min-w-[320px] max-w-2xl mx-auto gap-0">
                {/* Code Push */}
                <div className="bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-100 text-center">Code Push</div>
                  <div className="text-xs text-green-700 dark:text-green-300 text-center">Git push to repository</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600 -my-0"></div>
                
                {/* Pipeline Trigger */}
                <div className="bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-orange-900 dark:text-orange-100 text-center">Pipeline Trigger</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300 text-center">.gitlab-ci.yml</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-orange-400 dark:bg-orange-600 -my-0"></div>
                
                {/* Build Stage */}
                <div className="bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">Build Stage</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 text-center">Compile & Package</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-blue-400 dark:bg-blue-600 -my-0"></div>
                
                {/* Test Stage */}
                <div className="bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Test Stage</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300 text-center">Selenium Tests</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-purple-400 dark:bg-purple-600 -my-0"></div>
                
                {/* Deploy & Report */}
                <div className="bg-red-100 dark:bg-red-900/40 px-6 py-3 rounded-lg border-2 border-red-300 dark:border-red-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-red-900 dark:text-red-100 text-center">Deploy & Report</div>
                  <div className="text-xs text-red-700 dark:text-red-300 text-center">Artifacts & Reports</div>
                </div>
              </div>
            </div>
            
            {/* Pipeline Features Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-2">
                  <Container className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">Docker Integration</h5>
                </div>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Containerized testing</li>
                  <li>• Selenium Grid</li>
                  <li>• Environment isolation</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Parallel Execution</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Multiple browsers</li>
                  <li>• Parallel jobs</li>
                  <li>• Matrix strategy</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Artifacts & Reports</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Test reports</li>
                  <li>• Screenshots</li>
                  <li>• Coverage data</li>
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
            <Terminal className="w-5 h-5 text-orange-600" />
            Pipeline Examples
          </CardTitle>
          <CardDescription>
            Different GitLab CI/CD pipeline configurations for Selenium testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Pipeline Type Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            {(['basic', 'docker', 'advanced'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedPipeline(type)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedPipeline === type
                    ? 'border-b-2 border-orange-600 text-orange-600 dark:text-orange-400'
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
                ? 'border-orange-500 shadow-lg bg-orange-50 dark:bg-orange-950/20' 
                : 'border-slate-200 dark:border-slate-700 hover:border-orange-300'
            }`}
            onClick={() => setSelectedFeature(selectedFeature === feature.name ? null : feature.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selectedFeature === feature.name
                    ? 'bg-orange-100 dark:bg-orange-900/40'
                    : 'bg-slate-100 dark:bg-slate-900/40'
                }`}>
                  <Server className={`w-6 h-6 ${
                    selectedFeature === feature.name
                      ? 'text-orange-600 dark:text-orange-400'
                      : 'text-slate-600 dark:text-slate-400'
                  }`} />
                </div>
                {feature.name}
                <Badge variant={selectedFeature === feature.name ? "default" : "secondary"}>
                  {selectedPipeline}
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
                      .gitlab-ci.yml
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
            GitLab CI/CD Best Practices
          </CardTitle>
          <CardDescription>Proven strategies for effective GitLab CI/CD and Selenium integration</CardDescription>
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
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Caching Strategy</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Cache Maven dependencies and Docker layers to significantly reduce pipeline execution time.
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
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Parallel Jobs</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Use parallel job execution and matrix strategy to run tests across multiple browsers simultaneously.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Quality & Security</h5>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Security Scanning</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Integrate SonarQube and security scanning to ensure code quality and vulnerability detection.
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
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Environment Management</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Use GitLab environments for staging and production deployments with proper approval gates.
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

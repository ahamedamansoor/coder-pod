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
  Github,
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
  Upload,
  Workflow,
  Layers,
  Server
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function GitHubActionsComponent() {
  const { toast } = useToast();
  const [selectedWorkflow, setSelectedWorkflow] = React.useState<'basic' | 'matrix' | 'advanced'>('basic');
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const githubActionsData = {
    basic: [
      {
        name: 'Basic Selenium Workflow',
        description: 'Simple GitHub Actions workflow for Selenium testing',
        causes: ['Missing workflow file', 'Incorrect triggers', 'Browser setup issues', 'Test execution failures'],
        solutions: ['Create .github/workflows/selenium.yml', 'Configure proper triggers', 'Install browsers via actions', 'Handle test failures gracefully'],
        code: `name: Selenium Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM

jobs:
  selenium-tests:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Set up Java
      uses: actions/setup-java@v4
      with:
        java-version: '11'
        distribution: 'temurin'
        
    - name: Set up Maven
      uses: stCarolas/setup-maven@v5
      with:
        maven-version: '3.8.6'
        
    - name: Cache Maven dependencies
      uses: actions/cache@v3
      with:
        path: ~/.m2
        key: \${{ runner.os }}-m2-\${{ hashFiles('**/pom.xml') }}
        restore-keys: \${{ runner.os }}-m2
        
    - name: Install Chrome
      uses: browser-actions/setup-chrome@latest
      with:
        chrome-version: latest
        
    - name: Install ChromeDriver
      uses: browser-actions/setup-chromedriver@latest
      
    - name: Run Selenium Tests
      run: mvn clean test
      
    - name: Upload test results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: test-results
        path: |
          target/surefire-reports/
          target/screenshots/
          
    - name: Publish Test Results
      uses: dorny/test-reporter@v1
      if: success() || failure()
      with:
        name: Maven Tests
        path: target/surefire-reports/*.xml
        reporter: java-junit`
      },
      {
        name: 'Multi-Browser Testing',
        description: 'Test across multiple browsers with browser matrix',
        causes: ['Single browser testing', 'Cross-browser issues', 'Browser compatibility', 'Limited test coverage'],
        solutions: ['Implement browser matrix', 'Configure browser-specific tests', 'Use Docker containers', 'Parallel execution'],
        code: `name: Cross-Browser Selenium Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  selenium-tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        browser: [chrome, firefox, edge]
        include:
          - browser: chrome
            browser_version: latest
            driver: chromedriver
          - browser: firefox
            browser_version: latest
            driver: geckodriver
          - browser: edge
            browser_version: latest
            driver: msedgedriver
      fail-fast: false
      
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Set up Java
      uses: actions/setup-java@v4
      with:
        java-version: '11'
        distribution: 'temurin'
        
    - name: Set up Maven
      uses: stCarolas/setup-maven@v5
      with:
        maven-version: '3.8.6'
        
    - name: Cache Maven dependencies
      uses: actions/cache@v3
      with:
        path: ~/.m2
        key: \${{ runner.os }}-m2-\${{ hashFiles('**/pom.xml') }}
        
    - name: Install \${{ matrix.browser }}
      uses: browser-actions/setup-\${{ matrix.browser }}@latest
      with:
        \${{ matrix.browser }}-version: \${{ matrix.browser_version }}
        
    - name: Install \${{ matrix.driver }}
      uses: browser-actions/setup-\${{ matrix.driver }}@latest
      
    - name: Run Selenium Tests
      run: mvn clean test -Dbrowser=\${{ matrix.browser }}
      
    - name: Upload test results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: test-results-\${{ matrix.browser }}
        path: |
          target/surefire-reports/
          target/screenshots/\${{ matrix.browser }}/
          
    - name: Publish Test Results
      uses: dorny/test-reporter@v1
      if: success() || failure()
      with:
        name: \${{ matrix.browser }} Tests
        path: target/surefire-reports/*.xml
        reporter: java-junit`
      }
    ],
    matrix: [
      {
        name: 'Advanced Matrix Strategy',
        description: 'Complex matrix with multiple dimensions and configurations',
        causes: ['Limited test combinations', 'Environment variations', 'OS-specific issues', 'Configuration complexity'],
        solutions: ['Multi-dimensional matrix', 'Environment-specific configs', 'OS matrix strategy', 'Dynamic configuration'],
        code: `name: Advanced Matrix Selenium Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  selenium-tests:
    runs-on: \${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        java: [11, 17]
        browser: [chrome, firefox]
        include:
          - os: ubuntu-latest
            browser: edge
            java: 11
          - os: windows-latest
            browser: edge
            java: 11
        exclude:
          - os: macos-latest
            browser: edge
      fail-fast: false
      
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Set up Java \${{ matrix.java }}
      uses: actions/setup-java@v4
      with:
        java-version: '\${{ matrix.java }}'
        distribution: 'temurin'
        
    - name: Set up Maven
      uses: stCarolas/setup-maven@v5
      with:
        maven-version: '3.8.6'
        
    - name: Cache Maven dependencies
      uses: actions/cache@v3
      with:
        path: ~/.m2
        key: \${{ runner.os }}-m\${{ matrix.java }}-\${{ hashFiles('**/pom.xml') }}
        
    - name: Install \${{ matrix.browser }}
      uses: browser-actions/setup-\${{ matrix.browser }}@latest
      
    - name: Install \${{ matrix.browser }}Driver
      uses: browser-actions/setup-\${{ matrix.browser }}driver@latest
      
    - name: Run Selenium Tests
      run: mvn clean test -Dbrowser=\${{ matrix.browser }}
      env:
        BROWSER_VERSION: \${{ matrix.browser_version }}
        OS_VERSION: \${{ matrix.os }}
        
    - name: Upload test results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: test-results-\${{ matrix.os }}-\${{ matrix.java }}-\${{ matrix.browser }}
        path: |
          target/surefire-reports/
          target/screenshots/
          
    - name: Generate Test Summary
      if: always()
      run: |
        echo "## Test Results Summary" >> \$GITHUB_STEP_SUMMARY
        echo "- OS: \${{ matrix.os }}" >> \$GITHUB_STEP_SUMMARY
        echo "- Java: \${{ matrix.java }}" >> \$GITHUB_STEP_SUMMARY
        echo "- Browser: \${{ matrix.browser }}" >> \$GITHUB_STEP_SUMMARY
        echo "- Status: \${{ job.status }}" >> \$GITHUB_STEP_SUMMARY`
      }
    ],
    advanced: [
      {
        name: 'Docker + Selenium Grid',
        description: 'Use Docker containers with Selenium Grid for scalable testing',
        causes: ['Resource limitations', 'Browser version conflicts', 'Environment inconsistencies', 'Scalability issues'],
        solutions: ['Docker containers', 'Selenium Grid', 'Container orchestration', 'Dynamic scaling'],
        code: `name: Docker Selenium Grid Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  start-grid:
    runs-on: ubuntu-latest
    outputs:
      grid-url: \${{ steps.start-grid.outputs.grid-url }}
    steps:
    - name: Start Selenium Grid
      id: start-grid
      run: |
        docker-compose -f docker-compose.grid.yml up -d
        sleep 30
        echo "grid-url=http://localhost:4444" >> \$GITHUB_OUTPUT
        
    - name: Wait for Grid
      run: |
        timeout 60 bash -c 'until curl -f \$GRID_URL/wd/hub/status; do sleep 2; done'
      env:
        GRID_URL: \${{ steps.start-grid.outputs.grid-url }}

  selenium-tests:
    needs: start-grid
    runs-on: ubuntu-latest
    strategy:
      matrix:
        browser: [chrome, firefox]
        test-suite: [smoke, regression, api]
      fail-fast: false
      
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Set up Java
      uses: actions/setup-java@v4
      with:
        java-version: '11'
        distribution: 'temurin'
        
    - name: Set up Maven
      uses: stCarolas/setup-maven@v5
      with:
        maven-version: '3.8.6'
        
    - name: Cache Maven dependencies
      uses: actions/cache@v3
      with:
        path: ~/.m2
        key: \${{ runner.os }}-m2-\${{ hashFiles('**/pom.xml') }}
        
    - name: Run Selenium Tests
      run: |
        mvn clean test \\
          -Dbrowser=\${{ matrix.browser }} \\
          -Dselenium.grid.url=\${{ needs.start-grid.outputs.grid-url }} \\
          -Dtest.suite=\${{ matrix.test-suite }}
      env:
        SELENIUM_REMOTE_URL: \${{ needs.start-grid.outputs.grid-url }}
        
    - name: Upload test results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: test-results-\${{ matrix.browser }}-\${{ matrix.test-suite }}
        path: |
          target/surefire-reports/
          target/screenshots/
          
    - name: Publish Test Results
      uses: dorny/test-reporter@v1
      if: success() || failure()
      with:
        name: \${{ matrix.browser }}-\${{ matrix.test-suite }} Tests
        path: target/surefire-reports/*.xml
        reporter: java-junit

  cleanup:
    needs: [start-grid, selenium-tests]
    runs-on: ubuntu-latest
    if: always()
    steps:
    - name: Stop Selenium Grid
      run: docker-compose -f docker-compose.grid.yml down -v`
      },
      {
        name: 'Performance & Security Testing',
        description: 'Integrate performance and security testing with Selenium',
        causes: ['Limited test coverage', 'Performance regressions', 'Security vulnerabilities', 'Quality assurance gaps'],
        solutions: ['Performance testing integration', 'Security scanning', 'Quality gates', 'Comprehensive reporting'],
        code: `name: Comprehensive Testing Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

env:
  MAVEN_OPTS: -Xmx2048m

jobs:
  functional-tests:
    runs-on: ubuntu-latest
    outputs:
      test-status: \${{ steps.test-results.outputs.status }}
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Set up Java
      uses: actions/setup-java@v4
      with:
        java-version: '11'
        distribution: 'temurin'
        
    - name: Set up Maven
      uses: stCarolas/setup-maven@v5
      with:
        maven-version: '3.8.6'
        
    - name: Install Chrome
      uses: browser-actions/setup-chrome@latest
      
    - name: Install ChromeDriver
      uses: browser-actions/setup-chromedriver@latest
      
    - name: Run Functional Tests
      id: test-results
      run: |
        if mvn clean test -Dsuite=functional; then
          echo "status=success" >> \$GITHUB_OUTPUT
        else
          echo "status=failure" >> \$GITHUB_OUTPUT
          exit 1
        fi
        
    - name: Upload Functional Test Results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: functional-test-results
        path: |
          target/surefire-reports/
          target/screenshots/

  performance-tests:
    needs: functional-tests
    runs-on: ubuntu-latest
    if: needs.functional-tests.outputs.test-status == 'success'
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Set up Java
      uses: actions/setup-java@v4
      with:
        java-version: '11'
        distribution: 'temurin'
        
    - name: Run Performance Tests
      run: |
        mvn gatling:test -Dgatling.simulationClass=tests.PerformanceTest
        
    - name: Upload Performance Results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: performance-test-results
        path: target/gatling/results/

  security-tests:
    needs: functional-tests
    runs-on: ubuntu-latest
    if: needs.functional-tests.outputs.test-status == 'success'
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Run OWASP ZAP Security Scan
      uses: zaproxy/action-baseline@v0.10.0
      with:
        target: 'https://your-app-staging.com'
        rules_file_name: '.zap/rules.tsv'
        cmd_options: '-a'
        
    - name: Upload Security Results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: security-test-results
        path: |
          report_html.html
          report_json.json

  generate-report:
    needs: [functional-tests, performance-tests, security-tests]
    runs-on: ubuntu-latest
    if: always()
    steps:
    - name: Download all artifacts
      uses: actions/download-artifact@v3
      
    - name: Generate Comprehensive Report
      run: |
        echo "# Comprehensive Test Report" > test-report.md
        echo "Generated on: \$(date)" >> test-report.md
        echo "" >> test-report.md
        echo "## Test Results" >> test-report.md
        echo "- Functional Tests: \${{ needs.functional-tests.result }}" >> test-report.md
        echo "- Performance Tests: \${{ needs.performance-tests.result }}" >> test-report.md
        echo "- Security Tests: \${{ needs.security-tests.result }}" >> test-report.md
        
    - name: Upload Comprehensive Report
      uses: actions/upload-artifact@v3
      with:
        name: comprehensive-test-report
        path: test-report.md
        
    - name: Comment PR with Results
      if: github.event_name == 'pull_request'
      uses: actions/github-script@v7
      with:
        script: |
          const fs = require('fs');
          const report = fs.readFileSync('test-report.md', 'utf8');
          github.rest.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: report
          });`
      }
    ]
  };

  const currentFeatures = githubActionsData[selectedWorkflow];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Github}
        category="Selenium · CI/CD Integration"
        title="GitHub Actions"
        description="Automate Selenium testing with GitHub Actions workflows and matrix strategies"
        colorTheme="gray"
        badges={[
          { label: 'CI/CD', variant: 'secondary' },
          { label: 'Automation', variant: 'info' },
          { label: 'Workflow', variant: 'secondary' },
        ]}
      />

      {/* GitHub Actions Flow Diagram */}
      <Card className="border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900/40">
              <Workflow className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            GitHub Actions Workflow
          </CardTitle>
          <CardDescription>Visual representation of GitHub Actions CI/CD pipeline for Selenium testing</CardDescription>
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
                
                {/* Workflow Trigger */}
                <div className="bg-gray-100 dark:bg-gray-900/40 px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 text-center">Workflow Trigger</div>
                  <div className="text-xs text-gray-700 dark:text-gray-300 text-center">GitHub Actions</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-gray-400 dark:bg-gray-600 -my-0"></div>
                
                {/* Environment Setup */}
                <div className="bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">Environment Setup</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 text-center">Runner, Java, Maven</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-blue-400 dark:bg-blue-600 -my-0"></div>
                
                {/* Test Execution */}
                <div className="bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Test Execution</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300 text-center">Selenium Tests</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-purple-400 dark:bg-purple-600 -my-0"></div>
                
                {/* Results & Reports */}
                <div className="bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-orange-900 dark:text-orange-100 text-center">Results & Reports</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300 text-center">Artifacts, PR Comments</div>
                </div>
              </div>
            </div>
            
            {/* Workflow Features Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-950/30 rounded-lg border-2 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <h5 className="font-semibold text-gray-900 dark:text-gray-100">Matrix Strategy</h5>
                </div>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Multiple browsers</li>
                  <li>• Different OS versions</li>
                  <li>• Java versions</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Actions & Tools</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Setup actions</li>
                  <li>• Cache dependencies</li>
                  <li>• Upload artifacts</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Integration</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Docker support</li>
                  <li>• Security scanning</li>
                  <li>• Performance testing</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workflow Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-gray-600" />
            Workflow Examples
          </CardTitle>
          <CardDescription>
            Different GitHub Actions workflow configurations for Selenium testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Workflow Type Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            {(['basic', 'matrix', 'advanced'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedWorkflow(type)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedWorkflow === type
                    ? 'border-b-2 border-gray-600 text-gray-600 dark:text-gray-400'
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
                ? 'border-gray-500 shadow-lg bg-gray-50 dark:bg-gray-950/20' 
                : 'border-slate-200 dark:border-slate-700 hover:border-gray-300'
            }`}
            onClick={() => setSelectedFeature(selectedFeature === feature.name ? null : feature.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selectedFeature === feature.name
                    ? 'bg-gray-100 dark:bg-gray-900/40'
                    : 'bg-slate-100 dark:bg-slate-900/40'
                }`}>
                  <Server className={`w-6 h-6 ${
                    selectedFeature === feature.name
                      ? 'text-gray-600 dark:text-gray-400'
                      : 'text-slate-600 dark:text-slate-400'
                  }`} />
                </div>
                {feature.name}
                <Badge variant={selectedFeature === feature.name ? "default" : "secondary"}>
                  {selectedWorkflow}
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
                      .github/workflows/selenium.yml
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
            GitHub Actions Best Practices
          </CardTitle>
          <CardDescription>Proven strategies for effective GitHub Actions and Selenium integration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Workflow Optimization</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Caching Strategy</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Cache Maven dependencies and browser installations to reduce workflow execution time.
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
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Parallel Execution</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Use matrix strategy to run tests in parallel across different browsers and environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Reporting & Integration</h5>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Test Reporting</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Use test reporters and upload artifacts for comprehensive test result visibility.
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
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">PR Integration</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Comment on pull requests with test results and prevent merges on test failures.
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

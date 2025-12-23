'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  FileText,
  Code,
  Terminal,
  Settings,
  CheckCircle,
  Zap,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Star,
  Package
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function CucumberReportsComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'cucumber-reports',
    title: 'Cucumber Reports',
    explanation: 'Generating and analyzing Cucumber test reports',
    category: '22. BDD with Cucumber'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-rose-50 dark:from-slate-900 dark:to-rose-900/20">
      <PageHeader
        title="Cucumber Reports"
        description="Master comprehensive test reporting with Cucumber to generate detailed, actionable insights about your BDD test execution results"
        icon={FileText}
        colorTheme="rose"
        badges={[
          { label: 'Reports', variant: 'secondary' },
          { label: 'Analytics', variant: 'secondary' },
          { label: 'Documentation', variant: 'secondary' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Section 1: Introduction to Cucumber Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-rose-600 dark:text-rose-400">
              <FileText className="w-7 h-7" />
              What are Cucumber Reports?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding test reporting and documentation in Cucumber
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
                <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-4">Definition</h4>
                <p className="text-rose-800 dark:text-rose-200">
                  Cucumber reports are comprehensive documentation of test execution results that provide detailed insights into test scenarios, steps, status, and execution metrics. They serve as both test results and living documentation.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950/30 dark:to-red-950/20 rounded-xl border border-pink-200 dark:border-pink-700">
                <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-4">Benefits</h4>
                <p className="text-pink-800 dark:text-pink-200">
                  Reports provide visibility into test coverage, identify failing scenarios, track trends over time, and enable stakeholders to understand application behavior through business-readable test documentation.
                </p>
              </div>
            </div>

            {/* Report Types */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Types of Cucumber Reports</h5>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-rose-100 dark:bg-rose-900/40 rounded-lg">
                    <Star className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-rose-900 dark:text-rose-100">HTML Reports</h6>
                    <p className="text-sm text-rose-800 dark:text-rose-200">Interactive web-based reports</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100">JSON Reports</h6>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Machine-readable data format</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-900 dark:text-green-100">JUnit XML</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">CI/CD integration format</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100">Pretty Reports</h6>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Console-friendly output</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Report Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Settings className="w-7 h-7" />
              Report Configuration
            </CardTitle>
            <CardDescription className="text-base">
              Setting up different report formats and plugins
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">TestRunner Configuration</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
    features = "src/test/resources/features",
    glue = "com.example.stepdefinitions",
    
    // Report plugins configuration
    plugin = {
        "pretty",                           // Console output
        "html:target/cucumber-reports/html/index.html",    // HTML report
        "json:target/cucumber-reports/json/cucumber.json", // JSON report
        "junit:target/cucumber-reports/junit/cucumber.xml", // JUnit XML
        "timeline:target/cucumber-reports/timeline",        // Timeline report
        "usage:target/cucumber-reports/usage.json",        // Usage report
        "rerun:target/rerun.txt"                          // Rerun failed scenarios
    },
    
    // Additional options
    monochrome = true,           // Clean console output
    dryRun = false,             // Execute tests (not just validation)
    strict = true,              // Treat undefined steps as failures
    publish = true,             // Publish to Cucumber Reports Service
    snippets = camelcase        // Code snippet style
)
public class TestRunner extends AbstractTestNGCucumberTests {
    
    @Override
    @DataProvider(parallel = true)
    public Object[][] scenarios() {
        return super.scenarios();
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Advanced Reporting with Masterthought */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <Terminal className="w-7 h-7" />
              Advanced HTML Reports
            </CardTitle>
            <CardDescription className="text-base">
              Creating beautiful, interactive HTML reports with Masterthought
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Masterthought Report Generator</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.reports;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.Reportable;
import net.masterthought.cucumber.json.support.Status;
import org.testng.annotations.AfterSuite;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class AdvancedReportGenerator {
    
    private static final String REPORT_DIRECTORY = "target/cucumber-reports/advanced";
    
    @AfterSuite(alwaysRun = true)
    public void generateAdvancedReports() {
        try {
            // Load JSON report files
            File reportOutputDirectory = new File(REPORT_DIRECTORY);
            List<String> jsonFiles = new ArrayList<>();
            jsonFiles.add("target/cucumber-reports/json/cucumber.json");
            
            // Configure report
            Configuration configuration = new Configuration(reportOutputDirectory, "BDD Test Suite");
            
            // Add custom classifications
            configuration.addClassifications("Environment", System.getProperty("environment", "QA"));
            configuration.addClassifications("Browser", System.getProperty("browser", "Chrome"));
            configuration.addClassifications("Platform", System.getProperty("os.name"));
            configuration.addClassifications("Test Run", "Build #" + System.getProperty("build.number", "Local"));
            
            // Set report metadata
            configuration.setBuildNumber(System.getProperty("build.number", "1"));
            configuration.setJenkinsBasePath("");
            configuration.setRunWithJenkins(false);
            configuration.setParallelTesting(false);
            
            // Add custom CSS and JS
            configuration.addCustomCss("custom.css");
            configuration.addCustomJs("custom.js");
            
            // Generate report
            ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, configuration);
            List<Reportable> result = reportBuilder.generateReports();
            
            // Print summary
            for (Reportable report : result) {
                System.out.println("Report generated: " + report.getName());
                System.out.println("Status: " + report.getStatus());
                System.out.println("Duration: " + report.getDuration());
            }
            
            System.out.println("Advanced HTML report generated successfully!");
            System.out.println("Report location: " + reportOutputDirectory.getAbsolutePath() + "/cucumber-html-reports");
            
        } catch (Exception e) {
            System.err.println("Failed to generate advanced reports: " + e.getMessage());
            e.printStackTrace();
        }
    }
    
    // Custom report configuration for different environments
    public static Configuration createReportConfiguration(String environment, String browser) {
        File reportOutputDirectory = new File(REPORT_DIRECTORY);
        Configuration configuration = new Configuration(reportOutputDirectory, "BDD Test Suite - " + environment.toUpperCase());
        
        // Environment-specific configurations
        switch (environment.toLowerCase()) {
            case "prod":
                configuration.addClassifications("Environment", "Production");
                configuration.addClassifications("Data", "Live");
                break;
            case "staging":
                configuration.addClassifications("Environment", "Staging");
                configuration.addClassifications("Data", "Staging");
                break;
            case "qa":
            default:
                configuration.addClassifications("Environment", "QA");
                configuration.addClassifications("Data", "Test");
                break;
        }
        
        // Browser information
        configuration.addClassifications("Browser", browser);
        configuration.addClassifications("Headless", System.getProperty("headless", "false"));
        
        // Test execution details
        configuration.addClassifications("Parallel", System.getProperty("parallel", "false"));
        configuration.addClassifications("Thread Count", System.getProperty("thread.count", "1"));
        
        return configuration;
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Custom Report Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <Code className="w-7 h-7" />
              Custom Report Features
            </CardTitle>
            <CardDescription className="text-base">
              Enhancing reports with custom data and integrations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              {/* Screenshots in Reports */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Embedding Screenshots</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`@After
public void embedScreenshot(Scenario scenario) {
    if (scenario.isFailed()) {
        try {
            // Take screenshot
            byte[] screenshot = ((TakesScreenshot) driver)
                .getScreenshotAs(OutputType.BYTES);
            
            // Embed in report
            scenario.attach(screenshot, "image/png", 
                "screenshot_" + scenario.getName());
            
            // Also save to file system
            String fileName = "screenshots/" + 
                scenario.getName().replaceAll("[^a-zA-Z0-9]", "_") + 
                "_" + System.currentTimeMillis() + ".png";
            
            FileUtils.copyFile(((TakesScreenshot) driver)
                .getScreenshotAs(OutputType.FILE), 
                new File("target/" + fileName));
                
        } catch (Exception e) {
            System.err.println("Failed to capture screenshot: " + e.getMessage());
        }
    }
}`}</pre>
                </div>
              </div>

              {/* Custom Data in Reports */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Custom Data Attachments</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                  <pre className="text-xs font-mono text-green-800 dark:text-green-200 overflow-x-auto whitespace-pre-wrap break-words">
{`@After
public void attachCustomData(Scenario scenario) {
    try {
        // Attach performance metrics
        Map<String, Object> metrics = PerformanceCollector.getMetrics();
        String metricsJson = new ObjectMapper().writeValueAsString(metrics);
        scenario.attach(metricsJson, "application/json", "performance-metrics");
        
        // Attach API response logs
        if (ApiLogger.hasResponses()) {
            String apiLogs = ApiLogger.getFormattedLogs();
            scenario.attach(apiLogs, "text/plain", "api-logs");
        }
        
        // Attach browser console logs
        LogEntries logs = driver.manage().logs().get(LogType.BROWSER);
        String consoleLogs = logs.getAll().stream()
            .map(LogEntry::toString)
            .collect(Collectors.joining("\\n"));
        scenario.attach(consoleLogs, "text/plain", "browser-console");
        
        // Attach test data summary
        String testDataSummary = TestDataCollector.getSummary();
        scenario.attach(testDataSummary, "text/plain", "test-data-summary");
        
    } catch (Exception e) {
        System.err.println("Failed to attach custom data: " + e.getMessage());
    }
}`}</pre>
                </div>
              </div>

              {/* CI/CD Integration */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">CI/CD Integration</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="text-xs font-mono text-orange-800 dark:text-orange-200 overflow-x-auto whitespace-pre-wrap break-words">
{`# GitHub Actions Workflow
name: BDD Test Suite

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up JDK 11
      uses: actions/setup-java@v3
      with:
        java-version: '11'
        distribution: 'temurin'
    
    - name: Cache Maven dependencies
      uses: actions/cache@v3
      with:
        path: ~/.m2
        key: \${{ runner.os }}-m2-\${{ hashFiles('**/pom.xml') }}
    
    - name: Run BDD Tests
      run: |
        mvn clean test \
          -Dbrowser=chrome \
          -Dheadless=true \
          -Denvironment=qa \
          -Dbuild.number=\${{ github.run_number }}
    
    - name: Generate Cucumber Reports
      run: mvn cucumber-reporting
    
    - name: Upload HTML Reports
      uses: actions/upload-artifact@v3
      with:
        name: cucumber-reports
        path: target/cucumber-reports/
    
    - name: Publish to Cucumber Reports
      uses: actions/upload-artifact@v3
      with:
        name: cucumber-json
        path: target/cucumber-reports/json/
    
    - name: Comment PR with Results
      if: github.event_name == 'pull_request'
      uses: actions/github-script@v6
      with:
        script: |
          // Read test results and comment on PR
          const fs = require('fs');
          const results = JSON.parse(fs.readFileSync('target/test-results.json'));
          
          github.rest.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: \`## 🥒 BDD Test Results
            
            ✅ Passed: \${results.passed}
            ❌ Failed: \${results.failed}
            ⏭️ Skipped: \${results.skipped}
            
            **View detailed reports:** [HTML Report](https://github.com/\${{ github.repository }}/actions/runs/\${{ github.run_id }})
            \`
          });`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Report Analysis and Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <CheckCircle className="w-7 h-7" />
              Report Analysis & Metrics
            </CardTitle>
            <CardDescription className="text-base">
              Analyzing test reports for insights and improvements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Key Metrics to Track</h5>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Test Execution Metrics */}
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h6 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">Test Execution Metrics</h6>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex justify-between">
                      <span>Pass Rate:</span>
                      <span className="font-mono">85.2%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Failed Scenarios:</span>
                      <span className="font-mono text-red-600">12</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Skipped Scenarios:</span>
                      <span className="font-mono text-yellow-600">3</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Total Duration:</span>
                      <span className="font-mono">45m 32s</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Avg Scenario Time:</span>
                      <span className="font-mono">2m 15s</span>
                    </li>
                  </ul>
                </div>

                {/* Coverage Metrics */}
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h6 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">Coverage Metrics</h6>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex justify-between">
                      <span>Feature Coverage:</span>
                      <span className="font-mono">92%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Scenario Coverage:</span>
                      <span className="font-mono">88%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Step Coverage:</span>
                      <span className="font-mono">95%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tag Coverage:</span>
                      <span className="font-mono">100%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Undefined Steps:</span>
                      <span className="font-mono text-orange-600">5</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Trend Analysis */}
              <div className="mt-6 p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
                <h6 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">Trend Analysis (Last 7 Days)</h6>
                <div className="grid grid-cols-7 gap-2 text-center">
                  <div className="text-xs text-indigo-700 dark:text-indigo-300">Mon</div>
                  <div className="text-xs text-indigo-700 dark:text-indigo-300">Tue</div>
                  <div className="text-xs text-indigo-700 dark:text-indigo-300">Wed</div>
                  <div className="text-xs text-indigo-700 dark:text-indigo-300">Thu</div>
                  <div className="text-xs text-indigo-700 dark:text-indigo-300">Fri</div>
                  <div className="text-xs text-indigo-700 dark:text-indigo-300">Sat</div>
                  <div className="text-xs text-indigo-700 dark:text-indigo-300">Sun</div>
                  
                  <div className="p-2 bg-green-500 rounded text-white text-xs font-bold">92%</div>
                  <div className="p-2 bg-green-500 rounded text-white text-xs font-bold">88%</div>
                  <div className="p-2 bg-yellow-500 rounded text-white text-xs font-bold">85%</div>
                  <div className="p-2 bg-green-500 rounded text-white text-xs font-bold">90%</div>
                  <div className="p-2 bg-green-500 rounded text-white text-xs font-bold">93%</div>
                  <div className="p-2 bg-red-500 rounded text-white text-xs font-bold">78%</div>
                  <div className="p-2 bg-green-500 rounded text-white text-xs font-bold">89%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-teal-600 dark:text-teal-400">
              <CheckCircle className="w-7 h-7" />
              Report Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Writing effective and maintainable test reports
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {/* Do's */}
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Best Practices ✅
              </h4>
              <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-200">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Include meaningful scenario and step descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Attach screenshots for failed scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use tags to categorize and filter reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Generate reports in multiple formats for different stakeholders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Integrate reports with CI/CD pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Track and analyze trends over time</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Avoid These ❌
              </h4>
              <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore report generation failures</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid generating reports with too much data</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't store sensitive information in reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid unclear scenario names and descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore report analysis and metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid inconsistent report formats across environments</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/30">
          <FileText className="h-4 w-4 text-rose-600" />
          <AlertTitle className="text-rose-900 dark:text-rose-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-rose-800 dark:text-rose-200">
            <ul className="space-y-2 mt-2">
              <li>• Cucumber reports provide comprehensive test execution documentation</li>
              <li>• Configure multiple report formats for different stakeholders</li>
              <li>• Use Masterthought for beautiful, interactive HTML reports</li>
              <li>• Attach screenshots, logs, and custom data to enhance reports</li>
              <li>• Integrate reports with CI/CD pipelines for automated feedback</li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* Topic Navigation */}
        <TopicNavigation 
          currentTopic={currentTopic}
          language={language}
        />
      </div>
    </div>
  );
}

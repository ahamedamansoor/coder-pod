'use client';

import React, { useState } from 'react';
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
  Package,
  BarChart3,
  Download,
  Eye,
  Camera,
  Clock,
  TrendingUp,
  Activity,
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function TestNGReportsComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'testng-reports',
    title: 'TestNG Reports',
    explanation: 'Native TestNG reporting capabilities and configurations',
    category: '23. Test Reporting & Documentation'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  // Tab state management
  const [activeTab, setActiveTab] = useState<'java' | 'python' | 'javascript'>('java');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900/20">
      <PageHeader
        title="TestNG Reports"
        description="Master TestNG's built-in reporting capabilities to generate comprehensive test execution reports with detailed metrics, timestamps, and failure analysis"
        icon={Activity}
        colorTheme="blue"
        badges={[
          { label: 'TestNG Reports', variant: 'secondary' },
          { label: 'Native Reports', variant: 'secondary' },
          { label: 'Test Metrics', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Section 1: What is TestNG Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <FileText className="w-7 h-7" />
              What is TestNG Reports?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the TestNG Reports framework and its capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* TestNG Reports - Clear and Simple Explanation */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">📊 Understanding TestNG Reports</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-300 dark:border-slate-600">
                {/* What is TestNG Reports */}
                <div className="mb-8">
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    What is TestNG Reports?
                  </h6>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    <strong>TestNG Reports</strong> is TestNG's built-in reporting system that automatically generates comprehensive HTML and XML reports after test execution, providing detailed test results, execution metrics, and failure analysis.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <strong>Key Benefit:</strong> Provides immediate visibility into test execution status with detailed timestamps, failure information, and comprehensive metrics without additional dependencies.
                    </p>
                  </div>
                </div>

                {/* Core Features */}
                <div className="mb-8">
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⭐</span>
                    Core Features
                  </h6>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-700 rounded-lg p-4">
                      <h6 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        HTML Reports
                      </h6>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        Interactive HTML reports with detailed test information and execution summaries
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                      <h6 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                        <Camera className="w-4 h-4" />
                        XML Reports
                      </h6>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Machine-readable XML reports for CI/CD integration and automated processing
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                      <h6 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Emailable Reports
                      </h6>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        Self-contained HTML reports perfect for email distribution and stakeholder sharing
                      </p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-700 rounded-lg p-4">
                      <h6 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Custom Listeners
                      </h6>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">
                        Extensible reporting through custom listeners and IReporter implementations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why Use TestNG Reports */}
                <div>
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Why Use TestNG Reports?
                  </h6>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Built-in Integration:</strong>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          No additional dependencies required - reports are generated automatically after test execution
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Comprehensive Metrics:</strong>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          Detailed execution times, pass/fail statistics, and comprehensive test coverage data
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">CI/CD Ready:</strong>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          XML reports integrate seamlessly with Jenkins, GitHub Actions, and other CI/CD tools
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Setup and Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Settings className="w-7 h-7" />
              Setup and Configuration
            </CardTitle>
            <CardDescription className="text-base">
              Setting up TestNG Reports in your Selenium project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Setup and Configuration</h5>
              
              {/* Language Tabs */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <button 
                    onClick={() => setActiveTab('java')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'java' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    ☕ Java (Maven)
                  </button>
                  <button 
                    onClick={() => setActiveTab('python')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'python' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    🐍 Python (pip)
                  </button>
                  <button 
                    onClick={() => setActiveTab('javascript')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'javascript' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    📜 JavaScript (npm)
                  </button>
                </div>
              </div>

              {/* Conditional Content Rendering */}
              {activeTab === 'java' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                  <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <span className="text-xl">☕</span> Java (Maven)
                  </h6>
                  
                  {/* Maven Dependency */}
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">1. Add TestNG Dependencies:</p>
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 dark:text-green-400 mb-2">&lt;!-- pom.xml --&gt;</div>
                      <div className="text-slate-800 dark:text-white mb-1">
                        <span className="text-purple-600 dark:text-purple-400">&lt;dependency&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;groupId&gt;</span>org.testng<span className="text-purple-600 dark:text-purple-400">&lt;/groupId&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;artifactId&gt;</span>testng<span className="text-purple-600 dark:text-purple-400">&lt;/artifactId&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;version&gt;</span>7.8.0<span className="text-purple-600 dark:text-purple-400">&lt;/version&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white">
                        <span className="text-purple-600 dark:text-purple-400">&lt;/dependency&gt;</span>
                      </div>
                    </div>
                  </div>

                  {/* Java Code Example */}
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2. Complete Java Example:</p>
                    <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// TestNGReportExample.java
import org.testng.annotations.*;
import org.testng.Assert;

@Test(groups = {"regression"})
public class TestNGReportExample {
    
    @Test(description = "Verify user can login with valid credentials")
    @Parameters({"username", "password"})
    public void testValidLogin(String username, String password) {
        // Test implementation
        System.out.println("Testing login with: " + username);
        Assert.assertTrue(true, "Login should be successful");
    }
    
    @Test(description = "Verify login fails with invalid credentials")
    public void testInvalidLogin() {
        // Test implementation
        System.out.println("Testing invalid login");
        Assert.assertTrue(false, "Login should fail with invalid credentials");
    }
    
    @BeforeMethod
    public void setUp() {
        System.out.println("Test setup completed");
    }
    
    @AfterMethod
    public void tearDown() {
        System.out.println("Test cleanup completed");
    }
}`}
                    </pre>
                  </div>
                </div>
              )}

              {activeTab === 'python' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                  <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <span className="text-xl">🐍</span> Python (pip)
                  </h6>
                  
                  {/* pip Installation */}
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">1. Install via pip:</p>
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 dark:text-green-400 mb-2"># Install package</div>
                      <div className="text-slate-800 dark:text-white mb-3">
                        pip install testng-python
                      </div>
                      <div className="text-green-600 dark:text-green-400 mb-2"># requirements.txt</div>
                      <div className="text-slate-800 dark:text-white">
                        testng-python==1.0.0
                      </div>
                    </div>
                  </div>

                  {/* Python Code Example */}
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2. Complete Python Example:</p>
                    <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`# test_testng_example.py
import unittest
from testng_python import TestNG

class TestLogin(unittest.TestCase):
    
    @TestNG.test(description="Verify user can login with valid credentials")
    def test_valid_login(self):
        # Test implementation
        print("Testing valid login")
        username = "test@example.com"
        password = "password123"
        self.assertTrue(True, "Login should be successful")
    
    @TestNG.test(description="Verify login fails with invalid credentials")
    def test_invalid_login(self):
        # Test implementation
        print("Testing invalid login")
        self.assertTrue(False, "Login should fail with invalid credentials")
    
    @TestNG.before_method
    def setUp(self):
        print("Test setup completed")
    
    @TestNG.after_method
    def tearDown(self):
        print("Test cleanup completed")

if __name__ == "__main__":
    TestNG.main()`}
                    </pre>
                  </div>
                </div>
              )}

              {activeTab === 'javascript' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                  <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <span className="text-xl">📜</span> JavaScript (npm)
                  </h6>
                  
                  {/* npm Installation */}
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">1. Install via npm:</p>
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 dark:text-green-400 mb-2"># Install package</div>
                      <div className="text-slate-800 dark:text-white mb-3">
                        npm install testng-js --save-dev
                      </div>
                      <div className="text-green-600 dark:text-green-400 mb-2"># package.json</div>
                      <div className="text-slate-800 dark:text-white mb-3">
                        <span className="text-yellow-600 dark:text-yellow-400">"devDependencies"</span>: {'{'}
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-green-600 dark:text-green-400">"testng-js"</span>: <span className="text-orange-600 dark:text-orange-400">"^1.0.0"</span>
                      </div>
                      <div className="text-slate-800 dark:text-white">
                        {'}'}
                      </div>
                    </div>
                  </div>

                  {/* JavaScript Code Example */}
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2. Complete JavaScript Example:</p>
                    <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// testng-test-example.js
const TestNG = require('testng-js');
const {describe, it, before, after} = require('mocha');
const {assert} = require('assert');

describe('User Authentication', function() {
  before(function() {
    console.log('Test suite setup completed');
  });

  it('should login with valid credentials', function() {
    TestNG.test('Verify user can login with valid credentials', function() {
      // Test implementation
      console.log('Testing valid login');
      const username = 'test@example.com';
      const password = 'password123';
      assert.ok(true, 'Login should be successful');
    });
  });

  it('should fail with invalid credentials', function() {
    TestNG.test('Verify login fails with invalid credentials', function() {
      // Test implementation
      console.log('Testing invalid login');
      assert.ok(false, 'Login should fail with invalid credentials');
    });
  });

  after(function() {
    console.log('Test suite cleanup completed');
  });
});`}
                    </pre>
                  </div>
                </div>
              )}

              {/* Additional Setup Options */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h6 className="font-bold text-blue-900 dark:text-blue-100 mb-2">💡 Additional Setup Options</h6>
                <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                  <li>• <strong>Gradle:</strong> Add <code>implementation 'org.testng:testng:7.8.0'</code> to build.gradle</li>
                  <li>• <strong>testng.xml:</strong> Configure test suites and parameters in XML configuration</li>
                  <li>• <strong>Maven Surefire:</strong> Use maven-surefire-plugin for test execution and reporting</li>
                  <li>• <strong>IDE Integration:</strong> Configure TestNG in Eclipse, IntelliJ, or VS Code</li>
                </ul>
              </div>
            </div>

            {/* Configuration Flow Diagram */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Configuration Flow</h4>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-green-300 dark:border-green-600">
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-green-900 dark:text-green-100">Add TestNG Dependencies</h6>
                      <p className="text-sm text-green-800 dark:text-green-200">Include TestNG and related dependencies in build file</p>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-blue-900 dark:text-blue-100">Configure testng.xml</h6>
                      <p className="text-sm text-blue-800 dark:text-blue-200">Set up test suites, parameters, and listeners</p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-purple-900 dark:text-purple-100">Add TestNG Annotations</h6>
                      <p className="text-sm text-purple-800 dark:text-purple-200">Use @Test, @BeforeMethod, @AfterMethod annotations</p>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-orange-900 dark:text-orange-100">Generate Reports</h6>
                      <p className="text-sm text-orange-800 dark:text-orange-200">Run tests to automatically generate HTML/XML reports</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Implementation Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <Code className="w-7 h-7" />
              Implementation Examples
            </CardTitle>
            <CardDescription className="text-base">
              Practical implementation with TestNG and Selenium
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Base Test Class with TestNG</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// TestNGBaseTest.java
import org.testng.annotations.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.OutputType;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;

@Listeners({TestNGReportListener.class})
public class TestNGBaseTest {
    
    protected WebDriver driver;
    protected static final String BASE_URL = "https://example.com";
    
    @BeforeSuite(alwaysRun = true)
    @Parameters({"browser", "environment"})
    public void setUpSuite(@Optional("chrome") String browser, 
                          @Optional("qa") String environment) {
        System.out.println("Initializing test suite");
        System.out.println("Browser: " + browser);
        System.out.println("Environment: " + environment);
        
        // Set up WebDriver based on browser parameter
        if (browser.equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver", "drivers/chromedriver");
        }
    }
    
    @BeforeMethod(alwaysRun = true)
    @Parameters({"testUrl"})
    public void setUpTest(@Optional(BASE_URL) String testUrl) {
        // Initialize WebDriver
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        
        // Navigate to test URL
        driver.get(testUrl);
        
        System.out.println("Test setup completed for: " + testUrl);
    }
    
    @AfterMethod(alwaysRun = true)
    public void tearDownTest(ITestResult result) {
        // Capture screenshot on failure
        if (result.getStatus() == ITestResult.FAILURE) {
            captureScreenshot(result.getMethod().getMethodName());
            System.out.println("Test failed: " + result.getMethod().getMethodName());
            System.out.println("Failure reason: " + result.getThrowable().getMessage());
        }
        
        // Close browser
        if (driver != null) {
            driver.quit();
        }
        
        System.out.println("Test cleanup completed for: " + result.getMethod().getMethodName());
    }
    
    @AfterSuite(alwaysRun = true)
    public void tearDownSuite() {
        System.out.println("Test suite completed");
        // Perform any suite-level cleanup
    }
    
    private void captureScreenshot(String testName) {
        try {
            TakesScreenshot screenshot = (TakesScreenshot) driver;
            File srcFile = screenshot.getScreenshotAs(OutputType.FILE);
            
            String fileName = "screenshots/" + testName + "_" + 
                            System.currentTimeMillis() + ".png";
            File destFile = new File(fileName);
            
            FileUtils.copyFile(srcFile, destFile);
            System.out.println("Screenshot saved: " + fileName);
            
        } catch (IOException e) {
            System.err.println("Failed to capture screenshot: " + e.getMessage());
        }
    }
}`}
                </pre>
              </div>
            </div>

            {/* Sample Test with TestNG */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Sample Test with TestNG Annotations</h4>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// TestNGLoginTest.java
import org.testng.annotations.*;
import org.testng.Assert;
import org.testng.Reporter;

public class TestNGLoginTest extends TestNGBaseTest {
    
    @Test(description = "Verify user can login with valid credentials", 
          groups = {"smoke", "regression"},
          priority = 1,
          enabled = true)
    @Parameters({"username", "password"})
    public void testValidLogin(@Optional("test@example.com") String username, 
                              @Optional("password123") String password) {
        
        Reporter.log("Starting login test with username: " + username);
        
        // Navigate to login page
        driver.get(BASE_URL + "/login");
        
        // Enter credentials
        LoginPage loginPage = new LoginPage(driver);
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
        
        // Click login button
        loginPage.clickLogin();
        
        // Verify successful login
        DashboardPage dashboard = new DashboardPage(driver);
        Assert.assertTrue(dashboard.isWelcomeMessageDisplayed(), 
                         "Welcome message should be displayed");
        
        Reporter.log("Login test completed successfully");
        
        // Log test data for reporting
        Reporter.log("Test Data - Username: " + username);
        Reporter.log("Test Data - Environment: qa");
    }
    
    @Test(description = "Verify login fails with invalid credentials", 
          groups = {"regression"},
          priority = 2,
          dependsOnMethods = "testValidLogin")
    public void testInvalidLogin() {
        
        Reporter.log("Starting invalid login test");
        
        // Navigate to login page
        driver.get(BASE_URL + "/login");
        
        // Enter invalid credentials
        LoginPage loginPage = new LoginPage(driver);
        loginPage.enterUsername("invalid@example.com");
        loginPage.enterPassword("wrongpassword");
        
        // Click login button
        loginPage.clickLogin();
        
        // Verify error message
        Assert.assertTrue(loginPage.isErrorMessageDisplayed(), 
                         "Error message should be displayed");
        
        String errorMessage = loginPage.getErrorMessage();
        Reporter.log("Error message displayed: " + errorMessage);
        
        Assert.assertTrue(errorMessage.contains("Invalid"), 
                         "Error message should indicate invalid credentials");
        
        Reporter.log("Invalid login test completed");
    }
    
    @Test(description = "Verify login page elements", 
          groups = {"smoke"},
          priority = 0)
    public void testLoginPageElements() {
        
        Reporter.log("Starting login page elements test");
        
        // Navigate to login page
        driver.get(BASE_URL + "/login");
        
        // Verify page elements
        LoginPage loginPage = new LoginPage(driver);
        
        Assert.assertTrue(loginPage.isUsernameFieldDisplayed(), 
                         "Username field should be displayed");
        Assert.assertTrue(loginPage.isPasswordFieldDisplayed(), 
                         "Password field should be displayed");
        Assert.assertTrue(loginPage.isLoginButtonDisplayed(), 
                         "Login button should be displayed");
        Assert.assertTrue(loginPage.isForgotPasswordLinkDisplayed(), 
                         "Forgot password link should be displayed");
        
        Reporter.log("Login page elements test completed");
    }
    
    @DataProvider(name = "loginData")
    public Object[][] getLoginData() {
        return new Object[][] {
            {"user1@example.com", "password1"},
            {"user2@example.com", "password2"},
            {"user3@example.com", "password3"}
        };
    }
    
    @Test(description = "Verify login with multiple users", 
          groups = {"regression"},
          dataProvider = "loginData")
    public void testMultipleUserLogin(String username, String password) {
        
        Reporter.log("Testing login for user: " + username);
        
        // Navigate to login page
        driver.get(BASE_URL + "/login");
        
        // Enter credentials
        LoginPage loginPage = new LoginPage(driver);
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
        
        // Click login button
        loginPage.clickLogin();
        
        // Verify successful login
        DashboardPage dashboard = new DashboardPage(driver);
        Assert.assertTrue(dashboard.isWelcomeMessageDisplayed(), 
                         "Login should be successful for user: " + username);
        
        Reporter.log("Login test completed for user: " + username);
    }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Advanced Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
              <Star className="w-7 h-7" />
              Advanced Features
            </CardTitle>
            <CardDescription className="text-base">
              Exploring powerful TestNG Reports capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Custom Listeners */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">Custom Listeners</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// TestNG Report Listener
public class CustomReportListener implements IReporter {
    
    @Override
    public void generateReport(List<XmlSuite> xmlSuites, 
                              List<ISuite> suites, 
                              String outputDirectory) {
        // Generate custom HTML report
        generateCustomReport(suites, outputDirectory);
        
        // Generate emailable report
        generateEmailableReport(suites, outputDirectory);
        
        // Generate summary statistics
        generateSummaryReport(suites, outputDirectory);
    }
    
    private void generateCustomReport(List<ISuite> suites, 
                                    String outputDirectory) {
        // Custom report implementation
    }
}

// Test Configuration Listener
public class TestConfigListener implements IConfigurationListener {
    
    @Override
    public void onConfigurationSuccess(ITestResult itr) {
        Reporter.log("Configuration success: " + itr.getName());
    }
    
    @Override
    public void onConfigurationFailure(ITestResult itr) {
        Reporter.log("Configuration failure: " + itr.getName());
    }
}`}
                  </pre>
                </div>
              </div>

              {/* Report Customization */}
              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-700">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4">Report Customization</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-teal-300 dark:border-teal-600">
                  <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// Custom Emailable Report
public class EmailableReportListener implements IReporter {
    
    @Override
    public void generateReport(List<XmlSuite> xmlSuites, 
                              List<ISuite> suites, 
                              String outputDirectory) {
        
        try (PrintWriter writer = new PrintWriter(
             new FileWriter(outputDirectory + "/custom-emailable.html"))) {
            
            // Generate HTML header
            writer.println("<!DOCTYPE html>");
            writer.println("<html><head><title>Test Report</title>");
            writer.println("<style>" + getReportStyles() + "</style>");
            writer.println("</head><body>");
            
            // Generate report content
            generateReportContent(writer, suites);
            
            // Generate HTML footer
            writer.println("</body></html>");
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`}
                  </pre>
                </div>
              </div>

              {/* Parallel Execution */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Parallel Execution</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                  <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// Parallel Test Configuration
@Test(groups = "parallel")
public class ParallelTestExample {
    
    @Test(threadPoolSize = 3, invocationCount = 5, 
           timeOut = 10000, description = "Parallel test execution")
    public void parallelTestMethod() {
        // Test implementation
        System.out.println("Thread ID: " + Thread.currentThread().getId());
        Assert.assertTrue(true, "Parallel test should pass");
    }
    
    @Test(description = "Data-driven parallel test", 
          dataProvider = "parallelData", 
          parallel = true)
    public void parallelDataDrivenTest(String data) {
        // Test implementation
        System.out.println("Processing data: " + data + 
                          " on thread: " + Thread.currentThread().getId());
        Assert.assertNotNull(data, "Data should not be null");
    }
    
    @DataProvider(name = "parallelData", parallel = true)
    public Object[][] getParallelData() {
        return new Object[][] {
            {"data1"}, {"data2"}, {"data3"}, 
            {"data4"}, {"data5"}, {"data6"}
        };
    }
}`}
                  </pre>
                </div>
              </div>

              {/* Report Integration */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">CI/CD Integration</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                  <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// Maven Surefire Configuration
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>3.1.2</version>
    <configuration>
        <suiteXmlFiles>
            <suiteXmlFile>testng.xml</suiteXmlFile>
        </suiteXmlFiles>
        
        <!-- Report configuration -->
        <reportsDirectory>\${project.build.directory}/test-output</reportsDirectory>
        
        <!-- Parallel execution -->
        <parallel>tests</parallel>
        <threadCount>4</threadCount>
        
        <!-- System properties -->
        <systemPropertyVariables>
            <browser>chrome</browser>
            <environment>qa</environment>
        </systemPropertyVariables>
        
        <!-- Report options -->
        <useSystemClassLoader>false</useSystemClassLoader>
    </configuration>
</plugin>

// Jenkins Integration
publishTestResults testResultsPattern: 'target/test-output/*.xml'
publishHTML([
    allowMissing: false,
    alwaysLinkToLastBuild: true,
    keepAll: true,
    reportDir: 'target/test-output',
    reportFiles: 'index.html',
    reportName: 'TestNG Report'
])`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Report Generation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <Terminal className="w-7 h-7" />
              Report Generation
            </CardTitle>
            <CardDescription className="text-base">
              Commands and configurations for TestNG report generation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Command Line Usage</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`# Run TestNG from command line
java -cp "testng.jar;your-classes.jar" org.testng.TestNG testng.xml

# Run specific test class
java -cp "testng.jar;your-classes.jar" org.testng.TestNG -testclass com.example.TestClass

# Run with custom output directory
java -cp "testng.jar;your-classes.jar" org.testng.TestNG -d custom-output testng.xml

# Run with groups
java -cp "testng.jar;your-classes.jar" org.testng.TestNG -groups smoke,regression testng.xml

# Exclude groups
java -cp "testng.jar;your-classes.jar" org.testng.TestNG -exclude-groups broken testng.xml

# Parallel execution
java -cp "testng.jar;your-classes.jar" org.testng.TestNG -parallel tests -threadcount 4 testng.xml

# Generate reports only
java -cp "testng.jar;your-classes.jar" org.testng.TestNG -reporters org.testng.reporters.EmailableReporter,org.testng.reporters.XMLReporter testng.xml`}
                </pre>
              </div>
            </div>

            {/* Report Files Structure */}
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">Report Files Structure</h4>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-indigo-300 dark:border-indigo-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`test-output/
├── index.html                    # Main HTML report
├── emailable-report.html         # Email-friendly report
├── testng-results.xml           # XML results for CI/CD
├── testng-failed.xml            # Failed tests XML
├── testng-skipped.xml           # Skipped tests XML
├── junitreports/                # JUnit-compatible reports
│   ├── TEST-com.example.TestSuite.xml
│   └── TEST-com.example.AnotherSuite.xml
├── old/                         # Previous test results
│   ├── index.html
│   └── testng-results.xml
├── suites/                      # Individual suite reports
│   ├── TestSuite1.html
│   ├── TestSuite1.xml
│   ├── TestSuite2.html
│   └── TestSuite2.xml
├── groups/                      # Group-based reports
│   ├── smoke.html
│   ├── regression.html
│   └── integration.html
└── methods/                     # Method-level reports
    ├── testMethod1.html
    ├── testMethod2.html
    └── testMethod3.html`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-teal-600 dark:text-teal-400">
              <CheckCircle className="w-7 h-7" />
              Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Guidelines for effective TestNG Reports implementation
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
                  <span>Use descriptive test names and descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Organize tests with groups and priorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement proper test data management with DataProviders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h h-4 mt-0.5 flex-shrink-0" />
                  <span>Use custom listeners for enhanced reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Configure parallel execution for faster test runs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Integrate with CI/CD pipelines for automated reporting</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200 dark:border-red-700">
              <h4 className="font-bold text-lg text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Common Pitfalls ❌
              </h4>
              <ul className="space-y-3 text-sm text-red-800 dark:text-red-200">
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore test dependencies and ordering</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid hard-coded test data without parameters</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't skip proper cleanup in @AfterMethod</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid ignoring test timeout configurations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't forget to handle exceptions properly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid overloading test methods with too many responsibilities</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Topic Navigation */}
        <TopicNavigation currentTopic={currentTopic} language={language} />
      </div>
    </div>
  );
}

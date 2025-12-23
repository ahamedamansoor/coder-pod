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
  Activity
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function AllureReportsComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'allure-reports',
    title: 'Allure Reports',
    explanation: 'Advanced test reporting with Allure framework',
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
        title="Allure Reports"
        description="Master advanced test reporting with Allure framework to create beautiful, interactive HTML reports with rich visualizations and detailed test insights"
        icon={Activity}
        colorTheme="purple"
        badges={[
          { label: 'Allure Reports', variant: 'secondary' },
          { label: 'HTML Reports', variant: 'secondary' },
          { label: 'Test Analytics', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Section 1: What is Allure Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <FileText className="w-7 h-7" />
              What is Allure Reports?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the Allure Reports framework and its capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Allure Reports - Clear and Simple Explanation */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">📊 Understanding Allure Reports</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-300 dark:border-slate-600">
                {/* What is Allure Reports */}
                <div className="mb-8">
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    What is Allure Reports?
                  </h6>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    <strong>Allure Reports</strong> is a flexible, lightweight test reporting framework that creates beautiful HTML reports with rich visualizations, detailed test information, and powerful filtering capabilities.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <strong>Key Benefit:</strong> Makes test results easy to understand for both technical and non-technical stakeholders through visual representations and organized reporting.
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
                        Interactive Reports
                      </h6>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        Dynamic filtering, timeline views, and detailed test information
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                      <h6 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                        <Camera className="w-4 h-4" />
                        Rich Attachments
                      </h6>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Screenshots, videos, logs, and custom file attachments
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                      <h6 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Trend Analysis
                      </h6>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        Historical data, test trends, and performance metrics
                      </p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-700 rounded-lg p-4">
                      <h6 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Multi-Language Support
                      </h6>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">
                        Java, Python, JavaScript, and other programming languages
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why Use Allure Reports */}
                <div>
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Why Use Allure Reports?
                  </h6>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Professional Reporting:</strong>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          Enterprise-grade reports suitable for stakeholder presentations
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">Test Organization:</strong>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          Hierarchical test structure with Epics, Features, and Stories
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">CI/CD Integration:</strong>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          Seamless integration with Jenkins, GitHub Actions, and other CI/CD tools
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
              Setting up Allure Reports in your Selenium project
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
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">1. Add Maven Dependencies:</p>
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 dark:text-green-400 mb-2">&lt;!-- pom.xml --&gt;</div>
                      <div className="text-slate-800 dark:text-white mb-1">
                        <span className="text-purple-600 dark:text-purple-400">&lt;dependency&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;groupId&gt;</span>io.qameta.allure<span className="text-purple-600 dark:text-purple-400">&lt;/groupId&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;artifactId&gt;</span>allure-testng<span className="text-purple-600 dark:text-purple-400">&lt;/artifactId&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;version&gt;</span>2.24.0<span className="text-purple-600 dark:text-purple-400">&lt;/version&gt;</span>
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
{`// AllureTestExample.java
import io.qameta.allure.*;
import org.testng.annotations.*;
import org.testng.Assert;

@Epic("User Authentication")
@Feature("Login Functionality")
public class AllureTestExample {
    
    @Test(description = "Verify user can login with valid credentials")
    @Severity(SeverityLevel.CRITICAL)
    @Story("Successful Login")
    @Step("Execute login test with valid credentials")
    public void testValidLogin() {
        // Test implementation
        Allure.addAttachment("Test Data", "text/plain", "username: test@example.com");
        Assert.assertTrue(true, "Login should be successful");
    }
    
    @Test(description = "Verify login fails with invalid credentials")
    @Severity(SeverityLevel.NORMAL)
    @Story("Failed Login")
    @Step("Execute login test with invalid credentials")
    public void testInvalidLogin() {
        // Test implementation
        Allure.addAttachment("Error Details", "text/plain", "Invalid credentials provided");
        Assert.assertTrue(false, "Login should fail with invalid credentials");
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
                        pip install allure-pytest
                      </div>
                      <div className="text-green-600 dark:text-green-400 mb-2"># requirements.txt</div>
                      <div className="text-slate-800 dark:text-white">
                        allure-pytest==2.13.2
                      </div>
                    </div>
                  </div>

                  {/* Python Code Example */}
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2. Complete Python Example:</p>
                    <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`# test_allure_example.py
import allure
import pytest

@allure.epic("User Authentication")
@allure.feature("Login Functionality")
class TestLogin:

    @allure.story("Successful Login")
    @allure.severity(allure.severity_level.CRITICAL)
    @allure.description("Verify user can login with valid credentials")
    @allure.step("Execute login test with valid credentials")
    def test_valid_login(self):
        # Test implementation
        allure.attach("username: test@example.com", name="Test Data", attachment_type=allure.attachment_type.TEXT)
        assert True, "Login should be successful"
    
    @allure.story("Failed Login")
    @allure.severity(allure.severity_level.NORMAL)
    @allure.description("Verify login fails with invalid credentials")
    @allure.step("Execute login test with invalid credentials")
    def test_invalid_login(self):
        # Test implementation
        allure.attach("Invalid credentials provided", name="Error Details", attachment_type=allure.attachment_type.TEXT)
        assert False, "Login should fail with invalid credentials"
    
    @allure.step("Setup test data")
    def setup_test_data(self):
        allure.attach("test setup completed", name="Setup Info", attachment_type=allure.attachment_type.TEXT)

if __name__ == "__main__":
    pytest.main([__file__, "--alluredir=./allure-results"])`}
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
                        npm install allure-js --save-dev
                      </div>
                      <div className="text-green-600 dark:text-green-400 mb-2"># package.json</div>
                      <div className="text-slate-800 dark:text-white mb-3">
                        <span className="text-yellow-600 dark:text-yellow-400">"devDependencies"</span>: {'{'}
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-green-600 dark:text-green-400">"allure-js"</span>: <span className="text-orange-600 dark:text-orange-400">"^2.0.0"</span>
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
{`// allure-test-example.js
const allure = require('allure-js');
const {describe, it, before, after} = require('mocha');
const {assert} = require('assert');

describe('User Authentication', function() {
  before(function() {
    allure.epic('User Authentication');
    allure.feature('Login Functionality');
  });

  it('should login with valid credentials', function() {
    allure.story('Successful Login');
    allure.severity('critical');
    allure.step('Execute login test with valid credentials', function() {
      // Test implementation
      allure.attach('username: test@example.com', 'Test Data', 'text/plain');
      assert.ok(true, 'Login should be successful');
    });
  });

  it('should fail with invalid credentials', function() {
    allure.story('Failed Login');
    allure.severity('normal');
    allure.step('Execute login test with invalid credentials', function() {
      // Test implementation
      allure.attach('Invalid credentials provided', 'Error Details', 'text/plain');
      assert.ok(false, 'Login should fail with invalid credentials');
    });
  });

  after(function() {
    allure.step('Test cleanup completed', function() {
      // Cleanup implementation
    });
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
                  <li>• <strong>Gradle:</strong> Add <code>implementation 'io.qameta.allure:allure-testng:2.24.0'</code> to build.gradle</li>
                  <li>• <strong>Docker:</strong> Use official allure Docker image for report generation</li>
                  <li>• <strong>CI/CD:</strong> Configure Allure reports in Jenkins, GitHub Actions, or GitLab CI</li>
                  <li>• <strong>Command Line:</strong> Install <code>allure-commandline</code> for report generation</li>
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
                      <h6 className="font-semibold text-green-900 dark:text-green-100">Add Dependencies</h6>
                      <p className="text-sm text-green-800 dark:text-green-200">Include Allure TestNG and related dependencies</p>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-blue-900 dark:text-blue-100">Configure TestNG</h6>
                      <p className="text-sm text-blue-800 dark:text-blue-200">Add Allure listener to testng.xml</p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-purple-900 dark:text-purple-100">Add Allure Annotations</h6>
                      <p className="text-sm text-purple-800 dark:text-purple-200">Use @Feature, @Story, @Severity annotations</p>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-orange-900 dark:text-orange-100">Generate Reports</h6>
                      <p className="text-sm text-orange-800 dark:text-orange-200">Run Allure command to generate HTML reports</p>
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
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Base Test Class with Allure</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// AllureBaseTest.java
import io.qameta.allure.*;
import io.qameta.allure.model.Status;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.OutputType;
import org.testng.ITestResult;
import org.testng.annotations.*;

import java.io.ByteArrayInputStream;

@Feature("Web Application Testing")
public class AllureBaseTest {
    
    protected WebDriver driver;
    
    @BeforeSuite(alwaysRun = true)
    @Step("Initialize test environment")
    public void setUpSuite() {
        Allure.addAttachment("Environment Info", "text/plain", 
            "OS: " + System.getProperty("os.name") + "\\n" +
            "Java Version: " + System.getProperty("java.version"));
    }
    
    @BeforeMethod(alwaysRun = true)
    @Step("Setup test for {method}")
    public void setUpTest(ITestResult result) {
        // Initialize WebDriver
        driver = WebDriverFactory.createDriver();
        driver.manage().window().maximize();
        
        Allure.step("Test started: " + result.getMethod().getMethodName(), Status.PASSED);
    }
    
    @AfterMethod(alwaysRun = true)
    @Step("Cleanup test for {method}")
    public void tearDownTest(ITestResult result) {
        if (result.getStatus() == ITestResult.FAILURE) {
            captureAndAttachScreenshot(result.getMethod().getMethodName());
            Allure.addAttachment("Error Details", "text/plain", 
                result.getThrowable().getMessage());
        }
        
        if (driver != null) {
            driver.quit();
        }
    }
    
    @Step("Capture screenshot: {testName}")
    private void captureAndAttachScreenshot(String testName) {
        try {
            TakesScreenshot screenshot = (TakesScreenshot) driver;
            byte[] screenshotBytes = screenshot.getScreenshotAs(OutputType.BYTES);
            
            Allure.addAttachment("Screenshot - " + testName, 
                "image/png", 
                new ByteArrayInputStream(screenshotBytes), 
                "png");
        } catch (Exception e) {
            Allure.addAttachment("Screenshot Error", "text/plain", 
                "Failed to capture screenshot: " + e.getMessage());
        }
    }
}`}
                </pre>
              </div>
            </div>

            {/* Sample Test with Allure */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Sample Test with Allure Annotations</h4>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// AllureLoginTest.java
import io.qameta.allure.*;
import org.testng.annotations.Test;
import org.testng.Assert;

@Epic("User Authentication")
@Feature("Login Functionality")
@Story("User Login")
public class AllureLoginTest extends AllureBaseTest {
    
    @Test(description = "Verify user can login with valid credentials")
    @Severity(SeverityLevel.CRITICAL)
    @Story("Successful Login")
    @Description("This test verifies that a user can successfully login to the application using valid credentials")
    public void testValidLogin() {
        Allure.step("Navigate to login page");
        driver.get("https://example.com/login");
        
        Allure.step("Enter valid credentials");
        LoginPage loginPage = new LoginPage(driver);
        loginPage.enterUsername("testuser@example.com");
        loginPage.enterPassword("password123");
        
        Allure.addAttachment("Test Data", "text/plain", 
            "username: testuser@example.com\\npassword: ******");
        
        Allure.step("Click login button");
        loginPage.clickLogin();
        
        Allure.step("Verify successful login");
        DashboardPage dashboard = new DashboardPage(driver);
        Assert.assertTrue(dashboard.isWelcomeMessageDisplayed(), 
            "Welcome message should be displayed");
        
        Allure.step("Login test completed successfully");
    }
    
    @Test(description = "Verify login fails with invalid credentials")
    @Severity(SeverityLevel.NORMAL)
    @Story("Failed Login")
    @Description("This test verifies that login fails appropriately when invalid credentials are provided")
    public void testInvalidLogin() {
        Allure.step("Navigate to login page");
        driver.get("https://example.com/login");
        
        Allure.step("Enter invalid credentials");
        LoginPage loginPage = new LoginPage(driver);
        loginPage.enterUsername("invalid@example.com");
        loginPage.enterPassword("wrongpassword");
        
        Allure.step("Click login button");
        loginPage.clickLogin();
        
        Allure.step("Verify error message");
        Assert.assertTrue(loginPage.isErrorMessageDisplayed(), 
            "Error message should be displayed");
        
        Allure.addAttachment("Error Details", "text/plain", 
            loginPage.getErrorMessage());
        
        Allure.step("Invalid login test completed");
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
              Exploring powerful Allure Reports capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Categories and Labels */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">Test Organization</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// Test hierarchy
@Epic("User Management")
@Feature("Authentication")
@Story("User Login")
@Feature("Registration")

// Test severity
@Severity(SeverityLevel.BLOCKER)
@Severity(SeverityLevel.CRITICAL)
@Severity(SeverityLevel.NORMAL)
@Severity(SeverityLevel.MINOR)
@Severity(SeverityLevel.TRIVIAL)

// Test metadata
@Owner("John Doe")
@Link("https://jira.example.com/TEST-123")
@Issue("BUG-456")
@TmsLink("TC-789")
@Description("Detailed test description")`}
                  </pre>
                </div>
              </div>

              {/* Attachments */}
              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-700">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4">Rich Attachments</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-teal-300 dark:border-teal-600">
                  <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// Screenshots
Allure.addAttachment("Screenshot", "image/png", screenshotBytes);

// Text files
Allure.addAttachment("Log File", "text/plain", logContent);

// JSON data
Allure.addAttachment("API Response", "application/json", jsonResponse);

// CSV data
Allure.addAttachment("Test Data", "text/csv", csvContent);

// HTML content
Allure.addAttachment("Report", "text/html", htmlContent);

// Custom attachment method
@Attachment("Custom Data")
public String attachCustomData(String data) {
    return data;
}`}
                  </pre>
                </div>
              </div>

              {/* Steps and Sub-steps */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Step Hierarchies</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                  <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`@Step("Complete user registration")
public void completeUserRegistration() {
    enterUserDetails();
    selectPreferences();
    submitRegistration();
}

@Step("Enter user details")
public void enterUserDetails() {
    enterPersonalInfo();
    enterContactInfo();
}

@Step("Enter personal information")
public void enterPersonalInfo() {
    // Implementation
}

// Dynamic steps
Allure.step("Dynamic step with parameter: " + value, () -> {
    // Step implementation
});

// Conditional steps
if (condition) {
    Allure.step("Conditional step", Status.PASSED);
}`}
                  </pre>
                </div>
              </div>

              {/* Environment Properties */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Environment Info</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                  <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`// Create environment.properties file
# Environment Properties
Browser=Chrome
Version=120.0
OS=Windows 11
Environment=QA
BuildNumber=123
TestRunner=TestNG
Framework=Selenium WebDriver

// Or set programmatically
Allure.addEnvironment("Browser", "Chrome");
Allure.addEnvironment("Version", "120.0");
Allure.addEnvironment("OS", "Windows 11");
Allure.addEnvironment("Environment", "QA");
Allure.addEnvironment("Build", "123");`}
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
              Commands and CI/CD integration for Allure reports
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Command Line Usage</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`# Install Allure Command Line
npm install -g allure-commandline

# Generate report from test results
allure serve target/allure-results

# Generate static HTML report
allure generate target/allure-results --clean -o target/allure-report

# Open existing report
allure open target/allure-report

# Clean results directory
allure plugin clean

# List available plugins
allure plugin list

# Install additional plugins
allure plugin install xunit-xml-plugin`}
                </pre>
              </div>
            </div>

            {/* CI/CD Integration */}
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">GitHub Actions Integration</h4>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-indigo-300 dark:border-indigo-600">
                <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`name: Test with Allure Reports

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
    
    - name: Set up JDK
      uses: actions/setup-java@v3
      with:
        java-version: '11'
        distribution: 'temurin'
    
    - name: Install Allure
      run: |
        sudo apt-get update
        sudo apt-get install allure
    
    - name: Run tests
      run: |
        mvn clean test
        allure generate target/allure-results --clean -o target/allure-report
    
    - name: Upload Allure results
      uses: actions/upload-artifact@v3
      with:
        name: allure-results
        path: target/allure-results/
    
    - name: Upload Allure report
      uses: actions/upload-artifact@v3
      with:
        name: allure-report
        path: target/allure-report/`}
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
              Guidelines for effective Allure Reports implementation
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
                  <span>Use proper test hierarchy (Epic {'>'} Feature {'>'} Story)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Add meaningful descriptions and severity levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Capture screenshots for both pass and fail scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use steps to break down complex test flows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Include environment information and test data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Integrate with CI/CD for automated report generation</span>
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
                  <span>Don't use generic test names without descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid missing severity levels and test categorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore test data and environment details</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid inconsistent annotation usage across tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't forget to clean up old report files</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid overloading reports with excessive attachments</span>
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
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
  TrendingUp
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function ExtentReportsComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'extent-reports',
    title: 'Extent Reports',
    explanation: 'Comprehensive test reporting with Extent Reports framework',
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
        title="Extent Reports"
        description="Master comprehensive test reporting with Extent Reports framework to create beautiful, interactive HTML reports with rich visualizations and detailed test insights"
        icon={BarChart3}
        colorTheme="indigo"
        badges={[
          { label: 'Extent Reports', variant: 'secondary' },
          { label: 'HTML Reports', variant: 'secondary' },
          { label: 'Test Analytics', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Section 1: What is Extent Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <FileText className="w-7 h-7" />
              What is Extent Reports?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the Extent Reports framework and its capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Extent Reports - Clear and Simple Explanation */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">📊 Understanding Extent Reports</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-300 dark:border-slate-600">
                {/* What is Extent Reports */}
                <div className="mb-8">
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    What is Extent Reports?
                  </h6>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    <strong>Extent Reports</strong> is a powerful open-source reporting library that transforms your test execution results into beautiful, interactive HTML reports. It provides comprehensive insights into test execution with charts, graphs, and detailed analysis.
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
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-lg border border-green-200 dark:border-green-700 hover:shadow-md transition-shadow">
                      <div className="text-2xl mb-2">📈</div>
                      <h6 className="font-bold text-green-900 dark:text-green-100 mb-1">Interactive Charts</h6>
                      <p className="text-sm text-green-700 dark:text-green-300">Visual test execution summaries with pie charts, bar graphs, and trend analysis</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
                      <div className="text-2xl mb-2">📸</div>
                      <h6 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Screenshot Integration</h6>
                      <p className="text-sm text-blue-700 dark:text-blue-300">Automatic screenshot capture on test failures for better debugging</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-lg border border-purple-200 dark:border-purple-700 hover:shadow-md transition-shadow">
                      <div className="text-2xl mb-2">🎨</div>
                      <h6 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Customizable Themes</h6>
                      <p className="text-sm text-purple-700 dark:text-purple-300">Multiple built-in themes and custom branding options</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20 rounded-lg border border-orange-200 dark:border-orange-700 hover:shadow-md transition-shadow">
                      <div className="text-2xl mb-2">🔍</div>
                      <h6 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Advanced Filtering</h6>
                      <p className="text-sm text-orange-700 dark:text-orange-300">Filter tests by status, category, author, and more</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/20 rounded-lg border border-red-200 dark:border-red-700 hover:shadow-md transition-shadow">
                      <div className="text-2xl mb-2">📝</div>
                      <h6 className="font-bold text-red-900 dark:text-red-100 mb-1">Detailed Logs</h6>
                      <p className="text-sm text-red-700 dark:text-red-300">Comprehensive test execution logs with timestamps</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/20 rounded-lg border border-cyan-200 dark:border-cyan-700 hover:shadow-md transition-shadow">
                      <div className="text-2xl mb-2">⏱️</div>
                      <h6 className="font-bold text-cyan-900 dark:text-cyan-100 mb-1">Timeline View</h6>
                      <p className="text-sm text-cyan-700 dark:text-cyan-300">Chronological test execution timeline with duration tracking</p>
                    </div>
                  </div>
                </div>

                {/* How It Works */}
                <div className="mb-8">
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚙️</span>
                    How Extent Reports Works
                  </h6>
                  <div className="relative">
                    {/* Process Flow */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          1
                        </div>
                        <div className="flex-1">
                          <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Test Execution</h6>
                          <p className="text-sm text-slate-700 dark:text-slate-300">Your Selenium tests run and collect data</p>
                        </div>
                      </div>
                      <div className="ml-6 w-0.5 h-8 bg-slate-300 dark:bg-slate-600"></div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          2
                        </div>
                        <div className="flex-1">
                          <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Data Collection</h6>
                          <p className="text-sm text-slate-700 dark:text-slate-300">ExtentReports API captures test results, screenshots, and logs</p>
                        </div>
                      </div>
                      <div className="ml-6 w-0.5 h-8 bg-slate-300 dark:bg-slate-600"></div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          3
                        </div>
                        <div className="flex-1">
                          <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Report Generation</h6>
                          <p className="text-sm text-slate-700 dark:text-slate-300">Engine processes data and creates interactive HTML report</p>
                        </div>
                      </div>
                      <div className="ml-6 w-0.5 h-8 bg-slate-300 dark:bg-slate-600"></div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          4
                        </div>
                        <div className="flex-1">
                          <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-1">View & Analyze</h6>
                          <p className="text-sm text-slate-700 dark:text-slate-300">Open HTML report in browser to view results and insights</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practical Example */}
                <div className="mb-8">
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">💻</span>
                    Practical Example
                  </h6>
                  <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <div className="text-green-600 dark:text-green-400 mb-2">// Java Example - Setting up Extent Reports</div>
                    <div className="text-slate-800 dark:text-white mb-1">
                      <span className="text-purple-600 dark:text-purple-400">ExtentReports</span> extent = <span className="text-purple-600 dark:text-purple-400">new</span> <span className="text-purple-600 dark:text-purple-400">ExtentReports</span>();
                    </div>
                    <div className="text-slate-800 dark:text-white mb-1">
                      <span className="text-purple-600 dark:text-purple-400">ExtentSparkReporter</span> spark = <span className="text-purple-600 dark:text-purple-400">new</span> <span className="text-purple-600 dark:text-purple-400">ExtentSparkReporter</span>(<span className="text-green-600 dark:text-green-400">"test-output/Report.html"</span>);
                    </div>
                    <div className="text-slate-800 dark:text-white mb-1">
                      spark.config().setTheme(<span className="text-purple-600 dark:text-purple-400">Theme</span>.<span className="text-yellow-600 dark:text-yellow-400">STANDARD</span>);
                    </div>
                    <div className="text-slate-800 dark:text-white mb-1">
                      spark.config().setDocumentTitle(<span className="text-green-600 dark:text-green-400">"Selenium Test Report"</span>);
                    </div>
                    <div className="text-slate-800 dark:text-white mb-1">
                      spark.config().setReportName(<span className="text-green-600 dark:text-green-400">"E-commerce Test Suite"</span>);
                    </div>
                    <div className="text-slate-800 dark:text-white mb-3">
                      extent.attachReporter(spark);
                    </div>
                    
                    <div className="text-green-600 dark:text-green-400 mb-2">// Creating and running tests</div>
                    <div className="text-slate-800 dark:text-white mb-1">
                      <span className="text-purple-600 dark:text-purple-400">ExtentTest</span> test = extent.createTest(<span className="text-green-600 dark:text-green-400">"Login Test"</span>);
                    </div>
                    <div className="text-slate-800 dark:text-white mb-1">
                      test.log(<span className="text-purple-600 dark:text-purple-400">Status</span>.<span className="text-yellow-600 dark:text-yellow-400">PASS</span>, <span className="text-green-600 dark:text-green-400">"User successfully logged in"</span>);
                    </div>
                    <div className="text-slate-800 dark:text-white mb-3">
                      test.addScreenCaptureFromPath(<span className="text-green-600 dark:text-green-400">"screenshots/login.png"</span>);
                    </div>
                    
                    <div className="text-green-600 dark:text-green-400 mb-2">// Generate final report</div>
                    <div className="text-slate-800 dark:text-white">
                      extent.<span className="text-yellow-600 dark:text-yellow-400">flush</span>();
                    </div>
                  </div>
                </div>

                {/* Report Output Preview */}
                <div className="mb-8">
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">👁️</span>
                    What the Report Looks Like
                  </h6>
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg p-6 border border-slate-300 dark:border-slate-600">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-3">Dashboard View</h6>
                        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Overall test execution summary</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Pass/Fail/Skip statistics</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>Execution timeline chart</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span>Category and author breakdown</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-bold text-slate-900 dark:text-slate-100 mb-3">Test Details</h6>
                        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span>Individual test steps and logs</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <span>Screenshots on failures</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                            <span>Exception stack traces</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <span>Test execution duration</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div>
                  <h6 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    Best Practices
                  </h6>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
                      <h6 className="font-bold text-green-900 dark:text-green-100 mb-2">Do's</h6>
                      <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                        <li>• Add meaningful test descriptions</li>
                        <li>• Include screenshots for failures</li>
                        <li>• Categorize tests by module/feature</li>
                        <li>• Add author information for ownership</li>
                        <li>• Use consistent naming conventions</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-700">
                      <h6 className="font-bold text-red-900 dark:text-red-100 mb-2">Don'ts</h6>
                      <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
                        <li>• Don't add sensitive data to reports</li>
                        <li>• Avoid overly long test names</li>
                        <li>• Don't forget to flush the report</li>
                        <li>• Avoid duplicate test information</li>
                        <li>• Don't ignore report file size limits</li>
                      </ul>
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
              Setting up Extent Reports in your Selenium project
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
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">1. Add Maven Dependency:</p>
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 dark:text-green-400 mb-2">&lt;!-- pom.xml --&gt;</div>
                      <div className="text-slate-800 dark:text-white mb-1">
                        <span className="text-purple-600 dark:text-purple-400">&lt;dependency&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;groupId&gt;</span>com.aventstack<span className="text-purple-600 dark:text-purple-400">&lt;/groupId&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;artifactId&gt;</span>extentreports<span className="text-purple-600 dark:text-purple-400">&lt;/artifactId&gt;</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">&lt;version&gt;</span>5.1.1<span className="text-purple-600 dark:text-purple-400">&lt;/version&gt;</span>
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
{`// ExtentReportsTest.java
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import org.testng.annotations.*;

public class ExtentReportsTest {
    private static ExtentReports extent;
    private static ExtentTest test;
    
    @BeforeClass
    public static void setUp() {
        ExtentSparkReporter spark = new ExtentSparkReporter(
            "test-output/ExtentReport.html"
        );
        extent = new ExtentReports();
        extent.attachReporter(spark);
    }
    
    @Test
    public void loginTest() {
        test = extent.createTest("Login Test");
        test.log(Status.PASS, "Login successful");
    }
    
    @AfterClass
    public static void tearDown() {
        extent.flush();
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
                        pip install extentreports
                      </div>
                      <div className="text-green-600 dark:text-green-400 mb-2"># requirements.txt</div>
                      <div className="text-slate-800 dark:text-white">
                        extentreports==0.4.3
                      </div>
                    </div>
                  </div>

                  {/* Python Code Example */}
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2. Complete Python Example:</p>
                    <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`# test_extent_reports.py
from extentreports import ExtentReports, Status
import unittest
import time

class TestLogin(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        # Initialize Extent Reports
        cls.extent = ExtentReports()
        cls.extent.config.html_title = "Test Report"
        cls.extent.config.report_title = "Login Test Suite"
    
    def setUp(self):
        # Create test for each method
        self.test = self.extent.create_test(
            "Login Test", 
            "Testing login functionality"
        )
    
    def test_valid_login(self):
        # Simulate login test
        time.sleep(1)
        self.test.log(Status.PASS, "Login successful with valid credentials")
        self.assertTrue(True)
    
    def test_invalid_login(self):
        # Simulate invalid login test
        time.sleep(1)
        self.test.log(Status.FAIL, "Login failed with invalid credentials")
        self.assertFalse(False)
    
    @classmethod
    def tearDownClass(cls):
        # Generate report
        cls.extent.write()

if __name__ == "__main__":
    unittest.main()`}
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
                        npm install extentreports --save-dev
                      </div>
                      <div className="text-green-600 dark:text-green-400 mb-2"># package.json</div>
                      <div className="text-slate-800 dark:text-white mb-3">
                        <span className="text-yellow-600 dark:text-yellow-400">"devDependencies"</span>: {'{'}
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-green-600 dark:text-green-400">"extentreports"</span>: <span className="text-orange-600 dark:text-orange-400">"^1.0.0"</span>
                      </div>
                      <div className="text-slate-800 dark:text-white">
                        {'}'}
                      </div>
                    </div>
                  </div>

                  {/* JavaScript Code Example */}
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2. Complete JavaScript Example:</p>
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 dark:text-green-400 mb-2">// extent-report-example.js</div>
                      <div className="text-slate-800 dark:text-white mb-1">
                        <span className="text-purple-600 dark:text-purple-400">const</span> {'{'}ExtentReports{'}'} = <span className="text-purple-600 dark:text-purple-400">require</span>(<span className="text-green-600 dark:text-green-400">'extentreports'</span>);
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1">
                        <span className="text-purple-600 dark:text-purple-400">const</span> {'{'}describe, it, before, after{'}'} = <span className="text-purple-600 dark:text-purple-400">require</span>(<span className="text-green-600 dark:text-green-400">'mocha'</span>);
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1">
                        <span className="text-purple-600 dark:text-purple-400">const</span> {'{'}assert{'}'} = <span className="text-purple-600 dark:text-purple-400">require</span>(<span className="text-green-600 dark:text-green-400">'assert'</span>);
                      </div>
                      <div className="text-slate-800 dark:text-white mb-3">
                      </div>
                      
                      <div className="text-slate-800 dark:text-white mb-1">
                        <span className="text-purple-600 dark:text-purple-400">let</span> extent;
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1">
                        <span className="text-purple-600 dark:text-purple-400">let</span> test;
                      </div>
                      <div className="text-slate-800 dark:text-white mb-3">
                      </div>
                      
                      <div className="text-slate-800 dark:text-white mb-1">
                        <span className="text-purple-600 dark:text-purple-400">before</span>(<span className="text-purple-600 dark:text-purple-400">function</span>() {'{'}
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-green-600 dark:text-green-400">// Initialize Extent Reports</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        extent = <span className="text-purple-600 dark:text-purple-400">new</span> ExtentReports();
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        extent.config.reportName = <span className="text-green-600 dark:text-green-400">'Login Test Report'</span>;
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        extent.config.reportTitle = <span className="text-green-600 dark:text-green-400">'Extent Report Example'</span>;
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        extent.config.timestamp = <span className="text-orange-600 dark:text-orange-400">true</span>;
                      </div>
                      <div className="text-slate-800 dark:text-white mb-3">
                      </div>
                      
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-green-600 dark:text-green-400">// Attach HTML reporter</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-purple-600 dark:text-purple-400">const</span> spark = <span className="text-purple-600 dark:text-purple-400">new</span> ExtentReports.<span className="text-yellow-600 dark:text-yellow-400">ExtentSparkReporter</span>(<span className="text-green-600 dark:text-green-400">'test-output/ExtentReport.html'</span>);
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        extent.attachReporter(spark);
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1">
                        {'})'};
                      </div>
                      <div className="text-slate-800 dark:text-white mb-3">
                      </div>
                      
                      <div className="text-slate-800 dark:text-white mb-1">
                        <span className="text-purple-600 dark:text-purple-400">after</span>(<span className="text-purple-600 dark:text-purple-400">function</span>() {'{'}
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        <span className="text-green-600 dark:text-green-400">// Generate report</span>
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1 pl-4">
                        extent.<span className="text-yellow-600 dark:text-yellow-400">flush</span>();
                      </div>
                      <div className="text-slate-800 dark:text-white mb-1">
                        {'})'};
                      </div>
                      <div className="text-slate-800 dark:text-white mb-3">
                      </div>
                      
                      <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white text-xs rounded-lg p-4 overflow-x-auto border border-slate-300 dark:border-slate-700">
{`describe('Login Tests', function() {
  it('should login with valid credentials', function() {
    const test = extent.createTest('Valid Login Test');
    test.log(Status.Pass, 'User successfully logged in with valid credentials');
    test.assignAuthor('Test Engineer');
    test.assignCategory('Authentication');
    assert.ok(true, 'Login should be successful');
  });

  it('should fail with invalid credentials', function() {
    const test = extent.createTest('Invalid Login Test');
    test.log(Status.Fail, 'Login failed with invalid credentials');
    test.log(Status.Warning, 'Error message displayed to user');
    test.assignAuthor('Test Engineer');
    test.assignCategory('Authentication');
    assert.ok(false, 'Login should fail with invalid credentials');
  });

  it('should handle empty credentials', function() {
    const test = extent.createTest('Empty Credentials Test');
    test.log(Status.Skip, 'Test skipped - empty credentials not allowed');
    test.assignAuthor('Test Engineer');
    test.assignCategory('Authentication');
  });
});`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Setup Options */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h6 className="font-bold text-blue-900 dark:text-blue-100 mb-2">💡 Additional Setup Options</h6>
                <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                  <li>• <strong>Gradle:</strong> Add <code>implementation 'com.aventstack:extentreports:5.1.1'</code> to build.gradle</li>
                  <li>• <strong>Docker:</strong> Use official extentreports Docker image for containerized reporting</li>
                  <li>• <strong>CI/CD:</strong> Configure report generation in Jenkins, GitHub Actions, or GitLab CI</li>
                  <li>• <strong>Cloud Storage:</strong> Configure S3 or Azure Blob storage for report hosting</li>
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
                      <h6 className="font-semibold text-green-900 dark:text-green-100">Initialize ExtentReports</h6>
                      <p className="text-sm text-green-800 dark:text-green-200">Create ExtentReports instance with configuration</p>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-blue-900 dark:text-blue-100">Create Test</h6>
                      <p className="text-sm text-blue-800 dark:text-blue-200">Create tests with descriptions and categories</p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-purple-900 dark:text-purple-100">Log Information</h6>
                      <p className="text-sm text-purple-800 dark:text-purple-200">Add logs, screenshots, and test data</p>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-orange-900 dark:text-orange-100">Generate Report</h6>
                      <p className="text-sm text-orange-800 dark:text-orange-200">Flush results to create HTML report</p>
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
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Base Test Class with Extent Reports</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.tests;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.OutputType;
import org.testng.ITestResult;
import org.testng.annotations.*;

public class BaseTest {
    
    protected static ExtentReports extent;
    protected static ExtentTest test;
    protected WebDriver driver;
    
    @BeforeSuite
    public void setUpExtent() {
        // Initialize Extent Reports
        ExtentSparkReporter spark = new ExtentSparkReporter("target/ExtentReport.html");
        
        // Configure report
        spark.config().setDocumentTitle("Automation Test Report");
        spark.config().setReportName("Selenium Test Suite");
        spark.config().setTheme(Theme.STANDARD);
        spark.config().setTimeStampFormat("EEEE, MMMM dd, yyyy, hh:mm a '('zzz')'");
        
        // Attach reporter
        extent = new ExtentReports();
        extent.attachReporter(spark);
        
        // Add system information
        extent.setSystemInfo("OS", System.getProperty("os.name"));
        extent.setSystemInfo("Java Version", System.getProperty("java.version"));
        extent.setSystemInfo("User", System.getProperty("user.name"));
        extent.setSystemInfo("Environment", System.getProperty("env", "QA"));
    }
    
    @BeforeMethod
    public void setUpTest(ITestResult result) {
        // Create test with method name
        test = extent.createTest(result.getMethod().getMethodName());
        
        // Initialize WebDriver
        driver = WebDriverFactory.createDriver();
        driver.manage().window().maximize();
        
        // Log test start
        test.log(Status.INFO, "Test started: " + result.getMethod().getMethodName());
    }
    
    @AfterMethod
    public void tearDownTest(ITestResult result) {
        // Handle test results
        if (result.getStatus() == ITestResult.FAILURE) {
            test.log(Status.FAIL, "Test FAILED: " + result.getThrowable().getMessage());
            
            // Capture and attach screenshot
            try {
                String screenshotPath = captureScreenshot(result.getMethod().getMethodName());
                test.addScreenCaptureFromPath(screenshotPath);
                test.log(Status.INFO, "Screenshot captured for failed test");
            } catch (Exception e) {
                test.log(Status.WARNING, "Failed to capture screenshot: " + e.getMessage());
            }
        } else if (result.getStatus() == ITestResult.SKIP) {
            test.log(Status.SKIP, "Test SKIPPED: " + result.getThrowable().getMessage());
        } else {
            test.log(Status.PASS, "Test PASSED");
        }
        
        // Close browser
        if (driver != null) {
            driver.quit();
        }
    }
    
    @AfterSuite
    public void tearDownExtent() {
        // Generate report
        extent.flush();
        System.out.println("Extent Report generated successfully!");
    }
    
    private String captureScreenshot(String testName) {
        // Capture screenshot logic
        TakesScreenshot screenshot = (TakesScreenshot) driver;
        File srcFile = screenshot.getScreenshotAs(OutputType.FILE);
        String destPath = "screenshots/" + testName + "_" + System.currentTimeMillis() + ".png";
        File destFile = new File(destPath);
        
        try {
            FileUtils.copyFile(srcFile, destFile);
            return destPath;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
    
    // Helper methods for logging
    protected void logInfo(String message) {
        test.log(Status.INFO, message);
    }
    
    protected void logPass(String message) {
        test.log(Status.PASS, message);
    }
    
    protected void logFail(String message) {
        test.log(Status.FAIL, message);
    }
    
    protected void logWarning(String message) {
        test.log(Status.WARNING, message);
    }
}`}</pre>
              </div>
            </div>

            {/* Test Example */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Sample Test with Extent Logging</h4>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                <pre className="text-sm font-mono text-blue-800 dark:text-blue-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.tests;

import org.testng.annotations.Test;
import org.testng.Assert;

public class LoginTest extends BaseTest {
    
    @Test(description = "Verify user can login with valid credentials")
    public void testValidLogin() {
        logInfo("Navigating to login page");
        driver.get("https://example.com/login");
        
        logInfo("Entering valid credentials");
        LoginPage loginPage = new LoginPage(driver);
        loginPage.enterUsername("testuser@example.com");
        loginPage.enterPassword("password123");
        
        logInfo("Clicking login button");
        loginPage.clickLogin();
        
        logInfo("Verifying successful login");
        DashboardPage dashboard = new DashboardPage(driver);
        Assert.assertTrue(dashboard.isWelcomeMessageDisplayed(), 
            "Welcome message should be displayed");
        
        logPass("User successfully logged in with valid credentials");
    }
    
    @Test(description = "Verify login fails with invalid credentials")
    public void testInvalidLogin() {
        logInfo("Navigating to login page");
        driver.get("https://example.com/login");
        
        logInfo("Entering invalid credentials");
        LoginPage loginPage = new LoginPage(driver);
        loginPage.enterUsername("invalid@example.com");
        loginPage.enterPassword("wrongpassword");
        
        logInfo("Clicking login button");
        loginPage.clickLogin();
        
        logInfo("Verifying error message");
        Assert.assertTrue(loginPage.isErrorMessageDisplayed(), 
            "Error message should be displayed");
        
        logPass("Login properly failed with invalid credentials");
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Advanced Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <Star className="w-7 h-7" />
              Advanced Features
            </CardTitle>
            <CardDescription className="text-base">
              Exploring powerful Extent Reports capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Categories and Tags */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Test Categories</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`// Create test with category
ExtentTest test = extent.createTest("Login Test")
    .assignCategory("Authentication")
    .assignCategory("Critical");

// Multiple categories
test.assignCategory("Regression", "Smoke", "API");

// Author assignment
test.assignAuthor("John Doe");

// Device assignment
test.assignDevice("Chrome", "Windows 10");`}</pre>
                </div>
              </div>

              {/* Logs and Media */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Rich Media Support</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                  <pre className="text-xs font-mono text-green-800 dark:text-green-200 overflow-x-auto whitespace-pre-wrap break-words">
{`// Add screenshots
test.addScreenCaptureFromPath("screenshots/login.png");

// Add base64 image
String base64Image = captureScreenshotAsBase64();
test.addScreenCaptureFromBase64String(base64Image, "Login Page");

// Add logs with different levels
test.log(Status.INFO, "Test started");
test.log(Status.WARNING, "Slow response detected");
test.log(Status.ERROR, "Element not found");

// Add custom HTML
test.info("<b>Bold text</b> and <i>italic text</i>");

// Add JSON data
test.info("{\"user\": \"john\", \"status\": \"active\"}");`}</pre>
                </div>
              </div>

              {/* Test Attributes */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">Test Attributes</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="text-xs font-mono text-orange-800 dark:text-orange-200 overflow-x-auto whitespace-pre-wrap break-words">
{`// Set test description
test.getModel().setDescription("Verify user login functionality");

// Set test behavior
test.getModel().setBehavior(BehaviorType.DEVELOPER);

// Add test labels
test.getModel().setLabels(List.of("smoke", "regression"));

// Set device details
test.getModel().setDeviceModel("iPhone 13");
test.getModel().setDeviceName("Mobile");

// Add exception details
test.fail(ex).getModel().setThrowable(
    new Throwable("Custom error message")
);`}</pre>
                </div>
              </div>

              {/* Report Configuration */}
              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-700">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4">Report Customization</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-teal-300 dark:border-teal-600">
                  <pre className="text-xs font-mono text-teal-800 dark:text-teal-200 overflow-x-auto whitespace-pre-wrap break-words">
{`// Custom CSS
spark.config().setCss("css/custom.css");

// Custom JS
spark.config().setJs("js/custom.js");

// Report language
spark.config().setEncoding("UTF-8");

// Timeline configuration
spark.config().setTimelineEnabled(true);

// Offline mode
spark.config().setOfflineMode(true);

// Custom logo
spark.config().setLogo("logo/company.png");`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-teal-600 dark:text-teal-400">
              <CheckCircle className="w-7 h-7" />
              Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Guidelines for effective Extent Reports implementation
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
                  <span>Capture screenshots for failed tests automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Categorize tests for better organization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Include meaningful logs at key test steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use proper test attributes (author, device, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Configure reports for different environments</span>
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
                  <span>Don't ignore report initialization and cleanup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid logging too much unnecessary information</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't store sensitive data in reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid inconsistent logging patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't forget to flush reports at the end</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid using hardcoded report paths</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/30">
          <BarChart3 className="h-4 w-4 text-indigo-600" />
          <AlertTitle className="text-indigo-900 dark:text-indigo-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-indigo-800 dark:text-indigo-200">
            <ul className="space-y-2 mt-2">
              <li>• Extent Reports creates beautiful, interactive HTML test reports</li>
              <li>• Supports rich media including screenshots, logs, and custom HTML</li>
              <li>• Provides dashboard views with charts and analytics</li>
              <li>• Integrates seamlessly with TestNG, JUnit, and other frameworks</li>
              <li>• Offers extensive customization options for branding and layout</li>
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

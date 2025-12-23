'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Settings,
  Terminal,
  FileText,
  Code,
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

export function CucumberHooksComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'cucumber-hooks',
    title: 'Cucumber Hooks',
    explanation: 'Understanding and implementing Cucumber hooks for test lifecycle management',
    category: '22. BDD with Cucumber'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-orange-900/20">
      <PageHeader
        title="Cucumber Hooks"
        description="Master Cucumber hooks for managing test lifecycle, setup, teardown, and executing code at specific points during test execution"
        icon={Settings}
        colorTheme="orange"
        badges={[
          { label: 'Hooks', variant: 'secondary' },
          { label: 'Lifecycle', variant: 'secondary' },
          { label: 'Setup/Teardown', variant: 'secondary' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Section 1: Introduction to Hooks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
              <Settings className="w-7 h-7" />
              What are Cucumber Hooks?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding hooks and their role in test lifecycle management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">Definition</h4>
                <p className="text-orange-800 dark:text-orange-200">
                  Cucumber hooks are blocks of code that run at specific points during the test execution lifecycle. They allow you to setup and teardown test environments, manage resources, and execute code before or after scenarios, features, or steps.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/20 rounded-xl border border-red-200 dark:border-red-700">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-4">Purpose</h4>
                <p className="text-red-800 dark:text-red-200">
                  Hooks provide a way to execute setup and teardown code, manage test data, initialize WebDriver instances, capture screenshots on failure, and perform other lifecycle management tasks automatically.
                </p>
              </div>
            </div>

            {/* Hook Types */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Types of Cucumber Hooks</h5>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-900 dark:text-green-100">@Before</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">Runs before each scenario</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-100 dark:bg-red-900/40 rounded-lg">
                    <Star className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-red-900 dark:text-red-100">@After</h6>
                    <p className="text-sm text-red-800 dark:text-red-200">Runs after each scenario</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100">@BeforeStep</h6>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Runs before each step</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100">@AfterStep</h6>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Runs after each step</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                    <Terminal className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-orange-900 dark:text-orange-100">@BeforeAll</h6>
                    <p className="text-sm text-orange-800 dark:text-orange-200">Runs once before all scenarios</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/40 rounded-lg">
                    <Code className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-teal-900 dark:text-teal-100">@AfterAll</h6>
                    <p className="text-sm text-teal-800 dark:text-teal-200">Runs once after all scenarios</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Basic Hook Implementation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Code className="w-7 h-7" />
              Basic Hook Implementation
            </CardTitle>
            <CardDescription className="text-base">
              Creating and using basic hooks for test lifecycle management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Hooks.java</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.hooks;

import io.cucumber.java.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.OutputType;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Hooks {
    
    private static WebDriver driver;
    
    @BeforeAll
    public static void setUpBeforeAll() {
        System.out.println("=== Starting Test Suite ===");
        System.out.println("Setting up test environment...");
        
        // Initialize test configuration
        TestConfig.loadProperties();
        
        // Setup test data
        DatabaseManager.setupTestData();
        
        System.out.println("Test environment setup completed");
    }
    
    @AfterAll
    public static void tearDownAfterAll() {
        System.out.println("=== Test Suite Completed ===");
        System.out.println("Cleaning up test environment...");
        
        // Clean up test data
        DatabaseManager.cleanupTestData();
        
        // Close any open connections
        DatabaseManager.closeConnections();
        
        System.out.println("Test environment cleanup completed");
    }
    
    @Before
    public void setUpScenario(Scenario scenario) {
        System.out.println("\\n--- Starting Scenario: " + scenario.getName() + " ---");
        
        // Initialize WebDriver
        driver = WebDriverFactory.createDriver();
        driver.manage().window().maximize();
        
        // Set implicit wait
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        // Navigate to base URL
        driver.get(TestConfig.getBaseUrl());
        
        System.out.println("WebDriver initialized and navigated to base URL");
    }
    
    @After
    public void tearDownScenario(Scenario scenario) {
        System.out.println("--- Finishing Scenario: " + scenario.getName() + " ---");
        
        // Take screenshot if scenario failed
        if (scenario.isFailed()) {
            takeScreenshot(scenario);
        }
        
        // Close WebDriver
        if (driver != null) {
            driver.quit();
            driver = null;
        }
        
        System.out.println("Scenario cleanup completed");
    }
    
    @BeforeStep
    public void beforeStep(Scenario scenario) {
        String stepName = scenario.getSourceLineNames().get(scenario.getSourceLineNames().size() - 1);
        System.out.println("Executing step: " + stepName);
    }
    
    @AfterStep
    public void afterStep(Scenario scenario) {
        // Log step completion
        System.out.println("Step completed");
        
        // Optional: Take screenshot after each step (for debugging)
        if (TestConfig.isScreenshotAfterEachStep()) {
            takeScreenshot(scenario, "step_" + System.currentTimeMillis());
        }
    }
    
    private void takeScreenshot(Scenario scenario) {
        takeScreenshot(scenario, "failure");
    }
    
    private void takeScreenshot(Scenario scenario, String suffix) {
        if (driver instanceof TakesScreenshot) {
            TakesScreenshot screenshotDriver = (TakesScreenshot) driver;
            File screenshot = screenshotDriver.getScreenshotAs(OutputType.FILE);
            
            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"));
            String fileName = "screenshot_" + scenario.getName().replaceAll("[^a-zA-Z0-9]", "_") 
                            + "_" + suffix + "_" + timestamp + ".png";
            
            try {
                File destination = new File("target/screenshots/" + fileName);
                FileUtils.copyFile(screenshot, destination);
                scenario.attach(FileUtils.readFileToByteArray(screenshot), "image/png", fileName);
                System.out.println("Screenshot saved: " + fileName);
            } catch (IOException e) {
                System.err.println("Failed to save screenshot: " + e.getMessage());
            }
        }
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Advanced Hook Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <Terminal className="w-7 h-7" />
              Advanced Hook Features
            </CardTitle>
            <CardDescription className="text-base">
              Exploring advanced hook capabilities and configurations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Advanced Hooks with Tags and Order</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.hooks;

import io.cucumber.java.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.edge.EdgeDriver;

public class AdvancedHooks {
    
    private static WebDriver sharedDriver;
    private ThreadLocal<WebDriver> threadLocalDriver = new ThreadLocal<>();
    
    // Hook with specific tag - runs only for scenarios tagged @smoke
    @Before("@smoke")
    public void setUpSmokeTests(Scenario scenario) {
        System.out.println("Setting up smoke test environment");
        
        // Use faster browser for smoke tests
        threadLocalDriver.set(WebDriverFactory.createHeadlessChromeDriver());
        
        // Pre-load common data for smoke tests
        TestDataManager.loadSmokeTestData();
    }
    
    // Hook with order - runs before other @Before hooks
    @Before(order = 1)
    public void setUpFirst(Scenario scenario) {
        System.out.println("First setup hook - initializing logging");
        LoggerManager.initializeScenarioLogger(scenario);
    }
    
    // Hook with order - runs after other @Before hooks
    @Before(order = 1000)
    public void setUpLast(Scenario scenario) {
        System.out.println("Last setup hook - final preparations");
        PerformanceMonitor.startMonitoring(scenario);
    }
    
    // Hook with multiple tags
    @Before(value = "@api or @database", order = 10)
    public void setUpApiOrDatabaseTests(Scenario scenario) {
        System.out.println("Setting up API/Database test environment");
        
        // Initialize API client
        if (scenario.getSourceTagNames().contains("@api")) {
            ApiClient.initialize();
        }
        
        // Setup database connection
        if (scenario.getSourceTagNames().contains("@database")) {
            DatabaseConnection.initialize();
        }
    }
    
    // Hook for parallel execution
    @Before
    public void setUpParallelExecution(Scenario scenario) {
        // Each thread gets its own WebDriver instance
        WebDriver driver = WebDriverFactory.createDriver();
        threadLocalDriver.set(driver);
        
        System.out.println("Thread " + Thread.currentThread().getId() + 
                          ": WebDriver initialized for scenario: " + scenario.getName());
    }
    
    @After
    public void tearDownParallelExecution(Scenario scenario) {
        WebDriver driver = threadLocalDriver.get();
        if (driver != null) {
            driver.quit();
            threadLocalDriver.remove();
        }
        
        System.out.println("Thread " + Thread.currentThread().getId() + 
                          ": WebDriver cleaned up for scenario: " + scenario.getName());
    }
    
    // Hook with conditional execution
    @After
    public void conditionalCleanup(Scenario scenario) {
        // Only run cleanup for specific scenarios
        if (scenario.getName().contains("payment")) {
            PaymentTestHelper.cleanupPaymentData();
        }
        
        if (scenario.isFailed()) {
            // Additional cleanup for failed scenarios
            ErrorReporter.reportFailure(scenario);
        }
    }
    
    // Hook for performance testing
    @Before("@performance")
    public void setUpPerformanceTest(Scenario scenario) {
        System.out.println("Setting up performance test environment");
        
        // Disable unnecessary features for performance testing
        System.setProperty("disable.animations", "true");
        System.setProperty("disable.images", "true");
        
        // Start performance monitoring
        PerformanceProfiler.startProfiling();
    }
    
    @After("@performance")
    public void tearDownPerformanceTest(Scenario scenario) {
        System.out.println("Performance test completed");
        
        // Stop performance monitoring and collect metrics
        PerformanceMetrics metrics = PerformanceProfiler.stopProfiling();
        scenario.attach(metrics.toJson(), "application/json", "performance-metrics");
    }
    
    // Hook for mobile testing
    @Before("@mobile")
    public void setUpMobileTest(Scenario scenario) {
        System.out.println("Setting up mobile test environment");
        
        // Configure browser for mobile viewport
        WebDriver driver = threadLocalDriver.get();
        if (driver != null) {
            driver.manage().window().setSize(new Dimension(375, 667)); // iPhone size
        }
    }
    
    // Hook for accessibility testing
    @Before("@accessibility")
    public void setUpAccessibilityTest(Scenario scenario) {
        System.out.println("Setting up accessibility test environment");
        
        // Enable accessibility tools
        AccessibilityTools.enable();
    }
    
    @After("@accessibility")
    public void tearDownAccessibilityTest(Scenario scenario) {
        System.out.println("Accessibility test completed");
        
        // Generate accessibility report
        AccessibilityReport report = AccessibilityTools.generateReport();
        scenario.attach(report.toJson(), "application/json", "accessibility-report");
    }
    
    // Utility method to get current thread's WebDriver
    public static WebDriver getDriver() {
        return Thread.currentThread().getId() == 1 ? sharedDriver : 
               ThreadLocalDriverManager.getDriver();
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Hook Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <CheckCircle className="w-7 h-7" />
              Hook Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Writing effective and maintainable hooks
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
                  <span>Keep hooks focused on specific responsibilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use tags to control hook execution for specific scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement proper error handling in hooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use ThreadLocal for parallel execution safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Capture screenshots and logs on failure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use order parameter to control hook execution sequence</span>
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
                  <span>Don't share WebDriver instances across threads without ThreadLocal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid long-running operations in @BeforeStep/@AfterStep</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore exceptions in hooks without proper handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid creating too many hooks with overlapping functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't hardcode test data in hooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid complex business logic in hooks</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Common Hook Patterns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <FileText className="w-7 h-7" />
              Common Hook Patterns
            </CardTitle>
            <CardDescription className="text-base">
              Practical patterns for common testing scenarios
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Test Data Management */}
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">Test Data Management</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-indigo-300 dark:border-indigo-600">
                  <pre className="text-xs font-mono text-indigo-800 dark:text-indigo-200 overflow-x-auto whitespace-pre-wrap break-words">
{`@Before("@testdata")
public void setupTestData(Scenario scenario) {
    // Create fresh test data
    TestDataSet testData = TestDataFactory.create(scenario.getName());
    TestDataStore.store(scenario.getId(), testData);
}

@After("@testdata")
public void cleanupTestData(Scenario scenario) {
    // Clean up test data
    TestDataSet testData = TestDataStore.get(scenario.getId());
    TestDataFactory.cleanup(testData);
}`}</pre>
                </div>
              </div>

              {/* Database Hooks */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Database Management</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`@Before("@database")
public void setupDatabase() {
    // Begin transaction
    DatabaseManager.beginTransaction();
    // Load test fixtures
    DatabaseManager.loadFixtures();
}

@After("@database")
public void cleanupDatabase(Scenario scenario) {
    if (scenario.isFailed()) {
        // Rollback on failure
        DatabaseManager.rollbackTransaction();
    } else {
        // Commit on success
        DatabaseManager.commitTransaction();
    }
}`}</pre>
                </div>
              </div>

              {/* API Hooks */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">API Testing</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                  <pre className="text-xs font-mono text-green-800 dark:text-green-200 overflow-x-auto whitespace-pre-wrap break-words">
{`@Before("@api")
public void setupApiTest(Scenario scenario) {
    // Initialize API client
    ApiClient client = new ApiClient(TestConfig.getApiBaseUrl());
    ApiClientStore.store(scenario.getId(), client);
    
    // Set authentication headers
    client.setAuthToken(TestConfig.getAuthToken());
}

@After("@api")
public void cleanupApiTest(Scenario scenario) {
    // Clean up API resources
    ApiClient client = ApiClientStore.get(scenario.getId());
    if (client != null) {
        client.cleanup();
    }
}`}</pre>
                </div>
              </div>

              {/* Performance Hooks */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">Performance Monitoring</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="text-xs font-mono text-orange-800 dark:text-orange-200 overflow-x-auto whitespace-pre-wrap break-words">
{`@Before("@performance")
public void startPerformanceMonitoring(Scenario scenario) {
    PerformanceMonitor monitor = new PerformanceMonitor();
    monitor.startMonitoring();
    PerformanceStore.store(scenario.getId(), monitor);
}

@After("@performance")
public void collectPerformanceMetrics(Scenario scenario) {
    PerformanceMonitor monitor = PerformanceStore.get(scenario.getId());
    PerformanceReport report = monitor.generateReport();
    scenario.attach(report.toJson(), "application/json", "performance");
}`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30">
          <Settings className="h-4 w-4 text-orange-600" />
          <AlertTitle className="text-orange-900 dark:text-orange-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-orange-800 dark:text-orange-200">
            <ul className="space-y-2 mt-2">
              <li>• Hooks manage test lifecycle events at different execution points</li>
              <li>• Use @Before/@After for scenario-level setup and teardown</li>
              <li>• Use @BeforeAll/@AfterAll for suite-level operations</li>
              <li>• Tags and order parameters provide fine-grained control over hook execution</li>
              <li>• ThreadLocal ensures thread safety in parallel test execution</li>
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

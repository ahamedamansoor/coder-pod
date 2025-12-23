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
  Terminal,
  FileText,
  Camera,
  Monitor,
  Database,
  Activity,
  Clock,
  Bug,
  Shield,
  Save,
  Download,
  Eye,
  BarChart,
  TrendingUp
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function LoggingReportingComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const featuresData = {
    python: [
      {
        name: 'Test Logging Setup',
        description: 'Configure comprehensive logging for Selenium tests',
        causes: ['Debugging needs', 'Audit trails', 'Test monitoring', 'Error tracking'],
        solutions: ['Use logging module', 'Configure handlers', 'Set log levels', 'Format messages'],
        code: `import logging
import sys
from datetime import datetime

# Configure logging
def setup_logging():
    # Create logger
    logger = logging.getLogger('selenium_tests')
    logger.setLevel(logging.INFO)
    
    # Create console handler
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(logging.INFO)
    
    # Create file handler
    file_handler = logging.FileHandler(f'test_logs_{datetime.now().strftime("%Y%m%d_%H%M%S")}.log')
    file_handler.setLevel(logging.DEBUG)
    
    # Create formatter
    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )
    console_handler.setFormatter(formatter)
    file_handler.setFormatter(formatter)
    
    # Add handlers to logger
    logger.addHandler(console_handler)
    logger.addHandler(file_handler)
    
    return logger

# Usage
logger = setup_logging()
logger.info("Test started")
logger.debug("Finding element...")
logger.error("Element not found")`
      },
      {
        name: 'Screenshot Capture',
        description: 'Capture screenshots on test failures',
        causes: ['Test failure documentation', 'Visual debugging', 'Audit evidence', 'Bug reports'],
        solutions: ['Take screenshots on failure', 'Add timestamps', 'Save to organized folders', 'Include test context'],
        code: `import os
from datetime import datetime
from selenium import webdriver

class ScreenshotManager:
    def __init__(self, driver, screenshot_dir="screenshots"):
        self.driver = driver
        self.screenshot_dir = screenshot_dir
        os.makedirs(screenshot_dir, exist_ok=True)
    
    def take_screenshot(self, test_name, status=""):
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{test_name}_{status}_{timestamp}.png"
        filepath = os.path.join(self.screenshot_dir, filename)
        
        try:
            self.driver.save_screenshot(filepath)
            logger.info(f"Screenshot saved: {filepath}")
            return filepath
        except Exception as e:
            logger.error(f"Failed to save screenshot: {e}")
            return None
    
    def take_screenshot_on_failure(self, test_name):
        return self.take_screenshot(test_name, "FAILURE")

# Usage
screenshot_manager = ScreenshotManager(driver)

try:
    # Test code here
    element = driver.find_element(By.ID, "button")
    element.click()
except Exception as e:
    logger.error(f"Test failed: {e}")
    screenshot_path = screenshot_manager.take_screenshot_on_failure("login_test")
    raise`
      },
      {
        name: 'HTML Reports',
        description: 'Generate detailed HTML test reports',
        causes: ['Test visualization', 'Stakeholder communication', 'Test history', 'Metrics tracking'],
        solutions: ['Use HTML templates', 'Include screenshots', 'Add test metrics', 'Generate summary reports'],
        code: `import html
from datetime import datetime

class HTMLReportGenerator:
    def __init__(self, report_dir="reports"):
        self.report_dir = report_dir
        self.test_results = []
        os.makedirs(report_dir, exist_ok=True)
    
    def add_test_result(self, test_name, status, duration, error_msg=None, screenshot=None):
        self.test_results.append({
            'name': test_name,
            'status': status,
            'duration': duration,
            'error': error_msg,
            'screenshot': screenshot,
            'timestamp': datetime.now()
        })
    
    def generate_report(self):
        total_tests = len(self.test_results)
        passed_tests = len([t for t in self.test_results if t['status'] == 'PASSED'])
        failed_tests = total_tests - passed_tests
        
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <title>Test Report - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</title>
            <style>
                body {{ font-family: Arial, sans-serif; margin: 20px; }}
                .header {{ background: #f0f0f0; padding: 20px; border-radius: 5px; }}
                .passed {{ color: green; }}
                .failed {{ color: red; }}
                table {{ border-collapse: collapse; width: 100%; }}
                th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
                th {{ background-color: #f2f2f2; }}
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Test Execution Report</h1>
                <p>Total Tests: {total_tests} | Passed: {passed_tests} | Failed: {failed_tests}</p>
            </div>
            <table>
                <tr><th>Test Name</th><th>Status</th><th>Duration</th><th>Error</th></tr>
        """
        
        for test in self.test_results:
            status_class = 'passed' if test['status'] == 'PASSED' else 'failed'
            error_msg = test['error'] or ''
            html_content += f"""
                <tr>
                    <td>{test['name']}</td>
                    <td class="{status_class}">{test['status']}</td>
                    <td>{test['duration']:.2f}s</td>
                    <td>{error_msg}</td>
                </tr>
            """
        
        html_content += "</table></body></html>"
        
        report_path = os.path.join(self.report_dir, f"report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.html")
        with open(report_path, 'w') as f:
            f.write(html_content)
        
        return report_path

# Usage
report_generator = HTMLReportGenerator()
report_generator.add_test_result("login_test", "PASSED", 2.5)
report_generator.add_test_result("checkout_test", "FAILED", 5.2, "Element not found", "screenshot.png")
report_path = report_generator.generate_report()`
      }
    ],
    java: [
      {
        name: 'Test Logging Setup',
        description: 'Configure comprehensive logging for Selenium tests',
        causes: ['Debugging needs', 'Audit trails', 'Test monitoring', 'Error tracking'],
        solutions: ['Use Log4j/SLF4J', 'Configure appenders', 'Set log levels', 'Format messages'],
        code: `import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.core.config.Configurator;
import org.apache.logging.log4j.core.layout.PatternLayout;
import org.apache.logging.log4j.core.appender.ConsoleAppender;
import org.apache.logging.log4j.core.appender.FileAppender;

public class TestLogger {
    private static Logger logger;
    
    public static void setupLogging() {
        // Create console appender
        PatternLayout consoleLayout = PatternLayout.newBuilder()
            .withPattern("%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n")
            .build();
        
        ConsoleAppender consoleAppender = ConsoleAppender.newBuilder()
            .setLayout(consoleLayout)
            .build();
        
        // Create file appender
        String timestamp = java.time.LocalDateTime.now().format(
            java.time.format.DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss")
        );
        
        FileAppender fileAppender = FileAppender.newBuilder()
            .setFileName("test_logs_" + timestamp + ".log")
            .setLayout(consoleLayout)
            .build();
        
        // Configure logger
        Configurator.setRootLevel(Level.INFO);
        Configurator.addAppender(consoleAppender);
        Configurator.addAppender(fileAppender);
        
        logger = LogManager.getLogger(TestLogger.class);
    }
    
    public static Logger getLogger() {
        if (logger == null) {
            setupLogging();
        }
        return logger;
    }
}

// Usage
Logger logger = TestLogger.getLogger();
logger.info("Test started");
logger.debug("Finding element...");
logger.error("Element not found");`
      },
      {
        name: 'Screenshot Capture',
        description: 'Capture screenshots on test failures',
        causes: ['Test failure documentation', 'Visual debugging', 'Audit evidence', 'Bug reports'],
        solutions: ['Take screenshots on failure', 'Add timestamps', 'Save to organized folders', 'Include test context'],
        code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.OutputType;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ScreenshotManager {
    private WebDriver driver;
    private String screenshotDir;
    
    public ScreenshotManager(WebDriver driver, String screenshotDir) {
        this.driver = driver;
        this.screenshotDir = screenshotDir;
        new File(screenshotDir).mkdirs();
    }
    
    public String takeScreenshot(String testName, String status) {
        String timestamp = LocalDateTime.now().format(
            DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss")
        );
        String filename = String.format("%s_%s_%s.png", testName, status, timestamp);
        String filepath = screenshotDir + File.separator + filename;
        
        try {
            File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(screenshot, new File(filepath));
            logger.info("Screenshot saved: " + filepath);
            return filepath;
        } catch (Exception e) {
            logger.error("Failed to save screenshot: " + e.getMessage());
            return null;
        }
    }
    
    public String takeScreenshotOnFailure(String testName) {
        return takeScreenshot(testName, "FAILURE");
    }
}

// Usage
ScreenshotManager screenshotManager = new ScreenshotManager(driver, "screenshots");

try {
    // Test code here
    WebElement element = driver.findElement(By.id("button"));
    element.click();
} catch (Exception e) {
    logger.error("Test failed: " + e.getMessage());
    String screenshotPath = screenshotManager.takeScreenshotOnFailure("login_test");
    throw e;
}`
      },
      {
        name: 'HTML Reports',
        description: 'Generate detailed HTML test reports',
        causes: ['Test visualization', 'Stakeholder communication', 'Test history', 'Metrics tracking'],
        solutions: ['Use HTML templates', 'Include screenshots', 'Add test metrics', 'Generate summary reports'],
        code: `import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class HTMLReportGenerator {
    private String reportDir;
    private List<TestResult> testResults;
    
    public static class TestResult {
        String name;
        String status;
        double duration;
        String error;
        String screenshot;
        LocalDateTime timestamp;
        
        // Constructor and getters
    }
    
    public HTMLReportGenerator(String reportDir) {
        this.reportDir = reportDir;
        this.testResults = new ArrayList<>();
        new File(reportDir).mkdirs();
    }
    
    public void addTestResult(String testName, String status, double duration, 
                             String errorMsg, String screenshot) {
        TestResult result = new TestResult();
        result.name = testName;
        result.status = status;
        result.duration = duration;
        result.error = errorMsg;
        result.screenshot = screenshot;
        result.timestamp = LocalDateTime.now();
        testResults.add(result);
    }
    
    public String generateReport() throws IOException {
        int totalTests = testResults.size();
        long passedTests = testResults.stream()
            .mapToLong(t -> "PASSED".equals(t.status) ? 1 : 0)
            .sum();
        long failedTests = totalTests - passedTests;
        
        StringBuilder html = new StringBuilder();
        html.append("<!DOCTYPE html><html><head>");
        html.append("<title>Test Report - ").append(LocalDateTime.now().format(
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"))).append("</title>");
        html.append("<style>body{font-family:Arial,sans-serif;margin:20px;}");
        html.append(".header{background:#f0f0f0;padding:20px;border-radius:5px;}");
        html.append(".passed{color:green;}.failed{color:red;}");
        html.append("table{border-collapse:collapse;width:100%;}");
        html.append("th,td{border:1px solid #ddd;padding:8px;text-align:left;}");
        html.append("th{background-color:#f2f2f2;}</style></head><body>");
        
        html.append("<div class='header'><h1>Test Execution Report</h1>");
        html.append("<p>Total Tests: ").append(totalTests);
        html.append(" | Passed: ").append(passedTests);
        html.append(" | Failed: ").append(failedTests).append("</p></div>");
        
        html.append("<table><tr><th>Test Name</th><th>Status</th><th>Duration</th><th>Error</th></tr>");
        
        for (TestResult test : testResults) {
            String statusClass = "PASSED".equals(test.status) ? "passed" : "failed";
            String errorMsg = test.error != null ? test.error : "";
            html.append("<tr><td>").append(test.name).append("</td>");
            html.append("<td class='").append(statusClass).append("'>").append(test.status).append("</td>");
            html.append("<td>").append(String.format("%.2f", test.duration)).append("s</td>");
            html.append("<td>").append(errorMsg).append("</td></tr>");
        }
        
        html.append("</table></body></html>");
        
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"));
        String reportPath = reportDir + File.separator + "report_" + timestamp + ".html";
        
        try (FileWriter writer = new FileWriter(reportPath)) {
            writer.write(html.toString());
        }
        
        return reportPath;
    }
}

// Usage
HTMLReportGenerator reportGenerator = new HTMLReportGenerator("reports");
reportGenerator.addTestResult("login_test", "PASSED", 2.5, null, null);
reportGenerator.addTestResult("checkout_test", "FAILED", 5.2, "Element not found", "screenshot.png");
String reportPath = reportGenerator.generateReport();`
      }
    ],
    javascript: [
      {
        name: 'Test Logging Setup',
        description: 'Configure comprehensive logging for Selenium tests',
        causes: ['Debugging needs', 'Audit trails', 'Test monitoring', 'Error tracking'],
        solutions: ['Use Winston', 'Configure transports', 'Set log levels', 'Format messages'],
        code: `const winston = require('winston');
const path = require('path');

const setupLogging = () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      winston.format.json()
    ),
    defaultMeta: { service: 'selenium-tests' },
    transports: [
      new winston.transports.File({ 
        filename: \`logs/error-\${timestamp}.log\`, 
        level: 'error' 
      }),
      new winston.transports.File({ 
        filename: \`logs/combined-\${timestamp}.log\` 
      })
    ]
  });

  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }));
  }

  return logger;
};

// Usage
const logger = setupLogging();
logger.info('Test started');
logger.debug('Finding element...');
logger.error('Element not found');`
      },
      {
        name: 'Screenshot Capture',
        description: 'Capture screenshots on test failures',
        causes: ['Test failure documentation', 'Visual debugging', 'Audit evidence', 'Bug reports'],
        solutions: ['Take screenshots on failure', 'Add timestamps', 'Save to organized folders', 'Include test context'],
        code: `const fs = require('fs');
const path = require('path');

class ScreenshotManager {
  constructor(driver, screenshotDir = 'screenshots') {
    this.driver = driver;
    this.screenshotDir = screenshotDir;
    
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }
  }
  
  async takeScreenshot(testName, status = '') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = \`\${testName}_\${status}_\${timestamp}.png\`;
    const filepath = path.join(this.screenshotDir, filename);
    
    try {
      const screenshot = await this.driver.takeScreenshot();
      fs.writeFileSync(filepath, Buffer.from(screenshot, 'base64'));
      logger.info(\`Screenshot saved: \${filepath}\`);
      return filepath;
    } catch (error) {
      logger.error(\`Failed to save screenshot: \${error.message}\`);
      return null;
    }
  }
  
  async takeScreenshotOnFailure(testName) {
    return await this.takeScreenshot(testName, 'FAILURE');
  }
}

// Usage
const screenshotManager = new ScreenshotManager(driver);

try {
  // Test code here
  const element = await driver.findElement(By.id('button'));
  await element.click();
} catch (error) {
  logger.error(\`Test failed: \${error.message}\`);
  const screenshotPath = await screenshotManager.takeScreenshotOnFailure('login_test');
  throw error;
}`
      },
      {
        name: 'HTML Reports',
        description: 'Generate detailed HTML test reports',
        causes: ['Test visualization', 'Stakeholder communication', 'Test history', 'Metrics tracking'],
        solutions: ['Use HTML templates', 'Include screenshots', 'Add test metrics', 'Generate summary reports'],
        code: `const fs = require('fs');
const path = require('path');

class HTMLReportGenerator {
  constructor(reportDir = 'reports') {
    this.reportDir = reportDir;
    this.testResults = [];
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
  }
  
  addTestResult(testName, status, duration, errorMsg = null, screenshot = null) {
    this.testResults.push({
      name: testName,
      status: status,
      duration: duration,
      error: errorMsg,
      screenshot: screenshot,
      timestamp: new Date()
    });
  }
  
  generateReport() {
    const totalTests = this.testResults.length;
    const passedTests = this.testResults.filter(t => t.status === 'PASSED').length;
    const failedTests = totalTests - passedTests;
    
    let html = \`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Test Report - \${new Date().toISOString()}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { background: #f0f0f0; padding: 20px; border-radius: 5px; }
          .passed { color: green; }
          .failed { color: red; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Test Execution Report</h1>
          <p>Total Tests: \${totalTests} | Passed: \${passedTests} | Failed: \${failedTests}</p>
        </div>
        <table>
          <tr><th>Test Name</th><th>Status</th><th>Duration</th><th>Error</th></tr>
    \`;
    
    this.testResults.forEach(test => {
      const statusClass = test.status === 'PASSED' ? 'passed' : 'failed';
      const errorMsg = test.error || '';
      html += \`
        <tr>
          <td>\${test.name}</td>
          <td class="\${statusClass}">\${test.status}</td>
          <td>\${test.duration.toFixed(2)}s</td>
          <td>\${errorMsg}</td>
        </tr>
      \`;
    });
    
    html += '</table></body></html>';
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportDir, \`report_\${timestamp}.html\`);
    
    fs.writeFileSync(reportPath, html);
    return reportPath;
  }
}

// Usage
const reportGenerator = new HTMLReportGenerator();
reportGenerator.addTestResult('login_test', 'PASSED', 2.5);
reportGenerator.addTestResult('checkout_test', 'FAILED', 5.2, 'Element not found', 'screenshot.png');
const reportPath = reportGenerator.generateReport();`
      }
    ]
  };

  const currentFeatures = featuresData[selectedLanguage];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={FileText}
        category="Selenium · Test Management"
        title="Logging and Reporting"
        description="Master comprehensive logging, screenshot capture, and HTML reporting for Selenium tests"
        colorTheme="purple"
        badges={[
          { label: 'Test Management', variant: 'success' },
          { label: 'Reporting', variant: 'info' },
          { label: 'Documentation', variant: 'secondary' },
        ]}
      />

      {/* Logging Flow Diagram */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Test Logging & Reporting Flow
          </CardTitle>
          <CardDescription>Visual representation of logging and reporting process in test automation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Flow Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-x-auto">
              <div className="flex flex-col items-center min-w-[320px] max-w-2xl mx-auto gap-0">
                {/* Test Execution */}
                <div className="bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-100 text-center">Test Execution</div>
                  <div className="text-xs text-green-700 dark:text-green-300 text-center">Selenium test runs</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600 -my-0"></div>
                
                {/* Logging Events */}
                <div className="bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">Logging Events</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 text-center break-words">Info, Debug, Error logs</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-blue-400 dark:bg-blue-600 -my-0"></div>
                
                {/* Test Result */}
                <div className="relative py-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/40 px-4 py-3 rounded-lg border-2 border-yellow-300 dark:border-yellow-700 transform rotate-45 w-20 h-20 flex items-center justify-center">
                    <div className="transform -rotate-45 text-sm font-semibold text-yellow-900 dark:text-yellow-100">!</div>
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Result?</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-yellow-400 dark:bg-yellow-600 -my-0"></div>
                
                {/* Branching Section */}
                <div className="w-full flex justify-center gap-8 md:gap-16">
                  {/* Success Path */}
                  <div className="flex flex-col items-center gap-0">
                    <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600"></div>
                    <div className="bg-green-100 dark:bg-green-900/40 px-4 py-2 rounded-lg border-2 border-green-300 dark:border-green-700 min-w-[100px]">
                      <div className="text-xs font-semibold text-green-900 dark:text-green-100 text-center">✓ Pass</div>
                      <div className="text-xs text-green-700 dark:text-green-300 text-center">Log</div>
                    </div>
                  </div>
                  
                  {/* Failure Path */}
                  <div className="flex flex-col items-center gap-0">
                    <div className="w-0.5 h-8 bg-red-400 dark:bg-red-600"></div>
                    <div className="bg-red-100 dark:bg-red-900/40 px-4 py-2 rounded-lg border-2 border-red-300 dark:border-red-700 min-w-[100px]">
                      <div className="text-xs font-semibold text-red-900 dark:text-red-100 text-center">✗ Fail</div>
                      <div className="text-xs text-red-700 dark:text-red-300 text-center">Screenshot</div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-purple-400 dark:bg-purple-600 -my-0"></div>
                
                {/* Report Generation */}
                <div className="bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Report Generation</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300 text-center">HTML report with metrics</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-purple-400 dark:bg-purple-600 -my-0"></div>
                
                {/* Output */}
                <div className="w-full flex justify-center gap-6 md:gap-8">
                  <div className="bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-lg border-2 border-blue-300 dark:border-blue-700 min-w-[90px]">
                    <div className="text-xs font-semibold text-blue-900 dark:text-blue-100 text-center">Logs</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300 text-center">Files</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-900/40 px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 min-w-[90px]">
                    <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 text-center">Report</div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 text-center">HTML</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Logging Features Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Logging</h5>
                </div>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Console output</li>
                  <li>• File logging</li>
                  <li>• Log levels</li>
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  <h5 className="font-semibold text-yellow-900 dark:text-yellow-100">Screenshots</h5>
                </div>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• Failure capture</li>
                  <li>• Timestamp naming</li>
                  <li>• Organized storage</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Reports</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• HTML format</li>
                  <li>• Test metrics</li>
                  <li>• Visual charts</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Language Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-600" />
            Logging & Reporting Examples
          </CardTitle>
          <CardDescription>
            Detailed implementation examples for different programming languages
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Language Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            {(['python', 'java', 'javascript'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedLanguage === lang
                    ? 'border-b-2 border-purple-600 text-purple-600 dark:text-purple-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
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
                ? 'border-purple-500 shadow-lg bg-purple-50 dark:bg-purple-950/20' 
                : 'border-slate-200 dark:border-slate-700 hover:border-purple-300'
            }`}
            onClick={() => setSelectedFeature(selectedFeature === feature.name ? null : feature.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selectedFeature === feature.name
                    ? 'bg-purple-100 dark:bg-purple-900/40'
                    : 'bg-slate-100 dark:bg-slate-900/40'
                }`}>
                  <FileText className={`w-6 h-6 ${
                    selectedFeature === feature.name
                      ? 'text-purple-600 dark:text-purple-400'
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
                    <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Use Cases
                    </h5>
                    <ul className="space-y-1">
                      {feature.causes.map((cause, i) => (
                        <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Implementation
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
                      Code Example
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
            Logging & Reporting Best Practices
          </CardTitle>
          <CardDescription>Proactive strategies for effective test documentation and reporting</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Logging Practices</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Terminal className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Structured Logging</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Use consistent log formats with timestamps, test names, and clear severity levels.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Log Management</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Implement log rotation, archiving, and cleanup to manage storage effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Reporting Practices</h5>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BarChart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Comprehensive Reports</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Include test metrics, execution times, and visual evidence in reports.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Trend Analysis</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Track test results over time to identify patterns and improvement opportunities.
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

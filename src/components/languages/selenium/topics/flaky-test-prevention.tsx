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
  Shield,
  Play,
  Pause,
  RefreshCw,
  Clock,
  FileText,
  Terminal,
  Package,
  Activity,
  Download,
  Upload,
  Layers,
  Server,
  Database,
  Zap,
  Monitor,
  Settings,
  Gauge,
  TriangleAlert,
  Bug,
  Wrench,
  TestTube,
  GitBranch,
  Eye,
  Target
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function FlakyTestPreventionComponent() {
  const { toast } = useToast();
  const [selectedStrategy, setSelectedStrategy] = React.useState<'detection' | 'prevention' | 'stabilization'>('detection');
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const flakyTestData = {
    detection: [
      {
        name: 'Flaky Test Detection System',
        description: 'Automated detection and analysis of flaky test patterns',
        causes: ['Inconsistent failures', 'Timing issues', 'Environment dependencies', 'Race conditions'],
        solutions: ['Test retry analysis', 'Pattern recognition', 'Statistical analysis', 'Root cause identification'],
        code: String.raw`// Python - Advanced Flaky Test Detection System
import pytest
import time
import random
import statistics
from collections import defaultdict, deque
from datetime import datetime, timedelta
import json
import threading
from concurrent.futures import ThreadPoolExecutor
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class FlakyTestDetector:
    """Advanced system to detect and analyze flaky tests"""
    
    def __init__(self, max_history=100, failure_threshold=0.3):
        self.max_history = max_history
        self.failure_threshold = failure_threshold
        self.test_history = defaultdict(lambda: deque(maxlen=max_history))
        self.flaky_patterns = {}
        self.detection_rules = self._initialize_detection_rules()
        
    def _initialize_detection_rules(self):
        """Initialize rules for detecting flaky test patterns"""
        return {
            'intermittent_failure': {
                'description': 'Test fails randomly without clear pattern',
                'indicator': lambda results: self._check_intermittent_failure(results),
                'severity': 'medium'
            },
            'time_sensitive': {
                'description': 'Test fails due to timing dependencies',
                'indicator': lambda results: self._check_timing_sensitivity(results),
                'severity': 'high'
            },
            'environment_dependent': {
                'description': 'Test fails only in specific environments',
                'indicator': lambda results: self._check_environment_dependency(results),
                'severity': 'high'
            },
            'load_sensitive': {
                'description': 'Test fails under system load',
                'indicator': lambda results: self._check_load_sensitivity(results),
                'severity': 'medium'
            },
            'resource_leak': {
                'description': 'Test fails due to resource exhaustion',
                'indicator': lambda results: self._check_resource_leak(results),
                'severity': 'high'
            }
        }
    
    def record_test_result(self, test_name, result, execution_time=None, environment=None, metadata=None):
        """Record test execution result for analysis"""
        test_result = {
            'timestamp': datetime.now(),
            'result': result,  # 'passed', 'failed', 'error'
            'execution_time': execution_time,
            'environment': environment or 'default',
            'metadata': metadata or {}
        }
        
        self.test_history[test_name].append(test_result)
        
        # Analyze for flaky patterns
        if len(self.test_history[test_name]) >= 5:
            self._analyze_test_flakiness(test_name)
    
    def _analyze_test_flakiness(self, test_name):
        """Analyze test results for flaky patterns"""
        results = list(self.test_history[test_name])
        
        # Calculate basic metrics
        total_runs = len(results)
        failures = sum(1 for r in results if r['result'] != 'passed')
        failure_rate = failures / total_runs
        
        # Check against threshold
        if failure_rate >= self.failure_threshold:
            flaky_info = {
                'test_name': test_name,
                'failure_rate': failure_rate,
                'total_runs': total_runs,
                'patterns': [],
                'severity': 'low',
                'last_analyzed': datetime.now()
            }
            
            # Check each detection rule
            for pattern_name, rule in self.detection_rules.items():
                if rule['indicator'](results):
                    flaky_info['patterns'].append({
                        'name': pattern_name,
                        'description': rule['description'],
                        'severity': rule['severity']
                    })
                    
                    # Update overall severity
                    if rule['severity'] == 'high':
                        flaky_info['severity'] = 'high'
                    elif rule['severity'] == 'medium' and flaky_info['severity'] != 'high':
                        flaky_info['severity'] = 'medium'
            
            self.flaky_patterns[test_name] = flaky_info
            
            # Log detection
            print(f"FLAKY TEST DETECTED: {test_name}")
            print(f"  Failure Rate: {failure_rate:.2%}")
            print(f"  Patterns: {[p['name'] for p in flaky_info['patterns']]}")
            print(f"  Severity: {flaky_info['severity']}")
    
    def _check_intermittent_failure(self, results):
        """Check for intermittent failure pattern"""
        if len(results) < 10:
            return False
        
        # Look for random failures without clear sequence
        failures = [i for i, r in enumerate(results) if r['result'] != 'passed']
        
        # Check if failures are spread out (not clustered)
        if len(failures) < 3:
            return False
        
        # Calculate gaps between failures
        gaps = []
        for i in range(1, len(failures)):
            gaps.append(failures[i] - failures[i-1])
        
        # If gaps vary significantly, it's likely intermittent
        avg_gap = statistics.mean(gaps)
        variance = statistics.variance(gaps) if len(gaps) > 1 else 0
        
        return variance > (avg_gap * avg_gap) * 0.5  # High variance
    
    def _check_timing_sensitivity(self, results):
        """Check for timing-related flakiness"""
        execution_times = [r.get('execution_time', 0) for r in results if r.get('execution_time')]
        
        if len(execution_times) < 5:
            return False
        
        # Check if failed tests have different timing patterns
        failed_times = []
        passed_times = []
        
        for r in results:
            if r.get('execution_time'):
                if r['result'] != 'passed':
                    failed_times.append(r['execution_time'])
                else:
                    passed_times.append(r['execution_time'])
        
        if len(failed_times) < 2 or len(passed_times) < 2:
            return False
        
        # Compare timing distributions
        failed_avg = statistics.mean(failed_times)
        passed_avg = statistics.mean(passed_times)
        
        # Significant timing difference suggests timing sensitivity
        return abs(failed_avg - passed_avg) > max(failed_avg, passed_avg) * 0.3
    
    def _check_environment_dependency(self, results):
        """Check for environment-specific failures"""
        environments = defaultdict(list)
        
        for r in results:
            env = r.get('environment', 'default')
            environments[env].append(r)
        
        # Check if failures are concentrated in specific environments
        for env, env_results in environments.items():
            if len(env_results) < 3:
                continue
            
            failures = sum(1 for r in env_results if r['result'] != 'passed')
            failure_rate = failures / len(env_results)
            
            if failure_rate >= 0.5:  # 50% failure rate in specific environment
                return True
        
        return False
    
    def _check_load_sensitivity(self, results):
        """Check for load-sensitive failures"""
        # This would require system load monitoring
        # For now, check if failures correlate with execution time
        execution_times = [r.get('execution_time', 0) for r in results]
        
        if len(execution_times) < 10:
            return False
        
        # Check correlation between execution time and failures
        times_with_results = [(r.get('execution_time', 0), r['result']) for r in results]
        times_with_results.sort()
        
        # Check if slower executions are more likely to fail
        slow_half = times_with_results[len(times_with_results)//2:]
        fast_half = times_with_results[:len(times_with_results)//2]
        
        slow_failure_rate = sum(1 for _, result in slow_half if result != 'passed') / len(slow_half)
        fast_failure_rate = sum(1 for _, result in fast_half if result != 'passed') / len(fast_half)
        
        return slow_failure_rate > fast_failure_rate * 1.5
    
    def _check_resource_leak(self, results):
        """Check for resource leak indicators"""
        # This would require resource monitoring
        # For now, check if failure rate increases over time
        if len(results) < 20:
            return False
        
        # Split results into halves and compare failure rates
        first_half = results[:len(results)//2]
        second_half = results[len(results)//2:]
        
        first_failure_rate = sum(1 for r in first_half if r['result'] != 'passed') / len(first_half)
        second_failure_rate = sum(1 for r in second_half if r['result'] != 'passed') / len(second_half)
        
        return second_failure_rate > first_failure_rate * 1.3
    
    def get_flaky_tests(self):
        """Get list of detected flaky tests"""
        return dict(self.flaky_patterns)
    
    def generate_flakiness_report(self):
        """Generate comprehensive flakiness report"""
        report = {
            'generated_at': datetime.now().isoformat(),
            'summary': {
                'total_tests': len(self.test_history),
                'flaky_tests': len(self.flaky_patterns),
                'flakiness_rate': len(self.flaky_patterns) / max(1, len(self.test_history))
            },
            'flaky_tests': {},
            'patterns': {},
            'recommendations': []
        }
        
        # Analyze patterns across all flaky tests
        pattern_counts = defaultdict(int)
        severity_counts = defaultdict(int)
        
        for test_name, flaky_info in self.flaky_patterns.items():
            report['flaky_tests'][test_name] = flaky_info
            
            for pattern in flaky_info['patterns']:
                pattern_counts[pattern['name']] += 1
                severity_counts[pattern['severity']] += 1
        
        report['patterns'] = dict(pattern_counts)
        report['severity_distribution'] = dict(severity_counts)
        
        # Generate recommendations
        report['recommendations'] = self._generate_recommendations(pattern_counts)
        
        return report
    
    def _generate_recommendations(self, pattern_counts):
        """Generate recommendations based on detected patterns"""
        recommendations = []
        
        if pattern_counts.get('time_sensitive', 0) > 0:
            recommendations.append({
                'priority': 'high',
                'category': 'timing',
                'description': 'Implement explicit waits and remove timing dependencies',
                'affected_tests': pattern_counts['time_sensitive']
            })
        
        if pattern_counts.get('environment_dependent', 0) > 0:
            recommendations.append({
                'priority': 'high',
                'category': 'environment',
                'description': 'Standardize test environments and remove environment-specific code',
                'affected_tests': pattern_counts['environment_dependent']
            })
        
        if pattern_counts.get('resource_leak', 0) > 0:
            recommendations.append({
                'priority': 'critical',
                'category': 'resources',
                'description': 'Implement proper resource cleanup and memory management',
                'affected_tests': pattern_counts['resource_leak']
            })
        
        if pattern_counts.get('intermittent_failure', 0) > 0:
            recommendations.append({
                'priority': 'medium',
                'category': 'stability',
                'description': 'Add retry logic and improve test isolation',
                'affected_tests': pattern_counts['intermittent_failure']
            })
        
        return recommendations

# Test Execution Wrapper with Flakiness Detection
class FlakinessAwareTestRunner:
    """Test runner with built-in flakiness detection"""
    
    def __init__(self, detector=None):
        self.detector = detector or FlakyTestDetector()
        self.retry_config = {
            'max_retries': 3,
            'retry_delay': 1.0,
            'retry_on_exceptions': [Exception]
        }
    
    def run_test_with_detection(self, test_func, test_name, *args, **kwargs):
        """Run test with flakiness detection and retry logic"""
        environment = kwargs.get('environment', 'default')
        metadata = kwargs.get('metadata', {})
        
        for attempt in range(self.retry_config['max_retries'] + 1):
            start_time = time.time()
            
            try:
                # Execute test
                result = test_func(*args, **kwargs)
                execution_time = time.time() - start_time
                
                # Record successful execution
                self.detector.record_test_result(
                    test_name, 
                    'passed', 
                    execution_time, 
                    environment, 
                    {**metadata, 'attempt': attempt + 1}
                )
                
                return result
                
            except Exception as e:
                execution_time = time.time() - start_time
                
                # Record failed execution
                self.detector.record_test_result(
                    test_name, 
                    'failed', 
                    execution_time, 
                    environment, 
                    {**metadata, 'attempt': attempt + 1, 'error': str(e)}
                )
                
                # Check if we should retry
                if attempt < self.retry_config['max_retries']:
                    print(f"Test {test_name} failed (attempt {attempt + 1}), retrying...")
                    time.sleep(self.retry_config['retry_delay'])
                else:
                    print(f"Test {test_name} failed after {attempt + 1} attempts")
                    raise e

# Selenium Test Example with Flakiness Prevention
class StableSeleniumTest:
    """Example of stable Selenium test implementation"""
    
    def __init__(self, detector):
        self.detector = detector
        self.driver = None
        self.test_runner = FlakinessAwareTestRunner(detector)
    
    def setup_test(self):
        """Setup test environment with stability measures"""
        options = webdriver.ChromeOptions()
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-gpu")
        
        # Add stability options
        options.add_argument("--disable-extensions")
        options.add_argument("--disable-plugins")
        options.add_argument("--disable-background-timer-throttling")
        
        self.driver = webdriver.Chrome(options=options)
        self.driver.implicitly_wait(10)  # Set implicit wait
        
    def teardown_test(self):
        """Cleanup test environment"""
        if self.driver:
            try:
                self.driver.quit()
            except:
                pass  # Ignore cleanup errors
    
    def wait_for_element_stable(self, locator, timeout=10, poll_frequency=0.5):
        """Wait for element to be stable and ready for interaction"""
        wait = WebDriverWait(self.driver, timeout, poll_frequency)
        
        def element_stable(driver):
            try:
                element = driver.find_element(*locator)
                
                # Check if element is visible and enabled
                if not element.is_displayed() or not element.is_enabled():
                    return False
                
                # Check if element has stable position (no animation)
                location1 = element.location
                time.sleep(0.1)
                location2 = element.location
                
                return location1 == location2
                
            except:
                return False
        
        return wait.until(element_stable)
    
    def safe_click(self, locator, retry_count=3):
        """Safe click with retry logic"""
        for attempt in range(retry_count):
            try:
                element = self.wait_for_element_stable(locator)
                
                # Scroll element into view
                self.driver.execute_script("arguments[0].scrollIntoView(true);", element)
                time.sleep(0.2)  # Small delay after scrolling
                
                # Click using JavaScript to avoid interception
                self.driver.execute_script("arguments[0].click();", element)
                return True
                
            except Exception as e:
                if attempt == retry_count - 1:
                    raise e
                time.sleep(0.5)
    
    def stable_login_test(self):
        """Example of stable login test"""
        test_name = "stable_login_test"
        
        def login_test():
            self.driver.get("https://example.com/login")
            
            # Wait for page to be fully loaded
            WebDriverWait(self.driver, 10).until(
                lambda d: d.execute_script("return document.readyState") == "complete"
            )
            
            # Safe interaction with form elements
            username = self.wait_for_element_stable((By.ID, "username"))
            username.clear()
            username.send_keys("testuser")
            
            password = self.wait_for_element_stable((By.ID, "password"))
            password.clear()
            password.send_keys("password123")
            
            # Safe click with retry
            self.safe_click((By.ID, "login-button"))
            
            # Wait for login completion
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "welcome"))
            )
            
            return True
        
        try:
            self.setup_test()
            
            # Run test with flakiness detection
            result = self.test_runner.run_test_with_detection(
                login_test, 
                test_name,
                environment="chrome",
                metadata={"test_type": "login", "priority": "high"}
            )
            
            return result
            
        finally:
            self.teardown_test()

# Usage Example
def main():
    # Create flakiness detector
    detector = FlakyTestDetector()
    
    # Create stable test instance
    stable_test = StableSeleniumTest(detector)
    
    # Run test multiple times to detect flakiness
    for i in range(20):
        try:
            stable_test.stable_login_test()
            print(f"Test run {i+1}: PASSED")
        except Exception as e:
            print(f"Test run {i+1}: FAILED - {e}")
        
        time.sleep(1)  # Small delay between runs
    
    # Generate flakiness report
    report = detector.generate_flakiness_report()
    print("\\n=== FLAKINESS REPORT ===")
    print(json.dumps(report, indent=2, default=str))

if __name__ == "__main__":
    main()`
      }
    ],
    prevention: [
      {
        name: 'Test Stabilization Techniques',
        description: 'Implement techniques to prevent flaky tests and improve reliability',
        causes: ['Race conditions', 'Timing dependencies', 'Environment variations', 'Poor synchronization'],
        solutions: ['Explicit waits', 'Test isolation', 'Environment standardization', 'Retry mechanisms'],
        code: String.raw`// Java - Comprehensive Test Stabilization Framework
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.*;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.annotations.*;
import org.testng.IRetryAnalyzer;
import org.testng.ITestResult;
import java.time.Duration;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;
import java.util.function.Supplier;

public class TestStabilizationFramework {
    
    // Custom Wait Strategies
    public static class StableWait {
        private final WebDriver driver;
        private final WebDriverWait wait;
        
        public StableWait(WebDriver driver, Duration timeout) {
            this.driver = driver;
            this.wait = new WebDriverWait(driver, timeout);
        }
        
        public WebElement waitForElementStable(By locator) {
            return wait.until(new Function<WebDriver, WebElement>() {
                public WebElement apply(WebDriver driver) {
                    try {
                        WebElement element = driver.findElement(locator);
                        
                        // Check if element is displayed and enabled
                        if (!element.isDisplayed() || !element.is_enabled()) {
                            return null;
                        }
                        
                        // Check if element has stable position (no animation)
                        Point location1 = element.getLocation();
                        try {
                            Thread.sleep(100);
                        } catch (InterruptedException e) {
                            Thread.currentThread().interrupt();
                        }
                        Point location2 = element.getLocation();
                        
                        if (!location1.equals(location2)) {
                            return null;
                        }
                        
                        // Additional stability check - verify element is not covered
                        WebElement cover = findCoveringElement(element);
                        if (cover != null) {
                            return null;
                        }
                        
                        return element;
                        
                    } catch (StaleElementReferenceException | NoSuchElementException e) {
                        return null;
                    }
                }
            });
        }
        
        private WebElement findCoveringElement(WebElement element) {
            try {
                JavascriptExecutor js = (JavascriptExecutor) driver;
                String script = "var element = arguments[0];" +
                               "var rect = element.getBoundingClientRect();" +
                               "var x = rect.left + (rect.width / 2);" +
                               "var y = rect.top + (rect.height / 2);" +
                               "var topElement = document.elementFromPoint(x, y);" +
                               "return topElement === element ? null : topElement;";
                
                return (WebElement) js.executeScript(script, element);
            } catch (Exception e) {
                return null;
            }
        }
        
        public void waitForPageLoadComplete() {
            wait.until(new Function<WebDriver, Boolean>() {
                public Boolean apply(WebDriver driver) {
                    try {
                        JavascriptExecutor js = (JavascriptExecutor) driver;
                        
                        // Check document ready state
                        String readyState = (String) js.executeScript("return document.readyState");
                        if (!"complete".equals(readyState)) {
                            return false;
                        }
                        
                        // Check for active AJAX requests (jQuery)
                        Boolean ajaxComplete = (Boolean) js.executeScript(
                            "return (typeof jQuery === 'undefined') || jQuery.active === 0"
                        );
                        if (!ajaxComplete) {
                            return false;
                        }
                        
                        // Check for Angular (if present)
                        Boolean angularComplete = (Boolean) js.executeScript(
                            "return (typeof angular === 'undefined') || " +
                            "angular.element(document).injector().get('$http').pendingRequests.length === 0"
                        );
                        
                        return angularComplete;
                        
                    } catch (Exception e) {
                        return false;
                    }
                }
            });
        }
        
        public void waitForNetworkIdle() {
            wait.until(new Function<WebDriver, Boolean>() {
                public Boolean apply(WebDriver driver) {
                    try {
                        JavascriptExecutor js = (JavascriptExecutor) driver;
                        
                        // Check if there are no ongoing network requests
                        Long activeRequests = (Long) js.executeScript(
                            "return performance.getEntriesByType('resource').filter(" +
                            "function(entry) { return entry.responseEnd === 0; }).length"
                        );
                        
                        return activeRequests == 0;
                        
                    } catch (Exception e) {
                        return true; // Assume network is idle if we can't check
                    }
                }
            });
        }
    }
    
    // Safe Interaction Methods
    public static class SafeInteractions {
        private final WebDriver driver;
        private final StableWait stableWait;
        private final Actions actions;
        
        public SafeInteractions(WebDriver driver) {
            this.driver = driver;
            this.stableWait = new StableWait(driver, Duration.ofSeconds(10));
            this.actions = new Actions(driver);
        }
        
        public void safeClick(By locator) {
            WebElement element = stableWait.waitForElementStable(locator);
            
            try {
                // Scroll element into view
                ((JavascriptExecutor) driver).executeScript(
                    "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});", 
                    element
                );
                
                // Wait for scroll to complete
                Thread.sleep(200);
                
                // Try regular click first
                element.click();
                
            } catch (ElementClickInterceptedException | ElementNotInteractableException e) {
                // Fallback to JavaScript click
                ((JavascriptExecutor) driver).executeScript("arguments[0].click();", element);
            } catch (Exception e) {
                // Last resort - use Actions
                actions.moveToElement(element).click().perform();
            }
        }
        
        public void safeType(By locator, String text) {
            WebElement element = stableWait.waitForElementStable(locator);
            
            try {
                // Clear existing text safely
                element.clear();
                
                // Type new text
                element.sendKeys(text);
                
                // Verify text was entered correctly
                if (!element.getAttribute("value").equals(text)) {
                    // Retry with JavaScript
                    ((JavascriptExecutor) driver).executeScript(
                        "arguments[0].value = arguments[1];", element, text
                    );
                }
                
            } catch (Exception e) {
                throw new RuntimeException("Failed to type text: " + e.getMessage(), e);
            }
        }
        
        public void safeSelectDropdown(By locator, String optionText) {
            WebElement dropdown = stableWait.waitForElementStable(locator);
            
            try {
                dropdown.click();
                
                By optionLocator = By.xpath(".//option[text()='" + optionText + "']");
                WebElement option = stableWait.waitForElementStable(optionLocator);
                option.click();
                
            } catch (Exception e) {
                throw new RuntimeException("Failed to select dropdown option: " + e.getMessage(), e);
            }
        }
    }
    
    // Test Environment Manager
    public static class TestEnvironmentManager {
        private WebDriver driver;
        private String testName;
        private long testStartTime;
        
        public TestEnvironmentManager(WebDriver driver, String testName) {
            this.driver = driver;
            this.testName = testName;
            this.testStartTime = System.currentTimeMillis();
        }
        
        public void setupTestEnvironment() {
            // Clear browser state
            driver.manage().deleteAllCookies();
            
            // Clear local storage
            ((JavascriptExecutor) driver).executeScript("window.localStorage.clear();");
            ((JavascriptExecutor) driver).executeScript("window.sessionStorage.clear();");
            
            // Set consistent window size
            driver.manage().window().setSize(new Dimension(1920, 1080));
            
            // Set consistent timeouts
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
            driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
            driver.manage().timeouts().scriptTimeout(Duration.ofSeconds(20));
            
            System.out.println("Test environment setup completed for: " + testName);
        }
        
        public void cleanupTestEnvironment() {
            try {
                // Take screenshot on failure
                if (testFailed()) {
                    takeScreenshot();
                }
                
                // Clear browser state
                driver.manage().deleteAllCookies();
                ((JavascriptExecutor) driver).executeScript("window.localStorage.clear();");
                
                // Force garbage collection if possible
                ((JavascriptExecutor) driver).executeScript("if(window.gc) window.gc();");
                
            } catch (Exception e) {
                System.err.println("Error during cleanup: " + e.getMessage());
            }
            
            long testDuration = System.currentTimeMillis() - testStartTime;
            System.out.println("Test cleanup completed for: " + testName + 
                             " (Duration: " + testDuration + "ms)");
        }
        
        private boolean testFailed() {
            // This would be implemented based on your test framework
            return false; // Placeholder
        }
        
        private void takeScreenshot() {
            try {
                byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                // Save screenshot to file or test report
                System.out.println("Screenshot taken for failed test: " + testName);
            } catch (Exception e) {
                System.err.println("Failed to take screenshot: " + e.getMessage());
            }
        }
    }
    
    // Retry Analyzer for TestNG
    public static class FlakyTestRetryAnalyzer implements IRetryAnalyzer {
        private int retryCount = 0;
        private static final int maxRetryCount = 3;
        
        @Override
        public boolean retry(ITestResult result) {
            if (retryCount < maxRetryCount) {
                retryCount++;
                
                // Add delay between retries
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                
                System.out.println("Retrying test " + result.getMethod().getMethodName() + 
                                 ", attempt " + (retryCount + 1));
                return true;
            }
            return false;
        }
    }
    
    // Base Test Class with Stabilization
    public abstract class StableBaseTest {
        protected WebDriver driver;
        protected StableWait stableWait;
        protected SafeInteractions safeInteractions;
        protected TestEnvironmentManager environmentManager;
        
        @BeforeMethod(alwaysRun = true)
        public void setUpTest(Method method) {
            // Initialize driver
            driver = createDriver();
            
            // Initialize stabilization components
            stableWait = new StableWait(driver, Duration.ofSeconds(10));
            safeInteractions = new SafeInteractions(driver);
            environmentManager = new TestEnvironmentManager(driver, method.getName());
            
            // Setup test environment
            environmentManager.setupTestEnvironment();
        }
        
        @AfterMethod(alwaysRun = true)
        public void tearDownTest(Method method) {
            if (environmentManager != null) {
                environmentManager.cleanupTestEnvironment();
            }
            
            if (driver != null) {
                driver.quit();
            }
        }
        
        protected WebDriver createDriver() {
            ChromeOptions options = new ChromeOptions();
            
            // Stability options
            options.addArguments("--no-sandbox");
            options.addArguments("--disable-dev-shm-usage");
            options.addArguments("--disable-gpu");
            options.addArguments("--disable-extensions");
            options.addArguments("--disable-plugins");
            options.addArguments("--disable-background-timer-throttling");
            options.addArguments("--disable-renderer-backgrounding");
            options.addArguments("--disable-backgrounding-occluded-windows");
            
            return new ChromeDriver(options);
        }
        
        // Utility methods for stable testing
        protected void navigateAndWait(String url) {
            driver.get(url);
            stableWait.waitForPageLoadComplete();
            stableWait.waitForNetworkIdle();
        }
        
        protected void waitForAndClick(By locator) {
            safeInteractions.safeClick(locator);
        }
        
        protected void waitForAndType(By locator, String text) {
            safeInteractions.safeType(locator, text);
        }
    }
    
    // Example Stable Test
    public class StableLoginTest extends StableBaseTest {
        
        @Test(retryAnalyzer = FlakyTestRetryAnalyzer.class)
        public void testLoginWithStability() {
            // Navigate to login page
            navigateAndWait("https://example.com/login");
            
            // Wait for and interact with form elements
            waitForAndType(By.id("username"), "testuser");
            waitForAndType(By.id("password"), "password123");
            waitForAndClick(By.id("login-button"));
            
            // Wait for login completion
            stableWait.waitForElementStable(By.className("welcome"));
            
            // Verify login success
            WebElement welcomeMessage = driver.findElement(By.className("welcome"));
            assert welcomeMessage.getText().contains("Welcome") : "Login verification failed";
        }
        
        @Test
        public void testFormSubmissionWithRetry() {
            navigateAndWait("https://example.com/contact");
            
            // Fill form with stable interactions
            waitForAndType(By.id("name"), "John Doe");
            waitForAndType(By.id("email"), "john.doe@example.com");
            waitForAndType(By.id("message"), "Test message");
            
            // Submit form
            waitForAndClick(By.id("submit-button"));
            
            // Wait for confirmation
            stableWait.waitForElementStable(By.className("success-message"));
            
            // Verify submission
            WebElement confirmation = driver.findElement(By.className("success-message"));
            assert confirmation.getText().contains("Thank you") : "Form submission failed";
        }
    }
}`
      }
    ],
    stabilization: [
      {
        name: 'Advanced Stabilization Patterns',
        description: 'Advanced patterns and techniques for maximum test stability',
        causes: ['Complex interactions', 'Dynamic content', 'Network latency', 'Browser inconsistencies'],
        solutions: ['Advanced waits', 'Smart retries', 'Adaptive strategies', 'Comprehensive monitoring'],
        code: String.raw`// JavaScript - Advanced Test Stabilization Patterns
class AdvancedTestStabilizer {
    constructor(driver) {
        this.driver = driver;
        this.config = {
            maxRetries: 3,
            retryDelay: 1000,
            stabilityTimeout: 10000,
            pollInterval: 500,
            networkTimeout: 30000
        };
        this.metrics = {
            totalTests: 0,
            failedTests: 0,
            retriedTests: 0,
            stabilityScore: 0
        };
    }
    
    // Advanced Wait Strategies
    async waitForElementWithRetry(locator, options = {}) {
        const {
            timeout = this.config.stabilityTimeout,
            retries = this.config.maxRetries,
            checkVisibility = true,
            checkClickability = false,
            checkStability = true
        } = options;
        
        for (let attempt = 0; attempt <= retries; attempt++) {
            try {
                const element = await this.waitForElementAdvanced(locator, {
                    timeout,
                    checkVisibility,
                    checkClickability,
                    checkStability
                });
                return element;
            } catch (error) {
                if (attempt === retries) {
                    throw new Error("Element not found after " + (retries + 1) + " attempts: " + error.message);
                }
                
                console.log("Retry " + (attempt + 1) + "/" + retries + " for element " + locator);
                await this.sleep(this.config.retryDelay);
            }
        }
    }
    
    async waitForElementAdvanced(locator, options = {}) {
        const {
            timeout = this.config.stabilityTimeout,
            checkVisibility = true,
            checkClickability = false,
            checkStability = true
        } = options;
        
        const startTime = Date.now();
        
        while (Date.now() - startTime < timeout) {
            try {
                const element = await this.driver.findElement(locator);
                
                // Basic existence check
                if (!element) {
                    throw new Error('Element not found');
                }
                
                // Visibility check
                if (checkVisibility && !(await element.isDisplayed())) {
                    throw new Error('Element not visible');
                }
                
                // Clickability check
                if (checkClickability && !(await element.isEnabled())) {
                    throw new Error('Element not clickable');
                }
                
                // Stability check
                if (checkStability && !(await this.isElementStable(element))) {
                    throw new Error('Element not stable');
                }
                
                return element;
                
            } catch (error) {
                // Continue waiting
                await this.sleep(this.config.pollInterval);
            }
        }
        
        throw new Error("Timeout waiting for element: " + locator);
    }
    
    async isElementStable(element) {
        try {
            // Check position stability
            const location1 = await element.getLocation();
            await this.sleep(100);
            const location2 = await element.getLocation();
            
            if (location1.x !== location2.x || location1.y !== location2.y) {
                return false;
            }
            
            // Check if element is covered by another element
            const isCovered = await this.isElementCovered(element);
            if (isCovered) {
                return false;
            }
            
            // Check CSS animation state
            const isAnimating = await this.driver.executeScript(
                'return window.getComputedStyle(arguments[0]).animationName !== "none"',
                element
            );
            
            return !isAnimating;
            
        } catch (error) {
            return false;
        }
    }
    
    async isElementCovered(element) {
        try {
            const coveringElement = await this.driver.executeScript(
                "var element = arguments[0];" +
                "var rect = element.getBoundingClientRect();" +
                "var x = rect.left + (rect.width / 2);" +
                "var y = rect.top + (rect.height / 2);" +
                "var topElement = document.elementFromPoint(x, y);" +
                "return topElement === element ? null : topElement;",
                element
            );
            
            return coveringElement !== null;
        } catch (error) {
            return false;
        }
    }
    
    // Smart Interaction Methods
    async safeClick(locator, options = {}) {
        const {
            retries = this.config.maxRetries,
            scrollIntoView = true,
            useJavaScript = false,
            doubleClick = false
        } = options;
        
        const element = await this.waitForElementWithRetry(locator, {
            checkClickability: true,
            checkStability: true
        });
        
        for (let attempt = 0; attempt <= retries; attempt++) {
            try {
                if (scrollIntoView) {
                    await this.driver.executeScript(
                        'arguments[0].scrollIntoView({behavior: "smooth", block: "center"});',
                        element
                    );
                    await this.sleep(200);
                }
                
                if (useJavaScript) {
                    await this.driver.executeScript('arguments[0].click();', element);
                } else if (doubleClick) {
                    const actions = this.driver.actions({bridge: true});
                    await actions.doubleClick(element).perform();
                } else {
                    await element.click();
                }
                
                return true;
                
            } catch (error) {
                if (attempt === retries) {
                    // Last resort - try JavaScript click
                    try {
                        await this.driver.executeScript('arguments[0].click();', element);
                        return true;
                    } catch (jsError) {
                        throw new Error("Click failed after " + (retries + 1) + " attempts: " + error.message);
                    }
                }
                
                console.log("Click retry " + (attempt + 1) + "/" + retries);
                await this.sleep(this.config.retryDelay);
            }
        }
    }
    
    async safeType(locator, text, options = {}) {
        const {
            clearFirst = true,
            validateInput = true,
            typingDelay = 50
        } = options;
        
        const element = await this.waitForElementWithRetry(locator, {
            checkVisibility: true,
            checkStability: true
        });
        
        try {
            if (clearFirst) {
                await element.clear();
                await this.sleep(100);
            }
            
            // Type with delay for stability
            for (const char of text) {
                await element.sendKeys(char);
                if (typingDelay > 0) {
                    await this.sleep(typingDelay);
                }
            }
            
            // Validate input if requested
            if (validateInput) {
                const inputValue = await element.getAttribute('value');
                if (inputValue !== text) {
                    // Retry with JavaScript
                    await this.driver.executeScript(
                        'arguments[0].value = arguments[1];',
                        element, text
                    );
                }
            }
            
        } catch (error) {
            throw new Error("Failed to type text: " + error.message);
        }
    }
    
    // Network and Page Load Strategies
    async waitForPageLoadComplete(timeout = this.config.networkTimeout) {
        const startTime = Date.now();
        
        while (Date.now() - startTime < timeout) {
            try {
                const readyState = await this.driver.executeScript('return document.readyState');
                if (readyState !== 'complete') {
                    await this.sleep(500);
                    continue;
                }
                
                // Check for active AJAX requests
                const ajaxComplete = await this.driver.executeScript(
                    "return (typeof jQuery === 'undefined') || jQuery.active === 0"
                );
                if (!ajaxComplete) {
                    await this.sleep(500);
                    continue;
                }
                
                // Check for Angular (if present)
                const angularComplete = await this.driver.executeScript(
                    "return (typeof angular === 'undefined') || " +
                    "angular.element(document).injector().get('$http').pendingRequests.length === 0"
                );
                
                if (angularComplete) {
                    return true;
                }
                
                await this.sleep(500);
                
            } catch (error) {
                await this.sleep(500);
            }
        }
        
        throw new Error("Page load timeout after " + timeout + "ms");
    }
    
    async waitForNetworkIdle(timeout = this.config.networkTimeout) {
        const startTime = Date.now();
        
        while (Date.now() - startTime < timeout) {
            try {
                const activeRequests = await this.driver.executeScript(
                    "return performance.getEntriesByType('resource').filter(" +
                    "function(entry) { return entry.responseEnd === 0; }).length"
                );
                
                if (activeRequests === 0) {
                    return true;
                }
                
                await this.sleep(500);
                
            } catch (error) {
                return true; // Assume network is idle if we can't check
            }
        }
        
        throw new Error("Network idle timeout after " + timeout + "ms");
    }
    
    // Test Execution Wrapper
    async executeStableTest(testFunction, testName, options = {}) {
        const {
            retries = this.config.maxRetries,
            retryDelay = this.config.retryDelay,
            captureScreenshot = true,
            cleanupOnError = true
        } = options;
        
        this.metrics.totalTests++;
        
        for (let attempt = 0; attempt <= retries; attempt++) {
            const startTime = Date.now();
            
            try {
                console.log("Executing test: " + testName + " (attempt " + (attempt + 1) + ")");
                
                // Pre-test setup
                await this.setupTestEnvironment();
                
                // Execute test
                const result = await testFunction();
                
                const executionTime = Date.now() - startTime;
                console.log("Test " + testName + " PASSED in " + executionTime + "ms");
                
                // Update metrics
                this.updateStabilityScore(true, executionTime);
                
                return result;
                
            } catch (error) {
                const executionTime = Date.now() - startTime;
                console.log("Test " + testName + " FAILED in " + executionTime + "ms: " + error.message);
                
                // Capture screenshot on failure
                if (captureScreenshot) {
                    await this.captureScreenshot(testName, attempt);
                }
                
                // Cleanup on error
                if (cleanupOnError) {
                    await this.cleanupTestEnvironment();
                }
                
                if (attempt === retries) {
                    this.metrics.failedTests++;
                    this.updateStabilityScore(false, executionTime);
                    throw error;
                }
                
                this.metrics.retriedTests++;
                await this.sleep(retryDelay);
            }
        }
    }
    
    async setupTestEnvironment() {
        try {
            // Clear browser state
            await this.driver.manage().deleteAllCookies();
            await this.driver.executeScript('window.localStorage.clear();');
            await this.driver.executeScript('window.sessionStorage.clear();');
            
            // Set consistent window size
            await this.driver.manage().window().setRect({ width: 1920, height: 1080 });
            
            // Set timeouts
            await this.driver.manage().setTimeouts({
                implicit: 10000,
                pageLoad: 30000,
                script: 20000
            });
            
        } catch (error) {
            console.warn('Setup warning:', error.message);
        }
    }
    
    async cleanupTestEnvironment() {
        try {
            // Clear browser state
            await this.driver.manage().deleteAllCookies();
            await this.driver.executeScript('window.localStorage.clear();');
            
            // Force garbage collection
            await this.driver.executeScript('if(window.gc) window.gc();');
            
        } catch (error) {
            console.warn('Cleanup warning:', error.message);
        }
    }
    
    async captureScreenshot(testName, attempt) {
        try {
            const screenshot = await this.driver.takeScreenshot();
            const filename = testName + "_attempt_" + (attempt + 1) + "_" + Date.now() + ".png";
            
            // Save screenshot (implementation depends on your setup)
            console.log("Screenshot saved: " + filename);
            
        } catch (error) {
            console.warn('Failed to capture screenshot:', error.message);
        }
    }
    
    updateStabilityScore(success, executionTime) {
        // Simple stability score calculation
        if (success) {
            if (executionTime < 5000) {
                this.metrics.stabilityScore += 10; // Fast and successful
            } else {
                this.metrics.stabilityScore += 5; // Slow but successful
            }
        } else {
            this.metrics.stabilityScore -= 5; // Failed
        }
        
        // Keep score within bounds
        this.metrics.stabilityScore = Math.max(0, Math.min(100, this.metrics.stabilityScore));
    }
    
    getStabilityMetrics() {
        const successRate = this.metrics.totalTests > 0 ? 
            ((this.metrics.totalTests - this.metrics.failedTests) / this.metrics.totalTests) * 100 : 0;
        
        return {
            totalTests: this.metrics.totalTests,
            failedTests: this.metrics.failedTests,
            retriedTests: this.metrics.retriedTests,
            successRate: successRate.toFixed(2) + '%',
            stabilityScore: this.metrics.stabilityScore
        };
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Example Usage
class ExampleStableTest {
    constructor() {
        this.driver = null;
        this.stabilizer = null;
    }
    
    async setup() {
        // Initialize WebDriver
        const { Builder, Chrome, Options } = require('selenium-webdriver');
        
        const options = new Options();
        options.addArguments('--no-sandbox');
        options.addArguments('--disable-dev-shm-usage');
        options.addArguments('--disable-gpu');
        
        this.driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        
        this.stabilizer = new AdvancedTestStabilizer(this.driver);
    }
    
    async runStableLoginTest() {
        return await this.stabilizer.executeStableTest(
            async () => {
                // Navigate to login page
                await this.driver.get('https://example.com/login');
                await this.stabilizer.waitForPageLoadComplete();
                
                // Fill login form with stable interactions
                await this.stabilizer.safeType(By.id('username'), 'testuser');
                await this.stabilizer.safeType(By.id('password'), 'password123');
                await this.stabilizer.safeClick(By.id('login-button'));
                
                // Wait for login completion
                await this.stabilizer.waitForElementWithRetry(By.className('welcome'));
                
                // Verify login
                const welcomeMessage = await this.driver.findElement(By.className('welcome'));
                const welcomeText = await welcomeMessage.getText();
                
                if (!welcomeText.includes('Welcome')) {
                    throw new Error('Login verification failed');
                }
                
                return true;
            },
            'stable_login_test',
            {
                retries: 3,
                captureScreenshot: true,
                cleanupOnError: true
            }
        );
    }
    
    async runAllTests() {
        try {
            await this.setup();
            
            // Run tests multiple times to test stability
            for (let i = 0; i < 10; i++) {
                await this.runStableLoginTest();
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            
            // Print stability metrics
            const metrics = this.stabilizer.getStabilityMetrics();
            console.log('Stability Metrics:', metrics);
            
        } finally {
            if (this.driver) {
                await this.driver.quit();
            }
        }
    }
}

// Export for use
module.exports = {
    AdvancedTestStabilizer,
    ExampleStableTest
};`
      }
    ]
  };

  const currentFeatures = flakyTestData[selectedStrategy];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Shield}
        category="Selenium · Performance & Optimization"
        title="Flaky Test Prevention"
        description="Prevent and eliminate flaky tests with stability strategies and best practices"
        colorTheme="yellow"
        badges={[
          { label: 'Test Stability', variant: 'secondary' },
          { label: 'Reliability', variant: 'info' },
          { label: 'Prevention', variant: 'secondary' },
        ]}
      />

      {/* Flaky Test Prevention Flow Diagram */}
      <Card className="border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/40">
              <Target className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            Flaky Test Prevention Pipeline
          </CardTitle>
          <CardDescription>Visual representation of flaky test prevention and stabilization workflow</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Flow Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-x-auto">
              <div className="flex flex-col items-center min-w-[320px] max-w-2xl mx-auto gap-0">
                {/* Test Execution */}
                <div className="bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-100 text-center">Test Execution</div>
                  <div className="text-xs text-green-700 dark:text-green-300 text-center">Run Selenium tests</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600 -my-0"></div>
                
                {/* Flaky Detection */}
                <div className="bg-yellow-100 dark:bg-yellow-900/40 px-6 py-3 rounded-lg border-2 border-yellow-300 dark:border-yellow-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 text-center">Flaky Detection</div>
                  <div className="text-xs text-yellow-700 dark:text-yellow-300 text-center">Identify patterns</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-yellow-400 dark:bg-yellow-600 -my-0"></div>
                
                {/* Root Cause Analysis */}
                <div className="bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-orange-900 dark:text-orange-100 text-center">Root Cause Analysis</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300 text-center">Analyze failures</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-orange-400 dark:bg-orange-600 -my-0"></div>
                
                {/* Stabilization */}
                <div className="bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Stabilization</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300 text-center">Apply fixes</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-purple-400 dark:bg-purple-600 -my-0"></div>
                
                {/* Prevention */}
                <div className="bg-red-100 dark:bg-red-900/40 px-6 py-3 rounded-lg border-2 border-red-300 dark:border-red-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-red-900 dark:text-red-100 text-center">Prevention</div>
                  <div className="text-xs text-red-700 dark:text-red-300 text-center">Maintain stability</div>
                </div>
              </div>
            </div>
            
            {/* Prevention Features Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
                <div className="flex items-center gap-2 mb-2">
                  <Bug className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  <h5 className="font-semibold text-yellow-900 dark:text-yellow-100">Detection</h5>
                </div>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• Pattern analysis</li>
                  <li>• Statistical monitoring</li>
                  <li>• Failure tracking</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">Prevention</h5>
                </div>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Smart waits</li>
                  <li>• Retry logic</li>
                  <li>• Environment control</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Stabilization</h5>
                </div>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Test isolation</li>
                  <li>• Resource management</li>
                  <li>• Consistent environment</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strategy Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-yellow-600" />
            Prevention Strategies
          </CardTitle>
          <CardDescription>
            Different approaches to prevent and eliminate flaky tests
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Strategy Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            {(['detection', 'prevention', 'stabilization'] as const).map((strategy) => (
              <button
                key={strategy}
                onClick={() => setSelectedStrategy(strategy)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedStrategy === strategy
                    ? 'border-b-2 border-yellow-600 text-yellow-600 dark:text-yellow-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {strategy}
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
                ? 'border-yellow-500 shadow-lg bg-yellow-50 dark:bg-yellow-950/20' 
                : 'border-slate-200 dark:border-slate-700 hover:border-yellow-300'
            }`}
            onClick={() => setSelectedFeature(selectedFeature === feature.name ? null : feature.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selectedFeature === feature.name
                    ? 'bg-yellow-100 dark:bg-yellow-900/40'
                    : 'bg-slate-100 dark:bg-slate-900/40'
                }`}>
                  <TestTube className={`w-6 h-6 ${
                    selectedFeature === feature.name
                      ? 'text-yellow-600 dark:text-yellow-400'
                      : 'text-slate-600 dark:text-slate-400'
                  }`} />
                </div>
                {feature.name}
                <Badge variant={selectedFeature === feature.name ? "default" : "secondary"}>
                  {selectedStrategy}
                </Badge>
              </CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            
            {selectedFeature === feature.name && (
              <CardContent className="space-y-4">
                {/* Causes and Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      <h5 className="font-semibold text-orange-900 dark:text-orange-100">Flaky Test Causes</h5>
                    </div>
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
                      Prevention Solutions
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
                      Implementation Code
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

      {/* Flaky Test Metrics Dashboard */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Flaky Test Metrics Dashboard
          </CardTitle>
          <CardDescription>Key metrics and targets for flaky test prevention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Stability Targets</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Test Reliability</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Target: &gt; 95% test reliability with comprehensive flaky test detection and prevention.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TriangleAlert className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Flaky Rate Reduction</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Maintain &lt; 2% flaky test rate with advanced stabilization techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Prevention Strategies</h5>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Proactive Prevention</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Implement smart waits, retry logic, and environment standardization.
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
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Continuous Monitoring</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Track test stability metrics and identify emerging flaky patterns.
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

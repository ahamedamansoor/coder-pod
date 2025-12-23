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
  Zap,
  Play,
  Pause,
  RefreshCw,
  Clock,
  FileText,
  Terminal,
  Package,
  Shield,
  Activity,
  Download,
  Upload,
  Layers,
  Cpu,
  Gauge,
  TrendingUp,
  Timer,
  BarChart3,
  LineChart,
  Target,
  Rocket
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function TestPerformanceComponent() {
  const { toast } = useToast();
  const [selectedStrategy, setSelectedStrategy] = React.useState<'optimization' | 'monitoring' | 'benchmarking'>('optimization');
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const performanceData = {
    optimization: [
      {
        name: 'Wait Strategy Optimization',
        description: 'Implement efficient wait strategies to reduce test execution time',
        causes: ['Fixed waits', 'Excessive polling', 'Unnecessary delays', 'Poor synchronization'],
        solutions: ['Smart waits', 'Expected conditions', 'Custom wait strategies', 'Polling optimization'],
        code: String.raw`// Python - Advanced Wait Strategies
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

class SmartWaitManager:
    def __init__(self, driver, default_timeout=10):
        self.driver = driver
        self.default_timeout = default_timeout
        self.wait = WebDriverWait(driver, default_timeout)
    
    def wait_for_element_smart(self, locator, timeout=None):
        """Smart wait with multiple conditions"""
        timeout = timeout or self.default_timeout
        wait = WebDriverWait(self.driver, timeout)
        
        try:
            # Try multiple conditions in order of preference
            element = wait.until(
                EC.any_of(
                    EC.presence_of_element_located(locator),
                    EC.visibility_of_element_located(locator),
                    EC.element_to_be_clickable(locator)
                )
            )
            return element
        except:
            # Fallback to custom polling
            return self._custom_polling_wait(locator, timeout)
    
    def _custom_polling_wait(self, locator, timeout, poll_frequency=0.2):
        """Custom polling with adaptive frequency"""
        end_time = time.time() + timeout
        poll_frequency = max(0.1, poll_frequency)  # Minimum 100ms
        
        while time.time() < end_time:
            try:
                element = self.driver.find_element(*locator)
                if element.is_displayed() and element.is_enabled():
                    return element
            except:
                pass
            
            # Adaptive polling - increase frequency as timeout approaches
            time_remaining = end_time - time.time()
            if time_remaining < 2:
                poll_frequency = 0.05  # 50ms for last 2 seconds
            
            time.sleep(poll_frequency)
        
        raise TimeoutException(f"Element not found within {timeout} seconds")
    
    def wait_for_page_load(self, timeout=30):
        """Wait for page to be fully loaded"""
        end_time = time.time() + timeout
        
        while time.time() < end_time:
            # Check document ready state
            ready_state = self.driver.execute_script("return document.readyState")
            if ready_state == "complete":
                # Additional check for no pending AJAX requests
                ajax_complete = self.driver.execute_script(
                    "return (typeof jQuery !== 'undefined' && jQuery.active === 0) || true"
                )
                if ajax_complete:
                    return True
            time.sleep(0.1)
        
        return False

# Usage Example
driver = webdriver.Chrome()
smart_wait = SmartWaitManager(driver)

# Fast element waiting
element = smart_wait.wait_for_element_smart((By.ID, "submit-button"))

# Wait for page load
smart_wait.wait_for_page_load()

# Optimized test execution
class OptimizedTestSuite:
    def __init__(self, driver):
        self.driver = driver
        self.smart_wait = SmartWaitManager(driver)
    
    def test_login_performance(self):
        start_time = time.time()
        
        try:
            # Navigate and wait smartly
            self.driver.get("https://example.com/login")
            self.smart_wait.wait_for_page_load()
            
            # Find and interact with elements efficiently
            username = self.smart_wait.wait_for_element_smart((By.ID, "username"))
            username.send_keys("testuser")
            
            password = self.smart_wait.wait_for_element_smart((By.ID, "password"))
            password.send_keys("password123")
            
            # Click submit with minimal wait
            submit = self.smart_wait.wait_for_element_smart((By.ID, "login"))
            submit.click()
            
            # Verify login success
            welcome = self.smart_wait.wait_for_element_smart((By.CLASS_NAME, "welcome"))
            
            execution_time = time.time() - start_time
            print(f"Login test completed in {execution_time:.2f} seconds")
            
        except Exception as e:
            execution_time = time.time() - start_time
            print(f"Login test failed in {execution_time:.2f} seconds: {e}")`
      },
      {
        name: 'Parallel Test Execution',
        description: 'Execute tests in parallel to reduce overall execution time',
        causes: ['Sequential execution', 'Single-threaded tests', 'Resource bottlenecks', 'Poor test distribution'],
        solutions: ['Multi-threading', 'Test parallelization', 'Resource optimization', 'Load balancing'],
        code: String.raw`// Java - Parallel Test Execution with TestNG
import org.testng.annotations.Test;
import org.testng.annotations.DataProvider;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.AfterClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class ParallelPerformanceTest {
    
    private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();
    private static ConcurrentHashMap<String, Long> testTimes = new ConcurrentHashMap<>();
    private static AtomicInteger testCounter = new AtomicInteger(0);
    
    @BeforeClass(alwaysRun = true)
    public void setUp() {
        // Create thread-safe WebDriver instance
        String browser = System.getProperty("browser", "chrome");
        driver.set(createDriver(browser));
    }
    
    @AfterClass(alwaysRun = true)
    public void tearDown() {
        if (driver.get() != null) {
            driver.get().quit();
        }
    }
    
    @Test(dataProvider = "loginData", threadPoolSize = 4, invocationCount = 1)
    public void parallelLoginTest(String username, String password, String expected) {
        long startTime = System.currentTimeMillis();
        int testId = testCounter.incrementAndGet();
        
        try {
            WebDriver webDriver = driver.get();
            
            // Optimized navigation
            webDriver.get("https://example.com/login");
            waitForPageLoad(webDriver);
            
            // Fast element interaction
            findElementFast(webDriver, "username").sendKeys(username);
            findElementFast(webDriver, "password").sendKeys(password);
            findElementFast(webDriver, "login").click();
            
            // Quick verification
            String result = findElementFast(webDriver, "message").getText();
            assert result.contains(expected) : "Login validation failed";
            
            long executionTime = System.currentTimeMillis() - startTime;
            testTimes.put("Test-" + testId, executionTime);
            
            System.out.printf("Test %d completed in %d ms%n", testId, executionTime);
            
        } catch (Exception e) {
            long executionTime = System.currentTimeMillis() - startTime;
            System.err.printf("Test %d failed in %d ms: %s%n", testId, executionTime, e.getMessage());
            throw e;
        }
    }
    
    @DataProvider(name = "loginData", parallel = true)
    public Object[][] getLoginData() {
        return new Object[][] {
            {"user1", "pass1", "Welcome"},
            {"user2", "pass2", "Welcome"},
            {"user3", "pass3", "Welcome"},
            {"user4", "pass4", "Welcome"},
            {"user5", "pass5", "Welcome"},
            {"user6", "pass6", "Welcome"},
            {"user7", "pass7", "Welcome"},
            {"user8", "pass8", "Welcome"}
        };
    }
    
    private WebDriver createDriver(String browser) {
        switch (browser.toLowerCase()) {
            case "chrome":
                System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");
                ChromeOptions chromeOptions = new ChromeOptions();
                chromeOptions.addArguments("--no-sandbox");
                chromeOptions.addArguments("--disable-dev-shm-usage");
                chromeOptions.addArguments("--disable-gpu");
                chromeOptions.addArguments("--disable-extensions");
                return new ChromeDriver(chromeOptions);
            case "firefox":
                System.setProperty("webdriver.gecko.driver", "/path/to/geckodriver");
                FirefoxOptions firefoxOptions = new FirefoxOptions();
                firefoxOptions.addArguments("--no-sandbox");
                firefoxOptions.addArguments("--disable-dev-shm-usage");
                return new FirefoxDriver(firefoxOptions);
            default:
                throw new IllegalArgumentException("Unsupported browser: " + browser);
        }
    }
    
    private void waitForPageLoad(WebDriver driver) {
        long end = System.currentTimeMillis() + 10000; // 10 second timeout
        
        while (System.currentTimeMillis() < end) {
            String readyState = ((org.openqa.selenium.JavascriptExecutor) driver)
                .executeScript("return document.readyState").toString();
            
            if ("complete".equals(readyState)) {
                break;
            }
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }
    
    private org.openqa.selenium.WebElement findElementFast(WebDriver driver, String id) {
        // Use fast locator strategies
        return driver.findElement(org.openqa.selenium.By.id(id));
    }
    
    // Performance reporting
    @Test(dependsOnMethods = "parallelLoginTest")
    public void generatePerformanceReport() {
        System.out.println("=== Performance Report ===");
        System.out.println("Total Tests: " + testTimes.size());
        
        double totalTime = testTimes.values().stream().mapToLong(Long::longValue).sum();
        double averageTime = totalTime / testTimes.size();
        
        System.out.printf("Average Execution Time: %.2f ms%n", averageTime);
        System.out.printf("Total Execution Time: %.2f ms%n", totalTime);
        
        // Find slowest and fastest tests
        String slowest = testTimes.entrySet().stream()
            .max((a, b) -> a.getValue().compareTo(b.getValue()))
            .map(e -> e.getKey() + " (" + e.getValue() + " ms)")
            .orElse("N/A");
            
        String fastest = testTimes.entrySet().stream()
            .min((a, b) -> a.getValue().compareTo(b.getValue()))
            .map(e -> e.getKey() + " (" + e.getValue() + " ms)")
            .orElse("N/A");
        
        System.out.println("Slowest Test: " + slowest);
        System.out.println("Fastest Test: " + fastest);
    }
}`
      }
    ],
    monitoring: [
      {
        name: 'Real-time Performance Monitoring',
        description: 'Monitor test execution performance in real-time with metrics collection',
        causes: ['No performance visibility', 'Missing metrics', 'Poor monitoring', 'No alerting'],
        solutions: ['Performance metrics', 'Real-time monitoring', 'Alert systems', 'Dashboard integration'],
        code: String.raw`// JavaScript - Performance Monitoring System
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            testExecutionTimes: [],
            memoryUsage: [],
            cpuUsage: [],
            networkRequests: [],
            pageLoadTimes: []
        };
        this.startTime = null;
        this.testName = null;
    }
    
    startTestMonitoring(testName) {
        this.testName = testName;
        this.startTime = performance.now();
        
        // Start monitoring system resources
        this.startResourceMonitoring();
        
        // Monitor network requests
        this.startNetworkMonitoring();
        
        console.log('Started monitoring for test: ' + testName);
    }
    
    endTestMonitoring() {
        if (!this.startTime || !this.testName) return;
        
        const endTime = performance.now();
        const executionTime = endTime - this.startTime;
        
        // Record execution time
        this.metrics.testExecutionTimes.push({
            testName: this.testName,
            executionTime: executionTime,
            timestamp: new Date().toISOString()
        });
        
        // Stop resource monitoring
        this.stopResourceMonitoring();
        
        // Generate performance report
        this.generateTestReport();
        
        console.log('Test ' + this.testName + ' completed in ' + executionTime.toFixed(2) + 'ms');
        
        // Reset for next test
        this.startTime = null;
        this.testName = null;
    }
    
    startResourceMonitoring() {
        this.resourceMonitorInterval = setInterval(() => {
            // Monitor memory usage
            if (performance.memory) {
                this.metrics.memoryUsage.push({
                    used: performance.memory.usedJSHeapSize,
                    total: performance.memory.totalJSHeapSize,
                    limit: performance.memory.jsHeapSizeLimit,
                    timestamp: performance.now()
                });
            }
            
            // Monitor CPU usage (approximation)
            const cpuUsage = this.estimateCPUUsage();
            this.metrics.cpuUsage.push({
                usage: cpuUsage,
                timestamp: performance.now()
            });
        }, 100); // Monitor every 100ms
    }
    
    stopResourceMonitoring() {
        if (this.resourceMonitorInterval) {
            clearInterval(this.resourceMonitorInterval);
            this.resourceMonitorInterval = null;
        }
    }
    
    startNetworkMonitoring() {
        // Override fetch to monitor network requests
        const originalFetch = window.fetch;
        const networkRequests = [];
        
        window.fetch = async (...args) => {
            const startTime = performance.now();
            
            try {
                const response = await originalFetch(...args);
                const endTime = performance.now();
                
                this.metrics.networkRequests.push({
                    url: args[0],
                    method: args[1]?.method || 'GET',
                    duration: endTime - startTime,
                    status: response.status,
                    timestamp: startTime
                });
                
                return response;
            } catch (error) {
                const endTime = performance.now();
                
                this.metrics.networkRequests.push({
                    url: args[0],
                    method: args[1]?.method || 'GET',
                    duration: endTime - startTime,
                    error: error.message,
                    timestamp: startTime
                });
                
                throw error;
            }
        };
    }
    
    estimateCPUUsage() {
        // Simple CPU estimation based on execution time
        const start = performance.now();
        let count = 0;
        
        while (performance.now() - start < 10) { // 10ms test
            count++;
        }
        
        // Lower count = higher CPU usage
        return Math.max(0, Math.min(100, 100 - (count / 1000)));
    }
    
    measurePageLoadTime(url) {
        const startTime = performance.now();
        
        return new Promise((resolve) => {
            const pageLoadObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const navigationEntry = entries.find(entry => entry.entryType === 'navigation');
                
                if (navigationEntry) {
                    const loadTime = navigationEntry.loadEventEnd - navigationEntry.loadEventStart;
                    
                    this.metrics.pageLoadTimes.push({
                        url: url,
                        loadTime: loadTime,
                        timestamp: startTime
                    });
                    
                    resolve(loadTime);
                }
            });
            
            pageLoadObserver.observe({ entryTypes: ['navigation'] });
            
            // Navigate to page
            window.location.href = url;
        });
    }
    
    generateTestReport() {
        const report = {
            testName: this.testName,
            executionTime: this.metrics.testExecutionTimes[this.metrics.testExecutionTimes.length - 1],
            memoryStats: this.getMemoryStats(),
            networkStats: this.getNetworkStats(),
            performanceScore: this.calculatePerformanceScore()
        };
        
        // Send report to monitoring service
        this.sendReport(report);
        
        // Display report
        console.table(report);
    }
    
    getMemoryStats() {
        if (this.metrics.memoryUsage.length === 0) return null;
        
        const usage = this.metrics.memoryUsage.map(m => m.used);
        const max = Math.max(...usage);
        const min = Math.min(...usage);
        const avg = usage.reduce((a, b) => a + b, 0) / usage.length;
        
        return { max, min, average: avg };
    }
    
    getNetworkStats() {
        const requests = this.metrics.networkRequests;
        const totalRequests = requests.length;
        const totalDuration = requests.reduce((sum, r) => sum + (r.duration || 0), 0);
        const avgDuration = totalRequests > 0 ? totalDuration / totalRequests : 0;
        
        return {
            totalRequests,
            totalDuration,
            averageDuration: avgDuration
        };
    }
    
    calculatePerformanceScore() {
        const executionTime = this.metrics.testExecutionTimes[this.metrics.testExecutionTimes.length - 1]?.executionTime || 0;
        const memoryStats = this.getMemoryStats();
        const networkStats = this.getNetworkStats();
        
        // Simple scoring algorithm (0-100)
        let score = 100;
        
        // Penalize slow execution
        if (executionTime > 5000) score -= 30;
        else if (executionTime > 3000) score -= 20;
        else if (executionTime > 1000) score -= 10;
        
        // Penalize high memory usage
        if (memoryStats && memoryStats.average > 50 * 1024 * 1024) score -= 20;
        
        // Penalize slow network
        if (networkStats.averageDuration > 1000) score -= 15;
        
        return Math.max(0, score);
    }
    
    sendReport(report) {
        // Send to monitoring dashboard or API
        fetch('/api/performance/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(report)
        }).catch(error => {
            console.error('Failed to send performance report:', error);
        });
    }
    
    // Performance optimization suggestions
    getOptimizationSuggestions() {
        const suggestions = [];
        const memoryStats = this.getMemoryStats();
        const networkStats = this.getNetworkStats();
        
        if (memoryStats && memoryStats.average > 50 * 1024 * 1024) {
            suggestions.push("Consider optimizing memory usage - high heap consumption detected");
        }
        
        if (networkStats.averageDuration > 1000) {
            suggestions.push("Network requests are slow - consider optimizing API calls");
        }
        
        if (this.metrics.testExecutionTimes.length > 0) {
            const avgTime = this.metrics.testExecutionTimes.reduce((sum, t) => sum + t.executionTime, 0) / 
                           this.metrics.testExecutionTimes.length;
            
            if (avgTime > 3000) {
                suggestions.push("Test execution is slow - consider parallelization or wait optimization");
            }
        }
        
        return suggestions;
    }
}

// Usage in Selenium tests
const performanceMonitor = new PerformanceMonitor();

class OptimizedSeleniumTest {
    constructor(driver) {
        this.driver = driver;
        this.monitor = performanceMonitor;
    }
    
    async runTestWithMonitoring(testName, testFunction) {
        this.monitor.startTestMonitoring(testName);
        
        try {
            await testFunction();
        } finally {
            this.monitor.endTestMonitoring();
        }
    }
    
    async exampleTest() {
        await this.runTestMonitoring('Login Performance Test', async () => {
            await this.driver.get('https://example.com/login');
            
            const username = await this.driver.findElement(By.id('username'));
            await username.sendKeys('testuser');
            
            const password = await this.driver.findElement(By.id('password'));
            await password.sendKeys('password123');
            
            const login = await this.driver.findElement(By.id('login'));
            await login.click();
            
            // Wait for login completion
            await this.driver.wait(until.elementLocated(By.className('welcome')), 5000);
        });
    }
}`
      }
    ],
    benchmarking: [
      {
        name: 'Performance Benchmarking',
        description: 'Establish performance baselines and track improvements over time',
        causes: ['No baselines', 'Inconsistent measurements', 'Poor benchmarking', 'No trend analysis'],
        solutions: ['Baseline establishment', 'Consistent metrics', 'Automated benchmarking', 'Trend analysis'],
        code: String.raw`// Python - Performance Benchmarking System
import time
import json
import statistics
import matplotlib.pyplot as plt
from datetime import datetime, timedelta
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import numpy as np

class PerformanceBenchmark:
    def __init__(self, driver, baseline_file="performance_baseline.json"):
        self.driver = driver
        self.baseline_file = baseline_file
        self.results = []
        self.baseline = self.load_baseline()
        
    def load_baseline(self):
        """Load existing baseline data"""
        try:
            with open(self.baseline_file, 'r') as f:
                return json.load(f)
        except FileNotFoundError:
            return {}
    
    def save_baseline(self):
        """Save baseline data to file"""
        with open(self.baseline_file, 'w') as f:
            json.dump(self.baseline, f, indent=2)
    
    def benchmark_test(self, test_name, test_function, iterations=10):
        """Run performance benchmark for a test"""
        print(f"Running benchmark for {test_name}...")
        
        execution_times = []
        memory_usage = []
        
        for i in range(iterations):
            # Clear browser state
            self.driver.delete_all_cookies()
            self.driver.execute_script("window.localStorage.clear();")
            
            # Measure memory before test
            memory_before = self.get_memory_usage()
            
            # Run test and measure time
            start_time = time.time()
            
            try:
                test_function()
                success = True
                error = None
            except Exception as e:
                success = False
                error = str(e)
            
            end_time = time.time()
            execution_time = (end_time - start_time) * 1000  # Convert to milliseconds
            
            # Measure memory after test
            memory_after = self.get_memory_usage()
            
            execution_times.append(execution_time)
            memory_usage.append(memory_after - memory_before)
            
            print(f"Iteration {i+1}: {execution_time:.2f}ms")
            
            # Small delay between iterations
            time.sleep(1)
        
        # Calculate statistics
        stats = {
            'test_name': test_name,
            'timestamp': datetime.now().isoformat(),
            'iterations': iterations,
            'execution_times': {
                'mean': statistics.mean(execution_times),
                'median': statistics.median(execution_times),
                'min': min(execution_times),
                'max': max(execution_times),
                'std_dev': statistics.stdev(execution_times) if len(execution_times) > 1 else 0,
                'p95': np.percentile(execution_times, 95),
                'p99': np.percentile(execution_times, 99)
            },
            'memory_usage': {
                'mean': statistics.mean(memory_usage),
                'median': statistics.median(memory_usage),
                'min': min(memory_usage),
                'max': max(memory_usage)
            },
            'raw_times': execution_times,
            'raw_memory': memory_usage
        }
        
        # Store results
        self.results.append(stats)
        
        # Update baseline
        if test_name not in self.baseline:
            self.baseline[test_name] = []
        self.baseline[test_name].append(stats)
        
        # Keep only last 30 days of baseline data
        self.cleanup_baseline()
        
        return stats
    
    def get_memory_usage(self):
        """Get current memory usage"""
        try:
            # For Chrome DevTools Protocol
            if hasattr(self.driver, 'execute_cdp_cmd'):
                memory_info = self.driver.execute_cdp_cmd('Runtime.getHeapUsage', {})
                return memory_info.get('usedSize', 0)
            else:
                # Fallback - estimate based on browser memory
                return 0
        except:
            return 0
    
    def cleanup_baseline(self):
        """Remove old baseline data (older than 30 days)"""
        cutoff_date = datetime.now() - timedelta(days=30)
        
        for test_name in self.baseline:
            self.baseline[test_name] = [
                result for result in self.baseline[test_name]
                if datetime.fromisoformat(result['timestamp']) > cutoff_date
            ]
    
    def compare_with_baseline(self, test_name, current_stats):
        """Compare current performance with baseline"""
        if test_name not in self.baseline or not self.baseline[test_name]:
            return {"status": "no_baseline", "message": "No baseline data available"}
        
        # Get baseline statistics (average of all baseline runs)
        baseline_data = self.baseline[test_name]
        baseline_mean = statistics.mean([b['execution_times']['mean'] for b in baseline_data])
        
        current_mean = current_stats['execution_times']['mean']
        
        # Calculate performance change
        change_percent = ((current_mean - baseline_mean) / baseline_mean) * 100
        
        # Determine performance status
        if abs(change_percent) < 5:
            status = "stable"
            message = f"Performance is stable ({change_percent:+.1f}% change)"
        elif change_percent > 0:
            status = "degraded"
            message = f"Performance degraded by {change_percent:+.1f}%"
        else:
            status = "improved"
            message = f"Performance improved by {change_percent:+.1f}%"
        
        return {
            "status": status,
            "change_percent": change_percent,
            "baseline_mean": baseline_mean,
            "current_mean": current_mean,
            "message": message
        }
    
    def generate_performance_report(self):
        """Generate comprehensive performance report"""
        if not self.results:
            return "No test results available"
        
        report = {
            "generated_at": datetime.now().isoformat(),
            "summary": {},
            "test_results": self.results,
            "trends": {},
            "recommendations": []
        }
        
        # Calculate summary statistics
        all_times = []
        for result in self.results:
            all_times.extend(result['raw_times'])
        
        report["summary"] = {
            "total_tests": len(self.results),
            "total_iterations": sum(r['iterations'] for r in self.results),
            "overall_mean_time": statistics.mean(all_times),
            "overall_median_time": statistics.median(all_times),
            "overall_std_dev": statistics.stdev(all_times) if len(all_times) > 1 else 0
        }
        
        # Generate recommendations
        report["recommendations"] = self.generate_recommendations()
        
        return report
    
    def generate_recommendations(self):
        """Generate performance optimization recommendations"""
        recommendations = []
        
        for result in self.results:
            test_name = result['test_name']
            mean_time = result['execution_times']['mean']
            std_dev = result['execution_times']['std_dev']
            
            # High variance recommendation
            if std_dev > mean_time * 0.3:  # High variance (>30% of mean)
                recommendations.append({
                    "test": test_name,
                    "type": "variance",
                    "message": f"High execution time variance detected. Consider stabilizing test environment.",
                    "priority": "medium"
                })
            
            # Slow test recommendation
            if mean_time > 5000:  # > 5 seconds
                recommendations.append({
                    "test": test_name,
                    "type": "performance",
                    "message": f"Test is slow ({mean_time:.0f}ms). Consider optimization.",
                    "priority": "high"
                })
            
            # Memory usage recommendation
            if result['memory_usage']['mean'] > 100 * 1024 * 1024:  # > 100MB
                recommendations.append({
                    "test": test_name,
                    "type": "memory",
                    "message": f"High memory usage detected. Consider memory optimization.",
                    "priority": "medium"
                })
        
        return recommendations
    
    def create_performance_charts(self, save_path="performance_charts.png"):
        """Create performance visualization charts"""
        if not self.results:
            return
        
        fig, axes = plt.subplots(2, 2, figsize=(15, 10))
        fig.suptitle('Performance Benchmark Results', fontsize=16)
        
        # Chart 1: Execution Time Comparison
        test_names = [r['test_name'] for r in self.results]
        mean_times = [r['execution_times']['mean'] for r in self.results]
        
        axes[0, 0].bar(test_names, mean_times)
        axes[0, 0].set_title('Mean Execution Time')
        axes[0, 0].set_ylabel('Time (ms)')
        axes[0, 0].tick_params(axis='x', rotation=45)
        
        # Chart 2: Performance Variance
        std_devs = [r['execution_times']['std_dev'] for r in self.results]
        
        axes[0, 1].bar(test_names, std_devs)
        axes[0, 1].set_title('Execution Time Variance')
        axes[0, 1].set_ylabel('Standard Deviation (ms)')
        axes[0, 1].tick_params(axis='x', rotation=45)
        
        # Chart 3: Memory Usage
        memory_means = [r['memory_usage']['mean'] / (1024*1024) for r in self.results]  # Convert to MB
        
        axes[1, 0].bar(test_names, memory_means)
        axes[1, 0].set_title('Mean Memory Usage')
        axes[1, 0].set_ylabel('Memory (MB)')
        axes[1, 0].tick_params(axis='x', rotation=45)
        
        # Chart 4: Performance Trend (if multiple runs)
        if len(self.results) > 1:
            timestamps = [datetime.fromisoformat(r['timestamp']) for r in self.results]
            axes[1, 1].plot(timestamps, mean_times, 'o-')
            axes[1, 1].set_title('Performance Trend')
            axes[1, 1].set_ylabel('Time (ms)')
            axes[1, 1].tick_params(axis='x', rotation=45)
        else:
            axes[1, 1].text(0.5, 0.5, 'Insufficient data for trend analysis', 
                           ha='center', va='center', transform=axes[1, 1].transAxes)
        
        plt.tight_layout()
        plt.savefig(save_path, dpi=300, bbox_inches='tight')
        plt.show()
    
    def save_results(self, filename="benchmark_results.json"):
        """Save benchmark results to file"""
        results_data = {
            "timestamp": datetime.now().isoformat(),
            "results": self.results,
            "baseline": self.baseline
        }
        
        with open(filename, 'w') as f:
            json.dump(results_data, f, indent=2)

# Usage Example
driver = webdriver.Chrome()
benchmark = PerformanceBenchmark(driver)

def login_test():
    """Sample test function to benchmark"""
    driver.get("https://example.com/login")
    
    username = driver.find_element(By.ID, "username")
    username.send_keys("testuser")
    
    password = driver.find_element(By.ID, "password")
    password.send_keys("password123")
    
    login = driver.find_element(By.ID, "login")
    login.click()
    
    # Wait for login completion
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "welcome"))
    )

# Run benchmark
login_stats = benchmark.benchmark_test("Login Performance", login_test, iterations=5)

# Compare with baseline
comparison = benchmark.compare_with_baseline("Login Performance", login_stats)
print(f"Performance comparison: {comparison['message']}")

# Generate report
report = benchmark.generate_performance_report()
print(json.dumps(report, indent=2))

# Create charts
benchmark.create_performance_charts()

# Save results
benchmark.save_results()
benchmark.save_baseline()`
      }
    ]
  };

  const currentFeatures = performanceData[selectedStrategy];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Rocket}
        category="Selenium · Performance & Optimization"
        title="Test Performance"
        description="Optimize Selenium test performance with advanced techniques and best practices"
        colorTheme="red"
        badges={[
          { label: 'Performance', variant: 'secondary' },
          { label: 'Optimization', variant: 'info' },
          { label: 'Monitoring', variant: 'secondary' },
        ]}
      />

      {/* Performance Optimization Flow Diagram */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/40">
              <Gauge className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            Performance Optimization Pipeline
          </CardTitle>
          <CardDescription>Visual representation of test performance optimization workflow</CardDescription>
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
                
                {/* Performance Monitoring */}
                <div className="bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">Performance Monitoring</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 text-center">Collect metrics</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-blue-400 dark:bg-blue-600 -my-0"></div>
                
                {/* Analysis */}
                <div className="bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Performance Analysis</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300 text-center">Identify bottlenecks</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-purple-400 dark:bg-purple-600 -my-0"></div>
                
                {/* Optimization */}
                <div className="bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-orange-900 dark:text-orange-100 text-center">Optimization</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300 text-center">Apply improvements</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-orange-400 dark:bg-orange-600 -my-0"></div>
                
                {/* Benchmarking */}
                <div className="bg-red-100 dark:bg-red-900/40 px-6 py-3 rounded-lg border-2 border-red-300 dark:border-red-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-red-900 dark:text-red-100 text-center">Benchmarking</div>
                  <div className="text-xs text-red-700 dark:text-red-300 text-center">Measure improvements</div>
                </div>
              </div>
            </div>
            
            {/* Performance Features Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                <div className="flex items-center gap-2 mb-2">
                  <Timer className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h5 className="font-semibold text-red-900 dark:text-red-100">Wait Optimization</h5>
                </div>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• Smart waits</li>
                  <li>• Adaptive polling</li>
                  <li>• Expected conditions</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Real-time Monitoring</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Performance metrics</li>
                  <li>• Resource tracking</li>
                  <li>• Alert systems</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Benchmarking</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Baseline establishment</li>
                  <li>• Trend analysis</li>
                  <li>• Performance scoring</li>
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
            <Terminal className="w-5 h-5 text-red-600" />
            Performance Strategies
          </CardTitle>
          <CardDescription>
            Different approaches to optimize and monitor Selenium test performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Strategy Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            {(['optimization', 'monitoring', 'benchmarking'] as const).map((strategy) => (
              <button
                key={strategy}
                onClick={() => setSelectedStrategy(strategy)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedStrategy === strategy
                    ? 'border-b-2 border-red-600 text-red-600 dark:text-red-400'
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
                ? 'border-red-500 shadow-lg bg-red-50 dark:bg-red-950/20' 
                : 'border-slate-200 dark:border-slate-700 hover:border-red-300'
            }`}
            onClick={() => setSelectedFeature(selectedFeature === feature.name ? null : feature.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selectedFeature === feature.name
                    ? 'bg-red-100 dark:bg-red-900/40'
                    : 'bg-slate-100 dark:bg-slate-900/40'
                }`}>
                  <Zap className={`w-6 h-6 ${
                    selectedFeature === feature.name
                      ? 'text-red-600 dark:text-red-400'
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
                    <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Performance Issues
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
                      Optimization Solutions
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

      {/* Performance Metrics Dashboard */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <LineChart className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Performance Metrics Dashboard
          </CardTitle>
          <CardDescription>Key performance indicators and optimization targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Execution Time Targets</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Fast Execution</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Target: &lt; 3 seconds per test case with optimized wait strategies and parallel execution.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Consistent Performance</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Maintain &lt; 10% variance across test runs with stable environments and proper synchronization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Resource Optimization</h5>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">CPU Efficiency</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Optimize CPU usage with parallel execution and efficient element locating strategies.
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
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Memory Management</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Minimize memory footprint with proper cleanup and efficient browser session management.
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

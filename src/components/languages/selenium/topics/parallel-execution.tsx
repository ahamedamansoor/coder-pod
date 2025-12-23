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
  Server,
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
  Layers,
  Cpu,
  Grid3X3,
  Network,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ParallelExecutionComponent() {
  const { toast } = useToast();
  const [selectedStrategy, setSelectedStrategy] = React.useState<'grid' | 'threading' | 'distribution'>('grid');
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const parallelData = {
    grid: [
      {
        name: 'Selenium Grid Setup',
        description: 'Configure Selenium Grid for parallel test execution across multiple nodes',
        causes: ['Grid setup complexity', 'Node registration issues', 'Browser compatibility', 'Network connectivity'],
        solutions: ['Docker-based Grid', 'Proper node configuration', 'Browser version management', 'Network troubleshooting'],
        code: `// Grid Setup - Hub Configuration
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import java.net.URL;
import java.net.MalformedURLException;

public class SeleniumGridExample {
    
    public static void main(String[] args) {
        // Grid Hub URL
        String hubUrl = "http://localhost:4444/wd/hub";
        
        // Configure Chrome options for Grid
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("--disable-gpu");
        
        // Create Remote WebDriver instance
        WebDriver driver = null;
        
        try {
            // Connect to Selenium Grid Hub
            driver = new RemoteWebDriver(new URL(hubUrl), options);
            
            // Test execution
            driver.get("https://example.com");
            System.out.println("Title: " + driver.getTitle());
            
            // Perform test actions
            // ... your test code here ...
            
        } catch (MalformedURLException e) {
            System.err.println("Invalid Grid URL: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("Test execution failed: " + e.getMessage());
        } finally {
            if (driver != null) {
                driver.quit();
            }
        }
    }
}

// Docker Compose for Selenium Grid
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
      - GRID_NEW_SESSION_WAIT_TIMEOUT=30000
    
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
    ports:
      - "6901:5900"  # VNC port
    
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
    ports:
      - "6902:5900"  # VNC port
    
  edge-node:
    image: selenium/node-edge:4.8.0
    container_name: edge-node
    depends_on:
      - selenium-hub
    environment:
      - HUB_HOST=selenium-hub
      - HUB_PORT=4444
      - NODE_MAX_SESSION=8
      - NODE_MAX_INSTANCES=8
    ports:
      - "6903:5900"  # VNC port`
      },
      {
        name: 'Parallel TestNG Execution',
        description: 'Execute TestNG tests in parallel across multiple browsers and threads',
        causes: ['Test configuration issues', 'Thread safety problems', 'Data sharing conflicts', 'Resource contention'],
        solutions: ['TestNG parallel configuration', 'Thread-local WebDriver', 'Test data isolation', 'Resource management'],
        code: `// TestNG XML Configuration for Parallel Execution
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd" >
<suite name="Parallel Test Suite" parallel="tests" thread-count="4">
    
    <test name="Chrome Tests">
        <parameter name="browser" value="chrome"/>
        <parameter name="gridUrl" value="http://localhost:4444/wd/hub"/>
        <classes>
            <class name="com.tests.ParallelLoginTest"/>
            <class name="com.tests.ParallelSearchTest"/>
            <class name="com.tests.ParallelCheckoutTest"/>
        </classes>
    </test>
    
    <test name="Firefox Tests">
        <parameter name="browser" value="firefox"/>
        <parameter name="gridUrl" value="http://localhost:4444/wd/hub"/>
        <classes>
            <class name="com.tests.ParallelLoginTest"/>
            <class name="com.tests.ParallelSearchTest"/>
            <class name="com.tests.ParallelCheckoutTest"/>
        </classes>
    </test>
    
    <test name="Edge Tests">
        <parameter name="browser" value="edge"/>
        <parameter name="gridUrl" value="http://localhost:4444/wd/hub"/>
        <classes>
            <class name="com.tests.ParallelLoginTest"/>
            <class name="com.tests.ParallelSearchTest"/>
            <class name="com.tests.ParallelCheckoutTest"/>
        </classes>
    </test>
    
</suite>

// Base Test Class with Thread Safety
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.edge.EdgeOptions;
import org.testng.ITestContext;
import org.testng.annotations.*;
import java.net.URL;

public class BaseParallelTest {
    
    protected ThreadLocal<WebDriver> driver = new ThreadLocal<>();
    protected String gridUrl;
    protected String browser;
    
    @Parameters({"browser", "gridUrl"})
    @BeforeClass(alwaysRun = true)
    public void setUpClass(String browser, String gridUrl) {
        this.browser = browser;
        this.gridUrl = gridUrl;
    }
    
    @BeforeMethod(alwaysRun = true)
    public void setUp() {
        try {
            WebDriver webDriver = createDriver(browser, gridUrl);
            driver.set(webDriver);
        } catch (Exception e) {
            throw new RuntimeException("Failed to initialize WebDriver: " + e.getMessage());
        }
    }
    
    @AfterMethod(alwaysRun = true)
    public void tearDown() {
        if (driver.get() != null) {
            driver.get().quit();
            driver.remove();
        }
    }
    
    protected WebDriver getDriver() {
        return driver.get();
    }
    
    private WebDriver createDriver(String browser, String gridUrl) throws Exception {
        switch (browser.toLowerCase()) {
            case "chrome":
                ChromeOptions chromeOptions = new ChromeOptions();
                chromeOptions.addArguments("--no-sandbox");
                chromeOptions.addArguments("--disable-dev-shm-usage");
                chromeOptions.addArguments("--disable-gpu");
                return new RemoteWebDriver(new URL(gridUrl), chromeOptions);
                
            case "firefox":
                FirefoxOptions firefoxOptions = new FirefoxOptions();
                firefoxOptions.addArguments("--no-sandbox");
                firefoxOptions.addArguments("--disable-dev-shm-usage");
                return new RemoteWebDriver(new URL(gridUrl), firefoxOptions);
                
            case "edge":
                EdgeOptions edgeOptions = new EdgeOptions();
                edgeOptions.addArguments("--no-sandbox");
                edgeOptions.addArguments("--disable-dev-shm-usage");
                edgeOptions.addArguments("--disable-gpu");
                return new RemoteWebDriver(new URL(gridUrl), edgeOptions);
                
            default:
                throw new IllegalArgumentException("Unsupported browser: " + browser);
        }
    }
}

// Example Parallel Test Class
import org.testng.annotations.Test;
import org.testng.Assert;
import org.testng.Reporter;

public class ParallelLoginTest extends BaseParallelTest {
    
    @Test(description = "Verify login functionality")
    public void testLogin() {
        WebDriver driver = getDriver();
        driver.get("https://example.com/login");
        
        // Perform login
        driver.findElement(org.openqa.selenium.By.id("username")).sendKeys("testuser");
        driver.findElement(org.openqa.selenium.By.id("password")).sendKeys("password123");
        driver.findElement(org.openqa.selenium.By.id("login-btn")).click();
        
        // Verify successful login
        String welcomeMessage = driver.findElement(org.openqa.selenium.By.id("welcome")).getText();
        Assert.assertTrue(welcomeMessage.contains("Welcome"), "Login failed");
        
        Reporter.log("Login test executed on " + browser + " browser");
    }
    
    @Test(description = "Verify login with invalid credentials")
    public void testInvalidLogin() {
        WebDriver driver = getDriver();
        driver.get("https://example.com/login");
        
        // Perform login with invalid credentials
        driver.findElement(org.openqa.selenium.By.id("username")).sendKeys("invalid");
        driver.findElement(org.openqa.selenium.By.id("password")).sendKeys("invalid");
        driver.findElement(org.openqa.selenium.By.id("login-btn")).click();
        
        // Verify error message
        String errorMessage = driver.findElement(org.openqa.selenium.By.id("error")).getText();
        Assert.assertTrue(errorMessage.contains("Invalid"), "Error message not displayed");
        
        Reporter.log("Invalid login test executed on " + browser + " browser");
    }
}`
      }
    ],
    threading: [
      {
        name: 'Multi-Threading Implementation',
        description: 'Implement custom multi-threading for parallel test execution',
        causes: ['Thread synchronization issues', 'Resource sharing conflicts', 'Test isolation problems', 'Performance bottlenecks'],
        solutions: ['Thread-safe WebDriver management', 'Proper synchronization', 'Test data isolation', 'Performance optimization'],
        code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.concurrent.*;
import java.util.ArrayList;
import java.util.List;

public class ParallelTestExecutor {
    
    private static final int THREAD_POOL_SIZE = 4;
    private static final String[] BROWSERS = {"chrome", "firefox"};
    
    public static void main(String[] args) {
        ParallelTestExecutor executor = new ParallelTestExecutor();
        executor.runParallelTests();
    }
    
    public void runParallelTests() {
        ExecutorService executor = Executors.newFixedThreadPool(THREAD_POOL_SIZE);
        List<Future<TestResult>> futures = new ArrayList<>();
        
        // Create test tasks for different browsers
        for (String browser : BROWSERS) {
            for (int i = 1; i <= 3; i++) {  // 3 test instances per browser
                TestTask task = new TestTask(browser, "TestInstance-" + i);
                Future<TestResult> future = executor.submit(task);
                futures.add(future);
            }
        }
        
        // Wait for all tests to complete and collect results
        List<TestResult> results = new ArrayList<>();
        for (Future<TestResult> future : futures) {
            try {
                TestResult result = future.get();
                results.add(result);
                System.out.println("Test completed: " + result);
            } catch (InterruptedException | ExecutionException e) {
                System.err.println("Test execution failed: " + e.getMessage());
            }
        }
        
        // Print summary
        printTestSummary(results);
        
        // Shutdown executor
        executor.shutdown();
        try {
            if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
                executor.shutdownNow();
            }
        } catch (InterruptedException e) {
            executor.shutdownNow();
        }
    }
    
    private void printTestSummary(List<TestResult> results) {
        int totalTests = results.size();
        int passedTests = (int) results.stream().mapToInt(r -> r.status.equals("PASSED") ? 1 : 0).sum();
        int failedTests = totalTests - passedTests;
        
        System.out.println("\\n=== Test Execution Summary ===");
        System.out.println("Total Tests: " + totalTests);
        System.out.println("Passed: " + passedTests);
        System.out.println("Failed: " + failedTests);
        System.out.println("Success Rate: " + (passedTests * 100.0 / totalTests) + "%");
    }
    
    static class TestTask implements Callable<TestResult> {
        private final String browser;
        private final String testName;
        
        public TestTask(String browser, String testName) {
            this.browser = browser;
            this.testName = testName;
        }
        
        @Override
        public TestResult call() {
            WebDriver driver = null;
            long startTime = System.currentTimeMillis();
            
            try {
                // Create WebDriver instance
                driver = createWebDriver(browser);
                
                // Execute test
                boolean testPassed = executeTest(driver, testName);
                
                long endTime = System.currentTimeMillis();
                long duration = endTime - startTime;
                
                return new TestResult(testName, browser, testPassed ? "PASSED" : "FAILED", duration);
                
            } catch (Exception e) {
                long endTime = System.currentTimeMillis();
                long duration = endTime - startTime;
                return new TestResult(testName, browser, "ERROR: " + e.getMessage(), duration);
            } finally {
                if (driver != null) {
                    driver.quit();
                }
            }
        }
        
        private WebDriver createWebDriver(String browser) {
            switch (browser.toLowerCase()) {
                case "chrome":
                    System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");
                    return new ChromeDriver();
                case "firefox":
                    System.setProperty("webdriver.gecko.driver", "/path/to/geckodriver");
                    return new FirefoxDriver();
                default:
                    throw new IllegalArgumentException("Unsupported browser: " + browser);
            }
        }
        
        private boolean executeTest(WebDriver driver, String testName) {
            try {
                // Navigate to test page
                driver.get("https://example.com");
                
                // Perform test actions based on test name
                if (testName.contains("1")) {
                    return testLoginFunctionality(driver);
                } else if (testName.contains("2")) {
                    return testSearchFunctionality(driver);
                } else if (testName.contains("3")) {
                    return testCheckoutFunctionality(driver);
                }
                
                return true;
                
            } catch (Exception e) {
                System.err.println("Test execution failed for " + testName + ": " + e.getMessage());
                return false;
            }
        }
        
        private boolean testLoginFunctionality(WebDriver driver) {
            // Simulate login test
            driver.findElement(org.openqa.selenium.By.id("login-link")).click();
            driver.findElement(org.openqa.selenium.By.id("username")).sendKeys("testuser");
            driver.findElement(org.openqa.selenium.By.id("password")).sendKeys("password");
            driver.findElement(org.openqa.selenium.By.id("submit")).click();
            
            // Verify login success
            return driver.getPageSource().contains("Welcome");
        }
        
        private boolean testSearchFunctionality(WebDriver driver) {
            // Simulate search test
            driver.findElement(org.openqa.selenium.By.id("search-box")).sendKeys("Selenium");
            driver.findElement(org.openqa.selenium.By.id("search-btn")).click();
            
            // Verify search results
            return driver.getPageSource().contains("Results");
        }
        
        private boolean testCheckoutFunctionality(WebDriver driver) {
            // Simulate checkout test
            driver.findElement(org.openqa.selenium.By.id("product")).click();
            driver.findElement(org.openqa.selenium.By.id("add-to-cart")).click();
            driver.findElement(org.openqa.selenium.By.id("checkout")).click();
            
            // Verify checkout process
            return driver.getPageSource().contains("Order Summary");
        }
    }
    
    static class TestResult {
        String testName;
        String browser;
        String status;
        long duration;
        
        public TestResult(String testName, String browser, String status, long duration) {
            this.testName = testName;
            this.browser = browser;
            this.status = status;
            this.duration = duration;
        }
        
        @Override
        public String toString() {
            return String.format("%s [%s] - %s (%dms)", testName, browser, status, duration);
        }
    }
}`
      }
    ],
    distribution: [
      {
        name: 'Test Distribution Strategy',
        description: 'Distribute tests across multiple machines and environments for optimal performance',
        causes: ['Load balancing issues', 'Test distribution complexity', 'Environment synchronization', 'Result aggregation'],
        solutions: ['Load balancing algorithms', 'Dynamic test allocation', 'Environment management', 'Centralized reporting'],
        code: `import java.util.*;
import java.util.concurrent.*;
import java.rmi.*;
import java.rmi.server.*;

// Test Distribution Interface
interface TestDistributor extends Remote {
    List<TestTask> distributeTests(List<TestTask> tests, List<TestNode> nodes) throws RemoteException;
    TestResult executeTest(TestTask task, TestNode node) throws RemoteException;
    void reportResult(TestResult result) throws RemoteException;
}

// Test Node Interface
interface TestNode extends Remote {
    String getNodeId() throws RemoteException;
    String getBrowser() throws RemoteException;
    boolean isAvailable() throws RemoteException;
    TestResult executeTest(TestTask task) throws RemoteException;
}

// Test Task Class
class TestTask implements Serializable {
    private String testId;
    private String testClass;
    private String testMethod;
    private Map<String, Object> parameters;
    private String preferredBrowser;
    private int priority;
    
    // Constructor, getters, and setters
    public TestTask(String testId, String testClass, String testMethod, String preferredBrowser) {
        this.testId = testId;
        this.testClass = testClass;
        this.testMethod = testMethod;
        this.preferredBrowser = preferredBrowser;
        this.parameters = new HashMap<>();
        this.priority = 1;
    }
    
    // Getters and setters...
}

// Test Result Class
class TestResult implements Serializable {
    private String testId;
    private String nodeId;
    private String status;
    private long startTime;
    private long endTime;
    private String errorMessage;
    private Map<String, Object> testData;
    
    // Constructor, getters, and setters
    public TestResult(String testId, String nodeId, String status) {
        this.testId = testId;
        this.nodeId = nodeId;
        this.status = status;
        this.startTime = System.currentTimeMillis();
        this.endTime = System.currentTimeMillis();
        this.testData = new HashMap<>();
    }
    
    // Getters and setters...
}

// Main Test Distributor Implementation
public class SeleniumTestDistributor extends UnicastRemoteObject implements TestDistributor {
    
    private Map<String, TestNode> availableNodes;
    private Queue<TestResult> resultQueue;
    private ExecutorService executor;
    private LoadBalancer loadBalancer;
    
    public SeleniumTestDistributor() throws RemoteException {
        this.availableNodes = new ConcurrentHashMap<>();
        this.resultQueue = new ConcurrentLinkedQueue<>();
        this.executor = Executors.newFixedThreadPool(10);
        this.loadBalancer = new RoundRobinLoadBalancer();
    }
    
    @Override
    public List<TestTask> distributeTests(List<TestTask> tests, List<TestNode> nodes) throws RemoteException {
        List<TestTask> distributedTasks = new ArrayList<>();
        
        // Register available nodes
        for (TestNode node : nodes) {
            availableNodes.put(node.getNodeId(), node);
        }
        
        // Distribute tests based on load balancing strategy
        for (TestTask test : tests) {
            TestNode selectedNode = loadBalancer.selectNode(test, new ArrayList<>(availableNodes.values()));
            if (selectedNode != null) {
                // Submit test for execution on selected node
                executor.submit(() -> {
                    try {
                        TestResult result = selectedNode.executeTest(test);
                        reportResult(result);
                    } catch (RemoteException e) {
                        TestResult errorResult = new TestResult(test.getTestId(), selectedNode.getNodeId(), "ERROR");
                        errorResult.setErrorMessage(e.getMessage());
                        reportResult(errorResult);
                    }
                });
                distributedTasks.add(test);
            }
        }
        
        return distributedTasks;
    }
    
    @Override
    public TestResult executeTest(TestTask task, TestNode node) throws RemoteException {
        return node.executeTest(task);
    }
    
    @Override
    public void reportResult(TestResult result) throws RemoteException {
        resultQueue.offer(result);
        System.out.println("Test result reported: " + result.getTestId() + " - " + result.getStatus());
    }
    
    public List<TestResult> getAllResults() {
        return new ArrayList<>(resultQueue);
    }
    
    public void shutdown() {
        executor.shutdown();
        try {
            if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
                executor.shutdownNow();
            }
        } catch (InterruptedException e) {
            executor.shutdownNow();
        }
    }
}

// Load Balancer Interface
interface LoadBalancer {
    TestNode selectNode(TestTask task, List<TestNode> availableNodes);
}

// Round Robin Load Balancer Implementation
class RoundRobinLoadBalancer implements LoadBalancer {
    private AtomicInteger counter = new AtomicInteger(0);
    
    @Override
    public TestNode selectNode(TestTask task, List<TestNode> availableNodes) {
        if (availableNodes.isEmpty()) {
            return null;
        }
        
        // Filter nodes by preferred browser
        List<TestNode> compatibleNodes = new ArrayList<>();
        for (TestNode node : availableNodes) {
            if (node.isAvailable() && 
                (task.getPreferredBrowser() == null || 
                 node.getBrowser().equalsIgnoreCase(task.getPreferredBrowser()))) {
                compatibleNodes.add(node);
            }
        }
        
        if (compatibleNodes.isEmpty()) {
            // Fallback to any available node
            for (TestNode node : availableNodes) {
                if (node.isAvailable()) {
                    compatibleNodes.add(node);
                }
            }
        }
        
        if (compatibleNodes.isEmpty()) {
            return null;
        }
        
        // Round robin selection
        int index = counter.getAndIncrement() % compatibleNodes.size();
        return compatibleNodes.get(index);
    }
}

// Test Node Implementation
public class SeleniumTestNode extends UnicastRemoteObject implements TestNode {
    
    private String nodeId;
    private String browser;
    private boolean available;
    private WebDriverPool driverPool;
    
    public SeleniumTestNode(String nodeId, String browser, int poolSize) throws RemoteException {
        this.nodeId = nodeId;
        this.browser = browser;
        this.available = true;
        this.driverPool = new WebDriverPool(browser, poolSize);
    }
    
    @Override
    public String getNodeId() throws RemoteException {
        return nodeId;
    }
    
    @Override
    public String getBrowser() throws RemoteException {
        return browser;
    }
    
    @Override
    public boolean isAvailable() throws RemoteException {
        return available && driverPool.hasAvailableDrivers();
    }
    
    @Override
    public TestResult executeTest(TestTask task) throws RemoteException {
        WebDriver driver = null;
        TestResult result = new TestResult(task.getTestId(), nodeId, "RUNNING");
        
        try {
            // Get WebDriver from pool
            driver = driverPool.getDriver();
            
            // Execute test using reflection
            boolean testPassed = executeTestByReflection(driver, task);
            
            result.setStatus(testPassed ? "PASSED" : "FAILED");
            
        } catch (Exception e) {
            result.setStatus("ERROR");
            result.setErrorMessage(e.getMessage());
        } finally {
            // Return WebDriver to pool
            if (driver != null) {
                driverPool.returnDriver(driver);
            }
            result.setEndTime(System.currentTimeMillis());
        }
        
        return result;
    }
    
    private boolean executeTestByReflection(WebDriver driver, TestTask task) throws Exception {
        // Load test class
        Class<?> testClass = Class.forName(task.getTestClass());
        Object testInstance = testClass.getDeclaredConstructor().newInstance();
        
        // Set up driver in test instance
        testClass.getMethod("setDriver", WebDriver.class).invoke(testInstance, driver);
        
        // Execute test method
        Object result = testClass.getMethod(task.getTestMethod()).invoke(testInstance);
        
        return (Boolean) result;
    }
    
    public void setAvailable(boolean available) {
        this.available = available;
    }
}

// WebDriver Pool for managing browser instances
class WebDriverPool {
    private Queue<WebDriver> availableDrivers;
    private String browser;
    private int maxPoolSize;
    
    public WebDriverPool(String browser, int maxPoolSize) {
        this.browser = browser;
        this.maxPoolSize = maxPoolSize;
        this.availableDrivers = new ConcurrentLinkedQueue<>();
        
        // Initialize pool
        for (int i = 0; i < maxPoolSize; i++) {
            try {
                availableDrivers.offer(createWebDriver(browser));
            } catch (Exception e) {
                System.err.println("Failed to create WebDriver: " + e.getMessage());
            }
        }
    }
    
    public WebDriver getDriver() throws Exception {
        WebDriver driver = availableDrivers.poll();
        if (driver == null) {
            throw new Exception("No available WebDriver instances");
        }
        return driver;
    }
    
    public void returnDriver(WebDriver driver) {
        if (driver != null) {
            availableDrivers.offer(driver);
        }
    }
    
    public boolean hasAvailableDrivers() {
        return !availableDrivers.isEmpty();
    }
    
    private WebDriver createWebDriver(String browser) throws Exception {
        // Implementation depends on browser type
        switch (browser.toLowerCase()) {
            case "chrome":
                return new ChromeDriver();
            case "firefox":
                return new FirefoxDriver();
            default:
                throw new IllegalArgumentException("Unsupported browser: " + browser);
        }
    }
}

// Example Usage
public class ParallelTestDistributionExample {
    
    public static void main(String[] args) {
        try {
            // Create test distributor
            SeleniumTestDistributor distributor = new SeleniumTestDistributor();
            
            // Create test nodes
            List<TestNode> nodes = new ArrayList<>();
            nodes.add(new SeleniumTestNode("node-1", "chrome", 2));
            nodes.add(new SeleniumTestNode("node-2", "firefox", 2));
            nodes.add(new SeleniumTestNode("node-3", "chrome", 2));
            
            // Create test tasks
            List<TestTask> tests = new ArrayList<>();
            for (int i = 1; i <= 10; i++) {
                String browser = (i % 2 == 0) ? "chrome" : "firefox";
                tests.add(new TestTask("test-" + i, "TestSuite", "testMethod" + i, browser));
            }
            
            // Distribute and execute tests
            List<TestTask> distributedTests = distributor.distributeTests(tests, nodes);
            
            // Wait for completion and collect results
            Thread.sleep(30000); // Wait for tests to complete
            
            List<TestResult> results = distributor.getAllResults();
            System.out.println("Total results: " + results.size());
            
            // Shutdown
            distributor.shutdown();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
      }
    ]
  };

  const currentFeatures = parallelData[selectedStrategy];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Grid3X3}
        category="Selenium · CI/CD Integration"
        title="Parallel Execution"
        description="Master parallel test execution with Selenium Grid and test distribution strategies"
        colorTheme="purple"
        badges={[
          { label: 'Parallel Testing', variant: 'secondary' },
          { label: 'Grid Computing', variant: 'info' },
          { label: 'Performance', variant: 'secondary' },
        ]}
      />

      {/* Parallel Execution Flow Diagram */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Network className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Parallel Execution Architecture
          </CardTitle>
          <CardDescription>Visual representation of parallel test execution across multiple nodes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Flow Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-x-auto">
              <div className="flex flex-col items-center min-w-[320px] max-w-2xl mx-auto gap-0">
                {/* Test Suite */}
                <div className="bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-100 text-center">Test Suite</div>
                  <div className="text-xs text-green-700 dark:text-green-300 text-center">Multiple test cases</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600 -my-0"></div>
                
                {/* Test Distributor */}
                <div className="bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Test Distributor</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300 text-center">Load balancing</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-purple-400 dark:bg-purple-600 -my-0"></div>
                
                {/* Selenium Grid */}
                <div className="bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">Selenium Grid</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 text-center">Hub & Nodes</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-blue-400 dark:bg-blue-600 -my-0"></div>
                
                {/* Parallel Execution */}
                <div className="bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-orange-900 dark:text-orange-100 text-center">Parallel Execution</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300 text-center">Multiple browsers</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-orange-400 dark:bg-orange-600 -my-0"></div>
                
                {/* Results Aggregation */}
                <div className="bg-red-100 dark:bg-red-900/40 px-6 py-3 rounded-lg border-2 border-red-300 dark:border-red-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-red-900 dark:text-red-100 text-center">Results Aggregation</div>
                  <div className="text-xs text-red-700 dark:text-red-300 text-center">Consolidated report</div>
                </div>
              </div>
            </div>
            
            {/* Parallel Features Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Server className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Selenium Grid</h5>
                </div>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Hub management</li>
                  <li>• Node registration</li>
                  <li>• Browser distribution</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Multi-Threading</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Thread safety</li>
                  <li>• Concurrent execution</li>
                  <li>• Resource management</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Load Balancing</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Round robin</li>
                  <li>• Dynamic allocation</li>
                  <li>• Performance optimization</li>
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
            <Terminal className="w-5 h-5 text-purple-600" />
            Execution Strategies
          </CardTitle>
          <CardDescription>
            Different parallel execution strategies for Selenium testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Strategy Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            {(['grid', 'threading', 'distribution'] as const).map((strategy) => (
              <button
                key={strategy}
                onClick={() => setSelectedStrategy(strategy)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedStrategy === strategy
                    ? 'border-b-2 border-purple-600 text-purple-600 dark:text-purple-400'
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
                  <Grid3X3 className={`w-6 h-6 ${
                    selectedFeature === feature.name
                      ? 'text-purple-600 dark:text-purple-400'
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

      {/* Best Practices */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Parallel Execution Best Practices
          </CardTitle>
          <CardDescription>Proven strategies for effective parallel test execution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Performance Optimization</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Resource Management</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Optimize thread pool sizes and browser instances for maximum throughput without resource contention.
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
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Load Balancing</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Implement intelligent load balancing to distribute tests evenly across available nodes and browsers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Reliability & Monitoring</h5>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Test Isolation</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Ensure proper test isolation using thread-local WebDriver instances and independent test data.
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
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Monitoring & Reporting</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Implement comprehensive monitoring and centralized reporting for distributed test execution.
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

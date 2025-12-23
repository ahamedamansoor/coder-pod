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
  Zap,
  AlertCircle,
  Search,
  Eye,
  MousePointer,
  Play,
  RefreshCw,
  Terminal,
  Monitor,
  Bug,
  Clock,
  XCircle,
  Triangle,
  Shield,
  Wifi,
  WifiOff,
  FileQuestion,
  Lock,
  Unlock,
  Timer,
  Ban,
  Save,
  Database,
  Link,
  Archive,
  AlertTriangle,
  Glasses,
  Crosshair,
  Map,
  Navigation,
  Hourglass,
  Snail,
  ZapOff,
  Activity
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function TimeoutExceptionsComponent() {
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

  const timeoutData = {
    python: [
      {
        name: 'Element Load Timeout',
        description: 'Element takes too long to appear in the DOM',
        causes: ['Slow page load', 'Heavy JavaScript', 'Network latency', 'Server response delay'],
        solutions: ['Increase wait time', 'Use page load strategies', 'Optimize locators', 'Implement retry logic'],
        code: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://example.com")

try:
    # Default 10 second timeout may be too short
    element = driver.find_element(By.ID, "slow-loading-element")
except:
    print("Element not found within default time")
    
    # Solution: Increase timeout and use explicit wait
    wait = WebDriverWait(driver, 30)  # 30 seconds timeout
    element = wait.until(EC.presence_of_element_located((By.ID, "slow-loading-element")))
    print("Element found after waiting!")
    
    # Alternative: Use different wait conditions
    element = wait.until(EC.visibility_of_element_located((By.ID, "slow-loading-element")))
    element = wait.until(EC.element_to_be_clickable((By.ID, "slow-loading-element")))`
      },
      {
        name: 'Page Load Timeout',
        description: 'Page takes too long to completely load',
        causes: ['Large page size', 'Slow server', 'Network issues', 'Heavy resources'],
        solutions: ['Set page load timeout', 'Use partial page load', 'Optimize test environment', 'Monitor network'],
        code: `from selenium import webdriver
from selenium.common.exceptions import TimeoutException

driver = webdriver.Chrome()

# Set page load timeout to 60 seconds
driver.set_page_load_timeout(60)

try:
    driver.get("https://slow-website.com")
    print("Page loaded successfully")
except TimeoutException:
    print("Page load timed out!")
    
    # Solution: Handle timeout gracefully
    try:
        # Try to stop loading and continue
        driver.execute_script("window.stop();")
        print("Stopped page loading, continuing with partial page")
        
        # Wait for specific elements instead of full page load
        from selenium.webdriver.support.ui import WebDriverWait
        from selenium.webdriver.support import expected_conditions as EC
        
        wait = WebDriverWait(driver, 30)
        element = wait.until(EC.presence_of_element_located((By.ID, "main-content")))
        
    except Exception as e:
        print(f"Even partial load failed: {e}")
        driver.refresh()  # Try refreshing`

      },
      {
        name: 'Script Execution Timeout',
        description: 'JavaScript execution takes too long',
        causes: ['Infinite loops', 'Heavy computations', 'Blocking operations', 'Poorly written scripts'],
        solutions: ['Set script timeout', 'Optimize JavaScript', 'Use async operations', 'Break into chunks'],
        code: `from selenium import webdriver
from selenium.common.exceptions import TimeoutException

driver = webdriver.Chrome()

# Set script timeout to 20 seconds
driver.set_script_timeout(20)

try:
    # This might timeout if script is slow
    result = driver.execute_script("""
        // Some heavy computation
        let sum = 0;
        for(let i = 0; i < 1000000000; i++) {
            sum += i;
        }
        return sum;
    """)
except TimeoutException:
    print("Script execution timed out!")
    
    # Solution: Optimize script or break into chunks
    result = driver.execute_async_script("""
        // Use async script with callback
        setTimeout(function() {
            let sum = 0;
            for(let i = 0; i < 1000000; i++) {  // Smaller loop
                sum += i;
            }
            callback(sum);
        }, 100);
    """)
    print(f"Async script result: {result}")
    
    # Alternative: Break heavy operations into smaller parts
    parts = []
    for i in range(10):
        part_result = driver.execute_script(f"""
            let sum = 0;
            let start = {i * 1000000};
            let end = {(i + 1) * 1000000};
            for(let j = start; j < end; j++) {{
                sum += j;
            }}
            return sum;
        """)
        parts.append(part_result)
    
    total = sum(parts)
    print(f"Total from parts: {total}")`
      },
      {
        name: 'AJAX/Async Timeout',
        description: 'AJAX requests or async operations take too long',
        causes: ['Slow API responses', 'Large data transfers', 'Database queries', 'Third-party services'],
        solutions: ['Wait for AJAX completion', 'Use polling strategies', 'Implement custom waits', 'Monitor network activity'],
        code: `from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://example.com with ajax")

# Wait for AJAX to complete (jQuery example)
def wait_for_ajax_complete(driver, timeout=30):
    wait = WebDriverWait(driver, timeout)
    try:
        # Wait for jQuery to be inactive
        wait.until(lambda d: d.execute_script("return jQuery.active == 0"))
        return True
    except:
        # Fallback: wait for general AJAX completion
        wait.until(lambda d: d.execute_script(
            "return document.readyState == 'complete'"
        ))
        return True

try:
    # Wait for AJAX completion before interacting
    if wait_for_ajax_complete(driver):
        element = driver.find_element(By.ID, "ajax-loaded-content")
        element.click()
except Exception as e:
    print(f"AJAX wait failed: {e}")
    
    # Solution: Implement custom polling
    import time
    
    def wait_for_element_with_polling(driver, locator, max_attempts=30, delay=2):
        for attempt in range(max_attempts):
            try:
                element = driver.find_element(*locator)
                if element.is_displayed():
                    return element
            except:
                pass
            
            # Check if AJAX is still active
            ajax_active = driver.execute_script("""
                return typeof jQuery !== 'undefined' ? jQuery.active > 0 : false;
            """)
            
            if not ajax_active:
                time.sleep(delay)
            else:
                print(f"AJAX still active, waiting... (attempt {attempt + 1})")
                time.sleep(delay)
        
        raise Exception(f"Element not found after {max_attempts} attempts")
    
    element = wait_for_element_with_polling(driver, (By.ID, "ajax-loaded-content"))
    element.click()`
      },
      {
        name: 'Implicit vs Explicit Timeout',
        description: 'Conflicts between implicit and explicit wait timeouts',
        causes: ['Mixed wait strategies', 'Timeout conflicts', 'Unpredictable behavior', 'Race conditions'],
        solutions: ['Use explicit waits only', 'Avoid implicit waits', 'Consistent timeout strategy', 'Clear timeout settings'],
        code: `from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

driver = webdriver.Chrome()

# BAD PRACTICE: Don't mix implicit and explicit waits
driver.implicitly_wait(10)  # This can cause conflicts

try:
    # This might behave unpredictably due to implicit wait
    wait = WebDriverWait(driver, 5)
    element = wait.until(EC.presence_of_element_located((By.ID, "element")))
except TimeoutException:
    print("Timeout occurred - ambiguous behavior")

# SOLUTION: Use explicit waits only
driver = webdriver.Chrome()
# Don't set implicit wait at all

# Create reusable wait with consistent timeout
class WaitManager:
    def __init__(self, driver, default_timeout=15):
        self.driver = driver
        self.default_timeout = default_timeout
    
    def wait_for_element(self, locator, timeout=None):
        timeout = timeout or self.default_timeout
        wait = WebDriverWait(self.driver, timeout)
        return wait.until(EC.presence_of_element_located(locator))
    
    def wait_for_clickable(self, locator, timeout=None):
        timeout = timeout or self.default_timeout
        wait = WebDriverWait(self.driver, timeout)
        return wait.until(EC.element_to_be_clickable(locator))
    
    def wait_for_visible(self, locator, timeout=None):
        timeout = timeout or self.default_timeout
        wait = WebDriverWait(self.driver, timeout)
        return wait.until(EC.visibility_of_element_located(locator))

# Usage
wait_manager = WaitManager(driver, default_timeout=20)

# Consistent behavior across all waits
element = wait_manager.wait_for_element((By.ID, "element"))
clickable = wait_manager.wait_for_clickable((By.ID, "button"))
visible = wait_manager.wait_for_visible((By.ID, "modal"))`
      }
    ],
    java: [
      {
        name: 'Element Load Timeout',
        description: 'Element takes too long to appear in the DOM',
        causes: ['Slow page load', 'Heavy JavaScript', 'Network latency', 'Server response delay'],
        solutions: ['Increase wait time', 'Use page load strategies', 'Optimize locators', 'Implement retry logic'],
        code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

WebDriver driver = new ChromeDriver();
driver.get("https://example.com");

try {
    // Default 10 second timeout may be too short
    WebElement element = driver.findElement(By.id("slow-loading-element"));
} catch (Exception e) {
    System.out.println("Element not found within default time");
    
    // Solution: Increase timeout and use explicit wait
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
    WebElement element = wait.until(
        ExpectedConditions.presenceOfElementLocated(By.id("slow-loading-element"))
    );
    System.out.println("Element found after waiting!");
    
    // Alternative: Use different wait conditions
    element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("slow-loading-element")));
    element = wait.until(ExpectedConditions.elementToBeClickable(By.id("slow-loading-element")));
}`
      },
      {
        name: 'Page Load Timeout',
        description: 'Page takes too long to completely load',
        causes: ['Large page size', 'Slow server', 'Network issues', 'Heavy resources'],
        solutions: ['Set page load timeout', 'Use partial page load', 'Optimize test environment', 'Monitor network'],
        code: `import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

WebDriver driver = new ChromeDriver();

// Set page load timeout to 60 seconds
driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(60));

try {
    driver.get("https://slow-website.com");
    System.out.println("Page loaded successfully");
} catch (TimeoutException e) {
    System.out.println("Page load timed out!");
    
    // Solution: Handle timeout gracefully
    try {
        // Try to stop loading and continue
        ((JavascriptExecutor) driver).executeScript("window.stop();");
        System.out.println("Stopped page loading, continuing with partial page");
        
        // Wait for specific elements instead of full page load
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
        WebElement element = wait.until(
            ExpectedConditions.presenceOfElementLocated(By.id("main-content"))
        );
        
    } catch (Exception ex) {
        System.out.println("Even partial load failed: " + ex.getMessage());
        driver.refresh(); // Try refreshing
    }
}`
      },
      {
        name: 'Script Execution Timeout',
        description: 'JavaScript execution takes too long',
        causes: ['Infinite loops', 'Heavy computations', 'Blocking operations', 'Poorly written scripts'],
        solutions: ['Set script timeout', 'Optimize JavaScript', 'Use async operations', 'Break into chunks'],
        code: `import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.TimeoutException;
import java.time.Duration;

WebDriver driver = new ChromeDriver();

// Set script timeout to 20 seconds
driver.manage().timeouts().scriptTimeout(Duration.ofSeconds(20));

try {
    // This might timeout if script is slow
    Object result = ((JavascriptExecutor) driver).executeScript("""
        // Some heavy computation
        let sum = 0;
        for(let i = 0; i < 1000000000; i++) {
            sum += i;
        }
        return sum;
    """);
} catch (TimeoutException e) {
    System.out.println("Script execution timed out!");
    
    // Solution: Use async script with callback
    Object result = ((JavascriptExecutor) driver).executeAsyncScript("""
        // Use async script with callback
        setTimeout(function() {
            let sum = 0;
            for(let i = 0; i < 1000000; i++) {  // Smaller loop
                sum += i;
            }
            callback(sum);
        }, 100);
    """);
    System.out.println("Async script result: " + result);
    
    // Alternative: Break heavy operations into smaller parts
    List<Object> parts = new ArrayList<>();
    for (int i = 0; i < 10; i++) {
        final int index = i;
        Object partResult = ((JavascriptExecutor) driver).executeScript(String.format("""
            let sum = 0;
            let start = %d;
            let end = %d;
            for(let j = start; j < end; j++) {
                sum += j;
            }
            return sum;
        """, index * 1000000, (index + 1) * 1000000));
        parts.add(partResult);
    }
    
    long total = parts.stream().mapToLong(p -> ((Number) p).longValue()).sum();
    System.out.println("Total from parts: " + total);
}`
      },
      {
        name: 'AJAX/Async Timeout',
        description: 'AJAX requests or async operations take too long',
        causes: ['Slow API responses', 'Large data transfers', 'Database queries', 'Third-party services'],
        solutions: ['Wait for AJAX completion', 'Use polling strategies', 'Implement custom waits', 'Monitor network activity'],
        code: `import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.time.Duration;

WebDriver driver = new ChromeDriver();
driver.get("https://example.com with ajax");

// Wait for AJAX to complete (jQuery example)
public boolean waitForAjaxComplete(WebDriver driver, int timeoutSeconds) {
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutSeconds));
    try {
        // Wait for jQuery to be inactive
        wait.until(d -> ((JavascriptExecutor) d).executeScript("return jQuery.active == 0"));
        return true;
    } catch (Exception e) {
        // Fallback: wait for general AJAX completion
        wait.until(d -> ((JavascriptExecutor) d).executeScript("return document.readyState == 'complete'"));
        return true;
    }
}

try {
    // Wait for AJAX completion before interacting
    if (waitForAjaxComplete(driver, 30)) {
        WebElement element = driver.findElement(By.id("ajax-loaded-content"));
        element.click();
    }
} catch (Exception e) {
    System.out.println("AJAX wait failed: " + e.getMessage());
    
    // Solution: Implement custom polling
    WebElement element = waitForElementWithPolling(driver, By.id("ajax-loaded-content"), 30, 2);
    element.click();
}

private WebElement waitForElementWithPolling(WebDriver driver, By locator, int maxAttempts, int delaySeconds) 
    throws Exception {
    for (int attempt = 0; attempt < maxAttempts; attempt++) {
        try {
            WebElement element = driver.findElement(locator);
            if (element.isDisplayed()) {
                return element;
            }
        } catch (Exception e) {
            // Continue trying
        }
        
        // Check if AJAX is still active
        Boolean ajaxActive = (Boolean) ((JavascriptExecutor) driver).executeScript(
            "return typeof jQuery !== 'undefined' ? jQuery.active > 0 : false;"
        );
        
        if (!ajaxActive) {
            Thread.sleep(delaySeconds * 1000);
        } else {
            System.out.println("AJAX still active, waiting... (attempt " + (attempt + 1) + ")");
            Thread.sleep(delaySeconds * 1000);
        }
    }
    throw new Exception("Element not found after " + maxAttempts + " attempts");
}`
      },
      {
        name: 'Implicit vs Explicit Timeout',
        description: 'Conflicts between implicit and explicit wait timeouts',
        causes: ['Mixed wait strategies', 'Timeout conflicts', 'Unpredictable behavior', 'Race conditions'],
        solutions: ['Use explicit waits only', 'Avoid implicit waits', 'Consistent timeout strategy', 'Clear timeout settings'],
        code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

// BAD PRACTICE: Don't mix implicit and explicit waits
WebDriver driver = new ChromeDriver();
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10)); // This can cause conflicts

try {
    // This might behave unpredictably due to implicit wait
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
    WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("element")));
} catch (TimeoutException e) {
    System.out.println("Timeout occurred - ambiguous behavior");
}

// SOLUTION: Use explicit waits only
WebDriver driver = new ChromeDriver();
// Don't set implicit wait at all

// Create reusable wait with consistent timeout
public class WaitManager {
    private WebDriver driver;
    private Duration defaultTimeout;
    
    public WaitManager(WebDriver driver, int defaultTimeoutSeconds) {
        this.driver = driver;
        this.defaultTimeout = Duration.ofSeconds(defaultTimeoutSeconds);
    }
    
    public WebElement waitForElement(By locator) {
        return waitForElement(locator, null);
    }
    
    public WebElement waitForElement(By locator, Duration timeout) {
        Duration waitTimeout = timeout != null ? timeout : defaultTimeout;
        WebDriverWait wait = new WebDriverWait(driver, waitTimeout);
        return wait.until(ExpectedConditions.presenceOfElementLocated(locator));
    }
    
    public WebElement waitForClickable(By locator) {
        return waitForClickable(locator, null);
    }
    
    public WebElement waitForClickable(By locator, Duration timeout) {
        Duration waitTimeout = timeout != null ? timeout : defaultTimeout;
        WebDriverWait wait = new WebDriverWait(driver, waitTimeout);
        return wait.until(ExpectedConditions.elementToBeClickable(locator));
    }
    
    public WebElement waitForVisible(By locator) {
        return waitForVisible(locator, null);
    }
    
    public WebElement waitForVisible(By locator, Duration timeout) {
        Duration waitTimeout = timeout != null ? timeout : defaultTimeout;
        WebDriverWait wait = new WebDriverWait(driver, waitTimeout);
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }
}

// Usage
WaitManager waitManager = new WaitManager(driver, 20);

// Consistent behavior across all waits
WebElement element = waitManager.waitForElement(By.id("element"));
WebElement clickable = waitManager.waitForClickable(By.id("button"));
WebElement visible = waitManager.waitForVisible(By.id("modal"));`
      }
    ],
    javascript: [
      {
        name: 'Element Load Timeout',
        description: 'Element takes too long to appear in the DOM',
        causes: ['Slow page load', 'Heavy JavaScript', 'Network latency', 'Server response delay'],
        solutions: ['Increase wait time', 'Use page load strategies', 'Optimize locators', 'Implement retry logic'],
        code: `const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    await driver.get('https://example.com');
    
    try {
      // Default 10 second timeout may be too short
      let element = await driver.findElement(By.id('slow-loading-element'));
    } catch (error) {
      console.log('Element not found within default time');
      
      // Solution: Increase timeout and use explicit wait
      let element = await driver.wait(
        until.elementLocated(By.id('slow-loading-element')),
        30000  // 30 seconds
      );
      console.log('Element found after waiting!');
      
      // Alternative: Use different wait conditions
      element = await driver.wait(until.elementIsVisible(By.id('slow-loading-element')), 30000);
      element = await driver.wait(until.elementIsEnabled(By.id('slow-loading-element')), 30000);
    }
  } finally {
    await driver.quit();
  }
})();`
      },
      {
        name: 'Page Load Timeout',
        description: 'Page takes too long to completely load',
        causes: ['Large page size', 'Slow server', 'Network issues', 'Heavy resources'],
        solutions: ['Set page load timeout', 'Use partial page load', 'Optimize test environment', 'Monitor network'],
        code: `const { Builder, By } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    // Set page load timeout to 60 seconds
    await driver.manage().setTimeouts({ pageLoad: 60000 });
    
    try {
      await driver.get('https://slow-website.com');
      console.log('Page loaded successfully');
    } catch (error) {
      console.log('Page load timed out!');
      
      // Solution: Handle timeout gracefully
      try {
        // Try to stop loading and continue
        await driver.executeScript('window.stop();');
        console.log('Stopped page loading, continuing with partial page');
        
        // Wait for specific elements instead of full page load
        let element = await driver.wait(
          until.elementLocated(By.id('main-content')),
          30000
        );
        
      } catch (e) {
        console.log('Even partial load failed:', e.message);
        await driver.navigate().refresh(); // Try refreshing
      }
    }
  } finally {
    await driver.quit();
  }
})();`
      },
      {
        name: 'Script Execution Timeout',
        description: 'JavaScript execution takes too long',
        causes: ['Infinite loops', 'Heavy computations', 'Blocking operations', 'Poorly written scripts'],
        solutions: ['Set script timeout', 'Optimize JavaScript', 'Use async operations', 'Break into chunks'],
        code: `const { Builder, By, until } = require('selenium-webdriver');

(async function scriptTimeoutExample() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    await driver.get('https://example.com');
    
    // Set script timeout
    await driver.manage().setTimeouts({ script: 10000 });
    
    // This might timeout if script is slow
    let result = await driver.executeScript('let sum = 0; for(let i = 0; i < 1000000000; i++) { sum += i; } return sum;');
    
  } catch (error) {
    console.log('Script execution timed out!');
    
    // Solution: Use async script with callback
    let result = await driver.executeAsyncScript('setTimeout(function() { let sum = 0; for(let i = 0; i < 1000000; i++) { sum += i; } callback(sum); }, 100);');
    console.log('Async script result:', result);
    
    // Alternative: Break heavy operations into smaller parts
    let parts = [];
    for (let i = 0; i < 10; i++) {
      let partResult = await driver.executeScript('let sum = 0; let start = ' + (i * 1000000) + '; let end = ' + ((i + 1) * 1000000) + '; for(let j = start; j < end; j++) { sum += j; } return sum;');
      parts.push(partResult);
    }
    
    let total = parts.reduce((sum, part) => sum + part, 0);
    console.log('Total from parts:', total);
  } finally {
    await driver.quit();
  }
})();`
      },
      {
        name: 'AJAX/Async Timeout',
        description: 'AJAX requests or async operations take too long',
        causes: ['Slow API responses', 'Large data transfers', 'Database queries', 'Third-party services'],
        solutions: ['Wait for AJAX completion', 'Use polling strategies', 'Implement custom waits', 'Monitor network activity'],
        code: `const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    await driver.get('https://example.com with ajax');
    
    // Wait for AJAX to complete (jQuery example)
    async function waitForAjaxComplete(timeoutMs = 30000) {
      try {
        // Wait for jQuery to be inactive
        await driver.wait(async function() {
          return await driver.executeScript('return typeof jQuery !== "undefined" && jQuery.active == 0');
        }, timeoutMs);
        return true;
      } catch (error) {
        // Fallback: wait for general AJAX completion
        await driver.wait(async function() {
          return await driver.executeScript('return document.readyState == "complete"');
        }, timeoutMs);
        return true;
      }
    }
    
    try {
      // Wait for AJAX completion before interacting
      if (await waitForAjaxComplete(30000)) {
        let element = await driver.findElement(By.id('ajax-loaded-content'));
        await element.click();
      }
    } catch (error) {
      console.log('AJAX wait failed:', error.message);
      
      // Solution: Implement custom polling
      async function waitForElementWithPolling(locator, maxAttempts = 30, delayMs = 2000) {
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
          try {
            let element = await driver.findElement(locator);
            let isVisible = await element.isDisplayed();
            if (isVisible) {
              return element;
            }
          } catch (e) {
            // Continue trying
          }
          
          // Check if AJAX is still active
          let ajaxActive = await driver.executeScript('return typeof jQuery !== "undefined" ? jQuery.active > 0 : false;');
          
          if (!ajaxActive) {
            await driver.sleep(delayMs);
          } else {
            console.log('AJAX still active, waiting... (attempt ' + (attempt + 1) + ')');
            await driver.sleep(delayMs);
          }
        }
        throw new Error('Element not found after ' + maxAttempts + ' attempts');
      }
      
      let element = await waitForElementWithPolling(By.id('ajax-loaded-content'));
      await element.click();
    }
  } finally {
    await driver.quit();
  }
})();`
      },
      {
        name: 'Implicit vs Explicit Timeout',
        description: 'Conflicts between implicit and explicit wait timeouts',
        causes: ['Mixed wait strategies', 'Timeout conflicts', 'Unpredictable behavior', 'Race conditions'],
        solutions: ['Use explicit waits only', 'Avoid implicit waits', 'Consistent timeout strategy', 'Clear timeout settings'],
        code: `const { Builder, By, until } = require('selenium-webdriver');

// BAD PRACTICE: Don't mix implicit and explicit waits
(async function badExample() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    // This can cause conflicts
    await driver.manage().setTimeouts({ implicit: 10000 });
    
    try {
      // This might behave unpredictably due to implicit wait
      let element = await driver.wait(
        until.elementLocated(By.id('element')),
        5000
      );
    } catch (error) {
      console.log('Timeout occurred - ambiguous behavior');
    }
  } finally {
    await driver.quit();
  }
})();

// SOLUTION: Use explicit waits only
class WaitManager {
  constructor(driver, defaultTimeoutMs = 15000) {
    this.driver = driver;
    this.defaultTimeoutMs = defaultTimeoutMs;
  }
  
  async waitForElement(locator, timeoutMs = null) {
    let timeout = timeoutMs || this.defaultTimeoutMs;
    return await this.driver.wait(until.elementLocated(locator), timeout);
  }
  
  async waitForClickable(locator, timeoutMs = null) {
    let timeout = timeoutMs || this.defaultTimeoutMs;
    return await this.driver.wait(until.elementIsEnabled(locator), timeout);
  }
  
  async waitForVisible(locator, timeoutMs = null) {
    let timeout = timeoutMs || this.defaultTimeoutMs;
    return await this.driver.wait(until.elementIsVisible(locator), timeout);
  }
}

(async function goodExample() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    // Don't set implicit wait at all
    
    let waitManager = new WaitManager(driver, 20000);
    
    // Consistent behavior across all waits
    let element = await waitManager.waitForElement(By.id('element'));
    let clickable = await waitManager.waitForClickable(By.id('button'));
    let visible = await waitManager.waitForVisible(By.id('modal'));
    
  } finally {
    await driver.quit();
  }
})();`
      }
    ]
  };

  const currentFeatures = timeoutData[selectedLanguage];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Clock}
        category="Selenium · Exception Handling"
        title="Timeout Exceptions"
        description="Master timeout handling strategies for element loading, page loads, and async operations"
        colorTheme="orange"
        badges={[
          { label: 'Exception Handling', variant: 'secondary' },
          { label: 'Performance', variant: 'info' },
          { label: 'Timing', variant: 'secondary' },
        ]}
      />

      {/* Timeout Flow Diagram */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Timeout Exception Flow
          </CardTitle>
          <CardDescription>Visual representation of timeout scenarios and resolution strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Flow Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-x-auto">
              <div className="flex flex-col items-center min-w-[320px] max-w-2xl mx-auto gap-0">
                {/* Operation Start */}
                <div className="bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-100 text-center">Operation Start</div>
                  <div className="text-xs text-green-700 dark:text-green-300 text-center">findElement(), get(), executeScript()</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600 -my-0"></div>
                
                {/* Timer Started */}
                <div className="bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">Timer Started</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 text-center break-words">Timeout countdown begins</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-blue-400 dark:bg-blue-600 -my-0"></div>
                
                {/* Operation Complete? */}
                <div className="relative py-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/40 px-4 py-3 rounded-lg border-2 border-yellow-300 dark:border-yellow-700 transform rotate-45 w-20 h-20 flex items-center justify-center">
                    <div className="transform -rotate-45 text-sm font-semibold text-yellow-900 dark:text-yellow-100">?</div>
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Complete?</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-yellow-400 dark:bg-yellow-600 -my-0"></div>
                
                {/* Branching Section */}
                <div className="w-full flex justify-center gap-8 md:gap-16">
                  {/* Success Path */}
                  <div className="flex flex-col items-center gap-0">
                    <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600"></div>
                    <div className="bg-green-100 dark:bg-green-900/40 px-4 py-2 rounded-lg border-2 border-green-300 dark:border-green-700 min-w-[100px]">
                      <div className="text-xs font-semibold text-green-900 dark:text-green-100 text-center">✓ Success</div>
                      <div className="text-xs text-green-700 dark:text-green-300 text-center">Continue</div>
                    </div>
                  </div>
                  
                  {/* Timeout Path */}
                  <div className="flex flex-col items-center gap-0">
                    <div className="w-0.5 h-8 bg-red-400 dark:bg-red-600"></div>
                    <div className="bg-red-100 dark:bg-red-900/40 px-4 py-2 rounded-lg border-2 border-red-300 dark:border-red-700 min-w-[100px]">
                      <div className="text-xs font-semibold text-red-900 dark:text-red-100 text-center">✗ Timeout</div>
                      <div className="text-xs text-red-700 dark:text-red-300 text-center">Exception</div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-orange-400 dark:bg-orange-600 -my-0"></div>
                
                {/* Timeout Handling */}
                <div className="bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-orange-900 dark:text-orange-100 text-center">Timeout Handling</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300 text-center">Retry, increase timeout, alternative strategy</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-orange-400 dark:bg-orange-600 -my-0"></div>
                
                {/* Resolution */}
                <div className="w-full flex justify-center gap-6 md:gap-8">
                  <div className="bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-lg border-2 border-blue-300 dark:border-blue-700 min-w-[90px]">
                    <div className="text-xs font-semibold text-blue-900 dark:text-blue-100 text-center">Retry</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300 text-center">Adjust</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-900/40 px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 min-w-[90px]">
                    <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 text-center">Fail</div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 text-center">Report</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timeout Types Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-2">
                  <Timer className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">Load Timeouts</h5>
                </div>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Element not appearing</li>
                  <li>• Page load delays</li>
                  <li>• Slow rendering</li>
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  <h5 className="font-semibold text-yellow-900 dark:text-yellow-100">Execution Timeouts</h5>
                </div>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• Script execution</li>
                  <li>• AJAX operations</li>
                  <li>• Database queries</li>
                </ul>
              </div>
              
              <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h5 className="font-semibold text-red-900 dark:text-red-100">Network Timeouts</h5>
                </div>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• Slow connections</li>
                  <li>• Server response</li>
                  <li>• Resource loading</li>
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
            <Code className="w-5 h-5 text-orange-600" />
            Timeout Exception Scenarios
          </CardTitle>
          <CardDescription>
            Detailed timeout handling examples for different programming languages
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
                    ? 'border-b-2 border-orange-600 text-orange-600 dark:text-orange-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timeout Cards */}
      <div className="space-y-6">
        {currentFeatures.map((feature, index) => (
          <Card 
            key={index} 
            className={`border-2 transition-all cursor-pointer ${
              selectedFeature === feature.name 
                ? 'border-orange-500 shadow-lg bg-orange-50 dark:bg-orange-950/20' 
                : 'border-slate-200 dark:border-slate-700 hover:border-orange-300'
            }`}
            onClick={() => setSelectedFeature(selectedFeature === feature.name ? null : feature.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selectedFeature === feature.name
                    ? 'bg-orange-100 dark:bg-orange-900/40'
                    : 'bg-slate-100 dark:bg-slate-900/40'
                }`}>
                  <Timer className={`w-6 h-6 ${
                    selectedFeature === feature.name
                      ? 'text-orange-600 dark:text-orange-400'
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
                    <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Common Causes
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

      {/* Timeout Best Practices */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Timer className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Timeout Best Practices
          </CardTitle>
          <CardDescription>Proactive strategies to prevent and handle timeout exceptions effectively</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Prevention Strategies</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Use Explicit Waits</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Replace implicit waits with explicit waits for better control and predictable behavior.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Monitor Performance</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Track page load times and element appearance patterns to set appropriate timeout values.
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
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Implement Retry Logic</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Use exponential backoff strategies for transient failures and network issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Handling Strategies</h5>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Graceful Degradation</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Implement fallback mechanisms when primary operations timeout.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Terminal className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Logging & Monitoring</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Log timeout events with context to identify patterns and optimize test performance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Environment Optimization</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Optimize test environment and network conditions to reduce timeout occurrences.
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

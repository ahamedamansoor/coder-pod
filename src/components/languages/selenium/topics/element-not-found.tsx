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
  Navigation
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ElementNotFoundComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [selectedScenario, setSelectedScenario] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const scenariosData = {
    python: [
      {
        name: 'Element Not Present in DOM',
        description: 'Element does not exist in the current page DOM',
        causes: ['Page not loaded', 'Incorrect URL', 'Element removed', 'SPA navigation'],
        solutions: ['Wait for page load', 'Verify URL', 'Check DOM structure', 'Use explicit waits'],
        code: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://example.com")

try:
    # This will fail if element doesn't exist
    element = driver.find_element(By.ID, "non-existent")
except NoSuchElementException:
    print("Element not found in DOM!")
    
    # Solution: Wait for element to be present
    wait = WebDriverWait(driver, 10)
    element = wait.until(EC.presence_of_element_located((By.ID, "target-element")))
    element.click()`
      },
      {
        name: 'Element in iframe',
        description: 'Element exists but is inside an iframe',
        causes: ['Nested iframes', 'Dynamic iframe loading', 'Cross-domain iframes', 'Hidden iframes'],
        solutions: ['Switch to iframe', 'Wait for iframe', 'Handle nested frames', 'Switch back to main content'],
        code: `from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver.get("https://example.com with iframes")

try:
    # This will fail - element is in iframe
    element = driver.find_element(By.ID, "iframe-element")
except NoSuchElementException:
    print("Element not found - might be in iframe!")
    
    # Solution: Switch to iframe first
    wait = WebDriverWait(driver, 10)
    
    # Wait for iframe to be available
    iframe = wait.until(EC.presence_of_element_located((By.ID, "content-frame")))
    
    # Switch to iframe
    driver.switch_to.frame(iframe)
    
    # Now find element inside iframe
    element = driver.find_element(By.ID, "iframe-element")
    element.click()
    
    # Switch back to main content
    driver.switch_to.default_content()`
      },
      {
        name: 'Element Hidden or Invisible',
        description: 'Element exists but is not visible or displayed',
        causes: ['CSS display:none', 'CSS visibility:hidden', 'Element outside viewport', 'Opacity: 0'],
        solutions: ['Wait for visibility', 'Scroll to element', 'Check CSS properties', 'Use JavaScript actions'],
        code: `from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver.get("https://example.com")

try:
    # Element exists but is hidden
    element = driver.find_element(By.ID, "hidden-element")
    element.click()  # This might fail
except Exception as e:
    print(f"Element interaction failed: {e}")
    
    # Solution: Wait for element to be visible
    wait = WebDriverWait(driver, 10)
    element = wait.until(EC.visibility_of_element_located((By.ID, "hidden-element")))
    
    # Or scroll to element if it's outside viewport
    driver.execute_script("arguments[0].scrollIntoView(true);", element)
    
    # Now interact with element
    element.click()`
      },
      {
        name: 'Shadow DOM Element',
        description: 'Element is inside Shadow DOM and not accessible directly',
        causes: ['Web Components', 'Custom Elements', 'Encapsulated DOM', 'Closed shadow roots'],
        solutions: ['Use JavaScript executor', 'Access shadow root', 'Query within shadow DOM', 'Handle open/closed modes'],
        code: `from selenium.webdriver.common.by import By

driver.get("https://example.com with shadow-dom")

try:
    # This will fail - element is in shadow DOM
    element = driver.find_element(By.ID, "shadow-element")
except NoSuchElementException:
    print("Element not found - might be in Shadow DOM!")
    
    # Solution: Use JavaScript to access shadow DOM
    shadow_host = driver.find_element(By.CSS_SELECTOR, "custom-element")
    
    # Get shadow root (only works for open shadow roots)
    shadow_root = driver.execute_script(
        "return arguments[0].shadowRoot", shadow_host
    )
    
    if shadow_root:
        # Find element within shadow DOM
        shadow_element = shadow_root.find_element(By.ID, "shadow-element")
        shadow_element.click()
    else:
        print("Shadow root is closed or not accessible")`
      },
      {
        name: 'Dynamic Content Loading',
        description: 'Element loads dynamically after initial page load',
        causes: ['AJAX calls', 'Lazy loading', 'Infinite scroll', 'WebSockets updates'],
        solutions: ['Wait for AJAX completion', 'Use dynamic waits', 'Implement polling', 'Handle loading states'],
        code: `from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver.get("https://example.com with dynamic content")

try:
    # Element loads dynamically
    element = driver.find_element(By.CLASS_NAME, "dynamic-item")
except NoSuchElementException:
    print("Element not found - waiting for dynamic content!")
    
    # Solution: Wait for dynamic content
    wait = WebDriverWait(driver, 15)
    
    # Wait for specific element to appear
    element = wait.until(
        EC.presence_of_element_located((By.CLASS_NAME, "dynamic-item"))
    )
    
    # Or wait for AJAX to complete
    wait.until(lambda d: d.execute_script(
        "return jQuery.active == 0" if "jQuery" in d.execute_script("return window.jQuery != undefined") 
        else "return document.readyState == 'complete'"
    ))
    
    # For infinite scroll, scroll and wait
    for _ in range(3):
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(2)
        
        try:
            element = driver.find_element(By.CLASS_NAME, "dynamic-item")
            break
        except NoSuchElementException:
            continue`
      }
    ],
    java: [
      {
        name: 'Element Not Present in DOM',
        description: 'Element does not exist in the current page DOM',
        causes: ['Page not loaded', 'Incorrect URL', 'Element removed', 'SPA navigation'],
        solutions: ['Wait for page load', 'Verify URL', 'Check DOM structure', 'Use explicit waits'],
        code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

WebDriver driver = new ChromeDriver();
driver.get("https://example.com");

try {
    // This will fail if element doesn't exist
    WebElement element = driver.findElement(By.id("non-existent"));
} catch (NoSuchElementException e) {
    System.out.println("Element not found in DOM!");
    
    // Solution: Wait for element to be present
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    WebElement element = wait.until(
        ExpectedConditions.presenceOfElementLocated(By.id("target-element"))
    );
    element.click();
}`
      },
      {
        name: 'Element in iframe',
        description: 'Element exists but is inside an iframe',
        causes: ['Nested iframes', 'Dynamic iframe loading', 'Cross-domain iframes', 'Hidden iframes'],
        solutions: ['Switch to iframe', 'Wait for iframe', 'Handle nested frames', 'Switch back to main content'],
        code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

driver.get("https://example.com with iframes");

try {
    // This will fail - element is in iframe
    WebElement element = driver.findElement(By.id("iframe-element"));
} catch (NoSuchElementException e) {
    System.out.println("Element not found - might be in iframe!");
    
    // Solution: Switch to iframe first
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    
    // Wait for iframe to be available
    WebElement iframe = wait.until(
        ExpectedConditions.presenceOfElementLocated(By.id("content-frame"))
    );
    
    // Switch to iframe
    driver.switchTo().frame(iframe);
    
    // Now find element inside iframe
    WebElement element = driver.findElement(By.id("iframe-element"));
    element.click();
    
    // Switch back to main content
    driver.switchTo().defaultContent();
}`
      },
      {
        name: 'Element Hidden or Invisible',
        description: 'Element exists but is not visible or displayed',
        causes: ['CSS display:none', 'CSS visibility:hidden', 'Element outside viewport', 'Opacity: 0'],
        solutions: ['Wait for visibility', 'Scroll to element', 'Check CSS properties', 'Use JavaScript actions'],
        code: `import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

driver.get("https://example.com");

try {
    // Element exists but is hidden
    WebElement element = driver.findElement(By.id("hidden-element"));
    element.click(); // This might fail
} catch (Exception e) {
    System.out.println("Element interaction failed: " + e.getMessage());
    
    // Solution: Wait for element to be visible
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    WebElement element = wait.until(
        ExpectedConditions.visibilityOfElementLocated(By.id("hidden-element"))
    );
    
    // Or scroll to element if it's outside viewport
    ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
    
    // Now interact with element
    element.click();
}`
      },
      {
        name: 'Shadow DOM Element',
        description: 'Element is inside Shadow DOM and not accessible directly',
        causes: ['Web Components', 'Custom Elements', 'Encapsulated DOM', 'Closed shadow roots'],
        solutions: ['Use JavaScript executor', 'Access shadow root', 'Query within shadow DOM', 'Handle open/closed modes'],
        code: `import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

driver.get("https://example.com with shadow-dom");

try {
    // This will fail - element is in shadow DOM
    WebElement element = driver.findElement(By.id("shadow-element"));
} catch (NoSuchElementException e) {
    System.out.println("Element not found - might be in Shadow DOM!");
    
    // Solution: Use JavaScript to access shadow DOM
    WebElement shadowHost = driver.findElement(By.cssSelector("custom-element"));
    
    // Get shadow root (only works for open shadow roots)
    Object shadowRoot = ((JavascriptExecutor) driver).executeScript(
        "return arguments[0].shadowRoot", shadowHost
    );
    
    if (shadowRoot instanceof WebElement) {
        // Find element within shadow DOM
        WebElement shadowElement = ((WebElement) shadowRoot).findElement(By.id("shadow-element"));
        shadowElement.click();
    } else {
        System.out.println("Shadow root is closed or not accessible");
    }
}`
      },
      {
        name: 'Dynamic Content Loading',
        description: 'Element loads dynamically after initial page load',
        causes: ['AJAX calls', 'Lazy loading', 'Infinite scroll', 'WebSockets updates'],
        solutions: ['Wait for AJAX completion', 'Use dynamic waits', 'Implement polling', 'Handle loading states'],
        code: `import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

driver.get("https://example.com with dynamic content");

try {
    // Element loads dynamically
    WebElement element = driver.findElement(By.className("dynamic-item"));
} catch (NoSuchElementException e) {
    System.out.println("Element not found - waiting for dynamic content!");
    
    // Solution: Wait for dynamic content
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));
    
    // Wait for specific element to appear
    WebElement element = wait.until(
        ExpectedConditions.presenceOfElementLocated(By.className("dynamic-item"))
    );
    
    // Or wait for AJAX to complete
    wait.until(d -> ((JavascriptExecutor) d).executeScript(
        "return document.readyState").equals("complete")
    );
    
    // For infinite scroll, scroll and wait
    for (int i = 0; i < 3; i++) {
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight);");
        Thread.sleep(2000);
        
        try {
            element = driver.findElement(By.className("dynamic-item"));
            break;
        } catch (NoSuchElementException ex) {
            continue;
        }
    }
}`
      }
    ],
    javascript: [
      {
        name: 'Element Not Present in DOM',
        description: 'Element does not exist in the current page DOM',
        causes: ['Page not loaded', 'Incorrect URL', 'Element removed', 'SPA navigation'],
        solutions: ['Wait for page load', 'Verify URL', 'Check DOM structure', 'Use explicit waits'],
        code: `const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    await driver.get('https://example.com');
    
    try {
      // This will fail if element doesn't exist
      let element = await driver.findElement(By.id('non-existent'));
    } catch (error) {
      console.log('Element not found in DOM!');
      
      // Solution: Wait for element to be present
      let element = await driver.wait(
        until.elementLocated(By.id('target-element')),
        10000
      );
      await element.click();
    }
  } finally {
    await driver.quit();
  }
})();`
      },
      {
        name: 'Element in iframe',
        description: 'Element exists but is inside an iframe',
        causes: ['Nested iframes', 'Dynamic iframe loading', 'Cross-domain iframes', 'Hidden iframes'],
        solutions: ['Switch to iframe', 'Wait for iframe', 'Handle nested frames', 'Switch back to main content'],
        code: `const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    await driver.get('https://example.com with iframes');
    
    try {
      // This will fail - element is in iframe
      let element = await driver.findElement(By.id('iframe-element'));
    } catch (error) {
      console.log('Element not found - might be in iframe!');
      
      // Solution: Switch to iframe first
      let iframe = await driver.wait(
        until.elementLocated(By.id('content-frame')),
        10000
      );
      
      // Switch to iframe
      await driver.switchTo().frame(iframe);
      
      // Now find element inside iframe
      let element = await driver.findElement(By.id('iframe-element'));
      await element.click();
      
      // Switch back to main content
      await driver.switchTo().defaultContent();
    }
  } finally {
    await driver.quit();
  }
})();`
      },
      {
        name: 'Element Hidden or Invisible',
        description: 'Element exists but is not visible or displayed',
        causes: ['CSS display:none', 'CSS visibility:hidden', 'Element outside viewport', 'Opacity: 0'],
        solutions: ['Wait for visibility', 'Scroll to element', 'Check CSS properties', 'Use JavaScript actions'],
        code: `const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    await driver.get('https://example.com');
    
    try {
      // Element exists but is hidden
      let element = await driver.findElement(By.id('hidden-element'));
      await element.click(); // This might fail
    } catch (error) {
      console.log('Element interaction failed:', error.message);
      
      // Solution: Wait for element to be visible
      let element = await driver.wait(
        until.elementIsVisible(By.id('hidden-element')),
        10000
      );
      
      // Or scroll to element if it's outside viewport
      await driver.executeScript('arguments[0].scrollIntoView(true);', element);
      
      // Now interact with element
      await element.click();
    }
  } finally {
    await driver.quit();
  }
})();`
      },
      {
        name: 'Shadow DOM Element',
        description: 'Element is inside Shadow DOM and not accessible directly',
        causes: ['Web Components', 'Custom Elements', 'Encapsulated DOM', 'Closed shadow roots'],
        solutions: ['Use JavaScript executor', 'Access shadow root', 'Query within shadow DOM', 'Handle open/closed modes'],
        code: `const { Builder, By } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    await driver.get('https://example.com with shadow-dom');
    
    try {
      // This will fail - element is in shadow DOM
      let element = await driver.findElement(By.id('shadow-element'));
    } catch (error) {
      console.log('Element not found - might be in Shadow DOM!');
      
      // Solution: Use JavaScript to access shadow DOM
      let shadowHost = await driver.findElement(By.css('custom-element'));
      
      // Get shadow root (only works for open shadow roots)
      let shadowRoot = await driver.executeScript(
        'return arguments[0].shadowRoot', shadowHost
      );
      
      if (shadowRoot) {
        // Find element within shadow DOM
        let shadowElement = await shadowRoot.findElement(By.id('shadow-element'));
        await shadowElement.click();
      } else {
        console.log('Shadow root is closed or not accessible');
      }
    }
  } finally {
    await driver.quit();
  }
})();`
      },
      {
        name: 'Dynamic Content Loading',
        description: 'Element loads dynamically after initial page load',
        causes: ['AJAX calls', 'Lazy loading', 'Infinite scroll', 'WebSockets updates'],
        solutions: ['Wait for AJAX completion', 'Use dynamic waits', 'Implement polling', 'Handle loading states'],
        code: `const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    await driver.get('https://example.com with dynamic content');
    
    try {
      // Element loads dynamically
      let element = await driver.findElement(By.className('dynamic-item'));
    } catch (error) {
      console.log('Element not found - waiting for dynamic content!');
      
      // Solution: Wait for dynamic content
      let element = await driver.wait(
        until.elementLocated(By.className('dynamic-item')),
        15000
      );
      
      // Or wait for AJAX to complete
      await driver.wait(async function() {
        return await driver.executeScript('return document.readyState') === 'complete';
      }, 10000);
      
      // For infinite scroll, scroll and wait
      for (let i = 0; i < 3; i++) {
        await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
        await driver.sleep(2000);
        
        try {
          element = await driver.findElement(By.className('dynamic-item'));
          break;
        } catch (ex) {
          continue;
        }
      }
    }
  } finally {
    await driver.quit();
  }
})();`
      }
    ]
  };

  const currentScenarios = scenariosData[selectedLanguage];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={FileQuestion}
        category="Selenium · Error Handling"
        title="Element Not Found"
        description="Master troubleshooting techniques for NoSuchElementException and element visibility issues"
        colorTheme="red"
        badges={[
          { label: 'Error Handling', variant: 'success' },
          { label: 'Debugging', variant: 'info' },
          { label: 'Troubleshooting', variant: 'secondary' },
        ]}
      />

      {/* Element Search Flow Diagram */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/40">
              <Search className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            Element Search & Discovery Flow
          </CardTitle>
          <CardDescription>Visual representation of how Selenium searches for elements and common failure points</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Flow Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-x-auto">
              <div className="flex flex-col items-center min-w-[320px] max-w-2xl mx-auto gap-0">
                {/* Search Request */}
                <div className="bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-100 text-center">Search Request</div>
                  <div className="text-xs text-green-700 dark:text-green-300 text-center">findElement() / findElements()</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600 -my-0"></div>
                
                {/* DOM Traversal */}
                <div className="bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">DOM Traversal</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 text-center break-words">CSS/XPath evaluation</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-blue-400 dark:bg-blue-600 -my-0"></div>
                
                {/* Element Found? */}
                <div className="relative py-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/40 px-4 py-3 rounded-lg border-2 border-yellow-300 dark:border-yellow-700 transform rotate-45 w-20 h-20 flex items-center justify-center">
                    <div className="transform -rotate-45 text-sm font-semibold text-yellow-900 dark:text-yellow-100">?</div>
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Found?</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-yellow-400 dark:bg-yellow-600 -my-0"></div>
                
                {/* Branching Section */}
                <div className="w-full flex justify-center gap-8 md:gap-16">
                  {/* Success Path */}
                  <div className="flex flex-col items-center gap-0">
                    <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600"></div>
                    <div className="bg-green-100 dark:bg-green-900/40 px-4 py-2 rounded-lg border-2 border-green-300 dark:border-green-700 min-w-[100px]">
                      <div className="text-xs font-semibold text-green-900 dark:text-green-100 text-center">✓ Found</div>
                      <div className="text-xs text-green-700 dark:text-green-300 text-center">Return</div>
                    </div>
                  </div>
                  
                  {/* Not Found Path */}
                  <div className="flex flex-col items-center gap-0">
                    <div className="w-0.5 h-8 bg-red-400 dark:bg-red-600"></div>
                    <div className="bg-red-100 dark:bg-red-900/40 px-4 py-2 rounded-lg border-2 border-red-300 dark:border-red-700 min-w-[100px]">
                      <div className="text-xs font-semibold text-red-900 dark:text-red-100 text-center">✗ Not Found</div>
                      <div className="text-xs text-red-700 dark:text-red-300 text-center">Exception</div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-red-400 dark:bg-red-600 -my-0"></div>
                
                {/* Troubleshooting */}
                <div className="bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-orange-900 dark:text-orange-100 text-center">Troubleshooting</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300 text-center">Debug locators, wait strategies</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-orange-400 dark:bg-orange-600 -my-0"></div>
                
                {/* Resolution */}
                <div className="w-full flex justify-center gap-6 md:gap-8">
                  <div className="bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-lg border-2 border-blue-300 dark:border-blue-700 min-w-[90px]">
                    <div className="text-xs font-semibold text-blue-900 dark:text-blue-100 text-center">Retry</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300 text-center">Wait</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-900/40 px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 min-w-[90px]">
                    <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 text-center">Fail</div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 text-center">Report</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Common Failure Scenarios */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h5 className="font-semibold text-red-900 dark:text-red-100">DOM Issues</h5>
                </div>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• Element not loaded</li>
                  <li>• Incorrect locator</li>
                  <li>• SPA navigation</li>
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  <h5 className="font-semibold text-yellow-900 dark:text-yellow-100">Visibility Issues</h5>
                </div>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• Hidden elements</li>
                  <li>• Outside viewport</li>
                  <li>• CSS opacity</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Structure Issues</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• iframe elements</li>
                  <li>• Shadow DOM</li>
                  <li>• Dynamic content</li>
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
            <Code className="w-5 h-5 text-red-600" />
            Element Not Found Scenarios
          </CardTitle>
          <CardDescription>
            Detailed troubleshooting scenarios for element not found issues in different programming languages
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
                    ? 'border-b-2 border-red-600 text-red-600 dark:text-red-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scenario Cards */}
      <div className="space-y-6">
        {currentScenarios.map((scenario, index) => (
          <Card 
            key={index} 
            className={`border-2 transition-all cursor-pointer ${
              selectedScenario === scenario.name 
                ? 'border-red-500 shadow-lg bg-red-50 dark:bg-red-950/20' 
                : 'border-slate-200 dark:border-slate-700 hover:border-red-300'
            }`}
            onClick={() => setSelectedScenario(selectedScenario === scenario.name ? null : scenario.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selectedScenario === scenario.name
                    ? 'bg-red-100 dark:bg-red-900/40'
                    : 'bg-slate-100 dark:bg-slate-900/40'
                }`}>
                  <FileQuestion className={`w-6 h-6 ${
                    selectedScenario === scenario.name
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-slate-600 dark:text-slate-400'
                  }`} />
                </div>
                {scenario.name}
                <Badge variant={selectedScenario === scenario.name ? "default" : "secondary"}>
                  {selectedLanguage}
                </Badge>
              </CardTitle>
              <CardDescription>{scenario.description}</CardDescription>
            </CardHeader>
            
            {selectedScenario === scenario.name && (
              <CardContent className="space-y-4">
                {/* Causes and Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Common Causes
                    </h5>
                    <ul className="space-y-1">
                      {scenario.causes.map((cause, i) => (
                        <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
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
                      {scenario.solutions.map((solution, i) => (
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
                      onClick={() => copyToClipboard(scenario.code, `${scenario.name} code`)}
                      className="gap-2"
                    >
                      <Copy className="w-3 h-3" />
                      Copy
                    </Button>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto text-slate-800 dark:text-slate-300">
                      <code>{scenario.code}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Debugging Strategies */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Glasses className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Element Debugging Strategies
          </CardTitle>
          <CardDescription>Proactive approaches to identify and resolve element not found issues</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Prevention Techniques</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Navigation className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Verify DOM Structure</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Always inspect the DOM structure first using browser developer tools to confirm element existence.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Crosshair className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Test Locators Manually</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Test CSS selectors and XPath expressions in browser console before using in automation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Implement Explicit Waits</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Use WebDriverWait instead of implicit waits or Thread.sleep() for reliable element detection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Debugging Tools</h5>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Map className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">DOM Inspector</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Use browser dev tools to explore DOM hierarchy and verify element attributes and visibility.
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
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Console Testing</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Test locators using document.querySelector() and document.evaluate() in browser console.
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
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Screenshot Analysis</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Capture screenshots at failure points to visually verify page state and element positions.
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

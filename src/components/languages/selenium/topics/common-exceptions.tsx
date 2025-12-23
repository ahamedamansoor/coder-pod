'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  AlertTriangle,
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
  Ban
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function CommonExceptionsComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [selectedException, setSelectedException] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const exceptionsData = {
    python: [
      {
        name: 'NoSuchElementException',
        description: 'Element not found in the DOM',
        causes: ['Element not loaded', 'Incorrect locator', 'Element in iframe', 'Timing issues'],
        solutions: ['Use explicit waits', 'Check locator strategy', 'Switch to iframe', 'Add wait conditions'],
        code: `from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

try:
    element = driver.find_element(By.ID, "non-existent")
except NoSuchElementException:
    print("Element not found!")
    # Solution: Use explicit wait
    wait = WebDriverWait(driver, 10)
    element = wait.until(EC.presence_of_element_located((By.ID, "element-id")))`
      },
      {
        name: 'TimeoutException',
        description: 'Operation timed out waiting for condition',
        causes: ['Element not appearing', 'Page load too slow', 'Network latency', 'Infinite wait'],
        solutions: ['Increase timeout', 'Check page load', 'Use different wait conditions', 'Optimize test flow'],
        code: `from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

try:
    wait = WebDriverWait(driver, 5)  # 5 second timeout
    element = wait.until(EC.presence_of_element_located((By.ID, "slow-element")))
except TimeoutException:
    print("Timeout occurred!")
    # Solution: Increase timeout or use different condition
    wait = WebDriverWait(driver, 15)
    element = wait.until(EC.visibility_of_element_located((By.ID, "slow-element")))`
      },
      {
        name: 'ElementNotInteractableException',
        description: 'Element exists but cannot be interacted with',
        causes: ['Element hidden', 'Element disabled', 'Element covered by overlay', 'Element not in viewport'],
        solutions: ['Wait for visibility', 'Enable element', 'Remove overlay', 'Scroll to element'],
        code: `from selenium.common.exceptions import ElementNotInteractableException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

try:
    element = driver.find_element(By.ID, "hidden-button")
    element.click()
except ElementNotInteractableException:
    print("Element not interactable!")
    # Solution: Wait for element to be clickable
    wait = WebDriverWait(driver, 10)
    element = wait.until(EC.element_to_be_clickable((By.ID, "hidden-button")))
    element.click()`
      },
      {
        name: 'StaleElementReferenceException',
        description: 'Element reference is no longer valid',
        causes: ['DOM refreshed', 'Element removed/re-added', 'Page navigation', 'AJAX updates'],
        solutions: ['Re-locate element', 'Use fresh reference', 'Wait for stability', 'Use stale element handling'],
        code: `from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.common.by import By

# First locate element
element = driver.find_element(By.ID, "dynamic-element")

# Page updates, element becomes stale
driver.refresh()

try:
    element.click()  # This will throw StaleElementReferenceException
except StaleElementReferenceException:
    print("Element is stale!")
    # Solution: Re-locate the element
    element = driver.find_element(By.ID, "dynamic-element")
    element.click()`
      },
      {
        name: 'WebDriverException',
        description: 'General WebDriver error',
        causes: ['Browser crashed', 'Driver not responding', 'Invalid commands', 'Session expired'],
        solutions: ['Restart browser', 'Check driver status', 'Validate commands', 'Create new session'],
        code: `from selenium.common.exceptions import WebDriverException

try:
    driver.get("invalid://url")
except WebDriverException as e:
    print(f"WebDriver error: {e}")
    # Solution: Handle gracefully and restart if needed
    try:
        driver.quit()
    except:
        pass
    driver = webdriver.Chrome()  # Restart browser`
      }
    ],
    java: [
      {
        name: 'NoSuchElementException',
        description: 'Element not found in the DOM',
        causes: ['Element not loaded', 'Incorrect locator', 'Element in iframe', 'Timing issues'],
        solutions: ['Use explicit waits', 'Check locator strategy', 'Switch to iframe', 'Add wait conditions'],
        code: `import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

try {
    WebElement element = driver.findElement(By.id("non-existent"));
} catch (NoSuchElementException e) {
    System.out.println("Element not found!");
    // Solution: Use explicit wait
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("element-id")));
}`
      },
      {
        name: 'TimeoutException',
        description: 'Operation timed out waiting for condition',
        causes: ['Element not appearing', 'Page load too slow', 'Network latency', 'Infinite wait'],
        solutions: ['Increase timeout', 'Check page load', 'Use different wait conditions', 'Optimize test flow'],
        code: `import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

try {
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
    WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("slow-element")));
} catch (TimeoutException e) {
    System.out.println("Timeout occurred!");
    // Solution: Increase timeout or use different condition
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));
    WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("slow-element")));
}`
      },
      {
        name: 'ElementNotInteractableException',
        description: 'Element exists but cannot be interacted with',
        causes: ['Element hidden', 'Element disabled', 'Element covered by overlay', 'Element not in viewport'],
        solutions: ['Wait for visibility', 'Enable element', 'Remove overlay', 'Scroll to element'],
        code: `import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

try {
    WebElement element = driver.findElement(By.id("hidden-button"));
    element.click();
} catch (ElementNotInteractableException e) {
    System.out.println("Element not interactable!");
    // Solution: Wait for element to be clickable
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("hidden-button")));
    element.click();
}`
      },
      {
        name: 'StaleElementReferenceException',
        description: 'Element reference is no longer valid',
        causes: ['DOM refreshed', 'Element removed/re-added', 'Page navigation', 'AJAX updates'],
        solutions: ['Re-locate element', 'Use fresh reference', 'Wait for stability', 'Use stale element handling'],
        code: `import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.By;

// First locate element
WebElement element = driver.findElement(By.id("dynamic-element"));

// Page updates, element becomes stale
driver.navigate().refresh();

try {
    element.click(); // This will throw StaleElementReferenceException
} catch (StaleElementReferenceException e) {
    System.out.println("Element is stale!");
    // Solution: Re-locate the element
    element = driver.findElement(By.id("dynamic-element"));
    element.click();
}`
      },
      {
        name: 'WebDriverException',
        description: 'General WebDriver error',
        causes: ['Browser crashed', 'Driver not responding', 'Invalid commands', 'Session expired'],
        solutions: ['Restart browser', 'Check driver status', 'Validate commands', 'Create new session'],
        code: `import org.openqa.selenium.WebDriverException;

try {
    driver.get("invalid://url");
} catch (WebDriverException e) {
    System.out.println("WebDriver error: " + e.getMessage());
    // Solution: Handle gracefully and restart if needed
    try {
        driver.quit();
    } catch (Exception ex) {
        // Ignore quit errors
    }
    driver = new ChromeDriver(); // Restart browser
}`
      }
    ],
    javascript: [
      {
        name: 'NoSuchElementException',
        description: 'Element not found in the DOM',
        causes: ['Element not loaded', 'Incorrect locator', 'Element in iframe', 'Timing issues'],
        solutions: ['Use explicit waits', 'Check locator strategy', 'Switch to iframe', 'Add wait conditions'],
        code: `const { NoSuchElementException } = require('selenium-webdriver');
const { By, until } = require('selenium-webdriver');

try {
    let element = await driver.findElement(By.id('non-existent'));
} catch (NoSuchElementException) {
    console.log('Element not found!');
    // Solution: Use explicit wait
    let element = await driver.wait(until.elementLocated(By.id('element-id')), 10000);
}`
      },
      {
        name: 'TimeoutException',
        description: 'Operation timed out waiting for condition',
        causes: ['Element not appearing', 'Page load too slow', 'Network latency', 'Infinite wait'],
        solutions: ['Increase timeout', 'Check page load', 'Use different wait conditions', 'Optimize test flow'],
        code: `const { TimeoutException } = require('selenium-webdriver');
const { until, By } = require('selenium-webdriver');

try {
    let element = await driver.wait(until.elementLocated(By.id('slow-element')), 5000);
} catch (TimeoutException) {
    console.log('Timeout occurred!');
    // Solution: Increase timeout or use different condition
    let element = await driver.wait(until.elementIsVisible(By.id('slow-element')), 15000);
}`
      },
      {
        name: 'ElementNotInteractableException',
        description: 'Element exists but cannot be interacted with',
        causes: ['Element hidden', 'Element disabled', 'Element covered by overlay', 'Element not in viewport'],
        solutions: ['Wait for visibility', 'Enable element', 'Remove overlay', 'Scroll to element'],
        code: `const { ElementNotInteractableException } = require('selenium-webdriver');
const { By, until } = require('selenium-webdriver');

try {
    let element = await driver.findElement(By.id('hidden-button'));
    await element.click();
} catch (ElementNotInteractableException) {
    console.log('Element not interactable!');
    // Solution: Wait for element to be clickable
    let element = await driver.wait(until.elementIsEnabled(By.id('hidden-button')), 10000);
    await element.click();
}`
      },
      {
        name: 'StaleElementReferenceException',
        description: 'Element reference is no longer valid',
        causes: ['DOM refreshed', 'Element removed/re-added', 'Page navigation', 'AJAX updates'],
        solutions: ['Re-locate element', 'Use fresh reference', 'Wait for stability', 'Use stale element handling'],
        code: `const { StaleElementReferenceException } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');

// First locate element
let element = await driver.findElement(By.id('dynamic-element'));

// Page updates, element becomes stale
await driver.navigate().refresh();

try {
    await element.click(); // This will throw StaleElementReferenceException
} catch (StaleElementReferenceException) {
    console.log('Element is stale!');
    // Solution: Re-locate the element
    element = await driver.findElement(By.id('dynamic-element'));
    await element.click();
}`
      },
      {
        name: 'WebDriverException',
        description: 'General WebDriver error',
        causes: ['Browser crashed', 'Driver not responding', 'Invalid commands', 'Session expired'],
        solutions: ['Restart browser', 'Check driver status', 'Validate commands', 'Create new session'],
        code: `const { WebDriverException } = require('selenium-webdriver');

try {
    await driver.get('invalid://url');
} catch (WebDriverException) {
    console.log('WebDriver error!');
    // Solution: Handle gracefully and restart if needed
    try {
        await driver.quit();
    } catch (e) {
        // Ignore quit errors
    }
    driver = await new Builder().forBrowser('chrome').build(); // Restart browser
}`
      }
    ]
  };

  const currentExceptions = exceptionsData[selectedLanguage];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={AlertTriangle}
        category="Selenium · Error Handling"
        title="Common Exceptions"
        description="Master Selenium exception handling with diagrammatic explanations and practical solutions"
        colorTheme="red"
        badges={[
          { label: 'Error Handling', variant: 'success' },
          { label: 'Debugging', variant: 'info' },
          { label: 'Theory', variant: 'secondary' },
        ]}
      />

      {/* Exception Flow Diagram */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/40">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            Exception Handling Flow Diagram
          </CardTitle>
          <CardDescription>Visual representation of how exceptions occur and are handled in Selenium</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Flow Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-x-auto">
              <div className="flex flex-col items-center min-w-[320px] max-w-2xl mx-auto gap-0">
                {/* Test Execution Start */}
                <div className="bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-100 text-center">Test Execution</div>
                  <div className="text-xs text-green-700 dark:text-green-300 text-center">Start Selenium Test</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-green-400 dark:bg-green-600 -my-0"></div>
                
                {/* Element Interaction */}
                <div className="bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">Element Interaction</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 text-center break-words">findElement(), click(), sendKeys()</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-blue-400 dark:bg-blue-600 -my-0"></div>
                
                {/* Decision Diamond */}
                <div className="relative py-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/40 px-4 py-3 rounded-lg border-2 border-yellow-300 dark:border-yellow-700 transform rotate-45 w-20 h-20 flex items-center justify-center">
                    <div className="transform -rotate-45 text-sm font-semibold text-yellow-900 dark:text-yellow-100">?</div>
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Success?</div>
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
                  
                  {/* Exception Path */}
                  <div className="flex flex-col items-center gap-0">
                    <div className="w-0.5 h-8 bg-red-400 dark:bg-red-600"></div>
                    <div className="bg-red-100 dark:bg-red-900/40 px-4 py-2 rounded-lg border-2 border-red-300 dark:border-red-700 min-w-[100px]">
                      <div className="text-xs font-semibold text-red-900 dark:text-red-100 text-center">✗ Exception</div>
                      <div className="text-xs text-red-700 dark:text-red-300 text-center">Error</div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down from Exception */}
                <div className="w-0.5 h-8 bg-red-400 dark:bg-red-600 -my-0"></div>
                
                {/* Exception Handler */}
                <div className="bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700 w-full max-w-xs">
                  <div className="text-sm font-semibold text-orange-900 dark:text-orange-100 text-center">Exception Handler</div>
                  <div className="text-xs text-orange-700 dark:text-orange-300 text-center">try-catch block</div>
                </div>
                
                {/* Arrow Down */}
                <div className="w-0.5 h-8 bg-orange-400 dark:bg-orange-600 -my-0"></div>
                
                {/* Recovery/End */}
                <div className="w-full flex justify-center gap-6 md:gap-8">
                  <div className="bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-lg border-2 border-blue-300 dark:border-blue-700 min-w-[90px]">
                    <div className="text-xs font-semibold text-blue-900 dark:text-blue-100 text-center">Recovery</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300 text-center">Retry</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-900/40 px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 min-w-[90px]">
                    <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 text-center">Test End</div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 text-center">Fail</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Exception Types Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h5 className="font-semibold text-red-900 dark:text-red-100">Critical Exceptions</h5>
                </div>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• NoSuchElementException</li>
                  <li>• WebDriverException</li>
                  <li>• SessionNotFoundException</li>
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  <h5 className="font-semibold text-yellow-900 dark:text-yellow-100">Timing Exceptions</h5>
                </div>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• TimeoutException</li>
                  <li>• ElementNotVisibleException</li>
                  <li>• StaleElementReferenceException</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Ban className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Interaction Exceptions</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• ElementNotInteractableException</li>
                  <li>• ElementNotSelectableException</li>
                  <li>• InvalidElementStateException</li>
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
            Exception Examples by Language
          </CardTitle>
          <CardDescription>
            Detailed exception handling examples for different programming languages
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

      {/* Exception Cards */}
      <div className="space-y-6">
        {currentExceptions.map((exception, index) => (
          <Card 
            key={index} 
            className={`border-2 transition-all cursor-pointer ${
              selectedException === exception.name 
                ? 'border-red-500 shadow-lg bg-red-50 dark:bg-red-950/20' 
                : 'border-slate-200 dark:border-slate-700 hover:border-red-300'
            }`}
            onClick={() => setSelectedException(selectedException === exception.name ? null : exception.name)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${
                  selectedException === exception.name
                    ? 'bg-red-100 dark:bg-red-900/40'
                    : 'bg-slate-100 dark:bg-slate-900/40'
                }`}>
                  <AlertTriangle className={`w-6 h-6 ${
                    selectedException === exception.name
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-slate-600 dark:text-slate-400'
                  }`} />
                </div>
                {exception.name}
                <Badge variant={selectedException === exception.name ? "default" : "secondary"}>
                  {selectedLanguage}
                </Badge>
              </CardTitle>
              <CardDescription>{exception.description}</CardDescription>
            </CardHeader>
            
            {selectedException === exception.name && (
              <CardContent className="space-y-4">
                {/* Causes and Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Common Causes
                    </h5>
                    <ul className="space-y-1">
                      {exception.causes.map((cause, i) => (
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
                      {exception.solutions.map((solution, i) => (
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
                      onClick={() => copyToClipboard(exception.code, `${exception.name} code`)}
                      className="gap-2"
                    >
                      <Copy className="w-3 h-3" />
                      Copy
                    </Button>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto text-slate-800 dark:text-slate-300">
                      <code>{exception.code}</code>
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
            Exception Handling Best Practices
          </CardTitle>
          <CardDescription>Proactive strategies to prevent and handle exceptions effectively</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Prevention Strategies</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Timer className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Use Explicit Waits</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Always wait for elements to be ready before interaction. Use WebDriverWait instead of Thread.sleep().
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Validate Locators</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Test locators in browser console before using in code. Prefer stable locators like ID over XPath.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-800 dark:text-green-200">Check Page State</h6>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Verify page load completion and AJAX calls before interacting with elements.
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
                    <Bug className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Specific Exception Handling</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Catch specific exceptions rather than generic Exception class for better error diagnosis.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <RefreshCw className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Retry Mechanisms</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Implement retry logic for transient failures with exponential backoff strategy.
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
                    <h6 className="font-semibold text-blue-800 dark:text-blue-200">Logging & Reporting</h6>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Log detailed exception information with screenshots for effective debugging.
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

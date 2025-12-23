'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Layers,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Search,
  Tag,
  FileCode,
  Play,
  RefreshCw,
  Terminal,
  Monitor,
  ShoppingBag,
  Star,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ClassTagLocators() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [productData, setProductData] = React.useState({
    buttonClicked: false,
    errorShown: false,
    inputValue: '',
    buttonsFound: 0,
    inputsFound: 0
  });

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.4;
      default: return 1;
    }
  };

  const simulateClassLocator = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setProductData({
      buttonClicked: false,
      errorShown: false,
      inputValue: '',
      buttonsFound: 0,
      inputsFound: 0
    });

    const multiplier = getSpeedMultiplier();
    
    // Get language-specific line numbers
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, nav: 7, find: 10, click: 13, checkError: 15, foundError: 16, readError: 18, quit: 21 };
      } else if (selectedLanguage === 'java') {
        return { init: 6, nav: 7, find: 10, click: 13, checkError: 15, foundError: 16, readError: 18, quit: 20 };
      } else {
        return { init: 2, nav: 3, find: 6, click: 9, checkError: 11, foundError: 12, readError: 14, quit: 17 };
      }
    };
    const lines = getCodeLines();
    
    const varName = selectedLanguage === 'python' ? 'all_buttons' : 'allButtons';
    const errorVarName = selectedLanguage === 'python' ? 'error_messages' : 'errorMessages';
    
    const steps = [
      { step: 0, log: '🚀 Starting class locator demo - E-commerce Product Testing...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading online store product page...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Locating ALL "Add to Cart" buttons by class="btn-primary"...', delay: 800 * multiplier, element: null, codeLine: lines.find },
      { step: 3, log: '✅ Found 3 product cards with "btn-primary" buttons', delay: 700 * multiplier, element: 'btn-primary', codeLine: lines.find, variable: { name: varName, value: '[3 elements]' } },
      { step: 4, log: '🛒 Adding first product to cart (clicking button[0])...', delay: 1000 * multiplier, element: 'btn-primary', codeLine: lines.click, action: 'clickButton', variable: { name: varName, value: '[3 elements]' } },
      { step: 5, log: '🔍 Checking for stock availability message (class="error-message")...', delay: 700 * multiplier, element: 'btn-primary', codeLine: lines.checkError, variable: { name: varName, value: '[3 elements]' } },
      { step: 6, log: '⚠️  Found out-of-stock warning: <div class="error-message" />', delay: 700 * multiplier, element: 'error-message', codeLine: lines.foundError, variable: { name: errorVarName, value: '<WebElement: div.error-message>' } },
      { step: 7, log: '📖 Reading error message: "Product currently out of stock"', delay: 1000 * multiplier, element: 'error-message', codeLine: lines.readError, action: 'showError', variable: { name: errorVarName, value: '<WebElement: div.error-message>' } },
      { step: 8, log: '🎉 Class locator test completed - Stock validation successful!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
    ];

    for (const { step, log, delay, element, codeLine, variable, action } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setSelectedElement(element);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (action === 'clickButton') {
        setProductData(prev => ({ ...prev, buttonClicked: true }));
      } else if (action === 'showError') {
        setProductData(prev => ({ ...prev, errorShown: true }));
      }
    }

    setIsRunning(false);
  };

  const simulateTagLocator = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setProductData({
      buttonClicked: false,
      errorShown: false,
      inputValue: '',
      buttonsFound: 0,
      inputsFound: 0
    });

    const multiplier = getSpeedMultiplier();
    
    // Get language-specific line numbers
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, nav: 7, findButtons: 10, clickButton: 13, findInputs: 16, typeInput: 19, quit: 22 };
      } else if (selectedLanguage === 'java') {
        return { init: 6, nav: 7, findButtons: 10, clickButton: 13, findInputs: 16, typeInput: 19, quit: 21 };
      } else {
        return { init: 2, nav: 3, findButtons: 6, clickButton: 9, findInputs: 12, typeInput: 15, quit: 17 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting tag locator demo - Form Automation Testing...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading contact form with multiple element types...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Finding ALL <button> tags on the page...', delay: 800 * multiplier, element: null, codeLine: lines.findButtons },
      { step: 3, log: '✅ Discovered 5 buttons: Submit, Cancel, Save, Delete, Reset', delay: 700 * multiplier, element: 'button', codeLine: lines.findButtons, variable: { name: 'buttons', value: '[5 elements]' }, action: 'foundButtons' },
      { step: 4, log: '🖱️  Interacting with "Save" button (buttons[2])...', delay: 1000 * multiplier, element: 'button', codeLine: lines.clickButton, action: 'clickButton', variable: { name: 'buttons', value: '[5 elements]' } },
      { step: 5, log: '🔍 Scanning for ALL <input> tags (text, email, password, checkbox)...', delay: 700 * multiplier, element: 'button', codeLine: lines.findInputs, variable: { name: 'buttons', value: '[5 elements]' } },
      { step: 6, log: '✅ Located 4 input fields of different types', delay: 700 * multiplier, element: 'input', codeLine: lines.findInputs, variable: { name: 'inputs', value: '[4 elements]' }, action: 'foundInputs' },
      { step: 7, log: '⌨️  Filling first text input: "Search products..."', delay: 1000 * multiplier, element: 'input', codeLine: lines.typeInput, action: 'typeInput', variable: { name: 'inputs', value: '[4 elements]' } },
      { step: 8, log: '🎉 Tag locator test completed - Form elements validated!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
    ];

    for (const { step, log, delay, element, codeLine, variable, action } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setSelectedElement(element);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (action === 'foundButtons') {
        setProductData(prev => ({ ...prev, buttonsFound: 5 }));
      } else if (action === 'clickButton') {
        setProductData(prev => ({ ...prev, buttonClicked: true }));
      } else if (action === 'foundInputs') {
        setProductData(prev => ({ ...prev, inputsFound: 4 }));
      } else if (action === 'typeInput') {
        setProductData(prev => ({ ...prev, inputValue: 'Search products...' }));
      }
    }

    setIsRunning(false);
  };

  const getClassLocatorCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver  # Import WebDriver',
        'from selenium.webdriver.common.by import By  # Import By class',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to e-commerce page',
        'driver.get("https://www.example.com")',
        '',
        '# 🔍 Find ALL elements with class="btn-primary"',
        'all_buttons = driver.find_elements(By.CLASS_NAME, "btn-primary")',
        'print(f"Found {len(all_buttons)} buttons")  # Output: Found 3 buttons',
        '',
        '# 🖱️ Click the first button',
        'all_buttons[0].click()',
        '',
        '# 🔍 Find error message by class="error-message"',
        'error_messages = driver.find_elements(By.CLASS_NAME, "error-message")',
        '',
        '# 📚 Read error text',
        'print(error_messages[0].text)',
        '',
        '# Close browser',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import java.util.List;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com");',
        '',
        '// 🔍 Find ALL elements with class="btn-primary"',
        'List<WebElement> allButtons = driver.findElements(By.className("btn-primary"));',
        'System.out.println("Found " + allButtons.size() + " buttons");',
        '',
        '// 🖱️ Click the first button',
        'allButtons.get(0).click();',
        '',
        '// 🔍 Find error messages by class',
        'List<WebElement> errorMessages = driver.findElements(By.className("error-message"));',
        '',
        '// 📚 Read error text',
        'System.out.println(errorMessages.get(0).getText());',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com\');',
        '',
        '// 🔍 Find ALL elements with class="btn-primary"',
        'let allButtons = await driver.findElements(By.className(\'btn-primary\'));',
        'console.log(`Found ${allButtons.length} buttons`);',
        '',
        '// 🖱️ Click the first button',
        'await allButtons[0].click();',
        '',
        '// 🔍 Find error messages by class',
        'let errorMessages = await driver.findElements(By.className(\'error-message\'));',
        '',
        '// 📚 Read error text',
        'let text = await errorMessages[0].getText();',
        'console.log(text);',
        '',
        'await driver.quit();',
      ];
    }
  };

  const classLocatorExample = {
    python: getClassLocatorCode().join('\n'),
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import java.util.List;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com");

// Find single element by class name
WebElement primaryButton = driver.findElement(By.className("btn-primary"));
primaryButton.click();

// Find multiple elements with same class
List<WebElement> allButtons = driver.findElements(By.className("btn-primary"));
System.out.println("Found " + allButtons.size() + " buttons");

// Click the second button
if (allButtons.size() > 1) {
    allButtons.get(1).click();
}

// Find error messages by class
List<WebElement> errorMessages = driver.findElements(By.className("error-message"));
for (WebElement error : errorMessages) {
    System.out.println(error.getText());
}

// Note: Use single class name only (no spaces)
// Correct: "btn-primary"
// Wrong: "btn btn-primary" (use CSS selector instead)

driver.quit();`,
    javascript: `const { Builder, By } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com');

// Find single element by class name
let primaryButton = await driver.findElement(By.className('btn-primary'));
await primaryButton.click();

// Find multiple elements with same class
let allButtons = await driver.findElements(By.className('btn-primary'));
console.log(\`Found \${allButtons.length} buttons\`);

// Click the second button
if (allButtons.length > 1) {
    await allButtons[1].click();
}

// Find error messages by class
let errorMessages = await driver.findElements(By.className('error-message'));
for (let error of errorMessages) {
    let text = await error.getText();
    console.log(text);
}

// Note: Use single class name only (no spaces)
// Correct: 'btn-primary'
// Wrong: 'btn btn-primary' (use CSS selector instead)

await driver.quit();`,
  };

  const getTagLocatorCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver  # Import WebDriver',
        'from selenium.webdriver.common.by import By  # Import By class',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to form page',
        'driver.get("https://www.example.com/form")',
        '',
        '# 🔍 Find ALL <button> elements',
        'buttons = driver.find_elements(By.TAG_NAME, "button")',
        'print(f"Found {len(buttons)} buttons")  # Output: Found 5 buttons',
        '',
        '# 🖱️ Click the third button',
        'buttons[2].click()',
        '',
        '# 🔍 Find ALL <input> elements',
        'inputs = driver.find_elements(By.TAG_NAME, "input")',
        'print(f"Found {len(inputs)} inputs")  # Output: Found 4 inputs',
        '',
        '# ⌨️ Type into first input',
        'inputs[0].send_keys("Search products...")',
        '',
        '# Close browser',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import java.util.List;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com/form");',
        '',
        '// 🔍 Find ALL <button> elements',
        'List<WebElement> buttons = driver.findElements(By.tagName("button"));',
        'System.out.println("Found " + buttons.size() + " buttons");',
        '',
        '// 🖱️ Click the third button',
        'buttons.get(2).click();',
        '',
        '// 🔍 Find ALL <input> elements',
        'List<WebElement> inputs = driver.findElements(By.tagName("input"));',
        'System.out.println("Found " + inputs.size() + " inputs");',
        '',
        '// ⌨️ Type into first input',
        'inputs.get(0).sendKeys("Search products...");',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com/form\');',
        '',
        '// 🔍 Find ALL <button> elements',
        'let buttons = await driver.findElements(By.tagName(\'button\'));',
        'console.log(`Found ${buttons.length} buttons`);',
        '',
        '// 🖱️ Click the third button',
        'await buttons[2].click();',
        '',
        '// 🔍 Find ALL <input> elements',
        'let inputs = await driver.findElements(By.tagName(\'input\'));',
        'console.log(`Found ${inputs.length} inputs`);',
        '',
        '// ⌨️ Type into first input',
        'await inputs[0].sendKeys(\'Search products...\');',
        '',
        'await driver.quit();',
      ];
    }
  };

  const tagLocatorExample = {
    python: getTagLocatorCode().join('\n'),
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import java.util.List;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com/form");

// Find all button elements
List<WebElement> buttons = driver.findElements(By.tagName("button"));
System.out.println("Found " + buttons.size() + " buttons");

// Click the first button
if (!buttons.isEmpty()) {
    buttons.get(0).click();
}

// Find all input elements
List<WebElement> inputs = driver.findElements(By.tagName("input"));
for (WebElement inputField : inputs) {
    String inputType = inputField.getAttribute("type");
    System.out.println("Input type: " + inputType);
}

// Find all links on the page
List<WebElement> links = driver.findElements(By.tagName("a"));
System.out.println("Found " + links.size() + " links");

// Find all images
List<WebElement> images = driver.findElements(By.tagName("img"));
for (WebElement img : images) {
    String src = img.getAttribute("src");
    String alt = img.getAttribute("alt");
    System.out.println("Image: " + alt + " - " + src);
}

// Find all paragraphs and read text
List<WebElement> paragraphs = driver.findElements(By.tagName("p"));
for (WebElement p : paragraphs) {
    System.out.println(p.getText());
}

driver.quit();`,
    javascript: `const { Builder, By } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com/form');

// Find all button elements
let buttons = await driver.findElements(By.tagName('button'));
console.log(\`Found \${buttons.length} buttons\`);

// Click the first button
if (buttons.length > 0) {
    await buttons[0].click();
}

// Find all input elements
let inputs = await driver.findElements(By.tagName('input'));
for (let inputField of inputs) {
    let inputType = await inputField.getAttribute('type');
    console.log(\`Input type: \${inputType}\`);
}

// Find all links on the page
let links = await driver.findElements(By.tagName('a'));
console.log(\`Found \${links.length} links\`);

// Find all images
let images = await driver.findElements(By.tagName('img'));
for (let img of images) {
    let src = await img.getAttribute('src');
    let alt = await img.getAttribute('alt');
    console.log(\`Image: \${alt} - \${src}\`);
}

// Find all paragraphs and read text
let paragraphs = await driver.findElements(By.tagName('p'));
for (let p of paragraphs) {
    let text = await p.getText();
    console.log(text);
}

await driver.quit();`,
  };

  const bestPractices = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://www.example.com")

# 1. Use explicit waits for dynamic content
try:
    button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "btn-primary"))
    )
    button.click()
except TimeoutException:
    print("Element not found within 10 seconds")

# 2. Handle multiple elements with same class
buttons = driver.find_elements(By.CLASS_NAME, "submit-btn")
# Filter by additional criteria
for btn in buttons:
    if btn.is_displayed() and btn.is_enabled():
        btn.click()
        break

# 3. Use tag name for broad searches
all_links = driver.find_elements(By.TAG_NAME, "a")
# Filter links by href
external_links = [link for link in all_links 
                  if link.get_attribute("href").startswith("http")]

# 4. Combine with other locators for precision
# Instead of just class name, use CSS selector
specific_button = driver.find_element(
    By.CSS_SELECTOR, "button.btn-primary[type='submit']"
)

# 5. Check element count before accessing
images = driver.find_elements(By.TAG_NAME, "img")
if len(images) > 2:
    third_image = images[2]
    print(third_image.get_attribute("src"))

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.TimeoutException;
import java.time.Duration;
import java.util.List;
import java.util.stream.Collectors;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com");

// 1. Use explicit waits for dynamic content
try {
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    WebElement button = wait.until(
        ExpectedConditions.presenceOfElementLocated(By.className("btn-primary"))
    );
    button.click();
} catch (TimeoutException e) {
    System.out.println("Element not found within 10 seconds");
}

// 2. Handle multiple elements with same class
List<WebElement> buttons = driver.findElements(By.className("submit-btn"));
// Filter by additional criteria
for (WebElement btn : buttons) {
    if (btn.isDisplayed() && btn.isEnabled()) {
        btn.click();
        break;
    }
}

// 3. Use tag name for broad searches
List<WebElement> allLinks = driver.findElements(By.tagName("a"));
// Filter links by href
List<WebElement> externalLinks = allLinks.stream()
    .filter(link -> link.getAttribute("href").startsWith("http"))
    .collect(Collectors.toList());

// 4. Combine with other locators for precision
// Instead of just class name, use CSS selector
WebElement specificButton = driver.findElement(
    By.cssSelector("button.btn-primary[type='submit']")
);

// 5. Check element count before accessing
List<WebElement> images = driver.findElements(By.tagName("img"));
if (images.size() > 2) {
    WebElement thirdImage = images.get(2);
    System.out.println(thirdImage.getAttribute("src"));
}

driver.quit();`,
    javascript: `const { Builder, By, until } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com');

// 1. Use explicit waits for dynamic content
try {
    let button = await driver.wait(
        until.elementLocated(By.className('btn-primary')),
        10000
    );
    await button.click();
} catch (error) {
    console.log('Element not found within 10 seconds');
}

// 2. Handle multiple elements with same class
let buttons = await driver.findElements(By.className('submit-btn'));
// Filter by additional criteria
for (let btn of buttons) {
    let isDisplayed = await btn.isDisplayed();
    let isEnabled = await btn.isEnabled();
    if (isDisplayed && isEnabled) {
        await btn.click();
        break;
    }
}

// 3. Use tag name for broad searches
let allLinks = await driver.findElements(By.tagName('a'));
// Filter links by href
let externalLinks = [];
for (let link of allLinks) {
    let href = await link.getAttribute('href');
    if (href && href.startsWith('http')) {
        externalLinks.push(link);
    }
}

// 4. Combine with other locators for precision
// Instead of just class name, use CSS selector
let specificButton = await driver.findElement(
    By.css('button.btn-primary[type="submit"]')
);

// 5. Check element count before accessing
let images = await driver.findElements(By.tagName('img'));
if (images.length > 2) {
    let thirdImage = images[2];
    let src = await thirdImage.getAttribute('src');
    console.log(src);
}

await driver.quit();`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Layers}
        category="Selenium · Locator Strategies"
        title="Class & Tag Locators"
        description="Learn to locate elements using CSS classes and HTML tags for flexible and powerful element selection"
        colorTheme="purple"
        badges={[
          { label: 'Flexible', variant: 'success' },
          { label: 'Multiple Elements', variant: 'info' },
          { label: 'Common Usage', variant: 'secondary' },
        ]}
      />

      {/* Why Class & Tag Locators */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Why Class & Tag Locators?
          </CardTitle>
          <CardDescription>Versatile locators for common scenarios</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Multiple Elements</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Perfect for finding groups of elements with shared styling or type
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Widely Available</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Most elements have classes, and all elements have tags
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">Simple Syntax</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Easy to use and understand - great for beginners
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Broad Searches</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Tag locators find all elements of a specific type
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Class and tag locator syntax in Python, Java, and JavaScript
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

          {/* Code Display */}
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
                {selectedLanguage === 'python' && `# Find by class name
button = driver.find_element(By.CLASS_NAME, "btn-primary")
button.click()

# Find multiple elements with same class
buttons = driver.find_elements(By.CLASS_NAME, "btn-primary")
print(f"Found {len(buttons)} buttons")

# Find by tag name
links = driver.find_elements(By.TAG_NAME, "a")
for link in links:
    print(link.text)`}
                {selectedLanguage === 'java' && `// Find by class name
WebElement button = driver.findElement(By.className("btn-primary"));
button.click();

// Find multiple elements with same class
List<WebElement> buttons = driver.findElements(By.className("btn-primary"));
System.out.println("Found " + buttons.size() + " buttons");

// Find by tag name
List<WebElement> links = driver.findElements(By.tagName("a"));
for (WebElement link : links) {
    System.out.println(link.getText());
}`}
                {selectedLanguage === 'javascript' && `// Find by class name
let button = await driver.findElement(By.className('btn-primary'));
await button.click();

// Find multiple elements with same class
let buttons = await driver.findElements(By.className('btn-primary'));
console.log(\`Found \${buttons.length} buttons\`);

// Find by tag name
let links = await driver.findElements(By.tagName('a'));
for (let link of links) {
    console.log(await link.getText());
}`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Class Locator */}
      <Card className="border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/40">
              <Tag className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            </div>
            Class Locator
          </CardTitle>
          <CardDescription>Find elements by their CSS class attribute</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-violet-950/20">
            <CheckCircle className="h-5 w-5 text-violet-600" />
            <AlertTitle className="text-violet-900 dark:text-violet-100">Important Note</AlertTitle>
            <AlertDescription className="text-violet-800 dark:text-violet-200">
              Class locators work with a single class name only. If an element has multiple classes like 
              <code className="bg-violet-100 dark:bg-violet-900 px-1 rounded mx-1">class="btn btn-primary"</code>, 
              use just one: <code className="bg-violet-100 dark:bg-violet-900 px-1 rounded">btn-primary</code>
            </AlertDescription>
          </Alert>

          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive E-commerce Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch class locators in action on a product page. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 p-4 rounded-lg border-2 border-violet-200 dark:border-violet-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span className="font-semibold text-slate-900 dark:text-slate-100">Execution Speed:</span>
              </div>
              <div className="flex gap-3">
                {[
                  { value: 'slow', label: 'Slow', icon: '🐢' },
                  { value: 'medium', label: 'Medium', icon: '🚶' },
                  { value: 'fast', label: 'Fast', icon: '🚀' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-all ${
                      speed === option.value
                        ? 'border-violet-500 bg-violet-100 dark:bg-violet-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-violet-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-class"
                      value={option.value}
                      checked={speed === option.value}
                      onChange={(e) => setSpeed(e.target.value as any)}
                      disabled={isRunning}
                      className="w-4 h-4"
                    />
                    <span className="text-lg">{option.icon}</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Side by Side: Code and Preview */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left: Code Example */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateClassLocator}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                  >
                    {isRunning ? (
                      <>
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3" />
                        Run Demo
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(classLocatorExample[selectedLanguage], 'Class locator code')}
                    className="gap-2"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </Button>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs max-h-[600px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700">
                {isRunning ? (
                  <div className="space-y-0">
                    {getClassLocatorCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-violet-200 dark:bg-violet-900/50 border-l-4 border-violet-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-violet-900 dark:text-violet-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                        {currentCodeLine === index && (() => {
                          const getVariableName = (codeLine: string) => {
                            if (selectedLanguage === 'python') {
                              return codeLine.split('=')[0]?.trim();
                            } else if (selectedLanguage === 'java') {
                              const match = codeLine.match(/\b(\w+)\s*=/);
                              return match ? match[1] : null;
                            } else {
                              const match = codeLine.match(/(?:let|const|var)\s+(\w+)\s*=/);
                              return match ? match[1] : null;
                            }
                          };
                          const varName = getVariableName(line);
                          return varName && liveVariables[varName] ? (
                            <span className="ml-2 px-2 py-0.5 bg-yellow-200 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100 rounded text-[10px] font-semibold">
                              = {liveVariables[varName]}
                            </span>
                          ) : null;
                        })()}
                      </div>
                    ))}
                    {Object.keys(liveVariables).length > 0 && (
                      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-700">
                        <div className="text-[10px] font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-blue-800 dark:text-blue-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-blue-600 dark:text-blue-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{classLocatorExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Page Preview</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 max-h-[600px] overflow-y-auto">
              <div className="bg-white dark:bg-slate-950 p-6 rounded-lg border border-slate-200 dark:border-slate-700 space-y-4">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Product Store</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Testing class locators on e-commerce elements</p>
                </div>

                {/* Product Cards with same class */}
                <div className={`transition-all duration-300 ${selectedElement === 'btn-primary' ? 'ring-4 ring-violet-500 ring-opacity-50 rounded-lg p-2' : ''}`}>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                    <Layers className="w-3 h-3" />
                    class="btn-primary" → Found 3 product cards
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { name: 'Laptop', price: '$999', stock: 'Out of Stock' },
                      { name: 'Mouse', price: '$29', stock: 'In Stock' },
                      { name: 'Keyboard', price: '$79', stock: 'In Stock' },
                    ].map((product, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedElement === 'btn-primary' && idx === 0
                            ? 'border-violet-500 bg-violet-50 dark:bg-violet-950/30 shadow-lg'
                            : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'
                        }`}
                      >
                        <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">{product.name}</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">{product.price}</div>
                        <button
                          className={`w-full px-2 py-1 text-xs rounded font-medium transition-all ${
                            selectedElement === 'btn-primary' && idx === 0 && productData.buttonClicked
                              ? 'bg-violet-500 text-white shadow-md'
                              : 'bg-blue-500 text-white hover:bg-blue-600'
                          }`}
                        >
                          {selectedElement === 'btn-primary' && idx === 0 && productData.buttonClicked ? '🛒 Added' : 'Add to Cart'}
                        </button>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{product.stock}</div>
                      </div>
                    ))}
                  </div>
                  {selectedElement === 'btn-primary' && (
                    <div className="mt-2 text-xs text-violet-600 dark:text-violet-400 font-medium flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Located all buttons with class="btn-primary"
                    </div>
                  )}
                </div>

                {/* Stock Error Message */}
                {productData.errorShown && (
                  <div className={`transition-all duration-300 animate-in fade-in slide-in-from-top-2 ${selectedElement === 'error-message' ? 'ring-4 ring-violet-500 ring-opacity-50 rounded-lg' : ''}`}>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-3 h-3" />
                      class="error-message" → Stock validation alert
                    </label>
                    <div
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedElement === 'error-message'
                          ? 'border-violet-500 bg-red-50 dark:bg-red-950/30 shadow-lg'
                          : 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-950/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <AlertCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-red-900 dark:text-red-100 mb-1">Product Unavailable</p>
                          <p className="text-xs text-red-700 dark:text-red-300">
                            This product is currently out of stock. Please check back later or choose an alternative.
                          </p>
                        </div>
                      </div>
                    </div>
                    {selectedElement === 'error-message' && (
                      <div className="mt-2 text-xs text-violet-600 dark:text-violet-400 font-medium flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Error message text extracted successfully
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Tag Locator */}
      <Card className="border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/40">
              <FileCode className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            Tag Locator
          </CardTitle>
          <CardDescription>Find elements by their HTML tag name</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-cyan-200 dark:border-cyan-700 bg-cyan-50 dark:bg-cyan-950/20">
            <Search className="h-5 w-5 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Broad Search</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              Tag locators find ALL elements of that type on the page. Use 
              <code className="bg-cyan-100 dark:bg-cyan-900 px-1 rounded mx-1">find_elements</code> (plural) 
              to get all matches, then filter as needed.
            </AlertDescription>
          </Alert>

          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Form Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch tag locators find multiple element types. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-4 rounded-lg border-2 border-cyan-200 dark:border-cyan-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span className="font-semibold text-slate-900 dark:text-slate-100">Execution Speed:</span>
              </div>
              <div className="flex gap-3">
                {[
                  { value: 'slow', label: 'Slow', icon: '🐢' },
                  { value: 'medium', label: 'Medium', icon: '🚶' },
                  { value: 'fast', label: 'Fast', icon: '🚀' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-all ${
                      speed === option.value
                        ? 'border-cyan-500 bg-cyan-100 dark:bg-cyan-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-cyan-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-tag"
                      value={option.value}
                      checked={speed === option.value}
                      onChange={(e) => setSpeed(e.target.value as any)}
                      disabled={isRunning}
                      className="w-4 h-4"
                    />
                    <span className="text-lg">{option.icon}</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Side by Side: Code and Preview */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left: Code Example */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateTagLocator}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                  >
                    {isRunning ? (
                      <>
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3" />
                        Run Demo
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(tagLocatorExample[selectedLanguage], 'Tag locator code')}
                    className="gap-2"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </Button>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs max-h-[600px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700">
                {isRunning ? (
                  <div className="space-y-0">
                    {getTagLocatorCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-cyan-200 dark:bg-cyan-900/50 border-l-4 border-cyan-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-cyan-900 dark:text-cyan-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                        {currentCodeLine === index && (() => {
                          const getVariableName = (codeLine: string) => {
                            if (selectedLanguage === 'python') {
                              return codeLine.split('=')[0]?.trim();
                            } else if (selectedLanguage === 'java') {
                              const match = codeLine.match(/\b(\w+)\s*=/);
                              return match ? match[1] : null;
                            } else {
                              const match = codeLine.match(/(?:let|const|var)\s+(\w+)\s*=/);
                              return match ? match[1] : null;
                            }
                          };
                          const varName = getVariableName(line);
                          return varName && liveVariables[varName] ? (
                            <span className="ml-2 px-2 py-0.5 bg-yellow-200 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100 rounded text-[10px] font-semibold">
                              = {liveVariables[varName]}
                            </span>
                          ) : null;
                        })()}
                      </div>
                    ))}
                    {Object.keys(liveVariables).length > 0 && (
                      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-700">
                        <div className="text-[10px] font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-blue-800 dark:text-blue-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-blue-600 dark:text-blue-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{tagLocatorExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Page Preview</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 max-h-[600px] overflow-y-auto">
              <div className="bg-white dark:bg-slate-950 p-6 rounded-lg border border-slate-200 dark:border-slate-700 space-y-4">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileCode className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Contact Form</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Testing tag locators on HTML elements</p>
                </div>

                {/* Action Buttons Section */}
                <div className={`transition-all duration-300 ${selectedElement === 'button' ? 'ring-4 ring-cyan-500 ring-opacity-50 rounded-lg p-3' : ''}`}>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                    <Tag className="w-3 h-3" />
                    &lt;button&gt; tag → Found 5 action buttons
                  </label>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      {[
                        { text: 'Submit', color: 'green', icon: '✓' },
                        { text: 'Cancel', color: 'red', icon: '✕' },
                        { text: 'Save', color: 'blue', icon: '💾' },
                      ].map((btn, idx) => (
                        <button
                          key={idx}
                          className={`flex-1 px-3 py-2 text-xs rounded-lg font-medium transition-all flex items-center justify-center gap-1 ${
                            selectedElement === 'button' && idx === 2 && productData.buttonClicked
                              ? 'bg-cyan-500 text-white shadow-lg scale-105'
                              : btn.color === 'green'
                              ? 'bg-green-500 text-white hover:bg-green-600'
                              : btn.color === 'red'
                              ? 'bg-red-500 text-white hover:bg-red-600'
                              : 'bg-blue-500 text-white hover:bg-blue-600'
                          }`}
                        >
                          <span>{btn.icon}</span>
                          {btn.text}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {[
                        { text: 'Delete', color: 'orange' },
                        { text: 'Reset', color: 'gray' },
                      ].map((btn, idx) => (
                        <button
                          key={idx}
                          className={`flex-1 px-3 py-2 text-xs rounded-lg font-medium transition-all ${
                            btn.color === 'orange'
                              ? 'bg-orange-500 text-white hover:bg-orange-600'
                              : 'bg-slate-500 text-white hover:bg-slate-600'
                          }`}
                        >
                          {btn.text}
                        </button>
                      ))}
                    </div>
                  </div>
                  {selectedElement === 'button' && (
                    <div className="mt-2 text-xs text-cyan-600 dark:text-cyan-400 font-medium flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {productData.buttonsFound > 0 ? `Located all ${productData.buttonsFound} button elements` : 'Scanning button elements...'}
                    </div>
                  )}
                </div>

                {/* Input Fields Section */}
                <div className={`transition-all duration-300 ${selectedElement === 'input' ? 'ring-4 ring-cyan-500 ring-opacity-50 rounded-lg p-3' : ''}`}>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                    <Tag className="w-3 h-3" />
                    &lt;input&gt; tag → Found 4 input fields
                  </label>
                  <div className="space-y-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 w-16">type="text"</span>
                        <input
                          type="text"
                          placeholder="Search products..."
                          value={productData.inputValue}
                          readOnly
                          className={`flex-1 px-3 py-2 text-xs border-2 rounded-lg transition-all ${
                            selectedElement === 'input' && productData.inputValue
                              ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-950/30'
                              : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'
                          }`}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 w-16">type="email"</span>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          readOnly
                          className="flex-1 px-3 py-2 text-xs border-2 rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 w-16">type="password"</span>
                        <input
                          type="password"
                          placeholder="••••••••"
                          readOnly
                          className="flex-1 px-3 py-2 text-xs border-2 rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 w-16">type="checkbox"</span>
                        <div className="flex items-center gap-2 flex-1">
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded"
                          />
                          <span className="text-xs text-slate-700 dark:text-slate-300">I agree to terms and conditions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {selectedElement === 'input' && (
                    <div className="mt-2 text-xs text-cyan-600 dark:text-cyan-400 font-medium flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {productData.inputsFound > 0 ? `Located all ${productData.inputsFound} input elements of different types` : 'Scanning input elements...'}
                    </div>
                  )}
                </div>

                {productData.inputValue && (
                  <div className="p-3 bg-cyan-50 dark:bg-cyan-950/30 border-2 border-cyan-500 rounded-lg animate-in fade-in slide-in-from-top-2">
                    <p className="text-xs text-cyan-700 dark:text-cyan-300 font-medium text-center flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Form interaction completed - All elements validated!
                    </p>
                  </div>
                )}
              </div>
            </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Class vs Tag Comparison */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Class vs Tag: When to Use Each
          </CardTitle>
          <CardDescription>Choosing the right locator strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-violet-900 dark:text-violet-100 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Use Class When:
              </h4>
              <div className="space-y-2">
                {[
                  'Elements share common styling',
                  'Need to find all buttons of a type',
                  'Working with UI component libraries',
                  'Class names are semantic and stable',
                  'Targeting specific styled elements',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-violet-50 dark:bg-violet-950/30 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 flex items-center gap-2">
                <FileCode className="w-5 h-5" />
                Use Tag When:
              </h4>
              <div className="space-y-2">
                {[
                  'Need all elements of a specific type',
                  'Counting elements on a page',
                  'Scraping content (links, images, etc.)',
                  'No better locator available',
                  'Testing page structure',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <Code className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Best Practices & Tips
          </CardTitle>
          <CardDescription>Professional techniques for class and tag locators</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{bestPractices[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(bestPractices[selectedLanguage], 'Best practices code')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Common Issues */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/40">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            Common Issues & Solutions
          </CardTitle>
          <CardDescription>Troubleshooting class and tag locators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Multiple Classes Error</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Using multiple class names like <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">"btn btn-primary"</code>.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use single class name <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">"btn-primary"</code> or switch to CSS selector <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">".btn.btn-primary"</code>.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Too Many Elements Found</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Tag or class is too generic (e.g., all <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">div</code> elements).
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Combine with other attributes using CSS selectors or XPath for more specific targeting.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Dynamic Class Names</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Classes change dynamically (e.g., <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">component-xyz123</code>).
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use partial matching with CSS selectors <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">[class*='component']</code> or find a stable class.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Wrong Element Selected</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Using <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">find_element</code> returns first match only.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">find_elements</code> to get all, then filter by index or attributes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/40">
              <Search className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            Quick Reference
          </CardTitle>
          <CardDescription>Syntax cheat sheet</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Class Name</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.find_element(By.CLASS_NAME, "btn")
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.findElement(By.className("btn"))
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.findElement(By.className('btn'))
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Tag Name</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.find_elements(By.TAG_NAME, "button")
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.findElements(By.tagName("button"))
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.findElements(By.tagName('button'))
                  </code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

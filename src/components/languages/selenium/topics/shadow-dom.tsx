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
  Eye,
  EyeOff,
  Play,
  RefreshCw,
  Terminal,
  Monitor,
  Lock,
  Shield,
  Box,
  TreePine,
  Cpu
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ShadowDomComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [showShadowContent, setShowShadowContent] = React.useState(false);
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});

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

  const simulateShadowDomAccess = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setShowShadowContent(false);

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findHost: 10, accessShadow: 13, findInner: 16, interactInner: 17, quit: 20 };
      } else if (selectedLanguage === 'java') {
        return { nav: 6, findHost: 9, accessShadow: 12, findInner: 15, interactInner: 16, quit: 19 };
      } else {
        return { nav: 3, findHost: 6, accessShadow: 9, findInner: 12, interactInner: 13, quit: 16 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      host: selectedLanguage === 'python' ? 'shadow_host' : 'shadowHost',
      root: selectedLanguage === 'python' ? 'shadow_root' : 'shadowRoot',
      button: selectedLanguage === 'python' ? 'inner_button' : 'innerButton'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Shadow DOM access demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading page with Shadow DOM components...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Finding Shadow DOM host element...', delay: 800 * multiplier, element: null, codeLine: lines.findHost },
      { step: 3, log: '✅ Found shadow host: <div id="shadow-host"></div>', delay: 700 * multiplier, element: 'shadow-host', codeLine: lines.findHost, variable: { name: varNames.host, value: '<WebElement: div#shadow-host>' } },
      { step: 4, log: '🔓 Accessing Shadow Root using JavaScript executor...', delay: 1000 * multiplier, element: 'shadow-host', codeLine: lines.accessShadow, variable: { name: varNames.root, value: '<ShadowRoot>' } },
      { step: 5, log: '👁️ Shadow Root accessed successfully!', delay: 700 * multiplier, element: 'shadow-host', action: 'showShadow', codeLine: lines.accessShadow, variable: { name: varNames.root, value: '<ShadowRoot: open>' } },
      { step: 6, log: '🔍 Finding button inside Shadow DOM...', delay: 800 * multiplier, element: 'shadow-button', codeLine: lines.findInner, variable: { name: varNames.button, value: '<WebElement: button.shadow-btn>' } },
      { step: 7, log: '✅ Found inner button: <button class="shadow-btn">', delay: 700 * multiplier, element: 'shadow-button', codeLine: lines.findInner, variable: { name: varNames.button, value: '<WebElement: button.shadow-btn>' } },
      { step: 8, log: '🖱️  Clicking Shadow DOM button...', delay: 1000 * multiplier, element: 'shadow-button', action: 'clickButton', codeLine: lines.interactInner, variable: { name: varNames.button, value: '<WebElement: button.shadow-btn>' } },
      { step: 9, log: '🎉 Shadow DOM interaction completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
    ];

    for (const { step, log, delay, element, action, codeLine, variable } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setSelectedElement(element);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (action === 'showShadow') {
        setShowShadowContent(true);
      } else if (action === 'clickButton') {
        // Simulate button click effect
      }
    }

    setIsRunning(false);
  };

  const getShadowDomCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize Chrome browser instance',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to page with Shadow DOM',
        'driver.get("https://www.example.com/shadow")',
        '',
        '# 🔍 Find the Shadow DOM host element',
        'shadow_host = driver.find_element(By.ID, "shadow-host")',
        '',
        '# 🔓 Access Shadow Root using JavaScript executor',
        'shadow_root = driver.execute_script(',
        '    "return arguments[0].shadowRoot", shadow_host',
        ')',
        '',
        '# 🔍 Find element inside Shadow DOM',
        'inner_button = shadow_root.find_element(By.CSS_SELECTOR, ".shadow-btn")',
        'inner_button.click()  # 🖱️ Click the Shadow DOM button',
        '',
        '# Close the browser',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import org.openqa.selenium.JavascriptExecutor;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com/shadow");',
        '',
        '// 🔍 Find the Shadow DOM host element',
        'WebElement shadowHost = driver.findElement(By.id("shadow-host"));',
        '',
        '// 🔓 Access Shadow Root using JavaScript executor',
        'WebElement shadowRoot = (WebElement) ((JavascriptExecutor)driver)',
        '    .executeScript("return arguments[0].shadowRoot", shadowHost);',
        '',
        '// 🔍 Find element inside Shadow DOM',
        'WebElement innerButton = shadowRoot.findElement(By.cssSelector(".shadow-btn"));',
        'innerButton.click(); // 🖱️ Click the Shadow DOM button',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com/shadow\');',
        '',
        '// 🔍 Find the Shadow DOM host element',
        'let shadowHost = await driver.findElement(By.id(\'shadow-host\'));',
        '',
        '// 🔓 Access Shadow Root using JavaScript executor',
        'let shadowRoot = await driver.executeScript(',
        '    \'return arguments[0].shadowRoot\', shadowHost',
        ');',
        '',
        '// 🔍 Find element inside Shadow DOM',
        'let innerButton = await shadowRoot.findElement(By.cssSelector(\'.shadow-btn\'));',
        'await innerButton.click(); // 🖱️ Click the Shadow DOM button',
        '',
        'await driver.quit();',
      ];
    }
  };

  const shadowDomExample = {
    python: getShadowDomCode().join('\n'),
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.JavascriptExecutor;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com/shadow");

// 🔍 Find the Shadow DOM host element
WebElement shadowHost = driver.findElement(By.id("shadow-host"));

// 🔓 Access Shadow Root using JavaScript executor
WebElement shadowRoot = (WebElement) ((JavascriptExecutor)driver)
    .executeScript("return arguments[0].shadowRoot", shadowHost);

// 🔍 Find element inside Shadow DOM
WebElement innerButton = shadowRoot.findElement(By.cssSelector(".shadow-btn"));
innerButton.click(); // 🖱️ Click the Shadow DOM button

driver.quit();`,
    javascript: `const { Builder, By } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com/shadow');

// 🔍 Find the Shadow DOM host element
let shadowHost = await driver.findElement(By.id('shadow-host'));

// 🔓 Access Shadow Root using JavaScript executor
let shadowRoot = await driver.executeScript(
    'return arguments[0].shadowRoot', shadowHost
);

// 🔍 Find element inside Shadow DOM
let innerButton = await shadowRoot.findElement(By.cssSelector('.shadow-btn'));
await innerButton.click(); // 🖱️ Click the Shadow DOM button

await driver.quit();`,
  };

  const advancedShadowDomCode = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://www.example.com/shadow")

# 1. Wait for Shadow DOM to be available
wait = WebDriverWait(driver, 10)
shadow_host = wait.until(EC.presence_of_element_located((By.ID, "shadow-host")))

# 2. Access closed Shadow DOM (if possible)
try:
    shadow_root = driver.execute_script(
        "return arguments[0].shadowRoot", shadow_host
    )
    if shadow_root:
        # 3. Find multiple elements in Shadow DOM
        buttons = shadow_root.find_elements(By.CSS_SELECTOR, "button")
        print(f"Found {len(buttons)} buttons in Shadow DOM")
        
        # 4. Interact with specific element
        for button in buttons:
            if button.text == "Submit":
                button.click()
                break
except Exception as e:
    print(f"Cannot access Shadow DOM: {e}")

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.List;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com/shadow");

// 1. Wait for Shadow DOM to be available
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement shadowHost = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("shadow-host")));

// 2. Access closed Shadow DOM (if possible)
try {
    WebElement shadowRoot = (WebElement) ((JavascriptExecutor)driver)
        .executeScript("return arguments[0].shadowRoot", shadowHost);
    
    if (shadowRoot != null) {
        // 3. Find multiple elements in Shadow DOM
        List<WebElement> buttons = shadowRoot.findElements(By.cssSelector("button"));
        System.out.println("Found " + buttons.size() + " buttons in Shadow DOM");
        
        // 4. Interact with specific element
        for (WebElement button : buttons) {
            if (button.getText().equals("Submit")) {
                button.click();
                break;
            }
        }
    }
} catch (Exception e) {
    System.out.println("Cannot access Shadow DOM: " + e.getMessage());
}

driver.quit();`,
    javascript: `const { Builder, By, until } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com/shadow');

// 1. Wait for Shadow DOM to be available
let shadowHost = await driver.wait(until.elementLocated(By.id('shadow-host')), 10000);

// 2. Access closed Shadow DOM (if possible)
try {
    let shadowRoot = await driver.executeScript(
        'return arguments[0].shadowRoot', shadowHost
    );
    
    if (shadowRoot) {
        // 3. Find multiple elements in Shadow DOM
        let buttons = await shadowRoot.findElements(By.cssSelector('button'));
        console.log(\`Found \${buttons.length} buttons in Shadow DOM\`);
        
        // 4. Interact with specific element
        for (let button of buttons) {
            let text = await button.getText();
            if (text === 'Submit') {
                await button.click();
                break;
            }
        }
    }
} catch (error) {
    console.log('Cannot access Shadow DOM:', error.message);
}

await driver.quit();`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Layers}
        category="Selenium · Advanced Locators"
        title="Shadow DOM Elements"
        description="Master accessing and interacting with Shadow DOM elements using JavaScript executor and advanced techniques"
        colorTheme="purple"
        badges={[
          { label: 'Advanced', variant: 'info' },
          { label: 'JavaScript Required', variant: 'secondary' },
          { label: 'Modern Web', variant: 'default' },
        ]}
      />

      {/* Shadow DOM Diagram */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Shadow DOM Architecture Diagram
          </CardTitle>
          <CardDescription>Visual representation of Shadow DOM structure and encapsulation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700">
              <div className="space-y-0">
                {/* Document Level */}
                <div className="text-center">
                  <div className="inline-block bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                    <div className="text-sm font-semibold text-blue-900 dark:text-blue-100">Main Document</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">document.documentElement</div>
                  </div>
                </div>
                
                {/* Arrow Down from Document to Host */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                
                {/* Host Element */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                      <div className="text-sm font-semibold text-purple-900 dark:text-purple-100">Shadow Host</div>
                      <div className="text-xs text-purple-700 dark:text-purple-300">&lt;custom-element&gt;</div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down from Host to Boundary */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-purple-400 dark:bg-purple-600"></div>
                </div>
                
                {/* Shadow Boundary */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="border-2 border-dashed border-indigo-400 dark:border-indigo-600 px-8 py-1 rounded-lg">
                      <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">Shadow Boundary</div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down from Boundary to Root */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-indigo-400 dark:bg-indigo-600"></div>
                </div>
                
                {/* Shadow Root */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="bg-indigo-100 dark:bg-indigo-900/40 px-6 py-3 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
                      <div className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">Shadow Root</div>
                      <div className="text-xs text-indigo-700 dark:text-indigo-300">shadowRoot</div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down from Root to Tree */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-indigo-400 dark:bg-indigo-600"></div>
                </div>
                
                {/* Shadow Tree */}
                <div className="flex justify-center space-x-4">
                  <div className="bg-green-100 dark:bg-green-900/40 px-4 py-2 rounded-lg border-2 border-green-300 dark:border-green-700">
                    <div className="text-xs font-semibold text-green-900 dark:text-green-100">Shadow Tree</div>
                    <div className="text-xs text-green-700 dark:text-green-300">&lt;div&gt;</div>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/40 px-4 py-2 rounded-lg border-2 border-green-300 dark:border-green-700">
                    <div className="text-xs font-semibold text-green-900 dark:text-green-100">Shadow Tree</div>
                    <div className="text-xs text-green-700 dark:text-green-300">&lt;span&gt;</div>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/40 px-4 py-2 rounded-lg border-2 border-green-300 dark:border-green-700">
                    <div className="text-xs font-semibold text-green-900 dark:text-green-100">Shadow Tree</div>
                    <div className="text-xs text-green-700 dark:text-green-300">&lt;style&gt;</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Encapsulation Explanation */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✗</span>
                  </div>
                  <h5 className="font-semibold text-red-900 dark:text-red-100">Not Accessible from Main Document</h5>
                </div>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• document.querySelector() cannot find Shadow DOM elements</li>
                  <li>• CSS from main document doesn't affect Shadow DOM</li>
                  <li>• JavaScript from main document cannot access Shadow DOM</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Accessible via Shadow Root</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Use element.shadowRoot to access Shadow DOM</li>
                  <li>• JavaScript executor can traverse Shadow DOM</li>
                  <li>• Shadow DOM has its own scoped CSS and JavaScript</li>
                </ul>
              </div>
            </div>
            
            {/* Access Patterns Diagram */}
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">Access Patterns Comparison</h5>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h6 className="text-xs font-semibold text-red-600 dark:text-red-400 mb-2">❌ Regular DOM Access (Fails)</h6>
                  <code className="block bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-2 py-1 rounded text-xs mb-2">
                    document.querySelector('.shadow-element')<br/>
                    // Returns: null
                  </code>
                  <div className="text-xs text-red-600 dark:text-red-400">
                    Cannot penetrate Shadow Boundary
                  </div>
                </div>
                
                <div>
                  <h6 className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2">✅ Shadow DOM Access (Works)</h6>
                  <code className="block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded text-xs mb-2">
                    const shadowRoot = element.shadowRoot;<br/>
                    shadowRoot.querySelector('.shadow-element')<br/>
                    // Returns: Element
                  </code>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    Access through Shadow Root
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Shadow DOM */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Understanding Shadow DOM
          </CardTitle>
          <CardDescription>The hidden layer of modern web components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Encapsulation</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Shadow DOM provides DOM and style encapsulation for web components
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-1">Isolation</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Elements inside Shadow DOM are hidden from regular DOM queries
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TreePine className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Tree Structure</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Separate DOM tree attached to a host element
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 rounded-lg border-2 border-cyan-200 dark:border-cyan-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-1">Modern Components</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Used in modern frameworks and web components
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
            Shadow DOM Access Patterns
          </CardTitle>
          <CardDescription>
            JavaScript executor techniques for Shadow DOM interaction
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
                {selectedLanguage === 'python' && `# Access Shadow DOM using JavaScript executor
shadow_root = driver.execute_script(
    "return arguments[0].shadowRoot", shadow_host
)

# Find elements inside Shadow DOM
inner_button = shadow_root.find_element(By.CSS_SELECTOR, ".btn")`}
                {selectedLanguage === 'java' && `// Access Shadow DOM using JavaScript executor
WebElement shadowRoot = (WebElement) ((JavascriptExecutor)driver)
    .executeScript("return arguments[0].shadowRoot", shadowHost);

// Find elements inside Shadow DOM
WebElement innerButton = shadowRoot.findElement(By.cssSelector(".btn"));`}
                {selectedLanguage === 'javascript' && `// Access Shadow DOM using JavaScript executor
let shadowRoot = await driver.executeScript(
    'return arguments[0].shadowRoot', shadowHost
);

// Find elements inside Shadow DOM
let innerButton = await shadowRoot.findElement(By.cssSelector('.btn'));`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Shadow DOM Access Demo */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <Eye className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Shadow DOM Access Demo
          </CardTitle>
          <CardDescription>Interactive demonstration of accessing Shadow DOM elements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
            <AlertCircle className="h-5 w-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">JavaScript Executor Required</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Shadow DOM elements cannot be accessed with regular locators. JavaScript executor is required to penetrate the Shadow boundary.
            </AlertDescription>
          </Alert>

          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch how Shadow DOM elements are accessed and manipulated. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
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
                        ? 'border-indigo-500 bg-indigo-100 dark:bg-indigo-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-indigo-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-shadow"
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

          {/* Side by Side: Code and Shadow DOM Preview */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left: Code Example */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateShadowDomAccess}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
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
                    onClick={() => copyToClipboard(shadowDomExample[selectedLanguage], 'Shadow DOM code')}
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
                    {getShadowDomCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-indigo-200 dark:bg-indigo-900/50 border-l-4 border-indigo-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-indigo-900 dark:text-indigo-100' : 'text-slate-800 dark:text-slate-300'}>
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{shadowDomExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Shadow DOM Visual Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Shadow DOM Structure</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 max-h-[600px] overflow-y-auto">
                  <div className="space-y-4">
                    {/* Main Document */}
                    <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 mb-3">
                        <Box className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Main Document</h5>
                      </div>
                      
                      {/* Shadow Host */}
                      <div className={`ml-4 p-3 rounded-lg border-2 transition-all ${
                        selectedElement === 'shadow-host' 
                          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 ring-4 ring-indigo-500 ring-opacity-50' 
                          : 'border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                            &lt;div id="shadow-host"&gt;
                          </span>
                        </div>
                        {selectedElement === 'shadow-host' && (
                          <div className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1">
                            <Search className="w-3 h-3" />
                            Shadow Host Element Found
                          </div>
                        )}
                        
                        {/* Shadow Root (Hidden/Shown) */}
                        {showShadowContent && (
                          <div className="ml-4 mt-3 p-3 rounded-lg border-2 border-purple-300 dark:border-purple-600 bg-purple-50 dark:bg-purple-950/30">
                            <div className="flex items-center gap-2 mb-2">
                              <Eye className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                              <span className="text-xs font-mono font-medium text-purple-700 dark:text-purple-300">
                                #shadow-root (open)
                              </span>
                            </div>
                            
                            {/* Shadow DOM Content */}
                            <div className={`ml-4 p-3 rounded-lg border-2 transition-all ${
                              selectedElement === 'shadow-button' 
                                ? 'border-green-500 bg-green-50 dark:bg-green-950/30 ring-4 ring-green-500 ring-opacity-50' 
                                : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950'
                            }`}>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                                  &lt;button class="shadow-btn"&gt;
                                </span>
                              </div>
                              <div className="px-3 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-medium rounded text-center">
                                Click Me!
                              </div>
                              {selectedElement === 'shadow-button' && (
                                <div className="mt-2 text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                                  <CheckCircle className="w-3 h-3" />
                                  Shadow Button Accessed & Clicked
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Visual Legend */}
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                      <h6 className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-2">Shadow DOM Boundaries:</h6>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 border-2 border-indigo-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Shadow Host (visible)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 border-2 border-purple-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Shadow Root (boundary)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 border-2 border-green-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Shadow Content (hidden)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Advanced Techniques */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <Code className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Advanced Shadow DOM Techniques
          </CardTitle>
          <CardDescription>Professional approaches for complex scenarios</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{advancedShadowDomCode[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(advancedShadowDomCode[selectedLanguage], 'Advanced Shadow DOM code')}
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
          <CardDescription>Troubleshooting Shadow DOM access</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Cannot Access Shadow Root</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Shadow DOM is 'closed' or doesn't exist.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Only 'open' Shadow DOM can be accessed. Check if element has Shadow DOM and if it's open.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Element Not Found in Shadow DOM</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Element selector is incorrect or element not yet loaded.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use explicit waits and verify element exists in Shadow DOM before interaction.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Stale Element Reference</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Shadow DOM was recreated after page update.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Re-access Shadow root and elements after page changes or dynamic updates.
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
            Shadow DOM Quick Reference
          </CardTitle>
          <CardDescription>Essential syntax and patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Access Shadow Root</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.execute_script("return arguments[0].shadowRoot", element)
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    (WebElement) js.executeScript("return arguments[0].shadowRoot", element)
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.executeScript('return arguments[0].shadowRoot', element)
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Find in Shadow DOM</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    shadow_root.find_element(By.CSS_SELECTOR, "button")
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    shadowRoot.findElement(By.cssSelector("button"))
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    shadowRoot.findElement(By.cssSelector('button'))
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

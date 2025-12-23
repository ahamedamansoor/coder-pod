'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Clock,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  Timer,
  Hourglass,
  Zap,
  AlertTriangle,
  CheckSquare,
  Eye,
  Activity,
  Target,
  Settings,
  TrendingUp
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function FluentWaits() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [waitState, setWaitState] = React.useState({
    elementFound: false,
    waitTime: 0,
    condition: '',
    currentElement: '',
    pollingInterval: 500
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

  const simulateFluentWaits = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setWaitState({ elementFound: false, waitTime: 0, condition: '', currentElement: '', pollingInterval: 500 });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, fluentWait: 7, condition: 10, timeout: 13, polling: 16, execute: 19, result: 22, quit: 25 };
      } else if (selectedLanguage === 'java') {
        return { init: 6, fluentWait: 9, condition: 12, timeout: 15, polling: 18, execute: 21, result: 24, quit: 27 };
      } else {
        return { init: 2, fluentWait: 5, condition: 8, timeout: 11, polling: 14, execute: 17, result: 20, quit: 22 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Fluent Waits demo...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '⏱️ Creating fluent wait...', delay: 1200 * multiplier, codeLine: lines.fluentWait, variable: { name: 'wait', value: '<FluentWait>' }, waitState: { elementFound: false, waitTime: 0, condition: 'created', currentElement: '', pollingInterval: 500 } },
      { step: 3, log: '🎯 Setting up wait condition...', delay: 700 * multiplier, codeLine: lines.condition, variable: { name: 'condition', value: 'visibility_of_element_located' }, waitState: { elementFound: false, waitTime: 0, condition: 'visibility', currentElement: 'submit-btn', pollingInterval: 500 } },
      { step: 4, log: '⏰ Configuring timeout (10 seconds)...', delay: 1200 * multiplier, codeLine: lines.timeout, variable: { name: 'timeout', value: '10s' }, waitState: { elementFound: false, waitTime: 10000, condition: 'visibility', currentElement: 'submit-btn', pollingInterval: 500 } },
      { step: 5, log: '🔄 Setting polling interval (500ms)...', delay: 700 * multiplier, codeLine: lines.polling, variable: { name: 'polling', value: '500ms' }, waitState: { elementFound: false, waitTime: 10000, condition: 'visibility', currentElement: 'submit-btn', pollingInterval: 500 } },
      { step: 6, log: '🔍 Executing fluent wait...', delay: 1200 * multiplier, codeLine: lines.execute, variable: { name: 'element', value: '<WebElement>' }, waitState: { elementFound: true, waitTime: 2500, condition: 'visibility', currentElement: 'submit-btn', pollingInterval: 500 } },
      { step: 7, log: '✅ Element found after 2.5 seconds!', delay: 700 * multiplier, codeLine: lines.result, variable: { name: 'found', value: 'true' }, waitState: { elementFound: true, waitTime: 2500, condition: 'completed', currentElement: 'submit-btn', pollingInterval: 500 } },
      { step: 8, log: '🎉 Fluent Waits demo completed!', delay: 500 * multiplier, codeLine: lines.quit, variable: { name: 'found', value: 'true' }, waitState: { elementFound: true, waitTime: 2500, condition: 'completed', currentElement: 'submit-btn', pollingInterval: 500 } },
    ];

    for (const { step, log, delay, codeLine, variable, waitState: newWaitState } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (newWaitState) {
        setWaitState(newWaitState);
      }
    }

    setIsRunning(false);
  };

  const getFluentWaitCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.support.ui import WebDriverWait',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# Create fluent wait with timeout',
        'wait = WebDriverWait(driver, 10)',
        '',
        '# Define wait condition',
        'condition = EC.visibility_of_element_located((By.ID, "submit-btn"))',
        '',
        '# Set timeout and polling',
        'wait.timeout = 10',
        'wait.polling_frequency = 0.5',
        '',
        '# Execute fluent wait',
        'element = wait.until(condition)',
        '',
        '# Element is now ready for interaction',
        'element.click()',
        '',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.support.ui.FluentWait;',
        'import org.openqa.selenium.support.ui.ExpectedConditions;',
        'import java.time.Duration;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'FluentWait<WebDriver> wait = new FluentWait<>(driver);',
        '',
        '// Configure fluent wait',
        'wait.withTimeout(Duration.ofSeconds(10));',
        'wait.pollingEvery(Duration.ofMillis(500));',
        'wait.ignoring(NoSuchElementException.class);',
        '',
        '// Define wait condition',
        'ExpectedCondition<WebElement> condition = ExpectedConditions.visibilityOfElementLocated(By.id("submit-btn"));',
        '',
        '// Execute fluent wait',
        'WebElement element = wait.until(condition);',
        '',
        '// Element is now ready for interaction',
        'element.click();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By, until } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Create fluent wait with timeout',
        'let wait = new WebDriverWait(driver, 10000);',
        '',
        '// Define wait condition',
        'let condition = until.elementLocated(By.id(\'submit-btn\'));',
        '',
        '// Set polling interval',
        'wait.pollingEvery(500);',
        '',
        '// Execute fluent wait',
        'let element = await wait.until(condition);',
        '',
        '// Element is now ready for interaction',
        'await element.click();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const fluentWaitExample = {
    python: getFluentWaitCode('python').join('\n'),
    java: getFluentWaitCode('java').join('\n'),
    javascript: getFluentWaitCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Fluent Waits"
        description="Advanced waiting with configurable polling and conditions"
        icon={Clock}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-600" />
            Fluent Waits with Selenium
          </CardTitle>
          <CardDescription>
            Configurable waiting with custom conditions and polling intervals
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Fluent Waits provide advanced waiting capabilities with configurable timeout, polling intervals, and custom conditions. They offer more control than basic waits and can handle complex scenarios.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Configurable Timeout:</strong> Set custom maximum wait times</li>
            <li><strong>Custom Polling:</strong> Control how frequently to check conditions</li>
            <li><strong>Ignore Exceptions:</strong> Skip specific exceptions during polling</li>
            <li><strong>Custom Conditions:</strong> Define complex wait conditions</li>
            <li><strong>Fluent Interface:</strong> Chain multiple configuration methods</li>
          </ul>

          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <Clock className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Advanced Control</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Use fluent waits for: dynamic content loading, AJAX operations, complex conditions, or when you need fine-grained control over wait behavior.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Fluent Wait operations in Python, Java, and JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent>
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

          <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl border-2 border-slate-300 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Fluent Wait Operations</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                  {selectedLanguage === 'python' && '🐍 Python'}
                  {selectedLanguage === 'java' && '☕ Java'}
                  {selectedLanguage === 'javascript' && '🟨 JavaScript'}
                </Badge>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-300">
                  {selectedLanguage === 'python' && `# ⏱️ Fluent Waits with Selenium Python

# 1️⃣ Initialize browser and imports
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()

# 2️⃣ Create fluent wait with timeout
wait = WebDriverWait(driver, 10)
print("⏰ Fluent wait created with 10s timeout")

# 3️⃣ Configure polling interval
wait.polling_frequency = 0.5  # 500ms
print("🔄 Polling interval set to 500ms")

# 4️⃣ Ignore specific exceptions
wait.ignore_exceptions = [NoSuchElementException, ElementNotVisibleException]
print("⚠️ Configured to ignore specific exceptions")

# 5️⃣ Define custom wait condition
condition = EC.visibility_of_element_located((By.ID, "submit-btn"))
print("🎯 Wait condition: visibility of submit button")

# 6️⃣ Execute fluent wait with timeout
element = wait.until(condition)
print(f"✅ Element found after waiting: {element.tag_name}")

# 7️⃣ Element is ready for interaction
element.click()
print("🖱️ Element clicked successfully")

driver.quit()`}
                  {selectedLanguage === 'java' && `// ⏱️ Fluent Waits with Selenium Java

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.NoSuchElementException;
import java.time.Duration;

// 1️⃣ Initialize browser
WebDriver driver = new ChromeDriver();

// 2️⃣ Create fluent wait instance
FluentWait<WebDriver> wait = new FluentWait<>(driver);
System.out.println("⏰ Fluent wait instance created");

// 3️⃣ Configure timeout (10 seconds)
wait.withTimeout(Duration.ofSeconds(10));
System.out.println("⏰ Timeout set to 10 seconds");

// 4️⃣ Configure polling interval (500ms)
wait.pollingEvery(Duration.ofMillis(500));
System.out.println("🔄 Polling interval set to 500ms");

// 5️⃣ Ignore specific exceptions
wait.ignoring(NoSuchElementException.class);
System.out.println("⚠️ Ignoring NoSuchElementException");

// 6️⃣ Define wait condition
ExpectedCondition<WebElement> condition = ExpectedConditions.visibilityOfElementLocated(By.id("submit-btn"));
System.out.println("🎯 Wait condition: visibility of submit button");

// 7️⃣ Execute fluent wait
WebElement element = wait.until(condition);
System.out.println("✅ Element found: " + element.getTagName());

// 8️⃣ Element is ready for interaction
element.click();
System.out.println("🖱️ Element clicked successfully");

driver.quit();`}
                  {selectedLanguage === 'javascript' && `// ⏱️ Fluent Waits with Selenium JavaScript

const { Builder, By, until, WebElement } = require('selenium-webdriver');

// 1️⃣ Initialize browser
let driver = await new Builder().forBrowser('chrome').build();
console.log("🌐 Browser initialized");

// 2️⃣ Create fluent wait with timeout
let wait = new WebDriverWait(driver, 10000); // 10 seconds
console.log("⏰ Fluent wait created with 10s timeout");

// 3️⃣ Configure polling interval
wait.pollingEvery(500); // 500ms
console.log("🔄 Polling interval set to 500ms");

// 4️⃣ Ignore specific exceptions
wait.ignoreErrors(['NoSuchElementException']);
console.log("⚠️ Ignoring NoSuchElementException");

// 5️⃣ Define wait condition
let condition = until.elementLocated(By.id('submit-btn'));
console.log("🎯 Wait condition: element located by ID");

// 6️⃣ Execute fluent wait
let element = await wait.until(condition);
console.log(\`✅ Element found: \${await element.getTagName()}\`);

// 7️⃣ Wait for element to be visible
element = await wait.until(until.elementIsVisible(element));
console.log("👁️ Element is now visible");

// 8️⃣ Element is ready for interaction
await element.click();
console.log("🖱️ Element clicked successfully");

await driver.quit();`}
                </code>
              </pre>
            </div>
            
            <div className="mt-4 grid grid-cols-4 gap-2">
              <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-2 text-center">
                <div className="text-purple-600 dark:text-purple-400 text-lg mb-1">⏰</div>
                <div className="text-xs font-medium text-purple-900 dark:text-purple-100">Timeout</div>
                <div className="text-[10px] text-purple-700 dark:text-purple-300">withTimeout()</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-2 text-center">
                <div className="text-blue-600 dark:text-blue-400 text-lg mb-1">🔄</div>
                <div className="text-xs font-medium text-blue-900 dark:text-blue-100">Polling</div>
                <div className="text-[10px] text-blue-700 dark:text-blue-300">pollingEvery()</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-2 text-center">
                <div className="text-orange-600 dark:text-orange-400 text-lg mb-1">⚠️</div>
                <div className="text-xs font-medium text-orange-900 dark:text-orange-100">Ignore</div>
                <div className="text-[10px] text-orange-700 dark:text-orange-300">ignoring()</div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-2 text-center">
                <div className="text-green-600 dark:text-green-400 text-lg mb-1">🎯</div>
                <div className="text-xs font-medium text-green-900 dark:text-green-100">Until</div>
                <div className="text-[10px] text-green-700 dark:text-green-300">until(condition)</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch fluent wait operations in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <Play className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Interactive Fluent Wait Demo</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Watch fluent wait operations with inline variable values. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-purple-600 dark:text-purple-400" />
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
                        ? 'border-purple-500 bg-purple-100 dark:bg-purple-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-purple-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-fluent"
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

          <div className="grid lg:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateFluentWaits}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
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
                    onClick={() => copyToClipboard(fluentWaitExample[selectedLanguage], 'Fluent Wait code')}
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
                    {getFluentWaitCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-purple-200 dark:bg-purple-900/50 border-l-4 border-purple-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-purple-900 dark:text-purple-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                        {currentCodeLine === index && (() => {
                          const getVariableName = (codeLine: string) => {
                            if (selectedLanguage === 'python') {
                              const match = codeLine.match(/^(\w+)\s*=/);
                              return match ? match[1] : null;
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
                      <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-950/30 rounded border border-purple-200 dark:border-purple-700">
                        <div className="text-[10px] font-bold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-purple-800 dark:text-purple-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-purple-600 dark:text-purple-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{fluentWaitExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Wait Status</h4>
                  <Badge variant="outline" className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                    Live
                  </Badge>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 overflow-hidden shadow-lg">
                  {/* Wait Header */}
                  <div className="bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-800 dark:to-pink-800 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Timer className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-semibold text-white">Fluent Wait Status</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${waitState.elementFound ? 'bg-green-400 animate-pulse' : 'bg-yellow-400 animate-pulse'}`}></div>
                        <span className="text-xs text-white/80">{waitState.elementFound ? 'Found' : 'Waiting'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Wait Content */}
                  <div className="p-6 min-h-[400px] bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                    {/* Wait Visualization */}
                    <div className="space-y-4">
                      {/* Wait Configuration */}
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700 p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                              <Settings className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                            </div>
                            <span className="text-sm font-bold text-purple-900 dark:text-purple-100">Wait Configuration</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Timeout:</span>
                              <span className="font-mono text-purple-600 dark:text-purple-400">{waitState.waitTime}ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Polling:</span>
                              <span className="font-mono text-blue-600 dark:text-blue-400">{waitState.pollingInterval}ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Condition:</span>
                              <span className="font-mono text-green-600 dark:text-green-400">{waitState.condition}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Target:</span>
                              <span className="font-mono text-orange-600 dark:text-orange-400">{waitState.currentElement || 'N/A'}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Wait Progress */}
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700 p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                              <Activity className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="text-sm font-bold text-blue-900 dark:text-blue-100">Wait Progress</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${waitState.elementFound ? 100 : 50}%` }}
                                ></div>
                              </div>
                              <span className="text-xs font-mono text-blue-600 dark:text-blue-400">
                                {waitState.elementFound ? '100%' : '50%'}
                              </span>
                            </div>
                            <div className="text-xs text-blue-700 dark:text-blue-300">
                              {waitState.elementFound ? '✅ Condition satisfied' : '⏳ Waiting for condition...'}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Element Status */}
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700 p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                              <Target className="w-3 h-3 text-green-600 dark:text-green-400" />
                            </div>
                            <span className="text-sm font-bold text-green-900 dark:text-green-100">Element Status</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${waitState.elementFound ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                              <span className="text-xs text-green-700 dark:text-green-300">
                                {waitState.elementFound ? 'Element found and ready' : 'Searching for element...'}
                              </span>
                            </div>
                            {waitState.currentElement && (
                              <div className="text-xs font-mono text-green-600 dark:text-green-400">
                                Target: #{waitState.currentElement}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Wait Statistics */}
                      <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                          <TrendingUp className="w-3 h-3" />
                          Wait Statistics
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Wait Type:</span>
                              <span className="font-mono text-purple-600 dark:text-purple-400">Fluent Wait</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Polls:</span>
                              <span className="font-mono text-blue-600 dark:text-blue-400">
                                {waitState.waitTime > 0 ? Math.ceil(waitState.waitTime / waitState.pollingInterval) : 0}
                              </span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Elapsed:</span>
                              <span className="font-mono text-green-600 dark:text-green-400">{waitState.waitTime}ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Status:</span>
                              <span className="font-mono text-orange-600 dark:text-orange-400">
                                {waitState.elementFound ? 'Success' : 'Waiting'}
                              </span>
                            </div>
                          </div>
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-green-600" />
            Fluent Wait Methods
          </CardTitle>
          <CardDescription>Essential fluent wait configuration methods</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">Timeout</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">withTimeout()</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                wait.withTimeout(Duration.ofSeconds(10))
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Polling</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">pollingEvery()</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                wait.pollingEvery(Duration.ofMillis(500))
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-600 mb-2">Ignore</Badge>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">ignoring()</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                wait.ignoring(NoSuchElementException.class)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Execute</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">until()</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                element = wait.until(condition)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Reasonable Timeouts</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Set appropriate timeout values based on application response times
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Optimal Polling</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Balance polling frequency between responsiveness and resource usage
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Specific Conditions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use precise wait conditions instead of generic presence checks
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Exception Handling</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Handle timeout exceptions gracefully with meaningful error messages
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Fluent Wait Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Custom Conditions</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Build Your Own Conditions</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Custom wait condition<br/>
                def custom_condition(driver):<br/>
                &nbsp;&nbsp;element = driver.find_element(By.ID, "status")<br/>
                &nbsp;&nbsp;return element.text == "Complete"<br/>
                <br/>
                # Use with fluent wait<br/>
                wait.until(custom_condition)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">Chain Configuration</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Fluent Interface</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Chain multiple configurations<br/>
                wait = WebDriverWait(driver, 10)<br/>
                &nbsp;&nbsp;.polling_every(0.5)<br/>
                &nbsp;&nbsp;.ignore_exceptions(NoSuchElementException)<br/>
                &nbsp;&nbsp;.with_message("Element not found within timeout")
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Multiple Conditions</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Wait for Multiple Elements</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Wait for multiple conditions<br/>
                conditions = [<br/>
                &nbsp;&nbsp;EC.visibility_of_element_located((By.ID, "button1")),<br/>
                &nbsp;&nbsp;EC.visibility_of_element_located((By.ID, "button2"))<br/>
                ]<br/>
                <br/>
                # Wait for all conditions<br/>
                for condition in conditions:<br/>
                &nbsp;&nbsp;wait.until(condition)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

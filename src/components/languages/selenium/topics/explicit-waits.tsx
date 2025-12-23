'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Timer,
  Code,
  Copy,
  CheckCircle,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  Target,
  Eye,
  MousePointer,
  Activity,
  Zap,
  Clock
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

const ExplicitWaits = () => {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [explicitState, setExplicitState] = React.useState({
    waitCreated: false,
    waitingForVisible: false,
    waitingForClickable: false,
    waitingForText: false,
    elementVisible: false,
    elementClickable: false,
    textPresent: false,
    currentCondition: ''
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

  const simulateExplicitWait = async () => {
    setIsRunning(true);
    setCurrentStep(0);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setExplicitState({
      waitCreated: false,
      waitingForVisible: false,
      waitingForClickable: false,
      waitingForText: false,
      elementVisible: false,
      elementClickable: false,
      textPresent: false,
      currentCondition: ''
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 6, nav: 9, wait: 12, visible: 15, clickable: 18, text: 21, click: 24, quit: 27 };
      } else if (selectedLanguage === 'java') {
        return { init: 7, nav: 10, wait: 13, visible: 16, clickable: 19, text: 22, click: 25, quit: 28 };
      } else {
        return { init: 3, nav: 5, wait: 8, visible: 11, clickable: 14, text: 17, click: 20, quit: 22 };
      }
    };
    const lines = getCodeLines();

    const steps = [
      { step: 0, log: '🚀 Starting Explicit Wait demonstration...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '🌐 Initializing Chrome WebDriver...', delay: 600 * multiplier, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔗 Navigating to dynamic page...', delay: 800 * multiplier, codeLine: lines.nav, variable: { name: 'driver', value: 'https://example.com/dynamic' } },
      { step: 3, log: '⏳ Creating WebDriverWait instance (10 second timeout)...', delay: 1000 * multiplier, codeLine: lines.wait, action: 'waitCreated', variable: { name: 'wait', value: '<WebDriverWait: 10s>' } },
      { step: 4, log: '👁️ Waiting for element to be visible...', delay: 800 * multiplier, codeLine: lines.visible, action: 'waitingVisible' },
      { step: 5, log: '⏳ Polling for visibility condition...', delay: 1500 * multiplier, codeLine: lines.visible, action: 'pollingVisible' },
      { step: 6, log: '✅ Element is now visible!', delay: 600 * multiplier, codeLine: lines.visible, action: 'visible', variable: { name: 'visible_element', value: '<WebElement: div>' } },
      { step: 7, log: '🖱️ Waiting for element to be clickable...', delay: 800 * multiplier, codeLine: lines.clickable, action: 'waitingClickable' },
      { step: 8, log: '⏳ Polling for clickable condition...', delay: 1200 * multiplier, codeLine: lines.clickable, action: 'pollingClickable' },
      { step: 9, log: '✅ Element is now clickable!', delay: 600 * multiplier, codeLine: lines.clickable, action: 'clickable', variable: { name: 'clickable_element', value: '<WebElement: button>' } },
      { step: 10, log: '📝 Waiting for text to be present...', delay: 800 * multiplier, codeLine: lines.text, action: 'waitingText' },
      { step: 11, log: '⏳ Polling for text condition...', delay: 1000 * multiplier, codeLine: lines.text, action: 'pollingText' },
      { step: 12, log: '✅ Text "Success" is now present!', delay: 600 * multiplier, codeLine: lines.text, action: 'textPresent', variable: { name: 'status_element', value: '<WebElement: span>' } },
      { step: 13, log: '🎯 Clicking the ready element...', delay: 1000 * multiplier, codeLine: lines.click },
      { step: 14, log: '🎉 Explicit Wait demo completed! All conditions satisfied.', delay: 500 * multiplier, codeLine: lines.quit },
    ];

    for (const { step, log, delay, codeLine, variable, action } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (action === 'waitCreated') {
        setExplicitState(prev => ({ ...prev, waitCreated: true }));
      } else if (action === 'waitingVisible') {
        setExplicitState(prev => ({ ...prev, waitingForVisible: true, currentCondition: 'visibility_of_element_located' }));
      } else if (action === 'pollingVisible') {
        setExplicitState(prev => ({ ...prev, currentCondition: 'visibility_of_element_located' }));
      } else if (action === 'visible') {
        setExplicitState(prev => ({ ...prev, waitingForVisible: false, elementVisible: true }));
      } else if (action === 'waitingClickable') {
        setExplicitState(prev => ({ ...prev, waitingForClickable: true, currentCondition: 'element_to_be_clickable' }));
      } else if (action === 'pollingClickable') {
        setExplicitState(prev => ({ ...prev, currentCondition: 'element_to_be_clickable' }));
      } else if (action === 'clickable') {
        setExplicitState(prev => ({ ...prev, waitingForClickable: false, elementClickable: true }));
      } else if (action === 'waitingText') {
        setExplicitState(prev => ({ ...prev, waitingForText: true, currentCondition: 'text_to_be_present_in_element' }));
      } else if (action === 'pollingText') {
        setExplicitState(prev => ({ ...prev, currentCondition: 'text_to_be_present_in_element' }));
      } else if (action === 'textPresent') {
        setExplicitState(prev => ({ ...prev, waitingForText: false, textPresent: true }));
      }
    }

    setIsRunning(false);
  };

  const getExplicitWaitCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.support.ui import WebDriverWait',
        'from selenium.webdriver.support import expected_conditions as EC',
        'import time',
        '',
        '# 🚀 Initialize WebDriver',
        'driver = webdriver.Chrome()',
        '',
        '# 🌐 Navigate to page',
        'driver.get("https://example.com/dynamic")',
        '',
        '# ⏳ CREATE EXPLICIT WAIT (specific timeout)',
        'wait = WebDriverWait(driver, 10)  # 10 second maximum wait',
        '',
        '# 👁️ WAIT FOR ELEMENT TO BE VISIBLE',
        'visible_element = wait.until(',
        '    EC.visibility_of_element_located((By.ID, "dynamic-content"))',
        ')',
        'print(f"✅ Element visible: {visible_element.text}")',
        '',
        '# 🖱️ WAIT FOR ELEMENT TO BE CLICKABLE',
        'clickable_element = wait.until(',
        '    EC.element_to_be_clickable((By.ID, "submit-button"))',
        ')',
        'print(f"✅ Element clickable: {clickable_element.text}")',
        '',
        '# 📝 WAIT FOR TEXT TO BE PRESENT',
        'status_element = wait.until(',
        '    EC.text_to_be_present_in_element((By.ID, "status"), "Success")',
        ')',
        'print(f"✅ Status updated: {status_element.text}")',
        '',
        '# 🎯 INTERACT WITH READY ELEMENTS',
        'clickable_element.click()',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import org.openqa.selenium.support.ui.WebDriverWait;',
        'import org.openqa.selenium.support.ui.ExpectedConditions;',
        'import java.time.Duration;',
        '',
        '// 🚀 Initialize WebDriver',
        'WebDriver driver = new ChromeDriver();',
        '',
        '// 🌐 Navigate to page',
        'driver.get("https://example.com/dynamic");',
        '',
        '// ⏳ CREATE EXPLICIT WAIT (specific timeout)',
        'WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));',
        '',
        '// 👁️ WAIT FOR ELEMENT TO BE VISIBLE',
        'WebElement visibleElement = wait.until(',
        '    ExpectedConditions.visibilityOfElementLocated(By.id("dynamic-content"))',
        ');',
        'System.out.println("✅ Element visible: " + visibleElement.getText());',
        '',
        '// 🖱️ WAIT FOR ELEMENT TO BE CLICKABLE',
        'WebElement clickableElement = wait.until(',
        '    ExpectedConditions.elementToBeClickable(By.id("submit-button"))',
        ');',
        'System.out.println("✅ Element clickable: " + clickableElement.getText());',
        '',
        '// 📝 WAIT FOR TEXT TO BE PRESENT',
        'WebElement statusElement = wait.until(',
        '    ExpectedConditions.textToBePresentInElementLocated(By.id("status"), "Success")',
        ');',
        'System.out.println("✅ Status updated: " + statusElement.getText());',
        '',
        '// 🎯 INTERACT WITH READY ELEMENTS',
        'clickableElement.click();',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By, until } = require(\'selenium-webdriver\');',
        '',
        '// 🚀 Initialize WebDriver',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// 🌐 Navigate to page',
        'await driver.get(\'https://example.com/dynamic\');',
        '',
        '// ⏳ CREATE EXPLICIT WAIT (10 second timeout)',
        'const wait = driver.wait.bind(driver);',
        '',
        '// 👁️ WAIT FOR ELEMENT TO BE VISIBLE',
        'let visibleElement = await wait(',
        '  until.elementLocated(By.id(\'dynamic-content\')), 10000',
        ');',
        'await wait(until.elementIsVisible(visibleElement), 10000);',
        'console.log(\'✅ Element visible:\', await visibleElement.getText());',
        '',
        '// 🖱️ WAIT FOR ELEMENT TO BE CLICKABLE',
        'let clickableElement = await wait(',
        '  until.elementLocated(By.id(\'submit-button\')), 10000',
        ');',
        'await wait(until.elementIsEnabled(clickableElement), 10000);',
        'console.log(\'✅ Element clickable:\', await clickableElement.getText());',
        '',
        '// 📝 WAIT FOR TEXT TO BE PRESENT',
        'let statusElement = await wait(',
        '  until.elementLocated(By.id(\'status\')), 10000',
        ');',
        'await wait(until.elementTextContains(statusElement, \'Success\'), 10000);',
        'console.log(\'✅ Status updated:\', await statusElement.getText());',
        '',
        '// 🎯 INTERACT WITH READY ELEMENTS',
        'await clickableElement.click();',
        'await driver.quit();',
      ];
    }
  };

  const explicitWaitExample = {
    python: getExplicitWaitCode('python').join('\n'),
    java: getExplicitWaitCode('java').join('\n'),
    javascript: getExplicitWaitCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Explicit Waits"
        description="Precise conditional waiting for specific elements and states"
        icon={Timer}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            Understanding Explicit Waits
          </CardTitle>
          <CardDescription>
            Wait for specific conditions on specific elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Explicit waits allow you to wait for specific conditions to occur before proceeding with your test. They provide precise control over when to continue execution.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-purple-600" />
                <Badge className="bg-purple-600">Visibility</Badge>
              </div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Wait for Visible</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Elements must be present AND visible on the page
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer className="w-5 h-5 text-blue-600" />
                <Badge className="bg-blue-600">Clickable</Badge>
              </div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Wait for Clickable</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Elements must be visible, enabled, and not obscured
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-green-600" />
                <Badge className="bg-green-600">Text Present</Badge>
              </div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Wait for Text</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Wait for specific text to appear in elements
              </p>
            </div>
          </div>

          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <Zap className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Key Advantage</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Explicit waits are more efficient than implicit waits because they only wait as long as needed for specific conditions, not a fixed timeout for every operation.
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
            Explicit wait implementation with multiple conditions
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
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Explicit Wait Operations</span>
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
                  {selectedLanguage === 'python' && `# 🎯 Explicit Wait in Selenium Python

# ⏳ CREATE WAIT INSTANCE (specific timeout)
wait = WebDriverWait(driver, 10)  # Maximum 10 seconds wait

# 👁️ 1️⃣ WAIT FOR ELEMENT TO BE VISIBLE
visible_element = wait.until(
    EC.visibility_of_element_located((By.ID, "dynamic-content"))
)
print(f"✅ Element visible: {visible_element.text}")

# 🖱️ 2️⃣ WAIT FOR ELEMENT TO BE CLICKABLE
clickable_element = wait.until(
    EC.element_to_be_clickable((By.ID, "submit-button"))
)
print(f"✅ Element clickable: {clickable_element.text}")

# 📝 3️⃣ WAIT FOR TEXT TO BE PRESENT
status_element = wait.until(
    EC.text_to_be_present_in_element((By.ID, "status"), "Success")
)
print(f"✅ Status updated: {status_element.text}")

# 🎯 BENEFIT: Precise control, efficient waiting!`}
                  {selectedLanguage === 'java' && `// 🎯 Explicit Wait in Selenium Java

// ⏳ CREATE WAIT INSTANCE (specific timeout)
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

// 👁️ 1️⃣ WAIT FOR ELEMENT TO BE VISIBLE
WebElement visibleElement = wait.until(
    ExpectedConditions.visibilityOfElementLocated(By.id("dynamic-content"))
);
System.out.println("✅ Element visible: " + visibleElement.getText());

// 🖱️ 2️⃣ WAIT FOR ELEMENT TO BE CLICKABLE
WebElement clickableElement = wait.until(
    ExpectedConditions.elementToBeClickable(By.id("submit-button"))
);
System.out.println("✅ Element clickable: " + clickableElement.getText());

// 📝 3️⃣ WAIT FOR TEXT TO BE PRESENT
WebElement statusElement = wait.until(
    ExpectedConditions.textToBePresentInElementLocated(By.id("status"), "Success")
);
System.out.println("✅ Status updated: " + statusElement.getText());

// 🎯 BENEFIT: Precise control, efficient waiting!`}
                  {selectedLanguage === 'javascript' && `// 🎯 Explicit Wait in Selenium JavaScript

// ⏳ CREATE WAIT FUNCTION (10 second timeout)
const wait = driver.wait.bind(driver);

// 👁️ 1️⃣ WAIT FOR ELEMENT TO BE VISIBLE
let visibleElement = await wait(
  until.elementLocated(By.id('dynamic-content')), 10000
);
await wait(until.elementIsVisible(visibleElement), 10000);
console.log('✅ Element visible:', await visibleElement.getText());

// 🖱️ 2️⃣ WAIT FOR ELEMENT TO BE CLICKABLE
let clickableElement = await wait(
  until.elementLocated(By.id('submit-button')), 10000
);
await wait(until.elementIsEnabled(clickableElement), 10000);
console.log('✅ Element clickable:', await clickableElement.getText());

// 📝 3️⃣ WAIT FOR TEXT TO BE PRESENT
let statusElement = await wait(
  until.elementLocated(By.id('status')), 10000
);
await wait(until.elementTextContains(statusElement, 'Success'), 10000);
console.log('✅ Status updated:', await statusElement.getText());

// 🎯 BENEFIT: Precise control, efficient waiting!`}
                </code>
              </pre>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-2 text-center">
                <div className="text-purple-600 dark:text-purple-400 text-lg mb-1">🎯</div>
                <div className="text-xs font-medium text-purple-900 dark:text-purple-100">Precise</div>
                <div className="text-[10px] text-purple-700 dark:text-purple-300">Specific conditions</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-2 text-center">
                <div className="text-blue-600 dark:text-blue-400 text-lg mb-1">⚡</div>
                <div className="text-xs font-medium text-blue-900 dark:text-blue-100">Efficient</div>
                <div className="text-[10px] text-blue-700 dark:text-blue-300">No unnecessary waiting</div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-2 text-center">
                <div className="text-green-600 dark:text-green-400 text-lg mb-1">🔧</div>
                <div className="text-xs font-medium text-green-900 dark:text-green-100">Flexible</div>
                <div className="text-[10px] text-green-700 dark:text-green-300">Multiple conditions</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="w-5 h-5 text-purple-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch explicit waits handle multiple conditions efficiently
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <Play className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Explicit Wait Demo</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              See how explicit waits efficiently handle different conditions: visibility, clickability, and text presence.
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
                      name="speed-explicit"
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
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Execution</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateExplicitWait}
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
                    onClick={() => copyToClipboard(explicitWaitExample[selectedLanguage], 'Explicit wait code')}
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
                    {getExplicitWaitCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{explicitWaitExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Wait Conditions Status</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                      </div>
                      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-mono text-white/90 border border-white/20">
                        https://example.com/dynamic
                      </div>
                      <div className="flex items-center gap-2">
                        {explicitState.waitCreated && (
                          <Badge className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-2 py-1">
                            <Timer className="w-3 h-3 mr-1" />
                            WebDriverWait
                          </Badge>
                        )}
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 min-h-[400px] bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                    <div className="space-y-4">
                      {/* WebDriverWait Created */}
                      <div className={`p-4 rounded-lg border-2 transition-all ${
                        currentStep >= 3 && currentStep <= 4
                          ? 'border-purple-500 bg-purple-100 dark:bg-purple-950/50 shadow-lg scale-105'
                          : explicitState.waitCreated
                          ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                          : 'border-slate-200 dark:border-slate-700'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-slate-100">
                              {currentStep >= 3 ? 'WebDriverWait Created' : 'Waiting for WebDriverWait'}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                              {explicitState.waitCreated ? '10 second maximum timeout configured' : 'Not yet created'}
                            </div>
                          </div>
                          {explicitState.waitCreated && <Timer className="w-6 h-6 text-green-600" />}
                        </div>
                      </div>

                      {/* Condition Progress */}
                      {currentStep >= 4 && (
                        <div className="space-y-3">
                          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">Condition Progress:</div>
                          
                          {/* Visibility Condition */}
                          <div className={`p-3 rounded-lg border transition-all ${
                            currentStep === 4 || currentStep === 5 || currentStep === 6
                              ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
                              : currentStep > 6
                              ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                              : 'border-slate-200 dark:border-slate-700'
                          }`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Eye className="w-4 h-4" />
                                <span className="text-sm font-medium">Element Visible</span>
                                {explicitState.currentCondition === 'visibility_of_element_located' && (
                                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                )}
                              </div>
                              <span className="text-xs text-slate-600 dark:text-slate-400">
                                {currentStep > 6 ? '✅ Satisfied' : 
                                 explicitState.waitingForVisible ? '⏳ Polling...' : 
                                 '⏸️ Pending'}
                              </span>
                            </div>
                          </div>

                          {/* Clickable Condition */}
                          <div className={`p-3 rounded-lg border transition-all ${
                            currentStep === 7 || currentStep === 8 || currentStep === 9
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                              : currentStep > 9
                              ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                              : 'border-slate-200 dark:border-slate-700'
                          }`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <MousePointer className="w-4 h-4" />
                                <span className="text-sm font-medium">Element Clickable</span>
                                {explicitState.currentCondition === 'element_to_be_clickable' && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                )}
                              </div>
                              <span className="text-xs text-slate-600 dark:text-slate-400">
                                {currentStep > 9 ? '✅ Satisfied' : 
                                 explicitState.waitingForClickable ? '⏳ Polling...' : 
                                 '⏸️ Pending'}
                              </span>
                            </div>
                          </div>

                          {/* Text Condition */}
                          <div className={`p-3 rounded-lg border transition-all ${
                            currentStep === 10 || currentStep === 11 || currentStep === 12
                              ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                              : currentStep > 12
                              ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                              : 'border-slate-200 dark:border-slate-700'
                          }`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4" />
                                <span className="text-sm font-medium">Text Present</span>
                                {explicitState.currentCondition === 'text_to_be_present_in_element' && (
                                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                )}
                              </div>
                              <span className="text-xs text-slate-600 dark:text-slate-400">
                                {currentStep > 12 ? '✅ "Success" found' : 
                                 explicitState.waitingForText ? '⏳ Polling...' : 
                                 '⏸️ Pending'}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Success Message */}
                      {currentStep >= 14 && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-green-900 dark:text-green-100">
                                All Conditions Satisfied!
                              </div>
                              <div className="text-xs text-green-700 dark:text-green-300">
                                Explicit waits completed efficiently with precise timing
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
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
            <CheckCircle className="w-5 h-5 text-green-600" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Specific Conditions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Wait for exact conditions like clickable or visible instead of just presence
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Reasonable Timeouts</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Set appropriate timeouts based on actual page load times
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Chain Conditions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Combine multiple conditions for complex scenarios
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Handle Timeouts</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always catch and handle TimeoutException appropriately
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            Common Issues & Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert className="border-red-200 dark:border-red-700">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <AlertTitle className="text-red-900 dark:text-red-100">TimeoutException</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Element not found within timeout period<br/>
                <strong>Solution:</strong> Increase timeout or check if locator is correct and element actually exists
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">StaleElementReferenceException</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Element was found but became stale before interaction<br/>
                <strong>Solution:</strong> Re-locate the element after waiting or use explicit waits right before interaction
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Wrong Condition Used</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Using visibility when you need clickability<br/>
                <strong>Solution:</strong> Choose the right condition for your specific use case
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { ExplicitWaits };

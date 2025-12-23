'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  CheckCircle2,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Eye,
  MousePointer,
  FileText,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ExpectedConditions() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [conditionState, setConditionState] = React.useState({
    visible: false,
    clickable: false,
    textPresent: false,
    invisible: false
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

  const simulateExpectedConditions = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setConditionState({
      visible: false,
      clickable: false,
      textPresent: false,
      invisible: false
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 8, visible: 11, clickable: 14, text: 17, invisible: 20, quit: 23 };
      } else if (selectedLanguage === 'java') {
        return { nav: 9, visible: 12, clickable: 15, text: 18, invisible: 21, quit: 23 };
      } else {
        return { nav: 4, visible: 7, clickable: 10, text: 13, invisible: 16, quit: 18 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Expected Conditions demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading dynamic page...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '👁️ Waiting for element to be visible...', delay: 1200 * multiplier, element: null, codeLine: lines.visible },
      { step: 3, log: '✅ Element is now visible', delay: 700 * multiplier, element: 'visible', codeLine: lines.visible, action: 'visible', variable: { name: 'visible_element', value: '<WebElement: div#content>' } },
      { step: 4, log: '🖱️ Waiting for element to be clickable...', delay: 1200 * multiplier, element: 'visible', codeLine: lines.clickable, variable: { name: 'visible_element', value: '<WebElement: div#content>' } },
      { step: 5, log: '✅ Element is now clickable', delay: 700 * multiplier, element: 'clickable', codeLine: lines.clickable, action: 'clickable', variable: { name: 'clickable_btn', value: '<WebElement: button#submit>' } },
      { step: 6, log: '📝 Waiting for text to be present...', delay: 1200 * multiplier, element: 'clickable', codeLine: lines.text, variable: { name: 'clickable_btn', value: '<WebElement: button#submit>' } },
      { step: 7, log: '✅ Text "Success" is present', delay: 700 * multiplier, element: 'text', codeLine: lines.text, action: 'text' },
      { step: 8, log: '👻 Waiting for loading spinner to disappear...', delay: 1200 * multiplier, element: 'text', codeLine: lines.invisible },
      { step: 9, log: '✅ Loading spinner is now invisible', delay: 700 * multiplier, element: 'invisible', codeLine: lines.invisible, action: 'invisible' },
      { step: 10, log: '🎉 All expected conditions satisfied!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
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
      
      if (action === 'visible') {
        setConditionState(prev => ({ ...prev, visible: true }));
      } else if (action === 'clickable') {
        setConditionState(prev => ({ ...prev, clickable: true }));
      } else if (action === 'text') {
        setConditionState(prev => ({ ...prev, textPresent: true }));
      } else if (action === 'invisible') {
        setConditionState(prev => ({ ...prev, invisible: true }));
      }
    }

    setIsRunning(false);
  };

  const getExpectedConditionsCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.support.ui import WebDriverWait',
        'from selenium.webdriver.support import expected_conditions as EC',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to page',
        'driver.get("https://www.example.com")',
        'wait = WebDriverWait(driver, 10)',
        '',
        '# Wait for element to be visible',
        'visible_element = wait.until(EC.visibility_of_element_located((By.ID, "content")))',
        '',
        '# Wait for element to be clickable',
        'clickable_btn = wait.until(EC.element_to_be_clickable((By.ID, "submit")))',
        '',
        '# Wait for text to be present in element',
        'wait.until(EC.text_to_be_present_in_element((By.ID, "status"), "Success"))',
        '',
        '# Wait for element to become invisible',
        'wait.until(EC.invisibility_of_element_located((By.ID, "loading")))',
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
        'import org.openqa.selenium.support.ui.WebDriverWait;',
        'import org.openqa.selenium.support.ui.ExpectedConditions;',
        'import java.time.Duration;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com");',
        'WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));',
        '',
        '// Wait for element to be visible',
        'WebElement visibleElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("content")));',
        '',
        '// Wait for element to be clickable',
        'WebElement clickableBtn = wait.until(ExpectedConditions.elementToBeClickable(By.id("submit")));',
        '',
        '// Wait for text to be present in element',
        'wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id("status"), "Success"));',
        '',
        '// Wait for element to become invisible',
        'wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("loading")));',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By, until } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com\');',
        '',
        '// Wait for element to be visible',
        'let visibleElement = await driver.wait(',
        '  until.elementLocated(By.id(\'content\')), 10000',
        ');',
        'await driver.wait(until.elementIsVisible(visibleElement), 10000);',
        '',
        '// Wait for element to be clickable',
        'let clickableBtn = await driver.wait(',
        '  until.elementLocated(By.id(\'submit\')), 10000',
        ');',
        'await driver.wait(until.elementIsEnabled(clickableBtn), 10000);',
        '',
        '// Wait for element to become stale (removed from DOM)',
        'await driver.wait(until.stalenessOf(visibleElement), 10000);',
        '',
        'await driver.quit();',
      ];
    }
  };

  const expectedConditionsExample = {
    python: getExpectedConditionsCode('python').join('\n'),
    java: getExpectedConditionsCode('java').join('\n'),
    javascript: getExpectedConditionsCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Expected Conditions"
        description="Predefined conditions for explicit waits in Selenium"
        icon={CheckCircle2}
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            What are Expected Conditions?
          </CardTitle>
          <CardDescription>
            Ready-to-use conditions for explicit waits
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Expected Conditions are predefined conditions provided by Selenium for use with explicit waits. They cover common scenarios like waiting for elements to be visible, clickable, or for text to appear.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Visibility:</strong> Wait for elements to become visible or invisible</li>
            <li><strong>Clickability:</strong> Wait for elements to be clickable</li>
            <li><strong>Presence:</strong> Wait for elements to be present in DOM</li>
            <li><strong>Text:</strong> Wait for specific text to appear</li>
            <li><strong>Alerts:</strong> Wait for alerts to be present</li>
          </ul>

          <Alert className="border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950/20">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Use Expected Conditions?</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              They provide robust, tested conditions that handle edge cases and make your code more readable and maintainable.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Expected conditions syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-green-600 text-green-600 dark:text-green-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
                {selectedLanguage === 'python' && `from selenium.webdriver.support import expected_conditions as EC

wait = WebDriverWait(driver, 10)

# Element presence
element = wait.until(EC.presence_of_element_located((By.ID, "myId")))

# Element visibility
visible = wait.until(EC.visibility_of_element_located((By.ID, "myId")))

# Element clickable
clickable = wait.until(EC.element_to_be_clickable((By.ID, "button")))

# Text present
wait.until(EC.text_to_be_present_in_element((By.ID, "status"), "Done"))

# Element invisible
wait.until(EC.invisibility_of_element_located((By.ID, "loading")))

# Alert present
wait.until(EC.alert_is_present())

# Title contains
wait.until(EC.title_contains("Dashboard"))

# Frame available and switch
wait.until(EC.frame_to_be_available_and_switch_to_it((By.ID, "iframe")))`}
                {selectedLanguage === 'java' && `import org.openqa.selenium.support.ui.ExpectedConditions;

WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

// Element presence
WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("myId")));

// Element visibility
WebElement visible = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("myId")));

// Element clickable
WebElement clickable = wait.until(ExpectedConditions.elementToBeClickable(By.id("button")));

// Text present
wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id("status"), "Done"));

// Element invisible
wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("loading")));

// Alert present
wait.until(ExpectedConditions.alertIsPresent());

// Title contains
wait.until(ExpectedConditions.titleContains("Dashboard"));

// Frame available and switch
wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(By.id("iframe")));`}
                {selectedLanguage === 'javascript' && `const { until } = require('selenium-webdriver');

// Element located
let element = await driver.wait(
  until.elementLocated(By.id('myId')), 10000
);

// Element visible
await driver.wait(until.elementIsVisible(element), 10000);

// Element enabled (clickable)
await driver.wait(until.elementIsEnabled(element), 10000);

// Element not visible
await driver.wait(until.elementIsNotVisible(element), 10000);

// Title contains
await driver.wait(until.titleContains('Dashboard'), 10000);

// Title matches
await driver.wait(until.titleMatches(/Dashboard/), 10000);

// Alert present
await driver.wait(until.alertIsPresent(), 10000);

// Element stale
await driver.wait(until.stalenessOf(element), 10000);`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch expected conditions evaluate in real-time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Expected Conditions Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch different expected conditions evaluate: visibility, clickability, text presence, and invisibility. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-lg border-2 border-green-200 dark:border-green-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-green-600 dark:text-green-400" />
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
                        ? 'border-green-500 bg-green-100 dark:bg-green-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-green-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-ec"
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
                  <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateExpectedConditions}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
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
                    onClick={() => copyToClipboard(expectedConditionsExample[selectedLanguage], 'Expected Conditions code')}
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
                    {getExpectedConditionsCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-green-200 dark:bg-green-900/50 border-l-4 border-green-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-green-900 dark:text-green-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/30 rounded border border-green-200 dark:border-green-700">
                        <div className="text-[10px] font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-green-800 dark:text-green-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-green-600 dark:text-green-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{expectedConditionsExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Condition States</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px] space-y-4">
                  {/* Visibility */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'visible'
                      ? 'border-green-500 bg-green-100 dark:bg-green-950/50 shadow-lg scale-105'
                      : conditionState.visible
                      ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">Visibility</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">visibility_of_element_located</div>
                      </div>
                      {conditionState.visible ? <Eye className="w-6 h-6 text-green-600" /> : <Eye className="w-6 h-6 text-slate-400 opacity-50" />}
                    </div>
                  </div>

                  {/* Clickability */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'clickable'
                      ? 'border-green-500 bg-green-100 dark:bg-green-950/50 shadow-lg scale-105'
                      : conditionState.clickable
                      ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">Clickability</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">element_to_be_clickable</div>
                      </div>
                      {conditionState.clickable ? <MousePointer className="w-6 h-6 text-green-600" /> : <MousePointer className="w-6 h-6 text-slate-400 opacity-50" />}
                    </div>
                  </div>

                  {/* Text Present */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'text'
                      ? 'border-green-500 bg-green-100 dark:bg-green-950/50 shadow-lg scale-105'
                      : conditionState.textPresent
                      ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">Text Present</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">text_to_be_present_in_element</div>
                      </div>
                      {conditionState.textPresent ? <FileText className="w-6 h-6 text-green-600" /> : <FileText className="w-6 h-6 text-slate-400 opacity-50" />}
                    </div>
                  </div>

                  {/* Invisibility */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'invisible'
                      ? 'border-green-500 bg-green-100 dark:bg-green-950/50 shadow-lg scale-105'
                      : conditionState.invisible
                      ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">Invisibility</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">invisibility_of_element_located</div>
                      </div>
                      {conditionState.invisible ? <CheckCircle className="w-6 h-6 text-green-600" /> : <RefreshCw className="w-6 h-6 text-slate-400 opacity-50" />}
                    </div>
                  </div>

                  {currentStep >= 10 && (
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">All conditions satisfied!</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Common Expected Conditions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            Common Expected Conditions
          </CardTitle>
          <CardDescription>Most frequently used conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { name: 'presence_of_element_located', desc: 'Element exists in DOM', color: 'from-blue-50 to-sky-50 border-blue-200' },
              { name: 'visibility_of_element_located', desc: 'Element is visible', color: 'from-green-50 to-teal-50 border-green-200' },
              { name: 'element_to_be_clickable', desc: 'Element is clickable', color: 'from-purple-50 to-fuchsia-50 border-purple-200' },
              { name: 'invisibility_of_element', desc: 'Element is invisible', color: 'from-orange-50 to-yellow-50 border-orange-200' },
              { name: 'text_to_be_present_in_element', desc: 'Text appears in element', color: 'from-pink-50 to-rose-50 border-pink-200' },
              { name: 'alert_is_present', desc: 'Alert dialog appears', color: 'from-indigo-50 to-blue-50 border-indigo-200' },
              { name: 'title_contains', desc: 'Page title contains text', color: 'from-emerald-50 to-green-50 border-emerald-200' },
              { name: 'frame_to_be_available', desc: 'Frame is available', color: 'from-amber-50 to-orange-50 border-amber-200' },
              { name: 'staleness_of', desc: 'Element is stale/removed', color: 'from-cyan-50 to-blue-50 border-cyan-200' },
            ].map((item, index) => (
              <div key={index} className={`p-3 bg-gradient-to-br ${item.color} dark:from-slate-800 dark:to-slate-700 rounded-lg border-2 dark:border-slate-600 hover:scale-105 transition-transform`}>
                <code className="text-xs font-bold text-slate-900 dark:text-slate-100 block mb-1">{item.name}</code>
                <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Choose Right Condition</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use visibility for display checks, clickable for interactions
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Set Appropriate Timeouts</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Balance between reliability and test speed
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Combine Conditions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Chain multiple conditions for complex scenarios
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Handle Exceptions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Catch TimeoutException for graceful error handling
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Issues */}
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
              <AlertTitle className="text-red-900 dark:text-red-100">Wrong Condition Type</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Using presence when you need visibility<br/>
                <strong>Solution:</strong> Presence checks DOM, visibility checks if element is displayed
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Timeout Too Short</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Condition times out before element appears<br/>
                <strong>Solution:</strong> Increase timeout or optimize page load time
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Stale Element Reference</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Element reference becomes stale after DOM update<br/>
                <strong>Solution:</strong> Use staleness_of condition or re-find the element
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

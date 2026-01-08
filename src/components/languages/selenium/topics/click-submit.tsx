'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  MousePointer,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Send,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ClickSubmit() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [formState, setFormState] = React.useState({
    buttonClicked: false,
    formSubmitted: false,
    jsClicked: false,
    actionClicked: false
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

  const simulateClickSubmit = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setFormState({
      buttonClicked: false,
      formSubmitted: false,
      jsClicked: false,
      actionClicked: false
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findBtn: 10, click: 11, findForm: 14, submit: 15, jsClick: 18, actions: 21, quit: 24 };
      } else if (selectedLanguage === 'java') {
        return { nav: 8, findBtn: 11, click: 12, findForm: 15, submit: 16, jsClick: 19, actions: 22, quit: 24 };
      } else {
        return { nav: 3, findBtn: 6, click: 7, findForm: 10, submit: 11, jsClick: 14, actions: 17, quit: 19 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      button: selectedLanguage === 'python' ? 'login_button' : 'loginButton',
      form: selectedLanguage === 'python' ? 'search_form' : 'searchForm',
      jsBtn: selectedLanguage === 'python' ? 'hidden_button' : 'hiddenButton'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Click & Submit demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading page with buttons and forms...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Finding login button...', delay: 800 * multiplier, element: null, codeLine: lines.findBtn },
      { step: 3, log: '✅ Found login button', delay: 700 * multiplier, element: 'button', codeLine: lines.findBtn, variable: { name: varNames.button, value: '<WebElement: button#login>' } },
      { step: 4, log: '🖱️  Clicking login button...', delay: 1000 * multiplier, element: 'button', action: 'click', codeLine: lines.click, variable: { name: varNames.button, value: '<WebElement: button#login>' } },
      { step: 5, log: '🔍 Finding search form...', delay: 800 * multiplier, element: 'button', codeLine: lines.findForm, variable: { name: varNames.button, value: '<WebElement: button#login>' } },
      { step: 6, log: '✅ Found search form', delay: 700 * multiplier, element: 'form', codeLine: lines.findForm, variable: { name: varNames.form, value: '<WebElement: form#search>' } },
      { step: 7, log: '📤 Submitting form...', delay: 1000 * multiplier, element: 'form', action: 'submit', codeLine: lines.submit, variable: { name: varNames.form, value: '<WebElement: form#search>' } },
      { step: 8, log: '🔍 Using JavaScript click for hidden element...', delay: 800 * multiplier, element: 'form', codeLine: lines.jsClick, variable: { name: varNames.form, value: '<WebElement: form#search>' } },
      { step: 9, log: '✅ JavaScript click executed', delay: 700 * multiplier, element: 'jsclick', action: 'jsclick', codeLine: lines.jsClick, variable: { name: varNames.jsBtn, value: '<WebElement: button.hidden>' } },
      { step: 10, log: '🔍 Using Actions class for complex click...', delay: 800 * multiplier, element: 'jsclick', codeLine: lines.actions, variable: { name: varNames.jsBtn, value: '<WebElement: button.hidden>' } },
      { step: 11, log: '✅ Actions click performed', delay: 700 * multiplier, element: 'actions', action: 'actions', codeLine: lines.actions },
      { step: 12, log: '🎉 Click & Submit demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
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
      
      if (action === 'click') {
        setFormState(prev => ({ ...prev, buttonClicked: true }));
      } else if (action === 'submit') {
        setFormState(prev => ({ ...prev, formSubmitted: true }));
      } else if (action === 'jsclick') {
        setFormState(prev => ({ ...prev, jsClicked: true }));
      } else if (action === 'actions') {
        setFormState(prev => ({ ...prev, actionClicked: true }));
      }
    }

    setIsRunning(false);
  };

  const getClickSubmitCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.common.action_chains import ActionChains',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to page',
        'driver.get("https://www.example.com")',
        '',
        '# 🖱️ Standard click on button',
        'login_button = driver.find_element(By.ID, "login")',
        'login_button.click()',
        '',
        '# 📤 Submit form',
        'search_form = driver.find_element(By.ID, "search")',
        'search_form.submit()',
        '',
        '# 🔧 JavaScript click (for hidden/overlapped elements)',
        'hidden_button = driver.find_element(By.CLASS_NAME, "hidden")',
        'driver.execute_script("arguments[0].click();", hidden_button)',
        '',
        '# 🎯 Actions class click (for complex interactions)',
        'actions = ActionChains(driver)',
        'actions.move_to_element(hidden_button).click().perform()',
        '',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import org.openqa.selenium.JavascriptExecutor;',
        'import org.openqa.selenium.interactions.Actions;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com");',
        '',
        '// 🖱️ Standard click on button',
        'WebElement loginButton = driver.findElement(By.id("login"));',
        'loginButton.click();',
        '',
        '// 📤 Submit form',
        'WebElement searchForm = driver.findElement(By.id("search"));',
        'searchForm.submit();',
        '',
        '// 🔧 JavaScript click (for hidden/overlapped elements)',
        'WebElement hiddenButton = driver.findElement(By.className("hidden"));',
        '((JavascriptExecutor) driver).executeScript("arguments[0].click();", hiddenButton);',
        '',
        '// 🎯 Actions class click (for complex interactions)',
        'Actions actions = new Actions(driver);',
        'actions.moveToElement(hiddenButton).click().perform();',
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
        '// 🖱️ Standard click on button',
        'let loginButton = await driver.findElement(By.id(\'login\'));',
        'await loginButton.click();',
        '',
        '// 📤 Submit form',
        'let searchForm = await driver.findElement(By.id(\'search\'));',
        'await searchForm.submit();',
        '',
        '// 🔧 JavaScript click (for hidden/overlapped elements)',
        'let hiddenButton = await driver.findElement(By.className(\'hidden\'));',
        'await driver.executeScript(\'arguments[0].click();\', hiddenButton);',
        '',
        '// 🎯 Actions class click (for complex interactions)',
        'const actions = driver.actions();',
        'await actions.move({origin: hiddenButton}).click().perform();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const clickSubmitExample = {
    python: getClickSubmitCode('python').join('\n'),
    java: getClickSubmitCode('java').join('\n'),
    javascript: getClickSubmitCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Click & Submit"
        description="Master different ways to click elements and submit forms in Selenium"
        icon={MousePointer}
        category="Selenium · Element Interaction"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MousePointer className="w-5 h-5 text-blue-600" />
            Click and Submit Actions
          </CardTitle>
          <CardDescription>
            Essential interactions for automating user actions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Clicking and submitting are fundamental actions in web automation. Selenium provides multiple ways to perform these actions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Standard Click:</strong> The most common way to click elements</li>
            <li><strong>Submit:</strong> Specifically for form submission</li>
            <li><strong>JavaScript Click:</strong> For hidden or overlapped elements</li>
            <li><strong>Actions Class:</strong> For complex interactions and hover-then-click</li>
          </ul>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Click and submit syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
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
                {selectedLanguage === 'python' && `# Standard click
button = driver.find_element(By.ID, "submit")
button.click()

# Submit form
form = driver.find_element(By.TAG_NAME, "form")
form.submit()

# JavaScript click (for problematic elements)
element = driver.find_element(By.CLASS_NAME, "hidden-btn")
driver.execute_script("arguments[0].click();", element)

# Actions class click
from selenium.webdriver.common.action_chains import ActionChains
actions = ActionChains(driver)
actions.move_to_element(element).click().perform()

# Double click
actions.double_click(element).perform()

# Right click (context menu)
actions.context_click(element).perform()`}
                {selectedLanguage === 'java' && `// Standard click
WebElement button = driver.findElement(By.id("submit"));
button.click();

// Submit form
WebElement form = driver.findElement(By.tagName("form"));
form.submit();

// JavaScript click (for problematic elements)
WebElement element = driver.findElement(By.className("hidden-btn"));
((JavascriptExecutor) driver).executeScript("arguments[0].click();", element);

// Actions class click
Actions actions = new Actions(driver);
actions.moveToElement(element).click().perform();

// Double click
actions.doubleClick(element).perform();

// Right click (context menu)
actions.contextClick(element).perform();`}
                {selectedLanguage === 'javascript' && `// Standard click
let button = await driver.findElement(By.id('submit'));
await button.click();

// Submit form
let form = await driver.findElement(By.tagName('form'));
await form.submit();

// JavaScript click (for problematic elements)
let element = await driver.findElement(By.className('hidden-btn'));
await driver.executeScript('arguments[0].click();', element);

// Actions class click
const actions = driver.actions();
await actions.move({origin: element}).click().perform();

// Double click
await actions.doubleClick(element).perform();

// Right click (context menu)
await actions.contextClick(element).perform();`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MousePointer className="w-5 h-5 text-blue-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch different click and submit methods in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Click & Submit Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch different click methods: standard click, form submit, JavaScript click, and Actions class. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400" />
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
                        ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-click"
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
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateClickSubmit}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
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
                    onClick={() => copyToClipboard(clickSubmitExample[selectedLanguage], 'Click & Submit code')}
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
                    {getClickSubmitCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-blue-200 dark:bg-blue-900/50 border-l-4 border-blue-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-blue-900 dark:text-blue-100' : 'text-slate-800 dark:text-slate-300'}>
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{clickSubmitExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Actions</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px] space-y-4">
                  {/* Standard Click */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'button'
                      ? 'border-blue-500 bg-blue-100 dark:bg-blue-950/50 shadow-lg scale-105'
                      : formState.buttonClicked
                      ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">Standard Click</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">element.click()</div>
                      </div>
                      {formState.buttonClicked && <CheckCircle className="w-6 h-6 text-green-600" />}
                    </div>
                  </div>

                  {/* Form Submit */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'form'
                      ? 'border-blue-500 bg-blue-100 dark:bg-blue-950/50 shadow-lg scale-105'
                      : formState.formSubmitted
                      ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">Form Submit</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">form.submit()</div>
                      </div>
                      {formState.formSubmitted && <Send className="w-6 h-6 text-green-600" />}
                    </div>
                  </div>

                  {/* JavaScript Click */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'jsclick'
                      ? 'border-blue-500 bg-blue-100 dark:bg-blue-950/50 shadow-lg scale-105'
                      : formState.jsClicked
                      ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">JavaScript Click</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">executeScript("click()")</div>
                      </div>
                      {formState.jsClicked && <Zap className="w-6 h-6 text-yellow-600" />}
                    </div>
                  </div>

                  {/* Actions Click */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'actions'
                      ? 'border-blue-500 bg-blue-100 dark:bg-blue-950/50 shadow-lg scale-105'
                      : formState.actionClicked
                      ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">Actions Click</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">actions.click().perform()</div>
                      </div>
                      {formState.actionClicked && <MousePointer className="w-6 h-6 text-purple-600" />}
                    </div>
                  </div>

                  {currentStep >= 12 && (
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">All click methods demonstrated!</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Click Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MousePointer className="w-5 h-5 text-green-600" />
            Click Methods Comparison
          </CardTitle>
          <CardDescription>When to use each click method</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">element.click()</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Standard Click</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Default method for clicking visible, enabled elements
              </p>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Fast and reliable</div>
              <div className="text-xs text-red-700 dark:text-red-300">✗ Fails on hidden elements</div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">form.submit()</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Form Submit</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Directly submits forms without clicking submit button
              </p>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Works without submit button</div>
              <div className="text-xs text-red-700 dark:text-red-300">✗ Only for form elements</div>
            </div>

            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">executeScript()</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">JavaScript Click</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Uses JavaScript to click, bypasses visibility checks
              </p>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Works on hidden elements</div>
              <div className="text-xs text-red-700 dark:text-red-300">✗ Bypasses normal user flow</div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">Actions.click()</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Actions Class</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Advanced interactions like hover-then-click, drag-drop
              </p>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Complex interactions</div>
              <div className="text-xs text-red-700 dark:text-red-300">✗ Slower than standard click</div>
            </div>
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Wait Before Clicking</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always wait for elements to be clickable before attempting to click
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Standard Click First</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Try element.click() first, use JavaScript click as fallback
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Scroll Into View</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ensure element is in viewport before clicking to avoid errors
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Handle Stale Elements</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Re-find elements after page changes to avoid stale element exceptions
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
              <AlertTitle className="text-red-900 dark:text-red-100">Element Not Clickable</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Element is overlapped by another element<br/>
                <strong>Solution:</strong> Use JavaScript click or Actions class with scroll
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Element Not Visible</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Element is hidden or outside viewport<br/>
                <strong>Solution:</strong> Scroll element into view or use JavaScript click
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Stale Element Reference</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Element reference is outdated after DOM update<br/>
                <strong>Solution:</strong> Re-find the element before clicking
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Settings,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Wrench,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function CustomWaitConditions() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [customConditionState, setCustomConditionState] = React.useState({
    checking: false,
    conditionMet: false,
    customLogic: false
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

  const simulateCustomWait = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setCustomConditionState({
      checking: false,
      conditionMet: false,
      customLogic: false
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, defineCondition: 10, createWait: 16, useCondition: 17, result: 18, quit: 21 };
      } else if (selectedLanguage === 'java') {
        return { nav: 8, defineCondition: 11, createWait: 20, useCondition: 21, result: 22, quit: 24 };
      } else {
        return { nav: 3, defineCondition: 6, createWait: 13, useCondition: 14, result: 15, quit: 17 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Custom Wait Conditions demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading page with custom requirements...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔧 Defining custom wait condition...', delay: 1000 * multiplier, element: null, codeLine: lines.defineCondition },
      { step: 3, log: '✅ Custom condition function created', delay: 700 * multiplier, element: 'define', codeLine: lines.defineCondition, action: 'define' },
      { step: 4, log: '⏳ Creating WebDriverWait with custom condition...', delay: 800 * multiplier, element: 'define', codeLine: lines.createWait },
      { step: 5, log: '🔄 Evaluating custom condition...', delay: 1500 * multiplier, element: 'checking', codeLine: lines.useCondition, action: 'checking' },
      { step: 6, log: '✅ Custom condition satisfied!', delay: 700 * multiplier, element: 'met', codeLine: lines.result, action: 'met', variable: { name: 'result', value: 'True' } },
      { step: 7, log: '🎉 Custom wait completed successfully!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
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
      
      if (action === 'define') {
        setCustomConditionState(prev => ({ ...prev, customLogic: true }));
      } else if (action === 'checking') {
        setCustomConditionState(prev => ({ ...prev, checking: true }));
      } else if (action === 'met') {
        setCustomConditionState(prev => ({ ...prev, conditionMet: true }));
      }
    }

    setIsRunning(false);
  };

  const getCustomWaitCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.support.ui import WebDriverWait',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to page',
        'driver.get("https://www.example.com")',
        '',
        '# Define custom wait condition',
        'def element_has_css_class(locator, css_class):',
        '    """Wait until element has specific CSS class"""',
        '    def _predicate(driver):',
        '        element = driver.find_element(*locator)',
        '        return css_class in element.get_attribute("class")',
        '    return _predicate',
        '',
        '# Use custom condition',
        'wait = WebDriverWait(driver, 10)',
        'wait.until(element_has_css_class((By.ID, "status"), "success"))',
        '',
        '# Another custom condition - wait for element count',
        'def element_count_to_be(locator, count):',
        '    """Wait until specific number of elements found"""',
        '    def _predicate(driver):',
        '        elements = driver.find_elements(*locator)',
        '        return len(elements) == count',
        '    return _predicate',
        '',
        'wait.until(element_count_to_be((By.CLASS_NAME, "item"), 5))',
        '',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import org.openqa.selenium.support.ui.WebDriverWait;',
        'import org.openqa.selenium.support.ui.ExpectedCondition;',
        'import java.time.Duration;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com");',
        '',
        '// Define custom wait condition',
        'ExpectedCondition<Boolean> elementHasCssClass = new ExpectedCondition<Boolean>() {',
        '    public Boolean apply(WebDriver driver) {',
        '        WebElement element = driver.findElement(By.id("status"));',
        '        String classes = element.getAttribute("class");',
        '        return classes != null && classes.contains("success");',
        '    }',
        '};',
        '',
        '// Use custom condition',
        'WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));',
        'wait.until(elementHasCssClass);',
        '',
        '// Lambda-based custom condition',
        'wait.until((WebDriver d) -> {',
        '    return d.findElements(By.className("item")).size() == 5;',
        '});',
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
        '// Define custom wait condition',
        'function elementHasCssClass(locator, cssClass) {',
        '    return async function(driver) {',
        '        try {',
        '            let element = await driver.findElement(locator);',
        '            let classes = await element.getAttribute(\'class\');',
        '            return classes && classes.includes(cssClass);',
        '        } catch (e) {',
        '            return false;',
        '        }',
        '    };',
        '}',
        '',
        '// Use custom condition',
        'await driver.wait(elementHasCssClass(By.id(\'status\'), \'success\'), 10000);',
        '',
        '// Another custom condition - element count',
        'await driver.wait(async function() {',
        '    let elements = await driver.findElements(By.className(\'item\'));',
        '    return elements.length === 5;',
        '}, 10000);',
        '',
        'await driver.quit();',
      ];
    }
  };

  const customWaitExample = {
    python: getCustomWaitCode('python').join('\n'),
    java: getCustomWaitCode('java').join('\n'),
    javascript: getCustomWaitCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Custom Wait Conditions"
        description="Create your own wait conditions for complex scenarios"
        icon={Settings}
        category="Selenium · Synchronization"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-purple-600" />
            Why Custom Wait Conditions?
          </CardTitle>
          <CardDescription>
            Handle unique scenarios not covered by standard expected conditions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            While Selenium provides many built-in expected conditions, sometimes you need custom logic for specific scenarios. Custom wait conditions allow you to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Complex Logic:</strong> Combine multiple conditions with custom logic</li>
            <li><strong>Application-Specific:</strong> Wait for your app's unique states</li>
            <li><strong>Reusable:</strong> Create utility functions for common patterns</li>
            <li><strong>Flexible:</strong> Handle any scenario not covered by built-in conditions</li>
          </ul>

          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <Settings className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">When to Use Custom Conditions</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Use custom conditions when built-in expected conditions don't match your needs, such as waiting for specific CSS classes, element counts, or custom application states.
            </AlertDescription>
          </Alert>
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
            Custom wait condition syntax in Python, Java, and JavaScript
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

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
                {selectedLanguage === 'python' && `from selenium.webdriver.support.ui import WebDriverWait

# Custom condition: Wait for specific attribute value
def attribute_to_be(locator, attribute, value):
    def _predicate(driver):
        element = driver.find_element(*locator)
        return element.get_attribute(attribute) == value
    return _predicate

wait = WebDriverWait(driver, 10)
wait.until(attribute_to_be((By.ID, "status"), "data-state", "ready"))

# Custom condition: Wait for element count
def element_count_to_be(locator, count):
    def _predicate(driver):
        elements = driver.find_elements(*locator)
        return len(elements) == count
    return _predicate

wait.until(element_count_to_be((By.CLASS_NAME, "item"), 10))

# Custom condition: Wait for CSS class
def element_has_class(locator, css_class):
    def _predicate(driver):
        element = driver.find_element(*locator)
        classes = element.get_attribute("class") or ""
        return css_class in classes.split()
    return _predicate

wait.until(element_has_class((By.ID, "button"), "enabled"))`}
                {selectedLanguage === 'java' && `import org.openqa.selenium.support.ui.ExpectedCondition;

// Custom condition: Wait for specific attribute value
ExpectedCondition<Boolean> attributeToBe = new ExpectedCondition<Boolean>() {
    public Boolean apply(WebDriver driver) {
        WebElement element = driver.findElement(By.id("status"));
        return "ready".equals(element.getAttribute("data-state"));
    }
};

WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(attributeToBe);

// Lambda-based custom condition: Wait for element count
wait.until((WebDriver d) -> {
    return d.findElements(By.className("item")).size() == 10;
});

// Custom condition: Wait for CSS class
ExpectedCondition<Boolean> elementHasClass = new ExpectedCondition<Boolean>() {
    public Boolean apply(WebDriver driver) {
        WebElement element = driver.findElement(By.id("button"));
        String classes = element.getAttribute("class");
        return classes != null && classes.contains("enabled");
    }
};

wait.until(elementHasClass);`}
                {selectedLanguage === 'javascript' && `// Custom condition: Wait for specific attribute value
function attributeToBe(locator, attribute, value) {
    return async function(driver) {
        try {
            let element = await driver.findElement(locator);
            let attrValue = await element.getAttribute(attribute);
            return attrValue === value;
        } catch (e) {
            return false;
        }
    };
}

await driver.wait(attributeToBe(By.id('status'), 'data-state', 'ready'), 10000);

// Custom condition: Wait for element count
await driver.wait(async function() {
    let elements = await driver.findElements(By.className('item'));
    return elements.length === 10;
}, 10000);

// Custom condition: Wait for CSS class
function elementHasClass(locator, cssClass) {
    return async function(driver) {
        try {
            let element = await driver.findElement(locator);
            let classes = await element.getAttribute('class');
            return classes && classes.includes(cssClass);
        } catch (e) {
            return false;
        }
    };
}

await driver.wait(elementHasClass(By.id('button'), 'enabled'), 10000);`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-purple-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch a custom wait condition evaluate
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Custom Wait Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch a custom wait condition being defined and used. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
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
                      name="speed-custom"
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
                  <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateCustomWait}
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
                    onClick={() => copyToClipboard(customWaitExample[selectedLanguage], 'Custom wait code')}
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
                    {getCustomWaitCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{customWaitExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Custom Condition States</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px] space-y-4">
                  {/* Custom Logic Defined */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'define'
                      ? 'border-purple-500 bg-purple-100 dark:bg-purple-950/50 shadow-lg scale-105'
                      : customConditionState.customLogic
                      ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">Custom Logic Defined</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Function created</div>
                      </div>
                      {customConditionState.customLogic ? <Settings className="w-6 h-6 text-green-600" /> : <Settings className="w-6 h-6 text-slate-400 opacity-50" />}
                    </div>
                  </div>

                  {/* Checking Condition */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'checking'
                      ? 'border-purple-500 bg-purple-100 dark:bg-purple-950/50 shadow-lg scale-105'
                      : customConditionState.checking
                      ? 'border-blue-300 bg-blue-50 dark:bg-blue-950/30'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">Evaluating Condition</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Checking custom logic...</div>
                      </div>
                      {customConditionState.checking ? <RefreshCw className="w-6 h-6 text-blue-600 animate-spin" /> : <RefreshCw className="w-6 h-6 text-slate-400 opacity-50" />}
                    </div>
                  </div>

                  {/* Condition Met */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'met'
                      ? 'border-purple-500 bg-purple-100 dark:bg-purple-950/50 shadow-lg scale-105'
                      : customConditionState.conditionMet
                      ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">Condition Satisfied</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Custom logic returned True</div>
                      </div>
                      {customConditionState.conditionMet ? <CheckCircle className="w-6 h-6 text-green-600" /> : <CheckCircle className="w-6 h-6 text-slate-400 opacity-50" />}
                    </div>
                  </div>

                  {currentStep >= 7 && (
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Custom wait condition completed!</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Common Custom Conditions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-600" />
            Common Custom Conditions
          </CardTitle>
          <CardDescription>Useful patterns for custom wait conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Element Count</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Wait for Specific Count</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                len(elements) == expected_count
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Wait until exact number of elements found
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">CSS Class</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Wait for CSS Class</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                css_class in element.get_attribute("class")
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Wait until element has specific class
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-600 mb-2">Attribute Value</Badge>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">Wait for Attribute</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                element.get_attribute("data-state") == "ready"
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Wait for specific attribute value
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">Text Pattern</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Wait for Regex Match</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                re.match(pattern, element.text)
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Wait for text matching regex pattern
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 rounded-lg border-2 border-rose-200 dark:border-rose-700">
              <Badge className="bg-rose-600 mb-2">AJAX Complete</Badge>
              <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-2 text-sm">Wait for AJAX</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("return jQuery.active == 0")
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Wait for all AJAX requests to complete
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
              <Badge className="bg-indigo-600 mb-2">Page Load</Badge>
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 text-sm">Wait for Page Ready</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("return document.readyState") == "complete"
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Wait for page to fully load
              </p>
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Return Boolean</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Custom conditions should return True/False or the element itself
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Handle Exceptions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Catch exceptions and return False instead of letting them propagate
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Keep It Simple</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Avoid complex logic that could slow down polling
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Make Reusable</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Create utility functions for commonly used custom conditions
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
              <AlertTitle className="text-red-900 dark:text-red-100">Unhandled Exceptions</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Exceptions in custom condition break the wait<br/>
                <strong>Solution:</strong> Wrap logic in try-except and return False on error
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Slow Polling</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Complex custom condition slows down test<br/>
                <strong>Solution:</strong> Optimize condition logic or increase polling interval
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Incorrect Return Type</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Condition returns wrong type causing errors<br/>
                <strong>Solution:</strong> Always return boolean or WebElement, never None
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

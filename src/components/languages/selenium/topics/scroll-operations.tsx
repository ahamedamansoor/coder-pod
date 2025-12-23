'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  ArrowDownCircle,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  ChevronsDown
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ScrollOperations() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [scrollState, setScrollState] = React.useState({
    scrollY: 0,
    action: ''
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

  const simulateScrollOperations = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setScrollState({ scrollY: 0, action: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, import: 7, jsScroll: 10, scrollToElement: 13, scrollByAmount: 16, scrollToBottom: 19, scrollToTop: 22, quit: 25 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, import: 7, jsScroll: 10, scrollToElement: 13, scrollByAmount: 16, scrollToBottom: 19, scrollToTop: 22, quit: 24 };
      } else {
        return { init: 2, jsScroll: 5, scrollToElement: 8, scrollByAmount: 11, scrollToBottom: 14, scrollToTop: 17, quit: 19 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Scroll Operations demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '📜 Using JavaScript to scroll...', delay: 800 * multiplier, element: null, codeLine: lines.jsScroll, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '⬇️ Scrolling down by 500px...', delay: 1200 * multiplier, element: null, action: 'scroll-down', codeLine: lines.jsScroll, variable: { name: 'driver', value: 'scrolled 500px' } },
      { step: 4, log: '✅ Scrolled down', delay: 700 * multiplier, element: null, codeLine: lines.jsScroll, variable: { name: 'scroll_y', value: '500' } },
      { step: 5, log: '🎯 Scrolling to element...', delay: 1200 * multiplier, element: 'target', action: 'scroll-to-element', codeLine: lines.scrollToElement, variable: { name: 'element', value: '<WebElement: div#target>' } },
      { step: 6, log: '✅ Scrolled to element', delay: 700 * multiplier, element: 'target', codeLine: lines.scrollToElement, variable: { name: 'element', value: 'in view' } },
      { step: 7, log: '📏 Scrolling by amount (Selenium 4+)...', delay: 1200 * multiplier, element: null, action: 'scroll-by-amount', codeLine: lines.scrollByAmount, variable: { name: 'element', value: 'in view' } },
      { step: 8, log: '✅ Scrolled by 300px', delay: 700 * multiplier, element: null, codeLine: lines.scrollByAmount, variable: { name: 'delta_y', value: '300' } },
      { step: 9, log: '⬇️ Scrolling to bottom...', delay: 1200 * multiplier, element: null, action: 'scroll-to-bottom', codeLine: lines.scrollToBottom, variable: { name: 'delta_y', value: '300' } },
      { step: 10, log: '✅ Reached bottom', delay: 700 * multiplier, element: null, codeLine: lines.scrollToBottom, variable: { name: 'scroll_y', value: 'document.body.scrollHeight' } },
      { step: 11, log: '⬆️ Scrolling to top...', delay: 1200 * multiplier, element: null, action: 'scroll-to-top', codeLine: lines.scrollToTop, variable: { name: 'scroll_y', value: 'document.body.scrollHeight' } },
      { step: 12, log: '✅ Reached top', delay: 700 * multiplier, element: null, codeLine: lines.scrollToTop, variable: { name: 'scroll_y', value: '0' } },
      { step: 13, log: '🎉 Scroll Operations demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'scroll_y', value: '0' } },
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
      
      if (action === 'scroll-down') {
        setScrollState({ scrollY: 500, action: 'Scrolled 500px down' });
      } else if (action === 'scroll-to-element') {
        setScrollState({ scrollY: 800, action: 'Scrolled to element' });
      } else if (action === 'scroll-by-amount') {
        setScrollState({ scrollY: 1100, action: 'Scrolled by 300px' });
      } else if (action === 'scroll-to-bottom') {
        setScrollState({ scrollY: 2000, action: 'Scrolled to bottom' });
      } else if (action === 'scroll-to-top') {
        setScrollState({ scrollY: 0, action: 'Scrolled to top' });
      }
    }

    setIsRunning(false);
  };

  const getScrollOperationsCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# Import ActionChains (Selenium 4+)',
        'from selenium.webdriver.common.action_chains import ActionChains',
        '',
        '# JavaScript scroll',
        'driver.execute_script("window.scrollBy(0, 500)")',
        '',
        '# Scroll to element',
        'element = driver.find_element(By.ID, "target")',
        'driver.execute_script("arguments[0].scrollIntoView();", element)',
        '',
        '# Scroll by amount (Selenium 4+)',
        'actions = ActionChains(driver)',
        'actions.scroll_by_amount(0, 300).perform()',
        '',
        '# Scroll to bottom',
        'driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")',
        '',
        '# Scroll to top',
        'driver.execute_script("window.scrollTo(0, 0)")',
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
        'import org.openqa.selenium.JavascriptExecutor;',
        'import org.openqa.selenium.interactions.Actions;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'JavascriptExecutor js = (JavascriptExecutor) driver;',
        '',
        '// JavaScript scroll',
        'js.executeScript("window.scrollBy(0, 500)");',
        '',
        '// Scroll to element',
        'WebElement element = driver.findElement(By.id("target"));',
        'js.executeScript("arguments[0].scrollIntoView();", element);',
        '',
        '// Scroll by amount (Selenium 4+)',
        'Actions actions = new Actions(driver);',
        'actions.scrollByAmount(0, 300).perform();',
        '',
        '// Scroll to bottom',
        'js.executeScript("window.scrollTo(0, document.body.scrollHeight)");',
        '',
        '// Scroll to top',
        'js.executeScript("window.scrollTo(0, 0)");',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// JavaScript scroll',
        'await driver.executeScript(\'window.scrollBy(0, 500)\');',
        '',
        '// Scroll to element',
        'let element = await driver.findElement(By.id(\'target\'));',
        'await driver.executeScript(\'arguments[0].scrollIntoView();\', element);',
        '',
        '// Scroll by amount (Selenium 4+)',
        'let actions = driver.actions();',
        'await actions.scroll(0, 0, 0, 300).perform();',
        '',
        '// Scroll to bottom',
        'await driver.executeScript(\'window.scrollTo(0, document.body.scrollHeight)\');',
        '',
        '// Scroll to top',
        'await driver.executeScript(\'window.scrollTo(0, 0)\');',
        '',
        'await driver.quit();',
      ];
    }
  };

  const scrollOperationsExample = {
    python: getScrollOperationsCode('python').join('\n'),
    java: getScrollOperationsCode('java').join('\n'),
    javascript: getScrollOperationsCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Scroll Operations"
        description="Master page scrolling with JavaScript and Selenium 4+ Actions"
        icon={ArrowDownCircle}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowDownCircle className="w-5 h-5 text-purple-600" />
            Scrolling Methods
          </CardTitle>
          <CardDescription>
            Multiple ways to scroll pages and elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Selenium provides several methods for scrolling web pages:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>JavaScript Executor:</strong> Traditional scrolling with execute_script()</li>
            <li><strong>Scroll to Element:</strong> Bring element into view with scrollIntoView()</li>
            <li><strong>Scroll by Amount (Selenium 4+):</strong> Precise scrolling with Actions API</li>
            <li><strong>Scroll to Element (Selenium 4+):</strong> Actions-based element scrolling</li>
            <li><strong>Wheel Actions:</strong> Simulate mouse wheel scrolling</li>
          </ul>

          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <ArrowDownCircle className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Selenium 4+ Scroll Actions</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Selenium 4 introduced native scroll actions through the Actions API, providing better control than JavaScript executor.
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
            Scroll operations syntax in Python, Java, and JavaScript
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
                {selectedLanguage === 'python' && `from selenium.webdriver.common.action_chains import ActionChains

# Scroll down by pixels
driver.execute_script("window.scrollBy(0, 500)")

# Scroll to specific position
driver.execute_script("window.scrollTo(0, 1000)")

# Scroll to element
element = driver.find_element(By.ID, "footer")
driver.execute_script("arguments[0].scrollIntoView();", element)

# Scroll element into view (center)
driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", element)

# Scroll to bottom
driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")

# Scroll to top
driver.execute_script("window.scrollTo(0, 0)")

# Selenium 4+ - Scroll by amount
actions = ActionChains(driver)
actions.scroll_by_amount(0, 500).perform()

# Selenium 4+ - Scroll to element
actions.scroll_to_element(element).perform()

# Selenium 4+ - Scroll from element
actions.scroll_from_origin(element, 0, 100).perform()

# Get scroll position
scroll_y = driver.execute_script("return window.pageYOffset")
print(f"Current scroll position: {scroll_y}")`}
                {selectedLanguage === 'java' && `import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.interactions.Actions;

JavascriptExecutor js = (JavascriptExecutor) driver;

// Scroll down by pixels
js.executeScript("window.scrollBy(0, 500)");

// Scroll to specific position
js.executeScript("window.scrollTo(0, 1000)");

// Scroll to element
WebElement element = driver.findElement(By.id("footer"));
js.executeScript("arguments[0].scrollIntoView();", element);

// Scroll element into view (center)
js.executeScript("arguments[0].scrollIntoView({block: 'center'});", element);

// Scroll to bottom
js.executeScript("window.scrollTo(0, document.body.scrollHeight)");

// Scroll to top
js.executeScript("window.scrollTo(0, 0)");

// Selenium 4+ - Scroll by amount
Actions actions = new Actions(driver);
actions.scrollByAmount(0, 500).perform();

// Selenium 4+ - Scroll to element
actions.scrollToElement(element).perform();

// Selenium 4+ - Scroll from origin
WheelInput.ScrollOrigin scrollOrigin = WheelInput.ScrollOrigin.fromElement(element);
actions.scrollFromOrigin(scrollOrigin, 0, 100).perform();

// Get scroll position
Long scrollY = (Long) js.executeScript("return window.pageYOffset");
System.out.println("Current scroll position: " + scrollY);`}
                {selectedLanguage === 'javascript' && `// Scroll down by pixels
await driver.executeScript('window.scrollBy(0, 500)');

// Scroll to specific position
await driver.executeScript('window.scrollTo(0, 1000)');

// Scroll to element
let element = await driver.findElement(By.id('footer'));
await driver.executeScript('arguments[0].scrollIntoView();', element);

// Scroll element into view (center)
await driver.executeScript('arguments[0].scrollIntoView({block: "center"});', element);

// Scroll to bottom
await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');

// Scroll to top
await driver.executeScript('window.scrollTo(0, 0)');

// Selenium 4+ - Scroll by amount
let actions = driver.actions();
await actions.scroll(0, 0, 0, 500).perform();

// Selenium 4+ - Scroll to element
await actions.scroll(0, 0, 0, 0, element).perform();

// Get scroll position
let scrollY = await driver.executeScript('return window.pageYOffset');
console.log(\`Current scroll position: \${scrollY}\`);`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowDownCircle className="w-5 h-5 text-purple-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch scroll operations in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Scroll Operations Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch various scroll methods with inline variable values!
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
                      name="speed-scroll"
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
                    onClick={simulateScrollOperations}
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
                    onClick={() => copyToClipboard(scrollOperationsExample[selectedLanguage], 'Scroll Operations code')}
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
                    {getScrollOperationsCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{scrollOperationsExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Scroll Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-300 dark:border-slate-600 overflow-hidden h-[500px] relative">
                  <div className="absolute top-0 left-0 right-0 bg-slate-200 dark:bg-slate-700 p-2 z-10">
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Scroll Position: {scrollState.scrollY}px
                    </div>
                  </div>
                  <div className="h-full overflow-y-auto pt-10" style={{ scrollBehavior: 'smooth' }}>
                    <div className="p-6 space-y-4" style={{ transform: `translateY(-${scrollState.scrollY}px)`, transition: 'transform 0.5s ease' }}>
                      <div className="h-32 bg-blue-100 dark:bg-blue-950/30 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">Top Section</span>
                      </div>
                      <div className="h-32 bg-green-100 dark:bg-green-950/30 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-green-900 dark:text-green-100">Section 1</span>
                      </div>
                      <div className="h-32 bg-yellow-100 dark:bg-yellow-950/30 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-yellow-900 dark:text-yellow-100">Section 2</span>
                      </div>
                      <div className={`h-32 rounded-lg flex items-center justify-center ${selectedElement === 'target' ? 'bg-purple-200 dark:bg-purple-900/50 ring-4 ring-purple-500' : 'bg-purple-100 dark:bg-purple-950/30'}`}>
                        <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">Target Element</span>
                      </div>
                      <div className="h-32 bg-orange-100 dark:bg-orange-950/30 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-orange-900 dark:text-orange-100">Section 3</span>
                      </div>
                      <div className="h-32 bg-red-100 dark:bg-red-950/30 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-red-900 dark:text-red-100">Bottom Section</span>
                      </div>
                    </div>
                  </div>
                  {scrollState.action && (
                    <div className="absolute bottom-4 right-4 p-3 bg-purple-100 dark:bg-purple-950/50 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                      <div className="flex items-center gap-2">
                        <ChevronsDown className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                          {scrollState.action}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowDownCircle className="w-5 h-5 text-blue-600" />
            Scroll Methods Comparison
          </CardTitle>
          <CardDescription>Traditional vs Selenium 4+ approaches</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">JavaScript Executor</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Traditional Method</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                driver.execute_script("window.scrollBy(0, 500)")
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                ✓ Works in all Selenium versions<br/>
                ✓ More control with JavaScript<br/>
                ✗ Less intuitive syntax
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Actions API (Selenium 4+)</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Modern Method</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                actions.scroll_by_amount(0, 500).perform()
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                ✓ Native Selenium API<br/>
                ✓ Better cross-browser support<br/>
                ✗ Requires Selenium 4+
              </p>
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Wait After Scroll</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add waits after scrolling for lazy-loaded content
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use scrollIntoView</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Prefer scrollIntoView() to bring elements into viewport
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Smooth Scrolling</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use {`{behavior: 'smooth'}`} for better visual experience
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Check Scroll Position</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Verify scroll position with window.pageYOffset
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
              <AlertTitle className="text-red-900 dark:text-red-100">Element Not in View</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Element not clickable after scroll<br/>
                <strong>Solution:</strong> Use scrollIntoView with {`{block: 'center'}`} option
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Infinite Scroll Not Loading</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Content doesn't load on scroll<br/>
                <strong>Solution:</strong> Add explicit waits after scrolling for content to load
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Scroll Not Working</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Page doesn't scroll<br/>
                <strong>Solution:</strong> Check if element has overflow:hidden or is in iframe
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Scroll Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Infinite Scroll</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Load All Content</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                last_height = driver.execute_script("return document.body.scrollHeight")<br/>
                while True:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;time.sleep(2)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;new_height = driver.execute_script("return document.body.scrollHeight")<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;if new_height == last_height:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;last_height = new_height
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Scroll Within Element</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Scroll Inside Div</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                scrollable_div = driver.find_element(By.ID, "scrollable")<br/>
                driver.execute_script("arguments[0].scrollTop = arguments[0].scrollHeight", scrollable_div)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Horizontal Scroll</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Scroll Left/Right</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Scroll right<br/>
                driver.execute_script("window.scrollBy(500, 0)")<br/>
                <br/>
                # Selenium 4+<br/>
                actions.scroll_by_amount(500, 0).perform()
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

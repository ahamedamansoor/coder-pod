'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Code2,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  Terminal
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ExecuteJavascript() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [jsState, setJsState] = React.useState({
    result: '',
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

  const simulateExecuteJavascript = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setJsState({ result: '', action: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, simpleJs: 7, returnValue: 10, withArgs: 13, elementArg: 16, multipleArgs: 19, quit: 22 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, simpleJs: 7, returnValue: 10, withArgs: 13, elementArg: 16, multipleArgs: 19, quit: 21 };
      } else {
        return { init: 2, simpleJs: 5, returnValue: 8, withArgs: 11, elementArg: 14, multipleArgs: 17, quit: 19 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Execute JavaScript demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '📝 Executing simple JavaScript...', delay: 1200 * multiplier, element: null, action: 'simple', codeLine: lines.simpleJs, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '✅ JavaScript executed', delay: 700 * multiplier, element: null, codeLine: lines.simpleJs, variable: { name: 'result', value: 'undefined' } },
      { step: 4, log: '📊 Executing JS with return value...', delay: 1200 * multiplier, element: null, action: 'return', codeLine: lines.returnValue, variable: { name: 'result', value: 'undefined' } },
      { step: 5, log: '✅ Returned: "Hello from JavaScript"', delay: 700 * multiplier, element: null, codeLine: lines.returnValue, variable: { name: 'title', value: 'Hello from JavaScript' } },
      { step: 6, log: '🔢 Executing JS with arguments...', delay: 1200 * multiplier, element: null, action: 'args', codeLine: lines.withArgs, variable: { name: 'title', value: 'Hello from JavaScript' } },
      { step: 7, log: '✅ Result: 15', delay: 700 * multiplier, element: null, codeLine: lines.withArgs, variable: { name: 'sum', value: '15' } },
      { step: 8, log: '🎯 Passing element as argument...', delay: 1200 * multiplier, element: 'button', action: 'element', codeLine: lines.elementArg, variable: { name: 'sum', value: '15' } },
      { step: 9, log: '✅ Element modified via JS', delay: 700 * multiplier, element: 'button', codeLine: lines.elementArg, variable: { name: 'element', value: '<WebElement: button#submit>' } },
      { step: 10, log: '📦 Multiple arguments...', delay: 1200 * multiplier, element: null, action: 'multiple', codeLine: lines.multipleArgs, variable: { name: 'element', value: '<WebElement: button#submit>' } },
      { step: 11, log: '✅ Result: "John Doe, 30"', delay: 700 * multiplier, element: null, codeLine: lines.multipleArgs, variable: { name: 'result', value: 'John Doe, 30' } },
      { step: 12, log: '🎉 Execute JavaScript demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'result', value: 'John Doe, 30' } },
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
      
      if (action === 'simple') {
        setJsState({ result: 'undefined', action: 'Simple JS executed' });
      } else if (action === 'return') {
        setJsState({ result: 'Hello from JavaScript', action: 'JS with return value' });
      } else if (action === 'args') {
        setJsState({ result: '15', action: 'JS with arguments' });
      } else if (action === 'element') {
        setJsState({ result: 'Element modified', action: 'Element passed to JS' });
      } else if (action === 'multiple') {
        setJsState({ result: 'John Doe, 30', action: 'Multiple arguments' });
      }
    }

    setIsRunning(false);
  };

  const getExecuteJavascriptCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# Execute simple JavaScript',
        'driver.execute_script("alert(\'Hello World\')")',
        '',
        '# Execute JS and return value',
        'title = driver.execute_script("return document.title")',
        'print(f"Page title: {title}")',
        '',
        '# Execute JS with arguments',
        'result = driver.execute_script("return arguments[0] + arguments[1]", 10, 5)',
        'print(f"Sum: {result}")  # Output: 15',
        '',
        '# Pass element as argument',
        'element = driver.find_element(By.ID, "submit")',
        'driver.execute_script("arguments[0].style.border = \'3px solid red\'", element)',
        '',
        '# Multiple arguments',
        'result = driver.execute_script(',
        '    "return arguments[0] + \', \' + arguments[1]",',
        '    "John Doe", 30',
        ')',
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
        '',
        'WebDriver driver = new ChromeDriver();',
        'JavascriptExecutor js = (JavascriptExecutor) driver;',
        '',
        '// Execute simple JavaScript',
        'js.executeScript("alert(\'Hello World\')");',
        '',
        '// Execute JS and return value',
        'String title = (String) js.executeScript("return document.title");',
        'System.out.println("Page title: " + title);',
        '',
        '// Execute JS with arguments',
        'Long result = (Long) js.executeScript("return arguments[0] + arguments[1]", 10, 5);',
        'System.out.println("Sum: " + result);  // Output: 15',
        '',
        '// Pass element as argument',
        'WebElement element = driver.findElement(By.id("submit"));',
        'js.executeScript("arguments[0].style.border = \'3px solid red\'", element);',
        '',
        '// Multiple arguments',
        'String output = (String) js.executeScript(',
        '    "return arguments[0] + \', \' + arguments[1]",',
        '    "John Doe", 30',
        ');',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Execute simple JavaScript',
        'await driver.executeScript("alert(\'Hello World\')");',
        '',
        '// Execute JS and return value',
        'let title = await driver.executeScript("return document.title");',
        'console.log(\`Page title: \${title}\`);',
        '',
        '// Execute JS with arguments',
        'let result = await driver.executeScript("return arguments[0] + arguments[1]", 10, 5);',
        'console.log(\`Sum: \${result}\`);  // Output: 15',
        '',
        '// Pass element as argument',
        'let element = await driver.findElement(By.id(\'submit\'));',
        'await driver.executeScript("arguments[0].style.border = \'3px solid red\'", element);',
        '',
        '// Multiple arguments',
        'let output = await driver.executeScript(',
        '    "return arguments[0] + \', \' + arguments[1]",',
        '    "John Doe", 30',
        ');',
        '',
        'await driver.quit();',
      ];
    }
  };

  const executeJavascriptExample = {
    python: getExecuteJavascriptCode('python').join('\n'),
    java: getExecuteJavascriptCode('java').join('\n'),
    javascript: getExecuteJavascriptCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Execute JavaScript"
        description="Run JavaScript code directly in the browser"
        icon={Code2}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-orange-600" />
            Understanding execute_script()
          </CardTitle>
          <CardDescription>
            Execute JavaScript in the browser context
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            The execute_script() method allows you to run JavaScript code directly in the browser, bypassing Selenium's normal element interaction methods. This is powerful for operations that are difficult or impossible with standard Selenium commands.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>execute_script():</strong> Execute synchronous JavaScript</li>
            <li><strong>execute_async_script():</strong> Execute asynchronous JavaScript</li>
            <li><strong>Return Values:</strong> Get data back from JavaScript</li>
            <li><strong>Arguments:</strong> Pass Python/Java objects to JavaScript</li>
            <li><strong>WebElements:</strong> Pass Selenium elements as arguments</li>
          </ul>

          <Alert className="border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/20">
            <Code2 className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">When to Use JavaScript</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Use execute_script() for operations like scrolling, clicking hidden elements, modifying DOM, getting computed styles, or bypassing element interaction restrictions.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-orange-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            JavaScript execution syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-orange-600 text-orange-600 dark:text-orange-400'
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
                {selectedLanguage === 'python' && `# Simple execution (no return)
driver.execute_script("console.log('Hello from Selenium')")

# Get return value
title = driver.execute_script("return document.title")
url = driver.execute_script("return window.location.href")

# Get page info
page_height = driver.execute_script("return document.body.scrollHeight")
viewport_height = driver.execute_script("return window.innerHeight")

# Pass arguments (use arguments[0], arguments[1], etc.)
result = driver.execute_script("return arguments[0] + arguments[1]", 10, 20)

# Pass WebElement as argument
element = driver.find_element(By.ID, "myElement")
driver.execute_script("arguments[0].click()", element)
driver.execute_script("arguments[0].value = 'New Value'", element)

# Get element properties
text = driver.execute_script("return arguments[0].innerText", element)
is_visible = driver.execute_script(
    "return arguments[0].offsetWidth > 0 && arguments[0].offsetHeight > 0",
    element
)

# Modify element
driver.execute_script(
    "arguments[0].style.backgroundColor = 'yellow'",
    element
)

# Multiple statements
driver.execute_script("""
    var element = arguments[0];
    element.style.border = '2px solid red';
    element.scrollIntoView();
    return element.innerText;
""", element)

# Create and return objects
data = driver.execute_script("""
    return {
        title: document.title,
        url: window.location.href,
        cookies: document.cookie
    }
""")
print(data['title'])`}
                {selectedLanguage === 'java' && `JavascriptExecutor js = (JavascriptExecutor) driver;

// Simple execution (no return)
js.executeScript("console.log('Hello from Selenium')");

// Get return value
String title = (String) js.executeScript("return document.title");
String url = (String) js.executeScript("return window.location.href");

// Get page info
Long pageHeight = (Long) js.executeScript("return document.body.scrollHeight");
Long viewportHeight = (Long) js.executeScript("return window.innerHeight");

// Pass arguments (use arguments[0], arguments[1], etc.)
Long result = (Long) js.executeScript("return arguments[0] + arguments[1]", 10, 20);

// Pass WebElement as argument
WebElement element = driver.findElement(By.id("myElement"));
js.executeScript("arguments[0].click()", element);
js.executeScript("arguments[0].value = 'New Value'", element);

// Get element properties
String text = (String) js.executeScript("return arguments[0].innerText", element);
Boolean isVisible = (Boolean) js.executeScript(
    "return arguments[0].offsetWidth > 0 && arguments[0].offsetHeight > 0",
    element
);

// Modify element
js.executeScript(
    "arguments[0].style.backgroundColor = 'yellow'",
    element
);

// Multiple statements
String innerText = (String) js.executeScript(
    "var element = arguments[0];" +
    "element.style.border = '2px solid red';" +
    "element.scrollIntoView();" +
    "return element.innerText;",
    element
);

// Create and return objects
Map<String, Object> data = (Map<String, Object>) js.executeScript(
    "return {" +
    "    title: document.title," +
    "    url: window.location.href," +
    "    cookies: document.cookie" +
    "}"
);
System.out.println(data.get("title"));`}
                {selectedLanguage === 'javascript' && `// Simple execution (no return)
await driver.executeScript("console.log('Hello from Selenium')");

// Get return value
let title = await driver.executeScript("return document.title");
let url = await driver.executeScript("return window.location.href");

// Get page info
let pageHeight = await driver.executeScript("return document.body.scrollHeight");
let viewportHeight = await driver.executeScript("return window.innerHeight");

// Pass arguments (use arguments[0], arguments[1], etc.)
let result = await driver.executeScript("return arguments[0] + arguments[1]", 10, 20);

// Pass WebElement as argument
let element = await driver.findElement(By.id('myElement'));
await driver.executeScript("arguments[0].click()", element);
await driver.executeScript("arguments[0].value = 'New Value'", element);

// Get element properties
let text = await driver.executeScript("return arguments[0].innerText", element);
let isVisible = await driver.executeScript(
    "return arguments[0].offsetWidth > 0 && arguments[0].offsetHeight > 0",
    element
);

// Modify element
await driver.executeScript(
    "arguments[0].style.backgroundColor = 'yellow'",
    element
);

// Multiple statements
let innerText = await driver.executeScript(\`
    var element = arguments[0];
    element.style.border = '2px solid red';
    element.scrollIntoView();
    return element.innerText;
\`, element);

// Create and return objects
let data = await driver.executeScript(\`
    return {
        title: document.title,
        url: window.location.href,
        cookies: document.cookie
    }
\`);
console.log(data.title);`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-orange-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch JavaScript execution in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Execute JavaScript Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch JavaScript execution with inline variable values!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-orange-600 dark:text-orange-400" />
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
                        ? 'border-orange-500 bg-orange-100 dark:bg-orange-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-orange-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-js"
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
                  <Code className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateExecuteJavascript}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
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
                    onClick={() => copyToClipboard(executeJavascriptExample[selectedLanguage], 'Execute JavaScript code')}
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
                    {getExecuteJavascriptCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-orange-200 dark:bg-orange-900/50 border-l-4 border-orange-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-orange-900 dark:text-orange-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-950/30 rounded border border-orange-200 dark:border-orange-700">
                        <div className="text-[10px] font-bold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-orange-800 dark:text-orange-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-orange-600 dark:text-orange-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{executeJavascriptExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">JavaScript Execution Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[500px]">
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Terminal className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Browser Console</span>
                      </div>
                      <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
                        {jsState.result && `> ${jsState.result}`}
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border-2 ${selectedElement === 'button' ? 'border-orange-500 ring-2 ring-orange-500' : 'border-slate-300 dark:border-slate-600'}`}>
                      <Button className="w-full bg-orange-600">
                        Submit Button
                      </Button>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                      <div className="text-xs font-semibold text-blue-900 dark:text-blue-100 mb-2">
                        Page Information:
                      </div>
                      <div className="space-y-1 text-xs text-blue-800 dark:text-blue-200">
                        <div>Title: Test Page</div>
                        <div>URL: https://example.com</div>
                        <div>Height: 1200px</div>
                      </div>
                    </div>
                  </div>

                  {jsState.action && (
                    <div className="mt-4 p-3 bg-orange-100 dark:bg-orange-950/50 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                          {jsState.action}
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
            <Code2 className="w-5 h-5 text-blue-600" />
            Common Use Cases
          </CardTitle>
          <CardDescription>When to use execute_script()</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Scrolling</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Scroll Operations</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("window.scrollTo(0, 500)")
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Hidden Elements</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Click Hidden Elements</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("arguments[0].click()", element)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">DOM Modification</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Change Attributes</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("arguments[0].value='text'", el)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-600 mb-2">Get Properties</Badge>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">Element Properties</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                text = driver.execute_script("return arguments[0].innerText", el)
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use as Last Resort</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Prefer Selenium's native methods when possible
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Return Values</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use "return" keyword to get data back from JavaScript
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Pass Elements</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use arguments[0] to reference passed WebElements
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Error Handling</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Wrap JavaScript in try-catch for error handling
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
              <AlertTitle className="text-red-900 dark:text-red-100">JavaScript Error</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> JavaScript throws error<br/>
                <strong>Solution:</strong> Check browser console, verify syntax, ensure elements exist
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">No Return Value</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Getting None/null instead of value<br/>
                <strong>Solution:</strong> Add "return" keyword in JavaScript code
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Element Not Found</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> arguments[0] is undefined<br/>
                <strong>Solution:</strong> Ensure WebElement is passed as argument correctly
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced JavaScript Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">jQuery Execution</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Use jQuery if Available</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Check if jQuery exists<br/>
                has_jquery = driver.execute_script("return typeof jQuery != 'undefined'")<br/>
                if has_jquery:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;driver.execute_script("$('#myElement').hide()")
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Get Computed Styles</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Read CSS Properties</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                color = driver.execute_script(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"return window.getComputedStyle(arguments[0]).color",<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;element<br/>
                )
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Inject JavaScript</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Add Script to Page</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("""<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;var script = document.createElement('script');<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;document.head.appendChild(script);<br/>
                """)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

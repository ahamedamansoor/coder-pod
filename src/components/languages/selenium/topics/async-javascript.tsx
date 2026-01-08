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
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  Timer
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function AsyncJavascript() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [asyncState, setAsyncState] = React.useState({
    status: 'idle',
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

  const simulateAsyncJavascript = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setAsyncState({ status: 'idle', result: '', action: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, setTimeout: 7, fetchData: 10, callback: 13, promise: 16, quit: 19 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, setTimeout: 7, fetchData: 10, callback: 13, promise: 16, quit: 18 };
      } else {
        return { init: 2, setTimeout: 5, fetchData: 8, callback: 11, promise: 14, quit: 16 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Async JavaScript demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '⏱️ Executing async script with setTimeout...', delay: 1200 * multiplier, element: null, action: 'setTimeout', codeLine: lines.setTimeout, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '⏳ Waiting for async operation...', delay: 1500 * multiplier, element: null, codeLine: lines.setTimeout, variable: { name: 'status', value: 'waiting' } },
      { step: 4, log: '✅ Async result: "Delayed result"', delay: 700 * multiplier, element: null, codeLine: lines.setTimeout, variable: { name: 'result', value: 'Delayed result' } },
      { step: 5, log: '📡 Fetching data asynchronously...', delay: 1200 * multiplier, element: null, action: 'fetch', codeLine: lines.fetchData, variable: { name: 'result', value: 'Delayed result' } },
      { step: 6, log: '⏳ Waiting for fetch...', delay: 1500 * multiplier, element: null, codeLine: lines.fetchData, variable: { name: 'status', value: 'fetching' } },
      { step: 7, log: '✅ Data fetched successfully', delay: 700 * multiplier, element: null, codeLine: lines.fetchData, variable: { name: 'data', value: '{status: "success"}' } },
      { step: 8, log: '🔄 Using callback pattern...', delay: 1200 * multiplier, element: null, action: 'callback', codeLine: lines.callback, variable: { name: 'data', value: '{status: "success"}' } },
      { step: 9, log: '✅ Callback executed', delay: 700 * multiplier, element: null, codeLine: lines.callback, variable: { name: 'callback_result', value: 'Callback done' } },
      { step: 10, log: '🎯 Using Promise...', delay: 1200 * multiplier, element: null, action: 'promise', codeLine: lines.promise, variable: { name: 'callback_result', value: 'Callback done' } },
      { step: 11, log: '✅ Promise resolved', delay: 700 * multiplier, element: null, codeLine: lines.promise, variable: { name: 'promise_result', value: 'Promise resolved' } },
      { step: 12, log: '🎉 Async JavaScript demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'promise_result', value: 'Promise resolved' } },
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
      
      if (action === 'setTimeout') {
        setAsyncState({ status: 'running', result: '', action: 'setTimeout executing' });
      } else if (action === 'fetch') {
        setAsyncState({ status: 'running', result: 'Delayed result', action: 'Fetching data' });
      } else if (action === 'callback') {
        setAsyncState({ status: 'running', result: '{status: "success"}', action: 'Callback executing' });
      } else if (action === 'promise') {
        setAsyncState({ status: 'completed', result: 'Promise resolved', action: 'Promise resolved' });
      }
    }

    setIsRunning(false);
  };

  const getAsyncJavascriptCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# Execute async script with setTimeout',
        'result = driver.execute_async_script("""',
        '    var callback = arguments[arguments.length - 1];',
        '    setTimeout(function() {',
        '        callback("Delayed result");',
        '    }, 2000);',
        '""")',
        '',
        '# Fetch data asynchronously',
        'data = driver.execute_async_script("""',
        '    var callback = arguments[arguments.length - 1];',
        '    fetch("/api/data")',
        '        .then(response => response.json())',
        '        .then(data => callback(data));',
        '""")',
        '',
        '# Close browser',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.JavascriptExecutor;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'JavascriptExecutor js = (JavascriptExecutor) driver;',
        '',
        '// Execute async script with setTimeout',
        'Object result = js.executeAsyncScript(',
        '    "var callback = arguments[arguments.length - 1];" +',
        '    "setTimeout(function() {" +',
        '    "    callback(\'Delayed result\');" +',
        '    "}, 2000);"',
        ');',
        '',
        '// Fetch data asynchronously',
        'Object data = js.executeAsyncScript(',
        '    "var callback = arguments[arguments.length - 1];" +',
        '    "fetch(\'/api/data\')" +',
        '    "    .then(response => response.json())" +',
        '    "    .then(data => callback(data));"',
        ');',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Execute async script with setTimeout',
        'let result = await driver.executeAsyncScript(`',
        '    var callback = arguments[arguments.length - 1];',
        '    setTimeout(function() {',
        '        callback("Delayed result");',
        '    }, 2000);',
        '`);',
        '',
        '// Fetch data asynchronously',
        'let data = await driver.executeAsyncScript(`',
        '    var callback = arguments[arguments.length - 1];',
        '    fetch("/api/data")',
        '        .then(response => response.json())',
        '        .then(data => callback(data));',
        '`);',
        '',
        'await driver.quit();',
      ];
    }
  };

  const asyncJavascriptExample = {
    python: getAsyncJavascriptCode('python').join('\n'),
    java: getAsyncJavascriptCode('java').join('\n'),
    javascript: getAsyncJavascriptCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Async JavaScript"
        description="Execute asynchronous JavaScript with callbacks"
        icon={Clock}
        category="Selenium · JavaScript Execution"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            Understanding execute_async_script()
          </CardTitle>
          <CardDescription>
            Execute JavaScript that requires callbacks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            The execute_async_script() method allows you to run asynchronous JavaScript code that uses callbacks, promises, or async operations like setTimeout, fetch, or AJAX requests. Selenium waits for the callback to be invoked before returning.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Callback Parameter:</strong> Last argument is always the callback function</li>
            <li><strong>Timeout:</strong> Set script timeout with set_script_timeout()</li>
            <li><strong>Async Operations:</strong> setTimeout, fetch, AJAX, Promises</li>
            <li><strong>Return Value:</strong> Whatever is passed to the callback</li>
            <li><strong>Wait for Completion:</strong> Selenium waits until callback is called</li>
          </ul>

          <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
            <Clock className="h-5 w-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Callback Pattern</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              The last argument in execute_async_script() is always the callback function. Call it with your result when the async operation completes.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-indigo-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Async JavaScript syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400'
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
                {selectedLanguage === 'python' && `# Set script timeout (default 30 seconds)
driver.set_script_timeout(10)

# Basic async script with setTimeout
result = driver.execute_async_script("""
    var callback = arguments[arguments.length - 1];
    setTimeout(function() {
        callback('Completed after 2 seconds');
    }, 2000);
""")
print(result)  # Output: Completed after 2 seconds

# Fetch API request
data = driver.execute_async_script("""
    var callback = arguments[arguments.length - 1];
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => callback({error: error.message}));
""")

# AJAX request with XMLHttpRequest
response = driver.execute_async_script("""
    var callback = arguments[arguments.length - 1];
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/users');
    xhr.onload = function() {
        callback(JSON.parse(xhr.responseText));
    };
    xhr.send();
""")

# Wait for element to appear (polling)
element_appeared = driver.execute_async_script("""
    var callback = arguments[arguments.length - 1];
    var checkElement = setInterval(function() {
        var elem = document.getElementById('dynamic-element');
        if (elem) {
            clearInterval(checkElement);
            callback(true);
        }
    }, 100);
""")

# Promise-based async operation
result = driver.execute_async_script("""
    var callback = arguments[arguments.length - 1];
    new Promise((resolve) => {
        setTimeout(() => resolve('Promise resolved'), 1000);
    }).then(callback);
""")

# Async/await pattern
result = driver.execute_async_script("""
    var callback = arguments[arguments.length - 1];
    (async function() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        callback('Async/await completed');
    })();
""")

# Pass arguments to async script
result = driver.execute_async_script("""
    var url = arguments[0];
    var callback = arguments[arguments.length - 1];
    fetch(url)
        .then(response => response.text())
        .then(callback);
""", "https://api.example.com/data")

# Multiple async operations
results = driver.execute_async_script("""
    var callback = arguments[arguments.length - 1];
    Promise.all([
        fetch('/api/users').then(r => r.json()),
        fetch('/api/posts').then(r => r.json())
    ]).then(callback);
""")

# Wait for page load event
driver.execute_async_script("""
    var callback = arguments[arguments.length - 1];
    window.addEventListener('load', function() {
        callback('Page loaded');
    });
""")`}
                {selectedLanguage === 'java' && `// Set script timeout (default 30 seconds)
driver.manage().timeouts().scriptTimeout(Duration.ofSeconds(10));

JavascriptExecutor js = (JavascriptExecutor) driver;

// Basic async script with setTimeout
Object result = js.executeAsyncScript(
    "var callback = arguments[arguments.length - 1];" +
    "setTimeout(function() {" +
    "    callback('Completed after 2 seconds');" +
    "}, 2000);"
);
System.out.println(result);  // Output: Completed after 2 seconds

// Fetch API request
Object data = js.executeAsyncScript(
    "var callback = arguments[arguments.length - 1];" +
    "fetch('https://api.example.com/data')" +
    "    .then(response => response.json())" +
    "    .then(data => callback(data))" +
    "    .catch(error => callback({error: error.message}));"
);

// AJAX request with XMLHttpRequest
Object response = js.executeAsyncScript(
    "var callback = arguments[arguments.length - 1];" +
    "var xhr = new XMLHttpRequest();" +
    "xhr.open('GET', '/api/users');" +
    "xhr.onload = function() {" +
    "    callback(JSON.parse(xhr.responseText));" +
    "};" +
    "xhr.send();"
);

// Wait for element to appear (polling)
Boolean elementAppeared = (Boolean) js.executeAsyncScript(
    "var callback = arguments[arguments.length - 1];" +
    "var checkElement = setInterval(function() {" +
    "    var elem = document.getElementById('dynamic-element');" +
    "    if (elem) {" +
    "        clearInterval(checkElement);" +
    "        callback(true);" +
    "    }" +
    "}, 100);"
);

// Promise-based async operation
Object promiseResult = js.executeAsyncScript(
    "var callback = arguments[arguments.length - 1];" +
    "new Promise((resolve) => {" +
    "    setTimeout(() => resolve('Promise resolved'), 1000);" +
    "}).then(callback);"
);

// Async/await pattern
Object asyncResult = js.executeAsyncScript(
    "var callback = arguments[arguments.length - 1];" +
    "(async function() {" +
    "    await new Promise(resolve => setTimeout(resolve, 1000));" +
    "    callback('Async/await completed');" +
    "})();"
);

// Pass arguments to async script
Object fetchResult = js.executeAsyncScript(
    "var url = arguments[0];" +
    "var callback = arguments[arguments.length - 1];" +
    "fetch(url)" +
    "    .then(response => response.text())" +
    "    .then(callback);",
    "https://api.example.com/data"
);

// Multiple async operations
Object results = js.executeAsyncScript(
    "var callback = arguments[arguments.length - 1];" +
    "Promise.all([" +
    "    fetch('/api/users').then(r => r.json())," +
    "    fetch('/api/posts').then(r => r.json())" +
    "]).then(callback);"
);`}
                                {selectedLanguage === 'javascript' && `// Set script timeout (default 30 seconds)
                await driver.manage().setTimeouts({ script: 10000 });
                
                // Basic async script with setTimeout
                let result = await driver.executeAsyncScript(\`
                    var callback = arguments[arguments.length - 1];
                    setTimeout(function() {
                        callback('Completed after 2 seconds');
                    }, 2000);
                \`);
                console.log(result);  // Output: Completed after 2 seconds
                
                // Fetch API request
                let data = await driver.executeAsyncScript(\`
                    var callback = arguments[arguments.length - 1];
                    fetch('https://api.example.com/data')
                        .then(response => response.json())
                        .then(data => callback(data))
                        .catch(error => callback({error: error.message}));
                \`);
                
                // AJAX request with XMLHttpRequest
                let response = await driver.executeAsyncScript(\`
                    var callback = arguments[arguments.length - 1];
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', '/api/users');
                    xhr.onload = function() {
                        callback(JSON.parse(xhr.responseText));
                    };
                    xhr.send();
                \`);
                
                // Wait for element to appear (polling)
                let elementAppeared = await driver.executeAsyncScript(\`
                    var callback = arguments[arguments.length - 1];
                    var checkElement = setInterval(function() {
                        var elem = document.getElementById('dynamic-element');
                        if (elem) {
                            clearInterval(checkElement);
                            callback(true);
                        }
                    }, 100);
                \`);
                
                // Promise-based async operation
                let promiseResult = await driver.executeAsyncScript(\`
                    var callback = arguments[arguments.length - 1];
                    new Promise((resolve) => {
                        setTimeout(() => resolve('Promise resolved'), 1000);
                    }).then(callback);
                \`);
                
                // Async/await pattern
                let asyncResult = await driver.executeAsyncScript(\`
                    var callback = arguments[arguments.length - 1];
                    (async function() {
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        callback('Async/await completed');
                    })();
                \`);
                
                // Pass arguments to async script
                let fetchResult = await driver.executeAsyncScript(\`
                    var url = arguments[0];
                    var callback = arguments[arguments.length - 1];
                    fetch(url)
                        .then(response => response.text())
                        .then(callback);
                \`, "https://api.example.com/data");
                
                // Multiple async operations
                let results = await driver.executeAsyncScript(\`
                    var callback = arguments[arguments.length - 1];
                    Promise.all([
                        fetch('/api/users').then(r => r.json()),
                        fetch('/api/posts').then(r => r.json())
                    ]).then(callback);
                \`);`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch async JavaScript execution
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Async JavaScript Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch asynchronous operations with inline variable values!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
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
                      name="speed-async"
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
                  <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateAsyncJavascript}
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
                    onClick={() => copyToClipboard(asyncJavascriptExample[selectedLanguage], 'Async JavaScript code')}
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
                    {getAsyncJavascriptCode(selectedLanguage).map((line, index) => (
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
                      <div className="mt-4 p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded border border-indigo-200 dark:border-indigo-700">
                        <div className="text-[10px] font-bold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-indigo-800 dark:text-indigo-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-indigo-600 dark:text-indigo-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{asyncJavascriptExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Async Operation Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[500px]">
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Timer className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Async Status</span>
                      </div>
                      <div className="text-sm font-mono text-slate-900 dark:text-slate-100">
                        Status: {asyncState.status}
                      </div>
                    </div>

                    {asyncState.result && (
                      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="text-xs font-semibold text-green-900 dark:text-green-100 mb-2">
                          Result:
                        </div>
                        <div className="text-sm font-mono text-green-800 dark:text-green-200">
                          {asyncState.result}
                        </div>
                      </div>
                    )}

                    {asyncState.status === 'running' && (
                      <div className="flex items-center gap-2 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                        <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" />
                        <span className="text-sm text-blue-900 dark:text-blue-100">
                          Waiting for async operation...
                        </span>
                      </div>
                    )}
                  </div>

                  {asyncState.action && (
                    <div className="mt-4 p-3 bg-indigo-100 dark:bg-indigo-950/50 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                          {asyncState.action}
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
            <Clock className="w-5 h-5 text-blue-600" />
            Async vs Sync Execution
          </CardTitle>
          <CardDescription>Key differences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">execute_script()</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Synchronous</h4>
              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div>✓ Immediate execution</div>
                <div>✓ Returns immediately</div>
                <div>✓ Use "return" for values</div>
                <div>✗ Can't wait for async ops</div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
              <Badge className="bg-indigo-600 mb-2">execute_async_script()</Badge>
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 text-sm">Asynchronous</h4>
              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div>✓ Waits for callback</div>
                <div>✓ Handles async operations</div>
                <div>✓ Use callback parameter</div>
                <div>✓ Supports setTimeout, fetch</div>
              </div>
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Set Timeout</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use set_script_timeout() to avoid hanging on slow operations
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Always Call Callback</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ensure callback is called in all code paths (success/error)
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Handle Errors</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use try-catch or .catch() to handle async errors
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Last Argument</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Callback is always arguments[arguments.length - 1]
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
              <AlertTitle className="text-red-900 dark:text-red-100">ScriptTimeoutException</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Script times out waiting for callback<br/>
                <strong>Solution:</strong> Ensure callback is called or increase timeout with set_script_timeout()
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Callback Not Called</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Script hangs indefinitely<br/>
                <strong>Solution:</strong> Check that callback is invoked in all code paths including errors
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Wrong Return Value</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Getting None/null instead of expected value<br/>
                <strong>Solution:</strong> Pass value to callback, don't use "return" keyword
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Async Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Wait for Element</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Custom Async Wait</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                element_found = driver.execute_async_script("""<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;var callback = arguments[arguments.length - 1];<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;var checkElement = setInterval(function() {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var elem = document.querySelector('.dynamic');<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (elem) {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clearInterval(checkElement);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback(elem.innerText);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`}`}, 100);<br/>
                """)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Multiple Promises</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Promise.all()</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                results = driver.execute_async_script("""<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;var callback = arguments[arguments.length - 1];<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Promise.all([<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fetch('/api/users').then(r =&gt; r.json()),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fetch('/api/posts').then(r =&gt; r.json())<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;]).then(callback);<br/>
                """)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Error Handling</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Catch Async Errors</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                result = driver.execute_async_script("""<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;var callback = arguments[arguments.length - 1];<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;fetch('/api/data')<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.then(r =&gt; r.json())<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.then(callback)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.catch(err =&gt; callback({`{error: err.message}`}));<br/>
                """)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

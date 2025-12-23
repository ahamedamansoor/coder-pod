'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  History,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function BrowserHistory() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [browserState, setBrowserState] = React.useState({
    currentUrl: '',
    title: '',
    history: [] as string[]
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

  const simulateBrowserHistory = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setBrowserState({
      currentUrl: '',
      title: '',
      history: []
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, nav1: 7, nav2: 10, nav3: 13, back: 16, getUrl: 17, forward: 20, refresh: 23, quit: 26 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, nav1: 7, nav2: 10, nav3: 13, back: 16, getUrl: 17, forward: 20, refresh: 23, quit: 25 };
      } else {
        return { init: 2, nav1: 3, nav2: 6, nav3: 9, back: 12, getUrl: 13, forward: 16, refresh: 19, quit: 21 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      currentUrl: selectedLanguage === 'python' ? 'current_url' : 'currentUrl'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Browser History demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing Chrome browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔗 Navigating to Google...', delay: 1000 * multiplier, element: null, codeLine: lines.nav1, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '✅ Loaded: https://www.google.com', delay: 700 * multiplier, element: 'browser', action: 'nav-google', codeLine: lines.nav1, variable: { name: 'driver', value: 'https://www.google.com' } },
      { step: 4, log: '🔗 Navigating to GitHub...', delay: 1000 * multiplier, element: 'browser', codeLine: lines.nav2, variable: { name: 'driver', value: 'https://www.google.com' } },
      { step: 5, log: '✅ Loaded: https://github.com', delay: 700 * multiplier, element: 'browser', action: 'nav-github', codeLine: lines.nav2, variable: { name: 'driver', value: 'https://github.com' } },
      { step: 6, log: '🔗 Navigating to Stack Overflow...', delay: 1000 * multiplier, element: 'browser', codeLine: lines.nav3, variable: { name: 'driver', value: 'https://github.com' } },
      { step: 7, log: '✅ Loaded: https://stackoverflow.com', delay: 700 * multiplier, element: 'browser', action: 'nav-stackoverflow', codeLine: lines.nav3, variable: { name: 'driver', value: 'https://stackoverflow.com' } },
      { step: 8, log: '⬅️ Going back in history...', delay: 1200 * multiplier, element: 'browser', codeLine: lines.back, variable: { name: 'driver', value: 'https://stackoverflow.com' } },
      { step: 9, log: '✅ Back to: https://github.com', delay: 700 * multiplier, element: 'browser', action: 'back-github', codeLine: lines.back, variable: { name: 'driver', value: 'https://github.com' } },
      { step: 10, log: '📋 Getting current URL...', delay: 800 * multiplier, element: 'browser', codeLine: lines.getUrl, variable: { name: 'driver', value: 'https://github.com' } },
      { step: 11, log: '✅ Current URL: https://github.com', delay: 700 * multiplier, element: 'browser', codeLine: lines.getUrl, variable: { name: varNames.currentUrl, value: 'https://github.com' } },
      { step: 12, log: '➡️ Going forward in history...', delay: 1200 * multiplier, element: 'browser', codeLine: lines.forward, variable: { name: varNames.currentUrl, value: 'https://github.com' } },
      { step: 13, log: '✅ Forward to: https://stackoverflow.com', delay: 700 * multiplier, element: 'browser', action: 'forward-stackoverflow', codeLine: lines.forward, variable: { name: 'driver', value: 'https://stackoverflow.com' } },
      { step: 14, log: '🔄 Refreshing page...', delay: 1200 * multiplier, element: 'browser', codeLine: lines.refresh, variable: { name: 'driver', value: 'https://stackoverflow.com' } },
      { step: 15, log: '✅ Page refreshed', delay: 700 * multiplier, element: 'browser', action: 'refresh', codeLine: lines.refresh, variable: { name: 'driver', value: 'https://stackoverflow.com (refreshed)' } },
      { step: 16, log: '🎉 Browser History demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'driver', value: 'https://stackoverflow.com (refreshed)' } },
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
      
      if (action === 'nav-google') {
        setBrowserState({ currentUrl: 'https://www.google.com', title: 'Google', history: ['https://www.google.com'] });
      } else if (action === 'nav-github') {
        setBrowserState(prev => ({ currentUrl: 'https://github.com', title: 'GitHub', history: [...prev.history, 'https://github.com'] }));
      } else if (action === 'nav-stackoverflow') {
        setBrowserState(prev => ({ currentUrl: 'https://stackoverflow.com', title: 'Stack Overflow', history: [...prev.history, 'https://stackoverflow.com'] }));
      } else if (action === 'back-github') {
        setBrowserState(prev => ({ ...prev, currentUrl: 'https://github.com', title: 'GitHub' }));
      } else if (action === 'forward-stackoverflow') {
        setBrowserState(prev => ({ ...prev, currentUrl: 'https://stackoverflow.com', title: 'Stack Overflow' }));
      } else if (action === 'refresh') {
        setBrowserState(prev => ({ ...prev, title: 'Stack Overflow (Refreshed)' }));
      }
    }

    setIsRunning(false);
  };

  const getBrowserHistoryCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to multiple pages',
        'driver.get("https://www.google.com")',
        '',
        '# Navigate to second page',
        'driver.get("https://github.com")',
        '',
        '# Navigate to third page',
        'driver.get("https://stackoverflow.com")',
        '',
        '# Go back to previous page',
        'driver.back()  # Back to GitHub',
        'current_url = driver.current_url',
        '',
        '# Go forward',
        'driver.forward()  # Forward to Stack Overflow',
        '',
        '# Refresh current page',
        'driver.refresh()',
        '',
        '# Close browser',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        '',
        'WebDriver driver = new ChromeDriver();',
        '',
        '// Navigate to multiple pages',
        'driver.get("https://www.google.com");',
        '',
        '// Navigate to second page',
        'driver.get("https://github.com");',
        '',
        '// Navigate to third page',
        'driver.get("https://stackoverflow.com");',
        '',
        '// Go back to previous page',
        'driver.navigate().back();  // Back to GitHub',
        'String currentUrl = driver.getCurrentUrl();',
        '',
        '// Go forward',
        'driver.navigate().forward();  // Forward to Stack Overflow',
        '',
        '// Refresh current page',
        'driver.navigate().refresh();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.google.com\');',
        '',
        '// Navigate to second page',
        'await driver.get(\'https://github.com\');',
        '',
        '// Navigate to third page',
        'await driver.get(\'https://stackoverflow.com\');',
        '',
        '// Go back to previous page',
        'await driver.navigate().back();  // Back to GitHub',
        'let currentUrl = await driver.getCurrentUrl();',
        '',
        '// Go forward',
        'await driver.navigate().forward();  // Forward to Stack Overflow',
        '',
        '// Refresh current page',
        'await driver.navigate().refresh();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const browserHistoryExample = {
    python: getBrowserHistoryCode('python').join('\n'),
    java: getBrowserHistoryCode('java').join('\n'),
    javascript: getBrowserHistoryCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Browser History"
        description="Learn to navigate browser history with back, forward, and refresh"
        icon={History}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="w-5 h-5 text-amber-600" />
            Browser Navigation Methods
          </CardTitle>
          <CardDescription>
            Control browser history like a user would
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Selenium provides methods to navigate browser history just like clicking browser buttons:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>back():</strong> Go back to previous page in history</li>
            <li><strong>forward():</strong> Go forward to next page in history</li>
            <li><strong>refresh():</strong> Reload the current page</li>
            <li><strong>navigate().to():</strong> Alternative to get() method</li>
          </ul>

          <Alert className="border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20">
            <History className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">History Stack</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Browser maintains a history stack. back() and forward() navigate through this stack, just like browser back/forward buttons.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-amber-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Browser history syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-amber-600 text-amber-600 dark:text-amber-400'
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
                {selectedLanguage === 'python' && `# Navigate to pages
driver.get("https://www.example.com")
driver.get("https://www.google.com")
driver.get("https://github.com")

# Go back
driver.back()  # Back to Google
print(driver.current_url)

# Go back again
driver.back()  # Back to Example

# Go forward
driver.forward()  # Forward to Google

# Refresh page
driver.refresh()

# Alternative navigation (Java style)
driver.back()
driver.forward()
driver.refresh()`}
                {selectedLanguage === 'java' && `// Navigate to pages
driver.get("https://www.example.com");
driver.get("https://www.google.com");
driver.get("https://github.com");

// Go back
driver.navigate().back();  // Back to Google
System.out.println(driver.getCurrentUrl());

// Go back again
driver.navigate().back();  // Back to Example

// Go forward
driver.navigate().forward();  // Forward to Google

// Refresh page
driver.navigate().refresh();

// Navigate to URL (alternative to get)
driver.navigate().to("https://www.example.com");`}
                {selectedLanguage === 'javascript' && `// Navigate to pages
await driver.get('https://www.example.com');
await driver.get('https://www.google.com');
await driver.get('https://github.com');

// Go back
await driver.navigate().back();  // Back to Google
console.log(await driver.getCurrentUrl());

// Go back again
await driver.navigate().back();  // Back to Example

// Go forward
await driver.navigate().forward();  // Forward to Google

// Refresh page
await driver.navigate().refresh();

// Navigate to URL (alternative to get)
await driver.navigate().to('https://www.example.com');`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="w-5 h-5 text-amber-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch browser history navigation in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Browser History Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch back, forward, and refresh operations with inline variable values. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-4 rounded-lg border-2 border-amber-200 dark:border-amber-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-amber-600 dark:text-amber-400" />
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
                        ? 'border-amber-500 bg-amber-100 dark:bg-amber-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-amber-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-history"
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
                  <Code className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateBrowserHistory}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
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
                    onClick={() => copyToClipboard(browserHistoryExample[selectedLanguage], 'Browser History code')}
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
                    {getBrowserHistoryCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-amber-200 dark:bg-amber-900/50 border-l-4 border-amber-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-amber-900 dark:text-amber-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 rounded border border-amber-200 dark:border-amber-700">
                        <div className="text-[10px] font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-amber-800 dark:text-amber-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-amber-600 dark:text-amber-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{browserHistoryExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Browser Window</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-300 dark:border-slate-600 overflow-hidden">
                  <div className="bg-slate-200 dark:bg-slate-700 p-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-6 px-2">
                          <ArrowLeft className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-6 px-2">
                          <ArrowRight className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-6 px-2">
                          <RotateCcw className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-900 rounded px-3 py-1 text-xs font-mono text-slate-600 dark:text-slate-400">
                      {browserState.currentUrl || 'about:blank'}
                    </div>
                  </div>
                  <div className="p-6 min-h-[300px] flex flex-col items-center justify-center">
                    <History className="w-16 h-16 text-amber-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      {browserState.title || 'Loading...'}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {browserState.currentUrl}
                    </p>
                    {browserState.history.length > 0 && (
                      <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-900 rounded-lg w-full">
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">History Stack:</div>
                        <div className="space-y-1">
                          {browserState.history.map((url, index) => (
                            <div key={index} className={`text-xs p-2 rounded ${url === browserState.currentUrl ? 'bg-amber-100 dark:bg-amber-900/30 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>
                              {index + 1}. {url}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
            <History className="w-5 h-5 text-blue-600" />
            Navigation Methods
          </CardTitle>
          <CardDescription>Three essential history operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <ArrowLeft className="w-5 h-5 text-blue-600" />
                <Badge className="bg-blue-600">back()</Badge>
              </div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Go Back</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Navigate to previous page in history stack
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-green-600" />
                <Badge className="bg-green-600">forward()</Badge>
              </div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Go Forward</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Navigate to next page in history stack
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <RotateCcw className="w-5 h-5 text-purple-600" />
                <Badge className="bg-purple-600">refresh()</Badge>
              </div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Refresh Page</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Reload the current page
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Wait After Navigation</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add waits after back/forward to ensure page loads completely
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Verify URL</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Check current_url after navigation to confirm expected page
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Handle Stale Elements</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Re-find elements after refresh as they become stale
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Sparingly</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Prefer direct navigation over back/forward when possible
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
              <AlertTitle className="text-red-900 dark:text-red-100">No History Available</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> back() or forward() does nothing<br/>
                <strong>Solution:</strong> Ensure there's history to navigate (can't go back on first page)
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Stale Element After Refresh</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Elements become stale after refresh<br/>
                <strong>Solution:</strong> Re-find all elements after calling refresh()
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Slow Navigation</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> back/forward takes long time<br/>
                <strong>Solution:</strong> Some pages reload from server; use explicit waits
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Navigate To</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Alternative Navigation</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Java/JavaScript style<br/>
                driver.navigate().to("https://www.example.com")<br/>
                driver.navigate().back()<br/>
                driver.navigate().forward()<br/>
                driver.navigate().refresh()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Hard Refresh</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Clear Cache on Refresh</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Send Ctrl+F5 for hard refresh<br/>
                from selenium.webdriver.common.keys import Keys<br/>
                driver.find_element(By.TAG_NAME, 'body').send_keys(Keys.CONTROL, Keys.F5)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Wait for Load</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Ensure Page Loads After Navigation</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.back()<br/>
                WebDriverWait(driver, 10).until(<br/>
                &nbsp;&nbsp;EC.presence_of_element_located((By.TAG_NAME, "body"))<br/>
                )
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

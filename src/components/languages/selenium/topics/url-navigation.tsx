'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Navigation,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Globe,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function UrlNavigation() {
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
    title: ''
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

  const simulateUrlNavigation = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setBrowserState({
      currentUrl: '',
      title: ''
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, nav1: 7, getUrl: 8, getTitle: 9, nav2: 12, getCurrentUrl: 13, nav3: 16, quit: 19 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, nav1: 7, getUrl: 8, getTitle: 9, nav2: 12, getCurrentUrl: 13, nav3: 16, quit: 18 };
      } else {
        return { init: 2, nav1: 3, getUrl: 4, getTitle: 5, nav2: 8, getCurrentUrl: 9, nav3: 12, quit: 14 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      currentUrl: selectedLanguage === 'python' ? 'current_url' : 'currentUrl',
      pageTitle: selectedLanguage === 'python' ? 'page_title' : 'pageTitle'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting URL Navigation demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing Chrome browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔗 Navigating to Google...', delay: 1000 * multiplier, element: null, codeLine: lines.nav1, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '✅ Loaded: https://www.google.com', delay: 700 * multiplier, element: 'browser', action: 'nav-google', codeLine: lines.nav1, variable: { name: 'driver', value: 'https://www.google.com' } },
      { step: 4, log: '📋 Getting current URL...', delay: 800 * multiplier, element: 'browser', codeLine: lines.getUrl, variable: { name: 'driver', value: 'https://www.google.com' } },
      { step: 5, log: '✅ Current URL retrieved', delay: 700 * multiplier, element: 'browser', codeLine: lines.getUrl, variable: { name: varNames.currentUrl, value: 'https://www.google.com' } },
      { step: 6, log: '📄 Getting page title...', delay: 800 * multiplier, element: 'browser', codeLine: lines.getTitle, variable: { name: varNames.currentUrl, value: 'https://www.google.com' } },
      { step: 7, log: '✅ Page title: "Google"', delay: 700 * multiplier, element: 'browser', codeLine: lines.getTitle, variable: { name: varNames.pageTitle, value: 'Google' } },
      { step: 8, log: '🔗 Navigating to GitHub...', delay: 1000 * multiplier, element: 'browser', codeLine: lines.nav2, variable: { name: varNames.pageTitle, value: 'Google' } },
      { step: 9, log: '✅ Loaded: https://github.com', delay: 700 * multiplier, element: 'browser', action: 'nav-github', codeLine: lines.nav2, variable: { name: 'driver', value: 'https://github.com' } },
      { step: 10, log: '📋 Getting current URL...', delay: 800 * multiplier, element: 'browser', codeLine: lines.getCurrentUrl, variable: { name: 'driver', value: 'https://github.com' } },
      { step: 11, log: '✅ Current URL: https://github.com', delay: 700 * multiplier, element: 'browser', codeLine: lines.getCurrentUrl, variable: { name: varNames.currentUrl, value: 'https://github.com' } },
      { step: 12, log: '🔗 Navigating to Stack Overflow...', delay: 1000 * multiplier, element: 'browser', codeLine: lines.nav3, variable: { name: varNames.currentUrl, value: 'https://github.com' } },
      { step: 13, log: '✅ Loaded: https://stackoverflow.com', delay: 700 * multiplier, element: 'browser', action: 'nav-stackoverflow', codeLine: lines.nav3, variable: { name: 'driver', value: 'https://stackoverflow.com' } },
      { step: 14, log: '🎉 URL Navigation demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'driver', value: 'https://stackoverflow.com' } },
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
        setBrowserState({ currentUrl: 'https://www.google.com', title: 'Google' });
      } else if (action === 'nav-github') {
        setBrowserState({ currentUrl: 'https://github.com', title: 'GitHub' });
      } else if (action === 'nav-stackoverflow') {
        setBrowserState({ currentUrl: 'https://stackoverflow.com', title: 'Stack Overflow' });
      }
    }

    setIsRunning(false);
  };

  const getUrlNavigationCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to URL',
        'driver.get("https://www.google.com")',
        'current_url = driver.current_url  # Get current URL',
        'page_title = driver.title  # Get page title',
        '',
        '# Navigate to another URL',
        'driver.get("https://github.com")',
        'current_url = driver.current_url',
        '',
        '# Navigate to third URL',
        'driver.get("https://stackoverflow.com")',
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
        '// Navigate to URL',
        'driver.get("https://www.google.com");',
        'String currentUrl = driver.getCurrentUrl();  // Get current URL',
        'String pageTitle = driver.getTitle();  // Get page title',
        '',
        '// Navigate to another URL',
        'driver.get("https://github.com");',
        'currentUrl = driver.getCurrentUrl();',
        '',
        '// Navigate to third URL',
        'driver.get("https://stackoverflow.com");',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.google.com\');',
        'let currentUrl = await driver.getCurrentUrl();  // Get current URL',
        'let pageTitle = await driver.getTitle();  // Get page title',
        '',
        '// Navigate to another URL',
        'await driver.get(\'https://github.com\');',
        'currentUrl = await driver.getCurrentUrl();',
        '',
        '// Navigate to third URL',
        'await driver.get(\'https://stackoverflow.com\');',
        '',
        'await driver.quit();',
      ];
    }
  };

  const urlNavigationExample = {
    python: getUrlNavigationCode('python').join('\n'),
    java: getUrlNavigationCode('java').join('\n'),
    javascript: getUrlNavigationCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="URL Navigation"
        description="Learn to navigate between URLs in Selenium WebDriver"
        icon={Navigation}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-teal-600" />
            Navigating to URLs
          </CardTitle>
          <CardDescription>
            Essential methods for loading web pages
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            URL navigation is the foundation of web automation. Selenium provides simple methods to load pages and retrieve information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>get():</strong> Navigate to a URL and wait for page load</li>
            <li><strong>current_url / getCurrentUrl():</strong> Get the current page URL</li>
            <li><strong>title / getTitle():</strong> Get the page title</li>
            <li><strong>Automatic Wait:</strong> get() waits for page load by default</li>
          </ul>

          <Alert className="border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-950/20">
            <Globe className="h-5 w-5 text-teal-600" />
            <AlertTitle className="text-teal-900 dark:text-teal-100">Page Load Strategy</AlertTitle>
            <AlertDescription className="text-teal-800 dark:text-teal-200">
              The get() method waits for the page to fully load before returning control. You can customize this behavior with page load strategies.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-teal-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            URL navigation syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-teal-600 text-teal-600 dark:text-teal-400'
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
                {selectedLanguage === 'python' && `# Navigate to URL
driver.get("https://www.example.com")

# Get current URL
current_url = driver.current_url
print(f"Current URL: {current_url}")

# Get page title
title = driver.title
print(f"Page title: {title}")

# Navigate to another page
driver.get("https://www.google.com")

# Check if URL contains text
if "google" in driver.current_url:
    print("On Google page")

# Get page source
page_source = driver.page_source`}
                {selectedLanguage === 'java' && `// Navigate to URL
driver.get("https://www.example.com");

// Get current URL
String currentUrl = driver.getCurrentUrl();
System.out.println("Current URL: " + currentUrl);

// Get page title
String title = driver.getTitle();
System.out.println("Page title: " + title);

// Navigate to another page
driver.get("https://www.google.com");

// Check if URL contains text
if (driver.getCurrentUrl().contains("google")) {
    System.out.println("On Google page");
}

// Get page source
String pageSource = driver.getPageSource();`}
                {selectedLanguage === 'javascript' && `// Navigate to URL
await driver.get('https://www.example.com');

// Get current URL
let currentUrl = await driver.getCurrentUrl();
console.log(\`Current URL: \${currentUrl}\`);

// Get page title
let title = await driver.getTitle();
console.log(\`Page title: \${title}\`);

// Navigate to another page
await driver.get('https://www.google.com');

// Check if URL contains text
if ((await driver.getCurrentUrl()).includes('google')) {
    console.log('On Google page');
}

// Get page source
let pageSource = await driver.getPageSource();`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-teal-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch URL navigation in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive URL Navigation Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch the browser navigate between different URLs with inline variable values. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-4 rounded-lg border-2 border-teal-200 dark:border-teal-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-teal-600 dark:text-teal-400" />
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
                        ? 'border-teal-500 bg-teal-100 dark:bg-teal-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-teal-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-url"
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
                  <Code className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateUrlNavigation}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
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
                    onClick={() => copyToClipboard(urlNavigationExample[selectedLanguage], 'URL Navigation code')}
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
                    {getUrlNavigationCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-teal-200 dark:bg-teal-900/50 border-l-4 border-teal-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-teal-900 dark:text-teal-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-teal-50 dark:bg-teal-950/30 rounded border border-teal-200 dark:border-teal-700">
                        <div className="text-[10px] font-bold text-teal-900 dark:text-teal-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-teal-800 dark:text-teal-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-teal-600 dark:text-teal-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{urlNavigationExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Browser Window</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-300 dark:border-slate-600 overflow-hidden">
                  <div className="bg-slate-200 dark:bg-slate-700 p-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-900 rounded px-3 py-1 text-xs font-mono text-slate-600 dark:text-slate-400">
                      {browserState.currentUrl || 'about:blank'}
                    </div>
                  </div>
                  <div className="p-6 min-h-[300px] flex flex-col items-center justify-center">
                    <Globe className="w-16 h-16 text-teal-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      {browserState.title || 'Loading...'}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {browserState.currentUrl}
                    </p>
                    {browserState.currentUrl && (
                      <Badge className="bg-teal-600">Page Loaded</Badge>
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
            <CheckCircle className="w-5 h-5 text-green-600" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Full URLs</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always include protocol (http:// or https://) in URLs
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Wait for Load</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  get() waits automatically, but add explicit waits for dynamic content
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Verify Navigation</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Check current_url or title after navigation to confirm success
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Handle Redirects</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Be aware that URLs may redirect to different addresses
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
              <AlertTitle className="text-red-900 dark:text-red-100">Timeout Exception</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Page takes too long to load<br/>
                <strong>Solution:</strong> Increase page load timeout or use different page load strategy
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Invalid URL</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> URL format is incorrect<br/>
                <strong>Solution:</strong> Ensure URL includes protocol (http:// or https://)
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Unexpected Redirect</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Page redirects to different URL<br/>
                <strong>Solution:</strong> Check current_url after navigation to handle redirects
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
              <Badge className="bg-yellow-600 mb-2">Page Load Strategy</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Customize Page Load Behavior</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                options = webdriver.ChromeOptions()<br/>
                options.page_load_strategy = 'eager'  # or 'none'<br/>
                driver = webdriver.Chrome(options=options)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Set Timeout</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Configure Page Load Timeout</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.set_page_load_timeout(30)  # 30 seconds<br/>
                driver.get("https://slow-website.com")
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Get Page Source</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Retrieve HTML Source</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                page_source = driver.page_source<br/>
                print(page_source)  # Full HTML content
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

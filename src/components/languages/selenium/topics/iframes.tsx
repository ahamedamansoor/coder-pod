'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Frame,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  Layers
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function Iframes() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [iframeState, setIframeState] = React.useState({
    currentContext: 'main',
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

  const simulateIframes = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setIframeState({ currentContext: 'main', action: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, switchIndex: 7, findElement: 10, switchName: 13, switchWebElement: 16, switchDefault: 19, quit: 22 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, switchIndex: 7, findElement: 10, switchName: 13, switchWebElement: 16, switchDefault: 19, quit: 21 };
      } else {
        return { init: 2, switchIndex: 5, findElement: 8, switchName: 11, switchWebElement: 14, switchDefault: 17, quit: 19 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Iframes demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '📍 Current context: Main page', delay: 800 * multiplier, element: 'main', codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '🔄 Switching to iframe by index (0)...', delay: 1200 * multiplier, element: null, action: 'switch-index', codeLine: lines.switchIndex, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 4, log: '✅ Switched to iframe', delay: 700 * multiplier, element: 'iframe', codeLine: lines.switchIndex, variable: { name: 'current_frame', value: 'iframe[0]' } },
      { step: 5, log: '🔍 Finding element inside iframe...', delay: 1200 * multiplier, element: 'iframe', codeLine: lines.findElement, variable: { name: 'current_frame', value: 'iframe[0]' } },
      { step: 6, log: '✅ Element found in iframe', delay: 700 * multiplier, element: 'iframe', codeLine: lines.findElement, variable: { name: 'element', value: '<WebElement: input#username>' } },
      { step: 7, log: '🔙 Switching back to main content...', delay: 1200 * multiplier, element: null, action: 'switch-main', codeLine: lines.switchDefault, variable: { name: 'element', value: '<WebElement: input#username>' } },
      { step: 8, log: '✅ Back to main page', delay: 700 * multiplier, element: 'main', codeLine: lines.switchDefault, variable: { name: 'current_frame', value: 'default_content' } },
      { step: 9, log: '🔄 Switching by name attribute...', delay: 1200 * multiplier, element: null, action: 'switch-name', codeLine: lines.switchName, variable: { name: 'current_frame', value: 'default_content' } },
      { step: 10, log: '✅ Switched to iframe "content-frame"', delay: 700 * multiplier, element: 'iframe', codeLine: lines.switchName, variable: { name: 'frame_name', value: 'content-frame' } },
      { step: 11, log: '🔙 Switching back to main...', delay: 1200 * multiplier, element: null, action: 'switch-main', codeLine: lines.switchDefault, variable: { name: 'frame_name', value: 'content-frame' } },
      { step: 12, log: '✅ Back to main page', delay: 700 * multiplier, element: 'main', codeLine: lines.switchDefault, variable: { name: 'current_frame', value: 'default_content' } },
      { step: 13, log: '🔄 Switching by WebElement...', delay: 1200 * multiplier, element: null, action: 'switch-element', codeLine: lines.switchWebElement, variable: { name: 'current_frame', value: 'default_content' } },
      { step: 14, log: '✅ Switched to iframe element', delay: 700 * multiplier, element: 'iframe', codeLine: lines.switchWebElement, variable: { name: 'iframe_element', value: '<WebElement: iframe#myframe>' } },
      { step: 15, log: '🎉 Iframes demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'iframe_element', value: '<WebElement: iframe#myframe>' } },
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
      
      if (action === 'switch-index') {
        setIframeState({ currentContext: 'iframe', action: 'Switched by index' });
      } else if (action === 'switch-name') {
        setIframeState({ currentContext: 'iframe', action: 'Switched by name' });
      } else if (action === 'switch-element') {
        setIframeState({ currentContext: 'iframe', action: 'Switched by WebElement' });
      } else if (action === 'switch-main') {
        setIframeState({ currentContext: 'main', action: 'Back to main content' });
      }
    }

    setIsRunning(false);
  };

  const getIframesCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# Method 1: Switch by index',
        'driver.switch_to.frame(0)  # First iframe',
        '',
        '# Find element inside iframe',
        'element = driver.find_element(By.ID, "username")',
        '',
        '# Switch back to main content',
        'driver.switch_to.default_content()',
        '',
        '# Method 2: Switch by name or id',
        'driver.switch_to.frame("content-frame")',
        '',
        '# Method 3: Switch by WebElement',
        'iframe_element = driver.find_element(By.TAG_NAME, "iframe")',
        'driver.switch_to.frame(iframe_element)',
        '',
        '# Switch back to main',
        'driver.switch_to.default_content()',
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
        '',
        'WebDriver driver = new ChromeDriver();',
        '',
        '// Method 1: Switch by index',
        'driver.switchTo().frame(0);  // First iframe',
        '',
        '// Find element inside iframe',
        'WebElement element = driver.findElement(By.id("username"));',
        '',
        '// Switch back to main content',
        'driver.switchTo().defaultContent();',
        '',
        '// Method 2: Switch by name or id',
        'driver.switchTo().frame("content-frame");',
        '',
        '// Method 3: Switch by WebElement',
        'WebElement iframeElement = driver.findElement(By.tagName("iframe"));',
        'driver.switchTo().frame(iframeElement);',
        '',
        '// Switch back to main',
        'driver.switchTo().defaultContent();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'import { Builder, By } from \'selenium-webdriver\';',
        '',
        'const driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Method 1: Switch by index',
        'await driver.switchTo().frame(0);  // First iframe',
        '',
        '// Find element inside iframe',
        'const element = await driver.findElement(By.id(\'username\'));',
        '',
        '// Switch back to main content',
        'await driver.switchTo().defaultContent();',
        '',
        '// Method 2: Switch by name or id',
        'await driver.switchTo().frame(\'content-frame\');',
        '',
        '// Method 3: Switch by WebElement',
        'const iframeElement = await driver.findElement(By.tagName(\'iframe\'));',
        'await driver.switchTo().frame(iframeElement);',
        '',
        '// Switch back to main',
        'await driver.switchTo().defaultContent();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const iframesExample = {
    python: getIframesCode('python').join('\n'),
    java: getIframesCode('java').join('\n'),
    javascript: getIframesCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Working with Iframes"
        description="Master iframe switching and element interaction"
        icon={Frame}
        category="Selenium · Advanced Locators"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Frame className="w-5 h-5 text-blue-600" />
            Understanding Iframes
          </CardTitle>
          <CardDescription>
            What are iframes and why switching is necessary
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            An iframe (inline frame) is an HTML element that embeds another HTML document within the current page. Selenium cannot directly access elements inside an iframe - you must switch context first.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>switch_to.frame():</strong> Switch to iframe by index, name/id, or WebElement</li>
            <li><strong>switch_to.default_content():</strong> Return to main page context</li>
            <li><strong>switch_to.parent_frame():</strong> Switch to parent frame (Selenium 4+)</li>
            <li><strong>Context Isolation:</strong> Each iframe has its own DOM context</li>
          </ul>

          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Frame className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Context Switching Required</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              You must switch to an iframe before interacting with its elements. After switching, all find_element() calls search within that iframe.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Iframe switching syntax in Python, Java, and JavaScript
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
                {selectedLanguage === 'python' && `from selenium.webdriver.common.by import By

# Switch by index (0-based)
driver.switch_to.frame(0)  # First iframe
driver.switch_to.frame(1)  # Second iframe

# Switch by name or id attribute
driver.switch_to.frame("content-frame")
driver.switch_to.frame("myframe")

# Switch by WebElement (most reliable)
iframe = driver.find_element(By.CSS_SELECTOR, "iframe.content")
driver.switch_to.frame(iframe)

# Find element inside iframe
element = driver.find_element(By.ID, "username")
element.send_keys("testuser")

# Switch back to main content
driver.switch_to.default_content()

# Switch to parent frame (Selenium 4+)
driver.switch_to.parent_frame()

# Check if element is in iframe
iframes = driver.find_elements(By.TAG_NAME, "iframe")
print(f"Found {len(iframes)} iframes on page")

# Switch to each iframe and search
for i in range(len(iframes)):
    driver.switch_to.frame(i)
    try:
        element = driver.find_element(By.ID, "target")
        print(f"Found element in iframe {i}")
        break
    except:
        driver.switch_to.default_content()
        continue`}
                {selectedLanguage === 'java' && `import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

// Switch by index (0-based)
driver.switchTo().frame(0);  // First iframe
driver.switchTo().frame(1);  // Second iframe

// Switch by name or id attribute
driver.switchTo().frame("content-frame");
driver.switchTo().frame("myframe");

// Switch by WebElement (most reliable)
WebElement iframe = driver.findElement(By.cssSelector("iframe.content"));
driver.switchTo().frame(iframe);

// Find element inside iframe
WebElement element = driver.findElement(By.id("username"));
element.sendKeys("testuser");

// Switch back to main content
driver.switchTo().defaultContent();

// Switch to parent frame (Selenium 4+)
driver.switchTo().parentFrame();

// Check if element is in iframe
List<WebElement> iframes = driver.findElements(By.tagName("iframe"));
System.out.println("Found " + iframes.size() + " iframes on page");

// Switch to each iframe and search
for (int i = 0; i < iframes.size(); i++) {
    driver.switchTo().frame(i);
    try {
        WebElement target = driver.findElement(By.id("target"));
        System.out.println("Found element in iframe " + i);
        break;
    } catch (NoSuchElementException e) {
        driver.switchTo().defaultContent();
        continue;
    }
}`}
                {selectedLanguage === 'javascript' && `const { By } = require('selenium-webdriver');

// Switch by index (0-based)
await driver.switchTo().frame(0);  // First iframe
await driver.switchTo().frame(1);  // Second iframe

// Switch by name or id attribute
await driver.switchTo().frame('content-frame');
await driver.switchTo().frame('myframe');

// Switch by WebElement (most reliable)
let iframe = await driver.findElement(By.css('iframe.content'));
await driver.switchTo().frame(iframe);

// Find element inside iframe
let element = await driver.findElement(By.id('username'));
await element.sendKeys('testuser');

// Switch back to main content
await driver.switchTo().defaultContent();

// Switch to parent frame (Selenium 4+)
await driver.switchTo().parentFrame();

// Check if element is in iframe
let iframes = await driver.findElements(By.tagName('iframe'));
console.log(\`Found \${iframes.length} iframes on page\`);

// Switch to each iframe and search
for (let i = 0; i < iframes.length; i++) {
    await driver.switchTo().frame(i);
    try {
        let target = await driver.findElement(By.id('target'));
        console.log(\`Found element in iframe \${i}\`);
        break;
    } catch (e) {
        await driver.switchTo().defaultContent();
        continue;
    }
}`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Frame className="w-5 h-5 text-blue-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch iframe switching in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Iframes Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch iframe context switching with inline variable values!
            </AlertDescription>
          </Alert>

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
                      name="speed-iframe"
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
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateIframes}
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
                    onClick={() => copyToClipboard(iframesExample[selectedLanguage], 'Iframes code')}
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
                    {getIframesCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{iframesExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Iframe Context Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[500px]">
                  <div className={`p-4 rounded-lg border-2 ${selectedElement === 'main' ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30' : 'border-slate-300 dark:border-slate-600'}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <Layers className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Main Page</span>
                    </div>
                    <div className="space-y-3">
                      <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded">
                        <span className="text-xs text-slate-600 dark:text-slate-400">Main content here</span>
                      </div>
                      <div className={`p-4 border-2 border-dashed rounded-lg ${selectedElement === 'iframe' ? 'border-blue-500 bg-blue-100 dark:bg-blue-950/50 ring-4 ring-blue-500' : 'border-slate-400 dark:border-slate-600'}`}>
                        <div className="flex items-center gap-2 mb-3">
                          <Frame className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-semibold text-blue-900 dark:text-blue-100">Iframe Content</span>
                        </div>
                        <div className="space-y-2">
                          <input 
                            type="text" 
                            placeholder="Username (inside iframe)"
                            className="w-full p-2 text-xs border rounded bg-white dark:bg-slate-800"
                            readOnly
                          />
                          <input 
                            type="password" 
                            placeholder="Password (inside iframe)"
                            className="w-full p-2 text-xs border rounded bg-white dark:bg-slate-800"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {iframeState.action && (
                    <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-950/50 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                      <div className="flex items-center gap-2">
                        <Frame className="w-4 h-4 text-blue-600" />
                        <div>
                          <span className="text-sm font-semibold text-blue-900 dark:text-blue-100 block">
                            {iframeState.action}
                          </span>
                          <span className="text-xs text-blue-700 dark:text-blue-300">
                            Current context: {iframeState.currentContext}
                          </span>
                        </div>
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
            <Frame className="w-5 h-5 text-blue-600" />
            Three Ways to Switch Iframes
          </CardTitle>
          <CardDescription>Choose the best method for your use case</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">By Index</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">switch_to.frame(0)</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                driver.switch_to.frame(0)
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                ✓ Simple and fast<br/>
                ✗ Fragile if page structure changes
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">By Name/ID</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">switch_to.frame("name")</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                driver.switch_to.frame("myframe")
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                ✓ More readable<br/>
                ✗ Requires name/id attribute
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">By WebElement</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">switch_to.frame(element)</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                iframe = driver.find_element(...)<br/>
                driver.switch_to.frame(iframe)
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                ✓ Most reliable<br/>
                ✓ Works with any locator
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Always Switch Back</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Call default_content() to return to main page after iframe work
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use WebElement Method</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Prefer switching by WebElement for better reliability
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Wait for Iframe</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use explicit wait for iframe to be available before switching
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Track Context</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Keep track of which iframe you're in to avoid confusion
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
              <AlertTitle className="text-red-900 dark:text-red-100">NoSuchElementException</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Element not found even though it exists<br/>
                <strong>Solution:</strong> Element might be inside an iframe - switch to iframe first
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">NoSuchFrameException</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Cannot switch to iframe<br/>
                <strong>Solution:</strong> Wait for iframe to load or check if name/index is correct
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">StaleElementReferenceException</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Iframe reference becomes stale<br/>
                <strong>Solution:</strong> Re-find the iframe element before switching
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Iframe Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Wait for Iframe</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Explicit Wait</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                from selenium.webdriver.support import expected_conditions as EC<br/>
                <br/>
                wait = WebDriverWait(driver, 10)<br/>
                wait.until(EC.frame_to_be_available_and_switch_to_it("myframe"))
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Search All Iframes</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Find Element Across Iframes</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                iframes = driver.find_elements(By.TAG_NAME, "iframe")<br/>
                for iframe in iframes:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;driver.switch_to.frame(iframe)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;try:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;element = driver.find_element(By.ID, "target")<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;except:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.switch_to.default_content()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Parent Frame (Selenium 4+)</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Switch to Parent</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Switch to nested iframe<br/>
                driver.switch_to.frame(0)<br/>
                driver.switch_to.frame(0)<br/>
                <br/>
                # Go back one level<br/>
                driver.switch_to.parent_frame()
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

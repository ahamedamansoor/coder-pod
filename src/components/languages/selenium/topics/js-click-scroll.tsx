'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  MousePointerClick,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  ArrowDown
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function JsClickScroll() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [actionState, setActionState] = React.useState({
    scrollY: 0,
    clicked: false,
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

  const simulateJsClickScroll = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setActionState({ scrollY: 0, clicked: false, action: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, jsClick: 7, scrollToElement: 10, scrollBy: 13, scrollToBottom: 16, scrollToTop: 19, quit: 22 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, jsClick: 7, scrollToElement: 10, scrollBy: 13, scrollToBottom: 16, scrollToTop: 19, quit: 21 };
      } else {
        return { init: 2, jsClick: 5, scrollToElement: 8, scrollBy: 11, scrollToBottom: 14, scrollToTop: 17, quit: 19 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting JS Click & Scroll demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🖱️ Clicking element with JavaScript...', delay: 1200 * multiplier, element: 'button', action: 'click', codeLine: lines.jsClick, variable: { name: 'element', value: '<WebElement: button#submit>' } },
      { step: 3, log: '✅ Element clicked', delay: 700 * multiplier, element: 'button', codeLine: lines.jsClick, variable: { name: 'clicked', value: 'true' } },
      { step: 4, log: '📜 Scrolling to element...', delay: 1200 * multiplier, element: 'target', action: 'scroll-to-element', codeLine: lines.scrollToElement, variable: { name: 'target', value: '<WebElement: div#target>' } },
      { step: 5, log: '✅ Scrolled to element', delay: 700 * multiplier, element: 'target', codeLine: lines.scrollToElement, variable: { name: 'scroll_y', value: '800' } },
      { step: 6, log: '⬇️ Scrolling by 500px...', delay: 1200 * multiplier, element: null, action: 'scroll-by', codeLine: lines.scrollBy, variable: { name: 'scroll_y', value: '800' } },
      { step: 7, log: '✅ Scrolled down', delay: 700 * multiplier, element: null, codeLine: lines.scrollBy, variable: { name: 'scroll_y', value: '1300' } },
      { step: 8, log: '⬇️ Scrolling to bottom...', delay: 1200 * multiplier, element: null, action: 'scroll-bottom', codeLine: lines.scrollToBottom, variable: { name: 'scroll_y', value: '1300' } },
      { step: 9, log: '✅ Reached bottom', delay: 700 * multiplier, element: null, codeLine: lines.scrollToBottom, variable: { name: 'scroll_y', value: '2000' } },
      { step: 10, log: '⬆️ Scrolling to top...', delay: 1200 * multiplier, element: null, action: 'scroll-top', codeLine: lines.scrollToTop, variable: { name: 'scroll_y', value: '2000' } },
      { step: 11, log: '✅ Reached top', delay: 700 * multiplier, element: null, codeLine: lines.scrollToTop, variable: { name: 'scroll_y', value: '0' } },
      { step: 12, log: '🎉 JS Click & Scroll demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'scroll_y', value: '0' } },
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
        setActionState({ scrollY: 0, clicked: true, action: 'JS Click performed' });
      } else if (action === 'scroll-to-element') {
        setActionState({ scrollY: 800, clicked: true, action: 'Scrolled to element' });
      } else if (action === 'scroll-by') {
        setActionState({ scrollY: 1300, clicked: true, action: 'Scrolled by 500px' });
      } else if (action === 'scroll-bottom') {
        setActionState({ scrollY: 2000, clicked: true, action: 'Scrolled to bottom' });
      } else if (action === 'scroll-top') {
        setActionState({ scrollY: 0, clicked: true, action: 'Scrolled to top' });
      }
    }

    setIsRunning(false);
  };

  const getJsClickScrollCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# JavaScript click (bypasses visibility checks)',
        'element = driver.find_element(By.ID, "submit")',
        'driver.execute_script("arguments[0].click()", element)',
        '',
        '# Scroll to element (bring into view)',
        'target = driver.find_element(By.ID, "target")',
        'driver.execute_script("arguments[0].scrollIntoView()", target)',
        '',
        '# Scroll by amount',
        'driver.execute_script("window.scrollBy(0, 500)")',
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
        '',
        'WebDriver driver = new ChromeDriver();',
        'JavascriptExecutor js = (JavascriptExecutor) driver;',
        '',
        '// JavaScript click (bypasses visibility checks)',
        'WebElement element = driver.findElement(By.id("submit"));',
        'js.executeScript("arguments[0].click()", element);',
        '',
        '// Scroll to element (bring into view)',
        'WebElement target = driver.findElement(By.id("target"));',
        'js.executeScript("arguments[0].scrollIntoView()", target);',
        '',
        '// Scroll by amount',
        'js.executeScript("window.scrollBy(0, 500)");',
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
        '// JavaScript click (bypasses visibility checks)',
        'let element = await driver.findElement(By.id(\'submit\'));',
        'await driver.executeScript("arguments[0].click()", element);',
        '',
        '// Scroll to element (bring into view)',
        'let target = await driver.findElement(By.id(\'target\'));',
        'await driver.executeScript("arguments[0].scrollIntoView()", target);',
        '',
        '// Scroll by amount',
        'await driver.executeScript("window.scrollBy(0, 500)");',
        '',
        '// Scroll to bottom',
        'await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");',
        '',
        '// Scroll to top',
        'await driver.executeScript("window.scrollTo(0, 0)");',
        '',
        'await driver.quit();',
      ];
    }
  };

  const jsClickScrollExample = {
    python: getJsClickScrollCode('python').join('\n'),
    java: getJsClickScrollCode('java').join('\n'),
    javascript: getJsClickScrollCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="JS Click & Scroll"
        description="Click and scroll using JavaScript execution"
        icon={MousePointerClick}
        category="Selenium · JavaScript Execution"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MousePointerClick className="w-5 h-5 text-red-600" />
            JavaScript Click & Scroll
          </CardTitle>
          <CardDescription>
            Bypass Selenium limitations with JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            JavaScript execution provides powerful alternatives to Selenium's native click and scroll methods, especially useful for hidden elements, overlapping elements, or when standard methods fail.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>JS Click:</strong> Click elements regardless of visibility or overlays</li>
            <li><strong>scrollIntoView():</strong> Bring element into viewport</li>
            <li><strong>window.scrollBy():</strong> Scroll by specific pixel amount</li>
            <li><strong>window.scrollTo():</strong> Scroll to absolute position</li>
            <li><strong>Smooth Scrolling:</strong> Add behavior: 'smooth' for animations</li>
          </ul>

          <Alert className="border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-950/20">
            <MousePointerClick className="h-5 w-5 text-red-600" />
            <AlertTitle className="text-red-900 dark:text-red-100">When to Use JS Click</AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              Use JavaScript click when element is hidden, covered by overlay, or Selenium's click() throws ElementClickInterceptedException.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-red-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            JS click and scroll syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-red-600 text-red-600 dark:text-red-400'
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
                {selectedLanguage === 'python' && `# JavaScript Click
element = driver.find_element(By.ID, "hidden-button")
driver.execute_script("arguments[0].click()", element)

# Click with coordinates
driver.execute_script("""
    var element = arguments[0];
    var event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    element.dispatchEvent(event);
""", element)

# Scroll to element (simple)
driver.execute_script("arguments[0].scrollIntoView()", element)

# Scroll to element (centered)
driver.execute_script("arguments[0].scrollIntoView({block: 'center'})", element)

# Scroll to element (smooth)
driver.execute_script(
    "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'})",
    element
)

# Scroll by amount
driver.execute_script("window.scrollBy(0, 500)")  # Down 500px
driver.execute_script("window.scrollBy(0, -500)")  # Up 500px

# Scroll to position
driver.execute_script("window.scrollTo(0, 1000)")  # To 1000px from top

# Scroll to bottom
driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")

# Scroll to top
driver.execute_script("window.scrollTo(0, 0)")

# Scroll element container
container = driver.find_element(By.ID, "scrollable-div")
driver.execute_script("arguments[0].scrollTop = arguments[0].scrollHeight", container)

# Get scroll position
scroll_y = driver.execute_script("return window.pageYOffset")
print(f"Current scroll: {scroll_y}px")

# Check if element is in viewport
in_viewport = driver.execute_script("""
    var elem = arguments[0];
    var rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    );
""", element)

# Scroll horizontally
driver.execute_script("window.scrollBy(500, 0)")  # Right 500px`}
                {selectedLanguage === 'java' && `JavascriptExecutor js = (JavascriptExecutor) driver;

// JavaScript Click
WebElement element = driver.findElement(By.id("hidden-button"));
js.executeScript("arguments[0].click()", element);

// Click with coordinates
js.executeScript(
    "var element = arguments[0];" +
    "var event = new MouseEvent('click', {" +
    "    view: window," +
    "    bubbles: true," +
    "    cancelable: true" +
    "});" +
    "element.dispatchEvent(event);",
    element
);

// Scroll to element (simple)
js.executeScript("arguments[0].scrollIntoView()", element);

// Scroll to element (centered)
js.executeScript("arguments[0].scrollIntoView({block: 'center'})", element);

// Scroll to element (smooth)
js.executeScript(
    "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'})",
    element
);

// Scroll by amount
js.executeScript("window.scrollBy(0, 500)");  // Down 500px
js.executeScript("window.scrollBy(0, -500)");  // Up 500px

// Scroll to position
js.executeScript("window.scrollTo(0, 1000)");  // To 1000px from top

// Scroll to bottom
js.executeScript("window.scrollTo(0, document.body.scrollHeight)");

// Scroll to top
js.executeScript("window.scrollTo(0, 0)");

// Scroll element container
WebElement container = driver.findElement(By.id("scrollable-div"));
js.executeScript("arguments[0].scrollTop = arguments[0].scrollHeight", container);

// Get scroll position
Long scrollY = (Long) js.executeScript("return window.pageYOffset");
System.out.println("Current scroll: " + scrollY + "px");

// Check if element is in viewport
Boolean inViewport = (Boolean) js.executeScript(
    "var elem = arguments[0];" +
    "var rect = elem.getBoundingClientRect();" +
    "return (" +
    "    rect.top >= 0 &&" +
    "    rect.left >= 0 &&" +
    "    rect.bottom <= window.innerHeight &&" +
    "    rect.right <= window.innerWidth" +
    ");",
    element
);

// Scroll horizontally
js.executeScript("window.scrollBy(500, 0)");  // Right 500px`}
                {selectedLanguage === 'javascript' && `// JavaScript Click
let element = await driver.findElement(By.id('hidden-button'));
await driver.executeScript("arguments[0].click()", element);

// Click with coordinates
await driver.executeScript(\`
    var element = arguments[0];
    var event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    element.dispatchEvent(event);
\`, element);

// Scroll to element (simple)
await driver.executeScript("arguments[0].scrollIntoView()", element);

// Scroll to element (centered)
await driver.executeScript("arguments[0].scrollIntoView({block: 'center'})", element);

// Scroll to element (smooth)
await driver.executeScript(
    "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'})",
    element
);

// Scroll by amount
await driver.executeScript("window.scrollBy(0, 500)");  // Down 500px
await driver.executeScript("window.scrollBy(0, -500)");  // Up 500px

// Scroll to position
await driver.executeScript("window.scrollTo(0, 1000)");  // To 1000px from top

// Scroll to bottom
await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");

// Scroll to top
await driver.executeScript("window.scrollTo(0, 0)");

// Scroll element container
let container = await driver.findElement(By.id('scrollable-div'));
await driver.executeScript("arguments[0].scrollTop = arguments[0].scrollHeight", container);

// Get scroll position
let scrollY = await driver.executeScript("return window.pageYOffset");
console.log(\`Current scroll: \${scrollY}px\`);

// Check if element is in viewport
let inViewport = await driver.executeScript(\`
    var elem = arguments[0];
    var rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    );
\`, element);

// Scroll horizontally
await driver.executeScript("window.scrollBy(500, 0)");  // Right 500px`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MousePointerClick className="w-5 h-5 text-red-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch JS click and scroll operations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive JS Click & Scroll Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch JavaScript-based interactions with inline variable values!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-4 rounded-lg border-2 border-red-200 dark:border-red-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-red-600 dark:text-red-400" />
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
                        ? 'border-red-500 bg-red-100 dark:bg-red-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-red-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-jsclick"
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
                  <Code className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateJsClickScroll}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
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
                    onClick={() => copyToClipboard(jsClickScrollExample[selectedLanguage], 'JS Click & Scroll code')}
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
                    {getJsClickScrollCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-red-200 dark:bg-red-900/50 border-l-4 border-red-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-red-900 dark:text-red-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-red-50 dark:bg-red-950/30 rounded border border-red-200 dark:border-red-700">
                        <div className="text-[10px] font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-red-800 dark:text-red-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-red-600 dark:text-red-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{jsClickScrollExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Action Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-300 dark:border-slate-600 h-[500px] overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 bg-slate-200 dark:bg-slate-700 p-2 z-10">
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Scroll Position: {actionState.scrollY}px
                    </div>
                  </div>
                  <div className="h-full overflow-y-auto pt-10" style={{ scrollBehavior: 'smooth' }}>
                    <div className="p-6 space-y-4" style={{ transform: `translateY(-${actionState.scrollY}px)`, transition: 'transform 0.5s ease' }}>
                      <div className={`p-4 rounded-lg ${selectedElement === 'button' ? 'bg-red-100 dark:bg-red-950/30 ring-4 ring-red-500' : 'bg-slate-100 dark:bg-slate-900'}`}>
                        <Button className={`w-full ${actionState.clicked ? 'bg-green-600' : 'bg-red-600'}`}>
                          {actionState.clicked ? '✓ Clicked!' : 'Click Me'}
                        </Button>
                      </div>
                      <div className="h-32 bg-blue-100 dark:bg-blue-950/30 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">Section 1</span>
                      </div>
                      <div className="h-32 bg-green-100 dark:bg-green-950/30 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-green-900 dark:text-green-100">Section 2</span>
                      </div>
                      <div className={`h-32 rounded-lg flex items-center justify-center ${selectedElement === 'target' ? 'bg-red-200 dark:bg-red-900/50 ring-4 ring-red-500' : 'bg-purple-100 dark:bg-purple-950/30'}`}>
                        <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">Target Element</span>
                      </div>
                      <div className="h-32 bg-orange-100 dark:bg-orange-950/30 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-orange-900 dark:text-orange-100">Section 3</span>
                      </div>
                      <div className="h-32 bg-yellow-100 dark:bg-yellow-950/30 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-yellow-900 dark:text-yellow-100">Bottom Section</span>
                      </div>
                    </div>
                  </div>
                  {actionState.action && (
                    <div className="absolute bottom-4 right-4 p-3 bg-red-100 dark:bg-red-950/50 rounded-lg border-2 border-red-300 dark:border-red-700">
                      <div className="flex items-center gap-2">
                        <ArrowDown className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-semibold text-red-900 dark:text-red-100">
                          {actionState.action}
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
            <MousePointerClick className="w-5 h-5 text-blue-600" />
            JS Click vs Selenium Click
          </CardTitle>
          <CardDescription>When to use each method</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Selenium Click</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">element.click()</h4>
              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div>✓ Simulates real user interaction</div>
                <div>✓ Waits for element to be clickable</div>
                <div>✓ Triggers all event listeners</div>
                <div>✗ Fails if element is hidden/covered</div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
              <Badge className="bg-red-600 mb-2">JavaScript Click</Badge>
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2 text-sm">execute_script("...click()")</h4>
              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div>✓ Works on hidden elements</div>
                <div>✓ Bypasses overlays</div>
                <div>✓ No visibility checks</div>
                <div>✗ May not trigger all events</div>
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Try Selenium First</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use element.click() first, fall back to JS click if it fails
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Scroll Before Click</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use scrollIntoView() to bring element into viewport
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Smooth Scrolling</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add {`{behavior: 'smooth'}`} for better visual experience
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Wait After Scroll</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add small wait after scrolling for page to settle
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
              <AlertTitle className="text-red-900 dark:text-red-100">ElementClickInterceptedException</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Element is covered by another element<br/>
                <strong>Solution:</strong> Use JavaScript click or scroll element into view first
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Element Not in Viewport</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Element is outside visible area<br/>
                <strong>Solution:</strong> Use scrollIntoView() before clicking
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
            Advanced Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Retry Click</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Fallback Pattern</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                try:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;element.click()<br/>
                except ElementClickInterceptedException:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;driver.execute_script("arguments[0].click()", element)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Scroll and Wait</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Scroll with Delay</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("arguments[0].scrollIntoView()", element)<br/>
                time.sleep(0.5)  # Wait for scroll to complete<br/>
                element.click()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Check Visibility</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Verify Element in Viewport</h4>
                <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                in_view = driver.execute_script("""<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;var rect = arguments[0].getBoundingClientRect();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;return rect.top &gt;= 0 && rect.bottom &lt;= window.innerHeight;<br/>
                """, element)<br/>
                if not in_view:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;driver.execute_script("arguments[0].scrollIntoView()", element)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

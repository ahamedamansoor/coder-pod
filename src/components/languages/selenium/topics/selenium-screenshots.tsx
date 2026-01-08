'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Camera,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Image as ImageIcon,
  Layers,
  Maximize2,
  Eye,
  Monitor,
  Gauge,
  AlertCircle
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function SeleniumScreenshots() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [capturedScreenshot, setCapturedScreenshot] = React.useState<string | null>(null);
  const [screenshotType, setScreenshotType] = React.useState<'full' | 'element' | 'viewport'>('full');
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});

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

  const simulateScreenshot = async () => {
    setIsRunning(true);
    setCurrentStep(0);
    setCapturedScreenshot(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, nav: 7, fullPage: 10, element: 13, save: 16, quit: 19 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, nav: 7, fullPage: 10, element: 13, save: 16, quit: 18 };
      } else {
        return { init: 2, nav: 3, fullPage: 6, element: 9, save: 12, quit: 14 };
      }
    };
    const lines = getCodeLines();

    const steps = [
      { step: 0, delay: 500 * multiplier, codeLine: 0, variable: null },
      { step: 1, delay: 600 * multiplier, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, delay: 1000 * multiplier, codeLine: lines.nav, variable: { name: 'driver', value: 'https://example.com' } },
      { step: 3, delay: 1200 * multiplier, codeLine: lines.fullPage, variable: { name: 'driver', value: 'https://example.com' }, screenshot: 'full' },
      { step: 4, delay: 1000 * multiplier, codeLine: lines.element, variable: { name: 'element', value: '<WebElement: button>' }, screenshot: 'element' },
      { step: 5, delay: 800 * multiplier, codeLine: lines.save, variable: { name: 'screenshot', value: 'screenshot_20231215.png' } },
      { step: 6, delay: 500 * multiplier, codeLine: lines.quit, variable: null },
    ];

    for (const { step, delay, codeLine, variable, screenshot } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (screenshot) {
        setCapturedScreenshot(screenshot);
        setScreenshotType(screenshot as 'full' | 'element');
      }
    }

    setIsRunning(false);
  };

  const getScreenshotCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to page',
        'driver.get("https://example.com")',
        '',
        '# Take full page screenshot',
        'driver.save_screenshot("full_page.png")',
        '',
        '# Take element screenshot',
        'element = driver.find_element(By.ID, "logo")',
        'element.screenshot("element.png")',
        '',
        '# Get screenshot as base64',
        'screenshot_base64 = driver.get_screenshot_as_base64()',
        '',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.OutputType;',
        '',
        'WebDriver driver = new ChromeDriver();',
        '',
        '// Navigate to page',
        'driver.get("https://example.com");',
        '',
        '// Take full page screenshot',
        'File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);',
        '',
        '// Take element screenshot',
        'WebElement element = driver.findElement(By.id("logo"));',
        'File elementScreenshot = element.getScreenshotAs(OutputType.FILE);',
        '',
        '// Get screenshot as base64',
        'String base64 = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BASE64);',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://example.com\');',
        '',
        '// Take full page screenshot',
        'await driver.takeScreenshot().then(data => fs.writeFileSync(\'full_page.png\', data, \'base64\'));',
        '',
        '// Take element screenshot',
        'let element = await driver.findElement(By.id(\'logo\'));',
        'await element.takeScreenshot().then(data => fs.writeFileSync(\'element.png\', data, \'base64\'));',
        '',
        '// Get screenshot as base64',
        'let base64 = await driver.takeScreenshot();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const screenshotExample = {
    python: getScreenshotCode('python').join('\n'),
    java: getScreenshotCode('java').join('\n'),
    javascript: getScreenshotCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Taking Screenshots"
        description="Learn to capture full page and element screenshots with Selenium"
        icon={Camera}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-blue-600" />
            Screenshot Methods
          </CardTitle>
          <CardDescription>
            Capture visual evidence of your test execution
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Selenium provides multiple methods to capture screenshots during test execution:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>save_screenshot():</strong> Save full page screenshot to file</li>
            <li><strong>element.screenshot():</strong> Capture specific element screenshot</li>
            <li><strong>get_screenshot_as_base64():</strong> Get screenshot as base64 string</li>
            <li><strong>get_screenshot_as_png():</strong> Get screenshot as binary PNG data</li>
          </ul>

          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Camera className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Visual Documentation</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Screenshots are essential for debugging test failures and documenting test execution. They provide visual evidence of what the browser displayed at specific moments.
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
            Screenshot syntax in Python, Java, and JavaScript
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
                {selectedLanguage === 'python' && `# Full page screenshot
driver.save_screenshot("full_page.png")

# Element screenshot
element = driver.find_element(By.ID, "logo")
element.screenshot("element.png")

# Screenshot as base64
screenshot_base64 = driver.get_screenshot_as_base64()

# Screenshot as PNG bytes
screenshot_png = driver.get_screenshot_as_png()

# Save with timestamp
from datetime import datetime
timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
driver.save_screenshot(f"screenshot_{timestamp}.png")`}
                {selectedLanguage === 'java' && `// Full page screenshot
File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(screenshot, new File("full_page.png"));

// Element screenshot
WebElement element = driver.findElement(By.id("logo"));
File elementScreenshot = element.getScreenshotAs(OutputType.FILE);

// Screenshot as base64
String base64 = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BASE64);

// Screenshot as bytes
byte[] bytes = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);

// Save with timestamp
String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
FileUtils.copyFile(screenshot, new File("screenshot_" + timestamp + ".png"));`}
                {selectedLanguage === 'javascript' && `// Full page screenshot
await driver.takeScreenshot().then(data => {
  fs.writeFileSync('full_page.png', data, 'base64');
});

// Element screenshot
let element = await driver.findElement(By.id('logo'));
await element.takeScreenshot().then(data => {
  fs.writeFileSync('element.png', data, 'base64');
});

// Screenshot as base64
let base64 = await driver.takeScreenshot();

// Save with timestamp
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
await driver.takeScreenshot().then(data => {
  fs.writeFileSync(\`screenshot_\${timestamp}.png\`, data, 'base64');
});`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-blue-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch screenshot capture in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Screenshot Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch full page and element screenshots being captured with inline variable values. Adjust speed and click "Run Demo"!
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
                      name="speed-screenshot"
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
                    onClick={simulateScreenshot}
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
                    onClick={() => copyToClipboard(screenshotExample[selectedLanguage], 'Screenshot code')}
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
                    {getScreenshotCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{screenshotExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 2 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Screenshot Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-300 dark:border-slate-600 overflow-hidden">
                  <div className="bg-slate-200 dark:bg-slate-700 p-2">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 bg-white dark:bg-slate-900 rounded px-3 py-1 text-xs font-mono text-slate-600 dark:text-slate-400">
                        https://example.com
                      </div>
                    </div>
                  </div>
                  <div className="p-6 min-h-[300px] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
                    {capturedScreenshot ? (
                      <div className="text-center animate-in fade-in duration-500">
                        <Camera className="w-16 h-16 text-blue-600 mb-4 mx-auto animate-pulse" />
                        <Badge className="bg-blue-600 mb-4">
                          <ImageIcon className="w-3 h-3 mr-1" />
                          {screenshotType === 'full' ? 'Full Page Screenshot' : 'Element Screenshot'}
                        </Badge>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                          Screenshot Captured
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {screenshotType === 'full' ? 'Full page screenshot saved' : 'Element screenshot saved'}
                        </p>
                        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                          <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">File saved:</div>
                          <div className="text-sm font-mono text-blue-600 dark:text-blue-400">
                            {screenshotType === 'full' ? 'full_page.png' : 'element.png'}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-slate-400 dark:text-slate-500">
                        <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Waiting for screenshot capture...</p>
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
            <Camera className="w-5 h-5 text-green-600" />
            Screenshot Types
          </CardTitle>
          <CardDescription>Three main screenshot capture methods</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Maximize2 className="w-5 h-5 text-blue-600" />
                <Badge className="bg-blue-600">Full Page</Badge>
              </div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">save_screenshot()</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Capture entire visible page including scrollable content
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-green-600" />
                <Badge className="bg-green-600">Element</Badge>
              </div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">element.screenshot()</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Capture specific web element only
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-purple-600" />
                <Badge className="bg-purple-600">Base64</Badge>
              </div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">get_screenshot_as_base64()</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Get screenshot as base64 encoded string
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Timestamps</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add timestamps to screenshot filenames to avoid overwriting
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Organize by Test</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Store screenshots in test-specific directories for easy debugging
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Capture on Failure</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Automatically capture screenshots when tests fail for debugging
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Clean Up Old Screenshots</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Implement cleanup strategy to manage disk space usage
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
              <AlertTitle className="text-red-900 dark:text-red-100">Screenshot Not Saving</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Screenshot file not created<br/>
                <strong>Solution:</strong> Ensure directory exists and you have write permissions
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Element Not Visible</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Element screenshot is blank or partial<br/>
                <strong>Solution:</strong> Scroll element into view before capturing screenshot
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Large File Sizes</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Screenshot files are too large<br/>
                <strong>Solution:</strong> Use element screenshots instead of full page when possible
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SeleniumScreenshots;

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  XCircle,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  FileImage,
  Camera,
  Monitor,
  Gauge,
  AlertCircle,
  Shield,
  Bug,
  FolderOpen
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ScreenshotOnFailure() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [testFailed, setTestFailed] = React.useState(false);
  const [screenshotCaptured, setScreenshotCaptured] = React.useState(false);
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

  const simulateFailureTest = async () => {
    setIsRunning(true);
    setCurrentStep(0);
    setTestFailed(false);
    setScreenshotCaptured(false);
    setCurrentCodeLine(-1);
    setLiveVariables({});

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, nav: 7, test: 10, fail: 13, capture: 16, save: 19, quit: 22 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, nav: 7, test: 10, fail: 13, capture: 16, save: 19, quit: 21 };
      } else {
        return { init: 2, nav: 3, test: 6, fail: 9, capture: 12, save: 15, quit: 17 };
      }
    };
    const lines = getCodeLines();

    const steps = [
      { step: 0, delay: 500 * multiplier, codeLine: 0, variable: null },
      { step: 1, delay: 600 * multiplier, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, delay: 1000 * multiplier, codeLine: lines.nav, variable: { name: 'driver', value: 'https://example.com/login' } },
      { step: 3, delay: 1200 * multiplier, codeLine: lines.test, variable: { name: 'driver', value: 'Running test...' } },
      { step: 4, delay: 1000 * multiplier, codeLine: lines.fail, variable: { name: 'test', value: 'FAILED' }, failed: true },
      { step: 5, delay: 800 * multiplier, codeLine: lines.capture, variable: { name: 'screenshot', value: 'Capturing...' } },
      { step: 6, delay: 1000 * multiplier, codeLine: lines.save, variable: { name: 'screenshot', value: 'test_login_20231215.png' }, captured: true },
      { step: 7, delay: 500 * multiplier, codeLine: lines.quit, variable: null },
    ];

    for (const { step, delay, codeLine, variable, failed, captured } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (failed) {
        setTestFailed(true);
      }
      
      if (captured) {
        setScreenshotCaptured(true);
      }
    }

    setIsRunning(false);
  };

  const getFailureScreenshotCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'import pytest',
        'from selenium import webdriver',
        'from datetime import datetime',
        '',
        'driver = webdriver.Chrome()',
        '',
        'try:',
        '    driver.get("https://example.com/login")',
        '    ',
        '    # Test logic here',
        '    assert element.is_displayed()  # Test fails',
        '    ',
        'except AssertionError as e:',
        '    # Test failed - capture screenshot',
        '    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")',
        '    ',
        '    # Save screenshot to failures directory',
        '    os.makedirs("failures", exist_ok=True)',
        '    filename = f"failures/test_login_{timestamp}.png"',
        '    driver.save_screenshot(filename)',
        '    ',
        '    raise e',
        'finally:',
        '    driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.testng.ITestResult;',
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.TakesScreenshot;',
        '',
        'WebDriver driver = new ChromeDriver();',
        '',
        'try {',
        '    driver.get("https://example.com/login");',
        '    ',
        '    // Test logic here',
        '    Assert.assertTrue(element.isDisplayed());  // Test fails',
        '    ',
        '} catch (AssertionError e) {',
        '    // Test failed - capture screenshot',
        '    String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());',
        '    ',
        '    // Save screenshot to failures directory',
        '    File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);',
        '    String filename = "failures/test_login_" + timestamp + ".png";',
        '    FileUtils.copyFile(screenshot, new File(filename));',
        '    ',
        '    throw e;',
        '} finally {',
        '    driver.quit();',
        '}',
      ];
    } else {
      return [
        'const { Builder } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://example.com/login\');',
        '',
        'try {',
        '    // Test logic here',
        '    const isDisplayed = await element.isDisplayed();',
        '    assert(isDisplayed);  // Test fails',
        '} catch (error) {',
        '    // Test failed - capture screenshot',
        '    const timestamp = new Date().toISOString().replace(/[:.]/g, \'-\');',
        '    ',
        '    // Save screenshot to failures directory',
        '    const filename = `failures/test_login_${timestamp}.png`;',
        '    await driver.takeScreenshot().then(data => {',
        '        fs.writeFileSync(filename, data, \'base64\');',
        '    });',
        '    throw error;',
        '} finally {',
        '    await driver.quit();',
        '}',
      ];
    }
  };

  const failureExample = {
    python: getFailureScreenshotCode('python').join('\n'),
    java: getFailureScreenshotCode('java').join('\n'),
    javascript: getFailureScreenshotCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Screenshot on Failure"
        description="Automatically capture screenshots when tests fail for debugging"
        icon={XCircle}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-orange-600" />
            Failure Screenshot Strategy
          </CardTitle>
          <CardDescription>
            Capture visual evidence when tests fail
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Automatically capturing screenshots on test failure is essential for debugging:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Try-Catch Blocks:</strong> Capture screenshots in exception handlers</li>
            <li><strong>Test Hooks:</strong> Use framework hooks to capture on failure</li>
            <li><strong>Timestamped Files:</strong> Save with timestamps to avoid overwriting</li>
            <li><strong>Organized Storage:</strong> Store in dedicated failures directory</li>
          </ul>

          <Alert className="border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/20">
            <XCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Debug Faster</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Failure screenshots provide immediate visual context about what went wrong, dramatically reducing debugging time and helping identify issues that might not be obvious from logs alone.
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
            Failure screenshot implementation in Python, Java, and JavaScript
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
                {selectedLanguage === 'python' && `# Using pytest hook for automatic screenshots
@pytest.hookimpl(tryfirst=True, hookwrapper=True)
def pytest_runtest_makereport(item, call):
    outcome = yield
    report = outcome.get_result()
    
    if report.when == "call" and report.failed:
        driver = item.funcargs.get('driver')
        if driver:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            os.makedirs("failures", exist_ok=True)
            driver.save_screenshot(f"failures/{item.name}_{timestamp}.png")

# Using try-except for manual capture
try:
    driver.get("https://example.com")
    assert element.is_displayed()
except AssertionError:
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    driver.save_screenshot(f"failures/test_{timestamp}.png")
    raise`}
                {selectedLanguage === 'java' && `// Using TestNG @AfterMethod
@AfterMethod
public void tearDown(ITestResult result) {
    if (result.getStatus() == ITestResult.FAILURE) {
        String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
        File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        String filename = "failures/" + result.getName() + "_" + timestamp + ".png";
        FileUtils.copyFile(screenshot, new File(filename));
    }
    driver.quit();
}

// Using try-catch for manual capture
try {
    driver.get("https://example.com");
    Assert.assertTrue(element.isDisplayed());
} catch (AssertionError e) {
    String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
    File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
    FileUtils.copyFile(screenshot, new File("failures/test_" + timestamp + ".png"));
    throw e;
}`}
                {selectedLanguage === 'javascript' && `// Using Mocha afterEach hook
afterEach(async function() {
    if (this.currentTest.state === 'failed') {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = \`failures/\${this.currentTest.title}_\${timestamp}.png\`;
        await driver.takeScreenshot().then(data => {
            fs.writeFileSync(filename, data, 'base64');
        });
    }
});

// Using try-catch for manual capture
try {
    await driver.get('https://example.com');
    const isDisplayed = await element.isDisplayed();
    assert(isDisplayed);
} catch (error) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await driver.takeScreenshot().then(data => {
        fs.writeFileSync(\`failures/test_\${timestamp}.png\`, data, 'base64');
    });
    throw error;
}`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-orange-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch failure screenshot capture in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/20">
            <Play className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Interactive Failure Demo</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Watch how screenshots are automatically captured when tests fail with inline variable values. Adjust speed and click "Run Demo"!
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
                      name="speed-failure"
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
                    onClick={simulateFailureTest}
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
                    onClick={() => copyToClipboard(failureExample[selectedLanguage], 'Failure screenshot code')}
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
                    {getFailureScreenshotCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{failureExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 2 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Test Execution</h4>
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
                        https://example.com/login
                      </div>
                    </div>
                  </div>
                  <div className="p-6 min-h-[300px] flex flex-col items-center justify-center">
                    {screenshotCaptured ? (
                      <div className="text-center animate-in fade-in duration-500">
                        <FileImage className="w-16 h-16 text-green-600 mb-4 mx-auto animate-pulse" />
                        <Badge className="bg-green-600 mb-4">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Screenshot Saved
                        </Badge>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                          Failure Screenshot Captured
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                          Screenshot saved to failures directory
                        </p>
                        <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                          <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Saved as:</div>
                          <div className="text-sm font-mono text-red-600 dark:text-red-400">
                            failures/test_login_20231215.png
                          </div>
                        </div>
                      </div>
                    ) : testFailed ? (
                      <div className="text-center animate-pulse">
                        <XCircle className="w-16 h-16 text-red-600 mb-4 mx-auto" />
                        <Badge className="bg-red-600 mb-4">
                          <XCircle className="w-3 h-3 mr-1" />
                          Test Failed
                        </Badge>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                          Test Failure Detected
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Capturing screenshot...
                        </p>
                      </div>
                    ) : (
                      <div className="text-center text-slate-400 dark:text-slate-500">
                        <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Running test...</p>
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
            <Shield className="w-5 h-5 text-green-600" />
            Failure Capture Methods
          </CardTitle>
          <CardDescription>Three approaches to capture failure screenshots</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Bug className="w-5 h-5 text-blue-600" />
                <Badge className="bg-blue-600">Try-Catch</Badge>
              </div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Manual Capture</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Capture screenshots in exception handlers for specific tests
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-green-600" />
                <Badge className="bg-green-600">Test Hooks</Badge>
              </div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Framework Hooks</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Use pytest, TestNG, or Mocha hooks for automatic capture
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <FolderOpen className="w-5 h-5 text-purple-600" />
                <Badge className="bg-purple-600">Organized</Badge>
              </div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Directory Structure</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Store in failures/ directory with timestamps
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Always Use Timestamps</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Include timestamps in filenames to preserve all failure evidence
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Include Test Name</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add test name to filename for easy identification
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Create Failures Directory</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ensure failures directory exists before saving screenshots
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Capture Before Cleanup</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Take screenshot before closing browser or cleaning up
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
              <AlertTitle className="text-red-900 dark:text-red-100">Directory Not Found</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Screenshot fails because failures directory doesn't exist<br/>
                <strong>Solution:</strong> Create directory with os.makedirs() or Files.createDirectories()
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Browser Already Closed</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Cannot capture screenshot because browser closed<br/>
                <strong>Solution:</strong> Capture screenshot before driver.quit() in finally block
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Screenshots Overwriting</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Multiple test failures overwrite same screenshot file<br/>
                <strong>Solution:</strong> Always include timestamp and test name in filename
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ScreenshotOnFailure;

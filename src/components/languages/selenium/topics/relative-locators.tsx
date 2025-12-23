'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Compass,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  Grid
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function RelativeLocators() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [gridData, setGridData] = React.useState({
    centerElement: false,
    aboveElement: false,
    belowElement: false,
    leftElement: false,
    rightElement: false,
    nearElement: false
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

  const simulateRelativeLocators = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setGridData({
      centerElement: false,
      aboveElement: false,
      belowElement: false,
      leftElement: false,
      rightElement: false,
      nearElement: false
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 8, center: 11, above: 14, below: 17, left: 20, right: 23, near: 26, quit: 29 };
      } else if (selectedLanguage === 'java') {
        return { nav: 8, center: 11, above: 14, below: 17, left: 20, right: 23, near: 26, quit: 28 };
      } else {
        return { nav: 4, center: 7, above: 10, below: 13, left: 16, right: 19, near: 22, quit: 24 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      center: selectedLanguage === 'python' ? 'center_button' : 'centerButton',
      above: selectedLanguage === 'python' ? 'above_element' : 'aboveElement',
      below: selectedLanguage === 'python' ? 'below_element' : 'belowElement',
      left: selectedLanguage === 'python' ? 'left_element' : 'leftElement',
      right: selectedLanguage === 'python' ? 'right_element' : 'rightElement',
      near: selectedLanguage === 'python' ? 'near_element' : 'nearElement'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Relative Locators demo - Grid Navigation...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading grid layout page...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🎯 Finding center reference element by ID...', delay: 800 * multiplier, element: null, codeLine: lines.center },
      { step: 3, log: '✅ Found center button', delay: 700 * multiplier, element: 'center', codeLine: lines.center, variable: { name: varNames.center, value: '<WebElement: button#center>' }, action: 'center' },
      { step: 4, log: '🔍 Using above() - Finding element above center...', delay: 800 * multiplier, element: 'center', codeLine: lines.above, variable: { name: varNames.center, value: '<WebElement: button#center>' } },
      { step: 5, log: '⬆️ Found element above center', delay: 700 * multiplier, element: 'above', codeLine: lines.above, variable: { name: varNames.above, value: '<WebElement: button#top>' }, action: 'above' },
      { step: 6, log: '🔍 Using below() - Finding element below center...', delay: 800 * multiplier, element: 'above', codeLine: lines.below, variable: { name: varNames.above, value: '<WebElement: button#top>' } },
      { step: 7, log: '⬇️ Found element below center', delay: 700 * multiplier, element: 'below', codeLine: lines.below, variable: { name: varNames.below, value: '<WebElement: button#bottom>' }, action: 'below' },
      { step: 8, log: '🔍 Using toLeftOf() - Finding element left of center...', delay: 800 * multiplier, element: 'below', codeLine: lines.left, variable: { name: varNames.below, value: '<WebElement: button#bottom>' } },
      { step: 9, log: '⬅️ Found element to the left', delay: 700 * multiplier, element: 'left', codeLine: lines.left, variable: { name: varNames.left, value: '<WebElement: button#left>' }, action: 'left' },
      { step: 10, log: '🔍 Using toRightOf() - Finding element right of center...', delay: 800 * multiplier, element: 'left', codeLine: lines.right, variable: { name: varNames.left, value: '<WebElement: button#left>' } },
      { step: 11, log: '➡️ Found element to the right', delay: 700 * multiplier, element: 'right', codeLine: lines.right, variable: { name: varNames.right, value: '<WebElement: button#right>' }, action: 'right' },
      { step: 12, log: '🔍 Using near() - Finding nearby element...', delay: 800 * multiplier, element: 'right', codeLine: lines.near, variable: { name: varNames.right, value: '<WebElement: button#right>' } },
      { step: 13, log: '📍 Found nearby element (within 50px)', delay: 700 * multiplier, element: 'near', codeLine: lines.near, variable: { name: varNames.near, value: '<WebElement: div.info>' }, action: 'near' },
      { step: 14, log: '🎉 Relative locators demo completed successfully!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
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
      
      if (action === 'center') {
        setGridData(prev => ({ ...prev, centerElement: true }));
      } else if (action === 'above') {
        setGridData(prev => ({ ...prev, aboveElement: true }));
      } else if (action === 'below') {
        setGridData(prev => ({ ...prev, belowElement: true }));
      } else if (action === 'left') {
        setGridData(prev => ({ ...prev, leftElement: true }));
      } else if (action === 'right') {
        setGridData(prev => ({ ...prev, rightElement: true }));
      } else if (action === 'near') {
        setGridData(prev => ({ ...prev, nearElement: true }));
      }
    }

    setIsRunning(false);
  };

  const getRelativeLocatorCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.support.relative_locator import locate_with',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to grid layout page',
        'driver.get("https://www.example.com/grid")',
        '',
        '# 🎯 Find center reference element',
        'center_button = driver.find_element(By.ID, "center")',
        '',
        '# ⬆️ Find element above center',
        'above_element = driver.find_element(locate_with(By.TAG_NAME, "button").above(center_button))',
        '',
        '# ⬇️ Find element below center',
        'below_element = driver.find_element(locate_with(By.TAG_NAME, "button").below(center_button))',
        '',
        '# ⬅️ Find element to the left of center',
        'left_element = driver.find_element(locate_with(By.TAG_NAME, "button").to_left_of(center_button))',
        '',
        '# ➡️ Find element to the right of center',
        'right_element = driver.find_element(locate_with(By.TAG_NAME, "button").to_right_of(center_button))',
        '',
        '# 📍 Find element near center (within 50px)',
        'near_element = driver.find_element(locate_with(By.CLASS_NAME, "info").near(center_button))',
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
        'import static org.openqa.selenium.support.locators.RelativeLocator.with;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com/grid");',
        '',
        '// 🎯 Find center reference element',
        'WebElement centerButton = driver.findElement(By.id("center"));',
        '',
        '// ⬆️ Find element above center',
        'WebElement aboveElement = driver.findElement(with(By.tagName("button")).above(centerButton));',
        '',
        '// ⬇️ Find element below center',
        'WebElement belowElement = driver.findElement(with(By.tagName("button")).below(centerButton));',
        '',
        '// ⬅️ Find element to the left of center',
        'WebElement leftElement = driver.findElement(with(By.tagName("button")).toLeftOf(centerButton));',
        '',
        '// ➡️ Find element to the right of center',
        'WebElement rightElement = driver.findElement(with(By.tagName("button")).toRightOf(centerButton));',
        '',
        '// 📍 Find element near center (within 50px)',
        'WebElement nearElement = driver.findElement(with(By.className("info")).near(centerButton));',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By, locateWith } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com/grid\');',
        '',
        '// 🎯 Find center reference element',
        'let centerButton = await driver.findElement(By.id(\'center\'));',
        '',
        '// ⬆️ Find element above center',
        'let aboveElement = await driver.findElement(locateWith(By.tagName(\'button\')).above(centerButton));',
        '',
        '// ⬇️ Find element below center',
        'let belowElement = await driver.findElement(locateWith(By.tagName(\'button\')).below(centerButton));',
        '',
        '// ⬅️ Find element to the left of center',
        'let leftElement = await driver.findElement(locateWith(By.tagName(\'button\')).toLeftOf(centerButton));',
        '',
        '// ➡️ Find element to the right of center',
        'let rightElement = await driver.findElement(locateWith(By.tagName(\'button\')).toRightOf(centerButton));',
        '',
        '// 📍 Find element near center (within 50px)',
        'let nearElement = await driver.findElement(locateWith(By.className(\'info\')).near(centerButton));',
        '',
        'await driver.quit();',
      ];
    }
  };

  const relativeLocatorExample = {
    python: getRelativeLocatorCode('python').join('\n'),
    java: getRelativeLocatorCode('java').join('\n'),
    javascript: getRelativeLocatorCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Relative Locators"
        description="Selenium 4's powerful feature for finding elements based on spatial relationships"
        icon={Compass}
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-teal-600" />
            What are Relative Locators?
          </CardTitle>
          <CardDescription>
            Find elements based on their position relative to other elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Relative Locators (also called Friendly Locators) are a Selenium 4 feature that allows you to locate elements based on their visual position relative to other elements on the page.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Spatial Awareness:</strong> Find elements above, below, left, right, or near other elements</li>
            <li><strong>Human-Friendly:</strong> Locate elements the way humans describe them</li>
            <li><strong>Flexible:</strong> Combine with traditional locators for precision</li>
            <li><strong>Selenium 4+:</strong> Available in Selenium 4 and later versions</li>
          </ul>

          <Alert className="border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-950/20">
            <Zap className="h-5 w-5 text-teal-600" />
            <AlertTitle className="text-teal-900 dark:text-teal-100">Selenium 4 Feature</AlertTitle>
            <AlertDescription className="text-teal-800 dark:text-teal-200">
              Relative Locators are a game-changer for locating elements in complex layouts where traditional locators fall short. They work based on the visual rendering of elements on the page.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-teal-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Relative locator syntax in Python, Java, and JavaScript
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
                {selectedLanguage === 'python' && `from selenium.webdriver.support.relative_locator import locate_with

# Find reference element
submit_button = driver.find_element(By.ID, "submit")

# Find element above
label = driver.find_element(locate_with(By.TAG_NAME, "label").above(submit_button))

# Find element below
error = driver.find_element(locate_with(By.CLASS_NAME, "error").below(submit_button))

# Find element to the left
cancel = driver.find_element(locate_with(By.TAG_NAME, "button").to_left_of(submit_button))

# Find element to the right
help_icon = driver.find_element(locate_with(By.CLASS_NAME, "icon").to_right_of(submit_button))

# Find nearby element (within 50px by default)
tooltip = driver.find_element(locate_with(By.CLASS_NAME, "tooltip").near(submit_button))`}
                {selectedLanguage === 'java' && `import static org.openqa.selenium.support.locators.RelativeLocator.with;

// Find reference element
WebElement submitButton = driver.findElement(By.id("submit"));

// Find element above
WebElement label = driver.findElement(with(By.tagName("label")).above(submitButton));

// Find element below
WebElement error = driver.findElement(with(By.className("error")).below(submitButton));

// Find element to the left
WebElement cancel = driver.findElement(with(By.tagName("button")).toLeftOf(submitButton));

// Find element to the right
WebElement helpIcon = driver.findElement(with(By.className("icon")).toRightOf(submitButton));

// Find nearby element (within 50px by default)
WebElement tooltip = driver.findElement(with(By.className("tooltip")).near(submitButton));`}
                {selectedLanguage === 'javascript' && `const { locateWith } = require('selenium-webdriver');

// Find reference element
let submitButton = await driver.findElement(By.id('submit'));

// Find element above
let label = await driver.findElement(locateWith(By.tagName('label')).above(submitButton));

// Find element below
let error = await driver.findElement(locateWith(By.className('error')).below(submitButton));

// Find element to the left
let cancel = await driver.findElement(locateWith(By.tagName('button')).toLeftOf(submitButton));

// Find element to the right
let helpIcon = await driver.findElement(locateWith(By.className('icon')).toRightOf(submitButton));

// Find nearby element (within 50px by default)
let tooltip = await driver.findElement(locateWith(By.className('tooltip')).near(submitButton));`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Grid className="w-5 h-5 text-teal-600" />
            Interactive Demo: Grid Navigation
          </CardTitle>
          <CardDescription>
            Watch relative locators navigate a grid layout
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Grid Navigation Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch relative locators find elements above, below, left, right, and near a center element. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
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
                      name="speed-relative"
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
                  <Code className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateRelativeLocators}
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
                    onClick={() => copyToClipboard(relativeLocatorExample[selectedLanguage], 'Relative locator code')}
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
                    {getRelativeLocatorCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{relativeLocatorExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Grid Layout</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px]">
                  <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    {/* Top Row */}
                    <div></div>
                    <div className={`p-4 rounded-lg border-2 flex items-center justify-center transition-all ${
                      selectedElement === 'above' 
                        ? 'border-teal-500 bg-teal-100 dark:bg-teal-950/50 shadow-lg scale-110' 
                        : gridData.aboveElement
                        ? 'border-teal-300 bg-teal-50 dark:bg-teal-950/30'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}>
                      <div className="text-center">
                        <ArrowUp className="w-6 h-6 mx-auto mb-1 text-teal-600" />
                        <div className="text-xs font-semibold">Above</div>
                      </div>
                    </div>
                    <div></div>

                    {/* Middle Row */}
                    <div className={`p-4 rounded-lg border-2 flex items-center justify-center transition-all ${
                      selectedElement === 'left' 
                        ? 'border-teal-500 bg-teal-100 dark:bg-teal-950/50 shadow-lg scale-110' 
                        : gridData.leftElement
                        ? 'border-teal-300 bg-teal-50 dark:bg-teal-950/30'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}>
                      <div className="text-center">
                        <ArrowLeft className="w-6 h-6 mx-auto mb-1 text-teal-600" />
                        <div className="text-xs font-semibold">Left</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-lg border-2 flex items-center justify-center transition-all ${
                      selectedElement === 'center' 
                        ? 'border-teal-500 bg-teal-100 dark:bg-teal-950/50 shadow-lg scale-110' 
                        : gridData.centerElement
                        ? 'border-teal-300 bg-teal-50 dark:bg-teal-950/30'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}>
                      <div className="text-center">
                        <Compass className="w-6 h-6 mx-auto mb-1 text-teal-600" />
                        <div className="text-xs font-semibold">Center</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-lg border-2 flex items-center justify-center transition-all ${
                      selectedElement === 'right' 
                        ? 'border-teal-500 bg-teal-100 dark:bg-teal-950/50 shadow-lg scale-110' 
                        : gridData.rightElement
                        ? 'border-teal-300 bg-teal-50 dark:bg-teal-950/30'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}>
                      <div className="text-center">
                        <ArrowRight className="w-6 h-6 mx-auto mb-1 text-teal-600" />
                        <div className="text-xs font-semibold">Right</div>
                      </div>
                    </div>

                    {/* Bottom Row */}
                    <div></div>
                    <div className={`p-4 rounded-lg border-2 flex items-center justify-center transition-all ${
                      selectedElement === 'below' 
                        ? 'border-teal-500 bg-teal-100 dark:bg-teal-950/50 shadow-lg scale-110' 
                        : gridData.belowElement
                        ? 'border-teal-300 bg-teal-50 dark:bg-teal-950/30'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}>
                      <div className="text-center">
                        <ArrowDown className="w-6 h-6 mx-auto mb-1 text-teal-600" />
                        <div className="text-xs font-semibold">Below</div>
                      </div>
                    </div>
                    <div></div>
                  </div>

                  {/* Near Element */}
                  {gridData.nearElement && (
                    <div className={`mt-6 p-3 rounded-lg border-2 max-w-md mx-auto transition-all ${
                      selectedElement === 'near'
                        ? 'border-teal-500 bg-teal-100 dark:bg-teal-950/50 shadow-lg'
                        : 'border-teal-300 bg-teal-50 dark:bg-teal-950/30'
                    }`}>
                      <div className="text-center text-sm">
                        <Compass className="w-5 h-5 mx-auto mb-1 text-teal-600" />
                        <div className="font-semibold">Near Element (within 50px)</div>
                      </div>
                    </div>
                  )}

                  {currentStep >= 14 && (
                    <div className="mt-6 p-3 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center gap-2 text-green-800 dark:text-green-200 justify-center">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">All relative positions found!</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Relative Locator Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600" />
            Relative Locator Methods
          </CardTitle>
          <CardDescription>Five directional methods for spatial navigation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUp className="w-5 h-5 text-blue-600" />
                <Badge className="bg-blue-600">above()</Badge>
              </div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Find Element Above</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                locate_with(By.TAG_NAME, "label").above(element)
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Finds element positioned above the reference element
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <ArrowDown className="w-5 h-5 text-green-600" />
                <Badge className="bg-green-600">below()</Badge>
              </div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Find Element Below</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                locate_with(By.CLASS_NAME, "error").below(element)
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Finds element positioned below the reference element
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-2">
                <ArrowLeft className="w-5 h-5 text-orange-600" />
                <Badge className="bg-orange-600">toLeftOf()</Badge>
              </div>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">Find Element to Left</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                locate_with(By.TAG_NAME, "button").to_left_of(element)
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Finds element positioned to the left of reference
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-purple-600" />
                <Badge className="bg-purple-600">toRightOf()</Badge>
              </div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Find Element to Right</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                locate_with(By.CLASS_NAME, "icon").to_right_of(element)
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Finds element positioned to the right of reference
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-teal-200 dark:border-teal-700 md:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-5 h-5 text-teal-600" />
                <Badge className="bg-teal-600">near()</Badge>
              </div>
              <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2 text-sm">Find Nearby Element</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                locate_with(By.CLASS_NAME, "tooltip").near(element)  # Within 50px by default
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Finds element within approximately 50 pixels of the reference element (can be customized)
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Stable Reference Elements</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Choose reference elements with stable IDs or unique attributes
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Combine with Traditional Locators</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use relative locators together with By.ID, By.CLASS_NAME, etc.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Test Across Viewports</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Relative positions may change with different screen sizes
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use for Complex Layouts</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ideal for tables, grids, and forms where elements lack unique attributes
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Common Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert className="border-blue-200 dark:border-blue-700">
              <Grid className="h-5 w-5 text-blue-600" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Form Labels & Inputs</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Find input fields based on their labels: <code className="text-xs">locate_with(By.TAG_NAME, "input").below(label)</code>
              </AlertDescription>
            </Alert>

            <Alert className="border-green-200 dark:border-green-700">
              <Grid className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-green-900 dark:text-green-100">Table Navigation</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Navigate table cells relative to headers or other cells
              </AlertDescription>
            </Alert>

            <Alert className="border-purple-200 dark:border-purple-700">
              <Grid className="h-5 w-5 text-purple-600" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Button Groups</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Find Cancel button relative to Submit: <code className="text-xs">locate_with(By.TAG_NAME, "button").to_left_of(submit)</code>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Limitations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            Limitations & Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Selenium 4+ Required</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                Relative Locators are only available in Selenium 4 and later versions
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Viewport Dependent</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                Element positions are based on rendered layout, which can vary with screen size
              </AlertDescription>
            </Alert>

            <Alert className="border-red-200 dark:border-red-700">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <AlertTitle className="text-red-900 dark:text-red-100">Performance Consideration</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                Relative locators may be slower than direct locators as they calculate positions
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

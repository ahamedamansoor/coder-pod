'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Zap,
  Code,
  Copy,
  CheckCircle,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  MousePointer,
  Keyboard,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ActionsClass() {
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
    mouseX: 0,
    mouseY: 0,
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

  const simulateActionsClass = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setActionState({ mouseX: 0, mouseY: 0, action: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, import: 7, createActions: 10, findElement: 13, moveToElement: 16, click: 17, contextClick: 20, doubleClick: 23, perform: 26, quit: 29 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, import: 7, createActions: 10, findElement: 13, moveToElement: 16, click: 17, contextClick: 20, doubleClick: 23, perform: 26, quit: 28 };
      } else {
        return { init: 2, createActions: 5, findElement: 8, moveToElement: 11, click: 12, contextClick: 15, doubleClick: 18, perform: 21, quit: 23 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      actions: 'actions',
      element: 'element'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Actions Class demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing Chrome browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '📦 Importing ActionChains...', delay: 800 * multiplier, element: null, codeLine: lines.import, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '⚡ Creating Actions instance...', delay: 1000 * multiplier, element: null, codeLine: lines.createActions, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 4, log: '✅ Actions object created', delay: 700 * multiplier, element: null, codeLine: lines.createActions, variable: { name: varNames.actions, value: '<ActionChains object>' } },
      { step: 5, log: '🔍 Finding target element...', delay: 800 * multiplier, element: null, codeLine: lines.findElement, variable: { name: varNames.actions, value: '<ActionChains object>' } },
      { step: 6, log: '✅ Element found', delay: 700 * multiplier, element: 'button', codeLine: lines.findElement, variable: { name: varNames.element, value: '<WebElement: button#submit>' } },
      { step: 7, log: '🖱️ Moving to element...', delay: 1200 * multiplier, element: 'button', action: 'move', codeLine: lines.moveToElement, variable: { name: varNames.element, value: '<WebElement: button#submit>' } },
      { step: 8, log: '✅ Moved to element', delay: 700 * multiplier, element: 'button', codeLine: lines.moveToElement, variable: { name: varNames.actions, value: 'move_to_element(element)' } },
      { step: 9, log: '🖱️ Clicking element...', delay: 1200 * multiplier, element: 'button', action: 'click', codeLine: lines.click, variable: { name: varNames.actions, value: 'click()' } },
      { step: 10, log: '✅ Click action added', delay: 700 * multiplier, element: 'button', codeLine: lines.click, variable: { name: varNames.actions, value: 'click() chained' } },
      { step: 11, log: '🖱️ Adding context click (right-click)...', delay: 1200 * multiplier, element: 'button', codeLine: lines.contextClick, variable: { name: varNames.actions, value: 'click() chained' } },
      { step: 12, log: '✅ Context click action added', delay: 700 * multiplier, element: 'button', action: 'context', codeLine: lines.contextClick, variable: { name: varNames.actions, value: 'context_click() chained' } },
      { step: 13, log: '🖱️ Adding double click...', delay: 1200 * multiplier, element: 'button', codeLine: lines.doubleClick, variable: { name: varNames.actions, value: 'context_click() chained' } },
      { step: 14, log: '✅ Double click action added', delay: 700 * multiplier, element: 'button', action: 'double', codeLine: lines.doubleClick, variable: { name: varNames.actions, value: 'double_click() chained' } },
      { step: 15, log: '⚡ Performing all actions...', delay: 1500 * multiplier, element: 'button', codeLine: lines.perform, variable: { name: varNames.actions, value: 'double_click() chained' } },
      { step: 16, log: '✅ All actions performed!', delay: 700 * multiplier, element: 'button', action: 'perform', codeLine: lines.perform, variable: { name: varNames.actions, value: 'performed' } },
      { step: 17, log: '🎉 Actions Class demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: varNames.actions, value: 'performed' } },
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
      
      if (action === 'move') {
        setActionState({ mouseX: 150, mouseY: 100, action: 'Moving to element' });
      } else if (action === 'click') {
        setActionState({ mouseX: 150, mouseY: 100, action: 'Click' });
      } else if (action === 'context') {
        setActionState({ mouseX: 150, mouseY: 100, action: 'Right Click' });
      } else if (action === 'double') {
        setActionState({ mouseX: 150, mouseY: 100, action: 'Double Click' });
      } else if (action === 'perform') {
        setActionState({ mouseX: 150, mouseY: 100, action: 'Actions Performed!' });
      }
    }

    setIsRunning(false);
  };

  const getActionsClassCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Import ActionChains',
        'from selenium.webdriver.common.action_chains import ActionChains',
        '',
        '# Create Actions instance',
        'actions = ActionChains(driver)',
        '',
        '# Find element',
        'element = driver.find_element(By.ID, "submit")',
        '',
        '# Chain multiple actions',
        'actions.move_to_element(element)',
        'actions.click()',
        '',
        '# Context click (right-click)',
        'actions.context_click(element)',
        '',
        '# Double click',
        'actions.double_click(element)',
        '',
        '# Perform all actions',
        'actions.perform()',
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
        'import org.openqa.selenium.interactions.Actions;',
        '',
        'WebDriver driver = new ChromeDriver();',
        '',
        '// Create Actions instance',
        'Actions actions = new Actions(driver);',
        '',
        '// Find element',
        'WebElement element = driver.findElement(By.id("submit"));',
        '',
        '// Chain multiple actions',
        'actions.moveToElement(element)',
        '       .click()',
        '',
        '// Context click (right-click)',
        '       .contextClick(element)',
        '',
        '// Double click',
        '       .doubleClick(element)',
        '',
        '// Perform all actions',
        '       .perform();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Create Actions instance',
        'let actions = driver.actions();',
        '',
        '// Find element',
        'let element = await driver.findElement(By.id(\'submit\'));',
        '',
        '// Chain multiple actions',
        'await actions.move({ origin: element })',
        '             .click()',
        '',
        '// Context click (right-click)',
        '             .contextClick(element)',
        '',
        '// Double click',
        '             .doubleClick(element)',
        '',
        '// Perform all actions',
        '             .perform();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const actionsClassExample = {
    python: getActionsClassCode('python').join('\n'),
    java: getActionsClassCode('java').join('\n'),
    javascript: getActionsClassCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Actions Class"
        description="Master complex user interactions with Selenium Actions API"
        icon={Zap}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-600" />
            Introduction to Actions Class
          </CardTitle>
          <CardDescription>
            Advanced user interactions beyond simple clicks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            The Actions class (ActionChains in Python) enables complex user interactions that can't be performed with basic WebDriver methods:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Mouse Actions:</strong> Hover, click, double-click, right-click, drag & drop</li>
            <li><strong>Keyboard Actions:</strong> Key press, key combinations, text input</li>
            <li><strong>Composite Actions:</strong> Chain multiple actions together</li>
            <li><strong>Precise Control:</strong> Move by offset, pause between actions</li>
          </ul>

          <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
            <Zap className="h-5 w-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Action Chaining</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Actions are queued and executed only when perform() is called. This allows building complex interaction sequences.
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
            Actions class syntax in Python, Java, and JavaScript
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
                {selectedLanguage === 'python' && `from selenium.webdriver.common.action_chains import ActionChains

# Create Actions instance
actions = ActionChains(driver)

# Basic actions
element = driver.find_element(By.ID, "button")
actions.move_to_element(element).click().perform()

# Chaining multiple actions
actions.move_to_element(element)\\
       .click()\\
       .pause(1)\\
       .context_click()\\
       .perform()

# Click and hold
actions.click_and_hold(element).perform()

# Release
actions.release().perform()

# Move by offset
actions.move_by_offset(100, 50).click().perform()

# Reset actions
actions.reset_actions()`}
                {selectedLanguage === 'java' && `import org.openqa.selenium.interactions.Actions;

// Create Actions instance
Actions actions = new Actions(driver);

// Basic actions
WebElement element = driver.findElement(By.id("button"));
actions.moveToElement(element).click().perform();

// Chaining multiple actions
actions.moveToElement(element)
       .click()
       .pause(Duration.ofSeconds(1))
       .contextClick()
       .perform();

// Click and hold
actions.clickAndHold(element).perform();

// Release
actions.release().perform();

// Move by offset
actions.moveByOffset(100, 50).click().perform();

// Selenium 4+ - New Actions API
actions.moveToElement(element)
       .clickAndHold()
       .moveByOffset(50, 0)
       .release()
       .perform();`}
                {selectedLanguage === 'javascript' && `// Create Actions instance
let actions = driver.actions();

// Basic actions
let element = await driver.findElement(By.id('button'));
await actions.move({ origin: element }).click().perform();

// Chaining multiple actions
await actions.move({ origin: element })
             .click()
             .pause(1000)
             .contextClick()
             .perform();

// Click and hold
await actions.press().perform();

// Release
await actions.release().perform();

// Move by offset
await actions.move({ x: 100, y: 50 }).click().perform();

// Clear actions
await actions.clear();`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch Actions class in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Actions Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch action chaining with inline variable values at each step!
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
                      name="speed-actions"
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
                    onClick={simulateActionsClass}
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
                    onClick={() => copyToClipboard(actionsClassExample[selectedLanguage], 'Actions Class code')}
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
                    {getActionsClassCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{actionsClassExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Actions Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px] relative">
                  <div className={`absolute transition-all duration-500 ${selectedElement === 'button' ? 'ring-4 ring-indigo-500' : ''}`}
                       style={{ left: '150px', top: '100px' }}>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      Submit Button
                    </Button>
                  </div>
                  {actionState.action && (
                    <div className="absolute top-4 right-4 p-3 bg-indigo-100 dark:bg-indigo-950/50 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
                      <div className="flex items-center gap-2">
                        <MousePointer className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                          {actionState.action}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 text-xs text-slate-600 dark:text-slate-400">
                    Mouse Position: ({actionState.mouseX}, {actionState.mouseY})
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
            <Zap className="w-5 h-5 text-blue-600" />
            Core Actions Methods
          </CardTitle>
          <CardDescription>Essential Actions API methods</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">move_to_element()</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Move to Element</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Move mouse cursor to center of element
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">click()</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Click</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Click at current mouse position
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">context_click()</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Right Click</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Perform right-click (context menu)
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-600 mb-2">double_click()</Badge>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">Double Click</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Perform double-click action
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">click_and_hold()</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Click and Hold</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Press and hold mouse button
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-teal-200 dark:border-teal-700">
              <Badge className="bg-teal-600 mb-2">release()</Badge>
              <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2 text-sm">Release</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Release held mouse button
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Always Call perform()</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Actions are queued until perform() is called
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Chain Actions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Build complex sequences by chaining multiple actions
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Pauses</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add pause() between actions for timing control
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Reset When Needed</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use reset_actions() to clear queued actions
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
              <AlertTitle className="text-red-900 dark:text-red-100">Actions Not Executing</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Actions don't execute<br/>
                <strong>Solution:</strong> Must call perform() to execute queued actions
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Element Not Interactable</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Can't interact with element<br/>
                <strong>Solution:</strong> Ensure element is visible and not covered by other elements
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Move Failed</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> move_to_element() fails<br/>
                <strong>Solution:</strong> Wait for element to be visible before moving
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Selenium 4+ Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Wheel Actions (Selenium 4+)</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Scroll with Actions</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Python<br/>
                actions.scroll_by_amount(0, 500).perform()<br/>
                actions.scroll_to_element(element).perform()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Pointer Actions</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Low-Level Pointer Control</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Advanced pointer manipulation<br/>
                actions.move_by_offset(100, 50)\\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.click()\\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.pause(0.5)\\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.perform()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Duration Control</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Precise Timing</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Java - Duration control<br/>
                actions.pause(Duration.ofMillis(500)).perform();
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

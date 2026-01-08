'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  MousePointer,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  MousePointer2
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function MouseActions() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [mouseState, setMouseState] = React.useState({
    x: 0,
    y: 0,
    action: '',
    isHovering: false
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

  const simulateMouseActions = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setMouseState({ x: 0, y: 0, action: '', isHovering: false });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, import: 7, createActions: 10, hover: 13, click: 16, rightClick: 19, doubleClick: 22, clickHold: 25, release: 28, moveOffset: 31, quit: 34 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, import: 7, createActions: 10, hover: 13, click: 16, rightClick: 19, doubleClick: 22, clickHold: 25, release: 28, moveOffset: 31, quit: 33 };
      } else {
        return { init: 2, createActions: 5, hover: 8, click: 11, rightClick: 14, doubleClick: 17, clickHold: 20, release: 23, moveOffset: 26, quit: 28 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Mouse Actions demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '📦 Creating Actions instance...', delay: 800 * multiplier, element: null, codeLine: lines.createActions, variable: { name: 'actions', value: '<ActionChains object>' } },
      { step: 3, log: '🖱️ Hovering over button...', delay: 1200 * multiplier, element: 'button1', action: 'hover', codeLine: lines.hover, variable: { name: 'element', value: '<WebElement: button#hover>' } },
      { step: 4, log: '✅ Hover action performed', delay: 700 * multiplier, element: 'button1', codeLine: lines.hover, variable: { name: 'actions', value: 'hover performed' } },
      { step: 5, log: '🖱️ Clicking button...', delay: 1200 * multiplier, element: 'button2', action: 'click', codeLine: lines.click, variable: { name: 'element', value: '<WebElement: button#click>' } },
      { step: 6, log: '✅ Click performed', delay: 700 * multiplier, element: 'button2', codeLine: lines.click, variable: { name: 'actions', value: 'click performed' } },
      { step: 7, log: '🖱️ Right-clicking element...', delay: 1200 * multiplier, element: 'button3', action: 'rightclick', codeLine: lines.rightClick, variable: { name: 'element', value: '<WebElement: button#context>' } },
      { step: 8, log: '✅ Right-click performed', delay: 700 * multiplier, element: 'button3', codeLine: lines.rightClick, variable: { name: 'actions', value: 'context_click performed' } },
      { step: 9, log: '🖱️ Double-clicking element...', delay: 1200 * multiplier, element: 'button4', action: 'doubleclick', codeLine: lines.doubleClick, variable: { name: 'element', value: '<WebElement: button#double>' } },
      { step: 10, log: '✅ Double-click performed', delay: 700 * multiplier, element: 'button4', codeLine: lines.doubleClick, variable: { name: 'actions', value: 'double_click performed' } },
      { step: 11, log: '🖱️ Click and hold...', delay: 1200 * multiplier, element: 'button5', action: 'hold', codeLine: lines.clickHold, variable: { name: 'element', value: '<WebElement: button#hold>' } },
      { step: 12, log: '✅ Holding mouse button', delay: 700 * multiplier, element: 'button5', codeLine: lines.clickHold, variable: { name: 'actions', value: 'click_and_hold performed' } },
      { step: 13, log: '🖱️ Releasing mouse button...', delay: 1200 * multiplier, element: 'button5', action: 'release', codeLine: lines.release, variable: { name: 'actions', value: 'click_and_hold performed' } },
      { step: 14, log: '✅ Mouse button released', delay: 700 * multiplier, element: 'button5', codeLine: lines.release, variable: { name: 'actions', value: 'release performed' } },
      { step: 15, log: '🖱️ Moving by offset (100, 50)...', delay: 1200 * multiplier, element: null, action: 'offset', codeLine: lines.moveOffset, variable: { name: 'actions', value: 'release performed' } },
      { step: 16, log: '✅ Moved to offset position', delay: 700 * multiplier, element: null, codeLine: lines.moveOffset, variable: { name: 'actions', value: 'move_by_offset(100, 50)' } },
      { step: 17, log: '🎉 Mouse Actions demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'actions', value: 'move_by_offset(100, 50)' } },
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
      
      if (action === 'hover') {
        setMouseState({ x: 100, y: 80, action: 'Hovering', isHovering: true });
      } else if (action === 'click') {
        setMouseState({ x: 100, y: 140, action: 'Click', isHovering: false });
      } else if (action === 'rightclick') {
        setMouseState({ x: 100, y: 200, action: 'Right Click', isHovering: false });
      } else if (action === 'doubleclick') {
        setMouseState({ x: 100, y: 260, action: 'Double Click', isHovering: false });
      } else if (action === 'hold') {
        setMouseState({ x: 100, y: 320, action: 'Holding', isHovering: false });
      } else if (action === 'release') {
        setMouseState({ x: 100, y: 320, action: 'Released', isHovering: false });
      } else if (action === 'offset') {
        setMouseState({ x: 200, y: 370, action: 'Moved by offset', isHovering: false });
      }
    }

    setIsRunning(false);
  };

  const getMouseActionsCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# Import ActionChains',
        'from selenium.webdriver.common.action_chains import ActionChains',
        '',
        '# Create Actions instance',
        'actions = ActionChains(driver)',
        '',
        '# Hover over element',
        'element = driver.find_element(By.ID, "hover-button")',
        'actions.move_to_element(element).perform()',
        '',
        '# Click element',
        'element = driver.find_element(By.ID, "click-button")',
        'actions.click(element).perform()',
        '',
        '# Right-click (context click)',
        'element = driver.find_element(By.ID, "context-button")',
        'actions.context_click(element).perform()',
        '',
        '# Double-click',
        'element = driver.find_element(By.ID, "double-button")',
        'actions.double_click(element).perform()',
        '',
        '# Click and hold',
        'element = driver.find_element(By.ID, "hold-button")',
        'actions.click_and_hold(element).perform()',
        '',
        '# Release',
        'actions.release().perform()',
        '',
        '# Move by offset',
        'actions.move_by_offset(100, 50).click().perform()',
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
        '// Hover over element',
        'WebElement element = driver.findElement(By.id("hover-button"));',
        'actions.moveToElement(element).perform();',
        '',
        '// Click element',
        'element = driver.findElement(By.id("click-button"));',
        'actions.click(element).perform();',
        '',
        '// Right-click (context click)',
        'element = driver.findElement(By.id("context-button"));',
        'actions.contextClick(element).perform();',
        '',
        '// Double-click',
        'element = driver.findElement(By.id("double-button"));',
        'actions.doubleClick(element).perform();',
        '',
        '// Click and hold',
        'element = driver.findElement(By.id("hold-button"));',
        'actions.clickAndHold(element).perform();',
        '',
        '// Release',
        'actions.release().perform();',
        '',
        '// Move by offset',
        'actions.moveByOffset(100, 50).click().perform();',
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
        '// Hover over element',
        'let element = await driver.findElement(By.id(\'hover-button\'));',
        'await actions.move({ origin: element }).perform();',
        '',
        '// Click element',
        'element = await driver.findElement(By.id(\'click-button\'));',
        'await actions.click(element).perform();',
        '',
        '// Right-click (context click)',
        'element = await driver.findElement(By.id(\'context-button\'));',
        'await actions.contextClick(element).perform();',
        '',
        '// Double-click',
        'element = await driver.findElement(By.id(\'double-button\'));',
        'await actions.doubleClick(element).perform();',
        '',
        '// Click and hold',
        'element = await driver.findElement(By.id(\'hold-button\'));',
        'await actions.press().perform();',
        '',
        '// Release',
        'await actions.release().perform();',
        '',
        '// Move by offset',
        'await actions.move({ x: 100, y: 50 }).click().perform();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const mouseActionsExample = {
    python: getMouseActionsCode('python').join('\n'),
    java: getMouseActionsCode('java').join('\n'),
    javascript: getMouseActionsCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Mouse Actions"
        description="Master mouse interactions with Selenium Actions API"
        icon={MousePointer}
        category="Selenium · Advanced Interactions"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MousePointer className="w-5 h-5 text-cyan-600" />
            Mouse Interaction Methods
          </CardTitle>
          <CardDescription>
            Simulate realistic mouse behavior
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Mouse actions enable complex interactions that mimic real user behavior:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Hover:</strong> Move mouse over element to trigger hover effects</li>
            <li><strong>Click:</strong> Perform left-click at current position</li>
            <li><strong>Right-Click:</strong> Context click to open context menus</li>
            <li><strong>Double-Click:</strong> Double-click for special actions</li>
            <li><strong>Click and Hold:</strong> Press and hold for drag operations</li>
            <li><strong>Move by Offset:</strong> Move mouse by pixel coordinates</li>
          </ul>

          <Alert className="border-cyan-200 dark:border-cyan-700 bg-cyan-50 dark:bg-cyan-950/20">
            <MousePointer className="h-5 w-5 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Hover Effects</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              Many modern web apps use hover effects. Use move_to_element() to trigger tooltips, dropdowns, and hover menus.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-cyan-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Mouse actions syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-cyan-600 text-cyan-600 dark:text-cyan-400'
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

actions = ActionChains(driver)

# Hover to reveal dropdown
menu = driver.find_element(By.ID, "menu")
actions.move_to_element(menu).perform()

# Click submenu item
submenu = driver.find_element(By.ID, "submenu")
actions.click(submenu).perform()

# Right-click for context menu
element = driver.find_element(By.ID, "item")
actions.context_click(element).perform()

# Double-click to select
actions.double_click(element).perform()

# Drag preparation
actions.click_and_hold(element).perform()
actions.move_by_offset(100, 0).perform()
actions.release().perform()

# Chain multiple mouse actions
actions.move_to_element(element1)\\
       .click()\\
       .move_to_element(element2)\\
       .context_click()\\
       .perform()`}
                {selectedLanguage === 'java' && `import org.openqa.selenium.interactions.Actions;

Actions actions = new Actions(driver);

// Hover to reveal dropdown
WebElement menu = driver.findElement(By.id("menu"));
actions.moveToElement(menu).perform();

// Click submenu item
WebElement submenu = driver.findElement(By.id("submenu"));
actions.click(submenu).perform();

// Right-click for context menu
WebElement element = driver.findElement(By.id("item"));
actions.contextClick(element).perform();

// Double-click to select
actions.doubleClick(element).perform();

// Drag preparation
actions.clickAndHold(element).perform();
actions.moveByOffset(100, 0).perform();
actions.release().perform();

// Chain multiple mouse actions
actions.moveToElement(element1)
       .click()
       .moveToElement(element2)
       .contextClick()
       .perform();`}
                {selectedLanguage === 'javascript' && `let actions = driver.actions();

// Hover to reveal dropdown
let menu = await driver.findElement(By.id('menu'));
await actions.move({ origin: menu }).perform();

// Click submenu item
let submenu = await driver.findElement(By.id('submenu'));
await actions.click(submenu).perform();

// Right-click for context menu
let element = await driver.findElement(By.id('item'));
await actions.contextClick(element).perform();

// Double-click to select
await actions.doubleClick(element).perform();

// Drag preparation
await actions.press().perform();
await actions.move({ x: 100, y: 0 }).perform();
await actions.release().perform();

// Chain multiple mouse actions
await actions.move({ origin: element1 })
             .click()
             .move({ origin: element2 })
             .contextClick()
             .perform();`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MousePointer className="w-5 h-5 text-cyan-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch mouse actions in real-time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Mouse Actions Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch various mouse interactions with inline variable values!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-4 rounded-lg border-2 border-cyan-200 dark:border-cyan-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
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
                        ? 'border-cyan-500 bg-cyan-100 dark:bg-cyan-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-cyan-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-mouse"
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
                  <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateMouseActions}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
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
                    onClick={() => copyToClipboard(mouseActionsExample[selectedLanguage], 'Mouse Actions code')}
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
                    {getMouseActionsCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-cyan-200 dark:bg-cyan-900/50 border-l-4 border-cyan-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-cyan-900 dark:text-cyan-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-cyan-50 dark:bg-cyan-950/30 rounded border border-cyan-200 dark:border-cyan-700">
                        <div className="text-[10px] font-bold text-cyan-900 dark:text-cyan-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-cyan-800 dark:text-cyan-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-cyan-600 dark:text-cyan-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{mouseActionsExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mouse Actions Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[500px] relative">
                  <div className="space-y-3">
                    <Button className={`w-full ${selectedElement === 'button1' ? 'ring-4 ring-cyan-500' : ''} ${mouseState.isHovering && selectedElement === 'button1' ? 'bg-cyan-700' : 'bg-cyan-600'}`}>
                      Hover Button
                    </Button>
                    <Button className={`w-full ${selectedElement === 'button2' ? 'ring-4 ring-cyan-500' : ''} bg-blue-600`}>
                      Click Button
                    </Button>
                    <Button className={`w-full ${selectedElement === 'button3' ? 'ring-4 ring-cyan-500' : ''} bg-purple-600`}>
                      Right-Click Button
                    </Button>
                    <Button className={`w-full ${selectedElement === 'button4' ? 'ring-4 ring-cyan-500' : ''} bg-green-600`}>
                      Double-Click Button
                    </Button>
                    <Button className={`w-full ${selectedElement === 'button5' ? 'ring-4 ring-cyan-500' : ''} bg-orange-600`}>
                      Click & Hold Button
                    </Button>
                  </div>
                  {mouseState.action && (
                    <div className="absolute top-4 right-4 p-3 bg-cyan-100 dark:bg-cyan-950/50 rounded-lg border-2 border-cyan-300 dark:border-cyan-700">
                      <div className="flex items-center gap-2">
                        <MousePointer2 className="w-4 h-4 text-cyan-600" />
                        <span className="text-sm font-semibold text-cyan-900 dark:text-cyan-100">
                          {mouseState.action}
                        </span>
                      </div>
                      <div className="text-xs text-cyan-700 dark:text-cyan-300 mt-1">
                        Position: ({mouseState.x}, {mouseState.y})
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
            <MousePointer className="w-5 h-5 text-blue-600" />
            Mouse Action Types
          </CardTitle>
          <CardDescription>Six essential mouse operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Hover</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">move_to_element()</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Move mouse to element center
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Click</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">click()</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Left-click at current position
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">Right-Click</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">context_click()</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Right-click for context menu
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-600 mb-2">Double-Click</Badge>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">double_click()</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Double-click element
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Hold</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">click_and_hold()</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Press and hold mouse button
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-teal-200 dark:border-teal-700">
              <Badge className="bg-teal-600 mb-2">Move Offset</Badge>
              <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2 text-sm">move_by_offset()</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Move by pixel coordinates
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Wait Before Hover</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ensure element is visible before hovering
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Offset Carefully</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  move_by_offset() is relative to current position
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Release After Hold</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always call release() after click_and_hold()
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Chain for Efficiency</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Chain multiple mouse actions before perform()
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
              <AlertTitle className="text-red-900 dark:text-red-100">Element Not Visible</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Can't hover over hidden element<br/>
                <strong>Solution:</strong> Wait for element visibility before hovering
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Hover Not Triggering</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Dropdown doesn't appear on hover<br/>
                <strong>Solution:</strong> Add pause() after move_to_element() for timing
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Offset Calculation Wrong</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> move_by_offset() goes to wrong position<br/>
                <strong>Solution:</strong> Remember offset is relative to current mouse position
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Mouse Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Hover Chain</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Multi-Level Menus</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                actions.move_to_element(menu)\\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.pause(0.5)\\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.move_to_element(submenu)\\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.click()\\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.perform()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Precise Positioning</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Move to Element with Offset</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Python<br/>
                actions.move_to_element_with_offset(element, 10, 20).click().perform()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Custom Click Position</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Click at Specific Coordinates</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Click at absolute position<br/>
                actions.move_by_offset(x, y).click().perform()<br/>
                actions.move_by_offset(-x, -y).perform()  # Reset
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

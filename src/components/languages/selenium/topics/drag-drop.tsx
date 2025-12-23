'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Move,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  GripVertical
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function DragDrop() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [dragState, setDragState] = React.useState({
    sourcePosition: { x: 0, y: 0 },
    targetPosition: { x: 0, y: 0 },
    isDragging: false,
    dropped: false
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

  const simulateDragDrop = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setDragState({
      sourcePosition: { x: 50, y: 100 },
      targetPosition: { x: 250, y: 100 },
      isDragging: false,
      dropped: false
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, import: 7, createActions: 10, findSource: 13, findTarget: 14, dragAndDrop: 17, clickHold: 20, moveToTarget: 21, release: 22, dragByOffset: 25, quit: 28 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, import: 7, createActions: 10, findSource: 13, findTarget: 14, dragAndDrop: 17, clickHold: 20, moveToTarget: 21, release: 22, dragByOffset: 25, quit: 27 };
      } else {
        return { init: 2, createActions: 5, findSource: 8, findTarget: 9, dragAndDrop: 12, clickHold: 15, moveToTarget: 16, release: 17, dragByOffset: 20, quit: 22 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      source: selectedLanguage === 'python' ? 'source_element' : 'sourceElement',
      target: selectedLanguage === 'python' ? 'target_element' : 'targetElement'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Drag & Drop demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '📦 Creating Actions instance...', delay: 800 * multiplier, element: null, codeLine: lines.createActions, variable: { name: 'actions', value: '<ActionChains object>' } },
      { step: 3, log: '🔍 Finding source element...', delay: 800 * multiplier, element: 'source', codeLine: lines.findSource, variable: { name: 'actions', value: '<ActionChains object>' } },
      { step: 4, log: '✅ Source element found', delay: 700 * multiplier, element: 'source', codeLine: lines.findSource, variable: { name: varNames.source, value: '<WebElement: div#draggable>' } },
      { step: 5, log: '🔍 Finding target element...', delay: 800 * multiplier, element: 'target', codeLine: lines.findTarget, variable: { name: varNames.source, value: '<WebElement: div#draggable>' } },
      { step: 6, log: '✅ Target element found', delay: 700 * multiplier, element: 'target', codeLine: lines.findTarget, variable: { name: varNames.target, value: '<WebElement: div#droppable>' } },
      { step: 7, log: '🖱️ Performing drag_and_drop...', delay: 1500 * multiplier, element: 'source', action: 'drag-start', codeLine: lines.dragAndDrop, variable: { name: varNames.target, value: '<WebElement: div#droppable>' } },
      { step: 8, log: '✅ Drag and drop completed!', delay: 700 * multiplier, element: 'target', action: 'drop', codeLine: lines.dragAndDrop, variable: { name: 'actions', value: 'drag_and_drop performed' } },
      { step: 9, log: '🖱️ Alternative: Click and hold...', delay: 1200 * multiplier, element: 'source', codeLine: lines.clickHold, variable: { name: 'actions', value: 'drag_and_drop performed' } },
      { step: 10, log: '🖱️ Moving to target...', delay: 1200 * multiplier, element: 'source', action: 'dragging', codeLine: lines.moveToTarget, variable: { name: 'actions', value: 'click_and_hold' } },
      { step: 11, log: '🖱️ Releasing...', delay: 1200 * multiplier, element: 'target', action: 'drop-manual', codeLine: lines.release, variable: { name: 'actions', value: 'move_to_element' } },
      { step: 12, log: '✅ Manual drag completed!', delay: 700 * multiplier, element: 'target', codeLine: lines.release, variable: { name: 'actions', value: 'release performed' } },
      { step: 13, log: '🖱️ Drag by offset (200, 0)...', delay: 1200 * multiplier, element: 'source', action: 'drag-offset', codeLine: lines.dragByOffset, variable: { name: 'actions', value: 'release performed' } },
      { step: 14, log: '✅ Dragged by offset', delay: 700 * multiplier, element: null, codeLine: lines.dragByOffset, variable: { name: 'offset', value: '(200, 0)' } },
      { step: 15, log: '🎉 Drag & Drop demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'offset', value: '(200, 0)' } },
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
      
      if (action === 'drag-start') {
        setDragState(prev => ({ ...prev, isDragging: true }));
      } else if (action === 'drop') {
        setDragState(prev => ({ ...prev, isDragging: false, dropped: true, sourcePosition: { x: 250, y: 100 } }));
      } else if (action === 'dragging') {
        setDragState(prev => ({ ...prev, isDragging: true, sourcePosition: { x: 150, y: 100 } }));
      } else if (action === 'drop-manual') {
        setDragState(prev => ({ ...prev, isDragging: false, dropped: true, sourcePosition: { x: 250, y: 100 } }));
      } else if (action === 'drag-offset') {
        setDragState(prev => ({ ...prev, sourcePosition: { x: 250, y: 100 } }));
      }
    }

    setIsRunning(false);
  };

  const getDragDropCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
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
        '# Find source and target elements',
        'source_element = driver.find_element(By.ID, "draggable")',
        'target_element = driver.find_element(By.ID, "droppable")',
        '',
        '# Method 1: drag_and_drop',
        'actions.drag_and_drop(source_element, target_element).perform()',
        '',
        '# Method 2: Manual drag',
        'actions.click_and_hold(source_element)',
        'actions.move_to_element(target_element)',
        'actions.release().perform()',
        '',
        '# Method 3: Drag by offset',
        'actions.drag_and_drop_by_offset(source_element, 200, 0).perform()',
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
        '// Find source and target elements',
        'WebElement sourceElement = driver.findElement(By.id("draggable"));',
        'WebElement targetElement = driver.findElement(By.id("droppable"));',
        '',
        '// Method 1: dragAndDrop',
        'actions.dragAndDrop(sourceElement, targetElement).perform();',
        '',
        '// Method 2: Manual drag',
        'actions.clickAndHold(sourceElement)',
        '       .moveToElement(targetElement)',
        '       .release().perform();',
        '',
        '// Method 3: Drag by offset',
        'actions.dragAndDropBy(sourceElement, 200, 0).perform();',
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
        '// Find source and target elements',
        'let sourceElement = await driver.findElement(By.id(\'draggable\'));',
        'let targetElement = await driver.findElement(By.id(\'droppable\'));',
        '',
        '// Method 1: dragAndDrop',
        'await actions.dragAndDrop(sourceElement, targetElement).perform();',
        '',
        '// Method 2: Manual drag',
        'await actions.press(sourceElement)',
        '             .move({ origin: targetElement })',
        '             .release().perform();',
        '',
        '// Method 3: Drag by offset',
        'await actions.dragAndDrop(sourceElement, { x: 200, y: 0 }).perform();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const dragDropExample = {
    python: getDragDropCode('python').join('\n'),
    java: getDragDropCode('java').join('\n'),
    javascript: getDragDropCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Drag & Drop"
        description="Master drag and drop interactions with Selenium Actions"
        icon={Move}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Move className="w-5 h-5 text-pink-600" />
            Drag and Drop Methods
          </CardTitle>
          <CardDescription>
            Three ways to perform drag and drop operations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Selenium provides multiple methods for drag and drop interactions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>drag_and_drop():</strong> Simple one-line drag from source to target</li>
            <li><strong>Manual Drag:</strong> click_and_hold() → move_to_element() → release()</li>
            <li><strong>Drag by Offset:</strong> drag_and_drop_by_offset() for pixel-based dragging</li>
            <li><strong>HTML5 Drag & Drop:</strong> May require JavaScript workaround</li>
          </ul>

          <Alert className="border-pink-200 dark:border-pink-700 bg-pink-50 dark:bg-pink-950/20">
            <Move className="h-5 w-5 text-pink-600" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">HTML5 Drag & Drop</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              HTML5 drag and drop may not work with Selenium Actions. Use JavaScript workaround or simulate drag events manually.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-pink-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Drag and drop syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-pink-600 text-pink-600 dark:text-pink-400'
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

# Find elements
source = driver.find_element(By.ID, "draggable")
target = driver.find_element(By.ID, "droppable")

# Method 1: Simple drag and drop
actions.drag_and_drop(source, target).perform()

# Method 2: Manual drag (more control)
actions.click_and_hold(source)\\
       .pause(0.5)\\
       .move_to_element(target)\\
       .pause(0.5)\\
       .release()\\
       .perform()

# Method 3: Drag by offset
actions.drag_and_drop_by_offset(source, 200, 100).perform()

# Method 4: Click, move, release separately
actions.click_and_hold(source).perform()
time.sleep(0.5)
actions.move_to_element(target).perform()
time.sleep(0.5)
actions.release().perform()

# HTML5 drag and drop workaround
js_code = """
    var source = arguments[0];
    var target = arguments[1];
    var dataTransfer = new DataTransfer();
    
    var dragStartEvent = new DragEvent('dragstart', {
        dataTransfer: dataTransfer
    });
    source.dispatchEvent(dragStartEvent);
    
    var dropEvent = new DragEvent('drop', {
        dataTransfer: dataTransfer
    });
    target.dispatchEvent(dropEvent);
"""
driver.execute_script(js_code, source, target)`}
                {selectedLanguage === 'java' && `import org.openqa.selenium.interactions.Actions;

Actions actions = new Actions(driver);

// Find elements
WebElement source = driver.findElement(By.id("draggable"));
WebElement target = driver.findElement(By.id("droppable"));

// Method 1: Simple drag and drop
actions.dragAndDrop(source, target).perform();

// Method 2: Manual drag (more control)
actions.clickAndHold(source)
       .pause(Duration.ofMillis(500))
       .moveToElement(target)
       .pause(Duration.ofMillis(500))
       .release()
       .perform();

// Method 3: Drag by offset
actions.dragAndDropBy(source, 200, 100).perform();

// Method 4: Click, move, release separately
actions.clickAndHold(source).perform();
Thread.sleep(500);
actions.moveToElement(target).perform();
Thread.sleep(500);
actions.release().perform();

// HTML5 drag and drop workaround
String jsCode = "var source = arguments[0];" +
                "var target = arguments[1];" +
                "var dataTransfer = new DataTransfer();" +
                "var dragStartEvent = new DragEvent('dragstart', {dataTransfer: dataTransfer});" +
                "source.dispatchEvent(dragStartEvent);" +
                "var dropEvent = new DragEvent('drop', {dataTransfer: dataTransfer});" +
                "target.dispatchEvent(dropEvent);";
((JavascriptExecutor) driver).executeScript(jsCode, source, target);`}
                {selectedLanguage === 'javascript' && `let actions = driver.actions();

// Find elements
let source = await driver.findElement(By.id('draggable'));
let target = await driver.findElement(By.id('droppable'));

// Method 1: Simple drag and drop
await actions.dragAndDrop(source, target).perform();

// Method 2: Manual drag (more control)
await actions.press(source)
             .pause(500)
             .move({ origin: target })
             .pause(500)
             .release()
             .perform();

// Method 3: Drag by offset
await actions.dragAndDrop(source, { x: 200, y: 100 }).perform();

// Method 4: Click, move, release separately
await actions.press(source).perform();
await driver.sleep(500);
await actions.move({ origin: target }).perform();
await driver.sleep(500);
await actions.release().perform();

// HTML5 drag and drop workaround
let jsCode = \`
    var source = arguments[0];
    var target = arguments[1];
    var dataTransfer = new DataTransfer();
    
    var dragStartEvent = new DragEvent('dragstart', {
        dataTransfer: dataTransfer
    });
    source.dispatchEvent(dragStartEvent);
    
    var dropEvent = new DragEvent('drop', {
        dataTransfer: dataTransfer
    });
    target.dispatchEvent(dropEvent);
\`;
await driver.executeScript(jsCode, source, target);`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Move className="w-5 h-5 text-pink-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch drag and drop in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Drag & Drop Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch drag and drop operations with inline variable values!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-lg border-2 border-pink-200 dark:border-pink-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-pink-600 dark:text-pink-400" />
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
                        ? 'border-pink-500 bg-pink-100 dark:bg-pink-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-pink-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-drag"
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
                  <Code className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateDragDrop}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
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
                    onClick={() => copyToClipboard(dragDropExample[selectedLanguage], 'Drag & Drop code')}
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
                    {getDragDropCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-pink-200 dark:bg-pink-900/50 border-l-4 border-pink-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-pink-900 dark:text-pink-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-pink-50 dark:bg-pink-950/30 rounded border border-pink-200 dark:border-pink-700">
                        <div className="text-[10px] font-bold text-pink-900 dark:text-pink-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-pink-800 dark:text-pink-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-pink-600 dark:text-pink-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{dragDropExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Drag & Drop Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px] relative">
                  <div 
                    className={`absolute w-24 h-24 bg-pink-500 rounded-lg flex items-center justify-center cursor-move transition-all duration-500 ${
                      selectedElement === 'source' ? 'ring-4 ring-pink-600 scale-110' : ''
                    } ${dragState.isDragging ? 'opacity-70 shadow-2xl' : ''}`}
                    style={{ 
                      left: `${dragState.sourcePosition.x}px`, 
                      top: `${dragState.sourcePosition.y}px` 
                    }}
                  >
                    <div className="text-center">
                      <GripVertical className="w-8 h-8 text-white mx-auto" />
                      <span className="text-xs text-white font-semibold">Drag Me</span>
                    </div>
                  </div>

                  <div 
                    className={`absolute w-32 h-32 border-4 border-dashed rounded-lg flex items-center justify-center transition-all duration-500 ${
                      selectedElement === 'target' ? 'border-pink-600 bg-pink-100 dark:bg-pink-950/30 ring-4 ring-pink-600' : 'border-slate-400 dark:border-slate-600'
                    } ${dragState.dropped ? 'bg-green-100 dark:bg-green-950/30 border-green-600' : ''}`}
                    style={{ 
                      left: `${dragState.targetPosition.x}px`, 
                      top: `${dragState.targetPosition.y}px` 
                    }}
                  >
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                      {dragState.dropped ? '✓ Dropped!' : 'Drop Here'}
                    </span>
                  </div>

                  {dragState.isDragging && (
                    <div className="absolute top-4 right-4 p-3 bg-pink-100 dark:bg-pink-950/50 rounded-lg border-2 border-pink-300 dark:border-pink-700">
                      <div className="flex items-center gap-2">
                        <Move className="w-4 h-4 text-pink-600 animate-pulse" />
                        <span className="text-sm font-semibold text-pink-900 dark:text-pink-100">
                          Dragging...
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
            <Move className="w-5 h-5 text-blue-600" />
            Drag & Drop Methods
          </CardTitle>
          <CardDescription>Three approaches to drag and drop</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Simple</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">drag_and_drop()</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                actions.drag_and_drop(source, target).perform()
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                One-line solution for simple drag and drop
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Manual</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Click, Move, Release</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                actions.click_and_hold(src)<br/>
                &nbsp;&nbsp;.move_to_element(tgt)<br/>
                &nbsp;&nbsp;.release().perform()
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                More control with pauses between steps
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">Offset</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">By Coordinates</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                actions.drag_and_drop_by_offset(src, 200, 100).perform()
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Drag by pixel offset instead of target element
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Wait for Elements</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ensure both source and target are visible before dragging
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Add Pauses</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use pause() between actions for smoother drag operations
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Verify Drop</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Check element position or attributes after drop
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">HTML5 Workaround</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use JavaScript for HTML5 drag and drop if Actions fail
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
              <AlertTitle className="text-red-900 dark:text-red-100">Drag Not Working</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Element doesn't move<br/>
                <strong>Solution:</strong> Try manual drag with pauses or JavaScript workaround for HTML5
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Element Not Droppable</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Drop target doesn't accept element<br/>
                <strong>Solution:</strong> Verify target accepts drops and check for JavaScript event listeners
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">HTML5 Drag & Drop</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> HTML5 drag and drop doesn't work<br/>
                <strong>Solution:</strong> Use JavaScript to simulate drag events with DataTransfer
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Drag & Drop Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">HTML5 Workaround</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">JavaScript Drag & Drop</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                js_code = """<br/>
                var src = arguments[0], tgt = arguments[1];<br/>
                var dt = new DataTransfer();<br/>
                src.dispatchEvent(new DragEvent('dragstart', {`{dataTransfer: dt}`}));<br/>
                tgt.dispatchEvent(new DragEvent('drop', {`{dataTransfer: dt}`}));<br/>
                """<br/>
                driver.execute_script(js_code, source, target)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Sortable Lists</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Reorder List Items</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                item1 = driver.find_element(By.ID, "item1")<br/>
                item3 = driver.find_element(By.ID, "item3")<br/>
                actions.drag_and_drop(item3, item1).perform()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Slider Control</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Drag Slider Handle</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                slider = driver.find_element(By.ID, "slider")<br/>
                # Drag slider 100px to the right<br/>
                actions.drag_and_drop_by_offset(slider, 100, 0).perform()
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

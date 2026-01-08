'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Keyboard,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  Type
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function KeyboardActions() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [keyboardState, setKeyboardState] = React.useState({
    inputValue: '',
    action: '',
    keys: ''
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

  const simulateKeyboardActions = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setKeyboardState({ inputValue: '', action: '', keys: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, import: 7, createActions: 10, sendKeys: 13, keyDown: 16, keyUp: 19, copyPaste: 22, selectAll: 25, quit: 28 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, import: 7, createActions: 10, sendKeys: 13, keyDown: 16, keyUp: 19, copyPaste: 22, selectAll: 25, quit: 27 };
      } else {
        return { init: 2, createActions: 5, sendKeys: 8, keyDown: 11, keyUp: 14, copyPaste: 17, selectAll: 20, quit: 22 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Keyboard Actions demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '📦 Creating Actions instance...', delay: 800 * multiplier, element: null, codeLine: lines.createActions, variable: { name: 'actions', value: '<ActionChains object>' } },
      { step: 3, log: '⌨️ Typing text with send_keys...', delay: 1200 * multiplier, element: 'input1', action: 'type', codeLine: lines.sendKeys, variable: { name: 'element', value: '<WebElement: input#text>' } },
      { step: 4, log: '✅ Text typed: "Hello World"', delay: 700 * multiplier, element: 'input1', codeLine: lines.sendKeys, variable: { name: 'actions', value: 'send_keys("Hello World")' } },
      { step: 5, log: '⌨️ Pressing SHIFT key down...', delay: 1200 * multiplier, element: 'input2', action: 'shift-down', codeLine: lines.keyDown, variable: { name: 'actions', value: 'send_keys("Hello World")' } },
      { step: 6, log: '✅ SHIFT key pressed', delay: 700 * multiplier, element: 'input2', codeLine: lines.keyDown, variable: { name: 'actions', value: 'key_down(Keys.SHIFT)' } },
      { step: 7, log: '⌨️ Releasing SHIFT key...', delay: 1200 * multiplier, element: 'input2', action: 'shift-up', codeLine: lines.keyUp, variable: { name: 'actions', value: 'key_down(Keys.SHIFT)' } },
      { step: 8, log: '✅ SHIFT key released', delay: 700 * multiplier, element: 'input2', codeLine: lines.keyUp, variable: { name: 'actions', value: 'key_up(Keys.SHIFT)' } },
      { step: 9, log: '⌨️ Copy-Paste with Ctrl+C, Ctrl+V...', delay: 1500 * multiplier, element: 'input3', action: 'copy-paste', codeLine: lines.copyPaste, variable: { name: 'actions', value: 'key_up(Keys.SHIFT)' } },
      { step: 10, log: '✅ Copy-Paste performed', delay: 700 * multiplier, element: 'input3', codeLine: lines.copyPaste, variable: { name: 'actions', value: 'Ctrl+C, Ctrl+V' } },
      { step: 11, log: '⌨️ Select All with Ctrl+A...', delay: 1200 * multiplier, element: 'input4', action: 'select-all', codeLine: lines.selectAll, variable: { name: 'actions', value: 'Ctrl+C, Ctrl+V' } },
      { step: 12, log: '✅ Text selected', delay: 700 * multiplier, element: 'input4', codeLine: lines.selectAll, variable: { name: 'actions', value: 'Ctrl+A' } },
      { step: 13, log: '🎉 Keyboard Actions demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'actions', value: 'Ctrl+A' } },
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
      
      if (action === 'type') {
        setKeyboardState({ inputValue: 'Hello World', action: 'Typing', keys: 'send_keys()' });
      } else if (action === 'shift-down') {
        setKeyboardState({ inputValue: 'UPPERCASE', action: 'SHIFT Down', keys: 'SHIFT ↓' });
      } else if (action === 'shift-up') {
        setKeyboardState({ inputValue: 'lowercase', action: 'SHIFT Up', keys: 'SHIFT ↑' });
      } else if (action === 'copy-paste') {
        setKeyboardState({ inputValue: 'Copied Text', action: 'Copy-Paste', keys: 'Ctrl+C, Ctrl+V' });
      } else if (action === 'select-all') {
        setKeyboardState({ inputValue: 'Selected Text', action: 'Select All', keys: 'Ctrl+A' });
      }
    }

    setIsRunning(false);
  };

  const getKeyboardActionsCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# Import Keys and ActionChains',
        'from selenium.webdriver.common.keys import Keys',
        'from selenium.webdriver.common.action_chains import ActionChains',
        '',
        '# Create Actions instance',
        'actions = ActionChains(driver)',
        '',
        '# Type text',
        'element = driver.find_element(By.ID, "input")',
        'actions.send_keys_to_element(element, "Hello World").perform()',
        '',
        '# Press key down',
        'actions.key_down(Keys.SHIFT).send_keys("text").key_up(Keys.SHIFT).perform()',
        '',
        '# Release key',
        'actions.key_up(Keys.SHIFT).perform()',
        '',
        '# Copy-Paste (Ctrl+C, Ctrl+V)',
        'actions.key_down(Keys.CONTROL).send_keys("c").key_up(Keys.CONTROL).perform()',
        'actions.key_down(Keys.CONTROL).send_keys("v").key_up(Keys.CONTROL).perform()',
        '',
        '# Select All (Ctrl+A)',
        'actions.key_down(Keys.CONTROL).send_keys("a").key_up(Keys.CONTROL).perform()',
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
        'import org.openqa.selenium.Keys;',
        'import org.openqa.selenium.interactions.Actions;',
        '',
        'WebDriver driver = new ChromeDriver();',
        '',
        '// Create Actions instance',
        'Actions actions = new Actions(driver);',
        '',
        '// Type text',
        'WebElement element = driver.findElement(By.id("input"));',
        'actions.sendKeys(element, "Hello World").perform();',
        '',
        '// Press key down',
        'actions.keyDown(Keys.SHIFT).sendKeys("text").keyUp(Keys.SHIFT).perform();',
        '',
        '// Release key',
        'actions.keyUp(Keys.SHIFT).perform();',
        '',
        '// Copy-Paste (Ctrl+C, Ctrl+V)',
        'actions.keyDown(Keys.CONTROL).sendKeys("c").keyUp(Keys.CONTROL).perform();',
        'actions.keyDown(Keys.CONTROL).sendKeys("v").keyUp(Keys.CONTROL).perform();',
        '',
        '// Select All (Ctrl+A)',
        'actions.keyDown(Keys.CONTROL).sendKeys("a").keyUp(Keys.CONTROL).perform();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By, Key } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Create Actions instance',
        'let actions = driver.actions();',
        '',
        '// Type text',
        'let element = await driver.findElement(By.id(\'input\'));',
        'await actions.sendKeys(element, \'Hello World\').perform();',
        '',
        '// Press key down',
        'await actions.keyDown(Key.SHIFT).sendKeys(\'text\').keyUp(Key.SHIFT).perform();',
        '',
        '// Release key',
        'await actions.keyUp(Key.SHIFT).perform();',
        '',
        '// Copy-Paste (Ctrl+C, Ctrl+V)',
        'await actions.keyDown(Key.CONTROL).sendKeys(\'c\').keyUp(Key.CONTROL).perform();',
        'await actions.keyDown(Key.CONTROL).sendKeys(\'v\').keyUp(Key.CONTROL).perform();',
        '',
        '// Select All (Ctrl+A)',
        'await actions.keyDown(Key.CONTROL).sendKeys(\'a\').keyUp(Key.CONTROL).perform();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const keyboardActionsExample = {
    python: getKeyboardActionsCode('python').join('\n'),
    java: getKeyboardActionsCode('java').join('\n'),
    javascript: getKeyboardActionsCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Keyboard Actions"
        description="Master keyboard interactions and key combinations"
        icon={Keyboard}
        category="Selenium · Advanced Interactions"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-emerald-600" />
            Keyboard Interaction Methods
          </CardTitle>
          <CardDescription>
            Simulate keyboard input and key combinations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Keyboard actions enable complex text input and keyboard shortcuts:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>send_keys():</strong> Type text or press keys</li>
            <li><strong>key_down():</strong> Press and hold a key (modifier keys)</li>
            <li><strong>key_up():</strong> Release a held key</li>
            <li><strong>Key Combinations:</strong> Ctrl+C, Ctrl+V, Shift+Text</li>
            <li><strong>Special Keys:</strong> ENTER, TAB, ESCAPE, ARROW keys</li>
          </ul>

          <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">
            <Keyboard className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Modifier Keys</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Use key_down() and key_up() for modifier keys (Ctrl, Shift, Alt) to create keyboard shortcuts like Ctrl+C for copy.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-emerald-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Keyboard actions syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-emerald-600 text-emerald-600 dark:text-emerald-400'
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
                {selectedLanguage === 'python' && `from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains

actions = ActionChains(driver)

# Type text
element = driver.find_element(By.ID, "input")
actions.send_keys_to_element(element, "Hello").perform()

# Press ENTER
actions.send_keys(Keys.ENTER).perform()

# Ctrl+A (Select All)
actions.key_down(Keys.CONTROL).send_keys("a").key_up(Keys.CONTROL).perform()

# Ctrl+C (Copy)
actions.key_down(Keys.CONTROL).send_keys("c").key_up(Keys.CONTROL).perform()

# Ctrl+V (Paste)
actions.key_down(Keys.CONTROL).send_keys("v").key_up(Keys.CONTROL).perform()

# Shift+Text (Uppercase)
actions.key_down(Keys.SHIFT).send_keys("hello").key_up(Keys.SHIFT).perform()

# Special keys
actions.send_keys(Keys.TAB).perform()
actions.send_keys(Keys.ESCAPE).perform()
actions.send_keys(Keys.ARROW_DOWN).perform()
actions.send_keys(Keys.BACKSPACE).perform()

# Chain multiple keys
actions.send_keys("Hello")\\
       .send_keys(Keys.TAB)\\
       .send_keys("World")\\
       .perform()`}
                {selectedLanguage === 'java' && `import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;

Actions actions = new Actions(driver);

// Type text
WebElement element = driver.findElement(By.id("input"));
actions.sendKeys(element, "Hello").perform();

// Press ENTER
actions.sendKeys(Keys.ENTER).perform();

// Ctrl+A (Select All)
actions.keyDown(Keys.CONTROL).sendKeys("a").keyUp(Keys.CONTROL).perform();

// Ctrl+C (Copy)
actions.keyDown(Keys.CONTROL).sendKeys("c").keyUp(Keys.CONTROL).perform();

// Ctrl+V (Paste)
actions.keyDown(Keys.CONTROL).sendKeys("v").keyUp(Keys.CONTROL).perform();

// Shift+Text (Uppercase)
actions.keyDown(Keys.SHIFT).sendKeys("hello").keyUp(Keys.SHIFT).perform();

// Special keys
actions.sendKeys(Keys.TAB).perform();
actions.sendKeys(Keys.ESCAPE).perform();
actions.sendKeys(Keys.ARROW_DOWN).perform();
actions.sendKeys(Keys.BACK_SPACE).perform();

// Chain multiple keys
actions.sendKeys("Hello")
       .sendKeys(Keys.TAB)
       .sendKeys("World")
       .perform();`}
                {selectedLanguage === 'javascript' && `const { Key } = require('selenium-webdriver');

let actions = driver.actions();

// Type text
let element = await driver.findElement(By.id('input'));
await actions.sendKeys(element, 'Hello').perform();

// Press ENTER
await actions.sendKeys(Key.ENTER).perform();

// Ctrl+A (Select All)
await actions.keyDown(Key.CONTROL).sendKeys('a').keyUp(Key.CONTROL).perform();

// Ctrl+C (Copy)
await actions.keyDown(Key.CONTROL).sendKeys('c').keyUp(Key.CONTROL).perform();

// Ctrl+V (Paste)
await actions.keyDown(Key.CONTROL).sendKeys('v').keyUp(Key.CONTROL).perform();

// Shift+Text (Uppercase)
await actions.keyDown(Key.SHIFT).sendKeys('hello').keyUp(Key.SHIFT).perform();

// Special keys
await actions.sendKeys(Key.TAB).perform();
await actions.sendKeys(Key.ESCAPE).perform();
await actions.sendKeys(Key.ARROW_DOWN).perform();
await actions.sendKeys(Key.BACK_SPACE).perform();

// Chain multiple keys
await actions.sendKeys('Hello')
             .sendKeys(Key.TAB)
             .sendKeys('World')
             .perform();`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-emerald-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch keyboard actions in real-time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Keyboard Actions Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch keyboard interactions with inline variable values!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
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
                        ? 'border-emerald-500 bg-emerald-100 dark:bg-emerald-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-emerald-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-keyboard"
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
                  <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateKeyboardActions}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
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
                    onClick={() => copyToClipboard(keyboardActionsExample[selectedLanguage], 'Keyboard Actions code')}
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
                    {getKeyboardActionsCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-emerald-200 dark:bg-emerald-900/50 border-l-4 border-emerald-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-emerald-900 dark:text-emerald-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded border border-emerald-200 dark:border-emerald-700">
                        <div className="text-[10px] font-bold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-emerald-800 dark:text-emerald-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-emerald-600 dark:text-emerald-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{keyboardActionsExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Keyboard Actions Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[500px]">
                  <div className="space-y-4">
                    <div className={`${selectedElement === 'input1' ? 'ring-4 ring-emerald-500 rounded-lg p-2' : 'p-2'}`}>
                      <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Text Input:</label>
                      <input 
                        type="text" 
                        value={selectedElement === 'input1' ? keyboardState.inputValue : ''} 
                        readOnly
                        className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-900"
                        placeholder="Type here..."
                      />
                    </div>

                    <div className={`${selectedElement === 'input2' ? 'ring-4 ring-emerald-500 rounded-lg p-2' : 'p-2'}`}>
                      <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Shift Key:</label>
                      <input 
                        type="text" 
                        value={selectedElement === 'input2' ? keyboardState.inputValue : ''} 
                        readOnly
                        className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-900"
                        placeholder="SHIFT modifier..."
                      />
                    </div>

                    <div className={`${selectedElement === 'input3' ? 'ring-4 ring-emerald-500 rounded-lg p-2' : 'p-2'}`}>
                      <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Copy-Paste:</label>
                      <input 
                        type="text" 
                        value={selectedElement === 'input3' ? keyboardState.inputValue : ''} 
                        readOnly
                        className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-900"
                        placeholder="Ctrl+C, Ctrl+V..."
                      />
                    </div>

                    <div className={`${selectedElement === 'input4' ? 'ring-4 ring-emerald-500 rounded-lg p-2' : 'p-2'}`}>
                      <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Select All:</label>
                      <input 
                        type="text" 
                        value={selectedElement === 'input4' ? keyboardState.inputValue : ''} 
                        readOnly
                        className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-900"
                        placeholder="Ctrl+A..."
                      />
                    </div>
                  </div>

                  {keyboardState.action && (
                    <div className="mt-6 p-4 bg-emerald-100 dark:bg-emerald-950/50 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Type className="w-5 h-5 text-emerald-600" />
                        <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
                          {keyboardState.action}
                        </span>
                      </div>
                      <div className="text-xs text-emerald-700 dark:text-emerald-300">
                        Keys: {keyboardState.keys}
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
            <Keyboard className="w-5 h-5 text-blue-600" />
            Common Keys
          </CardTitle>
          <CardDescription>Frequently used special keys</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-1 text-[10px]">Keys.ENTER</Badge>
              <p className="text-xs text-slate-600 dark:text-slate-400">Submit form / New line</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-1 text-[10px]">Keys.TAB</Badge>
              <p className="text-xs text-slate-600 dark:text-slate-400">Move to next field</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-1 text-[10px]">Keys.ESCAPE</Badge>
              <p className="text-xs text-slate-600 dark:text-slate-400">Close dialog / Cancel</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-600 mb-1 text-[10px]">Keys.BACKSPACE</Badge>
              <p className="text-xs text-slate-600 dark:text-slate-400">Delete character</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-1 text-[10px]">Keys.ARROW_*</Badge>
              <p className="text-xs text-slate-600 dark:text-slate-400">Navigate up/down/left/right</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-lg border border-teal-200 dark:border-teal-700">
              <Badge className="bg-teal-600 mb-1 text-[10px]">Keys.SPACE</Badge>
              <p className="text-xs text-slate-600 dark:text-slate-400">Space character</p>
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Release Modifier Keys</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always call key_up() after key_down() for modifiers
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use send_keys_to_element</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Target specific elements for better control
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Chain Key Actions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Combine multiple key actions before perform()
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Platform-Specific Keys</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use Keys.COMMAND on Mac, Keys.CONTROL on Windows/Linux
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
              <AlertTitle className="text-red-900 dark:text-red-100">Keys Not Working</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Keys don't register<br/>
                <strong>Solution:</strong> Ensure element has focus before sending keys
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Modifier Key Stuck</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Modifier key remains pressed<br/>
                <strong>Solution:</strong> Always call key_up() after key_down()
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Special Characters</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Special characters don't type correctly<br/>
                <strong>Solution:</strong> Use Unicode or Keys constants for special characters
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Keyboard Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Keyboard Shortcuts</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Common Shortcuts</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Ctrl+A (Select All)<br/>
                actions.key_down(Keys.CONTROL).send_keys('a').key_up(Keys.CONTROL).perform()<br/>
                <br/>
                # Ctrl+Shift+T (Reopen Tab)<br/>
                actions.key_down(Keys.CONTROL).key_down(Keys.SHIFT)\\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.send_keys('t')\\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.key_up(Keys.SHIFT).key_up(Keys.CONTROL).perform()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">File Upload</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Upload with Keyboard</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Type file path in upload dialog<br/>
                file_input = driver.find_element(By.ID, "upload")<br/>
                file_input.send_keys("/path/to/file.pdf")
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Clear Field</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Clear with Keyboard</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Select all and delete<br/>
                actions.key_down(Keys.CONTROL).send_keys('a')\\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.key_up(Keys.CONTROL)\\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.send_keys(Keys.BACKSPACE)\\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.perform()
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

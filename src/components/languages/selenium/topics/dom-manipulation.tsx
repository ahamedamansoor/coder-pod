'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  FileCode,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  Edit3
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function DomManipulation() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [domState, setDomState] = React.useState({
    elementText: 'Original Text',
    elementStyle: '',
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

  const simulateDomManipulation = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setDomState({ elementText: 'Original Text', elementStyle: '', action: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, changeText: 7, changeStyle: 10, setAttribute: 13, addClass: 16, removeElement: 19, quit: 22 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, changeText: 7, changeStyle: 10, setAttribute: 13, addClass: 16, removeElement: 19, quit: 21 };
      } else {
        return { init: 2, changeText: 5, changeStyle: 8, setAttribute: 11, addClass: 14, removeElement: 17, quit: 19 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting DOM Manipulation demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '📝 Changing element text...', delay: 1200 * multiplier, element: 'text', action: 'change-text', codeLine: lines.changeText, variable: { name: 'element', value: '<WebElement: div#content>' } },
      { step: 3, log: '✅ Text changed to "Modified Text"', delay: 700 * multiplier, element: 'text', codeLine: lines.changeText, variable: { name: 'new_text', value: 'Modified Text' } },
      { step: 4, log: '🎨 Changing element style...', delay: 1200 * multiplier, element: 'style', action: 'change-style', codeLine: lines.changeStyle, variable: { name: 'new_text', value: 'Modified Text' } },
      { step: 5, log: '✅ Style applied', delay: 700 * multiplier, element: 'style', codeLine: lines.changeStyle, variable: { name: 'style', value: 'background: yellow' } },
      { step: 6, log: '🏷️ Setting attribute...', delay: 1200 * multiplier, element: 'attr', action: 'set-attr', codeLine: lines.setAttribute, variable: { name: 'style', value: 'background: yellow' } },
      { step: 7, log: '✅ Attribute set', delay: 700 * multiplier, element: 'attr', codeLine: lines.setAttribute, variable: { name: 'attribute', value: 'data-test="modified"' } },
      { step: 8, log: '➕ Adding CSS class...', delay: 1200 * multiplier, element: 'class', action: 'add-class', codeLine: lines.addClass, variable: { name: 'attribute', value: 'data-test="modified"' } },
      { step: 9, log: '✅ Class added', delay: 700 * multiplier, element: 'class', codeLine: lines.addClass, variable: { name: 'class_name', value: 'highlight' } },
      { step: 10, log: '🗑️ Removing element...', delay: 1200 * multiplier, element: 'remove', action: 'remove', codeLine: lines.removeElement, variable: { name: 'class_name', value: 'highlight' } },
      { step: 11, log: '✅ Element removed', delay: 700 * multiplier, element: null, codeLine: lines.removeElement, variable: { name: 'removed', value: 'true' } },
      { step: 12, log: '🎉 DOM Manipulation demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'removed', value: 'true' } },
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
      
      if (action === 'change-text') {
        setDomState({ elementText: 'Modified Text', elementStyle: '', action: 'Text changed' });
      } else if (action === 'change-style') {
        setDomState({ elementText: 'Modified Text', elementStyle: 'background: yellow', action: 'Style applied' });
      } else if (action === 'set-attr') {
        setDomState({ elementText: 'Modified Text', elementStyle: 'background: yellow', action: 'Attribute set' });
      } else if (action === 'add-class') {
        setDomState({ elementText: 'Modified Text', elementStyle: 'background: yellow; border: 2px solid red', action: 'Class added' });
      } else if (action === 'remove') {
        setDomState({ elementText: '', elementStyle: '', action: 'Element removed' });
      }
    }

    setIsRunning(false);
  };

  const getDomManipulationCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# Change element text/innerHTML',
        'element = driver.find_element(By.ID, "content")',
        'driver.execute_script("arguments[0].innerText = \'New Text\'", element)',
        '',
        '# Change element style',
        'driver.execute_script("arguments[0].style.backgroundColor = \'yellow\'", element)',
        '',
        '# Set attribute',
        'driver.execute_script("arguments[0].setAttribute(\'data-test\', \'value\')", element)',
        '',
        '# Add CSS class',
        'driver.execute_script("arguments[0].classList.add(\'highlight\')", element)',
        '',
        '# Remove element',
        'driver.execute_script("arguments[0].remove()", element)',
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
        '// Change element text/innerHTML',
        'WebElement element = driver.findElement(By.id("content"));',
        'js.executeScript("arguments[0].innerText = \'New Text\'", element);',
        '',
        '// Change element style',
        'js.executeScript("arguments[0].style.backgroundColor = \'yellow\'", element);',
        '',
        '// Set attribute',
        'js.executeScript("arguments[0].setAttribute(\'data-test\', \'value\')", element);',
        '',
        '// Add CSS class',
        'js.executeScript("arguments[0].classList.add(\'highlight\')", element);',
        '',
        '// Remove element',
        'js.executeScript("arguments[0].remove()", element);',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Change element text/innerHTML',
        'let element = await driver.findElement(By.id(\'content\'));',
        'await driver.executeScript("arguments[0].innerText = \'New Text\'", element);',
        '',
        '// Change element style',
        'await driver.executeScript("arguments[0].style.backgroundColor = \'yellow\'", element);',
        '',
        '// Set attribute',
        'await driver.executeScript("arguments[0].setAttribute(\'data-test\', \'value\')", element);',
        '',
        '// Add CSS class',
        'await driver.executeScript("arguments[0].classList.add(\'highlight\')", element);',
        '',
        '// Remove element',
        'await driver.executeScript("arguments[0].remove()", element);',
        '',
        'await driver.quit();',
      ];
    }
  };

  const domManipulationExample = {
    python: getDomManipulationCode('python').join('\n'),
    java: getDomManipulationCode('java').join('\n'),
    javascript: getDomManipulationCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="DOM Manipulation"
        description="Modify page elements with JavaScript"
        icon={FileCode}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="w-5 h-5 text-teal-600" />
            DOM Manipulation with JavaScript
          </CardTitle>
          <CardDescription>
            Modify, create, and remove DOM elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            DOM manipulation through JavaScript allows you to modify page content, styles, attributes, and structure dynamically. This is useful for testing dynamic content, bypassing restrictions, or preparing test data.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Change Text:</strong> Modify innerText, innerHTML, or textContent</li>
            <li><strong>Modify Styles:</strong> Change CSS properties directly</li>
            <li><strong>Set Attributes:</strong> Add or modify element attributes</li>
            <li><strong>Add/Remove Classes:</strong> Manipulate CSS classes</li>
            <li><strong>Create Elements:</strong> Add new DOM elements</li>
            <li><strong>Remove Elements:</strong> Delete elements from DOM</li>
          </ul>

          <Alert className="border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-950/20">
            <FileCode className="h-5 w-5 text-teal-600" />
            <AlertTitle className="text-teal-900 dark:text-teal-100">Use Cases</AlertTitle>
            <AlertDescription className="text-teal-800 dark:text-teal-200">
              Use DOM manipulation to: set input values, enable disabled elements, remove overlays, modify readonly fields, or inject test data.
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
            DOM manipulation syntax in Python, Java, and JavaScript
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
                {selectedLanguage === 'python' && `# Change text content
driver.execute_script("arguments[0].innerText = 'New Text'", element)
driver.execute_script("arguments[0].innerHTML = '<b>Bold Text</b>'", element)

# Change styles
driver.execute_script("arguments[0].style.backgroundColor = 'yellow'", element)
driver.execute_script("arguments[0].style.display = 'none'", element)
driver.execute_script("arguments[0].style.border = '2px solid red'", element)

# Set/Get attributes
driver.execute_script("arguments[0].setAttribute('disabled', 'true')", element)
driver.execute_script("arguments[0].removeAttribute('readonly')", element)
value = driver.execute_script("return arguments[0].getAttribute('data-id')", element)

# Modify input values
driver.execute_script("arguments[0].value = 'test@example.com'", input_field)

# Add/Remove CSS classes
driver.execute_script("arguments[0].classList.add('active')", element)
driver.execute_script("arguments[0].classList.remove('hidden')", element)
driver.execute_script("arguments[0].classList.toggle('selected')", element)

# Create new element
driver.execute_script("""
    var div = document.createElement('div');
    div.id = 'new-element';
    div.innerText = 'Dynamically created';
    document.body.appendChild(div);
""")

# Remove element
driver.execute_script("arguments[0].remove()", element)

# Remove all children
driver.execute_script("arguments[0].innerHTML = ''", container)

# Clone element
driver.execute_script("""
    var clone = arguments[0].cloneNode(true);
    arguments[0].parentNode.appendChild(clone);
""", element)

# Enable disabled element
driver.execute_script("arguments[0].disabled = false", button)
driver.execute_script("arguments[0].removeAttribute('disabled')", button)

# Make readonly field editable
driver.execute_script("arguments[0].readOnly = false", input_field)

# Remove overlay/modal
overlay = driver.find_element(By.CLASS_NAME, "modal-overlay")
driver.execute_script("arguments[0].remove()", overlay)

# Trigger events
driver.execute_script("arguments[0].dispatchEvent(new Event('change'))", element)

# Get computed styles
color = driver.execute_script(
    "return window.getComputedStyle(arguments[0]).color",
    element
)`}
                {selectedLanguage === 'java' && `JavascriptExecutor js = (JavascriptExecutor) driver;

// Change text content
js.executeScript("arguments[0].innerText = 'New Text'", element);
js.executeScript("arguments[0].innerHTML = '<b>Bold Text</b>'", element);

// Change styles
js.executeScript("arguments[0].style.backgroundColor = 'yellow'", element);
js.executeScript("arguments[0].style.display = 'none'", element);
js.executeScript("arguments[0].style.border = '2px solid red'", element);

// Set/Get attributes
js.executeScript("arguments[0].setAttribute('disabled', 'true')", element);
js.executeScript("arguments[0].removeAttribute('readonly')", element);
String value = (String) js.executeScript("return arguments[0].getAttribute('data-id')", element);

// Modify input values
js.executeScript("arguments[0].value = 'test@example.com'", inputField);

// Add/Remove CSS classes
js.executeScript("arguments[0].classList.add('active')", element);
js.executeScript("arguments[0].classList.remove('hidden')", element);
js.executeScript("arguments[0].classList.toggle('selected')", element);

// Create new element
js.executeScript(
    "var div = document.createElement('div');" +
    "div.id = 'new-element';" +
    "div.innerText = 'Dynamically created';" +
    "document.body.appendChild(div);"
);

// Remove element
js.executeScript("arguments[0].remove()", element);

// Remove all children
js.executeScript("arguments[0].innerHTML = ''", container);

// Clone element
js.executeScript(
    "var clone = arguments[0].cloneNode(true);" +
    "arguments[0].parentNode.appendChild(clone);",
    element
);

// Enable disabled element
js.executeScript("arguments[0].disabled = false", button);
js.executeScript("arguments[0].removeAttribute('disabled')", button);

// Make readonly field editable
js.executeScript("arguments[0].readOnly = false", inputField);

// Remove overlay/modal
WebElement overlay = driver.findElement(By.className("modal-overlay"));
js.executeScript("arguments[0].remove()", overlay);

// Trigger events
js.executeScript("arguments[0].dispatchEvent(new Event('change'))", element);

// Get computed styles
String color = (String) js.executeScript(
    "return window.getComputedStyle(arguments[0]).color",
    element
);`}
                {selectedLanguage === 'javascript' && `// Change text content
await driver.executeScript("arguments[0].innerText = 'New Text'", element);
await driver.executeScript("arguments[0].innerHTML = '<b>Bold Text</b>'", element);

// Change styles
await driver.executeScript("arguments[0].style.backgroundColor = 'yellow'", element);
await driver.executeScript("arguments[0].style.display = 'none'", element);
await driver.executeScript("arguments[0].style.border = '2px solid red'", element);

// Set/Get attributes
await driver.executeScript("arguments[0].setAttribute('disabled', 'true')", element);
await driver.executeScript("arguments[0].removeAttribute('readonly')", element);
let value = await driver.executeScript("return arguments[0].getAttribute('data-id')", element);

// Modify input values
await driver.executeScript("arguments[0].value = 'test@example.com'", inputField);

// Add/Remove CSS classes
await driver.executeScript("arguments[0].classList.add('active')", element);
await driver.executeScript("arguments[0].classList.remove('hidden')", element);
await driver.executeScript("arguments[0].classList.toggle('selected')", element);

// Create new element
await driver.executeScript(\`
    var div = document.createElement('div');
    div.id = 'new-element';
    div.innerText = 'Dynamically created';
    document.body.appendChild(div);
\`);

// Remove element
await driver.executeScript("arguments[0].remove()", element);

// Remove all children
await driver.executeScript("arguments[0].innerHTML = ''", container);

// Clone element
await driver.executeScript(\`
    var clone = arguments[0].cloneNode(true);
    arguments[0].parentNode.appendChild(clone);
\`, element);

// Enable disabled element
await driver.executeScript("arguments[0].disabled = false", button);
await driver.executeScript("arguments[0].removeAttribute('disabled')", button);

// Make readonly field editable
await driver.executeScript("arguments[0].readOnly = false", inputField);

// Remove overlay/modal
let overlay = await driver.findElement(By.className('modal-overlay'));
await driver.executeScript("arguments[0].remove()", overlay);

// Trigger events
await driver.executeScript("arguments[0].dispatchEvent(new Event('change'))", element);

// Get computed styles
let color = await driver.executeScript(
    "return window.getComputedStyle(arguments[0]).color",
    element
);`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="w-5 h-5 text-teal-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch DOM manipulation in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive DOM Manipulation Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch DOM modifications with inline variable values!
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
                      name="speed-dom"
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
                    onClick={simulateDomManipulation}
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
                    onClick={() => copyToClipboard(domManipulationExample[selectedLanguage], 'DOM Manipulation code')}
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
                    {getDomManipulationCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{domManipulationExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live DOM Preview</h4>
                  <Badge variant="outline" className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-700">
                    Real-time
                  </Badge>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 overflow-hidden shadow-lg">
                  {/* Browser Header */}
                  <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                      </div>
                      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-mono text-white/90 border border-white/20">
                        https://example.com/demo
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-white/80">Live</span>
                      </div>
                    </div>
                  </div>

                  {/* DOM Content */}
                  <div className="p-6 min-h-[500px] bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                    {/* DOM Tree Visualization */}
                    <div className="space-y-4">
                      {/* HTML Structure */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-purple-600 dark:text-purple-400">&lt;html&gt;</span>
                          <div className="flex-1 border-l-2 border-purple-300 dark:border-purple-700 ml-2 pl-4">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono text-purple-600 dark:text-purple-400">&lt;body&gt;</span>
                              <div className="flex-1 border-l-2 border-purple-300 dark:border-purple-700 ml-2 pl-4">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-mono text-purple-600 dark:text-purple-400">&lt;div&gt;</span>
                                  <div className="flex-1 border-l-2 border-purple-300 dark:border-purple-700 ml-2 pl-4">
                                    
                                    {/* Target Element */}
                                    {domState.elementText ? (
                                      <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                          <span className="text-xs font-mono text-teal-600 dark:text-teal-400">
                                            &lt;div id="content" 
                                            {domState.elementStyle.includes('yellow') && ' style="background: yellow"'}
                                            {domState.elementStyle.includes('red') && ' style="border: 2px solid red"'}&gt;
                                          </span>
                                          {selectedElement && (
                                            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                                          )}
                                        </div>
                                        
                                        {/* Element Content */}
                                        <div 
                                          className={`ml-4 p-4 rounded-lg border-2 transition-all duration-300 ${
                                            selectedElement === 'text' ? 'border-teal-500 ring-2 ring-teal-500 shadow-lg' : 
                                            selectedElement === 'style' ? 'border-yellow-500 ring-2 ring-yellow-500 shadow-lg' :
                                            selectedElement === 'attr' ? 'border-purple-500 ring-2 ring-purple-500 shadow-lg' :
                                            selectedElement === 'class' ? 'border-orange-500 ring-2 ring-orange-500 shadow-lg' :
                                            'border-slate-300 dark:border-slate-600'
                                          }`}
                                          style={{ 
                                            background: domState.elementStyle.includes('yellow') ? '#fef3c7' : 'transparent',
                                            border: domState.elementStyle.includes('red') ? '2px solid #ef4444' : undefined
                                          }}
                                        >
                                          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                            {domState.elementText}
                                          </div>
                                          <div className="text-xs text-slate-600 dark:text-slate-400 mt-2 font-mono">
                                            ID: content
                                            {domState.elementStyle.includes('yellow') && ' | Style: background: yellow'}
                                            {domState.elementStyle.includes('red') && ' | Style: border: 2px solid red'}
                                            {domState.elementStyle.includes('red') && domState.elementStyle.includes('yellow') && ' | Combined'}
                                          </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-2">
                                          <span className="text-xs font-mono text-teal-600 dark:text-teal-400">&lt;/div&gt;</span>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="text-center py-8">
                                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                          <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                                        </div>
                                        <div className="text-sm text-red-600 dark:text-red-400 font-medium">
                                          Element Removed
                                        </div>
                                        <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                                          The target element has been deleted from the DOM
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs font-mono text-purple-600 dark:text-purple-400">&lt;/div&gt;</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs font-mono text-purple-600 dark:text-purple-400">&lt;/body&gt;</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-purple-600 dark:text-purple-400">&lt;/html&gt;</span>
                        </div>
                      </div>

                      {/* Change Indicator */}
                      {domState.action && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-teal-200 dark:border-teal-700">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                                <Edit3 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                                  {domState.action}
                                </div>
                                <div className="text-xs text-teal-700 dark:text-teal-300">
                                  DOM modification applied successfully
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-xs text-green-600 dark:text-green-400">Applied</span>
                            </div>
                          </div>
                          
                          {/* Action Details */}
                          <div className="mt-3 pt-3 border-t border-teal-200 dark:border-teal-700">
                            <div className="grid grid-cols-2 gap-4 text-xs">
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                  <Code className="w-2 h-2 text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="text-slate-600 dark:text-slate-400">
                                  Method: <span className="font-mono text-blue-600 dark:text-blue-400">execute_script()</span>
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                                  <Zap className="w-2 h-2 text-purple-600 dark:text-purple-400" />
                                </div>
                                <span className="text-slate-600 dark:text-slate-400">
                                  Target: <span className="font-mono text-purple-600 dark:text-purple-400">#content</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Visual DOM Properties */}
                      {domState.elementText && (
                        <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                            <FileCode className="w-3 h-3" />
                            Element Properties
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-slate-600 dark:text-slate-400">ID:</span>
                                <span className="font-mono text-teal-600 dark:text-teal-400">content</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-600 dark:text-slate-400">Text:</span>
                                <span className="font-mono text-blue-600 dark:text-blue-400">{domState.elementText}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-600 dark:text-slate-400">Classes:</span>
                                <span className="font-mono text-purple-600 dark:text-purple-400">
                                  {domState.elementStyle.includes('red') ? 'highlight' : 'none'}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-slate-600 dark:text-slate-400">Background:</span>
                                <span className="font-mono text-yellow-600 dark:text-yellow-400">
                                  {domState.elementStyle.includes('yellow') ? 'yellow' : 'transparent'}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-600 dark:text-slate-400">Border:</span>
                                <span className="font-mono text-red-600 dark:text-red-400">
                                  {domState.elementStyle.includes('red') ? '2px solid red' : 'none'}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-600 dark:text-slate-400">Visible:</span>
                                <span className="font-mono text-green-600 dark:text-green-400">true</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
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
            <FileCode className="w-5 h-5 text-blue-600" />
            Common DOM Operations
          </CardTitle>
          <CardDescription>Frequently used manipulations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Change Text</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">innerText / innerHTML</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("arguments[0].innerText = 'New'", el)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Change Style</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">style.property</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("arguments[0].style.display = 'none'", el)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">Set Attribute</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">setAttribute()</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("arguments[0].setAttribute('disabled', '')", el)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-600 mb-2">Add Class</Badge>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">classList.add()</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("arguments[0].classList.add('active')", el)
              </code>
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Sparingly</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Prefer Selenium's native methods when possible
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Verify Changes</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Check that DOM modifications took effect
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Pass Elements</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use arguments[0] to reference WebElements
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Test Impact</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ensure modifications don't break page functionality
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
              <AlertTitle className="text-red-900 dark:text-red-100">Changes Not Persisting</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> DOM changes revert immediately<br/>
                <strong>Solution:</strong> Page JavaScript may be overwriting changes - disable or modify scripts
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Element Not Found</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Cannot manipulate element<br/>
                <strong>Solution:</strong> Ensure element exists and is passed correctly as argument
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Events Not Firing</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Change doesn't trigger event listeners<br/>
                <strong>Solution:</strong> Manually dispatch events with dispatchEvent()
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced DOM Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Enable Disabled Elements</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Bypass Restrictions</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Enable disabled button<br/>
                driver.execute_script("arguments[0].disabled = false", button)<br/>
                <br/>
                # Make readonly field editable<br/>
                driver.execute_script("arguments[0].readOnly = false", input_field)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Remove Overlays</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Clear Blocking Elements</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Remove modal overlay<br/>
                overlay = driver.find_element(By.CLASS_NAME, "modal-overlay")<br/>
                driver.execute_script("arguments[0].remove()", overlay)<br/>
                <br/>
                # Hide cookie banner<br/>
                banner = driver.find_element(By.ID, "cookie-banner")<br/>
                driver.execute_script("arguments[0].style.display = 'none'", banner)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Inject Test Data</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Add Elements Dynamically</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("""<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;var option = document.createElement('option');<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;option.value = 'test';<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;option.text = 'Test Option';<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;arguments[0].appendChild(option);<br/>
                """, select_element)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Type,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Eraser,
  Keyboard,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function TextClear() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [formInputs, setFormInputs] = React.useState({
    username: '',
    email: '',
    search: ''
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

  const simulateTextClear = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setFormInputs({
      username: '',
      email: '',
      search: ''
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findUser: 10, typeUser: 11, findEmail: 14, typeEmail: 15, findSearch: 18, typeSearch: 19, clearSearch: 20, typeNewSearch: 21, quit: 24 };
      } else if (selectedLanguage === 'java') {
        return { nav: 8, findUser: 11, typeUser: 12, findEmail: 15, typeEmail: 16, findSearch: 19, typeSearch: 20, clearSearch: 21, typeNewSearch: 22, quit: 24 };
      } else {
        return { nav: 3, findUser: 6, typeUser: 7, findEmail: 10, typeEmail: 11, findSearch: 14, typeSearch: 15, clearSearch: 16, typeNewSearch: 17, quit: 19 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      username: selectedLanguage === 'python' ? 'username_field' : 'usernameField',
      email: selectedLanguage === 'python' ? 'email_field' : 'emailField',
      search: selectedLanguage === 'python' ? 'search_box' : 'searchBox'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Text & Clear demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading form page...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Finding username field...', delay: 800 * multiplier, element: null, codeLine: lines.findUser, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '✅ Found username field', delay: 700 * multiplier, element: 'username', codeLine: lines.findUser, variable: { name: varNames.username, value: '<WebElement: input#username>' } },
      { step: 4, log: '⌨️  Typing "john_doe" into username...', delay: 1200 * multiplier, element: 'username', action: 'type-username', codeLine: lines.typeUser, variable: { name: varNames.username, value: 'john_doe' } },
      { step: 5, log: '🔍 Finding email field...', delay: 800 * multiplier, element: 'username', codeLine: lines.findEmail, variable: { name: varNames.username, value: 'john_doe' } },
      { step: 6, log: '✅ Found email field', delay: 700 * multiplier, element: 'email', codeLine: lines.findEmail, variable: { name: varNames.email, value: '<WebElement: input[type="email"]>' } },
      { step: 7, log: '⌨️  Typing "john@example.com" into email...', delay: 1200 * multiplier, element: 'email', action: 'type-email', codeLine: lines.typeEmail, variable: { name: varNames.email, value: 'john@example.com' } },
      { step: 8, log: '🔍 Finding search box...', delay: 800 * multiplier, element: 'email', codeLine: lines.findSearch, variable: { name: varNames.email, value: 'john@example.com' } },
      { step: 9, log: '✅ Found search box', delay: 700 * multiplier, element: 'search', codeLine: lines.findSearch, variable: { name: varNames.search, value: '<WebElement: input#search>' } },
      { step: 10, log: '⌨️  Typing "old search term" into search...', delay: 1200 * multiplier, element: 'search', action: 'type-search', codeLine: lines.typeSearch, variable: { name: varNames.search, value: 'old search term' } },
      { step: 11, log: '🧹 Clearing search box...', delay: 1000 * multiplier, element: 'search', action: 'clear-search', codeLine: lines.clearSearch, variable: { name: varNames.search, value: '' } },
      { step: 12, log: '⌨️  Typing "new search term" into cleared search...', delay: 1200 * multiplier, element: 'search', action: 'type-new-search', codeLine: lines.typeNewSearch, variable: { name: varNames.search, value: 'new search term' } },
      { step: 13, log: '🎉 Text & Clear demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: varNames.search, value: 'new search term' } },
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
      
      if (action === 'type-username') {
        setFormInputs(prev => ({ ...prev, username: 'john_doe' }));
      } else if (action === 'type-email') {
        setFormInputs(prev => ({ ...prev, email: 'john@example.com' }));
      } else if (action === 'type-search') {
        setFormInputs(prev => ({ ...prev, search: 'old search term' }));
      } else if (action === 'clear-search') {
        setFormInputs(prev => ({ ...prev, search: '' }));
      } else if (action === 'type-new-search') {
        setFormInputs(prev => ({ ...prev, search: 'new search term' }));
      }
    }

    setIsRunning(false);
  };

  const getTextClearCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.common.keys import Keys',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to form page',
        'driver.get("https://www.example.com/form")',
        '',
        '# Find username field and type text',
        'username_field = driver.find_element(By.ID, "username")',
        'username_field.send_keys("john_doe")',
        '',
        '# Find email field and type text',
        'email_field = driver.find_element(By.CSS_SELECTOR, "input[type=\'email\']")',
        'email_field.send_keys("john@example.com")',
        '',
        '# Find search box, type, clear, and type again',
        'search_box = driver.find_element(By.ID, "search")',
        'search_box.send_keys("old search term")',
        'search_box.clear()  # Clear the field',
        'search_box.send_keys("new search term")',
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
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com/form");',
        '',
        '// Find username field and type text',
        'WebElement usernameField = driver.findElement(By.id("username"));',
        'usernameField.sendKeys("john_doe");',
        '',
        '// Find email field and type text',
        'WebElement emailField = driver.findElement(By.cssSelector("input[type=\'email\']"));',
        'emailField.sendKeys("john@example.com");',
        '',
        '// Find search box, type, clear, and type again',
        'WebElement searchBox = driver.findElement(By.id("search"));',
        'searchBox.sendKeys("old search term");',
        'searchBox.clear();  // Clear the field',
        'searchBox.sendKeys("new search term");',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By, Key } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com/form\');',
        '',
        '// Find username field and type text',
        'let usernameField = await driver.findElement(By.id(\'username\'));',
        'await usernameField.sendKeys(\'john_doe\');',
        '',
        '// Find email field and type text',
        'let emailField = await driver.findElement(By.css(\'input[type="email"]\'));',
        'await emailField.sendKeys(\'john@example.com\');',
        '',
        '// Find search box, type, clear, and type again',
        'let searchBox = await driver.findElement(By.id(\'search\'));',
        'await searchBox.sendKeys(\'old search term\');',
        'await searchBox.clear();  // Clear the field',
        'await searchBox.sendKeys(\'new search term\');',
        '',
        'await driver.quit();',
      ];
    }
  };

  const textClearExample = {
    python: getTextClearCode('python').join('\n'),
    java: getTextClearCode('java').join('\n'),
    javascript: getTextClearCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Text & Clear"
        description="Learn to type text and clear input fields in Selenium"
        icon={Type}
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="w-5 h-5 text-cyan-600" />
            Text Input and Clear Operations
          </CardTitle>
          <CardDescription>
            Essential methods for interacting with input fields
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Typing text and clearing fields are fundamental operations in web automation. Selenium provides simple yet powerful methods for these actions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>send_keys() / sendKeys():</strong> Type text into input fields</li>
            <li><strong>clear():</strong> Clear existing text from input fields</li>
            <li><strong>Special Keys:</strong> Send keyboard keys like ENTER, TAB, etc.</li>
            <li><strong>Combination:</strong> Clear and type new text in sequence</li>
          </ul>

          <Alert className="border-cyan-200 dark:border-cyan-700 bg-cyan-50 dark:bg-cyan-950/20">
            <Keyboard className="h-5 w-5 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Best Practice</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              Always clear input fields before typing new text to ensure no old data remains, especially in test scenarios where fields might have default values.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-cyan-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Text and clear syntax in Python, Java, and JavaScript
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
                {selectedLanguage === 'python' && `from selenium.webdriver.common.keys import Keys

# Basic text input
element = driver.find_element(By.ID, "username")
element.send_keys("john_doe")

# Clear and type
element.clear()
element.send_keys("new_username")

# Type with special keys
element.send_keys("search term", Keys.ENTER)

# Type multiple strings
element.send_keys("First", " ", "Second", " ", "Third")

# Append text (without clearing)
element.send_keys(" additional text")

# Clear field
element.clear()

# Check if field is empty after clear
assert element.get_attribute("value") == ""`}
                {selectedLanguage === 'java' && `import org.openqa.selenium.Keys;

// Basic text input
WebElement element = driver.findElement(By.id("username"));
element.sendKeys("john_doe");

// Clear and type
element.clear();
element.sendKeys("new_username");

// Type with special keys
element.sendKeys("search term", Keys.ENTER);

// Type multiple strings
element.sendKeys("First", " ", "Second", " ", "Third");

// Append text (without clearing)
element.sendKeys(" additional text");

// Clear field
element.clear();

// Check if field is empty after clear
assert element.getAttribute("value").equals("");`}
                {selectedLanguage === 'javascript' && `const { Key } = require('selenium-webdriver');

// Basic text input
let element = await driver.findElement(By.id('username'));
await element.sendKeys('john_doe');

// Clear and type
await element.clear();
await element.sendKeys('new_username');

// Type with special keys
await element.sendKeys('search term', Key.ENTER);

// Type multiple strings
await element.sendKeys('First', ' ', 'Second', ' ', 'Third');

// Append text (without clearing)
await element.sendKeys(' additional text');

// Clear field
await element.clear();

// Check if field is empty after clear
let value = await element.getAttribute('value');
assert(value === '');`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-cyan-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch text input and clear operations in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Text & Clear Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch text being typed into fields, then cleared and replaced. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
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
                      name="speed-text"
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
                  <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateTextClear}
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
                    onClick={() => copyToClipboard(textClearExample[selectedLanguage], 'Text & Clear code')}
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
                    {getTextClearCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{textClearExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Form Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px]">
                  <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100">User Registration Form</h3>
                  <div className="space-y-4">
                    {/* Username Field */}
                    <div className={`transition-all ${selectedElement === 'username' ? 'ring-2 ring-cyan-500 rounded-lg p-2' : ''}`}>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        <Keyboard className="w-4 h-4 inline mr-1" />
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        value={formInputs.username}
                        readOnly
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 font-mono"
                        placeholder="Enter username"
                      />
                      {formInputs.username && (
                        <div className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">
                          ✓ Typed: "{formInputs.username}"
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className={`transition-all ${selectedElement === 'email' ? 'ring-2 ring-cyan-500 rounded-lg p-2' : ''}`}>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        <Type className="w-4 h-4 inline mr-1" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formInputs.email}
                        readOnly
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 font-mono"
                        placeholder="your.email@example.com"
                      />
                      {formInputs.email && (
                        <div className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">
                          ✓ Typed: "{formInputs.email}"
                        </div>
                      )}
                    </div>

                    {/* Search Field */}
                    <div className={`transition-all ${selectedElement === 'search' ? 'ring-2 ring-cyan-500 rounded-lg p-2' : ''}`}>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        <Eraser className="w-4 h-4 inline mr-1" />
                        Search (with clear demo)
                      </label>
                      <input
                        type="text"
                        id="search"
                        value={formInputs.search}
                        readOnly
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 font-mono"
                        placeholder="Search..."
                      />
                      {currentStep >= 10 && currentStep < 11 && (
                        <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                          ⌨️ Typed: "old search term"
                        </div>
                      )}
                      {currentStep >= 11 && currentStep < 12 && (
                        <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                          🧹 Cleared!
                        </div>
                      )}
                      {currentStep >= 12 && (
                        <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                          ✓ New text: "{formInputs.search}"
                        </div>
                      )}
                    </div>

                    {currentStep >= 13 && (
                      <div className="mt-4 p-3 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-lg">
                        <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">All fields filled successfully!</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Special Keys */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-blue-600" />
            Special Keys
          </CardTitle>
          <CardDescription>Common keyboard keys for automation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { key: 'ENTER', desc: 'Submit forms or press Enter', color: 'from-blue-50 to-sky-50 border-blue-200' },
              { key: 'TAB', desc: 'Move to next field', color: 'from-green-50 to-teal-50 border-green-200' },
              { key: 'BACKSPACE', desc: 'Delete previous character', color: 'from-purple-50 to-fuchsia-50 border-purple-200' },
              { key: 'DELETE', desc: 'Delete next character', color: 'from-orange-50 to-yellow-50 border-orange-200' },
              { key: 'ESCAPE', desc: 'Close dialogs or cancel', color: 'from-pink-50 to-rose-50 border-pink-200' },
              { key: 'ARROW_UP/DOWN', desc: 'Navigate dropdowns', color: 'from-indigo-50 to-blue-50 border-indigo-200' },
              { key: 'CONTROL/COMMAND', desc: 'Modifier keys', color: 'from-emerald-50 to-green-50 border-emerald-200' },
              { key: 'SHIFT', desc: 'Uppercase or selection', color: 'from-amber-50 to-orange-50 border-amber-200' },
              { key: 'HOME/END', desc: 'Move to start/end', color: 'from-cyan-50 to-blue-50 border-cyan-200' },
            ].map((item, index) => (
              <div key={index} className={`p-3 bg-gradient-to-br ${item.color} dark:from-slate-800 dark:to-slate-700 rounded-lg border-2 dark:border-slate-600 hover:scale-105 transition-transform`}>
                <code className="text-sm font-bold text-slate-900 dark:text-slate-100 block mb-1">{item.key}</code>
                <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Clear Before Typing</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always clear fields before typing to avoid appending to existing text
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Wait for Element</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ensure element is visible and enabled before sending keys
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Verify Input</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Check field value after typing to ensure text was entered correctly
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Special Keys</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Leverage Keys class for keyboard shortcuts and navigation
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Issues */}
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
              <AlertTitle className="text-red-900 dark:text-red-100">Element Not Interactable</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Cannot type into field<br/>
                <strong>Solution:</strong> Wait for element to be visible and enabled, scroll into view
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Text Not Appearing</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Text typed but doesn't show in field<br/>
                <strong>Solution:</strong> Check if field is readonly, use JavaScript to set value if needed
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Clear Not Working</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> clear() doesn't remove all text<br/>
                <strong>Solution:</strong> Use keyboard shortcuts (Ctrl+A, Delete) or JavaScript
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Techniques */}
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
              <Badge className="bg-yellow-600 mb-2">Keyboard Shortcuts</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Select All and Replace</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                element.send_keys(Keys.CONTROL, "a")  # Select all<br/>
                element.send_keys("new text")  # Replace
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">JavaScript Alternative</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Set Value with JavaScript</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("arguments[0].value = 'text'", element)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Slow Typing</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Type Character by Character</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                for char in "text":<br/>
                &nbsp;&nbsp;element.send_keys(char)<br/>
                &nbsp;&nbsp;time.sleep(0.1)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

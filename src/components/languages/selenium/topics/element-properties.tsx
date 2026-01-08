'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Info,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Eye,
  ToggleLeft,
  FileText,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ElementProperties() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [elementStates, setElementStates] = React.useState({
    buttonDisplayed: false,
    buttonEnabled: false,
    checkboxSelected: false,
    inputValue: '',
    buttonText: '',
    linkHref: ''
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

  const simulateElementProperties = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setElementStates({
      buttonDisplayed: false,
      buttonEnabled: false,
      checkboxSelected: false,
      inputValue: '',
      buttonText: '',
      linkHref: ''
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findBtn: 10, isDisplayed: 11, isEnabled: 12, getText: 13, findCheckbox: 16, isSelected: 17, findInput: 20, getValue: 21, findLink: 24, getHref: 25, quit: 28 };
      } else if (selectedLanguage === 'java') {
        return { nav: 8, findBtn: 11, isDisplayed: 12, isEnabled: 13, getText: 14, findCheckbox: 17, isSelected: 18, findInput: 21, getValue: 22, findLink: 25, getHref: 26, quit: 28 };
      } else {
        return { nav: 3, findBtn: 6, isDisplayed: 7, isEnabled: 8, getText: 9, findCheckbox: 12, isSelected: 13, findInput: 16, getValue: 17, findLink: 20, getHref: 21, quit: 23 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      button: selectedLanguage === 'python' ? 'submit_button' : 'submitButton',
      checkbox: selectedLanguage === 'python' ? 'terms_checkbox' : 'termsCheckbox',
      input: selectedLanguage === 'python' ? 'email_input' : 'emailInput',
      link: selectedLanguage === 'python' ? 'help_link' : 'helpLink'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Element Properties demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading page with various elements...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Finding submit button...', delay: 800 * multiplier, element: null, codeLine: lines.findBtn, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '✅ Found submit button', delay: 700 * multiplier, element: 'button', codeLine: lines.findBtn, variable: { name: varNames.button, value: '<WebElement: button#submit>' } },
      { step: 4, log: '👁️ Checking if button is displayed...', delay: 1000 * multiplier, element: 'button', codeLine: lines.isDisplayed, variable: { name: varNames.button, value: '<WebElement: button#submit>' } },
      { step: 5, log: '✅ Button is displayed: True', delay: 700 * multiplier, element: 'button', action: 'displayed', codeLine: lines.isDisplayed, variable: { name: 'is_displayed', value: 'True' } },
      { step: 6, log: '🔓 Checking if button is enabled...', delay: 1000 * multiplier, element: 'button', codeLine: lines.isEnabled, variable: { name: 'is_displayed', value: 'True' } },
      { step: 7, log: '✅ Button is enabled: True', delay: 700 * multiplier, element: 'button', action: 'enabled', codeLine: lines.isEnabled, variable: { name: 'is_enabled', value: 'True' } },
      { step: 8, log: '📝 Getting button text...', delay: 1000 * multiplier, element: 'button', codeLine: lines.getText, variable: { name: 'is_enabled', value: 'True' } },
      { step: 9, log: '✅ Button text: "Submit Form"', delay: 700 * multiplier, element: 'button', action: 'text', codeLine: lines.getText, variable: { name: 'button_text', value: 'Submit Form' } },
      { step: 10, log: '🔍 Finding terms checkbox...', delay: 800 * multiplier, element: 'button', codeLine: lines.findCheckbox, variable: { name: 'button_text', value: 'Submit Form' } },
      { step: 11, log: '✅ Found checkbox', delay: 700 * multiplier, element: 'checkbox', codeLine: lines.findCheckbox, variable: { name: varNames.checkbox, value: '<WebElement: input[type="checkbox"]>' } },
      { step: 12, log: '☑️ Checking if checkbox is selected...', delay: 1000 * multiplier, element: 'checkbox', codeLine: lines.isSelected, variable: { name: varNames.checkbox, value: '<WebElement: input[type="checkbox"]>' } },
      { step: 13, log: '✅ Checkbox is selected: True', delay: 700 * multiplier, element: 'checkbox', action: 'selected', codeLine: lines.isSelected, variable: { name: 'is_selected', value: 'True' } },
      { step: 14, log: '🔍 Finding email input...', delay: 800 * multiplier, element: 'checkbox', codeLine: lines.findInput, variable: { name: 'is_selected', value: 'True' } },
      { step: 15, log: '✅ Found email input', delay: 700 * multiplier, element: 'input', codeLine: lines.findInput, variable: { name: varNames.input, value: '<WebElement: input#email>' } },
      { step: 16, log: '📧 Getting input value attribute...', delay: 1000 * multiplier, element: 'input', codeLine: lines.getValue, variable: { name: varNames.input, value: '<WebElement: input#email>' } },
      { step: 17, log: '✅ Input value: "user@example.com"', delay: 700 * multiplier, element: 'input', action: 'value', codeLine: lines.getValue, variable: { name: 'email_value', value: 'user@example.com' } },
      { step: 18, log: '🔍 Finding help link...', delay: 800 * multiplier, element: 'input', codeLine: lines.findLink, variable: { name: 'email_value', value: 'user@example.com' } },
      { step: 19, log: '✅ Found help link', delay: 700 * multiplier, element: 'link', codeLine: lines.findLink, variable: { name: varNames.link, value: '<WebElement: a#help>' } },
      { step: 20, log: '🔗 Getting link href attribute...', delay: 1000 * multiplier, element: 'link', codeLine: lines.getHref, variable: { name: varNames.link, value: '<WebElement: a#help>' } },
      { step: 21, log: '✅ Link href: "/help"', delay: 700 * multiplier, element: 'link', action: 'href', codeLine: lines.getHref, variable: { name: 'link_href', value: '/help' } },
      { step: 22, log: '🎉 Element properties demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'link_href', value: '/help' } },
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
      
      if (action === 'displayed') {
        setElementStates(prev => ({ ...prev, buttonDisplayed: true }));
      } else if (action === 'enabled') {
        setElementStates(prev => ({ ...prev, buttonEnabled: true }));
      } else if (action === 'text') {
        setElementStates(prev => ({ ...prev, buttonText: 'Submit Form' }));
      } else if (action === 'selected') {
        setElementStates(prev => ({ ...prev, checkboxSelected: true }));
      } else if (action === 'value') {
        setElementStates(prev => ({ ...prev, inputValue: 'user@example.com' }));
      } else if (action === 'href') {
        setElementStates(prev => ({ ...prev, linkHref: '/help' }));
      }
    }

    setIsRunning(false);
  };

  const getElementPropertiesCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to page',
        'driver.get("https://www.example.com/form")',
        '',
        '# Check button properties',
        'submit_button = driver.find_element(By.ID, "submit")',
        'is_displayed = submit_button.is_displayed()  # True if visible',
        'is_enabled = submit_button.is_enabled()  # True if enabled',
        'button_text = submit_button.text  # Get visible text',
        '',
        '# Check checkbox state',
        'terms_checkbox = driver.find_element(By.ID, "terms")',
        'is_selected = terms_checkbox.is_selected()  # True if checked',
        '',
        '# Get input value',
        'email_input = driver.find_element(By.ID, "email")',
        'email_value = email_input.get_attribute("value")  # Get value attribute',
        '',
        '# Get link href',
        'help_link = driver.find_element(By.ID, "help")',
        'link_href = help_link.get_attribute("href")  # Get href attribute',
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
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com/form");',
        '',
        '// Check button properties',
        'WebElement submitButton = driver.findElement(By.id("submit"));',
        'boolean isDisplayed = submitButton.isDisplayed();  // true if visible',
        'boolean isEnabled = submitButton.isEnabled();  // true if enabled',
        'String buttonText = submitButton.getText();  // Get visible text',
        '',
        '// Check checkbox state',
        'WebElement termsCheckbox = driver.findElement(By.id("terms"));',
        'boolean isSelected = termsCheckbox.isSelected();  // true if checked',
        '',
        '// Get input value',
        'WebElement emailInput = driver.findElement(By.id("email"));',
        'String emailValue = emailInput.getAttribute("value");  // Get value attribute',
        '',
        '// Get link href',
        'WebElement helpLink = driver.findElement(By.id("help"));',
        'String linkHref = helpLink.getAttribute("href");  // Get href attribute',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com/form\');',
        '',
        '// Check button properties',
        'let submitButton = await driver.findElement(By.id(\'submit\'));',
        'let isDisplayed = await submitButton.isDisplayed();  // true if visible',
        'let isEnabled = await submitButton.isEnabled();  // true if enabled',
        'let buttonText = await submitButton.getText();  // Get visible text',
        '',
        '// Check checkbox state',
        'let termsCheckbox = await driver.findElement(By.id(\'terms\'));',
        'let isSelected = await termsCheckbox.isSelected();  // true if checked',
        '',
        '// Get input value',
        'let emailInput = await driver.findElement(By.id(\'email\'));',
        'let emailValue = await emailInput.getAttribute(\'value\');  // Get value attribute',
        '',
        '// Get link href',
        'let helpLink = await driver.findElement(By.id(\'help\'));',
        'let linkHref = await helpLink.getAttribute(\'href\');  // Get href attribute',
        '',
        'await driver.quit();',
      ];
    }
  };

  const elementPropertiesExample = {
    python: getElementPropertiesCode('python').join('\n'),
    java: getElementPropertiesCode('java').join('\n'),
    javascript: getElementPropertiesCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Element Properties"
        description="Learn to retrieve and check element properties in Selenium"
        icon={Info}
        category="Selenium · Element Interaction"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5 text-indigo-600" />
            Element Properties and States
          </CardTitle>
          <CardDescription>
            Essential methods for inspecting element properties
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Understanding element properties is crucial for effective test automation. Selenium provides methods to check element states and retrieve attributes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>is_displayed() / isDisplayed():</strong> Check if element is visible</li>
            <li><strong>is_enabled() / isEnabled():</strong> Check if element is enabled</li>
            <li><strong>is_selected() / isSelected():</strong> Check if checkbox/radio is selected</li>
            <li><strong>get_attribute() / getAttribute():</strong> Get element attribute values</li>
            <li><strong>text / getText():</strong> Get visible text content</li>
          </ul>

          <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
            <Info className="h-5 w-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Why Check Properties?</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Checking element properties helps verify application state, validate UI behavior, and make informed decisions in test logic.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-indigo-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Element property methods in Python, Java, and JavaScript
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
                {selectedLanguage === 'python' && `# Check visibility
element = driver.find_element(By.ID, "myElement")
if element.is_displayed():
    print("Element is visible")

# Check if enabled
if element.is_enabled():
    element.click()

# Check if selected (checkbox/radio)
checkbox = driver.find_element(By.ID, "terms")
if checkbox.is_selected():
    print("Checkbox is checked")

# Get attribute value
link = driver.find_element(By.TAG_NAME, "a")
href = link.get_attribute("href")
css_class = link.get_attribute("class")

# Get text content
heading = driver.find_element(By.TAG_NAME, "h1")
text = heading.text

# Get CSS value
color = element.value_of_css_property("color")

# Get element size and location
size = element.size  # {'height': 50, 'width': 200}
location = element.location  # {'x': 100, 'y': 200}`}
                {selectedLanguage === 'java' && `// Check visibility
WebElement element = driver.findElement(By.id("myElement"));
if (element.isDisplayed()) {
    System.out.println("Element is visible");
}

// Check if enabled
if (element.isEnabled()) {
    element.click();
}

// Check if selected (checkbox/radio)
WebElement checkbox = driver.findElement(By.id("terms"));
if (checkbox.isSelected()) {
    System.out.println("Checkbox is checked");
}

// Get attribute value
WebElement link = driver.findElement(By.tagName("a"));
String href = link.getAttribute("href");
String cssClass = link.getAttribute("class");

// Get text content
WebElement heading = driver.findElement(By.tagName("h1"));
String text = heading.getText();

// Get CSS value
String color = element.getCssValue("color");

// Get element size and location
Dimension size = element.getSize();  // height, width
Point location = element.getLocation();  // x, y`}
                {selectedLanguage === 'javascript' && `// Check visibility
let element = await driver.findElement(By.id('myElement'));
if (await element.isDisplayed()) {
    console.log('Element is visible');
}

// Check if enabled
if (await element.isEnabled()) {
    await element.click();
}

// Check if selected (checkbox/radio)
let checkbox = await driver.findElement(By.id('terms'));
if (await checkbox.isSelected()) {
    console.log('Checkbox is checked');
}

// Get attribute value
let link = await driver.findElement(By.tagName('a'));
let href = await link.getAttribute('href');
let cssClass = await link.getAttribute('class');

// Get text content
let heading = await driver.findElement(By.tagName('h1'));
let text = await heading.getText();

// Get CSS value
let color = await element.getCssValue('color');

// Get element size and location
let rect = await element.getRect();  // x, y, width, height`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5 text-indigo-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch element properties being checked in real-time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Element Properties Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch different element properties being checked: visibility, enabled state, selection, text, and attributes. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
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
                      name="speed-props"
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
                  <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateElementProperties}
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
                    onClick={() => copyToClipboard(elementPropertiesExample[selectedLanguage], 'Element Properties code')}
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
                    {getElementPropertiesCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{elementPropertiesExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Element States</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px] space-y-4">
                  {/* Submit Button */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'button'
                      ? 'border-indigo-500 bg-indigo-100 dark:bg-indigo-950/50 shadow-lg scale-105'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold">
                        Submit Form
                      </button>
                    </div>
                    <div className="space-y-1 text-xs">
                      {elementStates.buttonDisplayed && (
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                          <Eye className="w-4 h-4" />
                          <span>is_displayed: True</span>
                        </div>
                      )}
                      {elementStates.buttonEnabled && (
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                          <CheckCircle className="w-4 h-4" />
                          <span>is_enabled: True</span>
                        </div>
                      )}
                      {elementStates.buttonText && (
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                          <FileText className="w-4 h-4" />
                          <span>text: "{elementStates.buttonText}"</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'checkbox'
                      ? 'border-indigo-500 bg-indigo-100 dark:bg-indigo-950/50 shadow-lg scale-105'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        checked={elementStates.checkboxSelected}
                        readOnly
                        className="w-4 h-4"
                      />
                      <label className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        I agree to terms and conditions
                      </label>
                    </div>
                    {elementStates.checkboxSelected && (
                      <div className="text-xs flex items-center gap-2 text-green-600 dark:text-green-400">
                        <ToggleLeft className="w-4 h-4" />
                        <span>is_selected: True</span>
                      </div>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'input'
                      ? 'border-indigo-500 bg-indigo-100 dark:bg-indigo-950/50 shadow-lg scale-105'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <input
                      type="email"
                      value={elementStates.inputValue}
                      readOnly
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 mb-2"
                      placeholder="Email address"
                    />
                    {elementStates.inputValue && (
                      <div className="text-xs flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <Info className="w-4 h-4" />
                        <span>value attribute: "{elementStates.inputValue}"</span>
                      </div>
                    )}
                  </div>

                  {/* Help Link */}
                  <div className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === 'link'
                      ? 'border-indigo-500 bg-indigo-100 dark:bg-indigo-950/50 shadow-lg scale-105'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <a href="#" className="text-indigo-600 dark:text-indigo-400 underline font-medium mb-2 block">
                      Need Help?
                    </a>
                    {elementStates.linkHref && (
                      <div className="text-xs flex items-center gap-2 text-purple-600 dark:text-purple-400">
                        <Info className="w-4 h-4" />
                        <span>href attribute: "{elementStates.linkHref}"</span>
                      </div>
                    )}
                  </div>

                  {currentStep >= 22 && (
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">All properties checked successfully!</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Property Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-600" />
            Common Property Methods
          </CardTitle>
          <CardDescription>Essential methods for checking element properties</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">is_displayed()</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Check Visibility</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Returns True if element is visible on page
              </p>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Checks CSS visibility</div>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Considers display property</div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">is_enabled()</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Check Enabled State</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Returns True if element is enabled
              </p>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Checks disabled attribute</div>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Useful before interactions</div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">is_selected()</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Check Selection</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Returns True if checkbox/radio is selected
              </p>
              <div className="text-xs text-green-700 dark:text-green-300">✓ For checkboxes</div>
              <div className="text-xs text-green-700 dark:text-green-300">✓ For radio buttons</div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-600 mb-2">get_attribute()</Badge>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">Get Attribute</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Returns value of specified attribute
              </p>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Get any HTML attribute</div>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Returns None if not found</div>
            </div>

            <div className="p-4 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
              <Badge className="bg-indigo-600 mb-2">text / getText()</Badge>
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 text-sm">Get Text</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Returns visible text content
              </p>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Gets rendered text</div>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Excludes hidden text</div>
            </div>

            <div className="p-4 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 rounded-lg border-2 border-rose-200 dark:border-rose-700">
              <Badge className="bg-rose-600 mb-2">getCssValue()</Badge>
              <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-2 text-sm">Get CSS Property</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Returns computed CSS property value
              </p>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Get color, font, etc.</div>
              <div className="text-xs text-green-700 dark:text-green-300">✓ Returns computed values</div>
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Check Before Interacting</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Verify element is displayed and enabled before clicking or typing
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Appropriate Method</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use text for visible content, get_attribute for HTML attributes
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Verify State Changes</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Check element properties after actions to verify expected changes
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Handle Null Values</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  get_attribute returns None if attribute doesn't exist
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
              <AlertTitle className="text-red-900 dark:text-red-100">Stale Element Reference</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Element properties throw stale element exception<br/>
                <strong>Solution:</strong> Re-find element after page changes before checking properties
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Hidden vs Not Displayed</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Confusion between hidden and not displayed<br/>
                <strong>Solution:</strong> is_displayed checks CSS visibility, not just presence in DOM
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Attribute vs Property</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> get_attribute may not return expected value<br/>
                <strong>Solution:</strong> Some properties need specific attribute names (e.g., "value" for inputs)
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Size & Location</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Get Element Dimensions</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                size = element.size  # {'{'}height: 50, width: 200{'}'}<br/>
                location = element.location  # {'{'}x: 100, y: 200{'}'}
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Tag Name</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Get Element Tag</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                tag = element.tag_name  # Returns "div", "input", etc.
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Screenshot</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Capture Element Screenshot</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                element.screenshot("element.png")  # Save element screenshot
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

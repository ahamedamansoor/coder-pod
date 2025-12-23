'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  GitBranch,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Search,
  Play,
  RefreshCw,
  Monitor,
  User,
  Mail,
  Phone,
  MapPin,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function XpathBasics() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    submitted: false
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

  const simulateXpathLocator = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      submitted: false
    });

    const multiplier = getSpeedMultiplier();
    
    // Get language-specific line numbers
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findName: 10, typeName: 11, findEmail: 14, typeEmail: 15, findPhone: 18, typePhone: 19, findCity: 22, typeCity: 23, quit: 26 };
      } else if (selectedLanguage === 'java') {
        return { nav: 7, findName: 10, typeName: 11, findEmail: 14, typeEmail: 15, findPhone: 18, typePhone: 19, findCity: 22, typeCity: 23, quit: 25 };
      } else {
        return { nav: 3, findName: 6, typeName: 7, findEmail: 10, typeEmail: 11, findPhone: 14, typePhone: 15, findCity: 18, typeCity: 19, quit: 21 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      name: selectedLanguage === 'python' ? 'name_field' : 'nameField',
      email: selectedLanguage === 'python' ? 'email_field' : 'emailField',
      phone: selectedLanguage === 'python' ? 'phone_field' : 'phoneField',
      city: selectedLanguage === 'python' ? 'city_dropdown' : 'cityDropdown'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting XPath locator demo - Contact Form...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading contact form page...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Using XPath: //input[@id="fullname"]', delay: 800 * multiplier, element: null, codeLine: lines.findName },
      { step: 3, log: '✅ Found name input field', delay: 700 * multiplier, element: 'name', codeLine: lines.findName, variable: { name: varNames.name, value: '<WebElement: input#fullname>' } },
      { step: 4, log: '⌨️  Typing "John Smith"...', delay: 1000 * multiplier, element: 'name', action: 'name', codeLine: lines.typeName, variable: { name: varNames.name, value: 'John Smith' } },
      { step: 5, log: '🔍 Using XPath: //input[@type="email"]', delay: 800 * multiplier, element: 'name', codeLine: lines.findEmail, variable: { name: varNames.name, value: 'John Smith' } },
      { step: 6, log: '✅ Found email input field', delay: 700 * multiplier, element: 'email', codeLine: lines.findEmail, variable: { name: varNames.email, value: '<WebElement: input[type="email"]>' } },
      { step: 7, log: '⌨️  Typing "john.smith@example.com"...', delay: 1000 * multiplier, element: 'email', action: 'email', codeLine: lines.typeEmail, variable: { name: varNames.email, value: 'john.smith@example.com' } },
      { step: 8, log: '🔍 Using XPath: //input[contains(@placeholder, "Phone")]', delay: 800 * multiplier, element: 'email', codeLine: lines.findPhone, variable: { name: varNames.email, value: 'john.smith@example.com' } },
      { step: 9, log: '✅ Found phone input field', delay: 700 * multiplier, element: 'phone', codeLine: lines.findPhone, variable: { name: varNames.phone, value: '<WebElement: input[placeholder]>' } },
      { step: 10, log: '⌨️  Typing "+1-555-0123"...', delay: 1000 * multiplier, element: 'phone', action: 'phone', codeLine: lines.typePhone, variable: { name: varNames.phone, value: '+1-555-0123' } },
      { step: 11, log: '🔍 Using XPath: //select[@name="city"]', delay: 800 * multiplier, element: 'phone', codeLine: lines.findCity, variable: { name: varNames.phone, value: '+1-555-0123' } },
      { step: 12, log: '✅ Found city dropdown', delay: 700 * multiplier, element: 'city', codeLine: lines.findCity, variable: { name: varNames.city, value: '<WebElement: select[name="city"]>' } },
      { step: 13, log: '📍 Selecting "New York"...', delay: 1000 * multiplier, element: 'city', action: 'city', codeLine: lines.typeCity, variable: { name: varNames.city, value: 'New York' } },
      { step: 14, log: '🎉 XPath locator demo completed successfully!', delay: 500 * multiplier, element: null, codeLine: lines.quit, action: 'submit' },
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
      
      if (action === 'name') {
        setFormData(prev => ({ ...prev, name: 'John Smith' }));
      } else if (action === 'email') {
        setFormData(prev => ({ ...prev, email: 'john.smith@example.com' }));
      } else if (action === 'phone') {
        setFormData(prev => ({ ...prev, phone: '+1-555-0123' }));
      } else if (action === 'city') {
        setFormData(prev => ({ ...prev, city: 'New York' }));
      } else if (action === 'submit') {
        setFormData(prev => ({ ...prev, submitted: true }));
      }
    }

    setIsRunning(false);
  };

  const getXpathLocatorCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver  # Import WebDriver',
        'from selenium.webdriver.common.by import By  # Import By class',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to contact form',
        'driver.get("https://www.example.com/contact")',
        '',
        '# 🔍 Find name field by XPath with ID',
        'name_field = driver.find_element(By.XPATH, "//input[@id=\'fullname\']")',
        'name_field.send_keys("John Smith")  # ⌨️ Type name',
        '',
        '# 🔍 Find email field by XPath with attribute',
        'email_field = driver.find_element(By.XPATH, "//input[@type=\'email\']")',
        'email_field.send_keys("john.smith@example.com")  # ⌨️ Type email',
        '',
        '# 🔍 Find phone field by XPath with contains()',
        'phone_field = driver.find_element(By.XPATH, "//input[contains(@placeholder, \'Phone\')]")',
        'phone_field.send_keys("+1-555-0123")  # ⌨️ Type phone',
        '',
        '# 🔍 Find city dropdown by XPath with name',
        'city_dropdown = driver.find_element(By.XPATH, "//select[@name=\'city\']")',
        'city_dropdown.send_keys("New York")  # 📍 Select city',
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
        'driver.get("https://www.example.com/contact");',
        '',
        '// 🔍 Find name field by XPath with ID',
        'WebElement nameField = driver.findElement(By.xpath("//input[@id=\'fullname\']"));',
        'nameField.sendKeys("John Smith");',
        '',
        '// 🔍 Find email field by XPath with attribute',
        'WebElement emailField = driver.findElement(By.xpath("//input[@type=\'email\']"));',
        'emailField.sendKeys("john.smith@example.com");',
        '',
        '// 🔍 Find phone field by XPath with contains()',
        'WebElement phoneField = driver.findElement(By.xpath("//input[contains(@placeholder, \'Phone\')]"));',
        'phoneField.sendKeys("+1-555-0123");',
        '',
        '// 🔍 Find city dropdown by XPath with name',
        'WebElement cityDropdown = driver.findElement(By.xpath("//select[@name=\'city\']"));',
        'cityDropdown.sendKeys("New York");',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com/contact\');',
        '',
        '// 🔍 Find name field by XPath with ID',
        'let nameField = await driver.findElement(By.xpath(\'//input[@id="fullname"]\'));',
        'await nameField.sendKeys(\'John Smith\');',
        '',
        '// 🔍 Find email field by XPath with attribute',
        'let emailField = await driver.findElement(By.xpath(\'//input[@type="email"]\'));',
        'await emailField.sendKeys(\'john.smith@example.com\');',
        '',
        '// 🔍 Find phone field by XPath with contains()',
        'let phoneField = await driver.findElement(By.xpath(\'//input[contains(@placeholder, "Phone")]\'));',
        'await phoneField.sendKeys(\'+1-555-0123\');',
        '',
        '// 🔍 Find city dropdown by XPath with name',
        'let cityDropdown = await driver.findElement(By.xpath(\'//select[@name="city"]\'));',
        'await cityDropdown.sendKeys(\'New York\');',
        '',
        'await driver.quit();',
      ];
    }
  };

  const xpathLocatorExample = {
    python: getXpathLocatorCode('python').join('\n'),
    java: getXpathLocatorCode('java').join('\n'),
    javascript: getXpathLocatorCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="XPath Basics"
        description="Learn the fundamentals of XPath for powerful and flexible element location"
        icon={GitBranch}
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-indigo-600" />
            What is XPath?
          </CardTitle>
          <CardDescription>
            XML Path Language for navigating through HTML structure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            XPath (XML Path Language) is a powerful query language for selecting nodes in an XML/HTML document. In Selenium, XPath provides:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Flexibility:</strong> Navigate through any element in the DOM tree</li>
            <li><strong>Power:</strong> Use complex conditions and functions</li>
            <li><strong>Versatility:</strong> Find elements when CSS selectors fall short</li>
            <li><strong>Dynamic:</strong> Locate elements based on text content or relationships</li>
          </ul>

          <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
            <GitBranch className="h-5 w-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Two Types of XPath</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              <strong>Absolute XPath:</strong> Starts from root (/) - brittle and not recommended<br/>
              <strong>Relative XPath:</strong> Starts from anywhere (//) - flexible and preferred
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
            XPath syntax in Python, Java, and JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Language Tabs */}
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

          {/* Code Display */}
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
                {selectedLanguage === 'python' && `# Basic XPath with attribute
element = driver.find_element(By.XPATH, "//input[@id='username']")

# XPath with attribute value
email = driver.find_element(By.XPATH, "//input[@type='email']")

# XPath with contains()
button = driver.find_element(By.XPATH, "//button[contains(@class, 'submit')]")

# XPath with text()
link = driver.find_element(By.XPATH, "//a[text()='Click Here']")

# XPath with multiple conditions
field = driver.find_element(By.XPATH, "//input[@type='text' and @name='search']")`}
                {selectedLanguage === 'java' && `// Basic XPath with attribute
WebElement element = driver.findElement(By.xpath("//input[@id='username']"));

// XPath with attribute value
WebElement email = driver.findElement(By.xpath("//input[@type='email']"));

// XPath with contains()
WebElement button = driver.findElement(By.xpath("//button[contains(@class, 'submit')]"));

// XPath with text()
WebElement link = driver.findElement(By.xpath("//a[text()='Click Here']"));

// XPath with multiple conditions
WebElement field = driver.findElement(By.xpath("//input[@type='text' and @name='search']"));`}
                {selectedLanguage === 'javascript' && `// Basic XPath with attribute
let element = await driver.findElement(By.xpath("//input[@id='username']"));

// XPath with attribute value
let email = await driver.findElement(By.xpath("//input[@type='email']"));

// XPath with contains()
let button = await driver.findElement(By.xpath("//button[contains(@class, 'submit')]"));

// XPath with text()
let link = await driver.findElement(By.xpath("//a[text()='Click Here']"));

// XPath with multiple conditions
let field = await driver.findElement(By.xpath("//input[@type='text' and @name='search']"));`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5 text-indigo-600" />
            Interactive Demo: Contact Form
          </CardTitle>
          <CardDescription>
            Watch XPath locate form elements with precision
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Contact Form Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch XPath expressions find and fill form fields using various techniques. Adjust speed and click "Run Demo"!
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
                      name="speed-xpath"
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
                    onClick={simulateXpathLocator}
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
                    onClick={() => copyToClipboard(xpathLocatorExample[selectedLanguage], 'XPath code')}
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
                    {getXpathLocatorCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{xpathLocatorExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Form Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px]">
                  <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100">Contact Form</h3>
                  <div className="space-y-4">
                    {/* Name Field */}
                    <div className={`transition-all ${selectedElement === 'name' ? 'ring-2 ring-indigo-500 rounded-lg p-2' : ''}`}>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        <User className="w-4 h-4 inline mr-1" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullname"
                        value={formData.name}
                        readOnly
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email Field */}
                    <div className={`transition-all ${selectedElement === 'email' ? 'ring-2 ring-indigo-500 rounded-lg p-2' : ''}`}>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        readOnly
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Phone Field */}
                    <div className={`transition-all ${selectedElement === 'phone' ? 'ring-2 ring-indigo-500 rounded-lg p-2' : ''}`}>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        readOnly
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900"
                        placeholder="Phone Number"
                      />
                    </div>

                    {/* City Dropdown */}
                    <div className={`transition-all ${selectedElement === 'city' ? 'ring-2 ring-indigo-500 rounded-lg p-2' : ''}`}>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        City
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        disabled
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900"
                      >
                        <option value="">Select a city</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                      </select>
                    </div>

                    {formData.submitted && (
                      <div className="mt-4 p-3 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-lg">
                        <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">Form filled successfully!</span>
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

      {/* XPath Syntax Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5 text-purple-600" />
            XPath Syntax Guide
          </CardTitle>
          <CardDescription>Essential XPath patterns and functions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {/* Basic Syntax */}
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">//tagname[@attribute='value']</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Basic Syntax</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                //input[@id='username']
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Find input with specific ID
              </p>
            </div>

            {/* Contains Function */}
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">contains()</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Partial Match</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                //button[contains(@class, 'submit')]
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Match partial attribute value
              </p>
            </div>

            {/* Text Function */}
            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-600 mb-2">text()</Badge>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">Text Content</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                //a[text()='Click Here']
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Find by exact text content
              </p>
            </div>

            {/* AND Operator */}
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">and / or</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Multiple Conditions</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                //input[@type='text' and @name='search']
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Combine multiple conditions
              </p>
            </div>

            {/* Starts-with */}
            <div className="p-4 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 rounded-lg border-2 border-rose-200 dark:border-rose-700">
              <Badge className="bg-rose-600 mb-2">starts-with()</Badge>
              <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-2 text-sm">Prefix Match</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                //div[starts-with(@id, 'user-')]
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Match attribute prefix
              </p>
            </div>

            {/* Parent/Child */}
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
              <Badge className="bg-indigo-600 mb-2">parent/child</Badge>
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 text-sm">Hierarchy</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                //div[@class='form']/input
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Navigate parent-child relationship
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Relative XPath</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always prefer relative XPath (//) over absolute XPath (/) for maintainability
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Keep It Simple</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Shorter XPath expressions are faster and easier to maintain
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Unique Attributes</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Prefer ID or unique attributes over complex XPath expressions
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Avoid Index-Based</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Index-based XPath (//div[1]) is brittle and breaks easily
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
              <AlertTitle className="text-red-900 dark:text-red-100">Slow Performance</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> XPath can be slower than CSS selectors<br/>
                <strong>Solution:</strong> Use CSS selectors when possible, optimize XPath expressions
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Dynamic Content</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> XPath breaks when DOM structure changes<br/>
                <strong>Solution:</strong> Use attributes and text content instead of structure
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Complex Expressions</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Overly complex XPath is hard to maintain<br/>
                <strong>Solution:</strong> Break down into simpler steps or use alternative locators
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

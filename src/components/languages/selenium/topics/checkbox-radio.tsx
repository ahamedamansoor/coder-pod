'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  CheckSquare,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Circle,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function CheckboxRadio() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [formState, setFormState] = React.useState({
    termsChecked: false,
    newsletterChecked: false,
    genderSelected: '',
    paymentSelected: ''
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

  const simulateCheckboxRadio = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setFormState({
      termsChecked: false,
      newsletterChecked: false,
      genderSelected: '',
      paymentSelected: ''
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findTerms: 10, checkTerms: 11, verifyTerms: 12, findNewsletter: 15, checkNewsletter: 16, findGender: 19, selectGender: 20, verifyGender: 21, findPayment: 24, selectPayment: 25, quit: 28 };
      } else if (selectedLanguage === 'java') {
        return { nav: 8, findTerms: 11, checkTerms: 12, verifyTerms: 13, findNewsletter: 16, checkNewsletter: 17, findGender: 20, selectGender: 21, verifyGender: 22, findPayment: 25, selectPayment: 26, quit: 28 };
      } else {
        return { nav: 3, findTerms: 6, checkTerms: 7, verifyTerms: 8, findNewsletter: 11, checkNewsletter: 12, findGender: 15, selectGender: 16, verifyGender: 17, findPayment: 20, selectPayment: 21, quit: 23 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      terms: selectedLanguage === 'python' ? 'terms_checkbox' : 'termsCheckbox',
      newsletter: selectedLanguage === 'python' ? 'newsletter_checkbox' : 'newsletterCheckbox',
      gender: selectedLanguage === 'python' ? 'male_radio' : 'maleRadio',
      payment: selectedLanguage === 'python' ? 'credit_card_radio' : 'creditCardRadio'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Checkbox & Radio demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading form with checkboxes and radio buttons...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Finding terms checkbox...', delay: 800 * multiplier, element: null, codeLine: lines.findTerms, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '✅ Found terms checkbox', delay: 700 * multiplier, element: 'terms', codeLine: lines.findTerms, variable: { name: varNames.terms, value: '<WebElement: input[type="checkbox"]>' } },
      { step: 4, log: '☑️ Clicking to check terms checkbox...', delay: 1200 * multiplier, element: 'terms', action: 'check-terms', codeLine: lines.checkTerms, variable: { name: varNames.terms, value: '<WebElement: input[type="checkbox"]>' } },
      { step: 5, log: '✅ Terms checkbox checked', delay: 700 * multiplier, element: 'terms', codeLine: lines.checkTerms, variable: { name: varNames.terms, value: 'checked' } },
      { step: 6, log: '🔍 Verifying checkbox is selected...', delay: 1000 * multiplier, element: 'terms', codeLine: lines.verifyTerms, variable: { name: varNames.terms, value: 'checked' } },
      { step: 7, log: '✅ Verified: is_selected = True', delay: 700 * multiplier, element: 'terms', codeLine: lines.verifyTerms, variable: { name: 'is_selected', value: 'True' } },
      { step: 8, log: '🔍 Finding newsletter checkbox...', delay: 800 * multiplier, element: 'terms', codeLine: lines.findNewsletter, variable: { name: 'is_selected', value: 'True' } },
      { step: 9, log: '✅ Found newsletter checkbox', delay: 700 * multiplier, element: 'newsletter', codeLine: lines.findNewsletter, variable: { name: varNames.newsletter, value: '<WebElement: input[type="checkbox"]>' } },
      { step: 10, log: '☑️ Clicking to check newsletter checkbox...', delay: 1200 * multiplier, element: 'newsletter', action: 'check-newsletter', codeLine: lines.checkNewsletter, variable: { name: varNames.newsletter, value: '<WebElement: input[type="checkbox"]>' } },
      { step: 11, log: '✅ Newsletter checkbox checked', delay: 700 * multiplier, element: 'newsletter', codeLine: lines.checkNewsletter, variable: { name: varNames.newsletter, value: 'checked' } },
      { step: 12, log: '🔍 Finding male radio button...', delay: 800 * multiplier, element: 'newsletter', codeLine: lines.findGender, variable: { name: varNames.newsletter, value: 'checked' } },
      { step: 13, log: '✅ Found male radio button', delay: 700 * multiplier, element: 'gender', codeLine: lines.findGender, variable: { name: varNames.gender, value: '<WebElement: input[type="radio"]>' } },
      { step: 14, log: '🔘 Clicking to select male radio...', delay: 1200 * multiplier, element: 'gender', action: 'select-gender', codeLine: lines.selectGender, variable: { name: varNames.gender, value: '<WebElement: input[type="radio"]>' } },
      { step: 15, log: '✅ Male radio selected', delay: 700 * multiplier, element: 'gender', codeLine: lines.selectGender, variable: { name: varNames.gender, value: 'selected' } },
      { step: 16, log: '🔍 Verifying radio is selected...', delay: 1000 * multiplier, element: 'gender', codeLine: lines.verifyGender, variable: { name: varNames.gender, value: 'selected' } },
      { step: 17, log: '✅ Verified: is_selected = True', delay: 700 * multiplier, element: 'gender', codeLine: lines.verifyGender, variable: { name: 'is_selected', value: 'True' } },
      { step: 18, log: '🔍 Finding credit card radio button...', delay: 800 * multiplier, element: 'gender', codeLine: lines.findPayment, variable: { name: 'is_selected', value: 'True' } },
      { step: 19, log: '✅ Found credit card radio', delay: 700 * multiplier, element: 'payment', codeLine: lines.findPayment, variable: { name: varNames.payment, value: '<WebElement: input[type="radio"]>' } },
      { step: 20, log: '🔘 Clicking to select credit card...', delay: 1200 * multiplier, element: 'payment', action: 'select-payment', codeLine: lines.selectPayment, variable: { name: varNames.payment, value: '<WebElement: input[type="radio"]>' } },
      { step: 21, log: '✅ Credit card radio selected', delay: 700 * multiplier, element: 'payment', codeLine: lines.selectPayment, variable: { name: varNames.payment, value: 'selected' } },
      { step: 22, log: '🎉 Checkbox & Radio demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: varNames.payment, value: 'selected' } },
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
      
      if (action === 'check-terms') {
        setFormState(prev => ({ ...prev, termsChecked: true }));
      } else if (action === 'check-newsletter') {
        setFormState(prev => ({ ...prev, newsletterChecked: true }));
      } else if (action === 'select-gender') {
        setFormState(prev => ({ ...prev, genderSelected: 'male' }));
      } else if (action === 'select-payment') {
        setFormState(prev => ({ ...prev, paymentSelected: 'credit' }));
      }
    }

    setIsRunning(false);
  };

  const getCheckboxRadioCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to form page',
        'driver.get("https://www.example.com/form")',
        '',
        '# Find and check a checkbox',
        'terms_checkbox = driver.find_element(By.ID, "terms")',
        'terms_checkbox.click()  # Click to check',
        'is_selected = terms_checkbox.is_selected()  # Verify checked',
        '',
        '# Check another checkbox',
        'newsletter_checkbox = driver.find_element(By.ID, "newsletter")',
        'newsletter_checkbox.click()',
        '',
        '# Select a radio button',
        'male_radio = driver.find_element(By.ID, "male")',
        'male_radio.click()  # Click to select',
        'is_selected = male_radio.is_selected()  # Verify selected',
        '',
        '# Select another radio (deselects previous)',
        'credit_card_radio = driver.find_element(By.ID, "credit")',
        'credit_card_radio.click()',
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
        '// Find and check a checkbox',
        'WebElement termsCheckbox = driver.findElement(By.id("terms"));',
        'termsCheckbox.click();  // Click to check',
        'boolean isSelected = termsCheckbox.isSelected();  // Verify checked',
        '',
        '// Check another checkbox',
        'WebElement newsletterCheckbox = driver.findElement(By.id("newsletter"));',
        'newsletterCheckbox.click();',
        '',
        '// Select a radio button',
        'WebElement maleRadio = driver.findElement(By.id("male"));',
        'maleRadio.click();  // Click to select',
        'isSelected = maleRadio.isSelected();  // Verify selected',
        '',
        '// Select another radio (deselects previous)',
        'WebElement creditCardRadio = driver.findElement(By.id("credit"));',
        'creditCardRadio.click();',
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
        '// Find and check a checkbox',
        'let termsCheckbox = await driver.findElement(By.id(\'terms\'));',
        'await termsCheckbox.click();  // Click to check',
        'let isSelected = await termsCheckbox.isSelected();  // Verify checked',
        '',
        '// Check another checkbox',
        'let newsletterCheckbox = await driver.findElement(By.id(\'newsletter\'));',
        'await newsletterCheckbox.click();',
        '',
        '// Select a radio button',
        'let maleRadio = await driver.findElement(By.id(\'male\'));',
        'await maleRadio.click();  // Click to select',
        'isSelected = await maleRadio.isSelected();  // Verify selected',
        '',
        '// Select another radio (deselects previous)',
        'let creditCardRadio = await driver.findElement(By.id(\'credit\'));',
        'await creditCardRadio.click();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const checkboxRadioExample = {
    python: getCheckboxRadioCode('python').join('\n'),
    java: getCheckboxRadioCode('java').join('\n'),
    javascript: getCheckboxRadioCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Checkbox & Radio Buttons"
        description="Learn to interact with checkboxes and radio buttons in Selenium"
        icon={CheckSquare}
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-violet-600" />
            Working with Checkboxes and Radio Buttons
          </CardTitle>
          <CardDescription>
            Essential techniques for handling form selections
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Checkboxes and radio buttons are common form elements. Selenium provides simple methods to interact with them:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>click():</strong> Toggle checkbox or select radio button</li>
            <li><strong>is_selected():</strong> Check if checkbox/radio is selected</li>
            <li><strong>Checkboxes:</strong> Multiple can be selected independently</li>
            <li><strong>Radio Buttons:</strong> Only one in a group can be selected</li>
          </ul>

          <Alert className="border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-violet-950/20">
            <CheckSquare className="h-5 w-5 text-violet-600" />
            <AlertTitle className="text-violet-900 dark:text-violet-100">Key Difference</AlertTitle>
            <AlertDescription className="text-violet-800 dark:text-violet-200">
              Checkboxes allow multiple selections, while radio buttons in the same group are mutually exclusive - selecting one automatically deselects others.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-violet-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Checkbox and radio button syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-violet-600 text-violet-600 dark:text-violet-400'
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
                {selectedLanguage === 'python' && `# Working with checkboxes
checkbox = driver.find_element(By.ID, "terms")

# Check if already selected
if not checkbox.is_selected():
    checkbox.click()  # Check it

# Uncheck if needed
if checkbox.is_selected():
    checkbox.click()  # Uncheck it

# Working with radio buttons
male_radio = driver.find_element(By.ID, "male")
female_radio = driver.find_element(By.ID, "female")

# Select a radio button
male_radio.click()

# Verify selection
assert male_radio.is_selected()
assert not female_radio.is_selected()

# Select different radio (deselects previous)
female_radio.click()
assert female_radio.is_selected()
assert not male_radio.is_selected()`}
                {selectedLanguage === 'java' && `// Working with checkboxes
WebElement checkbox = driver.findElement(By.id("terms"));

// Check if already selected
if (!checkbox.isSelected()) {
    checkbox.click();  // Check it
}

// Uncheck if needed
if (checkbox.isSelected()) {
    checkbox.click();  // Uncheck it
}

// Working with radio buttons
WebElement maleRadio = driver.findElement(By.id("male"));
WebElement femaleRadio = driver.findElement(By.id("female"));

// Select a radio button
maleRadio.click();

// Verify selection
assert maleRadio.isSelected();
assert !femaleRadio.isSelected();

// Select different radio (deselects previous)
femaleRadio.click();
assert femaleRadio.isSelected();
assert !maleRadio.isSelected();`}
                {selectedLanguage === 'javascript' && `// Working with checkboxes
let checkbox = await driver.findElement(By.id('terms'));

// Check if already selected
if (!(await checkbox.isSelected())) {
    await checkbox.click();  // Check it
}

// Uncheck if needed
if (await checkbox.isSelected()) {
    await checkbox.click();  // Uncheck it
}

// Working with radio buttons
let maleRadio = await driver.findElement(By.id('male'));
let femaleRadio = await driver.findElement(By.id('female'));

// Select a radio button
await maleRadio.click();

// Verify selection
assert(await maleRadio.isSelected());
assert(!(await femaleRadio.isSelected()));

// Select different radio (deselects previous)
await femaleRadio.click();
assert(await femaleRadio.isSelected());
assert(!(await maleRadio.isSelected()));`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-violet-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch checkbox and radio button interactions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Checkbox & Radio Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch checkboxes being checked and radio buttons being selected. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 p-4 rounded-lg border-2 border-violet-200 dark:border-violet-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-violet-600 dark:text-violet-400" />
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
                        ? 'border-violet-500 bg-violet-100 dark:bg-violet-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-violet-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-checkbox"
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
                  <Code className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateCheckboxRadio}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
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
                    onClick={() => copyToClipboard(checkboxRadioExample[selectedLanguage], 'Checkbox & Radio code')}
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
                    {getCheckboxRadioCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-violet-200 dark:bg-violet-900/50 border-l-4 border-violet-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-violet-900 dark:text-violet-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-violet-50 dark:bg-violet-950/30 rounded border border-violet-200 dark:border-violet-700">
                        <div className="text-[10px] font-bold text-violet-900 dark:text-violet-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-violet-800 dark:text-violet-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-violet-600 dark:text-violet-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{checkboxRadioExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Form Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px] space-y-6">
                  {/* Checkboxes Section */}
                  <div>
                    <h3 className="text-sm font-bold mb-3 text-slate-900 dark:text-slate-100">Checkboxes</h3>
                    <div className="space-y-3">
                      <div className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
                        selectedElement === 'terms'
                          ? 'ring-2 ring-violet-500 bg-violet-50 dark:bg-violet-950/30'
                          : ''
                      }`}>
                        <input
                          type="checkbox"
                          checked={formState.termsChecked}
                          readOnly
                          className="w-4 h-4"
                        />
                        <label className="text-sm text-slate-900 dark:text-slate-100">
                          I agree to terms and conditions
                        </label>
                        {formState.termsChecked && (
                          <Badge className="ml-auto bg-green-600">Checked</Badge>
                        )}
                      </div>

                      <div className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
                        selectedElement === 'newsletter'
                          ? 'ring-2 ring-violet-500 bg-violet-50 dark:bg-violet-950/30'
                          : ''
                      }`}>
                        <input
                          type="checkbox"
                          checked={formState.newsletterChecked}
                          readOnly
                          className="w-4 h-4"
                        />
                        <label className="text-sm text-slate-900 dark:text-slate-100">
                          Subscribe to newsletter
                        </label>
                        {formState.newsletterChecked && (
                          <Badge className="ml-auto bg-green-600">Checked</Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Radio Buttons Section */}
                  <div>
                    <h3 className="text-sm font-bold mb-3 text-slate-900 dark:text-slate-100">Gender (Radio Buttons)</h3>
                    <div className="space-y-2">
                      <div className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
                        selectedElement === 'gender' && formState.genderSelected === 'male'
                          ? 'ring-2 ring-violet-500 bg-violet-50 dark:bg-violet-950/30'
                          : ''
                      }`}>
                        <input
                          type="radio"
                          checked={formState.genderSelected === 'male'}
                          readOnly
                          className="w-4 h-4"
                        />
                        <label className="text-sm text-slate-900 dark:text-slate-100">
                          Male
                        </label>
                        {formState.genderSelected === 'male' && (
                          <Badge className="ml-auto bg-blue-600">Selected</Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-2 p-3 rounded-lg">
                        <input
                          type="radio"
                          checked={formState.genderSelected === 'female'}
                          readOnly
                          className="w-4 h-4"
                        />
                        <label className="text-sm text-slate-900 dark:text-slate-100">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Payment Radio Buttons */}
                  <div>
                    <h3 className="text-sm font-bold mb-3 text-slate-900 dark:text-slate-100">Payment Method (Radio Buttons)</h3>
                    <div className="space-y-2">
                      <div className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
                        selectedElement === 'payment' && formState.paymentSelected === 'credit'
                          ? 'ring-2 ring-violet-500 bg-violet-50 dark:bg-violet-950/30'
                          : ''
                      }`}>
                        <input
                          type="radio"
                          checked={formState.paymentSelected === 'credit'}
                          readOnly
                          className="w-4 h-4"
                        />
                        <label className="text-sm text-slate-900 dark:text-slate-100">
                          Credit Card
                        </label>
                        {formState.paymentSelected === 'credit' && (
                          <Badge className="ml-auto bg-purple-600">Selected</Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-2 p-3 rounded-lg">
                        <input
                          type="radio"
                          checked={formState.paymentSelected === 'paypal'}
                          readOnly
                          className="w-4 h-4"
                        />
                        <label className="text-sm text-slate-900 dark:text-slate-100">
                          PayPal
                        </label>
                      </div>
                    </div>
                  </div>

                  {currentStep >= 22 && (
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">All selections completed!</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Checkbox vs Radio */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-blue-600" />
            Checkbox vs Radio Button
          </CardTitle>
          <CardDescription>Understanding the differences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-3">
                <CheckSquare className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Checkbox</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Multiple selections allowed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Can be checked/unchecked independently</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Use for yes/no or on/off options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Click once to check, click again to uncheck</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-3">
                <Circle className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 text-sm">Radio Button</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Only one selection in a group</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Selecting one deselects others</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Use for mutually exclusive options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Cannot be unchecked once selected</span>
                </li>
              </ul>
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Check State First</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use is_selected() before clicking to avoid toggling unintentionally
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Verify After Click</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always verify selection state after clicking to ensure action succeeded
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Wait for Clickability</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ensure element is clickable before attempting to select
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Labels for Clicking</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  If checkbox/radio is hard to click, try clicking associated label
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
              <AlertTitle className="text-red-900 dark:text-red-100">Element Not Clickable</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Checkbox/radio is covered or not interactable<br/>
                <strong>Solution:</strong> Click the associated label element or use JavaScript click
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">State Not Changing</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Click doesn't change checkbox/radio state<br/>
                <strong>Solution:</strong> Wait for element to be enabled, check for JavaScript handlers
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Custom Styled Elements</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Custom checkbox/radio doesn't respond to click<br/>
                <strong>Solution:</strong> Find the actual input element or click the custom wrapper
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
              <Badge className="bg-yellow-600 mb-2">Conditional Selection</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Select Only If Not Selected</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                if not checkbox.is_selected():<br/>
                &nbsp;&nbsp;checkbox.click()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Click Label</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Click Associated Label Instead</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                label = driver.find_element(By.XPATH, "//label[@for='terms']")<br/>
                label.click()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Get All Selected</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Find All Selected Checkboxes</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                selected = driver.find_elements(By.CSS_SELECTOR, "input[type='checkbox']:checked")
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

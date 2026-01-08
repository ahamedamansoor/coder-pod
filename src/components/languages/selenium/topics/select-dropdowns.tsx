'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  ChevronDown,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  List,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function SelectDropdowns() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [dropdownStates, setDropdownStates] = React.useState({
    country: '',
    color: '',
    size: '',
    allOptions: [] as string[]
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

  const simulateSelectDropdowns = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setDropdownStates({
      country: '',
      color: '',
      size: '',
      allOptions: []
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 8, findCountry: 11, createSelect: 12, selectByValue: 13, findColor: 16, selectByText: 18, findSize: 21, selectByIndex: 23, getOptions: 26, quit: 29 };
      } else if (selectedLanguage === 'java') {
        return { nav: 9, findCountry: 12, createSelect: 13, selectByValue: 14, findColor: 17, selectByText: 19, findSize: 22, selectByIndex: 24, getOptions: 27, quit: 29 };
      } else {
        return { nav: 3, findCountry: 6, selectByValue: 7, findColor: 10, selectByText: 11, findSize: 14, selectByIndex: 15, getOptions: 18, quit: 20 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      countryDropdown: selectedLanguage === 'python' ? 'country_dropdown' : 'countryDropdown',
      countrySelect: selectedLanguage === 'python' ? 'country_select' : 'countrySelect',
      colorDropdown: selectedLanguage === 'python' ? 'color_dropdown' : 'colorDropdown',
      colorSelect: selectedLanguage === 'python' ? 'color_select' : 'colorSelect',
      sizeDropdown: selectedLanguage === 'python' ? 'size_dropdown' : 'sizeDropdown',
      sizeSelect: selectedLanguage === 'python' ? 'size_select' : 'sizeSelect'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Select Dropdowns demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading page with dropdown elements...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Finding country dropdown...', delay: 800 * multiplier, element: null, codeLine: lines.findCountry, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '✅ Found country dropdown', delay: 700 * multiplier, element: 'country', codeLine: lines.findCountry, variable: { name: varNames.countryDropdown, value: '<WebElement: select#country>' } },
      { step: 4, log: '🔧 Creating Select object...', delay: 800 * multiplier, element: 'country', codeLine: lines.createSelect, variable: { name: varNames.countryDropdown, value: '<WebElement: select#country>' } },
      { step: 5, log: '✅ Select object created', delay: 700 * multiplier, element: 'country', codeLine: lines.createSelect, variable: { name: varNames.countrySelect, value: '<Select object>' } },
      { step: 6, log: '📝 Selecting by value: "usa"...', delay: 1200 * multiplier, element: 'country', action: 'select-value', codeLine: lines.selectByValue, variable: { name: varNames.countrySelect, value: '<Select object>' } },
      { step: 7, log: '✅ Selected: United States', delay: 700 * multiplier, element: 'country', codeLine: lines.selectByValue, variable: { name: varNames.countrySelect, value: 'United States' } },
      { step: 8, log: '🔍 Finding color dropdown...', delay: 800 * multiplier, element: 'country', codeLine: lines.findColor, variable: { name: varNames.countrySelect, value: 'United States' } },
      { step: 9, log: '✅ Found color dropdown', delay: 700 * multiplier, element: 'color', codeLine: lines.findColor, variable: { name: varNames.colorDropdown, value: '<WebElement: select#color>' } },
      { step: 10, log: '📝 Selecting by visible text: "Blue"...', delay: 1200 * multiplier, element: 'color', action: 'select-text', codeLine: lines.selectByText, variable: { name: varNames.colorSelect, value: '<Select object>' } },
      { step: 11, log: '✅ Selected: Blue', delay: 700 * multiplier, element: 'color', codeLine: lines.selectByText, variable: { name: varNames.colorSelect, value: 'Blue' } },
      { step: 12, log: '🔍 Finding size dropdown...', delay: 800 * multiplier, element: 'color', codeLine: lines.findSize, variable: { name: varNames.colorSelect, value: 'Blue' } },
      { step: 13, log: '✅ Found size dropdown', delay: 700 * multiplier, element: 'size', codeLine: lines.findSize, variable: { name: varNames.sizeDropdown, value: '<WebElement: select#size>' } },
      { step: 14, log: '📝 Selecting by index: 2 (Large)...', delay: 1200 * multiplier, element: 'size', action: 'select-index', codeLine: lines.selectByIndex, variable: { name: varNames.sizeSelect, value: '<Select object>' } },
      { step: 15, log: '✅ Selected: Large', delay: 700 * multiplier, element: 'size', codeLine: lines.selectByIndex, variable: { name: varNames.sizeSelect, value: 'Large' } },
      { step: 16, log: '📋 Getting all options from size dropdown...', delay: 1000 * multiplier, element: 'size', codeLine: lines.getOptions, variable: { name: varNames.sizeSelect, value: 'Large' } },
      { step: 17, log: '✅ Retrieved options: [Small, Medium, Large, X-Large]', delay: 700 * multiplier, element: 'size', action: 'get-options', codeLine: lines.getOptions, variable: { name: 'all_options', value: '[Small, Medium, Large, X-Large]' } },
      { step: 18, log: '🎉 Select dropdowns demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'all_options', value: '[Small, Medium, Large, X-Large]' } },
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
      
      if (action === 'select-value') {
        setDropdownStates(prev => ({ ...prev, country: 'United States' }));
      } else if (action === 'select-text') {
        setDropdownStates(prev => ({ ...prev, color: 'Blue' }));
      } else if (action === 'select-index') {
        setDropdownStates(prev => ({ ...prev, size: 'Large' }));
      } else if (action === 'get-options') {
        setDropdownStates(prev => ({ ...prev, allOptions: ['Small', 'Medium', 'Large', 'X-Large'] }));
      }
    }

    setIsRunning(false);
  };

  const getSelectDropdownsCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.support.ui import Select',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to page',
        'driver.get("https://www.example.com/form")',
        '',
        '# Find dropdown and create Select object',
        'country_dropdown = driver.find_element(By.ID, "country")',
        'country_select = Select(country_dropdown)',
        'country_select.select_by_value("usa")  # Select by value attribute',
        '',
        '# Select by visible text',
        'color_dropdown = driver.find_element(By.ID, "color")',
        'color_select = Select(color_dropdown)',
        'color_select.select_by_visible_text("Blue")',
        '',
        '# Select by index (0-based)',
        'size_dropdown = driver.find_element(By.ID, "size")',
        'size_select = Select(size_dropdown)',
        'size_select.select_by_index(2)  # Select 3rd option',
        '',
        '# Get all options',
        'all_options = size_select.options',
        'for option in all_options:',
        '    print(option.text)',
        '',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import org.openqa.selenium.support.ui.Select;',
        'import java.util.List;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com/form");',
        '',
        '// Find dropdown and create Select object',
        'WebElement countryDropdown = driver.findElement(By.id("country"));',
        'Select countrySelect = new Select(countryDropdown);',
        'countrySelect.selectByValue("usa");  // Select by value attribute',
        '',
        '// Select by visible text',
        'WebElement colorDropdown = driver.findElement(By.id("color"));',
        'Select colorSelect = new Select(colorDropdown);',
        'colorSelect.selectByVisibleText("Blue");',
        '',
        '// Select by index (0-based)',
        'WebElement sizeDropdown = driver.findElement(By.id("size"));',
        'Select sizeSelect = new Select(sizeDropdown);',
        'sizeSelect.selectByIndex(2);  // Select 3rd option',
        '',
        '// Get all options',
        'List<WebElement> allOptions = sizeSelect.getOptions();',
        'for (WebElement option : allOptions) {',
        '    System.out.println(option.getText());',
        '}',
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
        '// Find dropdown and select by value',
        'let countryDropdown = await driver.findElement(By.id(\'country\'));',
        'await countryDropdown.findElement(By.css(\'option[value="usa"]\')).click();',
        '',
        '// Select by visible text (find option with matching text)',
        'let colorDropdown = await driver.findElement(By.id(\'color\'));',
        'await colorDropdown.findElement(By.xpath(\'//option[text()="Blue"]\')).click();',
        '',
        '// Select by index',
        'let sizeDropdown = await driver.findElement(By.id(\'size\'));',
        'let options = await sizeDropdown.findElements(By.tagName(\'option\'));',
        'await options[2].click();  // Select 3rd option (index 2)',
        '',
        '// Get all options',
        'let allOptions = await sizeDropdown.findElements(By.tagName(\'option\'));',
        'for (let option of allOptions) {',
        '    console.log(await option.getText());',
        '}',
        '',
        'await driver.quit();',
      ];
    }
  };

  const selectDropdownsExample = {
    python: getSelectDropdownsCode('python').join('\n'),
    java: getSelectDropdownsCode('java').join('\n'),
    javascript: getSelectDropdownsCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Select Dropdowns"
        description="Learn to interact with dropdown menus using the Select class"
        icon={ChevronDown}
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChevronDown className="w-5 h-5 text-emerald-600" />
            Working with Dropdowns
          </CardTitle>
          <CardDescription>
            Essential techniques for handling select elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Dropdown menus (select elements) are common in web forms. Selenium provides the Select class to simplify dropdown interactions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Select Class:</strong> Wrapper for select elements with convenient methods</li>
            <li><strong>select_by_value():</strong> Select option by value attribute</li>
            <li><strong>select_by_visible_text():</strong> Select option by displayed text</li>
            <li><strong>select_by_index():</strong> Select option by position (0-based)</li>
            <li><strong>Get Options:</strong> Retrieve all available options</li>
          </ul>

          <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">
            <ChevronDown className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Why Use Select Class?</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              The Select class provides a clean API for dropdown interactions, handling the complexity of option selection and making your code more readable.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-emerald-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Select dropdown syntax in Python, Java, and JavaScript
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
                {selectedLanguage === 'python' && `from selenium.webdriver.support.ui import Select

# Create Select object
dropdown = driver.find_element(By.ID, "country")
select = Select(dropdown)

# Select by value attribute
select.select_by_value("usa")

# Select by visible text
select.select_by_visible_text("United States")

# Select by index (0-based)
select.select_by_index(0)

# Get selected option
selected = select.first_selected_option
print(selected.text)

# Get all options
all_options = select.options
for option in all_options:
    print(option.text)

# Check if multi-select
if select.is_multiple:
    select.select_by_value("option1")
    select.select_by_value("option2")
    
# Deselect (only for multi-select)
select.deselect_by_value("option1")
select.deselect_all()`}
                {selectedLanguage === 'java' && `import org.openqa.selenium.support.ui.Select;

// Create Select object
WebElement dropdown = driver.findElement(By.id("country"));
Select select = new Select(dropdown);

// Select by value attribute
select.selectByValue("usa");

// Select by visible text
select.selectByVisibleText("United States");

// Select by index (0-based)
select.selectByIndex(0);

// Get selected option
WebElement selected = select.getFirstSelectedOption();
System.out.println(selected.getText());

// Get all options
List<WebElement> allOptions = select.getOptions();
for (WebElement option : allOptions) {
    System.out.println(option.getText());
}

// Check if multi-select
if (select.isMultiple()) {
    select.selectByValue("option1");
    select.selectByValue("option2");
}

// Deselect (only for multi-select)
select.deselectByValue("option1");
select.deselectAll();`}
                {selectedLanguage === 'javascript' && `// JavaScript doesn't have Select class, use direct interaction

// Find dropdown
let dropdown = await driver.findElement(By.id('country'));

// Select by value
await dropdown.findElement(By.css('option[value="usa"]')).click();

// Select by visible text
await dropdown.findElement(By.xpath('//option[text()="United States"]')).click();

// Select by index
let options = await dropdown.findElements(By.tagName('option'));
await options[0].click();

// Get selected option
let selected = await dropdown.findElement(By.css('option:checked'));
console.log(await selected.getText());

// Get all options
let allOptions = await dropdown.findElements(By.tagName('option'));
for (let option of allOptions) {
    console.log(await option.getText());
}

// For multi-select, hold Ctrl/Cmd while clicking
const actions = driver.actions();
await actions.keyDown(Key.CONTROL).click(option1).click(option2).keyUp(Key.CONTROL).perform();`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChevronDown className="w-5 h-5 text-emerald-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch dropdown selections in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Select Dropdowns Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch different selection methods: by value, by visible text, and by index. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
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
                      name="speed-select"
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
                  <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateSelectDropdowns}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
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
                    onClick={() => copyToClipboard(selectDropdownsExample[selectedLanguage], 'Select Dropdowns code')}
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
                    {getSelectDropdownsCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{selectDropdownsExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Dropdowns</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px] space-y-4">
                  {/* Country Dropdown */}
                  <div className={`transition-all ${selectedElement === 'country' ? 'ring-2 ring-emerald-500 rounded-lg p-2' : ''}`}>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Country (select by value)
                    </label>
                    <select
                      value={dropdownStates.country}
                      disabled
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900"
                    >
                      <option value="">Select a country</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                    </select>
                    {dropdownStates.country && (
                      <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                        ✓ Selected by value: "{dropdownStates.country}"
                      </div>
                    )}
                  </div>

                  {/* Color Dropdown */}
                  <div className={`transition-all ${selectedElement === 'color' ? 'ring-2 ring-emerald-500 rounded-lg p-2' : ''}`}>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Color (select by visible text)
                    </label>
                    <select
                      value={dropdownStates.color}
                      disabled
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900"
                    >
                      <option value="">Select a color</option>
                      <option value="red">Red</option>
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                    </select>
                    {dropdownStates.color && (
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        ✓ Selected by text: "{dropdownStates.color}"
                      </div>
                    )}
                  </div>

                  {/* Size Dropdown */}
                  <div className={`transition-all ${selectedElement === 'size' ? 'ring-2 ring-emerald-500 rounded-lg p-2' : ''}`}>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Size (select by index)
                    </label>
                    <select
                      value={dropdownStates.size}
                      disabled
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900"
                    >
                      <option value="">Select a size</option>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="xlarge">X-Large</option>
                    </select>
                    {dropdownStates.size && (
                      <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                        ✓ Selected by index 2: "{dropdownStates.size}"
                      </div>
                    )}
                  </div>

                  {/* All Options */}
                  {dropdownStates.allOptions.length > 0 && (
                    <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-300 dark:border-slate-600">
                      <div className="flex items-center gap-2 mb-2">
                        <List className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">All Options Retrieved:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {dropdownStates.allOptions.map((option, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {option}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep >= 18 && (
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">All dropdown selections completed!</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Selection Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChevronDown className="w-5 h-5 text-blue-600" />
            Selection Methods
          </CardTitle>
          <CardDescription>Three ways to select dropdown options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">select_by_value()</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">By Value Attribute</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                select.select_by_value("usa")
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Selects option with matching value attribute
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">select_by_visible_text()</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">By Visible Text</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                select.select_by_visible_text("Blue")
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Selects option with matching displayed text
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">select_by_index()</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">By Index Position</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                select.select_by_index(2)
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Selects option at index position (0-based)
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Prefer Visible Text</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use select_by_visible_text for better readability and maintainability
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Avoid Index Selection</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Index-based selection is brittle and breaks when options change
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Verify Selection</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Check first_selected_option after selection to verify
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Handle Multi-Select</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Check is_multiple before attempting multiple selections
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
              <AlertTitle className="text-red-900 dark:text-red-100">NoSuchElementException</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Option with specified value/text not found<br/>
                <strong>Solution:</strong> Verify option exists, check for exact text match including whitespace
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Element Not Interactable</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Cannot select option from dropdown<br/>
                <strong>Solution:</strong> Wait for dropdown to be visible and enabled before selection
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Not a Select Element</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Element is not a &lt;select&gt; tag<br/>
                <strong>Solution:</strong> For custom dropdowns, use click() instead of Select class
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Multi-Select</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Handle Multiple Selections</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                if select.is_multiple:<br/>
                &nbsp;&nbsp;select.select_by_value("option1")<br/>
                &nbsp;&nbsp;select.select_by_value("option2")<br/>
                &nbsp;&nbsp;select.deselect_all()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Get All Options</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Retrieve All Options</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                options = select.options<br/>
                for option in options:<br/>
                &nbsp;&nbsp;print(option.text, option.get_attribute("value"))
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Get Selected</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Get Currently Selected Options</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                selected = select.first_selected_option<br/>
                all_selected = select.all_selected_options
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

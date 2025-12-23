'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Clock,
  Code,
  Copy,
  CheckCircle,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Timer,
  Gauge,
  Hourglass,
  Globe,
  Zap,
  Settings
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

const ImplicitWaits = () => {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [implicitState, setImplicitState] = React.useState({
    configured: false,
    searching: false,
    elementFound: false,
    globalTimeout: 0
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

  const simulateImplicitWait = async () => {
    setIsRunning(true);
    setCurrentStep(0);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setImplicitState({
      configured: false,
      searching: false,
      elementFound: false,
      globalTimeout: 0
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, nav: 7, implicit: 10, find1: 13, find2: 16, find3: 19, quit: 22 };
      } else if (selectedLanguage === 'java') {
        return { init: 5, nav: 8, implicit: 11, find1: 14, find2: 17, find3: 20, quit: 23 };
      } else {
        return { init: 2, nav: 4, implicit: 7, find1: 10, find2: 13, find3: 16, quit: 18 };
      }
    };
    const lines = getCodeLines();

    const steps = [
      { step: 0, log: '🚀 Starting Implicit Wait demonstration...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '🌐 Initializing Chrome WebDriver...', delay: 600 * multiplier, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔗 Navigating to dynamic page...', delay: 800 * multiplier, codeLine: lines.nav, variable: { name: 'driver', value: 'https://example.com/dynamic' } },
      { step: 3, log: '⏱️ Setting implicit wait to 10 seconds globally...', delay: 1000 * multiplier, codeLine: lines.implicit, action: 'configured', variable: { name: 'timeout', value: '10 seconds' } },
      { step: 4, log: '✅ Implicit wait configured - applies to ALL find_element calls', delay: 700 * multiplier, codeLine: lines.implicit, action: 'configured' },
      { step: 5, log: '🔍 Finding first element (implicit wait auto-applies)...', delay: 1200 * multiplier, codeLine: lines.find1, action: 'searching' },
      { step: 6, log: '✅ First element found after 1.2 seconds', delay: 600 * multiplier, codeLine: lines.find1, action: 'found1', variable: { name: 'element1', value: '<WebElement: button>' } },
      { step: 7, log: '🔍 Finding second element (same 10s timeout applies)...', delay: 1000 * multiplier, codeLine: lines.find2, action: 'searching' },
      { step: 8, log: '✅ Second element found after 0.8 seconds', delay: 600 * multiplier, codeLine: lines.find2, action: 'found2', variable: { name: 'element2', value: '<WebElement: input>' } },
      { step: 9, log: '🔍 Finding third element (implicit wait still active)...', delay: 900 * multiplier, codeLine: lines.find3, action: 'searching' },
      { step: 10, log: '✅ Third element found after 0.5 seconds', delay: 600 * multiplier, codeLine: lines.find3, action: 'found3', variable: { name: 'element3', value: '<WebElement: link>' } },
      { step: 11, log: '🎉 Implicit Wait demo completed! All elements found successfully.', delay: 500 * multiplier, codeLine: lines.quit },
    ];

    for (const { step, log, delay, codeLine, variable, action } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (action === 'configured') {
        setImplicitState(prev => ({ ...prev, configured: true, globalTimeout: 10 }));
      } else if (action === 'searching') {
        setImplicitState(prev => ({ ...prev, searching: true }));
      } else if (action?.startsWith('found')) {
        setImplicitState(prev => ({ ...prev, searching: false, elementFound: true }));
      }
    }

    setIsRunning(false);
  };

  const getImplicitWaitCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'import time',
        '',
        '# 🚀 Initialize WebDriver',
        'driver = webdriver.Chrome()',
        '',
        '# 🌐 Navigate to page',
        'driver.get("https://example.com/dynamic")',
        '',
        '# ⏱️ IMPLICIT WAIT - Set once, applies globally',
        'driver.implicitly_wait(10)  # Wait up to 10 seconds for ALL elements',
        '',
        '# 🔍 Find elements - implicit wait automatically applies',
        'button = driver.find_element(By.ID, "submit-btn")',
        'print(f"Button found: {button.text}")',
        '',
        'input_field = driver.find_element(By.NAME, "username")',
        'print(f"Input found: {input_field.get_attribute(\'placeholder\')}")',
        '',
        'link = driver.find_element(By.LINK_TEXT, "Learn More")',
        'print(f"Link found: {link.get_attribute(\'href\')}")',
        '',
        '# 🎯 No need to wait for each element - implicit wait handles it!',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import java.time.Duration;',
        '',
        '// 🚀 Initialize WebDriver',
        'WebDriver driver = new ChromeDriver();',
        '',
        '// 🌐 Navigate to page',
        'driver.get("https://example.com/dynamic");',
        '',
        '// ⏱️ IMPLICIT WAIT - Set once, applies globally',
        'driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));',
        '',
        '// 🔍 Find elements - implicit wait automatically applies',
        'WebElement button = driver.findElement(By.id("submit-btn"));',
        'System.out.println("Button found: " + button.getText());',
        '',
        'WebElement inputField = driver.findElement(By.name("username"));',
        'System.out.println("Input found: " + inputField.getAttribute("placeholder"));',
        '',
        'WebElement link = driver.findElement(By.linkText("Learn More"));',
        'System.out.println("Link found: " + link.getAttribute("href"));',
        '',
        '// 🎯 No need to wait for each element - implicit wait handles it!',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        '// 🚀 Initialize WebDriver',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// 🌐 Navigate to page',
        'await driver.get(\'https://example.com/dynamic\');',
        '',
        '// ⏱️ IMPLICIT WAIT - Set once, applies globally',
        'await driver.manage().setTimeouts({ implicit: 10000 }); // 10 seconds',
        '',
        '// 🔍 Find elements - implicit wait automatically applies',
        'let button = await driver.findElement(By.id(\'submit-btn\'));',
        'console.log(\'Button found:\', await button.getText());',
        '',
        'let inputField = await driver.findElement(By.name(\'username\'));',
        'console.log(\'Input found:\', await inputField.getAttribute(\'placeholder\'));',
        '',
        'let link = await driver.findElement(By.linkText(\'Learn More\'));',
        'console.log(\'Link found:\', await link.getAttribute(\'href\'));',
        '',
        '// 🎯 No need to wait for each element - implicit wait handles it!',
        'await driver.quit();',
      ];
    }
  };

  const implicitWaitExample = {
    python: getImplicitWaitCode('python').join('\n'),
    java: getImplicitWaitCode('java').join('\n'),
    javascript: getImplicitWaitCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Implicit Waits"
        description="Global timeout strategy for automatic element waiting"
        icon={Clock}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hourglass className="w-5 h-5 text-blue-600" />
            Understanding Implicit Waits
          </CardTitle>
          <CardDescription>
            Set once, applies to all element finding operations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Implicit waits tell WebDriver to poll the DOM for a certain amount of time when trying to find an element if it's not immediately available.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <Badge className="bg-blue-600">Global Scope</Badge>
              </div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Applies Everywhere</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Once set, applies to ALL find_element calls automatically
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-600" />
                <Badge className="bg-green-600">Simple Setup</Badge>
              </div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Easy to Use</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Just one line of code to configure for entire session
              </p>
            </div>
          </div>

          <Alert className="border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20">
            <Settings className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Important Note</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Implicit waits can slow down tests when elements are immediately available since they always wait up to the timeout before throwing NoSuchElementException.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Implicit wait implementation in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl border-2 border-slate-300 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Implicit Wait Operations</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                  {selectedLanguage === 'python' && '🐍 Python'}
                  {selectedLanguage === 'java' && '☕ Java'}
                  {selectedLanguage === 'javascript' && '🟨 JavaScript'}
                </Badge>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-300">
                  {selectedLanguage === 'python' && `# 🍪 Implicit Wait in Selenium Python

# ⏱️ SET GLOBAL TIMEOUT (once per session)
driver.implicitly_wait(10)  # Maximum 10 seconds wait

# 🔍 FIND ELEMENTS (automatic waiting applies)
# No need for explicit waits - implicit wait handles timing!

# 1️⃣ Find button (waits up to 10s if needed)
button = driver.find_element(By.ID, "submit-btn")
print(f"✅ Button: {button.text}")

# 2️⃣ Find input field (same 10s timeout applies)
username = driver.find_element(By.NAME, "username")
print(f"✅ Input: {username.get_attribute('placeholder')}")

# 3️⃣ Find link (implicit wait still active)
link = driver.find_element(By.LINK_TEXT, "Learn More")
print(f"✅ Link: {link.get_attribute('href')}")

# 🎯 BENEFIT: Simple, no repetitive wait code needed!`}
                  {selectedLanguage === 'java' && `// 🍪 Implicit Wait in Selenium Java

// ⏱️ SET GLOBAL TIMEOUT (once per session)
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

// 🔍 FIND ELEMENTS (automatic waiting applies)
// No need for explicit waits - implicit wait handles timing!

// 1️⃣ Find button (waits up to 10s if needed)
WebElement button = driver.findElement(By.id("submit-btn"));
System.out.println("✅ Button: " + button.getText());

// 2️⃣ Find input field (same 10s timeout applies)
WebElement username = driver.findElement(By.name("username"));
System.out.println("✅ Input: " + username.getAttribute("placeholder"));

// 3️⃣ Find link (implicit wait still active)
WebElement link = driver.findElement(By.linkText("Learn More"));
System.out.println("✅ Link: " + link.getAttribute("href"));

// 🎯 BENEFIT: Simple, no repetitive wait code needed!`}
                  {selectedLanguage === 'javascript' && `// 🍪 Implicit Wait in Selenium JavaScript

// ⏱️ SET GLOBAL TIMEOUT (once per session)
await driver.manage().setTimeouts({ implicit: 10000 }); // 10 seconds

// 🔍 FIND ELEMENTS (automatic waiting applies)
// No need for explicit waits - implicit wait handles timing!

// 1️⃣ Find button (waits up to 10s if needed)
let button = await driver.findElement(By.id('submit-btn'));
console.log('✅ Button:', await button.getText());

// 2️⃣ Find input field (same 10s timeout applies)
let username = await driver.findElement(By.name('username'));
console.log('✅ Input:', await username.getAttribute('placeholder'));

// 3️⃣ Find link (implicit wait still active)
let link = await driver.findElement(By.linkText('Learn More'));
console.log('✅ Link:', await link.getAttribute('href'));

// 🎯 BENEFIT: Simple, no repetitive wait code needed!`}
                </code>
              </pre>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-2 text-center">
                <div className="text-blue-600 dark:text-blue-400 text-lg mb-1">⏱️</div>
                <div className="text-xs font-medium text-blue-900 dark:text-blue-100">Global</div>
                <div className="text-[10px] text-blue-700 dark:text-blue-300">Applies to all</div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-2 text-center">
                <div className="text-green-600 dark:text-green-400 text-lg mb-1">🚀</div>
                <div className="text-xs font-medium text-green-900 dark:text-green-100">Simple</div>
                <div className="text-[10px] text-green-700 dark:text-green-300">One line setup</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-2 text-center">
                <div className="text-purple-600 dark:text-purple-400 text-lg mb-1">🔄</div>
                <div className="text-xs font-medium text-purple-900 dark:text-purple-100">Automatic</div>
                <div className="text-[10px] text-purple-700 dark:text-purple-300">No manual calls</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="w-5 h-5 text-blue-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch implicit waits handle multiple element finds automatically
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Implicit Wait Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              See how a single implicit wait configuration automatically handles multiple element searches with different load times.
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400" />
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
                        ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-implicit"
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
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Execution</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateImplicitWait}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
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
                    onClick={() => copyToClipboard(implicitWaitExample[selectedLanguage], 'Implicit wait code')}
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
                    {getImplicitWaitCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-blue-200 dark:bg-blue-900/50 border-l-4 border-blue-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-blue-900 dark:text-blue-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-700">
                        <div className="text-[10px] font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-blue-800 dark:text-blue-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-blue-600 dark:text-blue-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{implicitWaitExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Implicit Wait Status</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                      </div>
                      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-mono text-white/90 border border-white/20">
                        https://example.com/dynamic
                      </div>
                      <div className="flex items-center gap-2">
                        {implicitState.configured && (
                          <Badge className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1">
                            <Clock className="w-3 h-3 mr-1" />
                            {implicitState.globalTimeout}s timeout
                          </Badge>
                        )}
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 min-h-[400px] bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                    <div className="space-y-4">
                      {/* Implicit Wait Configuration */}
                      <div className={`p-4 rounded-lg border-2 transition-all ${
                        currentStep >= 3 && currentStep <= 4
                          ? 'border-blue-500 bg-blue-100 dark:bg-blue-950/50 shadow-lg scale-105'
                          : implicitState.configured
                          ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                          : 'border-slate-200 dark:border-slate-700'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-slate-100">
                              {currentStep >= 3 ? 'Implicit Wait Configured' : 'Waiting for Configuration'}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                              {implicitState.configured ? `Global timeout: ${implicitState.globalTimeout} seconds` : 'Not yet configured'}
                            </div>
                          </div>
                          {implicitState.configured && <Clock className="w-6 h-6 text-green-600" />}
                        </div>
                      </div>

                      {/* Element Search Progress */}
                      {currentStep >= 5 && (
                        <div className="space-y-3">
                          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">Element Search Progress:</div>
                          
                          {/* Element 1 */}
                          <div className={`p-3 rounded-lg border transition-all ${
                            currentStep === 5 || currentStep === 6
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                              : currentStep > 6
                              ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                              : 'border-slate-200 dark:border-slate-700'
                          }`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${
                                  currentStep > 6 ? 'bg-green-500' : 
                                  currentStep === 5 || currentStep === 6 ? 'bg-blue-500 animate-pulse' : 
                                  'bg-slate-300'
                                }`}></div>
                                <span className="text-sm font-medium">Button Element</span>
                              </div>
                              <span className="text-xs text-slate-600 dark:text-slate-400">
                                {currentStep > 6 ? 'Found (1.2s)' : 
                                 currentStep === 5 || currentStep === 6 ? 'Searching...' : 
                                 'Pending'}
                              </span>
                            </div>
                          </div>

                          {/* Element 2 */}
                          <div className={`p-3 rounded-lg border transition-all ${
                            currentStep === 7 || currentStep === 8
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                              : currentStep > 8
                              ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                              : 'border-slate-200 dark:border-slate-700'
                          }`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${
                                  currentStep > 8 ? 'bg-green-500' : 
                                  currentStep === 7 || currentStep === 8 ? 'bg-blue-500 animate-pulse' : 
                                  'bg-slate-300'
                                }`}></div>
                                <span className="text-sm font-medium">Input Field</span>
                              </div>
                              <span className="text-xs text-slate-600 dark:text-slate-400">
                                {currentStep > 8 ? 'Found (0.8s)' : 
                                 currentStep === 7 || currentStep === 8 ? 'Searching...' : 
                                 'Pending'}
                              </span>
                            </div>
                          </div>

                          {/* Element 3 */}
                          <div className={`p-3 rounded-lg border transition-all ${
                            currentStep === 9 || currentStep === 10
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                              : currentStep > 10
                              ? 'border-green-300 bg-green-50 dark:bg-green-950/30'
                              : 'border-slate-200 dark:border-slate-700'
                          }`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${
                                  currentStep > 10 ? 'bg-green-500' : 
                                  currentStep === 9 || currentStep === 10 ? 'bg-blue-500 animate-pulse' : 
                                  'bg-slate-300'
                                }`}></div>
                                <span className="text-sm font-medium">Link Element</span>
                              </div>
                              <span className="text-xs text-slate-600 dark:text-slate-400">
                                {currentStep > 10 ? 'Found (0.5s)' : 
                                 currentStep === 9 || currentStep === 10 ? 'Searching...' : 
                                 'Pending'}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Success Message */}
                      {currentStep >= 11 && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-green-900 dark:text-green-100">
                                All Elements Found Successfully!
                              </div>
                              <div className="text-xs text-green-700 dark:text-green-300">
                                Implicit wait handled all timing automatically
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
            <CheckCircle className="w-5 h-5 text-green-600" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Set Once Per Session</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Configure implicit wait at the beginning of your test session
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Reasonable Timeouts</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use 5-15 seconds based on your application's performance
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Avoid Mixing Waits</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Don't use implicit and explicit waits together
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Simple Tests Only</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Best for straightforward test scenarios
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
              <AlertTitle className="text-red-900 dark:text-red-100">Slow Test Execution</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Tests run slowly even when elements are available<br/>
                <strong>Solution:</strong> Implicit wait always polls up to the timeout. Consider explicit waits for better performance.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Mixed Wait Types</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Unpredictable behavior when using both implicit and explicit waits<br/>
                <strong>Solution:</strong> Choose one wait strategy and stick with it throughout your test suite.
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Timeout Too Long</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Tests wait too long before failing<br/>
                <strong>Solution:</strong> Set appropriate timeouts based on your application's actual load times.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { ImplicitWaits };

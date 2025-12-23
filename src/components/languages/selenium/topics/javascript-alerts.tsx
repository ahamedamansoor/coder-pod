'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  AlertTriangle,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  MessageSquare
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function JavascriptAlerts() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [alertState, setAlertState] = React.useState({
    type: '',
    message: '',
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

  const simulateJavascriptAlerts = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setAlertState({ type: '', message: '', action: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, switchAlert: 7, acceptAlert: 10, dismissAlert: 13, sendKeys: 16, getText: 19, quit: 22 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, switchAlert: 7, acceptAlert: 10, dismissAlert: 13, sendKeys: 16, getText: 19, quit: 21 };
      } else {
        return { init: 2, switchAlert: 5, acceptAlert: 8, dismissAlert: 11, sendKeys: 14, getText: 17, quit: 19 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting JavaScript Alerts demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '⚠️ Alert triggered on page...', delay: 800 * multiplier, element: 'alert', codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '🔄 Switching to alert...', delay: 1200 * multiplier, element: 'alert', action: 'switch', codeLine: lines.switchAlert, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 4, log: '✅ Switched to alert', delay: 700 * multiplier, element: 'alert', codeLine: lines.switchAlert, variable: { name: 'alert', value: '<Alert object>' } },
      { step: 5, log: '📝 Getting alert text...', delay: 1200 * multiplier, element: 'alert', codeLine: lines.getText, variable: { name: 'alert', value: '<Alert object>' } },
      { step: 6, log: '✅ Alert text: "Are you sure?"', delay: 700 * multiplier, element: 'alert', codeLine: lines.getText, variable: { name: 'alert_text', value: 'Are you sure?' } },
      { step: 7, log: '✔️ Accepting alert...', delay: 1200 * multiplier, element: 'alert', action: 'accept', codeLine: lines.acceptAlert, variable: { name: 'alert_text', value: 'Are you sure?' } },
      { step: 8, log: '✅ Alert accepted', delay: 700 * multiplier, element: null, codeLine: lines.acceptAlert, variable: { name: 'alert', value: 'accepted' } },
      { step: 9, log: '⚠️ Confirm alert triggered...', delay: 1200 * multiplier, element: 'confirm', action: 'confirm', codeLine: lines.switchAlert, variable: { name: 'alert', value: 'accepted' } },
      { step: 10, log: '✅ Switched to confirm', delay: 700 * multiplier, element: 'confirm', codeLine: lines.switchAlert, variable: { name: 'alert', value: '<Alert object>' } },
      { step: 11, log: '❌ Dismissing confirm...', delay: 1200 * multiplier, element: 'confirm', action: 'dismiss', codeLine: lines.dismissAlert, variable: { name: 'alert', value: '<Alert object>' } },
      { step: 12, log: '✅ Confirm dismissed', delay: 700 * multiplier, element: null, codeLine: lines.dismissAlert, variable: { name: 'alert', value: 'dismissed' } },
      { step: 13, log: '⚠️ Prompt alert triggered...', delay: 1200 * multiplier, element: 'prompt', action: 'prompt', codeLine: lines.switchAlert, variable: { name: 'alert', value: 'dismissed' } },
      { step: 14, log: '✅ Switched to prompt', delay: 700 * multiplier, element: 'prompt', codeLine: lines.switchAlert, variable: { name: 'alert', value: '<Alert object>' } },
      { step: 15, log: '⌨️ Typing in prompt...', delay: 1200 * multiplier, element: 'prompt', action: 'type', codeLine: lines.sendKeys, variable: { name: 'alert', value: '<Alert object>' } },
      { step: 16, log: '✅ Text entered: "Test User"', delay: 700 * multiplier, element: 'prompt', codeLine: lines.sendKeys, variable: { name: 'input_text', value: 'Test User' } },
      { step: 17, log: '✔️ Accepting prompt...', delay: 1200 * multiplier, element: 'prompt', action: 'accept-prompt', codeLine: lines.acceptAlert, variable: { name: 'input_text', value: 'Test User' } },
      { step: 18, log: '✅ Prompt accepted', delay: 700 * multiplier, element: null, codeLine: lines.acceptAlert, variable: { name: 'alert', value: 'accepted' } },
      { step: 19, log: '🎉 JavaScript Alerts demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'alert', value: 'accepted' } },
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
      
      if (action === 'switch') {
        setAlertState({ type: 'alert', message: 'Are you sure?', action: 'Switched to alert' });
      } else if (action === 'accept') {
        setAlertState({ type: '', message: '', action: 'Alert accepted' });
      } else if (action === 'confirm') {
        setAlertState({ type: 'confirm', message: 'Do you want to continue?', action: 'Confirm appeared' });
      } else if (action === 'dismiss') {
        setAlertState({ type: '', message: '', action: 'Confirm dismissed' });
      } else if (action === 'prompt') {
        setAlertState({ type: 'prompt', message: 'Enter your name:', action: 'Prompt appeared' });
      } else if (action === 'type') {
        setAlertState({ type: 'prompt', message: 'Enter your name: Test User', action: 'Typing in prompt' });
      } else if (action === 'accept-prompt') {
        setAlertState({ type: '', message: '', action: 'Prompt accepted' });
      }
    }

    setIsRunning(false);
  };

  const getJavascriptAlertsCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# Switch to alert',
        'alert = driver.switch_to.alert',
        '',
        '# Get alert text',
        'alert_text = alert.text',
        'print(f"Alert says: {alert_text}")',
        '',
        '# Accept alert (click OK)',
        'alert.accept()',
        '',
        '# Dismiss alert (click Cancel)',
        'alert.dismiss()',
        '',
        '# Send text to prompt',
        'alert.send_keys("Test User")',
        'alert.accept()',
        '',
        '# Close browser',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.Alert;',
        '',
        'WebDriver driver = new ChromeDriver();',
        '',
        '// Switch to alert',
        'Alert alert = driver.switchTo().alert();',
        '',
        '// Get alert text',
        'String alertText = alert.getText();',
        'System.out.println("Alert says: " + alertText);',
        '',
        '// Accept alert (click OK)',
        'alert.accept();',
        '',
        '// Dismiss alert (click Cancel)',
        'alert.dismiss();',
        '',
        '// Send text to prompt',
        'alert.sendKeys("Test User");',
        'alert.accept();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Switch to alert',
        'let alert = await driver.switchTo().alert();',
        '',
        '// Get alert text',
        'let alertText = await alert.getText();',
        'console.log(\`Alert says: \${alertText}\`);',
        '',
        '// Accept alert (click OK)',
        'await alert.accept();',
        '',
        '// Dismiss alert (click Cancel)',
        'await alert.dismiss();',
        '',
        '// Send text to prompt',
        'await alert.sendKeys(\'Test User\');',
        'await alert.accept();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const javascriptAlertsExample = {
    python: getJavascriptAlertsCode('python').join('\n'),
    java: getJavascriptAlertsCode('java').join('\n'),
    javascript: getJavascriptAlertsCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="JavaScript Alerts"
        description="Handle alert, confirm, and prompt dialogs"
        icon={AlertTriangle}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            Understanding JavaScript Alerts
          </CardTitle>
          <CardDescription>
            Three types of JavaScript dialogs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            JavaScript provides three types of native dialog boxes that require special handling in Selenium:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Alert:</strong> Simple message with OK button - alert("message")</li>
            <li><strong>Confirm:</strong> Message with OK and Cancel buttons - confirm("message")</li>
            <li><strong>Prompt:</strong> Input field with OK and Cancel - prompt("message", "default")</li>
          </ul>

          <Alert className="border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Switch to Alert Required</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              You must switch to the alert before interacting with it. Use driver.switch_to.alert to get the alert object.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-amber-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Alert handling syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-amber-600 text-amber-600 dark:text-amber-400'
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
                {selectedLanguage === 'python' && `from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Wait for alert to be present
wait = WebDriverWait(driver, 10)
wait.until(EC.alert_is_present())

# Switch to alert
alert = driver.switch_to.alert

# Get alert text
text = alert.text
print(f"Alert says: {text}")

# Accept alert (click OK)
alert.accept()

# Dismiss alert (click Cancel)
alert.dismiss()

# Handle prompt - send text and accept
alert.send_keys("John Doe")
alert.accept()

# Handle confirm - check result
button = driver.find_element(By.ID, "confirm-btn")
button.click()
alert = driver.switch_to.alert
alert.accept()  # Click OK
# or alert.dismiss()  # Click Cancel

# Try-except for alert handling
try:
    alert = driver.switch_to.alert
    print(f"Alert found: {alert.text}")
    alert.accept()
except:
    print("No alert present")

# Authentication alert (Basic Auth)
driver.get("https://username:password@example.com")`}
                {selectedLanguage === 'java' && `import org.openqa.selenium.Alert;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;

// Wait for alert to be present
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.alertIsPresent());

// Switch to alert
Alert alert = driver.switchTo().alert();

// Get alert text
String text = alert.getText();
System.out.println("Alert says: " + text);

// Accept alert (click OK)
alert.accept();

// Dismiss alert (click Cancel)
alert.dismiss();

// Handle prompt - send text and accept
alert.sendKeys("John Doe");
alert.accept();

// Handle confirm - check result
WebElement button = driver.findElement(By.id("confirm-btn"));
button.click();
alert = driver.switchTo().alert();
alert.accept();  // Click OK
// or alert.dismiss();  // Click Cancel

// Try-catch for alert handling
try {
    alert = driver.switchTo().alert();
    System.out.println("Alert found: " + alert.getText());
    alert.accept();
} catch (NoAlertPresentException e) {
    System.out.println("No alert present");
}

// Authentication alert (Basic Auth)
driver.get("https://username:password@example.com");`}
                {selectedLanguage === 'javascript' && `const { until } = require('selenium-webdriver');

// Wait for alert to be present
await driver.wait(until.alertIsPresent(), 10000);

// Switch to alert
let alert = await driver.switchTo().alert();

// Get alert text
let text = await alert.getText();
console.log(\`Alert says: \${text}\`);

// Accept alert (click OK)
await alert.accept();

// Dismiss alert (click Cancel)
await alert.dismiss();

// Handle prompt - send text and accept
await alert.sendKeys('John Doe');
await alert.accept();

// Handle confirm - check result
let button = await driver.findElement(By.id('confirm-btn'));
await button.click();
alert = await driver.switchTo().alert();
await alert.accept();  // Click OK
// or await alert.dismiss();  // Click Cancel

// Try-catch for alert handling
try {
    alert = await driver.switchTo().alert();
    console.log(\`Alert found: \${await alert.getText()}\`);
    await alert.accept();
} catch (e) {
    console.log('No alert present');
}

// Authentication alert (Basic Auth)
await driver.get('https://username:password@example.com');`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch alert handling in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive JavaScript Alerts Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch alert, confirm, and prompt handling with inline variable values!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-4 rounded-lg border-2 border-amber-200 dark:border-amber-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-amber-600 dark:text-amber-400" />
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
                        ? 'border-amber-500 bg-amber-100 dark:bg-amber-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-amber-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-alerts"
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
                  <Code className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateJavascriptAlerts}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
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
                    onClick={() => copyToClipboard(javascriptAlertsExample[selectedLanguage], 'JavaScript Alerts code')}
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
                    {getJavascriptAlertsCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-amber-200 dark:bg-amber-900/50 border-l-4 border-amber-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-amber-900 dark:text-amber-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 rounded border border-amber-200 dark:border-amber-700">
                        <div className="text-[10px] font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-amber-800 dark:text-amber-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-amber-600 dark:text-amber-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{javascriptAlertsExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Alert Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[500px] relative">
                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600">Trigger Alert</Button>
                    <Button className="w-full bg-green-600">Trigger Confirm</Button>
                    <Button className="w-full bg-purple-600">Trigger Prompt</Button>
                  </div>

                  {alertState.type && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-6">
                      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-6 max-w-sm w-full border-2 border-amber-500">
                        <div className="flex items-center gap-2 mb-4">
                          <AlertTriangle className="w-5 h-5 text-amber-600" />
                          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                            {alertState.type === 'alert' && 'Alert'}
                            {alertState.type === 'confirm' && 'Confirm'}
                            {alertState.type === 'prompt' && 'Prompt'}
                          </h3>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                          {alertState.message}
                        </p>
                        {alertState.type === 'prompt' && (
                          <input 
                            type="text" 
                            className="w-full p-2 border rounded mb-4 text-sm"
                            placeholder="Enter text..."
                            readOnly
                          />
                        )}
                        <div className="flex gap-2 justify-end">
                          {(alertState.type === 'confirm' || alertState.type === 'prompt') && (
                            <Button size="sm" variant="outline">Cancel</Button>
                          )}
                          <Button size="sm" className="bg-amber-600">OK</Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {alertState.action && (
                    <div className="absolute bottom-4 right-4 p-3 bg-amber-100 dark:bg-amber-950/50 rounded-lg border-2 border-amber-300 dark:border-amber-700">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                          {alertState.action}
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
            <AlertTriangle className="w-5 h-5 text-blue-600" />
            Three Alert Types
          </CardTitle>
          <CardDescription>Understanding each dialog type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Alert</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Simple Message</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                alert.accept()
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Only OK button<br/>
                Cannot be dismissed<br/>
                Use accept() only
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Confirm</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">OK or Cancel</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                alert.accept()  # OK<br/>
                alert.dismiss()  # Cancel
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Two buttons<br/>
                Returns true/false<br/>
                Use accept() or dismiss()
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">Prompt</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Input Field</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                alert.send_keys("text")<br/>
                alert.accept()
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Input field + buttons<br/>
                Returns input or null<br/>
                Use send_keys() then accept()
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Wait for Alert</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use explicit wait for alert_is_present() before switching
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Handle Exceptions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use try-except to handle NoAlertPresentException
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Get Text First</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Read alert.text before accepting/dismissing for logging
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Don't Ignore Alerts</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Unhandled alerts will block further automation
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
              <AlertTitle className="text-red-900 dark:text-red-100">NoAlertPresentException</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Trying to switch to non-existent alert<br/>
                <strong>Solution:</strong> Wait for alert with WebDriverWait and alert_is_present()
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">UnexpectedAlertPresentException</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Alert blocks other operations<br/>
                <strong>Solution:</strong> Handle the alert before continuing automation
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Alert Text Lost</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Can't get text after accepting alert<br/>
                <strong>Solution:</strong> Call alert.text before accept() or dismiss()
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Alert Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Wait for Alert</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Explicit Wait</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                from selenium.webdriver.support import expected_conditions as EC<br/>
                <br/>
                wait = WebDriverWait(driver, 10)<br/>
                alert = wait.until(EC.alert_is_present())<br/>
                print(alert.text)<br/>
                alert.accept()
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Basic Authentication</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Handle Auth Alerts</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Method 1: URL with credentials<br/>
                driver.get("https://username:password@example.com")<br/>
                <br/>
                # Method 2: Alert handling (may not work for auth)<br/>
                alert = driver.switch_to.alert<br/>
                alert.authenticate("username", "password")  # Selenium 4+
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Alert Handler</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Reusable Function</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                def handle_alert(action="accept", text=None):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;try:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert = driver.switch_to.alert<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert_text = alert.text<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if text:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert.send_keys(text)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if action == "accept":<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert.accept()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert.dismiss()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return alert_text<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;except:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return None
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

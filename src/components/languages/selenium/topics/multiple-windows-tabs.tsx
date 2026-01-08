'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Layers,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  ExternalLink,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function MultipleWindowsTabs() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [windowsState, setWindowsState] = React.useState({
    windows: [] as Array<{id: string, title: string, url: string, active: boolean}>,
    currentHandle: ''
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

  const simulateMultipleWindows = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setWindowsState({
      windows: [],
      currentHandle: ''
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, nav: 7, getHandle: 10, openNew: 13, getAllHandles: 14, switchTo: 17, nav2: 18, switchBack: 21, close: 24, quit: 27 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, nav: 7, getHandle: 10, openNew: 13, getAllHandles: 14, switchTo: 17, nav2: 18, switchBack: 21, close: 24, quit: 26 };
      } else {
        return { init: 2, nav: 3, getHandle: 6, openNew: 9, getAllHandles: 10, switchTo: 13, nav2: 14, switchBack: 17, close: 20, quit: 22 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      mainWindow: selectedLanguage === 'python' ? 'main_window' : 'mainWindow',
      allHandles: selectedLanguage === 'python' ? 'all_handles' : 'allHandles',
      newWindow: selectedLanguage === 'python' ? 'new_window' : 'newWindow'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Multiple Windows demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing Chrome browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔗 Navigating to Google...', delay: 1000 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '✅ Loaded: https://www.google.com', delay: 700 * multiplier, element: 'window1', action: 'open-main', codeLine: lines.nav, variable: { name: 'driver', value: 'https://www.google.com' } },
      { step: 4, log: '🔑 Getting main window handle...', delay: 800 * multiplier, element: 'window1', codeLine: lines.getHandle, variable: { name: 'driver', value: 'https://www.google.com' } },
      { step: 5, log: '✅ Main window handle: CDwindow-ABC123', delay: 700 * multiplier, element: 'window1', codeLine: lines.getHandle, variable: { name: varNames.mainWindow, value: 'CDwindow-ABC123' } },
      { step: 6, log: '🆕 Opening new window...', delay: 1200 * multiplier, element: 'window1', codeLine: lines.openNew, variable: { name: varNames.mainWindow, value: 'CDwindow-ABC123' } },
      { step: 7, log: '✅ New window opened', delay: 700 * multiplier, element: 'window2', action: 'open-new', codeLine: lines.openNew, variable: { name: 'driver', value: 'new window' } },
      { step: 8, log: '📋 Getting all window handles...', delay: 800 * multiplier, element: 'window2', codeLine: lines.getAllHandles, variable: { name: 'driver', value: 'new window' } },
      { step: 9, log: '✅ Found 2 windows', delay: 700 * multiplier, element: 'window2', codeLine: lines.getAllHandles, variable: { name: varNames.allHandles, value: '[CDwindow-ABC123, CDwindow-XYZ789]' } },
      { step: 10, log: '🔄 Switching to new window...', delay: 1200 * multiplier, element: 'window2', codeLine: lines.switchTo, variable: { name: varNames.allHandles, value: '[CDwindow-ABC123, CDwindow-XYZ789]' } },
      { step: 11, log: '✅ Switched to new window', delay: 700 * multiplier, element: 'window2', action: 'switch-new', codeLine: lines.switchTo, variable: { name: varNames.newWindow, value: 'CDwindow-XYZ789' } },
      { step: 12, log: '🔗 Navigating to GitHub in new window...', delay: 1000 * multiplier, element: 'window2', codeLine: lines.nav2, variable: { name: varNames.newWindow, value: 'CDwindow-XYZ789' } },
      { step: 13, log: '✅ Loaded: https://github.com', delay: 700 * multiplier, element: 'window2', action: 'nav-github', codeLine: lines.nav2, variable: { name: 'driver', value: 'https://github.com' } },
      { step: 14, log: '🔄 Switching back to main window...', delay: 1200 * multiplier, element: 'window2', codeLine: lines.switchBack, variable: { name: 'driver', value: 'https://github.com' } },
      { step: 15, log: '✅ Switched to main window', delay: 700 * multiplier, element: 'window1', action: 'switch-main', codeLine: lines.switchBack, variable: { name: 'driver', value: 'https://www.google.com' } },
      { step: 16, log: '❌ Closing current window...', delay: 1200 * multiplier, element: 'window1', codeLine: lines.close, variable: { name: 'driver', value: 'https://www.google.com' } },
      { step: 17, log: '✅ Window closed', delay: 700 * multiplier, element: 'window2', action: 'close-main', codeLine: lines.close, variable: { name: 'driver', value: 'window closed' } },
      { step: 18, log: '🎉 Multiple Windows demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'driver', value: 'window closed' } },
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
      
      if (action === 'open-main') {
        setWindowsState({
          windows: [{id: 'win1', title: 'Google', url: 'https://www.google.com', active: true}],
          currentHandle: 'CDwindow-ABC123'
        });
      } else if (action === 'open-new') {
        setWindowsState(prev => ({
          ...prev,
          windows: [...prev.windows, {id: 'win2', title: 'New Tab', url: 'about:blank', active: false}]
        }));
      } else if (action === 'switch-new') {
        setWindowsState(prev => ({
          ...prev,
          windows: prev.windows.map(w => ({...w, active: w.id === 'win2'})),
          currentHandle: 'CDwindow-XYZ789'
        }));
      } else if (action === 'nav-github') {
        setWindowsState(prev => ({
          ...prev,
          windows: prev.windows.map(w => w.id === 'win2' ? {...w, title: 'GitHub', url: 'https://github.com'} : w)
        }));
      } else if (action === 'switch-main') {
        setWindowsState(prev => ({
          ...prev,
          windows: prev.windows.map(w => ({...w, active: w.id === 'win1'})),
          currentHandle: 'CDwindow-ABC123'
        }));
      } else if (action === 'close-main') {
        setWindowsState(prev => ({
          ...prev,
          windows: prev.windows.filter(w => w.id !== 'win1').map(w => ({...w, active: true}))
        }));
      }
    }

    setIsRunning(false);
  };

  const getMultipleWindowsCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to first page',
        'driver.get("https://www.google.com")',
        '',
        '# Get main window handle',
        'main_window = driver.current_window_handle',
        '',
        '# Open new window',
        'driver.switch_to.new_window(\'tab\')  # or \'window\'',
        'all_handles = driver.window_handles  # Get all handles',
        '',
        '# Switch to new window',
        'new_window = [h for h in all_handles if h != main_window][0]',
        'driver.switch_to.window(new_window)',
        'driver.get("https://github.com")',
        '',
        '# Switch back to main window',
        'driver.switch_to.window(main_window)',
        '',
        '# Close current window',
        'driver.close()',
        '',
        '# Quit all windows',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import java.util.Set;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.google.com");',
        '',
        '// Get main window handle',
        'String mainWindow = driver.getWindowHandle();',
        '',
        '// Open new window (Selenium 4+)',
        'driver.switchTo().newWindow(WindowType.TAB);  // or WindowType.WINDOW',
        'Set<String> allHandles = driver.getWindowHandles();',
        '',
        '// Switch to new window',
        'for (String handle : allHandles) {',
        '    if (!handle.equals(mainWindow)) {',
        '        driver.switchTo().window(handle);',
        '        driver.get("https://github.com");',
        '    }',
        '}',
        '',
        '// Switch back to main window',
        'driver.switchTo().window(mainWindow);',
        '',
        '// Close current window',
        'driver.close();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.google.com\');',
        '',
        '// Get main window handle',
        'let mainWindow = await driver.getWindowHandle();',
        '',
        '// Open new window',
        'await driver.switchTo().newWindow(\'tab\');  // or \'window\'',
        'let allHandles = await driver.getAllWindowHandles();',
        '',
        '// Switch to new window',
        'for (let handle of allHandles) {',
        '    if (handle !== mainWindow) {',
        '        await driver.switchTo().window(handle);',
        '        await driver.get(\'https://github.com\');',
        '    }',
        '}',
        '',
        '// Switch back to main window',
        'await driver.switchTo().window(mainWindow);',
        '',
        '// Close current window',
        'await driver.close();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const multipleWindowsExample = {
    python: getMultipleWindowsCode('python').join('\n'),
    java: getMultipleWindowsCode('java').join('\n'),
    javascript: getMultipleWindowsCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Multiple Windows & Tabs"
        description="Learn to manage multiple browser windows and tabs"
        icon={Layers}
        category="Selenium · Window Management"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-fuchsia-600" />
            Managing Multiple Windows
          </CardTitle>
          <CardDescription>
            Switch between windows and tabs in Selenium
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Modern web applications often open new windows or tabs. Selenium provides methods to handle multiple windows:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>current_window_handle:</strong> Get current window handle</li>
            <li><strong>window_handles:</strong> Get all window handles</li>
            <li><strong>switch_to.window():</strong> Switch to specific window</li>
            <li><strong>switch_to.new_window():</strong> Open and switch to new window</li>
            <li><strong>close():</strong> Close current window</li>
          </ul>

          <Alert className="border-fuchsia-200 dark:border-fuchsia-700 bg-fuchsia-50 dark:bg-fuchsia-950/20">
            <Layers className="h-5 w-5 text-fuchsia-600" />
            <AlertTitle className="text-fuchsia-900 dark:text-fuchsia-100">Window Handles</AlertTitle>
            <AlertDescription className="text-fuchsia-800 dark:text-fuchsia-200">
              Each window/tab has a unique handle (string ID). Store the main window handle to switch back later.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-fuchsia-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Multiple windows syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-fuchsia-600 text-fuchsia-600 dark:text-fuchsia-400'
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
                {selectedLanguage === 'python' && `# Get current window handle
main_window = driver.current_window_handle

# Get all window handles
all_handles = driver.window_handles
print(f"Total windows: {len(all_handles)}")

# Open new tab (Selenium 4+)
driver.switch_to.new_window('tab')

# Open new window
driver.switch_to.new_window('window')

# Switch to specific window
driver.switch_to.window(main_window)

# Switch to last opened window
driver.switch_to.window(driver.window_handles[-1])

# Close current window
driver.close()

# Quit all windows
driver.quit()`}
                {selectedLanguage === 'java' && `// Get current window handle
String mainWindow = driver.getWindowHandle();

// Get all window handles
Set<String> allHandles = driver.getWindowHandles();
System.out.println("Total windows: " + allHandles.size());

// Open new tab (Selenium 4+)
driver.switchTo().newWindow(WindowType.TAB);

// Open new window
driver.switchTo().newWindow(WindowType.WINDOW);

// Switch to specific window
driver.switchTo().window(mainWindow);

// Iterate through all windows
for (String handle : allHandles) {
    driver.switchTo().window(handle);
    System.out.println(driver.getTitle());
}

// Close current window
driver.close();

// Quit all windows
driver.quit();`}
                {selectedLanguage === 'javascript' && `// Get current window handle
let mainWindow = await driver.getWindowHandle();

// Get all window handles
let allHandles = await driver.getAllWindowHandles();
console.log(\`Total windows: \${allHandles.length}\`);

// Open new tab (Selenium 4+)
await driver.switchTo().newWindow('tab');

// Open new window
await driver.switchTo().newWindow('window');

// Switch to specific window
await driver.switchTo().window(mainWindow);

// Iterate through all windows
for (let handle of allHandles) {
    await driver.switchTo().window(handle);
    console.log(await driver.getTitle());
}

// Close current window
await driver.close();

// Quit all windows
await driver.quit();`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-fuchsia-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch multiple window management in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Multiple Windows Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch window opening, switching, and closing with inline variable values!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/30 dark:to-pink-950/30 p-4 rounded-lg border-2 border-fuchsia-200 dark:border-fuchsia-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />
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
                        ? 'border-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-fuchsia-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-windows"
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
                  <Code className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateMultipleWindows}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
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
                    onClick={() => copyToClipboard(multipleWindowsExample[selectedLanguage], 'Multiple Windows code')}
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
                    {getMultipleWindowsCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-fuchsia-200 dark:bg-fuchsia-900/50 border-l-4 border-fuchsia-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-fuchsia-900 dark:text-fuchsia-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-fuchsia-50 dark:bg-fuchsia-950/30 rounded border border-fuchsia-200 dark:border-fuchsia-700">
                        <div className="text-[10px] font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-fuchsia-800 dark:text-fuchsia-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-fuchsia-600 dark:text-fuchsia-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{multipleWindowsExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Open Windows</h4>
                </div>
                <div className="space-y-2">
                  {windowsState.windows.map((window, index) => (
                    <div
                      key={window.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        window.active
                          ? 'border-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-950/50 shadow-lg'
                          : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4 text-fuchsia-600" />
                          <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                            Window {index + 1}
                          </span>
                        </div>
                        {window.active && (
                          <Badge className="bg-fuchsia-600">Active</Badge>
                        )}
                      </div>
                      <div className="text-xs space-y-1">
                        <div className="font-semibold text-slate-900 dark:text-slate-100">{window.title}</div>
                        <div className="text-slate-600 dark:text-slate-400 font-mono">{window.url}</div>
                      </div>
                    </div>
                  ))}
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Store Main Handle</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always store the main window handle to switch back later
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Close Unused Windows</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Close windows you're done with to free resources
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Wait After Switch</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add waits after switching to ensure page is ready
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use quit() at End</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  quit() closes all windows, close() only closes current
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
              <AlertTitle className="text-red-900 dark:text-red-100">No Such Window Exception</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Window handle no longer valid<br/>
                <strong>Solution:</strong> Window was closed; get fresh handles with window_handles
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Wrong Window Context</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Elements not found after opening new window<br/>
                <strong>Solution:</strong> Switch to the new window before interacting
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Popup Blocked</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> New window doesn't open<br/>
                <strong>Solution:</strong> Disable popup blocker or use switch_to.new_window()
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

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
              <Badge className="bg-yellow-600 mb-2">Switch by Title</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Find Window by Title</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                for handle in driver.window_handles:<br/>
                &nbsp;&nbsp;driver.switch_to.window(handle)<br/>
                &nbsp;&nbsp;if "GitHub" in driver.title:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Close All Except Main</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Close Extra Windows</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                main = driver.current_window_handle<br/>
                for handle in driver.window_handles:<br/>
                &nbsp;&nbsp;if handle != main:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;driver.switch_to.window(handle)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;driver.close()<br/>
                driver.switch_to.window(main)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Wait for New Window</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Wait for Window to Open</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                WebDriverWait(driver, 10).until(<br/>
                &nbsp;&nbsp;EC.number_of_windows_to_be(2)<br/>
                )
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

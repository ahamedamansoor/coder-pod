'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Database,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  HardDrive,
  Key,
  Trash2,
  Plus,
  Eye,
  Settings,
  Zap,
  Clock,
  Shield,
  FolderOpen,
  FileText,
  Layers
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function Storage() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [storageState, setStorageState] = React.useState({
    items: {} as Record<string, string>,
    action: '',
    currentKey: '',
    currentValue: ''
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

  const simulateStorageOperations = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setStorageState({ items: {}, action: '', currentKey: '', currentValue: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, setItem: 7, getItem: 10, removeItem: 13, clearAll: 16, quit: 19 };
      } else if (selectedLanguage === 'java') {
        return { init: 6, setItem: 9, getItem: 12, removeItem: 15, clearAll: 18, quit: 21 };
      } else {
        return { init: 2, setItem: 5, getItem: 8, removeItem: 11, clearAll: 14, quit: 16 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Local Storage demo...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '💾 Setting storage item...', delay: 1200 * multiplier, codeLine: lines.setItem, variable: { name: 'key', value: 'user_session' }, action: 'set' },
      { step: 3, log: '✅ Item set: user_session = abc123xyz', delay: 700 * multiplier, codeLine: lines.setItem, variable: { name: 'value', value: 'abc123xyz' }, storage: { 'user_session': 'abc123xyz' } },
      { step: 4, log: '📊 Getting storage item...', delay: 1200 * multiplier, codeLine: lines.getItem, variable: { name: 'key', value: 'user_session' }, storage: { 'user_session': 'abc123xyz' } },
      { step: 5, log: '✅ Retrieved: abc123xyz', delay: 700 * multiplier, codeLine: lines.getItem, variable: { name: 'retrieved', value: 'abc123xyz' }, storage: { 'user_session': 'abc123xyz' } },
      { step: 6, log: '🗑️ Removing storage item...', delay: 1200 * multiplier, codeLine: lines.removeItem, variable: { name: 'key', value: 'user_session' }, storage: { 'user_session': 'abc123xyz' }, action: 'remove' },
      { step: 7, log: '✅ Item removed', delay: 700 * multiplier, codeLine: lines.removeItem, variable: { name: 'removed', value: 'true' }, storage: {} as Record<string, string>, action: 'removed' },
      { step: 8, log: '🧹 Clearing all storage...', delay: 1200 * multiplier, codeLine: lines.clearAll, variable: { name: 'removed', value: 'true' }, storage: {} as Record<string, string>, action: 'clear' },
      { step: 9, log: '✅ Storage cleared', delay: 700 * multiplier, codeLine: lines.clearAll, variable: { name: 'cleared', value: 'true' }, storage: {} as Record<string, string> },
      { step: 10, log: '🎉 Local Storage demo completed!', delay: 500 * multiplier, codeLine: lines.quit, variable: { name: 'cleared', value: 'true' }, storage: {} as Record<string, string> },
    ];

    for (const { step, log, delay, codeLine, variable, storage, action } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (storage) {
        setStorageState({ 
          items: storage, 
          action: action || '', 
          currentKey: variable?.name || '', 
          currentValue: variable?.value || '' 
        });
      }
    }

    setIsRunning(false);
  };

  const getStorageCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# Set item in local storage',
        'driver.execute_script("window.localStorage.setItem(\'user_session\', \'abc123xyz\')")',
        '',
        '# Get item from local storage',
        'session_id = driver.execute_script("return window.localStorage.getItem(\'user_session\')")',
        '',
        '# Remove item from local storage',
        'driver.execute_script("window.localStorage.removeItem(\'user_session\')")',
        '',
        '# Clear all local storage',
        'driver.execute_script("window.localStorage.clear()")',
        '',
        '# Close browser',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.JavascriptExecutor;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'JavascriptExecutor js = (JavascriptExecutor) driver;',
        '',
        '// Set item in local storage',
        'js.executeScript("window.localStorage.setItem(\'user_session\', \'abc123xyz\')");',
        '',
        '// Get item from local storage',
        'String sessionId = (String) js.executeScript("return window.localStorage.getItem(\'user_session\')");',
        '',
        '// Remove item from local storage',
        'js.executeScript("window.localStorage.removeItem(\'user_session\')");',
        '',
        '// Clear all local storage',
        'js.executeScript("window.localStorage.clear()");',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Set item in local storage',
        'await driver.executeScript("window.localStorage.setItem(\'user_session\', \'abc123xyz\')");',
        '',
        '// Get item from local storage',
        'let sessionId = await driver.executeScript("return window.localStorage.getItem(\'user_session\')");',
        '',
        '// Remove item from local storage',
        'await driver.executeScript("window.localStorage.removeItem(\'user_session\')");',
        '',
        '// Clear all local storage',
        'await driver.executeScript("window.localStorage.clear()");',
        '',
        'await driver.quit();',
      ];
    }
  };

  const storageExample = {
    python: getStorageCode('python').join('\n'),
    java: getStorageCode('java').join('\n'),
    javascript: getStorageCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Local Storage"
        description="Store and retrieve data in browser storage"
        icon={Database}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" />
            Local Storage with JavaScript
          </CardTitle>
          <CardDescription>
            Store key-value pairs persistently in the browser
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Local Storage allows you to store data as key-value pairs that persist across browser sessions. It's useful for saving user preferences, session data, or application state.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Persistent Storage:</strong> Data remains after browser closes</li>
            <li><strong>Key-Value Pairs:</strong> Store strings as keys and values</li>
            <li><strong>Large Capacity:</strong> Up to 5-10MB of storage space</li>
            <li><strong>Same Origin:</strong> Only accessible by same domain</li>
            <li><strong>Client-Side:</strong> Data stored in user's browser</li>
          </ul>

          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Database className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Use Cases</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use local storage to: save user preferences, store session tokens, cache API responses, maintain form data, or remember application state.
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
            Local Storage operations in Python, Java, and JavaScript
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
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Storage Operations</span>
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
                  {selectedLanguage === 'python' && `# 🗄️ Local Storage Operations with Selenium Python

# 1️⃣ Initialize browser and JavaScript executor
from selenium import webdriver
driver = webdriver.Chrome()

# 2️⃣ Set item in local storage
driver.execute_script("window.localStorage.setItem('user_session', 'abc123xyz')")
print("✅ Session token stored")

# 3️⃣ Get item from local storage
session_id = driver.execute_script("return window.localStorage.getItem('user_session')")
print(f"📋 Retrieved session: {session_id}")

# 4️⃣ Update existing item
driver.execute_script("window.localStorage.setItem('user_session', 'updated_xyz789')")
print("🔄 Session token updated")

# 5️⃣ Get all keys
keys = driver.execute_script("return Object.keys(window.localStorage)")
print(f"🔑 Storage keys: {keys}")

# 6️⃣ Remove specific item
driver.execute_script("window.localStorage.removeItem('user_session')")
print("🗑️ Session token removed")

# 7️⃣ Clear all storage
driver.execute_script("window.localStorage.clear()")
print("🧹 All storage cleared")

# 8️⃣ Check if storage is empty
is_empty = driver.execute_script("return window.localStorage.length === 0")
print(f"📊 Storage empty: {is_empty}")

driver.quit()`}
                  {selectedLanguage === 'java' && `// 🗄️ Local Storage Operations with Selenium Java

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.JavascriptExecutor;

// 1️⃣ Initialize browser and JavaScript executor
WebDriver driver = new ChromeDriver();
JavascriptExecutor js = (JavascriptExecutor) driver;

// 2️⃣ Set item in local storage
js.executeScript("window.localStorage.setItem('user_session', 'abc123xyz');");
System.out.println("✅ Session token stored");

// 3️⃣ Get item from local storage
String sessionId = (String) js.executeScript("return window.localStorage.getItem('user_session');");
System.out.println("📋 Retrieved session: " + sessionId);

// 4️⃣ Update existing item
js.executeScript("window.localStorage.setItem('user_session', 'updated_xyz789');");
System.out.println("🔄 Session token updated");

// 5️⃣ Get all keys
Object[] keys = (Object[]) js.executeScript("return Object.keys(window.localStorage);");
System.out.println("🔑 Storage keys: " + java.util.Arrays.toString(keys));

// 6️⃣ Remove specific item
js.executeScript("window.localStorage.removeItem('user_session');");
System.out.println("🗑️ Session token removed");

// 7️⃣ Clear all storage
js.executeScript("window.localStorage.clear();");
System.out.println("🧹 All storage cleared");

// 8️⃣ Check if storage is empty
Boolean isEmpty = (Boolean) js.executeScript("return window.localStorage.length === 0;");
System.out.println("📊 Storage empty: " + isEmpty);

driver.quit();`}
                  {selectedLanguage === 'javascript' && `// 🗄️ Local Storage Operations with Selenium JavaScript

const { Builder, By } = require('selenium-webdriver');

// 1️⃣ Initialize browser
let driver = await new Builder().forBrowser('chrome').build();

// 2️⃣ Set item in local storage
await driver.executeScript("window.localStorage.setItem('user_session', 'abc123xyz');");
console.log("✅ Session token stored");

// 3️⃣ Get item from local storage
let sessionId = await driver.executeScript("return window.localStorage.getItem('user_session');");
console.log(\`📋 Retrieved session: \${sessionId}\`);

// 4️⃣ Update existing item
await driver.executeScript("window.localStorage.setItem('user_session', 'updated_xyz789');");
console.log("🔄 Session token updated");

// 5️⃣ Get all keys
let keys = await driver.executeScript("return Object.keys(window.localStorage);");
console.log(\`🔑 Storage keys: \${keys}\`);

// 6️⃣ Remove specific item
await driver.executeScript("window.localStorage.removeItem('user_session');");
console.log("🗑️ Session token removed");

// 7️⃣ Clear all storage
await driver.executeScript("window.localStorage.clear();");
console.log("🧹 All storage cleared");

// 8️⃣ Check if storage is empty
let isEmpty = await driver.executeScript("return window.localStorage.length === 0;");
console.log(\`📊 Storage empty: \${isEmpty}\`);

await driver.quit();`}
                </code>
              </pre>
            </div>
            
            <div className="mt-4 grid grid-cols-4 gap-2">
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-2 text-center">
                <div className="text-blue-600 dark:text-blue-400 text-lg mb-1">💾</div>
                <div className="text-xs font-medium text-blue-900 dark:text-blue-100">Set Item</div>
                <div className="text-[10px] text-blue-700 dark:text-blue-300">localStorage.setItem()</div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-2 text-center">
                <div className="text-green-600 dark:text-green-400 text-lg mb-1">📋</div>
                <div className="text-xs font-medium text-green-900 dark:text-green-100">Get Item</div>
                <div className="text-[10px] text-green-700 dark:text-green-300">localStorage.getItem()</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-2 text-center">
                <div className="text-orange-600 dark:text-orange-400 text-lg mb-1">🗑️</div>
                <div className="text-xs font-medium text-orange-900 dark:text-orange-100">Remove Item</div>
                <div className="text-[10px] text-orange-700 dark:text-orange-300">localStorage.removeItem()</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-2 text-center">
                <div className="text-purple-600 dark:text-purple-400 text-lg mb-1">🧹</div>
                <div className="text-xs font-medium text-purple-900 dark:text-purple-100">Clear All</div>
                <div className="text-[10px] text-purple-700 dark:text-purple-300">localStorage.clear()</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch local storage operations in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Storage Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch storage operations with inline variable values. Adjust speed and click "Run Demo"!
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
                      name="speed-storage"
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
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateStorageOperations}
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
                    onClick={() => copyToClipboard(storageExample[selectedLanguage], 'Local Storage code')}
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
                    {getStorageCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{storageExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Storage Preview</h4>
                  <Badge variant="outline" className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                    Live
                  </Badge>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 overflow-hidden shadow-lg">
                  {/* Storage Header */}
                  <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <HardDrive className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-semibold text-white">Local Storage</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-white/80">Active</span>
                        <Badge variant="outline" className="text-xs bg-white/10 text-white border-white/20">
                          {Object.keys(storageState.items).length} items
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Storage Content */}
                  <div className="p-6 min-h-[400px] bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                    {/* Storage Visualization */}
                    <div className="space-y-4">
                      {/* Storage Items */}
                      <div className="space-y-3">
                        {Object.keys(storageState.items).length > 0 ? (
                          Object.entries(storageState.items).map(([key, value], index) => (
                            <div 
                              key={key}
                              className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                      <Key className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <span className="text-sm font-bold text-blue-900 dark:text-blue-100 font-mono">
                                      {key}
                                    </span>
                                    <Badge variant="outline" className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                                      Key
                                    </Badge>
                                  </div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                      <FileText className="w-3 h-3 text-green-600 dark:text-green-400" />
                                    </div>
                                    <span className="text-sm font-mono text-green-900 dark:text-green-100">
                                      {value}
                                    </span>
                                    <Badge variant="outline" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                                      Value
                                    </Badge>
                                  </div>
                                  <div className="text-xs text-slate-600 dark:text-slate-400">
                                    Size: {new Blob([value]).size} bytes
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{index + 1}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-12">
                            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                              <HardDrive className="w-8 h-8 text-slate-400 dark:text-slate-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                              Storage is Empty
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              No items stored in local storage
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Current Operation */}
                      {storageState.action && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                {storageState.action === 'set' && <Plus className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                                {storageState.action === 'remove' && <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />}
                                {storageState.action === 'clear' && <RefreshCw className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
                                {storageState.action === 'removed' && <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />}
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                                  {storageState.action === 'set' && 'Item Added'}
                                  {storageState.action === 'remove' && 'Item Removed'}
                                  {storageState.action === 'clear' && 'Storage Cleared'}
                                  {storageState.action === 'removed' && 'Item Deleted'}
                                </div>
                                <div className="text-xs text-blue-700 dark:text-blue-300">
                                  {storageState.currentKey && `Key: ${storageState.currentKey}`}
                                  {storageState.currentValue && ` | Value: ${storageState.currentValue}`}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-xs text-green-600 dark:text-green-400">Success</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Storage Statistics */}
                      <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                          <Database className="w-3 h-3" />
                          Storage Statistics
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Total Items:</span>
                              <span className="font-mono text-blue-600 dark:text-blue-400">{Object.keys(storageState.items).length}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Storage Type:</span>
                              <span className="font-mono text-green-600 dark:text-green-400">Local Storage</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Total Size:</span>
                              <span className="font-mono text-purple-600 dark:text-purple-400">
                                {Object.values(storageState.items).reduce((acc, val) => acc + new Blob([val]).size, 0)} bytes
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Persistence:</span>
                              <span className="font-mono text-orange-600 dark:text-orange-400">Permanent</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
            <Database className="w-5 h-5 text-green-600" />
            Storage Methods
          </CardTitle>
          <CardDescription>Essential local storage operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Set Item</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">localStorage.setItem()</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("localStorage.setItem('key', 'value')")
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Get Item</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">localStorage.getItem()</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("return localStorage.getItem('key')")
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-600 mb-2">Remove Item</Badge>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">localStorage.removeItem()</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("localStorage.removeItem('key')")
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">Clear All</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">localStorage.clear()</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.execute_script("localStorage.clear()")
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">String Values Only</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Local storage only stores strings - serialize objects as JSON
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Error Handling</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Check for storage availability and handle quota exceeded errors
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Data Validation</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Validate data before storing and after retrieving
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Security</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Don't store sensitive data - accessible via JavaScript
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Storage Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Store Objects</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">JSON Serialization</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Store object<br/>
                data = {"{'user': 'john', 'age': 30}"}<br/>
                driver.execute_script("localStorage.setItem('user', JSON.stringify(arguments[0]))", data)<br/>
                <br/>
                # Retrieve object<br/>
                user_data = driver.execute_script("return JSON.parse(localStorage.getItem('user'))")
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Storage Events</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Listen for Changes</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Add storage event listener<br/>
                driver.execute_script(<br/>
                &nbsp;&nbsp;"window.addEventListener('storage', function(e) " + String.fromCharCode(123) +<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;"console.log('Storage changed:', e.key, e.oldValue, e.newValue); " + String.fromCharCode(125) + ");"<br/>
                )
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Session Storage</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Temporary Storage</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # Use sessionStorage for temporary data<br/>
                driver.execute_script("sessionStorage.setItem('temp', 'data')")<br/>
                # Data cleared when browser tab closes
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';
import { 
  AlertTriangle,
  AppWindow,
  ArrowLeftRight,
  CheckCircle,
  CheckCircle2,
  Code,
  Copy,
  GitBranch,
  Globe,
  Info,
  Lightbulb,
  Monitor,
  NotebookTabs,
  Plus,
  Shield,
  Square,
  SquareDashed,
  Star,
  Target,
  Users,
  XCircle,
  Zap,
} from 'lucide-react';

const NewWindowTabApis = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [windows, setWindows] = useState<Array<{ id: string; title: string; type: 'window' | 'tab'; active: boolean }>>([
    { id: 'main', title: 'Main Window', type: 'window', active: true }
  ]);
  const [logs, setLogs] = useState<Array<{ timestamp: string; message: string; type: 'info' | 'success' | 'error' }>>([]);

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'new-window-tab-apis',
    title: 'New Window & Tab APIs',
    explanation: 'New APIs for window and tab management',
    category: '27. Selenium 4 Features'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  const addLog = (message: string, type: 'info' | 'success' | 'error' = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { timestamp, message, type }]);
  };

  const copyToClipboard = async (code: string, codeId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(codeId);
      setTimeout(() => setCopiedCode(null), 2000);
      addLog('Code copied to clipboard', 'success');
    } catch (err) {
      addLog('Failed to copy code', 'error');
    }
  };

  const simulateNewWindow = () => {
    const newWindow = {
      id: `window-${Date.now()}`,
      title: `New Window ${windows.filter(w => w.type === 'window').length + 1}`,
      type: 'window' as const,
      active: false
    };
    setWindows(prev => [...prev, newWindow]);
    addLog(`Created new window: ${newWindow.title}`, 'success');
  };

  const simulateNewTab = () => {
    const newTab = {
      id: `tab-${Date.now()}`,
      title: `New Tab ${windows.filter(w => w.type === 'tab').length + 1}`,
      type: 'tab' as const,
      active: false
    };
    setWindows(prev => [...prev, newTab]);
    addLog(`Created new tab: ${newTab.title}`, 'success');
  };

  const simulateSwitchWindow = (windowId: string) => {
    setWindows(prev => prev.map(w => ({ ...w, active: w.id === windowId })));
    const window = windows.find(w => w.id === windowId);
    if (window) {
      addLog(`Switched to: ${window.title}`, 'info');
    }
  };

  const simulateCloseWindow = (windowId: string) => {
    if (windowId === 'main') {
      addLog('Cannot close main window', 'error');
      return;
    }
    const window = windows.find(w => w.id === windowId);
    if (window) {
      setWindows(prev => prev.filter(w => w.id !== windowId));
      addLog(`Closed: ${window.title}`, 'info');
    }
  };

  useEffect(() => {
    addLog('New Window & Tab APIs component initialized', 'info');
  }, []);

  const codeExamples = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.window import WindowTypes

driver = webdriver.Chrome()

# Get original window handle
original_window = driver.current_window_handle

# Open new window
driver.switch_to.new_window(WindowTypes.WINDOW)
print("New window opened:", driver.current_window_handle)

# Open new tab
driver.switch_to.new_window(WindowTypes.TAB)
print("New tab opened:", driver.current_window_handle)

# Switch back to original window
driver.switch_to.window(original_window)
print("Switched back to original window")

# Close current window/tab
driver.close()

# Get all window handles
all_windows = driver.window_handles
print("All windows:", all_windows)`,

    javascript: `const { Builder, WindowType } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  
  // Get original window handle
  const originalWindow = await driver.getWindowHandle();
  console.log('Original window:', originalWindow);
  
  // Open new window
  await driver.switchTo().newWindow(WindowType.WINDOW);
  const newWindow = await driver.getWindowHandle();
  console.log('New window:', newWindow);
  
  // Open new tab
  await driver.switchTo().newWindow(WindowType.TAB);
  const newTab = await driver.getWindowHandle();
  console.log('New tab:', newTab);
  
  // Switch back to original window
  await driver.switchTo().window(originalWindow);
  console.log('Switched back to original window');
  
  // Get all window handles
  const allWindows = await driver.getAllWindowHandles();
  console.log('All windows:', allWindows);
  
  await driver.quit();
})();`,

    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.chrome.ChromeDriver;

public class WindowTabExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        
        // Get original window handle
        String originalWindow = driver.getWindowHandle();
        System.out.println("Original window: " + originalWindow);
        
        // Open new window
        driver.switchTo().newWindow(WindowType.WINDOW);
        String newWindow = driver.getWindowHandle();
        System.out.println("New window: " + newWindow);
        
        // Open new tab
        driver.switchTo().newWindow(WindowType.TAB);
        String newTab = driver.getWindowHandle();
        System.out.println("New tab: " + newTab);
        
        // Switch back to original window
        driver.switchTo().window(originalWindow);
        System.out.println("Switched back to original window");
        
        // Get all window handles
        Set<String> allWindows = driver.getWindowHandles();
        System.out.println("All windows: " + allWindows);
        
        driver.quit();
    }
}`,

    csharp: `using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace WindowTabExample
{
    class Program
    {
        static void Main(string[] args)
        {
            IWebDriver driver = new ChromeDriver();
            
            // Get original window handle
            string originalWindow = driver.CurrentWindowHandle;
            Console.WriteLine("Original window: " + originalWindow);
            
            // Open new window
            driver.SwitchTo().NewWindow(WindowType.Window);
            string newWindow = driver.CurrentWindowHandle;
            Console.WriteLine("New window: " + newWindow);
            
            // Open new tab
            driver.SwitchTo().NewWindow(WindowType.Tab);
            string newTab = driver.CurrentWindowHandle;
            Console.WriteLine("New tab: " + newTab);
            
            // Switch back to original window
            driver.SwitchTo().Window(originalWindow);
            Console.WriteLine("Switched back to original window");
            
            // Get all window handles
            var allWindows = driver.WindowHandles;
            Console.WriteLine("All windows: " + string.Join(", ", allWindows));
            
            driver.Quit();
        }
    }
}`
  };

  const features = [
    {
      title: 'Simplified Window Creation',
      description: 'Direct methods to create new windows and tabs without JavaScript',
      icon: Plus,
      color: 'text-blue-600'
    },
    {
      title: 'Type-Specific Operations',
      description: 'Explicit control over window vs tab creation',
      icon: NotebookTabs,
      color: 'text-green-600'
    },
    {
      title: 'Enhanced Window Management',
      description: 'Better handle management and switching between contexts',
      icon: Monitor,
      color: 'text-purple-600'
    },
    {
      title: 'Cross-Browser Support',
      description: 'Consistent behavior across Chrome, Firefox, Edge, and Safari',
      icon: Globe,
      color: 'text-orange-600'
    },
    {
      title: 'Improved Performance',
      description: 'Faster window/tab operations with native browser APIs',
      icon: Zap,
      color: 'text-red-600'
    },
    {
      title: 'Better Error Handling',
      description: 'More reliable error handling for window operations',
      icon: Shield,
      color: 'text-indigo-600'
    }
  ];

  const apiMethods = [
    {
      name: 'switchTo().newWindow(WindowType.WINDOW)',
      description: 'Opens a new browser window',
      example: 'driver.switchTo().newWindow(WindowType.WINDOW)',
      language: 'All',
      returns: 'void - switches to new window'
    },
    {
      name: 'switchTo().newWindow(WindowType.TAB)',
      description: 'Opens a new browser tab',
      example: 'driver.switchTo().newWindow(WindowType.TAB)',
      language: 'All',
      returns: 'void - switches to new tab'
    },
    {
      name: 'getWindowHandle()',
      description: 'Gets current window handle',
      example: 'driver.getWindowHandle()',
      language: 'All',
      returns: 'String - current window handle'
    },
    {
      name: 'getWindowHandles()',
      description: 'Gets all window handles',
      example: 'driver.getWindowHandles()',
      language: 'All',
      returns: 'Set<String> - all window handles'
    },
    {
      name: 'switchTo().window(handle)',
      description: 'Switches to specific window',
      example: 'driver.switchTo().window(handle)',
      language: 'All',
      returns: 'void - switches to specified window'
    },
    {
      name: 'close()',
      description: 'Closes current window/tab',
      example: 'driver.close()',
      language: 'All',
      returns: 'void - closes current window'
    }
  ];

  const useCases = [
    {
      title: 'Multi-Tab Testing',
      description: 'Test applications that open multiple tabs for navigation',
      icon: NotebookTabs,
      example: 'E-commerce sites opening product details in new tabs',
      difficulty: 'Beginner'
    },
    {
      title: 'Popup Window Handling',
      description: 'Handle popup windows for authentication or additional information',
      icon: AppWindow,
      example: 'Login popups, confirmation dialogs, help windows',
      difficulty: 'Intermediate'
    },
    {
      title: 'Parallel Test Execution',
      description: 'Run tests in multiple windows simultaneously',
      icon: Users,
      example: 'Load testing with multiple user sessions',
      difficulty: 'Advanced'
    },
    {
      title: 'Cross-Window Data Transfer',
      description: 'Transfer data between different browser contexts',
      icon: ArrowLeftRight,
      example: 'Form data sharing between windows',
      difficulty: 'Intermediate'
    }
  ];

  const comparisonData = [
    {
      aspect: 'Window Creation',
      oldWay: 'driver.execute_script("window.open()")',
      newWay: 'driver.switchTo().newWindow(WindowType.WINDOW)',
      improvement: 'Type-safe, no JavaScript needed'
    },
    {
      aspect: 'Tab Creation',
      oldWay: 'driver.execute_script("window.open(\'\', \'_blank\')")',
      newWay: 'driver.switchTo().newWindow(WindowType.TAB)',
      improvement: 'Explicit tab creation'
    },
    {
      aspect: 'Error Handling',
      oldWay: 'Manual exception handling for JavaScript errors',
      newWay: 'Built-in WebDriver exceptions',
      improvement: 'Better error messages and handling'
    },
    {
      aspect: 'Cross-Browser',
      oldWay: 'Inconsistent behavior across browsers',
      newWay: 'Standardized API across all browsers',
      improvement: 'Consistent behavior'
    },
    {
      aspect: 'Performance',
      oldWay: 'JavaScript execution overhead',
      newWay: 'Native browser API calls',
      improvement: 'Faster execution'
    }
  ];

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="New Window & Tab APIs"
        description="Modern APIs for efficient window and tab management in Selenium 4"
        icon={AppWindow}
        category="Selenium · Window Management"
        colorTheme="blue"
      />

      {/* What's New Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5" />
            <span>What's New in Selenium 4?</span>
          </CardTitle>
          <CardDescription>
            Understanding the evolution of window and tab management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="text-base leading-relaxed">
              Selenium 4 introduced <strong>native APIs</strong> for creating and managing windows and tabs, 
              eliminating the need for JavaScript execution. The new <code>switchTo().newWindow()</code> method 
              provides a cleaner, more reliable way to handle multi-window scenarios.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                🚀 Key Benefit: No more JavaScript injection for window operations! 
                The new APIs use native browser capabilities for better performance and reliability.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Monitor className="w-5 h-5" />
            <span>Interactive Window/Tab Demo</span>
          </CardTitle>
          <CardDescription>
            See the new window and tab APIs in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Button
              onClick={simulateNewWindow}
              className="flex items-center space-x-2"
            >
              <AppWindow className="w-4 h-4" />
              <span>New Window</span>
            </Button>
            <Button
              onClick={simulateNewTab}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <NotebookTabs className="w-4 h-4" />
              <span>New Tab</span>
            </Button>
          </div>

          {/* Window Manager */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 className="font-medium text-sm mb-3">Window Manager</h4>
            <div className="space-y-2">
              {windows.map((window) => (
                <div
                  key={window.id}
                  className={`flex items-center justify-between p-2 rounded ${
                    window.active ? 'bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700' : 'bg-white dark:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {window.type === 'window' ? (
                      <Square className="w-4 h-4" />
                    ) : (
                      <SquareDashed className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">{window.title}</span>
                    {window.active && (
                      <Badge variant="secondary" className="text-xs">Active</Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {!window.active && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => simulateSwitchWindow(window.id)}
                      >
                        Switch
                      </Button>
                    )}
                    {window.id !== 'main' && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => simulateCloseWindow(window.id)}
                      >
                        Close
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Log */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 h-48 overflow-y-auto">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-sm">Event Log</h4>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setLogs([])}
              >
                Clear
              </Button>
            </div>
            <div className="space-y-1">
              {logs.map((log, index) => (
                <div key={index} className="flex items-start space-x-2 text-xs">
                  <span className="text-gray-500 dark:text-gray-400 font-mono">{log.timestamp}</span>
                  <span className={`flex items-center space-x-1 ${
                    log.type === 'success' ? 'text-green-600' : 
                    log.type === 'error' ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {log.type === 'success' && <CheckCircle2 className="w-3 h-3" />}
                    {log.type === 'error' && <XCircle className="w-3 h-3" />}
                    {log.type === 'info' && <Info className="w-3 h-3" />}
                    <span>{log.message}</span>
                  </span>
                </div>
              ))}
              {logs.length === 0 && (
                <div className="text-gray-400 dark:text-gray-500 text-center py-4">
                  No events yet. Try creating windows or tabs.
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="w-5 h-5" />
            <span>API Methods Reference</span>
          </CardTitle>
          <CardDescription>
            Complete reference for new window and tab APIs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {apiMethods.map((method, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-mono text-sm font-semibold mb-2">{method.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{method.description}</p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs font-mono mb-2">
                      {method.example}
                    </div>
                    <div className="flex items-center space-x-4 text-xs">
                      <span className="text-blue-600">Language: {method.language}</span>
                      <span className="text-green-600">Returns: {method.returns}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="w-5 h-5" />
            <span>Code Examples</span>
          </CardTitle>
          <CardDescription>
            Practical examples in different programming languages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(codeExamples).map(([language, code]) => (
              <div key={language} className="border rounded-lg">
                <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b flex items-center justify-between">
                  <span className="font-medium capitalize">{language}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(code, language)}
                  >
                    {copiedCode === language ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <pre className="p-4 text-sm overflow-x-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                  <code>{code}</code>
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span>Common Use Cases</span>
          </CardTitle>
          <CardDescription>
            Practical scenarios where new window/tab APIs shine
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">{useCase.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {useCase.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {useCase.description}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-xs">
                    <strong>Example:</strong> {useCase.example}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GitBranch className="w-5 h-5" />
            <span>Old vs New API Comparison</span>
          </CardTitle>
          <CardDescription>
            See how the new APIs improve upon traditional approaches
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Aspect</th>
                  <th className="text-left p-3 font-semibold">Old Way (JavaScript)</th>
                  <th className="text-left p-3 font-semibold">New Way (Native API)</th>
                  <th className="text-left p-3 font-semibold">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="p-3 font-medium">{row.aspect}</td>
                    <td className="p-3 text-sm font-mono">{row.oldWay}</td>
                    <td className="p-3 text-sm font-mono">{row.newWay}</td>
                    <td className="p-3 text-sm text-green-600">{row.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="w-5 h-5" />
            <span>Best Practices</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-600">Do's</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Use newWindow() for explicit window/tab creation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Store window handles for later switching</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Close windows when no longer needed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Use try-finally to ensure cleanup</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-red-600">Don'ts</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't mix old JavaScript methods with new APIs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't assume window handles are sequential</span>
                </li>
                <li className="flex items-start space-x-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't forget to switch back to original window</span>
                </li>
                <li className="flex items-start space-x-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't close the main window accidentally</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Alert>
        <AlertTriangle className="w-4 h-4" />
        <AlertTitle>Important Notes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>New window/tab APIs require Selenium 4.0 or later</li>
            <li>WindowType enum is available in Java, C#, and Python bindings</li>
            <li>JavaScript uses WindowType object with WINDOW and TAB properties</li>
            <li>Browser support may vary for advanced window operations</li>
            <li>Always verify window handles before switching to avoid errors</li>
          </ul>
        </AlertDescription>
      </Alert>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
};

export default NewWindowTabApis;

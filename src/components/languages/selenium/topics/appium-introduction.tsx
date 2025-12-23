'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Smartphone,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  Settings,
  Zap,
  Clock,
  Shield,
  Tablet,
  Laptop,
  Apple,
  Globe,
  BookOpen,
  Target,
  Layers,
  Terminal,
  Rocket,
  Puzzle,
  Cpu,
  Wifi
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function AppiumIntroductionComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);
  const [speed, setSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = useState<number>(-1);
  const [liveVariables, setLiveVariables] = useState<Record<string, string>>({});
  const [appiumState, setAppiumState] = useState({
    server: '',
    device: '',
    platform: '',
    status: ''
  });

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.4;
      default: return 1;
    }
  };

  const simulateAppiumDemo = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setAppiumState({ server: '', device: '', platform: '', status: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, server: 7, capabilities: 10, driver: 13, test: 16, quit: 19 };
      } else if (selectedLanguage === 'java') {
        return { init: 6, server: 9, capabilities: 12, driver: 15, test: 18, quit: 21 };
      } else {
        return { init: 2, server: 5, capabilities: 8, driver: 11, test: 14, quit: 16 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Appium demo...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '🌐 Setting up Appium server...', delay: 600 * multiplier, codeLine: lines.init, variable: { name: 'appium', value: '<AppiumServer>' }, appium: { server: 'http://localhost:4723', device: '', platform: '', status: 'Starting' } },
      { step: 2, log: '⚙️ Configuring desired capabilities...', delay: 1200 * multiplier, codeLine: lines.server, variable: { name: 'server', value: 'http://localhost:4723' }, appium: { server: 'http://localhost:4723', device: '', platform: '', status: 'Configuring' } },
      { step: 3, log: '📱 Setting device capabilities...', delay: 700 * multiplier, codeLine: lines.capabilities, variable: { name: 'capabilities', value: 'Android 12' }, appium: { server: 'http://localhost:4723', device: 'Pixel 4', platform: 'Android', status: 'Ready' } },
      { step: 4, log: '🔗 Connecting to device...', delay: 1200 * multiplier, codeLine: lines.driver, variable: { name: 'driver', value: '<AppiumDriver>' }, appium: { server: 'http://localhost:4723', device: 'Pixel 4', platform: 'Android', status: 'Connected' } },
      { step: 5, log: '✅ Device connected successfully', delay: 700 * multiplier, codeLine: lines.driver, variable: { name: 'session', value: 'active' }, appium: { server: 'http://localhost:4723', device: 'Pixel 4', platform: 'Android', status: 'Active' } },
      { step: 6, log: '🧪 Running mobile test...', delay: 1200 * multiplier, codeLine: lines.test, variable: { name: 'test', value: 'running' }, appium: { server: 'http://localhost:4723', device: 'Pixel 4', platform: 'Android', status: 'Testing' } },
      { step: 7, log: '✅ Mobile test completed', delay: 700 * multiplier, codeLine: lines.test, variable: { name: 'result', value: 'passed' }, appium: { server: 'http://localhost:4723', device: 'Pixel 4', platform: 'Android', status: 'Completed' } },
      { step: 8, log: '🎉 Appium demo completed!', delay: 500 * multiplier, codeLine: lines.quit, variable: { name: 'completed', value: 'true' }, appium: { server: '', device: '', platform: '', status: 'Stopped' } },
    ];

    for (const { step, log, delay, codeLine, variable, appium } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (appium) {
        setAppiumState(appium);
      }
    }

    setIsRunning(false);
  };

  const getAppiumCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from appium import webdriver',
        'from appium.webdriver.common.appiumby import AppiumBy',
        '',
        '# Set up Appium server capabilities',
        'caps = {',
        '    "platformName": "Android",',
        '    "deviceName": "Pixel 4",',
        '    "appPackage": "com.example.app",',
        '    "appActivity": ".MainActivity"',
        '}',
        '',
        '# Initialize Appium driver',
        'driver = webdriver.Remote("http://localhost:4723/wd/hub", caps)',
        '',
        '# Find and interact with mobile element',
        'button = driver.find_element(AppiumBy.ID, "login_button")',
        'button.click()',
        '',
        '# Verify element',
        'title = driver.find_element(AppiumBy.ID, "title")',
        'assert title.is_displayed()',
        '',
        '# Close driver',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import io.appium.java_client.AppiumDriver;',
        'import io.appium.java_client.MobileElement;',
        'import io.appium.java_client.android.AndroidDriver;',
        'import org.openqa.selenium.remote.DesiredCapabilities;',
        'import java.net.URL;',
        '',
        '// Set up Appium server capabilities',
        'DesiredCapabilities caps = new DesiredCapabilities();',
        'caps.setCapability("platformName", "Android");',
        'caps.setCapability("deviceName", "Pixel 4");',
        'caps.setCapability("appPackage", "com.example.app");',
        'caps.setCapability("appActivity", ".MainActivity");',
        '',
        '// Initialize Appium driver',
        'AppiumDriver<MobileElement> driver = new AndroidDriver<>(new URL("http://localhost:4723/wd/hub"), caps);',
        '',
        '// Find and interact with mobile element',
        'MobileElement button = driver.findElement(MobileBy.id("login_button"));',
        'button.click();',
        '',
        '// Verify element',
        'MobileElement title = driver.findElement(MobileBy.id("title"));',
        'assert title.isDisplayed();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const wd = require(\'wd\');',
        '',
        '// Set up Appium server capabilities',
        'const caps = {',
        '  platformName: \'Android\',',
        '  deviceName: \'Pixel 4\',',
        '  appPackage: \'com.example.app\',',
        '  appActivity: \'.MainActivity\'',
        '};',
        '',
        '// Initialize Appium driver',
        'let driver = await wd.promiseChainRemote(\'http://localhost:4723/wd/hub\');',
        'await driver.init(caps);',
        '',
        '// Find and interact with mobile element',
        'let button = await driver.elementById(\'login_button\');',
        'await button.click();',
        '',
        '// Verify element',
        'let title = await driver.elementById(\'title\');',
        'await title.isDisplayed();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const appiumExample = {
    python: getAppiumCode('python').join('\n'),
    java: getAppiumCode('java').join('\n'),
    javascript: getAppiumCode('javascript').join('\n'),
  };

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'appium-introduction',
    title: 'Appium Introduction',
    explanation: 'Introduction to Appium for mobile app testing',
    category: '25. Mobile Web Testing'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        title="Appium Mobile Testing"
        description="Master cross-platform mobile automation with Appium - test iOS, Android, and Windows apps with a single codebase"
        icon={Smartphone}
        colorTheme="green"
        badges={[
          { label: 'Mobile Testing', variant: 'secondary' },
          { label: 'Cross-Platform', variant: 'secondary' },
          { label: 'No Code Changes', variant: 'secondary' }
        ]}
      />

      {/* Learning Path Section */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-green-700 dark:text-green-300">
            <BookOpen className="w-6 h-6" />
            Learning Journey
          </CardTitle>
          <CardDescription>
            Follow this structured path to master Appium mobile testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Understand Basics', desc: 'What is Appium and why use it', icon: Target, status: 'completed' },
              { step: '2', title: 'Setup Environment', desc: 'Install Appium and configure devices', icon: Settings, status: 'current' },
              { step: '3', title: 'Write Tests', desc: 'Create your first mobile automation script', icon: Code, status: 'upcoming' },
              { step: '4', title: 'Advanced Features', desc: 'Master gestures, parallel testing, and more', icon: Rocket, status: 'upcoming' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className={`p-4 rounded-lg border-2 transition-all ${
                  item.status === 'completed' ? 'border-green-500 bg-green-100 dark:bg-green-900/30' :
                  item.status === 'current' ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/30 animate-pulse' :
                  'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/30'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      item.status === 'completed' ? 'bg-green-500 text-white' :
                      item.status === 'current' ? 'bg-blue-500 text-white' :
                      'bg-gray-400 text-white'
                    }`}>
                      {item.step}
                    </div>
                    <item.icon className={`w-5 h-5 ${
                      item.status === 'completed' ? 'text-green-600' :
                      item.status === 'current' ? 'text-blue-600' :
                      'text-gray-500'
                    }`} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-green-600 dark:text-green-400">
            <Smartphone className="w-6 h-6" />
            What is Appium?
          </CardTitle>
          <CardDescription>
            Understanding the power of cross-platform mobile automation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Appium</strong> is an open-source automation framework that allows you to write tests for native, hybrid, and mobile web applications using the same API across iOS, Android, and Windows platforms.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  {[
                    'Write once, run on multiple platforms',
                    'No app code modification required',
                    'Supports all programming languages',
                    'Works with native, hybrid, and mobile web apps',
                    'Integrates with existing test frameworks'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Architecture
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-green-200 dark:border-green-700">
                    <Terminal className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium text-sm">Client Server</div>
                      <div className="text-xs text-muted-foreground">WebDriver protocol</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-green-200 dark:border-green-700">
                    <Cpu className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-sm">Session Management</div>
                      <div className="text-xs text-muted-foreground">Device automation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-green-200 dark:border-green-700">
                    <Puzzle className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-medium text-sm">Vendor Extensions</div>
                      <div className="text-xs text-muted-foreground">Platform-specific features</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-green-600 dark:text-green-400">
            <Code className="w-6 h-6" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Learn Appium with practical examples in your preferred language
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6 border-b">
            {(['python', 'java', 'javascript'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-6 py-3 font-medium capitalize transition-all rounded-t-lg ${
                  selectedLanguage === lang
                    ? 'bg-green-600 text-white border-b-2 border-green-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {lang === 'python' && '🐍 Python'}
                {lang === 'java' && '☕ Java'}
                {lang === 'javascript' && '🟨 JavaScript'}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Complete Appium Test Script</span>
              </div>
              <Badge variant="outline" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                {selectedLanguage === 'python' && '🐍 Python'}
                {selectedLanguage === 'java' && '☕ Java'}
                {selectedLanguage === 'javascript' && '🟨 JavaScript'}
              </Badge>
            </div>
            
            <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-green-200 dark:border-green-700">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-300">
                  {selectedLanguage === 'python' && `# 📱 Appium Mobile Automation with Python

# 1️⃣ Import required libraries
from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy

# 2️⃣ Set up device capabilities
caps = {
    "platformName": "Android",
    "deviceName": "Pixel 4",
    "appPackage": "com.example.app",
    "appActivity": ".MainActivity"
}
print("✅ Capabilities configured")

# 3️⃣ Initialize Appium driver
driver = webdriver.Remote("http://localhost:4723/wd/hub", caps)
print("📱 Appium driver initialized")

# 4️⃣ Find and interact with mobile element
button = driver.find_element(AppiumBy.ID, "login_button")
button.click()
print("🔘 Button clicked")

# 5️⃣ Verify mobile element
title = driver.find_element(AppiumBy.ID, "title")
assert title.is_displayed()
print("✅ Element verified")

# 6️⃣ Close driver
driver.quit()`}
                  {selectedLanguage === 'java' && `// 📱 Appium Mobile Automation with Java

// 1️⃣ Import required libraries
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

// 2️⃣ Set up device capabilities
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("platformName", "Android");
caps.setCapability("deviceName", "Pixel 4");
caps.setCapability("appPackage", "com.example.app");
caps.setCapability("appActivity", ".MainActivity");
System.out.println("✅ Capabilities configured");

// 3️⃣ Initialize Appium driver
AppiumDriver<MobileElement> driver = new AndroidDriver<>(new URL("http://localhost:4723/wd/hub"), caps);
System.out.println("📱 Appium driver initialized");

// 4️⃣ Find and interact with mobile element
MobileElement button = driver.findElement(MobileBy.id("login_button"));
button.click();
System.out.println("🔘 Button clicked");

// 5️⃣ Verify mobile element
MobileElement title = driver.findElement(MobileBy.id("title"));
assert title.isDisplayed();
System.out.println("✅ Element verified");

// 6️⃣ Close driver
driver.quit();`}
                  {selectedLanguage === 'javascript' && `// 📱 Appium Mobile Automation with JavaScript

// 1️⃣ Import required library
const wd = require('wd');

// 2️⃣ Set up device capabilities
const caps = {
  platformName: 'Android',
  deviceName: 'Pixel 4',
  appPackage: 'com.example.app',
  appActivity: '.MainActivity'
};
console.log('✅ Capabilities configured');

// 3️⃣ Initialize Appium driver
let driver = await wd.promiseChainRemote('http://localhost:4723/wd/hub');
await driver.init(caps);
console.log('📱 Appium driver initialized');

// 4️⃣ Find and interact with mobile element
let button = await driver.elementById('login_button');
await button.click();
console.log('🔘 Button clicked');

// 5️⃣ Verify mobile element
let title = await driver.elementById('title');
await title.isDisplayed();
console.log('✅ Element verified');

// 6️⃣ Close driver
await driver.quit();`}
                </code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-green-600 dark:text-green-400">
            <Play className="w-6 h-6" />
            Interactive Live Demo
          </CardTitle>
          <CardDescription>
            Watch Appium in action with real-time device connection and code execution
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950/20">
            <Rocket className="h-5 w-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Experience Appium Live</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              See how Appium connects to devices and runs mobile tests with step-by-step visualization.
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-lg border-2 border-green-200 dark:border-green-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-green-600 dark:text-green-400" />
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
                        ? 'border-green-500 bg-green-100 dark:bg-green-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-green-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-appium"
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

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Code Execution</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateAppiumDemo}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
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
                    className="gap-2"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </Button>
                </div>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs max-h-[500px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700">
                {isRunning ? (
                  <div className="space-y-0">
                    {getAppiumCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-green-200 dark:bg-green-900/50 border-l-4 border-green-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-green-900 dark:text-green-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                      </div>
                    ))}
                    {Object.keys(liveVariables).length > 0 && (
                      <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/30 rounded border border-green-200 dark:border-green-700">
                        <div className="text-[10px] font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-green-800 dark:text-green-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-green-600 dark:text-green-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{appiumExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Device Simulator</h4>
                  {currentStep > 1 && (
                    <Badge variant="outline" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                      <Wifi className="w-2 h-2 mr-1" />
                      Live
                    </Badge>
                  )}
                </div>
              </div>
              
              {currentStep > 1 ? (
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 overflow-hidden shadow-lg">
                    <div className="bg-gradient-to-r from-green-700 to-emerald-700 dark:from-green-800 dark:to-emerald-800 p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Smartphone className="w-4 h-4 text-green-400" />
                          <span className="text-sm font-semibold text-white">Appium Device</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            appiumState.status === 'Active' ? 'bg-green-400 animate-pulse' : 
                            appiumState.status === 'Connected' ? 'bg-yellow-400 animate-pulse' : 
                            appiumState.status === 'Testing' ? 'bg-blue-400 animate-pulse' : 
                            'bg-slate-400'
                          }`}></div>
                          <span className="text-xs text-green-400">{appiumState.status || 'Offline'}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
                      <div className="bg-white dark:bg-slate-950 rounded-lg border-2 border-green-300 dark:border-green-600 mx-auto" style={{width: '280px', height: '550px'}}>
                        <div className="p-3">
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-6 h-6 bg-slate-300 dark:bg-slate-600 rounded"></div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">9:41 AM</div>
                            <div className="flex gap-1">
                              <div className="w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
                              <div className="w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
                              <div className="w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
                            </div>
                          </div>
                          
                          <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded border border-green-200 dark:border-green-700 mb-3">
                            <div className="text-xs font-bold text-green-900 dark:text-green-100 mb-1">Appium Connected</div>
                            <div className="text-xs text-green-700 dark:text-green-300">{appiumState.device || 'No Device'}</div>
                            <div className="text-xs text-green-600 dark:text-green-400">{appiumState.platform || 'No Platform'}</div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                            <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                            <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
                          </div>
                          
                          <div className="mt-3 flex justify-center">
                            <button className="bg-green-600 text-white px-3 py-1 rounded text-xs">Login Button</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="flex items-center gap-2 mb-3">
                      <Settings className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-xs font-bold text-green-900 dark:text-green-100">Connection Details</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-white dark:bg-slate-800 p-2 rounded border border-green-200 dark:border-green-700">
                        <span className="text-green-700 dark:text-green-300 block">Server:</span>
                        <span className="text-green-900 dark:text-green-100 font-mono">{appiumState.server || 'None'}</span>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-2 rounded border border-green-200 dark:border-green-700">
                        <span className="text-green-700 dark:text-green-300 block">Device:</span>
                        <span className="text-green-900 dark:text-green-100 font-mono">{appiumState.device || 'None'}</span>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-2 rounded border border-green-200 dark:border-green-700">
                        <span className="text-green-700 dark:text-green-300 block">Platform:</span>
                        <span className="text-green-900 dark:text-green-100 font-mono">{appiumState.platform || 'None'}</span>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-2 rounded border border-green-200 dark:border-green-700">
                        <span className="text-green-700 dark:text-green-300 block">Status:</span>
                        <span className="text-green-900 dark:text-green-100 font-mono">{appiumState.status || 'Offline'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-8 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 text-center">
                  <Smartphone className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-600 dark:text-slate-400 mb-2">Device Simulator</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
                    Click "Run Demo" to see Appium connect to a mobile device and run automation tests
                  </p>
                  <Button onClick={simulateAppiumDemo} disabled={isRunning} className="gap-2">
                    <Play className="w-4 h-4" />
                    Start Demo
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Platform Support */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-green-600" />
              Platform Support
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { platform: 'Android', icon: '🤖', support: 'Native & Hybrid Apps', features: ['UI Automator', 'Espresso'], color: 'green' },
                { platform: 'iOS', icon: '🍎', support: 'Native & Hybrid Apps', features: ['XCUITest', 'UI Automation'], color: 'emerald' },
                { platform: 'Windows', icon: '🪟', support: 'Desktop Apps', features: ['WinAppDriver', 'UI Automation'], color: 'teal' },
              ].map((item) => (
                <div key={item.platform} className={`p-4 bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 dark:from-${item.color}-950/30 dark:to-${item.color}-950/20 rounded-lg border-2 border-${item.color}-200 dark:border-${item.color}-700 hover:shadow-lg transition-all`}>
                  <div className="text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="font-bold text-green-900 dark:text-green-100 mb-2">{item.platform}</div>
                    <div className="text-sm text-green-700 dark:text-green-300 mb-3">{item.support}</div>
                    <div className="space-y-1">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded border border-green-200 dark:border-green-700">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Concepts Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-green-600 dark:text-green-400">
            <Target className="w-6 h-6" />
            Key Concepts to Remember
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Core Components</h4>
              <div className="space-y-2">
                {[
                  { term: 'Desired Capabilities', desc: 'Device and app configuration settings' },
                  { term: 'WebDriver Protocol', desc: 'Standard automation commands' },
                  { term: 'Session Management', desc: 'Device connection lifecycle' },
                  { term: 'Element Locators', desc: 'Find UI elements (ID, XPath, etc.)' },
                ].map((item) => (
                  <div key={item.term} className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="font-medium text-sm text-green-900 dark:text-green-100">{item.term}</div>
                    <div className="text-xs text-green-700 dark:text-green-300">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Best Practices</h4>
              <div className="space-y-2">
                {[
                  'Always clean up driver sessions with quit()',
                  'Use explicit waits instead of sleep()',
                  'Organize capabilities in configuration files',
                  'Implement proper error handling and logging',
                  'Use page object model for maintainability',
                ].map((practice, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
}

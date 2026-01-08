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
  Laptop
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function MobileEmulationComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);
  const [speed, setSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = useState<number>(-1);
  const [liveVariables, setLiveVariables] = useState<Record<string, string>>({});
  const [emulationState, setEmulationState] = useState({
    device: '',
    viewport: { width: 0, height: 0 },
    userAgent: '',
    orientation: ''
  });

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.4;
      default: return 1;
    }
  };

  const simulateMobileEmulation = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setEmulationState({ device: '', viewport: { width: 0, height: 0 }, userAgent: '', orientation: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, options: 7, emulation: 10, navigate: 13, test: 16, quit: 19 };
      } else if (selectedLanguage === 'java') {
        return { init: 6, options: 9, emulation: 12, navigate: 15, test: 18, quit: 21 };
      } else {
        return { init: 2, options: 5, emulation: 8, navigate: 11, test: 14, quit: 16 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Mobile Emulation demo...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '🌐 Setting up Chrome options...', delay: 600 * multiplier, codeLine: lines.init, variable: { name: 'options', value: '<ChromeOptions>' } },
      { step: 2, log: '📱 Configuring mobile emulation...', delay: 1200 * multiplier, codeLine: lines.options, variable: { name: 'emulation', value: 'mobileEmulation' }, emulation: { device: 'iPhone 12 Pro', viewport: { width: 390, height: 844 }, userAgent: 'Mobile Safari', orientation: 'Portrait' } },
      { step: 3, log: '✅ Device configured: iPhone 12 Pro', delay: 700 * multiplier, codeLine: lines.emulation, variable: { name: 'deviceName', value: 'iPhone 12 Pro' }, emulation: { device: 'iPhone 12 Pro', viewport: { width: 390, height: 844 }, userAgent: 'Mobile Safari', orientation: 'Portrait' } },
      { step: 4, log: '🌍 Navigating to mobile site...', delay: 1200 * multiplier, codeLine: lines.navigate, variable: { name: 'driver', value: '<WebDriver: Mobile>' }, emulation: { device: 'iPhone 12 Pro', viewport: { width: 390, height: 844 }, userAgent: 'Mobile Safari', orientation: 'Portrait' } },
      { step: 5, log: '✅ Site loaded in mobile view', delay: 700 * multiplier, codeLine: lines.navigate, variable: { name: 'url', value: 'https://example.com' }, emulation: { device: 'iPhone 12 Pro', viewport: { width: 390, height: 844 }, userAgent: 'Mobile Safari', orientation: 'Portrait' } },
      { step: 6, log: '🧪 Testing mobile elements...', delay: 1200 * multiplier, codeLine: lines.test, variable: { name: 'mobileMenu', value: 'found' }, emulation: { device: 'iPhone 12 Pro', viewport: { width: 390, height: 844 }, userAgent: 'Mobile Safari', orientation: 'Portrait' } },
      { step: 7, log: '✅ Mobile menu interaction successful', delay: 700 * multiplier, codeLine: lines.test, variable: { name: 'tested', value: 'true' }, emulation: { device: 'iPhone 12 Pro', viewport: { width: 390, height: 844 }, userAgent: 'Mobile Safari', orientation: 'Portrait' } },
      { step: 8, log: '🎉 Mobile Emulation demo completed!', delay: 500 * multiplier, codeLine: lines.quit, variable: { name: 'completed', value: 'true' }, emulation: { device: '', viewport: { width: 0, height: 0 }, userAgent: '', orientation: '' } },
    ];

    for (const { step, log, delay, codeLine, variable, emulation } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (emulation) {
        setEmulationState(emulation);
      }
    }

    setIsRunning(false);
  };

  const getEmulationCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.chrome.options import Options',
        '',
        '# Initialize Chrome options',
        'chrome_options = Options()',
        '',
        '# Set up mobile device emulation',
        'chrome_options.add_experimental_option("mobileEmulation", {',
        '    "deviceName": "iPhone 12 Pro"',
        '})',
        '',
        '# Initialize driver with mobile emulation',
        'driver = webdriver.Chrome(options=chrome_options)',
        '',
        '# Navigate to mobile site',
        'driver.get("https://example.com")',
        '',
        '# Test mobile-specific elements',
        'mobile_menu = driver.find_element(By.ID, "mobile-menu")',
        'mobile_menu.click()',
        '',
        '# Close driver',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.chrome.ChromeOptions;',
        'import java.util.HashMap;',
        'import java.util.Map;',
        '',
        '// Initialize Chrome options',
        'ChromeOptions options = new ChromeOptions();',
        '',
        '// Set up mobile device emulation',
        'Map<String, String> mobileEmulation = new HashMap<>();',
        'mobileEmulation.put("deviceName", "iPhone 12 Pro");',
        'options.setExperimentalOption("mobileEmulation", mobileEmulation);',
        '',
        '// Initialize driver with mobile emulation',
        'WebDriver driver = new ChromeDriver(options);',
        '',
        '// Navigate to mobile site',
        'driver.get("https://example.com");',
        '',
        '// Test mobile-specific elements',
        'WebElement mobileMenu = driver.findElement(By.id("mobile-menu"));',
        'mobileMenu.click();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        'const chrome = require(\'selenium-webdriver/chrome\');',
        '',
        '// Set up mobile device emulation',
        'let options = new chrome.Options();',
        'options.addMobileEmulation({ deviceName: \'iPhone 12 Pro\' });',
        '',
        '// Initialize driver with mobile emulation',
        'let driver = await new Builder()',
        '  .forBrowser(\'chrome\')',
        '  .setChromeOptions(options)',
        '  .build();',
        '',
        '// Navigate to mobile site',
        'await driver.get(\'https://example.com\');',
        '',
        '// Test mobile-specific elements',
        'let mobileMenu = await driver.findElement(By.id(\'mobile-menu\'));',
        'await mobileMenu.click();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const emulationExample = {
    python: getEmulationCode('python').join('\n'),
    java: getEmulationCode('java').join('\n'),
    javascript: getEmulationCode('javascript').join('\n'),
  };

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'mobile-emulation',
    title: 'Mobile Emulation',
    explanation: 'Testing mobile web applications using device emulation',
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
        title="Mobile Emulation"
        description="Master mobile device emulation for testing responsive designs and mobile web applications"
        icon={Smartphone}
        category="Selenium · Mobile Testing"
        colorTheme="teal"
        badges={[
          { label: 'Device Emulation', variant: 'secondary' },
          { label: 'Mobile Testing', variant: 'secondary' },
          { label: 'Chrome Options', variant: 'secondary' }
        ]}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-teal-600 dark:text-teal-400">
            <Smartphone className="w-6 h-6" />
            What is Mobile Emulation?
          </CardTitle>
          <CardDescription>
            Understanding mobile device emulation in Selenium testing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Mobile Emulation allows you to simulate mobile devices on desktop browsers, enabling you to test mobile web applications without needing actual devices. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Device-specific viewport dimensions and screen sizes</li>
            <li>Mobile user agents and browser characteristics</li>
            <li>Touch interactions and gesture support</li>
            <li>Responsive design testing across different devices</li>
            <li>Mobile-specific UI elements and layouts</li>
          </ul>
          
          <Alert className="mt-4">
            <Smartphone className="h-4 w-4" />
            <AlertTitle>Mobile Testing Essential:</AlertTitle>
            <AlertDescription>
              Mobile emulation is crucial for testing responsive designs and ensuring mobile user experience without requiring physical devices.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-teal-600 dark:text-teal-400">
            <Code className="w-6 h-6" />
            Mobile Emulation Examples
          </CardTitle>
          <CardDescription>
            Device emulation setup in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-teal-600 text-teal-600 dark:text-teal-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mobile Emulation Setup</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-700">
                  {selectedLanguage === 'python' && '🐍 Python'}
                  {selectedLanguage === 'java' && '☕ Java'}
                  {selectedLanguage === 'javascript' && '🟨 JavaScript'}
                </Badge>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-teal-200 dark:border-teal-700">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-300">
                  {selectedLanguage === 'python' && `# 📱 Mobile Emulation with Selenium Python

# 1️⃣ Initialize Chrome options
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
chrome_options = Options()

# 2️⃣ Set up mobile device emulation
chrome_options.add_experimental_option("mobileEmulation", {
    "deviceName": "iPhone 12 Pro"
})
print("✅ Mobile emulation configured")

# 3️⃣ Initialize driver with mobile emulation
driver = webdriver.Chrome(options=chrome_options)
print("📱 Mobile driver initialized")

# 4️⃣ Navigate to mobile site
driver.get("https://example.com")
print("🌍 Mobile site loaded")

# 5️⃣ Test mobile-specific elements
mobile_menu = driver.find_element(By.ID, "mobile-menu")
mobile_menu.click()
print("🧪 Mobile menu tested")

# 6️⃣ Close driver
driver.quit()`}
                  {selectedLanguage === 'java' && `// 📱 Mobile Emulation with Selenium Java

// 1️⃣ Initialize Chrome options
ChromeOptions options = new ChromeOptions();

// 2️⃣ Set up mobile device emulation
Map<String, String> mobileEmulation = new HashMap<>();
mobileEmulation.put("deviceName", "iPhone 12 Pro");
options.setExperimentalOption("mobileEmulation", mobileEmulation);
System.out.println("✅ Mobile emulation configured");

// 3️⃣ Initialize driver with mobile emulation
WebDriver driver = new ChromeDriver(options);
System.out.println("📱 Mobile driver initialized");

// 4️⃣ Navigate to mobile site
driver.get("https://example.com");
System.out.println("🌍 Mobile site loaded");

// 5️⃣ Test mobile-specific elements
WebElement mobileMenu = driver.findElement(By.id("mobile-menu"));
mobileMenu.click();
System.out.println("🧪 Mobile menu tested");

// 6️⃣ Close driver
driver.quit();`}
                  {selectedLanguage === 'javascript' && `// 📱 Mobile Emulation with Selenium JavaScript

// 1️⃣ Set up mobile device emulation
const chrome = require('selenium-webdriver/chrome');
let options = new chrome.Options();
options.addMobileEmulation({ deviceName: 'iPhone 12 Pro' });
console.log('✅ Mobile emulation configured');

// 2️⃣ Initialize driver with mobile emulation
let driver = await new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();
console.log('📱 Mobile driver initialized');

// 3️⃣ Navigate to mobile site
await driver.get('https://example.com');
console.log('🌍 Mobile site loaded');

// 4️⃣ Test mobile-specific elements
let mobileMenu = await driver.findElement(By.id('mobile-menu'));
await mobileMenu.click();
console.log('🧪 Mobile menu tested');

// 5️⃣ Close driver
await driver.quit();`}
                </code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-teal-600 dark:text-teal-400">
            <Smartphone className="w-6 h-6" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch mobile device emulation in action with live visualization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-950/20">
            <Play className="h-5 w-5 text-teal-600" />
            <AlertTitle className="text-teal-900 dark:text-teal-100">Interactive Mobile Emulation Demo</AlertTitle>
            <AlertDescription className="text-teal-800 dark:text-teal-200">
              Watch mobile device emulation with live device preview. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-4 rounded-lg border-2 border-teal-200 dark:border-teal-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-teal-600 dark:text-teal-400" />
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
                        ? 'border-teal-500 bg-teal-100 dark:bg-teal-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-teal-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-emulation"
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
                  <Code className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mobile Emulation Code</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateMobileEmulation}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
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
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs max-h-[600px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700">
                {isRunning ? (
                  <div className="space-y-0">
                    {getEmulationCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-teal-200 dark:bg-teal-900/50 border-l-4 border-teal-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-teal-900 dark:text-teal-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                      </div>
                    ))}
                    {Object.keys(liveVariables).length > 0 && (
                      <div className="mt-4 p-3 bg-teal-50 dark:bg-teal-950/30 rounded border border-teal-200 dark:border-teal-700">
                        <div className="text-[10px] font-bold text-teal-900 dark:text-teal-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-teal-800 dark:text-teal-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-teal-600 dark:text-teal-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{emulationExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Device Preview</h4>
                  <Badge variant="outline" className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-700">
                    Live
                  </Badge>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 overflow-hidden shadow-lg">
                  {/* Device Header */}
                  <div className="bg-gradient-to-r from-teal-700 to-cyan-700 dark:from-teal-800 dark:to-cyan-800 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-4 h-4 text-teal-400" />
                        <span className="text-sm font-semibold text-white">{emulationState.device || 'No Device'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-green-400">Active</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Device Screen */}
                  <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30">
                    <div className="bg-white dark:bg-slate-950 rounded-lg border-2 border-teal-300 dark:border-teal-600 mx-auto" style={{width: '300px', height: '600px'}}>
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
                        
                        <div className="bg-teal-50 dark:bg-teal-950/30 p-3 rounded border border-teal-200 dark:border-teal-700 mb-3">
                          <div className="text-xs font-bold text-teal-900 dark:text-teal-100 mb-1">Mobile Viewport</div>
                          <div className="text-xs text-teal-700 dark:text-teal-300">{emulationState.viewport.width} × {emulationState.viewport.height} pixels</div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
                        </div>
                        
                        <div className="mt-3 flex justify-center">
                          <button className="bg-teal-600 text-white px-3 py-1 rounded text-xs">Mobile Menu</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Device Info */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-3 rounded-lg border border-teal-200 dark:border-teal-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span className="text-xs font-bold text-teal-900 dark:text-teal-100">Device Information</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-teal-700 dark:text-teal-300">Device:</span>
                      <span className="text-teal-900 dark:text-teal-100 ml-1">{emulationState.device || 'None'}</span>
                    </div>
                    <div>
                      <span className="text-teal-700 dark:text-teal-300">User Agent:</span>
                      <span className="text-teal-900 dark:text-teal-100 ml-1">{emulationState.userAgent || 'None'}</span>
                    </div>
                    <div>
                      <span className="text-teal-700 dark:text-teal-300">Width:</span>
                      <span className="text-teal-900 dark:text-teal-100 ml-1">{emulationState.viewport.width || 0}px</span>
                    </div>
                    <div>
                      <span className="text-teal-700 dark:text-teal-300">Height:</span>
                      <span className="text-teal-900 dark:text-teal-100 ml-1">{emulationState.viewport.height || 0}px</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Device Types */}
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { device: 'iPhone 12 Pro', width: 390, height: 844, icon: '📱', type: 'Phone' },
              { device: 'iPad Pro', width: 1024, height: 1366, icon: '📱', type: 'Tablet' },
              { device: 'Galaxy S21', width: 360, height: 800, icon: '📱', type: 'Phone' },
            ].map((item) => (
              <div key={item.device} className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-teal-200 dark:border-teal-700">
                <div className="text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-bold text-teal-900 dark:text-teal-100 mb-1">{item.device}</div>
                  <div className="text-xs text-teal-700 dark:text-teal-300 mb-1">{item.type}</div>
                  <div className="text-xs text-teal-600 dark:text-teal-400">{item.width} × {item.height}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
}

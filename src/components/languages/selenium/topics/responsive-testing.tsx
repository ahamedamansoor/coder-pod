'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Monitor,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Smartphone,
  Tablet,
  Laptop,
  Gauge,
  Settings,
  Zap,
  Clock,
  Shield,
  Maximize2
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function ResponsiveTestingComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);
  const [speed, setSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = useState<number>(-1);
  const [liveVariables, setLiveVariables] = useState<Record<string, string>>({});
  const [viewportState, setViewportState] = useState({
    width: 0,
    height: 0,
    device: '',
    layout: '',
    breakpoint: ''
  });

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.4;
      default: return 1;
    }
  };

  const simulateResponsiveTesting = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setViewportState({ width: 0, height: 0, device: '', layout: '', breakpoint: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, desktop: 7, tablet: 10, mobile: 13, test: 16, quit: 19 };
      } else if (selectedLanguage === 'java') {
        return { init: 6, desktop: 9, tablet: 12, mobile: 15, test: 18, quit: 21 };
      } else {
        return { init: 2, desktop: 5, tablet: 8, mobile: 11, test: 14, quit: 16 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Responsive Testing demo...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🖥️ Testing Desktop view (1920x1080)...', delay: 1200 * multiplier, codeLine: lines.desktop, variable: { name: 'desktopSize', value: '1920x1080' }, viewport: { width: 1920, height: 1080, device: 'Desktop', layout: 'Desktop', breakpoint: 'lg' } },
      { step: 3, log: '✅ Desktop layout verified', delay: 700 * multiplier, codeLine: lines.desktop, variable: { name: 'desktopMenu', value: 'visible' }, viewport: { width: 1920, height: 1080, device: 'Desktop', layout: 'Desktop', breakpoint: 'lg' } },
      { step: 4, log: '📱 Testing Tablet view (768x1024)...', delay: 1200 * multiplier, codeLine: lines.tablet, variable: { name: 'tabletSize', value: '768x1024' }, viewport: { width: 768, height: 1024, device: 'Tablet', layout: 'Tablet', breakpoint: 'md' } },
      { step: 5, log: '✅ Tablet layout verified', delay: 700 * multiplier, codeLine: lines.tablet, variable: { name: 'tabletMenu', value: 'visible' }, viewport: { width: 768, height: 1024, device: 'Tablet', layout: 'Tablet', breakpoint: 'md' } },
      { step: 6, log: '📱 Testing Mobile view (375x667)...', delay: 1200 * multiplier, codeLine: lines.mobile, variable: { name: 'mobileSize', value: '375x667' }, viewport: { width: 375, height: 667, device: 'Mobile', layout: 'Mobile', breakpoint: 'sm' } },
      { step: 7, log: '✅ Mobile layout verified', delay: 700 * multiplier, codeLine: lines.mobile, variable: { name: 'mobileMenu', value: 'visible' }, viewport: { width: 375, height: 667, device: 'Mobile', layout: 'Mobile', breakpoint: 'sm' } },
      { step: 8, log: '🧪 Testing responsive elements...', delay: 1200 * multiplier, codeLine: lines.test, variable: { name: 'elements', value: 'tested' }, viewport: { width: 375, height: 667, device: 'Mobile', layout: 'Mobile', breakpoint: 'sm' } },
      { step: 9, log: '✅ All responsive tests passed', delay: 700 * multiplier, codeLine: lines.test, variable: { name: 'passed', value: 'true' }, viewport: { width: 375, height: 667, device: 'Mobile', layout: 'Mobile', breakpoint: 'sm' } },
      { step: 10, log: '🎉 Responsive Testing demo completed!', delay: 500 * multiplier, codeLine: lines.quit, variable: { name: 'completed', value: 'true' }, viewport: { width: 0, height: 0, device: '', layout: '', breakpoint: '' } },
    ];

    for (const { step, log, delay, codeLine, variable, viewport } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (viewport) {
        setViewportState(viewport);
      }
    }

    setIsRunning(false);
  };

  const getResponsiveCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize driver',
        'driver = webdriver.Chrome()',
        '',
        '# Test Desktop View (1920x1080)',
        'driver.set_window_size(1920, 1080)',
        'driver.get("https://example.com")',
        'desktop_menu = driver.find_element(By.ID, "desktop-menu")',
        'assert desktop_menu.is_displayed()',
        '',
        '# Test Tablet View (768x1024)',
        'driver.set_window_size(768, 1024)',
        'tablet_menu = driver.find_element(By.ID, "tablet-menu")',
        'assert tablet_menu.is_displayed()',
        '',
        '# Test Mobile View (375x667)',
        'driver.set_window_size(375, 667)',
        'mobile_menu = driver.find_element(By.ID, "mobile-menu")',
        'assert mobile_menu.is_displayed()',
        '',
        '# Get current viewport size',
        'size = driver.get_window_size()',
        'print(f"Current viewport: {size[\'width\']}x{size[\'height\']}")',
        '',
        '# Close driver',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.Dimension;',
        'import org.openqa.selenium.By;',
        '',
        '// Initialize driver',
        'WebDriver driver = new ChromeDriver();',
        '',
        '// Test Desktop View (1920x1080)',
        'driver.manage().window().setSize(new Dimension(1920, 1080));',
        'driver.get("https://example.com");',
        'WebElement desktopMenu = driver.findElement(By.id("desktop-menu"));',
        'assert desktopMenu.isDisplayed();',
        '',
        '// Test Tablet View (768x1024)',
        'driver.manage().window().setSize(new Dimension(768, 1024));',
        'WebElement tabletMenu = driver.findElement(By.id("tablet-menu"));',
        'assert tabletMenu.isDisplayed();',
        '',
        '// Test Mobile View (375x667)',
        'driver.manage().window().setSize(new Dimension(375, 667));',
        'WebElement mobileMenu = driver.findElement(By.id("mobile-menu"));',
        'assert mobileMenu.isDisplayed();',
        '',
        '// Get current viewport size',
        'Dimension size = driver.manage().window().getSize();',
        'System.out.println("Current viewport: " + size.width + "x" + size.height);',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        '// Initialize driver',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Test Desktop View (1920x1080)',
        'await driver.manage().window().setRect({ width: 1920, height: 1080 });',
        'await driver.get(\'https://example.com\');',
        'let desktopMenu = await driver.findElement(By.id(\'desktop-menu\'));',
        'await desktopMenu.isDisplayed();',
        '',
        '// Test Tablet View (768x1024)',
        'await driver.manage().window().setRect({ width: 768, height: 1024 });',
        'let tabletMenu = await driver.findElement(By.id(\'tablet-menu\'));',
        'await tabletMenu.isDisplayed();',
        '',
        '// Test Mobile View (375x667)',
        'await driver.manage().window().setRect({ width: 375, height: 667 });',
        'let mobileMenu = await driver.findElement(By.id(\'mobile-menu\'));',
        'await mobileMenu.isDisplayed();',
        '',
        '// Get current viewport size',
        'let size = await driver.manage().window().getRect();',
        'console.log(`Current viewport: ${size.width}x${size.height}`);',
        '',
        'await driver.quit();',
      ];
    }
  };

  const responsiveExample = {
    python: getResponsiveCode('python').join('\n'),
    java: getResponsiveCode('java').join('\n'),
    javascript: getResponsiveCode('javascript').join('\n'),
  };

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'responsive-testing',
    title: 'Responsive Testing',
    explanation: 'Testing responsive designs across different viewports and devices',
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
        title="Responsive Testing"
        description="Master responsive design testing across multiple viewports and device sizes"
        icon={Monitor}
        colorTheme="rose"
        badges={[
          { label: 'Responsive Design', variant: 'secondary' },
          { label: 'Viewport Testing', variant: 'secondary' },
          { label: 'Cross-Device', variant: 'secondary' }
        ]}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-rose-600 dark:text-rose-400">
            <Monitor className="w-6 h-6" />
            What is Responsive Testing?
          </CardTitle>
          <CardDescription>
            Understanding responsive design testing in Selenium automation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Responsive Testing ensures your web application works correctly across different screen sizes and devices. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Testing layouts across desktop, tablet, and mobile viewports</li>
            <li>Verifying responsive breakpoints and media queries</li>
            <li>Validating element visibility and positioning</li>
            <li>Checking navigation and menu adaptations</li>
            <li>Ensuring content readability and accessibility</li>
          </ul>
          
          <Alert className="mt-4">
            <Monitor className="h-4 w-4" />
            <AlertTitle>Responsive Design Essential:</AlertTitle>
            <AlertDescription>
              Responsive testing is crucial for ensuring consistent user experience across all devices and screen sizes.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-rose-600 dark:text-rose-400">
            <Code className="w-6 h-6" />
            Responsive Testing Examples
          </CardTitle>
          <CardDescription>
            Viewport testing in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-rose-600 text-rose-600 dark:text-rose-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-rose-300 dark:border-rose-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Responsive Testing Setup</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-700">
                  {selectedLanguage === 'python' && '🐍 Python'}
                  {selectedLanguage === 'java' && '☕ Java'}
                  {selectedLanguage === 'javascript' && '🟨 JavaScript'}
                </Badge>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-rose-200 dark:border-rose-700">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-300">
                  {selectedLanguage === 'python' && `# 🖥️ Responsive Testing with Selenium Python

# 1️⃣ Initialize driver
from selenium import webdriver
driver = webdriver.Chrome()
print("✅ Driver initialized")

# 2️⃣ Test Desktop View (1920x1080)
driver.set_window_size(1920, 1080)
driver.get("https://example.com")
desktop_menu = driver.find_element(By.ID, "desktop-menu")
assert desktop_menu.is_displayed()
print("🖥️ Desktop layout verified")

# 3️⃣ Test Tablet View (768x1024)
driver.set_window_size(768, 1024)
tablet_menu = driver.find_element(By.ID, "tablet-menu")
assert tablet_menu.is_displayed()
print("📱 Tablet layout verified")

# 4️⃣ Test Mobile View (375x667)
driver.set_window_size(375, 667)
mobile_menu = driver.find_element(By.ID, "mobile-menu")
assert mobile_menu.is_displayed()
print("📱 Mobile layout verified")

# 5️⃣ Get current viewport size
size = driver.get_window_size()
print(f"📐 Current viewport: {size['width']}x{size['height']}")

# 6️⃣ Close driver
driver.quit()`}
                  {selectedLanguage === 'java' && `// 🖥️ Responsive Testing with Selenium Java

// 1️⃣ Initialize driver
WebDriver driver = new ChromeDriver();
System.out.println("✅ Driver initialized");

// 2️⃣ Test Desktop View (1920x1080)
driver.manage().window().setSize(new Dimension(1920, 1080));
driver.get("https://example.com");
WebElement desktopMenu = driver.findElement(By.id("desktop-menu"));
assert desktopMenu.isDisplayed();
System.out.println("🖥️ Desktop layout verified");

// 3️⃣ Test Tablet View (768x1024)
driver.manage().window().setSize(new Dimension(768, 1024));
WebElement tabletMenu = driver.findElement(By.id("tablet-menu"));
assert tabletMenu.isDisplayed();
System.out.println("📱 Tablet layout verified");

// 4️⃣ Test Mobile View (375x667)
driver.manage().window().setSize(new Dimension(375, 667));
WebElement mobileMenu = driver.findElement(By.id("mobile-menu"));
assert mobileMenu.isDisplayed();
System.out.println("📱 Mobile layout verified");

// 5️⃣ Get current viewport size
Dimension size = driver.manage().window().getSize();
System.out.println("📐 Current viewport: " + size.width + "x" + size.height);

// 6️⃣ Close driver
driver.quit();`}
                  {selectedLanguage === 'javascript' && `// 🖥️ Responsive Testing with Selenium JavaScript

// 1️⃣ Initialize driver
let driver = await new Builder().forBrowser('chrome').build();
console.log('✅ Driver initialized');

// 2️⃣ Test Desktop View (1920x1080)
await driver.manage().window().setRect({ width: 1920, height: 1080 });
await driver.get('https://example.com');
let desktopMenu = await driver.findElement(By.id('desktop-menu'));
await desktopMenu.isDisplayed();
console.log('🖥️ Desktop layout verified');

// 3️⃣ Test Tablet View (768x1024)
await driver.manage().window().setRect({ width: 768, height: 1024 });
let tabletMenu = await driver.findElement(By.id('tablet-menu'));
await tabletMenu.isDisplayed();
console.log('📱 Tablet layout verified');

// 4️⃣ Test Mobile View (375x667)
await driver.manage().window().setRect({ width: 375, height: 667 });
let mobileMenu = await driver.findElement(By.id('mobile-menu'));
await mobileMenu.isDisplayed();
console.log('📱 Mobile layout verified');

// 5️⃣ Get current viewport size
let size = await driver.manage().window().getRect();
console.log(\`📐 Current viewport: \${size.width}x\${size.height}\`);

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
          <CardTitle className="flex items-center gap-3 text-xl text-rose-600 dark:text-rose-400">
            <Monitor className="w-6 h-6" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch responsive testing in action with live viewport changes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-rose-200 dark:border-rose-700 bg-rose-50 dark:bg-rose-950/20">
            <Play className="h-5 w-5 text-rose-600" />
            <AlertTitle className="text-rose-900 dark:text-rose-100">Interactive Responsive Testing Demo</AlertTitle>
            <AlertDescription className="text-rose-800 dark:text-rose-200">
              Watch responsive design testing with live viewport changes. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 p-4 rounded-lg border-2 border-rose-200 dark:border-rose-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-rose-600 dark:text-rose-400" />
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
                        ? 'border-rose-500 bg-rose-100 dark:bg-rose-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-rose-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-responsive"
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
                  <Code className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Responsive Testing Code</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateResponsiveTesting}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700"
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
                    {getResponsiveCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-rose-200 dark:bg-rose-900/50 border-l-4 border-rose-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-rose-900 dark:text-rose-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                      </div>
                    ))}
                    {Object.keys(liveVariables).length > 0 && (
                      <div className="mt-4 p-3 bg-rose-50 dark:bg-rose-950/30 rounded border border-rose-200 dark:border-rose-700">
                        <div className="text-[10px] font-bold text-rose-900 dark:text-rose-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-rose-800 dark:text-rose-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-rose-600 dark:text-rose-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{responsiveExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Viewport Preview</h4>
                  <Badge variant="outline" className="text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-700">
                    Live
                  </Badge>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 overflow-hidden shadow-lg">
                  {/* Viewport Header */}
                  <div className="bg-gradient-to-r from-rose-700 to-pink-700 dark:from-rose-800 dark:to-pink-800 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Monitor className="w-4 h-4 text-rose-400" />
                        <span className="text-sm font-semibold text-white">Responsive Viewport</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-green-400">Active</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Viewport Screens */}
                  <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30">
                    <div className="space-y-4">
                      {/* Active Device */}
                      <div className="bg-white dark:bg-slate-950 rounded-lg border-2 border-rose-300 dark:border-rose-600 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-rose-900 dark:text-rose-100">{viewportState.device || 'No Device'}</span>
                          <span className="text-xs text-rose-700 dark:text-rose-300">{viewportState.width} × {viewportState.height}</span>
                        </div>
                        <div className="bg-rose-50 dark:bg-rose-950/30 p-2 rounded border border-rose-200 dark:border-rose-700">
                          <div className="flex gap-2">
                            <div className="w-8 h-8 bg-rose-200 dark:bg-rose-800 rounded"></div>
                            <div className="flex-1 h-8 bg-rose-200 dark:bg-rose-800 rounded"></div>
                          </div>
                          <div className="mt-2 text-xs text-rose-600 dark:text-rose-400">
                            Layout: {viewportState.layout} | Breakpoint: {viewportState.breakpoint}
                          </div>
                        </div>
                      </div>

                      {/* Device Comparison */}
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { device: 'Desktop', width: 1920, height: 1080, active: viewportState.device === 'Desktop' },
                          { device: 'Tablet', width: 768, height: 1024, active: viewportState.device === 'Tablet' },
                          { device: 'Mobile', width: 375, height: 667, active: viewportState.device === 'Mobile' },
                        ].map((device) => (
                          <div key={device.device} className={`p-2 rounded border-2 ${
                            device.active 
                              ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/30' 
                              : 'border-slate-200 dark:border-slate-600'
                          }`}>
                            <div className="text-center">
                              <div className="text-xs font-bold text-rose-900 dark:text-rose-100">{device.device}</div>
                              <div className="text-[10px] text-rose-700 dark:text-rose-300">{device.width}×{device.height}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Viewport Info */}
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 p-3 rounded-lg border border-rose-200 dark:border-rose-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                    <span className="text-xs font-bold text-rose-900 dark:text-rose-100">Viewport Information</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-rose-700 dark:text-rose-300">Current:</span>
                      <span className="text-rose-900 dark:text-rose-100 ml-1">{viewportState.width}×{viewportState.height}</span>
                    </div>
                    <div>
                      <span className="text-rose-700 dark:text-rose-300">Layout:</span>
                      <span className="text-rose-900 dark:text-rose-100 ml-1">{viewportState.layout || 'None'}</span>
                    </div>
                    <div>
                      <span className="text-rose-700 dark:text-rose-300">Breakpoint:</span>
                      <span className="text-rose-900 dark:text-rose-100 ml-1">{viewportState.breakpoint || 'None'}</span>
                    </div>
                    <div>
                      <span className="text-rose-700 dark:text-rose-300">Device:</span>
                      <span className="text-rose-900 dark:text-rose-100 ml-1">{viewportState.device || 'None'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Breakpoint Information */}
          <div className="grid md:grid-cols-4 gap-3">
            {[
              { breakpoint: 'Mobile', width: '320-767', icon: '📱', color: 'rose' },
              { breakpoint: 'Tablet', width: '768-1023', icon: '📱', color: 'pink' },
              { breakpoint: 'Desktop', width: '1024-1919', icon: '🖥️', color: 'red' },
              { breakpoint: 'Large', width: '1920+', icon: '🖥️', color: 'orange' },
            ].map((item) => (
              <div key={item.breakpoint} className={`p-4 bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 dark:from-${item.color}-950/30 dark:to-${item.color}-950/20 rounded-lg border-2 border-${item.color}-200 dark:border-${item.color}-700`}>
                <div className="text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-bold text-rose-900 dark:text-rose-100 mb-1">{item.breakpoint}</div>
                  <div className="text-xs text-rose-700 dark:text-rose-300">{item.width}px</div>
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

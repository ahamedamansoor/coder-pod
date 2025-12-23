'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Touchpad,
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
  Smartphone,
  Hand
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function TouchActionsComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);
  const [speed, setSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = useState<number>(-1);
  const [liveVariables, setLiveVariables] = useState<Record<string, string>>({});
  const [touchState, setTouchState] = useState({
    action: '',
    currentElement: '',
    coordinates: { x: 0, y: 0 },
    gesture: ''
  });

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.4;
      default: return 1;
    }
  };

  const simulateTouchOperations = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setTouchState({ action: '', currentElement: '', coordinates: { x: 0, y: 0 }, gesture: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, tap: 7, swipe: 10, pinch: 13, scroll: 16, quit: 19 };
      } else if (selectedLanguage === 'java') {
        return { init: 6, tap: 9, swipe: 12, pinch: 15, scroll: 18, quit: 21 };
      } else {
        return { init: 2, tap: 5, swipe: 8, pinch: 11, scroll: 14, quit: 16 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Touch Actions demo...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '🌐 Initializing touch driver...', delay: 600 * multiplier, codeLine: lines.init, variable: { name: 'driver', value: '<TouchDriver: Mobile>' } },
      { step: 2, log: '👆 Performing tap gesture...', delay: 1200 * multiplier, codeLine: lines.tap, variable: { name: 'element', value: 'button' }, action: 'tap' },
      { step: 3, log: '✅ Tapped on button at (100, 200)', delay: 700 * multiplier, codeLine: lines.tap, variable: { name: 'coordinates', value: '(100, 200)' }, touch: { action: 'tap', element: 'button', coordinates: { x: 100, y: 200 } } },
      { step: 4, log: '👉 Performing swipe gesture...', delay: 1200 * multiplier, codeLine: lines.swipe, variable: { name: 'start', value: '(50, 300)' }, touch: { action: 'swipe', element: 'screen', coordinates: { x: 50, y: 300 } } },
      { step: 5, log: '✅ Swiped from (50, 300) to (350, 300)', delay: 700 * multiplier, codeLine: lines.swipe, variable: { name: 'end', value: '(350, 300)' }, touch: { action: 'swipe', element: 'screen', coordinates: { x: 350, y: 300 } } },
      { step: 6, log: '🤏 Performing pinch gesture...', delay: 1200 * multiplier, codeLine: lines.pinch, variable: { name: 'scale', value: '2.0' }, touch: { action: 'pinch', element: 'image', coordinates: { x: 200, y: 400 } } },
      { step: 7, log: '✅ Pinched to zoom 2.0x', delay: 700 * multiplier, codeLine: lines.pinch, variable: { name: 'zoomed', value: 'true' }, touch: { action: 'pinch', element: 'image', coordinates: { x: 200, y: 400 } } },
      { step: 8, log: '📜 Performing scroll gesture...', delay: 1200 * multiplier, codeLine: lines.scroll, variable: { name: 'direction', value: 'down' }, touch: { action: 'scroll', element: 'page', coordinates: { x: 200, y: 500 } } },
      { step: 9, log: '✅ Scrolled down 500px', delay: 700 * multiplier, codeLine: lines.scroll, variable: { name: 'scrolled', value: 'true' }, touch: { action: 'scroll', element: 'page', coordinates: { x: 200, y: 1000 } } },
      { step: 10, log: '🎉 Touch Actions demo completed!', delay: 500 * multiplier, codeLine: lines.quit, variable: { name: 'completed', value: 'true' }, touch: { action: 'completed', element: '', coordinates: { x: 0, y: 0 } } },
    ];

    for (const { step, log, delay, codeLine, variable, touch } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (touch) {
        setTouchState({ 
          action: touch.action || '', 
          currentElement: touch.element || '', 
          coordinates: touch.coordinates || { x: 0, y: 0 },
          gesture: touch.action || ''
        });
      }
    }

    setIsRunning(false);
  };

  const getTouchCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.touch_actions import TouchActions',
        '',
        '# Initialize driver',
        'driver = webdriver.Chrome()',
        'touch = TouchActions(driver)',
        '',
        '# Tap on element',
        'button = driver.find_element(By.ID, "submit")',
        'touch.tap(button).perform()',
        '',
        '# Swipe gesture',
        'touch.swipe(50, 300, 350, 300, 800).perform()',
        '',
        '# Pinch to zoom',
        'touch.pinch(element=driver.find_element(By.ID, "image")).perform()',
        '',
        '# Scroll gesture',
        'touch.scroll_from_element(element, 0, 500).perform()',
        '',
        '# Close driver',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.interactions.touch.TouchActions;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'TouchActions touch = new TouchActions(driver);',
        '',
        '// Tap on element',
        'WebElement button = driver.findElement(By.id("submit"));',
        'touch.tap(button).perform();',
        '',
        '// Swipe gesture',
        'touch.swipe(50, 300, 350, 300, 800).perform();',
        '',
        '// Pinch to zoom',
        'touch.pinch(driver.findElement(By.id("image"))).perform();',
        '',
        '// Scroll gesture',
        'touch.scroll(driver.findElement(By.tagName("body")), 0, 500).perform();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Tap on element',
        'let button = await driver.findElement(By.id(\'submit\'));',
        'await driver.touchActions().tap({element: button}).perform();',
        '',
        '// Swipe gesture',
        'await driver.touchActions().swipe({x: 50, y: 300, xEnd: 350, yEnd: 300, duration: 800});',
        '',
        '// Pinch to zoom',
        'let image = await driver.findElement(By.id(\'image\'));',
        'await driver.touchActions().pinch({element: image, scale: 2.0}).perform();',
        '',
        '// Scroll gesture',
        'await driver.touchActions().scroll({x: 200, y: 300, deltaY: 500}).perform();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const touchExample = {
    python: getTouchCode('python').join('\n'),
    java: getTouchCode('java').join('\n'),
    javascript: getTouchCode('javascript').join('\n'),
  };

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'touch-actions',
    title: 'Touch Actions',
    explanation: 'Simulating touch gestures in mobile web testing',
    category: '25. Mobile Testing'
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
        title="Touch Actions"
        description="Master touch gestures and mobile interactions with Selenium"
        icon={Touchpad}
        colorTheme="purple"
        badges={[
          { label: 'Touch Gestures', variant: 'secondary' },
          { label: 'Mobile Testing', variant: 'secondary' },
          { label: 'Touch Actions', variant: 'secondary' }
        ]}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
            <Touchpad className="w-6 h-6" />
            What are Touch Actions?
          </CardTitle>
          <CardDescription>
            Understanding touch gesture automation in mobile testing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Touch Actions allow you to simulate human touch gestures on mobile devices and touch-enabled screens. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Tap gestures for clicking buttons and elements</li>
            <li>Swipe gestures for scrolling and navigation</li>
            <li>Pinch gestures for zooming and scaling</li>
            <li>Multi-touch gestures for complex interactions</li>
            <li>Scroll gestures for content navigation</li>
          </ul>
          
          <Alert className="mt-4">
            <Smartphone className="h-4 w-4" />
            <AlertTitle>Mobile Testing Essential:</AlertTitle>
            <AlertDescription>
              Touch Actions are crucial for testing mobile web applications and responsive designs on touch devices.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
            <Code className="w-6 h-6" />
            Touch Actions Examples
          </CardTitle>
          <CardDescription>
            Touch gesture operations in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-purple-600 text-purple-600 dark:text-purple-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Touch Operations</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                  {selectedLanguage === 'python' && '🐍 Python'}
                  {selectedLanguage === 'java' && '☕ Java'}
                  {selectedLanguage === 'javascript' && '🟨 JavaScript'}
                </Badge>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-300">
                  {selectedLanguage === 'python' && `# 📱 Touch Actions with Selenium Python

# 1️⃣ Initialize driver and touch actions
from selenium import webdriver
from selenium.webdriver.common.touch_actions import TouchActions
driver = webdriver.Chrome()
touch = TouchActions(driver)

# 2️⃣ Tap on element
button = driver.find_element(By.ID, "submit")
touch.tap(button).perform()
print("✅ Button tapped")

# 3️⃣ Swipe gesture
touch.swipe(50, 300, 350, 300, 800).perform()
print("👉 Swipe completed")

# 4️⃣ Pinch to zoom
image = driver.find_element(By.ID, "image")
touch.pinch(element=image).perform()
print("🤏 Pinch zoom completed")

# 5️⃣ Scroll gesture
touch.scroll_from_element(element, 0, 500).perform()
print("📜 Scroll completed")

# 6️⃣ Close driver
driver.quit()`}
                  {selectedLanguage === 'java' && `// 📱 Touch Actions with Selenium Java

// 1️⃣ Initialize driver and touch actions
WebDriver driver = new ChromeDriver();
TouchActions touch = new TouchActions(driver);

// 2️⃣ Tap on element
WebElement button = driver.findElement(By.id("submit"));
touch.tap(button).perform();
System.out.println("✅ Button tapped");

// 3️⃣ Swipe gesture
touch.swipe(50, 300, 350, 300, 800).perform();
System.out.println("👉 Swipe completed");

// 4️⃣ Pinch to zoom
WebElement image = driver.findElement(By.id("image"));
touch.pinch(image).perform();
System.out.println("🤏 Pinch zoom completed");

// 5️⃣ Scroll gesture
WebElement page = driver.findElement(By.tagName("body"));
touch.scroll(page, 0, 500).perform();
System.out.println("📜 Scroll completed");

// 6️⃣ Close driver
driver.quit();`}
                  {selectedLanguage === 'javascript' && `// 📱 Touch Actions with Selenium JavaScript

// 1️⃣ Initialize driver
let driver = await new Builder().forBrowser('chrome').build();

// 2️⃣ Tap on element
let button = await driver.findElement(By.id('submit'));
await driver.touchActions().tap({element: button}).perform();
console.log('✅ Button tapped');

// 3️⃣ Swipe gesture
await driver.touchActions().swipe({
  x: 50, y: 300, xEnd: 350, yEnd: 300, duration: 800
});
console.log('👉 Swipe completed');

// 4️⃣ Pinch to zoom
let image = await driver.findElement(By.id('image'));
await driver.touchActions().pinch({element: image, scale: 2.0}).perform();
console.log('🤏 Pinch zoom completed');

// 5️⃣ Scroll gesture
await driver.touchActions().scroll({x: 200, y: 300, deltaY: 500});
console.log('📜 Scroll completed');

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
          <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
            <Touchpad className="w-6 h-6" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch touch gestures in action with live visualization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <Play className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Interactive Touch Actions Demo</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Watch touch operations with live gesture visualization. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-purple-600 dark:text-purple-400" />
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
                        ? 'border-purple-500 bg-purple-100 dark:bg-purple-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-purple-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-touch"
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
                  <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Touch Actions Code</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateTouchOperations}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
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
                    {getTouchCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-purple-200 dark:bg-purple-900/50 border-l-4 border-purple-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-purple-900 dark:text-purple-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                      </div>
                    ))}
                    {Object.keys(liveVariables).length > 0 && (
                      <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-950/30 rounded border border-purple-200 dark:border-purple-700">
                        <div className="text-[10px] font-bold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-purple-800 dark:text-purple-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-purple-600 dark:text-purple-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{touchExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Touchpad className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Touch Gesture Preview</h4>
                  <Badge variant="outline" className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                    Live
                  </Badge>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 overflow-hidden shadow-lg">
                  {/* Touch Header */}
                  <div className="bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-800 dark:to-pink-800 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Touchpad className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-semibold text-white">Touch Actions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-green-400">Active</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Touch Screen */}
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
                    <div className="bg-white dark:bg-slate-950 rounded-lg border-2 border-purple-300 dark:border-purple-600 p-4">
                      <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded">
                        {/* Touch visualization */}
                        {touchState.action === 'tap' && (
                          <div className="absolute top-8 left-8">
                            <div className="w-8 h-8 bg-purple-500 rounded-full animate-ping"></div>
                            <div className="w-8 h-8 bg-purple-600 rounded-full absolute top-0 left-0"></div>
                          </div>
                        )}
                        {touchState.action === 'swipe' && (
                          <div className="absolute top-16 left-4 right-4">
                            <div className="h-1 bg-purple-500 rounded-full animate-pulse"></div>
                            <div className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full -translate-y-1"></div>
                            <div className="absolute right-0 top-0 w-3 h-3 bg-purple-600 rounded-full -translate-y-1"></div>
                          </div>
                        )}
                        {touchState.action === 'pinch' && (
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-16 h-16 border-4 border-purple-500 rounded-full animate-pulse"></div>
                            <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-600 rounded-full -translate-x-1/2 translate-y-1/2"></div>
                          </div>
                        )}
                        {touchState.action === 'scroll' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1 h-32 bg-purple-500 rounded-full animate-pulse"></div>
                            <div className="absolute top-0 w-3 h-3 bg-purple-600 rounded-full -translate-x-1"></div>
                            <div className="absolute bottom-0 w-3 h-3 bg-purple-600 rounded-full -translate-x-1"></div>
                          </div>
                        )}
                        
                        {/* Touch info */}
                        <div className="absolute bottom-2 left-2 right-2 bg-purple-900/80 text-white p-2 rounded text-xs">
                          <div className="flex justify-between">
                            <span>Gesture: {touchState.gesture || 'None'}</span>
                            <span>Element: {touchState.currentElement || 'None'}</span>
                          </div>
                          <div className="text-purple-200">
                            Coordinates: ({touchState.coordinates.x}, {touchState.coordinates.y})
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Touch Info */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-3 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Hand className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-bold text-purple-900 dark:text-purple-100">Touch Information</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-purple-700 dark:text-purple-300">Action:</span>
                      <span className="text-purple-900 dark:text-purple-100 ml-1">{touchState.action || 'None'}</span>
                    </div>
                    <div>
                      <span className="text-purple-700 dark:text-purple-300">Target:</span>
                      <span className="text-purple-900 dark:text-purple-100 ml-1">{touchState.currentElement || 'None'}</span>
                    </div>
                    <div>
                      <span className="text-purple-700 dark:text-purple-300">X:</span>
                      <span className="text-purple-900 dark:text-purple-100 ml-1">{touchState.coordinates.x}</span>
                    </div>
                    <div>
                      <span className="text-purple-700 dark:text-purple-300">Y:</span>
                      <span className="text-purple-900 dark:text-purple-100 ml-1">{touchState.coordinates.y}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Touch Gesture Types */}
          <div className="grid md:grid-cols-4 gap-3">
            {[
              { gesture: 'Tap', description: 'Single finger tap', icon: '👆', color: 'purple' },
              { gesture: 'Swipe', description: 'Drag finger across screen', icon: '👉', color: 'pink' },
              { gesture: 'Pinch', description: 'Two finger zoom gesture', icon: '🤏', color: 'indigo' },
              { gesture: 'Scroll', description: 'Vertical scroll gesture', icon: '📜', color: 'violet' },
            ].map((item) => (
              <div key={item.gesture} className={`p-4 bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 dark:from-${item.color}-950/30 dark:to-${item.color}-950/20 rounded-lg border-2 border-${item.color}-200 dark:border-${item.color}-700`}>
                <div className="text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-bold text-purple-900 dark:text-purple-100 mb-1">{item.gesture}</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300">{item.description}</div>
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

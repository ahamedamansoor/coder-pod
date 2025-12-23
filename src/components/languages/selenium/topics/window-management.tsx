'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Maximize2,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Play,
  RefreshCw,
  Monitor,
  Minimize2,
  Maximize,
  Gauge,
  Settings
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function WindowManagement() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [windowState, setWindowState] = React.useState({
    size: 'normal' as 'normal' | 'maximized' | 'minimized' | 'fullscreen',
    width: 1024,
    height: 768,
    position: { x: 0, y: 0 }
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

  const simulateWindowManagement = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setWindowState({
      size: 'normal',
      width: 1024,
      height: 768,
      position: { x: 0, y: 0 }
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, nav: 7, getSize: 10, getPos: 11, setSize: 14, maximize: 17, minimize: 20, fullscreen: 23, quit: 26 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, nav: 7, getSize: 10, getPos: 11, setSize: 14, maximize: 17, minimize: 20, fullscreen: 23, quit: 25 };
      } else {
        return { init: 2, nav: 3, getSize: 6, getPos: 7, setSize: 10, maximize: 13, minimize: 16, fullscreen: 19, quit: 21 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      size: selectedLanguage === 'python' ? 'window_size' : 'windowSize',
      position: selectedLanguage === 'python' ? 'window_position' : 'windowPosition'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Window Management demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing Chrome browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔗 Navigating to example page...', delay: 1000 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 3, log: '✅ Page loaded', delay: 700 * multiplier, element: 'window', codeLine: lines.nav, variable: { name: 'driver', value: 'https://www.example.com' } },
      { step: 4, log: '📏 Getting window size...', delay: 800 * multiplier, element: 'window', codeLine: lines.getSize, variable: { name: 'driver', value: 'https://www.example.com' } },
      { step: 5, log: '✅ Size: 1024x768', delay: 700 * multiplier, element: 'window', codeLine: lines.getSize, variable: { name: varNames.size, value: '{width: 1024, height: 768}' } },
      { step: 6, log: '📍 Getting window position...', delay: 800 * multiplier, element: 'window', codeLine: lines.getPos, variable: { name: varNames.size, value: '{width: 1024, height: 768}' } },
      { step: 7, log: '✅ Position: (0, 0)', delay: 700 * multiplier, element: 'window', codeLine: lines.getPos, variable: { name: varNames.position, value: '{x: 0, y: 0}' } },
      { step: 8, log: '📐 Setting window size to 1280x800...', delay: 1200 * multiplier, element: 'window', action: 'resize', codeLine: lines.setSize, variable: { name: varNames.position, value: '{x: 0, y: 0}' } },
      { step: 9, log: '✅ Window resized', delay: 700 * multiplier, element: 'window', codeLine: lines.setSize, variable: { name: 'driver', value: 'window: 1280x800' } },
      { step: 10, log: '🔲 Maximizing window...', delay: 1200 * multiplier, element: 'window', action: 'maximize', codeLine: lines.maximize, variable: { name: 'driver', value: 'window: 1280x800' } },
      { step: 11, log: '✅ Window maximized', delay: 700 * multiplier, element: 'window', codeLine: lines.maximize, variable: { name: 'driver', value: 'window: maximized' } },
      { step: 12, log: '🔽 Minimizing window...', delay: 1200 * multiplier, element: 'window', action: 'minimize', codeLine: lines.minimize, variable: { name: 'driver', value: 'window: maximized' } },
      { step: 13, log: '✅ Window minimized', delay: 700 * multiplier, element: 'window', codeLine: lines.minimize, variable: { name: 'driver', value: 'window: minimized' } },
      { step: 14, log: '🖥️ Setting fullscreen...', delay: 1200 * multiplier, element: 'window', action: 'fullscreen', codeLine: lines.fullscreen, variable: { name: 'driver', value: 'window: minimized' } },
      { step: 15, log: '✅ Window in fullscreen', delay: 700 * multiplier, element: 'window', codeLine: lines.fullscreen, variable: { name: 'driver', value: 'window: fullscreen' } },
      { step: 16, log: '🎉 Window Management demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'driver', value: 'window: fullscreen' } },
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
      
      if (action === 'resize') {
        setWindowState(prev => ({ ...prev, width: 1280, height: 800 }));
      } else if (action === 'maximize') {
        setWindowState(prev => ({ ...prev, size: 'maximized', width: 1920, height: 1080 }));
      } else if (action === 'minimize') {
        setWindowState(prev => ({ ...prev, size: 'minimized' }));
      } else if (action === 'fullscreen') {
        setWindowState(prev => ({ ...prev, size: 'fullscreen', width: 1920, height: 1080 }));
      }
    }

    setIsRunning(false);
  };

  const getWindowManagementCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to page',
        'driver.get("https://www.example.com")',
        '',
        '# Get window size and position',
        'window_size = driver.get_window_size()',
        'window_position = driver.get_window_position()',
        '',
        '# Set window size',
        'driver.set_window_size(1280, 800)',
        '',
        '# Maximize window',
        'driver.maximize_window()',
        '',
        '# Minimize window',
        'driver.minimize_window()',
        '',
        '# Fullscreen window',
        'driver.fullscreen_window()',
        '',
        '# Close browser',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.Dimension;',
        'import org.openqa.selenium.Point;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com");',
        '',
        '// Get window size and position',
        'Dimension windowSize = driver.manage().window().getSize();',
        'Point windowPosition = driver.manage().window().getPosition();',
        '',
        '// Set window size',
        'driver.manage().window().setSize(new Dimension(1280, 800));',
        '',
        '// Maximize window',
        'driver.manage().window().maximize();',
        '',
        '// Minimize window',
        'driver.manage().window().minimize();',
        '',
        '// Fullscreen window',
        'driver.manage().window().fullscreen();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com\');',
        '',
        '// Get window size and position',
        'let windowSize = await driver.manage().window().getRect();',
        'let windowPosition = await driver.manage().window().getRect();',
        '',
        '// Set window size',
        'await driver.manage().window().setRect({ width: 1280, height: 800 });',
        '',
        '// Maximize window',
        'await driver.manage().window().maximize();',
        '',
        '// Minimize window',
        'await driver.manage().window().minimize();',
        '',
        '// Fullscreen window',
        'await driver.manage().window().fullscreen();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const windowManagementExample = {
    python: getWindowManagementCode('python').join('\n'),
    java: getWindowManagementCode('java').join('\n'),
    javascript: getWindowManagementCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Window Management"
        description="Learn to control browser window size and state"
        icon={Maximize2}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Maximize2 className="w-5 h-5 text-rose-600" />
            Window Control Methods
          </CardTitle>
          <CardDescription>
            Manage browser window dimensions and states
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Selenium provides methods to control the browser window size, position, and state:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>set_window_size():</strong> Set specific width and height</li>
            <li><strong>maximize_window():</strong> Maximize to full screen</li>
            <li><strong>minimize_window():</strong> Minimize window</li>
            <li><strong>fullscreen_window():</strong> Enter fullscreen mode</li>
            <li><strong>get_window_size():</strong> Get current dimensions</li>
            <li><strong>set_window_position():</strong> Set window position</li>
          </ul>

          <Alert className="border-rose-200 dark:border-rose-700 bg-rose-50 dark:bg-rose-950/20">
            <Maximize2 className="h-5 w-5 text-rose-600" />
            <AlertTitle className="text-rose-900 dark:text-rose-100">Responsive Testing</AlertTitle>
            <AlertDescription className="text-rose-800 dark:text-rose-200">
              Window management is crucial for testing responsive designs at different screen sizes and ensuring UI works across various viewport dimensions. Watch the interactive demo below!
            </AlertDescription>
          </Alert>

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
                      'border-rose-300 dark:border-rose-600 hover:border-rose-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-responsive"
                      value={option.value}
                      defaultChecked={option.value === 'medium'}
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
                    className="gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700"
                  >
                    <Play className="w-3 h-3" />
                    Run Demo
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
                <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{`from selenium import webdriver
from selenium.webdriver.common.by import By

# Initialize driver
driver = webdriver.Chrome()

# Test Desktop View (1920x1080)
driver.set_window_size(1920, 1080)
driver.get("https://example.com")
desktop_menu = driver.find_element(By.ID, "desktop-menu")
assert desktop_menu.is_displayed()

# Test Tablet View (768x1024)
driver.set_window_size(768, 1024)
tablet_menu = driver.find_element(By.ID, "tablet-menu")
assert tablet_menu.is_displayed()

# Test Mobile View (375x667)
driver.set_window_size(375, 667)
mobile_menu = driver.find_element(By.ID, "mobile-menu")
assert mobile_menu.is_displayed()

# Get current viewport size
size = driver.get_window_size()
print(f"Current viewport: {size['width']}x{size['height']}")

# Close driver
driver.quit()`}</pre>
              </div>
            </div>

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
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-3">
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
                <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                  <div className="space-y-4">
                    {/* Desktop View */}
                    <div className="bg-white dark:bg-slate-950 rounded-lg border-2 border-slate-300 dark:border-slate-600 p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-rose-900 dark:text-rose-100">Desktop</span>
                        <span className="text-xs text-rose-700 dark:text-rose-300">1920 × 1080</span>
                      </div>
                      <div className="bg-rose-50 dark:bg-rose-950/30 p-2 rounded border border-rose-200 dark:border-rose-700">
                        <div className="flex gap-2">
                          <div className="w-8 h-8 bg-rose-200 dark:bg-rose-800 rounded"></div>
                          <div className="flex-1 h-8 bg-rose-200 dark:bg-rose-800 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Tablet View */}
                    <div className="bg-white dark:bg-slate-950 rounded-lg border-2 border-slate-300 dark:border-slate-600 p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-rose-900 dark:text-rose-100">Tablet</span>
                        <span className="text-xs text-rose-700 dark:text-rose-300">768 × 1024</span>
                      </div>
                      <div className="bg-rose-50 dark:bg-rose-950/30 p-2 rounded border border-rose-200 dark:border-rose-700">
                        <div className="flex flex-col gap-2">
                          <div className="h-6 bg-rose-200 dark:bg-rose-800 rounded"></div>
                          <div className="h-6 bg-rose-200 dark:bg-rose-800 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile View */}
                    <div className="bg-white dark:bg-slate-950 rounded-lg border-2 border-slate-300 dark:border-slate-600 p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-rose-900 dark:text-rose-100">Mobile</span>
                        <span className="text-xs text-rose-700 dark:text-rose-300">375 × 667</span>
                      </div>
                      <div className="bg-rose-50 dark:bg-rose-950/30 p-2 rounded border border-rose-200 dark:border-rose-700">
                        <div className="space-y-1">
                          <div className="h-4 bg-rose-200 dark:bg-rose-800 rounded"></div>
                          <div className="h-4 bg-rose-200 dark:bg-rose-800 rounded w-3/4"></div>
                          <div className="h-4 bg-rose-200 dark:bg-rose-800 rounded w-2/3"></div>
                        </div>
                      </div>
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
                    <span className="text-rose-900 dark:text-rose-100 ml-1">1920×1080</span>
                  </div>
                  <div>
                    <span className="text-rose-700 dark:text-rose-300">Layout:</span>
                    <span className="text-rose-900 dark:text-rose-100 ml-1">Desktop</span>
                  </div>
                  <div>
                    <span className="text-rose-700 dark:text-rose-300">Breakpoint:</span>
                    <span className="text-rose-900 dark:text-rose-100 ml-1">lg</span>
                  </div>
                  <div>
                    <span className="text-rose-700 dark:text-rose-300">Orientation:</span>
                    <span className="text-rose-900 dark:text-rose-100 ml-1">Landscape</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-rose-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Window management syntax in Python, Java, and JavaScript
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

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
                {selectedLanguage === 'python' && `# Get current window size
size = driver.get_window_size()
print(f"Width: {size['width']}, Height: {size['height']}")

# Get window position
position = driver.get_window_position()
print(f"X: {position['x']}, Y: {position['y']}")

# Set window size
driver.set_window_size(1280, 800)

# Set window position
driver.set_window_position(100, 100)

# Maximize window
driver.maximize_window()

# Minimize window
driver.minimize_window()

# Fullscreen mode
driver.fullscreen_window()

# Set window rect (size + position)
driver.set_window_rect(x=0, y=0, width=1920, height=1080)`}
                {selectedLanguage === 'java' && `// Get current window size
Dimension size = driver.manage().window().getSize();
System.out.println("Width: " + size.width + ", Height: " + size.height);

// Get window position
Point position = driver.manage().window().getPosition();
System.out.println("X: " + position.x + ", Y: " + position.y);

// Set window size
driver.manage().window().setSize(new Dimension(1280, 800));

// Set window position
driver.manage().window().setPosition(new Point(100, 100));

// Maximize window
driver.manage().window().maximize();

// Minimize window
driver.manage().window().minimize();

// Fullscreen mode
driver.manage().window().fullscreen();`}
                {selectedLanguage === 'javascript' && `// Get current window rect (size + position)
let rect = await driver.manage().window().getRect();
console.log(\`Width: \${rect.width}, Height: \${rect.height}\`);
console.log(\`X: \${rect.x}, Y: \${rect.y}\`);

// Set window size and position
await driver.manage().window().setRect({
    width: 1280,
    height: 800,
    x: 100,
    y: 100
});

// Maximize window
await driver.manage().window().maximize();

// Minimize window
await driver.manage().window().minimize();

// Fullscreen mode
await driver.manage().window().fullscreen();`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Maximize2 className="w-5 h-5 text-rose-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch window management operations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Window Management Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch window resize, maximize, minimize, and fullscreen operations with inline variable values!
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
                      name="speed-window"
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
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateWindowManagement}
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
                    onClick={() => copyToClipboard(windowManagementExample[selectedLanguage], 'Window Management code')}
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
                    {getWindowManagementCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{windowManagementExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Window State</h4>
                </div>
                <div className="bg-slate-200 dark:bg-slate-700 p-4 rounded-lg">
                  <div className={`bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-300 dark:border-slate-600 overflow-hidden transition-all duration-500 ${
                    windowState.size === 'maximized' ? 'w-full h-96' :
                    windowState.size === 'minimized' ? 'w-48 h-12' :
                    windowState.size === 'fullscreen' ? 'w-full h-96' :
                    'w-80 h-64'
                  }`}>
                    <div className="bg-slate-200 dark:bg-slate-700 p-2 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Browser Window
                      </div>
                    </div>
                    {windowState.size !== 'minimized' && (
                      <div className="p-6 flex flex-col items-center justify-center h-full">
                        {windowState.size === 'maximized' && <Maximize className="w-16 h-16 text-rose-600 mb-2" />}
                        {windowState.size === 'fullscreen' && <Maximize2 className="w-16 h-16 text-rose-600 mb-2" />}
                        {windowState.size === 'normal' && <Monitor className="w-16 h-16 text-rose-600 mb-2" />}
                        <Badge className="bg-rose-600 mb-2">{windowState.size.toUpperCase()}</Badge>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {windowState.width} x {windowState.height}
                        </p>
                      </div>
                    )}
                  </div>
                  {windowState.size === 'minimized' && (
                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <Minimize2 className="w-4 h-4" />
                      <span>Window minimized to taskbar</span>
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
            <Maximize2 className="w-5 h-5 text-blue-600" />
            Window States
          </CardTitle>
          <CardDescription>Four main window states</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Monitor className="w-5 h-5 text-blue-600" />
                <Badge className="bg-blue-600">set_window_size()</Badge>
              </div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Custom Size</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Set specific width and height dimensions
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Maximize className="w-5 h-5 text-green-600" />
                <Badge className="bg-green-600">maximize_window()</Badge>
              </div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Maximized</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Fill screen while showing taskbar
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Minimize2 className="w-5 h-5 text-purple-600" />
                <Badge className="bg-purple-600">minimize_window()</Badge>
              </div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Minimized</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Minimize to taskbar
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-2">
                <Maximize2 className="w-5 h-5 text-orange-600" />
                <Badge className="bg-orange-600">fullscreen_window()</Badge>
              </div>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">Fullscreen</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Fill entire screen, hide taskbar
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Maximize for Stability</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Maximize window at test start for consistent element positions
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Test Responsive Design</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use different sizes to test mobile, tablet, and desktop views
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Set Size Early</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Set window size before navigating to ensure proper page rendering
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Avoid Minimize</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Minimized windows can't interact with elements
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
              <AlertTitle className="text-red-900 dark:text-red-100">Elements Not Visible</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Elements not visible at small window sizes<br/>
                <strong>Solution:</strong> Maximize window or set appropriate size for responsive design
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Minimize Blocks Interaction</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Can't interact with elements when minimized<br/>
                <strong>Solution:</strong> Restore window before interacting with elements
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Size Not Applied</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Window size doesn't change<br/>
                <strong>Solution:</strong> Some browsers have minimum size limits
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
              <Badge className="bg-yellow-600 mb-2">Mobile Emulation</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Test Mobile Viewports</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                # iPhone X viewport<br/>
                driver.set_window_size(375, 812)<br/>
                # iPad viewport<br/>
                driver.set_window_size(768, 1024)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Set Rect</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Set Size and Position Together</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                driver.set_window_rect(x=0, y=0, width=1920, height=1080)
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Headless Mode</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Run Without Window</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                options = webdriver.ChromeOptions()<br/>
                options.add_argument('--headless')<br/>
                options.add_argument('--window-size=1920,1080')<br/>
                driver = webdriver.Chrome(options=options)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

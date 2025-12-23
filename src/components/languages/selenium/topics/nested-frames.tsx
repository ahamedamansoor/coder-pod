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
  Gauge,
  Frame
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function NestedFrames() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [frameState, setFrameState] = React.useState({
    level: 0,
    path: ['main'],
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

  const simulateNestedFrames = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setFrameState({ level: 0, path: ['main'], action: '' });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, switchOuter: 7, switchMiddle: 10, switchInner: 13, findElement: 16, parentFrame: 19, defaultContent: 22, quit: 25 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, switchOuter: 7, switchMiddle: 10, switchInner: 13, findElement: 16, parentFrame: 19, defaultContent: 22, quit: 24 };
      } else {
        return { init: 2, switchOuter: 5, switchMiddle: 8, switchInner: 11, findElement: 14, parentFrame: 17, defaultContent: 20, quit: 22 };
      }
    };
    const lines = getCodeLines();
    
    const steps = [
      { step: 0, log: '🚀 Starting Nested Frames demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Initializing browser...', delay: 600 * multiplier, element: null, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '📍 Current: Main page (Level 0)', delay: 800 * multiplier, element: 'main', codeLine: lines.init, variable: { name: 'current_level', value: '0' } },
      { step: 3, log: '🔄 Switching to outer frame...', delay: 1200 * multiplier, element: null, action: 'switch-outer', codeLine: lines.switchOuter, variable: { name: 'current_level', value: '0' } },
      { step: 4, log: '✅ In outer frame (Level 1)', delay: 700 * multiplier, element: 'outer', codeLine: lines.switchOuter, variable: { name: 'current_level', value: '1' } },
      { step: 5, log: '🔄 Switching to middle frame...', delay: 1200 * multiplier, element: null, action: 'switch-middle', codeLine: lines.switchMiddle, variable: { name: 'current_level', value: '1' } },
      { step: 6, log: '✅ In middle frame (Level 2)', delay: 700 * multiplier, element: 'middle', codeLine: lines.switchMiddle, variable: { name: 'current_level', value: '2' } },
      { step: 7, log: '🔄 Switching to inner frame...', delay: 1200 * multiplier, element: null, action: 'switch-inner', codeLine: lines.switchInner, variable: { name: 'current_level', value: '2' } },
      { step: 8, log: '✅ In inner frame (Level 3)', delay: 700 * multiplier, element: 'inner', codeLine: lines.switchInner, variable: { name: 'current_level', value: '3' } },
      { step: 9, log: '🔍 Finding element in innermost frame...', delay: 1200 * multiplier, element: 'inner', codeLine: lines.findElement, variable: { name: 'current_level', value: '3' } },
      { step: 10, log: '✅ Element found!', delay: 700 * multiplier, element: 'inner', codeLine: lines.findElement, variable: { name: 'element', value: '<WebElement: button#submit>' } },
      { step: 11, log: '⬆️ Going to parent frame...', delay: 1200 * multiplier, element: null, action: 'parent', codeLine: lines.parentFrame, variable: { name: 'element', value: '<WebElement: button#submit>' } },
      { step: 12, log: '✅ Back to middle frame (Level 2)', delay: 700 * multiplier, element: 'middle', codeLine: lines.parentFrame, variable: { name: 'current_level', value: '2' } },
      { step: 13, log: '⬆️ Going to parent frame...', delay: 1200 * multiplier, element: null, action: 'parent', codeLine: lines.parentFrame, variable: { name: 'current_level', value: '2' } },
      { step: 14, log: '✅ Back to outer frame (Level 1)', delay: 700 * multiplier, element: 'outer', codeLine: lines.parentFrame, variable: { name: 'current_level', value: '1' } },
      { step: 15, log: '🔙 Switching to main content...', delay: 1200 * multiplier, element: null, action: 'default', codeLine: lines.defaultContent, variable: { name: 'current_level', value: '1' } },
      { step: 16, log: '✅ Back to main page (Level 0)', delay: 700 * multiplier, element: 'main', codeLine: lines.defaultContent, variable: { name: 'current_level', value: '0' } },
      { step: 17, log: '🎉 Nested Frames demo completed!', delay: 500 * multiplier, element: null, codeLine: lines.quit, variable: { name: 'current_level', value: '0' } },
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
      
      if (action === 'switch-outer') {
        setFrameState({ level: 1, path: ['main', 'outer'], action: 'Switched to outer frame' });
      } else if (action === 'switch-middle') {
        setFrameState({ level: 2, path: ['main', 'outer', 'middle'], action: 'Switched to middle frame' });
      } else if (action === 'switch-inner') {
        setFrameState({ level: 3, path: ['main', 'outer', 'middle', 'inner'], action: 'Switched to inner frame' });
      } else if (action === 'parent') {
        const currentLevel = frameState.level;
        if (currentLevel === 3) {
          setFrameState({ level: 2, path: ['main', 'outer', 'middle'], action: 'Back to parent frame' });
        } else if (currentLevel === 2) {
          setFrameState({ level: 1, path: ['main', 'outer'], action: 'Back to parent frame' });
        }
      } else if (action === 'default') {
        setFrameState({ level: 0, path: ['main'], action: 'Back to main content' });
      }
    }

    setIsRunning(false);
  };

  const getNestedFramesCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# Switch to outer frame',
        'driver.switch_to.frame("outer-frame")',
        '',
        '# Switch to middle frame (nested inside outer)',
        'driver.switch_to.frame("middle-frame")',
        '',
        '# Switch to inner frame (nested inside middle)',
        'driver.switch_to.frame("inner-frame")',
        '',
        '# Now we can interact with elements in innermost frame',
        'element = driver.find_element(By.ID, "submit")',
        '',
        '# Go back one level to parent frame (Selenium 4+)',
        'driver.switch_to.parent_frame()  # Back to middle',
        'driver.switch_to.parent_frame()  # Back to outer',
        '',
        '# Or jump directly to main content',
        'driver.switch_to.default_content()',
        '',
        '# Close browser',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        '',
        'WebDriver driver = new ChromeDriver();',
        '',
        '// Switch to outer frame',
        'driver.switchTo().frame("outer-frame");',
        '',
        '// Switch to middle frame (nested inside outer)',
        'driver.switchTo().frame("middle-frame");',
        '',
        '// Switch to inner frame (nested inside middle)',
        'driver.switchTo().frame("inner-frame");',
        '',
        '// Now we can interact with elements in innermost frame',
        'WebElement element = driver.findElement(By.id("submit"));',
        '',
        '// Go back one level to parent frame (Selenium 4+)',
        'driver.switchTo().parentFrame();  // Back to middle',
        'driver.switchTo().parentFrame();  // Back to outer',
        '',
        '// Or jump directly to main content',
        'driver.switchTo().defaultContent();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'import { Builder, By } from \'selenium-webdriver\';',
        '',
        'const driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Switch to outer frame',
        'await driver.switchTo().frame(\'outer-frame\');',
        '',
        '// Switch to middle frame (nested inside outer)',
        'await driver.switchTo().frame(\'middle-frame\');',
        '',
        '// Switch to inner frame (nested inside middle)',
        'await driver.switchTo().frame(\'inner-frame\');',
        '',
        '// Now we can interact with elements in innermost frame',
        'const element = await driver.findElement(By.id(\'submit\'));',
        '',
        '// Go back one level to parent frame (Selenium 4+)',
        'await driver.switchTo().parentFrame();  // Back to middle',
        'await driver.switchTo().parentFrame();  // Back to outer',
        '',
        '// Or jump directly to main content',
        'await driver.switchTo().defaultContent();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const nestedFramesExample = {
    python: getNestedFramesCode('python').join('\n'),
    java: getNestedFramesCode('java').join('\n'),
    javascript: getNestedFramesCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Nested Frames"
        description="Navigate through multiple levels of nested iframes"
        icon={Layers}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-violet-600" />
            Understanding Nested Frames
          </CardTitle>
          <CardDescription>
            Frames within frames - hierarchical navigation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Nested frames occur when iframes are embedded inside other iframes, creating a hierarchy. You must switch through each level sequentially to reach deeply nested content.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Sequential Switching:</strong> Must switch through each parent frame to reach nested frames</li>
            <li><strong>parent_frame() (Selenium 4+):</strong> Go back one level in the hierarchy</li>
            <li><strong>default_content():</strong> Jump directly back to main page from any level</li>
            <li><strong>Frame Path:</strong> Track your position in the frame hierarchy</li>
          </ul>

          <Alert className="border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-violet-950/20">
            <Layers className="h-5 w-5 text-violet-600" />
            <AlertTitle className="text-violet-900 dark:text-violet-100">Hierarchical Navigation</AlertTitle>
            <AlertDescription className="text-violet-800 dark:text-violet-200">
              To access a frame nested 3 levels deep, you must call switch_to.frame() three times, once for each level. Use parent_frame() to go back one level at a time.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-violet-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Nested frame navigation in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-violet-600 text-violet-600 dark:text-violet-400'
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
                {selectedLanguage === 'python' && `# Navigate through nested frames
driver.switch_to.frame("outer")
driver.switch_to.frame("middle")
driver.switch_to.frame("inner")

# Now in innermost frame
element = driver.find_element(By.ID, "target")
element.click()

# Method 1: Go back level by level (Selenium 4+)
driver.switch_to.parent_frame()  # Back to middle
driver.switch_to.parent_frame()  # Back to outer
driver.switch_to.parent_frame()  # Back to main

# Method 2: Jump directly to main
driver.switch_to.default_content()

# Navigate by index through nested frames
driver.switch_to.frame(0)  # First frame in main
driver.switch_to.frame(0)  # First frame in outer
driver.switch_to.frame(0)  # First frame in middle

# Mixed approach
driver.switch_to.frame("outer-frame")
iframe = driver.find_element(By.ID, "middle-frame")
driver.switch_to.frame(iframe)
driver.switch_to.frame(0)  # First frame in middle

# Track frame depth
frame_path = ["main"]
driver.switch_to.frame("outer")
frame_path.append("outer")
driver.switch_to.frame("middle")
frame_path.append("middle")
print(f"Current path: {' > '.join(frame_path)}")

# Go back to specific level
while len(frame_path) > 2:  # Go back to outer
    driver.switch_to.parent_frame()
    frame_path.pop()`}
                {selectedLanguage === 'java' && `// Navigate through nested frames
driver.switchTo().frame("outer");
driver.switchTo().frame("middle");
driver.switchTo().frame("inner");

// Now in innermost frame
WebElement element = driver.findElement(By.id("target"));
element.click();

// Method 1: Go back level by level (Selenium 4+)
driver.switchTo().parentFrame();  // Back to middle
driver.switchTo().parentFrame();  // Back to outer
driver.switchTo().parentFrame();  // Back to main

// Method 2: Jump directly to main
driver.switchTo().defaultContent();

// Navigate by index through nested frames
driver.switchTo().frame(0);  // First frame in main
driver.switchTo().frame(0);  // First frame in outer
driver.switchTo().frame(0);  // First frame in middle

// Mixed approach
driver.switchTo().frame("outer-frame");
WebElement iframe = driver.findElement(By.id("middle-frame"));
driver.switchTo().frame(iframe);
driver.switchTo().frame(0);  // First frame in middle

// Track frame depth
List<String> framePath = new ArrayList<>();
framePath.add("main");
driver.switchTo().frame("outer");
framePath.add("outer");
driver.switchTo().frame("middle");
framePath.add("middle");
System.out.println("Current path: " + String.join(" > ", framePath));

// Go back to specific level
while (framePath.size() > 2) {  // Go back to outer
    driver.switchTo().parentFrame();
    framePath.remove(framePath.size() - 1);
}`}
                {selectedLanguage === 'javascript' && `// Navigate through nested frames
await driver.switchTo().frame('outer');
await driver.switchTo().frame('middle');
await driver.switchTo().frame('inner');

// Now in innermost frame
let element = await driver.findElement(By.id('target'));
await element.click();

// Method 1: Go back level by level (Selenium 4+)
await driver.switchTo().parentFrame();  // Back to middle
await driver.switchTo().parentFrame();  // Back to outer
await driver.switchTo().parentFrame();  // Back to main

// Method 2: Jump directly to main
await driver.switchTo().defaultContent();

// Navigate by index through nested frames
await driver.switchTo().frame(0);  // First frame in main
await driver.switchTo().frame(0);  // First frame in outer
await driver.switchTo().frame(0);  // First frame in middle

// Mixed approach
await driver.switchTo().frame('outer-frame');
let iframe = await driver.findElement(By.id('middle-frame'));
await driver.switchTo().frame(iframe);
await driver.switchTo().frame(0);  // First frame in middle

// Track frame depth
let framePath = ['main'];
await driver.switchTo().frame('outer');
framePath.push('outer');
await driver.switchTo().frame('middle');
framePath.push('middle');
console.log(\`Current path: \${framePath.join(' > ')}\`);

// Go back to specific level
while (framePath.length > 2) {  // Go back to outer
    await driver.switchTo().parentFrame();
    framePath.pop();
}`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-violet-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch nested frame navigation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Nested Frames Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch navigation through 3 levels of nested frames!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 p-4 rounded-lg border-2 border-violet-200 dark:border-violet-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-violet-600 dark:text-violet-400" />
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
                        ? 'border-violet-500 bg-violet-100 dark:bg-violet-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-violet-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-nested"
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
                  <Code className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateNestedFrames}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
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
                    onClick={() => copyToClipboard(nestedFramesExample[selectedLanguage], 'Nested Frames code')}
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
                    {getNestedFramesCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-violet-200 dark:bg-violet-900/50 border-l-4 border-violet-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-violet-900 dark:text-violet-100' : 'text-slate-800 dark:text-slate-300'}>
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
                      <div className="mt-4 p-3 bg-violet-50 dark:bg-violet-950/30 rounded border border-violet-200 dark:border-violet-700">
                        <div className="text-[10px] font-bold text-violet-900 dark:text-violet-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-violet-800 dark:text-violet-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-violet-600 dark:text-violet-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{nestedFramesExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Frame Hierarchy Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[500px]">
                  {/* Main Page */}
                  <div className={`p-4 rounded-lg border-2 ${selectedElement === 'main' ? 'border-violet-500 bg-violet-50 dark:bg-violet-950/30 ring-2 ring-violet-500' : 'border-slate-300 dark:border-slate-600'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Layers className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Main Page (Level 0)</span>
                    </div>
                    
                    {/* Outer Frame */}
                    <div className={`p-3 rounded-lg border-2 border-dashed ${selectedElement === 'outer' ? 'border-violet-500 bg-violet-100 dark:bg-violet-950/50 ring-2 ring-violet-500' : 'border-blue-400 dark:border-blue-600'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Frame className="w-3 h-3 text-blue-600" />
                        <span className="text-[10px] font-semibold text-blue-900 dark:text-blue-100">Outer Frame (Level 1)</span>
                      </div>
                      
                      {/* Middle Frame */}
                      <div className={`p-3 rounded-lg border-2 border-dashed ${selectedElement === 'middle' ? 'border-violet-500 bg-violet-100 dark:bg-violet-950/50 ring-2 ring-violet-500' : 'border-green-400 dark:border-green-600'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Frame className="w-3 h-3 text-green-600" />
                          <span className="text-[10px] font-semibold text-green-900 dark:text-green-100">Middle Frame (Level 2)</span>
                        </div>
                        
                        {/* Inner Frame */}
                        <div className={`p-2 rounded-lg border-2 border-dashed ${selectedElement === 'inner' ? 'border-violet-500 bg-violet-100 dark:bg-violet-950/50 ring-2 ring-violet-500' : 'border-orange-400 dark:border-orange-600'}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <Frame className="w-3 h-3 text-orange-600" />
                            <span className="text-[10px] font-semibold text-orange-900 dark:text-orange-100">Inner Frame (Level 3)</span>
                          </div>
                          <Button size="sm" className="w-full text-[10px] h-6 bg-orange-600">
                            Submit Button
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {frameState.action && (
                    <div className="mt-4 p-3 bg-violet-100 dark:bg-violet-950/50 rounded-lg border-2 border-violet-300 dark:border-violet-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Layers className="w-4 h-4 text-violet-600" />
                        <span className="text-sm font-semibold text-violet-900 dark:text-violet-100">
                          {frameState.action}
                        </span>
                      </div>
                      <div className="text-xs text-violet-700 dark:text-violet-300">
                        Level: {frameState.level} | Path: {frameState.path.join(' → ')}
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
            <Layers className="w-5 h-5 text-blue-600" />
            Navigation Methods
          </CardTitle>
          <CardDescription>Two ways to navigate nested frames</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">parent_frame()</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Go Back One Level</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                driver.switch_to.parent_frame()
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                ✓ Selenium 4+ feature<br/>
                ✓ Navigate up one level<br/>
                ✓ Maintains frame hierarchy
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">default_content()</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Jump to Main</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto mb-2">
                driver.switch_to.default_content()
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                ✓ Works in all versions<br/>
                ✓ Jump from any level<br/>
                ✓ Fastest way to main page
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Track Frame Depth</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Keep a counter or list to track how deep you are in the hierarchy
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use parent_frame()</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Prefer parent_frame() over default_content() for step-by-step navigation
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Reset After Operations</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always return to default_content() after nested frame operations
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Document Frame Structure</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Comment your code with frame hierarchy for maintainability
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
              <AlertTitle className="text-red-900 dark:text-red-100">Lost in Frame Hierarchy</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Don't know which frame level you're at<br/>
                <strong>Solution:</strong> Use default_content() to reset, then navigate from main page
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Can't Find Nested Frame</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Frame not found when switching<br/>
                <strong>Solution:</strong> Ensure you're in the correct parent frame before switching to nested frame
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">parent_frame() Not Working</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> parent_frame() method not available<br/>
                <strong>Solution:</strong> Upgrade to Selenium 4+ or use default_content() instead
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Advanced Nested Frame Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
              <Badge className="bg-yellow-600 mb-2">Frame Path Tracking</Badge>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Track Your Location</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                frame_stack = []<br/>
                <br/>
                def switch_to_frame(name):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;driver.switch_to.frame(name)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;frame_stack.append(name)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;print(f"Path: &#123;' → '.join(frame_stack)&#125;")<br/>
                <br/>
                def go_to_parent():<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;driver.switch_to.parent_frame()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;frame_stack.pop()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;print(f"Path: &#123;' → '.join(frame_stack)&#125;")
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Recursive Frame Search</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Find Element in Any Frame</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                def find_in_frames(locator, depth=0, max_depth=3):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;if depth &gt; max_depth:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return None<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;try:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return driver.find_element(*locator)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;except:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iframes = driver.find_elements(By.TAG_NAME, "iframe")<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for iframe in iframes:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.switch_to.frame(iframe)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = find_in_frames(locator, depth+1, max_depth)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if result:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return result<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.switch_to.parent_frame()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;return None
              </code>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Frame Context Manager</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Auto-Switch Back</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                from contextlib import contextmanager<br/>
                <br/>
                @contextmanager<br/>
                def frame_context(frame_ref):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;driver.switch_to.frame(frame_ref)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;try:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yield<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;finally:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.switch_to.parent_frame()<br/>
                <br/>
                # Usage<br/>
                with frame_context("outer"):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;with frame_context("middle"):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;element = driver.find_element(By.ID, "target")
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

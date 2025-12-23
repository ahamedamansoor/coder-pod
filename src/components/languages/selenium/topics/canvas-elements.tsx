'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Brush,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Search,
  Eye,
  MousePointer,
  Play,
  RefreshCw,
  Terminal,
  Monitor,
  Palette,
  PenTool,
  Square,
  Circle,
  Triangle,
  Move,
  Maximize2
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function CanvasElementsComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [canvasState, setCanvasState] = React.useState({
    drawn: false,
    clicked: false,
    coordinates: { x: 0, y: 0 }
  });
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});

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

  const simulateCanvasInteraction = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setCanvasState({ drawn: false, clicked: false, coordinates: { x: 0, y: 0 } });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findCanvas: 10, getContext: 13, drawRect: 16, clickCanvas: 19, getCoords: 22, quit: 25 };
      } else if (selectedLanguage === 'java') {
        return { nav: 6, findCanvas: 9, getContext: 12, drawRect: 15, clickCanvas: 18, getCoords: 21, quit: 24 };
      } else {
        return { nav: 3, findCanvas: 6, getContext: 9, drawRect: 12, clickCanvas: 15, getCoords: 18, quit: 21 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      canvas: selectedLanguage === 'python' ? 'canvas' : 'canvas',
      context: selectedLanguage === 'python' ? 'context' : 'context',
      action: selectedLanguage === 'python' ? 'actions' : 'actions'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Canvas elements interaction demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading page with HTML5 Canvas...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🎨 Finding canvas element by ID...', delay: 800 * multiplier, element: null, codeLine: lines.findCanvas },
      { step: 3, log: '✅ Found canvas: <canvas id="drawing-canvas"></canvas>', delay: 700 * multiplier, element: 'drawing-canvas', codeLine: lines.findCanvas, variable: { name: varNames.canvas, value: '<WebElement: canvas#drawing-canvas>' } },
      { step: 4, log: '🖌️ Getting 2D rendering context using JavaScript...', delay: 1000 * multiplier, element: 'drawing-canvas', codeLine: lines.getContext, variable: { name: varNames.context, value: '<CanvasRenderingContext2D>' } },
      { step: 5, log: '📐 Drawing rectangle on canvas...', delay: 800 * multiplier, element: 'drawing-canvas', action: 'drawShape', codeLine: lines.drawRect, variable: { name: 'rectangle', value: 'drawn at (50, 50)' } },
      { step: 6, log: '🖱️  Simulating click at coordinates (150, 100)...', delay: 700 * multiplier, element: 'drawing-canvas', codeLine: lines.clickCanvas, variable: { name: 'clickPoint', value: '(150, 100)' } },
      { step: 7, log: '📍 Getting click coordinates from canvas...', delay: 1000 * multiplier, element: 'drawing-canvas', action: 'clickCanvas', codeLine: lines.getCoords, variable: { name: 'coordinates', value: 'x: 150, y: 100' } },
      { step: 8, log: '🎉 Canvas interaction completed successfully!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
    ];

    for (const { step, log, delay, element, action, codeLine, variable } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
      setSelectedElement(element);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (action === 'drawShape') {
        setCanvasState(prev => ({ ...prev, drawn: true }));
      } else if (action === 'clickCanvas') {
        setCanvasState(prev => ({ ...prev, clicked: true, coordinates: { x: 150, y: 100 } }));
      }
    }

    setIsRunning(false);
  };

  const getCanvasCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.common.action_chains import ActionChains',
        '',
        '# Initialize Chrome browser instance',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to page with Canvas',
        'driver.get("https://www.example.com/canvas")',
        '',
        '# 🎨 Find the canvas element',
        'canvas = driver.find_element(By.ID, "drawing-canvas")',
        '',
        '# 🖌️ Get 2D context using JavaScript executor',
        'context = driver.execute_script(',
        '    "return arguments[0].getContext(\'2d\')", canvas',
        ')',
        '',
        '# 📐 Draw on canvas using JavaScript',
        'driver.execute_script(',
        '    "var ctx = arguments[0].getContext(\'2d\');"',
        '    "ctx.fillStyle = \'red\'; ctx.fillRect(50, 50, 100, 100);"',
        ', canvas)',
        '',
        '# 🖱️ Click on canvas using ActionChains',
        'actions = ActionChains(driver)',
        'actions.move_to_element(canvas).click().perform()',
        '',
        '# 📍 Get canvas coordinates',
        'coords = driver.execute_script(',
        '    "return {x: 150, y: 100}"  # Simulated coordinates',
        ')',
        '',
        '# Close the browser',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import org.openqa.selenium.interactions.Actions;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example.com/canvas");',
        '',
        '// 🎨 Find the canvas element',
        'WebElement canvas = driver.findElement(By.id("drawing-canvas"));',
        '',
        '// 🖌️ Get 2D context using JavaScript executor',
        'Object context = ((JavascriptExecutor)driver)',
        '    .executeScript("return arguments[0].getContext(\'2d\')", canvas);',
        '',
        '// 📐 Draw on canvas using JavaScript',
        '((JavascriptExecutor)driver).executeScript(',
        '    "var ctx = arguments[0].getContext(\'2d\');" +',
        '    "ctx.fillStyle = \'red\'; ctx.fillRect(50, 50, 100, 100);"',
        ', canvas);',
        '',
        '// 🖱️ Click on canvas using Actions',
        'Actions actions = new Actions(driver);',
        'actions.moveToElement(canvas).click().build().perform();',
        '',
        '// 📍 Get canvas coordinates',
        'Object coords = ((JavascriptExecutor)driver)',
        '    .executeScript("return {x: 150, y: 100}");',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com/canvas\');',
        '',
        '// 🎨 Find the canvas element',
        'let canvas = await driver.findElement(By.id(\'drawing-canvas\'));',
        '',
        '// 🖌️ Get 2D context using JavaScript executor',
        'let context = await driver.executeScript(',
        '    \'return arguments[0].getContext(\\\'2d\\\')\', canvas',
        ');',
        '',
        '// 📐 Draw on canvas using JavaScript',
        'await driver.executeScript(',
        '    \'var ctx = arguments[0].getContext(\\\'2d\\\');\' +',
        '    \'ctx.fillStyle = \\\'red\\\'; ctx.fillRect(50, 50, 100, 100);\'',
        ', canvas);',
        '',
        '// 🖱️ Click on canvas using Actions',
        'let actions = driver.actions();',
        'await actions.move({origin: canvas}).click().perform();',
        '',
        '// 📍 Get canvas coordinates',
        'let coords = await driver.executeScript(',
        '    \'return {x: 150, y: 100}\'  // Simulated coordinates',
        ');',
        '',
        'await driver.quit();',
      ];
    }
  };

  const canvasExample = {
    python: getCanvasCode().join('\n'),
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com/canvas");

// 🎨 Find the canvas element
WebElement canvas = driver.findElement(By.id("drawing-canvas"));

// 🖌️ Get 2D context using JavaScript executor
Object context = ((JavascriptExecutor)driver)
    .executeScript("return arguments[0].getContext('2d')", canvas);

// 📐 Draw on canvas using JavaScript
((JavascriptExecutor)driver).executeScript(
    "var ctx = arguments[0].getContext('2d');" +
    "ctx.fillStyle = 'red'; ctx.fillRect(50, 50, 100, 100);"
, canvas);

// 🖱️ Click on canvas using Actions
Actions actions = new Actions(driver);
actions.moveToElement(canvas).click().build().perform();

// 📍 Get canvas coordinates
Object coords = ((JavascriptExecutor)driver)
    .executeScript("return {x: 150, y: 100}");

driver.quit();`,
    javascript: `const { Builder, By } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com/canvas');

// 🎨 Find the canvas element
let canvas = await driver.findElement(By.id('drawing-canvas'));

// 🖌️ Get 2D context using JavaScript executor
let context = await driver.executeScript(
    'return arguments[0].getContext(\'2d\')', canvas
);

// 📐 Draw on canvas using JavaScript
await driver.executeScript(
    'var ctx = arguments[0].getContext(\'2d\');' +
    'ctx.fillStyle = \'red\'; ctx.fillRect(50, 50, 100, 100);'
, canvas);

// 🖱️ Click on canvas using Actions
let actions = driver.actions();
await actions.move({origin: canvas}).click().perform();

// 📍 Get canvas coordinates
let coords = await driver.executeScript(
    'return {x: 150, y: 100}'  // Simulated coordinates
);

await driver.quit();`,
  };

  const advancedCanvasCode = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://www.example.com/canvas")

# 1. Wait for canvas to be ready
wait = WebDriverWait(driver, 10)
canvas = wait.until(EC.presence_of_element_located((By.ID, "drawing-canvas")))

# 2. Get canvas dimensions
dimensions = driver.execute_script(
    "return {width: arguments[0].width, height: arguments[0].height}", canvas
)
print(f"Canvas size: {dimensions['width']}x{dimensions['height']}")

# 3. Draw complex shapes
driver.execute_script("""
    var ctx = arguments[0].getContext('2d');
    // Draw circle
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    // Draw line
    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.lineTo(300, 150);
    ctx.strokeStyle = 'green';
    ctx.stroke();
""", canvas)

# 4. Perform drag operation on canvas
actions = ActionChains(driver)
actions.click_and_hold(canvas).move_by_offset(100, 100).release().perform()

# 5. Get pixel data at specific position
pixel_data = driver.execute_script("""
    var ctx = arguments[0].getContext('2d');
    var imageData = ctx.getImageData(150, 100, 1, 1);
    return imageData.data;
""", canvas)

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.Map;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com/canvas");

// 1. Wait for canvas to be ready
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement canvas = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("drawing-canvas")));

// 2. Get canvas dimensions
Map<String, Object> dimensions = (Map<String, Object>) ((JavascriptExecutor)driver)
    .executeScript("return {width: arguments[0].width, height: arguments[0].height}", canvas);
System.out.println("Canvas size: " + dimensions.get("width") + "x" + dimensions.get("height"));

// 3. Draw complex shapes
((JavascriptExecutor)driver).executeScript("""
    var ctx = arguments[0].getContext('2d');
    // Draw circle
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    // Draw line
    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.lineTo(300, 150);
    ctx.strokeStyle = 'green';
    ctx.stroke();
""", canvas);

// 4. Perform drag operation on canvas
Actions actions = new Actions(driver);
actions.clickAndHold(canvas).moveByOffset(100, 100).release().build().perform();

// 5. Get pixel data at specific position
Object pixelData = ((JavascriptExecutor)driver).executeScript("""
    var ctx = arguments[0].getContext('2d');
    var imageData = ctx.getImageData(150, 100, 1, 1);
    return imageData.data;
""", canvas);

driver.quit();`,
    javascript: `const { Builder, By, until } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com/canvas');

// 1. Wait for canvas to be ready
let canvas = await driver.wait(until.elementLocated(By.id('drawing-canvas')), 10000);

// 2. Get canvas dimensions
let dimensions = await driver.executeScript(
    'return {width: arguments[0].width, height: arguments[0].height}', canvas
);
console.log(\`Canvas size: \${dimensions.width}x\${dimensions.height}\`);

// 3. Draw complex shapes
await driver.executeScript(\`
    var ctx = arguments[0].getContext('2d');
    // Draw circle
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    // Draw line
    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.lineTo(300, 150);
    ctx.strokeStyle = 'green';
    ctx.stroke();
\`, canvas);

// 4. Perform drag operation on canvas
let actions = driver.actions();
await actions.move({origin: canvas}).press().move({origin: canvas, x: 100, y: 100}).release().perform();

// 5. Get pixel data at specific position
let pixelData = await driver.executeScript(\`
    var ctx = arguments[0].getContext('2d');
    var imageData = ctx.getImageData(150, 100, 1, 1);
    return imageData.data;
\`, canvas);

await driver.quit();`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Brush}
        category="Selenium · Advanced Locators"
        title="Canvas Elements"
        description="Master HTML5 Canvas interaction using JavaScript executor, ActionChains, and advanced drawing techniques"
        colorTheme="orange"
        badges={[
          { label: 'Graphics', variant: 'success' },
          { label: 'JavaScript Required', variant: 'info' },
          { label: 'Interactive', variant: 'secondary' },
        ]}
      />

      {/* Why Canvas Elements */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Brush className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Understanding Canvas Elements
          </CardTitle>
          <CardDescription>Interactive graphics and drawing surfaces</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Drawing Surface</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Canvas provides a drawable surface defined with HTML5
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PenTool className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-red-900 dark:text-red-100 mb-1">JavaScript Control</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Canvas content is controlled via JavaScript, not DOM
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/30 dark:to-purple-950/30 rounded-lg border-2 border-pink-200 dark:border-pink-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MousePointer className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-1">Mouse Interactions</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Supports click, drag, and coordinate-based interactions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Dynamic Graphics</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Real-time graphics, charts, games, and image manipulation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-orange-600" />
            Canvas Interaction Patterns
          </CardTitle>
          <CardDescription>
            JavaScript executor and ActionChains for Canvas manipulation
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Language Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            {(['python', 'java', 'javascript'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedLanguage === lang
                    ? 'border-b-2 border-orange-600 text-orange-600 dark:text-orange-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
                {selectedLanguage === 'python' && `# Draw on canvas using JavaScript executor
driver.execute_script(
    "var ctx = arguments[0].getContext('2d');" +
    "ctx.fillStyle = 'red'; ctx.fillRect(50, 50, 100, 100);"
, canvas)

# Click on canvas using ActionChains
actions = ActionChains(driver)
actions.move_to_element(canvas).click().perform()`}
                {selectedLanguage === 'java' && `// Draw on canvas using JavaScript executor
((JavascriptExecutor)driver).executeScript(
    "var ctx = arguments[0].getContext('2d');" +
    "ctx.fillStyle = 'red'; ctx.fillRect(50, 50, 100, 100);"
, canvas);

// Click on canvas using Actions
Actions actions = new Actions(driver);
actions.moveToElement(canvas).click().build().perform();`}
                {selectedLanguage === 'javascript' && `// Draw on canvas using JavaScript executor
await driver.executeScript(
    'var ctx = arguments[0].getContext(\'2d\');' +
    'ctx.fillStyle = \'red\'; ctx.fillRect(50, 50, 100, 100);'
, canvas);

// Click on canvas using Actions
let actions = driver.actions();
await actions.move({origin: canvas}).click().perform();`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Canvas Interaction Demo */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/40">
              <Brush className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            Canvas Interaction Demo
          </CardTitle>
          <CardDescription>Interactive demonstration of Canvas element manipulation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-950/20">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <AlertTitle className="text-red-900 dark:text-red-100">JavaScript Required</AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              Canvas elements require JavaScript executor for drawing and context manipulation. Regular DOM interactions won't work.
            </AlertDescription>
          </Alert>

          <Alert className="border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/20">
            <Play className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Interactive Demo</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Watch Canvas drawing and interaction in action. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Move className="w-5 h-5 text-orange-600 dark:text-orange-400" />
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
                        ? 'border-orange-500 bg-orange-100 dark:bg-orange-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-orange-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-canvas"
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

          {/* Side by Side: Code and Canvas Preview */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left: Code Example */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateCanvasInteraction}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
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
                    onClick={() => copyToClipboard(canvasExample[selectedLanguage], 'Canvas code')}
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
                    {getCanvasCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-red-200 dark:bg-red-900/50 border-l-4 border-red-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-red-900 dark:text-red-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                        {currentCodeLine === index && (() => {
                          const getVariableName = (codeLine: string) => {
                            if (selectedLanguage === 'python') {
                              return codeLine.split('=')[0]?.trim();
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{canvasExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Canvas Visual Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Canvas Preview</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 max-h-[600px] overflow-y-auto">
                  <div className="space-y-4">
                    {/* Canvas Element */}
                    <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 mb-3">
                        <Brush className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          &lt;canvas id="drawing-canvas"&gt;
                        </h5>
                      </div>
                      
                      {/* Canvas Visualization */}
                      <div className={`relative bg-gray-100 dark:bg-gray-800 rounded-lg border-2 transition-all ${
                        selectedElement === 'drawing-canvas' 
                          ? 'border-red-500 ring-4 ring-red-500 ring-opacity-50' 
                          : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        <div className="aspect-video relative overflow-hidden rounded">
                          {/* Grid Background */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="h-full w-full" style={{
                              backgroundImage: 'linear-gradient(to right, #666 1px, transparent 1px), linear-gradient(to bottom, #666 1px, transparent 1px)',
                              backgroundSize: '20px 20px'
                            }}></div>
                          </div>
                          
                          {/* Drawn Rectangle */}
                          {canvasState.drawn && (
                            <div className="absolute bg-red-500 opacity-80 animate-in fade-in slide-in-from-left-2"
                                 style={{
                                   left: '20%',
                                   top: '20%',
                                   width: '30%',
                                   height: '30%'
                                 }}>
                              <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">
                                Rectangle
                              </div>
                            </div>
                          )}
                          
                          {/* Click Indicator */}
                          {canvasState.clicked && (
                            <div className="absolute w-4 h-4 bg-green-500 rounded-full animate-ping"
                                 style={{
                                   left: '60%',
                                   top: '40%',
                                   transform: 'translate(-50%, -50%)'
                                 }}>
                            </div>
                          )}
                          
                          {/* Coordinates Display */}
                          {canvasState.clicked && (
                            <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                              x: {canvasState.coordinates.x}, y: {canvasState.coordinates.y}
                            </div>
                          )}
                        </div>
                        
                        {selectedElement === 'drawing-canvas' && (
                          <div className="absolute -top-8 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            Canvas Element Located
                          </div>
                        )}
                      </div>
                      
                      {/* Canvas Info */}
                      <div className="mt-3 p-2 bg-slate-50 dark:bg-slate-900 rounded text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Dimensions:</span>
                          <span className="font-mono text-slate-800 dark:text-slate-200">400 × 300</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-slate-600 dark:text-slate-400">Context:</span>
                          <span className="font-mono text-slate-800 dark:text-slate-200">
                            {canvasState.drawn ? '2D Rendering Context' : 'Not accessed'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Shape Legend */}
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                      <h6 className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-2">Canvas Operations:</h6>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Rectangle drawn via JavaScript</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-slate-700 dark:text-slate-300">Click coordinates captured</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 border-2 border-slate-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Canvas boundary</span>
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

      {/* Advanced Techniques */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <Code className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Advanced Canvas Techniques
          </CardTitle>
          <CardDescription>Professional approaches for complex Canvas operations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{advancedCanvasCode[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(advancedCanvasCode[selectedLanguage], 'Advanced Canvas code')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Common Issues */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/40">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            Common Issues & Solutions
          </CardTitle>
          <CardDescription>Troubleshooting Canvas element interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Canvas Not Found</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Canvas element not loaded or wrong selector.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use explicit waits and verify canvas exists before drawing operations.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Drawing Not Visible</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> JavaScript execution failed or context not available.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Check if 2D context is available and handle JavaScript errors properly.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Click Coordinates Wrong</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Canvas coordinates vs page coordinates confusion.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use ActionChains for accurate positioning and account for canvas offset.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/40">
              <Search className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            Canvas Quick Reference
          </CardTitle>
          <CardDescription>Essential syntax and patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Drawing Operations</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.execute_script("ctx.fillRect(50, 50, 100, 100)", canvas)
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    ((JavascriptExecutor)driver).executeScript("ctx.fillRect(50, 50, 100, 100)", canvas)
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.executeScript('ctx.fillRect(50, 50, 100, 100)', canvas)
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Mouse Interactions</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    ActionChains(driver).move_to_element(canvas).click().perform()
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    new Actions(driver).moveToElement(canvas).click().build().perform()
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    {`driver.actions().move({ origin: canvas }).click().perform();`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Triangle,
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
  Hexagon,
  Move,
  Maximize2,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function SvgElementsComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [svgState, setSvgState] = React.useState({
    circleClicked: false,
    rectangleHovered: false,
    triangleAnimated: false,
    pathSelected: false
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

  const simulateSvgInteraction = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setSvgState({
      circleClicked: false,
      rectangleHovered: false,
      triangleAnimated: false,
      pathSelected: false
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findSvg: 10, findCircle: 13, clickCircle: 16, findRect: 19, hoverRect: 22, findPath: 25, animatePath: 28, quit: 31 };
      } else if (selectedLanguage === 'java') {
        return { nav: 6, findSvg: 9, findCircle: 12, clickCircle: 15, findRect: 18, hoverRect: 21, findPath: 24, animatePath: 27, quit: 30 };
      } else {
        return { nav: 3, findSvg: 6, findCircle: 9, clickCircle: 12, findRect: 15, hoverRect: 18, findPath: 21, animatePath: 24, quit: 27 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      svg: selectedLanguage === 'python' ? 'svg_container' : 'svgContainer',
      circle: selectedLanguage === 'python' ? 'circle' : 'circle',
      rect: selectedLanguage === 'python' ? 'rectangle' : 'rectangle',
      path: selectedLanguage === 'python' ? 'path_element' : 'pathElement'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting SVG elements interaction demo...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading page with SVG graphics...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🎨 Finding SVG container element...', delay: 800 * multiplier, element: null, codeLine: lines.findSvg },
      { step: 3, log: '✅ Found SVG: <svg id="graphics-container"></svg>', delay: 700 * multiplier, element: 'graphics-container', codeLine: lines.findSvg, variable: { name: varNames.svg, value: '<WebElement: svg#graphics-container>' } },
      { step: 4, log: '🔵 Finding circle element within SVG...', delay: 800 * multiplier, element: 'graphics-container', codeLine: lines.findCircle },
      { step: 5, log: '✅ Found circle: <circle class="svg-circle"></circle>', delay: 700 * multiplier, element: 'svg-circle', codeLine: lines.findCircle, variable: { name: varNames.circle, value: '<WebElement: circle.svg-circle>' } },
      { step: 6, log: '🖱️  Clicking circle element...', delay: 1000 * multiplier, element: 'svg-circle', action: 'clickCircle', codeLine: lines.clickCircle, variable: { name: varNames.circle, value: 'clicked' } },
      { step: 7, log: '🟦 Finding rectangle element...', delay: 700 * multiplier, element: 'svg-circle', codeLine: lines.findRect, variable: { name: varNames.circle, value: 'clicked' } },
      { step: 8, log: '✅ Found rectangle: <rect class="svg-rect"></rect>', delay: 700 * multiplier, element: 'svg-rect', codeLine: lines.findRect, variable: { name: varNames.rect, value: '<WebElement: rect.svg-rect>' } },
      { step: 9, log: '👆 Hovering over rectangle element...', delay: 1000 * multiplier, element: 'svg-rect', action: 'hoverRect', codeLine: lines.hoverRect, variable: { name: varNames.rect, value: 'hovered' } },
      { step: 10, log: '🔺 Finding path element...', delay: 700 * multiplier, element: 'svg-rect', codeLine: lines.findPath, variable: { name: varNames.rect, value: 'hovered' } },
      { step: 11, log: '✅ Found path: <path class="svg-path"></path>', delay: 700 * multiplier, element: 'svg-path', codeLine: lines.findPath, variable: { name: varNames.path, value: '<WebElement: path.svg-path>' } },
      { step: 12, log: '✨ Animating path element using JavaScript...', delay: 1000 * multiplier, element: 'svg-path', action: 'animatePath', codeLine: lines.animatePath, variable: { name: varNames.path, value: 'animated' } },
      { step: 13, log: '🎉 SVG interaction completed successfully!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
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
      
      if (action === 'clickCircle') {
        setSvgState(prev => ({ ...prev, circleClicked: true }));
      } else if (action === 'hoverRect') {
        setSvgState(prev => ({ ...prev, rectangleHovered: true }));
      } else if (action === 'animatePath') {
        setSvgState(prev => ({ ...prev, pathSelected: true }));
        setTimeout(() => {
          setSvgState(prev => ({ ...prev, triangleAnimated: true }));
        }, 500);
      }
    }

    setIsRunning(false);
  };

  const getSvgCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.common.action_chains import ActionChains',
        '',
        '# Initialize Chrome browser instance',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to page with SVG graphics',
        'driver.get("https://www.example.com/svg")',
        '',
        '# 🎨 Find the SVG container',
        'svg_container = driver.find_element(By.ID, "graphics-container")',
        '',
        '# 🔵 Find circle within SVG',
        'circle = svg_container.find_element(By.CSS_SELECTOR, ".svg-circle")',
        'circle.click()  # 🖱️ Click the circle',
        '',
        '# 🟦 Find rectangle within SVG',
        'rectangle = svg_container.find_element(By.CSS_SELECTOR, ".svg-rect")',
        'actions = ActionChains(driver)',
        'actions.move_to_element(rectangle).perform()  # 👆 Hover',
        '',
        '# 🔺 Find path and animate',
        'path_element = svg_container.find_element(By.CSS_SELECTOR, ".svg-path")',
        'driver.execute_script(',
        '    "arguments[0].style.transform = \'scale(1.2)\'", path_element',
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
        'driver.get("https://www.example.com/svg");',
        '',
        '// 🎨 Find the SVG container',
        'WebElement svgContainer = driver.findElement(By.id("graphics-container"));',
        '',
        '// 🔵 Find circle within SVG',
        'WebElement circle = svgContainer.findElement(By.cssSelector(".svg-circle"));',
        'circle.click(); // 🖱️ Click the circle',
        '',
        '// 🟦 Find rectangle within SVG',
        'WebElement rectangle = svgContainer.findElement(By.cssSelector(".svg-rect"));',
        'Actions actions = new Actions(driver);',
        'actions.moveToElement(rectangle).build().perform(); // 👆 Hover',
        '',
        '// 🔺 Find path and animate',
        'WebElement pathElement = svgContainer.findElement(By.cssSelector(".svg-path"));',
        '((JavascriptExecutor)driver).executeScript(',
        '    "arguments[0].style.transform = \\"scale(1.2)\\"", pathElement',
        ');',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example.com/svg\');',
        '',
        '// 🎨 Find the SVG container',
        'let svgContainer = await driver.findElement(By.id(\'graphics-container\'));',
        '',
        '// 🔵 Find circle within SVG',
        'let circle = await svgContainer.findElement(By.cssSelector(\'.svg-circle\'));',
        'await circle.click(); // 🖱️ Click the circle',
        '',
        '// 🟦 Find rectangle within SVG',
        'let rectangle = await svgContainer.findElement(By.cssSelector(\'.svg-rect\'));',
        'let actions = driver.actions();',
        'await actions.move({origin: rectangle}).perform(); // 👆 Hover',
        '',
        '// 🔺 Find path and animate',
        'let pathElement = await svgContainer.findElement(By.cssSelector(\'.svg-path\'));',
        'await driver.executeScript(',
        '    \'arguments[0].style.transform = \\\'scale(1.2)\\\'\', pathElement',
        ');',
        '',
        'await driver.quit();',
      ];
    }
  };

  const svgExample = {
    python: getSvgCode().join('\n'),
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com/svg");

// 🎨 Find the SVG container
WebElement svgContainer = driver.findElement(By.id("graphics-container"));

// 🔵 Find circle within SVG
WebElement circle = svgContainer.findElement(By.cssSelector(".svg-circle"));
circle.click(); // 🖱️ Click the circle

// 🟦 Find rectangle within SVG
WebElement rectangle = svgContainer.findElement(By.cssSelector(".svg-rect"));
Actions actions = new Actions(driver);
actions.moveToElement(rectangle).build().perform(); // 👆 Hover

// 🔺 Find path and animate
WebElement pathElement = svgContainer.findElement(By.cssSelector(".svg-path"));
((JavascriptExecutor)driver).executeScript(
    "arguments[0].style.transform = \"scale(1.2)\"", pathElement
);

driver.quit();`,
    javascript: `const { Builder, By } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com/svg');

// 🎨 Find the SVG container
let svgContainer = await driver.findElement(By.id('graphics-container'));

// 🔵 Find circle within SVG
let circle = await svgContainer.findElement(By.cssSelector('.svg-circle'));
await circle.click(); // 🖱️ Click the circle

// 🟦 Find rectangle within SVG
let rectangle = await svgContainer.findElement(By.cssSelector('.svg-rect'));
let actions = driver.actions();
await actions.move({origin: rectangle}).perform(); // 👆 Hover

// 🔺 Find path and animate
let pathElement = await svgContainer.findElement(By.cssSelector('.svg-path'));
await driver.executeScript(
    'arguments[0].style.transform = \'scale(1.2)\'', pathElement
);

await driver.quit();`,
  };

  const advancedSvgCode = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://www.example.com/svg")

# 1. Wait for SVG to be ready
wait = WebDriverWait(driver, 10)
svg_container = wait.until(EC.presence_of_element_located((By.ID, "graphics-container")))

# 2. Get SVG dimensions and viewBox
svg_info = driver.execute_script("""
    var svg = arguments[0];
    return {
        width: svg.clientWidth,
        height: svg.clientHeight,
        viewBox: svg.getAttribute('viewBox'),
        namespace: svg.namespaceURI
    };
""", svg_container)

print(f"SVG size: {svg_info['width']}x{svg_info['height']}")
print(f"ViewBox: {svg_info['viewBox']}")

# 3. Find all SVG elements
elements = svg_container.find_elements(By.CSS_SELECTOR, "*")
print(f"Found {len(elements)} SVG elements")

# 4. Interact with specific SVG elements
for element in elements:
    tag_name = element.get_attribute("tagName")
    if tag_name == "circle":
        element.click()
        print("Clicked circle")
    elif tag_name == "rect":
        actions = ActionChains(driver)
        actions.move_to_element(element).perform()
        print("Hovered rectangle")
    elif tag_name == "path":
        # Animate path
        driver.execute_script("""
            arguments[0].style.transition = 'all 0.5s ease';
            arguments[0].style.transform = 'scale(1.2) rotate(15deg)';
        """, element)
        print("Animated path")

# 5. Get SVG element attributes
circle_attrs = driver.execute_script("""
    var circle = arguments[0].querySelector('circle');
    return circle ? {
        cx: circle.getAttribute('cx'),
        cy: circle.getAttribute('cy'),
        r: circle.getAttribute('r'),
        fill: circle.getAttribute('fill')
    } : null;
""", svg_container)

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.List;
import java.util.Map;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com/svg");

// 1. Wait for SVG to be ready
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement svgContainer = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("graphics-container")));

// 2. Get SVG dimensions and viewBox
Map<String, Object> svgInfo = (Map<String, Object>) ((JavascriptExecutor)driver).executeScript("""
    var svg = arguments[0];
    return {
        width: svg.clientWidth,
        height: svg.clientHeight,
        viewBox: svg.getAttribute('viewBox'),
        namespace: svg.namespaceURI
    };
""", svgContainer);

System.out.println("SVG size: " + svgInfo.get("width") + "x" + svgInfo.get("height"));
System.out.println("ViewBox: " + svgInfo.get("viewBox"));

// 3. Find all SVG elements
List<WebElement> elements = svgContainer.findElements(By.cssSelector("*"));
System.out.println("Found " + elements.size() + " SVG elements");

// 4. Interact with specific SVG elements
for (WebElement element : elements) {
    String tagName = element.getTagName();
    if (tagName.equals("circle")) {
        element.click();
        System.out.println("Clicked circle");
    } else if (tagName.equals("rect")) {
        Actions actions = new Actions(driver);
        actions.moveToElement(element).build().perform();
        System.out.println("Hovered rectangle");
    } else if (tagName.equals("path")) {
        // Animate path
        ((JavascriptExecutor)driver).executeScript("""
            arguments[0].style.transition = 'all 0.5s ease';
            arguments[0].style.transform = 'scale(1.2) rotate(15deg)';
        """, element);
        System.out.println("Animated path");
    }
}

// 5. Get SVG element attributes
Map<String, Object> circleAttrs = (Map<String, Object>) ((JavascriptExecutor)driver).executeScript("""
    var circle = arguments[0].querySelector('circle');
    return circle ? {
        cx: circle.getAttribute('cx'),
        cy: circle.getAttribute('cy'),
        r: circle.getAttribute('r'),
        fill: circle.getAttribute('fill')
    } : null;
""", svgContainer);

driver.quit();`,
    javascript: `const { Builder, By, until } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com/svg');

// 1. Wait for SVG to be ready
let svgContainer = await driver.wait(until.elementLocated(By.id('graphics-container')), 10000);

// 2. Get SVG dimensions and viewBox
let svgInfo = await driver.executeScript(\`
    var svg = arguments[0];
    return {
        width: svg.clientWidth,
        height: svg.clientHeight,
        viewBox: svg.getAttribute('viewBox'),
        namespace: svg.namespaceURI
    };
\`, svgContainer);

console.log(\`SVG size: \${svgInfo.width}x\${svgInfo.height}\`);
console.log(\`ViewBox: \${svgInfo.viewBox}\`);

// 3. Find all SVG elements
let elements = await svgContainer.findElements(By.cssSelector('*'));
console.log(\`Found \${elements.length} SVG elements\`);

// 4. Interact with specific SVG elements
for (let element of elements) {
    let tagName = await element.getTagName();
    if (tagName === 'circle') {
        await element.click();
        console.log('Clicked circle');
    } else if (tagName === 'rect') {
        let actions = driver.actions();
        await actions.move({origin: element}).perform();
        console.log('Hovered rectangle');
    } else if (tagName === 'path') {
        // Animate path
        await driver.executeScript(\`
            arguments[0].style.transition = 'all 0.5s ease';
            arguments[0].style.transform = 'scale(1.2) rotate(15deg)';
        \`, element);
        console.log('Animated path');
    }
}

// 5. Get SVG element attributes
let circleAttrs = await driver.executeScript(\`
    var circle = arguments[0].querySelector('circle');
    return circle ? {
        cx: circle.getAttribute('cx'),
        cy: circle.getAttribute('cy'),
        r: circle.getAttribute('r'),
        fill: circle.getAttribute('fill')
    } : null;
\`, svgContainer);

await driver.quit();`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Triangle}
        category="Selenium · Advanced Locators"
        title="SVG Elements"
        description="Master Scalable Vector Graphics interaction using CSS selectors, JavaScript executor, and animation techniques"
        colorTheme="pink"
        badges={[
          { label: 'Vector Graphics', variant: 'success' },
          { label: 'Animation Support', variant: 'info' },
          { label: 'Interactive', variant: 'secondary' },
        ]}
      />

      {/* Why SVG Elements */}
      <Card className="border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/40">
              <Triangle className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            Understanding SVG Elements
          </CardTitle>
          <CardDescription>Scalable vector graphics for modern web interfaces</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 rounded-lg border-2 border-pink-200 dark:border-pink-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Hexagon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-1">Vector Graphics</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Scalable graphics that maintain quality at any size
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 rounded-lg border-2 border-rose-200 dark:border-rose-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-1">Animation Ready</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Built-in support for animations and transitions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PenTool className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-red-900 dark:text-red-100 mb-1">CSS Styling</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Styled with CSS, accessible via selectors
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Interactive Elements</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Clickable, hoverable, and scriptable graphics
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
            <Code className="w-5 h-5 text-pink-600" />
            SVG Interaction Patterns
          </CardTitle>
          <CardDescription>
            CSS selectors and JavaScript for SVG manipulation
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
                    ? 'border-b-2 border-pink-600 text-pink-600 dark:text-pink-400'
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
                {selectedLanguage === 'python' && `# Find SVG elements using CSS selectors
svg_container = driver.find_element(By.ID, "graphics-container")
circle = svg_container.find_element(By.CSS_SELECTOR, ".svg-circle")
circle.click()

# Animate SVG using JavaScript
driver.execute_script(
    "arguments[0].style.transform = 'scale(1.2)'", element
)`}
                {selectedLanguage === 'java' && `// Find SVG elements using CSS selectors
WebElement svgContainer = driver.findElement(By.id("graphics-container"));
WebElement circle = svgContainer.findElement(By.cssSelector(".svg-circle"));
circle.click();

// Animate SVG using JavaScript
((JavascriptExecutor)driver).executeScript(
    "arguments[0].style.transform = \"scale(1.2)\"", element
);`}
                {selectedLanguage === 'javascript' && `// Find SVG elements using CSS selectors
let svgContainer = await driver.findElement(By.id('graphics-container'));
let circle = await svgContainer.findElement(By.cssSelector('.svg-circle'));
await circle.click();

// Animate SVG using JavaScript
await driver.executeScript(
    'arguments[0].style.transform = \'scale(1.2)\'', element
);`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* SVG Interaction Demo */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900/40">
              <Triangle className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            </div>
            SVG Interaction Demo
          </CardTitle>
          <CardDescription>Interactive demonstration of SVG element manipulation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-rose-200 dark:border-rose-700 bg-rose-50 dark:bg-rose-950/20">
            <AlertCircle className="h-5 w-5 text-rose-600" />
            <AlertTitle className="text-rose-900 dark:text-rose-100">CSS Selectors Work</AlertTitle>
            <AlertDescription className="text-rose-800 dark:text-rose-200">
              SVG elements can be accessed with regular CSS selectors within the SVG container, unlike Shadow DOM.
            </AlertDescription>
          </Alert>

          <Alert className="border-pink-200 dark:border-pink-700 bg-pink-50 dark:bg-pink-950/20">
            <Play className="h-5 w-5 text-pink-600" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Interactive Demo</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Watch SVG element interaction and animation. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-lg border-2 border-pink-200 dark:border-pink-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Move className="w-5 h-5 text-pink-600 dark:text-pink-400" />
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
                        ? 'border-pink-500 bg-pink-100 dark:bg-pink-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-pink-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-svg"
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

          {/* Side by Side: Code and SVG Preview */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left: Code Example */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateSvgInteraction}
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
                    onClick={() => copyToClipboard(svgExample[selectedLanguage], 'SVG code')}
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
                    {getSvgCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{svgExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: SVG Visual Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">SVG Preview</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700 max-h-[600px] overflow-y-auto">
                  <div className="space-y-4">
                    {/* SVG Container */}
                    <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 mb-3">
                        <Triangle className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          &lt;svg id="graphics-container"&gt;
                        </h5>
                      </div>
                      
                      {/* SVG Visualization */}
                      <div className={`relative bg-gray-50 dark:bg-gray-800 rounded-lg border-2 transition-all ${
                        selectedElement === 'graphics-container' 
                          ? 'border-rose-500 ring-4 ring-rose-500 ring-opacity-50' 
                          : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        <div className="aspect-video relative overflow-hidden rounded">
                          {/* SVG Elements */}
                          <svg viewBox="0 0 400 300" className="w-full h-full">
                            {/* Circle */}
                            <circle
                              cx="100"
                              cy="100"
                              r="40"
                              className={`transition-all duration-500 cursor-pointer ${
                                selectedElement === 'svg-circle' || svgState.circleClicked
                                  ? 'fill-blue-500 stroke-blue-600 stroke-2'
                                  : 'fill-blue-400 stroke-blue-500 stroke-1'
                              } ${selectedElement === 'svg-circle' ? 'animate-pulse' : ''}`}
                              onClick={() => svgState.circleClicked}
                            />
                            
                            {/* Rectangle */}
                            <rect
                              x="180"
                              y="80"
                              width="80"
                              height="60"
                              className={`transition-all duration-500 cursor-pointer ${
                                selectedElement === 'svg-rect' || svgState.rectangleHovered
                                  ? 'fill-green-500 stroke-green-600 stroke-2'
                                  : 'fill-green-400 stroke-green-500 stroke-1'
                              } ${selectedElement === 'svg-rect' ? 'animate-pulse' : ''}`}
                            />
                            
                            {/* Triangle Path */}
                            <path
                              d="M 300 180 L 350 120 L 400 180 Z"
                              className={`transition-all duration-500 cursor-pointer ${
                                selectedElement === 'svg-path' || svgState.pathSelected
                                  ? 'fill-purple-500 stroke-purple-600 stroke-2'
                                  : 'fill-purple-400 stroke-purple-500 stroke-1'
                              } ${svgState.triangleAnimated ? 'scale-110' : ''} ${
                                selectedElement === 'svg-path' ? 'animate-pulse' : ''
                              }`}
                              style={{
                                transformOrigin: '350px 150px',
                                transform: svgState.triangleAnimated ? 'scale(1.2) rotate(15deg)' : 'scale(1)'
                              }}
                            />
                            
                            {/* Labels */}
                            {svgState.circleClicked && (
                              <text x="100" y="160" textAnchor="middle" className="fill-blue-600 text-xs font-semibold">
                                Clicked!
                              </text>
                            )}
                            
                            {svgState.rectangleHovered && (
                              <text x="220" y="160" textAnchor="middle" className="fill-green-600 text-xs font-semibold">
                                Hovered!
                              </text>
                            )}
                            
                            {svgState.pathSelected && (
                              <text x="350" y="210" textAnchor="middle" className="fill-purple-600 text-xs font-semibold">
                                Animated!
                              </text>
                            )}
                          </svg>
                          
                          {selectedElement === 'graphics-container' && (
                            <div className="absolute -top-8 left-0 bg-rose-500 text-white text-xs px-2 py-1 rounded">
                              SVG Container Located
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* SVG Info */}
                      <div className="mt-3 p-2 bg-slate-50 dark:bg-slate-900 rounded text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600 dark:text-slate-400">ViewBox:</span>
                          <span className="font-mono text-slate-800 dark:text-slate-200">0 0 400 300</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-slate-600 dark:text-slate-400">Elements:</span>
                          <span className="font-mono text-slate-800 dark:text-slate-200">3 shapes</span>
                        </div>
                      </div>
                    </div>

                    {/* Shape Legend */}
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                      <h6 className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-2">SVG Operations:</h6>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-700 dark:text-slate-300">Circle clicked via CSS selector</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Rectangle hovered via ActionChains</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-purple-500 rounded"></div>
                          <span className="text-slate-700 dark:text-slate-300">Path animated via JavaScript</span>
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
            Advanced SVG Techniques
          </CardTitle>
          <CardDescription>Professional approaches for complex SVG operations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{advancedSvgCode[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(advancedSvgCode[selectedLanguage], 'Advanced SVG code')}
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
          <CardDescription>Troubleshooting SVG element interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ SVG Element Not Found</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> SVG not loaded or incorrect namespace handling.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Wait for SVG to load and use CSS selectors within SVG container.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Animation Not Working</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> JavaScript execution failed or CSS not applied.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use explicit waits and verify element is ready for animation.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Click Not Registering</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> SVG element not clickable or covered by other elements.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use JavaScript executor to trigger click events directly.
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
            SVG Quick Reference
          </CardTitle>
          <CardDescription>Essential syntax and patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Find SVG Elements</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    svg.find_element(By.CSS_SELECTOR, "circle")
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    svg.findElement(By.cssSelector("circle"))
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    svg.findElement(By.cssSelector('circle'))
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Animate SVG</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Badge className="mb-1">Python</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.execute_script("elem.style.transform='scale(1.2)'", elem)
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">Java</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    ((JavascriptExecutor)driver).executeScript("elem.style.transform='scale(1.2)'", elem)
                  </code>
                </div>
                <div>
                  <Badge className="mb-1">JavaScript</Badge>
                  <code className="block bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300 px-2 py-1 rounded text-xs">
                    driver.executeScript('elem.style.transform=\'scale(1.2)\'', elem)
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

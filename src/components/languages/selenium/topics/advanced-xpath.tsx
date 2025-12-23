'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  GitBranch,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Search,
  Play,
  RefreshCw,
  Monitor,
  ShoppingBag,
  Star,
  Filter,
  TrendingUp,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function AdvancedXpath() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [productData, setProductData] = React.useState({
    selectedProduct: '',
    priceRange: '',
    rating: 0,
    inStock: false,
    filtered: false
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

  const simulateAdvancedXpath = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setProductData({
      selectedProduct: '',
      priceRange: '',
      rating: 0,
      inStock: false,
      filtered: false
    });

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findExpensive: 10, findHighRated: 13, findInStock: 16, findSibling: 19, findParent: 22, quit: 25 };
      } else if (selectedLanguage === 'java') {
        return { nav: 7, findExpensive: 10, findHighRated: 13, findInStock: 16, findSibling: 19, findParent: 22, quit: 24 };
      } else {
        return { nav: 3, findExpensive: 6, findHighRated: 9, findInStock: 12, findSibling: 15, findParent: 18, quit: 20 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      expensive: selectedLanguage === 'python' ? 'expensive_products' : 'expensiveProducts',
      rated: selectedLanguage === 'python' ? 'high_rated' : 'highRated',
      stock: selectedLanguage === 'python' ? 'in_stock_items' : 'inStockItems',
      sibling: selectedLanguage === 'python' ? 'next_product' : 'nextProduct',
      parent: selectedLanguage === 'python' ? 'product_container' : 'productContainer'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting Advanced XPath demo - E-commerce Filtering...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading product catalog page...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Using XPath axes: //div[@data-price>100]/following-sibling::div', delay: 800 * multiplier, element: null, codeLine: lines.findExpensive },
      { step: 3, log: '✅ Found expensive products (>$100)', delay: 700 * multiplier, element: 'expensive', codeLine: lines.findExpensive, variable: { name: varNames.expensive, value: '[3 products]' }, action: 'expensive' },
      { step: 4, log: '🔍 Using XPath function: //div[number(@data-rating)>=4]', delay: 800 * multiplier, element: 'expensive', codeLine: lines.findHighRated, variable: { name: varNames.expensive, value: '[3 products]' } },
      { step: 5, log: '⭐ Found high-rated products (4+ stars)', delay: 700 * multiplier, element: 'rated', codeLine: lines.findHighRated, variable: { name: varNames.rated, value: '[2 products]' }, action: 'rated' },
      { step: 6, log: '🔍 Using XPath predicate: //div[@class="product" and not(@data-stock="out")]', delay: 800 * multiplier, element: 'rated', codeLine: lines.findInStock, variable: { name: varNames.rated, value: '[2 products]' } },
      { step: 7, log: '📦 Found in-stock products', delay: 700 * multiplier, element: 'stock', codeLine: lines.findInStock, variable: { name: varNames.stock, value: '[5 products]' }, action: 'stock' },
      { step: 8, log: '🔍 Using following-sibling axis: //div[@id="featured"]/following-sibling::div[1]', delay: 800 * multiplier, element: 'stock', codeLine: lines.findSibling, variable: { name: varNames.stock, value: '[5 products]' } },
      { step: 9, log: '➡️ Found next sibling product', delay: 700 * multiplier, element: 'sibling', codeLine: lines.findSibling, variable: { name: varNames.sibling, value: '<WebElement: div>' }, action: 'sibling' },
      { step: 10, log: '🔍 Using parent axis: //button[@class="buy"]/parent::div', delay: 800 * multiplier, element: 'sibling', codeLine: lines.findParent, variable: { name: varNames.sibling, value: '<WebElement: div>' } },
      { step: 11, log: '⬆️ Found parent container', delay: 700 * multiplier, element: 'parent', codeLine: lines.findParent, variable: { name: varNames.parent, value: '<WebElement: div.product>' }, action: 'parent' },
      { step: 12, log: '🎉 Advanced XPath demo completed successfully!', delay: 500 * multiplier, element: null, codeLine: lines.quit, action: 'complete' },
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
      
      if (action === 'expensive') {
        setProductData(prev => ({ ...prev, priceRange: '>$100' }));
      } else if (action === 'rated') {
        setProductData(prev => ({ ...prev, rating: 4 }));
      } else if (action === 'stock') {
        setProductData(prev => ({ ...prev, inStock: true }));
      } else if (action === 'sibling') {
        setProductData(prev => ({ ...prev, selectedProduct: 'Next Product' }));
      } else if (action === 'parent') {
        setProductData(prev => ({ ...prev, selectedProduct: 'Product Container' }));
      } else if (action === 'complete') {
        setProductData(prev => ({ ...prev, filtered: true }));
      }
    }

    setIsRunning(false);
  };

  const getAdvancedXpathCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to product catalog',
        'driver.get("https://www.example-shop.com/products")',
        '',
        '# 🔍 XPath axes - Find expensive products using following-sibling',
        'expensive_products = driver.find_elements(By.XPATH, "//div[@data-price>100]/following-sibling::div")',
        '',
        '# 🔍 XPath functions - Find high-rated products using number()',
        'high_rated = driver.find_elements(By.XPATH, "//div[number(@data-rating)>=4]")',
        '',
        '# 🔍 XPath predicates - Find in-stock products using not()',
        'in_stock_items = driver.find_elements(By.XPATH, "//div[@class=\'product\' and not(@data-stock=\'out\')]")',
        '',
        '# 🔍 Following-sibling axis - Get next product',
        'next_product = driver.find_element(By.XPATH, "//div[@id=\'featured\']/following-sibling::div[1]")',
        '',
        '# 🔍 Parent axis - Navigate to parent container',
        'product_container = driver.find_element(By.XPATH, "//button[@class=\'buy\']/parent::div")',
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
        'import java.util.List;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'driver.get("https://www.example-shop.com/products");',
        '',
        '// 🔍 XPath axes - Find expensive products using following-sibling',
        'List<WebElement> expensiveProducts = driver.findElements(By.xpath("//div[@data-price>100]/following-sibling::div"));',
        '',
        '// 🔍 XPath functions - Find high-rated products using number()',
        'List<WebElement> highRated = driver.findElements(By.xpath("//div[number(@data-rating)>=4]"));',
        '',
        '// 🔍 XPath predicates - Find in-stock products using not()',
        'List<WebElement> inStockItems = driver.findElements(By.xpath("//div[@class=\'product\' and not(@data-stock=\'out\')]"));',
        '',
        '// 🔍 Following-sibling axis - Get next product',
        'WebElement nextProduct = driver.findElement(By.xpath("//div[@id=\'featured\']/following-sibling::div[1]"));',
        '',
        '// 🔍 Parent axis - Navigate to parent container',
        'WebElement productContainer = driver.findElement(By.xpath("//button[@class=\'buy\']/parent::div"));',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example-shop.com/products\');',
        '',
        '// 🔍 XPath axes - Find expensive products using following-sibling',
        'let expensiveProducts = await driver.findElements(By.xpath(\'//div[@data-price>100]/following-sibling::div\'));',
        '',
        '// 🔍 XPath functions - Find high-rated products using number()',
        'let highRated = await driver.findElements(By.xpath(\'//div[number(@data-rating)>=4]\'));',
        '',
        '// 🔍 XPath predicates - Find in-stock products using not()',
        'let inStockItems = await driver.findElements(By.xpath(\'//div[@class="product" and not(@data-stock="out")]\'));',
        '',
        '// 🔍 Following-sibling axis - Get next product',
        'let nextProduct = await driver.findElement(By.xpath(\'//div[@id="featured"]/following-sibling::div[1]\'));',
        '',
        '// 🔍 Parent axis - Navigate to parent container',
        'let productContainer = await driver.findElement(By.xpath(\'//button[@class="buy"]/parent::div\'));',
        '',
        'await driver.quit();',
      ];
    }
  };

  const advancedXpathExample = {
    python: getAdvancedXpathCode('python').join('\n'),
    java: getAdvancedXpathCode('java').join('\n'),
    javascript: getAdvancedXpathCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Advanced XPath"
        description="Master complex XPath techniques for powerful element location"
        icon={GitBranch}
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-600" />
            Advanced XPath Techniques
          </CardTitle>
          <CardDescription>
            Unlock the full power of XPath with axes, functions, and predicates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Advanced XPath goes beyond basic element selection, offering powerful techniques for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>XPath Axes:</strong> Navigate relationships (parent, child, sibling, ancestor)</li>
            <li><strong>XPath Functions:</strong> Use built-in functions for complex conditions</li>
            <li><strong>Predicates:</strong> Filter elements with sophisticated logic</li>
            <li><strong>Dynamic Queries:</strong> Handle changing DOM structures effectively</li>
          </ul>

          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <Zap className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">When to Use Advanced XPath</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Use advanced XPath when CSS selectors can't handle complex relationships, dynamic content, or when you need to navigate the DOM tree in sophisticated ways.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Advanced XPath syntax in Python, Java, and JavaScript
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

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
                {selectedLanguage === 'python' && `# XPath Axes - Navigate relationships
parent = driver.find_element(By.XPATH, "//button[@id='submit']/parent::form")
sibling = driver.find_element(By.XPATH, "//h2[@class='title']/following-sibling::p[1]")

# XPath Functions - Use built-in functions
normalized = driver.find_element(By.XPATH, "//div[normalize-space(text())='Login']")
substring = driver.find_element(By.XPATH, "//a[contains(text(), 'Read More')]")

# Complex Predicates - Multiple conditions
element = driver.find_element(By.XPATH, "//input[@type='text' and @required and not(@disabled)]")

# Position-based - Select specific elements
third = driver.find_element(By.XPATH, "(//div[@class='item'])[3]")
last = driver.find_element(By.XPATH, "(//li[@class='menu-item'])[last()]")`}
                {selectedLanguage === 'java' && `// XPath Axes - Navigate relationships
WebElement parent = driver.findElement(By.xpath("//button[@id='submit']/parent::form"));
WebElement sibling = driver.findElement(By.xpath("//h2[@class='title']/following-sibling::p[1]"));

// XPath Functions - Use built-in functions
WebElement normalized = driver.findElement(By.xpath("//div[normalize-space(text())='Login']"));
WebElement substring = driver.findElement(By.xpath("//a[contains(text(), 'Read More')]"));

// Complex Predicates - Multiple conditions
WebElement element = driver.findElement(By.xpath("//input[@type='text' and @required and not(@disabled)]"));

// Position-based - Select specific elements
WebElement third = driver.findElement(By.xpath("(//div[@class='item'])[3]"));
WebElement last = driver.findElement(By.xpath("(//li[@class='menu-item'])[last()]"));`}
                {selectedLanguage === 'javascript' && `// XPath Axes - Navigate relationships
let parent = await driver.findElement(By.xpath("//button[@id='submit']/parent::form"));
let sibling = await driver.findElement(By.xpath("//h2[@class='title']/following-sibling::p[1]"));

// XPath Functions - Use built-in functions
let normalized = await driver.findElement(By.xpath("//div[normalize-space(text())='Login']"));
let substring = await driver.findElement(By.xpath("//a[contains(text(), 'Read More')]"));

// Complex Predicates - Multiple conditions
let element = await driver.findElement(By.xpath("//input[@type='text' and @required and not(@disabled)]"));

// Position-based - Select specific elements
let third = await driver.findElement(By.xpath("(//div[@class='item'])[3]"));
let last = await driver.findElement(By.xpath("(//li[@class='menu-item'])[last()]"));`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-purple-600" />
            Interactive Demo: Product Filtering
          </CardTitle>
          <CardDescription>
            Watch advanced XPath techniques filter and navigate products
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive Product Filtering Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch advanced XPath expressions use axes, functions, and predicates to filter products. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
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
                      name="speed-advanced-xpath"
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

          {/* Side by Side: Code and Preview */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left: Code Example */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateAdvancedXpath}
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
                    onClick={() => copyToClipboard(advancedXpathExample[selectedLanguage], 'Advanced XPath code')}
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
                    {getAdvancedXpathCode(selectedLanguage).map((line, index) => (
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{advancedXpathExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Product Filters</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px]">
                  <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100">Product Filters</h3>
                  <div className="space-y-4">
                    {/* Price Filter */}
                    <div className={`p-3 rounded-lg border-2 transition-all ${selectedElement === 'expensive' ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30' : 'border-slate-200 dark:border-slate-700'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-purple-600" />
                        <span className="font-semibold text-slate-900 dark:text-slate-100">Price Range</span>
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {productData.priceRange || 'All prices'}
                      </div>
                    </div>

                    {/* Rating Filter */}
                    <div className={`p-3 rounded-lg border-2 transition-all ${selectedElement === 'rated' ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30' : 'border-slate-200 dark:border-slate-700'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-semibold text-slate-900 dark:text-slate-100">Rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= productData.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Stock Filter */}
                    <div className={`p-3 rounded-lg border-2 transition-all ${selectedElement === 'stock' ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30' : 'border-slate-200 dark:border-slate-700'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Filter className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-slate-900 dark:text-slate-100">Availability</span>
                      </div>
                      <div className="text-sm">
                        {productData.inStock ? (
                          <Badge className="bg-green-600">In Stock</Badge>
                        ) : (
                          <Badge variant="outline">All Items</Badge>
                        )}
                      </div>
                    </div>

                    {/* Selected Product */}
                    {(selectedElement === 'sibling' || selectedElement === 'parent') && (
                      <div className={`p-3 rounded-lg border-2 border-purple-500 bg-purple-50 dark:bg-purple-950/30`}>
                        <div className="flex items-center gap-2 mb-2">
                          <ShoppingBag className="w-4 h-4 text-purple-600" />
                          <span className="font-semibold text-slate-900 dark:text-slate-100">Selected Element</span>
                        </div>
                        <div className="text-sm text-purple-700 dark:text-purple-300">
                          {productData.selectedProduct}
                        </div>
                      </div>
                    )}

                    {productData.filtered && (
                      <div className="mt-4 p-3 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-lg">
                        <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">Advanced filtering completed!</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* XPath Axes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-blue-600" />
            XPath Axes
          </CardTitle>
          <CardDescription>Navigate DOM relationships with precision</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">parent</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Parent Axis</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                //button[@id='submit']/parent::form
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Navigate to parent element
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">child</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Child Axis</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                //div[@class='container']/child::p
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Select direct children
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-600 mb-2">following-sibling</Badge>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">Following Sibling</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                //h2[@id='title']/following-sibling::p[1]
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Get next sibling element
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">preceding-sibling</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Preceding Sibling</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                //div[@id='footer']/preceding-sibling::div[1]
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Get previous sibling element
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 rounded-lg border-2 border-rose-200 dark:border-rose-700">
              <Badge className="bg-rose-600 mb-2">ancestor</Badge>
              <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-2 text-sm">Ancestor Axis</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                //span[@class='error']/ancestor::form
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Navigate to any ancestor
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
              <Badge className="bg-indigo-600 mb-2">descendant</Badge>
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 text-sm">Descendant Axis</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                //div[@id='main']/descendant::input
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Select all descendants
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* XPath Functions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            XPath Functions
          </CardTitle>
          <CardDescription>Powerful built-in functions for complex queries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { func: 'contains()', example: '//a[contains(text(), "More")]', desc: 'Check if string contains substring', color: 'from-blue-50 to-sky-50 border-blue-200' },
              { func: 'starts-with()', example: '//div[starts-with(@id, "user-")]', desc: 'Check if string starts with prefix', color: 'from-green-50 to-teal-50 border-green-200' },
              { func: 'normalize-space()', example: '//p[normalize-space()="Login"]', desc: 'Remove extra whitespace', color: 'from-purple-50 to-fuchsia-50 border-purple-200' },
              { func: 'text()', example: '//button[text()="Submit"]', desc: 'Get text content of element', color: 'from-orange-50 to-yellow-50 border-orange-200' },
              { func: 'last()', example: '(//li[@class="item"])[last()]', desc: 'Select last element in set', color: 'from-pink-50 to-rose-50 border-pink-200' },
              { func: 'position()', example: '//div[position()>2]', desc: 'Get position of element', color: 'from-indigo-50 to-blue-50 border-indigo-200' },
              { func: 'count()', example: '//div[count(./p)>3]', desc: 'Count number of elements', color: 'from-emerald-50 to-green-50 border-emerald-200' },
              { func: 'not()', example: '//input[not(@disabled)]', desc: 'Negate a condition', color: 'from-amber-50 to-orange-50 border-amber-200' },
              { func: 'number()', example: '//div[number(@data-price)>100]', desc: 'Convert to number for comparison', color: 'from-cyan-50 to-blue-50 border-cyan-200' },
            ].map((item, index) => (
              <div key={index} className={`p-3 bg-gradient-to-br ${item.color} dark:from-slate-800 dark:to-slate-700 rounded-lg border-2 dark:border-slate-600 hover:scale-105 transition-transform`}>
                <code className="text-sm font-bold text-slate-900 dark:text-slate-100 block mb-1">{item.func}</code>
                <code className="text-xs bg-white dark:bg-slate-900 p-1 rounded block overflow-x-auto mb-2">{item.example}</code>
                <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
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
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Axes Wisely</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Axes are powerful but can be slow. Use them when CSS selectors can't solve the problem
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Combine Functions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use multiple functions together for precise element selection
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Test Performance</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Complex XPath can be slow. Profile and optimize your queries
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Document Complex Queries</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add comments explaining complex XPath expressions for maintainability
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            Common Pitfalls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert className="border-red-200 dark:border-red-700">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <AlertTitle className="text-red-900 dark:text-red-100">Overusing Axes</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Using axes when simpler selectors would work<br/>
                <strong>Solution:</strong> Try CSS selectors or basic XPath first
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Position Dependency</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Relying on element position which can change<br/>
                <strong>Solution:</strong> Use attributes and text content instead
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Performance Issues</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Complex XPath causing slow test execution<br/>
                <strong>Solution:</strong> Simplify queries or use alternative locators
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Search,
  Hash,
  FileText,
  Play,
  RefreshCw,
  Terminal,
  Monitor,
  User,
  Mail,
  Lock,
  Calendar,
  Gauge,
  Type,
  MessageSquare,
  ShoppingCart,
  Star
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function TextLocators() {
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
    addedToCart: false,
    reviewSubmitted: false,
    quantity: 1,
    selectedProduct: '',
    rating: 0
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

  const simulateTextLocator = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setProductData({
      addedToCart: false,
      reviewSubmitted: false,
      quantity: 1,
      selectedProduct: '',
      rating: 0
    });

    const multiplier = getSpeedMultiplier();
    
    // Get language-specific line numbers
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findProduct: 10, clickProduct: 11, findCart: 14, clickCart: 15, findReview: 18, clickReview: 19, quit: 22 };
      } else if (selectedLanguage === 'java') {
        return { nav: 7, findProduct: 10, clickProduct: 11, findCart: 14, clickCart: 15, findReview: 18, clickReview: 19, quit: 21 };
      } else {
        return { nav: 3, findProduct: 6, clickProduct: 7, findCart: 10, clickCart: 11, findReview: 14, clickReview: 15, quit: 17 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      product: selectedLanguage === 'python' ? 'product_link' : 'productLink',
      cart: selectedLanguage === 'python' ? 'add_to_cart_btn' : 'addToCartBtn',
      review: selectedLanguage === 'python' ? 'review_button' : 'reviewButton'
    };
    
    const steps = [
      { step: 0, log: '🚀 Starting text locator demo - E-commerce Product Search...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading online store with product listings...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Finding product by visible text: "Premium Wireless Headphones"...', delay: 800 * multiplier, element: null, codeLine: lines.findProduct },
      { step: 3, log: '✅ Found product link with matching text', delay: 700 * multiplier, element: 'product-link', codeLine: lines.findProduct, variable: { name: varNames.product, value: '<WebElement: a>' } },
      { step: 4, log: '🖱️  Clicking on product link...', delay: 1000 * multiplier, element: 'product-link', action: 'selectProduct', codeLine: lines.clickProduct, variable: { name: varNames.product, value: '<WebElement: a>' } },
      { step: 5, log: '🔍 Locating "Add to Cart" button by text...', delay: 700 * multiplier, element: 'product-link', codeLine: lines.findCart, variable: { name: varNames.product, value: '<WebElement: a>' } },
      { step: 6, log: '✅ Found button with text "Add to Cart"', delay: 700 * multiplier, element: 'add-to-cart', codeLine: lines.findCart, variable: { name: varNames.cart, value: '<WebElement: button>' } },
      { step: 7, log: '🛒 Adding product to shopping cart...', delay: 1000 * multiplier, element: 'add-to-cart', action: 'addToCart', codeLine: lines.clickCart, variable: { name: varNames.cart, value: '<WebElement: button>' } },
      { step: 8, log: '🔍 Finding "Write a Review" button by partial text...', delay: 700 * multiplier, element: 'add-to-cart', codeLine: lines.findReview, variable: { name: varNames.cart, value: '<WebElement: button>' } },
      { step: 9, log: '✅ Found review button with partial text match', delay: 700 * multiplier, element: 'review-button', codeLine: lines.findReview, variable: { name: varNames.review, value: '<WebElement: button>' } },
      { step: 10, log: '📝 Clicking review button to open form...', delay: 1000 * multiplier, element: 'review-button', action: 'submitReview', codeLine: lines.clickReview, variable: { name: varNames.review, value: '<WebElement: button>' } },
      { step: 11, log: '🎉 Text locator demo completed successfully!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
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
      
      if (action === 'selectProduct') {
        setProductData(prev => ({ ...prev, selectedProduct: 'Premium Wireless Headphones' }));
      } else if (action === 'addToCart') {
        setProductData(prev => ({ ...prev, addedToCart: true }));
      } else if (action === 'submitReview') {
        setProductData(prev => ({ ...prev, reviewSubmitted: true }));
      }
    }

    setIsRunning(false);
  };

  const getTextLocatorCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver  # Import WebDriver',
        'from selenium.webdriver.common.by import By  # Import By class',
        '',
        '# Initialize Chrome browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to e-commerce store',
        'driver.get("https://www.example-store.com")',
        '',
        '# 🔍 Find product by exact visible text',
        'product_link = driver.find_element(By.LINK_TEXT, "Premium Wireless Headphones")',
        'product_link.click()  # 🖱️ Click on product',
        '',
        '# 🔍 Find "Add to Cart" button by exact text',
        'add_to_cart_btn = driver.find_element(By.LINK_TEXT, "Add to Cart")',
        'add_to_cart_btn.click()  # 🛒 Add product to cart',
        '',
        '# 🔍 Find review button by partial text match',
        'review_button = driver.find_element(By.PARTIAL_LINK_TEXT, "Write a Review")',
        'review_button.click()  # 📝 Open review form',
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
        'driver.get("https://www.example-store.com");',
        '',
        '// 🔍 Find product by exact visible text',
        'WebElement productLink = driver.findElement(By.linkText("Premium Wireless Headphones"));',
        'productLink.click();',
        '',
        '// 🔍 Find "Add to Cart" button by exact text',
        'WebElement addToCartBtn = driver.findElement(By.linkText("Add to Cart"));',
        'addToCartBtn.click();',
        '',
        '// 🔍 Find review button by partial text match',
        'WebElement reviewButton = driver.findElement(By.partialLinkText("Write a Review"));',
        'reviewButton.click();',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        'await driver.get(\'https://www.example-store.com\');',
        '',
        '// 🔍 Find product by exact visible text',
        'let productLink = await driver.findElement(By.linkText(\'Premium Wireless Headphones\'));',
        'await productLink.click();',
        '',
        '// 🔍 Find "Add to Cart" button by exact text',
        'let addToCartBtn = await driver.findElement(By.linkText(\'Add to Cart\'));',
        'await addToCartBtn.click();',
        '',
        '// 🔍 Find review button by partial text match',
        'let reviewButton = await driver.findElement(By.partialLinkText(\'Write a Review\'));',
        'await reviewButton.click();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const textLocatorExample = {
    python: getTextLocatorCode('python').join('\n'),
    java: getTextLocatorCode('java').join('\n'),
    javascript: getTextLocatorCode('javascript').join('\n'),
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      <PageHeader
        title="Text Locators"
        description="Master finding elements by their visible text content - perfect for links and buttons"
        icon={Type}
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="w-5 h-5 text-orange-600" />
            What are Text Locators?
          </CardTitle>
          <CardDescription>
            Find elements by their visible text content - ideal for links and buttons
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Text locators allow you to find elements based on their visible text content. This is particularly useful for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Links:</strong> Find anchor tags by their exact or partial link text</li>
            <li><strong>Buttons:</strong> Locate buttons by their visible label text</li>
            <li><strong>Navigation:</strong> Click menu items and navigation links by text</li>
            <li><strong>User-Friendly:</strong> More readable and maintainable than XPath or CSS selectors</li>
          </ul>

          <Alert className="border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/20">
            <Type className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Two Types of Text Locators</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              <strong>LINK_TEXT:</strong> Matches exact text content<br/>
              <strong>PARTIAL_LINK_TEXT:</strong> Matches partial text (substring)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-orange-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Text locator syntax in Python, Java, and JavaScript
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
                {selectedLanguage === 'python' && `# Exact text match
link = driver.find_element(By.LINK_TEXT, "Sign In")
link.click()

# Partial text match
link = driver.find_element(By.PARTIAL_LINK_TEXT, "Learn More")
link.click()

# Multiple elements with same text
links = driver.find_elements(By.LINK_TEXT, "Read More")
links[0].click()  # Click first match`}
                {selectedLanguage === 'java' && `// Exact text match
WebElement link = driver.findElement(By.linkText("Sign In"));
link.click();

// Partial text match
WebElement link = driver.findElement(By.partialLinkText("Learn More"));
link.click();

// Multiple elements with same text
List<WebElement> links = driver.findElements(By.linkText("Read More"));
links.get(0).click();  // Click first match`}
                {selectedLanguage === 'javascript' && `// Exact text match
let link = await driver.findElement(By.linkText('Sign In'));
await link.click();

// Partial text match
let link = await driver.findElement(By.partialLinkText('Learn More'));
await link.click();

// Multiple elements with same text
let links = await driver.findElements(By.linkText('Read More'));
await links[0].click();  // Click first match`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-orange-600" />
            Interactive Demo: E-commerce Product Search
          </CardTitle>
          <CardDescription>
            Watch text locators in action as we navigate an online store
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Play className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive E-commerce Demo</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Watch text locators find products, add items to cart, and interact with review buttons. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-orange-600 dark:text-orange-400" />
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
                      name="speed-text"
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
                  <Code className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateTextLocator}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
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
                    onClick={() => copyToClipboard(textLocatorExample[selectedLanguage], 'Text locator code')}
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
                    {getTextLocatorCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-orange-200 dark:bg-orange-900/50 border-l-4 border-orange-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-orange-900 dark:text-orange-100' : 'text-slate-800 dark:text-slate-300'}>
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{textLocatorExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Store Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px]">
                  <div className="space-y-4">
                    {/* Product Listing */}
                    <div className="border-b pb-4">
                      <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-slate-100">Featured Products</h3>
                      <div className="space-y-3">
                        <div 
                          className={`p-4 border-2 rounded-lg transition-all ${
                            selectedElement === 'product-link' 
                              ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/20 shadow-lg' 
                              : 'border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                              <Type className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <a 
                                href="#" 
                                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                                onClick={(e) => e.preventDefault()}
                              >
                                Premium Wireless Headphones
                              </a>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                High-quality audio with noise cancellation
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-lg font-bold text-slate-900 dark:text-slate-100">$299.99</span>
                                <div className="flex items-center gap-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                  <span className="text-xs text-slate-600 dark:text-slate-400 ml-1">(4.8)</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    {productData.selectedProduct && (
                      <div className="border-b pb-4">
                        <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-slate-100">
                          {productData.selectedProduct}
                        </h3>
                        <button
                          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                            selectedElement === 'add-to-cart'
                              ? 'bg-orange-600 text-white shadow-lg scale-105'
                              : 'bg-orange-500 text-white hover:bg-orange-600'
                          }`}
                          disabled
                        >
                          <div className="flex items-center gap-2">
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                          </div>
                        </button>
                        {productData.addedToCart && (
                          <div className="mt-3 p-3 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-lg">
                            <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                              <CheckCircle className="w-5 h-5" />
                              <span className="font-semibold">Product added to cart!</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Review Section */}
                    {productData.addedToCart && (
                      <div>
                        <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-slate-100">Customer Reviews</h3>
                        <button
                          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                            selectedElement === 'review-button'
                              ? 'bg-blue-600 text-white shadow-lg scale-105'
                              : 'bg-blue-500 text-white hover:bg-blue-600'
                          }`}
                          disabled
                        >
                          <div className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5" />
                            Write a Review
                          </div>
                        </button>
                        {productData.reviewSubmitted && (
                          <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-950/30 border border-blue-300 dark:border-blue-700 rounded-lg">
                            <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                              <CheckCircle className="w-5 h-5" />
                              <span className="font-semibold">Review form opened!</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-600" />
            Benefits of Text Locators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Highly Readable</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Code is self-documenting - you can see exactly what text you're looking for
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Language Independent</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Works across different languages if text content is consistent
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Easy to Maintain</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Less brittle than XPath - survives minor HTML structure changes
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Perfect for Links</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ideal for navigation menus, product links, and call-to-action buttons
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex gap-3">
              <Badge variant="outline" className="h-6">1</Badge>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Exact Text When Possible</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  LINK_TEXT is faster and more precise than PARTIAL_LINK_TEXT
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Badge variant="outline" className="h-6">2</Badge>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Handle Dynamic Text</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use PARTIAL_LINK_TEXT for text that may change (e.g., "Items in Cart: 3")
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Badge variant="outline" className="h-6">3</Badge>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Consider Localization</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Text locators may break in multi-language applications - use data attributes instead
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Badge variant="outline" className="h-6">4</Badge>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Trim Whitespace</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Text matching is exact - extra spaces or line breaks will cause failures
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Issues */}
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
              <AlertTitle className="text-red-900 dark:text-red-100">Text Not Found</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Element exists but text locator fails<br/>
                <strong>Solution:</strong> Check for extra whitespace, hidden characters, or use PARTIAL_LINK_TEXT
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Multiple Matches</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Multiple elements with same text<br/>
                <strong>Solution:</strong> Use more specific locators or combine with other strategies
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Dynamic Content</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Text changes frequently (timestamps, counters)<br/>
                <strong>Solution:</strong> Use PARTIAL_LINK_TEXT with stable portion of text
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Method</th>
                  <th className="text-left p-2 font-semibold">Python</th>
                  <th className="text-left p-2 font-semibold">Java</th>
                  <th className="text-left p-2 font-semibold">JavaScript</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                <tr className="border-b">
                  <td className="p-2 font-semibold">Exact Text</td>
                  <td className="p-2 font-mono text-xs">By.LINK_TEXT</td>
                  <td className="p-2 font-mono text-xs">By.linkText()</td>
                  <td className="p-2 font-mono text-xs">By.linkText()</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Partial Text</td>
                  <td className="p-2 font-mono text-xs">By.PARTIAL_LINK_TEXT</td>
                  <td className="p-2 font-mono text-xs">By.partialLinkText()</td>
                  <td className="p-2 font-mono text-xs">By.partialLinkText()</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

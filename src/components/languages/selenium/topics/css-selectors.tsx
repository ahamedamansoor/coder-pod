'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Sparkles,
  Code,
  Copy,
  CheckCircle,
  Zap,
  AlertCircle,
  Search,
  Filter,
  Layers,
  Play,
  RefreshCw,
  Terminal,
  Monitor,
  ShoppingCart,
  Star,
  Heart,
  DollarSign, Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function CssSelectors() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [cartCount, setCartCount] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(false);

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

  const simulateCssSelector = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setSelectedElement(null);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    setCartCount(0);
    setIsLiked(false);

    const multiplier = getSpeedMultiplier();
    
    // Get language-specific line numbers
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { nav: 7, findProduct: 10, clickProduct: 11, findPrice: 14, findCart: 17, clickCart: 18, findWishlist: 21, clickWishlist: 22, quit: 25 };
      } else if (selectedLanguage === 'java') {
        return { nav: 7, findProduct: 10, clickProduct: 11, findPrice: 14, findCart: 17, clickCart: 18, findWishlist: 21, clickWishlist: 22, quit: 24 };
      } else {
        return { nav: 3, findProduct: 6, clickProduct: 7, findPrice: 10, findCart: 13, clickCart: 14, findWishlist: 17, clickWishlist: 18, quit: 20 };
      }
    };
    const lines = getCodeLines();
    
    const varNames = {
      product: selectedLanguage === 'python' ? 'product_card' : 'productCard',
      price: selectedLanguage === 'python' ? 'price_element' : 'priceElement',
      cart: selectedLanguage === 'python' ? 'add_cart_btn' : 'addCartBtn',
      wishlist: selectedLanguage === 'python' ? 'wishlist_btn' : 'wishlistBtn'
    };

    const steps = [
      { step: 0, log: '🚀 Starting CSS selector demo on e-commerce page...', delay: 500 * multiplier, element: null, codeLine: 0 },
      { step: 1, log: '🌐 Loading product catalog...', delay: 600 * multiplier, element: null, codeLine: lines.nav, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, log: '🔍 Using CSS: .product-card[data-category="electronics"]', delay: 800 * multiplier, element: null, codeLine: lines.findProduct },
      { step: 3, log: '✅ Found electronics product card', delay: 700 * multiplier, element: 'product-card', codeLine: lines.findProduct, variable: { name: varNames.product, value: '<WebElement: div.product-card>' } },
      { step: 4, log: '🖱️  Clicking on product card...', delay: 1000 * multiplier, element: 'product-card', action: 'selectProduct', codeLine: lines.clickProduct, variable: { name: varNames.product, value: '<WebElement: div.product-card>' } },
      { step: 5, log: '🔍 Selecting: .product-card .price-tag > .discount', delay: 800 * multiplier, element: 'product-card', codeLine: lines.findPrice, variable: { name: varNames.product, value: '<WebElement: div.product-card>' } },
      { step: 6, log: '💰 Found discount price: $899', delay: 700 * multiplier, element: 'price', codeLine: lines.findPrice, variable: { name: varNames.price, value: '$899' } },
      { step: 7, log: '🔍 Finding: button.add-to-cart:not([disabled])', delay: 800 * multiplier, element: 'price', codeLine: lines.findCart, variable: { name: varNames.price, value: '$899' } },
      { step: 8, log: '✅ Found enabled "Add to Cart" button', delay: 700 * multiplier, element: 'add-cart', codeLine: lines.findCart, variable: { name: varNames.cart, value: '<WebElement: button.add-to-cart>' } },
      { step: 9, log: '🛒 Adding product to shopping cart...', delay: 1000 * multiplier, element: 'add-cart', action: 'addCart', codeLine: lines.clickCart, variable: { name: varNames.cart, value: '<WebElement: button.add-to-cart>' } },
      { step: 10, log: '🔍 Selecting: button[aria-label="Add to wishlist"]', delay: 800 * multiplier, element: 'add-cart', codeLine: lines.findWishlist, variable: { name: varNames.cart, value: '<WebElement: button.add-to-cart>' } },
      { step: 11, log: '✅ Found wishlist button', delay: 700 * multiplier, element: 'wishlist', codeLine: lines.findWishlist, variable: { name: varNames.wishlist, value: '<WebElement: button[aria-label]>' } },
      { step: 12, log: '❤️  Adding to wishlist...', delay: 1000 * multiplier, element: 'wishlist', action: 'like', codeLine: lines.clickWishlist, variable: { name: varNames.wishlist, value: '<WebElement: button[aria-label]>' } },
      { step: 13, log: '🎉 CSS selector demo completed successfully!', delay: 500 * multiplier, element: null, codeLine: lines.quit },
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
      
      if (action === 'addCart') {
        setCartCount(1);
      } else if (action === 'like') {
        setIsLiked(true);
      }
    }

    setIsRunning(false);
  };

  const getCssLocatorCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
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
        '# 🔍 Find product card by CSS selector',
        'product_card = driver.find_element(By.CSS_SELECTOR, ".product-card[data-category=\\"electronics\\"]")',
        'product_card.click()  # 🖱️ Click on product',
        '',
        '# 🔍 Find discount price using descendant selector',
        'price_element = driver.find_element(By.CSS_SELECTOR, ".product-card .price-tag > .discount")',
        '',
        '# 🔍 Find enabled Add to Cart button with pseudo-class',
        'add_cart_btn = driver.find_element(By.CSS_SELECTOR, "button.add-to-cart:not([disabled])")',
        'add_cart_btn.click()  # 🛒 Add to cart',
        '',
        '# 🔍 Find wishlist button by attribute selector',
        'wishlist_btn = driver.find_element(By.CSS_SELECTOR, "button[aria-label=\\"Add to wishlist\\"]")',
        'wishlist_btn.click()  # ❤️ Add to wishlist',
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
        '// 🔍 Find product card by CSS selector',
        'WebElement productCard = driver.findElement(By.cssSelector(".product-card[data-category=\\"electronics\\"]"));',
        'productCard.click();',
        '',
        '// 🔍 Find discount price using descendant selector',
        'WebElement priceElement = driver.findElement(By.cssSelector(".product-card .price-tag > .discount"));',
        '',
        '// 🔍 Find enabled Add to Cart button with pseudo-class',
        'WebElement addCartBtn = driver.findElement(By.cssSelector("button.add-to-cart:not([disabled])"));',
        'addCartBtn.click();',
        '',
        '// 🔍 Find wishlist button by attribute selector',
        'WebElement wishlistBtn = driver.findElement(By.cssSelector("button[aria-label=\\"Add to wishlist\\"]"));',
        'wishlistBtn.click();',
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
        '// 🔍 Find product card by CSS selector',
        'let productCard = await driver.findElement(By.css(\'.product-card[data-category="electronics"]\'));',
        'await productCard.click();',
        '',
        '// 🔍 Find discount price using descendant selector',
        'let priceElement = await driver.findElement(By.css(\'.product-card .price-tag > .discount\'));',
        '',
        '// 🔍 Find enabled Add to Cart button with pseudo-class',
        'let addCartBtn = await driver.findElement(By.css(\'button.add-to-cart:not([disabled])\'));',
        'await addCartBtn.click();',
        '',
        '// 🔍 Find wishlist button by attribute selector',
        'let wishlistBtn = await driver.findElement(By.css(\'button[aria-label="Add to wishlist"]\'));',
        'await wishlistBtn.click();',
        '',
        'await driver.quit();',
      ];
    }
  };

  const cssLocatorExample = {
    python: getCssLocatorCode('python').join('\n'),
    java: getCssLocatorCode('java').join('\n'),
    javascript: getCssLocatorCode('javascript').join('\n'),
  };

  const basicCssExample = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://www.example.com")

# Basic CSS Selectors

# 1. Class selector
button = driver.find_element(By.CSS_SELECTOR, ".btn-primary")

# 2. ID selector
header = driver.find_element(By.CSS_SELECTOR, "#main-header")

# 3. Tag selector
all_links = driver.find_elements(By.CSS_SELECTOR, "a")

# 4. Attribute selector
email_input = driver.find_element(By.CSS_SELECTOR, "input[type='email']")

# 5. Multiple classes
special_button = driver.find_element(By.CSS_SELECTOR, ".btn.btn-primary.active")

# 6. Descendant selector
menu_link = driver.find_element(By.CSS_SELECTOR, "nav a.active")

# 7. Direct child selector
first_item = driver.find_element(By.CSS_SELECTOR, "ul > li")

# 8. Attribute contains
search_field = driver.find_element(By.CSS_SELECTOR, "input[name*='search']")

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import java.util.List;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com");

// Basic CSS Selectors

// 1. Class selector
WebElement button = driver.findElement(By.cssSelector(".btn-primary"));

// 2. ID selector
WebElement header = driver.findElement(By.cssSelector("#main-header"));

// 3. Tag selector
List<WebElement> allLinks = driver.findElements(By.cssSelector("a"));

// 4. Attribute selector
WebElement emailInput = driver.findElement(By.cssSelector("input[type='email']"));

// 5. Multiple classes
WebElement specialButton = driver.findElement(By.cssSelector(".btn.btn-primary.active"));

// 6. Descendant selector
WebElement menuLink = driver.findElement(By.cssSelector("nav a.active"));

// 7. Direct child selector
WebElement firstItem = driver.findElement(By.cssSelector("ul > li"));

// 8. Attribute contains
WebElement searchField = driver.findElement(By.cssSelector("input[name*='search']"));

driver.quit();`,
    javascript: `const { Builder, By } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com');

// Basic CSS Selectors

// 1. Class selector
let button = await driver.findElement(By.css('.btn-primary'));

// 2. ID selector
let header = await driver.findElement(By.css('#main-header'));

// 3. Tag selector
let allLinks = await driver.findElements(By.css('a'));

// 4. Attribute selector
let emailInput = await driver.findElement(By.css('input[type="email"]'));

// 5. Multiple classes
let specialButton = await driver.findElement(By.css('.btn.btn-primary.active'));

// 6. Descendant selector
let menuLink = await driver.findElement(By.css('nav a.active'));

// 7. Direct child selector
let firstItem = await driver.findElement(By.css('ul > li'));

// 8. Attribute contains
let searchField = await driver.findElement(By.css('input[name*="search"]'));

await driver.quit();`,
  };

  const advancedCssExample = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://www.example.com/products")

# Advanced CSS Selectors

# 1. Nth-child selector - Select 3rd product
third_product = driver.find_element(By.CSS_SELECTOR, ".product-list > .product:nth-child(3)")

# 2. First and last child
first_item = driver.find_element(By.CSS_SELECTOR, "ul li:first-child")
last_item = driver.find_element(By.CSS_SELECTOR, "ul li:last-child")

# 3. Attribute starts with
external_links = driver.find_elements(By.CSS_SELECTOR, "a[href^='https://']")

# 4. Attribute ends with
pdf_links = driver.find_elements(By.CSS_SELECTOR, "a[href$='.pdf']")

# 5. Multiple attributes
premium_product = driver.find_element(
    By.CSS_SELECTOR, 
    ".product[data-category='electronics'][data-price-range='premium']"
)

# 6. Not selector - All buttons except disabled
active_buttons = driver.find_elements(By.CSS_SELECTOR, "button:not([disabled])")

# 7. Sibling selector - Next sibling
next_element = driver.find_element(By.CSS_SELECTOR, ".current + .next")

# 8. General sibling - All following siblings
all_siblings = driver.find_elements(By.CSS_SELECTOR, ".first ~ .sibling")

# 9. Pseudo-class combinations
checked_checkbox = driver.find_element(By.CSS_SELECTOR, "input[type='checkbox']:checked")

# 10. Complex nested selector
price = driver.find_element(
    By.CSS_SELECTOR,
    ".product-card .pricing-section > .price-container .final-price"
)

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import java.util.List;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com/products");

// Advanced CSS Selectors

// 1. Nth-child selector - Select 3rd product
WebElement thirdProduct = driver.findElement(By.cssSelector(".product-list > .product:nth-child(3)"));

// 2. First and last child
WebElement firstItem = driver.findElement(By.cssSelector("ul li:first-child"));
WebElement lastItem = driver.findElement(By.cssSelector("ul li:last-child"));

// 3. Attribute starts with
List<WebElement> externalLinks = driver.findElements(By.cssSelector("a[href^='https://']"));

// 4. Attribute ends with
List<WebElement> pdfLinks = driver.findElements(By.cssSelector("a[href$='.pdf']"));

// 5. Multiple attributes
WebElement premiumProduct = driver.findElement(
    By.cssSelector(".product[data-category='electronics'][data-price-range='premium']")
);

// 6. Not selector - All buttons except disabled
List<WebElement> activeButtons = driver.findElements(By.cssSelector("button:not([disabled])"));

// 7. Sibling selector - Next sibling
WebElement nextElement = driver.findElement(By.cssSelector(".current + .next"));

// 8. General sibling - All following siblings
List<WebElement> allSiblings = driver.findElements(By.cssSelector(".first ~ .sibling"));

// 9. Pseudo-class combinations
WebElement checkedCheckbox = driver.findElement(By.cssSelector("input[type='checkbox']:checked"));

// 10. Complex nested selector
WebElement price = driver.findElement(
    By.cssSelector(".product-card .pricing-section > .price-container .final-price")
);

driver.quit();`,
    javascript: `const { Builder, By } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com/products');

// Advanced CSS Selectors

// 1. Nth-child selector - Select 3rd product
let thirdProduct = await driver.findElement(By.css('.product-list > .product:nth-child(3)'));

// 2. First and last child
let firstItem = await driver.findElement(By.css('ul li:first-child'));
let lastItem = await driver.findElement(By.css('ul li:last-child'));

// 3. Attribute starts with
let externalLinks = await driver.findElements(By.css('a[href^="https://"]'));

// 4. Attribute ends with
let pdfLinks = await driver.findElements(By.css('a[href$=".pdf"]'));

// 5. Multiple attributes
let premiumProduct = await driver.findElement(
    By.css('.product[data-category="electronics"][data-price-range="premium"]')
);

// 6. Not selector - All buttons except disabled
let activeButtons = await driver.findElements(By.css('button:not([disabled])'));

// 7. Sibling selector - Next sibling
let nextElement = await driver.findElement(By.css('.current + .next'));

// 8. General sibling - All following siblings
let allSiblings = await driver.findElements(By.css('.first ~ .sibling'));

// 9. Pseudo-class combinations
let checkedCheckbox = await driver.findElement(By.css('input[type="checkbox"]:checked'));

// 10. Complex nested selector
let price = await driver.findElement(
    By.css('.product-card .pricing-section > .price-container .final-price')
);

await driver.quit();`,
  };

  const bestPractices = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://www.example.com")

# 1. Use specific selectors over generic ones
# Good: Specific and fast
submit_btn = driver.find_element(By.CSS_SELECTOR, "form#login button[type='submit']")
# Avoid: Too generic
# button = driver.find_element(By.CSS_SELECTOR, "button")

# 2. Combine multiple attributes for uniqueness
unique_element = driver.find_element(
    By.CSS_SELECTOR,
    "input[type='text'][name='username'][placeholder='Enter username']"
)

# 3. Use data attributes for test automation
test_element = driver.find_element(By.CSS_SELECTOR, "[data-testid='login-button']")

# 4. Leverage :not() to exclude elements
visible_items = driver.find_elements(By.CSS_SELECTOR, ".item:not(.hidden)")

# 5. Use nth-child carefully (1-indexed)
third_row = driver.find_element(By.CSS_SELECTOR, "table tbody tr:nth-child(3)")

# 6. Combine with waits for dynamic content
wait = WebDriverWait(driver, 10)
element = wait.until(
    EC.presence_of_element_located((By.CSS_SELECTOR, ".dynamic-content[data-loaded='true']"))
)

# 7. Use attribute selectors for partial matches
# Starts with: ^=
search_inputs = driver.find_elements(By.CSS_SELECTOR, "input[id^='search']")
# Ends with: $=
submit_buttons = driver.find_elements(By.CSS_SELECTOR, "button[class$='submit']")
# Contains: *=
error_messages = driver.find_elements(By.CSS_SELECTOR, "div[class*='error']")

# 8. Chain selectors for precision
nested_element = driver.find_element(
    By.CSS_SELECTOR,
    "div.container > section#main article.post:first-child h2.title"
)

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.List;

WebDriver driver = new ChromeDriver();
driver.get("https://www.example.com");

// 1. Use specific selectors over generic ones
// Good: Specific and fast
WebElement submitBtn = driver.findElement(By.cssSelector("form#login button[type='submit']"));
// Avoid: Too generic
// WebElement button = driver.findElement(By.cssSelector("button"));

// 2. Combine multiple attributes for uniqueness
WebElement uniqueElement = driver.findElement(
    By.cssSelector("input[type='text'][name='username'][placeholder='Enter username']")
);

// 3. Use data attributes for test automation
WebElement testElement = driver.findElement(By.cssSelector("[data-testid='login-button']"));

// 4. Leverage :not() to exclude elements
List<WebElement> visibleItems = driver.findElements(By.cssSelector(".item:not(.hidden)"));

// 5. Use nth-child carefully (1-indexed)
WebElement thirdRow = driver.findElement(By.cssSelector("table tbody tr:nth-child(3)"));

// 6. Combine with waits for dynamic content
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement element = wait.until(
    ExpectedConditions.presenceOfElementLocated(By.cssSelector(".dynamic-content[data-loaded='true']"))
);

// 7. Use attribute selectors for partial matches
// Starts with: ^=
List<WebElement> searchInputs = driver.findElements(By.cssSelector("input[id^='search']"));
// Ends with: $=
List<WebElement> submitButtons = driver.findElements(By.cssSelector("button[class$='submit']"));
// Contains: *=
List<WebElement> errorMessages = driver.findElements(By.cssSelector("div[class*='error']"));

// 8. Chain selectors for precision
WebElement nestedElement = driver.findElement(
    By.cssSelector("div.container > section#main article.post:first-child h2.title")
);

driver.quit();`,
    javascript: `const { Builder, By, until } = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://www.example.com');

// 1. Use specific selectors over generic ones
// Good: Specific and fast
let submitBtn = await driver.findElement(By.css('form#login button[type="submit"]'));
// Avoid: Too generic
// let button = await driver.findElement(By.css('button'));

// 2. Combine multiple attributes for uniqueness
let uniqueElement = await driver.findElement(
    By.css('input[type="text"][name="username"][placeholder="Enter username"]')
);

// 3. Use data attributes for test automation
let testElement = await driver.findElement(By.css('[data-testid="login-button"]'));

// 4. Leverage :not() to exclude elements
let visibleItems = await driver.findElements(By.css('.item:not(.hidden)'));

// 5. Use nth-child carefully (1-indexed)
let thirdRow = await driver.findElement(By.css('table tbody tr:nth-child(3)'));

// 6. Combine with waits for dynamic content
let element = await driver.wait(
    until.elementLocated(By.css('.dynamic-content[data-loaded="true"]')),
    10000
);

// 7. Use attribute selectors for partial matches
// Starts with: ^=
let searchInputs = await driver.findElements(By.css('input[id^="search"]'));
// Ends with: $=
let submitButtons = await driver.findElements(By.css('button[class$="submit"]'));
// Contains: *=
let errorMessages = await driver.findElements(By.css('div[class*="error"]'));

// 8. Chain selectors for precision
let nestedElement = await driver.findElement(
    By.css('div.container > section#main article.post:first-child h2.title')
);

await driver.quit();`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Sparkles}
        category="Selenium · Locator Strategies"
        title="CSS Selectors"
        description="Master the most powerful and flexible locator strategy - CSS selectors for precise element targeting"
        colorTheme="blue"
        badges={[
          { label: 'Most Powerful', variant: 'success' },
          { label: 'Fast Performance', variant: 'info' },
          { label: 'Industry Standard', variant: 'secondary' },
        ]}
      />

      {/* Why CSS Selectors */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Why CSS Selectors?
          </CardTitle>
          <CardDescription>The Swiss Army knife of element location</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Extremely Powerful</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Combine classes, attributes, hierarchy, and pseudo-selectors for pinpoint accuracy
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">Fast Performance</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Browsers are optimized for CSS - faster than XPath in most cases
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Filter className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Flexible Filtering</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Use :not(), :nth-child(), attribute patterns, and more
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Industry Standard</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Most widely used locator strategy in professional test automation
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
            <Code className="w-5 h-5 text-blue-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            CSS selector syntax in Python, Java, and JavaScript
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
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
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
                {selectedLanguage === 'python' && `# Basic CSS selectors
element = driver.find_element(By.CSS_SELECTOR, ".btn-primary")
element.click()

# Attribute selector
link = driver.find_element(By.CSS_SELECTOR, "a[href='/login']")

# Descendant selector
item = driver.find_element(By.CSS_SELECTOR, "div.container > ul > li")

# Pseudo-class selector
first_item = driver.find_element(By.CSS_SELECTOR, "li:first-child")
enabled_btn = driver.find_element(By.CSS_SELECTOR, "button:not([disabled])")`}
                {selectedLanguage === 'java' && `// Basic CSS selectors
WebElement element = driver.findElement(By.cssSelector(".btn-primary"));
element.click();

// Attribute selector
WebElement link = driver.findElement(By.cssSelector("a[href='/login']"));

// Descendant selector
WebElement item = driver.findElement(By.cssSelector("div.container > ul > li"));

// Pseudo-class selector
WebElement firstItem = driver.findElement(By.cssSelector("li:first-child"));
WebElement enabledBtn = driver.findElement(By.cssSelector("button:not([disabled])"));`}
                {selectedLanguage === 'javascript' && `// Basic CSS selectors
let element = await driver.findElement(By.css('.btn-primary'));
await element.click();

// Attribute selector
let link = await driver.findElement(By.css("a[href='/login']"));

// Descendant selector
let item = await driver.findElement(By.css('div.container > ul > li'));

// Pseudo-class selector
let firstItem = await driver.findElement(By.css('li:first-child'));
let enabledBtn = await driver.findElement(By.css('button:not([disabled])'));`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive E-commerce Demo */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <ShoppingCart className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Interactive E-commerce Demo
          </CardTitle>
          <CardDescription>See CSS selectors in action with a realistic product card</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
            <Play className="h-5 w-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Live E-commerce Simulation</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Watch as CSS selectors navigate through a product card, selecting prices, ratings, and buttons with precision! Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          {/* Speed Control */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400" />
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
                        ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-css"
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
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateCssSelector}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
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
                    onClick={() => copyToClipboard(cssLocatorExample[selectedLanguage], 'CSS selector code')}
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
                    {getCssLocatorCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-blue-200 dark:bg-blue-900/50 border-l-4 border-blue-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-blue-900 dark:text-blue-100' : 'text-slate-800 dark:text-slate-300'}>
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
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{cssLocatorExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {/* Right: Live Preview */}
            {currentStep > 1 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Product Card Preview</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 min-h-[400px]">
              {/* Product Card */}
              <div 
                className={`max-w-sm mx-auto bg-white dark:bg-slate-950 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  selectedElement === 'product-card' ? 'ring-4 ring-indigo-500 ring-opacity-50 scale-105' : ''
                }`}
                data-category="electronics"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                  <Monitor className="w-20 h-20 text-slate-400" />
                  {cartCount > 0 && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-in zoom-in">
                      <ShoppingCart className="w-3 h-3" />
                      {cartCount}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Premium Laptop Pro
                  </h3>

                  {/* Rating */}
                  <div 
                    className={`flex items-center gap-1 rating transition-all duration-300 ${
                      selectedElement === 'rating' ? 'ring-2 ring-indigo-500 ring-opacity-50 rounded p-1' : ''
                    }`}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className={`w-4 h-4 ${
                          star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
                        } ${selectedElement === 'rating' && star === 4 ? 'animate-pulse scale-125' : ''}`}
                      />
                    ))}
                    <span className="text-sm text-slate-600 dark:text-slate-400 ml-2">(4.0)</span>
                  </div>

                  {/* Price */}
                  <div 
                    className={`price-tag transition-all duration-300 ${
                      selectedElement === 'price' ? 'ring-2 ring-indigo-500 ring-opacity-50 rounded p-2' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500 line-through">$1,299</span>
                      <Badge variant="destructive" className="text-xs">30% OFF</Badge>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="text-2xl font-bold text-green-600 discount">899</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <button
                      className={`add-to-cart flex-1 px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                        selectedElement === 'add-cart'
                          ? 'bg-indigo-600 text-white shadow-lg scale-105 ring-2 ring-indigo-500'
                          : cartCount > 0
                          ? 'bg-green-600 text-white'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {cartCount > 0 ? 'Added!' : 'Add to Cart'}
                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedElement === 'wishlist'
                          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 scale-110 ring-2 ring-indigo-500'
                          : isLiked
                          ? 'border-red-500 bg-red-50 dark:bg-red-950/30'
                          : 'border-slate-300 dark:border-slate-600 hover:border-red-500'
                      }`}
                      aria-label="Add to wishlist"
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
                    </button>
                  </div>

                  {/* Badges */}
                  <div className="flex gap-2 pt-2">
                    <Badge variant="secondary" className="text-xs">Free Shipping</Badge>
                    <Badge variant="outline" className="text-xs">In Stock</Badge>
                  </div>
                </div>

                {selectedElement && (
                  <div className="px-4 pb-4">
                    <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1 bg-indigo-50 dark:bg-indigo-950/30 p-2 rounded">
                      <Sparkles className="w-3 h-3" />
                      CSS Selector targeting: {selectedElement}
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

      {/* Basic CSS Selectors */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Basic CSS Selectors
          </CardTitle>
          <CardDescription>Essential CSS selector patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <CheckCircle className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Foundation Patterns</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Master these basic patterns first - they form the building blocks for more complex selectors.
            </AlertDescription>
          </Alert>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{basicCssExample[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(basicCssExample[selectedLanguage], 'Basic CSS selectors')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Advanced CSS Selectors */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Advanced CSS Selectors
          </CardTitle>
          <CardDescription>Powerful patterns for complex scenarios</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-3">
            {/* Nth-child Selector */}
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-blue-600">:nth-child()</Badge>
              </div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Select Specific Position</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                .product:nth-child(3)
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Select the 3rd product in a list
              </p>
            </div>

            {/* Attribute Contains */}
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-green-600">[attr*="value"]</Badge>
              </div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Attribute Contains</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                [class*="button"]
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Match any class containing "button"
              </p>
            </div>

            {/* Not Selector */}
            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-orange-600">:not()</Badge>
              </div>
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm">Exclude Elements</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                button:not([disabled])
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Select enabled buttons only
              </p>
            </div>

            {/* Sibling Combinator */}
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-purple-600">elem + next</Badge>
              </div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">Adjacent Sibling</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                h2 + p
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Select paragraph right after h2
              </p>
            </div>

            {/* Multiple Attributes */}
            <div className="p-4 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 rounded-lg border-2 border-rose-200 dark:border-rose-700">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-rose-600">[attr][attr]</Badge>
              </div>
              <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-2 text-sm">Multiple Attributes</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                input[type="text"][required]
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Required text inputs only
              </p>
            </div>

            {/* Last Child */}
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-indigo-600">:last-child</Badge>
              </div>
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 text-sm">Last Element</h4>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                li:last-child
              </code>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Select the last list item
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CSS Selector Cheat Sheet */}
      <Card className="border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/40">
              <Search className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            CSS Selector Cheat Sheet
          </CardTitle>
          <CardDescription>Quick reference for common patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { pattern: '.class', desc: 'Select by class name', color: 'from-blue-50 to-sky-50 border-blue-200' },
              { pattern: '#id', desc: 'Select by ID', color: 'from-green-50 to-teal-50 border-green-200' },
              { pattern: 'tag', desc: 'Select by tag name', color: 'from-purple-50 to-fuchsia-50 border-purple-200' },
              { pattern: '[attr]', desc: 'Has attribute', color: 'from-orange-50 to-yellow-50 border-orange-200' },
              { pattern: '[attr="value"]', desc: 'Attribute equals value', color: 'from-pink-50 to-rose-50 border-pink-200' },
              { pattern: '[attr^="value"]', desc: 'Attribute starts with', color: 'from-indigo-50 to-blue-50 border-indigo-200' },
              { pattern: '[attr$="value"]', desc: 'Attribute ends with', color: 'from-emerald-50 to-green-50 border-emerald-200' },
              { pattern: '[attr*="value"]', desc: 'Attribute contains', color: 'from-amber-50 to-orange-50 border-amber-200' },
              { pattern: 'parent child', desc: 'Descendant selector', color: 'from-cyan-50 to-blue-50 border-cyan-200' },
              { pattern: 'parent > child', desc: 'Direct child', color: 'from-lime-50 to-green-50 border-lime-200' },
              { pattern: 'elem + next', desc: 'Adjacent sibling', color: 'from-violet-50 to-purple-50 border-violet-200' },
              { pattern: 'elem ~ siblings', desc: 'General siblings', color: 'from-red-50 to-pink-50 border-red-200' },
              { pattern: ':first-child', desc: 'First child element', color: 'from-teal-50 to-cyan-50 border-teal-200' },
              { pattern: ':last-child', desc: 'Last child element', color: 'from-fuchsia-50 to-pink-50 border-fuchsia-200' },
              { pattern: ':nth-child(n)', desc: 'Nth child (1-indexed)', color: 'from-sky-50 to-indigo-50 border-sky-200' },
              { pattern: ':not(selector)', desc: 'Exclude matching elements', color: 'from-rose-50 to-red-50 border-rose-200' },
            ].map((item, index) => (
              <div key={index} className={`p-3 bg-gradient-to-br ${item.color} dark:from-slate-800 dark:to-slate-700 rounded-lg border-2 dark:border-slate-600 hover:scale-105 transition-transform`}>
                <code className="text-sm font-bold text-slate-900 dark:text-slate-100 block mb-1">{item.pattern}</code>
                <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <CheckCircle className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Best Practices & Tips
          </CardTitle>
          <CardDescription>Professional techniques for CSS selectors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{bestPractices[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(bestPractices[selectedLanguage], 'Best practices')}
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
          <CardDescription>Troubleshooting CSS selectors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Selector Too Generic</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Using <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">div</code> or <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">.button</code> matches too many elements.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Add more specificity: <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">form#login div.error-message</code>
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Dynamic Class Names</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> Classes like <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">css-1x2y3z4</code> change on each build.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Use data attributes: <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">[data-testid="submit-btn"]</code> or partial match: <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">[class*="submit"]</code>
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ nth-child Confusion</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">:nth-child()</code> is 1-indexed, not 0-indexed.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> First element is <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">:nth-child(1)</code>, not <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">:nth-child(0)</code>
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Special Characters in Values</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Cause:</strong> IDs or classes with special characters like <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">user:123</code>.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Solution:</strong> Escape with backslash: <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">#user\:123</code> or use attribute selector: <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">[id="user:123"]</code>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When to Use CSS vs Other Locators */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <Filter className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            When to Use CSS Selectors
          </CardTitle>
          <CardDescription>Choosing the right locator strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Use CSS When:
              </h4>
              <div className="space-y-2">
                {[
                  'Need complex attribute combinations',
                  'Working with modern web applications',
                  'Performance is critical',
                  'Selecting by class patterns',
                  'Using pseudo-selectors (:not, :nth-child)',
                  'Team prefers CSS over XPath',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                Consider Alternatives When:
              </h4>
              <div className="space-y-2">
                {[
                  'Need to traverse up the DOM (use XPath)',
                  'Text content is the best identifier',
                  'Element has unique ID (use ID locator)',
                  'Need to select by visible text',
                  'Working with complex table structures',
                  'Selecting based on element position in document',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

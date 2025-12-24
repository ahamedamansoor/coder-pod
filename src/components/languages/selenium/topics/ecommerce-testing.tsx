'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  ShoppingCart,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Monitor,
  Gauge,
  Package,
  CreditCard,
  Search,
  Plus,
  Minus,
  Trash2,
  Eye,
  Heart,
  Star,
  Filter,
  SortAsc,
  DollarSign,
  Truck,
  Shield,
  TrendingUp,
  Users,
  Activity
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function EcommerceTesting() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript' | 'playwright'>('playwright');
  const [selectedSite, setSelectedSite] = React.useState<'amazon' | 'ebay' | 'shopify' | 'general'>('amazon');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});
  const [cartState, setCartState] = React.useState({
    items: [] as Array<{
      id: string,
      name: string, 
      price: number, 
      quantity: number, 
      site: string,
      image: string,
      category: string,
      rating: number,
      inStock: boolean
    }>,
    total: 0,
    action: '',
    currentProduct: '',
    searchQuery: '',
    site: 'amazon',
    isCartOpen: false,
    showCartPage: false
  });
  const [showProductDashboard, setShowProductDashboard] = React.useState(true);
  const [selectedProduct, setSelectedProduct] = React.useState<any>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  // Realistic product data
  const getProducts = () => [
    {
      id: '1',
      name: 'Apple MacBook Pro 14"',
      price: 1999.99,
      site: 'Amazon',
      image: '🖥️',
      category: 'Electronics',
      rating: 4.8,
      inStock: true,
      description: 'M3 Pro chip, 18GB RAM, 512GB SSD'
    },
    {
      id: '2', 
      name: 'Vintage Rolex Submariner',
      price: 8500.00,
      site: 'eBay',
      image: '⌚',
      category: 'Watches',
      rating: 4.9,
      inStock: true,
      description: '1960s vintage, excellent condition'
    },
    {
      id: '3',
      name: 'Allbirds Tree Dashers',
      price: 135.00,
      site: 'Allbirds',
      image: '👟',
      category: 'Footwear',
      rating: 4.6,
      inStock: true,
      description: 'Sustainable running shoes'
    },
    {
      id: '4',
      name: 'Sony WH-1000XM5 Headphones',
      price: 399.99,
      site: 'Amazon',
      image: '🎧',
      category: 'Electronics',
      rating: 4.7,
      inStock: true,
      description: 'Wireless noise-canceling headphones'
    },
    {
      id: '5',
      name: 'iPad Air 5th Gen',
      price: 599.99,
      site: 'Amazon',
      image: '📱',
      category: 'Electronics',
      rating: 4.8,
      inStock: true,
      description: '10.9" display, 64GB, Wi-Fi'
    }
  ];

  const addToCart = (product: any) => {
    setCartState(prev => {
      const existingItem = prev.items.find(item => item.id === product.id);
      
      if (existingItem) {
        // Update quantity if product already exists
        const updatedItems = prev.items.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        toast({
          title: 'Product Updated',
          description: `${product.name} quantity increased to ${existingItem.quantity + 1}`,
        });
        
        return {
          ...prev,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
          action: 'updated'
        };
      } else {
        // Add new product to cart
        const newItems = [...prev.items, { ...product, quantity: 1 }];
        
        toast({
          title: 'Added to Cart',
          description: `${product.name} has been added to your cart`,
        });
        
        return {
          ...prev,
          items: newItems,
          total: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
          action: 'added',
          currentProduct: product.name
        };
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartState(prev => {
      const updatedItems = prev.items.filter(item => item.id !== productId);
      const removedProduct = prev.items.find(item => item.id === productId);
      
      toast({
        title: 'Removed from Cart',
        description: `${removedProduct?.name} has been removed from your cart`,
      });
      
      return {
        ...prev,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        action: 'removed'
      };
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setCartState(prev => {
      const updatedItems = prev.items.map(item => 
        item.id === productId ? { ...item, quantity } : item
      );
      
      return {
        ...prev,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        action: 'updated'
      };
    });
  };

  const toggleCart = () => {
    setCartState(prev => ({ ...prev, isCartOpen: !prev.isCartOpen }));
  };

  const goToCartPage = () => {
    setCartState(prev => ({ ...prev, showCartPage: true, isCartOpen: false }));
  };

  const backToShopping = () => {
    setCartState(prev => ({ ...prev, showCartPage: false }));
  };

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.4;
      default: return 1;
    }
  };

  const simulateEcommerceTest = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setCurrentCodeLine(-1);
    setLiveVariables({});
    
    // Clear cart and ensure product dashboard is visible
    setCartState({ 
      items: [], 
      total: 0, 
      action: '', 
      currentProduct: '', 
      searchQuery: '', 
      site: selectedSite,
      isCartOpen: false,
      showCartPage: false 
    });
    setShowProductDashboard(true);

    const multiplier = getSpeedMultiplier();
    const macbookPro = getProducts()[0]; // Apple MacBook Pro 14"
    const sonyHeadphones = getProducts()[3]; // Sony WH-1000XM5 Headphones
    
    const steps = [
      { step: 0, log: '🚀 Starting Interactive Demo...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '📦 Product Dashboard loaded - showing available products', delay: 800 * multiplier, codeLine: 0 },
      { step: 2, log: '💻 Clicking "Add to Cart" on Apple MacBook Pro 14"...', delay: 1000 * multiplier, codeLine: 0, 
        action: () => {
          addToCart(macbookPro);
          setLiveVariables({ product: 'Apple MacBook Pro 14"', price: '$1999.99', quantity: '1' });
        }
      },
      { step: 3, log: '🛒 Product added to cart successfully!', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ product: 'Apple MacBook Pro 14"', price: '$1999.99', quantity: '1', cartTotal: '$1999.99' });
        }
      },
      { step: 4, log: '👁️ Cart Preview showing (1 item)', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ product: 'Apple MacBook Pro 14"', price: '$1999.99', quantity: '1', cartTotal: '$1999.99', cartItems: '1' });
        }
      },
      { step: 5, log: '🖱️ Clicking "Cart Page" button...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          goToCartPage();
          setLiveVariables({ product: 'Apple MacBook Pro 14"', price: '$1999.99', quantity: '1', cartTotal: '$1999.99', cartItems: '1', page: 'Cart Page' });
        }
      },
      { step: 6, log: '📱 Navigated to Shopping Cart Page', delay: 1000 * multiplier, codeLine: 0 },
      { step: 7, log: '🔢 Increasing quantity to 3...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          updateQuantity(macbookPro.id, 3);
          setLiveVariables({ product: 'Apple MacBook Pro 14"', price: '$1999.99', quantity: '3', cartTotal: '$5999.97', cartItems: '1', page: 'Cart Page' });
        }
      },
      { step: 8, log: '✅ Quantity updated to 3', delay: 600 * multiplier, codeLine: 0 },
      { step: 9, log: '🗑️ Demonstrating delete button functionality...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ product: 'Apple MacBook Pro 14"', price: '$1999.99', quantity: '3', cartTotal: '$5999.97', cartItems: '1', page: 'Cart Page', deleteButton: 'visible' });
        }
      },
      { step: 10, log: '🗑️ Removing Apple MacBook Pro from cart...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          removeFromCart(macbookPro.id);
          setLiveVariables({ cartItems: '0', cartTotal: '$0.00', page: 'Cart Page', cartEmpty: 'true' });
        }
      },
      { step: 11, log: '📦 Your cart is now empty!', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ cartItems: '0', cartTotal: '$0.00', page: 'Cart Page', cartEmpty: 'true', emptyMessage: 'Your cart is empty' });
        }
      },
      { step: 12, log: '🛍️ Clicking "Continue Shopping" button...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          backToShopping();
          setLiveVariables({ cartItems: '0', cartTotal: '$0.00', page: 'Product Dashboard', cartEmpty: 'false' });
        }
      },
      { step: 13, log: '📦 Returned to Product Dashboard', delay: 1000 * multiplier, codeLine: 0 },
      { step: 14, log: '🎧 Adding Sony WH-1000XM5 Headphones to cart...', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          addToCart(sonyHeadphones);
          setLiveVariables({ product: 'Sony WH-1000XM5', price: '$399.99', quantity: '1', cartTotal: '$399.99', cartItems: '1' });
        }
      },
      { step: 15, log: '✅ Sony headphones added to cart!', delay: 800 * multiplier, codeLine: 0 },
      { step: 16, log: '🖱️ Clicking "Cart Page" button again...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          goToCartPage();
          setLiveVariables({ product: 'Sony WH-1000XM5', price: '$399.99', quantity: '1', cartTotal: '$399.99', cartItems: '1', page: 'Cart Page' });
        }
      },
      { step: 17, log: '📱 Back to Shopping Cart Page with Sony headphones', delay: 1000 * multiplier, codeLine: 0 },
      { step: 18, log: '💰 Final cart total: $399.99 (1×Sony WH-1000XM5)', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ product: 'Sony WH-1000XM5', price: '$399.99', quantity: '1', cartTotal: '$399.99', cartItems: '1', page: 'Cart Page', confirmed: 'true' });
        }
      },
      { step: 19, log: '🎉 Demo completed successfully!', delay: 800 * multiplier, codeLine: 0 }
    ];

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      setCurrentStep(i);
      setExecutionLogs(prev => [...prev, step.log]);
      
      if (step.action) {
        step.action();
      }
      
      if (step.codeLine !== undefined) {
        setCurrentCodeLine(step.codeLine);
      }
      
      await new Promise(resolve => setTimeout(resolve, step.delay));
    }

    setIsRunning(false);
    setCurrentCodeLine(-1);
  };

  const getEcommerceCode = (language: 'python' | 'java' | 'javascript' | 'playwright' = selectedLanguage) => {
    if (selectedSite === 'amazon') {
      if (language === 'playwright') {
        return [
          'import { test, expect } from "@playwright/test";',
          '',
          'test.describe("Amazon E-commerce Testing", () => {',
          '  test("Amazon end-to-end shopping flow", async ({ page }) => {',
          '    // Navigate to Amazon',
          '    await page.goto("https://www.amazon.com");',
          '',
          '    // Search for MacBook Pro',
          '    await page.fill("#twotabsearchtextbox", "MacBook Pro");',
          '    await page.click("#nav-search-submit-button");',
          '    await page.waitForSelector("[data-component-type=\"s-search-result\"]");',
          '',
          '    // Select first product',
          '    await page.locator("[data-component-type=\"s-search-result\"]:first-child").click();',
          '    await page.waitForSelector("#productTitle");',
          '',
          '    // Add to cart',
          '    await page.click("#add-to-cart-button");',
          '    await page.waitForSelector("#sw-atc-confirmation");',
          '',
          '    // Go to cart',
          '    await page.click("#nav-cart");',
          '    await page.waitForSelector(".sc-list-item-content");',
          '',
          '    // Update quantity',
          '    await page.selectOption("select[name=\"quantity\"]", "2");',
          '    await page.waitForTimeout(2000);',
          '',
          '    // Proceed to checkout',
          '    await page.click("input[name=\"proceedToCheckout\"]");',
          '    await page.waitForSelector(".a-spacing-large");',
          '',
          '    console.log("Amazon test completed successfully!");',
          '  });',
          '});'
        ];
      } else if (language === 'python') {
        return [
          'from selenium import webdriver',
          'from selenium.webdriver.common.by import By',
          'from selenium.webdriver.support.ui import WebDriverWait',
          'from selenium.webdriver.support import expected_conditions as EC',
          '',
          '# Amazon E-commerce Testing',
          'driver = webdriver.Chrome()',
          '',
          '# Navigate to Amazon',
          'driver.get("https://www.amazon.com")',
          '',
          '# Search for MacBook Pro',
          'search_box = driver.find_element(By.ID, "twotabsearchtextbox")',
          'search_box.send_keys("MacBook Pro")',
          'search_box.submit()',
          '',
          '# Wait for search results',
          'WebDriverWait(driver, 10).until(',
          '    EC.presence_of_element_located((By.CSS_SELECTOR, "[data-component-type=\"s-search-result\"]"))',
          ')',
          '',
          '# Select first product',
          'first_product = driver.find_element(By.CSS_SELECTOR, "[data-component-type=\"s-search-result\"]:first-child")',
          'first_product.click()',
          '',
          '# Add to cart',
          'add_to_cart = driver.find_element(By.ID, "add-to-cart-button")',
          'add_to_cart.click()',
          '',
          '# Go to cart',
          'cart = driver.find_element(By.ID, "nav-cart")',
          'cart.click()',
          '',
          'driver.quit()'
        ];
      } else if (language === 'java') {
        return [
          'import org.openqa.selenium.WebDriver;',
          'import org.openqa.selenium.chrome.ChromeDriver;',
          'import org.openqa.selenium.By;',
          'import org.openqa.selenium.WebElement;',
          'import org.openqa.selenium.support.ui.WebDriverWait;',
          'import org.openqa.selenium.support.ui.ExpectedConditions;',
          'import java.time.Duration;',
          '',
          '// Amazon E-commerce Testing',
          'WebDriver driver = new ChromeDriver();',
          'WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));',
          '',
          '// Navigate to Amazon',
          'driver.get("https://www.amazon.com");',
          '',
          '// Search for MacBook Pro',
          'WebElement searchBox = driver.findElement(By.id("twotabsearchtextbox"));',
          'searchBox.sendKeys("MacBook Pro");',
          'searchBox.submit();',
          '',
          '// Wait for search results',
          'wait.until(ExpectedConditions.presenceOfElementLocated(',
          '    By.cssSelector("[data-component-type=\"s-search-result\"]")',
          '));',
          '',
          '// Select first product',
          'WebElement firstProduct = driver.findElement(',
          '    By.cssSelector("[data-component-type=\"s-search-result\"]:first-child")',
          ');',
          'firstProduct.click();',
          '',
          '// Add to cart',
          'WebElement addToCart = driver.findElement(By.id("add-to-cart-button"));',
          'addToCart.click();',
          '',
          'driver.quit();'
        ];
      } else {
        return [
          'const { Builder, By, until } = require(\'selenium-webdriver\');',
          '',
          '// Amazon E-commerce Testing',
          'let driver = await new Builder().forBrowser(\'chrome\').build();',
          '',
          '// Navigate to Amazon',
          'await driver.get("https://www.amazon.com");',
          '',
          '// Search for MacBook Pro',
          'let searchBox = await driver.findElement(By.id("twotabsearchtextbox"));',
          'await searchBox.sendKeys("MacBook Pro");',
          'await searchBox.submit();',
          '',
          '// Wait for search results',
          'await driver.wait(until.elementLocated(',
          '    By.cssSelector("[data-component-type=\"s-search-result\"]")',
          '), 10000);',
          '',
          '// Select first product',
          'let firstProduct = await driver.findElement(',
          '    By.cssSelector("[data-component-type=\"s-search-result\"]:first-child")',
          ');',
          'await firstProduct.click();',
          '',
          '// Add to cart',
          'let addToCart = await driver.findElement(By.id("add-to-cart-button"));',
          'await addToCart.click();',
          '',
          'await driver.quit();'
        ];
      }
    } else if (selectedSite === 'ebay') {
      if (language === 'playwright') {
        return [
          'import { test, expect } from "@playwright/test";',
          '',
          'test.describe("eBay Auction Testing", () => {',
          '  test("eBay auction and watchlist flow", async ({ page }) => {',
          '    // Navigate to eBay',
          '    await page.goto("https://www.ebay.com");',
          '',
          '    // Search for vintage watch',
          '    await page.fill("#gh-ac", "vintage watch");',
          '    await page.click("#gh-btn");',
          '    await page.waitForSelector(".s-item");',
          '',
          '    // Select first auction item',
          '    await page.locator(".s-item:first-child").click();',
          '    await page.waitForSelector(".x-item-title-label");',
          '',
          '    // Add to watchlist',
          '    const watchlistBtn = page.locator("button[aria-label*=\"Watch\"]").first();',
          '    if (await watchlistBtn.isVisible()) {',
          '      await watchlistBtn.click();',
          '      await page.waitForTimeout(2000);',
          '    }',
          '',
          '    // Check bid history',
          '    const bidHistory = page.locator("a[href*=\"bidlog\"]").first();',
          '    if (await bidHistory.isVisible()) {',
          '      await bidHistory.click();',
          '      await page.waitForTimeout(2000);',
          '    }',
          '',
          '    // Verify seller information',
          '    await expect(page.locator(".x-sellernickname")).toBeVisible();',
          '',
          '    console.log("eBay auction test completed!");',
          '  });',
          '});'
        ];
      } else if (language === 'python') {
        return [
          'from selenium import webdriver',
          'from selenium.webdriver.common.by import By',
          'from selenium.webdriver.support.ui import WebDriverWait',
          'from selenium.webdriver.support import expected_conditions as EC',
          '',
          '# eBay Auction Testing',
          'driver = webdriver.Chrome()',
          '',
          '# Navigate to eBay',
          'driver.get("https://www.ebay.com")',
          '',
          '# Search for vintage watch',
          'search_box = driver.find_element(By.ID, "gh-ac")',
          'search_box.send_keys("vintage watch")',
          'search_box.submit()',
          '',
          '# Wait for search results',
          'WebDriverWait(driver, 10).until(',
          '    EC.presence_of_element_located((By.CSS_SELECTOR, ".s-item"))',
          ')',
          '',
          '# Select first auction item',
          'first_item = driver.find_element(By.CSS_SELECTOR, ".s-item:first-child")',
          'first_item.click()',
          '',
          '# Add to watchlist',
          'try:',
          '    watchlist_btn = driver.find_element(By.CSS_SELECTOR, "button[aria-label*=\"Watch\"]")',
          '    watchlist_btn.click()',
          'except:',
          '    print("Watchlist button not found")',
          '',
          'driver.quit()'
        ];
      } else if (language === 'java') {
        return [
          'import org.openqa.selenium.WebDriver;',
          'import org.openqa.selenium.chrome.ChromeDriver;',
          'import org.openqa.selenium.By;',
          'import org.openqa.selenium.WebElement;',
          'import org.openqa.selenium.support.ui.WebDriverWait;',
          'import org.openqa.selenium.support.ui.ExpectedConditions;',
          'import java.time.Duration;',
          '',
          '// eBay Auction Testing',
          'WebDriver driver = new ChromeDriver();',
          'WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));',
          '',
          '// Navigate to eBay',
          'driver.get("https://www.ebay.com");',
          '',
          '// Search for vintage watch',
          'WebElement searchBox = driver.findElement(By.id("gh-ac"));',
          'searchBox.sendKeys("vintage watch");',
          'searchBox.submit();',
          '',
          '// Wait for search results',
          'wait.until(ExpectedConditions.presenceOfElementLocated(',
          '    By.cssSelector(".s-item")',
          '));',
          '',
          '// Select first auction item',
          'WebElement firstItem = driver.findElement(',
          '    By.cssSelector(".s-item:first-child")',
          ');',
          'firstItem.click();',
          '',
          'driver.quit();'
        ];
      } else {
        return [
          'const { Builder, By, until } = require(\'selenium-webdriver\');',
          '',
          '// eBay Auction Testing',
          'let driver = await new Builder().forBrowser(\'chrome\').build();',
          '',
          '// Navigate to eBay',
          'await driver.get("https://www.ebay.com");',
          '',
          '// Search for vintage watch',
          'let searchBox = await driver.findElement(By.id("gh-ac"));',
          'await searchBox.sendKeys("vintage watch");',
          'await searchBox.submit();',
          '',
          '// Wait for search results',
          'await driver.wait(until.elementLocated(',
          '    By.cssSelector(".s-item")',
          '), 10000);',
          '',
          '// Select first auction item',
          'let firstItem = await driver.findElement(',
          '    By.cssSelector(".s-item:first-child")',
          ');',
          'await firstItem.click();',
          '',
          'await driver.quit();'
        ];
      }
    } else if (selectedSite === 'shopify') {
      if (language === 'playwright') {
        return [
          'import { test, expect } from "@playwright/test";',
          '',
          'test.describe("Shopify Store Testing", () => {',
          '  test("Allbirds store shopping flow", async ({ page }) => {',
          '    // Navigate to Allbirds',
          '    await page.goto("https://www.allbirds.com");',
          '',
          '    // Navigate to running shoes',
          '    const shopLink = page.locator("a[href*=\"collection\"]").first();',
          '    if (await shopLink.isVisible()) {',
          '      await shopLink.click();',
          '      await page.waitForTimeout(2000);',
          '    }',
          '',
          '    // Select Tree Dashers',
          '    await page.locator(".product-item:has-text(\"Tree Dasher\")").first().click();',
          '    await page.waitForSelector(".product-title");',
          '',
          '    // Select size',
          '    await page.locator(".variant-input[value=\"10\"]").click();',
          '    await page.waitForTimeout(1000);',
          '',
          '    // Add to cart',
          '    await page.locator("button:has-text(\"Add to Cart\")").click();',
          '    await page.waitForTimeout(3000);',
          '',
          '    // Open cart drawer',
          '    await page.locator(".cart-icon").click();',
          '    await page.waitForSelector(".cart-content");',
          '',
          '    // Test mobile view',
          '    await page.setViewportSize({ width: 375, height: 667 });',
          '    await page.waitForTimeout(1000);',
          '',
          '    console.log("Shopify store test completed!");',
          '  });',
          '});'
        ];
      } else if (language === 'python') {
        return [
          'from selenium import webdriver',
          'from selenium.webdriver.common.by import By',
          'from selenium.webdriver.support.ui import WebDriverWait',
          'from selenium.webdriver.support import expected_conditions as EC',
          '',
          '# Shopify Store Testing',
          'driver = webdriver.Chrome()',
          '',
          '# Navigate to Allbirds',
          'driver.get("https://www.allbirds.com")',
          '',
          '# Navigate to running shoes',
          'try:',
          '    shop_link = driver.find_element(By.CSS_SELECTOR, "a[href*=\"collection\"]")',
          '    shop_link.click()',
          '    WebDriverWait(driver, 5).until(',
          '        EC.presence_of_element_located((By.CSS_SELECTOR, ".product-item"))',
          '    )',
          'except:',
          '    print("Collection link not found")',
          '',
          '# Select Tree Dashers',
          'try:',
          '    tree_dasher = driver.find_element(By.XPATH, "//*[contains(text(), \'Tree Dasher\')]")',
          '    tree_dasher.click()',
          'except:',
          '    print("Tree Dasher not found")',
          '',
          'driver.quit()'
        ];
      } else if (language === 'java') {
        return [
          'import org.openqa.selenium.WebDriver;',
          'import org.openqa.selenium.chrome.ChromeDriver;',
          'import org.openqa.selenium.By;',
          'import org.openqa.selenium.WebElement;',
          'import org.openqa.selenium.support.ui.WebDriverWait;',
          'import org.openqa.selenium.support.ui.ExpectedConditions;',
          'import java.time.Duration;',
          '',
          '// Shopify Store Testing',
          'WebDriver driver = new ChromeDriver();',
          'WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));',
          '',
          '// Navigate to Allbirds',
          'driver.get("https://www.allbirds.com");',
          '',
          '// Navigate to running shoes',
          'try {',
          '    WebElement shopLink = driver.findElement(',
          '        By.cssSelector("a[href*=\"collection\"]")',
          '    );',
          '    shopLink.click();',
          '    wait.until(ExpectedConditions.presenceOfElementLocated(',
          '        By.cssSelector(".product-item")',
          '    ));',
          '} catch (Exception e) {',
          '    System.out.println("Collection link not found: " + e.getMessage());',
          '}',
          '',
          'driver.quit();'
        ];
      } else {
        return [
          'const { Builder, By, until } = require(\'selenium-webdriver\');',
          '',
          '// Shopify Store Testing',
          'let driver = await new Builder().forBrowser(\'chrome\').build();',
          '',
          '// Navigate to Allbirds',
          'await driver.get("https://www.allbirds.com");',
          '',
          '// Navigate to running shoes',
          'try {',
          '    let shopLink = await driver.findElement(',
          '        By.cssSelector("a[href*=\"collection\"]")',
          '    );',
          '    await shopLink.click();',
          '    await driver.wait(until.elementLocated(',
          '        By.cssSelector(".product-item")',
          '    ), 5000);',
          '} catch (error) {',
          '    console.log("Collection link not found:", error.message);',
          '}',
          '',
          'await driver.quit();'
        ];
      }
    } else {
      // General e-commerce code (original)
      if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.support.ui import WebDriverWait',
        'from selenium.webdriver.support import expected_conditions as EC',
        '',
        '# Initialize browser',
        'driver = webdriver.Chrome()',
        '',
        '# Navigate to e-commerce store',
        'driver.get("https://shop.example.com")',
        '',
        '# Search for products',
        'search_box = driver.find_element(By.ID, "search")',
        'search_box.send_keys("laptop")',
        'search_box.submit()',
        '',
        '# Select first product',
        'product = driver.find_element(By.CSS_SELECTOR, ".product-card:first-child")',
        'product_name = product.find_element(By.CLASS_NAME, "product-name").text',
        'product.click()',
        '',
        '# Add to cart',
        'add_to_cart = driver.find_element(By.ID, "add-to-cart")',
        'add_to_cart.click()',
        '',
        '# View shopping cart',
        'cart_icon = driver.find_element(By.CLASS_NAME, "cart-icon")',
        'cart_icon.click()',
        '',
        '# Update quantity',
        'quantity_input = driver.find_element(By.NAME, "quantity")',
        'quantity_input.clear()',
        'quantity_input.send_keys("2")',
        'update_button = driver.find_element(By.ID, "update-cart")',
        'update_button.click()',
        '',
        '# Proceed to checkout',
        'checkout_button = driver.find_element(By.ID, "checkout")',
        'checkout_button.click()',
        '',
        '# Fill payment details',
        'driver.find_element(By.ID, "card-number").send_keys("4111111111111111")',
        'driver.find_element(By.ID, "card-name").send_keys("John Doe")',
        'driver.find_element(By.ID, "expiry").send_keys("12/25")',
        'driver.find_element(By.ID, "cvv").send_keys("123")',
        '',
        '# Complete order',
        'complete_button = driver.find_element(By.ID, "complete-order")',
        'complete_button.click()',
        '',
        '# Verify order confirmation',
        'order_id = driver.find_element(By.CLASS_NAME, "order-id").text',
        'print(f"Order completed: {order_id}")',
        '',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import org.openqa.selenium.By;',
        'import org.openqa.selenium.WebElement;',
        'import org.openqa.selenium.support.ui.WebDriverWait;',
        'import org.openqa.selenium.support.ui.ExpectedConditions;',
        'import java.time.Duration;',
        '',
        'WebDriver driver = new ChromeDriver();',
        'WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));',
        '',
        '// Navigate to e-commerce store',
        'driver.get("https://shop.example.com");',
        '',
        '// Search for products',
        'WebElement searchBox = driver.findElement(By.id("search"));',
        'searchBox.sendKeys("laptop");',
        'searchBox.submit();',
        '',
        '// Select first product',
        'WebElement product = driver.findElement(By.cssSelector(".product-card:first-child"));',
        'String productName = product.findElement(By.className("product-name")).getText();',
        'product.click();',
        '',
        '// Add to cart',
        'WebElement addToCart = driver.findElement(By.id("add-to-cart"));',
        'addToCart.click();',
        '',
        '// View shopping cart',
        'WebElement cartIcon = driver.findElement(By.className("cart-icon"));',
        'cartIcon.click();',
        '',
        '// Update quantity',
        'WebElement quantityInput = driver.findElement(By.name("quantity"));',
        'quantityInput.clear();',
        'quantityInput.sendKeys("2");',
        'WebElement updateButton = driver.findElement(By.id("update-cart"));',
        'updateButton.click();',
        '',
        '// Proceed to checkout',
        'WebElement checkoutButton = driver.findElement(By.id("checkout"));',
        'checkoutButton.click();',
        '',
        '// Fill payment details',
        'driver.findElement(By.id("card-number")).sendKeys("4111111111111111");',
        'driver.findElement(By.id("card-name")).sendKeys("John Doe");',
        'driver.findElement(By.id("expiry")).sendKeys("12/25");',
        'driver.findElement(By.id("cvv")).sendKeys("123");',
        '',
        '// Complete order',
        'WebElement completeButton = driver.findElement(By.id("complete-order"));',
        'completeButton.click();',
        '',
        '// Verify order confirmation',
        'String orderId = driver.findElement(By.className("order-id")).getText();',
        'System.out.println("Order completed: " + orderId);',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder, By, until } = require(\'selenium-webdriver\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Navigate to e-commerce store',
        'await driver.get("https://shop.example.com");',
        '',
        '// Search for products',
        'let searchBox = await driver.findElement(By.id("search"));',
        'await searchBox.sendKeys("laptop");',
        'await searchBox.submit();',
        '',
        '// Select first product',
        'let product = await driver.findElement(By.css(".product-card:first-child"));',
        'let productName = await product.findElement(By.className("product-name")).getText();',
        'await product.click();',
        '',
        '// Add to cart',
        'let addToCart = await driver.findElement(By.id("add-to-cart"));',
        'await addToCart.click();',
        '',
        '// View shopping cart',
        'let cartIcon = await driver.findElement(By.className("cart-icon"));',
        'await cartIcon.click();',
        '',
        '// Update quantity',
        'let quantityInput = await driver.findElement(By.name("quantity"));',
        'await quantityInput.clear();',
        'await quantityInput.sendKeys("2");',
        'let updateButton = await driver.findElement(By.id("update-cart"));',
        'await updateButton.click();',
        '',
        '// Proceed to checkout',
        'let checkoutButton = await driver.findElement(By.id("checkout"));',
        'await checkoutButton.click();',
        '',
        '// Fill payment details',
        'await driver.findElement(By.id("card-number")).sendKeys("4111111111111111");',
        'await driver.findElement(By.id("card-name")).sendKeys("John Doe");',
        'await driver.findElement(By.id("expiry")).sendKeys("12/25");',
        'await driver.findElement(By.id("cvv")).sendKeys("123");',
        '',
        '// Complete order',
        'let completeButton = await driver.findElement(By.id("complete-order"));',
        'await completeButton.click();',
        '',
        '// Verify order confirmation',
        'let orderId = await driver.findElement(By.className("order-id")).getText();',
        'console.log(`Order completed: ${orderId}`);',
        '',
        'await driver.quit();',
      ];
    }
    }
  };

  const ecommerceExample = {
    python: Array.isArray(getEcommerceCode('python')) ? getEcommerceCode('python').join('\n') : '',
    java: Array.isArray(getEcommerceCode('java')) ? getEcommerceCode('java').join('\n') : '',
    javascript: Array.isArray(getEcommerceCode('javascript')) ? getEcommerceCode('javascript').join('\n') : '',
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="E-Commerce Testing"
        description="Master the art of automated shopping experiences with cutting-edge testing strategies"
        icon={ShoppingCart}
      />

      {/* Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            E-Commerce Testing Overview
          </CardTitle>
          <CardDescription>
            Learn how to automate online shopping workflows from product discovery to checkout completion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-600 mb-2">Product Discovery</Badge>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Search & Browse</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Automate product search, category navigation, and item selection processes
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <Badge className="bg-green-600 mb-2">Cart Management</Badge>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Add & Update</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Test adding items to cart, updating quantities, and removing products
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-600 mb-2">Checkout Process</Badge>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Payment & Order</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Automate payment form filling, address validation, and order confirmation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Multi-language implementations of e-commerce testing workflows. Try these examples on real websites like Amazon, eBay, or Shopify stores!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Site Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Select E-commerce Site:</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(['amazon', 'ebay', 'shopify', 'general'] as const).map((site) => (
                  <button
                    key={site}
                    onClick={() => setSelectedSite(site)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      selectedSite === site
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {site.charAt(0).toUpperCase() + site.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Tabs */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Select Testing Framework:</label>
              <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                {(['playwright', 'python', 'java', 'javascript'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      selectedLanguage === lang
                        ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                    }`}
                  >
                    {lang === 'playwright' ? 'Playwright' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Display */}
            <div className="relative">
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(getEcommerceCode(selectedLanguage as any).join('\n'), `${selectedSite} ${selectedLanguage} code`)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
                {selectedLanguage === 'playwright' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`vscode://file/Users/mansa/Desktop/Desktop/coder-pod/tests/ecommerce/${selectedSite}/${selectedSite}-flows.spec.ts`, '_blank')}
                  >
                    <Code className="w-4 h-4 mr-2" />
                    Open Test File
                  </Button>
                )}
              </div>
              <pre className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{getEcommerceCode(selectedLanguage as any).join('\n')}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo with Integrated Features */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Interactive E-commerce Demo
              </CardTitle>
              {/* Speed Control */}
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-slate-500" />
                <div className="flex gap-1">
                  {(['slow', 'medium', 'fast'] as const).map((speedOption) => (
                    <button
                      key={speedOption}
                      onClick={() => setSpeed(speedOption)}
                      disabled={isRunning}
                      className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                        speed === speedOption
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                      }`}
                    >
                      {speedOption.charAt(0).toUpperCase() + speedOption.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Button
              onClick={simulateEcommerceTest}
              disabled={isRunning}
              className="flex items-center gap-2"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Start Demo
                </>
              )}
            </Button>
          </div>
          <CardDescription>
            Complete shopping experience with product browsing and cart management (This is a dummy example for demonstration purposes)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Product Dashboard Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Product Dashboard
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowProductDashboard(!showProductDashboard)}
                >
                  {showProductDashboard ? 'Hide' : 'Show'} Products
                </Button>
              </div>
              {showProductDashboard && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getProducts().map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="text-3xl">{product.image}</div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{product.name}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                              {product.description}
                            </p>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {product.category}
                              </Badge>
                              <div className="flex items-center">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                <span className="text-xs ml-1">{product.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-green-600 dark:text-green-400">
                                ${product.price.toFixed(2)}
                              </span>
                              <Button
                                size="sm"
                                onClick={() => addToCart(product)}
                                className="text-xs"
                              >
                                <Plus className="w-3 h-3 mr-1" />
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Mini Cart Preview */}
            {cartState.items.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Cart Preview ({cartState.items.length} items)
                  </h4>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-700 rounded-lg p-4">
                  <div className="space-y-2">
                    {cartState.items.slice(0, 3).map((item, index) => (
                      <div key={item.id} className="flex items-center gap-3 text-sm">
                        <div className="text-lg">{item.image}</div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-900 dark:text-slate-100">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {item.site} • Qty: {item.quantity}
                          </div>
                        </div>
                        <div className="font-semibold text-green-600 dark:text-green-400">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                    {cartState.items.length > 3 && (
                      <div className="text-xs text-slate-500 dark:text-slate-400 text-center pt-2">
                        ... and {cartState.items.length - 3} more items
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-2 border-t border-green-200 dark:border-green-700">
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Total:</span>
                      <span className="font-bold text-lg text-green-600 dark:text-green-400">
                        ${cartState.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleCart}
                      className="flex-1"
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      View Cart
                    </Button>
                    <Button
                      size="sm"
                      onClick={goToCartPage}
                      className="flex-1"
                    >
                      <Monitor className="w-3 h-3 mr-1" />
                      Cart Page
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Cart Page */}
            {cartState.showCartPage && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    Shopping Cart Page
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={backToShopping}
                  >
                    Back to Shopping
                  </Button>
                </div>
                
                {cartState.items.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="w-16 h-16 mx-auto text-slate-300 dark:text-slate-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                    <p className="text-slate-500 dark:text-slate-400 mb-4">
                      Add some products to get started!
                    </p>
                    <Button onClick={backToShopping}>
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Cart Table */}
                    <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                          <tr>
                            <th className="text-left p-3 text-sm font-medium">Product</th>
                            <th className="text-left p-3 text-sm font-medium">Price</th>
                            <th className="text-center p-3 text-sm font-medium">Quantity</th>
                            <th className="text-right p-3 text-sm font-medium">Total</th>
                            <th className="text-center p-3 text-sm font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartState.items.map((item) => {
                            const isDuplicate = cartState.items.filter(i => i.id === item.id).length > 1;
                            return (
                              <tr key={item.id} className="border-t border-slate-200 dark:border-slate-700">
                                <td className="p-3">
                                  <div className="flex items-center gap-3">
                                    <div className="text-2xl">{item.image}</div>
                                    <div>
                                      <h4 className="font-medium text-sm">{item.name}</h4>
                                      <p className="text-xs text-slate-500 dark:text-slate-400">
                                        {item.site} • {item.category}
                                      </p>
                                      {isDuplicate && (
                                        <Badge variant="secondary" className="text-xs mt-1">
                                          Duplicate Item
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <span className="font-medium">${item.price.toFixed(2)}</span>
                                </td>
                                <td className="p-3">
                                  <div className="flex items-center justify-center gap-2">
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      disabled={item.quantity <= 1}
                                    >
                                      <Minus className="w-3 h-3" />
                                    </Button>
                                    <span className="text-sm font-medium w-8 text-center">
                                      {item.quantity}
                                    </span>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                      <Plus className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </td>
                                <td className="p-3 text-right">
                                  <span className="font-semibold text-green-600 dark:text-green-400">
                                    ${(item.price * item.quantity).toFixed(2)}
                                  </span>
                                </td>
                                <td className="p-3">
                                  <div className="flex items-center justify-center gap-2">
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => setSelectedProduct(item)}
                                    >
                                      <Eye className="w-3 h-3" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      onClick={() => removeFromCart(item.id)}
                                    >
                                      <Trash2 className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Cart Summary */}
                    <div className="flex justify-end">
                      <div className="w-full max-w-sm space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Subtotal:</span>
                          <span>${cartState.total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Shipping:</span>
                          <span>Free</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Tax:</span>
                          <span>${(cartState.total * 0.08).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                          <span>Total:</span>
                          <span className="text-green-600 dark:text-green-400">
                            ${(cartState.total * 1.08).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Checkout Actions */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={backToShopping}
                        className="flex items-center gap-2"
                      >
                        <Search className="w-4 h-4" />
                        Continue Shopping
                      </Button>
                      <Button
                        className="flex items-center gap-2"
                        disabled={cartState.items.length === 0}
                      >
                        <CreditCard className="w-4 h-4" />
                        Proceed to Checkout
                      </Button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Demo Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Speed controls moved to header */}
              </div>

              {/* Integrated Cart Status */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Cart Status</div>
                  <div className="font-semibold text-green-600 dark:text-green-400">
                    ${cartState.total.toFixed(2)}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleCart}
                  className="relative flex items-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>{cartState.items.length}</span>
                  {cartState.items.length > 0 && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  )}
                </Button>
              </div>
            </div>

            {/* Progress Bar */}
            {isRunning && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Progress</span>
                  <span className="text-slate-900 dark:text-slate-100 font-medium">
                    Step {currentStep + 1} of 20
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / 20) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Execution Logs */}
            {executionLogs.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Execution Logs</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 rounded-lg text-sm font-mono max-h-48 overflow-y-auto">
                  {executionLogs.map((log, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-slate-500">[{String(index + 1).padStart(2, '0')}]</span>
                      <span className={index === executionLogs.length - 1 ? 'text-green-400' : 'text-slate-300'}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      </div>
  );
}

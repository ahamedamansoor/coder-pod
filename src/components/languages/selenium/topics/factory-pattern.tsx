'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Factory,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Settings,
  Zap,
  Shield,
  Package,
  Database,
  Server,
  Cpu,
  Layers,
  GitBranch,
  Activity,
  Eye,
  ArrowRight,
  ArrowDown,
  Users,
  FileText,
  Folder,
  HardDrive,
  Cloud,
  Car,
  Truck,
  Wrench,
  Hammer,
  Cog,
  Chrome,
  Monitor,
  Globe,
  Terminal
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function FactoryPatternComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'java' | 'javascript'>('java');
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<string>('chrome');
  const [createdProducts, setCreatedProducts] = useState<string[]>([]);
  const [showFactoryAnimation, setShowFactoryAnimation] = useState(false);

  const getFactoryCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'java') {
      return [
        '// Product Interface',
        'public interface WebDriver {',
        '    void open(String url);',
        '    void quit();',
        '}',
        '',
        '// Concrete Products',
        'public class ChromeDriver implements WebDriver {',
        '    public void open(String url) {',
        '        System.out.println("Chrome opening: " + url);',
        '    }',
        '    public void quit() {',
        '        System.out.println("Chrome closed");',
        '    }',
        '}',
        '',
        'public class FirefoxDriver implements WebDriver {',
        '    public void open(String url) {',
        '        System.out.println("Firefox opening: " + url);',
        '    }',
        '    public void quit() {',
        '        System.out.println("Firefox closed");',
        '    }',
        '}',
        '',
        '// Factory Class',
        'public class WebDriverFactory {',
        '    public static WebDriver createDriver(String browserType) {',
        '        switch (browserType.toLowerCase()) {',
        '            case "chrome":',
        '                return new ChromeDriver();',
        '            case "firefox":',
        '                return new FirefoxDriver();',
        '            default:',
        '                throw new IllegalArgumentException("Unknown browser: " + browserType);',
        '        }',
        '    }',
        '}',
        '',
        '// Client Code',
        'WebDriver driver = WebDriverFactory.createDriver("chrome");',
        'driver.open("https://example.com");',
        'driver.quit();'
      ];
    } else if (language === 'python') {
      return [
        'from abc import ABC, abstractmethod',
        '',
        '# Abstract Product',
        'class WebDriver(ABC):',
        '    @abstractmethod',
        '    def open(self, url): pass',
        '    ',
        '    @abstractmethod',
        '    def quit(self): pass',
        '',
        '# Concrete Products',
        'class ChromeDriver(WebDriver):',
        '    def open(self, url):',
        '        print(f"Chrome opening: {url}")',
        '    ',
        '    def quit(self):',
        '        print("Chrome closed")',
        '',
        'class FirefoxDriver(WebDriver):',
        '    def open(self, url):',
        '        print(f"Firefox opening: {url}")',
        '    ',
        '    def quit(self):',
        '        print("Firefox closed")',
        '',
        '# Factory Class',
        'class WebDriverFactory:',
        '    @staticmethod',
        '    def create_driver(browser_type):',
        '        if browser_type.lower() == "chrome":',
        '            return ChromeDriver()',
        '        elif browser_type.lower() == "firefox":',
        '            return FirefoxDriver()',
        '        else:',
        '            raise ValueError(f"Unknown browser: {browser_type}")',
        '',
        '# Client Code',
        'driver = WebDriverFactory.create_driver("chrome")',
        'driver.open("https://example.com")',
        'driver.quit()'
      ];
    } else {
      return [
        '// Abstract Product',
        'class WebDriver {',
        '    open(url) {',
        '        throw new Error("Must implement open method");',
        '    }',
        '    quit() {',
        '        throw new Error("Must implement quit method");',
        '    }',
        '}',
        '',
        '// Concrete Products',
        'class ChromeDriver extends WebDriver {',
        '    open(url) {',
        '        console.log(`Chrome opening: ${url}`);',
        '    }',
        '    quit() {',
        '        console.log("Chrome closed");',
        '    }',
        '}',
        '',
        'class FirefoxDriver extends WebDriver {',
        '    open(url) {',
        '        console.log(`Firefox opening: ${url}`);',
        '    }',
        '    quit() {',
        '        console.log("Firefox closed");',
        '    }',
        '}',
        '',
        '// Factory Class',
        'class WebDriverFactory {',
        '    static createDriver(browserType) {',
        '        switch (browserType.toLowerCase()) {',
        '            case "chrome":',
        '                return new ChromeDriver();',
        '            case "firefox":',
        '                return new FirefoxDriver();',
        '            default:',
        '                throw new Error(`Unknown browser: ${browserType}`);',
        '        }',
        '    }',
        '}',
        '',
        '// Client Code',
        'const driver = WebDriverFactory.createDriver("chrome");',
        'driver.open("https://example.com");',
        'driver.quit();'
      ];
    }
  };

  const simulateFactoryDemo = async () => {
    setIsDemoRunning(true);
    setCurrentStep(0);
    setCreatedProducts([]);
    setShowFactoryAnimation(true);
    
    const products = [
      { name: 'ChromeDriver', type: 'chrome', icon: Chrome, color: 'green' },
      { name: 'FirefoxDriver', type: 'firefox', icon: Monitor, color: 'orange' },
      { name: 'SafariDriver', type: 'safari', icon: Globe, color: 'blue' },
    ];

    for (let i = 0; i < products.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setCurrentStep(i + 1);
      setCreatedProducts(prev => [...prev, products[i].name]);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setShowFactoryAnimation(false);
    setIsDemoRunning(false);
  };

  const createSingleProduct = async (productType: string) => {
    setShowFactoryAnimation(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setCreatedProducts(prev => [...prev, `${productType}Driver`]);
    setShowFactoryAnimation(false);
  };

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'factory-pattern',
    title: 'Factory Pattern',
    explanation: 'Implementing Factory pattern for browser creation',
    category: '26. Advanced Design Patterns'
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
        title="Factory Design Pattern"
        description="Master the Factory pattern for creating objects without specifying their exact classes - perfect for WebDriver management and cross-browser testing"
        icon={Factory}
        colorTheme="blue"
        badges={[
          { label: 'Design Pattern', variant: 'secondary' },
          { label: 'Creational Pattern', variant: 'secondary' },
          { label: 'Object Creation', variant: 'secondary' }
        ]}
      />

      {/* Factory Architecture Diagram */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-700 dark:text-blue-300">
            <Factory className="w-6 h-6" />
            Factory Pattern Architecture
          </CardTitle>
          <CardDescription>
            Visual diagram showing how Factory pattern creates different products without exposing creation logic
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <div className="space-y-8">
              {/* Client */}
              <div className="flex justify-center">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-blue-300 dark:border-blue-600 shadow-lg w-48">
                  <div className="text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-sm font-semibold">Client Code</div>
                    <div className="text-xs text-muted-foreground">Requests Products</div>
                  </div>
                </div>
              </div>

              {/* Arrow to Factory */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <ArrowDown className="w-6 h-6 text-blue-600" />
                  <div className="text-sm font-semibold text-blue-700">createDriver("chrome")</div>
                  <ArrowDown className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Factory */}
              <div className="flex justify-center">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-blue-600 shadow-xl w-80">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
                      <Factory className="w-5 h-5" />
                      WebDriverFactory
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 justify-center">
                      <Package className="w-4 h-4 text-blue-500" />
                      <span className="font-mono text-blue-600 dark:text-blue-400">createDriver(browserType)</span>
                    </div>
                    <div className="text-xs text-center text-muted-foreground">
                      Switch statement to create appropriate driver
                    </div>
                  </div>

                  {showFactoryAnimation && (
                    <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-300 dark:border-blue-700">
                      <div className="text-xs text-blue-800 dark:text-blue-200 text-center animate-pulse">
                        🏭 Factory is working...
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Arrows to Products */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <ArrowDown className="w-6 h-6 text-blue-600" />
                  <div className="text-sm font-semibold text-blue-700">Returns Specific Driver</div>
                  <ArrowDown className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Products */}
              <div className="flex justify-center gap-6 flex-wrap">
                {[
                  { name: 'ChromeDriver', icon: Chrome, color: 'green' },
                  { name: 'FirefoxDriver', icon: Monitor, color: 'orange' },
                  { name: 'SafariDriver', icon: Globe, color: 'blue' },
                ].map((product, index) => (
                  <div key={index} className="relative">
                    <div className={`bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-${product.color}-300 dark:border-${product.color}-600 shadow-lg w-32`}>
                      <div className="text-center">
                        <product.icon className={`w-8 h-8 mx-auto mb-2 text-${product.color}-600`} />
                        <div className="text-sm font-semibold">{product.name}</div>
                        <div className="text-xs text-muted-foreground">Product</div>
                      </div>
                    </div>
                    {createdProducts.includes(product.name) && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Factory Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <Play className="w-6 h-6" />
            Interactive Factory Demo
          </CardTitle>
          <CardDescription>
            Create different WebDriver instances using the Factory pattern
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Product Selection */}
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4 flex items-center gap-2">
                <Factory className="w-5 h-5" />
                Select Product Type
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { type: 'chrome', name: 'Chrome', icon: Chrome, color: 'green' },
                  { type: 'firefox', name: 'Firefox', icon: Monitor, color: 'orange' },
                  { type: 'safari', name: 'Safari', icon: Globe, color: 'blue' },
                  { type: 'edge', name: 'Edge', icon: Terminal, color: 'purple' },
                ].map((browser) => (
                  <button
                    key={browser.type}
                    onClick={() => createSingleProduct(browser.type)}
                    disabled={isDemoRunning}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedProduct === browser.type
                        ? `border-${browser.color}-500 bg-${browser.color}-50 dark:bg-${browser.color}-900/30`
                        : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
                    }`}
                  >
                    <browser.icon className={`w-8 h-8 mx-auto mb-2 text-${browser.color}-600`} />
                    <div className="text-sm font-semibold">{browser.name}</div>
                    <div className="text-xs text-muted-foreground">Driver</div>
                  </button>
                ))}
              </div>

              {/* Created Products */}
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300">Created Products:</h5>
                {createdProducts.length > 0 ? (
                  <div className="space-y-2">
                    {createdProducts.map((product, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border border-blue-200 dark:border-blue-700">
                        <Package className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-mono">{product}</span>
                        <Badge variant="outline" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                          Created
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-muted-foreground">
                    <Factory className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No products created yet</p>
                  </div>
                )}
              </div>
            </div>

            {/* Demo Controls */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={simulateFactoryDemo}
                disabled={isDemoRunning}
                className="gap-2 bg-blue-600 hover:bg-blue-700"
              >
                {isDemoRunning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Running Demo...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Run Full Demo
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setCreatedProducts([]);
                  setCurrentStep(0);
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step-by-Step Process */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <Activity className="w-6 h-6" />
            How Factory Pattern Works: Step-by-Step
          </CardTitle>
          <CardDescription>
            Detailed visualization of the Factory pattern creation process
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300 dark:bg-blue-700"></div>
              {[
                { step: 1, title: 'Client Request', desc: 'Client calls factory method with product type', icon: Users },
                { step: 2, title: 'Factory Decision', desc: 'Factory decides which product to create based on input', icon: Cog },
                { step: 3, title: 'Product Creation', desc: 'Factory creates the appropriate concrete product', icon: Package },
                { step: 4, title: 'Return Product', desc: 'Factory returns the product as interface type', icon: ArrowRight },
                { step: 5, title: 'Client Usage', desc: 'Client uses the product without knowing concrete class', icon: Play },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold z-10 ${
                    currentStep >= index ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className={`w-5 h-5 ${currentStep >= index ? 'text-blue-600' : 'text-gray-400'}`} />
                      <h3 className={`font-semibold ${currentStep >= index ? 'text-blue-700 dark:text-blue-300' : 'text-gray-500'}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className={`text-sm ${currentStep >= index ? 'text-slate-700 dark:text-slate-300' : 'text-gray-400'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Structure Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <Folder className="w-6 h-6" />
            Project File Structure
          </CardTitle>
          <CardDescription>
            How Factory pattern is organized across multiple files
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600">
            <div className="space-y-4">
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Folder className="w-4 h-4 text-yellow-600" />
                  <span className="font-semibold">src/main/java/com/example/factory/</span>
                </div>
                
                <div className="ml-6 space-y-2">
                  {/* Interface */}
                  <div className="flex items-center gap-2 p-2 bg-purple-100 dark:bg-purple-900/30 rounded border border-purple-300 dark:border-purple-700">
                    <FileText className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700 dark:text-purple-300 font-semibold">WebDriver.java</span>
                    <Badge variant="outline" className="text-xs bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 border-purple-400 dark:border-purple-600">
                      Interface
                    </Badge>
                  </div>
                  
                  {/* Concrete Products */}
                  <div className="flex items-center gap-2 p-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-700">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 dark:text-green-300 font-semibold">ChromeDriver.java</span>
                    <Badge variant="outline" className="text-xs bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 border-green-400 dark:border-green-600">
                      Product
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-orange-100 dark:bg-orange-900/30 rounded border border-orange-300 dark:border-orange-700">
                    <FileText className="w-4 h-4 text-orange-600" />
                    <span className="text-orange-700 dark:text-orange-300 font-semibold">FirefoxDriver.java</span>
                    <Badge variant="outline" className="text-xs bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 border-orange-400 dark:border-orange-600">
                      Product
                    </Badge>
                  </div>
                  
                  {/* Factory */}
                  <div className="flex items-center gap-2 p-2 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-300 dark:border-blue-700">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 dark:text-blue-300 font-semibold">WebDriverFactory.java</span>
                    <Badge variant="outline" className="text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 border-blue-400 dark:border-blue-600">
                      Factory
                    </Badge>
                  </div>
                  
                  {/* Client */}
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-600">
                    <FileText className="w-4 h-4 text-slate-600" />
                    <span className="text-slate-700 dark:text-slate-300">TestRunner.java</span>
                    <Badge variant="outline" className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-400 dark:border-slate-600">
                      Client
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Code Connections */}
              <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-600">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">How Files Connect:</h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="p-2 bg-purple-50 dark:bg-purple-950/20 rounded">
                    <span className="text-purple-700 dark:text-purple-300">// WebDriver.java (Interface)</span>
                  </div>
                  <div className="p-2 bg-blue-50 dark:bg-blue-950/20 rounded">
                    <span className="text-blue-700 dark:text-blue-300">// WebDriverFactory.java (Factory)</span>
                    <div className="text-xs text-blue-600 dark:text-blue-400">public static WebDriver createDriver(String type)</div>
                  </div>
                  <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded">
                    <span className="text-green-700 dark:text-green-300">// ChromeDriver.java (Product)</span>
                    <div className="text-xs text-green-600 dark:text-green-400">public class ChromeDriver implements WebDriver</div>
                  </div>
                  <div className="p-2 bg-slate-50 dark:bg-slate-950/20 rounded">
                    <span className="text-slate-700 dark:text-slate-300">// TestRunner.java (Client)</span>
                    <div className="text-xs text-slate-600 dark:text-slate-400">WebDriver driver = WebDriverFactory.createDriver("chrome");</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Characteristics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <Shield className="w-6 h-6" />
            Key Characteristics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-blue-700 dark:text-blue-300">Encapsulates Creation</h3>
              <p className="text-sm text-muted-foreground">
                Hides object creation logic from client code
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-blue-700 dark:text-blue-300">Creates Products</h3>
              <p className="text-sm text-muted-foreground">
                Creates objects without specifying exact classes
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-blue-700 dark:text-blue-300">Flexible & Extensible</h3>
              <p className="text-sm text-muted-foreground">
                Easy to add new product types without changing client code
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <Code className="w-6 h-6" />
            Implementation Examples
          </CardTitle>
          <CardDescription>
            Factory pattern implementation in different programming languages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6 border-b">
            {(['java', 'python', 'javascript'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-6 py-3 font-medium capitalize transition-all rounded-t-lg ${
                  selectedLanguage === lang
                    ? 'bg-blue-600 text-white border-b-2 border-blue-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {lang === 'java' && '☕ Java'}
                {lang === 'python' && '🐍 Python'}
                {lang === 'javascript' && '🟨 JavaScript'}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {selectedLanguage === 'java' && 'Java Factory Implementation'}
                  {selectedLanguage === 'python' && 'Python Factory Implementation'}
                  {selectedLanguage === 'javascript' && 'JavaScript Factory Implementation'}
                </span>
              </div>
              <Badge variant="outline" className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                WebDriver Factory
              </Badge>
            </div>
            
            <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-300">
                  {getFactoryCode(selectedLanguage).join('\n')}
                </code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selenium WebDriver Factory */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <Monitor className="w-6 h-6" />
            Selenium WebDriver Factory
          </CardTitle>
          <CardDescription>
            Practical implementation of Factory pattern for WebDriver management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Zap className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Use Factory for WebDriver?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Factory pattern simplifies WebDriver creation, enables cross-browser testing, and makes it easy to switch between different browsers without changing test code.
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Benefits:</h4>
              <div className="space-y-2">
                {[
                  'Cross-browser testing support',
                  'Centralized driver configuration',
                  'Easy browser switching',
                  'Reduced code duplication',
                  'Better maintainability'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Use Cases:</h4>
              <div className="space-y-2">
                {[
                  'Cross-browser test suites',
                  'Configuration-based browser selection',
                  'Cloud testing platforms',
                  'Parallel test execution',
                  'Environment-specific drivers'
                ].map((useCase, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {selectedLanguage === 'java' && (
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-600">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                Advanced WebDriver Factory (Java)
              </h4>
              <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-slate-800 dark:text-slate-300">
{`public class WebDriverFactory {
    private static final Map<String, WebDriver> drivers = new HashMap<>();
    
    public static WebDriver getDriver(String browser) {
        if (drivers.get(browser) == null) {
            switch (browser.toLowerCase()) {
                case "chrome":
                    ChromeOptions options = new ChromeOptions();
                    options.addArguments("--headless");
                    drivers.put(browser, new ChromeDriver(options));
                    break;
                case "firefox":
                    drivers.put(browser, new FirefoxDriver());
                    break;
                default:
                    throw new IllegalArgumentException("Browser not supported: " + browser);
            }
        }
        return drivers.get(browser);
    }
    
    public static void quitAllDrivers() {
        drivers.values().forEach(WebDriver::quit);
        drivers.clear();
    }
}`}
                  </code>
                </pre>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <CheckCircle className="w-6 h-6" />
            Best Practices & Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                When to Use
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Creating objects with complex logic</li>
                <li>• Cross-platform object creation</li>
                <li>• Configuration-based instantiation</li>
                <li>• When client shouldn't know concrete classes</li>
                <li>• For testability and mocking</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                When to Avoid
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Simple object creation</li>
                <li>• When only one product type</li>
                <li>• For primitive types</li>
                <li>• When creation logic is trivial</li>
                <li>• If it adds unnecessary complexity</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Implementation Tips
              </h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Use interfaces for products</li>
                <li>• Handle invalid input gracefully</li>
                <li>• Consider using Abstract Factory</li>
                <li>• Keep factory methods static</li>
                <li>• Document supported types</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <TopicNavigation currentTopic={currentTopic} language={language} />
    </div>
  );
}

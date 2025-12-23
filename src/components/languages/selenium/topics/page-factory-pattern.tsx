'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';
import {
  Factory,
  Layers,
  Code,
  Copy,
  CheckCircle,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  GitBranch,
  Box,
  Building,
  Grid3x3,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Settings,
  Zap,
  Target,
  Rocket,
  AlertTriangle,
  Shield,
  FolderOpen,
  Users,
  Monitor,
  Database,
  Wrench,
  Puzzle,
  Package,
  TreePine,
  Workflow,
  MousePointer,
  AlertCircle
} from 'lucide-react';

export function PageFactoryComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'java' | 'javascript'>('python');
  const [selectedPattern, setSelectedPattern] = useState<'traditional' | 'factory'>('factory');
  const [selectedDiagram, setSelectedDiagram] = useState<'architecture' | 'flow' | 'comparison'>('architecture');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightedElement, setHighlightedElement] = useState<string>('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const getFactoryCode = () => {
    if (selectedLanguage === 'python') {
      return [
        '# Page Factory Implementation',
        'from selenium.webdriver.support.ui import WebDriverWait',
        'from selenium.webdriver.support import expected_conditions as EC',
        'from selenium.webdriver.common.by import By',
        'import functools',
        '',
        'class FindBy:',
        '    def __init__(self, how, using):',
        '        self.how = how',
        '        self.using = using',
        '        ',
        '    def __call__(self, cls):',
        '        if not hasattr(cls, "_elements"):',
        '            cls._elements = {}',
        '        cls._elements[self.using] = (self.how, self.using)',
        '        return cls',
        '',
        'class ElementProxy:',
        '    def __init__(self, driver, locator):',
        '        self.driver = driver',
        '        self.locator = locator',
        '        self._element = None',
        '        ',
        '    def __getattr__(self, name):',
        '        if self._element is None:',
        '            wait = WebDriverWait(self.driver, 10)',
        '            self._element = wait.until(',
        '                EC.presence_of_element_located(self.locator))',
        '        return getattr(self._element, name)',
        '',
        'class PageFactory:',
        '    def __init__(self, driver):',
        '        self.driver = driver',
        '        self._pages = {}',
        '        ',
        '    def init_elements(self, page_object):',
        '        if hasattr(page_object, "_elements"):',
        '            for name, locator in page_object._elements.items():',
        '                proxy = ElementProxy(self.driver, locator)',
        '                setattr(page_object, name, proxy)',
        '        return page_object',
        '        ',
        '    def get_page(self, page_class):',
        '        if page_class not in self._pages:',
        '            page_obj = page_class(self.driver)',
        '            self._pages[page_class] = self.init_elements(page_obj)',
        '        return self._pages[page_class]',
        '',
        '# Usage Example',
        '@FindBy(By.ID, "username")',
        '@FindBy(By.ID, "password")',
        '@FindBy(By.ID, "login-btn")',
        'class LoginPage:',
        '    def __init__(self, driver):',
        '        self.driver = driver',
        '        ',
        '    def login(self, username, password):',
        '        self.username.send_keys(username)',
        '        self.password.send_keys(password)',
        '        self.login_btn.click()',
        '        return DashboardPage(self.driver)',
        '',
        '# Test with Page Factory',
        'def test_login():',
        '    driver = webdriver.Chrome()',
        '    factory = PageFactory(driver)',
        '    ',
        '    login_page = factory.get_page(LoginPage)',
        '    dashboard = login_page.login("user", "pass")',
        '    ',
        '    assert "Welcome" in dashboard.get_welcome_message()'
      ];
    } else if (selectedLanguage === 'java') {
      return [
        '// Page Factory Implementation',
        'import org.openqa.selenium.*;',
        'import org.openqa.selenium.support.*;',
        'import org.openqa.selenium.support.pagefactory.*;',
        'import java.lang.reflect.Field;',
        'import java.util.List;',
        '',
        'public class PageFactory {',
        '    private WebDriver driver;',
        '    private Map<Class<?>, Object> pageCache;',
        '    ',
        '    public PageFactory(WebDriver driver) {',
        '        this.driver = driver;',
        '        this.pageCache = new HashMap<>();',
        '    }',
        '    ',
        '    public <T> T getPage(Class<T> pageClass) {',
        '        if (!pageCache.containsKey(pageClass)) {',
        '            T page = instantiatePage(pageClass);',
        '            initElements(page);',
        '            pageCache.put(pageClass, page);',
        '        }',
        '        return pageClass.cast(pageCache.get(pageClass));',
        '    }',
        '    ',
        '    private <T> T instantiatePage(Class<T> pageClass) {',
        '        try {',
        '            return pageClass.getDeclaredConstructor(WebDriver.class)',
        '                     .newInstance(driver);',
        '        } catch (Exception e) {',
        '            throw new RuntimeException("Failed to create page: " + pageClass, e);',
        '        }',
        '    }',
        '    ',
        '    private void initElements(Object page) {',
        '        Field[] fields = page.getClass().getDeclaredFields();',
        '        for (Field field : fields) {',
        '            if (field.isAnnotationPresent(FindBy.class)) {',
        '                FindBy annotation = field.getAnnotation(FindBy.class);',
        '                By locator = createLocator(annotation);',
        '                WebElement element = driver.findElement(locator);',
        '                field.setAccessible(true);',
        '                field.set(page, element);',
        '            }',
        '        }',
        '    }',
        '    ',
        '    private By createLocator(FindBy annotation) {',
        '        if (!annotation.id().isEmpty())',
        '            return By.id(annotation.id());',
        '        if (!annotation.name().isEmpty())',
        '            return By.name(annotation.name());',
        '        if (!annotation.className().isEmpty())',
        '            return By.className(annotation.className());',
        '        if (!annotation.css().isEmpty())',
        '            return By.cssSelector(annotation.css());',
        '        if (!annotation.xpath().isEmpty())',
        '            return By.xpath(annotation.xpath());',
        '        throw new IllegalArgumentException("No locator specified");',
        '    }',
        '}',
        '',
        '// Page Class with Annotations',
        'public class LoginPage {',
        '    @FindBy(id = "username")',
        '    private WebElement usernameField;',
        '    ',
        '    @FindBy(id = "password")',
        '    private WebElement passwordField;',
        '    ',
        '    @FindBy(id = "login-btn")',
        '    private WebElement loginButton;',
        '    ',
        '    public LoginPage(WebDriver driver) {',
        '        this.driver = driver;',
        '    }',
        '    ',
        '    public DashboardPage login(String username, String password) {',
        '        usernameField.sendKeys(username);',
        '        passwordField.sendKeys(password);',
        '        loginButton.click();',
        '        return new DashboardPage(driver);',
        '    }',
        '}'
      ];
    } else {
      return [
        '// Page Factory Implementation',
        'import { WebDriver, By, until } from \'selenium-webdriver\';',
        'import { reflect } from \'reflect-metadata\';',
        '',
        '// Decorator for element location',
        'function FindBy(locator: { how?: string, using?: string }) {',
        '  return function (target: any, propertyKey: string) {',
        '    Reflect.defineMetadata(`locator_${propertyKey}`, locator, target);',
        '  };',
        '}',
        '',
        'class ElementProxy {',
        '  constructor(private driver: WebDriver, private locator: any) {}',
        '  ',
        '  private element: WebElement | null = null;',
        '  ',
        '  private async getElement(): Promise<WebElement> {',
        '    if (!this.element) {',
        '      this.element = await this.driver.wait(',
        '        until.elementLocated(this.locator),',
        '        10000',
        '      );',
        '    }',
        '    return this.element;',
        '  }',
        '  ',
        '  async sendKeys(text: string) {',
        '    const element = await this.getElement();',
        '    await element.sendKeys(text);',
        '  }',
        '  ',
        '  async click() {',
        '    const element = await this.getElement();',
        '    await element.click();',
        '  }',
        '}',
        '',
        'class PageFactory {',
        '  private pageCache = new Map();',
        '  ',
        '  constructor(private driver: WebDriver) {}',
        '  ',
        '  async getPage<T>(pageClass: new (driver: WebDriver) => T): Promise<T> {',
        '    if (!this.pageCache.has(pageClass)) {',
        '      const page = new pageClass(this.driver);',
        '      await this.initElements(page);',
        '      this.pageCache.set(pageClass, page);',
        '    }',
        '    return this.pageCache.get(pageClass);',
        '  }',
        '  ',
        '  private async initElements(page: any) {',
        '    const prototype = Object.getPrototypeOf(page);',
        '    const propertyNames = Object.getOwnPropertyNames(prototype);',
        '    ',
        '    for (const propertyName of propertyNames) {',
        '      const locator = Reflect.getMetadata(`locator_${propertyName}`, page);',
        '      if (locator) {',
        '        const proxy = new ElementProxy(this.driver, locator);',
        '        page[propertyName] = proxy;',
        '      }',
        '    }',
        '  }',
        '}',
        '',
        '// Page Class with Decorators',
        'class LoginPage {',
        '  @FindBy({ how: \'id\', using: \'username\' })',
        '  usernameField: ElementProxy;',
        '  ',
        '  @FindBy({ how: \'id\', using: \'password\' })',
        '  passwordField: ElementProxy;',
        '  ',
        '  @FindBy({ how: \'id\', using: \'login-btn\' })',
        '  loginButton: ElementProxy;',
        '  ',
        '  constructor(private driver: WebDriver) {}',
        '  ',
        '  async login(username: string, password: string) {',
        '    await this.usernameField.sendKeys(username);',
        '    await this.passwordField.sendKeys(password);',
        '    await this.loginButton.click();',
        '    return new DashboardPage(this.driver);',
        '  }',
        '}'
      ];
    }
  };

  const startFactoryAnimation = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    
    const phases = [
      { element: 'PageFactory', delay: 1000 },
      { element: 'LoginPage', delay: 2000 },
      { element: 'ElementProxy', delay: 2000 },
      { element: 'Test', delay: 1500 }
    ];

    phases.forEach(({ element, delay }) => {
      setTimeout(() => {
        setHighlightedElement(element);
      }, delay);
    });

    setTimeout(() => {
      setIsAnimating(false);
      setHighlightedElement('');
    }, 6500);
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Factory}
        category="Selenium · Design Patterns"
        title="Page Factory Pattern"
        description="Master the Page Factory design pattern for automated element initialization and enhanced test maintainability."
        colorTheme="indigo"
      />

      {/* What is Page Factory Section */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Factory className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            What is Page Factory Pattern?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Definition
                </h3>
                <p className="text-sm text-indigo-800 dark:text-indigo-200 leading-relaxed">
                  <strong>Page Factory</strong> is an enhanced design pattern that automates 
                  element initialization using annotations or decorators. It eliminates manual 
                  element finding and provides lazy loading with built-in wait strategies.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Key Innovation
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  Page Factory revolutionizes test automation by:
                </p>
                <ul className="text-sm text-blue-800 dark:text-blue-200 mt-2 space-y-1">
                  <li>• Automatic element initialization</li>
                  <li>• Annotation-based element location</li>
                  <li>• Lazy loading with proxy elements</li>
                  <li>• Built-in wait strategies</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Advantages over POM
                </h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span><strong>Less Code:</strong> No manual element finding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span><strong>Better Performance:</strong> Lazy element loading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span><strong>Cleaner Tests:</strong> Focus on business logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span><strong>Automatic Waits:</strong> Built-in synchronization</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  When to Use Page Factory?
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
                  Page Factory is ideal when you need:
                </p>
                <ul className="text-sm text-orange-800 dark:text-orange-200 mt-2 space-y-1">
                  <li>• Large test suites with many pages</li>
                  <li>• Dynamic web applications with AJAX</li>
                  <li>• Team development with shared components</li>
                  <li>• Performance-critical test automation</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pattern Comparison */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Pattern Comparison: Traditional POM vs Page Factory
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Visual comparison of implementation approaches
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button
              variant={selectedPattern === 'traditional' ? 'default' : 'outline'}
              onClick={() => setSelectedPattern('traditional')}
              className="flex items-center gap-2"
            >
              <Layers className="w-4 h-4" />
              Traditional POM
            </Button>
            <Button
              variant={selectedPattern === 'factory' ? 'default' : 'outline'}
              onClick={() => setSelectedPattern('factory')}
              className="flex items-center gap-2"
            >
              <Factory className="w-4 h-4" />
              Page Factory
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional POM */}
            <div className={`p-6 rounded-lg border-2 transition-all ${
              selectedPattern === 'traditional' 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30' 
                : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/30'
            }`}>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Traditional POM
              </h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-gray-800 rounded border">
                  <h5 className="font-semibold text-sm mb-2">Element Definition:</h5>
                  <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded">
{`USERNAME_INPUT = (By.ID, "username")
PASSWORD_INPUT = (By.ID, "password")
LOGIN_BUTTON = (By.ID, "login-btn")`}
                  </pre>
                </div>

                <div className="p-3 bg-white dark:bg-gray-800 rounded border">
                  <h5 className="font-semibold text-sm mb-2">Element Access:</h5>
                  <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded">
{`element = self.wait.until(
    EC.presence_of_element_located(
        self.USERNAME_INPUT
    )
)
element.send_keys(username)`}
                  </pre>
                </div>

                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-300 dark:border-yellow-700">
                  <h5 className="font-semibold text-sm mb-2 text-yellow-800 dark:text-yellow-200">
                    <AlertTriangle className="w-4 h-4 inline mr-1" />
                    Manual Work Required
                  </h5>
                  <ul className="text-xs text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Manual element finding</li>
                    <li>• Explicit wait statements</li>
                    <li>• Repeated locator definitions</li>
                    <li>• More boilerplate code</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Page Factory */}
            <div className={`p-6 rounded-lg border-2 transition-all ${
              selectedPattern === 'factory' 
                ? 'border-green-500 bg-green-50 dark:bg-green-950/30' 
                : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/30'
            }`}>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Factory className="w-5 h-5" />
                Page Factory
              </h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-gray-800 rounded border">
                  <h5 className="font-semibold text-sm mb-2">Element Definition:</h5>
                  <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded">
{`@FindBy(By.ID, "username")
private WebElement usernameField;

@FindBy(By.ID, "password") 
private WebElement passwordField;

@FindBy(By.ID, "login-btn")
private WebElement loginButton;`}
                  </pre>
                </div>

                <div className="p-3 bg-white dark:bg-gray-800 rounded border">
                  <h5 className="font-semibold text-sm mb-2">Element Access:</h5>
                  <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded">
{`usernameField.sendKeys(username)
passwordField.sendKeys(password)
loginButton.click()`}
                  </pre>
                </div>

                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded border border-green-300 dark:border-green-700">
                  <h5 className="font-semibold text-sm mb-2 text-green-800 dark:text-green-200">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    Automatic & Efficient
                  </h5>
                  <ul className="text-xs text-green-700 dark:text-green-300 space-y-1">
                    <li>• Automatic element initialization</li>
                    <li>• Built-in wait strategies</li>
                    <li>• Lazy loading with proxies</li>
                    <li>• Cleaner, readable code</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* In-Depth Diagrammatic Analysis */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Grid3x3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Page Factory Architecture Diagram
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Comprehensive visual analysis of Page Factory pattern structure and flow
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Diagram Type Selector */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">View:</span>
            {[
              { id: 'architecture', label: 'Architecture', icon: Building },
              { id: 'flow', label: 'Data Flow', icon: Workflow },
              { id: 'comparison', label: 'Comparison', icon: GitBranch }
            ].map((type) => (
              <Button
                key={type.id}
                variant={selectedDiagram === type.id ? 'default' : 'outline'}
                onClick={() => setSelectedDiagram(type.id as any)}
                className="flex items-center gap-2"
              >
                <type.icon className="w-4 h-4" />
                {type.label}
              </Button>
            ))}
          </div>

          {/* Architecture Diagram */}
          {selectedDiagram === 'architecture' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-6 text-center">
                  Page Factory Component Architecture
                </h4>
                
                {/* Layer 1: Test Layer */}
                <div className="mb-8">
                  <div className="text-center mb-3">
                    <Badge className="bg-purple-600 text-white px-3 py-1">Test Layer</Badge>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-300 dark:border-purple-600 rounded-lg p-4 max-w-md">
                      <div className="flex items-center gap-3">
                        <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        <div>
                          <h5 className="font-bold text-purple-900 dark:text-purple-100">Test Class</h5>
                          <p className="text-xs text-purple-700 dark:text-purple-300">Business logic & assertions</p>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-purple-600 dark:text-purple-400 space-y-1">
                        <div>• factory.getPage(LoginPage.class)</div>
                        <div>• loginPage.login("user", "pass")</div>
                        <div>• assertEquals("Welcome", message)</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow Down */}
                  <div className="flex justify-center my-4">
                    <ArrowDown className="w-6 h-6 text-purple-500" />
                  </div>
                </div>

                {/* Layer 2: Factory Layer */}
                <div className="mb-8">
                  <div className="text-center mb-3">
                    <Badge className="bg-indigo-600 text-white px-3 py-1">Factory Layer</Badge>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 border-2 border-indigo-300 dark:border-indigo-600 rounded-lg p-6 max-w-2xl">
                      <div className="flex items-center gap-3 mb-4">
                        <Factory className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                        <div>
                          <h5 className="font-bold text-indigo-900 dark:text-indigo-100 text-lg">PageFactory</h5>
                          <p className="text-sm text-indigo-700 dark:text-indigo-300">Central element management hub</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                          <h6 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Page Registry</h6>
                          <div className="space-y-1 text-gray-600 dark:text-gray-400">
                            <div>• LoginPage → Metadata</div>
                            <div>• DashboardPage → Metadata</div>
                            <div>• ProfilePage → Metadata</div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                          <h6 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Element Cache</h6>
                          <div className="space-y-1 text-gray-600 dark:text-gray-400">
                            <div>• Proxy Objects</div>
                            <div>• Lazy Loading</div>
                            <div>• Wait Strategies</div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                          <h6 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Core Methods</h6>
                          <div className="space-y-1 text-gray-600 dark:text-gray-400">
                            <div>• getPage(Class)</div>
                            <div>• initElements(Object)</div>
                            <div>• parseAnnotations(Class)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow Down */}
                  <div className="flex justify-center my-4">
                    <ArrowDown className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                {/* Layer 3: Page Object Layer */}
                <div className="mb-8">
                  <div className="text-center mb-3">
                    <Badge className="bg-green-600 text-white px-3 py-1">Page Object Layer</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: 'LoginPage', icon: Lock, color: 'green', elements: ['usernameField', 'passwordField', 'loginButton'] },
                      { name: 'DashboardPage', icon: Monitor, color: 'blue', elements: ['welcomeMessage', 'userMenu', 'logoutButton'] },
                      { name: 'ProfilePage', icon: Users, color: 'purple', elements: ['profileForm', 'saveButton', 'avatar'] }
                    ].map((page) => (
                      <div key={page.name} className="bg-white dark:bg-gray-800 border-2 rounded-lg p-4 shadow-md">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`p-2 rounded-lg ${
                            page.color === 'green' ? 'bg-green-200 dark:bg-green-800' :
                            page.color === 'blue' ? 'bg-blue-200 dark:bg-blue-800' :
                            'bg-purple-200 dark:bg-purple-800'
                          }`}>
                            <page.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h6 className="font-bold text-gray-900 dark:text-gray-100">{page.name}</h6>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Page Object</p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">Elements:</div>
                          {page.elements.map((element, i) => (
                            <div key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                              <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                              <span>@FindBy → {element}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Arrow Down */}
                  <div className="flex justify-center my-4">
                    <ArrowDown className="w-6 h-6 text-green-500" />
                  </div>
                </div>

                {/* Layer 4: Proxy Layer */}
                <div>
                  <div className="text-center mb-3">
                    <Badge className="bg-orange-600 text-white px-3 py-1">Proxy Layer</Badge>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-300 dark:border-orange-600 rounded-lg p-4 max-w-md">
                      <div className="flex items-center gap-3">
                        <Box className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        <div>
                          <h5 className="font-bold text-orange-900 dark:text-orange-100">ElementProxy</h5>
                          <p className="text-xs text-orange-700 dark:text-orange-300">Lazy element wrapper</p>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-orange-600 dark:text-orange-400">
                        <div>• Lazy initialization</div>
                        <div>• Automatic waits</div>
                        <div>• Error handling</div>
                        <div>• Element caching</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
                <Eye className="h-5 w-5 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Architecture Benefits</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                  This layered architecture provides separation of concerns, making the system 
                  maintainable, testable, and scalable. Each layer has specific responsibilities 
                  and communicates through well-defined interfaces.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Data Flow Diagram */}
          {selectedDiagram === 'flow' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-6 text-center">
                  Page Factory Data Flow Analysis
                </h4>
                
                {/* Flow Steps */}
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: 'Test Request',
                      description: 'Test requests page object from factory',
                      inputs: ['Test Class', 'Page Class Type'],
                      outputs: ['Page Request'],
                      icon: Code,
                      color: 'purple'
                    },
                    {
                      step: 2,
                      title: 'Factory Processing',
                      description: 'Factory validates and processes request',
                      inputs: ['Page Request', 'Class Metadata'],
                      outputs: ['Page Instance', 'Element List'],
                      icon: Factory,
                      color: 'indigo'
                    },
                    {
                      step: 3,
                      title: 'Annotation Parsing',
                      description: 'Extract @FindBy annotations from class',
                      inputs: ['Page Class', 'Annotations'],
                      outputs: ['Element Locators', 'Mapping'],
                      icon: Settings,
                      color: 'blue'
                    },
                    {
                      step: 4,
                      title: 'Proxy Creation',
                      description: 'Create proxy objects for each element',
                      inputs: ['Element Locators', 'WebDriver'],
                      outputs: ['Element Proxies', 'Wait Strategies'],
                      icon: Box,
                      color: 'orange'
                    },
                    {
                      step: 5,
                      title: 'Element Access',
                      description: 'Lazy loading when elements are accessed',
                      inputs: ['Element Proxy', 'User Action'],
                      outputs: ['WebElement', 'Action Result'],
                      icon: Target,
                      color: 'green'
                    }
                  ].map((flow, index) => (
                    <div key={flow.step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 text-white rounded-full flex items-center justify-center font-semibold bg-${flow.color}-600`}>
                          {flow.step}
                        </div>
                        {index < 4 && (
                          <div className="w-0.5 h-16 bg-gray-300 mt-2 flex items-center justify-center">
                            <ArrowDown className="w-4 h-4 text-gray-500" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <Card className="bg-white dark:bg-gray-800">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <flow.icon className="w-5 h-5" />
                              {flow.title}
                            </CardTitle>
                            <CardDescription>{flow.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Inputs:</h5>
                                <div className="space-y-1">
                                  {flow.inputs.map((input, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                                      <ArrowRight className="w-3 h-3" />
                                      {input}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Outputs:</h5>
                                <div className="space-y-1">
                                  {flow.outputs.map((output, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                                      <ArrowRight className="w-3 h-3" />
                                      {output}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Alert className="border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950/20">
                <Workflow className="h-5 w-5 text-green-600" />
                <AlertTitle className="text-green-900 dark:text-green-100">Flow Optimization</AlertTitle>
                <AlertDescription className="text-green-800 dark:text-green-200">
                  The data flow is optimized for performance with lazy loading, caching mechanisms, 
                  and intelligent wait strategies that minimize unnecessary DOM interactions.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Detailed Comparison */}
          {selectedDiagram === 'comparison' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-6 text-center">
                  Detailed Pattern Comparison Analysis
                </h4>
                
                {/* Comparison Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-purple-100 dark:bg-purple-900/50">
                        <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left text-purple-900 dark:text-purple-100">
                          Aspect
                        </th>
                        <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left text-blue-900 dark:text-blue-100">
                          Traditional POM
                        </th>
                        <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left text-green-900 dark:text-green-100">
                          Page Factory
                        </th>
                        <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-center text-purple-900 dark:text-purple-100">
                          Winner
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          aspect: 'Code Volume',
                          traditional: 'High - Manual locators, waits, and initialization',
                          factory: 'Low - Annotation-driven, automatic initialization',
                          winner: 'Factory'
                        },
                        {
                          aspect: 'Performance',
                          traditional: 'Medium - Elements loaded upfront, potential delays',
                          factory: 'High - Lazy loading, optimized access patterns',
                          winner: 'Factory'
                        },
                        {
                          aspect: 'Maintainability',
                          traditional: 'Medium - Changes require multiple file updates',
                          factory: 'High - Centralized management, easy updates',
                          winner: 'Factory'
                        },
                        {
                          aspect: 'Learning Curve',
                          traditional: 'Low - Simple, straightforward approach',
                          factory: 'Medium - Requires understanding annotations and proxies',
                          winner: 'Traditional'
                        },
                        {
                          aspect: 'Error Handling',
                          traditional: 'Manual - Try-catch blocks needed everywhere',
                          factory: 'Automatic - Built-in exception handling in proxies',
                          winner: 'Factory'
                        },
                        {
                          aspect: 'Test Readability',
                          traditional: 'Medium - Mix of technical and business logic',
                          factory: 'High - Clean business-focused test code',
                          winner: 'Factory'
                        },
                        {
                          aspect: 'Debugging',
                          traditional: 'Easy - Direct element access, clear stack traces',
                          factory: 'Medium - Proxy layer adds complexity to debugging',
                          winner: 'Traditional'
                        },
                        {
                          aspect: 'Scalability',
                          traditional: 'Low - Manual management doesn\'t scale well',
                          factory: 'High - Automatic handling supports large test suites',
                          winner: 'Factory'
                        }
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'}>
                          <td className="border border-purple-300 dark:border-purple-700 px-4 py-3 font-semibold text-purple-900 dark:text-purple-100">
                            {row.aspect}
                          </td>
                          <td className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                            {row.traditional}
                          </td>
                          <td className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                            {row.factory}
                          </td>
                          <td className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-center">
                            <Badge variant={row.winner === 'Factory' ? 'default' : 'secondary'} 
                                   className={row.winner === 'Factory' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'}>
                              {row.winner}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Visual Comparison Matrix */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                      <Layers className="w-5 h-5" />
                      Traditional POM Characteristics
                    </h5>
                    <div className="space-y-2">
                      {[
                        '✓ Simple implementation',
                        '✓ Direct element control',
                        '✓ Easy to debug',
                        '✓ No external dependencies',
                        '✗ Verbose code',
                        '✗ Manual wait management',
                        '✗ Repetitive patterns',
                        '✗ Harder to maintain'
                      ].map((item, i) => (
                        <div key={i} className={`text-sm ${item.startsWith('✓') ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <Factory className="w-5 h-5" />
                      Page Factory Characteristics
                    </h5>
                    <div className="space-y-2">
                      {[
                        '✓ Minimal code',
                        '✓ Automatic waits',
                        '✓ Lazy loading',
                        '✓ Clean test code',
                        '✓ Better performance',
                        '✗ Complex internals',
                        '✗ Steeper learning curve',
                        '✗ Debugging complexity'
                      ].map((item, i) => (
                        <div key={i} className={`text-sm ${item.startsWith('✓') ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
                <GitBranch className="h-5 w-5 text-purple-600" />
                <AlertTitle className="text-purple-900 dark:text-purple-100">Decision Matrix</AlertTitle>
                <AlertDescription className="text-purple-800 dark:text-purple-200">
                  <strong>Use Traditional POM</strong> for small projects, simple applications, or when learning Selenium.
                  <strong>Use Page Factory</strong> for enterprise applications, large test suites, or when performance and maintainability are critical.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
            Complete Page Factory Implementation
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Production-ready Page Factory pattern with annotations and proxy elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Tabs value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value as 'python' | 'java' | 'javascript')}>
                <TabsList className="bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger value="python" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Python</TabsTrigger>
                  <TabsTrigger value="java" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Java</TabsTrigger>
                  <TabsTrigger value="javascript" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">JavaScript</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(getFactoryCode().join('\n'), 'Page Factory code')}
                className="border-gray-300 dark:border-gray-600"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm border border-gray-300 dark:border-gray-700">
                <code>
                  {getFactoryCode().map((line, index) => (
                    <div key={index}>
                      <span className="text-gray-500 dark:text-gray-400 select-none">{String(index + 1).padStart(2, ' ')} </span>
                      <span className={
                        line.includes('class ') ? 'text-blue-600 dark:text-blue-400' :
                        line.includes('def ') || line.includes('async ') || line.includes('public ') ? 'text-purple-600 dark:text-purple-400' :
                        line.includes('#') || line.includes('//') ? 'text-green-600 dark:text-green-400' :
                        line.includes('@') ? 'text-orange-600 dark:text-orange-400' :
                        line.includes('self.') || line.includes('this.') ? 'text-indigo-600 dark:text-indigo-400' :
                        'text-gray-800 dark:text-gray-200'
                      }>
                        {line}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
            
            {/* Code Explanation */}
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Features:</h4>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p><strong className="text-blue-600 dark:text-blue-400">@FindBy Annotations:</strong> Declarative element location</p>
                <p><strong className="text-purple-600 dark:text-purple-400">Proxy Pattern:</strong> Lazy element initialization</p>
                <p><strong className="text-orange-600 dark:text-orange-400">Factory Class:</strong> Centralized page management</p>
                <p><strong className="text-indigo-600 dark:text-indigo-400">Automatic Waits:</strong> Built-in synchronization</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              Page Factory Best Practices
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Follow these practices for effective Page Factory implementation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Use Meaningful Annotations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Choose descriptive locator strategies and maintain consistent naming 
                  conventions across all annotations.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <Wrench className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Implement Proper Caching</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Cache page objects in the factory to avoid repeated initialization 
                  and improve test performance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
              <Puzzle className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Handle Dynamic Elements</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use appropriate wait strategies and fallback locators for 
                  dynamic or AJAX-based elements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
              Performance Optimization
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Maximize efficiency with these optimization techniques
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
              <FolderOpen className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Lazy Loading Strategy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Elements are only initialized when first accessed, reducing 
                  initial page load time and memory usage.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
              <GitBranch className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Smart Wait Management</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Implement intelligent wait conditions that adapt to 
                  different page load times and network conditions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
              <Monitor className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Parallel Execution Support</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Design factory to support parallel test execution with 
                  thread-safe element management.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Implementation Guide */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Implementation Roadmap
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Step-by-step guide to migrate from Traditional POM to Page Factory
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: 'Create Base Factory Class',
                description: 'Implement the core PageFactory with driver management and element caching',
                icon: Package,
                color: 'blue'
              },
              {
                step: 2,
                title: 'Add Annotation Support',
                description: 'Create @FindBy decorators/annotations for element location',
                icon: Settings,
                color: 'purple'
              },
              {
                step: 3,
                title: 'Implement Proxy Pattern',
                description: 'Create ElementProxy for lazy loading and automatic waits',
                icon: Box,
                color: 'orange'
              },
              {
                step: 4,
                title: 'Migrate Page Classes',
                description: 'Convert existing page objects to use annotations instead of manual locators',
                icon: GitBranch,
                color: 'green'
              },
              {
                step: 5,
                title: 'Update Test Code',
                description: 'Modify tests to use factory.getPage() instead of direct instantiation',
                icon: Code,
                color: 'indigo'
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 text-white rounded-full flex items-center justify-center font-semibold ${
                    item.color === 'blue' ? 'bg-blue-600' :
                    item.color === 'purple' ? 'bg-purple-600' :
                    item.color === 'orange' ? 'bg-orange-600' :
                    item.color === 'green' ? 'bg-green-600' :
                    'bg-indigo-600'
                  }`}>
                    {item.step}
                  </div>
                  {item.step < 5 && (
                    <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <Card className="bg-gray-50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <item.icon className="w-5 h-5" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Final Alert */}
      <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
        <AlertCircle className="h-5 w-5 text-indigo-600" />
        <AlertTitle className="text-indigo-900 dark:text-indigo-100">Ready to Implement?</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200">
          Page Factory pattern significantly improves test automation efficiency and maintainability. 
          Start with a pilot project and gradually migrate existing page objects to experience 
          the benefits of automatic element initialization and lazy loading.
        </AlertDescription>
      </Alert>
    </div>
  );
}

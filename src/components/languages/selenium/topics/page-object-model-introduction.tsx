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
  BookOpen,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Layers,
  Package,
  FileText,
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
  Unlock
} from 'lucide-react';

export function PageObjectModelIntroduction() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [showStructure, setShowStructure] = React.useState(false);
  const [highlightedElement, setHighlightedElement] = React.useState<string>('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const pomStructure = [
    {
      name: 'BasePage',
      description: 'Common functionality for all pages',
      icon: <Package className="w-4 h-4" />,
      color: 'blue',
      elements: ['WebDriver', 'Wait utilities', 'Common actions']
    },
    {
      name: 'LoginPage',
      description: 'Login page specific elements and actions',
      icon: <Lock className="w-4 h-4" />,
      color: 'green',
      elements: ['Username field', 'Password field', 'Login button']
    },
    {
      name: 'DashboardPage',
      description: 'Dashboard page elements and navigation',
      icon: <Monitor className="w-4 h-4" />,
      color: 'purple',
      elements: ['Welcome message', 'Navigation menu', 'User profile']
    },
    {
      name: 'SearchPage',
      description: 'Search functionality and results',
      icon: <Database className="w-4 h-4" />,
      color: 'orange',
      elements: ['Search box', 'Filters', 'Results list']
    }
  ];

  const getPomCode = () => {
    if (selectedLanguage === 'python') {
      return [
        '# Base Page - Common functionality for all pages',
        'from selenium.webdriver.support.ui import WebDriverWait',
        'from selenium.webdriver.support import expected_conditions as EC',
        'from selenium.webdriver.common.by import By',
        '',
        'class BasePage:',
        '    def __init__(self, driver):',
        '        self.driver = driver',
        '        self.wait = WebDriverWait(driver, 10)',
        '    ',
        '    def click_element(self, locator):',
        '        """Click element with wait"""',
        '        element = self.wait.until(EC.element_to_be_clickable(locator))',
        '        element.click()',
        '        return self',
        '    ',
        '    def type_text(self, locator, text):',
        '        """Type text with wait"""',
        '        element = self.wait.until(EC.presence_of_element_located(locator))',
        '        element.clear()',
        '        element.send_keys(text)',
        '        return self',
        '',
        '# Login Page Object',
        'class LoginPage(BasePage):',
        '    # Element locators',
        '    USERNAME_INPUT = (By.ID, "username")',
        '    PASSWORD_INPUT = (By.ID, "password")',
        '    LOGIN_BUTTON = (By.ID, "login-btn")',
        '    ERROR_MESSAGE = (By.CLASS_NAME, "error")',
        '    ',
        '    def load(self):',
        '        """Navigate to login page"""',
        '        self.driver.get("https://example.com/login")',
        '        return self',
        '    ',
        '    def login(self, username, password):',
        '        """Perform login action"""',
        '        self.type_text(self.USERNAME_INPUT, username)',
        '        self.type_text(self.PASSWORD_INPUT, password)',
        '        self.click_element(self.LOGIN_BUTTON)',
        '        return DashboardPage(self.driver)',
        '    ',
        '    def get_error_message(self):',
        '        """Get error message text"""',
        '        element = self.wait.until(EC.presence_of_element_located(self.ERROR_MESSAGE))',
        '        return element.text',
        '',
        '# Dashboard Page Object',
        'class DashboardPage(BasePage):',
        '    # Element locators',
        '    WELCOME_MESSAGE = (By.ID, "welcome")',
        '    USER_MENU = (By.CLASS_NAME, "user-menu")',
        '    LOGOUT_BUTTON = (By.ID, "logout")',
        '    ',
        '    def get_welcome_message(self):',
        '        """Get welcome message text"""',
        '        element = self.wait.until(EC.presence_of_element_located(self.WELCOME_MESSAGE))',
        '        return element.text',
        '    ',
        '    def logout(self):',
        '        """Perform logout action"""',
        '        self.click_element(self.USER_MENU)',
        '        self.click_element(self.LOGOUT_BUTTON)',
        '        return LoginPage(self.driver)',
        '',
        '# Test using Page Objects',
        'def test_user_login():',
        '    driver = webdriver.Chrome()',
        '    login_page = LoginPage(driver)',
        '    ',
        '    # Using page object methods',
        '    dashboard_page = login_page.load()\\',
        '        .login("testuser", "password123")',
        '    ',
        '    # Verify login success',
        '    welcome_msg = dashboard_page.get_welcome_message()',
        '    assert "Welcome" in welcome_msg',
        '    ',
        '    driver.quit()'
      ];
    } else if (selectedLanguage === 'java') {
      return [
        '// Base Page - Common functionality for all pages',
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.WebElement;',
        'import org.openqa.selenium.support.ui.WebDriverWait;',
        'import org.openqa.selenium.support.ui.ExpectedConditions;',
        'import org.openqa.selenium.By;',
        'import java.time.Duration;',
        '',
        'public class BasePage {',
        '    protected WebDriver driver;',
        '    protected WebDriverWait wait;',
        '    ',
        '    public BasePage(WebDriver driver) {',
        '        this.driver = driver;',
        '        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));',
        '    }',
        '    ',
        '    protected void clickElement(By locator) {',
        '        WebElement element = wait.until(ExpectedConditions.elementToBeClickable(locator));',
        '        element.click();',
        '    }',
        '    ',
        '    protected void typeText(By locator, String text) {',
        '        WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(locator));',
        '        element.clear();',
        '        element.sendKeys(text);',
        '    }',
        '}',
        '',
        '// Login Page Object',
        'public class LoginPage extends BasePage {',
        '    // Element locators',
        '    private final By usernameInput = By.id("username");',
        '    private final By passwordInput = By.id("password");',
        '    private final By loginButton = By.id("login-btn");',
        '    private final By errorMessage = By.className("error");',
        '    ',
        '    public LoginPage(WebDriver driver) {',
        '        super(driver);',
        '    }',
        '    ',
        '    public LoginPage load() {',
        '        driver.get("https://example.com/login");',
        '        return this;',
        '    }',
        '    ',
        '    public DashboardPage login(String username, String password) {',
        '        typeText(usernameInput, username);',
        '        typeText(passwordInput, password);',
        '        clickElement(loginButton);',
        '        return new DashboardPage(driver);',
        '    }',
        '    ',
        '    public String getErrorMessage() {',
        '        WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(errorMessage));',
        '        return element.getText();',
        '    }',
        '}',
        '',
        '// Dashboard Page Object',
        'public class DashboardPage extends BasePage {',
        '    private final By welcomeMessage = By.id("welcome");',
        '    private final By userMenu = By.className("user-menu");',
        '    private final By logoutButton = By.id("logout");',
        '    ',
        '    public DashboardPage(WebDriver driver) {',
        '        super(driver);',
        '    }',
        '    ',
        '    public String getWelcomeMessage() {',
        '        WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(welcomeMessage));',
        '        return element.getText();',
        '    }',
        '    ',
        '    public LoginPage logout() {',
        '        clickElement(userMenu);',
        '        clickElement(logoutButton);',
        '        return new LoginPage(driver);',
        '    }',
        '}'
      ];
    } else {
      return [
        '// Base Page - Common functionality for all pages',
        'import { WebDriver, By, until } from \'selenium-webdriver\';',
        '',
        'class BasePage {',
        '    constructor(driver) {',
        '        this.driver = driver;',
        '        this.wait = driver.wait(until.elementLocated, 10000);',
        '    }',
        '    ',
        '    async clickElement(locator) {',
        '        const element = await this.driver.wait(until.elementLocated(locator));',
        '        await element.click();',
        '        return this;',
        '    }',
        '    ',
        '    async typeText(locator, text) {',
        '        const element = await this.driver.wait(until.elementLocated(locator));',
        '        await element.clear();',
        '        await element.sendKeys(text);',
        '        return this;',
        '    }',
        '}',
        '',
        '// Login Page Object',
        'class LoginPage extends BasePage {',
        '    constructor(driver) {',
        '        super(driver);',
        '        // Element locators',
        '        this.usernameInput = By.id(\'username\');',
        '        this.passwordInput = By.id(\'password\');',
        '        this.loginButton = By.id(\'login-btn\');',
        '        this.errorMessage = By.className(\'error\');',
        '    }',
        '    ',
        '    async load() {',
        '        await this.driver.get(\'https://example.com/login\');',
        '        return this;',
        '    }',
        '    ',
        '    async login(username, password) {',
        '        await this.typeText(this.usernameInput, username);',
        '        await this.typeText(this.passwordInput, password);',
        '        await this.clickElement(this.loginButton);',
        '        return new DashboardPage(this.driver);',
        '    }',
        '    ',
        '    async getErrorMessage() {',
        '        const element = await this.driver.wait(until.elementLocated(this.errorMessage));',
        '        return await element.getText();',
        '    }',
        '}'
      ];
    }
  };

  const pomCode = getPomCode();

  const startAnimation = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    
    const steps = [
      { element: 'BasePage', delay: 1000 },
      { element: 'LoginPage', delay: 1500 },
      { element: 'DashboardPage', delay: 1500 },
      { element: 'SearchPage', delay: 1500 }
    ];

    steps.forEach(({ element, delay }) => {
      setTimeout(() => {
        setHighlightedElement(element);
        setCurrentStep(prev => prev + 1);
      }, delay);
    });

    setTimeout(() => {
      setIsAnimating(false);
      setHighlightedElement('');
    }, 5500);
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Layers}
        category="Selenium · Design Patterns"
        title="Page Object Model (POM) Introduction"
        description="Master the Page Object Model design pattern for maintainable and scalable Selenium test automation."
        colorTheme="purple"
      />

      {/* What is POM Section */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            What is Page Object Model?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  Definition
                </h3>
                <p className="text-sm text-purple-800 dark:text-purple-200 leading-relaxed">
                  <strong>Page Object Model (POM)</strong> is a design pattern that creates an object repository 
                  for web UI elements. It makes test automation more maintainable by separating page 
                  interactions from test logic.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Why Use POM?
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  POM solves common automation problems by:
                </p>
                <ul className="text-sm text-blue-800 dark:text-blue-200 mt-2 space-y-1">
                  <li>• Separating UI locators from test logic</li>
                  <li>• Creating reusable page interaction methods</li>
                  <li>• Making tests more readable and maintainable</li>
                  <li>• Reducing code duplication across tests</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Key Benefits
                </h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span><strong>Maintainability:</strong> Easy to update when UI changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span><strong>Reusability:</strong> Share page methods across tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span><strong>Readability:</strong> Tests focus on business logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span><strong>Scalability:</strong> Easy to add new pages and features</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  When to Use POM?
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
                  POM is essential when you have:
                </p>
                <ul className="text-sm text-orange-800 dark:text-orange-200 mt-2 space-y-1">
                  <li>• Multiple test cases for the same pages</li>
                  <li>• Complex web applications with many pages</li>
                  <li>• Team collaboration on test automation</li>
                  <li>• Long-term test maintenance requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* POM Structure Visualization */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            POM Structure Visualization
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Understand the hierarchical structure of Page Object Model
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Grid3x3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Interactive Structure:</span>
            </div>
            <Button 
              onClick={startAnimation}
              disabled={isAnimating}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isAnimating ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Animating...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Show Structure
                </>
              )}
            </Button>
          </div>

          <div className="relative">
            {/* Base Page - Root */}
            <div className="flex justify-center mb-8">
              <div className={`relative transition-all duration-500 ${
                highlightedElement === 'BasePage' ? 'scale-110' : 'scale-100'
              }`}>
                <div className="bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-300 dark:border-blue-600 rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-200 dark:bg-blue-800 rounded-lg">
                      <Package className="w-6 h-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 dark:text-blue-100">BasePage</h4>
                      <p className="text-xs text-blue-700 dark:text-blue-300">Common functionality</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-blue-600 dark:text-blue-400">
                    <div>• WebDriver management</div>
                    <div>• Wait utilities</div>
                    <div>• Common actions (click, type)</div>
                  </div>
                </div>
                {highlightedElement === 'BasePage' && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Base Class
                  </div>
                )}
              </div>
            </div>

            {/* Connection Lines */}
            <div className="flex justify-center mb-4">
              <div className="w-0.5 h-8 bg-blue-300 dark:bg-blue-600"></div>
            </div>

            {/* Child Pages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pomStructure.slice(1).map((page, index) => (
                <div key={page.name} className={`relative transition-all duration-500 ${
                  highlightedElement === page.name ? 'scale-110 -translate-y-2' : 'scale-100'
                } ${isAnimating && currentStep <= index ? 'opacity-50' : 'opacity-100'}`}>
                  <div className={`bg-white dark:bg-gray-800 border-2 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow ${
                    page.name === 'LoginPage' ? 'border-green-300 dark:border-green-600' :
                    page.name === 'DashboardPage' ? 'border-purple-300 dark:border-purple-600' :
                    'border-orange-300 dark:border-orange-600'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        page.name === 'LoginPage' ? 'bg-green-200 dark:bg-green-800' :
                        page.name === 'DashboardPage' ? 'bg-purple-200 dark:bg-purple-800' :
                        'bg-orange-200 dark:bg-orange-800'
                      }`}>
                        {page.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-gray-100">{page.name}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{page.description}</p>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                      {page.elements.map((element, i) => (
                        <div key={i}>• {element}</div>
                      ))}
                    </div>
                  </div>
                  {highlightedElement === page.name && (
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      Page Object
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
            <Eye className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Visual Hierarchy</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <strong>BasePage</strong> provides common functionality that all page objects inherit. 
              Each specific page (LoginPage, DashboardPage, etc.) extends BasePage and adds 
              page-specific elements and actions.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
            Complete POM Implementation
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Production-ready Page Object Model with base class and page-specific implementations
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
                onClick={() => copyToClipboard(pomCode.join('\n'), 'POM code')}
                className="border-gray-300 dark:border-gray-600"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm border border-gray-300 dark:border-gray-700">
                <code>
                  {pomCode.map((line, index) => (
                    <div key={index}>
                      <span className="text-gray-500 dark:text-gray-400 select-none">{String(index + 1).padStart(2, ' ')} </span>
                      <span className={
                        line.includes('class ') ? 'text-blue-600 dark:text-blue-400' :
                        line.includes('def ') || line.includes('async ') || line.includes('public ') ? 'text-purple-600 dark:text-purple-400' :
                        line.includes('#') || line.includes('//') ? 'text-green-600 dark:text-green-400' :
                        line.includes('self.') || line.includes('this.') ? 'text-orange-600 dark:text-orange-400' :
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
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Code Structure:</h4>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p><strong className="text-blue-600 dark:text-blue-400">BasePage:</strong> Contains common WebDriver operations and utilities</p>
                <p><strong className="text-purple-600 dark:text-purple-400">Page Methods:</strong> Each page object has methods for user interactions</p>
                <p><strong className="text-orange-600 dark:text-orange-400">Locators:</strong> Element selectors are defined as class constants</p>
                <p><strong className="text-green-600 dark:text-green-400">Return Types:</strong> Methods return page objects for fluent interface</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* POM Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              POM Best Practices
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Follow these practices for effective Page Object Model implementation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">One Page Per Class</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Create separate page object classes for each page or major component.
                  Keep them focused and single-responsibility.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <Wrench className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Meaningful Method Names</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use business-oriented method names like login(), searchProduct(), 
                  instead of technical names like clickButton().
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
              <Puzzle className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Return Page Objects</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Methods should return page objects to enable fluent interface 
                  and easy test flow navigation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
              Team Collaboration
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              How POM improves team productivity and collaboration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
              <FolderOpen className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Shared Repository</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Team members can share and reuse page objects across different 
                  test suites and projects.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
              <GitBranch className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Easy Maintenance</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  When UI changes, only page objects need updates. Tests remain 
                  unchanged and continue to work.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
              <Monitor className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Parallel Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Developers can work on different page objects simultaneously 
                  without conflicts or dependencies.
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
            Implementation Guide
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Step-by-step guide to implement Page Object Model in your projects
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Create Base Page</h4>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Define common WebDriver methods</li>
                <li>• Add wait utilities</li>
                <li>• Implement error handling</li>
                <li>• Add logging capabilities</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Create Page Classes</h4>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Define element locators</li>
                <li>• Create interaction methods</li>
                <li>• Implement business logic</li>
                <li>• Add validation methods</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Write Tests</h4>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Use page objects in tests</li>
                <li>• Focus on test scenarios</li>
                <li>• Add assertions</li>
                <li>• Handle test data</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Refactor & Maintain</h4>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Review and optimize code</li>
                <li>• Add new page objects</li>
                <li>• Update existing ones</li>
                <li>• Document best practices</li>
              </ul>
            </div>
          </div>
          
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950">
            <Zap className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Start with a simple BasePage class and gradually add functionality. 
              Focus on creating meaningful methods that represent user actions rather than 
              technical operations. This makes your tests more readable and maintainable.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Alert className="border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950">
        <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
        <AlertTitle className="text-red-900 dark:text-red-100">Common Pitfalls to Avoid</AlertTitle>
        <AlertDescription className="text-red-800 dark:text-red-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h5 className="font-semibold mb-2 text-red-900 dark:text-red-100">Don't Do This:</h5>
              <ul className="text-sm space-y-1">
                <li>• Put assertions in page objects</li>
                <li>• Create methods that return void</li>
                <li>• Mix page logic with test logic</li>
                <li>• Use technical method names</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-red-900 dark:text-red-100">Do This Instead:</h5>
              <ul className="text-sm space-y-1">
                <li>• Keep page objects free of assertions</li>
                <li>• Return page objects for fluent interface</li>
                <li>• Separate concerns properly</li>
                <li>• Use business-oriented method names</li>
              </ul>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

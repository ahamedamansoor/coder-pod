'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';
import {
  TestTube,
  BookOpen,
  Zap,
  Target,
  Rocket,
  AlertTriangle,
  Settings,
  Wrench,
  Users,
  Package,
  Play,
  RefreshCw,
  Timer,
  Layers,
  Code,
  Copy,
  GitBranch,
  BarChart3,
  FileText,
  Database,
  Shield,
  Monitor,
  CheckCircle,
  XSquare,
  Circle,
  Clock,
  ListChecks,
  CheckSquare,
  Triangle,
  Square,
  AlertCircle,
  Sparkles,
  Coffee,
  Smile,
  Braces,
  Puzzle
} from 'lucide-react';

export function MochaJestIntegration() {
  const { toast } = useToast();
  const [selectedFramework, setSelectedFramework] = React.useState<'mocha' | 'jest'>('mocha');
  const [selectedLanguage, setSelectedLanguage] = React.useState<'javascript' | 'typescript'>('javascript');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [testResults, setTestResults] = React.useState<Record<string, 'pending' | 'running' | 'passed' | 'failed'>>({});
  const [executionTime, setExecutionTime] = React.useState(0);
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [activeHooks, setActiveHooks] = React.useState<Set<string>>(new Set());

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const getFrameworkCode = () => {
    if (selectedFramework === 'mocha') {
      if (selectedLanguage === 'javascript') {
        return [
          'const { expect } = require(\'chai\');',
          'const { Builder, By, Key, until } = require(\'selenium-webdriver\');',
          'const chrome = require(\'selenium-webdriver/chrome\');',
          '',
          'describe(\'E-commerce Website Tests\', function() {',
          '  let driver;',
          '  ',
          '  // Runs once before all tests',
          '  before(async function() {',
          '    console.log(\'Setting up WebDriver...\');',
          '    const options = new chrome.Options();',
          '    options.addArguments(\'--headless\');',
          '    options.addArguments(\'--no-sandbox\');',
          '    options.addArguments(\'--disable-dev-shm-usage\');',
          '    ',
          '    driver = await new Builder()',
          '      .forBrowser(\'chrome\')',
          '      .setChromeOptions(options)',
          '      .build();',
          '    ',
          '    await driver.manage().window().maximize();',
          '    await driver.manage().setTimeouts({ implicit: 10000 });',
          '  });',
          '',
          '  // Runs before each test',
          '  beforeEach(async function() {',
          '    console.log(\'Navigating to login page...\');',
          '    await driver.get(\'https://example.com/login\');',
          '  });',
          '',
          '  it(\'should allow user to login successfully\', async function() {',
          '    this.timeout(10000); // Set timeout for this test',
          '    ',
          '    // Find and fill login form',
          '    await driver.findElement(By.id(\'username\')).sendKeys(\'testuser\');',
          '    await driver.findElement(By.id(\'password\')).sendKeys(\'password123\');',
          '    await driver.findElement(By.id(\'login-btn\')).click();',
          '    ',
          '    // Wait for dashboard to load',
          '    await driver.wait(until.titleContains(\'Dashboard\'), 5000);',
          '    ',
          '    // Assertions',
          '    const title = await driver.getTitle();',
          '    expect(title).to.include(\'Dashboard\');',
          '    ',
          '    const welcomeElement = await driver.findElement(By.id(\'welcome\'));',
          '    expect(welcomeElement).to.exist;',
          '    expect(welcomeElement.isDisplayed()).to.be.true;',
          '  });',
          '',
          '  it(\'should search for products successfully\', async function() {',
          '    this.timeout(8000);',
          '    ',
          '    // Navigate to home page',
          '    await driver.get(\'https://example.com\');',
          '    ',
          '    // Search for product',
          '    const searchBox = await driver.findElement(By.id(\'search\'));',
          '    await searchBox.sendKeys(\'laptop\', Key.RETURN);',
          '    ',
          '    // Wait for search results',
          '    await driver.wait(until.urlContains(\'search\'), 5000);',
          '    ',
          '    // Verify search results',
          '    const results = await driver.findElements(By.className(\'product-item\'));',
          '    expect(results).to.have.length.greaterThan(0);',
          '    ',
          '    const currentUrl = await driver.getCurrentUrl();',
          '    expect(currentUrl).to.include(\'search\');',
          '  });',
          '',
          '  // Test with data using JavaScript array',
          '  const testUsers = [',
          '    { username: \'user1\', password: \'pass123\' },',
          '    { username: \'user2\', password: \'pass456\' },',
          '    { username: \'admin\', password: \'admin123\' }',
          '  ];',
          '  ',
          '  testUsers.forEach((user, index) => {',
          '    it(`should allow ${user.username} to login`, async function() {',
          '      this.timeout(8000);',
          '      ',
          '      await driver.findElement(By.id(\'username\')).clear();',
          '      await driver.findElement(By.id(\'username\')).sendKeys(user.username);',
          '      await driver.findElement(By.id(\'password\')).sendKeys(user.password);',
          '      await driver.findElement(By.id(\'login-btn\')).click();',
          '      ',
          '      await driver.wait(until.titleContains(\'Dashboard\'), 5000);',
          '      ',
          '      const welcomeElement = await driver.findElement(By.id(\'welcome\'));',
          '      expect(welcomeElement).to.exist;',
          '      ',
          '      // Verify username appears in welcome message',
          '      const welcomeText = await welcomeElement.getText();',
          '      expect(welcomeText.toLowerCase()).to.include(user.username.toLowerCase());',
          '    });',
          '  });',
          '',
          '  // Skipped test example',
          '  it.skip(\'should process payment (feature under development)\', async function() {',
          '    // Payment processing test',
          '    expect(true).to.be.false; // This will not run',
          '  });',
          '',
          '  // Runs after each test',
          '  afterEach(async function() {',
          '    if (this.currentTest.state === \'failed\') {',
          '      // Take screenshot on failure',
          '      const testName = this.currentTest.title.replace(/\\s+/g, \'_\');',
          '      const screenshot = await driver.takeScreenshot();',
          '      require(\'fs\').writeFileSync(`screenshots/${testName}.png`, screenshot, \'base64\');',
          '      console.log(`Screenshot saved for failed test: ${testName}`);',
          '    }',
          '  });',
          '',
          '  // Runs once after all tests',
          '  after(async function() {',
          '    console.log(\'Cleaning up WebDriver...\');',
          '    if (driver) {',
          '      await driver.quit();',
          '    }',
          '  });',
          '});'
        ];
      } else {
        return [
          'import { expect } from \'chai\';',
          'import { Builder, By, Key, until } from \'selenium-webdriver\';',
          'import { Options } from \'selenium-webdriver/chrome\';',
          'import * as fs from \'fs\';',
          '',
          'describe(\'E-commerce Website Tests\', () => {',
          '  let driver: WebDriver;',
          '  ',
          '  before(async () => {',
          '    console.log(\'Setting up WebDriver...\');',
          '    const options = new Options();',
          '    options.addArguments(\'--headless\');',
          '    options.addArguments(\'--no-sandbox\');',
          '    options.addArguments(\'--disable-dev-shm-usage\');',
          '    ',
          '    driver = await new Builder()',
          '      .forBrowser(\'chrome\')',
          '      .setChromeOptions(options)',
          '      .build();',
          '    ',
          '    await driver.manage().window().maximize();',
          '    await driver.manage().setTimeouts({ implicit: 10000 });',
          '  });',
          '',
          '  beforeEach(async () => {',
          '    console.log(\'Navigating to login page...\');',
          '    await driver.get(\'https://example.com/login\');',
          '  });',
          '',
          '  it(\'should allow user to login successfully\', async () => {',
          '    // Login test implementation',
          '    await driver.findElement(By.id(\'username\')).sendKeys(\'testuser\');',
          '    await driver.findElement(By.id(\'password\')).sendKeys(\'password123\');',
          '    await driver.findElement(By.id(\'login-btn\')).click();',
          '    ',
          '    await driver.wait(until.titleContains(\'Dashboard\'), 5000);',
          '    ',
          '    const title = await driver.getTitle();',
          '    expect(title).to.include(\'Dashboard\');',
          '  });',
          '',
          '  after(async () => {',
          '    console.log(\'Cleaning up WebDriver...\');',
          '    if (driver) {',
          '      await driver.quit();',
          '    }',
          '  });',
          '});'
        ];
      }
    } else {
      // Jest code
      if (selectedLanguage === 'javascript') {
        return [
          'const { Builder, By, Key, until } = require(\'selenium-webdriver\');',
          'const chrome = require(\'selenium-webdriver/chrome\');',
          '',
          'describe(\'E-commerce Website Tests\', () => {',
          '  let driver;',
          '  ',
          '  beforeAll(async () => {',
          '    console.log(\'Setting up WebDriver...\');',
          '    const options = new chrome.Options();',
          '    options.addArguments(\'--headless\');',
          '    options.addArguments(\'--no-sandbox\');',
          '    options.addArguments(\'--disable-dev-shm-usage\');',
          '    ',
          '    driver = await new Builder()',
          '      .forBrowser(\'chrome\')',
          '      .setChromeOptions(options)',
          '      .build();',
          '    ',
          '    await driver.manage().window().maximize();',
          '    await driver.manage().setTimeouts({ implicit: 10000 });',
          '  });',
          '',
          '  afterAll(async () => {',
          '    console.log(\'Cleaning up WebDriver...\');',
          '    if (driver) {',
          '      await driver.quit();',
          '    }',
          '  });',
          '',
          '  beforeEach(async () => {',
          '    console.log(\'Navigating to login page...\');',
          '    await driver.get(\'https://example.com/login\');',
          '  });',
          '',
          '  afterEach(async () => {',
          '    // Cleanup after each test if needed',
          '  });',
          '',
          '  test(\'should allow user to login successfully\', async () => {',
          '    // Find and fill login form',
          '    await driver.findElement(By.id(\'username\')).sendKeys(\'testuser\');',
          '    await driver.findElement(By.id(\'password\')).sendKeys(\'password123\');',
          '    await driver.findElement(By.id(\'login-btn\')).click();',
          '    ',
          '    // Wait for dashboard to load',
          '    await driver.wait(until.titleContains(\'Dashboard\'), 5000);',
          '    ',
          '    // Jest assertions',
          '    const title = await driver.getTitle();',
          '    expect(title).toContain(\'Dashboard\');',
          '    ',
          '    const welcomeElement = await driver.findElement(By.id(\'welcome\'));',
          '    expect(welcomeElement).toBeTruthy();',
          '    await expect(welcomeElement.isDisplayed()).resolves.toBe(true);',
          '  });',
          '',
          '  test(\'should search for products successfully\', async () => {',
          '    // Navigate to home page',
          '    await driver.get(\'https://example.com\');',
          '    ',
          '    // Search for product',
          '    const searchBox = await driver.findElement(By.id(\'search\'));',
          '    await searchBox.sendKeys(\'laptop\', Key.RETURN);',
          '    ',
          '    // Wait for search results',
          '    await driver.wait(until.urlContains(\'search\'), 5000);',
          '    ',
          '    // Verify search results',
          '    const results = await driver.findElements(By.className(\'product-item\'));',
          '    expect(results.length).toBeGreaterThan(0);',
          '    ',
          '    const currentUrl = await driver.getCurrentUrl();',
          '    expect(currentUrl).toContain(\'search\');',
          '  });',
          '',
          '  // Test with multiple data sets using Jest\'s test.each',
          '  describe(\'Multiple User Login Tests\', () => {',
          '    const testUsers = [',
          '      { username: \'user1\', password: \'pass123\' },',
          '      { username: \'user2\', password: \'pass456\' },',
          '      { username: \'admin\', password: \'admin123\' }',
          '    ];',
          '    ',
          '    test.each(testUsers)(\'should allow $username to login\', async ({ username, password }) => {',
          '      await driver.findElement(By.id(\'username\')).clear();',
          '      await driver.findElement(By.id(\'username\')).sendKeys(username);',
          '      await driver.findElement(By.id(\'password\')).sendKeys(password);',
          '      await driver.findElement(By.id(\'login-btn\')).click();',
          '      ',
          '      await driver.wait(until.titleContains(\'Dashboard\'), 5000);',
          '      ',
          '      const welcomeElement = await driver.findElement(By.id(\'welcome\'));',
          '      expect(welcomeElement).toBeTruthy();',
          '      ',
          '      const welcomeText = await welcomeElement.getText();',
          '      expect(welcomeText.toLowerCase()).toContain(username.toLowerCase());',
          '    });',
          '  });',
          '',
          '  // Skipped test example',
          '  test.skip(\'should process payment (feature under development)\', async () => {',
          '    // Payment processing test',
          '    expect(true).toBe(false); // This will not run',
          '  });',
          '',
          '  // Test that is expected to fail',
          '  test.failing(\'should demonstrate failing test\', async () => {',
          '    // This test is expected to fail',
          '    expect(false).toBe(true);',
          '  });',
          '});'
        ];
      } else {
        return [
          'import { Builder, By, Key, until } from \'selenium-webdriver\';',
          'import { Options } from \'selenium-webdriver/chrome\';',
          '',
          'describe(\'E-commerce Website Tests\', () => {',
          '  let driver: WebDriver;',
          '  ',
          '  beforeAll(async () => {',
          '    console.log(\'Setting up WebDriver...\');',
          '    const options = new Options();',
          '    options.addArguments(\'--headless\');',
          '    options.addArguments(\'--no-sandbox\');',
          '    options.addArguments(\'--disable-dev-shm-usage\');',
          '    ',
          '    driver = await new Builder()',
          '      .forBrowser(\'chrome\')',
          '      .setChromeOptions(options)',
          '      .build();',
          '    ',
          '    await driver.manage().window().maximize();',
          '    await driver.manage().setTimeouts({ implicit: 10000 });',
          '  });',
          '',
          '  test(\'should allow user to login successfully\', async () => {',
          '    // TypeScript implementation with type safety',
          '    await driver.findElement(By.id(\'username\')).sendKeys(\'testuser\');',
          '    await driver.findElement(By.id(\'password\')).sendKeys(\'password123\');',
          '    await driver.findElement(By.id(\'login-btn\')).click();',
          '    ',
          '    await driver.wait(until.titleContains(\'Dashboard\'), 5000);',
          '    ',
          '    const title: string = await driver.getTitle();',
          '    expect(title).toContain(\'Dashboard\');',
          '  });',
          '',
          '  afterAll(async () => {',
          '    console.log(\'Cleaning up WebDriver...\');',
          '    if (driver) {',
          '      await driver.quit();',
          '    }',
          '  });',
          '});'
        ];
      }
    }
  };

  const frameworkCode = getFrameworkCode();

  const getTestIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />;
      case 'failed': return <XSquare className="w-4 h-4 text-red-500 dark:text-red-400" />;
      case 'running': return <RefreshCw className="w-4 h-4 text-blue-500 dark:text-blue-400 animate-spin" />;
      default: return <Circle className="w-4 h-4 text-gray-400 dark:text-gray-500" />;
    }
  };

  const getTestStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950';
      case 'failed': return 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950';
      case 'running': return 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950';
      default: return 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800';
    }
  };

  const frameworkFeatures = [
    { name: 'before/beforeAll', icon: <Settings className="w-4 h-4 text-blue-600 dark:text-blue-400" />, description: 'Setup hooks for test preparation', color: 'blue' },
    { name: 'after/afterAll', icon: <Wrench className="w-4 h-4 text-green-600 dark:text-green-400" />, description: 'Cleanup hooks for resource management', color: 'green' },
    { name: 'describe/context', icon: <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />, description: 'Test suites organization and grouping', color: 'purple' },
    { name: 'it/test', icon: <TestTube className="w-4 h-4 text-orange-600 dark:text-orange-400" />, description: 'Individual test case definitions', color: 'orange' },
    { name: 'test.each/describe.each', icon: <Database className="w-4 h-4 text-pink-600 dark:text-pink-400" />, description: 'Data-driven testing with multiple inputs', color: 'pink' },
    { name: 'skip/only', icon: <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />, description: 'Test execution control and filtering', color: 'red' }
  ];

  const simulateFrameworkExecution = async () => {
    setIsRunning(true);
    setCurrentStep(0);
    setExecutionTime(0);
    setActiveHooks(new Set());
    
    const tests = ['setup', 'login_test', 'search_test', 'data_driven_test', 'cleanup'];
    const initialResults: Record<string, 'pending' | 'running' | 'passed' | 'failed'> = {};
    tests.forEach(test => {
      initialResults[test] = 'pending';
    });
    setTestResults(initialResults);

    // Start timer
    const timer = setInterval(() => {
      setExecutionTime(prev => prev + 0.1);
    }, 100);

    // Simulate test execution
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      setCurrentStep(i);
      setCurrentCodeLine(i * 8 + 10); // Approximate line numbers
      
      // Set running
      setTestResults(prev => ({ ...prev, [test]: 'running' as const }));
      
      // Add hook highlights
      if (test === 'setup') setActiveHooks(prev => new Set(prev).add('before/beforeAll'));
      if (test === 'login_test') setActiveHooks(prev => new Set(prev).add('it/test'));
      if (test === 'search_test') setActiveHooks(prev => new Set(prev).add('describe/context'));
      if (test === 'data_driven_test') setActiveHooks(prev => new Set(prev).add('test.each/describe.each'));
      if (test === 'cleanup') setActiveHooks(prev => new Set(prev).add('after/afterAll'));
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Set result
      const result: 'pending' | 'running' | 'passed' | 'failed' = Math.random() > 0.15 ? 'passed' : 'failed';
      setTestResults(prev => ({ ...prev, [test]: result }));
    }

    clearInterval(timer);
    setIsRunning(false);
    setCurrentCodeLine(-1);
    
    toast({
      title: `${selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} Execution Complete!`,
      description: `All tests executed in ${executionTime.toFixed(1)}s`,
    });
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={selectedFramework === 'mocha' ? Coffee : Smile}
        category="Selenium · Advanced Testing"
        title={`${selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} Integration`}
        description={`Master ${selectedFramework} framework for powerful JavaScript test automation with hooks, assertions, and data-driven testing.`}
        colorTheme={selectedFramework === 'mocha' ? 'orange' : 'blue'}
      />

      {/* Framework Selection */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Choose Your Testing Framework
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Select between Mocha and Jest to see framework-specific implementations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedFramework} onValueChange={(value) => setSelectedFramework(value as 'mocha' | 'jest')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mocha" className="flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                Mocha
              </TabsTrigger>
              <TabsTrigger value="jest" className="flex items-center gap-2">
                <Smile className="w-4 h-4" />
                Jest
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {/* What is Mocha/Jest Section */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            What is {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'}?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Definition
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  <strong>{selectedFramework === 'mocha' ? 'Mocha' : 'Jest'}</strong> is a {selectedFramework === 'mocha' ? 'feature-rich JavaScript test framework' : 'delightful JavaScript testing framework'} 
                  that makes {selectedFramework === 'mocha' ? 'asynchronous testing simple and fun' : 'testing more enjoyable and developer-friendly'}. 
                  It provides powerful testing capabilities for Selenium automation with {selectedFramework === 'mocha' ? 'flexible reporting and rich ecosystem' : 'zero-configuration setup and built-in assertions'}.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Why {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} with Selenium?
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200 leading-relaxed">
                  While Selenium automates browser actions, {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} provides the <strong>testing framework</strong> needed to:
                </p>
                <ul className="text-sm text-green-800 dark:text-green-200 mt-2 space-y-1">
                  <li>• Organize tests with describe/it blocks and nested suites</li>
                  <li>• Manage async operations with hooks and promises</li>
                  <li>• {selectedFramework === 'mocha' ? 'Use any assertion library (Chai, Expect, Should)' : 'Built-in matchers and snapshot testing'}</li>
                  <li>• Generate detailed reports and coverage analysis</li>
                  <li>• Handle test setup and teardown automatically</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  Key Benefits
                </h3>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <span><strong>{selectedFramework === 'mocha' ? 'Flexible & Extensible' : 'All-in-One Solution'}:</strong> {selectedFramework === 'mocha' ? 'Choose your assertion library and reporters' : 'Built-in assertions, mocking, and coverage'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <span><strong>Async Support:</strong> {selectedFramework === 'mocha' ? 'Excellent async/await and promise handling' : 'Native async/await support with proper timing'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <span><strong>{selectedFramework === 'mocha' ? 'Rich Ecosystem' : 'Developer Experience'}:</strong> {selectedFramework === 'mocha' ? 'Hundreds of plugins and integrations' : 'Watch mode, snapshot testing, and great DX'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <span><strong>Data-Driven Testing:</strong> {selectedFramework === 'mocha' ? 'Flexible approaches for parameterized tests' : 'Built-in test.each for data-driven scenarios'}</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  When to Use {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'}?
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
                  {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} is essential when you need to:
                </p>
                <ul className="text-sm text-orange-800 dark:text-orange-200 mt-2 space-y-1">
                  <li>• Test JavaScript/TypeScript applications with Selenium</li>
                  <li>• {selectedFramework === 'mocha' ? 'Have full control over assertion libraries' : 'Need zero-configuration testing setup'}</li>
                  <li>• Run tests in different environments (Node.js, browsers)</li>
                  <li>• Generate professional reports for CI/CD pipelines</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Real-World Example</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Imagine testing a modern web application with complex user flows. {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} 
              lets you organize tests logically, handle async browser operations smoothly, and generate comprehensive reports 
              for your Selenium automation suite.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Test Execution Demo */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-green-600 dark:text-green-400" />
            Live {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} Execution
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Watch {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} execute tests with hooks and data-driven scenarios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Test Status Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {Object.entries({
              setup: { name: 'Setup', icon: <Settings className="w-4 h-4 text-green-600 dark:text-green-400" /> },
              login_test: { name: 'Login Test', icon: <TestTube className="w-4 h-4 text-green-600 dark:text-green-400" /> },
              search_test: { name: 'Search Test', icon: <Target className="w-4 h-4 text-green-600 dark:text-green-400" /> },
              data_driven_test: { name: 'Data Test', icon: <Database className="w-4 h-4 text-green-600 dark:text-green-400" /> },
              cleanup: { name: 'Cleanup', icon: <Wrench className="w-4 h-4 text-green-600 dark:text-green-400" /> }
            }).map(([key, test]) => (
              <div key={key} className={`p-3 rounded-lg border ${getTestStatusColor(testResults[key])}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-900 dark:text-gray-100">{test.name}</span>
                  {getTestIcon(testResults[key])}
                </div>
                <div className="flex items-center gap-1">
                  {test.icon}
                  <span className="text-xs text-gray-600 dark:text-gray-400 capitalize">{testResults[key]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Execution Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Execution Progress</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{executionTime}s</span>
            </div>
            <Progress value={(currentStep / 4) * 100} className="h-2" />
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Step {currentStep + 1} of 5
              </span>
            </div>
          </div>

          {/* Active Hooks */}
          {activeHooks.size > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Active Hooks:</span>
              <div className="flex gap-1">
                {Array.from(activeHooks).map(hook => (
                  <Badge key={hook} variant="secondary" className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                    {hook}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Control Buttons */}
          <div className="flex gap-3">
            <Button 
              onClick={simulateFrameworkExecution}
              disabled={isRunning}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin text-white" />
                  Running Tests...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2 text-white" />
                  Run {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} Suite
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Framework Features Guide */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} Features - The Building Blocks
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Essential features that make {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} powerful for Selenium automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {frameworkFeatures.map((feature) => (
              <div key={feature.name} className="p-4 border rounded-lg hover:shadow-md transition-all duration-200 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-${feature.color}-100 dark:bg-${feature.color}-900 text-${feature.color}-700 dark:text-${feature.color}-300`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-mono text-sm font-semibold mb-1 text-gray-900 dark:text-gray-100">{feature.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{feature.description}</p>
                    <div className="text-xs">
                      <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                        {feature.name.includes('before') || feature.name.includes('after') ? 'Lifecycle' : 
                         feature.name.includes('describe') ? 'Organization' : 
                         feature.name.includes('it') || feature.name.includes('test') ? 'Test Method' : 
                         feature.name.includes('each') ? 'Data Testing' : 'Control'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Alert className="mt-6 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950">
            <Braces className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Hook Execution Order</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} follows a specific execution order: 
              <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded"> beforeAll → beforeEach → test → afterEach → afterAll</code>
              <br />Use these hooks to manage WebDriver lifecycle and test data effectively.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Complete {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} Example - Production Ready
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Full implementation with hooks, assertions, and industry best practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Tabs value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value as 'javascript' | 'typescript')}>
                <TabsList className="bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger value="javascript" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">JavaScript</TabsTrigger>
                  <TabsTrigger value="typescript" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">TypeScript</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(frameworkCode.join('\n'), `${selectedFramework} code`)}
                className="border-gray-300 dark:border-gray-600"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm border border-gray-300 dark:border-gray-700">
                <code>
                  {frameworkCode.map((line, index) => (
                    <div 
                      key={index} 
                      className={`${currentCodeLine === index ? 'bg-blue-900/50 dark:bg-blue-900/30 border-l-2 border-blue-400 -ml-2 pl-2' : ''}`}
                    >
                      <span className="text-gray-500 dark:text-gray-400 select-none">{String(index + 1).padStart(2, ' ')} </span>
                      <span className={line.includes('describe') || line.includes('it') || line.includes('test') ? 'text-blue-600 dark:text-blue-400' : 
                                    line.includes('import') || line.includes('require') ? 'text-blue-600 dark:text-blue-400' :
                                    line.includes('before') || line.includes('after') || line.includes('expect') ? 'text-purple-600 dark:text-purple-400' :
                                    line.includes('//') || line.includes('/*') ? 'text-green-600 dark:text-green-400' : 'text-gray-800 dark:text-gray-200'}>
                        {line}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
              
              {/* Code Annotations */}
              <div className="absolute right-4 top-4 space-y-2">
                {currentStep > 0 && currentStep < 2 && (
                  <Badge variant="secondary" className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    <Settings className="w-3 h-3 mr-1 text-blue-600 dark:text-blue-400" />
                    Setup Phase
                  </Badge>
                )}
                {currentStep >= 2 && currentStep < 4 && (
                  <Badge variant="secondary" className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                    <TestTube className="w-3 h-3 mr-1 text-green-600 dark:text-green-400" />
                    Testing Phase
                  </Badge>
                )}
                {currentStep >= 4 && (
                  <Badge variant="secondary" className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200">
                    <Wrench className="w-3 h-3 mr-1 text-orange-600 dark:text-orange-400" />
                    Cleanup Phase
                  </Badge>
                )}
              </div>
            </div>
            
            {/* Code Explanation */}
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Code Breakdown:</h4>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p><strong className="text-blue-600 dark:text-blue-400">describe/context:</strong> Organizes test suites and groups related tests</p>
                <p><strong className="text-blue-600 dark:text-blue-400">it/test:</strong> Defines individual test cases with clear descriptions</p>
                <p><strong className="text-purple-600 dark:text-purple-400">before/beforeAll:</strong> Sets up WebDriver and test environment</p>
                <p><strong className="text-purple-600 dark:text-purple-400">after/afterAll:</strong> Cleans up resources and closes WebDriver</p>
                <p><strong className="text-purple-600 dark:text-purple-400">beforeEach/afterEach:</strong> Manages per-test setup and cleanup</p>
                <p><strong className="text-blue-600 dark:text-blue-400">expect/assert:</strong> {selectedFramework === 'mocha' ? 'Chai assertions for test validation' : 'Jest matchers for test validation'}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              Advanced Features - Enterprise Ready
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Powerful capabilities for professional test automation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
              <CheckSquare className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Parallel Execution</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Run tests simultaneously across multiple browsers and processes. 
                  {selectedFramework === 'mocha' ? 'Use Mocha parallel mode or external runners' : 'Built-in parallel test execution'}.
                </p>
                <code className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded mt-1 block">
                  {selectedFramework === 'mocha' ? 'mocha --parallel --max-workers 4' : 'jest --maxWorkers=4'}
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <Database className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Data-Driven Testing</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Run tests with multiple data sets using {selectedFramework === 'mocha' ? 'custom helpers or external libraries' : 'built-in test.each functionality'}.
                  Perfect for testing different user scenarios.
                </p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded mt-1 block">
                  {selectedFramework === 'mocha' ? 'test.each(data)(\'test $name\', (params) => {})' : 'test.each(data)(\'test $name\', (params) => {});'}
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
              <Shield className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Mocking & Spies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedFramework === 'mocha' ? 'Integrate with Sinon.js for powerful mocking' : 'Built-in mocking capabilities with Jest mocks'}.
                  Isolate tests and control external dependencies.
                </p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded mt-1 block">
                  {selectedFramework === 'mocha' ? 'sinon.stub(object, "method")' : 'jest.spyOn(object, "method")'}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-600 dark:text-green-400" />
              Reporting & Analysis - Production Insights
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Comprehensive reporting for stakeholders and developers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
              <FileText className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Test Reports</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Generate detailed test reports with {selectedFramework === 'mocha' ? 'custom reporters or Mochawesome' : 'built-in reporters and coverage'}.
                  Perfect for CI/CD integration and stakeholder updates.
                </p>
                <code className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded mt-1 block">
                  {selectedFramework === 'mocha' ? 'mocha --reporter mochawesome' : 'jest --coverage'}
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
              <Monitor className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Coverage Analysis</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedFramework === 'mocha' ? 'Integrate with Istanbul/NYC for coverage' : 'Built-in coverage reporting with Istanbul'}.
                  Track code coverage and identify untested code paths.
                </p>
                <code className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded mt-1 block">
                  {selectedFramework === 'mocha' ? 'nyc mocha' : 'jest --coverage --coverageReporters=html'}
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
              <AlertTriangle className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">CI/CD Integration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Seamless integration with CI/CD pipelines. Generate JUnit XML reports 
                  for Jenkins, GitHub Actions, and other platforms.
                </p>
                <code className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded mt-1 block">
                  {selectedFramework === 'mocha' ? 'mocha --reporter xunit' : 'jest --ci --reporters=default --reporters=jest-junit'}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-World Implementation Guide */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Real-World Implementation Guide
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Step-by-step guide to implement {selectedFramework === 'mocha' ? 'Mocha' : 'Jest'} in your Selenium projects
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Setup</h4>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Install {selectedFramework === 'mocha' ? 'Mocha and Chai' : 'Jest'} and Selenium</li>
                <li>• Configure {selectedFramework === 'mocha' ? 'mocha.opts or package.json scripts' : 'jest.config.js'}</li>
                <li>• Set up test directory structure</li>
                <li>• Configure WebDriver management</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Implementation</h4>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Create page object classes</li>
                <li>• Write test suites with describe/it blocks</li>
                <li>• Implement hooks for setup and teardown</li>
                <li>• Add data-driven testing with test.each</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Execution</h4>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Run from command line or npm scripts</li>
                <li>• Generate HTML and coverage reports</li>
                <li>• Integrate with CI/CD pipelines</li>
                <li>• Analyze test results and metrics</li>
              </ul>
            </div>
          </div>
          
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950">
            <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Start with simple test cases and gradually add complexity. Use hooks effectively for WebDriver management,
              leverage data-driven testing for comprehensive coverage, and always implement proper error handling and reporting.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert className="border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
        <BookOpen className="h-4 w-4 text-green-600 dark:text-green-400" />
        <AlertTitle className="text-green-900 dark:text-green-100">Industry Best Practices</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h5 className="font-semibold mb-2 text-green-900 dark:text-green-100">Test Organization</h5>
              <ul className="text-sm space-y-1">
                <li>• Use descriptive test names (should, when, then)</li>
                <li>• Implement Page Object Model for UI interactions</li>
                <li>• Separate test data from test logic</li>
                <li>• Create utility modules for common operations</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-green-900 dark:text-green-100">Hook Management</h5>
              <ul className="text-sm space-y-1">
                <li>• Use beforeAll/afterAll for expensive setup</li>
                <li>• Use beforeEach/afterEach for test isolation</li>
                <li>• Implement proper error handling in hooks</li>
                <li>• Clean up resources in after hooks</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-green-900 dark:text-green-100">Async Testing</h5>
              <ul className="text-sm space-y-1">
                <li>• Always handle promises properly</li>
                <li>• Use async/await for better readability</li>
                <li>• Set appropriate timeouts for async operations</li>
                <li>• Wait for elements before interactions</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-green-900 dark:text-green-100">Reporting & Maintenance</h5>
              <ul className="text-sm space-y-1">
                <li>• Configure detailed test reports</li>
                <li>• Implement screenshot capture on failures</li>
                <li>• Use coverage analysis for quality metrics</li>
                <li>• Regularly review and refactor test code</li>
              </ul>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

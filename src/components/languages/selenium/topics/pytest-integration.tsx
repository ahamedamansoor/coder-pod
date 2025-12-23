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
  FlaskConical,
  Tag,
  Braces,
  Puzzle
} from 'lucide-react';

export function PytestIntegration() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [testResults, setTestResults] = React.useState<Record<string, 'pending' | 'running' | 'passed' | 'failed'>>({});
  const [executionTime, setExecutionTime] = React.useState(0);
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [activeMarkers, setActiveMarkers] = React.useState<Set<string>>(new Set());

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const getPytestCode = () => {
    if (selectedLanguage === 'python') {
      return [
        'import pytest',
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.chrome.service import Service',
        'from selenium.webdriver.support.ui import WebDriverWait',
        'from selenium.webdriver.support import expected_conditions as EC',
        'import time',
        '',
        '@pytest.fixture(scope="class")',
        'def driver():',
        '    """WebDriver fixture for class-level setup"""',
        '    driver = webdriver.Chrome()',
        '    driver.maximize_window()',
        '    driver.implicitly_wait(10)',
        '    ',
        '    yield driver  # This is where tests run',
        '    ',
        '    driver.quit()',
        '',
        '@pytest.fixture',
        'def login_page(driver):',
        '    """Navigate to login page before test"""',
        '    driver.get("https://example.com/login")',
        '    return driver',
        '',
        '@pytest.mark.smoke',
        '@pytest.mark.order(1)',
        'def test_user_login(driver, login_page):',
        '    """Test user login functionality"""',
        '    driver.find_element(By.ID, "username").send_keys("testuser")',
        '    driver.find_element(By.ID, "password").send_keys("password123")',
        '    driver.find_element(By.ID, "login-btn").click()',
        '    ',
        '    # Wait for dashboard to load',
        '    WebDriverWait(driver, 10).until(',
        '        EC.presence_of_element_located((By.ID, "welcome"))',
        '    )',
        '    ',
        '    assert "Dashboard" in driver.title',
        '    assert driver.find_element(By.ID, "welcome").is_displayed()',
        '',
        '@pytest.mark.regression',
        '@pytest.mark.order(2)',
        'def test_product_search(driver):',
        '    """Test product search functionality"""',
        '    driver.get("https://example.com")',
        '    search_box = driver.find_element(By.ID, "search")',
        '    search_box.send_keys("laptop")',
        '    search_box.submit()',
        '    ',
        '    # Verify search results',
        '    results = driver.find_elements(By.CLASS_NAME, "product-item")',
        '    assert len(results) > 0, "No search results found"',
        '    assert "search" in driver.current_url',
        '',
        '@pytest.mark.parametrize("username,password", [',
        '    ("user1", "pass123"),',
        '    ("user2", "pass456"),',
        '    ("admin", "admin123")',
        '])',
        '@pytest.mark.auth',
        'def test_multiple_user_login(driver, login_page, username, password):',
        '    """Test login with multiple user credentials"""',
        '    driver.find_element(By.ID, "username").send_keys(username)',
        '    driver.find_element(By.ID, "password").send_keys(password)',
        '    driver.find_element(By.ID, "login-btn").click()',
        '    ',
        '    welcome_msg = driver.find_element(By.ID, "welcome")',
        '    assert welcome_msg.is_displayed()',
        '    assert username.lower() in welcome_msg.text.lower()',
        '',
        '@pytest.mark.skip(reason="Payment feature under development")',
        'def test_payment_processing(driver):',
        '    """Test payment gateway integration"""',
        '    pytest.skip("Payment feature not yet implemented")',
        '',
        '@pytest.mark.xfail(reason="Known issue in production")',
        'def test_known_bug_scenario(driver):',
        '    """Test scenario with known failure"""',
        '    # This test is expected to fail due to known bug',
        '    assert False, "This test demonstrates xfail marker"',
        '',
        '@pytest.hookimpl(tryfirst=True, hookwrapper=True)',
        'def pytest_runtest_makereport(item, call):',
        '    """Custom hook for test reporting"""',
        '    outcome = yield',
        '    rep = outcome.get_result()',
        '    ',
        '    if rep.when == "call" and rep.failed:',
        '        # Take screenshot on test failure',
        '        try:',
        '            driver = item.funcargs.get("driver")',
        '            if driver:',
        '                driver.save_screenshot(f"screenshots/{item.name}_failure.png")',
        '        except Exception:',
        '            pass  # Ignore screenshot errors'
      ];
    } else {
      return [
        '// Java equivalent using JUnit (for comparison)',
        'import org.junit.jupiter.api.*;',
        'import org.openqa.selenium.*;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import static org.junit.jupiter.api.Assertions.*;',
        '',
        '@TestMethodOrder(OrderAnnotation.class)',
        'public class SeleniumTests {',
        '    private WebDriver driver;',
        '    ',
        '    @BeforeEach',
        '    public void setUp() {',
        '        driver = new ChromeDriver();',
        '        driver.manage().window().maximize();',
        '        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);',
        '    }',
        '    ',
        '    @Test',
        '    @Order(1)',
        '    @Tag("smoke")',
        '    public void testUserLogin() {',
        '        driver.get("https://example.com/login");',
        '        driver.findElement(By.id("username")).sendKeys("testuser");',
        '        driver.findElement(By.id("password")).sendKeys("password123");',
        '        driver.findElement(By.id("login-btn")).click();',
        '        assertTrue(driver.getTitle().contains("Dashboard"));',
        '    }',
        '    ',
        '    @ParameterizedTest',
        '    @ValueSource(strings = {"user1", "user2", "admin"})',
        '    @Tag("auth")',
        '    public void testMultipleUserLogin(String username) {',
        '        // Implementation similar to pytest version',
        '        assertNotNull(driver.findElement(By.id("welcome")));',
        '    }',
        '    ',
        '    @AfterEach',
        '    public void tearDown() {',
        '        if (driver != null) {',
        '            driver.quit();',
        '        }',
        '    }',
        '}'
      ];
    }
  };

  const pytestCode = getPytestCode();

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

  const pytestFeatures = [
    { name: '@pytest.fixture', icon: <Puzzle className="w-4 h-4 text-blue-600 dark:text-blue-400" />, description: 'Setup and teardown with dependency injection', color: 'blue' },
    { name: '@pytest.mark', icon: <Tag className="w-4 h-4 text-green-600 dark:text-green-400" />, description: 'Categorize and control test execution', color: 'green' },
    { name: '@pytest.parametrize', icon: <Database className="w-4 h-4 text-purple-600 dark:text-purple-400" />, description: 'Run tests with multiple data sets', color: 'purple' },
    { name: '@pytest.skip/xfail', icon: <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />, description: 'Skip or expect test failures', color: 'orange' },
    { name: 'pytest hooks', icon: <Settings className="w-4 h-4 text-red-600 dark:text-red-400" />, description: 'Customize test execution and reporting', color: 'red' },
    { name: 'conftest.py', icon: <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />, description: 'Shared fixtures and configuration', color: 'indigo' }
  ];

  const simulatePytestExecution = async () => {
    setIsRunning(true);
    setCurrentStep(0);
    setExecutionTime(0);
    setActiveMarkers(new Set());
    
    const tests = ['fixture_setup', 'smoke_test', 'regression_test', 'parametrized_test', 'xfail_test', 'cleanup'];
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
      setCurrentCodeLine(i * 6 + 10); // Approximate line numbers
      
      // Set running
      setTestResults(prev => ({ ...prev, [test]: 'running' as const }));
      
      // Add marker highlights
      if (test === 'fixture_setup') setActiveMarkers(prev => new Set(prev).add('@pytest.fixture'));
      if (test === 'smoke_test') setActiveMarkers(prev => new Set(prev).add('@pytest.mark.smoke'));
      if (test === 'regression_test') setActiveMarkers(prev => new Set(prev).add('@pytest.mark.regression'));
      if (test === 'parametrized_test') setActiveMarkers(prev => new Set(prev).add('@pytest.mark.parametrize'));
      if (test === 'xfail_test') setActiveMarkers(prev => new Set(prev).add('@pytest.mark.xfail'));
      
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Set result
      const result: 'pending' | 'running' | 'passed' | 'failed' = test === 'xfail_test' ? 'passed' : Math.random() > 0.15 ? 'passed' : 'failed';
      setTestResults(prev => ({ ...prev, [test]: result }));
    }

    clearInterval(timer);
    setIsRunning(false);
    setCurrentCodeLine(-1);
    
    toast({
      title: "pytest Execution Complete!",
      description: `All tests executed in ${executionTime.toFixed(1)}s`,
    });
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={FlaskConical}
        category="Selenium · Advanced Testing"
        title="pytest Integration"
        description="Master pytest framework for powerful Python test automation with fixtures, markers, and parametrized testing."
        colorTheme="green"
      />

      {/* What is pytest Section */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
            What is pytest?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Definition
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200 leading-relaxed">
                  <strong>pytest</strong> is a mature, full-featured testing framework for Python that makes 
                  it easy to write simple and scalable tests. It provides powerful fixtures, 
                  parameterized testing, and extensive plugin support for Selenium automation.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Why pytest with Selenium?
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  While Selenium automates browser actions, pytest provides the <strong>testing infrastructure</strong> needed to:
                </p>
                <ul className="text-sm text-blue-800 dark:text-blue-200 mt-2 space-y-1">
                  <li>• Manage WebDriver lifecycle with fixtures</li>
                  <li>• Organize tests with markers and categories</li>
                  <li>• Implement data-driven testing with parametrization</li>
                  <li>• Generate detailed HTML reports and coverage</li>
                  <li>• Handle test dependencies and setup/teardown</li>
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
                    <span><strong>Powerful Fixtures:</strong> Dependency injection for test setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <span><strong>Parametrized Testing:</strong> Run tests with multiple data sets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <span><strong>Rich Plugin Ecosystem:</strong> Extensible with hundreds of plugins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <span><strong>Simple Assert Statements:</strong> No need for complex assertion methods</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  When to Use pytest?
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
                  pytest is essential when you need to:
                </p>
                <ul className="text-sm text-orange-800 dark:text-orange-200 mt-2 space-y-1">
                  <li>• Test Python applications with Selenium WebDriver</li>
                  <li>• Implement complex test scenarios with dependencies</li>
                  <li>• Run tests in parallel across different browsers</li>
                  <li>• Generate professional test reports for CI/CD pipelines</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
            <Sparkles className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Real-World Example</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Imagine testing a web application with multiple user roles and browsers. pytest fixtures 
              can manage WebDriver instances, parametrization can test different user credentials, 
              and markers can categorize tests for different execution strategies.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Test Execution Demo */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-green-600 dark:text-green-400" />
            Live pytest Execution
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Watch pytest execute tests with fixtures, markers, and parametrization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Test Status Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {Object.entries({
              fixture_setup: { name: 'Fixture Setup', icon: <Puzzle className="w-4 h-4 text-green-600 dark:text-green-400" /> },
              smoke_test: { name: 'Smoke Test', icon: <Tag className="w-4 h-4 text-green-600 dark:text-green-400" /> },
              regression_test: { name: 'Regression', icon: <Target className="w-4 h-4 text-green-600 dark:text-green-400" /> },
              parametrized_test: { name: 'Param Test', icon: <Database className="w-4 h-4 text-green-600 dark:text-green-400" /> },
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
            <Progress value={(currentStep / 5) * 100} className="h-2" />
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Step {currentStep + 1} of 6
              </span>
            </div>
          </div>

          {/* Active Markers */}
          {activeMarkers.size > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Active Markers:</span>
              <div className="flex gap-1">
                {Array.from(activeMarkers).map(marker => (
                  <Badge key={marker} variant="secondary" className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                    {marker}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Control Buttons */}
          <div className="flex gap-3">
            <Button 
              onClick={simulatePytestExecution}
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
                  Run pytest Suite
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* pytest Features Guide */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            pytest Features - The Building Blocks
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Essential features that make pytest powerful for Selenium automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pytestFeatures.map((feature) => (
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
                        {feature.name.includes('fixture') ? 'Setup' : 
                         feature.name.includes('mark') ? 'Organization' : 
                         feature.name.includes('parametrize') ? 'Data Testing' : 
                         feature.name.includes('skip') ? 'Control' : 
                         feature.name.includes('hook') ? 'Customization' : 'Configuration'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Alert className="mt-6 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950">
            <Braces className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Fixture Scopes</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              pytest fixtures support different scopes: <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">function, class, module, session</code>
              <br />Use appropriate scopes to optimize test performance and resource management.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Complete pytest Example - Production Ready
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Full implementation with fixtures, markers, and industry best practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value as 'python' | 'java')}>
            <div className="flex items-center justify-between mb-4">
              <TabsList className="bg-gray-100 dark:bg-gray-800">
                <TabsTrigger value="python" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Python + pytest</TabsTrigger>
                <TabsTrigger value="java" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Java (Comparison)</TabsTrigger>
              </TabsList>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(pytestCode.join('\n'), 'pytest code')}
                className="border-gray-300 dark:border-gray-600"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
            
            <TabsContent value={selectedLanguage} className="mt-0">
              <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm border border-gray-300 dark:border-gray-700">
                  <code>
                    {pytestCode.map((line, index) => (
                      <div 
                        key={index} 
                        className={`${currentCodeLine === index ? 'bg-blue-900/50 dark:bg-blue-900/30 border-l-2 border-blue-400 -ml-2 pl-2' : ''}`}
                      >
                        <span className="text-gray-500 dark:text-gray-400 select-none">{String(index + 1).padStart(2, ' ')} </span>
                        <span className={line.includes('@pytest') || line.includes('def test_') ? 'text-blue-600 dark:text-blue-400' : 
                                      line.includes('import') ? 'text-blue-600 dark:text-blue-400' :
                                      line.includes('def ') ? 'text-yellow-700 dark:text-yellow-400' :
                                      line.includes('"""') || line.includes('#') ? 'text-green-600 dark:text-green-400' : 'text-gray-800 dark:text-gray-200'}>
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
                      <Puzzle className="w-3 h-3 mr-1 text-blue-600 dark:text-blue-400" />
                      Fixture Setup
                    </Badge>
                  )}
                  {currentStep >= 2 && currentStep < 4 && (
                    <Badge variant="secondary" className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      <TestTube className="w-3 h-3 mr-1 text-green-600 dark:text-green-400" />
                      Test Execution
                    </Badge>
                  )}
                  {currentStep >= 4 && (
                    <Badge variant="secondary" className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200">
                      <Wrench className="w-3 h-3 mr-1 text-orange-600 dark:text-orange-400" />
                      Cleanup & Reporting
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Code Explanation */}
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Code Breakdown:</h4>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p><strong className="text-blue-600 dark:text-blue-400">@pytest.fixture:</strong> Manages WebDriver setup and teardown</p>
                  <p><strong className="text-blue-600 dark:text-blue-400">@pytest.mark.*:</strong> Categorizes tests for selective execution</p>
                  <p><strong className="text-blue-600 dark:text-blue-400">@pytest.mark.parametrize:</strong> Runs tests with multiple data sets</p>
                  <p><strong className="text-blue-600 dark:text-blue-400">@pytest.mark.skip/xfail:</strong> Controls test execution</p>
                  <p><strong className="text-blue-600 dark:text-blue-400">pytest hooks:</strong> Custom reporting and screenshot capture</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* pytest Advanced Features */}
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
                  Dramatically reduces test execution time for large test suites.
                </p>
                <code className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded mt-1 block">
                  pytest --numprocesses=4 -v
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <Database className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Test Data Management</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Manage test data with fixtures, factories, and external data sources. 
                  Perfect for complex data-driven testing scenarios.
                </p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded mt-1 block">
                  @pytest.mark.parametrize("data", load_test_data())
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
              <Shield className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Plugin Ecosystem</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Extend pytest functionality with hundreds of plugins for reporting, 
                  coverage, HTML reports, and Selenium integration.
                </p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded mt-1 block">
                  pytest-html, pytest-cov, pytest-selenium
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
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">HTML Reports</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Generate beautiful HTML reports with test results, screenshots, 
                  and detailed execution logs for comprehensive analysis.
                </p>
                <code className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded mt-1 block">
                  pytest --html=report.html --self-contained-html
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
              <Monitor className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Coverage Analysis</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Measure code coverage and identify untested code paths. 
                  Essential for maintaining high-quality test suites.
                </p>
                <code className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded mt-1 block">
                  pytest --cov=. --cov-report=html
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
                  pytest --junitxml=test-results.xml
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
            Step-by-step guide to implement pytest in your Selenium projects
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
                <li>• Install pytest and Selenium</li>
                <li>• Create pytest.ini configuration</li>
                <li>• Set up conftest.py for shared fixtures</li>
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
                <li>• Write test functions with fixtures</li>
                <li>• Add markers for test categorization</li>
                <li>• Implement parametrized tests</li>
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
                <li>• Run from command line or IDE</li>
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
              Start with simple test functions and gradually add fixtures and markers. Use conftest.py for shared setup,
              leverage parametrization for data-driven testing, and always implement proper cleanup with fixture teardown.
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
                <li>• Use descriptive test function names (test_user_login_success)</li>
                <li>• Implement Page Object Model for UI interactions</li>
                <li>• Separate test data from test logic with fixtures</li>
                <li>• Create utility modules for common operations</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-green-900 dark:text-green-100">Fixture Management</h5>
              <ul className="text-sm space-y-1">
                <li>• Use appropriate fixture scopes (function, class, module)</li>
                <li>• Implement proper setup and teardown in fixtures</li>
                <li>• Use conftest.py for shared fixtures and hooks</li>
                <li>• Chain fixtures for complex setup scenarios</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-green-900 dark:text-green-100">Test Strategy</h5>
              <ul className="text-sm space-y-1">
                <li>• Use markers for test categorization (smoke, regression)</li>
                <li>• Leverage parametrization for data-driven testing</li>
                <li>• Implement parallel execution for faster test runs</li>
                <li>• Use xfail for known issues and skip for temporary problems</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-green-900 dark:text-green-100">Reporting & Maintenance</h5>
              <ul className="text-sm space-y-1">
                <li>• Configure HTML reports with screenshots on failure</li>
                <li>• Implement coverage analysis and reporting</li>
                <li>• Use hooks for custom test reporting and logging</li>
                <li>• Regularly review and refactor test code</li>
              </ul>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

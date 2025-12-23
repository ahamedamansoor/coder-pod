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
  Sparkles
} from 'lucide-react';

export function JunitIntegration() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'java' | 'python'>('java');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [testResults, setTestResults] = React.useState<Record<string, 'pending' | 'running' | 'passed' | 'failed'>>({});
  const [executionTime, setExecutionTime] = React.useState(0);
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [annotations, setAnnotations] = React.useState<Set<string>>(new Set());

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const getJUnitCode = () => {
    if (selectedLanguage === 'java') {
      return [
        'import org.junit.jupiter.api.*;',
        'import org.openqa.selenium.*;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import static org.junit.jupiter.api.Assertions.*;',
        '',
        'public class ECommerceTest {',
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
        '    @DisplayName("User Login Test")',
        '    @Order(1)',
        '    public void testUserLogin() {',
        '        driver.get("https://example.com/login");',
        '        driver.findElement(By.id("username")).sendKeys("testuser");',
        '        driver.findElement(By.id("password")).sendKeys("password123");',
        '        driver.findElement(By.id("login-btn")).click();',
        '        assertTrue(driver.getTitle().contains("Dashboard"));',
        '    }',
        '    ',
        '    @Test',
        '    @DisplayName("Product Search Test")',
        '    @Order(2)',
        '    public void testProductSearch() {',
        '        driver.findElement(By.id("search")).sendKeys("laptop");',
        '        driver.findElement(By.id("search-btn")).click();',
        '        assertTrue(driver.getCurrentUrl().contains("search"));',
        '    }',
        '    ',
        '    @ParameterizedTest',
        '    @ValueSource(strings = {"user1", "user2", "admin"})',
        '    @DisplayName("Multiple User Login Test")',
        '    public void testMultipleUserLogin(String username) {',
        '        driver.get("https://example.com/login");',
        '        driver.findElement(By.id("username")).sendKeys(username);',
        '        driver.findElement(By.id("password")).sendKeys("password");',
        '        driver.findElement(By.id("login-btn")).click();',
        '        assertNotNull(driver.findElement(By.id("welcome")));',
        '    }',
        '    ',
        '    @Test',
        '    @Disabled("Feature under development")',
        '    @DisplayName("Payment Processing Test")',
        '    public void testPaymentProcessing() {',
        '        // Test payment gateway integration',
        '        assertTrue(false, "Payment feature not yet implemented");',
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
    } else {
      return [
        'import pytest',
        'from selenium import webdriver',
        'from selenium.webdriver.common.by import By',
        'from selenium.webdriver.chrome.service import Service',
        'import time',
        '',
        'class TestECommerce:',
        '    @pytest.fixture(autouse=True)',
        '    def setup_teardown(self):',
        '        self.driver = webdriver.Chrome()',
        '        self.driver.maximize_window()',
        '        self.driver.implicitly_wait(10)',
        '        ',
        '        yield  # This is where the test runs',
        '        ',
        '        self.driver.quit()',
        '    ',
        '    @pytest.mark.order(1)',
        '    def test_user_login(self):',
        '        """Test user login functionality"""',
        '        self.driver.get("https://example.com/login")',
        '        self.driver.find_element(By.ID, "username").send_keys("testuser")',
        '        self.driver.find_element(By.ID, "password").send_keys("password123")',
        '        self.driver.find_element(By.ID, "login-btn").click()',
        '        assert "Dashboard" in self.driver.title',
        '    ',
        '    @pytest.mark.order(2)',
        '    def test_product_search(self):',
        '        """Test product search functionality"""',
        '        self.driver.find_element(By.ID, "search").send_keys("laptop")',
        '        self.driver.find_element(By.ID, "search-btn").click()',
        '        assert "search" in self.driver.current_url',
        '    ',
        '    @pytest.mark.parametrize("username", ["user1", "user2", "admin"])',
        '    def test_multiple_user_login(self, username):',
        '        """Test login with multiple users"""',
        '        self.driver.get("https://example.com/login")',
        '        self.driver.find_element(By.ID, "username").send_keys(username)',
        '        self.driver.find_element(By.ID, "password").send_keys("password")',
        '        self.driver.find_element(By.ID, "login-btn").click()',
        '        assert self.driver.find_element(By.ID, "welcome") is not None',
        '    ',
        '    @pytest.mark.skip(reason="Feature under development")',
        '    def test_payment_processing(self):',
        '        """Test payment gateway integration"""',
        '        pytest.skip("Payment feature not yet implemented")',
        '',
        'if __name__ == "__main__":',
        '    pytest.main([__file__, "-v"])'
      ];
    }
  };

  const jUnitCode = getJUnitCode();

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

  const junitAnnotations = [
    { name: '@BeforeEach', icon: <Settings className="w-4 h-4 text-blue-600 dark:text-blue-400" />, description: 'Runs before each test method', color: 'blue' },
    { name: '@AfterEach', icon: <Wrench className="w-4 h-4 text-green-600 dark:text-green-400" />, description: 'Runs after each test method', color: 'green' },
    { name: '@Test', icon: <TestTube className="w-4 h-4 text-purple-600 dark:text-purple-400" />, description: 'Marks a method as test', color: 'purple' },
    { name: '@DisplayName', icon: <FileText className="w-4 h-4 text-orange-600 dark:text-orange-400" />, description: 'Custom test name', color: 'orange' },
    { name: '@ParameterizedTest', icon: <Database className="w-4 h-4 text-pink-600 dark:text-pink-400" />, description: 'Run test with multiple parameters', color: 'pink' },
    { name: '@Disabled', icon: <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />, description: 'Skip test execution', color: 'red' }
  ];

  const simulateJUnitExecution = async () => {
    setIsRunning(true);
    setCurrentStep(0);
    setExecutionTime(0);
    setAnnotations(new Set());
    
    const tests = ['setup', 'loginTest', 'searchTest', 'parameterizedTest', 'disabledTest', 'cleanup'];
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
      setCurrentCodeLine(i * 4 + 8); // Approximate line numbers
      
      // Set running
      setTestResults(prev => ({ ...prev, [test]: 'running' as const }));
      
      // Add annotation highlight
      if (test === 'setup') setAnnotations(prev => new Set(prev).add('@BeforeEach'));
      if (test === 'loginTest') setAnnotations(prev => new Set(prev).add('@Test'));
      if (test === 'searchTest') setAnnotations(prev => new Set(prev).add('@Order'));
      if (test === 'parameterizedTest') setAnnotations(prev => new Set(prev).add('@ParameterizedTest'));
      if (test === 'disabledTest') setAnnotations(prev => new Set(prev).add('@Disabled'));
      if (test === 'cleanup') setAnnotations(prev => new Set(prev).add('@AfterEach'));
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Set result
      const result: 'pending' | 'running' | 'passed' | 'failed' = test === 'disabledTest' ? 'passed' : Math.random() > 0.2 ? 'passed' : 'failed';
      setTestResults(prev => ({ ...prev, [test]: result }));
    }

    clearInterval(timer);
    setIsRunning(false);
    setCurrentCodeLine(-1);
    
    toast({
      title: "JUnit Execution Complete!",
      description: `All tests executed in ${executionTime.toFixed(1)}s`,
    });
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={TestTube}
        category="Selenium · Advanced Testing"
        title="JUnit Integration"
        description="Master JUnit framework for powerful test automation with annotations, assertions, and parameterized testing."
        colorTheme="blue"
      />

      {/* What is JUnit Section */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            What is JUnit?
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
                  <strong>JUnit</strong> is a popular unit testing framework for Java applications. 
                  JUnit 5 (Jupiter) provides modern testing capabilities with powerful annotations, 
                  parameterized tests, and extensibility for Selenium automation.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Why JUnit with Selenium?
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200 leading-relaxed">
                  While Selenium automates browser actions, JUnit provides the <strong>testing structure</strong> needed to:
                </p>
                <ul className="text-sm text-green-800 dark:text-green-200 mt-2 space-y-1">
                  <li>• Organize tests with clear lifecycle management</li>
                  <li>• Generate detailed test reports and metrics</li>
                  <li>• Handle test setup and teardown automatically</li>
                  <li>• Execute tests in parallel for faster results</li>
                  <li>• Implement parameterized testing with multiple data sets</li>
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
                    <span><strong>Modern Annotations:</strong> Clean, declarative test configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <span><strong>Parameterized Tests:</strong> Run tests with multiple data sets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <span><strong>Dynamic Tests:</strong> Generate tests programmatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <span><strong>Extension Model:</strong> Customizable with extensions</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  When to Use JUnit?
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
                  JUnit is essential when you need to:
                </p>
                <ul className="text-sm text-orange-800 dark:text-orange-200 mt-2 space-y-1">
                  <li>• Test Java applications with Selenium WebDriver</li>
                  <li>• Implement data-driven testing strategies</li>
                  <li>• Run tests with different configurations</li>
                  <li>• Generate professional test reports for CI/CD pipelines</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Real-World Example</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Imagine testing an e-commerce website. You need to test login, search, and checkout - 
              each with different user credentials. JUnit 5's parameterized tests let you test multiple scenarios 
              with clean, maintainable code and detailed reporting.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Test Execution Demo */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Live JUnit Execution
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Watch JUnit execute tests in real-time with annotations and lifecycle methods
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Test Status Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {Object.entries({
              setup: { name: '@BeforeEach', icon: <Settings className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
              loginTest: { name: 'Login Test', icon: <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
              searchTest: { name: 'Search Test', icon: <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
              parameterizedTest: { name: 'Param Test', icon: <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
              cleanup: { name: '@AfterEach', icon: <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" /> }
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

          {/* Control Buttons */}
          <div className="flex gap-3">
            <Button 
              onClick={simulateJUnitExecution}
              disabled={isRunning}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin text-white" />
                  Running Tests...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2 text-white" />
                  Run JUnit Suite
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* JUnit Annotations Guide */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            JUnit Annotations - The Building Blocks
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Essential annotations that control test execution flow and behavior
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {junitAnnotations.map((annotation) => (
              <div key={annotation.name} className="p-4 border rounded-lg hover:shadow-md transition-all duration-200 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-${annotation.color}-100 dark:bg-${annotation.color}-900 text-${annotation.color}-700 dark:text-${annotation.color}-300`}>
                    {annotation.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-mono text-sm font-semibold mb-1 text-gray-900 dark:text-gray-100">{annotation.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{annotation.description}</p>
                    <div className="text-xs">
                      <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                        {annotation.name.includes('Before') ? 'Setup' : 
                         annotation.name.includes('After') ? 'Cleanup' : 
                         annotation.name.includes('Test') ? 'Test Method' : 'Configuration'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Alert className="mt-6 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950">
            <Code className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Execution Order</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              JUnit 5 follows a specific execution order: <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">@BeforeEach → @Test → @AfterEach</code>
              <br />For parameterized tests: <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">@BeforeEach → @ParameterizedTest → @AfterEach</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
            Complete JUnit Example - Production Ready
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Full implementation with annotations, assertions, and industry best practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value as 'java' | 'python')}>
            <div className="flex items-center justify-between mb-4">
              <TabsList className="bg-gray-100 dark:bg-gray-800">
                <TabsTrigger value="java" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Java</TabsTrigger>
                <TabsTrigger value="python" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Python + PyTest</TabsTrigger>
              </TabsList>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(jUnitCode.join('\n'), 'JUnit code')}
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
                    {jUnitCode.map((line, index) => (
                      <div 
                        key={index} 
                        className={`${currentCodeLine === index ? 'bg-blue-900/50 dark:bg-blue-900/30 border-l-2 border-blue-400 -ml-2 pl-2' : ''}`}
                      >
                        <span className="text-gray-500 dark:text-gray-400 select-none">{String(index + 1).padStart(2, ' ')} </span>
                        <span className={line.includes('@') ? 'text-blue-600 dark:text-blue-400' : 
                                      line.includes('import') ? 'text-blue-600 dark:text-blue-400' :
                                      line.includes('class') || line.includes('public') || line.includes('private') ? 'text-yellow-700 dark:text-yellow-400' :
                                      line.includes('//') || line.includes('"""') ? 'text-green-600 dark:text-green-400' : 'text-gray-800 dark:text-gray-200'}>
                          {line}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
                
                {/* Code Annotations */}
                <div className="absolute right-4 top-4 space-y-2">
                  {currentStep > 0 && currentStep < 3 && (
                    <Badge variant="secondary" className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      <Settings className="w-3 h-3 mr-1 text-blue-600 dark:text-blue-400" />
                      Setup Phase
                    </Badge>
                  )}
                  {currentStep >= 3 && currentStep < 5 && (
                    <Badge variant="secondary" className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      <TestTube className="w-3 h-3 mr-1 text-green-600 dark:text-green-400" />
                      Testing Phase
                    </Badge>
                  )}
                  {currentStep >= 5 && (
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
                  <p><strong className="text-blue-600 dark:text-blue-400">@BeforeEach:</strong> Sets up WebDriver before each test</p>
                  <p><strong className="text-blue-600 dark:text-blue-400">@Test @DisplayName:</strong> Defines test with custom name</p>
                  <p><strong className="text-blue-600 dark:text-blue-400">@Order:</strong> Controls test execution order</p>
                  <p><strong className="text-blue-600 dark:text-blue-400">@ParameterizedTest:</strong> Runs test with multiple parameters</p>
                  <p><strong className="text-blue-600 dark:text-blue-400">@Disabled:</strong> Skips test execution</p>
                  <p><strong className="text-blue-600 dark:text-blue-400">@AfterEach:</strong> Cleans up resources after each test</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* JUnit Features */}
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
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Parameterized Tests</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Run the same test with multiple data sources. Perfect for testing different user roles,
                  input combinations, or browser configurations.
                </p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded mt-1 block">
                  @ParameterizedTest @ValueSource(strings = &amp;#123;"user1", "user2"&amp;#125;)
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <Database className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Dynamic Tests</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Generate tests programmatically at runtime. Ideal for data-driven testing
                  where test cases are determined dynamically.
                </p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded mt-1 block">
                  @TestFactory Stream&lt;DynamicTest&gt; dynamicTests()
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
              <Shield className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Extension Model</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Extend JUnit functionality with custom extensions for reporting, 
                  dependency injection, and test execution customization.
                </p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded mt-1 block">
                  @ExtendWith(&amp;#123;"SeleniumExtension.class", "ReportExtension.class"&amp;#125;)
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
                  Generate detailed test execution reports with pass/fail statistics,
                  execution time, and comprehensive test metrics.
                </p>
                <code className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded mt-1 block">
                  Maven Surefire Reports → JUnit Platform Reports
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
              <Monitor className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">IDE Integration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full IDE support with test runners, debugging capabilities, and real-time
                  test execution visualization in modern IDEs.
                </p>
                <code className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded mt-1 block">
                  IntelliJ IDEA, Eclipse, VS Code Test Explorer
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
              <AlertTriangle className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Test Analytics</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Advanced test analytics with failure analysis, performance metrics,
                  and trend tracking for continuous improvement.
                </p>
                <code className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded mt-1 block">
                  JaCoCo Coverage, Allure Reports
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
            Step-by-step guide to implement JUnit in your Selenium projects
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
                <li>• Add JUnit 5 dependencies to pom.xml</li>
                <li>• Configure Selenium WebDriver</li>
                <li>• Create base test class</li>
                <li>• Set up test configuration</li>
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
                <li>• Write test methods with @Test</li>
                <li>• Use @BeforeEach for setup</li>
                <li>• Implement parameterized tests</li>
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
                <li>• Run from IDE or Maven/Gradle</li>
                <li>• Generate test reports</li>
                <li>• Integrate with CI/CD pipelines</li>
                <li>• Analyze test results</li>
              </ul>
            </div>
          </div>
          
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950">
            <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Start with simple @Test methods and gradually add complexity. Use @DisplayName for readable test names,
              leverage parameterized tests for data-driven scenarios, and always implement proper cleanup with @AfterEach.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950">
        <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />
        <AlertTitle className="text-purple-900 dark:text-purple-100">Industry Best Practices</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h5 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Test Organization</h5>
              <ul className="text-sm space-y-1">
                <li>• Use descriptive @DisplayName for test clarity</li>
                <li>• Implement Page Object Model for UI interactions</li>
                <li>• Separate test data from test logic</li>
                <li>• Create utility classes for common operations</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Test Management</h5>
              <ul className="text-sm space-y-1">
                <li>• Use @Tag for categorizing tests (smoke, regression)</li>
                <li>• Implement proper setup/teardown with @BeforeEach/@AfterEach</li>
                <li>• Use Assertions API for clear test validation</li>
                <li>• Add meaningful assertion messages</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Advanced Testing</h5>
              <ul className="text-sm space-y-1">
                <li>• Leverage @ParameterizedTest for data-driven testing</li>
                <li>• Use @TestFactory for dynamic test generation</li>
                <li>• Implement custom extensions for enhanced functionality</li>
                <li>• Configure test execution order with @Order</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Reporting & Maintenance</h5>
              <ul className="text-sm space-y-1">
                <li>• Configure Maven Surefire for detailed reports</li>
                <li>• Integrate with Allure for enhanced reporting</li>
                <li>• Implement proper logging throughout tests</li>
                <li>• Regularly review and refactor test code</li>
              </ul>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

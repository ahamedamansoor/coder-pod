'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  TestTube,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Settings,
  FileText,
  Layers,
  Clock,
  Zap,
  AlertCircle,
  Sparkles,
  Target,
  Database,
  Shield,
  GitBranch,
  Users,
  BarChart3,
  Triangle,
  Square,
  Circle,
  Package,
  Wrench,
  Rocket,
  BookOpen,
  Terminal,
  Monitor,
  Timer,
  ListChecks,
  AlertTriangle,
  CheckSquare,
  XSquare
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function TestngIntegration() {
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
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const simulateTestNGExecution = async () => {
    setIsRunning(true);
    setCurrentStep(0);
    setTestResults({
      setup: 'pending',
      loginTest: 'pending',
      searchTest: 'pending',
      checkoutTest: 'pending',
      cleanup: 'pending'
    });
    setExecutionTime(0);
    setCurrentCodeLine(-1);

    const testSequence = [
      { step: 0, delay: 800, test: 'setup', codeLine: 8, time: 0.5 },
      { step: 1, delay: 1200, test: 'setup', codeLine: 12, time: 1.2, status: 'passed' },
      { step: 2, delay: 600, test: 'loginTest', codeLine: 18, time: 1.8 },
      { step: 3, delay: 1500, test: 'loginTest', codeLine: 25, time: 3.3, status: 'passed' },
      { step: 4, delay: 500, test: 'searchTest', codeLine: 31, time: 3.8 },
      { step: 5, delay: 1000, test: 'searchTest', codeLine: 38, time: 4.8, status: 'passed' },
      { step: 6, delay: 700, test: 'checkoutTest', codeLine: 44, time: 5.5 },
      { step: 7, delay: 2000, test: 'checkoutTest', codeLine: 52, time: 7.5, status: 'failed' },
      { step: 8, delay: 400, test: 'cleanup', codeLine: 58, time: 7.9 },
      { step: 9, delay: 600, test: 'cleanup', codeLine: 62, time: 8.5, status: 'passed' }
    ];

    for (const { step, delay, test, codeLine, time, status } of testSequence) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setCurrentCodeLine(codeLine);
      setExecutionTime(time);
      
      if (status) {
        setTestResults(prev => ({ ...prev, [test]: status as 'pending' | 'running' | 'passed' | 'failed' }));
      } else {
        setTestResults(prev => ({ ...prev, [test]: 'running' as 'pending' | 'running' | 'passed' | 'failed' }));
      }
    }

    setIsRunning(false);
  };

  const getTestNGCode = () => {
    if (selectedLanguage === 'java') {
      return [
        'import org.testng.annotations.*;',
        'import org.openqa.selenium.*;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import static org.testng.Assert.*;',
        '',
        'public class ECommerceTest {',
        '    private WebDriver driver;',
        '    ',
        '    @BeforeClass',
        '    public void setUp() {',
        '        driver = new ChromeDriver();',
        '        driver.manage().window().maximize();',
        '    }',
        '    ',
        '    @Test(priority = 1)',
        '    public void testLogin() {',
        '        driver.get("https://example.com/login");',
        '        driver.findElement(By.id("username")).sendKeys("testuser");',
        '        driver.findElement(By.id("password")).sendKeys("password123");',
        '        driver.findElement(By.id("login-btn")).click();',
        '        assertTrue(driver.getTitle().contains("Dashboard"));',
        '    }',
        '    ',
        '    @Test(priority = 2, dependsOnMethods = "testLogin")',
        '    public void testSearch() {',
        '        driver.findElement(By.id("search")).sendKeys("laptop");',
        '        driver.findElement(By.id("search-btn")).click();',
        '        assertTrue(driver.getCurrentUrl().contains("search"));',
        '    }',
        '    ',
        '    @Test(priority = 3, enabled = false) // Disabled test',
        '    public void testCheckout() {',
        '        driver.findElement(By.id("cart")).click();',
        '        driver.findElement(By.id("checkout")).click();',
        '        // This test would fail in demo',
        '    }',
        '    ',
        '    @AfterClass',
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
        'import unittest',
        '',
        'class TestECommerce(unittest.TestCase):',
        '    ',
        '    @classmethod',
        '    def setUpClass(cls):',
        '        cls.driver = webdriver.Chrome()',
        '        cls.driver.maximize_window()',
        '    ',
        '    @pytest.mark.priority(1)',
        '    def test_login(self):',
        '        self.driver.get("https://example.com/login")',
        '        self.driver.find_element(By.ID, "username").send_keys("testuser")',
        '        self.driver.find_element(By.ID, "password").send_keys("password123")',
        '        self.driver.find_element(By.ID, "login-btn").click()',
        '        self.assertIn("Dashboard", self.driver.title)',
        '    ',
        '    @pytest.mark.priority(2)',
        '    @pytest.mark.dependency(depends=["test_login"])',
        '    def test_search(self):',
        '        self.driver.find_element(By.ID, "search").send_keys("laptop")',
        '        self.driver.find_element(By.ID, "search-btn").click()',
        '        self.assertIn("search", self.driver.current_url)',
        '    ',
        '    @pytest.mark.skip("Demo skip")',
        '    def test_checkout(self):',
        '        self.driver.find_element(By.ID, "cart").click()',
        '        self.driver.find_element(By.ID, "checkout").click()',
        '    ',
        '    @classmethod',
        '    def tearDownClass(cls):',
        '        if hasattr(cls, "driver"):',
        '            cls.driver.quit()',
        '',
        'if __name__ == "__main__":',
        '    pytest.main([__file__])'
      ];
    }
  };

  const testNGCode = getTestNGCode();

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

  const testAnnotations = [
    { name: '@BeforeClass', icon: <Settings className="w-4 h-4 text-blue-600 dark:text-blue-400" />, description: 'Runs once before all tests', color: 'blue' },
    { name: '@AfterClass', icon: <Wrench className="w-4 h-4 text-green-600 dark:text-green-400" />, description: 'Runs once after all tests', color: 'green' },
    { name: '@Test', icon: <TestTube className="w-4 h-4 text-purple-600 dark:text-purple-400" />, description: 'Marks a method as test', color: 'purple' },
    { name: '@Parameters', icon: <Database className="w-4 h-4 text-orange-600 dark:text-orange-400" />, description: 'Pass parameters to tests', color: 'orange' },
    { name: '@DataProvider', icon: <Package className="w-4 h-4 text-pink-600 dark:text-pink-400" />, description: 'Supply test data', color: 'pink' },
    { name: '@Listeners', icon: <Monitor className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />, description: 'Add test listeners', color: 'indigo' }
  ];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={TestTube}
        category="Selenium · Advanced Testing"
        title="TestNG Integration"
        description="Master TestNG framework for powerful test automation with annotations, assertions, and parallel execution."
        colorTheme="purple"
        badges={[
          { label: 'Framework', variant: 'default' },
          { label: 'Annotations', variant: 'secondary' },
          { label: 'Assertions', variant: 'outline' }
        ]}
      />

      {/* What is TestNG Section */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            What is TestNG?
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
                  <strong>TestNG</strong> (Test Next Generation) is a powerful testing framework inspired by JUnit and NUnit. 
                  It's designed to simplify a broad range of testing needs, from unit testing to integration testing.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Why TestNG with Selenium?
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  While Selenium automates browser actions, TestNG provides the <strong>testing structure</strong> needed to:
                </p>
                <ul className="text-sm text-blue-800 dark:text-blue-200 mt-2 space-y-1">
                  <li>• Organize tests into logical groups</li>
                  <li>• Generate detailed HTML reports</li>
                  <li>• Handle test dependencies and priorities</li>
                  <li>• Execute tests in parallel</li>
                  <li>• Manage test data with data providers</li>
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
                    <span><strong>Annotations:</strong> Clean, declarative test configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span><strong>Parallel Execution:</strong> Run multiple tests simultaneously</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span><strong>Data-Driven Testing:</strong> Test with multiple data sets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span><strong>Flexible Configuration:</strong> XML-based test configuration</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  When to Use TestNG?
                </h3>
                <p className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
                  TestNG is essential when you need to:
                </p>
                <ul className="text-sm text-orange-800 dark:text-orange-200 mt-2 space-y-1">
                  <li>• Test complex web applications with multiple scenarios</li>
                  <li>• Run regression tests across different browsers</li>
                  <li>• Implement data-driven testing strategies</li>
                  <li>• Generate professional test reports for stakeholders</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950">
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Real-World Example</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Imagine testing an e-commerce website. You need to test login, search, add to cart, and checkout - 
              each depending on the previous step. TestNG lets you define these dependencies, run tests in parallel 
              across different browsers, and generate a comprehensive report showing exactly what passed or failed.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Test Execution Demo */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Live Test Execution
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Watch TestNG execute tests in real-time with annotations and lifecycle methods
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Test Status Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {Object.entries({
              setup: { name: '@BeforeClass', icon: <Settings className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
              loginTest: { name: 'Login Test', icon: <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
              searchTest: { name: 'Search Test', icon: <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
              checkoutTest: { name: 'Checkout Test', icon: <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
              cleanup: { name: '@AfterClass', icon: <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" /> }
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
            <Progress value={(currentStep / 9) * 100} className="h-2" />
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Step {currentStep + 1} of 10
              </span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex gap-3">
            <Button 
              onClick={simulateTestNGExecution}
              disabled={isRunning}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin text-white" />
                  Running Tests...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2 text-white" />
                  Run TestNG Suite
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* TestNG Annotations Guide */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            TestNG Annotations - The Building Blocks
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Essential annotations that control test execution flow and behavior
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testAnnotations.map((annotation) => (
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
          
          <Alert className="mt-6 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
            <Code className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Execution Order</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              TestNG follows a specific execution order: <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">@BeforeSuite → @BeforeTest → @BeforeClass → @BeforeMethod → @Test → @AfterMethod → @AfterClass → @AfterTest → @AfterSuite</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
            Complete TestNG Example - Production Ready
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
                onClick={() => copyToClipboard(testNGCode.join('\n'), 'TestNG code')}
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
                    {testNGCode.map((line, index) => (
                      <div 
                        key={index} 
                        className={`${currentCodeLine === index ? 'bg-blue-900/50 dark:bg-blue-900/30 border-l-2 border-blue-400 -ml-2 pl-2' : ''}`}
                      >
                        <span className="text-gray-500 dark:text-gray-400 select-none">{String(index + 1).padStart(2, ' ')} </span>
                        <span className={line.includes('@') ? 'text-purple-600 dark:text-purple-400' : 
                                      line.includes('import') ? 'text-blue-600 dark:text-blue-400' :
                                      line.includes('class') || line.includes('public') || line.includes('private') ? 'text-yellow-700 dark:text-yellow-400' :
                                      line.includes('//') ? 'text-green-600 dark:text-green-400' : 'text-gray-800 dark:text-gray-200'}>
                          {line}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
                
                {/* Code Annotations */}
                <div className="absolute right-4 top-4 space-y-2">
                  {currentStep > 0 && currentStep < 4 && (
                    <Badge variant="secondary" className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      <Settings className="w-3 h-3 mr-1 text-blue-600 dark:text-blue-400" />
                      Setup Phase
                    </Badge>
                  )}
                  {currentStep >= 4 && currentStep < 8 && (
                    <Badge variant="secondary" className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      <TestTube className="w-3 h-3 mr-1 text-green-600 dark:text-green-400" />
                      Testing Phase
                    </Badge>
                  )}
                  {currentStep >= 8 && (
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
                  <p><strong className="text-purple-600 dark:text-purple-400">@BeforeClass:</strong> Initializes WebDriver once for all tests</p>
                  <p><strong className="text-purple-600 dark:text-purple-400">@Test(priority = 1):</strong> Login test runs first</p>
                  <p><strong className="text-purple-600 dark:text-purple-400">@Test(priority = 2, dependsOnMethods):</strong> Search test depends on login success</p>
                  <p><strong className="text-purple-600 dark:text-purple-400">@Test(enabled = false):</strong> Disabled test (won't run)</p>
                  <p><strong className="text-purple-600 dark:text-purple-400">@AfterClass:</strong> Cleans up resources after all tests</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* TestNG Features */}
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
                  Run tests simultaneously across multiple browsers, environments, and data sets. 
                  Reduces execution time from hours to minutes.
                </p>
                <code className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded mt-1 block">
                  @Test(threadPoolSize = 3, invocationCount = 5)
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <Database className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Data Providers</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Drive tests with external data sources (Excel, CSV, Database). 
                  One test method, multiple test scenarios.
                </p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded mt-1 block">
                  @DataProvider(name = "loginData")
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
              <Shield className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Test Dependencies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Control test execution order and handle failures gracefully. 
                  Skip dependent tests when prerequisites fail.
                </p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded mt-1 block">
                  @Test(dependsOnMethods = "loginTest")
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
                  Generate detailed test execution reports with pass/fail statistics, 
                  execution time, and error screenshots.
                </p>
                <code className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded mt-1 block">
                  testng-results.html → emailable-report.html
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
              <Monitor className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Test Listeners</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Monitor and customize test execution flow. Capture screenshots on failure, 
                  send notifications, and integrate with CI/CD pipelines.
                </p>
                <code className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded mt-1 block">
                  @Listeners(&#123;TestListener.class, ReportListener.class&#125;)
                </code>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800">
              <AlertTriangle className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Failure Analysis</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Detailed error reporting with stack traces, screenshots, and 
                  step-by-step execution logs for debugging.
                </p>
                <code className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded mt-1 block">
                  @AfterMethod(alwaysRun = true)
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
            Step-by-step guide to implement TestNG in your Selenium projects
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
                <li>• Add TestNG dependency to pom.xml</li>
                <li>• Configure testng.xml file</li>
                <li>• Create base test class</li>
                <li>• Set up WebDriver factory</li>
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
                <li>• Use @BeforeClass for setup</li>
                <li>• Implement assertions</li>
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
                <li>• Run from IDE or command line</li>
                <li>• Generate HTML reports</li>
                <li>• Integrate with Jenkins/CI</li>
                <li>• Analyze results</li>
              </ul>
            </div>
          </div>
          
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950">
            <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Start with simple tests and gradually add complexity. Use Page Object Model pattern for maintainable code, 
              and always implement proper exception handling and logging for production-grade test suites.
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
              <h5 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Code Organization</h5>
              <ul className="text-sm space-y-1">
                <li>• Use descriptive test method names (testUserLoginWithValidCredentials)</li>
                <li>• Implement Page Object Model for UI interactions</li>
                <li>• Separate test data from test logic</li>
                <li>• Create utility classes for common operations</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Test Management</h5>
              <ul className="text-sm space-y-1">
                <li>• Group related tests using @Test(groups = &amp;#123;"smoke", "regression"&amp;#125;)</li>
                <li>• Implement proper setup and teardown methods</li>
                <li>• Use assertions for clear test validation</li>
                <li>• Add meaningful assertions with error messages</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Execution Strategy</h5>
              <ul className="text-sm space-y-1">
                <li>• Leverage parallel execution for faster test runs</li>
                <li>• Use data providers for parameterized testing</li>
                <li>• Implement retry mechanisms for flaky tests</li>
                <li>• Configure test priorities and dependencies</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Reporting & Maintenance</h5>
              <ul className="text-sm space-y-1">
                <li>• Configure custom listeners for enhanced reporting</li>
                <li>• Capture screenshots on test failures</li>
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

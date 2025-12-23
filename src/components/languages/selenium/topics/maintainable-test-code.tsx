'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Layers,
  CheckCircle,
  AlertCircle,
  Code,
  Zap,
  BookOpen,
  ArrowRight,
  Star,
  FileText,
  Package,
  GitBranch,
  RefreshCw,
  Settings,
  Wrench,
  Triangle,
  Square,
  Circle,
  Hexagon
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function MaintainableTestCodeComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'maintainable-test-code',
    title: 'Maintainable Test Code',
    explanation: 'Writing clean, readable, and maintainable test code',
    category: '20. Best Practices'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Wrench}
        category="Selenium · Test Architecture"
        title="Maintainable Test Code"
        description="Master the art of writing clean, readable, and maintainable Selenium tests that evolve with your application"
        colorTheme="green"
        badges={[
          { label: 'Code Quality', variant: 'success' },
          { label: 'Best Practices', variant: 'info' },
          { label: 'Long-term Success', variant: 'secondary' },
        ]}
      />

      {/* Section 1: What is Maintainable Test Code? */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-green-500/10 dark:bg-green-500/20 rounded-xl">
              <Wrench className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-600 dark:text-green-400">
                Understanding Maintainable Test Code
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Writing tests that are easy to understand, modify, and extend over time
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Maintainable test code is <span className="font-bold text-green-600 dark:text-green-400">clean, readable, and adaptable</span> automation that:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">New team members can understand quickly</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Changes in the application require minimal test updates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Tests can be easily extended with new scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Debugging and troubleshooting are straightforward</span>
              </li>
            </ul>
          </div>

          {/* Maintainability Analogy */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Maintainability Analogy</h4>
                <p className="text-blue-800 dark:text-blue-200">
                  Think of maintainable test code like <span className="font-semibold">well-organized technical documentation</span>. 
                  Just as good documentation has clear structure, consistent formatting, and logical organization, 
                  maintainable tests have clear naming, consistent patterns, and logical structure that make them 
                  easy to read, understand, and modify.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Principles of Maintainable Test Code */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Settings className="w-7 h-7" />
            Principles of Maintainable Test Code
          </CardTitle>
          <CardDescription className="text-base">
            Core principles for writing tests that stand the test of time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Readability */}
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg">
                  <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100">Readability</h4>
              </div>
              <p className="text-sm text-emerald-800 dark:text-emerald-200 mb-3">
                Code should be self-documenting and easy to understand
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Clear naming conventions</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Meaningful comments</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Logical structure</span>
                </div>
              </div>
            </div>

            {/* Modularity */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Modularity</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Break down complex tests into reusable components
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span>Single responsibility</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span>Reusable utilities</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span>Component separation</span>
                </div>
              </div>
            </div>

            {/* Consistency */}
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <GitBranch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">Consistency</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Follow established patterns and conventions
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>Standard patterns</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>Uniform formatting</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>Team conventions</span>
                </div>
              </div>
            </div>

            {/* Extensibility */}
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-bold text-orange-900 dark:text-orange-100">Extensibility</h4>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                Design for future growth and changes
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-orange-600" />
                  <span>Flexible architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-orange-600" />
                  <span>Easy to extend</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-orange-600" />
                  <span>Future-proof design</span>
                </div>
              </div>
            </div>

            {/* Testability */}
            <div className="p-5 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-rose-100 dark:bg-rose-900/40 rounded-lg">
                  <Zap className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                </div>
                <h4 className="font-bold text-rose-900 dark:text-rose-100">Testability</h4>
              </div>
              <p className="text-sm text-rose-800 dark:text-rose-200 mb-3">
                Easy to debug and troubleshoot when issues arise
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-rose-600" />
                  <span>Clear error messages</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-rose-600" />
                  <span>Debugging hooks</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-rose-600" />
                  <span>Logging integration</span>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="p-5 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/20 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-900/40 rounded-lg">
                  <RefreshCw className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Performance</h4>
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-200 mb-3">
                Efficient execution without unnecessary delays
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-slate-600" />
                  <span>Optimized locators</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-slate-600" />
                  <span>Smart waits</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-slate-600" />
                  <span>Parallel execution</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Code Organization Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Layers className="w-7 h-7" />
            Code Organization Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Structuring your test code for maximum maintainability
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Organization Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Page Object Model */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                  <Layers className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-green-900 dark:text-green-100">Page Object Model</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Separate page interactions from test logic
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Structure</h5>
                <pre className="text-xs font-mono text-green-800 dark:text-green-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class LoginPage {
  private WebElement usernameField;
  private WebElement passwordField;
  
  public void login(String user, String pass) {
    usernameField.sendKeys(user);
    passwordField.sendKeys(pass);
    loginButton.click();
  }
}`}
                </pre>
              </div>
            </div>

            {/* Test Base Class */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Test Base Class</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Common setup and teardown logic
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Benefits</h5>
                <pre className="text-xs font-mono text-blue-800 dark:text-blue-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public abstract class BaseTest {
  protected WebDriver driver;
  
  @BeforeEach
  void setUp() {
    driver = createDriver();
    login();
  }
  
  @AfterEach
  void tearDown() {
    driver.quit();
  }
}`}
                </pre>
              </div>
            </div>

            {/* Utility Classes */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <Wrench className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">Utility Classes</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Reusable helper methods and functions
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Examples</h5>
                <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class TestUtils {
  public static String generateEmail() {
    return "test_" + UUID.randomUUID() + "@test.com";
  }
  
  public static void waitForElement(WebElement element) {
    new WebDriverWait(driver, 10)
      .until(ExpectedConditions.visibilityOf(element));
  }
}`}
                </pre>
              </div>
            </div>

            {/* Configuration Management */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                  <Settings className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-bold text-orange-900 dark:text-orange-100">Configuration Management</h4>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">
                Externalize test configuration and data
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Structure</h5>
                <pre className="text-xs font-mono text-orange-800 dark:text-orange-200 overflow-x-auto whitespace-pre-wrap break-words">
{`config/
  ├── test.properties
  ├── test-data.json
  └── environments/
      ├── dev.properties
      ├── staging.properties
      └── prod.properties`}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Naming Conventions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <FileText className="w-7 h-7" />
            Naming Conventions & Standards
          </CardTitle>
          <CardDescription className="text-base">
            Consistent naming for better code readability and maintainability
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Naming Standards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Test Method Names */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                  <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-green-900 dark:text-green-100">Test Method Names</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Clear, descriptive test method naming
              </p>
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-green-300 dark:border-green-600">
                  <div className="font-semibold text-green-700 dark:text-green-300 mb-1">Good Examples</div>
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-green-600">✓ testUserLoginWithValidCredentials()</div>
                    <div className="text-green-600">✓ testPasswordResetFlow()</div>
                    <div className="text-green-600">✓ testSearchFunctionalityWithFilters()</div>
                  </div>
                </div>
                <div className="bg-rose-50 dark:bg-rose-950/20 rounded-lg p-3 border border-rose-300 dark:border-rose-600">
                  <div className="font-semibold text-rose-700 dark:text-rose-300 mb-1">Avoid These</div>
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-rose-600">✗ test1()</div>
                    <div className="text-rose-600">✗ loginTest()</div>
                    <div className="text-rose-600">✗ testMethod()</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Variable Names */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Variable Names</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Meaningful and descriptive variable naming
              </p>
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-blue-300 dark:border-blue-600">
                  <div className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Good Examples</div>
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-blue-600">✓ loginButton</div>
                    <div className="text-blue-600">✓ userEmailAddress</div>
                    <div className="text-blue-600">✓ expectedErrorMessage</div>
                  </div>
                </div>
                <div className="bg-rose-50 dark:bg-rose-950/20 rounded-lg p-3 border border-rose-300 dark:border-rose-600">
                  <div className="font-semibold text-rose-700 dark:text-rose-300 mb-1">Avoid These</div>
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-rose-600">✗ btn1</div>
                    <div className="text-rose-600">✗ email</div>
                    <div className="text-rose-600">✗ msg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* File Structure */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Recommended File Structure</h5>
            <pre className="text-sm font-mono text-slate-800 dark:text-slate-200">
{`src/
├── main/
│   └── java/
│       └── com/example/pages/
│           ├── BasePage.java
│           ├── LoginPage.java
│           └── DashboardPage.java
├── test/
│   ├── java/
│   │   └── com/example/tests/
│   │       ├── BaseTest.java
│   │       ├── LoginTest.java
│   │       └── DashboardTest.java
│   │   └── com/example/utils/
│   │       ├── TestUtils.java
│   │       └── ConfigReader.java
│   └── resources/
│       ├── test.properties
│       └── test-data/`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Star className="w-7 h-7" />
            Maintainability Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Best Practices ✅
            </h4>
            <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Use descriptive test and method names</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Follow consistent code formatting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Extract common functionality into utilities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Write meaningful comments when necessary</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Use Page Object Model consistently</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Code Smells ❌
            </h4>
            <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avoid duplicate code (DRY principle)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Don't write overly long test methods</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avoid hard-coded test data</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Don't mix test logic with page interactions</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avoid complex conditional logic in tests</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 6: Code Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Code className="w-7 h-7" />
            Maintainable Test Example
          </CardTitle>
          <CardDescription className="text-base">
            Complete example showing maintainable test structure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
            <div className="mb-4">
              <h5 className="text-green-400 font-semibold">Well-Structured Test</h5>
            </div>
            <pre className="text-sm text-slate-300 overflow-x-auto whitespace-pre-wrap break-words">
              <code>{`public class UserLoginTest extends BaseTest {
    
    @Test
    public void testUserLoginWithValidCredentials() {
        // Arrange: Prepare test data
        String validEmail = TestDataGenerator.generateValidEmail();
        String validPassword = TestDataGenerator.generateValidPassword();
        
        // Act: Perform login action
        loginPage.navigateToLoginPage();
        loginPage.enterCredentials(validEmail, validPassword);
        loginPage.clickLoginButton();
        
        // Assert: Verify successful login
        assertTrue("User should be redirected to dashboard", 
                  dashboardPage.isDisplayed());
        assertEquals("Welcome message should show user email", 
                    validEmail, dashboardPage.getUserEmail());
    }
    
    @Test
    public void testUserLoginWithInvalidPassword() {
        // Arrange: Prepare test data with invalid password
        String validEmail = TestDataGenerator.generateValidEmail();
        String invalidPassword = "WrongPassword123!";
        
        // Act: Attempt login with invalid credentials
        loginPage.navigateToLoginPage();
        loginPage.enterCredentials(validEmail, invalidPassword);
        loginPage.clickLoginButton();
        
        // Assert: Verify error message
        assertTrue("Error message should be displayed", 
                  loginPage.isErrorMessageDisplayed());
        assertEquals("Should show invalid credentials error", 
                  "Invalid email or password", 
                  loginPage.getErrorMessage());
    }
}`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 7: Key Takeaways */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
        <Wrench className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Key Takeaways</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          <ul className="mt-2 space-y-1">
            <li>• Maintainable code is readable, modular, and consistent</li>
            <li>• Use Page Object Model to separate concerns</li>
            <li>• Follow consistent naming conventions and file structure</li>
            <li>• Extract common functionality into reusable utilities</li>
            <li>• Design tests to be easy to understand and modify</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Topic Navigation */}
      <TopicNavigation 
        currentTopic={currentTopic}
        language={language}
      />
    </div>
  );
}

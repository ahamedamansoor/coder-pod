'use client';

import React, { useState } from 'react';
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
  AlertTriangle,
  Shield,
  Target,
  Zap,
  Layers,
  Settings,
  Wrench,
  Puzzle,
  FolderOpen,
  Users,
  Monitor,
  Database,
  GitBranch,
  Box,
  Building,
  Grid3x3,
  Eye,
  Lock,
  Unlock,
  Rocket,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  FileText,
  Search,
  Navigation,
  Clock,
  Cpu,
  HardDrive,
  Activity,
  Terminal,
  Bug,
  RefreshCw,
  ArrowRight,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export function POMBestPractices() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<'design' | 'implementation' | 'maintenance' | 'testing'>('design');
  const [expandedPractice, setExpandedPractice] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const bestPractices = {
    design: [
      {
        id: 'single-responsibility',
        title: 'Single Responsibility Principle',
        description: 'Each page object should represent only one page or major component',
        icon: <Layers className="w-5 h-5" />,
        priority: 'critical',
        category: 'Architecture',
        examples: [
          'LoginPage handles only authentication',
          'DashboardPage handles only main interface',
          'SettingsPage handles only user preferences'
        ],
        benefits: [
          'Easier to maintain and modify',
          'Clear separation of concerns',
          'Better test organization',
          'Reduced coupling between pages'
        ],
        antiPattern: 'Creating a single page object that handles multiple unrelated pages',
        codeExample: `// ✅ GOOD - Single responsibility
class LoginPage {
  // Only login-related elements and methods
  login(username, password) { /* ... */ }
  getErrorMessage() { /* ... */ }
}

// ❌ BAD - Multiple responsibilities
class AuthPage {
  login(username, password) { /* ... */ }
  register(userData) { /* ... */ }
  resetPassword(email) { /* ... */ }
  viewProfile() { /* ... */ }
}`
      },
      {
        id: 'meaningful-methods',
        title: 'Business-Oriented Method Names',
        description: 'Use method names that describe user actions, not technical implementation',
        icon: <Target className="w-5 h-5" />,
        priority: 'critical',
        category: 'Naming',
        examples: [
          'login() instead of clickLoginButton()',
          'searchProduct(query) instead of typeInSearchBox()',
          'navigateToDashboard() instead of clickDashboardLink()'
        ],
        benefits: [
          'Tests become more readable',
          'Focus on business logic',
          'Easier for non-technical stakeholders',
          'Better documentation'
        ],
        antiPattern: 'Using technical method names that describe implementation details',
        codeExample: `// ✅ GOOD - Business-oriented
class LoginPage {
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickSubmit();
    return new DashboardPage();
  }
}

// ❌ BAD - Technical implementation
class LoginPage {
  clickUsernameField() { /* ... */ }
  typeUsername(username) { /* ... */ }
  clickPasswordField() { /* ... */ }
  typePassword(password) { /* ... */ }
  clickSubmitButton() { /* ... */ }
}`
      },
      {
        id: 'page-returns',
        title: 'Return Page Objects for Navigation',
        description: 'Methods that navigate to other pages should return the corresponding page object',
        icon: <Navigation className="w-5 h-5" />,
        priority: 'high',
        category: 'Navigation',
        examples: [
          'login() returns DashboardPage',
          'clickProfile() returns ProfilePage',
          'logout() returns LoginPage'
        ],
        benefits: [
          'Fluent interface for tests',
          'Type safety in navigation',
          'Clear test flow',
          'Compile-time validation'
        ],
        antiPattern: 'Returning void or null instead of the next page object',
        codeExample: `// ✅ GOOD - Returns page object
class LoginPage {
  login(username, password) {
    // Login logic
    return new DashboardPage(driver);
  }
}

// Usage in test
const dashboard = loginPage.login("user", "pass");
dashboard.verifyWelcomeMessage();

// ❌ BAD - Returns void
class LoginPage {
  login(username, password) {
    // Login logic but returns nothing
  }
}

// Usage in test
loginPage.login("user", "pass");
const dashboard = new DashboardPage(driver); // Manual creation`
      }
    ],
    implementation: [
      {
        id: 'locator-strategies',
        title: 'Robust Locator Strategies',
        description: 'Choose reliable locators that are less likely to break with UI changes',
        icon: <Search className="w-5 h-5" />,
        priority: 'critical',
        category: 'Locators',
        examples: [
          'ID locators for unique elements',
          'CSS selectors for styling hooks',
          'XPath for complex queries',
          'Data attributes for test-specific elements'
        ],
        benefits: [
          'Reduced test failures',
          'Faster test execution',
          'Better maintainability',
          'Cross-browser compatibility'
        ],
        antiPattern: 'Using brittle locators like XPath with absolute paths',
        codeExample: `// ✅ GOOD - Robust locators
class LoginPage {
  USERNAME_INPUT = By.id("username");
  PASSWORD_INPUT = By.id("password");
  LOGIN_BUTTON = By.cssSelector("button[type='submit']");
  ERROR_MESSAGE = By.cssSelector("[data-test='error-message']");
}

// ❌ BAD - Brittle locators
class LoginPage {
  USERNAME_INPUT = By.xpath("/html/body/div[1]/form/input[1]");
  PASSWORD_INPUT = By.xpath("/html/body/div[1]/form/input[2]");
  LOGIN_BUTTON = By.xpath("/html/body/div[1]/form/button");
  ERROR_MESSAGE = By.xpath("//*[contains(text(), 'Error')]");
}`
      },
      {
        id: 'wait-strategies',
        title: 'Explicit Wait Strategies',
        description: 'Use explicit waits instead of thread sleeps for reliable synchronization',
        icon: <Clock className="w-5 h-5" />,
        priority: 'critical',
        category: 'Timing',
        examples: [
          'Wait for element visibility',
          'Wait for element clickability',
          'Wait for text presence',
          'Custom wait conditions'
        ],
        benefits: [
          'Reliable test execution',
          'Faster failure detection',
          'Better performance',
          'Reduced flakiness'
        ],
        antiPattern: 'Using Thread.sleep() for synchronization',
        codeExample: `// ✅ GOOD - Explicit waits
class LoginPage {
  login(username, password) {
    this.wait.until(EC.visibilityOf(this.usernameInput));
    this.usernameInput.sendKeys(username);
    
    this.wait.until(EC.visibilityOf(this.passwordInput));
    this.passwordInput.sendKeys(password);
    
    this.wait.until(EC.elementToBeClickable(this.loginButton));
    this.loginButton.click();
    
    return new DashboardPage(driver);
  }
}

// ❌ BAD - Thread.sleep
class LoginPage {
  login(username, password) {
    this.usernameInput.sendKeys(username);
    this.passwordInput.sendKeys(password);
    this.loginButton.click();
    Thread.sleep(3000); // Unreliable!
    return new DashboardPage(driver);
  }
}`
      },
      {
        id: 'error-handling',
        title: 'Comprehensive Error Handling',
        description: 'Implement proper exception handling and meaningful error messages',
        icon: <AlertTriangle className="w-5 h-5" />,
        priority: 'high',
        category: 'Reliability',
        examples: [
          'Custom exceptions for page-specific errors',
          'Timeout handling for element waits',
          'Validation of page states',
          'Clear error messages'
        ],
        benefits: [
          'Easier debugging',
          'Better failure analysis',
          'Improved test reliability',
          'Professional error reporting'
        ],
        antiPattern: 'Ignoring exceptions or throwing generic errors',
        codeExample: `// ✅ GOOD - Proper error handling
class LoginPage {
  login(username, password) {
    try {
      this.wait.until(EC.visibilityOf(this.usernameInput));
      this.usernameInput.sendKeys(username);
      // ... rest of login logic
    } catch (TimeoutException e) {
      throw new LoginException("Login form not loaded properly", e);
    } catch (ElementNotInteractableException e) {
      throw new LoginException("Login form elements not interactable", e);
    }
  }
}

// ❌ BAD - Poor error handling
class LoginPage {
  login(username, password) {
    try {
      this.usernameInput.sendKeys(username);
      // ... rest of login logic
    } catch (Exception e) {
      System.out.println("Login failed"); // Not helpful!
    }
  }
}`
      }
    ],
    maintenance: [
      {
        id: 'separation-concerns',
        title: 'Separation of Concerns',
        description: 'Keep page logic separate from test logic and configuration',
        icon: <Layers className="w-5 h-5" />,
        priority: 'high',
        category: 'Architecture',
        examples: [
          'Page objects contain only UI interactions',
          'Tests contain only business logic',
          'Configuration in separate files',
          'Utilities in dedicated classes'
        ],
        benefits: [
          'Easier maintenance',
          'Better code organization',
          'Improved reusability',
          'Clear responsibilities'
        ],
        antiPattern: 'Mixing test assertions and business logic in page objects',
        codeExample: `// ✅ GOOD - Separated concerns
// Page Object - Only UI interactions
class LoginPage {
  login(username, password) {
    this.enterCredentials(username, password);
    this.submitForm();
    return new DashboardPage(driver);
  }
  
  getErrorMessage() {
    return this.errorMessage.getText();
  }
}

// Test Class - Only business logic and assertions
class LoginTest {
  testValidLogin() {
    const loginPage = new LoginPage(driver);
    const dashboard = loginPage.login("user", "pass");
    
    assertTrue(dashboard.isUserLoggedIn());
    assertEquals("Welcome", dashboard.getWelcomeMessage());
  }
}

// ❌ BAD - Mixed concerns
class LoginPage {
  login(username, password) {
    this.enterCredentials(username, password);
    this.submitForm();
    
    // Test logic in page object - BAD!
    if (driver.getCurrentUrl().contains("dashboard")) {
      System.out.println("Login successful");
    } else {
      fail("Login failed");
    }
  }
}`
      },
      {
        id: 'base-page',
        title: 'Base Page Pattern',
        description: 'Create a base page class with common functionality for inheritance',
        icon: <Building className="w-5 h-5" />,
        priority: 'medium',
        category: 'Architecture',
        examples: [
          'Common element interaction methods',
          'Shared wait utilities',
          'Universal navigation methods',
          'Common validation helpers'
        ],
        benefits: [
          'Code reuse',
          'Consistent behavior',
          'Easier maintenance',
          'Standardized interface'
        ],
        antiPattern: 'Duplicating common code across multiple page objects',
        codeExample: `// ✅ GOOD - Base page pattern
class BasePage {
  constructor(driver) {
    this.driver = driver;
    this.wait = new WebDriverWait(driver, 10);
  }
  
  clickElement(locator) {
    this.wait.until(EC.elementToBeClickable(locator)).click();
  }
  
  typeText(locator, text) {
    this.wait.until(EC.visibilityOfElementLocated(locator)).sendKeys(text);
  }
  
  getText(locator) {
    return this.wait.until(EC.visibilityOfElementLocated(locator)).getText();
  }
}

class LoginPage extends BasePage {
  USERNAME_INPUT = By.id("username");
  
  login(username, password) {
    this.typeText(this.USERNAME_INPUT, username);
    // ... rest of login logic
  }
}

// ❌ BAD - Duplicated code
class LoginPage {
  clickElement(locator) {
    // Same implementation in every page
    this.wait.until(EC.elementToBeClickable(locator)).click();
  }
}

class DashboardPage {
  clickElement(locator) {
    // Same implementation duplicated!
    this.wait.until(EC.elementToBeClickable(locator)).click();
  }
}`
      },
      {
        id: 'documentation',
        title: 'Comprehensive Documentation',
        description: 'Document page objects with clear comments and usage examples',
        icon: <FileText className="w-5 h-5" />,
        priority: 'medium',
        category: 'Maintainability',
        examples: [
          'Class-level documentation',
          'Method parameter descriptions',
          'Usage examples in comments',
          'Change log for modifications'
        ],
        benefits: [
          'Easier onboarding',
          'Better knowledge transfer',
          'Reduced learning curve',
          'Improved collaboration'
        ],
        antiPattern: 'No documentation or unclear comments',
        codeExample: `// ✅ GOOD - Well documented
/**
 * Page Object for Login Page
 * Handles user authentication functionality
 * 
 * Usage:
 * const loginPage = new LoginPage(driver);
 * const dashboard = loginPage.login("username", "password");
 */
class LoginPage {
  /**
   * Performs user login with provided credentials
   * @param {string} username - User's login username
   * @param {string} password - User's login password
   * @returns {DashboardPage} Returns dashboard page on successful login
   * @throws {LoginException} If login fails due to invalid credentials
   */
  login(username, password) {
    // Implementation with comments explaining each step
  }
}

// ❌ BAD - No documentation
class LoginPage {
  login(u, p) {
    // What do these parameters mean?
    // What does this method return?
    // What exceptions can be thrown?
    // How should this be used?
  }
}`
      }
    ],
    testing: [
      {
        id: 'test-organization',
        title: 'Organized Test Structure',
        description: 'Structure tests logically with clear naming and grouping',
        icon: <FolderOpen className="w-5 h-5" />,
        priority: 'high',
        category: 'Organization',
        examples: [
          'Group related tests together',
          'Descriptive test method names',
          'Clear test class hierarchy',
          'Logical package structure'
        ],
        benefits: [
          'Easier test maintenance',
          'Better test discovery',
          'Clear test purpose',
          'Improved debugging'
        ],
        antiPattern: 'Poorly organized tests with unclear names',
        codeExample: `// ✅ GOOD - Well organized tests
class UserAuthenticationTest {
  @Test
  void shouldLoginWithValidCredentials() {
    // Test implementation
  }
  
  @Test
  void shouldShowErrorWithInvalidPassword() {
    // Test implementation
  }
  
  @Test
  void shouldNavigateToForgotPassword() {
    // Test implementation
  }
}

// ❌ BAD - Poorly organized tests
class Tests {
  void test1() {
    // What is this testing?
  }
  
  void loginTest() {
    // What aspect of login?
  }
  
  void checkError() {
    // What error? What scenario?
  }
}`
      },
      {
        id: 'test-data-management',
        title: 'Effective Test Data Management',
        description: 'Separate test data from test logic for better maintainability',
        icon: <Database className="w-5 h-5" />,
        priority: 'medium',
        category: 'Data Management',
        examples: [
          'External test data files',
          'Data-driven testing',
          'Environment-specific configurations',
          'Test data builders'
        ],
        benefits: [
          'Easier data maintenance',
          'Better test coverage',
          'Reduced code duplication',
          'Improved test reusability'
        ],
        antiPattern: 'Hardcoding test data in test methods',
        codeExample: `// ✅ GOOD - External test data
class LoginTest {
  @DataProvider(name = "loginData")
  Object[][] getLoginData() {
    return TestDataBuilder.loginData()
      .withValidUser("user1", "pass1")
      .withInvalidUser("user2", "wrong")
      .withLockedUser("user3", "pass3")
      .build();
  }
  
  @Test(dataProvider = "loginData")
  void testLogin(LoginData data) {
    loginPage.login(data.username, data.password);
    // Assertions based on data.expectedResult
  }
}

// ❌ BAD - Hardcoded test data
class LoginTest {
  void testValidLogin() {
    loginPage.login("user1", "password123"); // Hardcoded
    // Assertions
  }
  
  void testInvalidLogin() {
    loginPage.login("user2", "wrongpass"); // Hardcoded
    // Assertions
  }
}`
      },
      {
        id: 'assertion-strategies',
        title: 'Strategic Assertion Placement',
        description: 'Place assertions at appropriate levels for maximum effectiveness',
        icon: <CheckCircle className="w-5 h-5" />,
        priority: 'high',
        category: 'Validation',
        examples: [
          'Business-level assertions in tests',
          'Page state validation in page objects',
          'Element existence checks',
          'User experience validation'
        ],
        benefits: [
          'Clear test failure reasons',
          'Better error diagnostics',
          'Proper abstraction levels',
          'Maintainable assertions'
        ],
        antiPattern: 'Mixing assertion levels or placing them incorrectly',
        codeExample: `// ✅ GOOD - Proper assertion placement
// Page Object - Technical validation
class LoginPage {
  isErrorMessageDisplayed() {
    return this.errorMessage.isDisplayed();
  }
  
  getErrorMessageText() {
    return this.errorMessage.getText();
  }
}

// Test Class - Business validation
class LoginTest {
  void testInvalidLoginShowsError() {
    loginPage.login("invalid", "credentials");
    
    // Business-level assertion
    assertTrue(loginPage.isErrorMessageDisplayed());
    assertEquals("Invalid username or password", 
                 loginPage.getErrorMessageText());
  }
}

// ❌ BAD - Mixed assertion levels
class LoginPage {
  login(username, password) {
    // Login logic
    assertTrue(driver.getCurrentUrl().contains("login")); // Technical assertion in page object
  }
}

class LoginTest {
  void testLogin() {
    loginPage.login("user", "pass");
    // No business-level assertions in test
  }
}`
      }
    ]
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityBadgeColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-600 text-white';
      case 'high': return 'bg-orange-600 text-white';
      case 'medium': return 'bg-yellow-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Shield}
        category="Selenium · Best Practices"
        title="POM Best Practices Guide"
        description="Comprehensive guide to implementing Page Object Model with industry best practices for maintainable and scalable test automation."
        colorTheme="emerald"
      />

      {/* Introduction */}
      <Card className="border-2 border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            Understanding POM Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                <Star className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Why Best Practices Matter
              </h3>
              <p className="text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed">
                Following POM best practices ensures your test automation framework remains 
                maintainable, scalable, and reliable as your application grows and evolves.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Benefits of Proper Implementation
              </h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Reduced maintenance overhead</li>
                <li>• Improved test reliability</li>
                <li>• Better team collaboration</li>
                <li>• Faster test development</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Selection */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Grid3x3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Practice Categories
          </CardTitle>
          <CardDescription>
            Explore best practices organized by implementation phase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 'design', label: 'Design', icon: <Layers className="w-5 h-5" />, color: 'purple' },
              { id: 'implementation', label: 'Implementation', icon: <Code className="w-5 h-5" />, color: 'blue' },
              { id: 'maintenance', label: 'Maintenance', icon: <Settings className="w-5 h-5" />, color: 'green' },
              { id: 'testing', label: 'Testing', icon: <CheckCircle className="w-5 h-5" />, color: 'orange' }
            ].map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`flex items-center gap-2 h-auto p-4 ${
                  selectedCategory === category.id
                    ? category.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                      category.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                      category.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                      'bg-orange-600 hover:bg-orange-700'
                    : ''
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  {category.icon}
                  <span className="font-medium">{category.label}</span>
                  <Badge variant="secondary" className="text-xs">
                    {bestPractices[category.id as keyof typeof bestPractices].length} practices
                  </Badge>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Practices List */}
      <div className="space-y-6">
        {bestPractices[selectedCategory].map((practice) => (
          <Card key={practice.id} className="border-2 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    {practice.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{practice.title}</CardTitle>
                    <CardDescription>{practice.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getPriorityBadgeColor(practice.priority)}>
                    {practice.priority}
                  </Badge>
                  <Badge variant="outline">{practice.category}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Examples */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                    Practical Examples
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {practice.examples.map((example, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                        <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-blue-800 dark:text-blue-200">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {practice.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                        <Award className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-green-800 dark:text-green-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Anti-Pattern Warning */}
                <Alert className="border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-950/20">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertTitle className="text-red-900 dark:text-red-100">Anti-Pattern to Avoid</AlertTitle>
                  <AlertDescription className="text-red-800 dark:text-red-200">
                    {practice.antiPattern}
                  </AlertDescription>
                </Alert>

                {/* Code Example */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                      <Code className="w-4 h-4 text-indigo-500" />
                      Code Example
                    </h4>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(practice.codeExample, 'Code example')}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm border border-gray-300 dark:border-gray-700">
                      <code>
                        {practice.codeExample.split('\n').map((line, index) => (
                          <div key={index}>
                            <span className="text-gray-500 dark:text-gray-400 select-none mr-2">
                              {String(index + 1).padStart(2, ' ')}
                            </span>
                            <span className={
                              line.includes('// ✅ GOOD') ? 'text-green-600 dark:text-green-400 font-semibold' :
                              line.includes('// ❌ BAD') ? 'text-red-600 dark:text-red-400 font-semibold' :
                              line.includes('// Usage') || line.includes('// Test') ? 'text-blue-600 dark:text-blue-400' :
                              'text-gray-800 dark:text-gray-200'
                            }>
                              {line}
                            </span>
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Implementation Guide */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Implementation Roadmap
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Step-by-step guide to implement POM best practices in your project
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: 'Audit Current Implementation',
                description: 'Review existing page objects and identify areas for improvement',
                icon: <Search className="w-5 h-5" />,
                color: 'blue'
              },
              {
                step: 2,
                title: 'Establish Design Standards',
                description: 'Define naming conventions, structure patterns, and coding standards',
                icon: <Settings className="w-5 h-5" />,
                color: 'purple'
              },
              {
                step: 3,
                title: 'Create Base Page Class',
                description: 'Implement common functionality in a base page for inheritance',
                icon: <Building className="w-5 h-5" />,
                color: 'green'
              },
              {
                step: 4,
                title: 'Refactor Page Objects',
                description: 'Update existing page objects to follow best practices',
                icon: <RefreshCw className="w-5 h-5" />,
                color: 'orange'
              },
              {
                step: 5,
                title: 'Implement Robust Waits',
                description: 'Replace all Thread.sleep() with explicit wait strategies',
                icon: <Clock className="w-5 h-5" />,
                color: 'red'
              },
              {
                step: 6,
                title: 'Add Comprehensive Tests',
                description: 'Create tests that validate page object functionality',
                icon: <CheckCircle className="w-5 h-5" />,
                color: 'indigo'
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 text-white rounded-full flex items-center justify-center font-semibold bg-${item.color}-600`}>
                    {item.step}
                  </div>
                  {item.step < 6 && (
                    <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <Card className="bg-gray-50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {item.icon}
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

      {/* Quick Reference */}
      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            Quick Reference Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              '✅ Single responsibility per page object',
              '✅ Business-oriented method names',
              '✅ Return page objects for navigation',
              '✅ Use robust locator strategies',
              '✅ Implement explicit waits',
              '✅ Handle exceptions gracefully',
              '✅ Separate concerns properly',
              '✅ Create base page class',
              '✅ Document code thoroughly',
              '✅ Organize tests logically',
              '✅ Manage test data externally',
              '✅ Place assertions strategically'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <CheckCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-yellow-800 dark:text-yellow-200">{item.substring(2)}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Final Tips */}
      <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">
        <Lightbulb className="h-5 w-5 text-emerald-600" />
        <AlertTitle className="text-emerald-900 dark:text-emerald-100">Pro Tips</AlertTitle>
        <AlertDescription className="text-emerald-800 dark:text-emerald-200 space-y-2">
          <div>• <strong>Start Small:</strong> Begin with critical pages and gradually expand</div>
          <div>• <strong>Team Consensus:</strong> Get team buy-in on standards before implementation</div>
          <div>• <strong>Regular Reviews:</strong> Conduct code reviews to ensure compliance</div>
          <div>• <strong>Continuous Improvement:</strong> Update practices as your framework evolves</div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

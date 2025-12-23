'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Package,
  Code,
  FileText,
  Database,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Star,
  GitBranch,
  Settings,
  Zap
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function BaseClassesInheritanceComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'base-classes-inheritance',
    title: 'Base Classes and Inheritance',
    explanation: 'Creating reusable base classes and implementing inheritance',
    category: '21. Framework Design'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-rose-50 dark:from-slate-900 dark:to-rose-900/20">
      <PageHeader
        title="Base Classes and Inheritance"
        description="Master the art of creating reusable base classes and implementing inheritance hierarchies to build maintainable and scalable test automation frameworks"
        icon={Package}
        colorTheme="rose"
        badges={[
          { label: 'Inheritance', variant: 'secondary' },
          { label: 'Base Classes', variant: 'secondary' },
          { label: 'Hierarchy', variant: 'secondary' },
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Section 1: Introduction to Base Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-rose-600 dark:text-rose-400">
              <Package className="w-7 h-7" />
              What are Base Classes?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding base classes and inheritance in test automation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
                <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-4">Definition</h4>
                <p className="text-rose-800 dark:text-rose-200">
                  Base classes are parent classes that contain common functionality, setup/teardown methods, and shared utilities that can be inherited by child test classes, promoting code reuse and consistency.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950/30 dark:to-red-950/20 rounded-xl border border-pink-200 dark:border-pink-700">
                <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-4">Benefits</h4>
                <p className="text-pink-800 dark:text-pink-200">
                  Eliminates code duplication, ensures consistent test setup, provides centralized maintenance, enables easy test configuration, and establishes standard testing patterns across the framework.
                </p>
              </div>
            </div>

            {/* Inheritance Hierarchy */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Typical Inheritance Hierarchy</h5>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900/40 rounded-lg">
                    <Package className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-red-900 dark:text-red-100">Base Test Class</h6>
                    <p className="text-sm text-red-800 dark:text-red-200">WebDriver setup, configuration, common utilities</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                    <GitBranch className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-orange-900 dark:text-orange-100">Module Base Classes</h6>
                    <p className="text-sm text-orange-800 dark:text-orange-200">Login, navigation, module-specific functionality</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-green-900 dark:text-green-100">Feature Test Classes</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">Specific test scenarios and test cases</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Base Test Class Implementation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <Code className="w-7 h-7" />
              Base Test Class Implementation
            </CardTitle>
            <CardDescription className="text-base">
              Creating a comprehensive base test class
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Base Test Class Example</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public abstract class BaseTest {
    protected WebDriver driver;
    protected ConfigManager config;
    protected WebDriverWait wait;
    protected JavascriptExecutor jsExecutor;
    protected TestLogger logger;
    
    // Test data
    protected String baseUrl;
    protected String browser;
    protected boolean headless;
    protected int timeout;
    
    @BeforeMethod(alwaysRun = true)
    @Parameters({"browser", "environment"})
    public void setUp(@Optional("chrome") String browser, 
                      @Optional("dev") String environment) {
        try {
            // Initialize configuration
            config = ConfigManager.getInstance();
            this.browser = browser != null ? browser : config.getBrowser();
            this.baseUrl = config.getBaseUrl();
            this.timeout = config.getTimeout();
            this.headless = config.isHeadless();
            
            // Initialize logger
            logger = new TestLogger(getClass().getSimpleName());
            
            // Initialize WebDriver
            initializeWebDriver();
            
            // Set up waits and executors
            wait = new WebDriverWait(driver, Duration.ofSeconds(timeout));
            jsExecutor = (JavascriptExecutor) driver;
            
            // Navigate to base URL
            driver.get(baseUrl);
            
            // Maximize window if not headless
            if (!headless) {
                driver.manage().window().maximize();
            }
            
            logger.info("Test setup completed successfully");
            
        } catch (Exception e) {
            logger.error("Failed to set up test: " + e.getMessage());
            throw new RuntimeException("Test setup failed", e);
        }
    }
    
    @AfterMethod(alwaysRun = true)
    public void tearDown(ITestResult result) {
        try {
            // Take screenshot on failure
            if (result.getStatus() == ITestResult.FAILURE) {
                String screenshotPath = ScreenshotUtils.takeScreenshotOnFailure(
                    result.getMethod().getMethodName());
                logger.info("Screenshot taken on failure: " + screenshotPath);
                
                // Add to test report
                ExtentTestManager.getTest().fail("Test failed: " + 
                    result.getThrowable().getMessage(), 
                    MediaEntityBuilder.createScreenCaptureFromPath(
                        screenshotPath).build());
            }
            
            // Clean up browser
            if (driver != null) {
                driver.quit();
                driver = null;
            }
            
            logger.info("Test teardown completed");
            
        } catch (Exception e) {
            logger.error("Error during teardown: " + e.getMessage());
        }
    }
    
    private void initializeWebDriver() {
        switch (browser.toLowerCase()) {
            case "chrome":
                driver = createChromeDriver();
                break;
            case "firefox":
                driver = createFirefoxDriver();
                break;
            case "safari":
                driver = new SafariDriver();
                break;
            case "edge":
                driver = createEdgeDriver();
                break;
            default:
                throw new IllegalArgumentException("Unsupported browser: " + browser);
        }
        
        // Set implicit wait
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
    }
    
    private ChromeDriver createChromeDriver() {
        ChromeOptions options = new ChromeOptions();
        
        if (headless) {
            options.addArguments("--headless");
        }
        
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("--disable-infobars");
        options.addArguments("--disable-notifications");
        options.setExperimentalOption("excludeSwitches", 
            new String[]{"enable-automation"});
        
        return new ChromeDriver(options);
    }
    
    private FirefoxDriver createFirefoxDriver() {
        FirefoxOptions options = new FirefoxOptions();
        
        if (headless) {
            options.addArguments("--headless");
        }
        
        return new FirefoxDriver(options);
    }
    
    private EdgeDriver createEdgeDriver() {
        EdgeOptions options = new EdgeOptions();
        
        if (headless) {
            options.addArguments("--headless");
        }
        
        return new EdgeDriver(options);
    }
    
    // Common utility methods
    protected void navigateTo(String url) {
        driver.get(url);
        logger.info("Navigated to: " + url);
    }
    
    protected void waitForPageLoad() {
        wait.until(webDriver -> ((JavascriptExecutor) webDriver)
            .executeScript("return document.readyState")
            .equals("complete"));
    }
    
    protected void scrollToElement(WebElement element) {
        jsExecutor.executeScript("arguments[0].scrollIntoView(true);", element);
    }
    
    protected void highlightElement(WebElement element) {
        jsExecutor.executeScript(
            "arguments[0].style.border='3px solid red';", element);
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        jsExecutor.executeScript(
            "arguments[0].style.border='';", element);
    }
    
    protected boolean isElementPresent(By locator) {
        try {
            driver.findElement(locator);
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }
    
    protected void takeScreenshot(String testName) {
        String screenshotPath = ScreenshotUtils.takeScreenshot(testName);
        logger.info("Screenshot taken: " + screenshotPath);
    }
    
    // Assertion helpers
    protected void assertElementVisible(By locator) {
        WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
        assertTrue(element.isDisplayed(), "Element should be visible: " + locator);
    }
    
    protected void assertElementContainsText(By locator, String expectedText) {
        WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
        String actualText = element.getText();
        assertTrue(actualText.contains(expectedText), 
            "Element should contain text: " + expectedText + ", but was: " + actualText);
    }
    
    protected void assertTitleContains(String expectedTitle) {
        assertTrue(wait.until(ExpectedConditions.titleContains(expectedTitle)),
            "Page title should contain: " + expectedTitle);
    }
    
    // Data provider helpers
    @DataProvider(name = "browsers")
    public Object[][] getBrowsers() {
        return new Object[][]{
            {"chrome"},
            {"firefox"},
            {"edge"}
        };
    }
    
    @DataProvider(name = "users")
    public Object[][] getUsers() {
        return new Object[][]{
            {"standard", config.getProperty("test.username"), 
             config.getProperty("test.password")},
            {"admin", config.getProperty("admin.username"), 
             config.getProperty("admin.password")}
        };
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Module Base Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <GitBranch className="w-7 h-7" />
              Module Base Classes
            </CardTitle>
            <CardDescription className="text-base">
              Creating specialized base classes for different modules
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Login Base Class Example</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public abstract class BaseLoginTest extends BaseTest {
    protected LoginPage loginPage;
    protected DashboardPage dashboardPage;
    
    @BeforeMethod(alwaysRun = true)
    @Override
    public void setUp(@Optional("chrome") String browser, 
                      @Optional("dev") String environment) {
        // Call parent setup
        super.setUp(browser, environment);
        
        // Initialize page objects
        loginPage = new LoginPage(driver);
        dashboardPage = new DashboardPage(driver);
    }
    
    // Common login methods
    protected void performLogin(String username, String password) {
        logger.info("Performing login with username: " + username);
        
        navigateTo(baseUrl + "/login");
        waitForPageLoad();
        
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
        loginPage.clickLoginButton();
        
        // Wait for dashboard to load
        assertElementVisible(By.id("dashboard"));
        logger.info("Login completed successfully");
    }
    
    protected void performLogout() {
        logger.info("Performing logout");
        
        dashboardPage.clickUserMenu();
        dashboardPage.clickLogoutButton();
        
        // Wait for login page
        assertElementVisible(By.id("login-form"));
        logger.info("Logout completed successfully");
    }
    
    protected void loginAsStandardUser() {
        String username = config.getProperty("test.username");
        String password = config.getProperty("test.password");
        performLogin(username, password);
    }
    
    protected void loginAsAdminUser() {
        String username = config.getProperty("admin.username");
        String password = config.getProperty("admin.password");
        performLogin(username, password);
    }
    
    protected void verifySuccessfulLogin() {
        assertElementVisible(By.id("welcome-message"));
        assertElementContainsText(By.id("welcome-message"), "Welcome");
        logger.info("Verified successful login");
    }
    
    protected void verifyLoginFailed(String expectedError) {
        assertElementVisible(By.id("error-message"));
        assertElementContainsText(By.id("error-message"), expectedError);
        logger.info("Verified login failed with expected error: " + expectedError);
    }
}

// E-commerce Base Class
public abstract class BaseEcommerceTest extends BaseTest {
    protected HomePage homePage;
    protected ProductPage productPage;
    protected CartPage cartPage;
    protected CheckoutPage checkoutPage;
    
    @BeforeMethod(alwaysRun = true)
    @Override
    public void setUp(@Optional("chrome") String browser, 
                      @Optional("dev") String environment) {
        super.setUp(browser, environment);
        
        // Initialize page objects
        homePage = new HomePage(driver);
        productPage = new ProductPage(driver);
        cartPage = new CartPage(driver);
        checkoutPage = new CheckoutPage(driver);
    }
    
    // Common e-commerce methods
    protected void searchProduct(String productName) {
        logger.info("Searching for product: " + productName);
        
        homePage.enterSearchQuery(productName);
        homePage.clickSearchButton();
        
        assertElementVisible(By.className("search-results"));
        logger.info("Product search completed");
    }
    
    protected void addProductToCart(String productName) {
        searchProduct(productName);
        
        productPage.clickFirstProduct();
        productPage.clickAddToCartButton();
        
        // Wait for cart update
        assertElementVisible(By.className("cart-count"));
        logger.info("Product added to cart: " + productName);
    }
    
    protected void proceedToCheckout() {
        cartPage.clickCheckoutButton();
        assertElementVisible(By.id("checkout-form"));
        logger.info("Proceeded to checkout");
    }
    
    protected void completePurchase(String shippingAddress, String paymentMethod) {
        checkoutPage.enterShippingAddress(shippingAddress);
        checkoutPage.selectPaymentMethod(paymentMethod);
        checkoutPage.clickPlaceOrderButton();
        
        assertElementVisible(By.id("order-confirmation"));
        logger.info("Purchase completed successfully");
    }
}

// API Base Class
public abstract class BaseApiTest {
    protected RestAssured restAssured;
    protected RequestSpecification requestSpec;
    protected String baseUrl;
    protected String apiKey;
    
    @BeforeMethod(alwaysRun = true)
    public void setUp() {
        // Load configuration
        ConfigManager config = ConfigManager.getInstance();
        baseUrl = config.getProperty("api.base.url");
        apiKey = config.getProperty("api.key");
        
        // Setup RestAssured
        requestSpec = RestAssured.given()
            .baseUri(baseUrl)
            .header("Authorization", "Bearer " + apiKey)
            .header("Content-Type", "application/json")
            .log().all();
        
        RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
    }
    
    protected Response get(String endpoint) {
        return requestSpec.when().get(endpoint).then().extract().response();
    }
    
    protected Response post(String endpoint, Object requestBody) {
        return requestSpec.body(requestBody).when().post(endpoint)
                          .then().extract().response();
    }
    
    protected Response put(String endpoint, Object requestBody) {
        return requestSpec.body(requestBody).when().put(endpoint)
                          .then().extract().response();
    }
    
    protected Response delete(String endpoint) {
        return requestSpec.when().delete(endpoint).then().extract().response();
    }
    
    protected void assertStatusCode(Response response, int expectedStatusCode) {
        assertEquals(expectedStatusCode, response.getStatusCode(),
            "Expected status code: " + expectedStatusCode + 
            ", but was: " + response.getStatusCode());
    }
    
    protected void assertResponseContains(Response response, String expectedContent) {
        assertTrue(response.asString().contains(expectedContent),
            "Response should contain: " + expectedContent);
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Test Class Implementation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <FileText className="w-7 h-7" />
              Test Class Implementation
            </CardTitle>
            <CardDescription className="text-base">
              Creating test classes that inherit from base classes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Test Class Examples</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`// Login Test Class
public class LoginTest extends BaseLoginTest {
    
    @Test(description = "Verify successful login with valid credentials")
    public void testSuccessfulLogin() {
        logger.info("Starting test: testSuccessfulLogin");
        
        // Perform login
        loginAsStandardUser();
        
        // Verify successful login
        verifySuccessfulLogin();
        
        logger.info("Test completed: testSuccessfulLogin");
    }
    
    @Test(description = "Verify login failure with invalid credentials")
    public void testLoginWithInvalidCredentials() {
        logger.info("Starting test: testLoginWithInvalidCredentials");
        
        // Navigate to login page
        navigateTo(baseUrl + "/login");
        
        // Attempt login with invalid credentials
        loginPage.enterUsername("invalid@example.com");
        loginPage.enterPassword("invalidpassword");
        loginPage.clickLoginButton();
        
        // Verify login failed
        verifyLoginFailed("Invalid email or password");
        
        logger.info("Test completed: testLoginWithInvalidCredentials");
    }
    
    @Test(dataProvider = "users", description = "Verify login with different user types")
    public void testLoginWithDifferentUsers(String userType, String username, String password) {
        logger.info("Starting test: testLoginWithDifferentUsers - " + userType);
        
        // Perform login
        performLogin(username, password);
        
        // Verify successful login
        verifySuccessfulLogin();
        
        // Logout
        performLogout();
        
        logger.info("Test completed: testLoginWithDifferentUsers - " + userType);
    }
}

// E-commerce Test Class
public class EcommerceTest extends BaseEcommerceTest {
    
    @Test(description = "Verify complete purchase flow")
    public void testCompletePurchaseFlow() {
        logger.info("Starting test: testCompletePurchaseFlow");
        
        // Login first
        loginAsStandardUser();
        
        // Search and add product to cart
        addProductToCart("Laptop");
        
        // Navigate to cart
        homePage.clickCartIcon();
        
        // Proceed to checkout
        proceedToCheckout();
        
        // Complete purchase
        completePurchase("123 Test Street", "Credit Card");
        
        // Verify order confirmation
        assertElementVisible(By.id("order-confirmation"));
        assertElementContainsText(By.id("order-confirmation"), "Order Placed Successfully");
        
        logger.info("Test completed: testCompletePurchaseFlow");
    }
    
    @Test(description = "Verify product search functionality")
    public void testProductSearch() {
        logger.info("Starting test: testProductSearch");
        
        // Search for product
        searchProduct("iPhone");
        
        // Verify search results
        assertElementVisible(By.className("search-results"));
        assertElementContainsText(By.className("search-results"), "iPhone");
        
        logger.info("Test completed: testProductSearch");
    }
}

// API Test Class
public class UserApiTest extends BaseApiTest {
    
    @Test(description = "Verify user creation via API")
    public void testCreateUser() {
        logger.info("Starting test: testCreateUser");
        
        // Create user request body
        Map<String, Object> userRequest = new HashMap<>();
        userRequest.put("name", "Test User");
        userRequest.put("email", "test@example.com");
        userRequest.put("password", "testpass123");
        
        // Send POST request
        Response response = post("/users", userRequest);
        
        // Verify response
        assertStatusCode(response, 201);
        assertResponseContains(response, "Test User");
        
        logger.info("Test completed: testCreateUser");
    }
    
    @Test(description = "Verify user retrieval via API")
    public void testGetUser() {
        logger.info("Starting test: testGetUser");
        
        // Send GET request
        Response response = get("/users/1");
        
        // Verify response
        assertStatusCode(response, 200);
        assertResponseContains(response, "email");
        
        logger.info("Test completed: testGetUser");
    }
}

// Hybrid Test Class (Web + API)
public class HybridTest extends BaseTest {
    
    @Test(description = "Verify user registration via UI and API verification")
    public void testUserRegistrationHybrid() {
        logger.info("Starting test: testUserRegistrationHybrid");
        
        // Create API test instance
        BaseApiTest apiTest = new BaseApiTest();
        apiTest.setUp();
        
        try {
            // Register user via UI
            navigateTo(baseUrl + "/register");
            
            String email = "test_" + System.currentTimeMillis() + "@example.com";
            String password = "testpass123";
            
            driver.findElement(By.id("name")).sendKeys("Test User");
            driver.findElement(By.id("email")).sendKeys(email);
            driver.findElement(By.id("password")).sendKeys(password);
            driver.findElement(By.id("confirm-password")).sendKeys(password);
            driver.findElement(By.id("register-button")).click();
            
            // Verify registration success
            assertElementVisible(By.id("success-message"));
            
            // Verify user exists via API
            Response response = apiTest.get("/users/email/" + email);
            assertStatusCode(response, 200);
            assertResponseContains(response, email);
            
        } finally {
            apiTest.tearDown();
        }
        
        logger.info("Test completed: testUserRegistrationHybrid");
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Star className="w-7 h-7" />
              Base Classes Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {/* Do's */}
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Best Practices ✅
              </h4>
              <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-200">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use abstract classes for base test functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement proper setup and teardown methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use @BeforeMethod and @AfterMethod annotations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Provide common utility methods in base classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use inheritance hierarchies logically</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Always call super() in overridden methods</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Avoid These ❌
              </h4>
              <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't create overly deep inheritance hierarchies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid putting test-specific logic in base classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore exception handling in setup/teardown</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid hardcoding values in base classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't skip proper cleanup in teardown</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid tight coupling between base and child classes</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/30">
          <Package className="h-4 w-4 text-rose-600" />
          <AlertTitle className="text-rose-900 dark:text-rose-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-rose-800 dark:text-rose-200">
            <ul className="space-y-2 mt-2">
              <li>• Base classes eliminate code duplication and ensure consistency</li>
              <li>• Use abstract classes for common test functionality</li>
              <li>• Implement proper setup and teardown with exception handling</li>
              <li>• Create logical inheritance hierarchies based on functionality</li>
              <li>• Always call super() in overridden setup and teardown methods</li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* Topic Navigation */}
        <TopicNavigation 
          currentTopic={currentTopic}
          language={language}
        />
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Code,
  Terminal,
  FileText,
  Settings,
  CheckCircle,
  Zap,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Star,
  Package
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function StepDefinitionsComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'step-definitions',
    title: 'Step Definitions',
    explanation: 'Implementing step definitions for BDD scenarios',
    category: '22. BDD with Cucumber'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900/20">
      <PageHeader
        title="Step Definitions"
        description="Master the art of implementing step definitions that bridge Gherkin scenarios with Selenium WebDriver automation code"
        icon={Code}
        colorTheme="purple"
        badges={[
          { label: 'Step Definitions', variant: 'secondary' },
          { label: 'Selenium Integration', variant: 'secondary' },
          { label: 'Java Implementation', variant: 'secondary' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Section 1: Introduction to Step Definitions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <Terminal className="w-7 h-7" />
              What are Step Definitions?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the bridge between Gherkin and automation code
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Definition</h4>
                <p className="text-purple-800 dark:text-purple-200">
                  Step definitions are Java methods that map Gherkin steps to actual automation code. Each step in a feature file corresponds to a method that implements the described behavior using Selenium WebDriver.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">Purpose</h4>
                <p className="text-indigo-800 dark:text-indigo-200">
                  Step definitions translate human-readable Gherkin steps into executable code, enabling automated testing while maintaining business-readable test scenarios.
                </p>
              </div>
            </div>

            {/* Step Definition Annotations */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Cucumber Annotations</h5>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-900 dark:text-green-100">@Given</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">Sets up initial context</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                    <Zap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-orange-900 dark:text-orange-100">@When</h6>
                    <p className="text-sm text-orange-800 dark:text-orange-200">Performs the action</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-100 dark:bg-red-900/40 rounded-lg">
                    <Star className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-red-900 dark:text-red-100">@Then</h6>
                    <p className="text-sm text-red-800 dark:text-red-200">Verifies the outcome</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100">@And/@But</h6>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Extends previous steps</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Basic Step Definition Implementation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Code className="w-7 h-7" />
              Basic Step Definition Implementation
            </CardTitle>
            <CardDescription className="text-base">
              Creating your first step definitions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">LoginSteps.java</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.stepdefinitions;

import com.example.pages.LoginPage;
import com.example.pages.DashboardPage;
import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.time.Duration;

public class LoginSteps {
    
    private WebDriver driver;
    private LoginPage loginPage;
    private DashboardPage dashboardPage;
    private WebDriverWait wait;
    
    public LoginSteps() {
        // Initialize WebDriver (assuming it's injected or managed elsewhere)
        this.driver = WebDriverFactory.getDriver();
        this.loginPage = new LoginPage(driver);
        this.dashboardPage = new DashboardPage(driver);
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(30));
    }
    
    @Given("I am on the login page")
    public void iAmOnTheLoginPage() {
        driver.get("https://example.com/login");
        Assert.assertTrue(loginPage.isPageLoaded(), 
            "Login page should be loaded");
    }
    
    @When("I enter username {string}")
    public void iEnterUsername(String username) {
        loginPage.enterUsername(username);
    }
    
    @When("I enter password {string}")
    public void iEnterPassword(String password) {
        loginPage.enterPassword(password);
    }
    
    @When("I click the login button")
    public void iClickTheLoginButton() {
        loginPage.clickLoginButton();
    }
    
    @Then("I should be redirected to the dashboard")
    public void iShouldBeRedirectedToTheDashboard() {
        wait.until(driver -> dashboardPage.isPageLoaded());
        Assert.assertTrue(dashboardPage.isPageLoaded(), 
            "Dashboard should be loaded");
    }
    
    @Then("I should see welcome message {string}")
    public void iShouldSeeWelcomeMessage(String expectedMessage) {
        String actualMessage = dashboardPage.getWelcomeMessage();
        Assert.assertEquals(actualMessage, expectedMessage, 
            "Welcome message should match expected");
    }
    
    @Then("I should see error message {string}")
    public void iShouldSeeErrorMessage(String expectedMessage) {
        String actualMessage = loginPage.getErrorMessage();
        Assert.assertEquals(actualMessage, expectedMessage, 
            "Error message should match expected");
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Parameterized Step Definitions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <Settings className="w-7 h-7" />
              Parameterized Step Definitions
            </CardTitle>
            <CardDescription className="text-base">
              Working with parameters and data in step definitions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Advanced Step Definitions with Parameters</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.stepdefinitions;

import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.List;
import java.util.Map;

public class ParameterizedSteps {
    
    private WebDriver driver;
    private WebDriverWait wait;
    
    public ParameterizedSteps() {
        this.driver = WebDriverFactory.getDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(30));
    }
    
    // String parameter
    @When("I search for {string}")
    public void iSearchFor(String searchTerm) {
        WebElement searchBox = driver.findElement(By.id("search"));
        searchBox.clear();
        searchBox.sendKeys(searchTerm);
        driver.findElement(By.id("search-button")).click();
    }
    
    // Integer parameter
    @When("I wait for {int} seconds")
    public void iWaitForSeconds(int seconds) {
        try {
            Thread.sleep(seconds * 1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    // Double parameter
    @When("I set the price range between {double} and {double}")
    public void iSetPriceRange(double minPrice, double maxPrice) {
        WebElement minPriceInput = driver.findElement(By.id("min-price"));
        WebElement maxPriceInput = driver.findElement(By.id("max-price"));
        
        minPriceInput.clear();
        minPriceInput.sendKeys(String.valueOf(minPrice));
        
        maxPriceInput.clear();
        maxPriceInput.sendKeys(String.valueOf(maxPrice));
    }
    
    // Boolean parameter
    @When("I set notifications to {string}")
    public void iSetNotificationsTo(String enabled) {
        boolean isEnabled = Boolean.parseBoolean(enabled);
        WebElement notificationToggle = driver.findElement(By.id("notifications"));
        
        if (isEnabled && !notificationToggle.isSelected()) {
            notificationToggle.click();
        } else if (!isEnabled && notificationToggle.isSelected()) {
            notificationToggle.click();
        }
    }
    
    // Regular expression pattern
    @When("^I select the (.*) category$")
    public void iSelectTheCategory(String category) {
        WebElement categoryElement = driver.findElement(
            By.xpath("//div[contains(text(),'" + category + "')]"));
        categoryElement.click();
    }
    
    // Multiple parameters
    @When("I fill the form with name {string}, email {string}, and age {int}")
    public void iFillTheForm(String name, String email, int age) {
        driver.findElement(By.id("name")).sendKeys(name);
        driver.findElement(By.id("email")).sendKeys(email);
        driver.findElement(By.id("age")).sendKeys(String.valueOf(age));
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Data Tables in Step Definitions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
              <FileText className="w-7 h-7" />
              Working with Data Tables
            </CardTitle>
            <CardDescription className="text-base">
              Handling tabular data in step definitions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Data Table Processing</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.stepdefinitions;

import io.cucumber.java.en.*;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.WebDriver;
import java.util.List;
import java.util.Map;

public class DataTableSteps {
    
    private WebDriver driver;
    
    public DataTableSteps() {
        this.driver = WebDriverFactory.getDriver();
    }
    
    // Working with DataTable as List<Map<String, String>>
    @Given("I create the following users:")
    public void iCreateTheFollowingUsers(DataTable dataTable) {
        List<Map<String, String>> users = dataTable.asMaps(String.class, String.class);
        
        for (Map<String, String> user : users) {
            String name = user.get("name");
            String email = user.get("email");
            String role = user.get("role");
            
            // Create user logic
            createUser(name, email, role);
            System.out.println("Created user: " + name + " with role: " + role);
        }
    }
    
    // Working with DataTable as List<String>
    @When("I add the following products to cart:")
    public void iAddTheFollowingProductsToCart(DataTable dataTable) {
        List<String> products = dataTable.asList(String.class);
        
        for (String product : products) {
            addProductToCart(product);
            System.out.println("Added product to cart: " + product);
        }
    }
    
    // Working with DataTable as Map<String, String>
    @And("I update my profile with:")
    public void iUpdateMyProfileWith(DataTable dataTable) {
        Map<String, String> profileData = dataTable.asMap(String.class, String.class);
        
        for (Map.Entry<String, String> entry : profileData.entrySet()) {
            String field = entry.getKey();
            String value = entry.getValue();
            
            updateProfileField(field, value);
            System.out.println("Updated " + field + " with value: " + value);
        }
    }
    
    // Working with DataTable transformed to custom object
    @Given("I have the following products in inventory:")
    public void iHaveTheFollowingProductsInInventory(DataTable dataTable) {
        List<Product> products = dataTable.asList(Product.class);
        
        for (Product product : products) {
            addProductToInventory(product);
        }
    }
    
    // Helper methods
    private void createUser(String name, String email, String role) {
        // Implementation for creating user
    }
    
    private void addProductToCart(String productName) {
        // Implementation for adding product to cart
    }
    
    private void updateProfileField(String field, String value) {
        // Implementation for updating profile
    }
    
    private void addProductToInventory(Product product) {
        // Implementation for adding product to inventory
    }
    
    // Custom Product class for data transformation
    public static class Product {
        private String name;
        private double price;
        private int quantity;
        private String category;
        
        // Getters and setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public double getPrice() { return price; }
        public void setPrice(double price) { this.price = price; }
        public int getQuantity() { return quantity; }
        public void setQuantity(int quantity) { this.quantity = quantity; }
        public String getCategory() { return category; }
        public void setCategory(String category) { this.category = category; }
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Doc Strings in Step Definitions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-teal-600 dark:text-teal-400">
              <FileText className="w-7 h-7" />
              Working with Doc Strings
            </CardTitle>
            <CardDescription className="text-base">
              Handling multi-line text content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Doc String Processing</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.stepdefinitions;

import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.JavascriptExecutor;

public class DocStringSteps {
    
    private WebDriver driver;
    private JavascriptExecutor jsExecutor;
    
    public DocStringSteps() {
        this.driver = WebDriverFactory.getDriver();
        this.jsExecutor = (JavascriptExecutor) driver;
    }
    
    // Simple doc string parameter
    @When("I create a blog post with content:")
    public void iCreateABlogPostWithContent(String content) {
        // Remove leading/trailing whitespace and preserve formatting
        String formattedContent = content.trim();
        
        // Fill in blog post content
        WebElement contentArea = driver.findElement(By.id("blog-content"));
        contentArea.clear();
        contentArea.sendKeys(formattedContent);
        
        System.out.println("Blog post content: " + formattedContent);
    }
    
    // JSON doc string
    @Given("I have the following configuration:")
    public void iHaveTheFollowingConfiguration(String jsonConfig) {
        // Parse JSON configuration
        ObjectMapper mapper = new ObjectMapper();
        try {
            Map<String, Object> config = mapper.readValue(jsonConfig, Map.class);
            
            // Apply configuration
            for (Map.Entry<String, Object> entry : config.entrySet()) {
                applyConfiguration(entry.getKey(), entry.getValue());
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to parse configuration: " + e.getMessage());
        }
    }
    
    // HTML doc string
    @When("I add the following HTML content:")
    public void iAddTheFollowingHTMLContent(String htmlContent) {
        // Use JavaScript to insert HTML content
        jsExecutor.executeScript(
            "document.getElementById('content-area').innerHTML = arguments[0];", 
            htmlContent
        );
    }
    
    // Multi-line text with special formatting
    @And("I set the email template as:")
    public void iSetTheEmailTemplateAs(String template) {
        // Process template with variables
        String processedTemplate = processTemplate(template);
        
        // Set email template
        WebElement templateArea = driver.findElement(By.id("email-template"));
        templateArea.clear();
        templateArea.sendKeys(processedTemplate);
    }
    
    // Helper methods
    private void applyConfiguration(String key, Object value) {
        // Implementation for applying configuration
        System.out.println("Applying config: " + key + " = " + value);
    }
    
    private String processTemplate(String template) {
        // Process template variables, formatting, etc.
        return template.trim();
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <CheckCircle className="w-7 h-7" />
              Step Definition Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Writing maintainable and reusable step definitions
            </CardDescription>
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
                  <span>Keep step definitions focused and single-purpose</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use descriptive method names that match Gherkin steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Reuse step definitions across multiple scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement proper error handling and assertions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use Page Object Model for UI interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Add proper logging for debugging purposes</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Avoid These ❌
              </h4>
              <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't create duplicate step definitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid hardcoding test data in step definitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore proper exception handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid mixing UI and API logic in same step</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't use Thread.sleep() for waiting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid complex logic in step definitions</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/30">
          <Code className="h-4 w-4 text-purple-600" />
          <AlertTitle className="text-purple-900 dark:text-purple-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-purple-800 dark:text-purple-200">
            <ul className="space-y-2 mt-2">
              <li>• Step definitions bridge Gherkin scenarios with automation code</li>
              <li>• Use appropriate Cucumber annotations (@Given, @When, @Then, @And, @But)</li>
              <li>• Handle parameters, data tables, and doc strings effectively</li>
              <li>• Follow Page Object Model for maintainable UI interactions</li>
              <li>• Implement proper error handling and assertions in step definitions</li>
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

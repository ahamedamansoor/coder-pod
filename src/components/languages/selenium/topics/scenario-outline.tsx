'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  FileText,
  Code,
  Terminal,
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

export function ScenarioOutlineComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'scenario-outline',
    title: 'Scenario Outline',
    explanation: 'Data-driven testing with Scenario Outline and Examples',
    category: '22. BDD with Cucumber'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 dark:from-slate-900 dark:to-teal-900/20">
      <PageHeader
        title="Scenario Outline"
        description="Master data-driven testing with Scenario Outline and Examples to run the same scenario multiple times with different data sets"
        icon={FileText}
        colorTheme="teal"
        badges={[
          { label: 'Data-Driven', variant: 'secondary' },
          { label: 'Scenario Outline', variant: 'secondary' },
          { label: 'Examples', variant: 'secondary' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Section 1: Introduction to Scenario Outline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-teal-600 dark:text-teal-400">
              <FileText className="w-7 h-7" />
              What is Scenario Outline?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding data-driven testing with Scenario Outline
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-700">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4">Definition</h4>
                <p className="teal-800 dark:text-teal-200">
                  Scenario Outline is a Gherkin feature that allows you to run the same scenario multiple times with different data values. It uses placeholders in the scenario steps and an Examples table to provide the data.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-700">
                <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4">Benefits</h4>
                <p className="text-cyan-800 dark:text-cyan-200">
                  Scenario Outline eliminates code duplication, enables comprehensive testing with multiple data sets, and makes it easy to add new test cases without writing additional scenarios.
                </p>
              </div>
            </div>

            {/* Key Concepts */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Key Concepts</h5>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/40 rounded-lg">
                    <Star className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-teal-900 dark:text-teal-100">Placeholders</h6>
                    <p className="text-sm text-teal-800 dark:text-teal-200">Variables in angle brackets &lt;variable&gt;</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100">Examples Table</h6>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Data source for scenario execution</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-900 dark:text-green-100">Data-Driven</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">Multiple scenarios from one template</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100">Parameterization</h6>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Dynamic test data substitution</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Basic Scenario Outline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Code className="w-7 h-7" />
              Basic Scenario Outline Example
            </CardTitle>
            <CardDescription className="text-base">
              Creating your first data-driven scenario
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Login Validation Scenario Outline</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Feature: User Authentication
  As a user
  I want to login to the application
  So that I can access my account

  Background:
    Given I am on the login page

  Scenario Outline: Login validation with different credentials
    When I enter username "<username>"
    And I enter password "<password>"
    And I click the login button
    Then I should see "<expectedMessage>"

    Examples:
      | username                | password       | expectedMessage          |
      | john.doe@example.com    | correctPass123| Welcome, John Doe       |
      | jane.smith@example.com  | securePass456  | Welcome, Jane Smith     |
      | admin@example.com       | adminPass789   | Welcome, Admin          |
      | ""                      | anyPassword    | Username is required    |
      | test@example.com        | ""             | Password is required    |
      | invalid@email           | wrongPass      | Invalid email format    |
      | test@example.com        | short          | Password too short      |
      | unknown@example.com     | wrongPass      | Invalid credentials     |`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Advanced Scenario Outline Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <Terminal className="w-7 h-7" />
              Advanced Scenario Outline Examples
            </CardTitle>
            <CardDescription className="text-base">
              Complex data-driven testing scenarios
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              {/* E-commerce Testing */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">E-commerce Product Search</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                  <pre className="text-xs font-mono text-blue-800 dark:text-blue-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Scenario Outline: Search products with different filters
  Given I am on the products page
  When I search for "<searchTerm>"
  And I filter by category "<category>"
  And I set price range between "<minPrice>" and "<maxPrice>"
  And I sort by "<sortBy>"
  Then I should see "<expectedResultCount>" products
  And the first product should contain "<firstProductKeyword>"

  Examples:
    | searchTerm    | category    | minPrice | maxPrice | sortBy     | expectedResultCount | firstProductKeyword |
    | laptop        | Electronics | 500      | 1500     | price      | 15                  | Dell                |
    | phone         | Electronics | 200      | 800      | rating     | 23                  | iPhone              |
    | book          | Books       | 10       | 50       | relevance  | 42                  | Programming         |
    | shoes         | Fashion     | 30       | 200      | newest    | 18                  | Nike                |
    | coffee        | Grocery     | 5        | 25       | price      | 8                   | Organic             |`}</pre>
                </div>
              </div>

              {/* Form Validation */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Registration Form Validation</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Scenario Outline: User registration with various input combinations
  Given I am on the registration page
  When I enter name "<name>"
  And I enter email "<email>"
  And I enter password "<password>"
  And I confirm password "<confirmPassword>"
  And I enter phone "<phone>"
  And I agree to terms "<agreeToTerms>"
  And I click the register button
  Then I should see "<expectedResult>"

  Examples:
    | name        | email                | password    | confirmPassword | phone      | agreeToTerms | expectedResult        |
    | John Doe    | john@example.com     | Pass123!    | Pass123!        | 1234567890 | true        | Registration successful|
    | Jane Smith  | jane@example.com     | SecurePass456| SecurePass456  | 9876543210 | true        | Registration successful|
    |            | test@example.com     | Pass123!    | Pass123!        | 1234567890 | true        | Name is required      |
    | Bad Name    | invalid-email        | Pass123!    | Pass123!        | 1234567890 | true        | Invalid email format  |
    | Test User   | test@example.com     | 123         | 123             | 1234567890 | true        | Password too weak     |
    | Test User   | test@example.com     | Pass123!    | Different123    | 1234567890 | true        | Passwords don't match|
    | Test User   | test@example.com     | Pass123!    | Pass123!        |            | true        | Phone is required     |
    | Test User   | test@example.com     | Pass123!    | Pass123!        | 1234567890 | false       | Must agree to terms   |`}</pre>
                </div>
              </div>

              {/* API Testing */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">API Endpoint Testing</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                  <pre className="text-xs font-mono text-green-800 dark:text-green-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Scenario Outline: API endpoint testing with different parameters
  Given I have the API base URL configured
  When I make a "<method>" request to "<endpoint>"
  With request body "<requestBody>"
  And headers "<headers>"
  Then the response status should be "<expectedStatus>"
  And the response should contain "<expectedResponse>"

  Examples:
    | method | endpoint        | requestBody                    | headers                    | expectedStatus | expectedResponse      |
    | POST   | /api/users      | {"name":"John","email":"john@test.com"} | {"Content-Type":"application/json"} | 201            | User created successfully|
    | GET    | /api/users/1    |                               | {"Authorization":"Bearer token123"} | 200            | {"id":1,"name":"John"} |
    | PUT    | /api/users/1    | {"name":"John Updated"}        | {"Authorization":"Bearer token123"} | 200            | User updated successfully|
    | DELETE | /api/users/1    |                               | {"Authorization":"Bearer token123"} | 204            |                       |
    | POST   | /api/users      | {"name":""}                    | {"Content-Type":"application/json"} | 400            | Name is required       |
    | GET    | /api/users/999  |                               | {"Authorization":"Bearer token123"} | 404            | User not found         |
    | POST   | /api/login      | {"email":"john@test.com","pass":"wrong"} | {"Content-Type":"application/json"} | 401            | Invalid credentials    |`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Step Definitions for Scenario Outline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
              <Settings className="w-7 h-7" />
              Step Definitions for Scenario Outline
            </CardTitle>
            <CardDescription className="text-base">
              Implementing step definitions that handle parameters
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Parameterized Step Definitions</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.stepdefinitions;

import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class ScenarioOutlineSteps {
    
    private WebDriver driver;
    private WebDriverWait wait;
    
    public ScenarioOutlineSteps() {
        this.driver = WebDriverFactory.getDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(30));
    }
    
    // String parameter
    @When("I enter username {string}")
    public void iEnterUsername(String username) {
        WebElement usernameField = driver.findElement(By.id("username"));
        usernameField.clear();
        usernameField.sendKeys(username);
        System.out.println("Entered username: " + username);
    }
    
    // String parameter with special handling for empty values
    @When("I enter password {string}")
    public void iEnterPassword(String password) {
        WebElement passwordField = driver.findElement(By.id("password"));
        passwordField.clear();
        
        // Handle empty password case
        if (!password.equals("\"\"")) {
            passwordField.sendKeys(password);
        }
        
        System.out.println("Entered password: " + 
                          (password.equals("\"\"") ? "[empty]" : "[provided]"));
    }
    
    // Integer parameter
    @Then("I should see {int} products")
    public void iShouldSeeProducts(int expectedCount) {
        List<WebElement> products = driver.findElements(By.cssSelector(".product-item"));
        Assert.assertEquals(products.size(), expectedCount, 
            "Expected " + expectedCount + " products, but found " + products.size());
    }
    
    // Double parameter
    @When("I set price range between {double} and {double}")
    public void iSetPriceRange(double minPrice, double maxPrice) {
        WebElement minPriceField = driver.findElement(By.id("min-price"));
        WebElement maxPriceField = driver.findElement(By.id("max-price"));
        
        minPriceField.clear();
        minPriceField.sendKeys(String.valueOf(minPrice));
        
        maxPriceField.clear();
        maxPriceField.sendKeys(String.valueOf(maxPrice));
        
        System.out.println("Set price range: " + minPrice + " - " + maxPrice);
    }
    
    // Boolean parameter (converted from string)
    @When("I agree to terms {string}")
    public void iAgreeToTerms(String agreeValue) {
        boolean agree = Boolean.parseBoolean(agreeValue);
        WebElement termsCheckbox = driver.findElement(By.id("terms-checkbox"));
        
        if (agree && !termsCheckbox.isSelected()) {
            termsCheckbox.click();
        } else if (!agree && termsCheckbox.isSelected()) {
            termsCheckbox.click();
        }
        
        System.out.println("Terms agreement: " + agree);
    }
    
    // Regular expression for flexible parameter matching
    @When("^I search for \"([^\"]*)\"$")
    public void iSearchFor(String searchTerm) {
        WebElement searchBox = driver.findElement(By.id("search"));
        searchBox.clear();
        searchBox.sendKeys(searchTerm);
        
        WebElement searchButton = driver.findElement(By.id("search-button"));
        searchButton.click();
        
        System.out.println("Searched for: " + searchTerm);
    }
    
    // Multiple parameters in one step
    @When("I make a {string} request to {string} with request body {string}")
    public void iMakeARequestWithBody(String method, String endpoint, String requestBody) {
        // Parse JSON request body
        if (!requestBody.equals("{}")) {
            // Process request body
            apiClient.setRequestBody(requestBody);
        }
        
        // Make API request
        apiResponse = apiClient.makeRequest(method, endpoint);
        
        System.out.println("Made " + method + " request to " + endpoint);
    }
    
    // Complex parameter handling
    @When("I filter by category {string} and sort by {string}")
    public void iFilterAndSort(String category, String sortBy) {
        // Apply category filter
        if (!category.equals("All")) {
            WebElement categoryDropdown = driver.findElement(By.id("category-filter"));
            categoryDropdown.sendKeys(category);
        }
        
        // Apply sorting
        WebElement sortDropdown = driver.findElement(By.id("sort-dropdown"));
        sortDropdown.sendKeys(sortBy);
        
        // Apply filters
        driver.findElement(By.id("apply-filters")).click();
        
        System.out.println("Applied filters - Category: " + category + ", Sort: " + sortBy);
    }
    
    // Parameter with validation
    @Then("the response status should be {int}")
    public void theResponseStatusShouldBe(int expectedStatus) {
        Assert.assertEquals(apiResponse.getStatusCode(), expectedStatus, 
            "Expected status " + expectedStatus + ", but got " + apiResponse.getStatusCode());
    }
    
    // Parameter with assertion
    @Then("I should see {string}")
    public void iShouldSee(String expectedMessage) {
        WebElement messageElement = driver.findElement(By.id("message"));
        String actualMessage = messageElement.getText();
        
        Assert.assertEquals(actualMessage, expectedMessage, 
            "Expected message: " + expectedMessage + ", but got: " + actualMessage);
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <CheckCircle className="w-7 h-7" />
              Scenario Outline Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Writing effective and maintainable data-driven scenarios
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
                  <span>Use meaningful column names in Examples tables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Keep Examples tables focused on related test cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use descriptive placeholder names in scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Include both positive and negative test cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Test boundary conditions and edge cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Keep Examples tables readable and well-formatted</span>
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
                  <span>Don't create Examples tables with too many columns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid mixing unrelated test cases in one Examples table</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't use cryptic placeholder names</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid duplicate test cases in Examples tables</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't hardcode expected results that can be calculated</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid overly complex scenarios with too many parameters</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/30">
          <FileText className="h-4 w-4 text-teal-600" />
          <AlertTitle className="text-teal-900 dark:text-teal-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-teal-800 dark:text-teal-200">
            <ul className="space-y-2 mt-2">
              <li>• Scenario Outline enables data-driven testing with Examples tables</li>
              <li>• Use placeholders in angle brackets &lt;variable&gt; for parameter substitution</li>
              <li>• Each row in Examples table generates a separate scenario execution</li>
              <li>• Step definitions automatically receive the substituted values</li>
              <li>• Examples tables support various data types: strings, numbers, booleans</li>
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

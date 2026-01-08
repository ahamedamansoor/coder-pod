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
  Settings,
  Download,
  CheckCircle,
  Terminal,
  Database,
  Zap,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Star
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function CucumberSetupComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'cucumber-setup',
    title: 'Cucumber Setup',
    explanation: 'Setting up Cucumber framework for BDD testing',
    category: '22. BDD with Cucumber'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background/20">
      <PageHeader
        title="Cucumber Setup"
        description="Master the complete setup process for Cucumber BDD framework and integrate it with Selenium WebDriver for automated testing"
        icon={Package}
        category="Selenium · BDD Testing"
        colorTheme="green"
        badges={[
          { label: 'Setup', variant: 'secondary' },
          { label: 'Configuration', variant: 'secondary' },
          { label: 'Integration', variant: 'secondary' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Section 1: Prerequisites */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Settings className="w-7 h-7" />
              Prerequisites & Requirements
            </CardTitle>
            <CardDescription className="text-base">
              What you need before setting up Cucumber
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Development Environment</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-green-800 dark:text-green-200">Java JDK 8 or higher</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-green-800 dark:text-green-200">Maven or Gradle build tool</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-green-800 dark:text-green-200">IDE (IntelliJ IDEA, Eclipse, VS Code)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-green-800 dark:text-green-200">Git for version control</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4">Testing Framework</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-800 dark:text-emerald-200">TestNG or JUnit 5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-800 dark:text-emerald-200">Selenium WebDriver</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-800 dark:text-emerald-200">WebDriver Manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-800 dark:text-emerald-200">Browser drivers (Chrome, Firefox, etc.)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Maven Dependencies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <Database className="w-7 h-7" />
              Maven Dependencies
            </CardTitle>
            <CardDescription className="text-base">
              Adding Cucumber dependencies to your project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">pom.xml Configuration</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`<dependencies>
    <!-- Cucumber Core -->
    <dependency>
        <groupId>io.cucumber</groupId>
        <artifactId>cucumber-java</artifactId>
        <version>7.14.0</version>
    </dependency>
    
    <!-- Cucumber TestNG Integration -->
    <dependency>
        <groupId>io.cucumber</groupId>
        <artifactId>cucumber-testng</artifactId>
        <version>7.14.0</version>
    </dependency>
    
    <!-- TestNG -->
    <dependency>
        <groupId>org.testng</groupId>
        <artifactId>testng</artifactId>
        <version>7.8.0</version>
        <scope>test</scope>
    </dependency>
    
    <!-- Selenium WebDriver -->
    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-java</artifactId>
        <version>4.15.0</version>
    </dependency>
    
    <!-- WebDriver Manager -->
    <dependency>
        <groupId>io.github.bonigarcia</groupId>
        <artifactId>webdrivermanager</artifactId>
        <version>5.6.2</version>
    </dependency>
    
    <!-- Cucumber Reporting -->
    <dependency>
        <groupId>net.masterthought</groupId>
        <artifactId>cucumber-reporting</artifactId>
        <version>5.7.5</version>
    </dependency>
</dependencies>`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Project Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <FileText className="w-7 h-7" />
              Project Structure
            </CardTitle>
            <CardDescription className="text-base">
              Organizing your BDD project structure
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Recommended Directory Structure</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`src/
├── main/
│   └── java/
│       └── com/
│           └── example/
│               ├── config/
│               │   ├── ConfigManager.java
│               │   └── WebDriverFactory.java
│               ├── pages/
│               │   ├── BasePage.java
│               │   ├── LoginPage.java
│               │   └── HomePage.java
│               └── utils/
│                   ├── TestUtils.java
│                   └── ScreenshotUtils.java
└── test/
    ├── java/
    │   └── com/
    │       └── example/
    │           ├── runners/
    │           │   ├── TestRunner.java
    │           │   └── ParallelRunner.java
    │           └── stepdefinitions/
    │               ├── LoginSteps.java
    │               ├── RegistrationSteps.java
    │               └── CommonSteps.java
    └── resources/
        └── features/
            ├── login/
            │   ├── user-login.feature
            │   └── admin-login.feature
            ├── registration/
            │   └── user-registration.feature
            └── common/
                └── navigation.feature`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Test Runner Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
              <Zap className="w-7 h-7" />
              Test Runner Configuration
            </CardTitle>
            <CardDescription className="text-base">
              Setting up the Cucumber test runner
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">TestRunner.java</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.DataProvider;

@CucumberOptions(
    features = "src/test/resources/features",
    glue = "com.example.stepdefinitions",
    plugin = {
        "pretty",
        "html:target/cucumber-reports/cucumber.html",
        "json:target/cucumber-reports/cucumber.json",
        "junit:target/cucumber-reports/cucumber.xml"
    },
    monochrome = true,
    dryRun = false,
    strict = true
)
public class TestRunner extends AbstractTestNGCucumberTests {
    
    @Override
    @DataProvider(parallel = true)
    public Object[][] scenarios() {
        return super.scenarios();
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Configuration Files */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <Settings className="w-7 h-7" />
              Configuration Files
            </CardTitle>
            <CardDescription className="text-base">
              Essential configuration files for Cucumber setup
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* testng.xml */}
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">testng.xml</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-indigo-300 dark:border-indigo-600">
                  <pre className="text-xs font-mono text-indigo-800 dark:text-indigo-200 overflow-x-auto whitespace-pre-wrap break-words">
{`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="BDD Test Suite" parallel="tests" thread-count="4">
    <test name="Login Tests">
        <classes>
            <class name="com.example.runners.TestRunner"/>
        </classes>
    </test>
    <test name="Registration Tests">
        <classes>
            <class name="com.example.runners.TestRunner"/>
        </classes>
    </test>
</suite>`}</pre>
                </div>
              </div>

              {/* cucumber.properties */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">cucumber.properties</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`# Cucumber Configuration
cucumber.publish.quiet=true
cucumber.publish.enabled=false

# Browser Configuration
browser=chrome
headless=false
window.size=1920x1080
timeout=30

# Environment Configuration
environment=staging
base.url=https://staging.example.com
api.url=https://api.staging.example.com

# Reporting Configuration
report.format=html
report.path=target/cucumber-reports
screenshot.on.failure=true`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: First Feature File */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-teal-600 dark:text-teal-400">
              <FileText className="w-7 h-7" />
              First Feature File
            </CardTitle>
            <CardDescription className="text-base">
              Creating your first BDD feature
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">user-login.feature</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Feature: User Login
  As a registered user
  I want to login to the application
  So that I can access my personal dashboard

  Background:
    Given I navigate to the login page
    And the login page is displayed

  Scenario: Successful login with valid credentials
    When I enter valid username "testuser@example.com"
    And I enter valid password "password123"
    And I click the login button
    Then I should be redirected to the dashboard
    And I should see the welcome message "Welcome, Test User"

  Scenario: Failed login with invalid credentials
    When I enter invalid username "invalid@example.com"
    And I enter invalid password "wrongpassword"
    And I click the login button
    Then I should see an error message "Invalid email or password"
    And I should remain on the login page

  Scenario Outline: Login with different user types
    When I enter username "<username>"
    And I enter password "<password>"
    And I click the login button
    Then I should see the welcome message "<welcomeMessage>"

    Examples:
      | username                | password    | welcomeMessage       |
      | admin@example.com       | admin123    | Welcome, Admin       |
      | user@example.com        | user123     | Welcome, User        |
      | manager@example.com     | manager123  | Welcome, Manager     |`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Step Definition Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-red-600 dark:text-red-400">
              <Code className="w-7 h-7" />
              Step Definition Example
            </CardTitle>
            <CardDescription className="text-base">
              Implementing step definitions for your feature
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
import com.example.utils.WebDriverFactory;
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
    
    @Before
    public void setUp() {
        driver = WebDriverFactory.createDriver();
        loginPage = new LoginPage(driver);
        dashboardPage = new DashboardPage(driver);
        wait = new WebDriverWait(driver, Duration.ofSeconds(30));
    }
    
    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
    
    @Given("I navigate to the login page")
    public void iNavigateToTheLoginPage() {
        driver.get("https://staging.example.com/login");
    }
    
    @Given("the login page is displayed")
    public void theLoginPageIsDisplayed() {
        Assert.assertTrue(loginPage.isPageLoaded(), 
            "Login page should be displayed");
    }
    
    @When("I enter valid username {string}")
    public void iEnterValidUsername(String username) {
        loginPage.enterUsername(username);
    }
    
    @When("I enter valid password {string}")
    public void iEnterValidPassword(String password) {
        loginPage.enterPassword(password);
    }
    
    @When("I click the login button")
    public void iClickTheLoginButton() {
        loginPage.clickLoginButton();
    }
    
    @Then("I should be redirected to the dashboard")
    public void iShouldBeRedirectedToTheDashboard() {
        Assert.assertTrue(dashboardPage.isPageLoaded(), 
            "Dashboard should be displayed");
    }
    
    @Then("I should see the welcome message {string}")
    public void iShouldSeeTheWelcomeMessage(String expectedMessage) {
        String actualMessage = dashboardPage.getWelcomeMessage();
        Assert.assertEquals(actualMessage, expectedMessage, 
            "Welcome message should match expected");
    }
    
    @Then("I should see an error message {string}")
    public void iShouldSeeAnErrorMessage(String expectedMessage) {
        String actualMessage = loginPage.getErrorMessage();
        Assert.assertEquals(actualMessage, expectedMessage, 
            "Error message should match expected");
    }
    
    @Then("I should remain on the login page")
    public void iShouldRemainOnTheLoginPage() {
        Assert.assertTrue(loginPage.isPageLoaded(), 
            "Should remain on login page");
    }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
          <Package className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-900 dark:text-green-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-green-800 dark:text-green-200">
            <ul className="space-y-2 mt-2">
              <li>• Proper Maven dependencies are essential for Cucumber integration</li>
              <li>• Follow standard BDD project structure for better maintainability</li>
              <li>• TestNG integration provides powerful test execution capabilities</li>
              <li>• Feature files should be written in business-readable language</li>
              <li>• Step definitions bridge the gap between Gherkin and Selenium code</li>
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

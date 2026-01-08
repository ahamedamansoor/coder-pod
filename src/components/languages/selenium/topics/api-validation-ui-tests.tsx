'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Monitor,
  Code,
  CheckCircle,
  Settings,
  Database,
  Globe,
  Lock,
  Zap,
  Play,
  Shield,
  FileText,
  Eye,
  Bug
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function ApiValidationInUiTestsComponent() {
  // State for language tabs
  const [activeTab, setActiveTab] = useState<'java' | 'python' | 'javascript'>('java');

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'api-validation-ui-tests',
    title: 'API Validation in UI Tests',
    explanation: 'Validating API responses within Selenium UI tests',
    category: '24. API Testing & Integration'
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
        title="API Validation in UI Tests"
        description="Learn how to validate API responses while running UI tests step by step"
        icon={Monitor}
        category="Selenium · API Testing"
        colorTheme="rose"
        badges={[
          { label: 'API Validation', variant: 'secondary' },
          { label: 'UI Testing', variant: 'secondary' },
          { label: 'Selenium Integration', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* What is API Validation in UI Tests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-rose-600 dark:text-rose-400">
              <Monitor className="w-6 h-6" />
              What is API Validation in UI Tests?
            </CardTitle>
            <CardDescription>
              Understanding how to check API responses during UI testing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              API validation in UI tests means checking API responses while your UI tests are running. This helps you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>Verify that UI actions trigger correct API calls</li>
              <li>Check that API responses match what's displayed in the UI</li>
              <li>Catch API errors before they affect users</li>
              <li>Test both frontend and backend in one test</li>
            </ul>
            
            <Alert className="mt-4">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Why it matters:</AlertTitle>
              <AlertDescription>
                Combining UI and API testing gives you complete test coverage and helps find bugs faster.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Step 1: Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
              <Settings className="w-6 h-6" />
              Step 1: Set Up API Validation
            </CardTitle>
            <CardDescription>
              Prepare your test environment for API validation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Language Tabs */}
            <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              {[
                { id: 'java', label: 'Java (Selenium + REST Assured)', color: 'blue' },
                { id: 'python', label: 'Python (Selenium + Requests)', color: 'green' },
                { id: 'javascript', label: 'JavaScript (WebDriver + Axios)', color: 'yellow' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
                    activeTab === tab.id
                      ? `bg-${tab.color}-500 text-white shadow-md`
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Java Setup */}
            {activeTab === 'java' && (
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Java Setup:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Add dependencies</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Add Selenium and REST Assured to your pom.xml
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Import classes</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Import Selenium WebDriver and REST Assured
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Maven Dependencies:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`<!-- Selenium WebDriver -->
<dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>4.15.0</version>
</dependency>

<!-- REST Assured -->
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>5.3.0</version>
    <scope>test</scope>
</dependency>`}</pre>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Java Imports:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;`}</pre>
                </div>
              </div>
            )}

            {/* Python Setup */}
            {activeTab === 'python' && (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Python Setup:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Install libraries</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Install Selenium and requests using pip
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Import modules</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Import selenium and requests
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Install with pip:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Install Selenium
pip install selenium

# Install requests for API calls
pip install requests

# Install webdriver-manager
pip install webdriver-manager`}</pre>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Python Imports:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import requests
import time`}</pre>
                </div>
              </div>
            )}

            {/* JavaScript Setup */}
            {activeTab === 'javascript' && (
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">JavaScript Setup:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Install packages</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Install selenium-webdriver and axios
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Import modules</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Import webdriver and axios
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Install with npm:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Install Selenium WebDriver
npm install selenium-webdriver

# Install axios for API calls
npm install axios

# Install chromedriver
npm install chromedriver`}</pre>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">JavaScript Imports:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`const { Builder, By, until } = require('selenium-webdriver');
const axios = require('axios');
const chrome = require('selenium-webdriver/chrome');`}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Step 2: Basic API Validation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
              <Eye className="w-6 h-6" />
              Step 2: Basic API Validation
            </CardTitle>
            <CardDescription>
              Learn to validate API responses during UI tests
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Combine UI actions with API validation to ensure everything works correctly:
            </p>
            
            {/* Language-specific validation examples */}
            {activeTab === 'java' && (
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">UI Action + API Check:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Perform UI action
WebDriver driver = new ChromeDriver();
driver.get("https://example.com/users");

// Click button that triggers API call
driver.findElement(By.id("load-users")).click();

// Validate API response
given()
    .when()
    .get("https://api.example.com/users")
    .then()
    .statusCode(200)
    .body("size()", greaterThan(0));

// Verify UI shows API data
WebElement userList = driver.findElement(By.id("user-list"));
assert userList.isDisplayed();`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'python' && (
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">UI Action + API Check:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Perform UI action
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get("https://example.com/users")

# Click button that triggers API call
driver.find_element(By.ID, "load-users").click()

# Validate API response
response = requests.get("https://api.example.com/users")
assert response.status_code == 200
data = response.json()
assert len(data) > 0

# Verify UI shows API data
user_list = driver.find_element(By.ID, "user-list")
assert user_list.is_displayed()`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'javascript' && (
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">UI Action + API Check:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Perform UI action
const driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://example.com/users');

// Click button that triggers API call
await driver.findElement(By.id('load-users')).click();

// Validate API response
const response = await axios.get('https://api.example.com/users');
assert response.status === 200;
assert response.data.length > 0;

// Verify UI shows API data
const userList = await driver.findElement(By.id('user-list'));
const isDisplayed = await userList.isDisplayed();
assert isDisplayed === true;`}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Step 3: Advanced Validation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
              <Bug className="w-6 h-6" />
              Step 3: Advanced Validation Techniques
            </CardTitle>
            <CardDescription>
              Use advanced methods to validate API responses in UI tests
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Advanced validation helps you catch complex issues:
            </p>
            
            {/* Language-specific advanced examples */}
            {activeTab === 'java' && (
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Data Consistency Check:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Get data from UI
String uiUserName = driver.findElement(By.id("user-name")).getText();
String uiUserEmail = driver.findElement(By.id("user-email")).getText();

// Get same data from API
Response apiResponse = given()
    .when()
    .get("https://api.example.com/users/1")
    .then()
    .extract().response();

String apiUserName = apiResponse.jsonPath().getString("name");
String apiUserEmail = apiResponse.jsonPath().getString("email");

// Compare UI and API data
assert uiUserName.equals(apiUserName);
assert uiUserEmail.equals(apiUserEmail);`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'python' && (
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Data Consistency Check:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Get data from UI
ui_user_name = driver.find_element(By.ID, "user-name").text
ui_user_email = driver.find_element(By.ID, "user-email").text

# Get same data from API
response = requests.get("https://api.example.com/users/1")
api_data = response.json()

api_user_name = api_data["name"]
api_user_email = api_data["email"]

# Compare UI and API data
assert ui_user_name == api_user_name
assert ui_user_email == api_user_email`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'javascript' && (
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Data Consistency Check:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Get data from UI
const uiUserName = await driver.findElement(By.id('user-name')).getText();
const uiUserEmail = await driver.findElement(By.id('user-email')).getText();

// Get same data from API
const response = await axios.get('https://api.example.com/users/1');
const apiData = response.data;

const apiUserName = apiData.name;
const apiUserEmail = apiData.email;

// Compare UI and API data
assert uiUserName === apiUserName;
assert uiUserEmail === apiUserEmail;`}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Step 4: Complete Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-indigo-600 dark:text-indigo-400">
              <Play className="w-6 h-6" />
              Step 4: Complete Test Example
            </CardTitle>
            <CardDescription>
              Put it all together in a complete test
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Language-specific complete test examples */}
            {activeTab === 'java' && (
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Complete Java Test:</h4>
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`import org.testng.annotations.Test;
import org.openqa.selenium.*;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class UserApiValidationTest {
    
    @Test
    public void testUserCreationAndDisplay() {
        WebDriver driver = new ChromeDriver();
        
        try {
            // Navigate to user creation page
            driver.get("https://example.com/create-user");
            
            // Fill form and submit
            driver.findElement(By.id("name")).sendKeys("John Doe");
            driver.findElement(By.id("email")).sendKeys("john@example.com");
            driver.findElement(By.id("submit")).click();
            
            // Wait for success message
            WebDriverWait wait = new WebDriverWait(driver, 10);
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("success")));
            
            // Validate API created the user
            given()
                .when()
                .get("https://api.example.com/users?email=john@example.com")
                .then()
                .statusCode(200)
                .body("email", hasItem("john@example.com"));
            
            // Navigate to users page
            driver.get("https://example.com/users");
            
            // Verify user appears in UI
            WebElement userRow = driver.findElement(By.xpath("//td[text()='john@example.com']"));
            assert userRow.isDisplayed();
            
        } finally {
            driver.quit();
        }
    }
}`}</pre>
              </div>
            )}

            {activeTab === 'python' && (
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Complete Python Test:</h4>
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import requests
import time

class TestUserApiValidation:
    
    def test_user_creation_and_display(self):
        driver = webdriver.Chrome(ChromeDriverManager().install())
        
        try:
            # Navigate to user creation page
            driver.get("https://example.com/create-user")
            
            # Fill form and submit
            driver.find_element(By.ID, "name").send_keys("John Doe")
            driver.find_element(By.ID, "email").send_keys("john@example.com")
            driver.find_element(By.ID, "submit").click()
            
            # Wait for success message
            wait = WebDriverWait(driver, 10)
            wait.until(EC.visibility_of_element_located((By.ID, "success")))
            
            # Validate API created the user
            response = requests.get("https://api.example.com/users?email=john@example.com")
            assert response.status_code == 200
            data = response.json()
            assert any(user["email"] == "john@example.com" for user in data)
            
            # Navigate to users page
            driver.get("https://example.com/users")
            
            # Verify user appears in UI
            user_row = driver.find_element(By.XPATH, "//td[text()='john@example.com']")
            assert user_row.is_displayed()
            
        finally:
            driver.quit()

# Run with: pytest test_user_api_validation.py`}</pre>
              </div>
            )}

            {activeTab === 'javascript' && (
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Complete JavaScript Test:</h4>
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`const { Builder, By, until } = require('selenium-webdriver');
const axios = require('axios');
const { expect } = require('chai');

describe('User API Validation Tests', () => {
    
    it('should create user and display in UI', async () => {
        const driver = await new Builder().forBrowser('chrome').build();
        
        try {
            // Navigate to user creation page
            await driver.get('https://example.com/create-user');
            
            // Fill form and submit
            await driver.findElement(By.id('name')).sendKeys('John Doe');
            await driver.findElement(By.id('email')).sendKeys('john@example.com');
            await driver.findElement(By.id('submit')).click();
            
            // Wait for success message
            await driver.wait(until.elementLocated(By.id('success')), 10000);
            
            // Validate API created the user
            const response = await axios.get('https://api.example.com/users?email=john@example.com');
            expect(response.status).to.equal(200);
            const hasUser = response.data.some(user => user.email === 'john@example.com');
            expect(hasUser).to.be.true;
            
            // Navigate to users page
            await driver.get('https://example.com/users');
            
            // Verify user appears in UI
            const userRow = await driver.findElement(By.xpath("//td[text()='john@example.com']"));
            const isDisplayed = await userRow.isDisplayed();
            expect(isDisplayed).to.be.true;
            
        } finally {
            await driver.quit();
        }
    });
});

// Run with: npm test`}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Start Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-green-600 dark:text-green-400">
              <FileText className="w-6 h-6" />
              Quick Start Summary
            </CardTitle>
            <CardDescription>
              Everything you need to get started with API validation in UI tests
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                'Set up Selenium WebDriver for UI automation',
                'Add API testing library (REST Assured/Requests/Axios)',
                'Perform UI actions that trigger API calls',
                'Make API calls to validate backend responses',
                'Compare UI data with API data for consistency',
                'Use assertions to verify both UI and API behavior',
                'Handle timing and synchronization properly',
                'Clean up resources after tests complete'
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">{step}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Ready to Validate APIs in UI Tests?</h4>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Combining UI and API testing gives you complete confidence in your application. Choose your preferred language and start building comprehensive tests!
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">✓ Java (Selenium + REST Assured)</Badge>
                <Badge variant="secondary">✓ Python (Selenium + Requests)</Badge>
                <Badge variant="secondary">✓ JavaScript (WebDriver + Axios)</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Topic Navigation */}
        <TopicNavigation currentTopic={currentTopic} language={language} />
      </div>
    </div>
  );
}

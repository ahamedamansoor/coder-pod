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

export function DataTablesComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'data-tables',
    title: 'Data Tables',
    explanation: 'Working with data tables in Gherkin for complex test data',
    category: '22. BDD with Cucumber'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900 dark:to-cyan-900/20">
      <PageHeader
        title="Data Tables"
        description="Master the art of using data tables in Gherkin to handle complex test data, create multiple records, and manage tabular information in your BDD scenarios"
        icon={FileText}
        colorTheme="cyan"
        badges={[
          { label: 'Data Tables', variant: 'secondary' },
          { label: 'Tabular Data', variant: 'secondary' },
          { label: 'Test Data', variant: 'secondary' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Section 1: Introduction to Data Tables */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
              <FileText className="w-7 h-7" />
              What are Data Tables?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding data tables and their role in BDD testing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-700">
                <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4">Definition</h4>
                <p className="text-cyan-800 dark:text-cyan-200">
                  Data tables in Gherkin allow you to pass tabular data to a single step. They are useful for creating multiple records, setting up complex test data, or providing structured information that doesn't fit well in simple parameters.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Use Cases</h4>
                <p className="text-blue-800 dark:text-blue-200">
                  Data tables are perfect for creating multiple user accounts, product catalogs, form data, configuration settings, or any scenario where you need to work with structured, related data.
                </p>
              </div>
            </div>

            {/* Data Table Types */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Data Table Formats</h5>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg">
                    <Star className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-cyan-900 dark:text-cyan-100">List of Maps</h6>
                    <p className="text-sm text-cyan-800 dark:text-cyan-200">Each row as a key-value map</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100">List of Strings</h6>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Each row as a string list</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-900 dark:text-green-100">Map of Strings</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">Single row as key-value map</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100">Custom Objects</h6>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Transform to custom classes</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Basic Data Table Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Code className="w-7 h-7" />
              Basic Data Table Examples
            </CardTitle>
            <CardDescription className="text-base">
              Creating and using simple data tables
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              {/* User Creation */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Creating Multiple Users</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                  <pre className="text-sm font-mono text-green-800 dark:text-green-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Feature: User Management
  As an administrator
  I want to create multiple users
  So that they can access the system

  Scenario: Create multiple user accounts
    Given I am on the user management page
    When I create the following users:
      | name        | email                | role   | department    |
      | John Doe    | john.doe@example.com | admin  | IT            |
      | Jane Smith  | jane.smith@example.com | user   | Sales         |
      | Bob Wilson  | bob.wilson@example.com | manager| Marketing     |
      | Alice Brown | alice.brown@example.com | user   | HR            |
    Then all users should be created successfully
    And I should see 4 users in the user list`}</pre>
                </div>
              </div>

              {/* Product Catalog */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Product Catalog Setup</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                  <pre className="text-sm font-mono text-blue-800 dark:text-blue-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Scenario: Add products to catalog
  Given I am on the product management page
  When I add the following products to the catalog:
    | product name     | category    | price  | quantity | description                    |
    | Laptop Pro       | Electronics | 999.99 | 50       | High-performance laptop        |
    | Wireless Mouse   | Electronics | 29.99  | 200      | Ergonomic wireless mouse       |
    | Office Chair     | Furniture   | 199.99 | 25       | Comfortable office chair       |
    | Standing Desk    | Furniture   | 499.99 | 15       | Adjustable height desk         |
  Then all products should be added to the catalog
  And the inventory should be updated`}</pre>
                </div>
              </div>

              {/* Form Data */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Complex Form Data</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-sm font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Scenario: Fill registration form with personal details
  Given I am on the registration page
  When I fill the form with the following information:
    | field            | value                |
    | first name       | John                 |
    | last name        | Doe                  |
    | email            | john.doe@example.com |
    | phone            | 123-456-7890         |
    | address          | 123 Main St          |
    | city             | Anytown              |
    | state            | CA                   |
    | zip code         | 12345                |
    | country          | USA                  |
  And I submit the form
  Then the registration should be successful`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Advanced Data Table Patterns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
              <Terminal className="w-7 h-7" />
              Advanced Data Table Patterns
            </CardTitle>
            <CardDescription className="text-base">
              Complex data table usage patterns
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              {/* Configuration Data */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">System Configuration</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="text-sm font-mono text-orange-800 dark:text-orange-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Scenario: Configure system settings
  Given I am on the system configuration page
  When I update the following settings:
    | setting category | setting name     | value  | description                    |
    | General          | site name        | MySite | Display name of the website    |
    | General          | admin email      | admin@mysite.com | Admin contact email         |
    | Security         | session timeout  | 30     | Session timeout in minutes     |
    | Security         | password policy  | strong | Password strength requirement  |
    | Email            | smtp server      | smtp.mysite.com | SMTP server address      |
    | Email            | smtp port        | 587    | SMTP server port               |
    | Email            | email enabled    | true   | Enable email notifications     |
    | Storage          | max file size    | 10     | Max file size in MB            |
    | Storage          | allowed types    | pdf,doc,txt | Allowed file extensions   |
  Then the configuration should be saved
  And a success message should be displayed`}</pre>
                </div>
              </div>

              {/* Test Data Setup */}
              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-700">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4">Test Data Management</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-teal-300 dark:border-teal-600">
                  <pre className="text-sm font-mono text-teal-800 dark:text-teal-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Scenario: Setup test environment with sample data
  Given I am preparing the test environment
  When I create the following test data:
    | entity type | entity name      | properties                    | relationships              |
    | User        | test_user_1      | {"role":"admin","status":"active"} | ["group:admin","team:dev"] |
    | User        | test_user_2      | {"role":"user","status":"pending"} | ["group:users","team:sales"] |
    | Project     | project_alpha    | {"status":"active","budget":50000} | ["owner:test_user_1"]     |
    | Project     | project_beta     | {"status":"planning","budget":25000} | ["owner:test_user_2"]     |
    | Task        | task_1           | {"priority":"high","due_date":"2024-01-15"} | ["project:project_alpha"] |
    | Task        | task_2           | {"priority":"medium","due_date":"2024-02-01"} | ["project:project_beta"] |
  Then the test environment should be ready
  And all entities should be created with their relationships`}</pre>
                </div>
              </div>

              {/* API Request Data */}
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">API Request Testing</h4>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-indigo-300 dark:border-indigo-600">
                  <pre className="text-sm font-mono text-indigo-800 dark:text-indigo-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Scenario: Test API endpoints with various request data
  Given I have access to the API testing tool
  When I send the following API requests:
    | method | endpoint           | headers                              | body                    | expected_status |
    | POST   | /api/users         | {"Content-Type":"application/json"}   | {"name":"John","email":"john@test.com"} | 201 |
    | GET    | /api/users/1       | {"Authorization":"Bearer token123"}   |                        | 200 |
    | PUT    | /api/users/1       | {"Authorization":"Bearer token123","Content-Type":"application/json"} | {"name":"John Updated"} | 200 |
    | DELETE | /api/users/1       | {"Authorization":"Bearer token123"}   |                        | 204 |
    | POST   | /api/login         | {"Content-Type":"application/json"}   | {"email":"john@test.com","password":"wrong"} | 401 |
  Then all API requests should be processed
  And the responses should match expected status codes`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Step Definitions for Data Tables */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-red-600 dark:text-red-400">
              <Settings className="w-7 h-7" />
              Step Definitions for Data Tables
            </CardTitle>
            <CardDescription className="text-base">
              Implementing step definitions that handle data tables
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Data Table Processing Examples</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`package com.example.stepdefinitions;

import io.cucumber.java.en.*;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.WebDriver;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

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
            String department = user.get("department");
            
            System.out.println("Creating user: " + name);
            System.out.println("  Email: " + email);
            System.out.println("  Role: " + role);
            System.out.println("  Department: " + department);
            
            // Navigate to user creation page
            driver.findElement(By.id("create-user-btn")).click();
            
            // Fill user form
            driver.findElement(By.id("name")).sendKeys(name);
            driver.findElement(By.id("email")).sendKeys(email);
            
            // Select role from dropdown
            WebElement roleDropdown = driver.findElement(By.id("role"));
            roleDropdown.sendKeys(role);
            
            // Select department
            WebElement deptDropdown = driver.findElement(By.id("department"));
            deptDropdown.sendKeys(department);
            
            // Submit form
            driver.findElement(By.id("submit-btn")).click();
            
            // Wait for success message
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("success-message")));
        }
    }
    
    // Working with DataTable as List<String>
    @When("I add the following products to cart:")
    public void iAddTheFollowingProductsToCart(DataTable dataTable) {
        List<String> products = dataTable.asList(String.class);
        
        // Skip header row if present
        for (int i = 0; i < products.size(); i++) {
            String product = products.get(i);
            
            // Skip if it's a header (contains common header words)
            if (product.toLowerCase().contains("product") || 
                product.toLowerCase().contains("name")) {
                continue;
            }
            
            System.out.println("Adding product to cart: " + product);
            
            // Search for product
            WebElement searchBox = driver.findElement(By.id("search"));
            searchBox.clear();
            searchBox.sendKeys(product);
            searchBox.submit();
            
            // Wait for search results
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("product-item")));
            
            // Click first product
            driver.findElement(By.className("product-item")).click();
            
            // Add to cart
            driver.findElement(By.id("add-to-cart")).click();
            
            // Go back to search for next product
            driver.navigate().back();
        }
    }
    
    // Working with DataTable as Map<String, String>
    @And("I update my profile with:")
    public void iUpdateMyProfileWith(DataTable dataTable) {
        Map<String, String> profileData = dataTable.asMap(String.class, String.class);
        
        for (Map.Entry<String, String> entry : profileData.entrySet()) {
            String field = entry.getKey();
            String value = entry.getValue();
            
            System.out.println("Updating " + field + " with value: " + value);
            
            // Find the input field by label or name
            WebElement fieldElement = driver.findElement(By.cssSelector(
                "input[placeholder*='" + field + "'], input[name*='" + field + "'], #" + field.replace(" ", "-")));
            
            fieldElement.clear();
            fieldElement.sendKeys(value);
        }
    }
    
    // Working with DataTable transformed to custom object
    @Given("I have the following products in inventory:")
    public void iHaveTheFollowingProductsInInventory(DataTable dataTable) {
        List<Product> products = dataTable.asList(Product.class);
        
        for (Product product : products) {
            System.out.println("Adding product to inventory:");
            System.out.println("  Name: " + product.getName());
            System.out.println("  Category: " + product.getCategory());
            System.out.println("  Price: $" + product.getPrice());
            System.out.println("  Quantity: " + product.getQuantity());
            System.out.println("  Description: " + product.getDescription());
            
            // Navigate to product management
            driver.findElement(By.id("product-management")).click();
            
            // Fill product form
            driver.findElement(By.id("product-name")).sendKeys(product.getName());
            driver.findElement(By.id("product-category")).sendKeys(product.getCategory());
            driver.findElement(By.id("product-price")).sendKeys(String.valueOf(product.getPrice()));
            driver.findElement(By.id("product-quantity")).sendKeys(String.valueOf(product.getQuantity()));
            driver.findElement(By.id("product-description")).sendKeys(product.getDescription());
            
            // Submit form
            driver.findElement(By.id("add-product")).click();
        }
    }
    
    // Complex data table with JSON properties
    @When("I create the following test data:")
    public void iCreateTheFollowingTestData(DataTable dataTable) {
        List<Map<String, String>> testData = dataTable.asMaps(String.class, String.class);
        
        for (Map<String, String> data : testData) {
            String entityType = data.get("entity type");
            String entityName = data.get("entity name");
            String propertiesJson = data.get("properties");
            String relationships = data.get("relationships");
            
            System.out.println("Creating " + entityType + ": " + entityName);
            
            // Parse JSON properties
            Map<String, Object> properties = parseJson(propertiesJson);
            
            // Parse relationships
            List<String> relationshipList = parseRelationships(relationships);
            
            // Create entity based on type
            switch (entityType.toLowerCase()) {
                case "user":
                    createUser(entityName, properties, relationshipList);
                    break;
                case "project":
                    createProject(entityName, properties, relationshipList);
                    break;
                case "task":
                    createTask(entityName, properties, relationshipList);
                    break;
            }
        }
    }
    
    // Helper methods
    private Map<String, Object> parseJson(String json) {
        // Simple JSON parsing (in real implementation, use proper JSON library)
        Map<String, Object> properties = new HashMap<>();
        // Implementation would parse JSON string to map
        return properties;
    }
    
    private List<String> parseRelationships(String relationships) {
        // Parse relationship string like ["group:admin","team:dev"]
        List<String> relationshipList = new ArrayList<>();
        // Implementation would parse the relationship array
        return relationshipList;
    }
    
    private void createUser(String name, Map<String, Object> properties, List<String> relationships) {
        // Implementation for creating user
        System.out.println("Creating user with properties: " + properties);
        System.out.println("Relationships: " + relationships);
    }
    
    private void createProject(String name, Map<String, Object> properties, List<String> relationships) {
        // Implementation for creating project
        System.out.println("Creating project with properties: " + properties);
        System.out.println("Relationships: " + relationships);
    }
    
    private void createTask(String name, Map<String, Object> properties, List<String> relationships) {
        // Implementation for creating task
        System.out.println("Creating task with properties: " + properties);
        System.out.println("Relationships: " + relationships);
    }
    
    // Custom Product class for data transformation
    public static class Product {
        private String name;
        private String category;
        private double price;
        private int quantity;
        private String description;
        
        // Getters and setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getCategory() { return category; }
        public void setCategory(String category) { this.category = category; }
        public double getPrice() { return price; }
        public void setPrice(double price) { this.price = price; }
        public int getQuantity() { return quantity; }
        public void setQuantity(int quantity) { this.quantity = quantity; }
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
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
              Data Table Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Writing effective and maintainable data tables
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
                  <span>Use meaningful column names that describe the data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Keep data tables focused on related information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use appropriate data types in step definitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Validate data before using it in tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use custom objects for complex data structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Keep data tables readable and well-formatted</span>
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
                  <span>Don't create data tables with too many columns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid mixing unrelated data in one table</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't use cryptic column names</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid hardcoding business logic in step definitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore data validation in step definitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid overly complex data structures in tables</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/30">
          <FileText className="h-4 w-4 text-cyan-600" />
          <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-cyan-800 dark:text-cyan-200">
            <ul className="space-y-2 mt-2">
              <li>• Data tables provide structured tabular data for step definitions</li>
              <li>• Use asMaps() for key-value pairs, asList() for simple lists</li>
              <li>• Transform data tables to custom objects for complex structures</li>
              <li>• Data tables are ideal for creating multiple records or configuration data</li>
              <li>• Proper data validation and error handling are essential in step definitions</li>
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

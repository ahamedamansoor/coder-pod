'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  TestTube,
  Code,
  CheckCircle,
  Settings,
  Database,
  Globe,
  Lock,
  Zap,
  Play,
  Shield,
  FileText
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function RestAssuredIntegrationComponent() {
  // State for language tabs
  const [activeTab, setActiveTab] = useState<'java' | 'python' | 'javascript'>('java');

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'rest-assured-integration',
    title: 'REST Assured Integration',
    explanation: 'Using REST Assured for API testing',
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
        title="REST Assured Integration"
        description="Learn how to use REST Assured for API testing step by step"
        icon={TestTube}
        colorTheme="emerald"
        badges={[
          { label: 'REST Assured', variant: 'secondary' },
          { label: 'API Testing', variant: 'secondary' },
          { label: 'Java Library', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* What is REST Assured */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-emerald-600 dark:text-emerald-400">
              <TestTube className="w-6 h-6" />
              What is REST Assured?
            </CardTitle>
            <CardDescription>
              Understanding the basics of REST Assured
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              REST Assured is a Java library that makes it easy to test REST APIs. It helps you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>Send HTTP requests (GET, POST, PUT, DELETE)</li>
              <li>Test API responses automatically</li>
              <li>Validate JSON and XML data</li>
              <li>Work with authentication and headers</li>
            </ul>
            
            <Alert className="mt-4">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Why use REST Assured?</AlertTitle>
              <AlertDescription>
                It's simple to use, works great with Java, and integrates perfectly with test frameworks like TestNG and JUnit.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Step 1: Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
              <Settings className="w-6 h-6" />
              Step 1: Set Up API Testing
            </CardTitle>
            <CardDescription>
              Add API testing libraries to your project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Language Tabs */}
            <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              {[
                { id: 'java', label: 'Java (REST Assured)', color: 'blue' },
                { id: 'python', label: 'Python (Requests)', color: 'green' },
                { id: 'javascript', label: 'JavaScript (Axios)', color: 'yellow' }
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
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Maven Setup:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Add to pom.xml</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Add REST Assured dependency to your Maven project
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Import in code</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Add static imports for easy usage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Maven Dependency:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`<!-- Add this to your pom.xml -->
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>5.3.0</version>
    <scope>test</scope>
</dependency>

<!-- For JSON support -->
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>json-path</artifactId>
    <version>5.3.0</version>
    <scope>test</scope>
</dependency>`}</pre>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Java Imports:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Add these imports to your test class
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;`}</pre>
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
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Install requests</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Install the requests library using pip
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Import in code</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Add import statement to your Python file
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Install with pip:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Install requests library
pip install requests

# Install pytest for testing
pip install pytest

# Install jsonpath for JSON validation
pip install jsonpath-ng`}</pre>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Python Imports:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Add these imports to your test file
import requests
import json
import pytest
from jsonpath_ng import jsonpath, parse`}</pre>
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
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Install axios</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Install axios for HTTP requests
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Install jest</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Install Jest for testing framework
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Install with npm:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Install axios for HTTP requests
npm install axios

# Install Jest for testing
npm install --save-dev jest

# Install supertest for API testing
npm install --save-dev supertest`}</pre>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">JavaScript Imports:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Add these imports to your test file
const axios = require('axios');
const request = require('supertest');

// For ES6 modules
import axios from 'axios';
import request from 'supertest';`}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Step 2: Basic Requests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
              <Zap className="w-6 h-6" />
              Step 2: Make Basic API Requests
            </CardTitle>
            <CardDescription>
              Learn to send different types of HTTP requests
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Making API requests is easy with the right library. Here are the basics:
            </p>
            
            {/* Language-specific request examples */}
            {activeTab === 'java' && (
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">GET Request (Get Data):</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Simple GET request
Response response = given()
    .when()
    .get("https://api.example.com/users")
    .then()
    .extract().response();

// Print response
System.out.println(response.asString());`}</pre>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">POST Request (Create Data):</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// POST request with JSON body
String requestBody = "{\\"name\\": \\"John\\", \\"email\\": \\"john@example.com\\"}";

Response response = given()
    .header("Content-Type", "application/json")
    .body(requestBody)
    .when()
    .post("https://api.example.com/users")
    .then()
    .extract().response();`}</pre>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">PUT Request (Update Data):</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// PUT request to update data
String requestBody = "{\\"name\\": \\"John Updated\\"}";

Response response = given()
    .header("Content-Type", "application/json")
    .body(requestBody)
    .when()
    .put("https://api.example.com/users/1")
    .then()
    .extract().response();`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'python' && (
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">GET Request (Get Data):</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Simple GET request
import requests

response = requests.get("https://api.example.com/users")

# Print response
print(response.json())

# Check status code
print(f"Status: {response.status_code}")`}</pre>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">POST Request (Create Data):</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# POST request with JSON body
import requests
import json

request_body = {
    "name": "John",
    "email": "john@example.com"
}

response = requests.post(
    "https://api.example.com/users",
    json=request_body,
    headers={"Content-Type": "application/json"}
)

print(f"Status: {response.status_code}")
print(f"Response: {response.json()}")`}</pre>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">PUT Request (Update Data):</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# PUT request to update data
import requests

request_body = {
    "name": "John Updated"
}

response = requests.put(
    "https://api.example.com/users/1",
    json=request_body,
    headers={"Content-Type": "application/json"}
)

print(f"Status: {response.status_code}")
print(f"Response: {response.json()}")`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'javascript' && (
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">GET Request (Get Data):</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Simple GET request
const axios = require('axios');

async function getUsers() {
    try {
        const response = await axios.get('https://api.example.com/users');
        console.log(response.data);
        console.log('Status:', response.status);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getUsers();`}</pre>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">POST Request (Create Data):</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// POST request with JSON body
const axios = require('axios');

async function createUser() {
    try {
        const requestBody = {
            name: "John",
            email: "john@example.com"
        };

        const response = await axios.post(
            'https://api.example.com/users',
            requestBody,
            { headers: { 'Content-Type': 'application/json' } }
        );

        console.log('Status:', response.status);
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

createUser();`}</pre>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">PUT Request (Update Data):</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// PUT request to update data
const axios = require('axios');

async function updateUser() {
    try {
        const requestBody = {
            name: "John Updated"
        };

        const response = await axios.put(
            'https://api.example.com/users/1',
            requestBody,
            { headers: { 'Content-Type': 'application/json' } }
        );

        console.log('Status:', response.status);
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

updateUser();`}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Step 3: Validating Responses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
              <CheckCircle className="w-6 h-6" />
              Step 3: Validate API Responses
            </CardTitle>
            <CardDescription>
              Check if your API responses are correct
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Validating responses ensures your API is working correctly:
            </p>
            
            {/* Language-specific validation examples */}
            {activeTab === 'java' && (
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Status Code Validation:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Check status code
given()
    .when()
    .get("https://api.example.com/users/1")
    .then()
    .statusCode(200)  // Expect 200 OK
    .log().all();     // Log full response`}</pre>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
                  <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">JSON Response Validation:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Validate JSON response
given()
    .when()
    .get("https://api.example.com/users/1")
    .then()
    .statusCode(200)
    .body("name", equalTo("John Doe"))           // Check name field
    .body("email", containsString("@example.com")) // Check email
    .body("id", greaterThan(0));                 // Check ID is positive`}</pre>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Array Validation:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Validate JSON arrays
given()
    .when()
    .get("https://api.example.com/users")
    .then()
    .statusCode(200)
    .body("users.size()", greaterThan(0))        // Check array has items
    .body("users[0].name", notNullValue())      // Check first user has name
    .body("users", everyItem(hasKey("email"))); // All users have email`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'python' && (
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Status Code Validation:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Check status code
import requests
import pytest

response = requests.get("https://api.example.com/users/1")

# Assert status code is 200
assert response.status_code == 200

# Print response for debugging
print(response.json())`}</pre>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
                  <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">JSON Response Validation:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Validate JSON response
import requests

response = requests.get("https://api.example.com/users/1")
data = response.json()

# Validate response data
assert response.status_code == 200
assert data["name"] == "John Doe"
assert "@example.com" in data["email"]
assert data["id"] > 0`}</pre>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Array Validation:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Validate JSON arrays
import requests

response = requests.get("https://api.example.com/users")
data = response.json()

# Validate array data
assert response.status_code == 200
assert len(data["users"]) > 0  # Check array has items
assert data["users"][0]["name"] is not None  # Check first user has name

# Check all users have email
for user in data["users"]:
    assert "email" in user`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'javascript' && (
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Status Code Validation:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Check status code
const axios = require('axios');

async function validateUser() {
    try {
        const response = await axios.get('https://api.example.com/users/1');
        
        // Assert status code is 200
        if (response.status !== 200) {
            throw new Error('Expected status 200, got ' + response.status);
        }
        
        console.log('Status validation passed:', response.data);
    } catch (error) {
        console.error('Validation failed:', error.message);
    }
}

validateUser();`}</pre>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
                  <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">JSON Response Validation:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Validate JSON response
const axios = require('axios');

async function validateUserResponse() {
    try {
        const response = await axios.get('https://api.example.com/users/1');
        const data = response.data;
        
        // Validate response data
        if (response.status !== 200) {
            throw new Error('Status code should be 200');
        }
        
        if (data.name !== 'John Doe') {
            throw new Error('Name should be John Doe');
        }
        
        if (!data.email.includes('@example.com')) {
            throw new Error('Email should contain @example.com');
        }
        
        if (data.id <= 0) {
            throw new Error('ID should be positive');
        }
        
        console.log('All validations passed!');
    } catch (error) {
        console.error('Validation failed:', error.message);
    }
}

validateUserResponse();`}</pre>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Array Validation:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Validate JSON arrays
const axios = require('axios');

async function validateUsersArray() {
    try {
        const response = await axios.get('https://api.example.com/users');
        const data = response.data;
        
        // Validate array data
        if (response.status !== 200) {
            throw new Error('Status code should be 200');
        }
        
        if (!Array.isArray(data.users) || data.users.length === 0) {
            throw new Error('Users array should not be empty');
        }
        
        if (!data.users[0].name) {
            throw new Error('First user should have a name');
        }
        
        // Check all users have email
        data.users.forEach(user => {
            if (!user.email) {
                throw new Error('All users should have an email');
            }
        });
        
        console.log('Array validations passed!');
    } catch (error) {
        console.error('Validation failed:', error.message);
    }
}

validateUsersArray();`}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Step 4: Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-red-600 dark:text-red-400">
              <Lock className="w-6 h-6" />
              Step 4: Handle Authentication
            </CardTitle>
            <CardDescription>
              Add authentication to your API requests
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Most APIs require authentication. Here's how to handle it:
            </p>
            
            {/* Language-specific authentication examples */}
            {activeTab === 'java' && (
              <div className="space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
                  <h5 className="font-semibold text-red-900 dark:text-red-100">API Key Authentication:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-2 rounded border mt-2">
{`given()
    .header("Authorization", "Bearer YOUR_API_KEY")
    .when()
    .get("https://api.example.com/secure-data");`}</pre>
                </div>
                
                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Basic Authentication:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-2 rounded border mt-2">
{`given()
    .auth().basic("username", "password")
    .when()
    .get("https://api.example.com/secure-data");`}</pre>
                </div>
                
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h5 className="font-semibold text-green-900 dark:text-green-100">OAuth 2.0:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-2 rounded border mt-2">
{`given()
    .auth().oauth2("YOUR_OAUTH_TOKEN")
    .when()
    .get("https://api.example.com/secure-data");`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'python' && (
              <div className="space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
                  <h5 className="font-semibold text-red-900 dark:text-red-100">API Key Authentication:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-2 rounded border mt-2">
{`import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(
    "https://api.example.com/secure-data",
    headers=headers
)`}</pre>
                </div>
                
                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Basic Authentication:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-2 rounded border mt-2">
{`import requests

from requests.auth import HTTPBasicAuth

response = requests.get(
    "https://api.example.com/secure-data",
    auth=HTTPBasicAuth("username", "password")
)`}</pre>
                </div>
                
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h5 className="font-semibold text-green-900 dark:text-green-100">OAuth 2.0:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-2 rounded border mt-2">
{`import requests

headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN"
}

response = requests.get(
    "https://api.example.com/secure-data",
    headers=headers
)`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'javascript' && (
              <div className="space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
                  <h5 className="font-semibold text-red-900 dark:text-red-100">API Key Authentication:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-2 rounded border mt-2">
{`const axios = require('axios');

const headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
};

async function getSecureData() {
    try {
        const response = await axios.get(
            'https://api.example.com/secure-data',
            { headers }
        );
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}`}</pre>
                </div>
                
                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Basic Authentication:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-2 rounded border mt-2">
{`const axios = require('axios');

async function getSecureData() {
    try {
        const response = await axios.get(
            'https://api.example.com/secure-data',
            {
                auth: {
                    username: 'username',
                    password: 'password'
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}`}</pre>
                </div>
                
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h5 className="font-semibold text-green-900 dark:text-green-100">OAuth 2.0:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-2 rounded border mt-2">
{`const axios = require('axios');

const headers = {
    'Authorization': 'Bearer YOUR_OAUTH_TOKEN'
};

async function getSecureData() {
    try {
        const response = await axios.get(
            'https://api.example.com/secure-data',
            { headers }
        );
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}`}</pre>
                </div>
              </div>
            )}

            <Alert>
              <Lock className="h-4 w-4" />
              <AlertTitle>Security Tip:</AlertTitle>
              <AlertDescription>
                Store authentication tokens in environment variables or secure configuration files, not in your code.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Step 5: Complete Test Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-indigo-600 dark:text-indigo-400">
              <Play className="w-6 h-6" />
              Step 5: Complete Test Example
            </CardTitle>
            <CardDescription>
              Put it all together in a complete test
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Language-specific complete test examples */}
            {activeTab === 'java' && (
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Complete REST Assured Test:</h4>
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class UserApiTest {
    
    private static final String BASE_URL = "https://jsonplaceholder.typicode.com";
    
    @Test
    public void testGetUser() {
        given()
            .baseUri(BASE_URL)
        .when()
            .get("/users/1")
        .then()
            .statusCode(200)
            .body("name", notNullValue())
            .body("email", containsString("@"))
            .body("id", equalTo(1));
    }
    
    @Test
    public void testCreateUser() {
        String newUser = "{\\"name\\": \\"Test User\\", \\"email\\": \\"test@example.com\\"}";
        
        given()
            .baseUri(BASE_URL)
            .header("Content-Type", "application/json")
            .body(newUser)
        .when()
            .post("/users")
        .then()
            .statusCode(201)
            .body("name", equalTo("Test User"))
            .body("email", equalTo("test@example.com"))
            .body("id", notNullValue());
    }
    
    @Test
    public void testGetAllUsers() {
        given()
            .baseUri(BASE_URL)
        .when()
            .get("/users")
        .then()
            .statusCode(200)
            .body("size()", greaterThan(0))
            .body("[0].name", notNullValue());
    }
}`}</pre>
              </div>
            )}

            {activeTab === 'python' && (
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Complete Python Test:</h4>
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`import requests
import pytest
import json

BASE_URL = "https://jsonplaceholder.typicode.com"

class TestUserAPI:
    
    def test_get_user(self):
        """Test getting a single user"""
        response = requests.get(BASE_URL + "/users/1")
        
        assert response.status_code == 200
        data = response.json()
        assert data["name"] is not None
        assert "@" in data["email"]
        assert data["id"] == 1
    
    def test_create_user(self):
        """Test creating a new user"""
        new_user = {
            "name": "Test User",
            "email": "test@example.com"
        }
        
        response = requests.post(
            BASE_URL + "/users",
            json=new_user,
            headers={"Content-Type": "application/json"}
        )
        
        assert response.status_code == 201
        data = response.json()
        assert data["name"] == "Test User"
        assert data["email"] == "test@example.com"
        assert data["id"] is not None
    
    def test_get_all_users(self):
        """Test getting all users"""
        response = requests.get(BASE_URL + "/users")
        
        assert response.status_code == 200
        data = response.json()
        assert len(data) > 0
        assert data[0]["name"] is not None

# Run tests with: pytest test_user_api.py`}</pre>
              </div>
            )}

            {activeTab === 'javascript' && (
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Complete JavaScript Test:</h4>
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`const axios = require('axios');
const { expect } = require('chai');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('User API Tests', () => {
    
    it('should get a single user', async () => {
        try {
            const response = await axios.get(BASE_URL + '/users/1');
            
            expect(response.status).to.equal(200);
            expect(response.data.name).to.not.be.null;
            expect(response.data.email).to.include('@');
            expect(response.data.id).to.equal(1);
        } catch (error) {
            throw new Error('Get user test failed: ' + error.message);
        }
    });
    
    it('should create a new user', async () => {
        try {
            const newUser = {
                name: 'Test User',
                email: 'test@example.com'
            };
            
            const response = await axios.post(
                BASE_URL + '/users',
                newUser,
                { headers: { 'Content-Type': 'application/json' } }
            );
            
            expect(response.status).to.equal(201);
            expect(response.data.name).to.equal('Test User');
            expect(response.data.email).to.equal('test@example.com');
            expect(response.data.id).to.not.be.null;
        } catch (error) {
            throw new Error('Create user test failed: ' + error.message);
        }
    });
    
    it('should get all users', async () => {
        try {
            const response = await axios.get(BASE_URL + '/users');
            
            expect(response.status).to.equal(200);
            expect(response.data).to.be.an('array');
            expect(response.data.length).to.be.greaterThan(0);
            expect(response.data[0].name).to.not.be.null;
        } catch (error) {
            throw new Error('Get all users test failed: ' + error.message);
        }
    });
});

// Run tests with: npm test`}</pre>
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
              Everything you need to get started with API testing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                'Add API testing library to your project (REST Assured/Requests/Axios)',
                'Import necessary modules and dependencies',
                'Set up your request with base URL and headers',
                'Choose the HTTP method (GET, POST, PUT, DELETE)',
                'Add request body or parameters as needed',
                'Send the request and get the response',
                'Validate status codes and response data',
                'Add authentication when required',
                'Write assertions to check API behavior'
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
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Ready to Test APIs?</h4>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                With the right library and these steps, you can easily test any REST API. Choose your preferred language and start building robust API tests!
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">✓ Java (REST Assured)</Badge>
                <Badge variant="secondary">✓ Python (Requests)</Badge>
                <Badge variant="secondary">✓ JavaScript (Axios)</Badge>
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

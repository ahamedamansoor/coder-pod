'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Shield,
  Code,
  CheckCircle,
  Settings,
  Database,
  Globe,
  Lock,
  Zap,
  Play,
  Key,
  User,
  FileText,
  ShieldCheck,
  ShieldAlert
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function AuthenticationViaApiComponent() {
  // State for language tabs
  const [activeTab, setActiveTab] = useState<'java' | 'python' | 'javascript'>('java');

  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'authentication-via-api',
    title: 'Authentication via API',
    explanation: 'Implementing and testing API authentication mechanisms',
    category: '24. API Testing & Integration'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50 dark:from-slate-900 dark:to-amber-900/20">
      <PageHeader
        title="Authentication via API"
        description="Learn how to implement and test API authentication step by step"
        icon={Shield}
        colorTheme="amber"
        badges={[
          { label: 'API Authentication', variant: 'secondary' },
          { label: 'Security Testing', variant: 'secondary' },
          { label: 'Token Management', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* What is API Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-amber-600 dark:text-amber-400">
              <Shield className="w-6 h-6" />
              What is API Authentication?
            </CardTitle>
            <CardDescription>
              Understanding how API authentication works
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              API authentication is the process of verifying who you are before allowing access to API resources. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>Proving your identity to the API</li>
              <li>Getting access tokens or credentials</li>
              <li>Using tokens in subsequent API calls</li>
              <li>Refreshing tokens when they expire</li>
            </ul>
            
            <Alert className="mt-4">
              <ShieldCheck className="h-4 w-4" />
              <AlertTitle>Why it matters:</AlertTitle>
              <AlertDescription>
                Proper authentication protects your API from unauthorized access and ensures data security.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Step 1: Authentication Types */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
              <Key className="w-6 h-6" />
              Step 1: Understand Authentication Types
            </CardTitle>
            <CardDescription>
              Learn about different authentication methods
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Common Authentication Types:</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h5 className="font-semibold text-slate-900 dark:text-slate-100">API Key Authentication</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Simple key sent in headers for basic authentication
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h5 className="font-semibold text-slate-900 dark:text-slate-100">Bearer Token (JWT)</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        JSON Web Tokens for secure, stateless authentication
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h5 className="font-semibold text-slate-900 dark:text-slate-100">OAuth 2.0</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Industry standard for authorization and delegated access
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h5 className="font-semibold text-slate-900 dark:text-slate-100">Basic Authentication</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Username and password encoded in base64
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-green-600 dark:text-green-400">
              <Settings className="w-6 h-6" />
              Step 2: Set Up Authentication Testing
            </CardTitle>
            <CardDescription>
              Prepare your environment for authentication testing
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
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Java Setup:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Add dependencies</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Add REST Assured and JWT libraries to pom.xml
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Import classes</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Import authentication-related classes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Maven Dependencies:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`<!-- REST Assured -->
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>5.3.0</version>
    <scope>test</scope>
</dependency>

<!-- JWT Support -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
</dependency>`}</pre>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Java Imports:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`import static io.restassured.RestAssured.*;
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
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Install libraries</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Install requests and PyJWT using pip
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Import modules</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Import requests and JWT modules
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Install with pip:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Install requests for API calls
pip install requests

# Install PyJWT for JWT handling
pip install PyJWT

# Install pytest for testing
pip install pytest`}</pre>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Python Imports:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`import requests
import jwt
import json
import base64
from datetime import datetime, timedelta`}</pre>
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
                          Install axios and jsonwebtoken
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100">Import modules</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Import axios and JWT modules
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Install with npm:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Install axios for API calls
npm install axios

# Install jsonwebtoken for JWT handling
npm install jsonwebtoken

# Install jest for testing
npm install --save-dev jest`}</pre>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">JavaScript Imports:</h5>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`const axios = require('axios');
const jwt = require('jsonwebtoken');

// For ES6 modules
import axios from 'axios';
import jwt from 'jsonwebtoken';`}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Step 3: Authentication Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
              <Lock className="w-6 h-6" />
              Step 3: Implement Authentication
            </CardTitle>
            <CardDescription>
              Learn to implement different authentication methods
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Here are practical examples of different authentication methods:
            </p>
            
            {/* Language-specific authentication examples */}
            {activeTab === 'java' && (
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">API Key Authentication:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// API Key Authentication
String apiKey = "your-api-key-here";

Response response = given()
    .header("Authorization", "Bearer " + apiKey)
    .header("Content-Type", "application/json")
    .when()
    .get("https://api.example.com/secure-data")
    .then()
    .statusCode(200)
    .extract().response();

System.out.println("Response: " + response.asString());`}</pre>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">JWT Token Authentication:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// JWT Token Authentication
String jwtToken = "your-jwt-token-here";

Response response = given()
    .header("Authorization", "Bearer " + jwtToken)
    .header("Content-Type", "application/json")
    .when()
    .get("https://api.example.com/user/profile")
    .then()
    .statusCode(200)
    .body("email", notNullValue())
    .extract().response();`}</pre>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Basic Authentication:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Basic Authentication
Response response = given()
    .auth().basic("username", "password")
    .when()
    .get("https://api.example.com/basic-auth")
    .then()
    .statusCode(200)
    .body("authenticated", equalTo(true))
    .extract().response();`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'python' && (
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">API Key Authentication:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# API Key Authentication
api_key = "your-api-key-here"

headers = {
    "Authorization": "Bearer " + api_key,
    "Content-Type": "application/json"
}

response = requests.get(
    "https://api.example.com/secure-data",
    headers=headers
)

print("Status:", response.status_code)
print("Response:", response.json())`}</pre>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">JWT Token Authentication:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# JWT Token Authentication
jwt_token = "your-jwt-token-here"

headers = {
    "Authorization": "Bearer " + jwt_token,
    "Content-Type": "application/json"
}

response = requests.get(
    "https://api.example.com/user/profile",
    headers=headers
)

assert response.status_code == 200
data = response.json()
assert data["email"] is not None`}</pre>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Basic Authentication:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Basic Authentication
from requests.auth import HTTPBasicAuth

response = requests.get(
    "https://api.example.com/basic-auth",
    auth=HTTPBasicAuth("username", "password")
)

assert response.status_code == 200
data = response.json()
assert data["authenticated"] == True`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'javascript' && (
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">API Key Authentication:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// API Key Authentication
const apiKey = 'your-api-key-here';

const headers = {
    'Authorization': 'Bearer ' + apiKey,
    'Content-Type': 'application/json'
};

async function getSecureData() {
    try {
        const response = await axios.get(
            'https://api.example.com/secure-data',
            { headers }
        );
        
        console.log('Status:', response.status);
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getSecureData();`}</pre>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">JWT Token Authentication:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// JWT Token Authentication
const jwtToken = 'your-jwt-token-here';

const headers = {
    'Authorization': 'Bearer ' + jwtToken,
    'Content-Type': 'application/json'
};

async function getUserProfile() {
    try {
        const response = await axios.get(
            'https://api.example.com/user/profile',
            { headers }
        );
        
        assert response.status === 200;
        assert response.data.email !== undefined;
        console.log('User profile:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getUserProfile();`}</pre>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Basic Authentication:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Basic Authentication
async function basicAuthExample() {
    try {
        const response = await axios.get(
            'https://api.example.com/basic-auth',
            {
                auth: {
                    username: 'username',
                    password: 'password'
                }
            }
        );
        
        assert response.status === 200;
        assert response.data.authenticated === true;
        console.log('Auth successful:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

basicAuthExample();`}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Step 4: Token Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
              <ShieldAlert className="w-6 h-6" />
              Step 4: Token Management
            </CardTitle>
            <CardDescription>
              Handle token lifecycle and refresh
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Proper token management is crucial for secure API authentication:
            </p>
            
            {/* Language-specific token management examples */}
            {activeTab === 'java' && (
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Token Refresh Example:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Token Refresh Example
public class TokenManager {
    private String accessToken;
    private String refreshToken;
    
    public void refreshAccessToken() {
        Response response = given()
            .header("Content-Type", "application/json")
            .body("{\"refresh_token\":\"" + refreshToken + "\"}")
            .when()
            .post("https://api.example.com/auth/refresh")
            .then()
            .statusCode(200)
            .extract().response();
            
        accessToken = response.jsonPath().getString("access_token");
    }
    
    public Response makeAuthenticatedRequest(String endpoint) {
        // Check if token needs refresh
        if (isTokenExpired()) {
            refreshAccessToken();
        }
        
        return given()
            .header("Authorization", "Bearer " + accessToken)
            .when()
            .get(endpoint)
            .then()
            .extract().response();
    }
}`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'python' && (
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Token Refresh Example:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Token Refresh Example
class TokenManager:
    def __init__(self):
        self.access_token = None
        self.refresh_token = None
    
    def refresh_access_token(self):
        response = requests.post(
            "https://api.example.com/auth/refresh",
            json={"refresh_token": self.refresh_token},
            headers={"Content-Type": "application/json"}
        )
        
        if response.status_code == 200:
            self.access_token = response.json()["access_token"]
        else:
            raise Exception("Token refresh failed")
    
    def make_authenticated_request(self, endpoint):
        # Check if token needs refresh
        if self.is_token_expired():
            self.refresh_access_token()
        
        headers = {
            "Authorization": "Bearer " + self.access_token,
            "Content-Type": "application/json"
        }
        
        return requests.get(endpoint, headers=headers)`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'javascript' && (
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Token Refresh Example:</h4>
                  <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Token Refresh Example
class TokenManager {
    constructor() {
        this.accessToken = null;
        this.refreshToken = null;
    }
    
    async refreshAccessToken() {
        try {
            const response = await axios.post(
                'https://api.example.com/auth/refresh',
                { refresh_token: this.refreshToken },
                { headers: { 'Content-Type': 'application/json' } }
            );
            
            if (response.status === 200) {
                this.accessToken = response.data.access_token;
            } else {
                throw new Error('Token refresh failed');
            }
        } catch (error) {
            console.error('Refresh error:', error.message);
        }
    }
    
    async makeAuthenticatedRequest(endpoint) {
        // Check if token needs refresh
        if (this.isTokenExpired()) {
            await this.refreshAccessToken();
        }
        
        const headers = {
            'Authorization': 'Bearer ' + this.accessToken,
            'Content-Type': 'application/json'
        };
        
        return await axios.get(endpoint, { headers });
    }
}`}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Step 5: Complete Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-indigo-600 dark:text-indigo-400">
              <Play className="w-6 h-6" />
              Step 5: Complete Authentication Test
            </CardTitle>
            <CardDescription>
              Put it all together in a complete authentication test
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Language-specific complete test examples */}
            {activeTab === 'java' && (
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Complete Java Authentication Test:</h4>
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class AuthenticationTest {
    
    @Test
    public void testCompleteAuthenticationFlow() {
        // Step 1: Login and get token
        Response loginResponse = given()
            .header("Content-Type", "application/json")
            .body("{\"username\":\"testuser\",\"password\":\"testpass\"}")
            .when()
            .post("https://api.example.com/auth/login")
            .then()
            .statusCode(200)
            .extract().response();
        
        String accessToken = loginResponse.jsonPath().getString("access_token");
        String refreshToken = loginResponse.jsonPath().getString("refresh_token");
        
        // Step 2: Use token to access protected resource
        given()
            .header("Authorization", "Bearer " + accessToken)
            .when()
            .get("https://api.example.com/user/profile")
            .then()
            .statusCode(200)
            .body("username", equalTo("testuser"));
        
        // Step 3: Refresh token
        Response refreshResponse = given()
            .header("Content-Type", "application/json")
            .body("{\"refresh_token\":\"" + refreshToken + "\"}")
            .when()
            .post("https://api.example.com/auth/refresh")
            .then()
            .statusCode(200)
            .extract().response();
        
        String newAccessToken = refreshResponse.jsonPath().getString("access_token");
        
        // Step 4: Use new token
        given()
            .header("Authorization", "Bearer " + newAccessToken)
            .when()
            .get("https://api.example.com/user/profile")
            .then()
            .statusCode(200)
            .body("username", equalTo("testuser"));
        
        // Step 5: Logout
        given()
            .header("Authorization", "Bearer " + newAccessToken)
            .when()
            .post("https://api.example.com/auth/logout")
            .then()
            .statusCode(200);
    }
}`}</pre>
              </div>
            )}

            {activeTab === 'python' && (
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Complete Python Authentication Test:</h4>
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`import pytest
import requests

class TestAuthentication:
    
    def test_complete_authentication_flow(self):
        base_url = "https://api.example.com"
        
        # Step 1: Login and get token
        login_data = {
            "username": "testuser",
            "password": "testpass"
        }
        
        login_response = requests.post(
            base_url + "/auth/login",
            json=login_data,
            headers={"Content-Type": "application/json"}
        )
        
        assert login_response.status_code == 200
        tokens = login_response.json()
        access_token = tokens["access_token"]
        refresh_token = tokens["refresh_token"]
        
        # Step 2: Use token to access protected resource
        headers = {
            "Authorization": "Bearer " + access_token,
            "Content-Type": "application/json"
        }
        
        profile_response = requests.get(
            base_url + "/user/profile",
            headers=headers
        )
        
        assert profile_response.status_code == 200
        profile_data = profile_response.json()
        assert profile_data["username"] == "testuser"
        
        # Step 3: Refresh token
        refresh_data = {"refresh_token": refresh_token}
        refresh_response = requests.post(
            base_url + "/auth/refresh",
            json=refresh_data,
            headers={"Content-Type": "application/json"}
        )
        
        assert refresh_response.status_code == 200
        new_tokens = refresh_response.json()
        new_access_token = new_tokens["access_token"]
        
        # Step 4: Use new token
        headers["Authorization"] = "Bearer " + new_access_token
        new_profile_response = requests.get(
            base_url + "/user/profile",
            headers=headers
        )
        
        assert new_profile_response.status_code == 200
        assert new_profile_response.json()["username"] == "testuser"
        
        # Step 5: Logout
        logout_response = requests.post(
            base_url + "/auth/logout",
            headers=headers
        )
        
        assert logout_response.status_code == 200

# Run with: pytest test_authentication.py`}</pre>
              </div>
            )}

            {activeTab === 'javascript' && (
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Complete JavaScript Authentication Test:</h4>
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`const axios = require('axios');
const { expect } = require('chai');

describe('Authentication Tests', () => {
    const baseURL = 'https://api.example.com';
    let accessToken;
    let refreshToken;
    
    it('should complete full authentication flow', async () => {
        try {
            // Step 1: Login and get token
            const loginData = {
                username: 'testuser',
                password: 'testpass'
            };
            
            const loginResponse = await axios.post(
                baseURL + '/auth/login',
                loginData,
                { headers: { 'Content-Type': 'application/json' } }
            );
            
            expect(loginResponse.status).to.equal(200);
            accessToken = loginResponse.data.access_token;
            refreshToken = loginResponse.data.refresh_token;
            
            // Step 2: Use token to access protected resource
            const headers = {
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type': 'application/json'
            };
            
            const profileResponse = await axios.get(
                baseURL + '/user/profile',
                { headers }
            );
            
            expect(profileResponse.status).to.equal(200);
            expect(profileResponse.data.username).to.equal('testuser');
            
            // Step 3: Refresh token
            const refreshData = { refresh_token: refreshToken };
            const refreshResponse = await axios.post(
                baseURL + '/auth/refresh',
                refreshData,
                { headers: { 'Content-Type': 'application/json' } }
            );
            
            expect(refreshResponse.status).to.equal(200);
            const newAccessToken = refreshResponse.data.access_token;
            
            // Step 4: Use new token
            const newHeaders = {
                'Authorization': 'Bearer ' + newAccessToken,
                'Content-Type': 'application/json'
            };
            
            const newProfileResponse = await axios.get(
                baseURL + '/user/profile',
                { headers: newHeaders }
            );
            
            expect(newProfileResponse.status).to.equal(200);
            expect(newProfileResponse.data.username).to.equal('testuser');
            
            // Step 5: Logout
            const logoutResponse = await axios.post(
                baseURL + '/auth/logout',
                {},
                { headers: newHeaders }
            );
            
            expect(logoutResponse.status).to.equal(200);
            
        } catch (error) {
            throw new Error('Authentication test failed: ' + error.message);
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
              Everything you need to get started with API authentication
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                'Choose the right authentication method for your API',
                'Set up authentication libraries and dependencies',
                'Implement login to get access tokens',
                'Use tokens in API request headers',
                'Handle token expiration and refresh',
                'Test authentication flows end-to-end',
                'Securely store and manage credentials',
                'Implement proper logout and token cleanup'
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
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Ready to Secure Your APIs?</h4>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Proper authentication is essential for API security. Choose your preferred language and implement robust authentication today!
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

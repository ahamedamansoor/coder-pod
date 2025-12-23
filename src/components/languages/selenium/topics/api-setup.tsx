'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Database,
  Settings,
  Server,
  Cloud,
  CheckCircle,
  Code,
  Globe,
  Lock,
  Monitor,
  Play
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function ApiSetupComponent() {
  // Define the current topic and language for navigation
  const currentTopic: Topic = {
    slug: 'api-setup',
    title: 'API Setup',
    explanation: 'Setting up API testing infrastructure',
    category: '24. API Testing & Integration'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
      <PageHeader
        title="API Setup"
        description="Learn how to set up API testing infrastructure step by step"
        icon={Server}
        colorTheme="blue"
        badges={[
          { label: 'API Testing', variant: 'secondary' },
          { label: 'Setup Guide', variant: 'secondary' },
          { label: 'Configuration', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* What is API Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
              <Server className="w-6 h-6" />
              What is API Setup?
            </CardTitle>
            <CardDescription>
              Understanding the basics of API testing setup
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              API setup means preparing everything you need to test APIs. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>Setting up test environments (where you run your tests)</li>
              <li>Configuring databases for test data</li>
              <li>Creating mock services to simulate real APIs</li>
              <li>Setting up authentication and security</li>
            </ul>
            
            <Alert className="mt-4">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Why it matters:</AlertTitle>
              <AlertDescription>
                Good API setup ensures your tests are reliable, fast, and don't affect real users.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Step 1: Environment Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-green-600 dark:text-green-400">
              <Database className="w-6 h-6" />
              Step 1: Set Up Your Environment
            </CardTitle>
            <CardDescription>
              Create the places where you'll run your API tests
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Three Environments You Need:</h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100">Development Environment</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Where you write and test your API tests locally
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100">Staging Environment</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      A copy of production for testing before going live
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100">Production Environment</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      The live environment (use carefully for testing!)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Configuration Example:</h5>
              <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`# Development Environment
api.url=https://dev-api.example.com
database.url=jdbc:mysql://dev-db:3306/testdb

# Staging Environment  
api.url=https://staging-api.example.com
database.url=jdbc:mysql://staging-db:3306/testdb`}</pre>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Database Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-purple-600 dark:text-purple-400">
              <Database className="w-6 h-6" />
              Step 2: Set Up Your Database
            </CardTitle>
            <CardDescription>
              Create a database for storing and managing test data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Your API tests need data to work with. Here's how to set it up:
            </p>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Database Setup Steps:</h4>
              
              <ol className="space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>1. Create a test database:</strong> Separate from production data</li>
                <li><strong>2. Set up tables:</strong> Create the same structure as production</li>
                <li><strong>3. Add test data:</strong> Insert sample data for your tests</li>
                <li><strong>4. Create cleanup scripts:</strong> Remove test data after running</li>
              </ol>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Simple Database Example:</h5>
              <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`-- Create test database
CREATE DATABASE api_test_db;

-- Create users table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert test data
INSERT INTO users (name, email) VALUES 
('Test User 1', 'test1@example.com'),
('Test User 2', 'test2@example.com');`}</pre>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Mock Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-orange-600 dark:text-orange-400">
              <Cloud className="w-6 h-6" />
              Step 3: Create Mock Services
            </CardTitle>
            <CardDescription>
              Use mock services to simulate real APIs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Mock services are fake APIs that act like real ones. They help you:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>Test without depending on real APIs</li>
              <li>Simulate errors and edge cases</li>
              <li>Run tests faster and more reliably</li>
            </ul>

            <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-4 border border-orange-200 dark:border-orange-700">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Popular Mock Tools:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">WireMock (Java)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">MockServer (Multi-language)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">JSON Server (JavaScript)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Postman Mock Servers</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Simple Mock Example:</h5>
              <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded border">
{`// Mock API response
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith", 
      "email": "jane@example.com"
    }
  ]
}`}</pre>
            </div>
          </CardContent>
        </Card>

        {/* Step 4: Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-red-600 dark:text-red-400">
              <Lock className="w-6 h-6" />
              Step 4: Set Up Authentication
            </CardTitle>
            <CardDescription>
              Configure security for your API tests
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Most APIs require authentication. Here are the common types:
            </p>
            
            <div className="space-y-3">
              <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
                <h5 className="font-semibold text-red-900 dark:text-red-100">API Key</h5>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Simple key sent in headers: Authorization: Bearer YOUR_API_KEY
                </p>
              </div>
              
              <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100">OAuth 2.0</h5>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  More secure, uses tokens that expire and need refreshing
                </p>
              </div>
              
              <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <h5 className="font-semibold text-green-900 dark:text-green-100">Basic Auth</h5>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Username and password encoded in headers
                </p>
              </div>
            </div>

            <Alert>
              <Lock className="h-4 w-4" />
              <AlertTitle>Security Tip:</AlertTitle>
              <AlertDescription>
                Never hardcode credentials in your code. Use environment variables or secure configuration files.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Quick Start Guide */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-indigo-600 dark:text-indigo-400">
              <Play className="w-6 h-6" />
              Quick Start Guide
            </CardTitle>
            <CardDescription>
              Get your API testing setup running in 5 steps
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                'Install testing tools (Postman, RestAssured, etc.)',
                'Set up your test environment',
                'Create test database with sample data',
                'Configure mock services',
                'Set up authentication',
                'Write your first API test',
                'Run tests and verify results'
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                  <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">{step}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Ready to Start?</h4>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Follow these steps and you'll have a complete API testing setup ready to go!
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">✓ Easy to follow</Badge>
                <Badge variant="secondary">✓ Step by step</Badge>
                <Badge variant="secondary">✓ Practical examples</Badge>
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

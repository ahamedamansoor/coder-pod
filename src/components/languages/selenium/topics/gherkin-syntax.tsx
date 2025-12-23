'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  FileText,
  Code,
  Hash,
  List,
  MessageSquare,
  Terminal,
  CheckCircle,
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

export function GherkinSyntaxComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'gherkin-syntax',
    title: 'Gherkin Syntax',
    explanation: 'Understanding Gherkin language for BDD testing',
    category: '22. BDD with Cucumber'
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
        title="Gherkin Syntax"
        description="Master the Gherkin language syntax for writing readable, maintainable BDD test scenarios that everyone on your team can understand"
        icon={FileText}
        colorTheme="blue"
        badges={[
          { label: 'Gherkin', variant: 'secondary' },
          { label: 'Syntax', variant: 'secondary' },
          { label: 'Scenarios', variant: 'secondary' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Section 1: Introduction to Gherkin */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <MessageSquare className="w-7 h-7" />
              What is Gherkin?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the Gherkin language and its purpose
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Definition</h4>
                <p className="text-blue-800 dark:text-blue-200">
                  Gherkin is a business-readable, domain-specific language that describes software behavior without detailing how that behavior is implemented. It uses a simple syntax with keywords like Feature, Scenario, Given, When, Then, And, and But.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">Purpose</h4>
                <p className="text-indigo-800 dark:text-indigo-200">
                  Gherkin serves as a bridge between technical and non-technical team members, allowing everyone to understand and contribute to test scenarios in plain English.
                </p>
              </div>
            </div>

            {/* Gherkin Keywords */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Gherkin Keywords</h5>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Hash className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100"># Feature</h6>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Describes the feature being tested</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <List className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-900 dark:text-green-100">Scenario</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">Defines a specific test case</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100">Given</h6>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Sets up the initial context</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                    <Zap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-orange-900 dark:text-orange-100">When</h6>
                    <p className="text-sm text-orange-800 dark:text-orange-200">Describes the action taken</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-100 dark:bg-red-900/40 rounded-lg">
                    <Star className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-red-900 dark:text-red-100">Then</h6>
                    <p className="text-sm text-red-800 dark:text-red-200">Defines the expected outcome</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/40 rounded-lg">
                    <Code className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-teal-900 dark:text-teal-100">And/But</h6>
                    <p className="text-sm text-teal-800 dark:text-teal-200">Extends Given/When/Then steps</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Feature File Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <FileText className="w-7 h-7" />
              Feature File Structure
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the anatomy of a Gherkin feature file
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Complete Feature File Example</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`# Language: en
Feature: User Authentication
  As a registered user
  I want to authenticate myself
  So that I can access my secure account

  Background:
    Given the application is running
    And I am on the login page

  Scenario: Successful login with valid credentials
    When I enter username "john.doe@example.com"
    And I enter password "SecurePass123!"
    And I click the "Login" button
    Then I should be redirected to the dashboard
    And I should see "Welcome, John Doe" message

  Scenario: Failed login with invalid password
    When I enter username "john.doe@example.com"
    And I enter password "wrongpassword"
    And I click the "Login" button
    Then I should see "Invalid credentials" error message
    And I should remain on the login page

  Scenario Outline: Login validation with different inputs
    When I enter username "<username>"
    And I enter password "<password>"
    And I click the "Login" button
    Then I should see "<expectedMessage>"

    Examples:
      | username               | password       | expectedMessage          |
      | ""                     | "password123"  | Username is required     |
      | "test@example.com"     | ""             | Password is required     |
      | "invalid-email"        | "password123"  | Invalid email format     |
      | "test@example.com"     | "123"          | Password too short       |`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Gherkin Keywords Deep Dive */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <Terminal className="w-7 h-7" />
              Gherkin Keywords Deep Dive
            </CardTitle>
            <CardDescription className="text-base">
              Detailed explanation of each Gherkin keyword
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              {/* Feature */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Feature</h4>
                <p className="text-blue-800 dark:text-blue-200 mb-4">
                  The Feature keyword provides a high-level description of a software feature. It includes a name, description, and related scenarios.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                  <pre className="text-xs font-mono text-blue-800 dark:text-blue-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Feature: User Registration
  As a new user
  I want to create an account
  So that I can access the application's features`}</pre>
                </div>
              </div>

              {/* Scenario */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Scenario</h4>
                <p className="text-green-800 dark:text-green-200 mb-4">
                  A Scenario describes a specific behavior of the feature. Each scenario is a complete test case with Given-When-Then steps.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                  <pre className="text-xs font-mono text-green-800 dark:text-green-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Scenario: Successful user registration
  Given I am on the registration page
  When I fill in valid registration details
  And I submit the registration form
  Then I should see a success message
  And I should receive a confirmation email`}</pre>
                </div>
              </div>

              {/* Given */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Given</h4>
                <p className="text-purple-800 dark:text-purple-200 mb-4">
                  Given steps set up the initial context or preconditions for the scenario. They describe the state before the action.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Given I am logged in as a regular user
Given the shopping cart contains 3 items
Given the product is in stock
Given I have sufficient balance in my account`}</pre>
                </div>
              </div>

              {/* When */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">When</h4>
                <p className="text-orange-800 dark:text-orange-200 mb-4">
                  When steps describe the action or event that triggers the behavior being tested. There should typically be only one When step per scenario.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="text-xs font-mono text-orange-800 dark:text-orange-200 overflow-x-auto whitespace-pre-wrap break-words">
{`When I click the "Checkout" button
When I submit the contact form
When I search for "laptop computers"
When I upload a profile picture`}</pre>
                </div>
              </div>

              {/* Then */}
              <div className="p-6 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/20 rounded-xl border border-red-200 dark:border-red-700">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-4">Then</h4>
                <p className="text-red-800 dark:text-red-200 mb-4">
                  Then steps describe the expected outcome or result. They verify that the system behaves as expected after the When step.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-red-300 dark:border-red-600">
                  <pre className="text-xs font-mono text-red-800 dark:text-red-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Then I should see the order confirmation page
Then the payment should be processed successfully
Then I should receive an order confirmation email
Then my account balance should be updated`}</pre>
                </div>
              </div>

              {/* And/But */}
              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-700">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4">And / But</h4>
                <p className="text-teal-800 dark:text-teal-200 mb-4">
                  And and But are used to extend the previous step type. And adds additional conditions, while But provides an alternative or exception.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-teal-300 dark:border-teal-600">
                  <pre className="text-xs font-mono text-teal-800 dark:text-teal-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Given I am logged in as an admin
And I have permission to manage users
When I create a new user account
Then the user should be created successfully
But the user should not have admin privileges`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Advanced Gherkin Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <Zap className="w-7 h-7" />
              Advanced Gherkin Features
            </CardTitle>
            <CardDescription className="text-base">
              Exploring advanced Gherkin capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Background */}
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">Background</h4>
                <p className="text-indigo-800 dark:text-indigo-200 mb-4">
                  Background steps run before each scenario in the feature file, reducing duplication of common setup steps.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-indigo-300 dark:border-indigo-600">
                  <pre className="text-xs font-mono text-indigo-800 dark:text-indigo-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Background:
  Given I am logged in to the application
  And I am on the dashboard page

Scenario: View profile
  When I click on the profile link
  Then I should see my profile information`}</pre>
                </div>
              </div>

              {/* Scenario Outline */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Scenario Outline</h4>
                <p className="text-purple-800 dark:text-purple-200 mb-4">
                  Scenario Outline allows you to run the same scenario multiple times with different data values using Examples.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Scenario Outline: Login validation
  When I enter username "<username>"
  And I enter password "<password>"
  Then I should see "<message>"

Examples:
  | username | password | message |
  | user1    | pass123  | Success |
  | user2    | wrong    | Error   |`}</pre>
                </div>
              </div>

              {/* Data Tables */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Data Tables</h4>
                <p className="text-green-800 dark:text-green-200 mb-4">
                  Data tables allow you to pass tabular data to a step, useful for creating multiple records or complex test data.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                  <pre className="text-xs font-mono text-green-800 dark:text-green-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Given I create the following users:
  | name     | email              | role   |
  | John Doe | john@example.com   | admin  |
  | Jane Smith| jane@example.com  | user   |
  | Bob Wilson| bob@example.com   | user   |`}</pre>
                </div>
              </div>

              {/* Doc Strings */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">Doc Strings</h4>
                <p className="text-orange-800 dark:text-orange-200 mb-4">
                  Doc strings allow you to specify multi-line text content, useful for testing rich text content or long descriptions.
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="text-xs font-mono text-orange-800 dark:text-orange-200 overflow-x-auto whitespace-pre-wrap break-words">
{`When I create a blog post with the following content:
  """
  # My First Blog Post
  
  This is the introduction paragraph.
  
  ## Main Content
  
  Here's the main content of the blog post.
  It can span multiple lines and include formatting.
  """`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-teal-600 dark:text-teal-400">
              <CheckCircle className="w-7 h-7" />
              Gherkin Best Practices
            </CardTitle>
            <CardDescription className="text-base">
              Writing effective and maintainable Gherkin scenarios
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
                  <span>Write scenarios from the user's perspective</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Keep scenarios short and focused on one behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use business language, not technical terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Reuse step definitions across scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use meaningful and descriptive scenario names</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Group related scenarios in logical features</span>
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
                  <span>Don't include implementation details in scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid multiple When steps in a single scenario</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't write scenarios that test multiple features</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid technical jargon and UI element names</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't create overly complex scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid testing implementation rather than behavior</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30">
          <FileText className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-900 dark:text-blue-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-blue-800 dark:text-blue-200">
            <ul className="space-y-2 mt-2">
              <li>• Gherkin uses business-readable language to describe software behavior</li>
              <li>• Follow the Given-When-Then structure for clear scenario flow</li>
              <li>• Use Background to reduce duplication of common setup steps</li>
              <li>• Scenario Outline with Examples enables data-driven testing</li>
              <li>• Write scenarios from user perspective, avoiding technical details</li>
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

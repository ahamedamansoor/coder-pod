'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Layers,
  Package,
  GitBranch,
  Settings,
  Shield,
  Zap,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Diamond,
  Star
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function FrameworkDesignPrinciplesComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'framework-design-principles',
    title: 'Framework Design Principles',
    explanation: 'Core principles for designing robust test automation frameworks',
    category: '21. Framework Design'
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
        title="Framework Design Principles"
        description="Master the fundamental principles for building scalable, maintainable, and robust test automation frameworks"
        icon={Layers}
        colorTheme="blue"
        badges={[
          { label: 'Architecture', variant: 'secondary' },
          { label: 'Design Patterns', variant: 'secondary' },
          { label: 'Best Practices', variant: 'secondary' },
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Section 1: Introduction to Framework Design */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <Layers className="w-7 h-7" />
              What is a Test Framework?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the foundation of test automation frameworks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Definition</h4>
                <p className="text-blue-800 dark:text-blue-200">
                  A test automation framework is a structured set of guidelines, rules, standards, and concepts for creating and designing test automation scripts. It provides a systematic approach to automation testing.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Purpose</h4>
                <p className="text-purple-800 dark:text-purple-200">
                  Frameworks reduce maintenance effort, increase reusability, improve test coverage, and provide consistency across test scripts while enabling parallel execution.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Core Design Principles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Star className="w-7 h-7" />
              Core Design Principles
            </CardTitle>
            <CardDescription className="text-base">
              Fundamental principles that guide framework design
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Modularity */}
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg">
                    <Package className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-100">Modularity</h4>
                </div>
                <p className="text-sm text-emerald-800 dark:text-emerald-200 mb-4">
                  Break down the framework into independent, interchangeable modules
                </p>
                <ul className="text-xs text-emerald-700 dark:text-emerald-300 space-y-1">
                  <li>• Separate concerns</li>
                  <li>• Independent components</li>
                  <li>• Easy maintenance</li>
                  <li>• Reusable modules</li>
                </ul>
              </div>

              {/* Scalability */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100">Scalability</h4>
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                  Design to handle growth in test cases and complexity
                </p>
                <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Parallel execution</li>
                  <li>• Resource management</li>
                  <li>• Load distribution</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              {/* Maintainability */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Settings className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100">Maintainability</h4>
                </div>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                  Easy to understand, modify, and extend the framework
                </p>
                <ul className="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Clean code practices</li>
                  <li>• Documentation</li>
                  <li>• Version control</li>
                  <li>• Refactoring support</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Reliability */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                    <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100">Reliability</h4>
                </div>
                <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">
                  Consistent and dependable test execution
                </p>
                <ul className="text-xs text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Error handling</li>
                  <li>• Recovery mechanisms</li>
                  <li>• Stable locators</li>
                  <li>• Retry logic</li>
                </ul>
              </div>

              {/* Efficiency */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="font-bold text-green-900 dark:text-green-100">Efficiency</h4>
                </div>
                <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                  Optimize performance and resource utilization
                </p>
                <ul className="text-xs text-green-700 dark:text-green-300 space-y-1">
                  <li>• Fast execution</li>
                  <li>• Resource optimization</li>
                  <li>• Smart waits</li>
                  <li>• Parallel processing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Framework Architecture */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <Diamond className="w-7 h-7" />
              Framework Architecture
            </CardTitle>
            <CardDescription className="text-base">
              Key layers and components of a robust framework
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Layer-Based Architecture</h5>
              
              {/* Architecture Layers */}
              <div className="space-y-4">
                {/* Test Layer */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Triangle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100">Test Layer</h6>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      Contains actual test cases and test scenarios
                    </p>
                  </div>
                </div>

                {/* Business Layer */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <Square className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-green-900 dark:text-green-100">Business Layer</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Implements business logic and test workflows
                    </p>
                  </div>
                </div>

                {/* Page Object Layer */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Circle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100">Page Object Layer</h6>
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      Represents web pages and their interactions
                    </p>
                  </div>
                </div>

                {/* Utility Layer */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                    <Hexagon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-orange-900 dark:text-orange-100">Utility Layer</h6>
                    <p className="text-sm text-orange-800 dark:text-orange-200">
                      Provides helper functions and common utilities
                    </p>
                  </div>
                </div>

                {/* Base Layer */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-100 dark:bg-red-900/40 rounded-lg">
                    <Diamond className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-red-900 dark:text-red-100">Base Layer</h6>
                    <p className="text-sm text-red-800 dark:text-red-200">
                      Core framework setup and configuration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Design Patterns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <GitBranch className="w-7 h-7" />
              Essential Design Patterns
            </CardTitle>
            <CardDescription className="text-base">
              Common design patterns for framework development
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Page Object Pattern */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Page Object Pattern</h4>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                  Encapsulates page interactions and elements
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class LoginPage {
  private WebElement usernameField;
  private WebElement passwordField;
  
  public void login(String user, String pass) {
    usernameField.sendKeys(user);
    passwordField.sendKeys(pass);
    loginButton.click();
  }
}`}</pre>
                </div>
              </div>

              {/* Factory Pattern */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Factory Pattern</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                  Creates objects without specifying exact classes
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                  <pre className="text-xs font-mono text-blue-800 dark:text-blue-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class DriverFactory {
  public static WebDriver createDriver(String browser) {
    switch(browser.toLowerCase()) {
      case "chrome": return new ChromeDriver();
      case "firefox": return new FirefoxDriver();
      default: throw new IllegalArgumentException();
    }
  }
}`}</pre>
                </div>
              </div>

              {/* Singleton Pattern */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Singleton Pattern</h4>
                <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                  Ensures single instance of a class
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                  <pre className="text-xs font-mono text-green-800 dark:text-green-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class ConfigManager {
  private static ConfigManager instance;
  
  private ConfigManager() {}
  
  public static ConfigManager getInstance() {
    if (instance == null) {
      instance = new ConfigManager();
    }
    return instance;
  }
}`}</pre>
                </div>
              </div>

              {/* Builder Pattern */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">Builder Pattern</h4>
                <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">
                  Constructs complex objects step by step
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="text-xs font-mono text-orange-800 dark:text-orange-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class TestConfig {
  public static class Builder {
    private String browser = "chrome";
    private boolean headless = false;
    
    public Builder setBrowser(String browser) {
      this.browser = browser;
      return this;
    }
    
    public TestConfig build() {
      return new TestConfig(this);
    }
  }
}`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Star className="w-7 h-7" />
              Framework Best Practices
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
                  <span>Follow SOLID principles in framework design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement proper exception handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use configuration files for test data</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement comprehensive logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Design for parallel execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use proper wait strategies</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Avoid These ❌
              </h4>
              <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't hardcode test data in scripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid using Thread.sleep() for waits</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore exception handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid brittle locators</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't create monolithic test classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid tight coupling between components</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30">
          <Layers className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-900 dark:text-blue-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-blue-800 dark:text-blue-200">
            <ul className="space-y-2 mt-2">
              <li>• Design frameworks with modularity, scalability, and maintainability in mind</li>
              <li>• Follow established design patterns and SOLID principles</li>
              <li>• Implement proper error handling and logging mechanisms</li>
              <li>• Use configuration files for test data and environment settings</li>
              <li>• Always design for parallel execution and performance optimization</li>
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

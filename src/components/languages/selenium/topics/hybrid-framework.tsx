'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Layers,
  GitBranch,
  Database,
  FileText,
  Code,
  Settings,
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

export function HybridFrameworkComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'hybrid-framework',
    title: 'Hybrid Framework',
    explanation: 'Combining multiple framework approaches for maximum flexibility',
    category: '21. Framework Design'
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
        title="Hybrid Framework"
        description="Master the art of combining multiple framework approaches to create flexible, scalable, and maintainable test automation solutions"
        icon={GitBranch}
        colorTheme="purple"
        badges={[
          { label: 'Data-Driven', variant: 'secondary' },
          { label: 'Keyword-Driven', variant: 'secondary' },
          { label: 'Modular', variant: 'secondary' },
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Section 1: Introduction to Hybrid Framework */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <GitBranch className="w-7 h-7" />
              What is a Hybrid Framework?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the combination of multiple framework approaches
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Definition</h4>
                <p className="text-purple-800 dark:text-purple-200">
                  A hybrid framework combines multiple testing approaches like Data-Driven, Keyword-Driven, and Modular frameworks to leverage the strengths of each approach while minimizing their weaknesses.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/20 rounded-xl border border-pink-200 dark:border-pink-700">
                <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-4">Benefits</h4>
                <p className="text-pink-800 dark:text-pink-200">
                  Offers maximum flexibility, scalability, and maintainability by allowing teams to choose the best approach for each testing scenario while maintaining consistency across the framework.
                </p>
              </div>
            </div>

            {/* Framework Components */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Hybrid Framework Components</h5>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100">Data Layer</h6>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Excel, CSV, JSON, Database</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <FileText className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-900 dark:text-green-100">Keyword Layer</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">Action keywords and test steps</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100">Code Layer</h6>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Selenium WebDriver implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Framework Architecture */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <Layers className="w-7 h-7" />
              Hybrid Framework Architecture
            </CardTitle>
            <CardDescription className="text-base">
              Multi-layered architecture combining different approaches
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Layer-Based Architecture</h5>
              
              {/* Architecture Diagram */}
              <div className="space-y-4">
                {/* Test Execution Layer */}
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Triangle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100">Test Execution Layer</h6>
                  </div>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Orchestrates test execution and manages test flows
                  </p>
                </div>

                {/* Business Logic Layer */}
                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Square className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <h6 className="font-semibold text-green-900 dark:text-green-100">Business Logic Layer</h6>
                  </div>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Implements test scenarios and business workflows
                  </p>
                </div>

                {/* Keyword Engine Layer */}
                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Circle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100">Keyword Engine Layer</h6>
                  </div>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    Parses and executes keywords from test data
                  </p>
                </div>

                {/* Page Object Layer */}
                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Hexagon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    <h6 className="font-semibold text-orange-900 dark:text-orange-100">Page Object Layer</h6>
                  </div>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    Provides UI interaction methods and element locators
                  </p>
                </div>

                {/* Utility Layer */}
                <div className="p-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <h6 className="font-semibold text-red-900 dark:text-red-100">Utility Layer</h6>
                  </div>
                  <p className="text-sm text-red-800 dark:text-red-200">
                    Provides helper functions and common utilities
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Implementation Approaches */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Package className="w-7 h-7" />
              Implementation Approaches
            </CardTitle>
            <CardDescription className="text-base">
              Different ways to implement a hybrid framework
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Excel-Based Hybrid */}
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4">Excel-Based Hybrid</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-200 mb-4">
                  Uses Excel sheets for test data and keywords
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-emerald-300 dark:border-emerald-600">
                  <pre className="text-xs font-mono text-emerald-800 dark:text-emerald-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Test Case | Keyword | Locator | Data | Expected
TC001     | OpenURL | -       | https://example.com | -
TC002     | Type    | username| testuser          | -
TC003     | Type    | password| pass123           | -
TC004     | Click   | login   | -                 | Dashboard`}</pre>
                </div>
              </div>

              {/* JSON-Based Hybrid */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">JSON-Based Hybrid</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                  Uses JSON files for structured test data
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                  <pre className="text-xs font-mono text-blue-800 dark:text-blue-200 overflow-x-auto whitespace-pre-wrap break-words">
{`{
  "testName": "Login Test",
  "steps": [
    {
      "keyword": "OpenURL",
      "data": "https://example.com"
    },
    {
      "keyword": "Type",
      "locator": "username",
      "data": "testuser"
    }
  ]
}`}</pre>
                </div>
              </div>

              {/* Database-Driven Hybrid */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Database-Driven Hybrid</h4>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                  Stores test data and keywords in database
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`-- Test Cases Table
CREATE TABLE test_cases (
  id INT PRIMARY KEY,
  test_name VARCHAR(100),
  keyword VARCHAR(50),
  locator VARCHAR(100),
  test_data TEXT,
  expected_result TEXT
);`}</pre>
                </div>
              </div>

              {/* Code-Based Hybrid */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">Code-Based Hybrid</h4>
                <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">
                  Combines code with external test data
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                  <pre className="text-xs font-mono text-orange-800 dark:text-orange-200 overflow-x-auto whitespace-pre-wrap break-words">
{`@Test(dataProvider = "loginData")
public void testLogin(String user, String pass) {
  keywordEngine.executeKeyword("OpenURL", 
    "https://example.com");
  keywordEngine.executeKeyword("Type", 
    "username", user);
  keywordEngine.executeKeyword("Type", 
    "password", pass);
  keywordEngine.executeKeyword("Click", "login");
}`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Keyword Engine Implementation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <Settings className="w-7 h-7" />
              Keyword Engine Implementation
            </CardTitle>
            <CardDescription className="text-base">
              Core engine that processes and executes keywords
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Keyword Engine Example</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class KeywordEngine {
  private WebDriver driver;
  private Map<String, Keyword> keywords;
  
  public KeywordEngine(WebDriver driver) {
    this.driver = driver;
    initializeKeywords();
  }
  
  private void initializeKeywords() {
    keywords = new HashMap<>();
    keywords.put("OpenURL", new OpenURLKeyword());
    keywords.put("Type", new TypeKeyword());
    keywords.put("Click", new ClickKeyword());
    keywords.put("Select", new SelectKeyword());
    keywords.put("Verify", new VerifyKeyword());
  }
  
  public void executeKeyword(String keyword, 
                            String locator, String data) {
    Keyword keywordObj = keywords.get(keyword);
    if (keywordObj != null) {
      keywordObj.execute(driver, locator, data);
    } else {
      throw new IllegalArgumentException(
        "Unknown keyword: " + keyword);
    }
  }
}

// Keyword Interface
public interface Keyword {
  void execute(WebDriver driver, String locator, String data);
}

// Example Keyword Implementation
public class TypeKeyword implements Keyword {
  public void execute(WebDriver driver, String locator, String data) {
    WebElement element = driver.findElement(By.id(locator));
    element.clear();
    element.sendKeys(data);
  }
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <Star className="w-7 h-7" />
              Hybrid Framework Best Practices
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
                  <span>Design modular and reusable keywords</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use external data sources for test data</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement proper error handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Provide detailed logging and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Support parallel execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use version control for test artifacts</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Avoid These ❌
              </h4>
              <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't create overly complex keywords</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid hardcoding test data in keywords</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore exception handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid tight coupling between layers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't skip proper documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid monolithic keyword implementations</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/30">
          <GitBranch className="h-4 w-4 text-purple-600" />
          <AlertTitle className="text-purple-900 dark:text-purple-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-purple-800 dark:text-purple-200">
            <ul className="space-y-2 mt-2">
              <li>• Hybrid frameworks combine the best of multiple approaches</li>
              <li>• Design modular keywords that are reusable and maintainable</li>
              <li>• Use external data sources for maximum flexibility</li>
              <li>• Implement proper error handling and logging mechanisms</li>
              <li>• Always design for scalability and parallel execution</li>
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

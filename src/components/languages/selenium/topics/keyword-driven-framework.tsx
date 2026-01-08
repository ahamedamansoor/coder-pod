'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  FileText,
  Database,
  Code,
  Play,
  Settings,
  Zap,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Star,
  Package,
  Key
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function KeywordDrivenFrameworkComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'keyword-driven-framework',
    title: 'Keyword-Driven Framework',
    explanation: 'Implementing keyword-driven test automation',
    category: '21. Framework Design'
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
        title="Keyword-Driven Framework"
        description="Master the art of creating keyword-driven test automation frameworks that separate test logic from test data and enable non-technical users to create tests"
        icon={FileText}
        category="Selenium · Design Patterns"
        colorTheme="green"
        badges={[
          { label: 'Keywords', variant: 'secondary' },
          { label: 'Data-Driven', variant: 'secondary' },
          { label: 'Business-Friendly', variant: 'secondary' },
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Section 1: Introduction to Keyword-Driven Framework */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <FileText className="w-7 h-7" />
              What is a Keyword-Driven Framework?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the keyword-driven testing approach
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Definition</h4>
                <p className="text-green-800 dark:text-green-200">
                  A keyword-driven framework uses keywords to represent test actions, making tests readable and maintainable. Test cases are written in a tabular format using keywords, locators, and test data.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4">Key Benefits</h4>
                <p className="text-emerald-800 dark:text-emerald-200">
                  Enables non-technical users to create tests, improves reusability, reduces maintenance, and provides clear separation between test logic and test implementation.
                </p>
              </div>
            </div>

            {/* Framework Components */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Framework Components</h5>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100">Test Data Files</h6>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Excel, CSV, JSON formats</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <Key className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-900 dark:text-green-100">Keyword Library</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">Reusable action keywords</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Play className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100">Execution Engine</h6>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Processes and executes keywords</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Keyword Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
              <Key className="w-7 h-7" />
              Keyword Structure
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the anatomy of keywords
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Basic Keyword Structure */}
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">Basic Structure</h4>
                <p className="text-sm text-indigo-800 dark:text-indigo-200 mb-4">
                  Each keyword represents a specific action
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-indigo-300 dark:border-indigo-600">
                  <pre className="text-xs font-mono text-indigo-800 dark:text-indigo-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Keyword | Locator | Data | Expected
OpenURL | -       | https://example.com | -
Type    | username| testuser          | -
Click   | login   | -                 | Dashboard
Verify  | title   | Welcome Page      | Welcome Page`}</pre>
                </div>
              </div>

              {/* Advanced Keyword Structure */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Advanced Structure</h4>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                  Enhanced keywords with parameters
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                  <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`TestStep | Action     | Object      | Value     | Timeout
1        | Navigate   | URL         | https://example.com | 10
2        | Type       | username    | testuser  | 5
3        | Type       | password    | pass123   | 5
4        | Click      | loginBtn    | -         | 3
5        | VerifyText | welcomeMsg  | Welcome   | 10`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Common Keywords */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <Package className="w-7 h-7" />
              Common Keywords
            </CardTitle>
            <CardDescription className="text-base">
              Essential keywords for web automation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Navigation Keywords */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Navigation Keywords</h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-blue-300 dark:border-blue-600">
                    <pre className="text-xs font-mono text-blue-800 dark:text-blue-200">
{`OpenURL | - | https://example.com | -
Navigate | - | /login | -
Back     | - | - | -
Forward  | - | - | -
Refresh  | - | - | -`}</pre>
                  </div>
                </div>
              </div>

              {/* Input Keywords */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Input Keywords</h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-green-300 dark:border-green-600">
                    <pre className="text-xs font-mono text-green-800 dark:text-green-200">
{`Type    | username | testuser | -
Clear   | password | -         | -
Select  | country  | USA       | -
Upload  | file     | test.pdf  | -`}</pre>
                  </div>
                </div>
              </div>

              {/* Click Keywords */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Click Keywords</h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-purple-300 dark:border-purple-600">
                    <pre className="text-xs font-mono text-purple-800 dark:text-purple-200">
{`Click      | login    | - | -
DoubleClick | button   | - | -
RightClick  | menu     | - | -
ClickAndHold| dragItem | - | -`}</pre>
                  </div>
                </div>
              </div>

              {/* Verification Keywords */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">Verification Keywords</h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-orange-300 dark:border-orange-600">
                    <pre className="text-xs font-mono text-orange-800 dark:text-orange-200">
{`VerifyText  | title    | Welcome | -
VerifyElement| login   | - | -
VerifyEnabled| submit  | true    | -
WaitForElement| loading| - | 10`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Implementation Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <Code className="w-7 h-7" />
              Implementation Example
            </CardTitle>
            <CardDescription className="text-base">
              Complete keyword-driven framework implementation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Keyword Engine Implementation</h5>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-600">
                <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`public class KeywordEngine {
    private WebDriver driver;
    private Map<String, KeywordAction> keywords;
    
    public KeywordEngine(WebDriver driver) {
        this.driver = driver;
        initializeKeywords();
    }
    
    private void initializeKeywords() {
        keywords = new HashMap<>();
        keywords.put("OpenURL", new OpenURLAction());
        keywords.put("Type", new TypeAction());
        keywords.put("Click", new ClickAction());
        keywords.put("VerifyText", new VerifyTextAction());
        keywords.put("Select", new SelectAction());
        keywords.put("WaitForElement", new WaitForElementAction());
    }
    
    public void executeKeyword(String keyword, String locator, 
                              String data, String expected) {
        KeywordAction action = keywords.get(keyword);
        if (action != null) {
            action.execute(driver, locator, data, expected);
        } else {
            throw new IllegalArgumentException(
                "Unknown keyword: " + keyword);
        }
    }
    
    public void executeTestSuite(List<TestStep> testSteps) {
        for (TestStep step : testSteps) {
            try {
                executeKeyword(step.getKeyword(), 
                               step.getLocator(), 
                               step.getData(), 
                               step.getExpected());
                // Log success
                TestLogger.logStep(step.getKeyword(), "PASS");
            } catch (Exception e) {
                // Log failure
                TestLogger.logStep(step.getKeyword(), "FAIL: " + e.getMessage());
                throw e;
            }
        }
    }
}

// Keyword Action Interface
public interface KeywordAction {
    void execute(WebDriver driver, String locator, 
                String data, String expected);
}

// Example Keyword Implementation
public class TypeAction implements KeywordAction {
    public void execute(WebDriver driver, String locator, 
                        String data, String expected) {
        WebElement element = driver.findElement(
            LocatorStrategy.getLocator(locator));
        element.clear();
        element.sendKeys(data);
    }
}

// Test Step Data Model
public class TestStep {
    private String keyword;
    private String locator;
    private String data;
    private String expected;
    
    // Getters and setters
    public String getKeyword() { return keyword; }
    public String getLocator() { return locator; }
    public String getData() { return data; }
    public String getExpected() { return expected; }
}

// Excel Data Reader
public class ExcelDataReader {
    public List<TestStep> readTestSteps(String filePath, 
                                       String sheetName) {
        List<TestStep> testSteps = new ArrayList<>();
        
        try (Workbook workbook = WorkbookFactory.create(
                new File(filePath))) {
            Sheet sheet = workbook.getSheet(sheetName);
            
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row != null) {
                    TestStep step = new TestStep();
                    step.setKeyword(getCellValue(row, 0));
                    step.setLocator(getCellValue(row, 1));
                    step.setData(getCellValue(row, 2));
                    step.setExpected(getCellValue(row, 3));
                    testSteps.add(step);
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(
                "Error reading Excel file: " + e.getMessage());
        }
        
        return testSteps;
    }
    
    private String getCellValue(Row row, int cellIndex) {
        Cell cell = row.getCell(cellIndex);
        if (cell == null) return "";
        
        switch (cell.getCellType()) {
            case STRING: return cell.getStringCellValue();
            case NUMERIC: return String.valueOf(
                           cell.getNumericCellValue());
            case BOOLEAN: return String.valueOf(
                            cell.getBooleanCellValue());
            default: return "";
        }
    }
}

// Test Execution Example
public class KeywordTestRunner {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        KeywordEngine engine = new KeywordEngine(driver);
        ExcelDataReader reader = new ExcelDataReader();
        
        try {
            // Read test data from Excel
            List<TestStep> testSteps = reader.readTestSteps(
                "test-data.xlsx", "LoginTest");
            
            // Execute test
            engine.executeTestSuite(testSteps);
            
            System.out.println("Test executed successfully!");
        } catch (Exception e) {
            System.err.println("Test failed: " + e.getMessage());
        } finally {
            driver.quit();
        }
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
              Keyword Framework Best Practices
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
                  <span>Use descriptive and meaningful keyword names</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement proper error handling for each keyword</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Provide detailed logging and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Use external data sources for test data</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Design keywords to be reusable and modular</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implement timeout and wait strategies</span>
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
                  <span>Avoid brittle locators in test data</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Don't skip proper documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avoid tight coupling between keywords</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
          <FileText className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-900 dark:text-green-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-green-800 dark:text-green-200">
            <ul className="space-y-2 mt-2">
              <li>• Keyword-driven frameworks enable non-technical test creation</li>
              <li>• Design clear, reusable, and maintainable keywords</li>
              <li>• Use external data sources for maximum flexibility</li>
              <li>• Implement comprehensive error handling and logging</li>
              <li>• Always design for scalability and ease of maintenance</li>
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

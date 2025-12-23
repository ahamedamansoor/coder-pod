'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Rocket,
  Code,
  CheckCircle,
  Play,
  Terminal,
  FileCode,
  Zap,
  Copy,
  AlertCircle,
  Sparkles,
  Target,
  ArrowRight,
  RefreshCw,
  Globe
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useSeleniumPlayground } from '../playground/selenium-playground-context';
import { SeleniumPlaygroundModal } from '../playground/selenium-playground-modal';
import { useToast } from '@/hooks/use-toast';

export function YourFirstTest() {
  const { openPlayground } = useSeleniumPlayground();
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [executionLogs, setExecutionLogs] = React.useState<string[]>([]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const simulateExecution = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);

    const steps = [
      { step: 0, log: '🚀 Starting test execution...', delay: 500 },
      { step: 1, log: '🌐 Opening Chrome browser...', delay: 1000 },
      { step: 2, log: '🔍 Navigating to Google.com...', delay: 1200 },
      { step: 3, log: '📝 Finding search box element...', delay: 800 },
      { step: 4, log: '⌨️  Typing "Selenium WebDriver"...', delay: 1000 },
      { step: 5, log: '🚀 Submitting search...', delay: 1000 },
      { step: 6, log: '⏳ Waiting for results...', delay: 1500 },
      { step: 7, log: '✅ Verifying page title contains "Selenium"...', delay: 800 },
      { step: 8, log: '✅ Test Passed! Title verification successful', delay: 500 },
      { step: 9, log: '❌ Closing browser...', delay: 800 },
      { step: 10, log: '🎉 Test completed successfully!', delay: 500 },
    ];

    for (const { step, log, delay } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setExecutionLogs(prev => [...prev, log]);
    }

    setIsRunning(false);
  };

  const testCode = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
import time

# Setup Chrome driver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

try:
    # Step 1: Navigate to Google
    print("Opening Google...")
    driver.get("https://www.google.com")
    
    # Step 2: Find the search box
    print("Finding search box...")
    search_box = driver.find_element(By.NAME, "q")
    
    # Step 3: Type search query
    print("Typing search query...")
    search_box.send_keys("Selenium WebDriver")
    
    # Step 4: Submit the search
    print("Submitting search...")
    search_box.send_keys(Keys.RETURN)
    
    # Step 5: Wait for results
    time.sleep(2)
    
    # Step 6: Verify results
    print("Verifying results...")
    assert "Selenium" in driver.title
    print("✅ Test Passed! Found 'Selenium' in page title")
    
finally:
    # Step 7: Close browser
    print("Closing browser...")
    driver.quit()
    print("Test completed!")`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FirstTest {
    public static void main(String[] args) {
        // Setup Chrome driver
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        
        try {
            // Step 1: Navigate to Google
            System.out.println("Opening Google...");
            driver.get("https://www.google.com");
            
            // Step 2: Find the search box
            System.out.println("Finding search box...");
            var searchBox = driver.findElement(By.name("q"));
            
            // Step 3: Type search query
            System.out.println("Typing search query...");
            searchBox.sendKeys("Selenium WebDriver");
            
            // Step 4: Submit the search
            System.out.println("Submitting search...");
            searchBox.sendKeys(Keys.RETURN);
            
            // Step 5: Wait for results
            Thread.sleep(2000);
            
            // Step 6: Verify results
            System.out.println("Verifying results...");
            assert driver.getTitle().contains("Selenium");
            System.out.println("✅ Test Passed!");
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Step 7: Close browser
            System.out.println("Closing browser...");
            driver.quit();
            System.out.println("Test completed!");
        }
    }
}`,
    javascript: `const { Builder, By, Key, until } = require('selenium-webdriver');

async function firstTest() {
    // Setup Chrome driver
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();
    
    try {
        // Step 1: Navigate to Google
        console.log('Opening Google...');
        await driver.get('https://www.google.com');
        
        // Step 2: Find the search box
        console.log('Finding search box...');
        let searchBox = await driver.findElement(By.name('q'));
        
        // Step 3: Type search query
        console.log('Typing search query...');
        await searchBox.sendKeys('Selenium WebDriver');
        
        // Step 4: Submit the search
        console.log('Submitting search...');
        await searchBox.sendKeys(Key.RETURN);
        
        // Step 5: Wait for results
        await driver.wait(until.titleContains('Selenium'), 5000);
        
        // Step 6: Verify results
        console.log('Verifying results...');
        let title = await driver.getTitle();
        if (title.includes('Selenium')) {
            console.log('✅ Test Passed!');
        }
        
    } finally {
        // Step 7: Close browser
        console.log('Closing browser...');
        await driver.quit();
        console.log('Test completed!');
    }
}

firstTest();`,
    csharp: `using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using WebDriverManager;
using WebDriverManager.DriverConfigs.Impl;
using System;
using System.Threading;

class FirstTest
{
    static void Main()
    {
        // Setup Chrome driver
        new DriverManager().SetUpDriver(new ChromeConfig());
        IWebDriver driver = new ChromeDriver();
        
        try
        {
            // Step 1: Navigate to Google
            Console.WriteLine("Opening Google...");
            driver.Navigate().GoToUrl("https://www.google.com");
            
            // Step 2: Find the search box
            Console.WriteLine("Finding search box...");
            IWebElement searchBox = driver.FindElement(By.Name("q"));
            
            // Step 3: Type search query
            Console.WriteLine("Typing search query...");
            searchBox.SendKeys("Selenium WebDriver");
            
            // Step 4: Submit the search
            Console.WriteLine("Submitting search...");
            searchBox.SendKeys(Keys.Return);
            
            // Step 5: Wait for results
            Thread.Sleep(2000);
            
            // Step 6: Verify results
            Console.WriteLine("Verifying results...");
            if (driver.Title.Contains("Selenium"))
            {
                Console.WriteLine("✅ Test Passed!");
            }
        }
        finally
        {
            // Step 7: Close browser
            Console.WriteLine("Closing browser...");
            driver.Quit();
            Console.WriteLine("Test completed!");
        }
    }
}`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Rocket}
        category="Selenium · Getting Started"
        title="Your First Test"
        description="Write and run your first Selenium WebDriver test. A complete end-to-end example with step-by-step explanation."
        colorTheme="green"
        badges={[
          { label: 'Beginner Friendly', variant: 'success' },
          { label: 'Complete Example', variant: 'info' },
          { label: 'Step-by-Step', variant: 'secondary' },
        ]}
      />

      {/* What We'll Build */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            What We'll Build
          </CardTitle>
          <CardDescription>A simple but complete automated test</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Test Scenario: Google Search</h4>
            <div className="space-y-3">
              {[
                { step: 1, text: 'Open Chrome browser', icon: '🌐' },
                { step: 2, text: 'Navigate to Google.com', icon: '🔍' },
                { step: 3, text: 'Find the search box', icon: '📝' },
                { step: 4, text: 'Type "Selenium WebDriver"', icon: '⌨️' },
                { step: 5, text: 'Submit the search', icon: '🚀' },
                { step: 6, text: 'Verify results appear', icon: '✅' },
                { step: 7, text: 'Close the browser', icon: '❌' },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-slate-700 dark:text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Test Code */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Complete Test Code
          </CardTitle>
          <CardDescription>Choose your programming language</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'python', label: 'Python', icon: '🐍' },
              { id: 'java', label: 'Java', icon: '☕' },
              { id: 'javascript', label: 'JavaScript', icon: '📜' },
            ].map((lang) => (
              <Button
                key={lang.id}
                variant={selectedLanguage === lang.id ? 'default' : 'outline'}
                size="lg"
                onClick={() => setSelectedLanguage(lang.id as any)}
                className={`gap-2 ${
                  selectedLanguage === lang.id
                    ? 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700'
                    : ''
                }`}
              >
                <span className="text-xl">{lang.icon}</span>
                {lang.label}
              </Button>
            ))}
          </div>

          <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">
            <Sparkles className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Interactive Demo!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Click the "Run Test" button to see a live simulation of how this test executes step by step!
            </AlertDescription>
          </Alert>

          {/* Visual Browser Simulation - Top */}
          {currentStep > 0 && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-slate-600 dark:text-slate-400 ml-2">Chrome Browser</span>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded p-3 space-y-2">
                {currentStep >= 2 && (
                  <div className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>https://www.google.com</span>
                  </div>
                )}
                
                {currentStep >= 3 && (
                  <div className="border-2 border-blue-400 rounded p-2 bg-blue-50 dark:bg-blue-950/30">
                    <div className="text-xs text-slate-700 dark:text-slate-300">
                      {currentStep >= 4 ? (
                        <span className="font-medium">Selenium WebDriver</span>
                      ) : (
                        <span className="text-slate-400">Search...</span>
                      )}
                    </div>
                  </div>
                )}
                
                {currentStep >= 6 && (
                  <div className="space-y-1 mt-3">
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      Search Results for "Selenium WebDriver"
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      ✓ Found results about Selenium automation
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Split View: Code on Left, Output on Right - Bottom */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left: Code Editor */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Test Code</h4>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(testCode[selectedLanguage], 'Test code')}
                  className="gap-2"
                >
                  <Copy className="w-3 h-3" />
                  Copy
                </Button>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700">
                <pre className="overflow-x-auto">{testCode[selectedLanguage]}</pre>
              </div>
            </div>

            {/* Right: Live Output */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Live Execution</h4>
                <Button
                  size="sm"
                  onClick={simulateExecution}
                  disabled={isRunning}
                  className="gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
                >
                  {isRunning ? (
                    <>
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3" />
                      Run Test
                    </>
                  )}
                </Button>
              </div>
              
              <div className="bg-slate-100 dark:bg-black p-4 rounded-lg font-mono text-xs text-emerald-800 dark:text-emerald-200 max-h-[400px] overflow-y-auto border-2 border-emerald-200 dark:border-emerald-700">
                {executionLogs.length === 0 ? (
                  <div className="flex items-center justify-center h-[368px] text-slate-500">
                    <div className="text-center space-y-2">
                      <Terminal className="w-12 h-12 mx-auto opacity-50" />
                      <p>Click "Run Test" to see execution</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {executionLogs.map((log, index) => (
                      <div
                        key={index}
                        className="text-emerald-700 dark:text-emerald-200 animate-in fade-in slide-in-from-left-2 duration-300"
                      >
                        {log}
                      </div>
                    ))}
                    {isRunning && (
                      <div className="flex items-center gap-2 text-amber-600 dark:text-amber-200 animate-pulse">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        <span>Executing...</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Code Breakdown */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <FileCode className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Understanding the Code
          </CardTitle>
          <CardDescription>Let's break down what each part does</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                Setup WebDriver
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Initialize the Chrome driver using WebDriver Manager. This automatically downloads and configures the driver.
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded block">
                {selectedLanguage === 'python' && 'service = Service(ChromeDriverManager().install())'}
                {selectedLanguage === 'java' && 'WebDriverManager.chromedriver().setup()'}
                {selectedLanguage === 'javascript' && 'new Builder().forBrowser(\'chrome\').build()'}
              </code>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                Navigate to URL
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Open the browser and navigate to Google's homepage.
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded block">
                driver.get("https://www.google.com")
              </code>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                Find Element
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Locate the search box using its name attribute. This is called a "locator strategy".
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded block">
                {selectedLanguage === 'python' && 'driver.find_element(By.NAME, "q")'}
                {selectedLanguage === 'java' && 'driver.findElement(By.name("q"))'}
                {selectedLanguage === 'javascript' && 'driver.findElement(By.name(\'q\'))'}
              </code>
            </div>

            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                Interact with Element
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Type text into the search box and press Enter to submit.
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded block">
                {selectedLanguage === 'python' && 'search_box.send_keys("Selenium WebDriver")'}
                {selectedLanguage === 'java' && 'searchBox.sendKeys("Selenium WebDriver")'}
                {selectedLanguage === 'javascript' && 'searchBox.sendKeys(\'Selenium WebDriver\')'}
              </code>
            </div>

            <div className="p-5 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-xl border-l-4 border-teal-500">
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</div>
                Verify Results
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Check that the page title contains "Selenium" to verify the search worked.
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded block">
                {selectedLanguage === 'python' && 'assert "Selenium" in driver.title'}
                {selectedLanguage === 'java' && 'assert driver.getTitle().contains("Selenium")'}
                {selectedLanguage === 'javascript' && 'await driver.wait(until.titleContains(\'Selenium\'))'}
              </code>
            </div>

            <div className="p-5 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 rounded-xl border-l-4 border-slate-500">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center text-xs font-bold">6</div>
                Cleanup
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Always close the browser when done. Use try-finally to ensure cleanup happens even if test fails.
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded block">
                driver.quit()
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Running the Test */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <Terminal className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            How to Run the Test
          </CardTitle>
          <CardDescription>Execute your first automated test</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">
                {selectedLanguage === 'python' && '🐍 Python'}
                {selectedLanguage === 'java' && '☕ Java'}
                {selectedLanguage === 'javascript' && '📜 JavaScript'}
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-indigo-800 dark:text-indigo-200 mb-1">1. Save the code:</div>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded block">
                    {selectedLanguage === 'python' && 'first_test.py'}
                    {selectedLanguage === 'java' && 'FirstTest.java'}
                    {selectedLanguage === 'javascript' && 'first_test.js'}
                  </code>
                </div>
                <div>
                  <div className="text-sm font-medium text-indigo-800 dark:text-indigo-200 mb-1">2. Run the test:</div>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded block">
                    {selectedLanguage === 'python' && 'python first_test.py'}
                    {selectedLanguage === 'java' && 'javac FirstTest.java && java FirstTest'}
                    {selectedLanguage === 'javascript' && 'node first_test.js'}
                  </code>
                </div>
              </div>
            </div>

            <Alert className="border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-950/20">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">What You'll See</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <ul className="mt-2 space-y-1">
                  <li>• Chrome browser will open automatically</li>
                  <li>• Google homepage will load</li>
                  <li>• Search query will be typed</li>
                  <li>• Results page will appear</li>
                  <li>• Browser will close</li>
                  <li>• Console will show "✅ Test Passed!"</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>


      {/* Include the playground modal */}
      <SeleniumPlaygroundModal />
    </div>
  );
}

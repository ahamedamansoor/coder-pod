'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Download,
  Terminal,
  CheckCircle,
  AlertCircle,
  Play,
  Code,
  Package,
  Settings,
  Zap,
  FileCode,
  Rocket,
  Chrome,
  Globe,
  Copy,
  ExternalLink
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useSeleniumPlayground } from '../playground/selenium-playground-context';
import { SeleniumPlaygroundModal } from '../playground/selenium-playground-modal';
import { useToast } from '@/hooks/use-toast';

export function SeleniumInstallationSetup() {
  const { openPlayground } = useSeleniumPlayground();
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const installationCommands = {
    python: {
      install: 'pip install selenium',
      webdriver: 'pip install webdriver-manager',
      verify: 'pip show selenium',
    },
    java: {
      install: `<!-- Add to pom.xml -->
<dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>4.15.0</version>
</dependency>`,
      webdriver: `<dependency>
    <groupId>io.github.bonigarcia</groupId>
    <artifactId>webdrivermanager</artifactId>
    <version>5.6.2</version>
</dependency>`,
      verify: 'mvn dependency:tree | grep selenium',
    },
    javascript: {
      install: 'npm install selenium-webdriver',
      webdriver: 'npm install chromedriver',
      verify: 'npm list selenium-webdriver',
    },
    csharp: {
      install: 'dotnet add package Selenium.WebDriver',
      webdriver: 'dotnet add package WebDriverManager',
      verify: 'dotnet list package | findstr Selenium',
    },
  };

  const sampleCode = {
    python: `from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service

# Setup Chrome driver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

# Navigate to a website
driver.get("https://www.google.com")

# Find element and interact
search_box = driver.find_element(By.NAME, "q")
search_box.send_keys("Selenium WebDriver")
search_box.submit()

# Close browser
driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FirstTest {
    public static void main(String[] args) {
        // Setup Chrome driver
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        
        // Navigate to website
        driver.get("https://www.google.com");
        
        // Find element and interact
        driver.findElement(By.name("q"))
              .sendKeys("Selenium WebDriver");
        driver.findElement(By.name("q")).submit();
        
        // Close browser
        driver.quit();
    }
}`,
    javascript: `const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function example() {
    // Setup Chrome driver
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();
    
    try {
        // Navigate to website
        await driver.get('https://www.google.com');
        
        // Find element and interact
        await driver.findElement(By.name('q'))
                    .sendKeys('Selenium WebDriver', Key.RETURN);
        
        // Wait for results
        await driver.wait(until.titleContains('Selenium'), 5000);
    } finally {
        // Close browser
        await driver.quit();
    }
}

example();`,
    csharp: `using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using WebDriverManager;
using WebDriverManager.DriverConfigs.Impl;

class FirstTest
{
    static void Main()
    {
        // Setup Chrome driver
        new DriverManager().SetUpDriver(new ChromeConfig());
        IWebDriver driver = new ChromeDriver();
        
        // Navigate to website
        driver.Navigate().GoToUrl("https://www.google.com");
        
        // Find element and interact
        IWebElement searchBox = driver.FindElement(By.Name("q"));
        searchBox.SendKeys("Selenium WebDriver");
        searchBox.Submit();
        
        // Close browser
        driver.Quit();
    }
}`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Download}
        category="Selenium · Getting Started"
        title="Installation & Setup"
        description="Get Selenium up and running in minutes. Install Selenium WebDriver for your preferred programming language and start automating."
        colorTheme="green"
        badges={[
          { label: 'Quick Start', variant: 'success' },
          { label: 'Multi-Language', variant: 'info' },
          { label: 'Easy Setup', variant: 'secondary' },
        ]}
      />

      {/* Prerequisites */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Prerequisites
          </CardTitle>
          <CardDescription>What you need before installing Selenium</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Programming Language
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Python 3.7+</strong> - Most beginner-friendly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Java 8+</strong> - Enterprise standard</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Node.js 14+</strong> - JavaScript/TypeScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>.NET 6+</strong> - C# development</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Web Browser
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Chrome className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Chrome</strong> - Most commonly used</span>
                </li>
                  <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Firefox</strong> - Open source option</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Edge</strong> - Windows default</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Safari</strong> - macOS built-in</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Language Selection */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Package className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Choose Your Language
          </CardTitle>
          <CardDescription>Select your programming language to see installation instructions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { id: 'python', label: 'Python', icon: '🐍', color: 'blue' },
              { id: 'java', label: 'Java', icon: '☕', color: 'orange' },
              { id: 'javascript', label: 'JavaScript', icon: '📜', color: 'yellow' },
            ].map((lang) => (
              <Button
                key={lang.id}
                variant={selectedLanguage === lang.id ? 'default' : 'outline'}
                size="lg"
                onClick={() => setSelectedLanguage(lang.id as any)}
                className={`gap-2 ${
                  selectedLanguage === lang.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                    : ''
                }`}
              >
                <span className="text-xl">{lang.icon}</span>
                {lang.label}
              </Button>
            ))}
          </div>

          {/* Installation Steps */}
          <div className="space-y-6">
            {/* Step 1: Install Selenium */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Install Selenium</h3>
              </div>
              <div className="bg-slate-100 dark:bg-black p-4 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-100 relative group border border-slate-200 dark:border-slate-800">
                <pre className="overflow-x-auto">{installationCommands[selectedLanguage].install}</pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => copyToClipboard(installationCommands[selectedLanguage].install, 'Install command')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Step 2: Install WebDriver Manager */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Install WebDriver Manager (Recommended)</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                WebDriver Manager automatically downloads and manages browser drivers for you.
              </p>
              <div className="bg-slate-100 dark:bg-black p-4 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-100 relative group border border-slate-200 dark:border-slate-800">
                <pre className="overflow-x-auto">{installationCommands[selectedLanguage].webdriver}</pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => copyToClipboard(installationCommands[selectedLanguage].webdriver, 'WebDriver command')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Step 3: Verify Installation */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Verify Installation</h3>
              </div>
              <div className="bg-slate-100 dark:bg-black p-4 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-100 relative group border border-slate-200 dark:border-slate-800">
                <pre className="overflow-x-auto">{installationCommands[selectedLanguage].verify}</pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => copyToClipboard(installationCommands[selectedLanguage].verify, 'Verify command')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* First Test Code */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Rocket className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Your First Selenium Test
          </CardTitle>
          <CardDescription>Complete working example to verify your setup</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">
            <Zap className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Ready to Test?</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Copy this code and run it to verify your Selenium installation is working correctly!
            </AlertDescription>
          </Alert>

          <div className="bg-slate-100 dark:bg-black p-6 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-100 relative group border border-slate-200 dark:border-slate-800">
            <pre className="overflow-x-auto">{sampleCode[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(sampleCode[selectedLanguage], 'Sample code')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>

        </CardContent>
      </Card>

      {/* Common Issues */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Common Installation Issues
          </CardTitle>
          <CardDescription>Troubleshooting tips for common problems</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                ❌ "chromedriver executable needs to be in PATH"
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Solution:</strong> Use WebDriver Manager to automatically handle driver paths, or manually add the driver to your system PATH.
              </p>
              <code className="text-xs bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-green-400 px-2 py-1 rounded">
                pip install webdriver-manager
              </code>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                ❌ "SessionNotCreatedException: session not created"
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Solution:</strong> Your browser version doesn't match the driver version. Update your browser or use WebDriver Manager.
              </p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                ❌ "Permission denied" on macOS/Linux
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Solution:</strong> Make the driver executable:
              </p>
              <code className="text-xs bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-green-400 px-2 py-1 rounded">
                chmod +x chromedriver
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Include the playground modal */}
      <SeleniumPlaygroundModal />
    </div>
  );
}

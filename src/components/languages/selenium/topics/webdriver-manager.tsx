'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Settings,
  Download,
  CheckCircle,
  Zap,
  RefreshCw,
  Terminal,
  Code,
  Sparkles,
  Play,
  Copy,
  AlertTriangle,
  Rocket
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useSeleniumPlayground } from '../playground/selenium-playground-context';
import { SeleniumPlaygroundModal } from '../playground/selenium-playground-modal';
import { useToast } from '@/hooks/use-toast';

export function WebDriverManager() {
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

  const installCommands = {
    python: 'pip install webdriver-manager',
    java: `<dependency>
    <groupId>io.github.bonigarcia</groupId>
    <artifactId>webdrivermanager</artifactId>
    <version>5.6.2</version>
</dependency>`,
    javascript: 'npm install webdriver-manager',
    csharp: 'dotnet add package WebDriverManager',
  };

  const beforeCode = {
    python: `from selenium import webdriver

# Manual driver management - NOT RECOMMENDED
driver = webdriver.Chrome(executable_path='/path/to/chromedriver')
driver.get("https://example.com")
driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

// Manual driver management - NOT RECOMMENDED
System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");
WebDriver driver = new ChromeDriver();
driver.get("https://example.com");
driver.quit();`,
    javascript: `const { Builder } = require('selenium-webdriver');

// Manual driver management - NOT RECOMMENDED
const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(/* manual path setup */)
    .build();
await driver.get('https://example.com');
await driver.quit();`,
    csharp: `using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

// Manual driver management - NOT RECOMMENDED
var driver = new ChromeDriver("/path/to/chromedriver");
driver.Navigate().GoToUrl("https://example.com");
driver.Quit();`,
  };

  const afterCode = {
    python: `from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service

# Automatic driver management - RECOMMENDED ✅
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)
driver.get("https://example.com")
driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

// Automatic driver management - RECOMMENDED ✅
WebDriverManager.chromedriver().setup();
WebDriver driver = new ChromeDriver();
driver.get("https://example.com");
driver.quit();`,
    javascript: `const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Automatic driver management - RECOMMENDED ✅
// WebDriver Manager handles it automatically
const driver = await new Builder()
    .forBrowser('chrome')
    .build();
await driver.get('https://example.com');
await driver.quit();`,
    csharp: `using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using WebDriverManager;
using WebDriverManager.DriverConfigs.Impl;

// Automatic driver management - RECOMMENDED ✅
new DriverManager().SetUpDriver(new ChromeConfig());
IWebDriver driver = new ChromeDriver();
driver.Navigate().GoToUrl("https://example.com");
driver.Quit();`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Settings}
        category="Selenium · Getting Started"
        title="WebDriver Manager"
        description="Automatically download and manage browser drivers. No more manual downloads or PATH configuration!"
        colorTheme="green"
        badges={[
          { label: 'Auto-Download', variant: 'success' },
          { label: 'Version Matching', variant: 'info' },
          { label: 'Zero Config', variant: 'secondary' },
        ]}
      />

      {/* Why Use WebDriver Manager */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Why Use WebDriver Manager?
          </CardTitle>
          <CardDescription>Solve common driver management problems automatically</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Problems */}
            <div className="space-y-3">
              <h4 className="font-semibold text-red-900 dark:text-red-100 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Without WebDriver Manager
              </h4>
              <div className="space-y-2">
                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <div className="text-sm text-red-900 dark:text-red-100 font-medium mb-1">❌ Manual Downloads</div>
                  <div className="text-xs text-red-700 dark:text-red-300">Download drivers manually for each browser</div>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <div className="text-sm text-red-900 dark:text-red-100 font-medium mb-1">❌ Version Mismatch</div>
                  <div className="text-xs text-red-700 dark:text-red-300">Driver version must match browser version</div>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <div className="text-sm text-red-900 dark:text-red-100 font-medium mb-1">❌ PATH Configuration</div>
                  <div className="text-xs text-red-700 dark:text-red-300">Set system PATH or specify executable path</div>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <div className="text-sm text-red-900 dark:text-red-100 font-medium mb-1">❌ OS Differences</div>
                  <div className="text-xs text-red-700 dark:text-red-300">Different drivers for Windows/Mac/Linux</div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-3">
              <h4 className="font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                With WebDriver Manager
              </h4>
              <div className="space-y-2">
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <div className="text-sm text-green-900 dark:text-green-100 font-medium mb-1">✅ Auto Downloads</div>
                  <div className="text-xs text-green-700 dark:text-green-300">Automatically downloads the right driver</div>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <div className="text-sm text-green-900 dark:text-green-100 font-medium mb-1">✅ Version Matching</div>
                  <div className="text-xs text-green-700 dark:text-green-300">Detects browser version and matches driver</div>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <div className="text-sm text-green-900 dark:text-green-100 font-medium mb-1">✅ Zero Config</div>
                  <div className="text-xs text-green-700 dark:text-green-300">No PATH setup or manual configuration needed</div>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <div className="text-sm text-green-900 dark:text-green-100 font-medium mb-1">✅ Cross-Platform</div>
                  <div className="text-xs text-green-700 dark:text-green-300">Works on Windows, Mac, and Linux automatically</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Installation */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Download className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Installation
          </CardTitle>
          <CardDescription>Choose your programming language</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 mb-6">
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
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    : ''
                }`}
              >
                <span className="text-xl">{lang.icon}</span>
                {lang.label}
              </Button>
            ))}
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-300 max-h-[300px] overflow-y-auto relative group border-2 border-slate-300 dark:border-slate-700">
            <pre className="overflow-x-auto">{installCommands[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(installCommands[selectedLanguage], 'Install command')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Before & After Comparison */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <RefreshCw className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Before vs After
          </CardTitle>
          <CardDescription>See the difference WebDriver Manager makes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Before */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="destructive" className="gap-1">
                <AlertTriangle className="w-3 h-3" />
                Before (Manual)
              </Badge>
              <span className="text-sm text-muted-foreground">Complex and error-prone</span>
            </div>
            <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-300 max-h-[300px] overflow-y-auto relative group border-2 border-slate-300 dark:border-slate-700">
              <pre className="overflow-x-auto">{beforeCode[selectedLanguage]}</pre>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => copyToClipboard(beforeCode[selectedLanguage], 'Before code')}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* After */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge className="gap-1 bg-green-600">
                <CheckCircle className="w-3 h-3" />
                After (WebDriver Manager)
              </Badge>
              <span className="text-sm text-muted-foreground">Simple and automatic</span>
            </div>
            <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm text-slate-800 dark:text-slate-300 max-h-[300px] overflow-y-auto relative group border-2 border-slate-300 dark:border-slate-700">
              <pre className="overflow-x-auto">{afterCode[selectedLanguage]}</pre>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => copyToClipboard(afterCode[selectedLanguage], 'After code')}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Key Features
          </CardTitle>
          <CardDescription>What makes WebDriver Manager powerful</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Smart Downloads</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Downloads drivers only when needed and caches them for future use
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">Version Detection</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Automatically detects your browser version and downloads matching driver
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Multi-Browser</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Supports Chrome, Firefox, Edge, Safari, Opera, and more
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">CI/CD Ready</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Works seamlessly in continuous integration environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pro Tips */}
      <Alert className="border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-950/20">
        <Sparkles className="h-5 w-5 text-teal-600" />
        <AlertTitle className="text-teal-900 dark:text-teal-100">Pro Tips</AlertTitle>
        <AlertDescription className="text-teal-800 dark:text-teal-200">
          <ul className="mt-2 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              <span><strong>Cache Location:</strong> Drivers are cached in <code className="bg-teal-100 dark:bg-teal-900 px-1 rounded">~/.wdm</code> folder</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              <span><strong>Offline Mode:</strong> Once downloaded, drivers work offline</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              <span><strong>Force Update:</strong> Delete cache folder to force re-download latest drivers</span>
            </li>
          </ul>
        </AlertDescription>
      </Alert>


      {/* Include the playground modal */}
      <SeleniumPlaygroundModal />
    </div>
  );
}

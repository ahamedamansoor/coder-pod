'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';
import {
  Cloud,
  Server,
  Monitor,
  Code,
  CheckCircle,
  Copy,
  DollarSign,
  Star,
  Eye,
  EyeOff,
  Zap,
  Terminal
} from 'lucide-react';

export function CloudTestingPlatformsComponent() {
  const { toast } = useToast();
  const [selectedPlatform, setSelectedPlatform] = useState<'browserstack' | 'saucelabs' | 'lambdatest' | 'crossbrowsertesting'>('browserstack');
  const [selectedLanguage, setSelectedLanguage] = useState<'java' | 'python' | 'csharp'>('java');
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({ main: true });

  const platformConfigs = {
    browserstack: {
      name: 'BrowserStack',
      url: 'hub-cloud.browserstack.com',
      description: 'Most comprehensive cloud testing platform',
      features: ['3000+ browsers', 'Real devices', 'Mobile testing', 'Visual testing', 'Debugging tools'],
      pricing: 'Enterprise',
      icon: <Cloud className="w-6 h-6" />,
      color: 'blue'
    },
    saucelabs: {
      name: 'Sauce Labs',
      url: 'ondemand.saucelabs.com',
      description: 'Professional continuous testing platform',
      features: ['800+ browsers', 'Real devices', 'Performance testing', 'CI/CD integration', 'Analytics'],
      pricing: 'Professional',
      icon: <Server className="w-6 h-6" />,
      color: 'red'
    },
    lambdatest: {
      name: 'LambdaTest',
      url: 'hub.lambdatest.com',
      description: 'Fast and reliable cross-browser testing',
      features: ['2000+ browsers', 'Real devices', 'Parallel testing', 'Smart debugging', 'Geolocation testing'],
      pricing: 'Affordable',
      icon: <Zap className="w-6 h-6" />,
      color: 'green'
    },
    crossbrowsertesting: {
      name: 'CrossBrowserTesting',
      url: 'crossbrowsertesting.com',
      description: 'Comprehensive browser testing solution',
      features: ['1500+ browsers', 'Real devices', 'Screenshot testing', 'Local testing', 'Live testing'],
      pricing: 'Flexible',
      icon: <Monitor className="w-6 h-6" />,
      color: 'purple'
    }
  };

  const codeExamples = {
    java: {
      browserstack: `// BrowserStack Java Integration
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.net.URL;

public class BrowserStackTest {
    public static void main(String[] args) throws Exception {
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setBrowserName("chrome");
        caps.setVersion("120");
        caps.setPlatformName("Windows 10");
        caps.setCapability("build", "Selenium-Grid-Demo");
        caps.setCapability("name", "BrowserStack Test");
        caps.setCapability("browserstack.debug", true);
        caps.setCapability("browserstack.console", "verbose");
        
        String username = "your_username";
        String accessKey = "your_access_key";
        String url = "https://" + username + ":" + accessKey + "@hub-cloud.browserstack.com/wd/hub";
        
        WebDriver driver = new RemoteWebDriver(new URL(url), caps);
        
        driver.get("https://example.com");
        System.out.println("Title: " + driver.getTitle());
        
        driver.quit();
    }
}`,
      saucelabs: `// Sauce Labs Java Integration
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.net.URL;

public class SauceLabsTest {
    public static void main(String[] args) throws Exception {
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setBrowserName("chrome");
        caps.setVersion("120");
        caps.setPlatformName("Windows 10");
        caps.setCapability("build", "Selenium-Grid-Demo");
        caps.setCapability("name", "Sauce Labs Test");
        caps.setCapability("extendedDebugging", true);
        
        String username = "your_username";
        String accessKey = "your_access_key";
        String url = "https://" + username + ":" + accessKey + "@ondemand.saucelabs.com:443/wd/hub";
        
        WebDriver driver = new RemoteWebDriver(new URL(url), caps);
        
        driver.get("https://example.com");
        System.out.println("Title: " + driver.getTitle());
        
        driver.quit();
    }
}`,
      lambdatest: `// LambdaTest Java Integration
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.net.URL;

public class LambdaTestTest {
    public static void main(String[] args) throws Exception {
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setBrowserName("chrome");
        caps.setVersion("120");
        caps.setPlatformName("Windows 10");
        caps.setCapability("build", "Selenium-Grid-Demo");
        caps.setCapability("name", "LambdaTest Test");
        caps.setCapability("visual", true);
        caps.setCapability("video", true);
        
        String username = "your_username";
        String accessKey = "your_access_key";
        String url = "https://" + username + ":" + accessKey + "@hub.lambdatest.com/wd/hub";
        
        WebDriver driver = new RemoteWebDriver(new URL(url), caps);
        
        driver.get("https://example.com");
        System.out.println("Title: " + driver.getTitle());
        
        driver.quit();
    }
}`,
      crossbrowsertesting: `// CrossBrowserTesting Java Integration
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.net.URL;

public class CrossBrowserTestingTest {
    public static void main(String[] args) throws Exception {
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setBrowserName("chrome");
        caps.setVersion("120");
        caps.setPlatformName("Windows 10");
        caps.setCapability("build", "Selenium-Grid-Demo");
        caps.setCapability("name", "CBT Test");
        caps.setCapability("record_video", true);
        caps.setCapability("record_network", true);
        
        String username = "your_username";
        String authkey = "your_authkey";
        String url = "https://" + username + ":" + authkey + "@hub.crossbrowsertesting.com:80/wd/hub";
        
        WebDriver driver = new RemoteWebDriver(new URL(url), caps);
        
        driver.get("https://example.com");
        System.out.println("Title: " + driver.getTitle());
        
        driver.quit();
    }
}`
    },
    python: {
      browserstack: `# BrowserStack Python Integration
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def browserstack_test():
    chrome_options = Options()
    chrome_options.browser_version = '120'
    chrome_options.platform_name = 'Windows 10'
    chrome_options.set_capability('build', 'Selenium-Grid-Demo')
    chrome_options.set_capability('name', 'BrowserStack Test')
    chrome_options.set_capability('browserstack.debug', True)
    chrome_options.set_capability('browserstack.console', 'verbose')
    
    username = "your_username"
    access_key = "your_access_key"
    
    driver = webdriver.Remote(
        command_executor=f"https://{username}:{access_key}@hub-cloud.browserstack.com/wd/hub",
        options=chrome_options
    )
    
    driver.get("https://example.com")
    print(f"Title: {driver.title}")
    
    driver.quit()

if __name__ == "__main__":
    browserstack_test()`,
      saucelabs: `# Sauce Labs Python Integration
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def saucelabs_test():
    chrome_options = Options()
    chrome_options.browser_version = '120'
    chrome_options.platform_name = 'Windows 10'
    chrome_options.set_capability('build', 'Selenium-Grid-Demo')
    chrome_options.set_capability('name', 'Sauce Labs Test')
    chrome_options.set_capability('extendedDebugging', True)
    
    username = "your_username"
    access_key = "your_access_key"
    
    driver = webdriver.Remote(
        command_executor=f"https://{username}:{access_key}@ondemand.saucelabs.com:443/wd/hub",
        options=chrome_options
    )
    
    driver.get("https://example.com")
    print(f"Title: {driver.title}")
    
    driver.quit()

if __name__ == "__main__":
    saucelabs_test()`,
      lambdatest: `# LambdaTest Python Integration
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def lambdatest_test():
    chrome_options = Options()
    chrome_options.browser_version = '120'
    chrome_options.platform_name = 'Windows 10'
    chrome_options.set_capability('build', 'Selenium-Grid-Demo')
    chrome_options.set_capability('name', 'LambdaTest Test')
    chrome_options.set_capability('visual', True)
    chrome_options.set_capability('video', True)
    
    username = "your_username"
    access_key = "your_access_key"
    
    driver = webdriver.Remote(
        command_executor=f"https://{username}:{access_key}@hub.lambdatest.com/wd/hub",
        options=chrome_options
    )
    
    driver.get("https://example.com")
    print(f"Title: {driver.title}")
    
    driver.quit()

if __name__ == "__main__":
    lambdatest_test()`,
      crossbrowsertesting: `# CrossBrowserTesting Python Integration
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def crossbrowsertesting_test():
    chrome_options = Options()
    chrome_options.browser_version = '120'
    chrome_options.platform_name = 'Windows 10'
    chrome_options.set_capability('build', 'Selenium-Grid-Demo')
    chrome_options.set_capability('name', 'CBT Test')
    chrome_options.set_capability('record_video', True)
    chrome_options.set_capability('record_network', True)
    
    username = "your_username"
    authkey = "your_authkey"
    
    driver = webdriver.Remote(
        command_executor=f"https://{username}:{authkey}@hub.crossbrowsertesting.com:80/wd/hub",
        options=chrome_options
    )
    
    driver.get("https://example.com")
    print(f"Title: {driver.title}")
    
    driver.quit()

if __name__ == "__main__":
    crossbrowsertesting_test()`
    },
    csharp: {
      browserstack: `// BrowserStack C# Integration
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;
using System;

public class BrowserStackTest
{
    public static void Main(string[] args)
    {
        var options = new ChromeOptions();
        options.BrowserVersion = "120";
        options.PlatformName = "Windows 10";
        options.AddAdditionalCapability("build", "Selenium-Grid-Demo", true);
        options.AddAdditionalCapability("name", "BrowserStack Test", true);
        options.AddAdditionalCapability("browserstack.debug", true, true);
        options.AddAdditionalCapability("browserstack.console", "verbose", true);
        
        var username = "your_username";
        var accessKey = "your_access_key";
        var url = new Uri($"https://{username}:{accessKey}@hub-cloud.browserstack.com/wd/hub");
        
        var driver = new RemoteWebDriver(url, options);
        
        driver.Navigate().GoToUrl("https://example.com");
        Console.WriteLine($"Title: {driver.Title}");
        
        driver.Quit();
    }
}`,
      saucelabs: `// Sauce Labs C# Integration
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;
using System;

public class SauceLabsTest
{
    public static void Main(string[] args)
    {
        var options = new ChromeOptions();
        options.BrowserVersion = "120";
        options.PlatformName = "Windows 10";
        options.AddAdditionalCapability("build", "Selenium-Grid-Demo", true);
        options.AddAdditionalCapability("name", "Sauce Labs Test", true);
        options.AddAdditionalCapability("extendedDebugging", true, true);
        
        var username = "your_username";
        var accessKey = "your_access_key";
        var url = new Uri($"https://{username}:{accessKey}@ondemand.saucelabs.com:443/wd/hub");
        
        var driver = new RemoteWebDriver(url, options);
        
        driver.Navigate().GoToUrl("https://example.com");
        Console.WriteLine($"Title: {driver.Title}");
        
        driver.Quit();
    }
}`,
      lambdatest: `// LambdaTest C# Integration
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;
using System;

public class LambdaTestTest
{
    public static void Main(string[] args)
    {
        var options = new ChromeOptions();
        options.BrowserVersion = "120";
        options.PlatformName = "Windows 10";
        options.AddAdditionalCapability("build", "Selenium-Grid-Demo", true);
        options.AddAdditionalCapability("name", "LambdaTest Test", true);
        options.AddAdditionalCapability("visual", true, true);
        options.AddAdditionalCapability("video", true, true);
        
        var username = "your_username";
        var accessKey = "your_access_key";
        var url = new Uri($"https://{username}:{accessKey}@hub.lambdatest.com/wd/hub");
        
        var driver = new RemoteWebDriver(url, options);
        
        driver.Navigate().GoToUrl("https://example.com");
        Console.WriteLine($"Title: {driver.Title}");
        
        driver.Quit();
    }
}`,
      crossbrowsertesting: `// CrossBrowserTesting C# Integration
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;
using System;

public class CrossBrowserTestingTest
{
    public static void Main(string[] args)
    {
        var options = new ChromeOptions();
        options.BrowserVersion = "120";
        options.PlatformName = "Windows 10";
        options.AddAdditionalCapability("build", "Selenium-Grid-Demo", true);
        options.AddAdditionalCapability("name", "CBT Test", true);
        options.AddAdditionalCapability("record_video", true, true);
        options.AddAdditionalCapability("record_network", true, true);
        
        var username = "your_username";
        var authkey = "your_authkey";
        var url = new Uri($"https://{username}:{authkey}@hub.crossbrowsertesting.com:80/wd/hub");
        
        var driver = new RemoteWebDriver(url, options);
        
        driver.Navigate().GoToUrl("https://example.com");
        Console.WriteLine($"Title: {driver.Title}");
        
        driver.Quit();
    }
}`
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const toggleCodeVisibility = (codeId: string) => {
    setShowCode(prev => ({
      ...prev,
      [codeId]: !prev[codeId]
    }));
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Cloud}
        category="Selenium · Grid"
        title="Cloud Testing Platforms"
        description="Integrate with major cloud testing platforms for professional cross-browser and cross-device testing."
        colorTheme="indigo"
      />

      {/* Platform Selection */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Select Platform
          </CardTitle>
          <CardDescription>
            Choose your preferred cloud testing platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(platformConfigs).map(([key, platform]) => (
              <Card
                key={key}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedPlatform === key
                    ? 'ring-2 ring-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setSelectedPlatform(key as any)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-${platform.color}-100 dark:bg-${platform.color}-900/30`}>
                        {platform.icon}
                      </div>
                      <div>
                        <CardTitle className="text-sm">{platform.name}</CardTitle>
                        <Badge variant="outline" className="text-xs mt-1">
                          {platform.pricing}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {platform.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {platform.features.slice(0, 3).map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Language Selection */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
            Programming Language
          </CardTitle>
          <CardDescription>
            Select your preferred programming language
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            {[
              { lang: 'java' as const, name: 'Java', recommended: true },
              { lang: 'python' as const, name: 'Python', recommended: false },
              { lang: 'csharp' as const, name: 'C#', recommended: false }
            ].map((option) => (
              <Button
                key={option.lang}
                variant={selectedLanguage === option.lang ? 'default' : 'outline'}
                onClick={() => setSelectedLanguage(option.lang)}
                className="flex items-center gap-2"
              >
                {option.name}
                {option.recommended && (
                  <Badge className="bg-green-600 text-white text-xs">Recommended</Badge>
                )}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Code Implementation */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Code Implementation
          </CardTitle>
          <CardDescription>
            Complete integration code for {platformConfigs[selectedPlatform].name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-sm capitalize">
                {selectedLanguage} - {platformConfigs[selectedPlatform].name} Integration
              </h4>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCodeVisibility('main')}
                >
                  {showCode['main'] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(codeExamples[selectedLanguage][selectedPlatform], 'Integration code')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
            {showCode['main'] && (
              <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{codeExamples[selectedLanguage][selectedPlatform]}</pre>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Platform Features */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            Platform Features
          </CardTitle>
          <CardDescription>
            Key features and capabilities of {platformConfigs[selectedPlatform].name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platformConfigs[selectedPlatform].features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-sm font-medium text-orange-900 dark:text-orange-100">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pricing Information */}
      <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
        <DollarSign className="h-5 w-5 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Pricing Information</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div>• <strong>BrowserStack:</strong> Enterprise pricing with custom plans</div>
          <div>• <strong>Sauce Labs:</strong> Professional plans starting at $59/month</div>
          <div>• <strong>LambdaTest:</strong> Affordable plans starting at $15/month</div>
          <div>• <strong>CrossBrowserTesting:</strong> Flexible plans starting at $29/month</div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

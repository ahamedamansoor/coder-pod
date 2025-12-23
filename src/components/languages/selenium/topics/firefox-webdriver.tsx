'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Flame,
  Settings,
  Code,
  Copy,
  CheckCircle,
  Shield,
  Zap,
  Download
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function FirefoxWebDriver() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const basicSetup = {
    python: `from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from webdriver_manager.firefox import GeckoDriverManager

# Setup Firefox driver
service = Service(GeckoDriverManager().install())
driver = webdriver.Firefox(service=service)

# Navigate to website
driver.get("https://www.example.com")

# Close browser
driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FirefoxSetup {
    public static void main(String[] args) {
        // Setup Firefox driver
        WebDriverManager.firefoxdriver().setup();
        WebDriver driver = new FirefoxDriver();
        
        // Navigate to website
        driver.get("https://www.example.com");
        
        // Close browser
        driver.quit();
    }
}`,
    javascript: `const { Builder } = require('selenium-webdriver');

async function firefoxSetup() {
    // Setup Firefox driver
    let driver = await new Builder()
        .forBrowser('firefox')
        .build();
    
    // Navigate to website
    await driver.get('https://www.example.com');
    
    // Close browser
    await driver.quit();
}

firefoxSetup();`,
  };

  const firefoxOptions = {
    python: `from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.service import Service
from webdriver_manager.firefox import GeckoDriverManager

# Create Firefox options
options = Options()

# Add arguments
options.add_argument('--width=1920')
options.add_argument('--height=1080')

# Set preferences
options.set_preference('browser.download.folderList', 2)
options.set_preference('browser.download.dir', '/path/to/downloads')
options.set_preference('browser.helperApps.neverAsk.saveToDisk', 'application/pdf')

# Disable notifications
options.set_preference('dom.webnotifications.enabled', False)

# Initialize driver with options
service = Service(GeckoDriverManager().install())
driver = webdriver.Firefox(service=service, options=options)

driver.get("https://www.example.com")
driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FirefoxOptionsExample {
    public static void main(String[] args) {
        WebDriverManager.firefoxdriver().setup();
        
        // Create Firefox options
        FirefoxOptions options = new FirefoxOptions();
        
        // Add arguments
        options.addArguments("--width=1920");
        options.addArguments("--height=1080");
        
        // Set preferences
        options.addPreference("browser.download.folderList", 2);
        options.addPreference("browser.download.dir", "/path/to/downloads");
        options.addPreference("browser.helperApps.neverAsk.saveToDisk", "application/pdf");
        
        // Disable notifications
        options.addPreference("dom.webnotifications.enabled", false);
        
        // Initialize driver with options
        WebDriver driver = new FirefoxDriver(options);
        
        driver.get("https://www.example.com");
        driver.quit();
    }
}`,
    javascript: `const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function firefoxOptionsExample() {
    // Create Firefox options
    let options = new firefox.Options();
    
    // Add arguments
    options.addArguments('--width=1920');
    options.addArguments('--height=1080');
    
    // Set preferences
    options.setPreference('browser.download.folderList', 2);
    options.setPreference('browser.download.dir', '/path/to/downloads');
    options.setPreference('browser.helperApps.neverAsk.saveToDisk', 'application/pdf');
    
    // Disable notifications
    options.setPreference('dom.webnotifications.enabled', false);
    
    // Initialize driver with options
    let driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();
    
    await driver.get('https://www.example.com');
    await driver.quit();
}

firefoxOptionsExample();`,
  };

  const headlessMode = {
    python: `from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.service import Service
from webdriver_manager.firefox import GeckoDriverManager

# Create Firefox options for headless mode
options = Options()
options.add_argument('--headless')
options.add_argument('--width=1920')
options.add_argument('--height=1080')

# Initialize driver
service = Service(GeckoDriverManager().install())
driver = webdriver.Firefox(service=service, options=options)

driver.get("https://www.example.com")
print(f"Page title: {driver.title}")
driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import io.github.bonigarcia.wdm.WebDriverManager;

public class HeadlessMode {
    public static void main(String[] args) {
        WebDriverManager.firefoxdriver().setup();
        
        // Create Firefox options for headless mode
        FirefoxOptions options = new FirefoxOptions();
        options.addArguments("--headless");
        options.addArguments("--width=1920");
        options.addArguments("--height=1080");
        
        // Initialize driver
        WebDriver driver = new FirefoxDriver(options);
        
        driver.get("https://www.example.com");
        System.out.println("Page title: " + driver.getTitle());
        driver.quit();
    }
}`,
    javascript: `const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function headlessMode() {
    // Create Firefox options for headless mode
    let options = new firefox.Options();
    options.addArguments('--headless');
    options.addArguments('--width=1920');
    options.addArguments('--height=1080');
    
    // Initialize driver
    let driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();
    
    await driver.get('https://www.example.com');
    console.log('Page title:', await driver.getTitle());
    await driver.quit();
}

headlessMode();`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Flame}
        category="Selenium · Browser Configuration"
        title="Firefox WebDriver"
        description="Configure and customize GeckoDriver for Firefox testing with options, preferences, and advanced settings"
        colorTheme="green"
        badges={[
          { label: 'Privacy Focused', variant: 'success' },
          { label: 'Developer Friendly', variant: 'info' },
          { label: 'Open Source', variant: 'secondary' },
        ]}
      />

      {/* Why Firefox WebDriver */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Why Firefox WebDriver?
          </CardTitle>
          <CardDescription>A powerful alternative for web automation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Privacy First</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Firefox prioritizes user privacy with built-in tracking protection
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Developer Tools</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Excellent developer tools and debugging capabilities
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">Standards Compliant</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Strict adherence to web standards and W3C specifications
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Cross-Platform</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Works consistently across Windows, macOS, and Linux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Language Selection */}
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
                ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700'
                : ''
            }`}
          >
            <span className="text-xl">{lang.icon}</span>
            {lang.label}
          </Button>
        ))}
      </div>

      {/* Basic Setup */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Basic Firefox Setup
          </CardTitle>
          <CardDescription>Simple GeckoDriver initialization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">
            <CheckCircle className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Quick Start</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              GeckoDriver is the WebDriver implementation for Firefox. WebDriver Manager handles the driver setup automatically.
            </AlertDescription>
          </Alert>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{basicSetup[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(basicSetup[selectedLanguage], 'Basic setup code')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Firefox Options */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Settings className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Firefox Options & Preferences
          </CardTitle>
          <CardDescription>Customize browser behavior with preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Common Firefox Preferences</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { pref: 'dom.webnotifications.enabled', desc: 'Disable web notifications', value: 'false' },
                { pref: 'browser.download.folderList', desc: 'Set download location', value: '2' },
                { pref: 'browser.privatebrowsing.autostart', desc: 'Start in private mode', value: 'true' },
                { pref: 'geo.enabled', desc: 'Disable geolocation', value: 'false' },
                { pref: 'media.navigator.enabled', desc: 'Disable camera/mic access', value: 'false' },
                { pref: 'network.cookie.cookieBehavior', desc: 'Block third-party cookies', value: '1' },
              ].map((item) => (
                <div key={item.pref} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <code className="text-xs bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-purple-400 px-2 py-1 rounded block mb-1">
                    {item.pref}
                  </code>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">{item.desc}</p>
                  <Badge variant="outline" className="text-xs">Value: {item.value}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{firefoxOptions[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(firefoxOptions[selectedLanguage], 'Firefox options code')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Headless Mode */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Headless Mode
          </CardTitle>
          <CardDescription>Run Firefox without a visible UI</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
            <CheckCircle className="h-5 w-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Firefox Headless Benefits</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Faster test execution without GUI overhead</li>
                <li>• Perfect for CI/CD pipelines and servers</li>
                <li>• Lower memory consumption</li>
                <li>• Same rendering engine as regular Firefox</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{headlessMode[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(headlessMode[selectedLanguage], 'Headless mode code')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Firefox vs Chrome */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <CheckCircle className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Firefox vs Chrome
          </CardTitle>
          <CardDescription>When to choose Firefox for testing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Choose Firefox When:</h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Testing privacy-focused features or extensions</li>
                <li>• Validating strict web standards compliance</li>
                <li>• Your users primarily use Firefox</li>
                <li>• Testing CSS Grid and Flexbox edge cases</li>
                <li>• Need better developer tools for debugging</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Best Practice</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Run your test suite on both Chrome and Firefox to ensure cross-browser compatibility. 
                Different rendering engines can reveal issues that might not appear in a single browser.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/40">
              <Download className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            Best Practices
          </CardTitle>
          <CardDescription>Tips for optimal Firefox WebDriver usage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                title: 'Use WebDriver Manager',
                desc: 'Automatically manage GeckoDriver versions to match your Firefox installation',
              },
              {
                title: 'Set Appropriate Timeouts',
                desc: 'Firefox may be slower than Chrome in some scenarios, adjust timeouts accordingly',
              },
              {
                title: 'Disable Unnecessary Features',
                desc: 'Turn off notifications, geolocation, and other features for cleaner tests',
              },
              {
                title: 'Use Firefox Profile',
                desc: 'Create custom Firefox profiles for specific test scenarios with pre-configured settings',
              },
            ].map((practice, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{practice.title}</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{practice.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

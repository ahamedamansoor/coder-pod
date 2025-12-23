'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Chrome,
  Settings,
  Zap,
  Code,
  Copy,
  CheckCircle,
  Eye,
  EyeOff,
  Monitor,
  Smartphone,
  Download,
  Play,
  Gauge
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ChromeWebDriver() {
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
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Setup Chrome driver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

# Navigate to website
driver.get("https://www.example.com")

# Close browser
driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class ChromeSetup {
    public static void main(String[] args) {
        // Setup Chrome driver
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        
        // Navigate to website
        driver.get("https://www.example.com");
        
        // Close browser
        driver.quit();
    }
}`,
    javascript: `const { Builder } = require('selenium-webdriver');

async function chromeSetup() {
    // Setup Chrome driver
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();
    
    // Navigate to website
    await driver.get('https://www.example.com');
    
    // Close browser
    await driver.quit();
}

chromeSetup();`,
  };

  const chromeOptions = {
    python: `from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Create Chrome options
options = Options()

# Add arguments
options.add_argument('--start-maximized')
options.add_argument('--disable-notifications')
options.add_argument('--disable-popup-blocking')

# Set preferences
options.add_experimental_option('prefs', {
    'download.default_directory': '/path/to/downloads',
    'download.prompt_for_download': False,
})

# Initialize driver with options
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://www.example.com")
driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import io.github.bonigarcia.wdm.WebDriverManager;
import java.util.HashMap;

public class ChromeOptionsExample {
    public static void main(String[] args) {
        WebDriverManager.chromedriver().setup();
        
        // Create Chrome options
        ChromeOptions options = new ChromeOptions();
        
        // Add arguments
        options.addArguments("--start-maximized");
        options.addArguments("--disable-notifications");
        options.addArguments("--disable-popup-blocking");
        
        // Set preferences
        HashMap<String, Object> prefs = new HashMap<>();
        prefs.put("download.default_directory", "/path/to/downloads");
        prefs.put("download.prompt_for_download", false);
        options.setExperimentalOption("prefs", prefs);
        
        // Initialize driver with options
        WebDriver driver = new ChromeDriver(options);
        
        driver.get("https://www.example.com");
        driver.quit();
    }
}`,
    javascript: `const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function chromeOptionsExample() {
    // Create Chrome options
    let options = new chrome.Options();
    
    // Add arguments
    options.addArguments('--start-maximized');
    options.addArguments('--disable-notifications');
    options.addArguments('--disable-popup-blocking');
    
    // Set preferences
    options.setUserPreferences({
        'download.default_directory': '/path/to/downloads',
        'download.prompt_for_download': false,
    });
    
    // Initialize driver with options
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    
    await driver.get('https://www.example.com');
    await driver.quit();
}

chromeOptionsExample();`,
  };

  const headlessMode = {
    python: `from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Create Chrome options for headless mode
options = Options()
options.add_argument('--headless=new')  # New headless mode
options.add_argument('--disable-gpu')
options.add_argument('--no-sandbox')
options.add_argument('--window-size=1920,1080')

# Initialize driver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://www.example.com")
print(f"Page title: {driver.title}")
driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import io.github.bonigarcia.wdm.WebDriverManager;

public class HeadlessMode {
    public static void main(String[] args) {
        WebDriverManager.chromedriver().setup();
        
        // Create Chrome options for headless mode
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless=new");  // New headless mode
        options.addArguments("--disable-gpu");
        options.addArguments("--no-sandbox");
        options.addArguments("--window-size=1920,1080");
        
        // Initialize driver
        WebDriver driver = new ChromeDriver(options);
        
        driver.get("https://www.example.com");
        System.out.println("Page title: " + driver.getTitle());
        driver.quit();
    }
}`,
    javascript: `const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function headlessMode() {
    // Create Chrome options for headless mode
    let options = new chrome.Options();
    options.addArguments('--headless=new');  // New headless mode
    options.addArguments('--disable-gpu');
    options.addArguments('--no-sandbox');
    options.addArguments('--window-size=1920,1080');
    
    // Initialize driver
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
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
        icon={Chrome}
        category="Selenium · Browser Configuration"
        title="Chrome WebDriver"
        description="Configure and customize ChromeDriver for your Selenium tests with options, capabilities, and advanced settings"
        colorTheme="green"
        badges={[
          { label: 'Most Popular', variant: 'success' },
          { label: 'Highly Configurable', variant: 'info' },
          { label: 'Fast Performance', variant: 'secondary' },
        ]}
      />

      {/* Why Chrome WebDriver */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Chrome className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Why Chrome WebDriver?
          </CardTitle>
          <CardDescription>The most popular choice for web automation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Fast Execution</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Chrome is known for its speed and performance in test execution
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">Highly Configurable</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Extensive options and capabilities for customization
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">DevTools Support</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Built-in Chrome DevTools Protocol for advanced automation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Wide Adoption</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Most popular browser for testing with excellent community support
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
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
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
            Basic Chrome Setup
          </CardTitle>
          <CardDescription>Simple ChromeDriver initialization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">
            <CheckCircle className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Quick Start</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              This is the simplest way to initialize ChromeDriver with WebDriver Manager handling the driver setup automatically.
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

      {/* Chrome Options */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Settings className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Chrome Options & Preferences
          </CardTitle>
          <CardDescription>Customize browser behavior with options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Common Chrome Arguments</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { arg: '--start-maximized', desc: 'Start browser in maximized window' },
                { arg: '--disable-notifications', desc: 'Block browser notifications' },
                { arg: '--disable-popup-blocking', desc: 'Allow popups' },
                { arg: '--incognito', desc: 'Start in incognito mode' },
                { arg: '--disable-extensions', desc: 'Disable all extensions' },
                { arg: '--no-sandbox', desc: 'Disable sandbox (for CI/CD)' },
              ].map((item) => (
                <div key={item.arg} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <code className="text-xs bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-purple-400 px-2 py-1 rounded">
                    {item.arg}
                  </code>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{chromeOptions[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(chromeOptions[selectedLanguage], 'Chrome options code')}
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
              <EyeOff className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Headless Mode
          </CardTitle>
          <CardDescription>Run Chrome without a visible UI</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
            <Eye className="h-5 w-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">When to Use Headless Mode</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              <ul className="mt-2 space-y-1 text-sm">
                <li>• CI/CD pipelines and automated testing environments</li>
                <li>• Running tests on servers without display</li>
                <li>• Faster test execution (no GUI rendering)</li>
                <li>• Web scraping and background automation tasks</li>
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

      {/* Mobile Emulation */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <Smartphone className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Mobile Emulation
          </CardTitle>
          <CardDescription>Test mobile responsive designs with interactive demo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Chrome allows you to emulate mobile devices for testing responsive designs. Watch the interactive demo below:
            </p>
            
            <Alert className="border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-950/20">
              <Play className="h-5 w-5 text-teal-600" />
              <AlertTitle className="text-teal-900 dark:text-teal-100">Interactive Mobile Emulation Demo</AlertTitle>
              <AlertDescription className="text-teal-800 dark:text-teal-200">
                Watch mobile device emulation with live viewport changes. Adjust speed and click "Run Demo"!
              </AlertDescription>
            </Alert>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-4 rounded-lg border-2 border-teal-200 dark:border-teal-700">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Execution Speed:</span>
                </div>
                <div className="flex gap-3">
                  {[
                    { value: 'slow', label: 'Slow', icon: '🐢' },
                    { value: 'medium', label: 'Medium', icon: '🚶' },
                    { value: 'fast', label: 'Fast', icon: '🚀' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-all ${
                        'border-teal-300 dark:border-teal-600 hover:border-teal-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="speed-mobile"
                        value={option.value}
                        defaultChecked={option.value === 'medium'}
                        className="w-4 h-4"
                      />
                      <span className="text-lg">{option.icon}</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mobile Emulation Code</h4>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                    >
                      <Play className="w-3 h-3" />
                      Run Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2"
                    >
                      <Copy className="w-3 h-3" />
                      Copy
                    </Button>
                  </div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs max-h-[600px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700">
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{`from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Set up mobile device emulation
chrome_options = Options()
chrome_options.add_experimental_option("mobileEmulation", {
    "deviceName": "iPhone 12 Pro"
})

# Initialize driver with mobile emulation
driver = webdriver.Chrome(options=chrome_options)

# Navigate to mobile site
driver.get("https://example.com")

# Get viewport dimensions
viewport_size = driver.execute_script(
    "return {width: window.innerWidth, height: window.innerHeight}"
)
print(f"Mobile viewport: {viewport_size}")

# Test mobile-specific elements
mobile_menu = driver.find_element(By.ID, "mobile-menu")
mobile_menu.click()

# Close driver
driver.quit()`}</pre>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Device Preview</h4>
                  <Badge variant="outline" className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-700">
                    Live
                  </Badge>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 overflow-hidden shadow-lg">
                  {/* Device Header */}
                  <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-4 h-4 text-teal-400" />
                        <span className="text-sm font-semibold text-white">iPhone 12 Pro</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-green-400">Active</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Device Screen */}
                  <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                    <div className="bg-white dark:bg-slate-950 rounded-lg border-2 border-slate-300 dark:border-slate-600 mx-auto" style={{width: '300px', height: '600px'}}>
                      <div className="p-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-6 h-6 bg-slate-300 dark:bg-slate-600 rounded"></div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">9:41 AM</div>
                          <div className="flex gap-1">
                            <div className="w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
                            <div className="w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
                            <div className="w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
                          </div>
                        </div>
                        
                        <div className="bg-teal-50 dark:bg-teal-950/30 p-3 rounded border border-teal-200 dark:border-teal-700 mb-3">
                          <div className="text-xs font-bold text-teal-900 dark:text-teal-100 mb-1">Mobile Viewport</div>
                          <div className="text-xs text-teal-700 dark:text-teal-300">390 × 844 pixels</div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
                        </div>
                        
                        <div className="mt-3 flex justify-center">
                          <button className="bg-teal-600 text-white px-3 py-1 rounded text-xs">Mobile Menu</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Device Info */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-3 rounded-lg border border-teal-200 dark:border-teal-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span className="text-xs font-bold text-teal-900 dark:text-teal-100">Device Specifications</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-teal-700 dark:text-teal-300">Screen:</span>
                      <span className="text-teal-900 dark:text-teal-100 ml-1">390×844</span>
                    </div>
                    <div>
                      <span className="text-teal-700 dark:text-teal-300">Pixel Ratio:</span>
                      <span className="text-teal-900 dark:text-teal-100 ml-1">3x</span>
                    </div>
                    <div>
                      <span className="text-teal-700 dark:text-teal-300">User Agent:</span>
                      <span className="text-teal-900 dark:text-teal-100 ml-1">Mobile</span>
                    </div>
                    <div>
                      <span className="text-teal-700 dark:text-teal-300">Touch:</span>
                      <span className="text-teal-900 dark:text-teal-100 ml-1">Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              {[
                { device: 'iPhone 12 Pro', width: 390, height: 844, icon: '📱' },
                { device: 'Samsung Galaxy S21', width: 360, height: 800, icon: '📱' },
                { device: 'iPad Pro', width: 1024, height: 1366, icon: '📱' },
              ].map((device) => (
                <div key={device.device} className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-teal-200 dark:border-teal-700">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{device.icon}</span>
                    <h5 className="font-semibold text-teal-900 dark:text-teal-100 text-sm">{device.device}</h5>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {device.width} × {device.height}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/40">
              <CheckCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            Best Practices
          </CardTitle>
          <CardDescription>Tips for optimal Chrome WebDriver usage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                title: 'Always Use WebDriver Manager',
                desc: 'Let WebDriver Manager handle driver downloads and version matching automatically',
                icon: Download,
                color: 'blue'
              },
              {
                title: 'Set Explicit Timeouts',
                desc: 'Configure implicit and explicit waits to handle dynamic content properly',
                icon: Zap,
                color: 'green'
              },
              {
                title: 'Use Headless Mode in CI/CD',
                desc: 'Run tests faster in headless mode on continuous integration servers',
                icon: EyeOff,
                color: 'purple'
              },
              {
                title: 'Disable Unnecessary Features',
                desc: 'Turn off extensions, notifications, and popups for cleaner test execution',
                icon: Settings,
                color: 'orange'
              },
            ].map((practice) => (
              <div key={practice.title} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className={`w-10 h-10 bg-${practice.color}-500 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <practice.icon className="w-5 h-5 text-white" />
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

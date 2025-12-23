'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Settings,
  Code,
  Copy,
  CheckCircle,
  Download,
  Shield,
  Monitor,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function BrowserOptions() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const windowManagement = {
    python: `from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()

# Window size and position
options.add_argument('--window-size=1920,1080')
options.add_argument('--window-position=0,0')

# Or maximize window
options.add_argument('--start-maximized')

# Fullscreen mode
options.add_argument('--start-fullscreen')

driver = webdriver.Chrome(options=options)
driver.get("https://www.example.com")

# Programmatic window management
driver.set_window_size(1366, 768)
driver.set_window_position(100, 100)
driver.maximize_window()
driver.fullscreen_window()

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Point;

ChromeOptions options = new ChromeOptions();

// Window size and position
options.addArguments("--window-size=1920,1080");
options.addArguments("--window-position=0,0");

// Or maximize window
options.addArguments("--start-maximized");

// Fullscreen mode
options.addArguments("--start-fullscreen");

WebDriver driver = new ChromeDriver(options);
driver.get("https://www.example.com");

// Programmatic window management
driver.manage().window().setSize(new Dimension(1366, 768));
driver.manage().window().setPosition(new Point(100, 100));
driver.manage().window().maximize();
driver.manage().window().fullscreen();

driver.quit();`,
    javascript: `const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let options = new chrome.Options();

// Window size and position
options.addArguments('--window-size=1920,1080');
options.addArguments('--window-position=0,0');

// Or maximize window
options.addArguments('--start-maximized');

// Fullscreen mode
options.addArguments('--start-fullscreen');

let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

await driver.get('https://www.example.com');

// Programmatic window management
await driver.manage().window().setRect({ width: 1366, height: 768, x: 100, y: 100 });
await driver.manage().window().maximize();
await driver.manage().window().fullscreen();

await driver.quit();`,
  };

  const downloadSettings = {
    python: `from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import os

options = Options()

# Set download directory
download_dir = os.path.join(os.getcwd(), 'downloads')
prefs = {
    'download.default_directory': download_dir,
    'download.prompt_for_download': False,  # Disable download prompt
    'download.directory_upgrade': True,
    'safebrowsing.enabled': True,  # Enable safe browsing
    'plugins.always_open_pdf_externally': True  # Download PDFs instead of opening
}
options.add_experimental_option('prefs', prefs)

driver = webdriver.Chrome(options=options)
driver.get("https://www.example.com/download")
driver.quit()`,
    java: `import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import java.util.HashMap;

ChromeOptions options = new ChromeOptions();

// Set download directory
String downloadDir = System.getProperty("user.dir") + "/downloads";
HashMap<String, Object> prefs = new HashMap<>();
prefs.put("download.default_directory", downloadDir);
prefs.put("download.prompt_for_download", false);  // Disable download prompt
prefs.put("download.directory_upgrade", true);
prefs.put("safebrowsing.enabled", true);  // Enable safe browsing
prefs.put("plugins.always_open_pdf_externally", true);  // Download PDFs

options.setExperimentalOption("prefs", prefs);

WebDriver driver = new ChromeDriver(options);
driver.get("https://www.example.com/download");
driver.quit();`,
    javascript: `const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

let options = new chrome.Options();

// Set download directory
const downloadDir = path.join(process.cwd(), 'downloads');
options.setUserPreferences({
    'download.default_directory': downloadDir,
    'download.prompt_for_download': false,  // Disable download prompt
    'download.directory_upgrade': true,
    'safebrowsing.enabled': true,  // Enable safe browsing
    'plugins.always_open_pdf_externally': true  // Download PDFs
});

let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

await driver.get('https://www.example.com/download');
await driver.quit();`,
  };

  const privacySecurity = {
    python: `from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()

# Privacy and security settings
options.add_argument('--incognito')  # Incognito/Private mode
options.add_argument('--disable-notifications')  # Block notifications
options.add_argument('--disable-popup-blocking')  # Allow popups
options.add_argument('--disable-geolocation')  # Disable location
options.add_argument('--disable-web-security')  # Disable CORS (testing only!)

# Additional preferences
prefs = {
    'profile.default_content_setting_values.notifications': 2,  # Block notifications
    'profile.default_content_setting_values.geolocation': 2,  # Block location
    'profile.default_content_setting_values.media_stream': 2,  # Block camera/mic
    'credentials_enable_service': False,  # Disable password manager
    'profile.password_manager_enabled': False
}
options.add_experimental_option('prefs', prefs)

driver = webdriver.Chrome(options=options)
driver.get("https://www.example.com")
driver.quit()`,
    java: `import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import java.util.HashMap;

ChromeOptions options = new ChromeOptions();

// Privacy and security settings
options.addArguments("--incognito");  // Incognito mode
options.addArguments("--disable-notifications");  // Block notifications
options.addArguments("--disable-popup-blocking");  // Allow popups
options.addArguments("--disable-geolocation");  // Disable location
options.addArguments("--disable-web-security");  // Disable CORS (testing only!)

// Additional preferences
HashMap<String, Object> prefs = new HashMap<>();
prefs.put("profile.default_content_setting_values.notifications", 2);  // Block notifications
prefs.put("profile.default_content_setting_values.geolocation", 2);  // Block location
prefs.put("profile.default_content_setting_values.media_stream", 2);  // Block camera/mic
prefs.put("credentials_enable_service", false);  // Disable password manager
prefs.put("profile.password_manager_enabled", false);

options.setExperimentalOption("prefs", prefs);

WebDriver driver = new ChromeDriver(options);
driver.get("https://www.example.com");
driver.quit();`,
    javascript: `const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let options = new chrome.Options();

// Privacy and security settings
options.addArguments('--incognito');  // Incognito mode
options.addArguments('--disable-notifications');  // Block notifications
options.addArguments('--disable-popup-blocking');  // Allow popups
options.addArguments('--disable-geolocation');  // Disable location
options.addArguments('--disable-web-security');  // Disable CORS (testing only!)

// Additional preferences
options.setUserPreferences({
    'profile.default_content_setting_values.notifications': 2,  // Block notifications
    'profile.default_content_setting_values.geolocation': 2,  // Block location
    'profile.default_content_setting_values.media_stream': 2,  // Block camera/mic
    'credentials_enable_service': false,  // Disable password manager
    'profile.password_manager_enabled': false
});

let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

await driver.get('https://www.example.com');
await driver.quit();`,
  };

  const performanceOptions = {
    python: `from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()

# Performance optimization
options.add_argument('--disable-extensions')  # Disable all extensions
options.add_argument('--disable-gpu')  # Disable GPU acceleration
options.add_argument('--no-sandbox')  # Disable sandbox (CI/CD)
options.add_argument('--disable-dev-shm-usage')  # Overcome limited resource problems
options.add_argument('--disable-images')  # Don't load images
options.add_argument('--blink-settings=imagesEnabled=false')  # Alternative image blocking

# Page load strategy
options.page_load_strategy = 'eager'  # Don't wait for full page load

# Disable automation flags
options.add_experimental_option('excludeSwitches', ['enable-automation'])
options.add_experimental_option('useAutomationExtension', False)

driver = webdriver.Chrome(options=options)
driver.get("https://www.example.com")
driver.quit()`,
    java: `import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.PageLoadStrategy;
import java.util.Arrays;

ChromeOptions options = new ChromeOptions();

// Performance optimization
options.addArguments("--disable-extensions");  // Disable all extensions
options.addArguments("--disable-gpu");  // Disable GPU acceleration
options.addArguments("--no-sandbox");  // Disable sandbox (CI/CD)
options.addArguments("--disable-dev-shm-usage");  // Overcome limited resource problems
options.addArguments("--blink-settings=imagesEnabled=false");  // Don't load images

// Page load strategy
options.setPageLoadStrategy(PageLoadStrategy.EAGER);  // Don't wait for full page load

// Disable automation flags
options.setExperimentalOption("excludeSwitches", Arrays.asList("enable-automation"));
options.setExperimentalOption("useAutomationExtension", false);

WebDriver driver = new ChromeDriver(options);
driver.get("https://www.example.com");
driver.quit();`,
    javascript: `const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let options = new chrome.Options();

// Performance optimization
options.addArguments('--disable-extensions');  // Disable all extensions
options.addArguments('--disable-gpu');  // Disable GPU acceleration
options.addArguments('--no-sandbox');  // Disable sandbox (CI/CD)
options.addArguments('--disable-dev-shm-usage');  // Overcome limited resource problems
options.addArguments('--blink-settings=imagesEnabled=false');  // Don't load images

// Page load strategy
options.setPageLoadStrategy('eager');  // Don't wait for full page load

// Disable automation flags
options.excludeSwitches('enable-automation');
options.setUserPreferences({ 'useAutomationExtension': false });

let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

await driver.get('https://www.example.com');
await driver.quit();`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Settings}
        category="Selenium · Browser Configuration"
        title="Browser Options"
        description="Master browser configuration with ChromeOptions, FirefoxOptions, and advanced settings for optimal test execution"
        colorTheme="green"
        badges={[
          { label: 'Highly Customizable', variant: 'success' },
          { label: 'Performance', variant: 'info' },
          { label: 'Essential', variant: 'secondary' },
        ]}
      />

      {/* Why Browser Options Matter */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Why Browser Options Matter
          </CardTitle>
          <CardDescription>Control every aspect of browser behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Performance</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Optimize test execution speed by disabling unnecessary features
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">Privacy & Security</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Control permissions, notifications, and privacy settings
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">File Handling</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Configure download directories and file handling behavior
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Display Control</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Manage window size, position, and display modes
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
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                : ''
            }`}
          >
            <span className="text-xl">{lang.icon}</span>
            {lang.label}
          </Button>
        ))}
      </div>

      {/* Window Management */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Monitor className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Window Management
          </CardTitle>
          <CardDescription>Control browser window size and position</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">
            <CheckCircle className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Use <code className="bg-emerald-100 dark:bg-emerald-900 px-1 rounded">--start-maximized</code> for consistent viewport across different machines.
            </AlertDescription>
          </Alert>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{windowManagement[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(windowManagement[selectedLanguage], 'Window management code')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Download Settings */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Download className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Download Settings
          </CardTitle>
          <CardDescription>Configure file downloads and PDF handling</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Common Download Preferences</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { pref: 'download.default_directory', desc: 'Set custom download location' },
                { pref: 'download.prompt_for_download', desc: 'Disable download prompt (false)' },
                { pref: 'plugins.always_open_pdf_externally', desc: 'Download PDFs instead of opening' },
                { pref: 'safebrowsing.enabled', desc: 'Enable safe browsing checks' },
              ].map((item) => (
                <div key={item.pref} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <code className="text-xs bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-purple-400 px-2 py-1 rounded block mb-1">
                    {item.pref}
                  </code>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{downloadSettings[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(downloadSettings[selectedLanguage], 'Download settings code')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Privacy & Security Options
          </CardTitle>
          <CardDescription>Control permissions and privacy settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20">
            <Shield className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Security Warning</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">--disable-web-security</code> should only be used in testing environments, never in production!
            </AlertDescription>
          </Alert>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{privacySecurity[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(privacySecurity[selectedLanguage], 'Privacy settings code')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Performance Options */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <Zap className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Performance Optimization
          </CardTitle>
          <CardDescription>Speed up test execution</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Performance Arguments</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { arg: '--disable-extensions', desc: 'Disable all browser extensions', impact: 'High' },
                { arg: '--disable-gpu', desc: 'Disable GPU acceleration', impact: 'Medium' },
                { arg: '--no-sandbox', desc: 'Disable sandbox (CI/CD)', impact: 'High' },
                { arg: '--disable-dev-shm-usage', desc: 'Fix resource issues', impact: 'Medium' },
                { arg: '--blink-settings=imagesEnabled=false', desc: 'Don\'t load images', impact: 'High' },
                { arg: 'page_load_strategy=eager', desc: 'Don\'t wait for full load', impact: 'High' },
              ].map((item) => (
                <div key={item.arg} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                    <code className="text-xs bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-teal-400 px-2 py-1 rounded">
                      {item.arg}
                    </code>
                    <Badge variant={item.impact === 'High' ? 'default' : 'secondary'} className="text-xs">
                      {item.impact}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{performanceOptions[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(performanceOptions[selectedLanguage], 'Performance options code')}
            >
              <Copy className="w-4 h-4" />
            </Button>
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
          <CardDescription>Recommendations for browser options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                title: 'Start Maximized for Consistency',
                desc: 'Use --start-maximized to ensure consistent viewport across different machines and avoid responsive layout issues',
              },
              {
                title: 'Disable Unnecessary Features',
                desc: 'Turn off extensions, notifications, and GPU for faster test execution, especially in CI/CD',
              },
              {
                title: 'Set Download Directory',
                desc: 'Always configure a specific download directory for file download tests to avoid system dialogs',
              },
              {
                title: 'Use Incognito Mode',
                desc: 'Run tests in incognito/private mode to avoid cache and cookie interference between test runs',
              },
              {
                title: 'Page Load Strategy',
                desc: 'Use "eager" page load strategy for faster tests when you don\'t need to wait for all resources',
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

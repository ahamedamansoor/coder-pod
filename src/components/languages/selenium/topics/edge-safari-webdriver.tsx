'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Globe,
  Settings,
  Code,
  Copy,
  CheckCircle,
  Monitor,
  Apple,
  Info
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function EdgeSafariWebDriver() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [selectedBrowser, setSelectedBrowser] = React.useState<'edge' | 'safari'>('edge');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const edgeSetup = {
    python: `from selenium import webdriver
from selenium.webdriver.edge.service import Service
from webdriver_manager.microsoft import EdgeChromiumDriverManager

# Setup Edge driver
service = Service(EdgeChromiumDriverManager().install())
driver = webdriver.Edge(service=service)

# Navigate to website
driver.get("https://www.example.com")

# Close browser
driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class EdgeSetup {
    public static void main(String[] args) {
        // Setup Edge driver
        WebDriverManager.edgedriver().setup();
        WebDriver driver = new EdgeDriver();
        
        // Navigate to website
        driver.get("https://www.example.com");
        
        // Close browser
        driver.quit();
    }
}`,
    javascript: `const { Builder } = require('selenium-webdriver');

async function edgeSetup() {
    // Setup Edge driver
    let driver = await new Builder()
        .forBrowser('MicrosoftEdge')
        .build();
    
    // Navigate to website
    await driver.get('https://www.example.com');
    
    // Close browser
    await driver.quit();
}

edgeSetup();`,
  };

  const safariSetup = {
    python: `from selenium import webdriver

# Setup Safari driver (built-in on macOS)
driver = webdriver.Safari()

# Navigate to website
driver.get("https://www.example.com")

# Close browser
driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.safari.SafariDriver;

public class SafariSetup {
    public static void main(String[] args) {
        // Setup Safari driver (built-in on macOS)
        WebDriver driver = new SafariDriver();
        
        // Navigate to website
        driver.get("https://www.example.com");
        
        // Close browser
        driver.quit();
    }
}`,
    javascript: `const { Builder } = require('selenium-webdriver');

async function safariSetup() {
    // Setup Safari driver (built-in on macOS)
    let driver = await new Builder()
        .forBrowser('safari')
        .build();
    
    // Navigate to website
    await driver.get('https://www.example.com');
    
    // Close browser
    await driver.quit();
}

safariSetup();`,
  };

  const edgeOptions = {
    python: `from selenium import webdriver
from selenium.webdriver.edge.options import Options
from selenium.webdriver.edge.service import Service
from webdriver_manager.microsoft import EdgeChromiumDriverManager

# Create Edge options
options = Options()

# Add arguments
options.add_argument('--start-maximized')
options.add_argument('--disable-notifications')
options.add_argument('--inprivate')  # InPrivate mode

# Set preferences
options.add_experimental_option('prefs', {
    'download.default_directory': '/path/to/downloads',
    'download.prompt_for_download': False,
})

# Initialize driver with options
service = Service(EdgeChromiumDriverManager().install())
driver = webdriver.Edge(service=service, options=options)

driver.get("https://www.example.com")
driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import io.github.bonigarcia.wdm.WebDriverManager;
import java.util.HashMap;

public class EdgeOptionsExample {
    public static void main(String[] args) {
        WebDriverManager.edgedriver().setup();
        
        // Create Edge options
        EdgeOptions options = new EdgeOptions();
        
        // Add arguments
        options.addArguments("--start-maximized");
        options.addArguments("--disable-notifications");
        options.addArguments("--inprivate");  // InPrivate mode
        
        // Set preferences
        HashMap<String, Object> prefs = new HashMap<>();
        prefs.put("download.default_directory", "/path/to/downloads");
        prefs.put("download.prompt_for_download", false);
        options.setExperimentalOption("prefs", prefs);
        
        // Initialize driver with options
        WebDriver driver = new EdgeDriver(options);
        
        driver.get("https://www.example.com");
        driver.quit();
    }
}`,
    javascript: `const { Builder } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');

async function edgeOptionsExample() {
    // Create Edge options
    let options = new edge.Options();
    
    // Add arguments
    options.addArguments('--start-maximized');
    options.addArguments('--disable-notifications');
    options.addArguments('--inprivate');  // InPrivate mode
    
    // Set preferences
    options.setUserPreferences({
        'download.default_directory': '/path/to/downloads',
        'download.prompt_for_download': false,
    });
    
    // Initialize driver with options
    let driver = await new Builder()
        .forBrowser('MicrosoftEdge')
        .setEdgeOptions(options)
        .build();
    
    await driver.get('https://www.example.com');
    await driver.quit();
}

edgeOptionsExample();`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Globe}
        category="Selenium · Browser Configuration"
        title="Edge & Safari WebDriver"
        description="Configure Microsoft Edge and Safari browsers for comprehensive cross-browser testing"
        colorTheme="green"
        badges={[
          { label: 'Cross-Browser', variant: 'success' },
          { label: 'Platform Specific', variant: 'info' },
          { label: 'Native Support', variant: 'secondary' },
        ]}
      />

      {/* Browser Selection */}
      <div className="flex flex-wrap gap-3">
        {[
          { id: 'edge', label: 'Microsoft Edge', icon: '🌐' },
          { id: 'safari', label: 'Safari', icon: '🧭' },
        ].map((browser) => (
          <Button
            key={browser.id}
            variant={selectedBrowser === browser.id ? 'default' : 'outline'}
            size="lg"
            onClick={() => setSelectedBrowser(browser.id as any)}
            className={`gap-2 ${
              selectedBrowser === browser.id
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
                : ''
            }`}
          >
            <span className="text-xl">{browser.icon}</span>
            {browser.label}
          </Button>
        ))}
      </div>

      {selectedBrowser === 'edge' ? (
        <>
          {/* Edge Overview */}
          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
                  <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                Microsoft Edge WebDriver
              </CardTitle>
              <CardDescription>Chromium-based browser with Windows integration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Monitor className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Chromium-Based</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Built on Chromium, similar to Chrome with Microsoft enhancements
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
                      <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">Windows Default</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Pre-installed on Windows 10/11, important for Windows users
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20 mt-4">
                <Info className="h-5 w-5 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Edge Compatibility</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                  Since Edge is Chromium-based, most Chrome options and capabilities work with Edge as well. 
                  Use EdgeOptions which extends ChromeOptions.
                </AlertDescription>
              </Alert>
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

          {/* Edge Basic Setup */}
          <Card className="border-emerald-200 dark:border-emerald-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
                  <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                Basic Edge Setup
              </CardTitle>
              <CardDescription>Initialize Microsoft Edge WebDriver</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
                <pre className="overflow-x-auto">{edgeSetup[selectedLanguage]}</pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => copyToClipboard(edgeSetup[selectedLanguage], 'Edge setup code')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Edge Options */}
          <Card className="border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
                  <Settings className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                Edge Options & Preferences
              </CardTitle>
              <CardDescription>Customize Edge browser behavior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Common Edge Arguments</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { arg: '--start-maximized', desc: 'Start browser maximized' },
                    { arg: '--inprivate', desc: 'Start in InPrivate mode' },
                    { arg: '--disable-notifications', desc: 'Block notifications' },
                    { arg: '--disable-popup-blocking', desc: 'Allow popups' },
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
                <pre className="overflow-x-auto">{edgeOptions[selectedLanguage]}</pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => copyToClipboard(edgeOptions[selectedLanguage], 'Edge options code')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          {/* Safari Overview */}
          <Card className="border-cyan-200 dark:border-cyan-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/40">
                  <Apple className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                Safari WebDriver
              </CardTitle>
              <CardDescription>Apple's native browser for macOS and iOS</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-lg border-2 border-cyan-200 dark:border-cyan-700">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Apple className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-1">Built-in Driver</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        SafariDriver comes pre-installed on macOS, no download needed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">macOS Only</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Safari testing requires macOS, important for Apple ecosystem
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20 mt-4">
                <Info className="h-5 w-5 text-amber-600" />
                <AlertTitle className="text-amber-900 dark:text-amber-100">Enable Safari WebDriver</AlertTitle>
                <AlertDescription className="text-amber-800 dark:text-amber-200">
                  <p className="mb-2">Before using Safari WebDriver, enable it in Safari:</p>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Open Safari → Preferences → Advanced</li>
                    <li>Check "Show Develop menu in menu bar"</li>
                    <li>Develop → Allow Remote Automation</li>
                    <li>Run: <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">safaridriver --enable</code></li>
                  </ol>
                </AlertDescription>
              </Alert>
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
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700'
                    : ''
                }`}
              >
                <span className="text-xl">{lang.icon}</span>
                {lang.label}
              </Button>
            ))}
          </div>

          {/* Safari Basic Setup */}
          <Card className="border-emerald-200 dark:border-emerald-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
                  <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                Basic Safari Setup
              </CardTitle>
              <CardDescription>Initialize Safari WebDriver (macOS only)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <AlertTitle className="text-emerald-900 dark:text-emerald-100">No Driver Download Needed</AlertTitle>
                <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                  Safari WebDriver is built into macOS. Just enable it in Safari preferences and you're ready to go!
                </AlertDescription>
              </Alert>

              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
                <pre className="overflow-x-auto">{safariSetup[selectedLanguage]}</pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => copyToClipboard(safariSetup[selectedLanguage], 'Safari setup code')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Safari Limitations */}
          <Card className="border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
                  <Info className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                Safari Limitations
              </CardTitle>
              <CardDescription>Important considerations for Safari testing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-l-4 border-orange-500">
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">⚠️ Limited Configuration</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Safari has fewer configuration options compared to Chrome or Firefox. Many browser preferences cannot be set programmatically.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-l-4 border-orange-500">
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">⚠️ No Headless Mode</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Safari does not support headless mode. The browser window will always be visible during test execution.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-l-4 border-orange-500">
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">⚠️ macOS Required</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Safari testing can only be performed on macOS. Consider using cloud testing services for cross-platform CI/CD.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Cross-Browser Testing */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <Globe className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Cross-Browser Testing Strategy
          </CardTitle>
          <CardDescription>Best practices for comprehensive browser coverage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-teal-200 dark:border-teal-700">
              <h5 className="font-semibold text-teal-900 dark:text-teal-100 mb-3">Recommended Browser Coverage</h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-500">Primary</Badge>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Chrome (80% of tests)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-orange-500">Secondary</Badge>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Firefox (15% of tests)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-cyan-500">Platform-Specific</Badge>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Edge (Windows users) & Safari (macOS/iOS users)</span>
                </div>
              </div>
            </div>

            <Alert className="border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-950/20">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <AlertTitle className="text-teal-900 dark:text-teal-100">Pro Tip</AlertTitle>
              <AlertDescription className="text-teal-800 dark:text-teal-200">
                Use parameterized tests to run the same test suite across multiple browsers. 
                This ensures consistent behavior and catches browser-specific issues early.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

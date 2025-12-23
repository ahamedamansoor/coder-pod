'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  EyeOff,
  Code,
  Copy,
  CheckCircle,
  Zap,
  Server,
  GitBranch,
  AlertCircle,
  Eye,
  Monitor
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function HeadlessMode() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [selectedBrowser, setSelectedBrowser] = React.useState<'chrome' | 'firefox'>('chrome');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const chromeHeadless = {
    python: `from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Configure Chrome for headless mode
options = Options()
options.add_argument('--headless=new')  # New headless mode (Chrome 109+)
options.add_argument('--disable-gpu')  # Disable GPU acceleration
options.add_argument('--no-sandbox')  # Required for CI/CD environments
options.add_argument('--disable-dev-shm-usage')  # Overcome limited resource problems
options.add_argument('--window-size=1920,1080')  # Set viewport size

# Initialize driver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)

# Run test
driver.get("https://www.example.com")
print(f"Page title: {driver.title}")

# Take screenshot (works in headless!)
driver.save_screenshot('screenshot.png')

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import io.github.bonigarcia.wdm.WebDriverManager;
import java.io.File;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class ChromeHeadless {
    public static void main(String[] args) throws Exception {
        WebDriverManager.chromedriver().setup();
        
        // Configure Chrome for headless mode
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless=new");  // New headless mode (Chrome 109+)
        options.addArguments("--disable-gpu");  // Disable GPU acceleration
        options.addArguments("--no-sandbox");  // Required for CI/CD environments
        options.addArguments("--disable-dev-shm-usage");  // Overcome limited resource problems
        options.addArguments("--window-size=1920,1080");  // Set viewport size
        
        // Initialize driver
        WebDriver driver = new ChromeDriver(options);
        
        // Run test
        driver.get("https://www.example.com");
        System.out.println("Page title: " + driver.getTitle());
        
        // Take screenshot (works in headless!)
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(screenshot, new File("screenshot.png"));
        
        driver.quit();
    }
}`,
    javascript: `const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

async function chromeHeadless() {
    // Configure Chrome for headless mode
    let options = new chrome.Options();
    options.addArguments('--headless=new');  // New headless mode (Chrome 109+)
    options.addArguments('--disable-gpu');  // Disable GPU acceleration
    options.addArguments('--no-sandbox');  // Required for CI/CD environments
    options.addArguments('--disable-dev-shm-usage');  // Overcome limited resource problems
    options.addArguments('--window-size=1920,1080');  // Set viewport size
    
    // Initialize driver
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    
    // Run test
    await driver.get('https://www.example.com');
    console.log('Page title:', await driver.getTitle());
    
    // Take screenshot (works in headless!)
    let screenshot = await driver.takeScreenshot();
    fs.writeFileSync('screenshot.png', screenshot, 'base64');
    
    await driver.quit();
}

chromeHeadless();`,
  };

  const firefoxHeadless = {
    python: `from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.service import Service
from webdriver_manager.firefox import GeckoDriverManager

# Configure Firefox for headless mode
options = Options()
options.add_argument('--headless')
options.add_argument('--width=1920')
options.add_argument('--height=1080')

# Initialize driver
service = Service(GeckoDriverManager().install())
driver = webdriver.Firefox(service=service, options=options)

# Run test
driver.get("https://www.example.com")
print(f"Page title: {driver.title}")

# Take screenshot
driver.save_screenshot('screenshot.png')

driver.quit()`,
    java: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import io.github.bonigarcia.wdm.WebDriverManager;
import java.io.File;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class FirefoxHeadless {
    public static void main(String[] args) throws Exception {
        WebDriverManager.firefoxdriver().setup();
        
        // Configure Firefox for headless mode
        FirefoxOptions options = new FirefoxOptions();
        options.addArguments("--headless");
        options.addArguments("--width=1920");
        options.addArguments("--height=1080");
        
        // Initialize driver
        WebDriver driver = new FirefoxDriver(options);
        
        // Run test
        driver.get("https://www.example.com");
        System.out.println("Page title: " + driver.getTitle());
        
        // Take screenshot
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(screenshot, new File("screenshot.png"));
        
        driver.quit();
    }
}`,
    javascript: `const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const fs = require('fs');

async function firefoxHeadless() {
    // Configure Firefox for headless mode
    let options = new firefox.Options();
    options.addArguments('--headless');
    options.addArguments('--width=1920');
    options.addArguments('--height=1080');
    
    // Initialize driver
    let driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();
    
    // Run test
    await driver.get('https://www.example.com');
    console.log('Page title:', await driver.getTitle());
    
    // Take screenshot
    let screenshot = await driver.takeScreenshot();
    fs.writeFileSync('screenshot.png', screenshot, 'base64');
    
    await driver.quit();
}

firefoxHeadless();`,
  };

  const cicdExample = {
    python: `# GitHub Actions example (.github/workflows/test.yml)
name: Selenium Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.9'
    
    - name: Install dependencies
      run: |
        pip install selenium webdriver-manager pytest
    
    - name: Run tests
      run: pytest tests/ --headless
      
    - name: Upload screenshots
      if: failure()
      uses: actions/upload-artifact@v2
      with:
        name: screenshots
        path: screenshots/`,
    java: `<!-- Jenkins Pipeline example (Jenkinsfile) -->
pipeline {
    agent any
    
    stages {
        stage('Setup') {
            steps {
                sh 'mvn clean install'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'mvn test -Dheadless=true'
            }
        }
        
        stage('Archive Results') {
            steps {
                junit '**/target/surefire-reports/*.xml'
                archiveArtifacts artifacts: 'screenshots/**/*.png', allowEmptyArchive: true
            }
        }
    }
}`,
    javascript: `// GitLab CI example (.gitlab-ci.yml)
image: node:16

stages:
  - test

selenium_tests:
  stage: test
  before_script:
    - npm install
    - apt-get update && apt-get install -y chromium chromium-driver
  script:
    - npm test -- --headless
  artifacts:
    when: on_failure
    paths:
      - screenshots/
    expire_in: 1 week`,
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={EyeOff}
        category="Selenium · Browser Configuration"
        title="Headless Mode"
        description="Run browsers without a visible UI for faster test execution in CI/CD pipelines and automated environments"
        colorTheme="green"
        badges={[
          { label: 'CI/CD Essential', variant: 'success' },
          { label: 'Performance', variant: 'info' },
          { label: 'Production Ready', variant: 'secondary' },
        ]}
      />

      {/* Why Headless Mode */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <EyeOff className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Why Use Headless Mode?
          </CardTitle>
          <CardDescription>Benefits of running browsers without a GUI</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Faster Execution</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    20-30% faster tests without GUI rendering overhead
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">Server Friendly</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Run on servers without display or X11 requirements
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">CI/CD Perfect</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Ideal for GitHub Actions, Jenkins, GitLab CI, etc.
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
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Lower Resources</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Reduced memory and CPU usage without GUI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Selection */}
      <div className="flex flex-wrap gap-3">
        {[
          { id: 'chrome', label: 'Chrome', icon: '🌐' },
          { id: 'firefox', label: 'Firefox', icon: '🔥' },
        ].map((browser) => (
          <Button
            key={browser.id}
            variant={selectedBrowser === browser.id ? 'default' : 'outline'}
            size="lg"
            onClick={() => setSelectedBrowser(browser.id as any)}
            className={`gap-2 ${
              selectedBrowser === browser.id
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                : ''
            }`}
          >
            <span className="text-xl">{browser.icon}</span>
            {browser.label}
          </Button>
        ))}
      </div>

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
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
                : ''
            }`}
          >
            <span className="text-xl">{lang.icon}</span>
            {lang.label}
          </Button>
        ))}
      </div>

      {/* Headless Setup */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            {selectedBrowser === 'chrome' ? 'Chrome' : 'Firefox'} Headless Setup
          </CardTitle>
          <CardDescription>Configure browser for headless execution</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {selectedBrowser === 'chrome' && (
            <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <AlertTitle className="text-emerald-900 dark:text-emerald-100">New Headless Mode</AlertTitle>
              <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                Chrome 109+ supports <code className="bg-emerald-100 dark:bg-emerald-900 px-1 rounded">--headless=new</code> which provides better performance and compatibility than the old headless mode.
              </AlertDescription>
            </Alert>
          )}

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">
              {selectedBrowser === 'chrome' ? chromeHeadless[selectedLanguage] : firefoxHeadless[selectedLanguage]}
            </pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(
                selectedBrowser === 'chrome' ? chromeHeadless[selectedLanguage] : firefoxHeadless[selectedLanguage],
                'Headless setup code'
              )}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Essential Arguments */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Essential Headless Arguments
          </CardTitle>
          <CardDescription>Required options for stable headless execution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {(selectedBrowser === 'chrome' ? [
              { arg: '--headless=new', desc: 'Enable new headless mode (Chrome 109+)', required: true },
              { arg: '--disable-gpu', desc: 'Disable GPU acceleration', required: true },
              { arg: '--no-sandbox', desc: 'Required for CI/CD environments', required: true },
              { arg: '--disable-dev-shm-usage', desc: 'Overcome limited /dev/shm in Docker', required: true },
              { arg: '--window-size=1920,1080', desc: 'Set viewport size explicitly', required: false },
            ] : [
              { arg: '--headless', desc: 'Enable headless mode', required: true },
              { arg: '--width=1920', desc: 'Set viewport width', required: false },
              { arg: '--height=1080', desc: 'Set viewport height', required: false },
            ]).map((item) => (
              <div key={item.arg} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex-shrink-0">
                  {item.required ? (
                    <Badge className="bg-red-500">Required</Badge>
                  ) : (
                    <Badge variant="secondary">Optional</Badge>
                  )}
                </div>
                <div className="flex-1">
                  <code className="text-sm bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-purple-400 px-2 py-1 rounded">
                    {item.arg}
                  </code>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CI/CD Integration */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <GitBranch className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            CI/CD Integration
          </CardTitle>
          <CardDescription>Example configurations for popular CI/CD platforms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/20">
            <Server className="h-5 w-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">CI/CD Best Practices</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Always use headless mode in CI/CD pipelines</li>
                <li>• Set explicit window size for consistent screenshots</li>
                <li>• Archive screenshots on test failures for debugging</li>
                <li>• Use --no-sandbox in Docker containers</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 max-h-[400px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700 relative group">
            <pre className="overflow-x-auto">{cicdExample[selectedLanguage]}</pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(cicdExample[selectedLanguage], 'CI/CD config')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Headless vs Headed */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <Eye className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Headless vs Headed Mode
          </CardTitle>
          <CardDescription>When to use each mode</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-teal-900 dark:text-teal-100 flex items-center gap-2">
                <EyeOff className="w-5 h-5" />
                Use Headless Mode
              </h4>
              <div className="space-y-2">
                {[
                  'CI/CD pipelines and automated builds',
                  'Running tests on servers without display',
                  'Parallel test execution for speed',
                  'Docker containers and cloud environments',
                  'Web scraping and background tasks',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-teal-50 dark:bg-teal-950/30 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Use Headed Mode
              </h4>
              <div className="space-y-2">
                {[
                  'Debugging test failures visually',
                  'Developing and writing new tests',
                  'Demonstrating test execution to stakeholders',
                  'Testing visual elements and animations',
                  'Troubleshooting complex interactions',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Issues */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/40">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            Common Headless Issues
          </CardTitle>
          <CardDescription>Troubleshooting headless mode problems</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Tests Pass in Headed but Fail in Headless</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Solution:</strong> Set explicit window size with <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">--window-size=1920,1080</code>. 
                Headless mode may have different default viewport causing responsive layout issues.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ "DevToolsActivePort file doesn't exist" Error</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Solution:</strong> Add <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">--no-sandbox</code> and 
                <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded ml-1">--disable-dev-shm-usage</code> arguments, especially in Docker.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Screenshots Are Blank or Black</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Solution:</strong> Ensure you're using <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">--headless=new</code> (Chrome 109+) 
                and set window size before taking screenshots.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

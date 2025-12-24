'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Shield,
  Code,
  AlertCircle,
  Search,
  Settings,
  Target,
  Bug,
  RefreshCw,
  Play,
  Layers,
  Database,
  FileText,
  Package,
  Activity,
  GitBranch,
  Users,
  Globe,
  Zap,
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function AxeCoreIntegrationComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isScanning, setIsScanning] = React.useState(false);
  const [scanResults, setScanResults] = React.useState<Array<{ 
    id: string; 
    impact: 'critical' | 'serious' | 'moderate' | 'minor'; 
    description: string; 
    element: string;
    help: string;
  }>>([]);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [violationCount, setViolationCount] = React.useState(0);
  const [currentAxeAnimation, setCurrentAxeAnimation] = React.useState(0);
  const [ruleIndex, setRuleIndex] = React.useState(0);
  const [impactIndex, setImpactIndex] = React.useState(0);
  const [scanProcessIndex, setScanProcessIndex] = React.useState(2);
  const [violationIndex, setViolationIndex] = React.useState(0);
  const [axeAnimationAnnouncement, setAxeAnimationAnnouncement] = React.useState('');

  // Auto-advance animations
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRuleIndex((prev) => (prev + 1) % 4);
      setImpactIndex((prev) => (prev + 1) % 4);
      setScanProcessIndex((prev) => (prev + 1) % 5);
      setViolationIndex((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Update screen reader announcements
  React.useEffect(() => {
    const announcements = [
      `Axe Core Rule Categories animation active. Currently viewing: ${['WCAG 2.1 A', 'WCAG 2.1 AA', 'WCAG 2.1 AAA', 'Best Practices'][ruleIndex]} rules.`,
      `Axe Core Impact Levels animation active. Currently viewing: ${['Critical', 'Serious', 'Moderate', 'Minor'][impactIndex]} impact level.`,
      `Axe Core Scan Process animation active. Current step: ${['Initialize Axe', 'Load Rules', 'Analyze DOM', 'Run Tests', 'Generate Report'][scanProcessIndex]}.`,
      `Axe Core Violation Details animation active. Currently viewing: ${['Insufficient Color Contrast', 'Missing Alt Text', 'Button Has No Accessible Name'][violationIndex]}.`
    ];
    setAxeAnimationAnnouncement(announcements[currentAxeAnimation]);
  }, [currentAxeAnimation, ruleIndex, impactIndex, scanProcessIndex, violationIndex]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const simulateAxeScan = async () => {
    setIsScanning(true);
    setScanResults([]);
    setCurrentStep(0);
    setViolationCount(0);

    const steps = [
      { step: 0, log: '🚀 Initializing Axe Core...', delay: 500 },
      { step: 1, log: '📦 Loading Axe library...', delay: 800 },
      { step: 2, log: '🔍 Configuring scan rules...', delay: 600 },
      { step: 3, log: '⚡ Running accessibility scan...', delay: 1000 },
      { step: 4, log: '📊 Analyzing results...', delay: 700 },
      { step: 5, log: '✅ Scan completed!', delay: 400 },
    ];

    const mockViolations = [
      {
        id: 'color-contrast',
        impact: 'serious' as const,
        description: 'Elements must have sufficient color contrast',
        element: '.submit-button',
        help: 'Use color combinations that meet WCAG AA standards (4.5:1 for normal text)'
      },
      {
        id: 'image-alt',
        impact: 'critical' as const,
        description: 'Images must have alternate text',
        element: 'img.logo',
        help: 'Add descriptive alt text to all meaningful images'
      },
      {
        id: 'label',
        impact: 'serious' as const,
        description: 'Form elements must have labels',
        element: 'input[type="email"]',
        help: 'Associate labels with form inputs using for/id attributes'
      },
      {
        id: 'focus-order-semantics',
        impact: 'moderate' as const,
        description: 'Focusable elements must have focus order',
        element: '.navigation',
        help: 'Ensure logical tab order through interactive elements'
      },
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, step.delay));
      setCurrentStep(step.step);
    }

    setScanResults(mockViolations);
    setViolationCount(mockViolations.length);
    setIsScanning(false);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critical': return 'bg-red-100 dark:bg-red-950/30 border-red-200 dark:border-red-700 text-red-800 dark:text-red-300';
      case 'serious': return 'bg-orange-100 dark:bg-orange-950/30 border-orange-200 dark:border-orange-700 text-orange-800 dark:text-orange-300';
      case 'moderate': return 'bg-yellow-100 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-300';
      case 'minor': return 'bg-blue-100 dark:bg-blue-950/30 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-300';
      default: return 'bg-gray-100 dark:bg-gray-950/30 border-gray-200 dark:border-gray-700';
    }
  };

  const getImpactBadgeVariant = (impact: string) => {
    switch (impact) {
      case 'critical': return 'destructive';
      case 'serious': return 'secondary';
      case 'moderate': return 'outline';
      case 'minor': return 'default';
      default: return 'outline';
    }
  };

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        icon={Shield}
        category="Selenium · Accessibility Testing"
        title="Axe Core Integration"
        description="Automated accessibility testing with Axe Core library and Selenium WebDriver"
        colorTheme="purple"
        badges={[
          { label: 'Automated', variant: 'info' },
          { label: 'Industry Standard', variant: 'secondary' },
          { label: 'WCAG Compliant', variant: 'default' },
        ]}
      />

      {/* Axe Core Architecture Diagram */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Axe Core Architecture
          </CardTitle>
          <CardDescription>How Axe Core integrates with Selenium for accessibility testing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Architecture Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700">
              <div className="space-y-0">
                {/* Selenium Layer */}
                <div className="text-center">
                  <div className="inline-block bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700">
                    <div className="text-lg font-bold text-green-900 dark:text-green-100">Selenium WebDriver</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Browser Automation</div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                
                {/* JavaScript Executor */}
                <div className="text-center">
                  <div className="inline-block bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                    <div className="text-lg font-bold text-blue-900 dark:text-blue-100">JavaScript Executor</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Script Injection</div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                
                {/* Axe Core */}
                <div className="text-center">
                  <div className="inline-block bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                    <div className="text-lg font-bold text-purple-900 dark:text-purple-100">Axe Core</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">Accessibility Engine</div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                
                {/* Results */}
                <div className="text-center">
                  <div className="inline-block bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                    <div className="text-lg font-bold text-orange-900 dark:text-orange-100">Violation Reports</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">Structured Results</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Integration Flow */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Library Injection</h5>
                </div>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Axe Core injected via JavaScript executor</li>
                  <li>• No additional browser extensions needed</li>
                  <li>• Works with all major browsers</li>
                  <li>• Lightweight and fast execution</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Rule Engine</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• 90+ accessibility rules built-in</li>
                  <li>• WCAG 2.1 AA compliance checking</li>
                  <li>• Customizable rule sets</li>
                  <li>• Detailed violation reporting</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Real-time Analysis</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• DOM analysis in browser context</li>
                  <li>• Dynamic content detection</li>
                  <li>• Shadow DOM support</li>
                  <li>• Cross-frame testing</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">Comprehensive Reports</h5>
                </div>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Structured JSON results</li>
                  <li>• Impact severity classification</li>
                  <li>• Element-specific recommendations</li>
                  <li>• Integration with CI/CD pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Axe Core Benefits */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Why Choose Axe Core
          </CardTitle>
          <CardDescription>Industry-leading automated accessibility testing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Industry Standard</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Used by Fortune 500 companies and government agencies worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Fast & Efficient</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Scans entire pages in milliseconds with minimal performance impact
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
                    Customize rules, tags, and reporting to match your specific needs
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Open Source</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Free to use with active community support and regular updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-600" />
            Axe Core Integration Examples
          </CardTitle>
          <CardDescription>
            Selenium scripts with Axe Core accessibility testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Language Tabs */}
          <div className="flex gap-2 mb-4 border-b">
            {(['python', 'java', 'javascript'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  selectedLanguage === lang
                    ? 'border-b-2 border-purple-600 text-purple-600 dark:text-purple-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
                {selectedLanguage === 'python' && `# Axe Core integration with Selenium
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://example.com")

# Inject Axe Core library
axe_script = """
var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.4.1/axe.min.js';
document.head.appendChild(script);
"""
driver.execute_script(axe_script)

# Wait for Axe to load
driver.execute_script("return window.axe")

# Run accessibility scan
results = driver.execute_script("""
return axe.run().then(function(results) {
    return results;
});
""")

# Process violations
for violation in results['violations']:
    print(f"Issue: {violation['id']}")
    print(f"Impact: {violation['impact']}")
    print(f"Description: {violation['description']}")
    for node in violation['nodes']:
        print(f"Element: {node['target']}")`}
                {selectedLanguage === 'java' && `// Axe Core integration with Selenium
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.json.JSONObject;

WebDriver driver = new ChromeDriver();
driver.get("https://example.com");

JavascriptExecutor js = (JavascriptExecutor) driver;

// Inject Axe Core library
String axeScript = "var script = document.createElement('script');" +
    "script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.4.1/axe.min.js';" +
    "document.head.appendChild(script);";
js.executeScript(axeScript);

// Wait for Axe to load
js.executeScript("return window.axe");

// Run accessibility scan
String resultsScript = "return axe.run().then(function(results) {" +
    "return results;" +
    "});";
Object results = js.executeScript(resultsScript);

// Process violations
JSONObject json = new JSONObject(results.toString());
JSONArray violations = json.getJSONArray("violations");
for (int i = 0; i < violations.length(); i++) {
    JSONObject violation = violations.getJSONObject(i);
    System.out.println("Issue: " + violation.getString("id"));
    System.out.println("Impact: " + violation.getString("impact"));
}`}
                {selectedLanguage === 'javascript' && `// Axe Core integration with Selenium
const { Builder, By } = require('selenium-webdriver');

async function testAccessibility() {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://example.com');

    // Inject Axe Core library
    const axeScript = \`
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.4.1/axe.min.js';
        document.head.appendChild(script);
    \`;
    await driver.executeScript(axeScript);

    // Wait for Axe to load
    await driver.executeScript('return window.axe');

    // Run accessibility scan
    const results = await driver.executeScript(\`
        return axe.run().then(function(results) {
            return results;
        });
    \`);

    // Process violations
    for (const violation of results.violations) {
        console.log(\`Issue: \${violation.id}\`);
        console.log(\`Impact: \${violation.impact}\`);
        console.log(\`Description: \${violation.description}\`);
        for (const node of violation.nodes) {
            console.log(\`Element: \${node.target}\`);
        }
    }

    await driver.quit();
}`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Axe Core Animation Demo */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Interactive Axe Core Animation Demo
          </CardTitle>
          <CardDescription>Visual demonstration of Axe Core accessibility testing in action</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Animation Controls */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => {
                  // Reset all animation indices to beginning
                  setRuleIndex(0);
                  setImpactIndex(0);
                  setScanProcessIndex(2);
                  setViolationIndex(0);
                  
                  // Switch to next animation
                  setCurrentAxeAnimation((prev) => (prev + 1) % 4);
                  
                  // Trigger announcement immediately
                  const nextAnimation = (currentAxeAnimation + 1) % 4;
                  const announcementText = `Switched to ${['Rule Categories', 'Impact Levels', 'Scan Process', 'Violation Details'][nextAnimation]} animation`;
                  setAxeAnimationAnnouncement(announcementText);
                }}
                className="flex items-center gap-2"
                aria-label="Switch to next Axe Core animation example"
                aria-describedby="axe-animation-status"
              >
                <RefreshCw className="w-4 h-4" />
                Next Animation
              </Button>
              <Badge 
                variant="outline" 
                aria-live="polite"
                id="axe-animation-status"
                role="status"
              >
                Current animation: {['Rule Categories', 'Impact Levels', 'Scan Process', 'Violation Details'][currentAxeAnimation]}
              </Badge>
            </div>

            {/* Screen Reader Live Region for Announcements */}
            <div 
              aria-live="polite" 
              aria-atomic="true" 
              className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0"
              role="status"
              aria-label="Axe Core animation status announcement"
            >
              {axeAnimationAnnouncement}
            </div>

            {/* Rule Categories Animation */}
            {currentAxeAnimation === 0 && (
              <div 
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-700"
                role="region"
                aria-labelledby="rule-categories-title"
              >
                <h4 id="rule-categories-title" className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
                  Axe Core Rule Categories
                </h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4" role="group" aria-label="Axe Core rule categories">
                    {[
                      { name: 'WCAG 2.1 A', count: 50, color: 'blue' },
                      { name: 'WCAG 2.1 AA', count: 80, color: 'green' },
                      { name: 'WCAG 2.1 AAA', count: 30, color: 'purple' },
                      { name: 'Best Practices', count: 20, color: 'orange' }
                    ].map((category, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          ruleIndex === index 
                            ? `border-${category.color}-500 bg-${category.color}-100 dark:bg-${category.color}-900/50 shadow-lg scale-105` 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setRuleIndex(index)}
                        onFocus={() => setRuleIndex(index)}
                        role="article"
                        aria-current={ruleIndex === index ? "step" : undefined}
                      >
                        <h5 className="font-semibold text-lg">{category.name}</h5>
                        <p className="text-sm opacity-80">{category.count} rules</p>
                        {ruleIndex === index && (
                          <div className="text-xs text-purple-600 dark:text-purple-400 mt-2" role="status">
                            🔍 Currently viewing: {category.name} rules
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300">
                    <strong>Demonstration:</strong> Axe Core organizes rules by WCAG compliance levels. 
                    Each category contains specific accessibility checks.
                    Currently viewing: {['WCAG 2.1 A', 'WCAG 2.1 AA', 'WCAG 2.1 AAA', 'Best Practices'][ruleIndex]}
                  </div>
                </div>
              </div>
            )}

            {/* Impact Levels Animation */}
            {currentAxeAnimation === 1 && (
              <div 
                className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-6 rounded-lg border-2 border-red-200 dark:border-red-700"
                role="region"
                aria-labelledby="impact-levels-title"
              >
                <h4 id="impact-levels-title" className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">
                  Violation Impact Levels
                </h4>
                <div className="space-y-4">
                  <div className="space-y-3" role="group" aria-label="Axe Core violation impact levels">
                    {[
                      { level: 'Critical', description: 'Prevents access for users with disabilities', color: 'red', examples: 5 },
                      { level: 'Serious', description: 'Creates significant barriers for users', color: 'orange', examples: 12 },
                      { level: 'Moderate', description: 'Causes frustration for some users', color: 'yellow', examples: 18 },
                      { level: 'Minor', description: 'Slightly inconvenient for users', color: 'blue', examples: 25 }
                    ].map((impact, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          impactIndex === index 
                            ? `border-${impact.color}-500 bg-${impact.color}-100 dark:bg-${impact.color}-900/50 shadow-lg scale-105` 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setImpactIndex(index)}
                        onFocus={() => setImpactIndex(index)}
                        role="article"
                        aria-current={impactIndex === index ? "step" : undefined}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-semibold">{impact.level}</h5>
                            <p className="text-sm opacity-80">{impact.description}</p>
                          </div>
                          <Badge variant={impact.level === 'Critical' ? 'destructive' : impact.level === 'Serious' ? 'secondary' : 'outline'}>
                            {impact.examples} examples
                          </Badge>
                        </div>
                        {impactIndex === index && (
                          <div className="text-xs text-red-600 dark:text-red-400 mt-2" role="status">
                            ⚠️ Currently viewing: {impact.level} impact violations
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-red-700 dark:text-red-300">
                    <strong>Demonstration:</strong> Axe Core classifies violations by impact severity. 
                    Critical issues should be fixed immediately.
                    Currently viewing: {['Critical', 'Serious', 'Moderate', 'Minor'][impactIndex]} impact level
                  </div>
                </div>
              </div>
            )}

            {/* Scan Process Animation */}
            {currentAxeAnimation === 2 && (
              <div 
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-lg border-2 border-green-200 dark:border-green-700"
                role="region"
                aria-labelledby="scan-process-title"
              >
                <h4 id="scan-process-title" className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  Axe Core Scan Process
                </h4>
                <div className="space-y-4">
                  <div className="space-y-3" role="list" aria-label="Axe Core scanning steps">
                    {[
                      { step: 'Initialize Axe', status: 'complete', icon: '🚀' },
                      { step: 'Load Rules', status: 'complete', icon: '📦' },
                      { step: 'Analyze DOM', status: scanProcessIndex === 2 ? 'active' : scanProcessIndex > 2 ? 'complete' : 'pending', icon: '🔍' },
                      { step: 'Run Tests', status: scanProcessIndex === 3 ? 'active' : scanProcessIndex > 3 ? 'complete' : 'pending', icon: '⚡' },
                      { step: 'Generate Report', status: scanProcessIndex === 4 ? 'active' : 'pending', icon: '📊' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`p-3 rounded-lg border-2 transition-all duration-700 flex items-center gap-3 ${
                          item.status === 'complete' 
                            ? 'border-green-500 bg-green-100 dark:bg-green-900/50' 
                            : item.status === 'active'
                            ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/50 shadow-lg scale-105'
                            : 'border-gray-300 dark:border-gray-600 opacity-60'
                        }`}
                        role="listitem"
                        aria-current={item.status === 'active' ? "step" : undefined}
                      >
                        <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                        <div className="flex-1">
                          <div className="font-medium">{item.step}</div>
                          <div className="text-sm opacity-80">
                            {item.status === 'complete' && '✅ Completed'}
                            {item.status === 'active' && '🔄 In progress...'}
                            {item.status === 'pending' && '⏳ Pending'}
                          </div>
                        </div>
                        {item.status === 'active' && (
                          <div className="text-xs text-blue-600 dark:text-blue-400" role="status">
                            Currently executing: {item.step}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    <strong>Demonstration:</strong> Axe Core follows a systematic process to scan web pages. 
                    Each step ensures comprehensive accessibility testing.
                    Current step: {['Initialize Axe', 'Load Rules', 'Analyze DOM', 'Run Tests', 'Generate Report'][scanProcessIndex]}
                  </div>
                </div>
              </div>
            )}

            {/* Violation Details Animation */}
            {currentAxeAnimation === 3 && (
              <div 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-700"
                role="region"
                aria-labelledby="violation-details-title"
              >
                <h4 id="violation-details-title" className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                  Violation Details and Solutions
                </h4>
                <div className="space-y-4">
                  <div className="space-y-3" role="group" aria-label="Axe Core violation examples with solutions">
                    {[
                      {
                        id: 'color-contrast',
                        title: 'Insufficient Color Contrast',
                        element: '.submit-button',
                        solution: 'Use color combinations with 4.5:1 contrast ratio',
                        impact: 'serious'
                      },
                      {
                        id: 'image-alt',
                        title: 'Missing Alt Text',
                        element: 'img.logo',
                        solution: 'Add descriptive alt text to all meaningful images',
                        impact: 'critical'
                      },
                      {
                        id: 'button-name',
                        title: 'Button Has No Accessible Name',
                        element: 'button.icon-only',
                        solution: 'Add aria-label or text content to buttons',
                        impact: 'serious'
                      }
                    ].map((violation, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          violationIndex === index 
                            ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/50 shadow-lg scale-105' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setViolationIndex(index)}
                        onFocus={() => setViolationIndex(index)}
                        role="article"
                        aria-current={violationIndex === index ? "step" : undefined}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Bug className="w-4 h-4 flex-shrink-0" />
                            <span className="font-semibold">{violation.title}</span>
                          </div>
                          <Badge variant={violation.impact === 'critical' ? 'destructive' : 'secondary'}>
                            {violation.impact}
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>Element:</strong> <code className="bg-black/10 px-1 rounded">{violation.element}</code>
                          </div>
                          <div>
                            <strong>Solution:</strong> {violation.solution}
                          </div>
                        </div>
                        {violationIndex === index && (
                          <div className="text-xs text-blue-600 dark:text-blue-400 mt-2" role="status">
                            🔍 Currently viewing: {violation.title}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Demonstration:</strong> Axe Core provides detailed violation information and actionable solutions. 
                    Each violation includes specific guidance for remediation.
                    Currently viewing: {['Insufficient Color Contrast', 'Missing Alt Text', 'Button Has No Accessible Name'][violationIndex]}
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Alert>
        <Shield className="w-4 h-4" />
        <AlertTitle>Important Axe Core Notes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Axe Core can only detect ~30-40% of accessibility issues automatically</li>
            <li>Always complement automated testing with manual accessibility testing</li>
            <li>Ensure Axe Core is properly injected before running scans</li>
            <li>Consider running scans at different viewport sizes for responsive testing</li>
            <li>Integrate with CI/CD pipelines for continuous accessibility monitoring</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default AxeCoreIntegrationComponent;

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Eye,
  Code,
  AlertCircle,
  Search,
  Users,
  Hand,
  Brain,
  Shield,
  RefreshCw,
  Target,
  Lock,
  Monitor,
  Cpu,
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function AccessibilityFundamentalsComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isScanning, setIsScanning] = React.useState(false);
  const [scanResults, setScanResults] = React.useState<Array<{ element: string; issue: string; severity: 'high' | 'medium' | 'low' }>>([]);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [currentAnimation, setCurrentAnimation] = React.useState(0);
  const [focusedIndex, setFocusedIndex] = React.useState(0);
  const [readingIndex, setReadingIndex] = React.useState(0);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [animationAnnouncement, setAnimationAnnouncement] = React.useState('');

  // Auto-advance animations
  React.useEffect(() => {
    const interval = setInterval(() => {
      setReadingIndex((prev) => (prev + 1) % 3);
      setTabIndex((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Update screen reader announcements
  React.useEffect(() => {
    const announcements = [
      `Focus Management animation active. Button ${focusedIndex + 1} is currently focused.`,
      `Screen Reader Flow animation active. Currently reading: ${['Main Heading', 'Introduction Paragraph', 'Subsection Heading'][readingIndex]}.`,
      `Color Contrast animation active. Comparing good and poor contrast examples.`,
      `Keyboard Navigation animation active. Currently focused: ${['Link 1', 'Button 1', 'Input Field', 'Link 2'][tabIndex]}.`
    ];
    setAnimationAnnouncement(announcements[currentAnimation]);
  }, [currentAnimation, focusedIndex, readingIndex, tabIndex]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const simulateAccessibilityScan = async () => {
    setIsScanning(true);
    setScanResults([]);
    setCurrentStep(0);

    const steps = [
      { step: 0, log: '🚀 Starting accessibility scan...', delay: 500 },
      { step: 1, log: '🔍 Analyzing page structure...', delay: 800 },
      { step: 2, log: '🎯 Checking image alt texts...', delay: 600 },
      { step: 3, log: '⌨️ Testing keyboard navigation...', delay: 700 },
      { step: 4, log: '🎨 Analyzing color contrast...', delay: 600 },
      { step: 5, log: '📱 Checking responsive design...', delay: 500 },
      { step: 6, log: '✅ Scan completed!', delay: 400 },
    ];

    const mockResults = [
      { element: 'img.logo', issue: 'Missing alt text', severity: 'high' as const },
      { element: 'button.submit', issue: 'Low color contrast', severity: 'medium' as const },
      { element: 'input.email', issue: 'Missing label', severity: 'high' as const },
      { element: 'a.nav-link', issue: 'Poor focus indicator', severity: 'low' as const },
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, step.delay));
      setCurrentStep(step.step);
    }

    setScanResults(mockResults);
    setIsScanning(false);
  };

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        icon={Eye}
        category="Selenium · Accessibility Testing"
        title="Accessibility Fundamentals"
        description="Master web accessibility testing with Selenium and ensure your applications are usable by everyone"
        colorTheme="blue"
        badges={[
          { label: 'Essential', variant: 'info' },
          { label: 'WCAG Compliant', variant: 'secondary' },
          { label: 'Universal Design', variant: 'default' },
        ]}
      />

      {/* WCAG Principles Diagram */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            WCAG Principles Architecture
          </CardTitle>
          <CardDescription>Four core principles of web accessibility</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main WCAG Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700">
              <div className="space-y-0">
                {/* WCAG Center */}
                <div className="text-center">
                  <div className="inline-block bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                    <div className="text-lg font-bold text-blue-900 dark:text-blue-100">WCAG 2.1</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Web Content Accessibility Guidelines</div>
                  </div>
                </div>
                
                {/* Arrows to Principles */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {/* Perceivable */}
                  <div className="text-center">
                    <div className="bg-green-100 dark:bg-green-900/40 px-4 py-3 rounded-lg border-2 border-green-300 dark:border-green-700">
                      <Eye className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-green-900 dark:text-green-100">Perceivable</div>
                      <div className="text-xs text-green-700 dark:text-green-300">See & Hear</div>
                    </div>
                  </div>
                  
                  {/* Operable */}
                  <div className="text-center">
                    <div className="bg-purple-100 dark:bg-purple-900/40 px-4 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                      <Hand className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-purple-900 dark:text-purple-100">Operable</div>
                      <div className="text-xs text-purple-700 dark:text-purple-300">Interact</div>
                    </div>
                  </div>
                  
                  {/* Understandable */}
                  <div className="text-center">
                    <div className="bg-orange-100 dark:bg-orange-900/40 px-4 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                      <Brain className="w-6 h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-orange-900 dark:text-orange-100">Understandable</div>
                      <div className="text-xs text-orange-700 dark:text-orange-300">Comprehend</div>
                    </div>
                  </div>
                  
                  {/* Robust */}
                  <div className="text-center">
                    <div className="bg-red-100 dark:bg-red-900/40 px-4 py-3 rounded-lg border-2 border-red-300 dark:border-red-700">
                      <Shield className="w-6 h-6 text-red-600 dark:text-red-400 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-red-900 dark:text-red-100">Robust</div>
                      <div className="text-xs text-red-700 dark:text-red-300">Compatible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Principle Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Perceivable</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Text alternatives for non-text content</li>
                  <li>• Captions and alternatives for multimedia</li>
                  <li>• Create content that can be presented in different ways</li>
                  <li>• Make it easier to see and hear content</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Hand className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Operable</h5>
                </div>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Make all functionality available from keyboard</li>
                  <li>• Provide users enough time to read and use content</li>
                  <li>• Do not use content that causes seizures</li>
                  <li>• Provide ways to help users navigate</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">Understandable</h5>
                </div>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Make text content readable and understandable</li>
                  <li>• Make content appear and operate in predictable ways</li>
                  <li>• Help users avoid and correct mistakes</li>
                  <li>• Provide clear instructions and feedback</li>
                </ul>
              </div>
              
              <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h5 className="font-semibold text-red-900 dark:text-red-100">Robust</h5>
                </div>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• Maximize compatibility with current and future tools</li>
                  <li>• Use valid HTML and semantic markup</li>
                  <li>• Ensure content works with assistive technologies</li>
                  <li>• Follow web standards and best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Accessibility Testing */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Why Accessibility Testing Matters
          </CardTitle>
          <CardDescription>Building inclusive web experiences for everyone</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Inclusive Design</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    15% of the world's population lives with disabilities - accessibility is not optional
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">Legal Compliance</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Many countries have laws requiring digital accessibility (ADA, Section 508, AODA)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">SEO Benefits</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Accessible websites rank better in search engines and reach wider audiences
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Better UX</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Accessibility improvements benefit all users, not just those with disabilities
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
            <Code className="w-5 h-5 text-blue-600" />
            Accessibility Testing Patterns
          </CardTitle>
          <CardDescription>
            Selenium techniques for accessibility testing
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
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
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
                {selectedLanguage === 'python' && `# Basic accessibility testing with Selenium
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://example.com")

# Check for alt text on images
images = driver.find_elements(By.TAG_NAME, "img")
for img in images:
    alt_text = img.get_attribute("alt")
    if not alt_text:
        print(f"Missing alt text: {img.get_attribute('src')}")

# Check for form labels
inputs = driver.find_elements(By.TAG_NAME, "input")
for input_elem in inputs:
    label = driver.find_element(By.CSS_SELECTOR, f"label[for='{input_elem.get_attribute('id')}']")
    if not label:
        print(f"Missing label for input: {input_elem.get_attribute('name')}")`}
                {selectedLanguage === 'java' && `// Basic accessibility testing with Selenium
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

WebDriver driver = new ChromeDriver();
driver.get("https://example.com");

// Check for alt text on images
List<WebElement> images = driver.findElements(By.tagName("img"));
for (WebElement img : images) {
    String altText = img.getAttribute("alt");
    if (altText == null || altText.isEmpty()) {
        System.out.println("Missing alt text: " + img.getAttribute("src"));
    }
}

// Check for form labels
List<WebElement> inputs = driver.findElements(By.tagName("input"));
for (WebElement input : inputs) {
    String inputId = input.getAttribute("id");
    WebElement label = driver.findElement(By.cssSelector("label[for='" + inputId + "']"));
    if (label == null) {
        System.out.println("Missing label for input: " + input.getAttribute("name"));
    }
}`}
                {selectedLanguage === 'javascript' && `// Basic accessibility testing with Selenium
const { Builder, By } = require('selenium-webdriver');

async function testAccessibility() {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://example.com');

    // Check for alt text on images
    const images = await driver.findElements(By.tagName('img'));
    for (const img of images) {
        const altText = await img.getAttribute('alt');
        if (!altText) {
            console.log(\`Missing alt text: \${await img.getAttribute('src')}\`);
        }
    }

    // Check for form labels
    const inputs = await driver.findElements(By.tagName('input'));
    for (const input of inputs) {
        const inputId = await input.getAttribute('id');
        const label = await driver.findElement(By.css(\`label[for='\${inputId}']\`));
        if (!label) {
            console.log(\`Missing label for input: \${await input.getAttribute('name')}\`);
        }
    }

    await driver.quit();
}`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Animation Demo */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Interactive Accessibility Animation Demo
          </CardTitle>
          <CardDescription>Visual demonstration of accessibility principles in action</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Animation Controls */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => {
                  // Reset all animation indices to beginning
                  setFocusedIndex(0);
                  setReadingIndex(0);
                  setTabIndex(0);
                  
                  // Switch to next animation
                  setCurrentAnimation((prev) => (prev + 1) % 4);
                  
                  // Trigger announcement immediately
                  const nextAnimation = (currentAnimation + 1) % 4;
                  const announcementText = `Switched to ${['Focus Management', 'Screen Reader Flow', 'Color Contrast', 'Keyboard Navigation'][nextAnimation]} animation`;
                  setAnimationAnnouncement(announcementText);
                }}
                className="flex items-center gap-2"
                aria-label="Switch to next animation example"
                aria-describedby="animation-status"
              >
                <RefreshCw className="w-4 h-4" />
                Next Animation
              </Button>
              <Badge 
                variant="outline" 
                aria-live="polite"
                id="animation-status"
                role="status"
              >
                Current animation: {['Focus Management', 'Screen Reader Flow', 'Color Contrast', 'Keyboard Navigation'][currentAnimation]}
              </Badge>
            </div>

            {/* Screen Reader Live Region for Announcements */}
            <div 
              aria-live="polite" 
              aria-atomic="true" 
              className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0"
              role="status"
              aria-label="Animation status announcement"
            >
              {animationAnnouncement}
            </div>

            {/* Focus Management Animation */}
            {currentAnimation === 0 && (
              <div 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-700"
                role="region"
                aria-labelledby="focus-management-title"
              >
                <h4 id="focus-management-title" className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                  Focus Management Animation
                </h4>
                <div className="space-y-4">
                  <div className="flex flex-col gap-3" role="group" aria-label="Interactive focus demonstration buttons">
                    <button 
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-500 ${
                        focusedIndex === 0 
                          ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/50 shadow-lg scale-105' 
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                      }`}
                      onMouseEnter={() => setFocusedIndex(0)}
                      onFocus={() => setFocusedIndex(0)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setFocusedIndex(0);
                          setAnimationAnnouncement(`Button 1 focused. Primary action button selected.`);
                        }
                      }}
                      aria-describedby="focus-description"
                      aria-pressed={focusedIndex === 0}
                      role="button"
                      tabIndex={0}
                    >
                      Button 1 - Primary Action
                    </button>
                    <button 
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-500 ${
                        focusedIndex === 1 
                          ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/50 shadow-lg scale-105' 
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                      }`}
                      onMouseEnter={() => setFocusedIndex(1)}
                      onFocus={() => setFocusedIndex(1)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setFocusedIndex(1);
                          setAnimationAnnouncement(`Button 2 focused. Secondary action button selected.`);
                        }
                      }}
                      aria-describedby="focus-description"
                      aria-pressed={focusedIndex === 1}
                      role="button"
                      tabIndex={0}
                    >
                      Button 2 - Secondary Action
                    </button>
                    <button 
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-500 ${
                        focusedIndex === 2 
                          ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/50 shadow-lg scale-105' 
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                      }`}
                      onMouseEnter={() => setFocusedIndex(2)}
                      onFocus={() => setFocusedIndex(2)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setFocusedIndex(2);
                          setAnimationAnnouncement(`Button 3 focused. Tertiary action button selected.`);
                        }
                      }}
                      aria-describedby="focus-description"
                      aria-pressed={focusedIndex === 2}
                      role="button"
                      tabIndex={0}
                    >
                      Button 3 - Tertiary Action
                    </button>
                  </div>
                  <div id="focus-description" className="text-sm text-blue-700 dark:text-blue-300 mt-4">
                    <strong>Demonstration:</strong> Hover over buttons or use Tab key to see focus indicators. 
                    Proper focus management ensures keyboard users can navigate effectively.
                    {focusedIndex >= 0 && ` Currently focused: Button ${focusedIndex + 1}`}
                  </div>
                </div>
              </div>
            )}

            {/* Screen Reader Flow Animation */}
            {currentAnimation === 1 && (
              <div 
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-lg border-2 border-green-200 dark:border-green-700"
                role="region"
                aria-labelledby="screen-reader-title"
              >
                <h4 id="screen-reader-title" className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  Screen Reader Flow Animation
                </h4>
                <div className="space-y-4">
                  <div className="relative" role="article" aria-label="Content structure demonstration">
                    <div className="space-y-2">
                      <div 
                        className={`p-3 rounded-lg border-2 transition-all duration-700 ${
                          readingIndex === 0 
                            ? 'border-green-500 bg-green-100 dark:bg-green-900/50 shadow-lg' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        role="heading"
                        aria-level={1}
                        aria-current={readingIndex === 0 ? "page" : undefined}
                      >
                        <h1 className="text-xl font-bold">Main Heading</h1>
                        <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                          {readingIndex === 0 && (
                            <span role="img" aria-label="Screen reader speaking">🔊</span>
                          )}
                          {readingIndex === 0 && 'Screen reader announces: "Main Heading, level 1"'}
                        </div>
                      </div>
                      <div 
                        className={`p-3 rounded-lg border-2 transition-all duration-700 ${
                          readingIndex === 1 
                            ? 'border-green-500 bg-green-100 dark:bg-green-900/50 shadow-lg' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        role="paragraph"
                        aria-current={readingIndex === 1 ? "page" : undefined}
                      >
                        <p>This is the introduction paragraph that screen readers read aloud.</p>
                        <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                          {readingIndex === 1 && (
                            <span role="img" aria-label="Screen reader speaking">🔊</span>
                          )}
                          {readingIndex === 1 && 'Screen reader announces: "This is the introduction paragraph that screen readers read aloud."'}
                        </div>
                      </div>
                      <div 
                        className={`p-3 rounded-lg border-2 transition-all duration-700 ${
                          readingIndex === 2 
                            ? 'border-green-500 bg-green-100 dark:bg-green-900/50 shadow-lg' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        role="heading"
                        aria-level={2}
                        aria-current={readingIndex === 2 ? "page" : undefined}
                      >
                        <h2 className="text-lg font-bold">Subsection Heading</h2>
                        <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                          {readingIndex === 2 && (
                            <span role="img" aria-label="Screen reader speaking">🔊</span>
                          )}
                          {readingIndex === 2 && 'Screen reader announces: "Subsection Heading, level 2"'}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    <strong>Demonstration:</strong> Watch how screen readers navigate content sequentially. 
                    Semantic HTML provides proper context and structure.
                    Currently reading: {['Main Heading', 'Introduction Paragraph', 'Subsection Heading'][readingIndex]}
                  </div>
                </div>
              </div>
            )}

            {/* Color Contrast Animation */}
            {currentAnimation === 2 && (
              <div 
                className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-700"
                role="region"
                aria-labelledby="color-contrast-title"
              >
                <h4 id="color-contrast-title" className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">
                  Color Contrast Animation
                </h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4" role="group" aria-label="Color contrast comparison examples">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Good Contrast (7:1)</div>
                      <div 
                        className="bg-black text-white p-4 rounded-lg transition-all duration-500 hover:scale-105"
                        role="img"
                        aria-label="Example of good color contrast: white text on black background with 7 to 1 contrast ratio"
                      >
                        This text has excellent contrast ratio
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400" role="status">
                        ✅ WCAG AAA compliant
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Poor Contrast (2:1)</div>
                      <div 
                        className="bg-gray-300 text-gray-400 p-4 rounded-lg transition-all duration-500 hover:scale-105"
                        role="img"
                        aria-label="Example of poor color contrast: light gray text on light gray background with 2 to 1 contrast ratio"
                      >
                        This text is hard to read
                      </div>
                      <div className="text-xs text-red-600 dark:text-red-400" role="alert">
                        ❌ Fails WCAG standards
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-orange-700 dark:text-orange-300">
                    <strong>Demonstration:</strong> Compare readability between different contrast ratios. 
                    Proper contrast ensures content is readable by users with visual impairments.
                  </div>
                </div>
              </div>
            )}

            {/* Keyboard Navigation Animation */}
            {currentAnimation === 3 && (
              <div 
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-700"
                role="region"
                aria-labelledby="keyboard-navigation-title"
              >
                <h4 id="keyboard-navigation-title" className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
                  Keyboard Navigation Animation
                </h4>
                <div className="space-y-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <kbd 
                        className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs"
                        aria-label="Tab key"
                      >
                        Tab
                      </kbd>
                      <span className="text-sm">Navigate to next element</span>
                    </div>
                    <div 
                      className="space-y-2 pl-8" 
                      role="group" 
                      aria-label="Keyboard navigation demonstration elements"
                      aria-live="polite"
                    >
                      {['Link 1', 'Button 1', 'Input Field', 'Link 2'].map((item, index) => (
                        <div 
                          key={index}
                          className={`p-2 rounded border-2 transition-all duration-300 ${
                            tabIndex === index 
                              ? 'border-purple-500 bg-purple-100 dark:bg-purple-900/50 shadow-lg' 
                              : 'border-gray-300 dark:border-gray-600'
                          }`}
                          role={item.includes('Link') ? 'link' : item.includes('Button') ? 'button' : 'textbox'}
                          tabIndex={index === tabIndex ? 0 : -1}
                          aria-current={tabIndex === index ? "step" : undefined}
                        >
                          {item}
                          {tabIndex === index && (
                            <span className="ml-2 text-xs text-purple-600 dark:text-purple-400" role="status">
                              ⌨️ Currently focused
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300">
                    <strong>Demonstration:</strong> Keyboard users rely on logical tab order and visible focus indicators. 
                    All interactive elements must be keyboard accessible.
                    Currently focused: {['Link 1', 'Button 1', 'Input Field', 'Link 2'][tabIndex]}
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Alert>
        <Eye className="w-4 h-4" />
        <AlertTitle>Important Accessibility Testing Notes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Test with real assistive technologies (screen readers, voice control)</li>
            <li>Automated tools catch only ~30% of accessibility issues</li>
            <li>Include users with disabilities in your testing process</li>
            <li>Accessibility is an ongoing process, not a one-time fix</li>
            <li>Follow WCAG guidelines and consider legal requirements in your region</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default AccessibilityFundamentalsComponent;

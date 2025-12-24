'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Keyboard,
  Code,
  AlertCircle,
  Search,
  Monitor,
  Users,
  Hand,
  Eye,
  RefreshCw,
  Target,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  RectangleHorizontal,
  CornerDownLeft as Enter,
  Space,
  X as Escape,
  Zap as ZapIcon,
  AlertTriangle,
  Navigation as NavigationIcon,
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function KeyboardNavigationTestingComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isScanning, setIsScanning] = React.useState(false);
  const [scanResults, setScanResults] = React.useState<Array<{ 
    element: string; 
    issue: string; 
    severity: 'critical' | 'high' | 'medium' | 'low';
    solution: string;
  }>>([]);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [issueCount, setIssueCount] = React.useState(0);
  const [currentKeyboardAnimation, setCurrentKeyboardAnimation] = React.useState(0);
  const [tabOrderIndex, setTabOrderIndex] = React.useState(0);
  const [focusIndex, setFocusIndex] = React.useState(0);
  const [shortcutIndex, setShortcutIndex] = React.useState(0);
  const [modalFocusIndex, setModalFocusIndex] = React.useState(0);
  const [keyboardAnimationAnnouncement, setKeyboardAnimationAnnouncement] = React.useState('');

  // Auto-advance animations
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTabOrderIndex((prev) => (prev + 1) % 5);
      setFocusIndex((prev) => (prev + 1) % 4);
      setShortcutIndex((prev) => (prev + 1) % 5);
      setModalFocusIndex((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Update screen reader announcements
  React.useEffect(() => {
    const announcements = [
      `Keyboard Navigation Tab Order animation active. Currently focused: ${['Navigation Link', 'Primary Button', 'Text Input Field', 'Secondary Button', 'Footer Link'][tabOrderIndex]}.`,
      `Keyboard Navigation Focus Indicators animation active. Currently viewing: ${['Outline', 'Background', 'Underline', 'Shadow'][focusIndex]} focus style.`,
      `Keyboard Navigation Shortcuts animation active. Currently viewing: ${['Tab + Shift', 'Enter', 'Space', 'Escape', 'Arrow Keys'][shortcutIndex]}.`,
      `Keyboard Navigation Focus Traps animation active. Currently focused: ${['Modal Title', 'Modal Content', 'Cancel Button', 'Save Button'][modalFocusIndex]} in modal.`
    ];
    setKeyboardAnimationAnnouncement(announcements[currentKeyboardAnimation]);
  }, [currentKeyboardAnimation, tabOrderIndex, focusIndex, shortcutIndex, modalFocusIndex]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const simulateKeyboardNavigationTest = async () => {
    setIsScanning(true);
    setScanResults([]);
    setCurrentStep(0);
    setIssueCount(0);

    const steps = [
      { step: 0, log: '🚀 Starting keyboard navigation test...', delay: 500 },
      { step: 1, log: '⌨️ Testing Tab navigation order...', delay: 800 },
      { step: 2, log: '🎯 Checking focus indicators...', delay: 600 },
      { step: 3, log: '🔍 Testing interactive elements...', delay: 700 },
      { step: 4, log: '📱 Verifying responsive keyboard behavior...', delay: 600 },
      { step: 5, log: '✅ Test completed!', delay: 400 },
    ];

    const mockIssues = [
      {
        element: 'button.submit',
        issue: 'No visible focus indicator',
        severity: 'critical' as const,
        solution: 'Add :focus styles with outline or background color'
      },
      {
        element: 'div.modal',
        issue: 'Keyboard trap - cannot exit modal',
        severity: 'high' as const,
        solution: 'Implement proper focus management and escape key handling'
      },
      {
        element: 'nav.main-menu',
        issue: 'Skip navigation link missing',
        severity: 'medium' as const,
        solution: 'Add skip link for keyboard users to bypass navigation'
      },
      {
        element: 'input.search',
        issue: 'Poor tab order',
        severity: 'low' as const,
        solution: 'Reorder elements to follow logical reading order'
      },
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, step.delay));
      setCurrentStep(step.step);
    }

    setScanResults(mockIssues);
    setIssueCount(mockIssues.length);
    setIsScanning(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 dark:bg-red-950/30 border-red-200 dark:border-red-700 text-red-800 dark:text-red-300';
      case 'high': return 'bg-orange-100 dark:bg-orange-950/30 border-orange-200 dark:border-orange-700 text-orange-800 dark:text-orange-300';
      case 'medium': return 'bg-yellow-100 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-300';
      case 'low': return 'bg-blue-100 dark:bg-blue-950/30 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-300';
      default: return 'bg-gray-100 dark:bg-gray-950/30 border-gray-200 dark:border-gray-700';
    }
  };

  const getSeverityBadgeVariant = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'high': return 'secondary';
      case 'medium': return 'outline';
      case 'low': return 'default';
      default: return 'outline';
    }
  };

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <PageHeader
        icon={Keyboard}
        category="Selenium · Accessibility Testing"
        title="Keyboard Navigation Testing"
        description="Test keyboard accessibility and ensure all users can navigate your web applications"
        colorTheme="blue"
        badges={[
          { label: 'Essential', variant: 'info' },
          { label: 'WCAG Required', variant: 'secondary' },
          { label: 'User Experience', variant: 'default' },
        ]}
      />

      {/* Keyboard Navigation Architecture */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <NavigationIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Keyboard Navigation Architecture
          </CardTitle>
          <CardDescription>How keyboard navigation works in web applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Navigation Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700">
              <div className="space-y-0">
                {/* Browser Layer */}
                <div className="text-center">
                  <div className="inline-block bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700">
                    <div className="text-lg font-bold text-green-900 dark:text-green-100">Browser Focus Management</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Native Tab Navigation</div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                
                {/* DOM Elements */}
                <div className="text-center">
                  <div className="inline-block bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                    <div className="text-lg font-bold text-blue-900 dark:text-blue-100">Interactive Elements</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Links, Buttons, Forms</div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                
                {/* Focus Styles */}
                <div className="text-center">
                  <div className="inline-block bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                    <div className="text-lg font-bold text-purple-900 dark:text-purple-100">Visual Focus Indicators</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">Outline, Background, Border</div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                
                {/* User Experience */}
                <div className="text-center">
                  <div className="inline-block bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                    <div className="text-lg font-bold text-orange-900 dark:text-orange-100">Accessible Experience</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">Complete Keyboard Control</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key Navigation Concepts */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <RectangleHorizontal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Tab Order</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Logical sequence through interactive elements</li>
                  <li>• Follows DOM order by default</li>
                  <li>• Can be customized with tabindex</li>
                  <li>• Must be predictable and intuitive</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Focus Indicators</h5>
                </div>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Visible outline or background change</li>
                  <li>• High contrast for visibility</li>
                  <li>• Consistent across all elements</li>
                  <li>• Must meet WCAG contrast requirements</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Enter className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Key Interactions</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Enter: Activate buttons, links</li>
                  <li>• Space: Toggle buttons, checkboxes</li>
                  <li>• Arrow keys: Navigate menus, options</li>
                  <li>• Escape: Close modals, cancel actions</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">Focus Management</h5>
                </div>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Programmatic focus control</li>
                  <li>• Skip links for navigation</li>
                  <li>• Focus trapping in modals</li>
                  <li>• Return focus after actions</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Keyboard Navigation Matters */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Why Keyboard Navigation Matters
          </CardTitle>
          <CardDescription>Essential for inclusive web experiences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Hand className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Motor Disabilities</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Users with motor impairments rely on keyboard navigation for web access
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">Screen Readers</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Screen reader users navigate primarily with keyboard commands
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ZapIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Power Users</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Advanced users prefer keyboard for speed and efficiency
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Mobile Devices</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    External keyboards improve mobile accessibility and productivity
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
            Keyboard Navigation Testing Examples
          </CardTitle>
          <CardDescription>
            Selenium scripts for testing keyboard accessibility
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
                {selectedLanguage === 'python' && `# Keyboard navigation testing with Selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.get("https://example.com")

# Test tab navigation
focusable_elements = driver.find_elements(By.CSS_SELECTOR, 
    "a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])")

print(f"Found {len(focusable_elements)} focusable elements")

# Navigate through elements with Tab key
for i, element in enumerate(focusable_elements):
    # Send Tab to focus next element
    driver.find_element(By.TAG_NAME, 'body').send_keys(Keys.TAB)
    time.sleep(0.5)
    
    # Check if focused element has visible focus styles
    active_element = driver.switch_to.active_element
    
    # Get computed styles for focus
    focus_styles = driver.execute_script("""
        var element = arguments[0];
        var styles = window.getComputedStyle(element, ':focus');
        return {
            outline: styles.outline,
            outlineColor: styles.outlineColor,
            outlineWidth: styles.outlineWidth,
            boxShadow: styles.boxShadow,
            backgroundColor: styles.backgroundColor,
            borderColor: styles.borderColor
        };
    """, active_element)
    
    # Check if focus is visible
    has_focus_style = (
        focus_styles['outline'] != 'none' or
        focus_styles['boxShadow'] != 'none' or
        focus_styles['outlineWidth'] != '0px'
    )
    
    if not has_focus_style:
        print(f"WARNING: Element {i} has no visible focus indicator")
        print(f"Element: {active_element.tag_name}")`}
                {selectedLanguage === 'java' && `// Keyboard navigation testing with Selenium
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Keys;
import java.util.List;

WebDriver driver = new ChromeDriver();
driver.get("https://example.com");

// Test tab navigation
List<WebElement> focusableElements = driver.findElements(By.cssSelector(
    "a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])"
));

System.out.println("Found " + focusableElements.size() + " focusable elements");

// Navigate through elements with Tab key
for (int i = 0; i < focusableElements.size(); i++) {
    // Send Tab to focus next element
    driver.findElement(By.tagName("body")).sendKeys(Keys.TAB);
    Thread.sleep(500);
    
    // Check if focused element has visible focus styles
    WebElement activeElement = driver.switchTo().activeElement();
    
    // Get computed styles for focus
    JavascriptExecutor js = (JavascriptExecutor) driver;
    Object focusStyles = js.executeScript(
        "var element = arguments[0]; " +
        "var styles = window.getComputedStyle(element, ':focus'); " +
        "return { " +
        "    outline: styles.outline, " +
        "    outlineColor: styles.outlineColor, " +
        "    outlineWidth: styles.outlineWidth, " +
        "    boxShadow: styles.boxShadow, " +
        "    backgroundColor: styles.backgroundColor, " +
        "    borderColor: styles.borderColor " +
        "};", activeElement
    );
    
    // Check if focus is visible (implementation depends on focusStyles type)
    System.out.println("Checking focus visibility for element: " + activeElement.getTagName());
}`}
                {selectedLanguage === 'javascript' && `// Keyboard navigation testing with Selenium
const { Builder, By, Key } = require('selenium-webdriver');

async function testKeyboardNavigation() {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://example.com');

    // Test tab navigation
    const focusableElements = await driver.findElements(By.css(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ));

    console.log(\`Found \${focusableElements.length} focusable elements\`);

    // Navigate through elements with Tab key
    for (let i = 0; i < focusableElements.length; i++) {
        // Send Tab to focus next element
        await driver.findElement(By.tagName('body')).sendKeys(Key.TAB);
        await driver.sleep(500);
        
        // Check if focused element has visible focus styles
        const activeElement = await driver.switchTo().activeElement();
        
        // Get computed styles for focus
        const focusStyles = await driver.executeScript(
            'function getFocusStyles(element) {' +
            '    var styles = window.getComputedStyle(element, ":focus");' +
            '    return {' +
            '        outline: styles.outline,' +
            '        outlineColor: styles.outlineColor,' +
            '        outlineWidth: styles.outlineWidth,' +
            '        boxShadow: styles.boxShadow,' +
            '        backgroundColor: styles.backgroundColor,' +
            '        borderColor: styles.borderColor' +
            '    };' +
            '}' +
            'return getFocusStyles(arguments[0]);',
            activeElement
        );
        
        // Check if focus is visible
        const hasFocusStyle = (
            focusStyles.outline !== 'none' ||
            focusStyles.boxShadow !== 'none' ||
            focusStyles.outlineWidth !== '0px'
        );
        
        if (!hasFocusStyle) {
            console.log(\`WARNING: Element \${i} has no visible focus indicator\`);
            console.log(\`Element: \${await activeElement.getTagName()}\`);
        }
    }

    await driver.quit();
}`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Keyboard Navigation Animation Demo */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Interactive Keyboard Navigation Demo
          </CardTitle>
          <CardDescription>Visual demonstration of keyboard navigation patterns and best practices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Animation Controls */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => {
                  // Reset all animation indices to beginning
                  setTabOrderIndex(0);
                  setFocusIndex(0);
                  setShortcutIndex(0);
                  setModalFocusIndex(0);
                  
                  // Switch to next animation
                  setCurrentKeyboardAnimation((prev) => (prev + 1) % 4);
                  
                  // Trigger announcement immediately
                  const nextAnimation = (currentKeyboardAnimation + 1) % 4;
                  const announcementText = `Switched to ${['Tab Order', 'Focus Indicators', 'Keyboard Shortcuts', 'Focus Traps'][nextAnimation]} animation`;
                  setKeyboardAnimationAnnouncement(announcementText);
                }}
                className="flex items-center gap-2"
                aria-label="Switch to next keyboard navigation animation example"
                aria-describedby="keyboard-animation-status"
              >
                <RefreshCw className="w-4 h-4" />
                Next Animation
              </Button>
              <Badge 
                variant="outline" 
                aria-live="polite"
                id="keyboard-animation-status"
                role="status"
              >
                Current animation: {['Tab Order', 'Focus Indicators', 'Keyboard Shortcuts', 'Focus Traps'][currentKeyboardAnimation]}
              </Badge>
            </div>

            {/* Screen Reader Live Region for Announcements */}
            <div 
              aria-live="polite" 
              aria-atomic="true" 
              className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0"
              role="status"
              aria-label="Keyboard navigation animation status announcement"
            >
              {keyboardAnimationAnnouncement}
            </div>

            {/* Tab Order Animation */}
            {currentKeyboardAnimation === 0 && (
              <div 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-700"
                role="region"
                aria-labelledby="tab-order-title"
              >
                <h4 id="tab-order-title" className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                  Logical Tab Order Demonstration
                </h4>
                <div className="space-y-4">
                  <div className="space-y-3" role="group" aria-label="Interactive elements in logical tab order">
                    {[
                      { type: 'link', text: 'Navigation Link', order: 1 },
                      { type: 'button', text: 'Primary Button', order: 2 },
                      { type: 'input', text: 'Text Input Field', order: 3 },
                      { type: 'button', text: 'Secondary Button', order: 4 },
                      { type: 'link', text: 'Footer Link', order: 5 }
                    ].map((element, index) => (
                      <div 
                        key={index}
                        className={`p-3 rounded-lg border-2 transition-all duration-500 flex items-center gap-3 ${
                          tabOrderIndex === index 
                            ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/50 shadow-lg scale-105' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setTabOrderIndex(index)}
                        onFocus={() => setTabOrderIndex(index)}
                        role={element.type === 'link' ? 'link' : element.type === 'input' ? 'textbox' : 'button'}
                        tabIndex={index === tabOrderIndex ? 0 : -1}
                        aria-current={tabOrderIndex === index ? "step" : undefined}
                      >
                        <div className="flex items-center gap-2">
                          <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs">
                            Tab {element.order}
                          </kbd>
                          <span className="font-medium">{element.text}</span>
                        </div>
                        {tabOrderIndex === index && (
                          <div className="ml-auto text-xs text-blue-600 dark:text-blue-400" role="status">
                            ⌨️ Currently focused (Tab {element.order})
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Demonstration:</strong> Logical tab order follows the visual layout and reading order. 
                    Users expect keyboard navigation to follow predictable patterns.
                    Currently focused: {['Navigation Link', 'Primary Button', 'Text Input Field', 'Secondary Button', 'Footer Link'][tabOrderIndex]}
                  </div>
                </div>
              </div>
            )}

            {/* Focus Indicators Animation */}
            {currentKeyboardAnimation === 1 && (
              <div 
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-lg border-2 border-green-200 dark:border-green-700"
                role="region"
                aria-labelledby="focus-indicators-title"
              >
                <h4 id="focus-indicators-title" className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  Focus Indicator Styles
                </h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4" role="group" aria-label="Different focus indicator styles">
                    {[
                      { style: 'Outline', description: 'Standard 2px outline', color: 'blue' },
                      { style: 'Background', description: 'Background color change', color: 'green' },
                      { style: 'Underline', description: 'Text underline effect', color: 'purple' },
                      { style: 'Shadow', description: 'Drop shadow effect', color: 'orange' }
                    ].map((focus, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          focusIndex === index 
                            ? `border-${focus.color}-500 bg-${focus.color}-100 dark:bg-${focus.color}-900/50 shadow-lg scale-105` 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setFocusIndex(index)}
                        onFocus={() => setFocusIndex(index)}
                        role="button"
                        tabIndex={index === focusIndex ? 0 : -1}
                        aria-current={focusIndex === index ? "step" : undefined}
                        aria-label={`${focus.style} focus indicator: ${focus.description}`}
                      >
                        <div className="font-semibold">{focus.style} Focus</div>
                        <div className="text-sm opacity-80">{focus.description}</div>
                        {focusIndex === index && (
                          <div className="text-xs text-green-600 dark:text-green-400 mt-2" role="status">
                            👁️ Currently viewing: {focus.style} focus style
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    <strong>Demonstration:</strong> Focus indicators must be clearly visible and meet contrast requirements. 
                    Different styles work for different design contexts.
                    Currently viewing: {['Outline', 'Background', 'Underline', 'Shadow'][focusIndex]} focus style
                  </div>
                </div>
              </div>
            )}

            {/* Keyboard Shortcuts Animation */}
            {currentKeyboardAnimation === 2 && (
              <div 
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-700"
                role="region"
                aria-labelledby="keyboard-shortcuts-title"
              >
                <h4 id="keyboard-shortcuts-title" className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
                  Common Keyboard Shortcuts
                </h4>
                <div className="space-y-4">
                  <div className="space-y-3" role="group" aria-label="Common keyboard shortcuts and their functions">
                    {[
                      { keys: 'Tab + Shift', action: 'Navigate backwards', icon: '⬅️' },
                      { keys: 'Enter', action: 'Activate buttons and links', icon: '✅' },
                      { keys: 'Space', action: 'Toggle checkboxes and buttons', icon: '🔄' },
                      { keys: 'Escape', action: 'Close modals and cancel actions', icon: '❌' },
                      { keys: 'Arrow Keys', action: 'Navigate within components', icon: '⬆️⬇️' }
                    ].map((shortcut, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 flex items-center gap-4 ${
                          shortcutIndex === index 
                            ? 'border-purple-500 bg-purple-100 dark:bg-purple-900/50 shadow-lg scale-105' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setShortcutIndex(index)}
                        onFocus={() => setShortcutIndex(index)}
                        role="article"
                        aria-current={shortcutIndex === index ? "step" : undefined}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-2xl" aria-hidden="true">{shortcut.icon}</span>
                          <div className="flex gap-1">
                            {shortcut.keys.split(' + ').map((key, i) => (
                              <kbd 
                                key={i}
                                className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs"
                                aria-label={`Key: ${key}`}
                              >
                                {key}
                              </kbd>
                            ))}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{shortcut.action}</div>
                        </div>
                        {shortcutIndex === index && (
                          <div className="text-xs text-purple-600 dark:text-purple-400" role="status">
                            ⌨️ Currently viewing: {shortcut.keys}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300">
                    <strong>Demonstration:</strong> Standard keyboard shortcuts provide consistent user experience. 
                    Power users rely on these shortcuts for efficient navigation.
                    Currently viewing: {['Tab + Shift', 'Enter', 'Space', 'Escape', 'Arrow Keys'][shortcutIndex]}
                  </div>
                </div>
              </div>
            )}

            {/* Focus Traps Animation */}
            {currentKeyboardAnimation === 3 && (
              <div 
                className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-700"
                role="region"
                aria-labelledby="focus-traps-title"
              >
                <h4 id="focus-traps-title" className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">
                  Focus Management in Modals
                </h4>
                <div className="space-y-4">
                  <div className="space-y-4" role="group" aria-label="Modal focus trap demonstration">
                    <div className="p-4 rounded-lg border-2 border-orange-300 dark:border-orange-600 bg-orange-50 dark:bg-orange-950/30">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" aria-hidden="true"></div>
                        <span className="font-semibold">Modal Dialog Active</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { element: 'Modal Title', focused: modalFocusIndex === 0 },
                          { element: 'Modal Content', focused: modalFocusIndex === 1 },
                          { element: 'Cancel Button', focused: modalFocusIndex === 2 },
                          { element: 'Save Button', focused: modalFocusIndex === 3 }
                        ].map((item, index) => (
                          <div 
                            key={index}
                            className={`p-2 rounded border transition-all duration-300 ${
                              item.focused
                                ? 'border-orange-500 bg-orange-100 dark:bg-orange-900/50 shadow-md'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                            role={item.element.includes('Button') ? 'button' : item.element.includes('Title') ? 'heading' : 'paragraph'}
                            aria-current={item.focused ? "step" : undefined}
                          >
                            {item.element}
                            {item.focused && (
                              <span className="ml-2 text-xs text-orange-600 dark:text-orange-400" role="status">
                                🎯 Focused (trapped in modal)
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">
                      <strong>Demonstration:</strong> Focus traps keep keyboard navigation within modal dialogs. 
                      Users cannot accidentally navigate to background content.
                      Currently focused: {['Modal Title', 'Modal Content', 'Cancel Button', 'Save Button'][modalFocusIndex]}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Alert>
        <Keyboard className="w-4 h-4" />
        <AlertTitle>Important Keyboard Navigation Notes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Test all interactive elements with keyboard only</li>
            <li>Ensure focus indicators are visible and meet contrast requirements</li>
            <li>Verify logical tab order matches visual layout</li>
            <li>Test keyboard traps in modals and dynamic content</li>
            <li>Include keyboard testing in your accessibility test suite</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default KeyboardNavigationTestingComponent;

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Ear,
  Code,
  AlertCircle,
  Search,
  Users,
  Brain,
  Eye,
  RefreshCw,
  Target,
  Volume2,
  Headphones,
  Mic,
  MessageSquare,
  Play,
  Navigation,
  Settings,
  Zap,
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ScreenReaderTestingComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isScanning, setIsScanning] = React.useState(false);
  const [scanResults, setScanResults] = React.useState<Array<{ 
    element: string; 
    issue: string; 
    severity: 'critical' | 'high' | 'medium' | 'low';
    screenReaderImpact: string;
  }>>([]);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [issueCount, setIssueCount] = React.useState(0);
  const [currentScreenReaderAnimation, setCurrentScreenReaderAnimation] = React.useState(0);
  const [semanticIndex, setSemanticIndex] = React.useState(0);
  const [ariaIndex, setAriaIndex] = React.useState(0);
  const [readingOrderIndex, setReadingOrderIndex] = React.useState(0);
  const [formIndex, setFormIndex] = React.useState(0);
  const [screenReaderAnimationAnnouncement, setScreenReaderAnimationAnnouncement] = React.useState('');

  // Auto-advance animations
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSemanticIndex((prev) => (prev + 1) % 5);
      setAriaIndex((prev) => (prev + 1) % 4);
      setReadingOrderIndex((prev) => (prev + 1) % 5);
      setFormIndex((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Update screen reader announcements
  React.useEffect(() => {
    const announcements = [
      `Screen Reader Semantic Structure animation active. Currently reading: ${['Website Header', 'Main Navigation', 'Main Content Area', 'Sidebar Content', 'Website Footer'][semanticIndex]}.`,
      `Screen Reader ARIA Labels animation active. Currently focused: ${['Close Button', 'Menu Toggle', 'Search Input', 'Info Icon'][ariaIndex]}.`,
      `Screen Reader Reading Order animation active. Currently reading: Item ${readingOrderIndex + 1} of 5.`,
      `Screen Reader Form Accessibility animation active. Currently focused: ${['Full Name', 'Email Address', 'Subscribe to newsletter', 'Country'][formIndex]}.`
    ];
    setScreenReaderAnimationAnnouncement(announcements[currentScreenReaderAnimation]);
  }, [currentScreenReaderAnimation, semanticIndex, ariaIndex, readingOrderIndex, formIndex]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const simulateScreenReaderTest = async () => {
    setIsScanning(true);
    setScanResults([]);
    setCurrentStep(0);
    setIssueCount(0);

    const steps = [
      { step: 0, log: '🚀 Starting screen reader compatibility test...', delay: 500 },
      { step: 1, log: '🔍 Analyzing semantic HTML structure...', delay: 800 },
      { step: 2, log: '📝 Checking ARIA labels and descriptions...', delay: 600 },
      { step: 3, log: '🎯 Testing heading hierarchy...', delay: 700 },
      { step: 4, log: '📊 Verifying form accessibility...', delay: 600 },
      { step: 5, log: '✅ Test completed!', delay: 400 },
    ];

    const mockIssues = [
      {
        element: 'img.logo',
        issue: 'Missing alt text',
        severity: 'critical' as const,
        screenReaderImpact: 'Announces "image" with no description'
      },
      {
        element: 'button.menu-toggle',
        issue: 'No ARIA label',
        severity: 'high' as const,
        screenReaderImpact: 'Announced as "button" with no purpose'
      },
      {
        element: 'div.stats',
        issue: 'Non-semantic container for data',
        severity: 'medium' as const,
        screenReaderImpact: 'No context for numerical information'
      },
      {
        element: 'a.read-more',
        issue: 'Ambiguous link text',
        severity: 'low' as const,
        screenReaderImpact: 'Multiple "read more" links without context'
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
        icon={Ear}
        category="Selenium · Accessibility Testing"
        title="Screen Reader Testing"
        description="Ensure your web applications are accessible to users with visual impairments through proper screen reader support"
        colorTheme="green"
        badges={[
          { label: 'Essential', variant: 'info' },
          { label: 'WCAG Required', variant: 'secondary' },
          { label: 'Assistive Technology', variant: 'default' },
        ]}
      />

      {/* Screen Reader Architecture */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Headphones className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Screen Reader Architecture
          </CardTitle>
          <CardDescription>How screen readers interpret and announce web content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Architecture Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700">
              <div className="space-y-0">
                {/* Web Application */}
                <div className="text-center">
                  <div className="inline-block bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                    <div className="text-lg font-bold text-blue-900 dark:text-blue-100">Web Application</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">HTML, CSS, JavaScript</div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                
                {/* Accessibility API */}
                <div className="text-center">
                  <div className="inline-block bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                    <div className="text-lg font-bold text-purple-900 dark:text-purple-100">Accessibility API</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">Browser Accessibility Tree</div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                
                {/* Screen Reader */}
                <div className="text-center">
                  <div className="inline-block bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700">
                    <div className="text-lg font-bold text-green-900 dark:text-green-100">Screen Reader</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Voice Synthesis</div>
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
                    <div className="text-sm text-orange-700 dark:text-orange-300">Audio Navigation</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Screen Reader Components */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Volume2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Voice Output</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Text-to-speech conversion</li>
                  <li>• Natural language pronunciation</li>
                  <li>• Adjustable speech rate and volume</li>
                  <li>• Multiple voice options</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Content Reading</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Sequential content navigation</li>
                  <li>• Heading and landmark detection</li>
                  <li>• Link and button identification</li>
                  <li>• Table and form structure reading</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Navigation className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Navigation Commands</h5>
                </div>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Quick navigation keys (H for headings, L for links)</li>
                  <li>• Virtual cursor for screen reading</li>
                  <li>• Element jumping and skipping</li>
                  <li>• Context-aware navigation</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">Customization</h5>
                </div>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Verbosity settings</li>
                  <li>• Punctuation reading options</li>
                  <li>• Screen layout announcements</li>
                  <li>• Custom dictionary and pronunciation</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Screen Reader Testing Matters */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Why Screen Reader Testing Matters
          </CardTitle>
          <CardDescription>Essential for users with visual impairments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">Visual Impairments</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Screen readers are essential for users who are blind or have low vision
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Cognitive Disabilities</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Audio content helps users with reading difficulties and learning disabilities
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Legal Requirements</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    ADA and other accessibility laws mandate screen reader compatibility
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Universal Design</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Screen reader testing improves overall content structure and SEO
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
            <Code className="w-5 h-5 text-green-600" />
            Screen Reader Testing Examples
          </CardTitle>
          <CardDescription>
            Selenium scripts for testing screen reader compatibility
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
                    ? 'border-b-2 border-green-600 text-green-600 dark:text-green-400'
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
                {selectedLanguage === 'python' && `# Screen reader testing with Selenium
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://example.com")

# Test semantic HTML structure
def test_semantic_structure():
    # Check for proper heading hierarchy
    headings = driver.find_elements(By.CSS_SELECTOR, "h1, h2, h3, h4, h5, h6")
    
    for i, heading in enumerate(headings):
        tag_name = heading.tag_name
        text_content = heading.text
        
        if not text_content.strip():
            print(f"WARNING: {tag_name} is empty")
        
        # Check for skipped heading levels
        if i > 0:
            prev_level = int(headings[i-1].tag_name[1])
            current_level = int(tag_name[1])
            if current_level > prev_level + 1:
                print(f"WARNING: Skipped heading level from {prev_level} to {current_level}")

# Test ARIA labels and descriptions
def test_aria_labels():
    # Check images for alt text
    images = driver.find_elements(By.TAG_NAME, "img")
    for img in images:
        alt_text = img.get_attribute("alt")
        if not alt_text:
            print(f"WARNING: Image missing alt text: {img.get_attribute('src')}")
    
    # Check buttons for aria-label
    buttons = driver.find_elements(By.TAG_NAME, "button")
    for button in buttons:
        text = button.text
        aria_label = button.get_attribute("aria-label")
        
        if not text.strip() and not aria_label:
            print(f"WARNING: Button has no accessible name")

# Test form accessibility
def test_form_accessibility():
    inputs = driver.find_elements(By.CSS_SELECTOR, "input, select, textarea")
    
    for input_elem in inputs:
        # Check for associated label
        input_id = input_elem.get_attribute("id")
        
        if input_id:
            label = driver.find_element(By.CSS_SELECTOR, f"label[for='{input_id}']")
            if not label:
                print(f"WARNING: Input {input_id} has no associated label")
        
        # Check for aria-label if no label
        aria_label = input_elem.get_attribute("aria-label")
        if not input_id and not aria_label:
            print(f"WARNING: Input has no accessible name")

# Run all tests
test_semantic_structure()
test_aria_labels()
test_form_accessibility()`}
                {selectedLanguage === 'java' && `// Screen reader testing with Selenium
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.List;

WebDriver driver = new ChromeDriver();
driver.get("https://example.com");

// Test semantic HTML structure
public void testSemanticStructure() {
    // Check for proper heading hierarchy
    List<WebElement> headings = driver.findElements(By.cssSelector("h1, h2, h3, h4, h5, h6"));
    
    for (int i = 0; i < headings.size(); i++) {
        WebElement heading = headings.get(i);
        String tagName = heading.getTagName();
        String textContent = heading.getText();
        
        if (textContent.trim().isEmpty()) {
            System.out.println("WARNING: " + tagName + " is empty");
        }
        
        // Check for skipped heading levels
        if (i > 0) {
            WebElement prevHeading = headings.get(i - 1);
            int prevLevel = Integer.parseInt(prevHeading.getTagName().substring(1));
            int currentLevel = Integer.parseInt(tagName.substring(1));
            
            if (currentLevel > prevLevel + 1) {
                System.out.println("WARNING: Skipped heading level from " + prevLevel + " to " + currentLevel);
            }
        }
    }
}

// Test ARIA labels and descriptions
public void testAriaLabels() {
    // Check images for alt text
    List<WebElement> images = driver.findElements(By.tagName("img"));
    for (WebElement img : images) {
        String altText = img.getAttribute("alt");
        if (altText == null || altText.trim().isEmpty()) {
            System.out.println("WARNING: Image missing alt text: " + img.getAttribute("src"));
        }
    }
    
    // Check buttons for aria-label
    List<WebElement> buttons = driver.findElements(By.tagName("button"));
    for (WebElement button : buttons) {
        String text = button.getText();
        String ariaLabel = button.getAttribute("aria-label");
        
        if (text.trim().isEmpty() && (ariaLabel == null || ariaLabel.trim().isEmpty())) {
            System.out.println("WARNING: Button has no accessible name");
        }
    }
}`}
                {selectedLanguage === 'javascript' && `// Screen reader testing with Selenium
const { Builder, By } = require('selenium-webdriver');

async function testScreenReaderCompatibility() {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://example.com');

    // Test semantic HTML structure
    async function testSemanticStructure() {
        const headings = await driver.findElements(By.css('h1, h2, h3, h4, h5, h6'));
        
        for (let i = 0; i < headings.length; i++) {
            const heading = headings[i];
            const tagName = await heading.getTagName();
            const textContent = await heading.getText();
            
            if (!textContent.trim()) {
                console.log(\`WARNING: \${tagName} is empty\`);
            }
            
            // Check for skipped heading levels
            if (i > 0) {
                const prevHeading = headings[i - 1];
                const prevLevel = parseInt((await prevHeading.getTagName()).substring(1));
                const currentLevel = parseInt(tagName.substring(1));
                
                if (currentLevel > prevLevel + 1) {
                    console.log(\`WARNING: Skipped heading level from \${prevLevel} to \${currentLevel}\`);
                }
            }
        }
    }

    // Test ARIA labels and descriptions
    async function testAriaLabels() {
        // Check images for alt text
        const images = await driver.findElements(By.tagName('img'));
        for (const img of images) {
            const altText = await img.getAttribute('alt');
            if (!altText) {
                console.log(\`WARNING: Image missing alt text: \${await img.getAttribute('src')}\`);
            }
        }
        
        // Check buttons for aria-label
        const buttons = await driver.findElements(By.tagName('button'));
        for (const button of buttons) {
            const text = await button.getText();
            const ariaLabel = await button.getAttribute('aria-label');
            
            if (!text.trim() && !ariaLabel) {
                console.log('WARNING: Button has no accessible name');
            }
        }
    }

    // Test form accessibility
    async function testFormAccessibility() {
        const inputs = await driver.findElements(By.css('input, select, textarea'));
        
        for (const input of inputs) {
            // Check for associated label
            const inputId = await input.getAttribute('id');
            
            if (inputId) {
                try {
                    const label = await driver.findElement(By.css(\`label[for='\${inputId}']\`));
                    if (!label) {
                        console.log(\`WARNING: Input \${inputId} has no associated label\`);
                    }
                } catch (e) {
                    console.log(\`WARNING: Input \${inputId} has no associated label\`);
                }
            }
            
            // Check for aria-label if no label
            const ariaLabel = await input.getAttribute('aria-label');
            if (!inputId && !ariaLabel) {
                console.log('WARNING: Input has no accessible name');
            }
        }
    }

    // Run all tests
    await testSemanticStructure();
    await testAriaLabels();
    await testFormAccessibility();

    await driver.quit();
}`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Screen Reader Animation Demo */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Interactive Screen Reader Demo
          </CardTitle>
          <CardDescription>Visual demonstration of screen reader behavior and accessibility patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Animation Controls */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => {
                  // Reset all animation indices to beginning
                  setSemanticIndex(0);
                  setAriaIndex(0);
                  setReadingOrderIndex(0);
                  setFormIndex(0);
                  
                  // Switch to next animation
                  setCurrentScreenReaderAnimation((prev) => (prev + 1) % 4);
                  
                  // Trigger announcement immediately
                  const nextAnimation = (currentScreenReaderAnimation + 1) % 4;
                  const announcementText = `Switched to ${['Semantic Structure', 'ARIA Labels', 'Reading Order', 'Form Accessibility'][nextAnimation]} animation`;
                  setScreenReaderAnimationAnnouncement(announcementText);
                }}
                className="flex items-center gap-2"
                aria-label="Switch to next screen reader animation example"
                aria-describedby="screen-reader-animation-status"
              >
                <RefreshCw className="w-4 h-4" />
                Next Animation
              </Button>
              <Badge 
                variant="outline" 
                aria-live="polite"
                id="screen-reader-animation-status"
                role="status"
              >
                Current animation: {['Semantic Structure', 'ARIA Labels', 'Reading Order', 'Form Accessibility'][currentScreenReaderAnimation]}
              </Badge>
            </div>

            {/* Screen Reader Live Region for Announcements */}
            <div 
              aria-live="polite" 
              aria-atomic="true" 
              className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0"
              role="status"
              aria-label="Screen reader animation status announcement"
            >
              {screenReaderAnimationAnnouncement}
            </div>

            {/* Semantic Structure Animation */}
            {currentScreenReaderAnimation === 0 && (
              <div 
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-lg border-2 border-green-200 dark:border-green-700"
                role="region"
                aria-labelledby="semantic-structure-title"
              >
                <h4 id="semantic-structure-title" className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  Semantic HTML Structure
                </h4>
                <div className="space-y-4">
                  <div className="space-y-3" role="article" aria-label="Semantic HTML structure demonstration">
                    {[
                      { element: 'header', role: 'banner', content: 'Website Header', announcement: 'banner, landmark' },
                      { element: 'nav', role: 'navigation', content: 'Main Navigation', announcement: 'navigation, landmark' },
                      { element: 'main', role: 'main', content: 'Main Content Area', announcement: 'main, landmark' },
                      { element: 'aside', role: 'complementary', content: 'Sidebar Content', announcement: 'complementary, landmark' },
                      { element: 'footer', role: 'contentinfo', content: 'Website Footer', announcement: 'content info, landmark' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          semanticIndex === index 
                            ? 'border-green-500 bg-green-100 dark:bg-green-900/50 shadow-lg scale-105' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setSemanticIndex(index)}
                        onFocus={() => setSemanticIndex(index)}
                        role={item.role}
                        aria-current={semanticIndex === index ? "page" : undefined}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <code className="text-xs bg-black/10 px-2 py-1 rounded">&lt;{item.element}&gt;</code>
                          <span className="font-semibold">{item.content}</span>
                        </div>
                        <div className="text-sm opacity-80">
                          Screen reader announces: "{item.announcement}"
                        </div>
                        {semanticIndex === index && (
                          <div className="text-xs text-green-600 dark:text-green-400 mt-2" role="status">
                            🔊 Currently reading: {item.content}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    <strong>Demonstration:</strong> Semantic HTML provides meaningful structure for screen readers. 
                    Each element has a specific role and announcement pattern.
                    Currently reading: {['Website Header', 'Main Navigation', 'Main Content Area', 'Sidebar Content', 'Website Footer'][semanticIndex]}
                  </div>
                </div>
              </div>
            )}

            {/* ARIA Labels Animation */}
            {currentScreenReaderAnimation === 1 && (
              <div 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-700"
                role="region"
                aria-labelledby="aria-labels-title"
              >
                <h4 id="aria-labels-title" className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                  ARIA Labels and Descriptions
                </h4>
                <div className="space-y-4">
                  <div className="space-y-3" role="group" aria-label="ARIA label examples">
                    {[
                      { 
                        element: 'Close Button', 
                        ariaLabel: 'Close dialog', 
                        icon: '❌',
                        announcement: 'Close dialog, button'
                      },
                      { 
                        element: 'Menu Toggle', 
                        ariaLabel: 'Toggle navigation menu', 
                        icon: '☰',
                        announcement: 'Toggle navigation menu, button'
                      },
                      { 
                        element: 'Search Input', 
                        ariaLabel: 'Search website', 
                        icon: '🔍',
                        announcement: 'Search website, edit text'
                      },
                      { 
                        element: 'Info Icon', 
                        ariaLabel: 'More information about pricing', 
                        icon: 'ℹ️',
                        announcement: 'More information about pricing, button'
                      }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 flex items-center gap-4 ${
                          ariaIndex === index 
                            ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/50 shadow-lg scale-105' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setAriaIndex(index)}
                        onFocus={() => setAriaIndex(index)}
                        role="button"
                        aria-label={item.ariaLabel}
                        aria-current={ariaIndex === index ? "step" : undefined}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                          <div>
                            <div className="font-semibold">{item.element}</div>
                            <div className="text-sm opacity-80">aria-label="{item.ariaLabel}"</div>
                          </div>
                        </div>
                        <div className="ml-auto text-sm text-blue-600 dark:text-blue-300">
                          "{item.announcement}"
                        </div>
                        {ariaIndex === index && (
                          <div className="text-xs text-blue-600 dark:text-blue-400 ml-2" role="status">
                            🎯 Currently focused: {item.element}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Demonstration:</strong> ARIA labels provide context for elements without visible text. 
                    Screen readers announce the label instead of generic element names.
                    Currently focused: {['Close Button', 'Menu Toggle', 'Search Input', 'Info Icon'][ariaIndex]}
                  </div>
                </div>
              </div>
            )}

            {/* Reading Order Animation */}
            {currentScreenReaderAnimation === 2 && (
              <div 
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-700"
                role="region"
                aria-labelledby="reading-order-title"
              >
                <h4 id="reading-order-title" className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
                  Screen Reader Reading Order
                </h4>
                <div className="space-y-4">
                  <div className="space-y-3" role="article" aria-label="Content reading order demonstration">
                    {[
                      { 
                        order: 1, 
                        content: 'Page Title', 
                        type: 'heading',
                        announcement: 'Page Title, heading level 1'
                      },
                      { 
                        order: 2, 
                        content: 'Introduction paragraph explaining the page purpose.', 
                        type: 'paragraph',
                        announcement: 'Introduction paragraph explaining the page purpose.'
                      },
                      { 
                        order: 3, 
                        content: 'Section Heading', 
                        type: 'heading',
                        announcement: 'Section Heading, heading level 2'
                      },
                      { 
                        order: 4, 
                        content: 'List item one with important information.', 
                        type: 'listitem',
                        announcement: 'List item one with important information.'
                      },
                      { 
                        order: 5, 
                        content: 'List item two with additional details.', 
                        type: 'listitem',
                        announcement: 'List item two with additional details.'
                      }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-700 ${
                          readingOrderIndex === index 
                            ? 'border-purple-500 bg-purple-100 dark:bg-purple-900/50 shadow-lg scale-105' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setReadingOrderIndex(index)}
                        onFocus={() => setReadingOrderIndex(index)}
                        role={item.type}
                        aria-level={item.type === 'heading' ? (item.order === 1 ? 1 : 2) : undefined}
                        aria-posinset={item.order}
                        aria-setsize={5}
                        aria-current={readingOrderIndex === index ? "page" : undefined}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {item.order}
                          </div>
                          <div className="flex-1">
                            {item.type === 'heading' ? (
                              <h3 className="font-bold text-lg">{item.content}</h3>
                            ) : (
                              <p>{item.content}</p>
                            )}
                            <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                              📢 {item.announcement}
                            </div>
                          </div>
                        </div>
                        {readingOrderIndex === index && (
                          <div className="text-xs text-purple-600 dark:text-purple-400 mt-2" role="status">
                            📖 Currently reading: Item {item.order}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300">
                    <strong>Demonstration:</strong> Screen readers read content in linear order, not visual layout. 
                    Proper heading structure and logical content flow is essential.
                    Currently reading: Item {readingOrderIndex + 1} of 5
                  </div>
                </div>
              </div>
            )}

            {/* Form Accessibility Animation */}
            {currentScreenReaderAnimation === 3 && (
              <div 
                className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-700"
                role="region"
                aria-labelledby="form-accessibility-title"
              >
                <h4 id="form-accessibility-title" className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">
                  Form Accessibility Patterns
                </h4>
                <div className="space-y-4">
                  <div className="space-y-3" role="group" aria-label="Accessible form elements">
                    {[
                      { 
                        type: 'text',
                        label: 'Full Name',
                        required: true,
                        announcement: 'Full Name, edit text, required'
                      },
                      { 
                        type: 'email',
                        label: 'Email Address',
                        required: true,
                        announcement: 'Email Address, edit text, required'
                      },
                      { 
                        type: 'checkbox',
                        label: 'Subscribe to newsletter',
                        required: false,
                        announcement: 'Subscribe to newsletter, checkbox, not checked'
                      },
                      { 
                        type: 'select',
                        label: 'Country',
                        required: false,
                        announcement: 'Country, combobox'
                      }
                    ].map((field, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          formIndex === index 
                            ? 'border-orange-500 bg-orange-100 dark:bg-orange-900/50 shadow-lg scale-105' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setFormIndex(index)}
                        onFocus={() => setFormIndex(index)}
                        role="group"
                        aria-current={formIndex === index ? "step" : undefined}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            {field.type === 'text' && <div className="w-8 h-8 bg-orange-200 dark:bg-orange-800 rounded" aria-hidden="true"></div>}
                            {field.type === 'email' && <div className="w-8 h-8 bg-blue-200 dark:bg-blue-800 rounded" aria-hidden="true"></div>}
                            {field.type === 'checkbox' && <div className="w-8 h-8 border-2 border-gray-400 rounded" aria-hidden="true"></div>}
                            {field.type === 'select' && <div className="w-8 h-8 bg-purple-200 dark:bg-purple-800 rounded" aria-hidden="true"></div>}
                          </div>
                          <div className="flex-1">
                            <label className="font-medium block">
                              {field.label}
                              {field.required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
                            </label>
                            <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                              📢 {field.announcement}
                            </div>
                          </div>
                        </div>
                        {formIndex === index && (
                          <div className="text-xs text-orange-600 dark:text-orange-400 mt-2" role="status">
                            📝 Currently focused: {field.label}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-orange-700 dark:text-orange-300">
                    <strong>Demonstration:</strong> Forms need proper labels, descriptions, and error messages. 
                    Screen readers announce field types, requirements, and current states.
                    Currently focused: {['Full Name', 'Email Address', 'Subscribe to newsletter', 'Country'][formIndex]}
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Alert>
        <Ear className="w-4 h-4" />
        <AlertTitle>Important Screen Reader Testing Notes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Test with multiple screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
            <li>Screen readers interpret the accessibility tree, not the DOM</li>
            <li>Semantic HTML is crucial for proper screen reader navigation</li>
            <li>Always test with real users who rely on screen readers</li>
            <li>Consider different screen reader settings and verbosity levels</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default ScreenReaderTestingComponent;

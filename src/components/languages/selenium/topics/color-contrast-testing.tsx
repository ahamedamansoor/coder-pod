'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Palette,
  Code,
  AlertCircle,
  Search,
  Users,
  Eye,
  RefreshCw,
  Target,
  Contrast,
  Sun,
  Moon,
  Monitor as MonitorIcon,
  Smartphone,
  Droplets,
  Zap,
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function ColorContrastTestingComponent() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isScanning, setIsScanning] = React.useState(false);
  const [scanResults, setScanResults] = React.useState<Array<{ 
    element: string; 
    issue: string; 
    severity: 'critical' | 'high' | 'medium' | 'low';
    contrastRatio: string;
    wcagLevel: string;
  }>>([]);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [violationCount, setViolationCount] = React.useState(0);
  const [currentContrastAnimation, setCurrentContrastAnimation] = React.useState(0);
  const [wcagIndex, setWcagIndex] = React.useState(0);
  const [colorIndex, setColorIndex] = React.useState(0);
  const [luminanceIndex, setLuminanceIndex] = React.useState(0);
  const [impairmentIndex, setImpairmentIndex] = React.useState(0);
  const [contrastAnimationAnnouncement, setContrastAnimationAnnouncement] = React.useState('');

  // Auto-advance animations
  React.useEffect(() => {
    const interval = setInterval(() => {
      setWcagIndex((prev) => (prev + 1) % 4);
      setColorIndex((prev) => (prev + 1) % 6);
      setLuminanceIndex((prev) => (prev + 1) % 5);
      setImpairmentIndex((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Update screen reader announcements
  React.useEffect(() => {
    const announcements = [
      `Color Contrast WCAG Levels animation active. Currently viewing: ${['AA Normal (4.5:1)', 'AA Large (3:1)', 'AAA Normal (7:1)', 'AAA Large (4.5:1)'][wcagIndex]}.`,
      `Color Contrast Combinations animation active. Currently viewing: ${['Perfect contrast', 'Excellent contrast', 'Good contrast', 'Poor contrast', 'Color blind issue', 'Blue yellow problem'][colorIndex]}.`,
      `Color Contrast Luminance Calculation animation active. Currently calculating: ${['RGB Values', 'RGB Normalization', 'Gamma Correction', 'Luminance', 'Contrast Ratio'][luminanceIndex]}.`,
      `Color Contrast Visual Impairments animation active. Currently viewing: ${['Normal Vision', 'Protanopia (Red-blind)', 'Deuteranopia (Green-blind)', 'Tritanopia (Blue-blind)'][impairmentIndex]}.`
    ];
    setContrastAnimationAnnouncement(announcements[currentContrastAnimation]);
  }, [currentContrastAnimation, wcagIndex, colorIndex, luminanceIndex, impairmentIndex]);
  const codeExamples = {
    python: `# Color contrast testing with Selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
import math

def rgb_to_hex(rgb):
    """Convert RGB tuple to hex color"""
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def get_relative_luminance(rgb):
    """Calculate relative luminance for RGB color"""
    r, g, b = rgb
    
    # Normalize RGB values
    r, g, b = r / 255.0, g / 255.0, b / 255.0
    
    # Apply gamma correction
    def adjust(color):
        return color / 12.92 if color <= 0.03928 else ((color + 0.055) / 1.055) ** 2.4
    
    r, g, b = adjust(r), adjust(g), adjust(b)
    
    # Calculate luminance
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def get_contrast_ratio(color1, color2):
    """Calculate contrast ratio between two colors"""
    lum1 = get_relative_luminance(color1)
    lum2 = get_relative_luminance(color2)
    
    lighter = max(lum1, lum2)
    darker = min(lum1, lum2)
    
    return (lighter + 0.05) / (darker + 0.05)

driver = webdriver.Chrome()
driver.get("https://example.com")

# Test text color contrast
text_elements = driver.find_elements(By.CSS_SELECTOR, "p, h1, h2, h3, h4, h5, h6, span")

for element in text_elements:
    # Get computed styles
    styles = driver.execute_script("""
        var element = arguments[0];
        var styles = window.getComputedStyle(element);
        return {
            color: styles.color,
            backgroundColor: styles.backgroundColor
        };
    """, element)
    
    # Parse colors
    text_color = styles['color']
    bg_color = styles['backgroundColor']
    
    # Convert to RGB (simplified for demo)
    if text_color.startswith('rgb'):
        text_rgb = tuple(map(int, text_color.strip('rgb()').split(',')))
    else:
        text_rgb = hex_to_rgb(text_color)
    
    if bg_color.startswith('rgb'):
        bg_rgb = tuple(map(int, bg_color.strip('rgb()').split(',')))
    else:
        bg_rgb = hex_to_rgb(bg_color)
    
    # Calculate contrast ratio
    contrast_ratio = get_contrast_ratio(text_rgb, bg_rgb)
    
    # Check WCAG compliance
    if contrast_ratio < 4.5:
        print(f"WARNING: Low contrast ({contrast_ratio:.2f}:1) on element: {element.text[:50]}...")
    else:
        print(f"GOOD: Contrast ratio {contrast_ratio:.2f}:1 meets WCAG AA")`,
    java: `// Color contrast testing with Selenium
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import java.util.List;

public class ColorContrastTester {
    
    public static double getRelativeLuminance(int[] rgb) {
        double r = rgb[0] / 255.0;
        double g = rgb[1] / 255.0;
        double b = rgb[2] / 255.0;
        
        // Apply gamma correction
        r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
        g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
        b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
        
        // Calculate luminance
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    
    public static double getContrastRatio(int[] color1, int[] color2) {
        double lum1 = getRelativeLuminance(color1);
        double lum2 = getRelativeLuminance(color2);
        
        double lighter = Math.max(lum1, lum2);
        double darker = Math.min(lum1, lum2);
        
        return (lighter + 0.05) / (darker + 0.05);
    }
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");
        
        JavascriptExecutor js = (JavascriptExecutor) driver;
        
        // Test text color contrast
        List<WebElement> textElements = driver.findElements(By.cssSelector("p, h1, h2, h3, h4, h5, h6, span"));
        
        for (WebElement element : textElements) {
            // Get computed styles
            Object styles = js.executeScript(
                "var element = arguments[0]; " +
                "var styles = window.getComputedStyle(element); " +
                "return { " +
                "    color: styles.color, " +
                "    backgroundColor: styles.backgroundColor " +
                "};", element
            );
            
            // Parse and calculate contrast (implementation depends on styles object)
            System.out.println("Testing element: " + element.getText().substring(0, Math.min(50, element.getText().length())));
        }
        
        driver.quit();
    }
}`,
    javascript: `// Color contrast testing with Selenium
const { Builder, By } = require('selenium-webdriver');

class ColorContrastTester {
    static hexToRgb(hex) {
        const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    
    static getRelativeLuminance(rgb) {
        let { r, g, b } = rgb;
        
        // Normalize RGB values
        r = r / 255.0;
        g = g / 255.0;
        b = b / 255.0;
        
        // Apply gamma correction
        const adjust = (color) => {
            return color <= 0.03928 ? color / 12.92 : Math.pow((color + 0.055) / 1.055, 2.4);
        };
        
        r = adjust(r);
        g = adjust(g);
        b = adjust(b);
        
        // Calculate luminance
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    
    static getContrastRatio(color1, color2) {
        const lum1 = this.getRelativeLuminance(color1);
        const lum2 = this.getRelativeLuminance(color2);
        
        const lighter = Math.max(lum1, lum2);
        const darker = Math.min(lum1, lum2);
        
        return (lighter + 0.05) / (darker + 0.05);
    }
    
    static async testColorContrast() {
        const driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://example.com');
        
        // Test text color contrast
        const textElements = await driver.findElements(By.css('p, h1, h2, h3, h4, h5, h6, span'));
        
        for (const element of textElements) {
            // Get computed styles
            const styles = await driver.executeScript(\`
                var element = arguments[0];
                var styles = window.getComputedStyle(element);
                return {
                    color: styles.color,
                    backgroundColor: styles.backgroundColor,
                    fontSize: styles.fontSize,
                    fontWeight: styles.fontWeight
                };
            \`, element);
            
            // Parse colors and calculate contrast
            const textSnippet = (await element.getText()).substring(0, 50);
            console.log('Testing element:', textSnippet);
            console.log('Color:', styles.color, 'Background:', styles.backgroundColor);
            
            // Implementation would parse colors and calculate contrast ratio
            // then check against WCAG requirements
        }
        
        await driver.quit();
    }
}

// Run the test
ColorContrastTester.testColorContrast();`,
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const simulateColorContrastTest = async () => {
    setIsScanning(true);
    setScanResults([]);
    setCurrentStep(0);
    setViolationCount(0);

    const steps = [
      { step: 0, log: '🚀 Starting color contrast analysis...', delay: 500 },
      { step: 1, log: '🎨 Extracting color information...', delay: 800 },
      { step: 2, log: '📊 Calculating contrast ratios...', delay: 600 },
      { step: 3, log: '🔍 Testing WCAG compliance...', delay: 700 },
      { step: 4, log: '📱 Analyzing different viewport sizes...', delay: 600 },
      { step: 5, log: '✅ Analysis completed!', delay: 400 },
    ];

    const mockViolations = [
      {
        element: 'button.submit',
        issue: 'Insufficient color contrast',
        severity: 'critical' as const,
        contrastRatio: '2.8:1',
        wcagLevel: 'Fails WCAG AA (4.5:1 required)'
      },
      {
        element: 'p.description',
        issue: 'Low contrast text',
        severity: 'high' as const,
        contrastRatio: '3.2:1',
        wcagLevel: 'Fails WCAG AA (4.5:1 required)'
      },
      {
        element: 'span.label',
        issue: 'Border contrast too low',
        severity: 'medium' as const,
        contrastRatio: '1.5:1',
        wcagLevel: 'Fails WCAG AA (3:1 required for non-text)'
      },
      {
        element: 'a.link',
        issue: 'Link hover state contrast',
        severity: 'low' as const,
        contrastRatio: '4.2:1',
        wcagLevel: 'Close to WCAG AA threshold'
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
        icon={Palette}
        category="Selenium · Accessibility Testing"
        title="Color Contrast Testing"
        description="Ensure your color choices meet WCAG contrast requirements for optimal readability and accessibility"
        colorTheme="orange"
        badges={[
          { label: 'Visual Testing', variant: 'info' },
          { label: 'WCAG Required', variant: 'secondary' },
          { label: 'Design System', variant: 'default' },
        ]}
      />

      {/* Color Contrast Architecture */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Contrast className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Color Contrast Architecture
          </CardTitle>
          <CardDescription>How color contrast is calculated and tested</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Main Architecture Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg border-2 border-slate-300 dark:border-slate-700">
              <div className="space-y-0">
                {/* Color Extraction */}
                <div className="text-center">
                  <div className="inline-block bg-purple-100 dark:bg-purple-900/40 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                    <div className="text-lg font-bold text-purple-900 dark:text-purple-100">Color Extraction</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">RGB Values from DOM</div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                
                {/* Luminance Calculation */}
                <div className="text-center">
                  <div className="inline-block bg-blue-100 dark:bg-blue-900/40 px-6 py-3 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                    <div className="text-lg font-bold text-blue-900 dark:text-blue-100">Luminance Calculation</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Relative Brightness</div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                
                {/* Contrast Ratio */}
                <div className="text-center">
                  <div className="inline-block bg-orange-100 dark:bg-orange-900/40 px-6 py-3 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                    <div className="text-lg font-bold text-orange-900 dark:text-orange-100">Contrast Ratio</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">WCAG Formula</div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center h-6">
                  <div className="w-0.5 h-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                
                {/* Compliance Check */}
                <div className="text-center">
                  <div className="inline-block bg-green-100 dark:bg-green-900/40 px-6 py-3 rounded-lg border-2 border-green-300 dark:border-green-700">
                    <div className="text-lg font-bold text-green-900 dark:text-green-100">Compliance Check</div>
                    <div className="text-sm text-green-700 dark:text-green-300">WCAG AA/AAA Standards</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* WCAG Requirements */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">Normal Text</h5>
                </div>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• WCAG AA: 4.5:1 contrast ratio</li>
                  <li>• WCAG AAA: 7:1 contrast ratio</li>
                  <li>• Applies to text under 18pt</li>
                  <li>• Most common requirement</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <MonitorIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Large Text</h5>
                </div>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• WCAG AA: 3:1 contrast ratio</li>
                  <li>• WCAG AAA: 4.5:1 contrast ratio</li>
                  <li>• Text 18pt+ or 14pt+ bold</li>
                  <li>• Lower requirement due to size</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Non-Text Elements</h5>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• WCAG AA: 3:1 contrast ratio</li>
                  <li>• Icons, borders, form fields</li>
                  <li>• Graphical objects</li>
                  <li>• UI components</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Moon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Dark Mode</h5>
                </div>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Same contrast requirements apply</li>
                  <li>• Test both light and dark themes</li>
                  <li>• Consider reduced motion preferences</li>
                  <li>• Respect system color schemes</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Color Contrast Matters */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Why Color Contrast Matters
          </CardTitle>
          <CardDescription>Essential for readable and accessible content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Visual Impairments</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Users with low vision, color blindness, and visual processing disorders need high contrast
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Environmental Factors</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Bright sunlight, screen glare, and mobile viewing affect color perception
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
                    WCAG contrast requirements are mandated by accessibility laws worldwide
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
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Better UX</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Good contrast improves readability for all users, reducing eye strain
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
            <Code className="w-5 h-5 text-orange-600" />
            Color Contrast Testing Examples
          </CardTitle>
          <CardDescription>
            Selenium scripts for testing color contrast compliance
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
                    ? 'border-b-2 border-orange-600 text-orange-600 dark:text-orange-400'
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
                {codeExamples[selectedLanguage]}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Color Contrast Animation Demo */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Interactive Color Contrast Demo
          </CardTitle>
          <CardDescription>Visual demonstration of color contrast principles and WCAG compliance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Animation Controls */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => {
                  // Reset all animation indices to beginning
                  setWcagIndex(0);
                  setColorIndex(0);
                  setLuminanceIndex(0);
                  setImpairmentIndex(0);
                  
                  // Switch to next animation
                  setCurrentContrastAnimation((prev) => (prev + 1) % 4);
                  
                  // Trigger announcement immediately
                  const nextAnimation = (currentContrastAnimation + 1) % 4;
                  const announcementText = `Switched to ${['WCAG Levels', 'Color Combinations', 'Luminance Calculation', 'Visual Impairments'][nextAnimation]} animation`;
                  setContrastAnimationAnnouncement(announcementText);
                }}
                className="flex items-center gap-2"
                aria-label="Switch to next color contrast animation example"
                aria-describedby="contrast-animation-status"
              >
                <RefreshCw className="w-4 h-4" />
                Next Animation
              </Button>
              <Badge 
                variant="outline" 
                aria-live="polite"
                id="contrast-animation-status"
                role="status"
              >
                Current animation: {['WCAG Levels', 'Color Combinations', 'Luminance Calculation', 'Visual Impairments'][currentContrastAnimation]}
              </Badge>
            </div>

            {/* Screen Reader Live Region for Announcements */}
            <div 
              aria-live="polite" 
              aria-atomic="true" 
              className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0"
              role="status"
              aria-label="Color contrast animation status announcement"
            >
              {contrastAnimationAnnouncement}
            </div>

            {/* WCAG Levels Animation */}
            {currentContrastAnimation === 0 && (
              <div 
                className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-700"
                role="region"
                aria-labelledby="wcag-levels-title"
              >
                <h4 id="wcag-levels-title" className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">
                  WCAG Contrast Requirements
                </h4>
                <div className="space-y-4">
                  <div className="space-y-3" role="group" aria-label="WCAG contrast compliance levels">
                    {[
                      { 
                        level: 'AA Normal', 
                        ratio: '4.5:1', 
                        description: 'Standard text compliance',
                        status: 'compliant',
                        example: 'Black on white'
                      },
                      { 
                        level: 'AA Large', 
                        ratio: '3:1', 
                        description: 'Large text (18pt+ or 14pt+ bold)',
                        status: 'compliant',
                        example: 'Dark gray on light gray'
                      },
                      { 
                        level: 'AAA Normal', 
                        ratio: '7:1', 
                        description: 'Enhanced contrast for better readability',
                        status: 'enhanced',
                        example: 'Deep black on white'
                      },
                      { 
                        level: 'AAA Large', 
                        ratio: '4.5:1', 
                        description: 'Enhanced contrast for large text',
                        status: 'enhanced',
                        example: 'Dark blue on light blue'
                      }
                    ].map((level, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          wcagIndex === index 
                            ? 'border-orange-500 bg-orange-100 dark:bg-orange-900/50 shadow-lg scale-105' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setWcagIndex(index)}
                        onFocus={() => setWcagIndex(index)}
                        role="article"
                        aria-current={wcagIndex === index ? "step" : undefined}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{level.level}</span>
                            <Badge variant={level.status === 'enhanced' ? 'default' : 'secondary'}>
                              {level.ratio}
                            </Badge>
                          </div>
                          <div className={`px-2 py-1 rounded text-xs ${
                            level.status === 'enhanced' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200' 
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200'
                          }`}>
                            {level.status === 'enhanced' ? '✓ AAA' : '✓ AA'}
                          </div>
                        </div>
                        <div className="text-sm opacity-80 mb-2">{level.description}</div>
                        <div className="text-xs text-orange-600 dark:text-orange-400">
                          Example: {level.example}
                        </div>
                        {wcagIndex === index && (
                          <div className="text-xs text-orange-600 dark:text-orange-400 mt-2" role="status">
                            🎯 Currently viewing: {level.level} ({level.ratio})
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-orange-700 dark:text-orange-300">
                    <strong>Demonstration:</strong> WCAG defines different contrast levels for various text sizes. 
                    Higher ratios provide better readability for users with visual impairments.
                    Currently viewing: {['AA Normal (4.5:1)', 'AA Large (3:1)', 'AAA Normal (7:1)', 'AAA Large (4.5:1)'][wcagIndex]}
                  </div>
                </div>
              </div>
            )}

            {/* Color Combinations Animation */}
            {currentContrastAnimation === 1 && (
              <div 
                className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 p-6 rounded-lg border-2 border-red-200 dark:border-red-700"
                role="region"
                aria-labelledby="color-combinations-title"
              >
                <h4 id="color-combinations-title" className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">
                  Color Contrast Examples
                </h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4" role="group" aria-label="Color contrast examples with compliance status">
                    {[
                      { 
                        foreground: '#000000', 
                        background: '#FFFFFF', 
                        ratio: '21:1',
                        status: 'excellent',
                        text: 'Perfect contrast'
                      },
                      { 
                        foreground: '#1a1a1a', 
                        background: '#f0f0f0', 
                        ratio: '15.8:1',
                        status: 'excellent',
                        text: 'Excellent contrast'
                      },
                      { 
                        foreground: '#333333', 
                        background: '#cccccc', 
                        ratio: '8.59:1',
                        status: 'good',
                        text: 'Good contrast'
                      },
                      { 
                        foreground: '#666666', 
                        background: '#999999', 
                        ratio: '2.55:1',
                        status: 'poor',
                        text: 'Poor contrast'
                      },
                      { 
                        foreground: '#ff0000', 
                        background: '#00ff00', 
                        ratio: '2.97:1',
                        status: 'poor',
                        text: 'Color blind issue'
                      },
                      { 
                        foreground: '#0000ff', 
                        background: '#ffff00', 
                        ratio: '2.90:1',
                        status: 'poor',
                        text: 'Blue yellow problem'
                      }
                    ].map((combo, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          colorIndex === index 
                            ? 'border-red-500 bg-red-100 dark:bg-red-900/50 shadow-lg scale-105' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        style={{ backgroundColor: combo.background, color: combo.foreground }}
                        onMouseEnter={() => setColorIndex(index)}
                        onFocus={() => setColorIndex(index)}
                        role="img"
                        aria-label={`${combo.text}: ${combo.ratio} contrast ratio, ${combo.status} compliance`}
                        aria-current={colorIndex === index ? "step" : undefined}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{combo.text}</span>
                          <Badge variant={combo.status === 'excellent' ? 'default' : combo.status === 'good' ? 'secondary' : 'destructive'}>
                            {combo.ratio}
                          </Badge>
                        </div>
                        <div className="text-xs mt-1 opacity-80">
                          Status: {combo.status}
                        </div>
                        {colorIndex === index && (
                          <div className="text-xs mt-2" role="status">
                            👁️ Currently viewing: {combo.text}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-red-700 dark:text-red-300">
                    <strong>Demonstration:</strong> Different color combinations produce varying contrast ratios. 
                    Some combinations that look fine to sighted users may fail accessibility standards.
                    Currently viewing: {['Perfect contrast', 'Excellent contrast', 'Good contrast', 'Poor contrast', 'Color blind issue', 'Blue yellow problem'][colorIndex]}
                  </div>
                </div>
              </div>
            )}

            {/* Luminance Calculation Animation */}
            {currentContrastAnimation === 2 && (
              <div 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-700"
                role="region"
                aria-labelledby="luminance-calculation-title"
              >
                <h4 id="luminance-calculation-title" className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                  Contrast Ratio Calculation
                </h4>
                <div className="space-y-4">
                  <div className="space-y-3" role="group" aria-label="Contrast ratio calculation steps">
                    {[
                      { 
                        step: '1. Get RGB Values',
                        formula: 'hex → RGB (0-255)',
                        example: '#333333 → RGB(51, 51, 51)',
                        result: '51, 51, 51'
                      },
                      { 
                        step: '2. Normalize RGB',
                        formula: 'RGB/255 (0-1 scale)',
                        example: '51/255 → 0.2',
                        result: '0.2, 0.2, 0.2'
                      },
                      { 
                        step: '3. Apply Gamma Correction',
                        formula: 'if ≤0.03928: ÷12.92 else: ÷0.055^2.4',
                        example: '0.2 → 0.0331',
                        result: '0.0331, 0.0331, 0.0331'
                      },
                      { 
                        step: '4. Calculate Luminance',
                        formula: '0.2126R + 0.7152G + 0.0722B',
                        example: '0.2126×0.0331 + 0.7152×0.0331 + 0.0722×0.0331',
                        result: '0.0331'
                      },
                      { 
                        step: '5. Calculate Contrast',
                        formula: '(L1 + 0.05) / (L2 + 0.05)',
                        example: '(1 + 0.05) / (0.0331 + 0.05)',
                        result: '12.63:1'
                      }
                    ].map((calc, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          luminanceIndex === index 
                            ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/50 shadow-lg scale-105' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setLuminanceIndex(index)}
                        onFocus={() => setLuminanceIndex(index)}
                        role="article"
                        aria-current={luminanceIndex === index ? "step" : undefined}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold mb-1">{calc.step}</div>
                            <div className="text-sm font-mono bg-black/10 px-2 py-1 rounded mb-2">
                              {calc.formula}
                            </div>
                            <div className="text-xs opacity-80 mb-1">{calc.example}</div>
                            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                              Result: {calc.result}
                            </div>
                          </div>
                        </div>
                        {luminanceIndex === index && (
                          <div className="text-xs text-blue-600 dark:text-blue-400 mt-2" role="status">
                            🧮 Currently calculating: {calc.step}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Demonstration:</strong> Contrast ratio is calculated using relative luminance values. 
                    The formula accounts for human perception of different colors.
                    Currently calculating: {['RGB Values', 'RGB Normalization', 'Gamma Correction', 'Luminance', 'Contrast Ratio'][luminanceIndex]}
                  </div>
                </div>
              </div>
            )}

            {/* Visual Impairments Animation */}
            {currentContrastAnimation === 3 && (
              <div 
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-lg border-2 border-green-200 dark:border-green-700"
                role="region"
                aria-labelledby="visual-impairments-title"
              >
                <h4 id="visual-impairments-title" className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  Color Vision Deficiencies
                </h4>
                <div className="space-y-4">
                  <div className="space-y-3" role="group" aria-label="Color vision deficiency simulations">
                    {[
                      { 
                        type: 'Normal Vision',
                        description: 'Full color perception',
                        colors: ['Red', 'Green', 'Blue', 'Yellow'],
                        impact: 'No contrast issues',
                        filter: 'none'
                      },
                      { 
                        type: 'Protanopia',
                        description: 'Red-blind (1% of males)',
                        colors: ['Brown', 'Green', 'Blue', 'Yellow'],
                        impact: 'Red-green confusion',
                        filter: 'sepia(0.5) hue-rotate(-30deg)'
                      },
                      { 
                        type: 'Deuteranopia',
                        description: 'Green-blind (1% of males)',
                        colors: ['Red', 'Brown', 'Blue', 'Yellow'],
                        impact: 'Red-green confusion',
                        filter: 'sepia(0.3) hue-rotate(20deg)'
                      },
                      { 
                        type: 'Tritanopia',
                        description: 'Blue-blind (0.01% of population)',
                        colors: ['Red', 'Green', 'Gray', 'Pink'],
                        impact: 'Blue-yellow confusion',
                        filter: 'sepia(0.2) hue-rotate(180deg)'
                      }
                    ].map((impairment, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          impairmentIndex === index 
                            ? 'border-green-500 bg-green-100 dark:bg-green-900/50 shadow-lg scale-105' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onMouseEnter={() => setImpairmentIndex(index)}
                        onFocus={() => setImpairmentIndex(index)}
                        role="article"
                        aria-current={impairmentIndex === index ? "step" : undefined}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="font-semibold">{impairment.type}</div>
                          <div className="text-sm opacity-80">{impairment.description}</div>
                        </div>
                        <div className="flex gap-2 mb-2">
                          {impairment.colors.map((color, i) => (
                            <div 
                              key={i}
                              className="px-3 py-1 rounded text-sm font-medium"
                              style={{ 
                                filter: impairment.filter,
                                backgroundColor: i === 0 ? '#ff0000' : i === 1 ? '#00ff00' : i === 2 ? '#0000ff' : '#ffff00',
                                color: i === 3 ? '#000000' : '#ffffff'
                              }}
                            >
                              {color}
                            </div>
                          ))}
                        </div>
                        <div className="text-sm">
                          <strong>Impact:</strong> {impairment.impact}
                        </div>
                        {impairmentIndex === index && (
                          <div className="text-xs text-green-600 dark:text-green-400 mt-2" role="status">
                            👁️ Currently viewing: {impairment.type}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    <strong>Demonstration:</strong> Color vision deficiencies affect how users perceive colors. 
                    High contrast ratios help ensure readability for all users regardless of color perception.
                    Currently viewing: {['Normal Vision', 'Protanopia (Red-blind)', 'Deuteranopia (Green-blind)', 'Tritanopia (Blue-blind)'][impairmentIndex]}
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Alert>
        <Palette className="w-4 h-4" />
        <AlertTitle>Important Color Contrast Notes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Test both light and dark color schemes for comprehensive coverage</li>
            <li>Consider different viewport sizes and responsive design breakpoints</li>
            <li>Test interactive states (hover, focus, active) for proper contrast</li>
            <li>Use automated tools but verify with manual visual inspection</li>
            <li>Consider color blindness and different types of visual impairments</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default ColorContrastTestingComponent;

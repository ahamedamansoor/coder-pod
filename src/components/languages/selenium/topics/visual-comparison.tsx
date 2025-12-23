'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Layers,
  Code,
  Copy,
  CheckCircle,
  Play,
  RefreshCw,
  Image as ImageIcon,
  Eye,
  GitCompare,
  Monitor,
  Gauge,
  AlertCircle,
  Sparkles,
  Target,
  Download,
  XCircle,
  FileImage,
  Settings,
  AlertTriangle,
  Layout,
  Palette,
  Type
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function VisualComparison() {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'java' | 'javascript'>('python');
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [comparisonResult, setComparisonResult] = React.useState<'none' | 'matching' | 'different'>('none');
  const [speed, setSpeed] = React.useState<'slow' | 'medium' | 'fast'>('medium');
  const [currentCodeLine, setCurrentCodeLine] = React.useState<number>(-1);
  const [liveVariables, setLiveVariables] = React.useState<Record<string, string>>({});

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.4;
      default: return 1;
    }
  };

  const simulateVisualComparison = async () => {
    setIsRunning(true);
    setCurrentStep(0);
    setComparisonResult('none');
    setCurrentCodeLine(-1);
    setLiveVariables({});

    const multiplier = getSpeedMultiplier();
    
    const getCodeLines = () => {
      if (selectedLanguage === 'python') {
        return { init: 4, baseline: 7, current: 10, compare: 13, result: 16, save: 19, quit: 22 };
      } else if (selectedLanguage === 'java') {
        return { init: 4, baseline: 7, current: 10, compare: 13, result: 16, save: 19, quit: 21 };
      } else {
        return { init: 2, baseline: 3, current: 6, compare: 9, result: 12, save: 15, quit: 17 };
      }
    };
    const lines = getCodeLines();

    const steps = [
      { step: 0, delay: 500 * multiplier, codeLine: 0, variable: null },
      { step: 1, delay: 600 * multiplier, codeLine: lines.init, variable: { name: 'driver', value: '<WebDriver: Chrome>' } },
      { step: 2, delay: 1000 * multiplier, codeLine: lines.baseline, variable: { name: 'baseline', value: 'baseline.png' } },
      { step: 3, delay: 1200 * multiplier, codeLine: lines.current, variable: { name: 'current', value: 'current.png' } },
      { step: 4, delay: 1500 * multiplier, codeLine: lines.compare, variable: { name: 'comparing', value: 'Analyzing...' } },
      { step: 5, delay: 1000 * multiplier, codeLine: lines.result, variable: { name: 'difference', value: '2.3%' }, result: 'different' },
      { step: 6, delay: 800 * multiplier, codeLine: lines.save, variable: { name: 'diff_image', value: 'diff.png' } },
      { step: 7, delay: 500 * multiplier, codeLine: lines.quit, variable: null },
    ];

    for (const { step, delay, codeLine, variable, result } of steps) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setCurrentStep(step);
      setCurrentCodeLine(codeLine || -1);
      
      if (variable) {
        setLiveVariables(prev => ({ ...prev, [variable.name]: variable.value }));
      }
      
      if (result) {
        setComparisonResult(result as 'matching' | 'different');
      }
    }

    setIsRunning(false);
  };

  const getVisualComparisonCode = (language: 'python' | 'java' | 'javascript' = selectedLanguage) => {
    if (language === 'python') {
      return [
        'from selenium import webdriver',
        'from PIL import Image, ImageChops',
        'import numpy as np',
        '',
        'driver = webdriver.Chrome()',
        '',
        '# Capture baseline screenshot',
        'driver.get("https://example.com")',
        'driver.save_screenshot("baseline.png")',
        '',
        '# Capture current screenshot',
        'driver.get("https://example.com")',
        'driver.save_screenshot("current.png")',
        '',
        '# Compare images',
        'baseline = Image.open("baseline.png")',
        'current = Image.open("current.png")',
        'diff = ImageChops.difference(baseline, current)',
        '',
        '# Calculate difference percentage',
        'diff_array = np.array(diff)',
        'difference_percent = (np.count_nonzero(diff_array) / diff_array.size) * 100',
        '',
        '# Save difference image',
        'diff.save("diff.png")',
        '',
        'driver.quit()',
      ];
    } else if (language === 'java') {
      return [
        'import org.openqa.selenium.WebDriver;',
        'import org.openqa.selenium.chrome.ChromeDriver;',
        'import javax.imageio.ImageIO;',
        'import java.awt.image.BufferedImage;',
        '',
        'WebDriver driver = new ChromeDriver();',
        '',
        '// Capture baseline screenshot',
        'driver.get("https://example.com");',
        'File baseline = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);',
        '',
        '// Capture current screenshot',
        'driver.get("https://example.com");',
        'File current = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);',
        '',
        '// Compare images',
        'BufferedImage baselineImg = ImageIO.read(baseline);',
        'BufferedImage currentImg = ImageIO.read(current);',
        'BufferedImage diff = compareImages(baselineImg, currentImg);',
        '',
        '// Calculate difference percentage',
        'double differencePercent = calculateDifference(baselineImg, currentImg);',
        '',
        '// Save difference image',
        'ImageIO.write(diff, "png", new File("diff.png"));',
        '',
        'driver.quit();',
      ];
    } else {
      return [
        'const { Builder } = require(\'selenium-webdriver\');',
        'const { PNG } = require(\'pngjs\');',
        'const pixelmatch = require(\'pixelmatch\');',
        '',
        'let driver = await new Builder().forBrowser(\'chrome\').build();',
        '',
        '// Capture baseline screenshot',
        'await driver.get(\'https://example.com\');',
        'const baseline = await driver.takeScreenshot();',
        'fs.writeFileSync(\'baseline.png\', baseline, \'base64\');',
        '',
        '// Capture current screenshot',
        'await driver.get(\'https://example.com\');',
        'const current = await driver.takeScreenshot();',
        'fs.writeFileSync(\'current.png\', current, \'base64\');',
        '',
        '// Compare images using pixelmatch',
        'const img1 = PNG.sync.read(fs.readFileSync(\'baseline.png\'));',
        'const img2 = PNG.sync.read(fs.readFileSync(\'current.png\'));',
        'const diff = new PNG({ width: img1.width, height: img1.height });',
        '',
        '// Calculate difference',
        'const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height);',
        'const differencePercent = (numDiffPixels / (img1.width * img1.height)) * 100;',
        '',
        '// Save difference image',
        'fs.writeFileSync(\'diff.png\', PNG.sync.write(diff));',
        '',
        'await driver.quit();',
      ];
    }
  };

  const comparisonExample = {
    python: getVisualComparisonCode('python').join('\n'),
    java: getVisualComparisonCode('java').join('\n'),
    javascript: getVisualComparisonCode('javascript').join('\n'),
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <PageHeader
        title="Visual Comparison"
        description="Compare screenshots to detect visual regressions and UI changes"
        icon={GitCompare}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitCompare className="w-5 h-5 text-purple-600" />
            Visual Regression Testing
          </CardTitle>
          <CardDescription>
            Detect unintended visual changes in your application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Visual comparison helps identify UI regressions by comparing screenshots:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
            <li><strong>Baseline Screenshots:</strong> Capture reference images of correct UI</li>
            <li><strong>Current Screenshots:</strong> Capture current state for comparison</li>
            <li><strong>Pixel Comparison:</strong> Compare images pixel-by-pixel</li>
            <li><strong>Difference Highlighting:</strong> Generate diff images showing changes</li>
          </ul>

          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <GitCompare className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Catch Visual Bugs</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Visual regression testing catches layout shifts, styling issues, and unintended UI changes that traditional functional tests might miss.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-600" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Visual comparison implementation in Python, Java, and JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent>
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

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
                {selectedLanguage === 'python' && `# Using PIL for image comparison
from PIL import Image, ImageChops
import numpy as np

# Load images
baseline = Image.open("baseline.png")
current = Image.open("current.png")

# Calculate difference
diff = ImageChops.difference(baseline, current)
diff_array = np.array(diff)
difference_percent = (np.count_nonzero(diff_array) / diff_array.size) * 100

# Save difference image
diff.save("diff.png")

# Set tolerance threshold
if difference_percent > 5.0:
    print(f"Visual regression detected: {difference_percent:.2f}% difference")
else:
    print("Images match within tolerance")`}
                {selectedLanguage === 'java' && `// Using BufferedImage for comparison
BufferedImage baseline = ImageIO.read(new File("baseline.png"));
BufferedImage current = ImageIO.read(new File("current.png"));

// Calculate pixel differences
int width = baseline.getWidth();
int height = baseline.getHeight();
int totalPixels = width * height;
int diffPixels = 0;

for (int y = 0; y < height; y++) {
    for (int x = 0; x < width; x++) {
        if (baseline.getRGB(x, y) != current.getRGB(x, y)) {
            diffPixels++;
        }
    }
}

double differencePercent = (diffPixels * 100.0) / totalPixels;

// Set tolerance threshold
if (differencePercent > 5.0) {
    System.out.println("Visual regression: " + differencePercent + "% difference");
}`}
                {selectedLanguage === 'javascript' && `// Using pixelmatch library
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');

// Load images
const img1 = PNG.sync.read(fs.readFileSync('baseline.png'));
const img2 = PNG.sync.read(fs.readFileSync('current.png'));
const diff = new PNG({ width: img1.width, height: img1.height });

// Calculate difference
const numDiffPixels = pixelmatch(
    img1.data, 
    img2.data, 
    diff.data, 
    img1.width, 
    img1.height,
    { threshold: 0.1 }
);

const differencePercent = (numDiffPixels / (img1.width * img1.height)) * 100;

// Save difference image
fs.writeFileSync('diff.png', PNG.sync.write(diff));

// Set tolerance threshold
if (differencePercent > 5.0) {
    console.log(\`Visual regression: \${differencePercent.toFixed(2)}% difference\`);
}`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitCompare className="w-5 h-5 text-purple-600" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Watch visual comparison in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <Play className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Interactive Visual Comparison Demo</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Watch baseline and current screenshots being compared with inline variable values. Adjust speed and click "Run Demo"!
            </AlertDescription>
          </Alert>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-purple-600 dark:text-purple-400" />
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
                      speed === option.value
                        ? 'border-purple-500 bg-purple-100 dark:bg-purple-900/40 shadow-md'
                        : 'border-slate-300 dark:border-slate-600 hover:border-purple-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="speed-comparison"
                      value={option.value}
                      checked={speed === option.value}
                      onChange={(e) => setSpeed(e.target.value as any)}
                      disabled={isRunning}
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
                  <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Example</h4>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={simulateVisualComparison}
                    disabled={isRunning}
                    className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    {isRunning ? (
                      <>
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3" />
                        Run Demo
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(comparisonExample[selectedLanguage], 'Visual comparison code')}
                    className="gap-2"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </Button>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-xs max-h-[600px] overflow-y-auto border-2 border-slate-300 dark:border-slate-700">
                {isRunning ? (
                  <div className="space-y-0">
                    {getVisualComparisonCode(selectedLanguage).map((line, index) => (
                      <div
                        key={index}
                        className={`px-2 py-1 transition-all duration-200 ${
                          currentCodeLine === index
                            ? 'bg-purple-200 dark:bg-purple-900/50 border-l-4 border-purple-500 font-bold'
                            : currentCodeLine > index
                            ? 'opacity-60'
                            : ''
                        }`}
                      >
                        <span className="text-slate-500 dark:text-slate-500 select-none mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className={currentCodeLine === index ? 'text-purple-900 dark:text-purple-100' : 'text-slate-800 dark:text-slate-300'}>
                          {line}
                        </span>
                        {currentCodeLine === index && (() => {
                          const getVariableName = (codeLine: string) => {
                            if (selectedLanguage === 'python') {
                              const match = codeLine.match(/^(\w+)\s*=/);
                              return match ? match[1] : null;
                            } else if (selectedLanguage === 'java') {
                              const match = codeLine.match(/\b(\w+)\s*=/);
                              return match ? match[1] : null;
                            } else {
                              const match = codeLine.match(/(?:let|const|var)\s+(\w+)\s*=/);
                              return match ? match[1] : null;
                            }
                          };
                          const varName = getVariableName(line);
                          return varName && liveVariables[varName] ? (
                            <span className="ml-2 px-2 py-0.5 bg-yellow-200 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100 rounded text-[10px] font-semibold">
                              = {liveVariables[varName]}
                            </span>
                          ) : null;
                        })()}
                      </div>
                    ))}
                    {Object.keys(liveVariables).length > 0 && (
                      <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-950/30 rounded border border-purple-200 dark:border-purple-700">
                        <div className="text-[10px] font-bold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          Live Variables:
                        </div>
                        <div className="space-y-1">
                          {Object.entries(liveVariables).map(([key, value]) => (
                            <div key={key} className="text-[10px] text-purple-800 dark:text-purple-200">
                              <span className="font-mono font-bold">{key}</span> = <span className="text-purple-600 dark:text-purple-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <pre className="overflow-x-auto text-slate-800 dark:text-slate-300">{comparisonExample[selectedLanguage]}</pre>
                )}
              </div>
            </div>

            {currentStep > 2 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Visual Comparison Result</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-300 dark:border-slate-600 overflow-hidden">
                  {comparisonResult === 'different' ? (
                    <div className="animate-in fade-in duration-500">
                      {/* Header with status */}
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                              <AlertCircle className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg">Visual Regression Detected</h3>
                              <p className="text-sm opacity-90">Changes found between baseline and current</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">2.3%</div>
                            <div className="text-xs opacity-90">Difference</div>
                          </div>
                        </div>
                      </div>

                      {/* Visual comparison grid */}
                      <div className="p-4">
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="text-center">
                            <div className="relative group">
                              <div className="w-full h-24 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg border-2 border-blue-300 dark:border-blue-600 flex items-center justify-center transition-transform group-hover:scale-105">
                                <ImageIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                1
                              </div>
                            </div>
                            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-2">Baseline</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Original reference</p>
                          </div>

                          <div className="text-center">
                            <div className="relative group">
                              <div className="w-full h-24 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg border-2 border-green-300 dark:border-green-600 flex items-center justify-center transition-transform group-hover:scale-105">
                                <ImageIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                              </div>
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                2
                              </div>
                            </div>
                            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-2">Current</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">New screenshot</p>
                          </div>

                          <div className="text-center">
                            <div className="relative group">
                              <div className="w-full h-24 bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900/30 dark:to-pink-800/30 rounded-lg border-2 border-purple-300 dark:border-purple-600 flex items-center justify-center transition-transform group-hover:scale-105">
                                <div className="grid grid-cols-2 gap-1">
                                  <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                                  <div className="w-2 h-2 bg-pink-400 rounded-sm"></div>
                                  <div className="w-2 h-2 bg-pink-400 rounded-sm"></div>
                                  <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                                </div>
                              </div>
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                3
                              </div>
                            </div>
                            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-2">Difference</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Highlighted changes</p>
                          </div>
                        </div>

                        {/* Detailed metrics */}
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 space-y-3">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-3">Detailed Analysis</h4>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                                <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Pixel Differences</p>
                                <p className="text-xs text-slate-600 dark:text-slate-400">15,847 pixels changed</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                                <Gauge className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Severity</p>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Medium (2.3% threshold)</p>
                              </div>
                            </div>
                          </div>

                          {/* Visual indicator bar */}
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
                              <span>Similarity</span>
                              <span>97.7%</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-2 rounded-full relative">
                                <div className="absolute right-[2.3%] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-800 rounded-full shadow-md"></div>
                              </div>
                            </div>
                            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-500 mt-1">
                              <span>100%</span>
                              <span>0%</span>
                            </div>
                          </div>

                          {/* Action buttons */}
                          <div className="flex gap-2 pt-2">
                            <Button size="sm" variant="outline" className="flex-1 gap-2">
                              <Eye className="w-3 h-3" />
                              View Diff
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 gap-2">
                              <Download className="w-3 h-3" />
                              Download Report
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : comparisonResult === 'matching' ? (
                    <div className="animate-in fade-in duration-500">
                      {/* Success header */}
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 text-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg">Perfect Match</h3>
                              <p className="text-sm opacity-90">No visual changes detected</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">100%</div>
                            <div className="text-xs opacity-90">Similarity</div>
                          </div>
                        </div>
                      </div>

                      {/* Success content */}
                      <div className="p-6 text-center">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                        </div>
                        
                        <div className="space-y-2 mb-6">
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Visual Test Passed</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            The current UI matches the baseline perfectly. No visual regressions found.
                          </p>
                        </div>

                        {/* Success metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">0</div>
                            <div className="text-xs text-green-700 dark:text-green-300">Pixel Differences</div>
                          </div>
                          <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-3">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1920×1080</div>
                            <div className="text-xs text-blue-700 dark:text-blue-300">Resolution</div>
                          </div>
                          <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-3">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">2.1s</div>
                            <div className="text-xs text-purple-700 dark:text-purple-300">Processing Time</div>
                          </div>
                        </div>

                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="w-3 h-3 mr-2" />
                          Test Passed
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <div className="relative inline-block">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400 animate-pulse" />
                        </div>
                        <div className="absolute inset-0 w-16 h-16 bg-purple-200 dark:bg-purple-800/30 rounded-full animate-ping mx-auto"></div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Analyzing Visual Differences
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Comparing baseline and current screenshots pixel by pixel...
                      </p>
                      
                      {/* Progress indicator */}
                      <div className="w-full max-w-xs mx-auto">
                        <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-green-600" />
            Comparison Tools
          </CardTitle>
          <CardDescription>Popular libraries for visual comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <ImageIcon className="w-5 h-5 text-blue-600" />
                <Badge className="bg-blue-600">Python</Badge>
              </div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">PIL / Pillow</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Image processing library with ImageChops for pixel comparison
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-green-600" />
                <Badge className="bg-green-600">Java</Badge>
              </div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">BufferedImage</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Built-in Java image handling with pixel-level comparison
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-purple-600" />
                <Badge className="bg-purple-600">JavaScript</Badge>
              </div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm">pixelmatch</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Fast pixel-level image comparison library for Node.js
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitCompare className="w-5 h-5 text-purple-600" />
            Visual Comparison: Before vs After
          </CardTitle>
          <CardDescription>
            See how the enhanced Comparison Result section differs from the original
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20">
            <GitCompare className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Enhanced User Experience</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              The enhanced Comparison Result section provides clearer visual feedback, detailed metrics, and interactive elements for better understanding of visual differences.
            </AlertDescription>
          </Alert>

          {/* Side-by-side comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Original Version */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">1</span>
                </div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Original Version</h4>
                <Badge variant="outline" className="text-xs">Basic</Badge>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border-2 border-slate-200 dark:border-slate-700 p-4">
                <div className="text-center space-y-3">
                  <GitCompare className="w-12 h-12 text-slate-400 mx-auto" />
                  <Badge variant="secondary" className="mb-2">
                    <Eye className="w-3 h-3 mr-1" />
                    Visual Difference Detected
                  </Badge>
                  <h5 className="text-lg font-bold text-slate-700 dark:text-slate-300">2.3% Difference</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Visual changes detected between baseline and current
                  </p>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded">
                      <div className="text-slate-600 dark:text-slate-400">Baseline</div>
                      <div className="font-mono text-blue-600">baseline.png</div>
                    </div>
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded">
                      <div className="text-slate-600 dark:text-slate-400">Current</div>
                      <div className="font-mono text-green-600">current.png</div>
                    </div>
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded">
                      <div className="text-slate-600 dark:text-slate-400">Diff</div>
                      <div className="font-mono text-purple-600">diff.png</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <XCircle className="w-3 h-3 text-red-500" />
                  <span>Basic status display</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <XCircle className="w-3 h-3 text-red-500" />
                  <span>Limited visual feedback</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <XCircle className="w-3 h-3 text-red-500" />
                  <span>No detailed metrics</span>
                </div>
              </div>
            </div>

            {/* Enhanced Version */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">2</span>
                </div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Enhanced Version</h4>
                <Badge className="bg-purple-600 text-white text-xs">Innovative</Badge>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-purple-200 dark:border-purple-700 overflow-hidden shadow-lg">
                {/* Enhanced header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <AlertCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="font-bold text-sm">Visual Regression Detected</h5>
                        <p className="text-xs opacity-90">Changes found between baseline and current</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">2.3%</div>
                      <div className="text-xs opacity-90">Difference</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced content preview */}
                <div className="p-3 space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <div className="w-full h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg border-2 border-blue-300 dark:border-blue-600 flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-xs font-semibold mt-1">Baseline</p>
                    </div>
                    <div className="text-center">
                      <div className="w-full h-16 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg border-2 border-green-300 dark:border-green-600 flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <p className="text-xs font-semibold mt-1">Current</p>
                    </div>
                    <div className="text-center">
                      <div className="w-full h-16 bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900/30 dark:to-pink-800/30 rounded-lg border-2 border-purple-300 dark:border-purple-600 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-0.5">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-sm"></div>
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-sm"></div>
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-sm"></div>
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-sm"></div>
                        </div>
                      </div>
                      <p className="text-xs font-semibold mt-1">Difference</p>
                    </div>
                  </div>
                  
                  {/* Metrics preview */}
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>Similarity</span>
                      <span>97.7%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-1.5 rounded-full relative">
                        <div className="absolute right-[2.3%] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border border-slate-800 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-3 h-3" />
                  <span>Rich visual header with status</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-3 h-3" />
                  <span>Interactive image previews</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-3 h-3" />
                  <span>Detailed metrics & analysis</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-3 h-3" />
                  <span>Visual similarity indicator</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-3 h-3" />
                  <span>Action buttons for diff/report</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key improvements summary */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg p-4 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Key Improvements
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400">🎨</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-slate-900 dark:text-slate-100">Visual Design</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Gradient headers, color-coded status, and modern card layouts
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400">📊</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-slate-900 dark:text-slate-100">Detailed Metrics</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Pixel differences, severity levels, and similarity percentages
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400">🎯</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-slate-900 dark:text-slate-100">Interactive Elements</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Hover effects, animated indicators, and action buttons
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400">🔍</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-slate-900 dark:text-slate-100">Better UX</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Clearer status communication and intuitive visual feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-600" />
            Detailed Visual Changes: Layout, Colors & Text
          </CardTitle>
          <CardDescription>
            Clear examples showing specific layout, color, and text improvements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Layout Changes Example */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Layout className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Layout Changes</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Original Layout */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">Before</Badge>
                  <span className="text-xs text-slate-500">Simple vertical stack</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border-2 border-slate-200 dark:border-slate-700 p-4">
                  <div className="space-y-3">
                    <div className="text-center">
                      <GitCompare className="w-8 h-8 text-slate-400 mx-auto" />
                    </div>
                    <div className="text-center">
                      <Badge variant="secondary" className="text-xs">Status</Badge>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold">2.3% Difference</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-500">Description text</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-xs text-center p-2 bg-slate-100 dark:bg-slate-800 rounded">
                        File 1
                      </div>
                      <div className="text-xs text-center p-2 bg-slate-100 dark:bg-slate-800 rounded">
                        File 2
                      </div>
                      <div className="text-xs text-center p-2 bg-slate-100 dark:bg-slate-800 rounded">
                        File 3
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Layout */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600 text-white text-xs">After</Badge>
                  <span className="text-xs text-slate-500">Structured sections with hierarchy</span>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-blue-200 dark:border-blue-700 overflow-hidden shadow-lg">
                  {/* Header Section */}
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <AlertCircle className="w-3 h-3" />
                        </div>
                        <div>
                          <div className="text-xs font-bold">Title & Subtitle</div>
                          <div className="text-xs opacity-90">Descriptive text</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">2.3%</div>
                        <div className="text-xs opacity-90">Metric</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-3">
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="text-center">
                        <div className="w-full h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg border-2 border-blue-300 dark:border-blue-600 flex items-center justify-center">
                          <ImageIcon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="text-xs font-semibold mt-1">Label</div>
                      </div>
                      <div className="text-center">
                        <div className="w-full h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg border-2 border-green-300 dark:border-green-600 flex items-center justify-center">
                          <ImageIcon className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="text-xs font-semibold mt-1">Label</div>
                      </div>
                      <div className="text-center">
                        <div className="w-full h-12 bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900/30 dark:to-pink-800/30 rounded-lg border-2 border-purple-300 dark:border-purple-600 flex items-center justify-center">
                          <div className="grid grid-cols-2 gap-0.5">
                            <div className="w-1 h-1 bg-purple-600 rounded-sm"></div>
                            <div className="w-1 h-1 bg-pink-400 rounded-sm"></div>
                            <div className="w-1 h-1 bg-pink-400 rounded-sm"></div>
                            <div className="w-1 h-1 bg-purple-600 rounded-sm"></div>
                          </div>
                        </div>
                        <div className="text-xs font-semibold mt-1">Label</div>
                      </div>
                    </div>
                    
                    {/* Metrics Section */}
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-2">
                      <div className="text-xs font-semibold mb-1">Detailed Analysis</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">
                            <XCircle className="w-2 h-2 text-red-600" />
                          </div>
                          <div className="text-xs">Metric 1</div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center">
                            <Gauge className="w-2 h-2 text-orange-600" />
                          </div>
                          <div className="text-xs">Metric 2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Color Changes Example */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Palette className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Color Changes</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Original Colors */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">Before</Badge>
                  <span className="text-xs text-slate-500">Monochrome slate colors</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border-2 border-slate-200 dark:border-slate-700 p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">Status Badge:</span>
                      <Badge variant="secondary" className="text-xs">Default gray</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">Icon Color:</span>
                      <GitCompare className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">Text Color:</span>
                      <span className="text-xs text-slate-600">Slate gray</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">Background:</span>
                      <div className="w-16 h-6 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Colors */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-600 text-white text-xs">After</Badge>
                  <span className="text-xs text-slate-500">Rich semantic color palette</span>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg border-2 border-purple-200 dark:border-purple-700 p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">Status Badge:</span>
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs">Alert gradient</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">Icon Color:</span>
                      <AlertCircle className="w-4 h-4 text-orange-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">Text Color:</span>
                      <span className="text-xs text-white bg-gradient-to-r from-orange-500 to-red-500 px-2 py-1 rounded">White on gradient</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">Background:</span>
                      <div className="w-16 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Changes Example */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Type className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Text Changes</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Original Text */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">Before</Badge>
                  <span className="text-xs text-slate-500">Basic, minimal text</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border-2 border-slate-200 dark:border-slate-700 p-4">
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-700">2.3% Difference</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-slate-500">Visual changes detected</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-400">between baseline and current</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-xs">
                      <div className="text-center p-2">
                        <div className="text-slate-600">baseline.png</div>
                      </div>
                      <div className="text-center p-2">
                        <div className="text-slate-600">current.png</div>
                      </div>
                      <div className="text-center p-2">
                        <div className="text-slate-600">diff.png</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Text */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600 text-white text-xs">After</Badge>
                  <span className="text-xs text-slate-500">Descriptive, hierarchical text</span>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg border-2 border-green-200 dark:border-green-700 p-4">
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900">Visual Regression Detected</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-slate-600 font-medium">Changes found between baseline and current</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">2.3%</div>
                      <div className="text-xs text-slate-500">Difference</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-xs">
                      <div className="text-center p-2">
                        <div className="text-xs font-semibold text-slate-700">Baseline</div>
                        <div className="text-xs text-slate-500">Original reference</div>
                      </div>
                      <div className="text-center p-2">
                        <div className="text-xs font-semibold text-slate-700">Current</div>
                        <div className="text-xs text-slate-500">New screenshot</div>
                      </div>
                      <div className="text-center p-2">
                        <div className="text-xs font-semibold text-slate-700">Difference</div>
                        <div className="text-xs text-slate-500">Highlighted changes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary of Changes */}
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-lg p-4 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Summary of Visual Improvements
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h5 className="text-sm font-medium text-blue-900 dark:text-blue-100 flex items-center gap-2">
                  <Layout className="w-3 h-3" />
                  Layout
                </h5>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Added header section with status</li>
                  <li>• Structured content areas</li>
                  <li>• Visual hierarchy with sections</li>
                  <li>• Better spacing and alignment</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="text-sm font-medium text-purple-900 dark:text-purple-100 flex items-center gap-2">
                  <Palette className="w-3 h-3" />
                  Colors
                </h5>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Gradient backgrounds</li>
                  <li>• Semantic color coding</li>
                  <li>• Status-based colors</li>
                  <li>• Enhanced contrast</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="text-sm font-medium text-green-900 dark:text-green-100 flex items-center gap-2">
                  <Type className="w-3 h-3" />
                  Text
                </h5>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Descriptive headings</li>
                  <li>• Hierarchical text sizes</li>
                  <li>• Contextual descriptions</li>
                  <li>• Clear labels and metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Set Tolerance Threshold</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Allow small differences to avoid false positives from anti-aliasing
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Use Same Resolution</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ensure baseline and current screenshots have identical dimensions
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Ignore Dynamic Content</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Mask or exclude areas with timestamps, ads, or dynamic data
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Save Diff Images</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Store difference images for easy visual debugging
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            Common Issues & Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert className="border-red-200 dark:border-red-700">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <AlertTitle className="text-red-900 dark:text-red-100">False Positives from Dynamic Content</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Problem:</strong> Timestamps, ads, or animations cause constant differences<br/>
                <strong>Solution:</strong> Mask dynamic regions or use element screenshots for stable areas
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 dark:border-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Image Size Mismatch</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                <strong>Problem:</strong> Baseline and current screenshots have different dimensions<br/>
                <strong>Solution:</strong> Set fixed viewport size before capturing screenshots
              </AlertDescription>
            </Alert>

            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Anti-aliasing Differences</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>Problem:</strong> Minor pixel differences from font rendering or anti-aliasing<br/>
                <strong>Solution:</strong> Set appropriate tolerance threshold (e.g., 0.1-5%)
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default VisualComparison;

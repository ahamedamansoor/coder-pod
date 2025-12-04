'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Type, Sliders, Zap, Sparkles, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssVariableFontsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

// Variable font demo
const variableFontDemo = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Variable Fonts Demo</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #9f1239 0%, #881337 100%);
      }
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #ec4899;
      margin-bottom: 10px;
      text-align: center;
      font-variation-settings: 'wght' 900;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #f9a8d4;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
      font-variation-settings: 'wght' 400;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .demo-section {
      margin-bottom: 50px;
    }
    
    .demo-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 30px;
      color: #1e293b;
      font-variation-settings: 'wght' 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-title {
        color: #e2e8f0;
      }
    }
    
    .weight-samples {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .weight-sample {
      font-size: 32px;
      color: #1e293b;
      transition: all 0.3s;
    }
    
    .weight-sample:hover {
      color: #ec4899;
      transform: translateX(10px);
    }
    
    @media (prefers-color-scheme: dark) {
      .weight-sample {
        color: #e2e8f0;
      }
      .weight-sample:hover {
        color: #f9a8d4;
      }
    }
    
    .weight-label {
      font-size: 14px;
      color: #64748b;
      margin-left: 10px;
      font-variation-settings: 'wght' 400;
    }
    
    @media (prefers-color-scheme: dark) {
      .weight-label {
        color: #94a3b8;
      }
    }
    
    /* Different weights using variable font */
    .weight-100 { font-variation-settings: 'wght' 100; }
    .weight-200 { font-variation-settings: 'wght' 200; }
    .weight-300 { font-variation-settings: 'wght' 300; }
    .weight-400 { font-variation-settings: 'wght' 400; }
    .weight-500 { font-variation-settings: 'wght' 500; }
    .weight-600 { font-variation-settings: 'wght' 600; }
    .weight-700 { font-variation-settings: 'wght' 700; }
    .weight-800 { font-variation-settings: 'wght' 800; }
    .weight-900 { font-variation-settings: 'wght' 900; }
    
    .comparison {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    
    .comparison-card {
      padding: 20px;
      border-radius: 12px;
      background: #fef3c7;
      border: 2px solid #fbbf24;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .comparison-card {
        background: #451a03;
        border-color: #d97706;
      }
    }
    
    .comparison-card h3 {
      font-size: 14px;
      margin-bottom: 10px;
      color: #92400e;
      font-variation-settings: 'wght' 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .comparison-card h3 {
        color: #fbbf24;
      }
    }
    
    .file-size {
      font-size: 24px;
      font-weight: 700;
      color: #b45309;
      margin-bottom: 5px;
      font-variation-settings: 'wght' 700;
    }
    
    @media (prefers-color-scheme: dark) {
      .file-size {
        color: #fbbf24;
      }
    }
    
    .description {
      font-size: 12px;
      color: #78350f;
    }
    
    @media (prefers-color-scheme: dark) {
      .description {
        color: #fde68a;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✨ Variable Fonts</h1>
    <p class="subtitle">One font file with infinite variations</p>
    
    <div class="demo-section">
      <div class="demo-title">Weight Variations (100-900)</div>
      <div class="weight-samples">
        <div class="weight-sample weight-100">
          The quick brown fox jumps
          <span class="weight-label">weight: 100 (Thin)</span>
        </div>
        <div class="weight-sample weight-200">
          The quick brown fox jumps
          <span class="weight-label">weight: 200 (Extra Light)</span>
        </div>
        <div class="weight-sample weight-300">
          The quick brown fox jumps
          <span class="weight-label">weight: 300 (Light)</span>
        </div>
        <div class="weight-sample weight-400">
          The quick brown fox jumps
          <span class="weight-label">weight: 400 (Regular)</span>
        </div>
        <div class="weight-sample weight-500">
          The quick brown fox jumps
          <span class="weight-label">weight: 500 (Medium)</span>
        </div>
        <div class="weight-sample weight-600">
          The quick brown fox jumps
          <span class="weight-label">weight: 600 (Semi Bold)</span>
        </div>
        <div class="weight-sample weight-700">
          The quick brown fox jumps
          <span class="weight-label">weight: 700 (Bold)</span>
        </div>
        <div class="weight-sample weight-800">
          The quick brown fox jumps
          <span class="weight-label">weight: 800 (Extra Bold)</span>
        </div>
        <div class="weight-sample weight-900">
          The quick brown fox jumps
          <span class="weight-label">weight: 900 (Black)</span>
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <div class="demo-title">Why Variable Fonts Are Better</div>
      <div class="comparison">
        <div class="comparison-card">
          <h3>Traditional Fonts</h3>
          <div class="file-size">360 KB</div>
          <div class="description">9 separate files (100-900)</div>
        </div>
        <div class="comparison-card">
          <h3>Variable Font</h3>
          <div class="file-size">40 KB</div>
          <div class="description">1 file, infinite weights!</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Interactive weight slider
const interactiveSliderDemo = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Variable Font Interactive</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      padding: 40px 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #9f1239 0%, #881337 100%);
      }
    }
    
    .container {
      width: 100%;
      max-width: 800px;
      background: white;
      padding: 50px;
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    .demo-text {
      font-size: 72px;
      text-align: center;
      margin-bottom: 50px;
      color: #ec4899;
      font-variation-settings: 'wght' 400;
      transition: font-variation-settings 0.1s;
      line-height: 1.2;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-text {
        color: #f9a8d4;
      }
    }
    
    .controls {
      text-align: center;
    }
    
    .control-group {
      margin-bottom: 30px;
    }
    
    .control-label {
      display: block;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 15px;
      color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .control-label {
        color: #e2e8f0;
      }
    }
    
    .slider {
      width: 100%;
      height: 8px;
      border-radius: 4px;
      background: #f1f5f9;
      outline: none;
      -webkit-appearance: none;
    }
    
    @media (prefers-color-scheme: dark) {
      .slider {
        background: #334155;
      }
    }
    
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #ec4899;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .slider::-webkit-slider-thumb:hover {
      background: #db2777;
      transform: scale(1.2);
    }
    
    .slider::-moz-range-thumb {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #ec4899;
      cursor: pointer;
      border: none;
      transition: all 0.2s;
    }
    
    .slider::-moz-range-thumb:hover {
      background: #db2777;
      transform: scale(1.2);
    }
    
    .value-display {
      display: inline-block;
      min-width: 60px;
      padding: 8px 16px;
      background: #fef3c7;
      border-radius: 8px;
      font-weight: 700;
      color: #92400e;
      margin-top: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .value-display {
        background: #451a03;
        color: #fbbf24;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div id="demoText" class="demo-text">
      Variable<br>Fonts
    </div>
    
    <div class="controls">
      <div class="control-group">
        <label class="control-label">Font Weight</label>
        <input 
          type="range" 
          id="weightSlider" 
          class="slider" 
          min="100" 
          max="900" 
          value="400"
          step="1"
        >
        <div class="value-display" id="weightValue">400</div>
      </div>
    </div>
  </div>
  
  <script>
    const demoText = document.getElementById('demoText');
    const weightSlider = document.getElementById('weightSlider');
    const weightValue = document.getElementById('weightValue');
    
    weightSlider.addEventListener('input', (e) => {
      const weight = e.target.value;
      demoText.style.fontVariationSettings = \`'wght' \${weight}\`;
      weightValue.textContent = weight;
    });
  </script>
</body>
</html>`;

// Advanced variable font axes
const advancedAxesDemo = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Variable Font Axes</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #9f1239 0%, #881337 100%);
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #ec4899;
      margin-bottom: 10px;
      text-align: center;
      font-variation-settings: 'wght' 900;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #f9a8d4;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .axes-grid {
      display: grid;
      gap: 30px;
    }
    
    .axis-card {
      padding: 30px;
      border-radius: 12px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border: 2px solid #fbbf24;
    }
    
    @media (prefers-color-scheme: dark) {
      .axis-card {
        background: linear-gradient(135deg, #451a03 0%, #78350f 100%);
        border-color: #d97706;
      }
    }
    
    .axis-card h3 {
      font-size: 18px;
      margin-bottom: 10px;
      color: #92400e;
      font-variation-settings: 'wght' 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .axis-card h3 {
        color: #fbbf24;
      }
    }
    
    .axis-card p {
      font-size: 14px;
      color: #78350f;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .axis-card p {
        color: #fde68a;
      }
    }
    
    .axis-demo {
      font-size: 36px;
      color: #1e293b;
      padding: 20px;
      background: white;
      border-radius: 8px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .axis-demo {
        background: #0f172a;
        color: #e2e8f0;
      }
    }
    
    .code-sample {
      margin-top: 15px;
      padding: 10px 15px;
      background: rgba(255,255,255,0.5);
      border-radius: 6px;
      font-family: monospace;
      font-size: 13px;
      color: #92400e;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-sample {
        background: rgba(0,0,0,0.3);
        color: #fbbf24;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Variable Font Axes</h1>
    <p class="subtitle">Common variation axes in variable fonts</p>
    
    <div class="axes-grid">
      <div class="axis-card">
        <h3>Weight (wght)</h3>
        <p>Control the thickness of characters</p>
        <div class="axis-demo" style="font-variation-settings: 'wght' 100;">
          Thin (100)
        </div>
        <div class="axis-demo" style="font-variation-settings: 'wght' 900; margin-top: 10px;">
          Black (900)
        </div>
        <div class="code-sample">font-variation-settings: 'wght' 500;</div>
      </div>
      
      <div class="axis-card">
        <h3>Width (wdth)</h3>
        <p>Make text narrower or wider</p>
        <div class="axis-demo">
          Normal Width Text
        </div>
        <div class="code-sample">font-variation-settings: 'wdth' 75;</div>
      </div>
      
      <div class="axis-card">
        <h3>Slant (slnt)</h3>
        <p>Control the angle of characters</p>
        <div class="axis-demo">
          Upright vs Slanted
        </div>
        <div class="code-sample">font-variation-settings: 'slnt' -10;</div>
      </div>
      
      <div class="axis-card">
        <h3>Optical Size (opsz)</h3>
        <p>Optimize for different display sizes</p>
        <div class="axis-demo">
          Optimized Typography
        </div>
        <div class="code-sample">font-variation-settings: 'opsz' 14;</div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function CssVariableFonts({ onOpenWebPlayground }: CssVariableFontsProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Sliders}
        category="CSS · Typography"
        title="Variable Fonts"
        description="One font file with infinite weight, width, and style variations"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            What are Variable Fonts?
          </CardTitle>
          <CardDescription>
            The future of web typography
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Variable fonts are a <strong className="text-foreground">revolutionary font technology</strong> that lets you use 
            hundreds of font styles from a single file. Instead of loading separate files for Regular, Bold, Light, etc., 
            variable fonts give you <strong className="text-foreground">infinite variations</strong> with smooth transitions!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <Zap className="h-6 w-6 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-semibold mb-2">Smaller File Size</h4>
              <p className="text-sm text-muted-foreground">
                One 40KB file replaces nine 40KB files = 90% smaller!
              </p>
            </div>
            
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <Sliders className="h-6 w-6 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-semibold mb-2">Infinite Control</h4>
              <p className="text-sm text-muted-foreground">
                Adjust weight from 100 to 900 with any value in between
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Font Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Type className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            1. Weight Variations
          </CardTitle>
          <CardDescription>
            See all weight variations from a single font file
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={variableFontDemo}
            title="Variable Font Weight Demo"
            colorTheme="pink"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3">💡 Benefits:</h4>
            <ul className="space-y-2 text-sm text-pink-800 dark:text-pink-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>One file</strong> instead of 9 separate font files</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Smooth animations</strong> between font weights</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Fine control</strong> - use weight 450, 550, any value!</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-rose-500/10 rounded-lg">
              <Sliders className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            </div>
            2. Interactive Weight Control
          </CardTitle>
          <CardDescription>
            Adjust font weight in real-time with a slider
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={interactiveSliderDemo}
            title="Interactive Variable Font"
            colorTheme="rose"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Try It Out!</AlertTitle>
            <AlertDescription>
              Move the slider to see smooth font weight transitions. Variable fonts let you animate between weights 
              for eye-catching effects that were impossible with traditional fonts!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Advanced Axes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Zap className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            3. Variable Font Axes
          </CardTitle>
          <CardDescription>
            Common variation axes you can control
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={advancedAxesDemo}
            title="Variable Font Axes"
            colorTheme="pink"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Variable font syntax
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">font-variation-settings: 'wght' 500;</code>
              <p className="text-sm text-muted-foreground mt-1">Set font weight to 500</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">font-variation-settings: 'wght' 700, 'wdth' 80;</code>
              <p className="text-sm text-muted-foreground mt-1">Control multiple axes at once</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">font-weight: 450;</code>
              <p className="text-sm text-muted-foreground mt-1">Simpler syntax for weight axis</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use popular variable fonts:</strong> Inter, Roboto Flex, Recursive</li>
            <li><strong>Provide fallbacks:</strong> Include regular font-weight as backup</li>
            <li><strong>Optimize loading:</strong> Use font-display: swap</li>
            <li><strong>Test rendering:</strong> Check on different browsers and devices</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Variable fonts work in all modern browsers! Supported in Chrome 62+, Firefox 62+, Safari 11+, and Edge 79+. 
          Always provide fallback fonts for older browsers.
        </AlertDescription>
      </Alert>
    </div>
  );
}

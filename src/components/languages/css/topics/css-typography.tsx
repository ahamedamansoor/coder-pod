'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Type, Ruler, AlignLeft, Bold, Sparkles, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssTypographyProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

// Font families demo
const fontFamiliesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Font Families</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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
    
    .font-grid {
      display: grid;
      gap: 30px;
    }
    
    .font-card {
      padding: 30px;
      border-radius: 12px;
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      transition: transform 0.2s;
    }
    
    .font-card:hover {
      transform: translateY(-5px);
    }
    
    @media (prefers-color-scheme: dark) {
      .font-card {
        background: #0f172a;
        border-color: #334155;
      }
    }
    
    .font-label {
      font-size: 14px;
      font-weight: 600;
      color: #ec4899;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .font-label {
        color: #f9a8d4;
      }
    }
    
    .font-sample {
      font-size: 32px;
      margin-bottom: 15px;
      color: #1e293b;
      line-height: 1.4;
    }
    
    @media (prefers-color-scheme: dark) {
      .font-sample {
        color: #e2e8f0;
      }
    }
    
    .font-desc {
      font-size: 14px;
      color: #64748b;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .font-desc {
        color: #94a3b8;
      }
    }
    
    /* Font families */
    .serif { font-family: Georgia, 'Times New Roman', serif; }
    .sans-serif { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    .monospace { font-family: 'Courier New', Consolas, monospace; }
    .cursive { font-family: 'Brush Script MT', cursive; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔤 Font Families</h1>
    <p class="subtitle">Different font types for different purposes</p>
    
    <div class="font-grid">
      <div class="font-card">
        <div class="font-label">Serif</div>
        <div class="font-sample serif">
          The quick brown fox jumps over the lazy dog
        </div>
        <div class="font-desc">
          Traditional fonts with decorative strokes. Great for long-form content, books, and articles. 
          Examples: Georgia, Times New Roman, Garamond
        </div>
      </div>
      
      <div class="font-card">
        <div class="font-label">Sans-serif</div>
        <div class="font-sample sans-serif">
          The quick brown fox jumps over the lazy dog
        </div>
        <div class="font-desc">
          Clean, modern fonts without decorative strokes. Perfect for web content, UI elements, and screens. 
          Examples: Helvetica, Arial, Roboto
        </div>
      </div>
      
      <div class="font-card">
        <div class="font-label">Monospace</div>
        <div class="font-sample monospace">
          The quick brown fox jumps
        </div>
        <div class="font-desc">
          Fixed-width fonts where each character takes equal space. Essential for code and technical content. 
          Examples: Courier New, Consolas, Monaco
        </div>
      </div>
      
      <div class="font-card">
        <div class="font-label">Cursive</div>
        <div class="font-sample cursive">
          The quick brown fox jumps
        </div>
        <div class="font-desc">
          Script-like fonts mimicking handwriting. Use sparingly for decorative headings and signatures. 
          Examples: Brush Script, Comic Sans (use carefully!)
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Font sizes and weights demo
const fontSizesWeightsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Font Sizes & Weights</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f1f5f9;
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
    }
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
    }
    
    h1 {
      color: #ec4899;
      margin-bottom: 10px;
      text-align: center;
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
    
    .section {
      background: white;
      padding: 40px;
      border-radius: 16px;
      margin-bottom: 30px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
      .section {
        background: #1e293b;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
      }
    }
    
    .section-title {
      font-size: 22px;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 25px;
    }
    
    @media (prefers-color-scheme: dark) {
      .section-title {
        color: #e2e8f0;
      }
    }
    
    .size-grid {
      display: grid;
      gap: 20px;
    }
    
    .size-sample {
      color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .size-sample {
        color: #e2e8f0;
      }
    }
    
    .size-label {
      display: inline-block;
      font-size: 13px;
      color: #64748b;
      margin-left: 15px;
      font-weight: 500;
    }
    
    @media (prefers-color-scheme: dark) {
      .size-label {
        color: #94a3b8;
      }
    }
    
    /* Font sizes */
    .size-12 { font-size: 12px; }
    .size-16 { font-size: 16px; }
    .size-20 { font-size: 20px; }
    .size-24 { font-size: 24px; }
    .size-32 { font-size: 32px; }
    .size-48 { font-size: 48px; }
    
    /* Font weights */
    .weight-grid {
      display: grid;
      gap: 15px;
    }
    
    .weight-sample {
      font-size: 28px;
      color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .weight-sample {
        color: #e2e8f0;
      }
    }
    
    .weight-100 { font-weight: 100; }
    .weight-300 { font-weight: 300; }
    .weight-400 { font-weight: 400; }
    .weight-500 { font-weight: 500; }
    .weight-600 { font-weight: 600; }
    .weight-700 { font-weight: 700; }
    .weight-900 { font-weight: 900; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📏 Font Sizes & Weights</h1>
    <p class="subtitle">Control text size and thickness</p>
    
    <div class="section">
      <div class="section-title">Font Sizes</div>
      <div class="size-grid">
        <div class="size-sample size-12">
          The quick brown fox jumps <span class="size-label">12px - Small text</span>
        </div>
        <div class="size-sample size-16">
          The quick brown fox jumps <span class="size-label">16px - Body text</span>
        </div>
        <div class="size-sample size-20">
          The quick brown fox jumps <span class="size-label">20px - Large body</span>
        </div>
        <div class="size-sample size-24">
          The quick brown fox <span class="size-label">24px - Subheadings</span>
        </div>
        <div class="size-sample size-32">
          The quick brown <span class="size-label">32px - Headings</span>
        </div>
        <div class="size-sample size-48">
          Typography <span class="size-label">48px - Hero text</span>
        </div>
      </div>
    </div>
    
    <div class="section">
      <div class="section-title">Font Weights</div>
      <div class="weight-grid">
        <div class="weight-sample weight-100">
          Typography <span class="size-label">100 - Thin</span>
        </div>
        <div class="weight-sample weight-300">
          Typography <span class="size-label">300 - Light</span>
        </div>
        <div class="weight-sample weight-400">
          Typography <span class="size-label">400 - Regular</span>
        </div>
        <div class="weight-sample weight-500">
          Typography <span class="size-label">500 - Medium</span>
        </div>
        <div class="weight-sample weight-600">
          Typography <span class="size-label">600 - Semibold</span>
        </div>
        <div class="weight-sample weight-700">
          Typography <span class="size-label">700 - Bold</span>
        </div>
        <div class="weight-sample weight-900">
          Typography <span class="size-label">900 - Black</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Text styling demo
const textStylingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Styling</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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
    
    .style-grid {
      display: grid;
      gap: 25px;
    }
    
    .style-example {
      padding: 25px;
      background: #f8fafc;
      border-radius: 12px;
      border-left: 4px solid #ec4899;
    }
    
    @media (prefers-color-scheme: dark) {
      .style-example {
        background: #0f172a;
        border-left-color: #f9a8d4;
      }
    }
    
    .style-label {
      font-size: 14px;
      font-weight: 600;
      color: #ec4899;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .style-label {
        color: #f9a8d4;
      }
    }
    
    .style-demo {
      font-size: 20px;
      color: #1e293b;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .style-demo {
        color: #e2e8f0;
      }
    }
    
    .code-hint {
      font-size: 13px;
      color: #64748b;
      font-family: monospace;
      margin-top: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-hint {
        color: #94a3b8;
      }
    }
    
    /* Text styles */
    .uppercase { text-transform: uppercase; }
    .lowercase { text-transform: lowercase; }
    .capitalize { text-transform: capitalize; }
    .italic { font-style: italic; }
    .underline { text-decoration: underline; }
    .line-through { text-decoration: line-through; }
    .letter-spacing { letter-spacing: 2px; }
    .line-height { line-height: 2; }
  </style>
</head>
<body>
  <div class="container">
    <h1>✨ Text Styling</h1>
    <p class="subtitle">Transform and decorate your text</p>
    
    <div class="style-grid">
      <div class="style-example">
        <div class="style-label">Uppercase</div>
        <div class="style-demo uppercase">
          The quick brown fox jumps over the lazy dog
        </div>
        <div class="code-hint">text-transform: uppercase;</div>
      </div>
      
      <div class="style-example">
        <div class="style-label">Lowercase</div>
        <div class="style-demo lowercase">
          THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
        </div>
        <div class="code-hint">text-transform: lowercase;</div>
      </div>
      
      <div class="style-example">
        <div class="style-label">Capitalize</div>
        <div class="style-demo capitalize">
          the quick brown fox jumps over the lazy dog
        </div>
        <div class="code-hint">text-transform: capitalize;</div>
      </div>
      
      <div class="style-example">
        <div class="style-label">Italic</div>
        <div class="style-demo italic">
          The quick brown fox jumps over the lazy dog
        </div>
        <div class="code-hint">font-style: italic;</div>
      </div>
      
      <div class="style-example">
        <div class="style-label">Underline</div>
        <div class="style-demo underline">
          The quick brown fox jumps over the lazy dog
        </div>
        <div class="code-hint">text-decoration: underline;</div>
      </div>
      
      <div class="style-example">
        <div class="style-label">Line Through</div>
        <div class="style-demo line-through">
          The quick brown fox jumps over the lazy dog
        </div>
        <div class="code-hint">text-decoration: line-through;</div>
      </div>
      
      <div class="style-example">
        <div class="style-label">Letter Spacing</div>
        <div class="style-demo letter-spacing">
          The quick brown fox
        </div>
        <div class="code-hint">letter-spacing: 2px;</div>
      </div>
      
      <div class="style-example">
        <div class="style-label">Line Height</div>
        <div class="style-demo line-height">
          The quick brown fox jumps over the lazy dog and then comes back to jump again
        </div>
        <div class="code-hint">line-height: 2;</div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function CssTypography({ onOpenWebPlayground }: CssTypographyProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Type}
        category="CSS · Styling Basics"
        title="Typography"
        description="Master fonts, sizes, weights, and text styling for beautiful readable content"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            What is Typography?
          </CardTitle>
          <CardDescription>
            The art and technique of styling text
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Typography is <strong className="text-foreground">how your text looks</strong> - the fonts you choose, the size, 
            weight, spacing, and decoration. Good typography makes content easy to read and visually appealing. CSS gives you 
            complete control over every aspect of your text!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <Type className="h-6 w-6 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-semibold mb-2">Font Families</h4>
              <p className="text-sm text-muted-foreground">
                Choose between serif, sans-serif, monospace, and cursive fonts
              </p>
            </div>
            
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <Ruler className="h-6 w-6 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-semibold mb-2">Size & Weight</h4>
              <p className="text-sm text-muted-foreground">
                Control how big and how bold your text appears
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Font Families */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Type className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            1. Font Families
          </CardTitle>
          <CardDescription>
            Different types of fonts for different purposes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={fontFamiliesExample}
            title="Font Family Examples"
            colorTheme="pink"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3">💡 Choosing Fonts:</h4>
            <ul className="space-y-2 text-sm text-pink-800 dark:text-pink-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Serif:</strong> Best for long-form content, formal documents</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Sans-serif:</strong> Perfect for UI, headings, modern websites</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Monospace:</strong> Essential for code blocks and technical content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Always provide fallbacks:</strong> List multiple fonts in order</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Font Sizes & Weights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-rose-500/10 rounded-lg">
              <Ruler className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            </div>
            2. Font Sizes & Weights
          </CardTitle>
          <CardDescription>
            Control text size and thickness
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={fontSizesWeightsExample}
            title="Sizes & Weights Demo"
            colorTheme="rose"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Size Units</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                <strong>px:</strong> Fixed size (16px always 16px)<br />
                <strong>em:</strong> Relative to parent (1em = parent's font size)<br />
                <strong>rem:</strong> Relative to root (1rem = 16px by default)<br />
                <strong>%:</strong> Percentage of parent font size
              </p>
              <p className="text-sm">
                💡 Use <code className="px-2 py-1 bg-muted rounded">rem</code> for most text - it's responsive and accessible!
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Text Styling */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Bold className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            3. Text Styling & Transform
          </CardTitle>
          <CardDescription>
            Decorate and transform your text
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={textStylingExample}
            title="Text Styling Options"
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
            Common typography properties
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">font-family: Arial, sans-serif;</code>
              <p className="text-sm text-muted-foreground mt-1">Set font with fallbacks</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">font-size: 16px;</code>
              <p className="text-sm text-muted-foreground mt-1">Set text size (use rem for responsive)</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">font-weight: 700;</code>
              <p className="text-sm text-muted-foreground mt-1">Set boldness (100-900)</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">line-height: 1.6;</code>
              <p className="text-sm text-muted-foreground mt-1">Set space between lines</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">letter-spacing: 1px;</code>
              <p className="text-sm text-muted-foreground mt-1">Add space between letters</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">text-transform: uppercase;</code>
              <p className="text-sm text-muted-foreground mt-1">Transform text case</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Typography Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Readable size:</strong> Body text should be at least 16px</li>
            <li><strong>Line height:</strong> Use 1.5-1.6 for body text readability</li>
            <li><strong>Limit fonts:</strong> Use 2-3 font families max per site</li>
            <li><strong>Contrast:</strong> Ensure text color contrasts well with background</li>
            <li><strong>Responsive:</strong> Use rem/em units for scalable text</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          All typography properties work perfectly in all modern browsers! Font families, sizes, weights, and text decorations have universal support.
        </AlertDescription>
      </Alert>
    </div>
  );
}

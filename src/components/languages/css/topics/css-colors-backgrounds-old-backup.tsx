'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Palette, Droplet, Eye, Sparkles, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssColorsBackgroundsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

// Basic colors example
const basicColorsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Colors</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #9a3412 0%, #7c2d12 100%);
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
      color: #f97316;
      margin-bottom: 10px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    
    .color-box {
      padding: 30px 20px;
      border-radius: 12px;
      text-align: center;
      font-weight: 600;
      transition: transform 0.2s;
      cursor: pointer;
    }
    
    .color-box:hover {
      transform: translateY(-5px);
    }
    
    /* Named Colors */
    .box-named {
      background: tomato;
      color: white;
    }
    
    /* Hex Colors */
    .box-hex {
      background: #3b82f6;
      color: white;
    }
    
    /* RGB Colors */
    .box-rgb {
      background: rgb(16, 185, 129);
      color: white;
    }
    
    /* RGBA (with transparency) */
    .box-rgba {
      background: rgba(168, 85, 247, 0.8);
      color: white;
    }
    
    .code-label {
      font-size: 12px;
      margin-top: 8px;
      opacity: 0.9;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 CSS Color Formats</h1>
    <p class="subtitle">Different ways to define colors</p>
    
    <div class="color-grid">
      <div class="color-box box-named">
        Named Color
        <div class="code-label">tomato</div>
      </div>
      
      <div class="color-box box-hex">
        Hex Color
        <div class="code-label">#3b82f6</div>
      </div>
      
      <div class="color-box box-rgb">
        RGB Color
        <div class="code-label">rgb(16, 185, 129)</div>
      </div>
      
      <div class="color-box box-rgba">
        RGBA (transparent)
        <div class="code-label">rgba(168, 85, 247, 0.8)</div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Background patterns example
const backgroundPatternsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Patterns</title>
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
      max-width: 1000px;
      margin: 0 auto;
    }
    
    h1 {
      color: #f97316;
      margin-bottom: 10px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
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
    
    .pattern-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .pattern-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    
    .pattern-card:hover {
      transform: translateY(-5px);
    }
    
    @media (prefers-color-scheme: dark) {
      .pattern-card {
        background: #1e293b;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
      }
    }
    
    .pattern-preview {
      height: 200px;
      position: relative;
    }
    
    .pattern-info {
      padding: 20px;
    }
    
    .pattern-info h3 {
      color: #1e293b;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .pattern-info h3 {
        color: #e2e8f0;
      }
    }
    
    .pattern-info code {
      display: block;
      background: #f1f5f9;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 12px;
      margin-top: 10px;
      color: #f97316;
    }
    
    @media (prefers-color-scheme: dark) {
      .pattern-info code {
        background: #0f172a;
        color: #fb923c;
      }
    }
    
    /* Solid Color */
    .bg-solid {
      background-color: #3b82f6;
    }
    
    /* Image Background */
    .bg-image {
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect fill="%2310b981" width="80" height="80"/><circle fill="%23059669" cx="40" cy="40" r="20"/></svg>');
      background-size: 80px 80px;
    }
    
    /* Repeating Pattern */
    .bg-pattern {
      background-image: repeating-linear-gradient(
        45deg,
        #f97316,
        #f97316 10px,
        #fb923c 10px,
        #fb923c 20px
      );
    }
    
    /* Multiple Backgrounds */
    .bg-multiple {
      background-image: 
        radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%);
      background-color: #fef3c7;
    }
    
    @media (prefers-color-scheme: dark) {
      .bg-multiple {
        background-color: #451a03;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🖼️ Background Patterns</h1>
    <p class="subtitle">Different ways to style backgrounds</p>
    
    <div class="pattern-grid">
      <div class="pattern-card">
        <div class="pattern-preview bg-solid"></div>
        <div class="pattern-info">
          <h3>Solid Color</h3>
          <code>background-color: #3b82f6;</code>
        </div>
      </div>
      
      <div class="pattern-card">
        <div class="pattern-preview bg-image"></div>
        <div class="pattern-info">
          <h3>Image Pattern</h3>
          <code>background-image: url(...);</code>
        </div>
      </div>
      
      <div class="pattern-card">
        <div class="pattern-preview bg-pattern"></div>
        <div class="pattern-info">
          <h3>Repeating Pattern</h3>
          <code>repeating-linear-gradient(...)</code>
        </div>
      </div>
      
      <div class="pattern-card">
        <div class="pattern-preview bg-multiple"></div>
        <div class="pattern-info">
          <h3>Multiple Backgrounds</h3>
          <code>background-image: ..., ...;</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Background properties example
const backgroundPropertiesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Properties</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #9a3412 0%, #7c2d12 100%);
      }
    }
    
    .container {
      max-width: 1100px;
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
      color: #f97316;
      margin-bottom: 10px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
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
    
    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    
    .demo-box {
      border: 3px solid #e2e8f0;
      border-radius: 12px;
      overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-box {
        border-color: #334155;
      }
    }
    
    .demo-preview {
      height: 200px;
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%233b82f6" width="200" height="200"/><circle fill="%23fff" cx="100" cy="100" r="50"/><text x="100" y="110" text-anchor="middle" fill="%233b82f6" font-size="24" font-family="Arial">CSS</text></svg>');
    }
    
    .demo-label {
      padding: 15px;
      background: #f8fafc;
      border-top: 2px solid #e2e8f0;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-label {
        background: #0f172a;
        border-top-color: #334155;
      }
    }
    
    .demo-label h3 {
      color: #1e293b;
      font-size: 16px;
      margin-bottom: 5px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-label h3 {
        color: #e2e8f0;
      }
    }
    
    .demo-label code {
      color: #f97316;
      font-size: 13px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-label code {
        color: #fb923c;
      }
    }
    
    /* Cover */
    .bg-cover {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    /* Contain */
    .bg-contain {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    /* Repeat */
    .bg-repeat {
      background-size: 80px 80px;
      background-repeat: repeat;
    }
    
    /* Fixed */
    .bg-fixed {
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚙️ Background Properties</h1>
    <p class="subtitle">Control how backgrounds display</p>
    
    <div class="demo-grid">
      <div class="demo-box">
        <div class="demo-preview bg-cover"></div>
        <div class="demo-label">
          <h3>Cover</h3>
          <code>background-size: cover;</code>
        </div>
      </div>
      
      <div class="demo-box">
        <div class="demo-preview bg-contain"></div>
        <div class="demo-label">
          <h3>Contain</h3>
          <code>background-size: contain;</code>
        </div>
      </div>
      
      <div class="demo-box">
        <div class="demo-preview bg-repeat"></div>
        <div class="demo-label">
          <h3>Repeat</h3>
          <code>background-repeat: repeat;</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function CssColorsBackgrounds({ onOpenWebPlayground }: CssColorsBackgroundsProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Palette}
        category="CSS · Colors & Design"
        title="Colors & Backgrounds"
        description="Learn how to add colors and background styles to make your websites beautiful"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            What are Colors & Backgrounds?
          </CardTitle>
          <CardDescription>
            Make your website look amazing with colors and backgrounds
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Colors and backgrounds are like <strong className="text-foreground">paint and wallpaper</strong> for your website. 
            They make your content look beautiful and help organize information visually. CSS gives you many ways to add colors 
            and create stunning backgrounds!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <Palette className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-semibold mb-2">Text Colors</h4>
              <p className="text-sm text-muted-foreground">
                Change the color of text to make it stand out or match your design theme
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <Droplet className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-semibold mb-2">Background Colors</h4>
              <p className="text-sm text-muted-foreground">
                Add solid colors, patterns, or images behind your content
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Colors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Palette className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            1. Color Formats
          </CardTitle>
          <CardDescription>
            Different ways to write colors in CSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicColorsExample}
            title="CSS Color Formats"
            colorTheme="orange"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">🎨 Color Format Options:</h4>
            <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Named Colors:</strong> Simple names like "red", "blue", "tomato"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Hex Codes:</strong> 6-digit codes like #3b82f6 (most common)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>RGB:</strong> Red-Green-Blue values: rgb(59, 130, 246)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>RGBA:</strong> RGB + transparency: rgba(59, 130, 246, 0.5)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Background Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Eye className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            2. Background Patterns
          </CardTitle>
          <CardDescription>
            Create beautiful backgrounds with colors, images, and patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={backgroundPatternsExample}
            title="Background Patterns"
            colorTheme="amber"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Background Tips</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Solid colors</strong> are fastest to load</li>
                <li><strong>Gradients</strong> create smooth color transitions</li>
                <li><strong>Images</strong> can make backgrounds more interesting</li>
                <li>You can <strong>layer multiple backgrounds</strong> for complex effects</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Background Properties */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Droplet className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            3. Background Properties
          </CardTitle>
          <CardDescription>
            Control how background images display
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={backgroundPropertiesExample}
            title="Background Properties"
            colorTheme="orange"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Common color and background properties
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">color: #3b82f6;</code>
              <p className="text-sm text-muted-foreground mt-1">Changes text color</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">background-color: #f97316;</code>
              <p className="text-sm text-muted-foreground mt-1">Sets solid background color</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">background-image: url('image.jpg');</code>
              <p className="text-sm text-muted-foreground mt-1">Adds background image</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">background-size: cover;</code>
              <p className="text-sm text-muted-foreground mt-1">Makes image fill entire area</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">background-position: center;</code>
              <p className="text-sm text-muted-foreground mt-1">Centers the background image</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">background-repeat: no-repeat;</code>
              <p className="text-sm text-muted-foreground mt-1">Shows image only once</p>
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
            <li><strong>Contrast:</strong> Ensure text is readable on backgrounds</li>
            <li><strong>Performance:</strong> Optimize images before using as backgrounds</li>
            <li><strong>Accessibility:</strong> Don't rely on color alone to convey information</li>
            <li><strong>Mobile:</strong> Test backgrounds on small screens</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          All color formats and background properties are supported in all modern browsers. RGBA and multiple backgrounds work perfectly everywhere!
        </AlertDescription>
      </Alert>
    </div>
  );
}

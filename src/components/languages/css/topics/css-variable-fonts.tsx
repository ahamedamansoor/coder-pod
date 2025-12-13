'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Type, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Sliders, Zap
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssVariableFontsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssVariableFonts({ onOpenWebPlayground }: CssVariableFontsProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Type}
        category="CSS · Styling Basics"
        title="Variable Fonts"
        description="One font file with infinite design possibilities"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Type className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Variable Fonts</CardTitle>
              <CardDescription className="text-base">Adjustable typography with font-variation-settings</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Variable Fonts = Infinite Variations! ✨</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Instead of loading multiple font files (Regular, Bold, Italic), variable fonts contain 
              <strong> all variations</strong> in <strong>one file</strong>! Adjust weight, width, slant, 
              and custom axes smoothly with CSS.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Traditional vs Variable Fonts
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <Badge className="bg-red-600 text-white mb-2">❌ Traditional</Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Multiple files (Regular.woff, Bold.woff, etc.)<br />
                  • ~100KB × 6 styles = 600KB<br />
                  • Fixed weights (400, 700)<br />
                  • More HTTP requests
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <Badge className="bg-green-600 text-white mb-2">✅ Variable</Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • One file (Variable.woff2)<br />
                  • ~150KB total<br />
                  • Any weight (100-900)<br />
                  • Smooth animations!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sliders className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Standard Axes
          </CardTitle>
          <CardDescription>5 registered variation axes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                axis: 'wght',
                name: 'Weight',
                range: '100-900',
                property: 'font-weight',
                example: 'font-weight: 350;',
                color: 'blue'
              },
              {
                axis: 'wdth',
                name: 'Width',
                range: '50-200',
                property: 'font-stretch',
                example: 'font-stretch: 115%;',
                color: 'green'
              },
              {
                axis: 'slnt',
                name: 'Slant',
                range: '-10 to 0',
                property: 'font-style: oblique',
                example: 'font-style: oblique 10deg;',
                color: 'purple'
              },
              {
                axis: 'ital',
                name: 'Italic',
                range: '0 or 1',
                property: 'font-style: italic',
                example: 'font-style: italic;',
                color: 'pink'
              },
              {
                axis: 'opsz',
                name: 'Optical Size',
                range: '6-72',
                property: 'font-optical-sizing',
                example: 'font-optical-sizing: auto;',
                color: 'orange'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge className={`bg-${item.color}-600 text-white text-lg`}>{item.axis}</Badge>
                    <span className="font-bold">{item.name}</span>
                  </div>
                  <span className="text-xs font-mono">{item.range}</span>
                </div>
                <p className="text-sm mb-2">CSS Property: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{item.property}</code></p>
                <div className={`bg-${item.color}-900 dark:bg-${item.color}-950 p-3 rounded-lg`}>
                  <code className={`text-sm text-${item.color}-100`}>
                    {item.example}
                  </code>
                </div>
              </div>
            ))}
          </div>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Pro Tip!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Use standard CSS properties like <code>font-weight</code> when available - they're easier to read and maintain!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            font-variation-settings
          </CardTitle>
          <CardDescription>Low-level control over variations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            For custom axes or fine-grained control, use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">font-variation-settings</code>:
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-2 border-indigo-300 dark:border-indigo-700">
            <h3 className="font-bold text-lg text-indigo-900 dark:text-indigo-100 mb-3">
              Syntax & Examples
            </h3>
            <div className="bg-indigo-900 dark:bg-indigo-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-indigo-100 block">
{`/* Single axis */
font-variation-settings: 'wght' 650;

/* Multiple axes */
font-variation-settings: 
  'wght' 500,
  'wdth' 120,
  'slnt' -5;

/* Custom axes (font-specific) */
font-variation-settings: 
  'wght' 600,
  'GRAD' 150;  /* Custom gradient axis */`}
              </code>
            </div>
            <p className="text-sm text-indigo-800 dark:text-indigo-200">
              ⚠️ Axis names must be in <strong>quotes</strong> and exactly 4 characters!
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Type className="w-6 h-6 text-green-600 dark:text-green-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>See variable fonts in action</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      text-align: center;
      color: #667eea;
      margin-bottom: 40px;
      font-weight: 700;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .demo-section {
      margin-bottom: 40px;
    }
    
    .label {
      font-weight: 600;
      color: #667eea;
      margin-bottom: 15px;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #a78bfa;
      }
    }
    
    .demo-text {
      font-size: 48px;
      line-height: 1.3;
      margin-bottom: 20px;
      text-align: center;
    }
    
    /* Weight variations */
    .weight-100 { font-weight: 100; }
    .weight-300 { font-weight: 300; }
    .weight-500 { font-weight: 500; }
    .weight-700 { font-weight: 700; }
    .weight-900 { font-weight: 900; }
    
    /* Custom intermediate weight */
    .weight-450 { font-weight: 450; }
    .weight-650 { font-weight: 650; }
    
    /* Animated weight */
    @keyframes weight-pulse {
      0%, 100% { font-weight: 300; }
      50% { font-weight: 900; }
    }
    
    .animated {
      animation: weight-pulse 3s ease-in-out infinite;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    
    .weight-card {
      text-align: center;
      padding: 20px;
      background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
      border-radius: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .weight-card {
        background: linear-gradient(135deg, #374151, #4b5563);
      }
    }
    
    .weight-value {
      font-size: 12px;
      color: #6b7280;
      margin-top: 5px;
    }
    
    @media (prefers-color-scheme: dark) {
      .weight-value {
        color: #9ca3af;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✨ Variable Fonts Demo</h1>
    
    <div class="demo-section">
      <div class="label">Standard Weights (100, 300, 500, 700, 900)</div>
      <div class="grid">
        <div class="weight-card">
          <div class="demo-text weight-100">Aa</div>
          <div class="weight-value">100 Thin</div>
        </div>
        <div class="weight-card">
          <div class="demo-text weight-300">Aa</div>
          <div class="weight-value">300 Light</div>
        </div>
        <div class="weight-card">
          <div class="demo-text weight-500">Aa</div>
          <div class="weight-value">500 Medium</div>
        </div>
        <div class="weight-card">
          <div class="demo-text weight-700">Aa</div>
          <div class="weight-value">700 Bold</div>
        </div>
        <div class="weight-card">
          <div class="demo-text weight-900">Aa</div>
          <div class="weight-value">900 Black</div>
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <div class="label">🎯 Custom Weights (450, 650) - Only possible with Variable Fonts!</div>
      <div class="grid" style="grid-template-columns: 1fr 1fr;">
        <div class="weight-card">
          <div class="demo-text weight-450">Aa</div>
          <div class="weight-value">450 Custom</div>
        </div>
        <div class="weight-card">
          <div class="demo-text weight-650">Aa</div>
          <div class="weight-value">650 Custom</div>
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <div class="label">🎬 Animated Weight (300 → 900)</div>
      <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 12px;">
        <div class="demo-text animated" style="color: white; font-size: 64px;">
          Variable!
        </div>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Variable Fonts Demo"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Loading Variable Fonts
          </CardTitle>
          <CardDescription>How to use variable fonts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-3">
              @font-face Declaration
            </h3>
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`@font-face {
  font-family: 'InterVariable';
  src: url('Inter-Variable.woff2') format('woff2-variations');
  font-weight: 100 900;  /* Range */
  font-display: swap;
}`}
              </code>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold">Popular Variable Fonts:</h4>
            {[
              { name: 'Inter', use: 'UI, body text', url: 'fonts.google.com/specimen/Inter' },
              { name: 'Roboto Flex', use: 'Google Material', url: 'fonts.google.com/specimen/Roboto+Flex' },
              { name: 'Source Sans 3', use: 'Adobe, readable', url: 'fonts.google.com/specimen/Source+Sans+3' },
              { name: 'Recursive', use: 'Code & UI', url: 'fonts.google.com/specimen/Recursive' }
            ].map((font, i) => (
              <div key={i} className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <strong className="text-blue-900 dark:text-blue-100">{font.name}</strong>
                    <p className="text-xs text-blue-700 dark:text-blue-300">{font.use}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>One file</strong> replaces multiple font weights</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use any weight: <code>font-weight: 450;</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Can <strong>animate</strong> font-weight smoothly!</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>All modern browsers</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

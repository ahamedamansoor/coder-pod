'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Variable, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Palette, Code
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssVariablesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssVariables({ onOpenWebPlayground }: CssVariablesProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Variable}
        category="CSS · Advanced CSS"
        title="CSS Variables"
        description="Reusable values with custom properties for maintainable styles"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Variable className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Variables (Custom Properties)</CardTitle>
              <CardDescription className="text-base">Reusable values in CSS</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Variables = Reusable Values</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              CSS Variables (also called Custom Properties) let you store values and reuse them throughout 
              your stylesheet. Perfect for themes, colors, spacing systems, and maintainable code!
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3">Why Use Variables?</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span><strong>DRY Principle:</strong> Define once, use everywhere</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span><strong>Easy Updates:</strong> Change one value, update entire site</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span><strong>Theming:</strong> Switch between light/dark modes easily</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span><strong>JavaScript:</strong> Can be changed dynamically</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Creating & Using Variables
          </CardTitle>
          <CardDescription>Two-step process</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-lg mb-3">Step 1: Define</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Use <code>--</code> prefix in <code>:root</code>
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-3 rounded-lg">
                <code className="text-sm text-blue-100 block">
{`:root {
  --primary-color: #667eea;
  --spacing: 20px;
}`}
                </code>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white text-lg mb-3">Step 2: Use</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Use <code>var()</code> function
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg">
                <code className="text-sm text-green-100 block">
{`.button {
  background: var(--primary-color);
  padding: var(--spacing);
}`}
                </code>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              Complete Example
            </h3>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg">
              <code className="text-sm text-purple-100 block">
{`:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --text: #333;
  --spacing: 1rem;
}

.card {
  background: var(--primary);
  color: var(--text);
  padding: var(--spacing);
}`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>Change variables dynamically</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    :root {
      --primary-color: #667eea;
      --secondary-color: #764ba2;
      --spacing: 20px;
      --border-radius: 12px;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      padding: 40px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .container {
      background: white;
      padding: 40px;
      border-radius: var(--border-radius);
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      max-width: 600px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 30px;
      text-align: center;
    }
    
    .controls {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .control-group {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    label {
      font-weight: 600;
      min-width: 100px;
    }
    
    input[type="color"] {
      width: 60px;
      height: 40px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    
    .demo-box {
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      color: white;
      padding: calc(var(--spacing) * 2);
      border-radius: var(--border-radius);
      text-align: center;
      font-weight: 600;
      font-size: 18px;
    }
  </style>
  
  <script>
    function updateColor(property, value) {
      document.documentElement.style.setProperty(property, value);
    }
  </script>
</head>
<body>
  <div class="container">
    <h1>🎨 CSS Variables Demo</h1>
    
    <div class="controls">
      <div class="control-group">
        <label>Primary:</label>
        <input type="color" value="#667eea" 
               onchange="updateColor('--primary-color', this.value)">
      </div>
      
      <div class="control-group">
        <label>Secondary:</label>
        <input type="color" value="#764ba2" 
               onchange="updateColor('--secondary-color', this.value)">
      </div>
    </div>
    
    <div class="demo-box">
      I use CSS Variables!
    </div>
    
    <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #666;">
      Try changing the colors above ⬆️
    </p>
  </div>
</body>
</html>`}
            title="CSS Variables Demo"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Palette className="w-6 h-6 text-green-600 dark:text-green-400" />
            Fallback Values
          </CardTitle>
          <CardDescription>Provide backup values</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">var()</code> function 
            accepts a second parameter as a fallback value if the variable doesn't exist.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-green-100 block">
{`/* If --primary doesn't exist, use blue */
color: var(--primary, blue);

/* Nested fallbacks */
color: var(--primary, var(--fallback, #000));`}
              </code>
            </div>
            <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
              <Lightbulb className="w-5 h-5 text-green-600" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                Fallbacks ensure your design still works even if a variable isn't defined!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Common Use Cases
          </CardTitle>
          <CardDescription>Practical variable patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                title: 'Color System',
                code: '--primary: #667eea;\n--success: #10b981;\n--danger: #ef4444;',
                color: 'blue'
              },
              {
                title: 'Spacing Scale',
                code: '--space-xs: 0.5rem;\n--space-sm: 1rem;\n--space-md: 2rem;',
                color: 'green'
              },
              {
                title: 'Typography',
                code: '--font-size-sm: 14px;\n--font-size-md: 16px;\n--line-height: 1.6;',
                color: 'purple'
              },
              {
                title: 'Dark Mode',
                code: '--bg: white;\n--text: #333;\n[dark] { --bg: #111; --text: #fff; }',
                color: 'orange'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <h3 className="font-bold mb-3">{item.title}</h3>
                <div className={`bg-${item.color}-900 dark:bg-${item.color}-950 p-3 rounded-lg`}>
                  <code className={`text-sm text-${item.color}-100 whitespace-pre`}>
                    {item.code}
                  </code>
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
            <span>Define variables in <strong>:root</strong> for global scope</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>--</strong> prefix for custom properties</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Access with <strong>var(--name)</strong></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Can be changed with <strong>JavaScript</strong> dynamically!</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

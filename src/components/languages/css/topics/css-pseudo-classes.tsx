'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  MousePointer, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Hand, Focus
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssPseudoClassesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssPseudoClasses({ onOpenWebPlayground }: CssPseudoClassesProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={MousePointer}
        category="CSS · Selectors & States"
        title="Pseudo-Classes"
        description="Target elements based on their state or position"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <MousePointer className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Pseudo-Classes</CardTitle>
              <CardDescription className="text-base">Style based on state or position</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Pseudo-Classes = Special States</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Pseudo-classes select elements based on their state (hover, focus) or position (first-child, nth-child). 
              They use a single colon <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">:</code>
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3">Syntax</h3>
            <div className="bg-blue-900 dark:bg-blue-950 p-4 rounded-lg">
              <code className="text-sm text-blue-100">
                selector:pseudo-class {`{ property: value; }`}
              </code>
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-200 mt-3">
              Example: <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900 rounded">button:hover</code>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Hand className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Interactive Pseudo-Classes
          </CardTitle>
          <CardDescription>User interaction states</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              { 
                name: ':hover', 
                desc: 'When mouse hovers over element',
                example: 'a:hover { color: red; }',
                color: 'blue'
              },
              { 
                name: ':active', 
                desc: 'When element is being clicked',
                example: 'button:active { transform: scale(0.95); }',
                color: 'green'
              },
              { 
                name: ':focus', 
                desc: 'When element has keyboard focus',
                example: 'input:focus { border: 2px solid blue; }',
                color: 'purple'
              },
              { 
                name: ':visited', 
                desc: 'Links that have been visited',
                example: 'a:visited { color: purple; }',
                color: 'pink'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <Badge className={`bg-${item.color}-600 text-white text-lg mb-2`}>{item.name}</Badge>
                <p className="text-sm mb-3">{item.desc}</p>
                <div className={`bg-${item.color}-900 dark:bg-${item.color}-950 p-3 rounded-lg`}>
                  <code className={`text-sm text-${item.color}-100`}>{item.example}</code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>Hover, click, and tab through elements</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      background: white;
      padding: 40px;
      border-radius: 20px;
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
      text-align: center;
      color: #667eea;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .demo-section {
      margin-bottom: 30px;
    }
    
    .label {
      font-weight: 600;
      margin-bottom: 10px;
      color: #667eea;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #a78bfa;
      }
    }
    
    /* Hover Demo */
    .hover-btn {
      background: #667eea;
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .hover-btn:hover {
      background: #764ba2;
      transform: translateY(-3px);
      box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
    }
    
    /* Active Demo */
    .active-btn {
      background: #10b981;
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.1s;
    }
    
    .active-btn:active {
      transform: scale(0.95);
      background: #059669;
    }
    
    /* Focus Demo */
    .focus-input {
      width: 100%;
      padding: 12px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 16px;
      transition: all 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      .focus-input {
        background: #374151;
        border-color: #4b5563;
        color: #e5e5e5;
      }
    }
    
    .focus-input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    /* Link Demo */
    .link {
      color: #667eea;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s;
    }
    
    .link:hover {
      color: #764ba2;
      text-decoration: underline;
    }
    
    .link:visited {
      color: #8b5cf6;
    }
    
    .note {
      text-align: center;
      margin-top: 20px;
      font-size: 14px;
      color: #6b7280;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        color: #9ca3af;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Pseudo-Classes Demo</h1>
    
    <div class="demo-section">
      <div class="label">:hover - Hover over me!</div>
      <button class="hover-btn">Hover Button</button>
    </div>
    
    <div class="demo-section">
      <div class="label">:active - Click and hold me!</div>
      <button class="active-btn">Click Me</button>
    </div>
    
    <div class="demo-section">
      <div class="label">:focus - Click or tab into this input</div>
      <input type="text" class="focus-input" placeholder="Click to focus...">
    </div>
    
    <div class="demo-section">
      <div class="label">:visited - Click this link</div>
      <a href="#visited" class="link">Click me to see :visited effect</a>
    </div>
    
    <div class="note">
      Try hovering, clicking, and tabbing through elements!
    </div>
  </div>
</body>
</html>`}
            title="Interactive Pseudo-Classes"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Focus className="w-6 h-6 text-green-600 dark:text-green-400" />
            Structural Pseudo-Classes
          </CardTitle>
          <CardDescription>Target based on position</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: ':first-child', desc: 'First child of parent', example: 'li:first-child' },
              { name: ':last-child', desc: 'Last child of parent', example: 'li:last-child' },
              { name: ':nth-child(n)', desc: 'Specific child by number', example: 'li:nth-child(2)' },
              { name: ':nth-child(odd)', desc: 'Odd numbered children', example: 'tr:nth-child(odd)' },
              { name: ':nth-child(even)', desc: 'Even numbered children', example: 'tr:nth-child(even)' },
              { name: ':only-child', desc: 'Only child of parent', example: 'p:only-child' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <Badge className="bg-green-600 text-white mb-2 text-xs">{item.name}</Badge>
                <p className="text-sm text-green-800 dark:text-green-200 mb-2">{item.desc}</p>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded">{item.example}</code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Form Pseudo-Classes
          </CardTitle>
          <CardDescription>Input and form states</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { name: ':checked', desc: 'Checked checkboxes/radios' },
            { name: ':disabled', desc: 'Disabled form elements' },
            { name: ':enabled', desc: 'Enabled form elements' },
            { name: ':valid', desc: 'Valid form inputs' },
            { name: ':invalid', desc: 'Invalid form inputs' },
            { name: ':required', desc: 'Required form fields' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div>
                <code className="font-mono font-bold text-blue-700 dark:text-blue-400">{item.name}</code>
                <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Pseudo-classes use <strong>single colon :</strong></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>:hover</strong> - Most common for interactive effects</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>:nth-child()</strong> - Powerful for patterns</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always provide <strong>:focus</strong> styles for accessibility!</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

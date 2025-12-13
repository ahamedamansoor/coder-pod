'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Layers, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Shield, Zap
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssLayersProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssLayers({ onOpenWebPlayground }: CssLayersProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="CSS · Advanced CSS"
        title="Cascade Layers"
        description="Control CSS specificity with @layer"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader className="relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Layers className="w-7 h-7 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Cascade Layers</CardTitle>
              <CardDescription className="text-base">
                <Badge className="bg-green-600 text-white mr-2">NEW 2022</Badge>
                Control specificity without !important
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 dark:from-indigo-950/30 dark:via-blue-950/30 dark:to-purple-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100 text-lg">@layer = Specificity Control! 🎯</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Cascade layers let you organize CSS into <strong>explicit layers</strong> with <strong>predictable priority</strong>. 
              Layer order matters more than specificity! No more <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">!important</code> wars! 
              Perfect for managing framework CSS, components, and utilities.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              The Problem Cascade Layers Solve
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Before</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  • Specificity wars<br />
                  • !important everywhere<br />
                  • Framework vs custom styles conflicts<br />
                  • Hard to maintain
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ With Layers</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  • Clear layer order<br />
                  • No !important needed<br />
                  • Framework isolation<br />
                  • Easy to override
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Creating Layers
          </CardTitle>
          <CardDescription>Three ways to define layers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {[
              {
                method: '1. Declare Layer Order',
                code: '@layer reset, base, components, utilities;',
                desc: 'Define all layers upfront (recommended)',
                color: 'blue'
              },
              {
                method: '2. Create with Rules',
                code: '@layer components {\n  .button { }\n}',
                desc: 'Create layer and add rules',
                color: 'green'
              },
              {
                method: '3. Import into Layer',
                code: '@import url("reset.css") layer(reset);',
                desc: 'Import external CSS into layer',
                color: 'purple'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <h4 className="font-bold mb-2">{item.method}</h4>
                <p className="text-sm mb-3">{item.desc}</p>
                <div className={`bg-${item.color}-900 dark:bg-${item.color}-950 p-4 rounded-lg`}>
                  <code className={`text-sm text-${item.color}-100`}>
                    {item.code}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Layer Priority
          </CardTitle>
          <CardDescription>How layers cascade</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-2 border-indigo-300 dark:border-indigo-700">
            <h3 className="font-bold text-lg text-indigo-900 dark:text-indigo-100 mb-4">
              📚 Cascade Priority Stack (High to Low)
            </h3>
            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-lg text-center font-semibold transform hover:scale-105 transition-all shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">🔥</span>
                  <span>1. Unlayered Styles (HIGHEST PRIORITY)</span>
                </div>
                <p className="text-xs mt-1 opacity-90">Normal CSS outside layers</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg text-center font-semibold transform hover:scale-105 transition-all shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <span>2. Last Layer (utilities)</span>
                </div>
                <p className="text-xs mt-1 opacity-90">Later layers override earlier ones</p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-lg text-center font-semibold transform hover:scale-105 transition-all shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <span>3. Middle Layers (components)</span>
                </div>
                <p className="text-xs mt-1 opacity-90">Declared in order</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg text-center font-semibold transform hover:scale-105 transition-all shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">📦</span>
                  <span>4. First Layer (reset) - LOWEST</span>
                </div>
                <p className="text-xs mt-1 opacity-90">Foundation layer</p>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm shadow-md">
                <ArrowRight className="w-4 h-4 text-indigo-600 animate-pulse" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Priority flows upward ⬆️</span>
              </div>
            </div>
          </div>

          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/20">
            <Lightbulb className="w-5 h-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Key Insight!</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              <strong>Layer order beats specificity!</strong> A later layer's <code>.class</code> overrides 
              an earlier layer's <code>#id</code>.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-green-600 dark:text-green-400" />
            Practical Example
          </CardTitle>
          <CardDescription>Organize a design system</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    /* 1. DECLARE LAYER ORDER */
    @layer reset, base, components, utilities;
    
    /* 2. RESET LAYER (lowest priority) */
    @layer reset {
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    }
    
    /* 3. BASE LAYER */
    @layer base {
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 40px 20px;
        min-height: 100vh;
      }
      
      @media (prefers-color-scheme: dark) {
        body {
          background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
        }
      }
    }
    
    /* 4. COMPONENTS LAYER */
    @layer components {
      .button {
        padding: 12px 24px;
        background: #3b82f6;
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
      }
      
      .card {
        background: white;
        padding: 30px;
        border-radius: 16px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        max-width: 600px;
        margin: 0 auto;
      }
      
      @media (prefers-color-scheme: dark) {
        .card {
          background: #1a1a2e;
          color: #e5e5e5;
        }
      }
      
      .title {
        color: #667eea;
        margin-bottom: 20px;
        font-size: 2rem;
      }
      
      @media (prefers-color-scheme: dark) {
        .title {
          color: #a78bfa;
        }
      }
    }
    
    /* 5. UTILITIES LAYER (highest priority) */
    @layer utilities {
      .text-center {
        text-align: center;
      }
      
      .mb-4 {
        margin-bottom: 1rem;
      }
      
      .mt-4 {
        margin-top: 1rem;
      }
    }
    
    /* UNLAYERED (beats everything) */
    .special-override {
      background: linear-gradient(135deg, #667eea, #764ba2) !important;
      color: white !important;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1 class="title text-center">CSS Cascade Layers</h1>
    
    <p class="text-center mb-4">
      This page uses @layer to organize CSS into logical groups:
    </p>
    
    <div class="mb-4">
      <strong>Layer Order:</strong>
      <ol style="margin-left: 20px; margin-top: 10px;">
        <li>reset (lowest priority)</li>
        <li>base</li>
        <li>components</li>
        <li>utilities (highest priority)</li>
      </ol>
    </div>
    
    <div class="text-center mt-4">
      <button class="button">Regular Button</button>
      <button class="button special-override" style="margin-left: 10px;">
        Override Button
      </button>
    </div>
    
    <p class="text-center mt-4" style="font-size: 14px; color: #6b7280;">
      The utilities layer can override component styles without !important!
    </p>
  </div>
</body>
</html>`}
            title="Cascade Layers Demo"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Best Practices
          </CardTitle>
          <CardDescription>How to organize layers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-3">
              Recommended Layer Structure
            </h3>
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`@layer reset, base, theme, layout, components, utilities;

/* Reset: Browser resets */
/* Base: Typography, defaults */
/* Theme: Colors, variables */
/* Layout: Grid, container */
/* Components: UI components */
/* Utilities: Helper classes */`}
              </code>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { tip: 'Declare order first', desc: 'Define all layers at the top of your CSS' },
              { tip: 'Framework isolation', desc: 'Put third-party CSS in early layers' },
              { tip: 'Utilities last', desc: 'Helper classes should override everything' },
              { tip: 'Keep it simple', desc: 'Too many layers = complexity' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-blue-900 dark:text-blue-100">{item.tip}:</strong>
                  <span className="text-sm text-blue-700 dark:text-blue-300 ml-1">{item.desc}</span>
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
            <span><strong>Layer order beats specificity</strong> - Later layers win!</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Declare layer order first: <code>@layer a, b, c;</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Unlayered styles</strong> always win over layered ones</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>Chrome 99+, Safari 15.4+, Firefox 97+</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Anchor, CheckCircle, Sparkles, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssAnchorPositioningProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssAnchorPositioning({ onOpenWebPlayground }: CssAnchorPositioningProps) {
  const [selectedExample, setSelectedExample] = useState('basic');

  const basicExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Anchor Positioning - Basic</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #be185d 0%, #9f1239 100%); }
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
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #ec4899;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #f9a8d4; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .demo-area {
      position: relative;
      background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
      padding: 80px 40px;
      border-radius: 12px;
      margin: 20px 0;
      border: 3px dashed #ec4899;
      min-height: 300px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-area {
        background: linear-gradient(135deg, #be185d 0%, #9f1239 100%);
        border-color: #f9a8d4;
      }
    }
    
    /* Anchor element */
    .anchor-element {
      background: white;
      padding: 20px 30px;
      border-radius: 12px;
      text-align: center;
      font-weight: 700;
      color: #be185d;
      border: 3px solid #ec4899;
      display: inline-block;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
    
    @media (prefers-color-scheme: dark) {
      .anchor-element {
        background: #0f172a;
        color: #f9a8d4;
        border-color: #f9a8d4;
      }
    }
    
    .badge {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      margin-top: 8px;
      background: #ec4899;
      color: white;
    }
    
    .info-box {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-left: 4px solid #f59e0b;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        border-left-color: #fbbf24;
      }
    }
    
    .info-title {
      color: #92400e;
      font-weight: 700;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title { color: #fde68a; }
    }
    
    .info-text {
      color: #78350f;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-text { color: #fef3c7; }
    }
    
    code {
      background: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      color: #ec4899;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      code { background: #0f172a; color: #f9a8d4; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚓ CSS Anchor Positioning</h1>
    <p class="subtitle">Position elements relative to anchor elements</p>
    
    <div class="demo-area">
      <div class="anchor-element">
        ⚓ Anchor Element
        <br>
        <span class="badge">CSS 2024</span>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">🆕 New CSS 2024 Feature</div>
      <p class="info-text">
        CSS Anchor Positioning allows you to position elements relative to other elements 
        using properties like <code>anchor-name</code> and <code>position-anchor</code>. 
        This eliminates complex JavaScript calculations for tooltips, dropdowns, and popovers!
      </p>
    </div>
  </div>
</body>
</html>`;

  const tooltipExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Anchor Positioning - Tooltip</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #be185d 0%, #9f1239 100%); }
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
    }
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    h1 { color: #ec4899; text-align: center; margin-bottom: 30px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #f9a8d4; }
    }
    
    .demo-section {
      background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
      padding: 60px;
      border-radius: 12px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-section { background: linear-gradient(135deg, #be185d 0%, #9f1239 100%); }
    }
    
    .button {
      background: white;
      color: #be185d;
      padding: 12px 24px;
      border: 3px solid #ec4899;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      font-size: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .button {
        background: #0f172a;
        color: #f9a8d4;
        border-color: #f9a8d4;
      }
    }
    
    .note {
      margin-top: 20px;
      padding: 16px;
      background: #fef3c7;
      border-radius: 8px;
      color: #78350f;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .note { background: #78350f; color: #fef3c7; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚓ Tooltip with Anchor</h1>
    
    <div class="demo-section">
      <button class="button">
        Hover for Tooltip
      </button>
    </div>
    
    <div class="note">
      💡 In browsers with full support, tooltips would automatically position relative to the button using anchor positioning!
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Anchor}
        category="CSS · Modern Features"
        title="CSS Anchor Positioning"
        description="Position elements relative to other elements without JavaScript calculations"
        colorTheme="pink"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-pink-700 dark:text-pink-300">
            <div className="relative">
              <Anchor className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            CSS Anchor Positioning
          </CardTitle>
          <CardDescription className="text-lg text-pink-600 dark:text-pink-400">
            ⚓ New CSS 2024 feature - position elements relative to anchors!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-pink-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-pink-700 dark:text-pink-300">
                  What is Anchor Positioning?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  CSS Anchor Positioning is a revolutionary new feature that allows elements to be positioned 
                  relative to other elements (called "anchors") using pure CSS, without JavaScript calculations. 
                  Perfect for tooltips, dropdowns, popovers, and context menus!
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                    <Sparkles className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-pink-700 dark:text-pink-300">No JavaScript Needed</div>
                      <div className="text-sm text-pink-600 dark:text-pink-400">
                        Pure CSS solution for complex positioning
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300">Dynamic Positioning</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">
                        Automatically adjusts based on anchor element
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl border border-pink-200/50">
                <h4 className="font-bold mb-4 text-pink-700 dark:text-pink-300">
                  Key Properties
                </h4>
                
                <div className="grid gap-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <code className="text-sm font-mono text-pink-600 dark:text-pink-400">
                      anchor-name: --my-anchor;
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Defines an element as an anchor
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <code className="text-sm font-mono text-rose-600 dark:text-rose-400">
                      position-anchor: --my-anchor;
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Links positioned element to anchor
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <code className="text-sm font-mono text-purple-600 dark:text-purple-400">
                      inset-area: top;
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Specifies position relative to anchor
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-pink-900/30 p-6 rounded-xl border border-pink-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">⚓</div>
                  <div className="font-bold text-lg text-pink-700 dark:text-pink-300">2024 Feature</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <Sparkles className="w-4 h-4" />
                      Pure CSS
                    </div>
                    <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400">
                      <CheckCircle className="w-4 h-4" />
                      No JS needed
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20 p-4 rounded-xl border border-orange-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚠️</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Limited Support</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Cutting-edge feature with evolving browser support
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
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Anchor className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Live Examples
          </CardTitle>
          <CardDescription>
            Explore anchor positioning use cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedExample('basic')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'basic'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Basic Example
            </button>
            <button
              onClick={() => setSelectedExample('tooltip')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'tooltip'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Tooltip
            </button>
          </div>

          {selectedExample === 'basic' && (
            <FrontendCodePreview
              html={basicExample}
              title="Basic Anchor Positioning"
              colorTheme="pink"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedExample === 'tooltip' && (
            <FrontendCodePreview
              html={tooltipExample}
              title="Tooltip with Anchor"
              colorTheme="pink"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-3">Perfect For:</h4>
              <ul className="text-sm space-y-2 text-pink-600 dark:text-pink-400">
                <li>• <strong>Tooltips</strong> - Position tooltips relative to buttons</li>
                <li>• <strong>Dropdowns</strong> - Align dropdown menus precisely</li>
                <li>• <strong>Popovers</strong> - Context menus and popups</li>
                <li>• <strong>Floating labels</strong> - Dynamic form field labels</li>
              </ul>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Benefits:</h4>
              <ul className="text-sm space-y-2 text-purple-600 dark:text-purple-400">
                <li>• <strong>No JavaScript</strong> - Pure CSS solution</li>
                <li>• <strong>Performant</strong> - Browser-optimized positioning</li>
                <li>• <strong>Responsive</strong> - Adapts automatically</li>
                <li>• <strong>Accessible</strong> - Works with screen readers</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/20">
        <AlertTriangle className="h-4 w-4 text-pink-600" />
        <AlertTitle className="text-pink-900 dark:text-pink-100">Browser Support (2024)</AlertTitle>
        <AlertDescription className="text-pink-800 dark:text-pink-200">
          <div className="space-y-2 mt-2">
            <div><strong>⚠️ Limited Support:</strong> This is a cutting-edge CSS feature</div>
            <div><strong>Chrome 125+:</strong> Experimental support (flag required)</div>
            <div><strong>Firefox:</strong> Under development</div>
            <div><strong>Safari:</strong> Under consideration</div>
            <div className="mt-3 pt-3 border-t border-pink-200 dark:border-pink-700">
              <strong>💡 Recommendation:</strong> Use as progressive enhancement with JavaScript fallback
            </div>
          </div>
        </AlertDescription>
      </Alert>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Learn More</AlertTitle>
        <AlertDescription>
          CSS Anchor Positioning is part of the CSS Anchoring Module Level 1 specification. 
          Check the latest browser compatibility before using in production. Consider using 
          polyfills or JavaScript fallbacks for broader support.
        </AlertDescription>
      </Alert>
    </div>
  );
}

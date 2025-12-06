'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Palette, CheckCircle, Sparkles, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssRelativeColorsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssRelativeColors({ onOpenWebPlayground }: CssRelativeColorsProps) {
  const [selectedExample, setSelectedExample] = useState('colorMix');

  const colorMixExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Relative Colors - color-mix()</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%); }
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
      color: #8b5cf6;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #c4b5fd; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    :root {
      --base-color: #8b5cf6;
    }
    
    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    
    .color-box {
      padding: 40px 20px;
      border-radius: 12px;
      text-align: center;
      font-weight: 700;
      font-size: 1.1rem;
      border: 3px solid rgba(139, 92, 246, 0.3);
      color: white;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    }
    
    .base {
      background: var(--base-color);
    }
    
    .lighter-20 {
      background: color-mix(in srgb, var(--base-color) 80%, white);
    }
    
    .lighter-40 {
      background: color-mix(in srgb, var(--base-color) 60%, white);
    }
    
    .lighter-60 {
      background: color-mix(in srgb, var(--base-color) 40%, white);
    }
    
    .darker-20 {
      background: color-mix(in srgb, var(--base-color) 80%, black);
    }
    
    .darker-40 {
      background: color-mix(in srgb, var(--base-color) 60%, black);
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
      color: #8b5cf6;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      code { background: #0f172a; color: #c4b5fd; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Relative Colors</h1>
    <p class="subtitle">Derive new colors from existing colors</p>
    
    <div class="color-grid">
      <div class="color-box lighter-60">
        60% Lighter
      </div>
      <div class="color-box lighter-40">
        40% Lighter
      </div>
      <div class="color-box lighter-20">
        20% Lighter
      </div>
      <div class="color-box base">
        Base Color
      </div>
      <div class="color-box darker-20">
        20% Darker
      </div>
      <div class="color-box darker-40">
        40% Darker
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">✨ color-mix() Function</div>
      <p class="info-text">
        Using <code>color-mix(in srgb, color1 percentage, color2)</code> you can create 
        lighter and darker variations of any color! Mix with white for lighter shades, 
        or black for darker shades.
      </p>
    </div>
  </div>
</body>
</html>`;

  const themeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Relative Colors - Theme Generation</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%); }
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
    h1 { color: #8b5cf6; text-align: center; margin-bottom: 30px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #c4b5fd; }
    }
    
    :root {
      --primary: #3b82f6;
      --primary-light: color-mix(in srgb, var(--primary) 50%, white);
      --primary-dark: color-mix(in srgb, var(--primary) 70%, black);
    }
    
    .button-group {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .btn {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    .btn-primary {
      background: var(--primary);
      color: white;
    }
    
    .btn-primary:hover {
      background: var(--primary-dark);
    }
    
    .btn-light {
      background: var(--primary-light);
      color: var(--primary-dark);
    }
    
    .btn-light:hover {
      background: var(--primary);
      color: white;
    }
    
    .note {
      margin-top: 30px;
      padding: 16px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-radius: 8px;
      color: #78350f;
      text-align: center;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .note { background: linear-gradient(135deg, #78350f 0%, #92400e 100%); color: #fef3c7; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Theme with Relative Colors</h1>
    
    <div class="button-group">
      <button class="btn btn-primary">Primary Button</button>
      <button class="btn btn-light">Light Button</button>
      <button class="btn btn-primary">Another Primary</button>
    </div>
    
    <div class="note">
      💡 All button colors are derived from one base color using color-mix()!
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Palette}
        category="CSS · Modern Features"
        title="Relative Colors"
        description="Create color variations from base colors using color-mix() and relative color syntax"
        colorTheme="purple"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-700 dark:text-purple-300">
            <div className="relative">
              <Palette className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Relative Colors
          </CardTitle>
          <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
            🎨 Derive new colors from existing colors dynamically!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">
                  What are Relative Colors?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Relative colors allow you to create new colors based on existing colors using CSS functions 
                  like <code className="text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded">color-mix()</code>. 
                  This enables dynamic theming, automatic color variations, and consistent design systems without 
                  manually calculating color values!
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300">Dynamic Theming</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">
                        Generate color variations automatically from base colors
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-pink-700 dark:text-pink-300">Design Consistency</div>
                      <div className="text-sm text-pink-600 dark:text-pink-400">
                        Maintain consistent color relationships
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 p-6 rounded-xl border border-purple-200/50">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">
                  color-mix() Function
                </h4>
                
                <div className="grid gap-3">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                      Basic Syntax
                    </div>
                    <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block">
                      color-mix(in srgb, color1 percentage, color2)
                    </code>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-pink-700 dark:text-pink-300 mb-2">
                      Example: Lighter Shade
                    </div>
                    <code className="text-sm font-mono text-pink-600 dark:text-pink-400 block">
                      color-mix(in srgb, #8b5cf6 50%, white)
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Mixes 50% purple with 50% white
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-fuchsia-700 dark:text-fuchsia-300 mb-2">
                      Example: Darker Shade
                    </div>
                    <code className="text-sm font-mono text-fuchsia-600 dark:text-fuchsia-400 block">
                      color-mix(in srgb, #8b5cf6 70%, black)
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Mixes 70% purple with 30% black
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-100 via-fuchsia-100 to-purple-100 dark:from-purple-900/30 dark:via-fuchsia-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">🎨</div>
                  <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Color Mixing</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400">
                      <CheckCircle className="w-4 h-4" />
                      Mix colors
                    </div>
                    <div className="flex items-center justify-center gap-2 text-pink-600 dark:text-pink-400">
                      <CheckCircle className="w-4 h-4" />
                      Lighten/darken
                    </div>
                    <div className="flex items-center justify-center gap-2 text-fuchsia-600 dark:text-fuchsia-400">
                      <CheckCircle className="w-4 h-4" />
                      Blend colors
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Use CSS variables with color-mix() for dynamic themes!
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
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Palette className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Live Examples
          </CardTitle>
          <CardDescription>
            See color-mix() in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedExample('colorMix')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'colorMix'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Color Variations
            </button>
            <button
              onClick={() => setSelectedExample('theme')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'theme'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Theme Generation
            </button>
          </div>

          {selectedExample === 'colorMix' && (
            <FrontendCodePreview
              html={colorMixExample}
              title="Color Variations with color-mix()"
              colorTheme="purple"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedExample === 'theme' && (
            <FrontendCodePreview
              html={themeExample}
              title="Dynamic Theme Colors"
              colorTheme="purple"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Design Systems</h4>
              <ul className="text-sm space-y-2 text-purple-600 dark:text-purple-400">
                <li>• Generate button hover states automatically</li>
                <li>• Create disabled state colors</li>
                <li>• Build color palettes from brand colors</li>
                <li>• Maintain consistent color relationships</li>
              </ul>
            </div>
            
            <div className="p-4 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-lg border border-fuchsia-200/50">
              <h4 className="font-bold text-fuchsia-700 dark:text-fuchsia-300 mb-3">Dynamic Theming</h4>
              <ul className="text-sm space-y-2 text-fuchsia-600 dark:text-fuchsia-400">
                <li>• User-customizable themes</li>
                <li>• Dark mode color variations</li>
                <li>• Accessibility contrast adjustments</li>
                <li>• Brand color customization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Why Use Relative Colors?</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Consistency:</strong> Maintain color relationships automatically</li>
            <li><strong>Simplicity:</strong> No need to manually calculate color values</li>
            <li><strong>Flexibility:</strong> Change base colors and variations update automatically</li>
            <li><strong>Performance:</strong> Browser-optimized color calculations</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
        <Info className="h-4 w-4 text-purple-600" />
        <AlertTitle className="text-purple-900 dark:text-purple-100">Browser Support</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200">
          <div className="space-y-2 mt-2">
            <div><strong>✅ Chrome 111+:</strong> Full support</div>
            <div><strong>✅ Firefox 113+:</strong> Full support</div>
            <div><strong>✅ Safari 16.2+:</strong> Full support</div>
            <div><strong>✅ Edge 111+:</strong> Full support</div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

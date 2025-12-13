'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Palette,
  Sparkles,
  Play,
  CheckCircle2,
  Lightbulb,
  Code2,
  Paintbrush,
  Layers,
  Eye,
  ArrowRight,
} from 'lucide-react';

export default function DOMStylesNew() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Palette}
        category="JavaScript DOM"
        title="DOM Styles & CSS"
        description="Master styling elements with JavaScript - change colors, sizes, positions, and more!"
        colorTheme="yellow"
      />

      {/* The 2 Main Approaches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-7 h-7 text-yellow-500" />
            Two Ways to Style Elements
          </CardTitle>
          <CardDescription className="text-base">
            Choose the right approach for your needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Inline Styles */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 pt-6">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl bg-purple-500/20">
                      <Paintbrush className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-center">Inline Styles</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Directly change CSS properties with JavaScript
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Quick</strong> - Instant style changes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Dynamic</strong> - Calculate values</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Specific</strong> - Override everything</span>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-950 rounded-lg p-3 font-mono text-xs">
                    <code className="text-purple-600 dark:text-purple-400">
                      element.<span className="text-blue-600">style</span>.<span className="text-orange-600">color</span> = <span className="text-green-600">'red'</span>
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CSS Classes */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10 pt-6">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl bg-blue-500/20">
                      <Layers className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-center">CSS Classes</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Toggle predefined CSS classes on/off
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Clean</strong> - Organized styling</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Reusable</strong> - Apply to many elements</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Better</strong> - Recommended approach!</span>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-950 rounded-lg p-3 font-mono text-xs">
                    <code className="text-blue-600 dark:text-blue-400">
                      element.<span className="text-purple-600">classList</span>.<span className="text-orange-600">add</span>(<span className="text-green-600">'active'</span>)
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Alert className="mt-6 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              <strong>Use CSS classes when possible!</strong> They're cleaner, more maintainable, and perform better. Use inline styles only for dynamic values that can't be in CSS.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Style Cards */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Common Style Properties</h2>
          <p className="text-muted-foreground text-lg">
            Click each card to see examples and use cases
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Colors */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeDemo === 'colors' ? 'ring-4 ring-pink-500 scale-105' : ''
            }`}
            onClick={() => setActiveDemo(activeDemo === 'colors' ? null : 'colors')}
          >
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg">
                  <Palette className="w-10 h-10" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">Colors</h3>
                <Badge className="bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">
                  color, background
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong>Use for:</strong> Text colors, backgrounds, borders
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs space-y-2">
                <div className="text-green-600 dark:text-green-400">// Text color</div>
                <code className="text-pink-600 dark:text-pink-400 block">
                  element.<span className="text-blue-600">style</span>.<span className="text-purple-600">color</span> = <span className="text-green-600">'blue'</span>;
                </code>
                <div className="text-green-600 dark:text-green-400 mt-2">// Background</div>
                <code className="text-pink-600 dark:text-pink-400 block">
                  element.<span className="text-blue-600">style</span>.<span className="text-purple-600">backgroundColor</span> = <span className="text-green-600">'#ff0000'</span>;
                </code>
              </div>
              {activeDemo === 'colors' && (
                <div className="animate-in slide-in-from-top duration-300">
                  <Alert className="bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800">
                    <Sparkles className="h-4 w-4 text-pink-600" />
                    <AlertTitle>Color Formats</AlertTitle>
                    <AlertDescription className="text-sm space-y-1">
                      <p><strong>Named:</strong> 'red', 'blue'</p>
                      <p><strong>Hex:</strong> '#ff0000'</p>
                      <p><strong>RGB:</strong> 'rgb(255, 0, 0)'</p>
                      <p><strong>RGBA:</strong> 'rgba(255, 0, 0, 0.5)'</p>
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sizing */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeDemo === 'sizing' ? 'ring-4 ring-orange-500 scale-105' : ''
            }`}
            onClick={() => setActiveDemo(activeDemo === 'sizing' ? null : 'sizing')}
          >
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg">
                  <ArrowRight className="w-10 h-10 rotate-45" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">Sizing</h3>
                <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                  width, height
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong>Use for:</strong> Element dimensions, spacing
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs space-y-2">
                <div className="text-green-600 dark:text-green-400">// Set width</div>
                <code className="text-orange-600 dark:text-orange-400 block">
                  element.<span className="text-blue-600">style</span>.<span className="text-purple-600">width</span> = <span className="text-green-600">'200px'</span>;
                </code>
                <div className="text-green-600 dark:text-green-400 mt-2">// Set padding</div>
                <code className="text-orange-600 dark:text-orange-400 block">
                  element.<span className="text-blue-600">style</span>.<span className="text-purple-600">padding</span> = <span className="text-green-600">'20px'</span>;
                </code>
              </div>
              {activeDemo === 'sizing' && (
                <div className="animate-in slide-in-from-top duration-300">
                  <Alert className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                    <Sparkles className="h-4 w-4 text-orange-600" />
                    <AlertTitle>Size Units</AlertTitle>
                    <AlertDescription className="text-sm space-y-1">
                      <p><strong>px:</strong> Pixels (fixed)</p>
                      <p><strong>%:</strong> Percentage of parent</p>
                      <p><strong>rem:</strong> Relative to root font</p>
                      <p><strong>vh/vw:</strong> Viewport height/width</p>
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Visibility */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeDemo === 'visibility' ? 'ring-4 ring-purple-500 scale-105' : ''
            }`}
            onClick={() => setActiveDemo(activeDemo === 'visibility' ? null : 'visibility')}
          >
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg">
                  <Eye className="w-10 h-10" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">Visibility</h3>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                  display, opacity
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong>Use for:</strong> Show/hide elements, fade effects
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs space-y-2">
                <div className="text-green-600 dark:text-green-400">// Hide element</div>
                <code className="text-purple-600 dark:text-purple-400 block">
                  element.<span className="text-blue-600">style</span>.<span className="text-purple-600">display</span> = <span className="text-green-600">'none'</span>;
                </code>
                <div className="text-green-600 dark:text-green-400 mt-2">// Fade element</div>
                <code className="text-purple-600 dark:text-purple-400 block">
                  element.<span className="text-blue-600">style</span>.<span className="text-purple-600">opacity</span> = <span className="text-green-600">'0.5'</span>;
                </code>
              </div>
              {activeDemo === 'visibility' && (
                <div className="animate-in slide-in-from-top duration-300">
                  <Alert className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    <AlertTitle>Display vs Visibility</AlertTitle>
                    <AlertDescription className="text-sm space-y-1">
                      <p><strong>display: none:</strong> Removes from layout</p>
                      <p><strong>visibility: hidden:</strong> Keeps space</p>
                      <p><strong>opacity: 0:</strong> Invisible but clickable</p>
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* camelCase Conversion */}
      <Card className="bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-amber-950/10 dark:to-yellow-950/10 border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            Important: camelCase for CSS Properties
          </CardTitle>
          <CardDescription className="text-base">
            CSS property names change when used in JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            In CSS, properties use hyphens. In JavaScript, use <strong>camelCase</strong> instead!
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { css: 'background-color', js: 'backgroundColor' },
              { css: 'font-size', js: 'fontSize' },
              { css: 'border-radius', js: 'borderRadius' },
              { css: 'margin-top', js: 'marginTop' },
              { css: 'padding-left', js: 'paddingLeft' },
              { css: 'text-align', js: 'textAlign' },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white dark:bg-slate-950 rounded-lg border flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">CSS</div>
                  <code className="text-sm text-red-600 dark:text-red-400">{item.css}</code>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-600 mx-4" />
                <div>
                  <div className="text-xs text-muted-foreground mb-1">JavaScript</div>
                  <code className="text-sm text-green-600 dark:text-green-400">{item.js}</code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-7 h-7 text-green-600 dark:text-green-400" />
            Interactive Style Playground
          </CardTitle>
          <CardDescription className="text-base">
            Try different styling techniques - change colors, sizes, and visibility!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-2 border-green-200 dark:border-green-800 rounded-lg p-6 bg-white dark:bg-slate-950">
            <iframe
              srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: system-ui;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin: 0;
      min-height: 100vh;
    }
    .container {
      max-width: 700px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 { color: #1e293b; margin-bottom: 20px; }
    .section {
      margin: 20px 0;
      padding: 20px;
      background: #f8fafc;
      border-radius: 12px;
    }
    h3 { margin-bottom: 15px; color: #334155; font-size: 18px; }
    button {
      padding: 10px 18px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 13px;
      margin: 5px;
      transition: all 0.3s;
    }
    button:hover { transform: translateY(-2px); }
    .btn-primary { background: #3b82f6; color: white; }
    .btn-success { background: #10b981; color: white; }
    .btn-danger { background: #ef4444; color: white; }
    .btn-warning { background: #f59e0b; color: white; }
    .btn-purple { background: #8b5cf6; color: white; }
    
    #style-box {
      padding: 30px;
      background: #f1f5f9;
      border: 3px solid #cbd5e1;
      border-radius: 12px;
      text-align: center;
      transition: all 0.3s;
      margin: 15px 0;
      font-weight: 600;
    }
    
    .theme-dark { background: #1e293b; color: white; border-color: #475569; }
    .theme-success { background: #d1fae5; color: #047857; border-color: #10b981; }
    .theme-danger { background: #fee2e2; color: #dc2626; border-color: #ef4444; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Styling Playground</h1>
    
    <div class="section">
      <h3>Colors & Backgrounds</h3>
      <button class="btn-danger" onclick="changeColor()">Change Text Color</button>
      <button class="btn-success" onclick="changeBackground()">Change Background</button>
      <button class="btn-warning" onclick="randomColors()">Random Colors</button>
      <div id="style-box">Style me with JavaScript!</div>
    </div>

    <div class="section">
      <h3>Sizing & Spacing</h3>
      <button class="btn-primary" onclick="increaseSize()">Bigger</button>
      <button class="btn-primary" onclick="decreaseSize()">Smaller</button>
      <button class="btn-primary" onclick="addPadding()">More Padding</button>
      <button class="btn-primary" onclick="resetSize()">Reset Size</button>
    </div>

    <div class="section">
      <h3>Visibility & Display</h3>
      <button class="btn-purple" onclick="fadeOut()">Fade Out</button>
      <button class="btn-purple" onclick="fadeIn()">Fade In</button>
      <button class="btn-danger" onclick="hideElement()">Hide</button>
      <button class="btn-success" onclick="showElement()">Show</button>
    </div>

    <div class="section">
      <h3>CSS Classes (Better Way!)</h3>
      <button class="btn-primary" onclick="toggleDark()">Toggle Dark Theme</button>
      <button class="btn-success" onclick="toggleSuccess()">Toggle Success</button>
      <button class="btn-danger" onclick="toggleDanger()">Toggle Danger</button>
    </div>
  </div>

  <script>
    const box = document.getElementById('style-box');
    let currentSize = 16;
    
    // Colors
    function changeColor() {
      const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      box.style.color = randomColor;
    }
    
    function changeBackground() {
      const colors = ['#fef3c7', '#dbeafe', '#fce7f3', '#e0e7ff', '#d1fae5'];
      const randomBg = colors[Math.floor(Math.random() * colors.length)];
      box.style.backgroundColor = randomBg;
    }
    
    function randomColors() {
      changeColor();
      changeBackground();
    }
    
    // Sizing
    function increaseSize() {
      currentSize += 2;
      box.style.fontSize = currentSize + 'px';
    }
    
    function decreaseSize() {
      if (currentSize > 10) {
        currentSize -= 2;
        box.style.fontSize = currentSize + 'px';
      }
    }
    
    function addPadding() {
      const current = parseInt(box.style.padding) || 30;
      box.style.padding = (current + 10) + 'px';
    }
    
    function resetSize() {
      currentSize = 16;
      box.style.fontSize = '16px';
      box.style.padding = '30px';
    }
    
    // Visibility
    function fadeOut() {
      box.style.opacity = '0.3';
    }
    
    function fadeIn() {
      box.style.opacity = '1';
    }
    
    function hideElement() {
      box.style.display = 'none';
    }
    
    function showElement() {
      box.style.display = 'block';
    }
    
    // Classes (Better approach!)
    function toggleDark() {
      box.classList.toggle('theme-dark');
    }
    
    function toggleSuccess() {
      box.classList.toggle('theme-success');
    }
    
    function toggleDanger() {
      box.classList.toggle('theme-danger');
    }
  </script>
</body>
</html>`}
              className="w-full h-[650px] rounded-lg"
              title="Interactive Demo"
            />
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertTitle>Try All Buttons!</AlertTitle>
            <AlertDescription>
              Experiment with inline styles (first 3 sections) vs CSS classes (last section). Notice how classes give cleaner, more predictable results!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/10 dark:to-amber-950/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
            Quick Reference Cheat Sheet
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Inline Styles */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Paintbrush className="w-5 h-5 text-purple-600" />
                Inline Style Properties
              </h4>
              <div className="space-y-2">
                {[
                  { code: "element.style.color = 'blue'", desc: 'Text color' },
                  { code: "element.style.backgroundColor = '#fff'", desc: 'Background color' },
                  { code: "element.style.fontSize = '20px'", desc: 'Font size' },
                  { code: "element.style.width = '100px'", desc: 'Element width' },
                  { code: "element.style.padding = '20px'", desc: 'Inner spacing' },
                  { code: "element.style.margin = '10px'", desc: 'Outer spacing' },
                  { code: "element.style.display = 'none'", desc: 'Hide element' },
                  { code: "element.style.opacity = '0.5'", desc: 'Transparency (0-1)' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white dark:bg-slate-950 rounded-lg border">
                    <div className="font-mono text-xs text-purple-600 dark:text-purple-400 mb-1">
                      {item.code}
                    </div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CSS Classes */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                CSS Classes (Recommended)
              </h4>
              <div className="space-y-2">
                {[
                  { code: "element.classList.add('active')", desc: 'Add class' },
                  { code: "element.classList.remove('hidden')", desc: 'Remove class' },
                  { code: "element.classList.toggle('open')", desc: 'Toggle class' },
                  { code: "element.classList.contains('active')", desc: 'Check if has class' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white dark:bg-slate-950 rounded-lg border">
                    <div className="font-mono text-xs text-blue-600 dark:text-blue-400 mb-1">
                      {item.code}
                    </div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
                
                <Alert className="mt-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                  <Lightbulb className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-xs">
                    <strong>Best Practice:</strong> Define styles in CSS, toggle classes with JavaScript. Cleaner and faster!
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card className="border-2 border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-red-600 dark:text-red-400">
            ⚠️ Common Mistakes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                mistake: 'Using hyphens instead of camelCase',
                wrong: "element.style.background-color = 'red';\n// Error: Invalid syntax",
                right: "element.style.backgroundColor = 'red';\n// ✅ Use camelCase",
                tip: 'Remove hyphens and capitalize the next letter!'
              },
              {
                mistake: 'Forgetting units (px, %, rem)',
                wrong: "element.style.width = 200;\n// Doesn't work!",
                right: "element.style.width = '200px';\n// ✅ Include unit",
                tip: 'Always add units to numeric values!'
              },
              {
                mistake: 'Overusing inline styles',
                wrong: "element.style.color = 'red';\nelement.style.fontSize = '20px';\nelement.style.fontWeight = 'bold';\n// Too many styles!",
                right: "// In CSS: .highlight { color: red; ... }\nelement.classList.add('highlight');\n// ✅ Much cleaner!",
                tip: 'Use CSS classes for multiple style changes!'
              },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-red-50 dark:bg-red-950/10 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">
                  ❌ {item.mistake}
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-semibold text-red-600 dark:text-red-400 mb-2">❌ Wrong:</div>
                    <pre className="bg-white dark:bg-slate-950 rounded p-2 text-xs font-mono border border-red-300 dark:border-red-800 whitespace-pre-wrap">
                      {item.wrong}
                    </pre>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2">✅ Correct:</div>
                    <pre className="bg-white dark:bg-slate-950 rounded p-2 text-xs font-mono border border-green-300 dark:border-green-800 whitespace-pre-wrap">
                      {item.right}
                    </pre>
                  </div>
                </div>
                <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                  <Lightbulb className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-sm">
                    <strong>Tip:</strong> {item.tip}
                  </AlertDescription>
                </Alert>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Practice Challenge */}
      <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/10 dark:to-pink-950/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            🎯 Practice Challenge
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                q: 'Change element background color to blue', 
                a: 'element.style.backgroundColor = "blue";\n// or\nelement.style.backgroundColor = "#0000ff";' 
              },
              { 
                q: 'Set font size to 20 pixels', 
                a: 'element.style.fontSize = "20px";' 
              },
              { 
                q: 'Hide an element completely', 
                a: 'element.style.display = "none";\n// or better:\nelement.classList.add("hidden");' 
              },
              { 
                q: 'Make element 50% transparent', 
                a: 'element.style.opacity = "0.5";' 
              },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white dark:bg-slate-950 rounded-lg border">
                <div className="font-semibold mb-2">Question {i + 1}: {item.q}</div>
                <details className="cursor-pointer">
                  <summary className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                    Show Answer
                  </summary>
                  <div className="mt-2 p-3 bg-purple-50 dark:bg-purple-950/20 rounded font-mono text-xs whitespace-pre-wrap">
                    {item.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

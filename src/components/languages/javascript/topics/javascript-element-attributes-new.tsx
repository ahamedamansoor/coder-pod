'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Tag,
  Sparkles,
  Play,
  CheckCircle2,
  Lightbulb,
  Code2,
  Link as LinkIcon,
  Image as ImageIcon,
  ToggleLeft,
  Layers,
} from 'lucide-react';

export default function ElementAttributesNew() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Tag}
        category="JavaScript DOM"
        title="Attributes & Classes"
        description="Master element properties and CSS classes - control every detail of your elements!"
        colorTheme="yellow"
      />

      {/* The 2 Main Concepts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-7 h-7 text-yellow-500" />
            Attributes vs Classes - What's the Difference?
          </CardTitle>
          <CardDescription className="text-base">
            Two powerful ways to control your elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Attributes */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/10 pt-6">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl bg-orange-500/20">
                      <Tag className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-center">Attributes</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Built-in properties of HTML elements
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>href</strong> - Where a link goes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>src</strong> - Image/video source</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>id</strong> - Unique identifier</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>disabled</strong> - Disable buttons</span>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-950 rounded-lg p-3 font-mono text-xs">
                    <code className="text-orange-600 dark:text-orange-400">
                      element.<span className="text-purple-600">setAttribute</span>(<span className="text-green-600">'href'</span>, <span className="text-green-600">'url'</span>)
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Classes */}
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
                  <h3 className="font-bold text-xl text-center">Classes</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    CSS styling groups you can toggle
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Add</strong> - Apply new styles</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Remove</strong> - Take off styles</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Toggle</strong> - Switch on/off</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Check</strong> - See if has class</span>
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
        </CardContent>
      </Card>

      {/* Interactive Operation Cards */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">3 Common Attribute Operations</h2>
          <p className="text-muted-foreground text-lg">
            Click each card to see practical examples
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Links */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeDemo === 'links' ? 'ring-4 ring-blue-500 scale-105' : ''
            }`}
            onClick={() => setActiveDemo(activeDemo === 'links' ? null : 'links')}
          >
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                  <LinkIcon className="w-10 h-10" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">Link Attributes</h3>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  href, target
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong>Use when:</strong> Changing where links go or how they open
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs space-y-2">
                <div className="text-green-600 dark:text-green-400">// Change URL</div>
                <code className="text-blue-600 dark:text-blue-400 block">
                  link.<span className="text-purple-600">href</span> = <span className="text-green-600">'https://example.com'</span>;
                </code>
                <div className="text-green-600 dark:text-green-400 mt-2">// Open in new tab</div>
                <code className="text-blue-600 dark:text-blue-400 block">
                  link.<span className="text-purple-600">target</span> = <span className="text-green-600">'_blank'</span>;
                </code>
              </div>
              {activeDemo === 'links' && (
                <div className="animate-in slide-in-from-top duration-300">
                  <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    <AlertTitle>Link Targets</AlertTitle>
                    <AlertDescription className="text-sm space-y-1">
                      <p><strong>_blank:</strong> New tab</p>
                      <p><strong>_self:</strong> Same tab (default)</p>
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Images */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeDemo === 'images' ? 'ring-4 ring-purple-500 scale-105' : ''
            }`}
            onClick={() => setActiveDemo(activeDemo === 'images' ? null : 'images')}
          >
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                  <ImageIcon className="w-10 h-10" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">Image Attributes</h3>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                  src, alt
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong>Use when:</strong> Changing images or alt text
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs space-y-2">
                <div className="text-green-600 dark:text-green-400">// Change image</div>
                <code className="text-blue-600 dark:text-blue-400 block">
                  img.<span className="text-purple-600">src</span> = <span className="text-green-600">'photo.jpg'</span>;
                </code>
                <div className="text-green-600 dark:text-green-400 mt-2">// Add description</div>
                <code className="text-blue-600 dark:text-blue-400 block">
                  img.<span className="text-purple-600">alt</span> = <span className="text-green-600">'Beautiful sunset'</span>;
                </code>
              </div>
              {activeDemo === 'images' && (
                <div className="animate-in slide-in-from-top duration-300">
                  <Alert className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    <AlertTitle>Always Add Alt Text!</AlertTitle>
                    <AlertDescription className="text-sm">
                      Alt text helps screen readers and shows when image fails to load
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Form Inputs */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeDemo === 'forms' ? 'ring-4 ring-green-500 scale-105' : ''
            }`}
            onClick={() => setActiveDemo(activeDemo === 'forms' ? null : 'forms')}
          >
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg">
                  <ToggleLeft className="w-10 h-10" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">Form Attributes</h3>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  disabled, value
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong>Use when:</strong> Enabling/disabling inputs, getting values
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs space-y-2">
                <div className="text-green-600 dark:text-green-400">// Disable button</div>
                <code className="text-blue-600 dark:text-blue-400 block">
                  btn.<span className="text-purple-600">disabled</span> = <span className="text-orange-600">true</span>;
                </code>
                <div className="text-green-600 dark:text-green-400 mt-2">// Get input value</div>
                <code className="text-blue-600 dark:text-blue-400 block">
                  const text = input.<span className="text-purple-600">value</span>;
                </code>
              </div>
              {activeDemo === 'forms' && (
                <div className="animate-in slide-in-from-top duration-300">
                  <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                    <Sparkles className="h-4 w-4 text-green-600" />
                    <AlertTitle>Disabled vs Hidden</AlertTitle>
                    <AlertDescription className="text-sm space-y-1">
                      <p><strong>disabled:</strong> Shows but can't interact</p>
                      <p><strong>hidden:</strong> Completely invisible</p>
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* classList Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            classList - The 4 Essential Methods
          </CardTitle>
          <CardDescription className="text-base">
            Everything you need to work with CSS classes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                method: 'add()',
                color: 'green',
                desc: 'Add a class to element',
                code: "element.classList.add('active')",
                example: 'Highlight selected item'
              },
              {
                method: 'remove()',
                color: 'red',
                desc: 'Remove a class from element',
                code: "element.classList.remove('active')",
                example: 'Remove highlight'
              },
              {
                method: 'toggle()',
                color: 'purple',
                desc: 'Switch class on/off',
                code: "element.classList.toggle('hidden')",
                example: 'Show/hide content'
              },
              {
                method: 'contains()',
                color: 'blue',
                desc: 'Check if has class',
                code: "element.classList.contains('active')",
                example: 'Test if selected'
              },
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl border-2 bg-gradient-to-br
                ${item.color === 'green' ? 'border-green-200 dark:border-green-800 from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10' : ''}
                ${item.color === 'red' ? 'border-red-200 dark:border-red-800 from-red-50/50 to-rose-50/50 dark:from-red-950/10 dark:to-rose-950/10' : ''}
                ${item.color === 'purple' ? 'border-purple-200 dark:border-purple-800 from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10' : ''}
                ${item.color === 'blue' ? 'border-blue-200 dark:border-blue-800 from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10' : ''}
              `}>
                <h4 className="font-bold text-lg mb-2">{item.method}</h4>
                <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                <div className="bg-white dark:bg-slate-950 rounded p-3 font-mono text-xs mb-2">
                  <code className={`
                    ${item.color === 'green' ? 'text-green-600 dark:text-green-400' : ''}
                    ${item.color === 'red' ? 'text-red-600 dark:text-red-400' : ''}
                    ${item.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : ''}
                    ${item.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : ''}
                  `}>
                    {item.code}
                  </code>
                </div>
                <div className="text-xs text-muted-foreground">
                  <strong>Example:</strong> {item.example}
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
            Interactive Playground
          </CardTitle>
          <CardDescription className="text-base">
            Try attributes and classes yourself - see instant results!
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
    h3 { margin-bottom: 15px; color: #334155; }
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      margin: 5px;
      transition: all 0.3s;
    }
    button:hover { transform: translateY(-2px); }
    .btn-primary { background: #3b82f6; color: white; }
    .btn-success { background: #10b981; color: white; }
    .btn-danger { background: #ef4444; color: white; }
    .btn-warning { background: #f59e0b; color: white; }
    
    #demo-box {
      padding: 30px;
      background: white;
      border: 3px solid #cbd5e1;
      border-radius: 12px;
      text-align: center;
      transition: all 0.3s;
      margin: 15px 0;
    }
    #demo-box.highlight {
      background: #fef3c7;
      border-color: #f59e0b;
      transform: scale(1.05);
    }
    #demo-box.large {
      font-size: 24px;
      padding: 50px;
    }
    #demo-box.success {
      background: #d1fae5;
      border-color: #10b981;
      color: #047857;
    }
    
    #demo-link {
      display: inline-block;
      margin: 10px 0;
      padding: 10px 20px;
      color: #3b82f6;
      text-decoration: none;
      border: 2px solid #3b82f6;
      border-radius: 8px;
      transition: all 0.3s;
    }
    #demo-link:hover { background: #3b82f6; color: white; }
    
    #demo-input {
      width: 100%;
      padding: 12px;
      border: 2px solid #cbd5e1;
      border-radius: 8px;
      font-size: 16px;
      margin: 10px 0;
    }
    #demo-input:disabled {
      background: #f1f5f9;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Attributes & Classes Demo</h1>
    
    <div class="section">
      <h3>Classes (classList)</h3>
      <button class="btn-warning" onclick="toggleHighlight()">Toggle Highlight</button>
      <button class="btn-primary" onclick="toggleLarge()">Toggle Large</button>
      <button class="btn-success" onclick="toggleSuccess()">Toggle Success</button>
      <div id="demo-box">Click buttons to style me!</div>
    </div>

    <div class="section">
      <h3>Link Attributes (href, target)</h3>
      <button class="btn-primary" onclick="changeLink()">Change to Google (New Tab)</button>
      <button class="btn-danger" onclick="resetLink()">Reset Link</button>
      <br>
      <a href="#" id="demo-link" target="_self">Click Me - I'm a link</a>
    </div>

    <div class="section">
      <h3>Form Attributes (disabled, value)</h3>
      <button class="btn-danger" onclick="toggleInput()">Toggle Input</button>
      <button class="btn-success" onclick="fillInput()">Fill with Text</button>
      <button class="btn-warning" onclick="clearInput()">Clear</button>
      <input type="text" id="demo-input" placeholder="Type something...">
    </div>
  </div>

  <script>
    const box = document.getElementById('demo-box');
    const link = document.getElementById('demo-link');
    const input = document.getElementById('demo-input');
    
    // classList methods
    function toggleHighlight() {
      box.classList.toggle('highlight');
    }
    
    function toggleLarge() {
      box.classList.toggle('large');
    }
    
    function toggleSuccess() {
      box.classList.toggle('success');
    }
    
    // Attribute methods - Links
    function changeLink() {
      link.href = 'https://google.com';
      link.target = '_blank';
      link.textContent = '🌐 Google (Opens in New Tab)';
    }
    
    function resetLink() {
      link.href = '#';
      link.target = '_self';
      link.textContent = 'Click Me - I\\'m a link';
    }
    
    // Attribute methods - Forms
    function toggleInput() {
      input.disabled = !input.disabled;
    }
    
    function fillInput() {
      input.value = 'Hello from JavaScript! ' + new Date().toLocaleTimeString();
    }
    
    function clearInput() {
      input.value = '';
    }
  </script>
</body>
</html>`}
              className="w-full h-[600px] rounded-lg"
              title="Interactive Demo"
            />
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertTitle>Try Everything!</AlertTitle>
            <AlertDescription>
              Click the buttons to toggle classes, change link destinations, and enable/disable inputs. Watch how attributes and classes work together!
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
            {/* Attributes */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Tag className="w-5 h-5 text-orange-600" />
                Working with Attributes
              </h4>
              <div className="space-y-2">
                {[
                  { code: "element.setAttribute('href', 'url')", desc: 'Set attribute value' },
                  { code: "element.getAttribute('href')", desc: 'Get attribute value' },
                  { code: "element.removeAttribute('disabled')", desc: 'Remove attribute' },
                  { code: "element.hasAttribute('hidden')", desc: 'Check if has attribute' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white dark:bg-slate-950 rounded-lg border">
                    <div className="font-mono text-xs text-orange-600 dark:text-orange-400 mb-1">
                      {item.code}
                    </div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Classes */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                Working with Classes
              </h4>
              <div className="space-y-2">
                {[
                  { code: "element.classList.add('active')", desc: 'Add one or more classes' },
                  { code: "element.classList.remove('hidden')", desc: 'Remove classes' },
                  { code: "element.classList.toggle('open')", desc: 'Toggle class on/off' },
                  { code: "element.classList.contains('active')", desc: 'Check if has class' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white dark:bg-slate-950 rounded-lg border">
                    <div className="font-mono text-xs text-blue-600 dark:text-blue-400 mb-1">
                      {item.code}
                    </div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
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
                mistake: 'Using className instead of classList',
                wrong: "element.className = 'new-class';\n// Removes ALL existing classes!",
                right: "element.classList.add('new-class');\n// Keeps existing classes",
                tip: 'Always use classList for safer class manipulation!'
              },
              {
                mistake: 'Forgetting quotes in setAttribute',
                wrong: "element.setAttribute(href, 'url');\n// Error: href is not defined",
                right: "element.setAttribute('href', 'url');\n// ✅ Attribute name in quotes",
                tip: 'Attribute names must be strings!'
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
                q: 'Add class "active" to an element', 
                a: 'element.classList.add("active");' 
              },
              { 
                q: 'Change a link to open in new tab', 
                a: 'link.target = "_blank";\n// or\nlink.setAttribute("target", "_blank");' 
              },
              { 
                q: 'Toggle class "hidden" on an element', 
                a: 'element.classList.toggle("hidden");' 
              },
              { 
                q: 'Disable a button', 
                a: 'button.disabled = true;\n// or\nbutton.setAttribute("disabled", "");' 
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

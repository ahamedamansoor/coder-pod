'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Palette,
  Sparkles,
  Code2,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  Paintbrush,
  Layers,
  Zap,
  Globe,
  AlertTriangle,
  RefreshCw,
  PlayCircle,
  Settings,
  Eye,
  Maximize2,
  Move
} from 'lucide-react';

interface DOMStylesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function DOMStyles({ onOpenWebPlayground }: DOMStylesProps) {
  // Animation states for live demos
  const [inlineStyleDemo, setInlineStyleDemo] = useState({
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '10px',
    borderRadius: '0px'
  });

  const [multiStyleDemo, setMultiStyleDemo] = useState({
    width: '200px',
    height: '100px',
    transform: 'scale(1) rotate(0deg)',
    opacity: '1'
  });

  const [cssVariableDemo, setCssVariableDemo] = useState({
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    spacing: '20px'
  });

  const resetInlineDemo = () => setInlineStyleDemo({
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '10px',
    borderRadius: '0px'
  });

  const changeInlineDemo = () => setInlineStyleDemo({
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '12px'
  });

  const resetMultiDemo = () => setMultiStyleDemo({
    width: '200px',
    height: '100px',
    transform: 'scale(1) rotate(0deg)',
    opacity: '1'
  });

  const animateMultiDemo = () => setMultiStyleDemo({
    width: '250px',
    height: '120px',
    transform: 'scale(1.1) rotate(5deg)',
    opacity: '0.8'
  });

  const resetCssVarDemo = () => setCssVariableDemo({
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    spacing: '20px'
  });

  const changeCssVarDemo = () => setCssVariableDemo({
    primary: '#10b981',
    secondary: '#f59e0b',
    spacing: '30px'
  });

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Styles & CSS Demo</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <header>
      <h1>Styles & CSS Manipulation</h1>
      <p>Master styling elements with JavaScript</p>
    </header>

    <main>
      <!-- Inline Styles Demo -->
      <section class="demo-section">
        <h2>1. Inline Styles - style Property</h2>
        <div id="style-box" class="target-box">Styled Element</div>
        <div class="button-group">
          <button onclick="changeSingleStyle()">Change Color</button>
          <button onclick="changeMultipleStyles()">Change Multiple</button>
          <button onclick="resetStyles()">Reset</button>
        </div>
        <div id="style-output" class="output-box"></div>
      </section>

      <!-- Computed Styles Demo -->
      <section class="demo-section">
        <h2>2. Computed Styles - getComputedStyle()</h2>
        <div id="computed-box" class="target-box styled">Element with CSS</div>
        <div class="button-group">
          <button onclick="readComputedStyles()">Read Styles</button>
          <button onclick="compareStyles()">Compare Inline vs Computed</button>
        </div>
        <div id="computed-output" class="output-box"></div>
      </section>

      <!-- CSS Variables Demo -->
      <section class="demo-section">
        <h2>3. CSS Variables - Custom Properties</h2>
        <div id="var-box" class="target-box variable-styled">
          Using CSS Variables
        </div>
        <div class="button-group">
          <button onclick="changePrimaryColor()">Change Primary</button>
          <button onclick="changeSpacing()">Change Spacing</button>
          <button onclick="resetVariables()">Reset</button>
        </div>
        <div id="var-output" class="output-box"></div>
      </section>

      <!-- Animation Demo -->
      <section class="demo-section">
        <h2>4. Dynamic Animations</h2>
        <div id="anim-box" class="target-box">Animate Me!</div>
        <div class="button-group">
          <button onclick="animateBox()">Animate</button>
          <button onclick="fadeElement()">Fade</button>
          <button onclick="moveElement()">Move</button>
          <button onclick="resetAnimation()">Reset</button>
        </div>
      </section>
    </main>

    <div id="console-output">
      <h3>Console Log</h3>
      <div id="output"></div>
    </div>
  </div>

  <script src="./script.js"></script>
</body>
</html>`;

  const playgroundCss = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --spacing: 20px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 2px solid #e2e8f0;
}

h1 {
  font-size: 32px;
  color: #1e293b;
  margin-bottom: 8px;
}

header p {
  color: #64748b;
  font-size: 16px;
}

.demo-section {
  margin-bottom: 32px;
  padding: 24px;
  background: #f8fafc;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.demo-section h2 {
  font-size: 20px;
  color: #334155;
  margin-bottom: 16px;
}

.target-box {
  padding: 24px;
  margin: 16px 0;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.styled {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
}

.variable-styled {
  background: var(--primary-color);
  color: white;
  padding: var(--spacing);
  border: 3px solid var(--secondary-color);
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 16px 0;
}

button {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.output-box {
  margin-top: 16px;
  padding: 16px;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  color: #475569;
  min-height: 60px;
}

#console-output {
  margin-top: 32px;
  padding: 24px;
  background: #0f172a;
  border-radius: 12px;
  color: #22d3ee;
  font-family: 'Courier New', monospace;
  max-height: 300px;
  overflow-y: auto;
}

#console-output h3 {
  color: #22d3ee;
  margin-bottom: 16px;
  font-size: 18px;
}

#output {
  font-size: 13px;
  line-height: 1.8;
  color: #94a3b8;
}`;

  const playgroundJs = `const output = document.getElementById('output');

function log(message, color = '#94a3b8') {
  const line = document.createElement('div');
  line.style.color = color;
  line.textContent = '> ' + message;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

// 1. Inline Styles
function changeSingleStyle() {
  const box = document.getElementById('style-box');
  box.style.backgroundColor = '#10b981';
  box.style.color = 'white';
  
  document.getElementById('style-output').textContent = 
    \`backgroundColor: \${box.style.backgroundColor}\\ncolor: \${box.style.color}\`;
  
  log('Single styles changed', '#10b981');
}

function changeMultipleStyles() {
  const box = document.getElementById('style-box');
  Object.assign(box.style, {
    backgroundColor: '#8b5cf6',
    color: 'white',
    padding: '30px',
    borderRadius: '16px',
    transform: 'scale(1.05)',
    boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)'
  });
  
  log('Multiple styles changed with Object.assign', '#8b5cf6');
}

function resetStyles() {
  const box = document.getElementById('style-box');
  box.style = '';
  document.getElementById('style-output').textContent = 'Styles reset';
  log('Styles reset', '#f59e0b');
}

// 2. Computed Styles
function readComputedStyles() {
  const box = document.getElementById('computed-box');
  const computed = getComputedStyle(box);
  
  const outputBox = document.getElementById('computed-output');
  outputBox.innerHTML = \`
    backgroundColor: \${computed.backgroundColor}<br>
    padding: \${computed.padding}<br>
    borderRadius: \${computed.borderRadius}<br>
    color: \${computed.color}
  \`;
  
  log('Computed styles read', '#22d3ee');
}

function compareStyles() {
  const box = document.getElementById('computed-box');
  box.style.marginTop = '20px';
  
  const computed = getComputedStyle(box);
  
  const outputBox = document.getElementById('computed-output');
  outputBox.innerHTML = \`
    <strong>Inline (style):</strong> \${box.style.marginTop}<br>
    <strong>Computed:</strong> \${computed.marginTop}<br>
    <strong>Computed includes CSS!</strong>
  \`;
  
  log('Inline vs Computed compared', '#f59e0b');
}

// 3. CSS Variables
function changePrimaryColor() {
  document.documentElement.style.setProperty('--primary-color', '#f59e0b');
  document.getElementById('var-output').textContent = 
    '--primary-color changed to #f59e0b';
  log('CSS Variable --primary-color changed', '#f59e0b');
}

function changeSpacing() {
  document.documentElement.style.setProperty('--spacing', '40px');
  document.getElementById('var-output').textContent = 
    '--spacing changed to 40px';
  log('CSS Variable --spacing changed', '#10b981');
}

function resetVariables() {
  document.documentElement.style.setProperty('--primary-color', '#3b82f6');
  document.documentElement.style.setProperty('--spacing', '20px');
  document.getElementById('var-output').textContent = 'Variables reset';
  log('CSS Variables reset', '#f59e0b');
}

// 4. Animations
function animateBox() {
  const box = document.getElementById('anim-box');
  box.style.transform = 'scale(1.2) rotate(10deg)';
  box.style.backgroundColor = '#10b981';
  log('Box animated with transform', '#10b981');
}

function fadeElement() {
  const box = document.getElementById('anim-box');
  let opacity = 1;
  const interval = setInterval(() => {
    opacity -= 0.1;
    box.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(interval);
      log('Fade animation complete', '#ef4444');
    }
  }, 100);
}

function moveElement() {
  const box = document.getElementById('anim-box');
  box.style.transform = 'translateX(100px)';
  box.style.transition = 'transform 0.5s ease';
  log('Box moved with transform', '#8b5cf6');
}

function resetAnimation() {
  const box = document.getElementById('anim-box');
  box.style = '';
  log('Animation reset', '#f59e0b');
}

log('🎨 Styles & CSS Demo Ready!', '#22d3ee');
log('Click buttons to manipulate styles', '#94a3b8');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Palette}
        category="9. DOM Manipulation"
        title="Styles & CSS"
        description="Master manipulating inline styles, computed styles, and CSS variables with JavaScript for dynamic, interactive designs"
        colorTheme="blue"
      />

      {/* Overview Section */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Style Manipulation Matters
          </CardTitle>
          <CardDescription className="text-base">
            Control element appearance dynamically for rich, interactive user experiences
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Paintbrush className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Dynamic Styling</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Change colors, sizes, positions, and more based on user interactions
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              Visual Feedback
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Animations</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Create smooth transitions, fades, and movement with JavaScript
            </p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
              Smooth UX
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h3 className="font-semibold">Theming</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Control CSS variables for global theme changes and customization
            </p>
            <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
              Theme Control
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Inline Styles vs CSS Classes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Inline Styles vs CSS Classes - When to Use Each
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the critical difference and best practices
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <Paintbrush className="w-5 h-5" />
                Inline Styles (element.style)
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-foreground">✅ Use for:</strong>
                  <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                    <li>• Dynamic values (calculated sizes, positions)</li>
                    <li>• Animations and transitions</li>
                    <li>• User-specific customization</li>
                    <li>• Values from JavaScript variables</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground">⚠️ Avoid for:</strong>
                  <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                    <li>• Static styling (use CSS classes)</li>
                    <li>• Complex selectors or pseudo-elements</li>
                    <li>• Multiple related properties</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                CSS Classes (classList)
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-foreground">✅ Use for:</strong>
                  <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                    <li>• Predefined styles and themes</li>
                    <li>• State changes (active, disabled, error)</li>
                    <li>• Responsive design</li>
                    <li>• Cleaner, maintainable code</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground">⚠️ Avoid for:</strong>
                  <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                    <li>• Dynamic calculated values</li>
                    <li>• Per-element unique styles</li>
                    <li>• Fine-grained animation control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Golden Rule</AlertTitle>
            <AlertDescription>
              Use <strong>CSS classes</strong> for styling, <strong>inline styles</strong> for dynamic values. Combine them for the best results!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Section 1: Inline Styles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Paintbrush className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            1. Inline Styles - The style Property
          </CardTitle>
          <CardDescription className="text-base">
            Manipulate individual CSS properties directly on elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
            <h4 className="font-semibold mb-3 text-cyan-700 dark:text-cyan-300">
              How Inline Styles Work
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              The <code className="text-xs">style</code> property gives you direct access to an element's inline CSS. Properties use camelCase (backgroundColor instead of background-color).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2">CSS Property</h5>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs">
{`background-color
font-size
border-radius
padding-top
margin-left`}</pre>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2">JavaScript Property</h5>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs">
{`backgroundColor
fontSize
borderRadius
paddingTop
marginLeft`}</pre>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Setting Single Properties</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`const box = document.querySelector('.box');

// Set individual properties
box.style.backgroundColor = '#3b82f6';
box.style.color = 'white';
box.style.padding = '20px';
box.style.borderRadius = '12px';

// Numbers need units
box.style.width = '300px';
box.style.fontSize = '18px';

// Some properties are unitless
box.style.opacity = '0.8';
box.style.zIndex = '10';

console.log(box.style.backgroundColor);
// Output: "rgb(59, 130, 246)"`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Setting Multiple Properties</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`const box = document.querySelector('.box');

// Method 1: Object.assign() - Clean!
Object.assign(box.style, {
  backgroundColor: '#10b981',
  color: 'white',
  padding: '30px',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  transform: 'scale(1.05)'
});

// Method 2: cssText - String of CSS
box.style.cssText = \`
  background-color: #8b5cf6;
  color: white;
  padding: 20px;
  border-radius: 12px;
\`;

// Method 3: Individual (verbose)
box.style.backgroundColor = '#f59e0b';
box.style.color = 'white';

// Output: Styled element`}</pre>
            </div>
          </div>

          {/* Live Inline Style Demo */}
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Live Demo - Inline Styles
            </h4>
            <div className="space-y-4">
              <div 
                className="p-6 rounded-lg border-2 transition-all duration-300 text-center font-semibold"
                style={{
                  backgroundColor: inlineStyleDemo.backgroundColor,
                  color: inlineStyleDemo.color,
                  padding: inlineStyleDemo.padding,
                  borderRadius: inlineStyleDemo.borderRadius,
                  borderColor: inlineStyleDemo.color
                }}
              >
                Inline Styled Element
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={changeInlineDemo}>
                  Apply Styles
                </Button>
                <Button size="sm" variant="outline" onClick={resetInlineDemo}>
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset
                </Button>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded border text-xs font-mono space-y-1">
                <div>backgroundColor: {inlineStyleDemo.backgroundColor}</div>
                <div>color: {inlineStyleDemo.color}</div>
                <div>padding: {inlineStyleDemo.padding}</div>
                <div>borderRadius: {inlineStyleDemo.borderRadius}</div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Removing Styles
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const box = document.querySelector('.box');

// Method 1: Set to empty string
box.style.backgroundColor = '';
box.style.color = '';

// Method 2: removeProperty()
box.style.removeProperty('background-color');

// Method 3: Reset all inline styles
box.style.cssText = '';
// or
box.removeAttribute('style');

console.log('Styles removed');
// Output: "Styles removed"`}</pre>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Real-World: Progress Bar
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <div id="progress-bar"></div>

const progressBar = document.getElementById('progress-bar');
let progress = 0;

function updateProgress() {
  // Update width based on progress
  progressBar.style.width = progress + '%';
  
  // Change color based on progress
  if (progress < 30) {
    progressBar.style.backgroundColor = '#ef4444';
  } else if (progress < 70) {
    progressBar.style.backgroundColor = '#f59e0b';
  } else {
    progressBar.style.backgroundColor = '#10b981';
  }
  
  // Add transition
  progressBar.style.transition = 'all 0.3s ease';
  
  console.log(\`Progress: \${progress}%\`);
}

// Simulate progress
setInterval(() => {
  if (progress < 100) {
    progress += 10;
    updateProgress();
  }
}, 500);

// Output: Animated progress bar`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Computed Styles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Eye className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            2. Computed Styles - getComputedStyle()
          </CardTitle>
          <CardDescription className="text-base">
            Read the actual rendered styles, including CSS from stylesheets
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
            <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
              Why Computed Styles Matter
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              <code className="text-xs">element.style</code> only reads <strong>inline styles</strong>. Use <code className="text-xs">getComputedStyle()</code> to read the <strong>actual rendered styles</strong>, including CSS from stylesheets, inherited values, and browser defaults.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold mb-2 text-rose-700 dark:text-rose-300">element.style ❌</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Only inline styles</li>
                  <li>• Returns empty if no inline</li>
                  <li>• Read/Write</li>
                  <li>• Changes element</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">getComputedStyle() ✅</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• All applied styles</li>
                  <li>• Includes CSS, inheritance</li>
                  <li>• Read-only</li>
                  <li>• Doesn't change element</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Basic Usage</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`const box = document.querySelector('.box');

// Get computed styles
const computed = getComputedStyle(box);

// Read specific property
console.log(computed.backgroundColor);
// Output: "rgb(59, 130, 246)"

console.log(computed.width);
// Output: "300px"

console.log(computed.fontSize);
// Output: "16px"

// Get pseudo-element styles
const before = getComputedStyle(box, '::before');
console.log(before.content);
// Output: "attr value"`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Comparison Example</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// CSS: .box { background-color: blue; }
// HTML: <div class="box"></div>

const box = document.querySelector('.box');

// Inline style (empty - no inline styles)
console.log(box.style.backgroundColor);
// Output: "" (empty string)

// Computed style (from CSS)
const computed = getComputedStyle(box);
console.log(computed.backgroundColor);
// Output: "rgb(0, 0, 255)"

// Now set inline style
box.style.backgroundColor = 'red';
console.log(box.style.backgroundColor);
// Output: "red"
console.log(computed.backgroundColor);
// Output: "rgb(255, 0, 0)"

// Inline overrides CSS!`}</pre>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Real-World: Responsive Breakpoint Detection
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Detect if element is visible/hidden by CSS
function isElementVisible(element) {
  const computed = getComputedStyle(element);
  return computed.display !== 'none' && 
         computed.visibility !== 'hidden' &&
         computed.opacity !== '0';
}

// Get actual dimensions (including padding)
function getElementSize(element) {
  const computed = getComputedStyle(element);
  return {
    width: parseFloat(computed.width),
    height: parseFloat(computed.height),
    paddingTop: parseFloat(computed.paddingTop),
    paddingLeft: parseFloat(computed.paddingLeft)
  };
}

const sidebar = document.querySelector('.sidebar');
console.log(isElementVisible(sidebar));
// Output: true or false

console.log(getElementSize(sidebar));
// Output: {width: 300, height: 600, paddingTop: 20, paddingLeft: 20}

// Useful for responsive layouts!`}</pre>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important: Read-Only</AlertTitle>
            <AlertDescription>
              <code className="text-xs">getComputedStyle()</code> returns a read-only object. You cannot change styles through it. Use <code className="text-xs">element.style</code> to modify styles.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Section 3: CSS Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Settings className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            3. CSS Variables (Custom Properties)
          </CardTitle>
          <CardDescription className="text-base">
            Control global theme values and create dynamic styling systems
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">
              What are CSS Variables?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              CSS Variables (Custom Properties) are values you define once and reuse throughout your CSS. JavaScript can read and change them, making them perfect for themes, dark mode, and dynamic styling!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2">In CSS</h5>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs">
{`:root {
  --primary-color: #3b82f6;
  --spacing: 20px;
  --border-radius: 12px;
}

.box {
  background: var(--primary-color);
  padding: var(--spacing);
  border-radius: var(--border-radius);
}`}</pre>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2">In JavaScript</h5>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs">
{`// Read
const root = document.documentElement;
const color = getComputedStyle(root)
  .getPropertyValue('--primary-color');

// Write
root.style.setProperty(
  '--primary-color', 
  '#10b981'
);`}</pre>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Reading CSS Variables</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Get root element
const root = document.documentElement;

// Method 1: getComputedStyle + getPropertyValue
const primaryColor = getComputedStyle(root)
  .getPropertyValue('--primary-color');

console.log(primaryColor);
// Output: "#3b82f6"

// Method 2: From specific element
const box = document.querySelector('.box');
const boxBg = getComputedStyle(box)
  .getPropertyValue('--box-background');

// Trim whitespace
const trimmed = primaryColor.trim();
console.log(trimmed);
// Output: "#3b82f6"`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Writing CSS Variables</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Get root element
const root = document.documentElement;

// Set on :root (global)
root.style.setProperty('--primary-color', '#10b981');
root.style.setProperty('--spacing', '30px');
root.style.setProperty('--font-size', '18px');

// Set on specific element
const box = document.querySelector('.box');
box.style.setProperty('--box-color', '#8b5cf6');

// Remove variable
root.style.removeProperty('--old-variable');

console.log('CSS variables updated');
// Output: "CSS variables updated"

// All elements using these variables 
// are automatically updated!`}</pre>
            </div>
          </div>

          {/* Live CSS Variable Demo */}
          <div className="p-6 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              Live Demo - CSS Variables
            </h4>
            <div className="space-y-4">
              <div 
                className="p-6 rounded-lg text-center font-semibold"
                style={{
                  backgroundColor: cssVariableDemo.primary,
                  color: 'white',
                  padding: cssVariableDemo.spacing,
                  border: `4px solid ${cssVariableDemo.secondary}`
                }}
              >
                Styled with CSS Variables
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={changeCssVarDemo}>
                  Change Theme
                </Button>
                <Button size="sm" variant="outline" onClick={resetCssVarDemo}>
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset
                </Button>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded border text-xs font-mono space-y-1">
                <div>--primary: {cssVariableDemo.primary}</div>
                <div>--secondary: {cssVariableDemo.secondary}</div>
                <div>--spacing: {cssVariableDemo.spacing}</div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Real-World: Dark Mode Toggle
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Define CSS variables in :root
// :root {
//   --bg-color: white;
//   --text-color: black;
//   --border-color: #e5e7eb;
// }

const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function setLightTheme() {
  root.style.setProperty('--bg-color', 'white');
  root.style.setProperty('--text-color', 'black');
  root.style.setProperty('--border-color', '#e5e7eb');
  localStorage.setItem('theme', 'light');
}

function setDarkTheme() {
  root.style.setProperty('--bg-color', '#1e293b');
  root.style.setProperty('--text-color', 'white');
  root.style.setProperty('--border-color', '#475569');
  localStorage.setItem('theme', 'dark');
}

themeToggle.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'light') {
    setDarkTheme();
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    setLightTheme();
    themeToggle.textContent = '🌙 Dark Mode';
  }
});

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme') || 'light';
  saved === 'dark' ? setDarkTheme() : setLightTheme();
});

// Output: Complete dark mode system!`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Animations & Transitions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Move className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            4. Animations & Transitions with JavaScript
          </CardTitle>
          <CardDescription className="text-base">
            Create smooth animations by manipulating styles dynamically
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                CSS Transitions
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const box = document.querySelector('.box');

// Add transition
box.style.transition = 'all 0.3s ease';

// Change property (will animate!)
box.style.transform = 'translateX(100px)';
box.style.backgroundColor = '#10b981';

// Multiple transitions
box.style.transition = \`
  transform 0.3s ease,
  background-color 0.5s linear,
  opacity 0.2s ease-in
\`;

// Remove transition
box.style.transition = 'none';

console.log('Smooth transition applied');
// Output: "Smooth transition applied"`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Maximize2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Transform & Animate
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const box = document.querySelector('.box');

// Scale
box.style.transform = 'scale(1.2)';

// Rotate
box.style.transform = 'rotate(45deg)';

// Translate
box.style.transform = 'translate(50px, 100px)';

// Combine multiple transforms
box.style.transform = \`
  scale(1.1)
  rotate(10deg)
  translateY(-20px)
\`;

// 3D transforms
box.style.transform = 'rotateY(180deg)';
box.style.transformStyle = 'preserve-3d';

console.log('Transformed!');
// Output: "Transformed!"`}</pre>
            </div>
          </div>

          {/* Live Animation Demo */}
          <div className="p-6 bg-gradient-to-br from-amber-50/40 to-yellow-50/40 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Live Demo - Animated Transforms
            </h4>
            <div className="space-y-4">
              <div 
                className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white text-center font-semibold mx-auto"
                style={{
                  width: multiStyleDemo.width,
                  height: multiStyleDemo.height,
                  transform: multiStyleDemo.transform,
                  opacity: multiStyleDemo.opacity,
                  transition: 'all 0.5s ease'
                }}
              >
                Animated Box
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={animateMultiDemo}>
                  Animate
                </Button>
                <Button size="sm" variant="outline" onClick={resetMultiDemo}>
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset
                </Button>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded border text-xs font-mono space-y-1">
                <div>width: {multiStyleDemo.width}</div>
                <div>height: {multiStyleDemo.height}</div>
                <div>transform: {multiStyleDemo.transform}</div>
                <div>opacity: {multiStyleDemo.opacity}</div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Real-World: Fade In/Out
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function fadeOut(element, duration = 300) {
  element.style.transition = \`opacity \${duration}ms\`;
  element.style.opacity = '0';
  
  setTimeout(() => {
    element.style.display = 'none';
  }, duration);
}

function fadeIn(element, duration = 300) {
  element.style.display = 'block';
  element.style.opacity = '0';
  element.style.transition = \`opacity \${duration}ms\`;
  
  // Trigger reflow
  element.offsetHeight;
  
  element.style.opacity = '1';
}

// Usage
const modal = document.querySelector('.modal');
fadeIn(modal, 500);

setTimeout(() => {
  fadeOut(modal, 500);
}, 3000);

// Output: Smooth fade animations`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical styling patterns you'll use every day
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1 */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                1. Loading Spinner
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const spinner = document.getElementById('spinner');

function showLoading() {
  spinner.style.display = 'block';
  spinner.style.animation = 'spin 1s linear infinite';
  
  // Disable interactions
  document.body.style.pointerEvents = 'none';
  document.body.style.opacity = '0.6';
}

function hideLoading() {
  spinner.style.display = 'none';
  
  // Re-enable interactions
  document.body.style.pointerEvents = 'auto';
  document.body.style.opacity = '1';
}

// Usage with fetch
showLoading();
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    hideLoading();
    console.log('Data loaded');
  });

// Output: Professional loading state`}</pre>
            </div>

            {/* Example 2 */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                2. Tooltip Positioning
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function showTooltip(element, text) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  document.body.appendChild(tooltip);
  
  // Position tooltip
  const rect = element.getBoundingClientRect();
  tooltip.style.position = 'fixed';
  tooltip.style.left = rect.left + (rect.width / 2) + 'px';
  tooltip.style.top = rect.top - 40 + 'px';
  tooltip.style.transform = 'translateX(-50%)';
  
  // Style
  Object.assign(tooltip.style, {
    backgroundColor: '#1e293b',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '14px',
    pointerEvents: 'none',
    zIndex: '1000',
    opacity: '0',
    transition: 'opacity 0.2s'
  });
  
  setTimeout(() => tooltip.style.opacity = '1', 10);
  
  return tooltip;
}

// Output: Dynamic tooltip`}</pre>
            </div>

            {/* Example 3 */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                3. Scroll Progress Bar
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const progressBar = document.getElementById('progress');

// Style the bar
Object.assign(progressBar.style, {
  position: 'fixed',
  top: '0',
  left: '0',
  height: '4px',
  backgroundColor: '#3b82f6',
  zIndex: '9999',
  transition: 'width 0.1s ease'
});

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - 
                    window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  progressBar.style.width = scrollPercent + '%';
  
  // Change color based on progress
  if (scrollPercent > 75) {
    progressBar.style.backgroundColor = '#10b981';
  } else if (scrollPercent > 50) {
    progressBar.style.backgroundColor = '#f59e0b';
  }
});

// Output: Scroll progress indicator`}</pre>
            </div>

            {/* Example 4 */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                4. Highlight Search Results
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function highlightText(element, searchTerm) {
  const text = element.textContent;
  const regex = new RegExp(searchTerm, 'gi');
  
  // Create highlighted HTML
  const highlighted = text.replace(regex, match => {
    return \`<mark>\${match}</mark>\`;
  });
  
  element.innerHTML = highlighted;
  
  // Style all marks
  const marks = element.querySelectorAll('mark');
  marks.forEach(mark => {
    Object.assign(mark.style, {
      backgroundColor: '#fef3c7',
      color: '#92400e',
      padding: '2px 4px',
      borderRadius: '3px',
      fontWeight: 'bold'
    });
  });
}

// Usage
const content = document.getElementById('content');
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (e) => {
  const term = e.target.value;
  if (term.length > 2) {
    highlightText(content, term);
  }
});

// Output: Live search highlighting`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices & Performance
          </CardTitle>
          <CardDescription className="text-base">
            Write efficient, maintainable styling code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Do This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Do This ✅
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Use CSS classes for static styles</li>
                <li>✅ Use inline styles for dynamic/calculated values</li>
                <li>✅ Batch style changes with <code className="text-xs">Object.assign()</code></li>
                <li>✅ Use CSS variables for themes</li>
                <li>✅ Add transitions for smooth changes</li>
                <li>✅ Use <code className="text-xs">getComputedStyle()</code> to read styles</li>
                <li>✅ Cache computed values if reading repeatedly</li>
                <li>✅ Use transforms for animations (GPU accelerated)</li>
              </ul>
            </div>
            
            {/* Avoid This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This ❌
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>❌ Setting styles one-by-one in loops</li>
                <li>❌ Reading <code className="text-xs">element.style</code> for CSS styles</li>
                <li>❌ Inline styles for everything</li>
                <li>❌ Animating <code className="text-xs">width/height</code> (use transform)</li>
                <li>❌ Reading computed styles in loops</li>
                <li>❌ Forgetting units (<code className="text-xs">px</code>, <code className="text-xs">%</code>, etc.)</li>
                <li>❌ Mixing camelCase/kebab-case</li>
                <li>❌ Not checking for null elements</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                ❌ Bad: Slow Performance
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`// BAD: Individual style changes (triggers reflow each time)
box.style.width = '300px';
box.style.height = '200px';
box.style.backgroundColor = 'blue';
box.style.padding = '20px';
box.style.borderRadius = '12px';

// BAD: Reading computed styles in loop
for (let i = 0; i < 1000; i++) {
  const computed = getComputedStyle(elements[i]);
  const width = computed.width; // Slow!
}

// BAD: Animating width (triggers layout)
setInterval(() => {
  box.style.width = parseInt(box.style.width) + 1 + 'px';
}, 16);`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                ✅ Good: Optimized
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`// GOOD: Batch changes (single reflow)
Object.assign(box.style, {
  width: '300px',
  height: '200px',
  backgroundColor: 'blue',
  padding: '20px',
  borderRadius: '12px'
});

// GOOD: Cache computed values
const computedValues = Array.from(elements).map(el => 
  getComputedStyle(el).width
);

// GOOD: Use transform (GPU accelerated)
let scale = 1;
setInterval(() => {
  scale += 0.01;
  box.style.transform = \`scaleX(\${scale})\`;
}, 16);`}</pre>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Performance Tip</AlertTitle>
            <AlertDescription>
              Use <code className="text-xs">transform</code> and <code className="text-xs">opacity</code> for animations - they're GPU accelerated and don't trigger layout recalculation!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <PlayCircle className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
              Interactive Playground
            </CardTitle>
            <CardDescription className="text-base">
              Practice all style manipulation techniques in a live environment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Open the interactive playground to experiment with inline styles, computed styles, CSS variables, and animations. See real-time console output for every change!
            </p>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border">
              <h4 className="font-semibold mb-2 text-sm">What you'll practice:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Manipulate inline styles with <code className="text-xs">style</code> property</li>
                <li>• Read actual rendered styles with <code className="text-xs">getComputedStyle()</code></li>
                <li>• Control CSS variables for theme changes</li>
                <li>• Create animations with transforms and transitions</li>
                <li>• Compare inline vs computed styles</li>
                <li>• See console output for all operations</li>
              </ul>
            </div>
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open Interactive Playground
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Quick Reference Cheat Sheet
          </CardTitle>
          <CardDescription className="text-base">
            All styling methods at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900">
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
                    Method
                  </th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
                    Purpose
                  </th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">element.style.property</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Set inline style
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.style.color = 'red'</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">Object.assign()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Set multiple styles
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">Object.assign(el.style, {'{...}'})</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">getComputedStyle()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Read rendered styles
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">getComputedStyle(el).color</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">setProperty()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Set CSS variable
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.style.setProperty('--var', 'value')</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">getPropertyValue()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Read CSS variable
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">getComputedStyle(el).getPropertyValue('--var')</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">removeProperty()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Remove style
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.style.removeProperty('color')</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">style.cssText</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Set/Get all inline CSS
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.style.cssText = 'color: red; ...'</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

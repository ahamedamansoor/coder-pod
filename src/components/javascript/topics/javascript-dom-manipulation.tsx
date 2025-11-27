'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Wand2,
  Sparkles,
  Code2,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  Plus,
  Trash2,
  Edit3,
  Zap,
  Globe,
  AlertTriangle,
  Copy,
  RefreshCw,
  PlayCircle,
  Layers,
  FileText,
  Image as ImageIcon
} from 'lucide-react';

interface DOMManipulationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function DOMManipulation({ onOpenWebPlayground }: DOMManipulationProps) {
  // Animation states
  const [textContentDemo, setTextContentDemo] = useState('Original Text');
  const [innerHTMLDemo, setInnerHTMLDemo] = useState('Original <strong>HTML</strong>');
  const [elementList, setElementList] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [classList, setClassList] = useState(['default']);
  const [attributeValue, setAttributeValue] = useState('Click me!');

  const resetTextContent = () => setTextContentDemo('Original Text');
  const changeTextContent = () => setTextContentDemo('Updated Text Content! 🎉');

  const resetInnerHTML = () => setInnerHTMLDemo('Original <strong>HTML</strong>');
  const changeInnerHTML = () => setInnerHTMLDemo('<em>New</em> <strong style="color: #10b981;">Styled</strong> Content!');

  const resetElementList = () => setElementList(['Item 1', 'Item 2', 'Item 3']);
  const addElement = () => setElementList([...elementList, `Item ${elementList.length + 1}`]);
  const removeElement = () => {
    if (elementList.length > 0) {
      setElementList(elementList.slice(0, -1));
    }
  };

  const resetClassList = () => setClassList(['default']);
  const toggleClass = (className: string) => {
    setClassList(prev => 
      prev.includes(className) 
        ? prev.filter(c => c !== className)
        : [...prev, className]
    );
  };

  const resetAttribute = () => setAttributeValue('Click me!');
  const changeAttribute = () => setAttributeValue('Attribute Changed! ✨');

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DOM Manipulation Playground</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <header>
      <h1>DOM Manipulation Demo</h1>
      <p>Interact with buttons to see DOM changes in real-time</p>
    </header>

    <main>
      <!-- Text Content Demo -->
      <section class="demo-section">
        <h2>1. textContent - Change Text</h2>
        <div id="text-target" class="target-box">Original Text</div>
        <div class="button-group">
          <button onclick="changeTextContent()">Change Text</button>
          <button onclick="resetTextContent()">Reset</button>
        </div>
      </section>

      <!-- innerHTML Demo -->
      <section class="demo-section">
        <h2>2. innerHTML - Add HTML</h2>
        <div id="html-target" class="target-box">Original HTML</div>
        <div class="button-group">
          <button onclick="changeInnerHTML()">Add HTML</button>
          <button onclick="resetInnerHTML()">Reset</button>
        </div>
      </section>

      <!-- Create Elements Demo -->
      <section class="demo-section">
        <h2>3. createElement - Add/Remove</h2>
        <div id="list-container" class="target-box">
          <div class="list-item">Item 1</div>
          <div class="list-item">Item 2</div>
          <div class="list-item">Item 3</div>
        </div>
        <div class="button-group">
          <button onclick="addListItem()">Add Item</button>
          <button onclick="removeListItem()">Remove Item</button>
          <button onclick="resetList()">Reset</button>
        </div>
      </section>

      <!-- ClassList Demo -->
      <section class="demo-section">
        <h2>4. classList - Toggle Styles</h2>
        <div id="class-target" class="target-box">Styled Element</div>
        <div class="button-group">
          <button onclick="toggleBlue()">Toggle Blue</button>
          <button onclick="toggleLarge()">Toggle Large</button>
          <button onclick="resetClasses()">Reset</button>
        </div>
      </section>

      <!-- Attribute Demo -->
      <section class="demo-section">
        <h2>5. setAttribute - Change Attributes</h2>
        <button id="attr-button" data-status="default">Default Button</button>
        <div class="button-group">
          <button onclick="changeAttributes()">Change Attributes</button>
          <button onclick="resetAttributes()">Reset</button>
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
  padding: 20px;
  margin: 16px 0;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  min-height: 60px;
  transition: all 0.3s ease;
}

.list-item {
  padding: 12px 16px;
  margin: 8px 0;
  background: #f1f5f9;
  border-left: 4px solid #3b82f6;
  border-radius: 4px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
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

#attr-button {
  display: block;
  width: 200px;
  margin: 16px 0;
  background: #8b5cf6;
}

#attr-button[data-status="changed"] {
  background: #10b981;
}

/* Dynamic classes for classList demo */
.blue-bg {
  background: #dbeafe !important;
  border-color: #3b82f6 !important;
  color: #1e40af !important;
}

.large-text {
  font-size: 24px !important;
  font-weight: bold !important;
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
}

.highlight {
  animation: pulse 0.5s ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
}`;

  const playgroundJs = `let itemCount = 3;
const output = document.getElementById('output');

function log(message, color = '#94a3b8') {
  const line = document.createElement('div');
  line.style.color = color;
  line.textContent = '> ' + message;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function highlight(element) {
  element.classList.add('highlight');
  setTimeout(() => element.classList.remove('highlight'), 500);
}

// 1. textContent
function changeTextContent() {
  const el = document.getElementById('text-target');
  el.textContent = 'Text Changed with textContent! 🎉';
  highlight(el);
  log('textContent changed', '#10b981');
}

function resetTextContent() {
  const el = document.getElementById('text-target');
  el.textContent = 'Original Text';
  log('textContent reset', '#f59e0b');
}

// 2. innerHTML
function changeInnerHTML() {
  const el = document.getElementById('html-target');
  el.innerHTML = '<strong style="color: #8b5cf6;">New HTML</strong> with <em>styling</em>!';
  highlight(el);
  log('innerHTML changed with HTML tags', '#10b981');
}

function resetInnerHTML() {
  const el = document.getElementById('html-target');
  el.innerHTML = 'Original HTML';
  log('innerHTML reset', '#f59e0b');
}

// 3. createElement
function addListItem() {
  itemCount++;
  const container = document.getElementById('list-container');
  const newItem = document.createElement('div');
  newItem.className = 'list-item';
  newItem.textContent = \`Item \${itemCount}\`;
  container.appendChild(newItem);
  log(\`Added Item \${itemCount}\`, '#10b981');
}

function removeListItem() {
  const container = document.getElementById('list-container');
  const items = container.querySelectorAll('.list-item');
  if (items.length > 0) {
    container.removeChild(items[items.length - 1]);
    itemCount--;
    log('Removed last item', '#ef4444');
  }
}

function resetList() {
  const container = document.getElementById('list-container');
  container.innerHTML = '';
  for (let i = 1; i <= 3; i++) {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.textContent = \`Item \${i}\`;
    container.appendChild(item);
  }
  itemCount = 3;
  log('List reset to 3 items', '#f59e0b');
}

// 4. classList
function toggleBlue() {
  const el = document.getElementById('class-target');
  el.classList.toggle('blue-bg');
  highlight(el);
  log(\`Blue background: \${el.classList.contains('blue-bg') ? 'ON' : 'OFF'}\`, '#3b82f6');
}

function toggleLarge() {
  const el = document.getElementById('class-target');
  el.classList.toggle('large-text');
  highlight(el);
  log(\`Large text: \${el.classList.contains('large-text') ? 'ON' : 'OFF'}\`, '#8b5cf6');
}

function resetClasses() {
  const el = document.getElementById('class-target');
  el.className = 'target-box';
  log('Classes reset', '#f59e0b');
}

// 5. setAttribute
function changeAttributes() {
  const btn = document.getElementById('attr-button');
  btn.setAttribute('data-status', 'changed');
  btn.setAttribute('title', 'Attributes have been changed!');
  btn.textContent = 'Attributes Changed! ✨';
  log('Attributes changed: data-status and title', '#10b981');
}

function resetAttributes() {
  const btn = document.getElementById('attr-button');
  btn.setAttribute('data-status', 'default');
  btn.removeAttribute('title');
  btn.textContent = 'Default Button';
  log('Attributes reset', '#f59e0b');
}

log('🎯 DOM Manipulation Demo Ready!', '#22d3ee');
log('Click buttons to see changes in real-time', '#94a3b8');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Wand2}
        category="9. DOM Manipulation"
        title="DOM Manipulation"
        description="Master creating, modifying, and removing DOM elements dynamically - the key to interactive web applications"
        colorTheme="blue"
      />

      {/* Overview Section */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why DOM Manipulation Matters
          </CardTitle>
          <CardDescription className="text-base">
            DOM manipulation is the foundation of dynamic, interactive web applications
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Dynamic Content</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Change text, HTML, and attributes without page reloads
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              Real-Time Updates
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Plus className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Create & Remove</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Add new elements or remove existing ones dynamically
            </p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
              Full Control
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h3 className="font-semibold">Interactive UIs</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Build responsive interfaces that react to user actions
            </p>
            <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
              User Experience
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* What is DOM Manipulation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is DOM Manipulation?
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the core concept and techniques
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              <strong className="text-foreground">DOM Manipulation</strong> is the process of using JavaScript to change the structure, content, or styling of HTML elements after the page has loaded. It's what makes websites dynamic and interactive.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Common DOM manipulation tasks include:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground ml-6">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Changing content</strong> - Update text or HTML inside elements</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Creating elements</strong> - Add new HTML elements to the page</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Removing elements</strong> - Delete elements from the DOM tree</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Modifying attributes</strong> - Change element properties like class, id, src</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Styling elements</strong> - Apply CSS styles programmatically</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border-2 border-blue-200/60 dark:border-blue-800/40 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 p-6">
            <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Analogy
            </h4>
            <p className="text-sm text-muted-foreground">
              Think of your HTML page as a LEGO structure 🧱. DOM manipulation is like having the power to:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground ml-6">
              <li>• <strong>Change pieces</strong> - Swap text or content (textContent)</li>
              <li>• <strong>Add new pieces</strong> - Build new elements (createElement)</li>
              <li>• <strong>Remove pieces</strong> - Delete elements (remove)</li>
              <li>• <strong>Paint pieces</strong> - Change colors and styles (classList, style)</li>
              <li>• <strong>Move pieces around</strong> - Reorder elements (insertBefore, append)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 1: textContent vs innerHTML */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FileText className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            1. Changing Element Content
          </CardTitle>
          <CardDescription className="text-base">
            textContent vs innerHTML - Understanding the difference
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* textContent */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                textContent - Plain Text Only
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto mb-3">
{`// Get element
const heading = document.querySelector('h1');

// Read text content
console.log(heading.textContent);
// Output: "Welcome to My Site"

// Change text content
heading.textContent = 'New Title';

// HTML tags are treated as text
heading.textContent = '<strong>Bold</strong>';
// Shows: <strong>Bold</strong> (not bold!)`}</pre>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">✅ Safe from XSS attacks</p>
                <p className="text-xs text-muted-foreground">✅ Faster performance</p>
                <p className="text-xs text-muted-foreground">❌ No HTML formatting</p>
              </div>
            </div>

            {/* innerHTML */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                innerHTML - HTML Content
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto mb-3">
{`// Get element
const container = document.querySelector('.container');

// Read HTML content
console.log(container.innerHTML);
// Output: "<p>Content</p>"

// Change with HTML
container.innerHTML = '<strong>Bold Text</strong>';
// Shows: Bold Text (actually bold!)

// Add multiple elements
container.innerHTML = \`
  <h2>Title</h2>
  <p>Paragraph</p>
\`;
`}</pre>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">✅ Supports HTML formatting</p>
                <p className="text-xs text-muted-foreground">❌ Security risk if user input</p>
                <p className="text-xs text-muted-foreground">⚠️ Replaces all content</p>
              </div>
            </div>
          </div>

          {/* Live Demo */}
          <div className="p-6 bg-gradient-to-br from-amber-50/40 to-yellow-50/40 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Live Demo - Try It!
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold mb-2">textContent Demo:</p>
                <div className="p-4 bg-white dark:bg-gray-900 rounded border-2 border-blue-300 dark:border-blue-700 min-h-[60px] flex items-center justify-center">
                  {textContentDemo}
                </div>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" onClick={changeTextContent}>
                    Change Text
                  </Button>
                  <Button size="sm" variant="outline" onClick={resetTextContent}>
                    <RefreshCw className="w-3 h-3 mr-1" />
                    Reset
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">innerHTML Demo:</p>
                <div 
                  className="p-4 bg-white dark:bg-gray-900 rounded border-2 border-purple-300 dark:border-purple-700 min-h-[60px] flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: innerHTMLDemo }}
                />
                <div className="flex gap-2 mt-2">
                  <Button size="sm" onClick={changeInnerHTML}>
                    Change HTML
                  </Button>
                  <Button size="sm" variant="outline" onClick={resetInnerHTML}>
                    <RefreshCw className="w-3 h-3 mr-1" />
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Security Warning</AlertTitle>
            <AlertDescription>
              Never use <code className="text-xs">innerHTML</code> with user input! It can lead to XSS (Cross-Site Scripting) attacks. Use <code className="text-xs">textContent</code> for user data.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Section 2: Creating Elements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Plus className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            2. Creating New Elements
          </CardTitle>
          <CardDescription className="text-base">
            Build and add new DOM elements dynamically
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-emerald-50/40 to-green-50/40 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300">
              The 3-Step Process
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">1</div>
                  <h5 className="font-semibold text-sm">Create</h5>
                </div>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs overflow-x-auto">
{`const div = document
  .createElement('div');`}</pre>
                <p className="text-xs text-muted-foreground mt-2">Make a new element</p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">2</div>
                  <h5 className="font-semibold text-sm">Configure</h5>
                </div>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs overflow-x-auto">
{`div.textContent = 'Hello';
div.className = 'box';
div.id = 'myBox';`}</pre>
                <p className="text-xs text-muted-foreground mt-2">Set properties</p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">3</div>
                  <h5 className="font-semibold text-sm">Add to DOM</h5>
                </div>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs overflow-x-auto">
{`document.body
  .appendChild(div);
// Now visible!`}</pre>
                <p className="text-xs text-muted-foreground mt-2">Insert into page</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Basic Example
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// HTML: <div id="container"></div>

// Create new paragraph
const paragraph = document.createElement('p');

// Set content and style
paragraph.textContent = 'This is new!';
paragraph.style.color = 'blue';
paragraph.style.padding = '10px';

// Add to container
const container = document.getElementById('container');
container.appendChild(paragraph);

// Result: New <p> appears in container!`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Complex Example
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Create card with multiple elements
const card = document.createElement('div');
card.className = 'card';

const title = document.createElement('h3');
title.textContent = 'Product Name';

const price = document.createElement('p');
price.textContent = '$29.99';
price.className = 'price';

const button = document.createElement('button');
button.textContent = 'Add to Cart';

// Nest elements
card.appendChild(title);
card.appendChild(price);
card.appendChild(button);

// Add to page
document.body.appendChild(card);`}</pre>
            </div>
          </div>

          {/* Animated Demo */}
          <div className="p-6 bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Live Demo - Create & Remove Elements
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded border min-h-[100px]">
                {elementList.map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 mb-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-l-4 border-blue-500 rounded animate-in slide-in-from-left duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" onClick={addElement}>
                  <Plus className="w-3 h-3 mr-1" />
                  Add Element
                </Button>
                <Button size="sm" variant="destructive" onClick={removeElement}>
                  <Trash2 className="w-3 h-3 mr-1" />
                  Remove Element
                </Button>
                <Button size="sm" variant="outline" onClick={resetElementList}>
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Count: {elementList.length} element(s)
              </p>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Real-World: Dynamic Todo List
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <ul id="todos"></ul>
//        <input id="taskInput" />
//        <button id="addBtn">Add</button>

const addBtn = document.getElementById('addBtn');
const input = document.getElementById('taskInput');
const todoList = document.getElementById('todos');

addBtn.addEventListener('click', () => {
  // Get input value
  const taskText = input.value.trim();
  
  if (taskText) {
    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;
    li.className = 'todo-item';
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.className = 'delete-btn';
    
    // Delete on click
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });
    
    // Add button to item
    li.appendChild(deleteBtn);
    
    // Add item to list
    todoList.appendChild(li);
    
    // Clear input
    input.value = '';
  }
});

// Output: Functional todo list with delete!`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Removing Elements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Trash2 className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            3. Removing Elements
          </CardTitle>
          <CardDescription className="text-base">
            Different methods to delete elements from the DOM
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Trash2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Modern: element.remove()
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Select element
const box = document.querySelector('.box');

// Remove it (simple!)
box.remove();

// Example: Remove on click
const deleteBtn = document.getElementById('deleteBtn');
deleteBtn.addEventListener('click', () => {
  const item = document.querySelector('.item');
  item.remove();
  console.log('Item removed!');
});

// Modern, clean, easy to read`}</pre>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 mt-2">
                Recommended ✅
              </Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-gray-50/60 to-slate-50/60 dark:from-gray-950/10 dark:to-slate-950/10 rounded-xl border border-gray-200/50 dark:border-gray-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                Legacy: removeChild()
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Need parent element
const parent = document.getElementById('container');
const child = document.querySelector('.item');

// Remove child from parent
parent.removeChild(child);

// More verbose:
const item = document.querySelector('.item');
item.parentNode.removeChild(item);

// Works but more complicated`}</pre>
              <Badge variant="outline" className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 mt-2">
                Legacy (still works)
              </Badge>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Real-World: Remove All Children
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Clear all content from container
const container = document.getElementById('container');

// Method 1: innerHTML (fastest)
container.innerHTML = '';

// Method 2: Remove children one by one
while (container.firstChild) {
  container.removeChild(container.firstChild);
}

// Method 3: Loop and remove (modern)
container.querySelectorAll('*').forEach(el => el.remove());

// Use Method 1 for performance
console.log('Container cleared!');`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: classList Manipulation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            4. classList - Managing CSS Classes
          </CardTitle>
          <CardDescription className="text-base">
            The modern way to add, remove, and toggle classes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">add()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`el.classList
  .add('active');`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Add class</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">remove()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`el.classList
  .remove('active');`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Remove class</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">toggle()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`el.classList
  .toggle('active');`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Add/Remove</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">contains()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`el.classList
  .contains('active');`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Check class</p>
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3">Complete Example</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`const box = document.querySelector('.box');

// Add single class
box.classList.add('active');

// Add multiple classes
box.classList.add('large', 'highlighted', 'animated');

// Remove class
box.classList.remove('animated');

// Toggle class (add if missing, remove if present)
box.classList.toggle('active');

// Check if has class
if (box.classList.contains('active')) {
  console.log('Box is active!');
}

// Replace class
box.classList.replace('large', 'small');

// Output: Classes managed efficiently`}</pre>
          </div>

          {/* Live classList Demo */}
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Live Demo - Toggle Classes
            </h4>
            <div className="space-y-4">
              <div 
                className={`p-6 rounded border-2 transition-all duration-300 ${
                  classList.includes('blue') 
                    ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-500 text-blue-900 dark:text-blue-100' 
                    : 'bg-white dark:bg-gray-900 border-gray-300'
                } ${
                  classList.includes('large') 
                    ? 'text-2xl font-bold' 
                    : 'text-base'
                } ${
                  classList.includes('shadow') 
                    ? 'shadow-2xl' 
                    : 'shadow-none'
                }`}
              >
                Styled Element with classList
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button 
                  size="sm" 
                  onClick={() => toggleClass('blue')}
                  variant={classList.includes('blue') ? 'default' : 'outline'}
                >
                  Toggle Blue
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => toggleClass('large')}
                  variant={classList.includes('large') ? 'default' : 'outline'}
                >
                  Toggle Large
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => toggleClass('shadow')}
                  variant={classList.includes('shadow') ? 'default' : 'outline'}
                >
                  Toggle Shadow
                </Button>
                <Button size="sm" variant="outline" onClick={resetClassList}>
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Active classes: {classList.filter(c => c !== 'default').join(', ') || 'none'}
              </p>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Real-World: Tab System
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Get all tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    
    // Hide all panels
    panels.forEach(p => p.classList.add('hidden'));
    
    // Activate clicked tab
    tab.classList.add('active');
    
    // Show corresponding panel
    panels[index].classList.remove('hidden');
    
    console.log(\`Switched to tab \${index + 1}\`);
  });
});

// Output: Working tab navigation system`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Edit3 className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            5. Managing Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Get, set, and remove element attributes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">setAttribute</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs overflow-x-auto">
{`img.setAttribute(
  'src',
  'photo.jpg'
);

input.setAttribute(
  'placeholder',
  'Enter name'
);`}</pre>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">getAttribute</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs overflow-x-auto">
{`const src = img
  .getAttribute('src');

const id = div
  .getAttribute('id');

console.log(src);`}</pre>
            </div>

            <div className="p-4 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">removeAttribute</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs overflow-x-auto">
{`input.removeAttribute(
  'disabled'
);

link.removeAttribute(
  'target'
);`}</pre>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Common Attributes</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Image attributes
const img = document.querySelector('img');
img.setAttribute('src', 'new-image.jpg');
img.setAttribute('alt', 'Description');
img.setAttribute('width', '300');

// Link attributes
const link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');
link.setAttribute('rel', 'noopener');

// Input attributes
const input = document.querySelector('input');
input.setAttribute('type', 'email');
input.setAttribute('required', '');
input.setAttribute('placeholder', 'Email');`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Data Attributes</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// HTML: <div data-product-id="123">

const product = document.querySelector('div');

// Set data attribute
product.setAttribute('data-product-id', '456');
product.setAttribute('data-price', '29.99');

// Get with dataset (modern)
console.log(product.dataset.productId);
// Output: "456"

console.log(product.dataset.price);
// Output: "29.99"

// Set with dataset
product.dataset.inStock = 'true';`}</pre>
            </div>
          </div>

          {/* Live Attribute Demo */}
          <div className="p-6 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              Live Demo - Change Attributes
            </h4>
            <div className="space-y-4">
              <Button
                className={attributeValue.includes('Changed') ? 'bg-emerald-500 hover:bg-emerald-600' : ''}
                title={attributeValue.includes('Changed') ? 'Attributes changed!' : 'Default button'}
              >
                {attributeValue}
              </Button>
              <div className="flex gap-2">
                <Button size="sm" onClick={changeAttribute}>
                  Change Attributes
                </Button>
                <Button size="sm" variant="outline" onClick={resetAttribute}>
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset
                </Button>
              </div>
            </div>
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
            Practical patterns you'll use in every project
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1: Shopping Cart */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                1. Shopping Cart Counter
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <span id="cart-count">0</span>
//        <button id="add-to-cart">Add Item</button>

let cartCount = 0;
const countEl = document.getElementById('cart-count');
const addBtn = document.getElementById('add-to-cart');

addBtn.addEventListener('click', () => {
  cartCount++;
  
  // Update counter
  countEl.textContent = cartCount;
  
  // Add animation
  countEl.classList.add('bounce');
  setTimeout(() => {
    countEl.classList.remove('bounce');
  }, 300);
  
  // Change color when items added
  if (cartCount > 0) {
    countEl.classList.add('has-items');
  }
});

// Output: Animated cart counter`}</pre>
            </div>

            {/* Example 2: Image Gallery */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                2. Dynamic Image Gallery
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const images = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg'
];

const gallery = document.getElementById('gallery');

images.forEach((src, index) => {
  // Create image container
  const container = document.createElement('div');
  container.className = 'image-container';
  
  // Create image
  const img = document.createElement('img');
  img.src = src;
  img.alt = \`Photo \${index + 1}\`;
  img.loading = 'lazy';
  
  // Create caption
  const caption = document.createElement('p');
  caption.textContent = \`Image \${index + 1}\`;
  
  // Assemble
  container.appendChild(img);
  container.appendChild(caption);
  gallery.appendChild(container);
});

// Output: Complete image gallery`}</pre>
            </div>

            {/* Example 3: Form Validation */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                3. Live Form Validation
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error');

emailInput.addEventListener('input', (e) => {
  const email = e.target.value;
  
  if (!email.includes('@')) {
    // Show error
    errorMsg.textContent = 'Invalid email';
    errorMsg.classList.remove('hidden');
    emailInput.classList.add('error');
  } else {
    // Clear error
    errorMsg.classList.add('hidden');
    emailInput.classList.remove('error');
    emailInput.classList.add('valid');
  }
});

// Real-time validation feedback`}</pre>
            </div>

            {/* Example 4: Notification System */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                4. Toast Notifications
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function showToast(message, type = 'success') {
  // Create toast
  const toast = document.createElement('div');
  toast.className = \`toast toast-\${type}\`;
  toast.textContent = message;
  
  // Add to page
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Usage
showToast('Item added!', 'success');
showToast('Error occurred', 'error');

// Output: Auto-dismissing notifications`}</pre>
            </div>

            {/* Example 5: Accordion */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                5. Accordion Component
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const accordionHeaders = document
  .querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isOpen = header.classList
      .contains('active');
    
    // Close all
    accordionHeaders.forEach(h => {
      h.classList.remove('active');
      h.nextElementSibling.style.maxHeight = null;
    });
    
    // Open clicked (if was closed)
    if (!isOpen) {
      header.classList.add('active');
      content.style.maxHeight = 
        content.scrollHeight + 'px';
    }
  });
});

// Output: Working accordion`}</pre>
            </div>

            {/* Example 6: Infinite Scroll */}
            <div className="p-5 bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                6. Infinite Scroll Loader
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`let page = 1;
const container = document.getElementById('posts');

function loadMorePosts() {
  // Simulate API call
  for (let i = 1; i <= 10; i++) {
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = \`
      <h3>Post \${(page - 1) * 10 + i}</h3>
      <p>Content here...</p>
    \`;
    container.appendChild(post);
  }
  page++;
}

// Load on scroll
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } 
    = document.documentElement;
  
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    loadMorePosts();
  }
});

// Output: Auto-loading content`}</pre>
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
            Write efficient, maintainable DOM manipulation code
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
                <li>✅ Use <code className="text-xs">textContent</code> for plain text (safer)</li>
                <li>✅ Cache DOM queries in variables</li>
                <li>✅ Use <code className="text-xs">classList</code> instead of <code className="text-xs">className</code></li>
                <li>✅ Use <code className="text-xs">element.remove()</code> for deletion (modern)</li>
                <li>✅ Create elements off-DOM before adding</li>
                <li>✅ Use DocumentFragment for multiple elements</li>
                <li>✅ Add event listeners to parent (delegation)</li>
                <li>✅ Batch DOM changes together</li>
              </ul>
            </div>
            
            {/* Avoid This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This ❌
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>❌ Using <code className="text-xs">innerHTML</code> with user input (XSS risk)</li>
                <li>❌ Querying DOM repeatedly in loops</li>
                <li>❌ Manipulating <code className="text-xs">className</code> string directly</li>
                <li>❌ Using <code className="text-xs">removeChild()</code> (legacy)</li>
                <li>❌ Modifying DOM in loops (slow)</li>
                <li>❌ Using <code className="text-xs">innerHTML</code> to add elements</li>
                <li>❌ Creating listeners for each item</li>
                <li>❌ Triggering reflows unnecessarily</li>
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
{`// BAD: Query in loop
for (let i = 0; i < 1000; i++) {
  const list = document.getElementById('list');
  const item = document.createElement('li');
  item.textContent = \`Item \${i}\`;
  list.appendChild(item); // Reflow each time!
}

// BAD: innerHTML in loop
let html = '';
for (let i = 0; i < 1000; i++) {
  html += \`<li>Item \${i}</li>\`;
}
list.innerHTML = html; // Parses 1000 times`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                ✅ Good: Optimized
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`// GOOD: Cache query, use fragment
const list = document.getElementById('list');
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
  const item = document.createElement('li');
  item.textContent = \`Item \${i}\`;
  fragment.appendChild(item);
}

list.appendChild(fragment); // One reflow!

// FAST: 10x+ faster than bad version`}</pre>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Performance Tip: DocumentFragment</AlertTitle>
            <AlertDescription>
              Use <code className="text-xs">DocumentFragment</code> when adding multiple elements. It's a lightweight container that doesn't trigger reflows until you append it to the real DOM.
            </AlertDescription>
          </Alert>

          <div className="mt-6 p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              DocumentFragment Example
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Create fragment
const fragment = document.createDocumentFragment();

// Add 100 items to fragment (no reflows)
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = \`Item \${i}\`;
  div.className = 'item';
  fragment.appendChild(div);
}

// One DOM update (one reflow)
document.getElementById('container').appendChild(fragment);

console.log('Added 100 items efficiently!');
// Output: Smooth, no lag`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Modern Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Modern DOM Features (ES2020+)
          </CardTitle>
          <CardDescription className="text-base">
            Latest methods for cleaner, more powerful DOM manipulation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Plus className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                replaceChildren() - Clear & Add
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Old way
const container = document.getElementById('list');
container.innerHTML = '';

// New way (modern)
container.replaceChildren();

// Even better: Replace with new content
const newItems = [
  document.createElement('li'),
  document.createElement('li'),
  document.createElement('li')
];

container.replaceChildren(...newItems);

// Output: Clean, efficient replacement`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Copy className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                replaceWith() - Swap Elements
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Replace one element with another
const oldElement = document.querySelector('.old');
const newElement = document.createElement('div');
newElement.textContent = 'New Element';
newElement.className = 'new';

// Replace in one step
oldElement.replaceWith(newElement);

// Multiple replacements
const items = document.querySelectorAll('.item');
items[0].replaceWith(
  document.createElement('span')
);

// Output: Element swapped seamlessly`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                before() / after() - Insert Siblings
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const existingEl = document.querySelector('.item');

// Insert before
const beforeEl = document.createElement('div');
beforeEl.textContent = 'Before';
existingEl.before(beforeEl);

// Insert after
const afterEl = document.createElement('div');
afterEl.textContent = 'After';
existingEl.after(afterEl);

// Insert multiple
existingEl.after(
  document.createElement('p'),
  document.createElement('span')
);

// Output: Precise sibling insertion`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                toggleAttribute() - Smart Toggle
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const button = document.querySelector('button');

// Toggle disabled attribute
button.toggleAttribute('disabled');

// Toggle with condition
button.toggleAttribute('disabled', isFormValid);

// Works with any attribute
const details = document.querySelector('details');
details.toggleAttribute('open');

const input = document.querySelector('input');
input.toggleAttribute('required', needsValidation);

// Output: Clean attribute toggling`}</pre>
            </div>
          </div>
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
              Experiment with all DOM manipulation methods in a live environment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Open the interactive playground to practice DOM manipulation with real-time visual feedback. Test textContent, innerHTML, createElement, classList, attributes, and more!
            </p>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border">
              <h4 className="font-semibold mb-2 text-sm">What you'll practice:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Changing text with <code className="text-xs">textContent</code></li>
                <li>• Adding HTML with <code className="text-xs">innerHTML</code></li>
                <li>• Creating and removing elements dynamically</li>
                <li>• Toggling CSS classes with <code className="text-xs">classList</code></li>
                <li>• Managing element attributes</li>
                <li>• Real-time console logging of changes</li>
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
            <FileText className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Quick Reference Cheat Sheet
          </CardTitle>
          <CardDescription className="text-base">
            Common DOM manipulation methods at a glance
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
                    <code className="text-blue-600 dark:text-blue-400 text-xs">textContent</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Get/set plain text
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.textContent = 'Text'</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">innerHTML</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Get/set HTML content
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.innerHTML = '&lt;b&gt;Bold&lt;/b&gt;'</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">createElement()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Create new element
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">document.createElement('div')</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">appendChild()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Add child element
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">parent.appendChild(child)</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">remove()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Remove element
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.remove()</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">classList.add()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Add CSS class
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.classList.add('active')</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">classList.toggle()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Toggle class on/off
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.classList.toggle('show')</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">setAttribute()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Set attribute value
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.setAttribute('id', 'box')</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">getAttribute()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Get attribute value
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.getAttribute('id')</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">replaceChildren()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Replace all children
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.replaceChildren(...new)</code>
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

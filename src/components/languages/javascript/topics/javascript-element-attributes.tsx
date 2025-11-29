'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Tags,
  Sparkles,
  Code2,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  Edit3,
  Layers,
  Zap,
  Globe,
  AlertTriangle,
  RefreshCw,
  PlayCircle,
  Database,
  Link as LinkIcon,
  Image as ImageIcon,
  ToggleLeft,
  Settings
} from 'lucide-react';

interface ElementAttributesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function ElementAttributes({ onOpenWebPlayground }: ElementAttributesProps) {
  // Animation states for live demos
  const [attrDemo, setAttrDemo] = useState({
    src: 'default.jpg',
    alt: 'Default image',
    title: 'Click to see attributes change'
  });

  const [classListDemo, setClassListDemo] = useState<string[]>([]);
  
  const [dataAttrDemo, setDataAttrDemo] = useState({
    productId: '123',
    price: '29.99',
    inStock: 'true'
  });

  const [booleanDemo, setBooleanDemo] = useState({
    disabled: false,
    checked: false,
    hidden: false
  });

  const resetAttrDemo = () => setAttrDemo({
    src: 'default.jpg',
    alt: 'Default image',
    title: 'Click to see attributes change'
  });

  const changeAttrDemo = () => setAttrDemo({
    src: 'updated.jpg',
    alt: 'Updated image description',
    title: 'Attributes have been changed!'
  });

  const resetClassListDemo = () => setClassListDemo([]);
  
  const toggleClass = (className: string) => {
    setClassListDemo(prev => 
      prev.includes(className)
        ? prev.filter(c => c !== className)
        : [...prev, className]
    );
  };

  const resetDataDemo = () => setDataAttrDemo({
    productId: '123',
    price: '29.99',
    inStock: 'true'
  });

  const updateDataDemo = () => setDataAttrDemo({
    productId: '456',
    price: '49.99',
    inStock: 'false'
  });

  const resetBooleanDemo = () => setBooleanDemo({
    disabled: false,
    checked: false,
    hidden: false
  });

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Attributes & Classes Demo</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <header>
      <h1>Attributes & Classes Playground</h1>
      <p>Master element attributes and CSS classes</p>
    </header>

    <main>
      <!-- Attributes Demo -->
      <section class="demo-section">
        <h2>1. Attributes - Get, Set, Remove</h2>
        <img id="demo-img" src="placeholder.jpg" alt="Demo Image" width="200" />
        <div class="button-group">
          <button onclick="changeImageAttributes()">Change Attributes</button>
          <button onclick="resetImageAttributes()">Reset</button>
        </div>
        <div id="attr-output" class="output-box"></div>
      </section>

      <!-- classList Demo -->
      <section class="demo-section">
        <h2>2. classList - Add, Remove, Toggle</h2>
        <div id="class-box" class="target-box">Styled Element</div>
        <div class="button-group">
          <button onclick="addClass()">Add Class</button>
          <button onclick="removeClass()">Remove Class</button>
          <button onclick="toggleClass()">Toggle Class</button>
          <button onclick="resetClasses()">Reset</button>
        </div>
        <div id="class-output" class="output-box"></div>
      </section>

      <!-- Data Attributes Demo -->
      <section class="demo-section">
        <h2>3. Data Attributes - dataset API</h2>
        <div id="product" data-product-id="123" data-price="29.99" data-in-stock="true">
          Product Item
        </div>
        <div class="button-group">
          <button onclick="readDataAttributes()">Read Data</button>
          <button onclick="updateDataAttributes()">Update Data</button>
          <button onclick="resetDataAttributes()">Reset</button>
        </div>
        <div id="data-output" class="output-box"></div>
      </section>

      <!-- Boolean Attributes Demo -->
      <section class="demo-section">
        <h2>4. Boolean Attributes</h2>
        <button id="toggle-btn">Toggle Button</button>
        <input type="checkbox" id="toggle-check" />
        <input type="text" id="toggle-input" placeholder="Type here" />
        <div class="button-group">
          <button onclick="toggleDisabled()">Toggle Disabled</button>
          <button onclick="toggleChecked()">Toggle Checked</button>
          <button onclick="toggleHidden()">Toggle Hidden</button>
          <button onclick="resetBooleans()">Reset</button>
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
  padding: 24px;
  margin: 16px 0;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  transition: all 0.3s ease;
}

#demo-img {
  display: block;
  margin: 16px auto;
  border: 3px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.3s ease;
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

button:disabled {
  background: #94a3b8;
  cursor: not-allowed;
  transform: none;
}

input[type="checkbox"] {
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin: 16px;
}

input[type="text"] {
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  margin: 16px;
  width: calc(100% - 32px);
}

input[type="text"]:disabled {
  background: #f1f5f9;
  cursor: not-allowed;
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

/* Dynamic classes for classList demo */
.blue-bg {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%) !important;
  color: white !important;
  border-color: #1e40af !important;
}

.large-text {
  font-size: 28px !important;
  font-weight: bold !important;
}

.rounded {
  border-radius: 20px !important;
}

.shadow {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
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
}

.hidden {
  display: none !important;
}`;

  const playgroundJs = `const output = document.getElementById('output');

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

// 1. Image Attributes
function changeImageAttributes() {
  const img = document.getElementById('demo-img');
  img.setAttribute('src', 'updated-image.jpg');
  img.setAttribute('alt', 'Updated Image');
  img.setAttribute('title', 'Attributes Changed!');
  img.style.borderColor = '#10b981';
  
  const attrOutput = document.getElementById('attr-output');
  attrOutput.innerHTML = \`src: "\${img.getAttribute('src')}"<br>alt: "\${img.getAttribute('alt')}"<br>title: "\${img.getAttribute('title')}"\`;
  
  highlight(img);
  log('Image attributes changed', '#10b981');
}

function resetImageAttributes() {
  const img = document.getElementById('demo-img');
  img.setAttribute('src', 'placeholder.jpg');
  img.setAttribute('alt', 'Demo Image');
  img.removeAttribute('title');
  img.style.borderColor = '#e2e8f0';
  
  document.getElementById('attr-output').innerHTML = 'Attributes reset';
  log('Image attributes reset', '#f59e0b');
}

// 2. classList
function addClass() {
  const box = document.getElementById('class-box');
  box.classList.add('blue-bg');
  updateClassOutput();
  highlight(box);
  log('Added class: blue-bg', '#10b981');
}

function removeClass() {
  const box = document.getElementById('class-box');
  box.classList.remove('blue-bg');
  updateClassOutput();
  log('Removed class: blue-bg', '#ef4444');
}

function toggleClass() {
  const box = document.getElementById('class-box');
  box.classList.toggle('large-text');
  box.classList.toggle('rounded');
  box.classList.toggle('shadow');
  updateClassOutput();
  highlight(box);
  log('Toggled multiple classes', '#8b5cf6');
}

function resetClasses() {
  const box = document.getElementById('class-box');
  box.className = 'target-box';
  updateClassOutput();
  log('Classes reset', '#f59e0b');
}

function updateClassOutput() {
  const box = document.getElementById('class-box');
  const classes = Array.from(box.classList).join(', ');
  document.getElementById('class-output').textContent = \`Classes: \${classes || 'none'}\`;
}

// 3. Data Attributes
function readDataAttributes() {
  const product = document.getElementById('product');
  const dataOutput = document.getElementById('data-output');
  
  dataOutput.innerHTML = \`
    product-id: "\${product.dataset.productId}"<br>
    price: "$\${product.dataset.price}"<br>
    in-stock: \${product.dataset.inStock}
  \`;
  
  log('Data attributes read', '#22d3ee');
}

function updateDataAttributes() {
  const product = document.getElementById('product');
  product.dataset.productId = '456';
  product.dataset.price = '49.99';
  product.dataset.inStock = 'false';
  
  readDataAttributes();
  highlight(product);
  log('Data attributes updated', '#10b981');
}

function resetDataAttributes() {
  const product = document.getElementById('product');
  product.dataset.productId = '123';
  product.dataset.price = '29.99';
  product.dataset.inStock = 'true';
  
  document.getElementById('data-output').textContent = 'Data attributes reset';
  log('Data attributes reset', '#f59e0b');
}

// 4. Boolean Attributes
function toggleDisabled() {
  const btn = document.getElementById('toggle-btn');
  const input = document.getElementById('toggle-input');
  
  if (btn.hasAttribute('disabled')) {
    btn.removeAttribute('disabled');
    input.removeAttribute('disabled');
    log('Disabled removed', '#10b981');
  } else {
    btn.setAttribute('disabled', '');
    input.setAttribute('disabled', '');
    log('Disabled added', '#ef4444');
  }
}

function toggleChecked() {
  const checkbox = document.getElementById('toggle-check');
  checkbox.checked = !checkbox.checked;
  log(\`Checked: \${checkbox.checked}\`, '#8b5cf6');
}

function toggleHidden() {
  const input = document.getElementById('toggle-input');
  input.classList.toggle('hidden');
  log(\`Hidden: \${input.classList.contains('hidden')}\`, '#f59e0b');
}

function resetBooleans() {
  const btn = document.getElementById('toggle-btn');
  const checkbox = document.getElementById('toggle-check');
  const input = document.getElementById('toggle-input');
  
  btn.removeAttribute('disabled');
  input.removeAttribute('disabled');
  checkbox.checked = false;
  input.classList.remove('hidden');
  
  log('Boolean attributes reset', '#f59e0b');
}

log('🎯 Attributes & Classes Demo Ready!', '#22d3ee');
log('Click buttons to see changes', '#94a3b8');
updateClassOutput();`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Tags}
        category="9. DOM Manipulation"
        title="Attributes & Classes"
        description="Master managing element attributes, CSS classes, and data attributes for dynamic, interactive web applications"
        colorTheme="blue"
      />

      {/* Overview Section */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Attributes & Classes Matter
          </CardTitle>
          <CardDescription className="text-base">
            Control element behavior, appearance, and store data with attributes and classes
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Configure Elements</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Set src, href, alt, title, and other attributes dynamically
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              Full Control
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Style with Classes</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Add, remove, toggle CSS classes for styling and animations
            </p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
              Clean Styling
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h3 className="font-semibold">Store Data</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Use data-* attributes to store custom information on elements
            </p>
            <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
              Data Storage
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Attributes vs Properties */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Attributes vs Properties - The Difference
          </CardTitle>
          <CardDescription className="text-base">
            Understanding this distinction is crucial for DOM manipulation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-amber-50/40 to-yellow-50/40 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-300 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Key Concept: They're Different!
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Attributes</strong> are defined in HTML and appear in the markup. <strong>Properties</strong> are values on the DOM object in JavaScript. They start the same but can diverge!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2 text-blue-700 dark:text-blue-300">Attributes</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• In the HTML</li>
                  <li>• Strings only</li>
                  <li>• Use <code className="text-xs">getAttribute()</code></li>
                  <li>• Case-insensitive</li>
                  <li>• Initial values</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2 text-emerald-700 dark:text-emerald-300">Properties</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• On the DOM object</li>
                  <li>• Any data type</li>
                  <li>• Use dot notation: <code className="text-xs">el.value</code></li>
                  <li>• Case-sensitive</li>
                  <li>• Current values</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3">Example: Input Value</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <input id="myInput" value="initial" />

const input = document.getElementById('myInput');

// User types "hello" in the input

// Attribute (stays "initial")
console.log(input.getAttribute('value'));
// Output: "initial"

// Property (reflects current value)
console.log(input.value);
// Output: "hello"

// They diverge after user interaction!`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 1: Attribute Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Edit3 className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            1. Attribute Methods - Get, Set, Remove
          </CardTitle>
          <CardDescription className="text-base">
            Four essential methods to manage HTML attributes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">setAttribute()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`el.setAttribute(
  'id', 
  'box'
);`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Set value</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">getAttribute()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`const id = el
  .getAttribute(
    'id'
  );`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Get value</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">removeAttribute()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`el.removeAttribute(
  'disabled'
);`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Delete it</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">hasAttribute()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`if (el
  .hasAttribute(
    'disabled'
  )) {...}`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Check exists</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Image Attributes
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const img = document.querySelector('img');

// Set multiple attributes
img.setAttribute('src', 'photo.jpg');
img.setAttribute('alt', 'Beautiful photo');
img.setAttribute('width', '400');
img.setAttribute('loading', 'lazy');

// Read attributes
console.log(img.getAttribute('src'));
// Output: "photo.jpg"

console.log(img.getAttribute('alt'));
// Output: "Beautiful photo"

// Check if attribute exists
if (img.hasAttribute('loading')) {
  console.log('Lazy loading enabled');
}
// Output: "Lazy loading enabled"`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Link Attributes
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const link = document.querySelector('a');

// Configure link
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');
link.setAttribute('rel', 'noopener noreferrer');

// Read href
const url = link.getAttribute('href');
console.log(url);
// Output: "https://example.com"

// Remove target (open in same tab)
link.removeAttribute('target');

// Check if external
if (link.hasAttribute('target')) {
  console.log('Opens in new tab');
} else {
  console.log('Opens in same tab');
}
// Output: "Opens in same tab"`}</pre>
            </div>
          </div>

          {/* Live Attribute Demo */}
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Live Demo - Manage Attributes
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded border">
                <div className="space-y-2 text-sm font-mono">
                  <div><strong>src:</strong> {attrDemo.src}</div>
                  <div><strong>alt:</strong> {attrDemo.alt}</div>
                  <div><strong>title:</strong> {attrDemo.title}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={changeAttrDemo}>
                  Change Attributes
                </Button>
                <Button size="sm" variant="outline" onClick={resetAttrDemo}>
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset
                </Button>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Form Input Attributes
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

// Set input configuration
input.setAttribute('type', 'email');
input.setAttribute('placeholder', 'Enter email');
input.setAttribute('required', '');
input.setAttribute('maxlength', '50');

// Make it required
input.setAttribute('required', '');

// Check if required
if (input.hasAttribute('required')) {
  console.log('This field is required');
}
// Output: "This field is required"

// Remove requirement
input.removeAttribute('required');

// Get placeholder
console.log(input.getAttribute('placeholder'));
// Output: "Enter email"`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: classList */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            2. classList - Managing CSS Classes
          </CardTitle>
          <CardDescription className="text-base">
            The modern, powerful API for manipulating element classes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
            <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
              Why Use classList?
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mb-2" />
                <p className="text-muted-foreground">Clean, readable code</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mb-2" />
                <p className="text-muted-foreground">No string manipulation</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mb-2" />
                <p className="text-muted-foreground">Built-in safety checks</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">add()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`el.classList.add(
  'active',
  'visible'
);`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Add classes</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">remove()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`el.classList
  .remove(
    'active'
  );`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Remove class</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">toggle()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`el.classList
  .toggle(
    'active'
  );`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Add/Remove</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">contains()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`if (el.classList
  .contains(
    'active'
  )) {...}`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Check class</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">replace()</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`el.classList
  .replace(
    'old', 'new'
  );`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Swap class</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border">
              <h5 className="font-semibold text-sm mb-2">length</h5>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`const count = 
  el.classList
    .length;`}</pre>
              <p className="text-xs text-muted-foreground mt-2">Count classes</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Complete Example</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`const box = document.querySelector('.box');

// Add single class
box.classList.add('active');

// Add multiple classes
box.classList.add('large', 'highlighted', 'animated');

// Remove class
box.classList.remove('animated');

// Toggle class (add if absent, remove if present)
box.classList.toggle('active');

// Check if has class
if (box.classList.contains('active')) {
  console.log('Box is active');
}

// Replace class
box.classList.replace('large', 'small');

// Get number of classes
console.log(\`Classes: \${box.classList.length}\`);
// Output: "Classes: 3"`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Toggle with Force</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`const button = document.querySelector('button');

// Force add (second param = true)
button.classList.toggle('active', true);
// Always adds, never removes

// Force remove (second param = false)
button.classList.toggle('active', false);
// Always removes, never adds

// Conditional toggle
const isValid = checkForm();
button.classList.toggle('disabled', !isValid);

// Common pattern: toggle based on state
const isOpen = menuOpen;
menu.classList.toggle('open', isOpen);
sidebar.classList.toggle('collapsed', !isOpen);

console.log('Classes toggled conditionally');
// Output: "Classes toggled conditionally"`}</pre>
            </div>
          </div>

          {/* Live classList Demo */}
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Live Demo - classList in Action
            </h4>
            <div className="space-y-4">
              <div 
                className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                  classListDemo.includes('blue') 
                    ? 'bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-500' 
                    : 'bg-white dark:bg-gray-900 border-gray-300'
                } ${
                  classListDemo.includes('large') 
                    ? 'text-2xl font-bold' 
                    : 'text-base'
                } ${
                  classListDemo.includes('rounded') 
                    ? 'rounded-3xl' 
                    : ''
                } ${
                  classListDemo.includes('shadow') 
                    ? 'shadow-2xl shadow-purple-500/20' 
                    : ''
                }`}
              >
                Styled with classList
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button 
                  size="sm" 
                  onClick={() => toggleClass('blue')}
                  variant={classListDemo.includes('blue') ? 'default' : 'outline'}
                >
                  {classListDemo.includes('blue') ? 'Remove' : 'Add'} Blue
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => toggleClass('large')}
                  variant={classListDemo.includes('large') ? 'default' : 'outline'}
                >
                  {classListDemo.includes('large') ? 'Remove' : 'Add'} Large
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => toggleClass('rounded')}
                  variant={classListDemo.includes('rounded') ? 'default' : 'outline'}
                >
                  {classListDemo.includes('rounded') ? 'Remove' : 'Add'} Rounded
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => toggleClass('shadow')}
                  variant={classListDemo.includes('shadow') ? 'default' : 'outline'}
                >
                  {classListDemo.includes('shadow') ? 'Remove' : 'Add'} Shadow
                </Button>
                <Button size="sm" variant="outline" onClick={resetClassListDemo}>
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset All
                </Button>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded border text-sm font-mono">
                Active: {classListDemo.length > 0 ? classListDemo.join(', ') : 'none'}
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Real-World: Theme Switcher
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <button id="theme-btn">Toggle Theme</button>

const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
  // Toggle dark mode class
  body.classList.toggle('dark-mode');
  
  // Update button text
  if (body.classList.contains('dark-mode')) {
    themeBtn.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    themeBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = '☀️ Light Mode';
  }
});

// Output: Persistent theme switcher`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Data Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Database className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            3. Data Attributes - Store Custom Data
          </CardTitle>
          <CardDescription className="text-base">
            Use data-* attributes and the dataset API for element data storage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">
              What are Data Attributes?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Data attributes are custom attributes that start with <code className="text-xs">data-</code>. They let you store extra information on HTML elements without using non-standard attributes or DOM properties.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2 text-purple-700 dark:text-purple-300">In HTML</h5>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs overflow-x-auto">
{`<div 
  data-product-id="123"
  data-price="29.99"
  data-in-stock="true"
>
  Product
</div>`}</pre>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2 text-emerald-700 dark:text-emerald-300">In JavaScript</h5>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs overflow-x-auto">
{`const product = el.dataset;
// {
//   productId: "123",
//   price: "29.99",
//   inStock: "true"
// }`}</pre>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Reading Data Attributes</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// HTML: <div data-user-id="456" data-role="admin">

const div = document.querySelector('div');

// Method 1: dataset (modern)
console.log(div.dataset.userId);
// Output: "456"

console.log(div.dataset.role);
// Output: "admin"

// Method 2: getAttribute (traditional)
console.log(div.getAttribute('data-user-id'));
// Output: "456"

// Note: camelCase in dataset,
// but kebab-case in HTML/getAttribute`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Writing Data Attributes</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`const div = document.querySelector('div');

// Method 1: dataset (modern, recommended)
div.dataset.userId = '789';
div.dataset.role = 'user';
div.dataset.lastLogin = '2024-01-15';

// Method 2: setAttribute (traditional)
div.setAttribute('data-user-id', '789');

// Read all data attributes
console.log(div.dataset);
// Output: {userId: "789", role: "user", lastLogin: "2024-01-15"}

// Delete data attribute
delete div.dataset.role;`}</pre>
            </div>
          </div>

          {/* Live Data Attributes Demo */}
          <div className="p-6 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              Live Demo - Data Attributes
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded border space-y-2 text-sm font-mono">
                <div><strong>product-id:</strong> {dataAttrDemo.productId}</div>
                <div><strong>price:</strong> ${dataAttrDemo.price}</div>
                <div><strong>in-stock:</strong> {dataAttrDemo.inStock}</div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={updateDataDemo}>
                  Update Data
                </Button>
                <Button size="sm" variant="outline" onClick={resetDataDemo}>
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset
                </Button>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Real-World: E-commerce Product Card
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <div class="product" data-id="123" data-price="29.99">

const products = document.querySelectorAll('.product');

products.forEach(product => {
  const addBtn = product.querySelector('.add-to-cart');
  
  addBtn.addEventListener('click', () => {
    // Get data from attributes
    const id = product.dataset.id;
    const price = parseFloat(product.dataset.price);
    const name = product.dataset.productName;
    
    // Add to cart
    addToCart({
      id: id,
      price: price,
      name: name
    });
    
    // Update UI
    product.dataset.inCart = 'true';
    addBtn.textContent = 'Added!';
    addBtn.disabled = true;
    
    console.log(\`Added product \${id} for $\${price}\`);
  });
});

// Output: Functional product cart system`}</pre>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip: Naming Convention</AlertTitle>
            <AlertDescription>
              In HTML, use kebab-case: <code className="text-xs">data-product-id</code>. In JavaScript dataset, it becomes camelCase: <code className="text-xs">dataset.productId</code>. The conversion is automatic!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Section 4: Boolean Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ToggleLeft className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            4. Boolean Attributes - On/Off States
          </CardTitle>
          <CardDescription className="text-base">
            Special attributes that work by presence/absence
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-emerald-50/40 to-green-50/40 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300">
              Understanding Boolean Attributes
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Boolean attributes are special - their presence means <strong>true</strong>, absence means <strong>false</strong>. The value doesn't matter, only whether the attribute exists!
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">Common Boolean Attributes</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• <code className="text-xs">disabled</code> - Disable input/button</li>
                  <li>• <code className="text-xs">checked</code> - Check checkbox/radio</li>
                  <li>• <code className="text-xs">selected</code> - Select option</li>
                  <li>• <code className="text-xs">required</code> - Make field required</li>
                  <li>• <code className="text-xs">readonly</code> - Make read-only</li>
                  <li>• <code className="text-xs">hidden</code> - Hide element</li>
                  <li>• <code className="text-xs">autofocus</code> - Auto-focus</li>
                  <li>• <code className="text-xs">autoplay</code> - Auto-play media</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">HTML Examples</h5>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs overflow-x-auto">
{`<!-- All these mean the same -->
<input disabled>
<input disabled="">
<input disabled="disabled">
<input disabled="true">
<input disabled="false"> <!-- Still disabled! -->

<!-- Only absence means false -->
<input> <!-- NOT disabled -->`}</pre>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Managing Boolean Attributes</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`const button = document.querySelector('button');

// Set to true (add attribute)
button.setAttribute('disabled', '');
// or
button.disabled = true;

// Set to false (remove attribute)
button.removeAttribute('disabled');
// or
button.disabled = false;

// Check if disabled
if (button.hasAttribute('disabled')) {
  console.log('Button is disabled');
}
// or
if (button.disabled) {
  console.log('Button is disabled');
}

// Toggle (ES2020+)
button.toggleAttribute('disabled');`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Checkbox & Radio</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`const checkbox = document.querySelector('[type="checkbox"]');
const radio = document.querySelector('[type="radio"]');

// Check checkbox
checkbox.checked = true;
// or
checkbox.setAttribute('checked', '');

// Uncheck
checkbox.checked = false;
// or
checkbox.removeAttribute('checked');

// Toggle check state
checkbox.checked = !checkbox.checked;

// Read check state
if (checkbox.checked) {
  console.log('Checkbox is checked');
}

// Same works for radio buttons
radio.checked = true;`}</pre>
            </div>
          </div>

          {/* Live Boolean Demo */}
          <div className="p-6 bg-gradient-to-br from-amber-50/40 to-yellow-50/40 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Live Demo - Boolean Attributes
            </h4>
            <div className="space-y-4">
              <div className="flex gap-4 items-center flex-wrap">
                <Button 
                  disabled={booleanDemo.disabled}
                  className="min-w-[120px]"
                >
                  {booleanDemo.disabled ? 'Disabled' : 'Enabled'}
                </Button>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={booleanDemo.checked}
                    onChange={() => {}}
                    className="w-5 h-5"
                  />
                  <span className="text-sm">Checkbox State</span>
                </label>
                {!booleanDemo.hidden && (
                  <div className="px-4 py-2 bg-blue-100 dark:bg-blue-950/30 rounded border border-blue-300">
                    Visible Element
                  </div>
                )}
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button 
                  size="sm" 
                  onClick={() => setBooleanDemo(prev => ({...prev, disabled: !prev.disabled}))}
                >
                  Toggle Disabled
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => setBooleanDemo(prev => ({...prev, checked: !prev.checked}))}
                >
                  Toggle Checked
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => setBooleanDemo(prev => ({...prev, hidden: !prev.hidden}))}
                >
                  Toggle Hidden
                </Button>
                <Button size="sm" variant="outline" onClick={resetBooleanDemo}>
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset
                </Button>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded border text-sm font-mono space-y-1">
                <div>disabled: {booleanDemo.disabled.toString()}</div>
                <div>checked: {booleanDemo.checked.toString()}</div>
                <div>hidden: {booleanDemo.hidden.toString()}</div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Real-World: Form Validation
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const form = document.querySelector('form');
const submitBtn = form.querySelector('[type="submit"]');
const inputs = form.querySelectorAll('input[required]');

function validateForm() {
  let isValid = true;
  
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
  
  // Enable/disable submit button
  submitBtn.disabled = !isValid;
  
  return isValid;
}

// Validate on input
inputs.forEach(input => {
  input.addEventListener('input', validateForm);
});

// Check on page load
validateForm();

// Output: Real-time form validation with disabled state`}</pre>
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
            Practical patterns using attributes and classes together
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1 */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                1. Image Lightbox
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <img class="thumbnail" data-full-src="large.jpg">

const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    // Get full-size image URL
    const fullSrc = thumb.dataset.fullSrc;
    
    // Set lightbox image
    const lightboxImg = lightbox.querySelector('img');
    lightboxImg.setAttribute('src', fullSrc);
    lightboxImg.setAttribute('alt', thumb.alt);
    
    // Show lightbox
    lightbox.classList.remove('hidden');
    lightbox.classList.add('active');
  });
});

// Close lightbox
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightbox.classList.add('hidden');
});

// Output: Functional image lightbox`}</pre>
            </div>

            {/* Example 2 */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                2. Sortable Table
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <th data-sort="name" data-order="asc">Name</th>

const headers = document.querySelectorAll('[data-sort]');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const column = header.dataset.sort;
    const order = header.dataset.order;
    
    // Remove active from all
    headers.forEach(h => {
      h.classList.remove('active');
    });
    
    // Add active to clicked
    header.classList.add('active');
    
    // Toggle sort order
    const newOrder = order === 'asc' ? 'desc' : 'asc';
    header.dataset.order = newOrder;
    
    // Update icon
    if (newOrder === 'asc') {
      header.classList.add('sort-asc');
      header.classList.remove('sort-desc');
    } else {
      header.classList.add('sort-desc');
      header.classList.remove('sort-asc');
    }
    
    // Sort table (implementation)
    sortTable(column, newOrder);
  });
});

// Output: Interactive sortable table`}</pre>
            </div>

            {/* Example 3 */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                3. Progress Tracker
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const steps = document.querySelectorAll('.step');
let currentStep = 0;

function updateProgress(stepIndex) {
  steps.forEach((step, index) => {
    if (index < stepIndex) {
      // Completed
      step.classList.add('completed');
      step.classList.remove('active', 'pending');
      step.dataset.status = 'completed';
    } else if (index === stepIndex) {
      // Current
      step.classList.add('active');
      step.classList.remove('completed', 'pending');
      step.dataset.status = 'active';
    } else {
      // Pending
      step.classList.add('pending');
      step.classList.remove('completed', 'active');
      step.dataset.status = 'pending';
    }
  });
}

// Navigate steps
document.getElementById('next').addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateProgress(currentStep);
  }
});

// Output: Multi-step progress indicator`}</pre>
            </div>

            {/* Example 4 */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                4. Filter System
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <div class="item" data-category="tech" data-price="50">

const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.filter;
    
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Filter items
    items.forEach(item => {
      if (category === 'all' || 
          item.dataset.category === category) {
        item.classList.remove('hidden');
        item.classList.add('visible');
      } else {
        item.classList.add('hidden');
        item.classList.remove('visible');
      }
    });
    
    // Update count
    const visible = document
      .querySelectorAll('.item.visible').length;
    document.getElementById('count')
      .textContent = \`Showing \${visible} items\`;
  });
});

// Output: Dynamic content filter`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Write clean, maintainable code with attributes and classes
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
                <li>✅ Use <code className="text-xs">classList</code> instead of <code className="text-xs">className</code></li>
                <li>✅ Use <code className="text-xs">dataset</code> for data attributes</li>
                <li>✅ Use <code className="text-xs">data-*</code> for custom data storage</li>
                <li>✅ Use semantic attribute names</li>
                <li>✅ Use classes for styling, data-* for functionality</li>
                <li>✅ Check if attribute exists before using</li>
                <li>✅ Use <code className="text-xs">toggleAttribute()</code> for booleans (modern)</li>
                <li>✅ Keep attribute names lowercase with hyphens</li>
              </ul>
            </div>
            
            {/* Avoid This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This ❌
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>❌ Manipulating <code className="text-xs">className</code> string directly</li>
                <li>❌ Using <code className="text-xs">getAttribute()</code> for data attributes</li>
                <li>❌ Storing data in class names</li>
                <li>❌ Using non-standard custom attributes</li>
                <li>❌ Mixing presentation and data</li>
                <li>❌ Assuming attributes exist without checking</li>
                <li>❌ Setting boolean attributes to "false" string</li>
                <li>❌ Using camelCase in HTML attributes</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                ❌ Bad: String Manipulation
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`// BAD: Manipulating className string
const box = document.querySelector('.box');
box.className = 'box active'; // Fragile
box.className += ' highlighted'; // Error-prone

// BAD: String parsing needed
if (box.className.includes('active')) {
  // This breaks with 'inactive' class!
}

// BAD: Can't easily toggle
box.className = box.className.replace('active', '');

// BAD: Storing data in classes
box.className = 'product-id-123'; // Wrong!`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                ✅ Good: Modern APIs
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`// GOOD: Use classList
const box = document.querySelector('.box');
box.classList.add('active');
box.classList.add('highlighted');

// GOOD: Reliable checking
if (box.classList.contains('active')) {
  // Accurate!
}

// GOOD: Easy toggle
box.classList.toggle('active');

// GOOD: Use data attributes for data
box.dataset.productId = '123';

// Clean, readable, maintainable!`}</pre>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Golden Rule</AlertTitle>
            <AlertDescription>
              Use <strong>classes</strong> for styling and appearance. Use <strong>data-* attributes</strong> for storing data and functionality. Keep them separate!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Modern Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Modern Features (ES2020+)
          </CardTitle>
          <CardDescription className="text-base">
            Latest methods for cleaner attribute and class manipulation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                toggleAttribute() - Modern Toggle
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const button = document.querySelector('button');

// Simple toggle (add if absent, remove if present)
button.toggleAttribute('disabled');

// Force add (second param = true)
button.toggleAttribute('disabled', true);
// Always adds, never removes

// Force remove (second param = false)
button.toggleAttribute('disabled', false);
// Always removes, never adds

// Conditional toggle
const isInvalid = !checkForm();
button.toggleAttribute('disabled', isInvalid);

// Returns true if attribute is now present
const isNowDisabled = button.toggleAttribute('disabled');
console.log(\`Disabled: \${isNowDisabled}\`);
// Output: "Disabled: true" or "Disabled: false"`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                classList.replace() - Swap Classes
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const box = document.querySelector('.box');

// Replace one class with another
box.classList.replace('old-class', 'new-class');

// Returns true if replacement succeeded
const replaced = box.classList.replace('dark', 'light');
if (replaced) {
  console.log('Class replaced');
} else {
  console.log('Old class not found');
}

// Useful for state changes
box.classList.replace('loading', 'loaded');
box.classList.replace('error', 'success');

// Instead of:
// box.classList.remove('loading');
// box.classList.add('loaded');

// Output: Cleaner class swapping`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                getAttributeNames() - List All
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const img = document.querySelector('img');

// Get array of all attribute names
const attrs = img.getAttributeNames();
console.log(attrs);
// Output: ["src", "alt", "width", "class", "id"]

// Loop through all attributes
attrs.forEach(attr => {
  const value = img.getAttribute(attr);
  console.log(\`\${attr}: \${value}\`);
});

// Useful for debugging or copying attributes
const allAttrs = {};
img.getAttributeNames().forEach(name => {
  allAttrs[name] = img.getAttribute(name);
});
console.log(allAttrs);
// Output: {src: "...", alt: "...", ...}`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                classList Chaining
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const box = document.querySelector('.box');

// Chain multiple operations
box.classList
  .add('active')
  .add('highlighted')
  .remove('hidden');

// Note: Not all browsers support chaining!
// Safe alternative:
box.classList.add('active', 'highlighted', 'visible');
box.classList.remove('hidden', 'disabled');

// Multiple in one call
box.classList.add(
  'class1',
  'class2',
  'class3'
);

// Output: Multiple classes managed efficiently`}</pre>
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
              Practice attributes and classes with live demonstrations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Open the interactive playground to experiment with all attribute and class methods. Test setAttribute, classList, dataset, boolean attributes, and see real-time results!
            </p>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border">
              <h4 className="font-semibold mb-2 text-sm">What you'll practice:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Get, set, and remove attributes</li>
                <li>• Add, remove, and toggle CSS classes</li>
                <li>• Work with data-* attributes using dataset</li>
                <li>• Manage boolean attributes (disabled, checked, hidden)</li>
                <li>• See console output for every change</li>
                <li>• Visual feedback with animations</li>
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
            All methods at a glance
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
                    <code className="text-blue-600 dark:text-blue-400 text-xs">setAttribute()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Set attribute value
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.setAttribute('id', 'box')</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
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
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">removeAttribute()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Remove attribute
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.removeAttribute('disabled')</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">hasAttribute()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Check if exists
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.hasAttribute('disabled')</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">toggleAttribute()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Toggle attribute
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.toggleAttribute('disabled')</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">classList.add()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Add CSS class(es)
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.classList.add('active')</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">classList.remove()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Remove CSS class(es)
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.classList.remove('active')</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">classList.toggle()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Toggle class on/off
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.classList.toggle('active')</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">classList.contains()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Check if has class
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.classList.contains('active')</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">classList.replace()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Swap one class for another
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.classList.replace('old', 'new')</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">dataset.propertyName</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Access data-* attributes
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-xs">el.dataset.userId = '123'</code>
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

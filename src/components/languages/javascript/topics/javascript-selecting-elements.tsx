'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Target,
  Sparkles,
  Code2,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  Search,
  Layers,
  Zap,
  Globe,
  AlertTriangle,
  Star,
  Filter,
  List,
  Database,
  Play
} from 'lucide-react';

interface SelectingElementsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SelectingElements({ onOpenWebPlayground }: SelectingElementsProps) {
  
  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Selecting Elements Demo</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <header>
      <h1 id="main-title">Element Selection Demo</h1>
      <p class="subtitle">Click buttons to see different selection methods</p>
    </header>

    <main>
      <section class="demo-section">
        <h2>Select by ID</h2>
        <button id="btn-primary" class="btn">Primary Button</button>
        <button class="demo-btn" data-method="getElementById">Test getElementById()</button>
      </section>

      <section class="demo-section">
        <h2>Select by Class</h2>
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <button class="demo-btn" data-method="getElementsByClassName">Test getElementsByClassName()</button>
      </section>

      <section class="demo-section">
        <h2>Query Selector</h2>
        <div class="item active">Active Item</div>
        <div class="item">Regular Item</div>
        <button class="demo-btn" data-method="querySelector">Test querySelector()</button>
      </section>
    </main>

    <div id="console-output">
      <h3>Console Output</h3>
      <div id="output-content">Click buttons to see results...</div>
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
  max-width: 900px;
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

#main-title {
  font-size: 32px;
  color: #1e293b;
  margin-bottom: 8px;
}

.subtitle {
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

.btn, .demo-btn {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 8px 8px 8px 0;
}

.demo-btn {
  background: #10b981;
}

.btn:hover, .demo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.box {
  display: inline-block;
  padding: 16px 24px;
  margin: 8px;
  background: #8b5cf6;
  color: white;
  border-radius: 8px;
  font-weight: 500;
}

.item {
  padding: 12px 16px;
  margin: 8px 0;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #94a3b8;
}

.item.active {
  border-left-color: #f59e0b;
  background: #fef3c7;
}

#console-output {
  margin-top: 32px;
  padding: 24px;
  background: #0f172a;
  border-radius: 12px;
  color: #22d3ee;
  font-family: 'Courier New', monospace;
}

#console-output h3 {
  color: #22d3ee;
  margin-bottom: 16px;
  font-size: 18px;
}

#output-content {
  font-size: 14px;
  line-height: 1.8;
  color: #94a3b8;
}

.highlight {
  animation: pulse 0.5s ease-in-out;
  background: #fef3c7 !important;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}`;

  const playgroundJs = `document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output-content');
  const demoBtns = document.querySelectorAll('.demo-btn');
  
  function log(message, color = '#94a3b8') {
    const line = document.createElement('div');
    line.style.color = color;
    line.textContent = '> ' + message;
    output.appendChild(line);
  }
  
  function clearOutput() {
    output.innerHTML = '';
  }
  
  function highlight(element) {
    if (element) {
      element.classList.add('highlight');
      setTimeout(() => element.classList.remove('highlight'), 1000);
    }
  }
  
  demoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      clearOutput();
      const method = btn.dataset.method;
      
      if (method === 'getElementById') {
        log('getElementById("btn-primary"):', '#22d3ee');
        const el = document.getElementById('btn-primary');
        log('Found: ' + el.textContent, '#10b981');
        log('Tag: ' + el.tagName, '#94a3b8');
        highlight(el);
      }
      
      else if (method === 'getElementsByClassName') {
        log('getElementsByClassName("box"):', '#22d3ee');
        const boxes = document.getElementsByClassName('box');
        log('Found ' + boxes.length + ' elements', '#10b981');
        Array.from(boxes).forEach((box, i) => {
          log('  [' + i + ']: ' + box.textContent, '#94a3b8');
          highlight(box);
        });
      }
      
      else if (method === 'querySelector') {
        log('querySelector(".item.active"):', '#22d3ee');
        const el = document.querySelector('.item.active');
        log('Found: ' + el.textContent, '#10b981');
        log('Only returns FIRST match', '#f59e0b');
        highlight(el);
      }
    });
  });
});`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Target}
        category="9. DOM Manipulation"
        title="Selecting Elements"
        description="Master all methods to find and select DOM elements - the foundation of dynamic web development"
        colorTheme="blue"
      />

      {/* Overview Section */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Element Selection Matters
          </CardTitle>
          <CardDescription className="text-base">
            Element selection is the foundation of DOM manipulation - you must find elements before you can interact with them
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Find Any Element</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Target specific elements by ID, class, tag, or complex CSS selectors
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              Precise Targeting
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Dynamic Updates</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Change content, styles, and attributes of selected elements in real-time
            </p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
              Interactive UIs
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h3 className="font-semibold">8+ Methods</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Choose from multiple selection methods, each optimized for different scenarios
            </p>
            <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
              Flexible Approach
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* What is Element Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is Element Selection?
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the core concept and how it works
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              <strong className="text-foreground">Element selection</strong> is the process of finding and retrieving specific HTML elements from the DOM (Document Object Model) tree using JavaScript. Think of it as a search system for your webpage - you describe what you're looking for, and JavaScript finds it for you.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Once you have a reference to an element, you can:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground ml-6">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Read or modify its content (text, HTML)</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Change its styles (colors, sizes, visibility)</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Add or remove classes and attributes</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Attach event listeners (clicks, hovers, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Create, append, or remove child elements</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border-2 border-blue-200/60 dark:border-blue-800/40 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 p-6">
            <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Analogy
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Think of your HTML page as a library 📚. Element selection is like asking the librarian to find a specific book. You can search by:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground ml-6">
              <li>• <strong>ID</strong> - unique catalog number (fastest, most specific)</li>
              <li>• <strong>Class</strong> - genre or category (finds all matching books)</li>
              <li>• <strong>Tag</strong> - type of media (all books, all DVDs)</li>
              <li>• <strong>Attribute</strong> - specific properties (published after 2020, author name)</li>
            </ul>
          </div>

          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Simple Example
            </h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML in your page:
// <h1 id="title">Welcome</h1>

// Select the element
const titleElement = document.getElementById('title');

// Read its content
console.log(titleElement.textContent);
// Output: Welcome

// Change its content
titleElement.textContent = 'Hello World!';

// Now the page shows: <h1 id="title">Hello World!</h1>`}</pre>
          </div>
        </CardContent>
      </Card>
      {/* Methods Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <List className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            All Selection Methods at a Glance
          </CardTitle>
          <CardDescription className="text-base">
            8 methods to select elements, each with unique strengths
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
                    Returns
                  </th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
                    Live?
                  </th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
                    Use Case
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">getElementById()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Element or null
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 text-xs">N/A</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Unique ID (fastest)
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">querySelector()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    First match or null
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300 text-xs">No</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    CSS selector power
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">querySelectorAll()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    NodeList
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300 text-xs">No</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Multiple elements
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">getElementsByClassName()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    HTMLCollection
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 text-xs">Yes ✅</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Auto-updates
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">getElementsByTagName()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    HTMLCollection
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 text-xs">Yes ✅</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Same tag type
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">getElementsByName()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    NodeList
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 text-xs">Yes ✅</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Form elements
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">closest()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Ancestor or null
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 text-xs">N/A</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Find parent
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="text-blue-600 dark:text-blue-400 text-xs">matches()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Boolean
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 text-xs">N/A</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Test if matches
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Live vs Static Collections</AlertTitle>
            <AlertDescription>
              <strong>Live</strong> collections automatically update when DOM changes. <strong>Static</strong> collections (NodeList from querySelector) are snapshots and don't auto-update.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Method 1: getElementById */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Star className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Method 1: getElementById() - The Fastest
          </CardTitle>
          <CardDescription className="text-base">
            Select a single element by its unique ID attribute
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Basic Syntax
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Select element by ID
const element = document.getElementById('myId');

// Example HTML:
// <div id="myId">Hello World</div>

console.log(element);
// Output: <div id="myId">...</div>

console.log(element.textContent);
// Output: Hello World

// Returns null if not found
const missing = document.getElementById('notFound');
console.log(missing);
// Output: null`}</pre>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Key Characteristics
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Fastest method</strong> - Direct hash lookup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Returns single element</strong> - IDs must be unique</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Returns null</strong> if not found</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>No # symbol needed</strong> - Just ID name</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Case-sensitive</strong> - 'myId' ≠ 'myid'</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Use Case 1: Form Validation
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML:
// <input type="email" id="user-email" />
// <span id="error-message"></span>
// <button id="submit-btn">Submit</button>

// Get form elements by ID
const emailInput = document.getElementById('user-email');
const errorMsg = document.getElementById('error-message');
const submitBtn = document.getElementById('submit-btn');

// Validate email on button click
submitBtn.addEventListener('click', () => {
  const email = emailInput.value;
  
  if (!email.includes('@')) {
    errorMsg.textContent = 'Please enter valid email';
    errorMsg.style.color = 'red';
  } else {
    errorMsg.textContent = 'Email valid! ✓';
    errorMsg.style.color = 'green';
  }
});

// Output: Real-time form validation`}</pre>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Use Case 2: Toggle Dark Mode
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <button id="theme-toggle">🌙 Dark Mode</button>

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  // Check current theme
  const isDark = body.classList.contains('dark-mode');
  
  if (isDark) {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙 Dark Mode';
  } else {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Light Mode';
  }
  
  console.log('Theme toggled!');
});

// Output: Working theme switcher`}</pre>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important: Always Check for null</AlertTitle>
            <AlertDescription>
              <code className="text-xs">getElementById()</code> returns <code className="text-xs">null</code> if the element doesn't exist. Always verify before accessing properties.
            </AlertDescription>
          </Alert>

          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Safe Usage Pattern
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// ❌ Unsafe - Can cause errors
const btn = document.getElementById('submit');
btn.click(); // TypeError if btn is null!

// ✅ Safe - Check before using
const btn = document.getElementById('submit');
if (btn) {
  btn.addEventListener('click', handleClick);
} else {
  console.warn('Button not found');
}

// ✅ Modern - Optional chaining (ES2020+)
const btn = document.getElementById('submit');
btn?.addEventListener('click', handleClick);

// ✅ With default fallback
const btn = document.getElementById('submit');
const element = btn || document.body;

// Output: No errors, safe execution`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Method 2: querySelector */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            Method 2: querySelector() - The Modern Choice
          </CardTitle>
          <CardDescription className="text-base">
            Select the first element matching any CSS selector
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">
              <code className="text-cyan-600 dark:text-cyan-400">querySelector()</code> is the Swiss Army knife of element selection. It accepts <strong>any valid CSS selector</strong> and returns the first matching element.
            </p>
            <Badge className="bg-cyan-100/80 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border border-cyan-300/50 dark:border-cyan-700/40">
              Most Flexible ✨
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Filter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Basic Selectors
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// By ID (use # prefix)
const header = document.querySelector('#header');

// By class (use . prefix)
const box = document.querySelector('.box');

// By tag name
const paragraph = document.querySelector('p');

// By attribute
const input = document.querySelector('[type="email"]');

// Attribute with value
const link = document.querySelector('[href="#home"]');

// Returns: First matching element or null`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Complex Selectors
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Descendant selector
const item = document.querySelector('nav .menu-item');

// Direct child
const firstLi = document.querySelector('ul > li');

// Multiple conditions
const active = document.querySelector('.btn.active');

// Pseudo-classes
const firstChild = document.querySelector('li:first-child');
const checked = document.querySelector('input:checked');
const disabled = document.querySelector('button:disabled');

// Combinators
const next = document.querySelector('h2 + p');

// Returns: First match with all conditions`}</pre>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                Use Case 1: Navigation Highlighting
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Get all nav links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Remove active from current
    const current = document.querySelector('nav a.active');
    current?.classList.remove('active');
    
    // Add active to clicked
    link.classList.add('active');
    
    console.log('Navigated to:', link.textContent);
  });
});

// Output: Dynamic navigation highlighting`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Use Case 2: Form Focus
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Auto-focus first empty required field
const firstEmpty = document
  .querySelector('input[required]:invalid');

if (firstEmpty) {
  firstEmpty.focus();
  firstEmpty.style.borderColor = 'orange';
  console.log('Focused:', firstEmpty.name);
}

// Get first checked radio
const selected = document
  .querySelector('input[type="radio"]:checked');

console.log('Selected:', selected?.value || 'None');

// Output: Smart form focus management`}</pre>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip: Performance</AlertTitle>
            <AlertDescription>
              While <code className="text-xs">querySelector()</code> is very flexible, <code className="text-xs">getElementById()</code> is faster for simple ID lookups. Use querySelector when you need CSS selector power.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Method 3: querySelectorAll */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Method 3: querySelectorAll() - Select Multiple Elements
          </CardTitle>
          <CardDescription className="text-base">
            Get all elements matching a CSS selector as a NodeList
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">
              <code className="text-purple-600 dark:text-purple-400">querySelectorAll()</code> returns <strong>all matching elements</strong> as a NodeList (similar to an array). Perfect for batch operations on multiple elements.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
                Returns NodeList
              </Badge>
              <Badge className="bg-pink-100/80 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 border border-pink-300/50 dark:border-pink-700/40">
                Static Collection
              </Badge>
              <Badge className="bg-indigo-100/80 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-300/50 dark:border-indigo-700/40">
                forEach Compatible
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Basic Usage</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Select all elements with class
const boxes = document.querySelectorAll('.box');

console.log(boxes.length);
// Output: 5

// NodeList is array-like
console.log(boxes[0]);
// Output: <div class="box">...</div>

// Has forEach method
boxes.forEach((box, index) => {
  console.log(\`Box \${index + 1}: \${box.textContent}\`);
});
// Output: Box 1: Content, Box 2: Content...`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Complex Selections</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Select all active items
const activeItems = document
  .querySelectorAll('li.active');

// Select all checked checkboxes
const checked = document
  .querySelectorAll('input[type="checkbox"]:checked');

// Select all external links
const external = document
  .querySelectorAll('a[target="_blank"]');

// Nested selection
const menuItems = document
  .querySelectorAll('#sidebar .menu > li');

console.log(\`Found \${menuItems.length} items\`);
// Output: Found 8 items`}</pre>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Use Case 1: Bulk Product Selection
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Select all product cards
const products = document.querySelectorAll('.product-card');

// Add click handlers to all
products.forEach((product, index) => {
  product.addEventListener('click', () => {
    console.log(\`Product \${index + 1} clicked\`);
    
    // Remove 'selected' from all
    products.forEach(p => p.classList.remove('selected'));
    
    // Add 'selected' to clicked
    product.classList.add('selected');
    
    // Update UI
    const price = product.dataset.price;
    console.log(\`Price: $\${price}\`);
  });
});

// Output: Interactive product selection`}</pre>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Use Case 2: Form Validation
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Select all required inputs
const requiredInputs = document.querySelectorAll('input[required]');

document.querySelector('#myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  let isValid = true;
  const errors = [];
  
  requiredInputs.forEach(input => {
    if (input.value.trim() === '') {
      input.style.borderColor = 'red';
      isValid = false;
      errors.push(input.name);
    } else {
      input.style.borderColor = 'green';
    }
  });
  
  if (!isValid) {
    console.log('Missing:', errors.join(', '));
    alert('Fill all required fields');
  } else {
    console.log('Form submitted!');
  }
});

// Output: Comprehensive validation`}</pre>
          </div>

          <div className="rounded-xl border-2 border-purple-200/60 dark:border-purple-800/40 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 p-6">
            <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              NodeList vs Array: Key Differences
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">✅ NodeList Has</h5>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>• <code className="text-xs">forEach()</code></li>
                  <li>• <code className="text-xs">entries()</code></li>
                  <li>• <code className="text-xs">keys()</code></li>
                  <li>• <code className="text-xs">values()</code></li>
                  <li>• <code className="text-xs">length</code> property</li>
                  <li>• Indexed access <code className="text-xs">[0]</code></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-rose-700 dark:text-rose-300">❌ NodeList Missing</h5>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>• <code className="text-xs">map()</code></li>
                  <li>• <code className="text-xs">filter()</code></li>
                  <li>• <code className="text-xs">reduce()</code></li>
                  <li>• <code className="text-xs">find()</code></li>
                  <li>• Convert: <code className="text-xs">Array.from(nodeList)</code></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Converting NodeList to Array
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const items = document.querySelectorAll('.item');

// Method 1: Array.from() - Modern & readable
const itemsArray1 = Array.from(items);

// Method 2: Spread operator - Concise
const itemsArray2 = [...items];

// Now use array methods
const texts = itemsArray1.map(item => item.textContent);
console.log(texts);
// Output: ['Item 1', 'Item 2', 'Item 3']

const filtered = itemsArray2.filter(item => {
  return item.classList.contains('active');
});
console.log(\`Active: \${filtered.length}\`);
// Output: Active: 2`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Method 4: getElementsByClassName */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Filter className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Method 4: getElementsByClassName() - Live Collections
          </CardTitle>
          <CardDescription className="text-base">
            Get a live HTMLCollection that auto-updates when DOM changes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-emerald-50/40 to-green-50/40 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">
              <code className="text-emerald-600 dark:text-emerald-400">getElementsByClassName()</code> returns a <strong>live HTMLCollection</strong> that automatically updates when the DOM changes!
            </p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
              Live Collection ⚡
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Basic Syntax</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Select all elements with class
const boxes = document.getElementsByClassName('box');

console.log(boxes.length);
// Output: 3

// Access by index
console.log(boxes[0].textContent);
// Output: "Box 1"

// IMPORTANT: NO dot prefix
// ✅ Correct: getElementsByClassName('box')
// ❌ Wrong: getElementsByClassName('.box')`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Multiple Classes</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Elements with multiple classes
// Space-separated class names
const activeBoxes = document
  .getElementsByClassName('box active');

console.log(activeBoxes.length);
// Output: 1 (only with BOTH classes)

// Single class
const allBoxes = document
  .getElementsByClassName('box');
console.log(allBoxes.length);
// Output: 3 (all with 'box' class)`}</pre>
            </div>
          </div>

          <div className="rounded-xl border-2 border-emerald-200/60 dark:border-emerald-800/40 bg-gradient-to-br from-emerald-50/40 to-green-50/40 dark:from-emerald-950/10 dark:to-green-950/10 p-6">
            <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Understanding "Live" Collections
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Initial: 3 boxes in HTML
const boxes = document.getElementsByClassName('box');
console.log(boxes.length);
// Output: 3

// Add a new box dynamically
const newBox = document.createElement('div');
newBox.className = 'box';
newBox.textContent = 'Box 4';
document.body.appendChild(newBox);

// Collection automatically updates!
console.log(boxes.length);
// Output: 4 (no need to query again!)

// Remove a box
document.querySelector('.box').remove();
console.log(boxes.length);
// Output: 3 (auto-updated!)

// This is a LIVE collection`}</pre>
          </div>

          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              HTMLCollection Limitations
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const items = document.getElementsByClassName('item');

// ❌ NO forEach method
// items.forEach(item => console.log(item)); // ERROR!

// ✅ Solution 1: Convert to array
Array.from(items).forEach(item => {
  console.log(item.textContent);
});

// ✅ Solution 2: for loop
for (let i = 0; i < items.length; i++) {
  console.log(items[i].textContent);
}

// ✅ Solution 3: for...of loop
for (const item of items) {
  console.log(item.textContent);
}

// Output: Item 1, Item 2, Item 3...`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Method 5: getElementsByTagName */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Method 5: getElementsByTagName() - Select by HTML Tag
          </CardTitle>
          <CardDescription className="text-base">
            Get all elements of a specific HTML tag type
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Common Use Cases</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Select all paragraphs
const paragraphs = document.getElementsByTagName('p');

// Select all images
const images = document.getElementsByTagName('img');

// Select all links
const links = document.getElementsByTagName('a');

// Select all divs
const divs = document.getElementsByTagName('div');

console.log(\`Found \${paragraphs.length} paragraphs\`);
// Output: Found 12 paragraphs`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Special Use: Get All</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Select ALL elements on page
const allElements = document.getElementsByTagName('*');

console.log(\`Total elements: \${allElements.length}\`);
// Output: Total elements: 247

// Useful for debugging or analysis
Array.from(allElements).forEach(el => {
  console.log(el.tagName);
});
// Output: DIV, P, SPAN, A, IMG...`}</pre>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Use Case: Analyze Page Structure
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Count different element types
const headings = document.getElementsByTagName('h1').length +
                document.getElementsByTagName('h2').length +
                document.getElementsByTagName('h3').length;

const images = document.getElementsByTagName('img').length;
const links = document.getElementsByTagName('a').length;

console.log(\`Page Statistics:\`);
console.log(\`  Headings: \${headings}\`);
console.log(\`  Images: \${images}\`);
console.log(\`  Links: \${links}\`);

// Output:
// Page Statistics:
//   Headings: 15
//   Images: 8
//   Links: 24`}</pre>
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
            Practical patterns you'll use every day
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1 */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                1. Modal Management
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <div id="modal" class="hidden">...</div>
//        <button id="open-modal">Open</button>

const modal = document.getElementById('modal');
const openBtn = document.getElementById('open-modal');
const closeBtn = document.querySelector('#modal .close-btn');

// Open modal
openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
});

// Close on outside click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});`}</pre>
            </div>

            {/* Example 2 */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                2. Tab Navigation
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Get all tabs and panels
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    
    // Hide all panels
    panels.forEach(p => p.classList.add('hidden'));
    
    // Activate clicked tab and panel
    tab.classList.add('active');
    panels[index].classList.remove('hidden');
    
    console.log(\`Switched to tab \${index + 1}\`);
  });
});

// Output: Interactive tab system`}</pre>
            </div>

            {/* Example 3 */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                3. Image Lazy Loading
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Select all images with data-src
const lazyImages = document
  .querySelectorAll('img[data-src]');

// Intersection Observer for lazy load
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      imageObserver.unobserve(img);
      console.log('Loaded:', img.alt);
    }
  });
});

lazyImages.forEach(img => {
  imageObserver.observe(img);
});

// Output: Images load as you scroll`}</pre>
            </div>

            {/* Example 4 */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                4. Search Filter
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <input id="search" />
//        <div class="item">Item 1</div>...

const searchInput = document.getElementById('search');
const items = document.querySelectorAll('.item');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  let visibleCount = 0;
  
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(query)) {
      item.style.display = 'block';
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  });
  
  console.log(\`Showing \${visibleCount} items\`);
});

// Output: Real-time search filtering`}</pre>
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
            Follow these guidelines for optimal performance and maintainability
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
                <li>✅ Use <code className="text-xs">getElementById()</code> for unique IDs (fastest)</li>
                <li>✅ Cache DOM queries in variables for reuse</li>
                <li>✅ Use <code className="text-xs">querySelector()</code> for complex selectors</li>
                <li>✅ Always check if element exists before using</li>
                <li>✅ Use specific selectors (faster than broad ones)</li>
                <li>✅ Convert NodeList/HTMLCollection to array for methods</li>
                <li>✅ Use event delegation for dynamic content</li>
                <li>✅ Minimize DOM queries in loops</li>
              </ul>
            </div>
            
            {/* Avoid This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This ❌
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>❌ Querying the same element multiple times</li>
                <li>❌ Using <code className="text-xs">querySelector()</code> for simple IDs</li>
                <li>❌ Accessing elements before DOM loads</li>
                <li>❌ Assuming element exists without checking</li>
                <li>❌ Using <code className="text-xs">*</code> selector (slow)</li>
                <li>❌ Querying inside tight loops</li>
                <li>❌ Using global variables for all elements</li>
                <li>❌ Forgetting that collections can be live</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-5 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Performance Tips
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`// ❌ Bad: Query in loop
for (let i = 0; i < 1000; i++) {
  const box = document.querySelector('.box');
  box.style.color = 'red';
}

// ✅ Good: Cache query
const box = document.querySelector('.box');
for (let i = 0; i < 1000; i++) {
  box.style.color = 'red';
}`}</pre>
              </div>
              <div>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`// ❌ Bad: Multiple queries
document.getElementById('btn').textContent = 'Click';
document.getElementById('btn').disabled = false;
document.getElementById('btn').style.color = 'blue';

// ✅ Good: Single query
const btn = document.getElementById('btn');
btn.textContent = 'Click';
btn.disabled = false;
btn.style.color = 'blue';`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Play className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
              Interactive Playground
            </CardTitle>
            <CardDescription className="text-base">
              Test all selection methods with a live demo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Click the button below to open an interactive demo where you can test each selection method and see results in real-time!
            </p>
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
    </div>
  );
}

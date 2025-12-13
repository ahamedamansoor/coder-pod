'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Network,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Code2,
  Pointer,
  Edit3,
  Tag,
  Palette,
} from 'lucide-react';

export default function WhatIsDOM() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Network}
        category="JavaScript Fundamentals"
        title="What is the DOM?"
        description="Understanding the Document Object Model - the bridge between HTML and JavaScript"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the DOM?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                The <strong className="text-yellow-700 dark:text-yellow-400">DOM (Document Object Model)</strong> is like a family tree for your web page. It converts your HTML into JavaScript objects that you can interact with!
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of it this way: HTML is the blueprint, and the DOM is the actual house that JavaScript can walk through, modify, and interact with.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-yellow-600" />
                HTML (Static)
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your HTML code is just text. The browser reads it and creates objects.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Network className="w-5 h-5 text-green-600" />
                DOM (Interactive)
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The DOM converts HTML into objects JavaScript can read and change!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Network className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Simple Example</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              When you write <code className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded">&lt;h1&gt;Hello&lt;/h1&gt;</code>, the DOM creates an object you can access with <code className="px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded">document.querySelector('h1')</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Simple Visual Example */}
      <Card>
        <CardHeader>
          <CardTitle>How HTML Becomes DOM</CardTitle>
          <CardDescription>See how the browser transforms your HTML</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Code2 className="w-4 h-4 text-orange-600" />
                Your HTML Code
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs border overflow-x-auto">
{`<html>
  <body>
    <h1>Welcome</h1>
    <p>Hello World!</p>
  </body>
</html>`}</pre>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Network className="w-4 h-4 text-green-600" />
                DOM Tree Created
              </h4>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-lg p-4 border">
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span>html (root)</span>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>body</span>
                  </div>
                  <div className="flex items-center gap-2 ml-8">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span>h1 → "Welcome"</span>
                  </div>
                  <div className="flex items-center gap-2 ml-8">
                    <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                    <span>p → "Hello World!"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 1: Selecting Elements */}
      <div className="flex items-center gap-3 pt-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
          <Pointer className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">1. Selecting Elements</h2>
      </div>

      <Card className="bg-gradient-to-br from-blue-50/30 to-cyan-50/20 dark:from-blue-950/10 dark:to-cyan-950/5 border-blue-200 dark:border-blue-800/30">
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            Before you can change anything, you need to <strong className="text-blue-600 dark:text-blue-400">find it first!</strong> Think of it like pointing at something before you can pick it up.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">querySelector()</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Finds the <strong>first</strong> matching element</p>
              <code className="text-xs text-blue-600 dark:text-blue-400">document.querySelector('.box')</code>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">querySelectorAll()</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Finds <strong>all</strong> matching elements</p>
              <code className="text-xs text-blue-600 dark:text-blue-400">document.querySelectorAll('.box')</code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800/30">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10">
          <CardTitle>Selecting Elements - Live Example</CardTitle>
          <CardDescription>Click the button to select different elements and see them in the console</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {/* Live Preview */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <Sparkles className="w-5 h-5 text-green-600" />
              Live Preview
            </h4>
            <div className="border-2 border-green-200 dark:border-green-800/30 rounded-lg p-6 bg-white dark:bg-slate-950">
              <iframe
                srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: #f8fafc; margin: 0; }
    h1 { color: #3b82f6; }
    .box { padding: 15px; margin: 10px 0; background: #fef3c7; border-radius: 8px; border: 2px solid #f59e0b; }
    button { padding: 12px 24px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; margin: 10px 0; }
    button:hover { background: #059669; }
    #result { padding: 15px; background: white; border: 2px solid #cbd5e1; border-radius: 8px; margin: 15px 0; }
  </style>
</head>
<body>
  <h1>Welcome to DOM Selection!</h1>
  <button id="selectBtn">▶ Run Selection Demo</button>
  
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
  
  <div id="result">Results will appear here</div>
  
  <script>
    document.getElementById('selectBtn').addEventListener('click', function() {
      const heading = document.querySelector('h1');
      const firstBox = document.querySelector('.box');
      const allBoxes = document.querySelectorAll('.box');
      
      const result = document.getElementById('result');
      result.innerHTML = '<strong>✅ Selection Complete!</strong><br>' +
        '• Found heading: "' + heading.textContent + '"<br>' +
        '• Found ' + allBoxes.length + ' boxes<br>' +
        '• First box: "' + firstBox.textContent + '"';
    });
  </script>
</body>
</html>`}
                className="w-full h-96 rounded-lg"
                title="Preview"
              />
            </div>
          </div>

          {/* Expected Output */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              Expected Output (Click the button in preview)
            </h4>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border font-mono text-sm">
              <div className="text-green-600 dark:text-green-400">✅ Selection Complete!</div>
              <div className="text-gray-700 dark:text-gray-300 mt-2">
                • Found heading: "Welcome to DOM Selection!"<br/>
                • Found 3 boxes<br/>
                • First box: "Box 1"
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: DOM Manipulation */}
      <div className="flex items-center gap-3 pt-8">
        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
          <Edit3 className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">2. DOM Manipulation</h2>
      </div>

      <Card className="bg-gradient-to-br from-purple-50/30 to-pink-50/20 dark:from-purple-950/10 dark:to-pink-950/5 border-purple-200 dark:border-purple-800/30">
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            Once you've selected an element, you can <strong className="text-purple-600 dark:text-purple-400">change it!</strong> Add content, remove elements, or create new ones.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Create</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Make new elements</p>
              <code className="text-xs text-purple-600 dark:text-purple-400">createElement()</code>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Add</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Insert into page</p>
              <code className="text-xs text-purple-600 dark:text-purple-400">appendChild()</code>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Remove</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Delete elements</p>
              <code className="text-xs text-purple-600 dark:text-purple-400">remove()</code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800/30">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10">
          <CardTitle>Changing Content - Live Example</CardTitle>
          <CardDescription>Change text, add new elements, and remove items</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {/* Live Preview */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <Sparkles className="w-5 h-5 text-green-600" />
              Live Preview
            </h4>
            <div className="border-2 border-green-200 dark:border-green-800/30 rounded-lg p-6 bg-white dark:bg-slate-950">
              <iframe
                srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: #f8fafc; margin: 0; }
    h2 { color: #8b5cf6; }
    button { padding: 12px 24px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; margin: 5px; }
    button:hover { background: #059669; }
    button.remove { background: #ef4444; }
    button.remove:hover { background: #dc2626; }
    #container { border: 3px dashed #cbd5e1; padding: 20px; border-radius: 8px; margin: 15px 0; min-height: 100px; background: white; }
    .item { padding: 12px; margin: 8px 0; background: #dbeafe; border-radius: 6px; border-left: 4px solid #3b82f6; animation: slideIn 0.3s; }
    @keyframes slideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
  </style>
</head>
<body>
  <h2>DOM Manipulation Playground</h2>
  <button id="changeBtn">📝 Change Text</button>
  <button id="addBtn">➕ Add New Item</button>
  <button id="removeBtn" class="remove">🗑️ Remove Last Item</button>
  
  <div id="container">
    <div class="item">Original Item 1</div>
    <div class="item">Original Item 2</div>
  </div>
  
  <script>
    let itemCount = 2;
    
    document.getElementById('changeBtn').addEventListener('click', function() {
      const items = document.querySelectorAll('.item');
      if (items.length > 0) {
        items[0].textContent = '✨ Text Changed! ' + new Date().toLocaleTimeString();
      }
    });
    
    document.getElementById('addBtn').addEventListener('click', function() {
      itemCount++;
      const container = document.getElementById('container');
      const newItem = document.createElement('div');
      newItem.className = 'item';
      newItem.textContent = '🆕 New Item ' + itemCount;
      container.appendChild(newItem);
    });
    
    document.getElementById('removeBtn').addEventListener('click', function() {
      const items = document.querySelectorAll('.item');
      if (items.length > 0) {
        items[items.length - 1].remove();
      }
    });
  </script>
</body>
</html>`}
                className="w-full h-96 rounded-lg"
                title="Preview"
              />
            </div>
          </div>

          {/* Expected Output */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              How to Use
            </h4>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border">
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Change Text:</strong> Click to modify the first item's text with timestamp</li>
                <li>• <strong>Add New Item:</strong> Creates and appends a new item to the container</li>
                <li>• <strong>Remove Last Item:</strong> Deletes the last item from the list</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Attributes and Classes */}
      <div className="flex items-center gap-3 pt-8">
        <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 text-white">
          <Tag className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">3. Attributes & Classes</h2>
      </div>

      <Card className="bg-gradient-to-br from-emerald-50/30 to-green-50/20 dark:from-emerald-950/10 dark:to-green-950/5 border-emerald-200 dark:border-emerald-800/30">
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            Add or change element properties and CSS classes. This is how you <strong className="text-emerald-600 dark:text-emerald-400">control behavior and appearance!</strong>
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Attributes</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Change element properties like href, src, id</p>
              <code className="text-xs text-emerald-600 dark:text-emerald-400 block">element.setAttribute('href', 'url')</code>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Classes</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Add/remove CSS classes</p>
              <code className="text-xs text-emerald-600 dark:text-emerald-400 block">element.classList.add('active')</code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-200 dark:border-emerald-800/30">
        <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/10">
          <CardTitle>Attributes & Classes - Live Example</CardTitle>
          <CardDescription>Toggle classes and change attributes to see visual changes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {/* Live Preview */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <Sparkles className="w-5 h-5 text-green-600" />
              Live Preview
            </h4>
            <div className="border-2 border-green-200 dark:border-green-800/30 rounded-lg p-6 bg-white dark:bg-slate-950">
              <iframe
                srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: #f8fafc; margin: 0; }
    h2 { color: #10b981; }
    button { padding: 12px 24px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; margin: 5px; }
    button:hover { background: #059669; }
    #box { padding: 30px; margin: 20px 0; background: white; border: 3px solid #cbd5e1; border-radius: 12px; transition: all 0.3s; text-align: center; font-size: 18px; }
    #box.highlight { background: #fef3c7; border-color: #f59e0b; transform: scale(1.05); }
    #box.large { font-size: 24px; padding: 40px; }
    #box.success { background: #d1fae5; border-color: #10b981; color: #047857; }
    #link { display: block; margin: 15px 0; color: #3b82f6; text-decoration: underline; }
  </style>
</head>
<body>
  <h2>Attributes & Classes Demo</h2>
  <button id="toggleHighlight">🌟 Toggle Highlight</button>
  <button id="toggleLarge">📏 Toggle Large</button>
  <button id="toggleSuccess">✅ Toggle Success</button>
  <button id="changeLink">🔗 Change Link</button>
  
  <div id="box">Watch me change!</div>
  <a href="#" id="link" target="_self">Click me - I'm a link</a>
  
  <script>
    const box = document.getElementById('box');
    const link = document.getElementById('link');
    
    document.getElementById('toggleHighlight').addEventListener('click', function() {
      box.classList.toggle('highlight');
    });
    
    document.getElementById('toggleLarge').addEventListener('click', function() {
      box.classList.toggle('large');
    });
    
    document.getElementById('toggleSuccess').addEventListener('click', function() {
      box.classList.toggle('success');
    });
    
    document.getElementById('changeLink').addEventListener('click', function() {
      link.setAttribute('href', 'https://example.com');
      link.setAttribute('target', '_blank');
      link.textContent = '🌐 External Link (opens in new tab)';
    });
  </script>
</body>
</html>`}
                className="w-full h-96 rounded-lg"
                title="Preview"
              />
            </div>
          </div>

          {/* Expected Output */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              How to Use
            </h4>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border">
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Toggle Highlight:</strong> Adds yellow background and scales the box</li>
                <li>• <strong>Toggle Large:</strong> Increases font size and padding</li>
                <li>• <strong>Toggle Success:</strong> Changes to green theme colors</li>
                <li>• <strong>Change Link:</strong> Updates href and target attributes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Styles and CSS */}
      <div className="flex items-center gap-3 pt-8">
        <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white">
          <Palette className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">4. Styles & CSS</h2>
      </div>

      <Card className="bg-gradient-to-br from-pink-50/30 to-rose-50/20 dark:from-pink-950/10 dark:to-rose-950/5 border-pink-200 dark:border-pink-800/30">
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            Change colors, sizes, positions, and any CSS property! Make your page <strong className="text-pink-600 dark:text-pink-400">come alive with style changes.</strong>
          </p>
          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              It's better to use <strong>CSS classes</strong> than inline styles! Toggle classes for better performance and cleaner code.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800/30">
        <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/10">
          <CardTitle>Styling Elements - Live Example</CardTitle>
          <CardDescription>Change colors, sizes, and positions dynamically</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {/* Live Preview */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <Sparkles className="w-5 h-5 text-green-600" />
              Live Preview
            </h4>
            <div className="border-2 border-green-200 dark:border-green-800/30 rounded-lg p-6 bg-white dark:bg-slate-950">
              <iframe
                srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: #f8fafc; margin: 0; }
    h2 { color: #ec4899; }
    button { padding: 12px 24px; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; margin: 5px; }
    button:hover { opacity: 0.9; }
    #colorBtn { background: #ef4444; }
    #sizeBtn { background: #f59e0b; }
    #posBtn { background: #3b82f6; }
    #resetBtn { background: #6b7280; }
    #styledBox { padding: 30px; margin: 20px 0; background: #f1f5f9; border: 3px solid #cbd5e1; border-radius: 12px; text-align: center; font-size: 18px; transition: all 0.3s; width: fit-content; }
  </style>
</head>
<body>
  <h2>CSS Styling Demo</h2>
  <div>
    <button id="colorBtn">🎨 Change Colors</button>
    <button id="sizeBtn">📏 Change Size</button>
    <button id="posBtn">↔️ Move Position</button>
    <button id="resetBtn">🔄 Reset</button>
  </div>
  
  <div id="styledBox">Style me with JavaScript!</div>
  
  <script>
    const box = document.getElementById('styledBox');
    let position = 0;
    
    document.getElementById('colorBtn').addEventListener('click', function() {
      const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      box.style.backgroundColor = randomColor;
      box.style.color = 'white';
    });
    
    document.getElementById('sizeBtn').addEventListener('click', function() {
      const currentSize = parseInt(box.style.fontSize) || 18;
      const newSize = currentSize + 5;
      if (newSize > 40) {
        box.style.fontSize = '18px';
        box.style.padding = '30px';
      } else {
        box.style.fontSize = newSize + 'px';
        box.style.padding = (30 + (newSize - 18)) + 'px';
      }
    });
    
    document.getElementById('posBtn').addEventListener('click', function() {
      position += 20;
      if (position > 100) position = 0;
      box.style.transform = 'translateX(' + position + 'px)';
    });
    
    document.getElementById('resetBtn').addEventListener('click', function() {
      box.style.backgroundColor = '';
      box.style.color = '';
      box.style.fontSize = '';
      box.style.padding = '';
      box.style.transform = '';
      position = 0;
    });
  </script>
</body>
</html>`}
                className="w-full h-96 rounded-lg"
                title="Preview"
              />
            </div>
          </div>

          {/* Expected Output */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <CheckCircle2 className="w-5 h-5 text-pink-600" />
              How to Use
            </h4>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border">
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Change Colors:</strong> Randomly changes background color from a palette</li>
                <li>• <strong>Change Size:</strong> Increases font size and padding (resets after 40px)</li>
                <li>• <strong>Move Position:</strong> Shifts the box horizontally using transform</li>
                <li>• <strong>Reset:</strong> Clears all inline styles back to defaults</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Best Practices ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>querySelector()</strong> for selecting elements</li>
                <li>• Store selected elements in variables (don't query repeatedly)</li>
                <li>• Use <strong>classList</strong> for CSS class manipulation</li>
                <li>• Use <strong>textContent</strong> for plain text (safe)</li>
                <li>• Add event listeners with <strong>addEventListener()</strong></li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid These ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't query the DOM inside loops</li>
                <li>• Don't use <strong>innerHTML</strong> with user input (security risk!)</li>
                <li>• Don't modify inline styles one by one (slow)</li>
                <li>• Don't use <strong>document.write()</strong> (outdated)</li>
                <li>• Don't forget to remove event listeners when done</li>
              </ul>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Remember!</AlertTitle>
            <AlertDescription className="text-base">
              The DOM is the bridge between your HTML and JavaScript. Master it, and you can build any interactive website! Every click, animation, and dynamic update uses the DOM.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

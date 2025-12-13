'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import {
  Edit3,
  Sparkles,
  Plus,
  Trash2,
  RefreshCw,
  Play,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  Code2,
  Wand2,
  Copy,
  Palette,
} from 'lucide-react';

export default function DOMManipulationNew() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Edit3}
        category="JavaScript DOM"
        title="DOM Manipulation"
        description="Learn how to create, change, and delete elements - bring your webpage to life!"
        colorTheme="yellow"
      />

      {/* The 4 Core Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-7 h-7 text-yellow-500" />
            The 4 Magic Powers
          </CardTitle>
          <CardDescription className="text-base">
            Master these 4 operations and you can do ANYTHING to a webpage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Power 1: Create */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 pt-6">
                <CardContent className="space-y-3">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl bg-green-500/20">
                      <Plus className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-center">Create</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Make brand new elements from scratch
                  </p>
                  <div className="bg-white dark:bg-slate-950 rounded-lg p-3 font-mono text-xs">
                    <code className="text-green-600 dark:text-green-400">
                      createElement(<span className="text-orange-600">'div'</span>)
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Power 2: Read */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10 pt-6">
                <CardContent className="space-y-3">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl bg-blue-500/20">
                      <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-center">Read</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Get text or HTML from elements
                  </p>
                  <div className="bg-white dark:bg-slate-950 rounded-lg p-3 font-mono text-xs">
                    <code className="text-blue-600 dark:text-blue-400">
                      element.<span className="text-purple-600 dark:text-purple-400">textContent</span>
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Power 3: Update */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 pt-6">
                <CardContent className="space-y-3">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl bg-purple-500/20">
                      <RefreshCw className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-center">Update</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Change text, colors, or styles
                  </p>
                  <div className="bg-white dark:bg-slate-950 rounded-lg p-3 font-mono text-xs">
                    <code className="text-purple-600 dark:text-purple-400">
                      element.<span className="text-blue-600 dark:text-blue-400">textContent</span> = <span className="text-green-600">'Hi!'</span>
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Power 4: Delete */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-rose-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                4
              </div>
              <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/10 pt-6">
                <CardContent className="space-y-3">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl bg-red-500/20">
                      <Trash2 className="w-8 h-8 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-center">Delete</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Remove elements from the page
                  </p>
                  <div className="bg-white dark:bg-slate-950 rounded-lg p-3 font-mono text-xs">
                    <code className="text-red-600 dark:text-red-400">
                      element.<span className="text-purple-600 dark:text-purple-400">remove</span>()
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
          <h2 className="text-3xl font-bold">3 Essential Operations</h2>
          <p className="text-muted-foreground text-lg">
            Click each card to see detailed examples and learn how they work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Creating Elements */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeDemo === 'create' ? 'ring-4 ring-green-500 scale-105' : ''
            }`}
            onClick={() => setActiveDemo(activeDemo === 'create' ? null : 'create')}
          >
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg">
                  <Plus className="w-10 h-10" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">Creating Elements</h3>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  Add New Content
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong>Use when:</strong> Adding buttons, cards, or any new content dynamically
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs space-y-2">
                <div className="text-green-600 dark:text-green-400">// Create element</div>
                <code className="text-blue-600 dark:text-blue-400 block">
                  const div = document.<span className="text-purple-600">createElement</span>(<span className="text-green-600">'div'</span>);
                </code>
                <div className="text-green-600 dark:text-green-400 mt-2">// Add to page</div>
                <code className="text-blue-600 dark:text-blue-400 block">
                  body.<span className="text-purple-600">appendChild</span>(div);
                </code>
              </div>
              {activeDemo === 'create' && (
                <div className="animate-in slide-in-from-top duration-300">
                  <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                    <Sparkles className="h-4 w-4 text-green-600" />
                    <AlertTitle>Creating is a 2-Step Process</AlertTitle>
                    <AlertDescription className="text-sm space-y-2">
                      <p><strong>Step 1:</strong> Create the element (it's invisible!)</p>
                      <p><strong>Step 2:</strong> Add it to the page (now it appears!)</p>
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Modifying Content */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeDemo === 'modify' ? 'ring-4 ring-purple-500 scale-105' : ''
            }`}
            onClick={() => setActiveDemo(activeDemo === 'modify' ? null : 'modify')}
          >
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                  <RefreshCw className="w-10 h-10" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">Modifying Content</h3>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                  Change Existing
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong>Use when:</strong> Updating text, changing messages, or editing content
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs space-y-2">
                <div className="text-green-600 dark:text-green-400">// Change text</div>
                <code className="text-blue-600 dark:text-blue-400 block">
                  element.<span className="text-purple-600">textContent</span> = <span className="text-green-600">'New text'</span>;
                </code>
                <div className="text-green-600 dark:text-green-400 mt-2">// Change HTML</div>
                <code className="text-blue-600 dark:text-blue-400 block">
                  element.<span className="text-purple-600">innerHTML</span> = <span className="text-green-600">'&lt;b&gt;Bold&lt;/b&gt;'</span>;
                </code>
              </div>
              {activeDemo === 'modify' && (
                <div className="animate-in slide-in-from-top duration-300">
                  <Alert className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    <AlertTitle>textContent vs innerHTML</AlertTitle>
                    <AlertDescription className="text-sm space-y-2">
                      <p><strong>textContent:</strong> Plain text only (safe!)</p>
                      <p><strong>innerHTML:</strong> Can add HTML tags (be careful!)</p>
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Removing Elements */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeDemo === 'remove' ? 'ring-4 ring-red-500 scale-105' : ''
            }`}
            onClick={() => setActiveDemo(activeDemo === 'remove' ? null : 'remove')}
          >
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 text-white shadow-lg">
                  <Trash2 className="w-10 h-10" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">Removing Elements</h3>
                <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">
                  Delete Content
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong>Use when:</strong> Deleting items, closing popups, or clearing content
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs space-y-2">
                <div className="text-green-600 dark:text-green-400">// Modern way</div>
                <code className="text-blue-600 dark:text-blue-400 block">
                  element.<span className="text-red-600 dark:text-red-400">remove</span>();
                </code>
                <div className="text-green-600 dark:text-green-400 mt-2">// Clear all children</div>
                <code className="text-blue-600 dark:text-blue-400 block">
                  element.<span className="text-red-600 dark:text-red-400">innerHTML</span> = <span className="text-green-600">''</span>;
                </code>
              </div>
              {activeDemo === 'remove' && (
                <div className="animate-in slide-in-from-top duration-300">
                  <Alert className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                    <Sparkles className="h-4 w-4 text-red-600" />
                    <AlertTitle>Be Careful!</AlertTitle>
                    <AlertDescription className="text-sm space-y-2">
                      <p>Once removed, the element is <strong>gone</strong>!</p>
                      <p>Make sure you really want to delete it.</p>
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive Live Demo */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-7 h-7 text-green-600 dark:text-green-400" />
            Interactive Manipulation Playground
          </CardTitle>
          <CardDescription className="text-base">
            Try all operations yourself! Create, modify, and delete elements in real-time
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
    .controls {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin: 20px 0;
      padding: 20px;
      background: #f8fafc;
      border-radius: 12px;
    }
    button {
      padding: 12px 20px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.3s;
    }
    button:hover { transform: translateY(-2px); }
    #createBtn { background: #10b981; color: white; }
    #modifyBtn { background: #8b5cf6; color: white; }
    #deleteBtn { background: #ef4444; color: white; }
    #changeTextBtn { background: #3b82f6; color: white; }
    #changeColorBtn { background: #f59e0b; color: white; }
    #container {
      min-height: 200px;
      padding: 20px;
      background: #f1f5f9;
      border-radius: 12px;
      border: 2px dashed #cbd5e1;
    }
    .item {
      padding: 15px;
      margin: 10px 0;
      background: white;
      border-radius: 8px;
      border-left: 4px solid #3b82f6;
      display: flex;
      justify-content: space-between;
      align-items: center;
      animation: slideIn 0.3s;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .delete-btn {
      background: #ef4444;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 12px;
    }
    .delete-btn:hover { background: #dc2626; }
    #stats {
      margin-top: 20px;
      padding: 15px;
      background: #0f172a;
      color: #22d3ee;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🪄 DOM Manipulation Magic</h1>
    
    <div class="controls">
      <button id="createBtn">➕ Create New Item</button>
      <button id="changeTextBtn">📝 Change Text</button>
      <button id="changeColorBtn">🎨 Change Colors</button>
      <button id="deleteBtn">🗑️ Delete Last</button>
    </div>

    <div id="container">
      <div class="item">
        <span>Original Item 1</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
      </div>
      <div class="item">
        <span>Original Item 2</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
      </div>
    </div>

    <div id="stats">Total items: 2</div>
  </div>

  <script>
    let itemCount = 2;
    const container = document.getElementById('container');
    const stats = document.getElementById('stats');
    
    function updateStats() {
      const items = container.querySelectorAll('.item');
      stats.textContent = 'Total items: ' + items.length + ' | Last action: ' + new Date().toLocaleTimeString();
    }
    
    // Create new element
    document.getElementById('createBtn').addEventListener('click', () => {
      itemCount++;
      
      // Step 1: Create element
      const newItem = document.createElement('div');
      newItem.className = 'item';
      
      // Step 2: Add content
      const span = document.createElement('span');
      span.textContent = '🆕 New Item ' + itemCount;
      
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = function() {
        this.parentElement.remove();
        updateStats();
      };
      
      // Step 3: Assemble
      newItem.appendChild(span);
      newItem.appendChild(deleteBtn);
      
      // Step 4: Add to page
      container.appendChild(newItem);
      updateStats();
    });
    
    // Modify text content
    document.getElementById('changeTextBtn').addEventListener('click', () => {
      const items = container.querySelectorAll('.item span');
      items.forEach((span, index) => {
        span.textContent = '✏️ Modified #' + (index + 1) + ' at ' + new Date().toLocaleTimeString();
      });
      updateStats();
    });
    
    // Modify styles
    document.getElementById('changeColorBtn').addEventListener('click', () => {
      const items = container.querySelectorAll('.item');
      const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
      items.forEach(item => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        item.style.borderLeftColor = randomColor;
        item.style.background = randomColor + '15';
      });
      updateStats();
    });
    
    // Delete last element
    document.getElementById('deleteBtn').addEventListener('click', () => {
      const items = container.querySelectorAll('.item');
      if (items.length > 0) {
        items[items.length - 1].remove();
        updateStats();
      }
    });
    
    updateStats();
  </script>
</body>
</html>`}
              className="w-full h-[600px] rounded-lg"
              title="Interactive Demo"
            />
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertTitle>Try All Operations!</AlertTitle>
            <AlertDescription>
              Click the buttons above to create new items, change their text, modify colors, or delete them. Watch the counter update in real-time!
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
          <CardDescription className="text-base">
            Everything you need in one place - copy and use!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Creating */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Plus className="w-5 h-5 text-green-600" />
                Creating Elements
              </h4>
              <div className="space-y-2">
                {[
                  { code: "document.createElement('div')", desc: 'Create a <div> element' },
                  { code: "element.textContent = 'Hello'", desc: 'Set text content' },
                  { code: "element.className = 'card'", desc: 'Add CSS class' },
                  { code: "parent.appendChild(element)", desc: 'Add to parent element' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white dark:bg-slate-950 rounded-lg border">
                    <div className="font-mono text-xs text-green-600 dark:text-green-400 mb-1">
                      {item.code}
                    </div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modifying */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-purple-600" />
                Modifying Content
              </h4>
              <div className="space-y-2">
                {[
                  { code: "element.textContent = 'New text'", desc: 'Change text (safe)' },
                  { code: "element.innerHTML = '<b>Bold</b>'", desc: 'Change HTML (careful!)' },
                  { code: "element.style.color = 'red'", desc: 'Change inline style' },
                  { code: "element.classList.add('active')", desc: 'Add CSS class' },
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

            {/* Removing */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Trash2 className="w-5 h-5 text-red-600" />
                Removing Elements
              </h4>
              <div className="space-y-2">
                {[
                  { code: "element.remove()", desc: 'Delete the element' },
                  { code: "parent.removeChild(child)", desc: 'Remove specific child' },
                  { code: "element.innerHTML = ''", desc: 'Clear all children' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white dark:bg-slate-950 rounded-lg border">
                    <div className="font-mono text-xs text-red-600 dark:text-red-400 mb-1">
                      {item.code}
                    </div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Styling */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Palette className="w-5 h-5 text-blue-600" />
                Styling Elements
              </h4>
              <div className="space-y-2">
                {[
                  { code: "element.style.backgroundColor = 'blue'", desc: 'Change background color' },
                  { code: "element.style.display = 'none'", desc: 'Hide element' },
                  { code: "element.classList.toggle('active')", desc: 'Toggle CSS class' },
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
            ⚠️ Common Mistakes to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                mistake: 'Creating but not adding to page',
                wrong: "const div = document.createElement('div');\n// Element exists but is invisible!",
                right: "const div = document.createElement('div');\ndocument.body.appendChild(div);\n// Now it appears!",
                tip: 'Always appendChild() after creating!'
              },
              {
                mistake: 'Using innerHTML with user input',
                wrong: "element.innerHTML = userInput;\n// ⚠️ XSS vulnerability!",
                right: "element.textContent = userInput;\n// ✅ Safe from attacks",
                tip: 'Use textContent for user input!'
              },
              {
                mistake: 'Removing element you still need',
                wrong: "element.remove();\nelement.textContent = 'Hi';\n// Error: element is gone!",
                right: "// Store reference first\nconst parent = element.parentElement;\nelement.remove();\n// Can still access if needed",
                tip: 'Be careful - remove() is permanent!'
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
          <CardDescription className="text-base">
            Test your knowledge! Can you write the code for these tasks?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                q: 'Create a new paragraph element with text "Hello World"', 
                a: 'const p = document.createElement("p");\np.textContent = "Hello World";\ndocument.body.appendChild(p);' 
              },
              { 
                q: 'Change the text of an element to "Updated!"', 
                a: 'element.textContent = "Updated!";' 
              },
              { 
                q: 'Delete an element from the page', 
                a: 'element.remove();' 
              },
              { 
                q: 'Create a div, add class "box", and append to body', 
                a: 'const div = document.createElement("div");\ndiv.className = "box";\ndocument.body.appendChild(div);' 
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

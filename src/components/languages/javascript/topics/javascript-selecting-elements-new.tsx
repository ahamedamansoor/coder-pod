'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import {
  Target,
  Sparkles,
  MousePointer,
  Zap,
  Layers,
  Play,
  CheckCircle2,
  Hash,
  Tag as TagIcon,
  Filter,
  Lightbulb,
  ArrowRight,
  Code2,
} from 'lucide-react';

export default function SelectingElementsNew() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Target}
        category="JavaScript DOM"
        title="Selecting Elements"
        description="Learn how to find and grab any element on your webpage - the first step to making websites interactive!"
        colorTheme="yellow"
      />

      {/* Hero Section - What are we selecting? */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        <CardContent className="pt-12 pb-12 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
                <MousePointer className="w-12 h-12" />
              </div>
            </div>
            <h2 className="text-4xl font-bold">Think of Your Webpage as a Treasure Map 🗺️</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Every button, image, paragraph, and div is a treasure! But before you can change them, 
              you need to <strong className="text-yellow-300">find them first</strong>. 
              That's where element selection comes in!
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Badge className="bg-white/20 text-white text-sm px-4 py-2 backdrop-blur-sm">
                🎯 Point & Select
              </Badge>
              <Badge className="bg-white/20 text-white text-sm px-4 py-2 backdrop-blur-sm">
                ⚡ Super Fast
              </Badge>
              <Badge className="bg-white/20 text-white text-sm px-4 py-2 backdrop-blur-sm">
                🎨 Change Anything
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Simple Concept */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-7 h-7 text-yellow-500" />
            The 3-Step Process
          </CardTitle>
          <CardDescription className="text-base">
            Every time you want to do something with an element, you follow these steps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10 pt-6">
                <CardContent className="space-y-3">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl bg-blue-500/20">
                      <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-center">Find It</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Tell JavaScript which element you want by using a selector (ID, class, or tag name)
                  </p>
                  <div className="bg-white dark:bg-slate-950 rounded-lg p-3 font-mono text-xs">
                    <code className="text-blue-600 dark:text-blue-400">
                      document.querySelector(<span className="text-green-600">'.button'</span>)
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 pt-6">
                <CardContent className="space-y-3">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl bg-purple-500/20">
                      <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-center">Store It</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Save the element in a variable so you can use it multiple times
                  </p>
                  <div className="bg-white dark:bg-slate-950 rounded-lg p-3 font-mono text-xs">
                    <code className="text-purple-600 dark:text-purple-400">
                      const btn = <span className="text-gray-600 dark:text-gray-400">element</span>
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/10 pt-6">
                <CardContent className="space-y-3">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl bg-emerald-500/20">
                      <Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-center">Use It</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Now do whatever you want - change text, colors, add clicks, anything!
                  </p>
                  <div className="bg-white dark:bg-slate-950 rounded-lg p-3 font-mono text-xs">
                    <code className="text-emerald-600 dark:text-emerald-400">
                      btn.<span className="text-gray-600 dark:text-gray-400">textContent =</span> <span className="text-green-600">'Hi!'</span>
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Selector Types - Visual Cards */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">3 Ways to Find Elements</h2>
          <p className="text-muted-foreground text-lg">
            Each way is perfect for different situations. Click each card to see it in action!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* ID Selector */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeDemo === 'id' ? 'ring-4 ring-orange-500 scale-105' : ''
            }`}
            onClick={() => setActiveDemo(activeDemo === 'id' ? null : 'id')}
          >
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg">
                  <Hash className="w-10 h-10" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">By ID</h3>
                <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                  #myElement
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong>Best for:</strong> Unique elements like header, main button, or logo
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs">
                <div className="text-green-600 dark:text-green-400 mb-2">// HTML:</div>
                <div className="text-gray-600 dark:text-gray-400 mb-3">&lt;button <span className="text-orange-600 dark:text-orange-400">id="submit"</span>&gt;</div>
                <div className="text-green-600 dark:text-green-400 mb-2">// JavaScript:</div>
                <code className="text-blue-600 dark:text-blue-400">
                  document.<span className="text-purple-600 dark:text-purple-400">getElementById</span>(<span className="text-green-600">'submit'</span>)
                </code>
              </div>
              {activeDemo === 'id' && (
                <div className="animate-in slide-in-from-top duration-300">
                  <Alert className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                    <Sparkles className="h-4 w-4 text-orange-600" />
                    <AlertTitle>Why use ID?</AlertTitle>
                    <AlertDescription className="text-sm">
                      IDs are unique - only ONE element can have it. Super fast! Like a person's name.
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Class Selector */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeDemo === 'class' ? 'ring-4 ring-blue-500 scale-105' : ''
            }`}
            onClick={() => setActiveDemo(activeDemo === 'class' ? null : 'class')}
          >
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                  <Layers className="w-10 h-10" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">By Class</h3>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  .button
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong>Best for:</strong> Multiple elements that share styling (all buttons, all cards)
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs">
                <div className="text-green-600 dark:text-green-400 mb-2">// HTML:</div>
                <div className="text-gray-600 dark:text-gray-400 mb-3">&lt;div <span className="text-blue-600 dark:text-blue-400">class="card"</span>&gt;</div>
                <div className="text-green-600 dark:text-green-400 mb-2">// JavaScript:</div>
                <code className="text-blue-600 dark:text-blue-400">
                  document.<span className="text-purple-600 dark:text-purple-400">querySelector</span>(<span className="text-green-600">'.card'</span>)
                </code>
              </div>
              {activeDemo === 'class' && (
                <div className="animate-in slide-in-from-top duration-300">
                  <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    <AlertTitle>Why use Class?</AlertTitle>
                    <AlertDescription className="text-sm">
                      Classes can be shared! Select ALL cards at once, or just the FIRST one. Very flexible!
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tag Selector */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeDemo === 'tag' ? 'ring-4 ring-purple-500 scale-105' : ''
            }`}
            onClick={() => setActiveDemo(activeDemo === 'tag' ? null : 'tag')}
          >
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                  <TagIcon className="w-10 h-10" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">By Tag</h3>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                  button
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong>Best for:</strong> Selecting all of one type (all paragraphs, all images)
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs">
                <div className="text-green-600 dark:text-green-400 mb-2">// HTML:</div>
                <div className="text-gray-600 dark:text-gray-400 mb-3">&lt;<span className="text-purple-600 dark:text-purple-400">button</span>&gt;</div>
                <div className="text-green-600 dark:text-green-400 mb-2">// JavaScript:</div>
                <code className="text-blue-600 dark:text-blue-400">
                  document.<span className="text-purple-600 dark:text-purple-400">querySelector</span>(<span className="text-green-600">'button'</span>)
                </code>
              </div>
              {activeDemo === 'tag' && (
                <div className="animate-in slide-in-from-top duration-300">
                  <Alert className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    <AlertTitle>Why use Tag?</AlertTitle>
                    <AlertDescription className="text-sm">
                      When you need ALL buttons, ALL paragraphs, or ALL links. No class or ID needed!
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
            Interactive Playground
          </CardTitle>
          <CardDescription className="text-base">
            Try selecting elements yourself! Click the buttons to see selection in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Preview Area */}
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
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 { color: #1e293b; margin-bottom: 20px; }
    .controls { margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; }
    button {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.3s;
    }
    button:hover { transform: translateY(-2px); }
    #select-id { background: #f97316; color: white; }
    #select-class { background: #3b82f6; color: white; }
    #select-tag { background: #a855f7; color: white; }
    .box {
      padding: 20px;
      margin: 15px 0;
      border-radius: 8px;
      background: #f1f5f9;
      border-left: 4px solid #cbd5e1;
      transition: all 0.3s;
    }
    .box.highlight {
      background: #fef3c7;
      border-left-color: #f59e0b;
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(245, 158, 11, 0.3);
    }
    .demo-element { background: #e0e7ff; border-left-color: #6366f1; }
    #result {
      margin-top: 20px;
      padding: 15px;
      background: #0f172a;
      color: #22d3ee;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      line-height: 1.6;
      min-height: 80px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Element Selection Demo</h1>
    
    <div class="controls">
      <button id="select-id">🎯 Select by ID</button>
      <button id="select-class">📦 Select by Class</button>
      <button id="select-tag">🏷️ Select by Tag</button>
    </div>

    <div id="unique-box" class="box">
      I have an ID: "unique-box"
    </div>

    <div class="box demo-element">
      I have a class: "demo-element"
    </div>
    <div class="box demo-element">
      I also have class: "demo-element"
    </div>

    <div id="result">Click a button to start selecting!</div>
  </div>

  <script>
    const result = document.getElementById('result');
    
    function log(msg, color = '#22d3ee') {
      const line = document.createElement('div');
      line.style.color = color;
      line.textContent = '> ' + msg;
      result.appendChild(line);
    }
    
    function clearResult() {
      result.innerHTML = '';
      document.querySelectorAll('.highlight').forEach(el => {
        el.classList.remove('highlight');
      });
    }
    
    document.getElementById('select-id').addEventListener('click', () => {
      clearResult();
      log('document.getElementById("unique-box")', '#f97316');
      
      const element = document.getElementById('unique-box');
      element.classList.add('highlight');
      
      log('✅ Found 1 element!', '#10b981');
      log('Text: ' + element.textContent, '#94a3b8');
      
      setTimeout(() => element.classList.remove('highlight'), 2000);
    });
    
    document.getElementById('select-class').addEventListener('click', () => {
      clearResult();
      log('document.querySelectorAll(".demo-element")', '#3b82f6');
      
      const elements = document.querySelectorAll('.demo-element');
      elements.forEach(el => el.classList.add('highlight'));
      
      log('✅ Found ' + elements.length + ' elements!', '#10b981');
      elements.forEach((el, i) => {
        log('[' + i + ']: ' + el.textContent.trim(), '#94a3b8');
      });
      
      setTimeout(() => {
        elements.forEach(el => el.classList.remove('highlight'));
      }, 2000);
    });
    
    document.getElementById('select-tag').addEventListener('click', () => {
      clearResult();
      log('document.querySelectorAll(".box")', '#a855f7');
      
      const elements = document.querySelectorAll('.box');
      elements.forEach(el => el.classList.add('highlight'));
      
      log('✅ Found ' + elements.length + ' box elements!', '#10b981');
      log('All boxes are now highlighted', '#94a3b8');
      
      setTimeout(() => {
        elements.forEach(el => el.classList.remove('highlight'));
      }, 2000);
    });
  </script>
</body>
</html>`}
              className="w-full h-[500px] rounded-lg"
              title="Interactive Demo"
            />
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertTitle>Try It Yourself!</AlertTitle>
            <AlertDescription>
              Click the colored buttons in the demo above to see how different selectors work. Watch the elements light up and see the console output!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Quick Reference Cheat Sheet */}
      <Card className="border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/10 dark:to-amber-950/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
            Quick Reference Cheat Sheet
          </CardTitle>
          <CardDescription className="text-base">
            Copy these patterns - they work every time!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* querySelector Examples */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Filter className="w-5 h-5 text-blue-600" />
                querySelector() - Get First Match
              </h4>
              <div className="space-y-2">
                {[
                  { label: 'By ID', code: "querySelector('#header')", desc: 'Element with id="header"' },
                  { label: 'By Class', code: "querySelector('.btn')", desc: 'First element with class="btn"' },
                  { label: 'By Tag', code: "querySelector('p')", desc: 'First <p> tag' },
                  { label: 'By Attribute', code: "querySelector('[type=\"email\"]')", desc: 'Element with type="email"' },
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

            {/* querySelectorAll Examples */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-600" />
                querySelectorAll() - Get All Matches
              </h4>
              <div className="space-y-2">
                {[
                  { label: 'All Class', code: "querySelectorAll('.card')", desc: 'ALL elements with class="card"' },
                  { label: 'All Tags', code: "querySelectorAll('button')", desc: 'ALL <button> tags' },
                  { label: 'Combo', code: "querySelectorAll('div.active')", desc: 'ALL <div> with class="active"' },
                  { label: 'Children', code: "querySelectorAll('ul > li')", desc: 'ALL <li> inside <ul>' },
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
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes to Avoid */}
      <Card className="border-2 border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-red-600 dark:text-red-400">
            ⚠️ Common Mistakes (And How to Fix Them!)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                mistake: 'Forgetting the dot or hash',
                wrong: "querySelector('button')",
                right: "querySelector('.button')",
                tip: 'Use . for classes, # for IDs!'
              },
              {
                mistake: 'Not checking if element exists',
                wrong: "const btn = querySelector('.btn');\nbtn.click(); // Error if not found!",
                right: "const btn = querySelector('.btn');\nif (btn) btn.click();",
                tip: 'Always check before using!'
              },
              {
                mistake: 'Selecting before page loads',
                wrong: "// Script at top of page\nconst btn = querySelector('.btn'); // null!",
                right: "// Wait for page to load\ndocument.addEventListener('DOMContentLoaded', () => {\\n  const btn = querySelector('.btn');\\n});",
                tip: 'Wait for page to be ready!'
              },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-red-50 dark:bg-red-950/10 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">
                  ❌ {item.mistake}
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-semibold text-red-600 dark:text-red-400 mb-2">❌ Wrong:</div>
                    <pre className="bg-white dark:bg-slate-950 rounded p-2 text-xs font-mono border border-red-300 dark:border-red-800 whitespace-pre-wrap break-words">
                      {item.wrong}
                    </pre>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2">✅ Correct:</div>
                    <pre className="bg-white dark:bg-slate-950 rounded p-2 text-xs font-mono border border-green-300 dark:border-green-800 whitespace-pre-wrap break-words">
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
            Can you select these elements correctly?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { q: 'Select the element with id="logo"', a: 'document.getElementById("logo")' },
              { q: 'Select ALL elements with class="card"', a: 'document.querySelectorAll(".card")' },
              { q: 'Select the FIRST button on the page', a: 'document.querySelector("button")' },
              { q: 'Select ALL paragraph tags', a: 'document.querySelectorAll("p")' },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white dark:bg-slate-950 rounded-lg border">
                <div className="font-semibold mb-2">Question {i + 1}: {item.q}</div>
                <details className="cursor-pointer">
                  <summary className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                    Show Answer
                  </summary>
                  <div className="mt-2 p-3 bg-purple-50 dark:bg-purple-950/20 rounded font-mono text-xs">
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

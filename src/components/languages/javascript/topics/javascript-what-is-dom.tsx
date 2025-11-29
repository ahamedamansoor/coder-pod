'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  AlertCircle,
  Zap,
  ArrowRight,
  Network,
  Code,
  Target,
  MousePointer,
  TrendingUp,
  AlertTriangle,
  RefreshCw,
  Box,
  GitBranch,
} from 'lucide-react';

interface JavaScriptWhatIsDOMProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

// Animated DOM Tree Component
const AnimatedDOMTree = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [operations, setOperations] = useState<string[]>([]);
  const [domNodes, setDomNodes] = useState([
    { id: 'html', tag: 'html', level: 0 },
    { id: 'head', tag: 'head', level: 1 },
    { id: 'body', tag: 'body', level: 1 },
    { id: 'h1', tag: 'h1', level: 2 },
    { id: 'p', tag: 'p', level: 2 },
  ]);

  const runDOMAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setOperations([]);
    setSelectedNode(null);

    await new Promise(resolve => setTimeout(resolve, 500));
    setOperations(['1. Select element: querySelector("h1")']);
    setSelectedNode('h1');
    await new Promise(resolve => setTimeout(resolve, 1500));

    setOperations(prev => [...prev, '2. Modify: textContent = "Updated!"']);
    await new Promise(resolve => setTimeout(resolve, 1500));

    setOperations(prev => [...prev, '3. Create: createElement("div")']);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newNode = { id: 'div', tag: 'div', level: 2 };
    setDomNodes(prev => [...prev, newNode]);
    await new Promise(resolve => setTimeout(resolve, 1000));

    setOperations(prev => [...prev, '4. Style: element.style.color = "blue"']);
    setSelectedNode('div');
    await new Promise(resolve => setTimeout(resolve, 1500));

    setOperations(prev => [...prev, '✅ DOM manipulation complete!']);
    setSelectedNode(null);
    
    // Wait 2 seconds to show completion, then auto-reset
    await new Promise(resolve => setTimeout(resolve, 2000));
    reset();
  };

  const reset = () => {
    setSelectedNode(null);
    setIsAnimating(false);
    setOperations([]);
    setDomNodes([
      { id: 'html', tag: 'html', level: 0 },
      { id: 'head', tag: 'head', level: 1 },
      { id: 'body', tag: 'body', level: 1 },
      { id: 'h1', tag: 'h1', level: 2 },
      { id: 'p', tag: 'p', level: 2 },
    ]);
  };

  const getNodeColor = (tag: string) => {
    const colors: Record<string, string> = {
      'html': 'from-purple-500 to-pink-500',
      'head': 'from-blue-500 to-cyan-500',
      'body': 'from-emerald-500 to-green-500',
      'h1': 'from-amber-500 to-orange-500',
      'p': 'from-rose-500 to-red-500',
      'div': 'from-indigo-500 to-purple-500',
    };
    return colors[tag] || 'from-gray-500 to-slate-500';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Network className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
          Animated DOM Tree Manipulation
        </CardTitle>
        <CardDescription className="text-base">
          Watch how JavaScript interacts with the DOM tree
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-900 dark:to-blue-950/20 rounded-xl border-2 border-blue-200/50 dark:border-blue-800/30">
          <div className="flex items-center gap-2 mb-4">
            <GitBranch className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold">Document Tree</h4>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border space-y-2">
            {domNodes.map((node) => (
              <div
                key={node.id}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  node.level === 0 ? 'ml-0' : node.level === 1 ? 'ml-8' : 'ml-16'
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                    selectedNode === node.id
                      ? `bg-gradient-to-r ${getNodeColor(node.tag)} text-white shadow-lg scale-110 ring-2 ring-white animate-pulse`
                      : `bg-gradient-to-r ${getNodeColor(node.tag)} text-white opacity-70`
                  } ${node.id === 'div' ? 'animate-in slide-in-from-right duration-500' : ''}`}
                >
                  &lt;{node.tag}&gt;
                </div>
                {selectedNode === node.id && (
                  <Badge className="bg-blue-600 text-white text-xs">Selected</Badge>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm">JavaScript Operations</h4>
          <div className="min-h-[120px] p-4 bg-slate-900 dark:bg-slate-950 rounded-lg border font-mono text-xs">
            {operations.length === 0 ? (
              <div className="text-slate-500">Click "Run Animation" to see DOM manipulation...</div>
            ) : (
              <div className="space-y-1">
                {operations.map((op, index) => (
                  <div key={index} className={`animate-in fade-in ${op.includes('✅') ? 'text-green-400 font-bold' : 'text-cyan-400'}`}>
                    {op}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t">
          <Button onClick={runDOMAnimation} disabled={isAnimating} className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <Play className="w-4 h-4 mr-2" />
            {isAnimating ? 'Running...' : 'Run Animation'}
          </Button>
          <Button onClick={reset} variant="outline" disabled={isAnimating}>Reset</Button>
        </div>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>How It Works</AlertTitle>
          <AlertDescription>
            JavaScript uses the DOM API to select, modify, create, and delete HTML elements dynamically.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default function JavaScriptWhatIsDOM({ onOpenWebPlayground }: JavaScriptWhatIsDOMProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Network}
        category="JavaScript · Browser APIs"
        title="What is the DOM?"
        description="Master the Document Object Model - understand how JavaScript interacts with HTML to create dynamic, interactive web pages."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is the Document Object Model?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            The DOM is a programming interface that represents an HTML document as a tree of objects. Think of it like a family tree - every HTML element is a "node" with parents, children, and siblings that JavaScript can manipulate!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <Network className="w-5 h-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-sm">Tree Structure</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Elements organized hierarchically with parent-child relationships
              </p>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <Code className="w-5 h-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-sm">JavaScript API</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Methods and properties to interact with HTML elements
              </p>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <Zap className="w-5 h-5 text-emerald-600 mb-2" />
              <h4 className="font-semibold text-sm">Dynamic Updates</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Change page content without reloading
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <AnimatedDOMTree />

      {/* DOM Tree Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitBranch className="w-6 h-6 text-blue-600" />
            DOM Tree Structure
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">HTML Source</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
{`<!DOCTYPE html>
<html>
  <head>
    <title>Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>World!</p>
  </body>
</html>`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">DOM Tree</h4>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 border space-y-1.5 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Box className="w-3 h-3 text-purple-600" />
                  <span>Document</span>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <Box className="w-3 h-3 text-blue-600" />
                  <span>└─ html</span>
                </div>
                <div className="ml-8 flex items-center gap-2">
                  <Box className="w-3 h-3 text-cyan-600" />
                  <span>├─ head → title</span>
                </div>
                <div className="ml-8 flex items-center gap-2">
                  <Box className="w-3 h-3 text-emerald-600" />
                  <span>└─ body</span>
                </div>
                <div className="ml-12 flex items-center gap-2">
                  <Box className="w-3 h-3 text-amber-600" />
                  <span>├─ h1</span>
                </div>
                <div className="ml-12 flex items-center gap-2">
                  <Box className="w-3 h-3 text-rose-600" />
                  <span>└─ p</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selecting Elements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="w-6 h-6 text-blue-600" />
            Selecting Elements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">querySelector()</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
{`// Select by CSS selector
const h1 = document.querySelector('h1');
const item = document.querySelector('.item');
const btn = document.querySelector('#myBtn');

// Returns first match or null`}</pre>
              <SnippetOutput lines={['<h1>...</h1>']} />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">querySelectorAll()</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
{`// Select all matches
const items = document.querySelectorAll('.item');

// Returns NodeList
items.forEach(item => {
  console.log(item.textContent);
});`}</pre>
              <SnippetOutput lines={['Item 1', 'Item 2', 'Item 3']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Manipulating Elements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-emerald-600" />
            Manipulating Elements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Change Content</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
{`const h1 = document.querySelector('h1');

// Plain text
h1.textContent = 'New Title';

// HTML markup
h1.innerHTML = '<strong>Bold</strong> Title';`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Change Styles</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
{`const box = document.querySelector('.box');

// Inline styles
box.style.color = 'blue';
box.style.padding = '20px';

// Classes (preferred)
box.classList.add('active');
box.classList.remove('hidden');
box.classList.toggle('highlight');`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Create Elements</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
{`// Create
const div = document.createElement('div');
div.textContent = 'Hello!';
div.classList.add('box');

// Append to document
document.body.appendChild(div);`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Remove Elements</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
{`const element = document.querySelector('.old');

// Modern way
element.remove();

// Remove all children
container.innerHTML = '';`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <MousePointer className="w-6 h-6 text-rose-600" />
            Event Listeners
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Click Events</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
{`const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  console.log('Clicked!');
  console.log(event.target);
});`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Event Delegation</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
{`// Efficient for dynamic elements
const list = document.querySelector('.list');

list.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    console.log('Item clicked!');
  }
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Do This
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5" />
                  Cache DOM queries in variables
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5" />
                  Use event delegation for dynamic elements
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5" />
                  Batch DOM updates
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600" />
                Avoid This
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5" />
                  Don't query DOM repeatedly in loops
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5" />
                  Don't modify styles one at a time
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5" />
                  Don't use innerHTML for simple text
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

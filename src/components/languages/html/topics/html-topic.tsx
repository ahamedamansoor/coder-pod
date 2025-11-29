'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippetWithOutput, InteractivePlayground, FrontendCodePreview } from '@/components/shared';
import {
  FileCode,
  Sparkles,
  Layers,
  Globe,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Monitor,
  Workflow,
  ArrowRight,
  Code2,
  Zap,
  Eye,
  MousePointer,
  Box,
  GitBranch,
  Binary,
  Layout,
  Palette,
  Settings,
} from 'lucide-react';

interface HtmlIntroductionProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Interactive Playground</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100%;
      padding: 1rem;
      color: #1e293b;
      overflow-y: auto;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      margin-bottom: 1rem;
    }
    
    h1 {
      color: #3b82f6;
      margin-bottom: 0.5rem;
      font-size: 2rem;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .subtitle {
      color: #64748b;
      margin-bottom: 1rem;
      font-size: 1rem;
    }
    
    .section {
      margin: 1rem 0;
      padding: 1rem;
      background: linear-gradient(135deg, #f8fafc, #e0f2fe);
      border-radius: 12px;
      border-left: 4px solid #3b82f6;
    }
    
    .section h2 {
      color: #1e40af;
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.25rem;
    }
    
    .tag-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0.75rem;
      margin-top: 0.75rem;
    }
    
    .tag-card {
      background: white;
      padding: 0.75rem;
      border-radius: 8px;
      border: 2px solid #e2e8f0;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .tag-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
      border-color: #3b82f6;
    }
    
    .tag-name {
      font-family: 'Courier New', monospace;
      font-weight: bold;
      color: #3b82f6;
      margin-bottom: 0.25rem;
      font-size: 1rem;
    }
    
    .tag-desc {
      color: #64748b;
      font-size: 0.85rem;
    }
    
    .demo-box {
      background: #f1f5f9;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 0.5rem;
      border: 2px dashed #cbd5e1;
      max-height: 200px;
      overflow-y: auto;
    }
    
    .interactive-demo {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 0.5rem;
    }
    
    .interactive-demo h3 {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    
    code {
      background: #1e293b;
      color: #e2e8f0;
      padding: 0.75rem;
      border-radius: 8px;
      display: block;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      overflow-x: auto;
      max-height: 150px;
      overflow-y: auto;
    }
    
    .highlight { color: #fbbf24; }
    .tag { color: #f472b6; }
    .attr { color: #60a5fa; }
    
    button {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      border: none;
      padding: 0.6rem 1.2rem;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      margin-top: 0.75rem;
    }
    
    button:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .section {
      animation: fadeIn 0.6s ease-out;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 HTML Interactive Playground</h1>
    <p class="subtitle">Explore HTML tags and see them in action!</p>
    
    <div class="section">
      <h2>📝 Essential HTML Tags</h2>
      <div class="tag-grid" id="tag-grid"></div>
    </div>
    
    <div class="section">
      <h2>💻 Live Demo</h2>
      <div class="interactive-demo">
        <div>
          <h3>Code:</h3>
          <code id="code-display"></code>
        </div>
        <div>
          <h3>Result:</h3>
          <div class="demo-box" id="result-display"></div>
        </div>
      </div>
      <button onclick="rotateDemo()">Try Another Example →</button>
    </div>
    
    <div class="section">
      <h2>🎯 Key Concepts</h2>
      <div id="concepts"></div>
    </div>
  </div>
  <script src="./html-intro-demo.js"></script>
</body>
</html>`;

const playgroundJs = `// Essential HTML Tags
const tags = [
  { name: '<h1>', desc: 'Main heading - most important' },
  { name: '<p>', desc: 'Paragraph of text content' },
  { name: '<a>', desc: 'Hyperlink to other pages' },
  { name: '<img>', desc: 'Embed images' },
  { name: '<div>', desc: 'Generic container' },
  { name: '<button>', desc: 'Interactive button' }
];

// Live Demo Examples
const demos = [
  {
    code: '<h1>Welcome to HTML!</h1>\\n<p>HTML structures web content.</p>',
    result: '<h1 style="color: #3b82f6;">Welcome to HTML!</h1><p style="color: #64748b;">HTML structures web content.</p>'
  },
  {
    code: '<a href="#">Click me!</a>\\n<button>Press Here</button>',
    result: '<a href="#" style="color: #3b82f6; text-decoration: underline;">Click me!</a><br><br><button style="padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">Press Here</button>'
  },
  {
    code: '<ul>\\n  <li>First item</li>\\n  <li>Second item</li>\\n</ul>',
    result: '<ul style="color: #64748b; margin-left: 1.5rem;"><li>First item</li><li>Second item</li></ul>'
  }
];

const concepts = [
  '🏗️ HTML provides structure to web content',
  '🎨 CSS adds styling and visual design',
  '⚡ JavaScript adds interactivity and behavior',
  '♿ Semantic HTML improves accessibility',
  '🔍 Proper tags help SEO and discoverability'
];

// Populate tag grid
const tagGrid = document.getElementById('tag-grid');
tagGrid.innerHTML = tags
  .map(tag => 
    \`<div class="tag-card">
      <div class="tag-name">\${tag.name}</div>
      <div class="tag-desc">\${tag.desc}</div>
    </div>\`
  )
  .join('');

// Rotate through demos
let currentDemo = 0;

function updateDemo() {
  const demo = demos[currentDemo];
  document.getElementById('code-display').textContent = demo.code;
  document.getElementById('result-display').innerHTML = demo.result;
}

function rotateDemo() {
  currentDemo = (currentDemo + 1) % demos.length;
  updateDemo();
}

// Populate concepts
document.getElementById('concepts').innerHTML = concepts
  .map(concept => \`<div style="padding: 0.5rem; margin: 0.25rem 0; background: white; border-radius: 6px; border-left: 3px solid #3b82f6; font-size: 0.9rem;">\${concept}</div>\`)
  .join('');

// Initialize
updateDemo();`;

export default function HtmlIntroduction({ onOpenWebPlayground }: HtmlIntroductionProps) {
  const [selectedTag, setSelectedTag] = useState('div');
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [activeDemo, setActiveDemo] = useState(0);

  // HTML Tags Categories
  const tagCategories = [
    {
      name: 'Structure',
      icon: Layout,
      color: 'blue',
      tags: [
        { name: 'div', desc: 'Generic container', code: '<div>Content</div>' },
        { name: 'header', desc: 'Page header', code: '<header>Header content</header>' },
        { name: 'main', desc: 'Main content', code: '<main>Main content</main>' },
        { name: 'footer', desc: 'Page footer', code: '<footer>Footer content</footer>' }
      ]
    },
    {
      name: 'Text',
      icon: FileCode,
      color: 'emerald',
      tags: [
        { name: 'h1', desc: 'Main heading', code: '<h1>Heading</h1>' },
        { name: 'p', desc: 'Paragraph', code: '<p>Paragraph text</p>' },
        { name: 'span', desc: 'Inline text', code: '<span>Text</span>' },
        { name: 'strong', desc: 'Bold text', code: '<strong>Bold</strong>' }
      ]
    },
    {
      name: 'Media',
      icon: Monitor,
      color: 'amber',
      tags: [
        { name: 'img', desc: 'Image', code: '<img src="image.jpg" alt="Description">' },
        { name: 'video', desc: 'Video player', code: '<video src="video.mp4" controls></video>' },
        { name: 'audio', desc: 'Audio player', code: '<audio src="audio.mp3" controls></audio>' },
        { name: 'svg', desc: 'Vector graphics', code: '<svg>...</svg>' }
      ]
    },
    {
      name: 'Interactive',
      icon: MousePointer,
      color: 'purple',
      tags: [
        { name: 'a', desc: 'Hyperlink', code: '<a href="#">Link</a>' },
        { name: 'button', desc: 'Button', code: '<button>Click me</button>' },
        { name: 'input', desc: 'Input field', code: '<input type="text">' },
        { name: 'form', desc: 'Form container', code: '<form>...</form>' }
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={FileCode}
        category="HTML · Foundations"
        title="Introduction to HTML"
        description="Understand what HTML is, how browsers read it, and the core tags that build every web page."
        colorTheme="blue"
      />

      {/* What is HTML - Full Form & History */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50/60 via-cyan-50/40 to-indigo-50/60 dark:from-blue-950/10 dark:via-cyan-950/5 dark:to-indigo-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl">
            <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            What is HTML?
          </CardTitle>
        </CardHeader>
        <CardContent className="relative space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: Full Form & Definition */}
            <div className="space-y-4">
              <div className="p-5 bg-white/90 dark:bg-slate-900/90 rounded-xl border-2 border-blue-300 dark:border-blue-700 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-blue-600 text-white text-xs">FULL FORM</Badge>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  <span className="text-blue-600 dark:text-blue-400">H</span>yper
                  <span className="text-blue-600 dark:text-blue-400">T</span>ext{' '}
                  <span className="text-blue-600 dark:text-blue-400">M</span>arkup{' '}
                  <span className="text-blue-600 dark:text-blue-400">L</span>anguage
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  The standard markup language for creating web pages and web applications.
                </p>
              </div>

              <div className="p-5 bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-950/30 dark:to-cyan-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-start gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Breaking it Down</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span><strong>HyperText:</strong> Text with links to other documents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Markup:</strong> Tags that structure content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Language:</strong> Standardized syntax and rules</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Creator & History */}
            <div className="space-y-4">
              <div className="p-5 bg-white/90 dark:bg-slate-900/90 rounded-xl border-2 border-purple-300 dark:border-purple-700 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-purple-600 text-white text-xs">CREATOR</Badge>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <Binary className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Tim Berners-Lee</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">British Computer Scientist</p>
                    <div className="flex items-center gap-2 text-xs">
                      <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                        Created in 1991
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                        at CERN
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Key Facts</h4>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>🌍 Foundation of the World Wide Web</li>
                      <li>📱 Powers every website and web app</li>
                      <li>🆓 Open standard, free to use</li>
                      <li>🔄 Continuously evolving (HTML5 is latest)</li>
                      <li>🎯 Works on all devices and browsers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Did You Know?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              HTML was created to share scientific documents between researchers. Today, it's the backbone of over 1.9 billion websites worldwide!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive HTML Journey */}
      <Card className="bg-gradient-to-br from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Workflow className="w-7 h-7 text-indigo-600 dark:text-indigo-400 animate-pulse" />
            The Journey: Code → Browser → Page
          </CardTitle>
          <CardDescription className="text-base">
            Watch how HTML transforms into a living, breathing webpage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Visual Flow */}
          <div className="relative">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {[
                { label: '📝 Write HTML', icon: Code2, color: 'blue' },
                { label: '🔍 Browser Parses', icon: Eye, color: 'emerald' },
                { label: '🌳 Build DOM Tree', icon: GitBranch, color: 'purple' },
                { label: '🎨 Apply CSS', icon: Palette, color: 'pink' },
                { label: '⚡ Execute JS', icon: Zap, color: 'amber' },
                { label: '✨ Render Page', icon: Sparkles, color: 'cyan' },
              ].map((step, idx, arr) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={step.label}>
                    <div 
                      className={`group relative px-4 py-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer
                        ${idx === activeDemo ? `border-${step.color}-500 shadow-${step.color}-200 dark:shadow-${step.color}-900/20` : 'border-gray-200 dark:border-gray-700'}`}
                      onMouseEnter={() => setActiveDemo(idx)}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className={`w-5 h-5 text-${step.color}-600 dark:text-${step.color}-400 transition-transform group-hover:rotate-12`} />
                        <span className="font-semibold text-sm">{step.label.split(' ').slice(1).join(' ')}</span>
                      </div>
                      {idx === activeDemo && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    {idx < arr.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-600 animate-pulse" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Explanation Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="group p-5 bg-gradient-to-br from-blue-50/80 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/20 dark:bg-blue-500/30 rounded-lg">
                  <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-lg">DOM Tree</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                The browser converts your HTML tags into a tree structure called the DOM. Each element becomes a node that can be styled and manipulated.
              </p>
              <div className="mt-3 inline-flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400">
                <Binary className="w-3 h-3 mr-1" />
                Hierarchical Structure
              </div>
            </div>

            <div className="group p-5 bg-gradient-to-br from-emerald-50/80 to-emerald-100/50 dark:from-emerald-950/20 dark:to-emerald-900/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-500/20 dark:bg-emerald-500/30 rounded-lg">
                  <Palette className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="font-bold text-lg">CSS Cascade</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Styles attach to DOM nodes based on selectors. The cascade determines which styles win when there are conflicts.
              </p>
              <div className="mt-3 inline-flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Layers className="w-3 h-3 mr-1" />
                Visual Layer
              </div>
            </div>

            <div className="group p-5 bg-gradient-to-br from-amber-50/80 to-amber-100/50 dark:from-amber-950/20 dark:to-amber-900/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-amber-500/20 dark:bg-amber-500/30 rounded-lg">
                  <Globe className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h4 className="font-bold text-lg">Accessibility</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Semantic HTML provides context for screen readers and improves keyboard navigation. Structure is your first a11y tool.
              </p>
              <div className="mt-3 inline-flex items-center text-xs font-semibold text-amber-600 dark:text-amber-400">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Inclusive Design
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Tag Explorer */}
      <Card className="bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Box className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            Interactive Tag Explorer
          </CardTitle>
          <CardDescription className="text-base">
            Click on any category to explore HTML tags and their uses
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Category Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {tagCategories.map((category) => {
              const Icon = category.icon;
              const isActive = tagCategories.findIndex(c => c.name === category.name) === Math.floor(activeDemo / 2);
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveDemo(tagCategories.findIndex(c => c.name === category.name) * 2)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg
                    ${isActive 
                      ? `bg-${category.color}-100 dark:bg-${category.color}-900/30 border-${category.color}-400 dark:border-${category.color}-600 shadow-lg` 
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'}`}
                >
                  <Icon className={`w-6 h-6 mx-auto mb-2 text-${category.color}-600 dark:text-${category.color}-400`} />
                  <p className="text-sm font-semibold">{category.name}</p>
                </button>
              );
            })}
          </div>

          {/* Tags Display */}
          <div className="grid md:grid-cols-2 gap-4">
            {tagCategories[Math.floor(activeDemo / 2) % tagCategories.length].tags.map((tag) => (
              <div
                key={tag.name}
                onMouseEnter={() => setHoveredElement(tag.name)}
                onMouseLeave={() => setHoveredElement(null)}
                className={`p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer
                  ${hoveredElement === tag.name 
                    ? 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 border-blue-400 dark:border-blue-600 shadow-xl transform scale-105' 
                    : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-mono text-xs">
                    &lt;{tag.name}&gt;
                  </Badge>
                  {hoveredElement === tag.name && (
                    <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{tag.desc}</p>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                  <code className="text-xs font-mono text-gray-800 dark:text-gray-200">{tag.code}</code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>


      {/* Animated DOM Tree Visualizer */}
      <Card className="bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitBranch className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
            DOM Tree Visualizer
          </CardTitle>
          <CardDescription className="text-base">
            See how HTML tags transform into a hierarchical tree structure in the browser
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* HTML Code */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-lg">HTML Code</h4>
              </div>
              <div className="bg-gray-900 dark:bg-black rounded-xl p-4 border border-gray-700 font-mono text-sm">
                <div className="space-y-1">
                  <div className="text-gray-500">&lt;<span className="text-pink-400">!DOCTYPE</span> <span className="text-yellow-300">html</span>&gt;</div>
                  <div className="text-gray-500">&lt;<span className="text-pink-400">html</span>&gt;</div>
                  <div className="pl-4 text-gray-500">&lt;<span className="text-pink-400">head</span>&gt;</div>
                  <div className="pl-8 text-gray-500">&lt;<span className="text-pink-400">title</span>&gt;<span className="text-green-300">My Page</span>&lt;/<span className="text-pink-400">title</span>&gt;</div>
                  <div className="pl-4 text-gray-500">&lt;/<span className="text-pink-400">head</span>&gt;</div>
                  <div className="pl-4 text-gray-500">&lt;<span className="text-pink-400">body</span>&gt;</div>
                  <div className="pl-8 text-gray-500">&lt;<span className="text-pink-400">h1</span>&gt;<span className="text-green-300">Hello!</span>&lt;/<span className="text-pink-400">h1</span>&gt;</div>
                  <div className="pl-8 text-gray-500">&lt;<span className="text-pink-400">p</span>&gt;<span className="text-green-300">Welcome</span>&lt;/<span className="text-pink-400">p</span>&gt;</div>
                  <div className="pl-4 text-gray-500">&lt;/<span className="text-pink-400">body</span>&gt;</div>
                  <div className="text-gray-500">&lt;/<span className="text-pink-400">html</span>&gt;</div>
                </div>
              </div>
            </div>

            {/* DOM Tree */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <h4 className="font-bold text-lg">DOM Tree</h4>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 rounded-xl p-4 border border-cyan-200 dark:border-cyan-700 font-mono text-sm space-y-2">
                <div className="flex items-center gap-2 animate-fade-in">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="font-bold text-cyan-700 dark:text-cyan-300">document</span>
                </div>
                <div className="pl-6 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-bold text-blue-700 dark:text-blue-300">html</span>
                </div>
                <div className="pl-12 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-700 dark:text-purple-300">head</span>
                </div>
                <div className="pl-16 flex items-center gap-2 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <ArrowRight className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">title: "My Page"</span>
                </div>
                <div className="pl-12 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-700 dark:text-purple-300">body</span>
                </div>
                <div className="pl-16 flex items-center gap-2 text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <ArrowRight className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">h1: "Hello!"</span>
                </div>
                <div className="pl-16 flex items-center gap-2 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <ArrowRight className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">p: "Welcome"</span>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-800">
            <Lightbulb className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Concept</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              Every HTML element becomes a "node" in the DOM tree. JavaScript can access and modify these nodes to make pages interactive!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Page skeleton */}
      <Card className="bg-gradient-to-br from-emerald-50/40 to-green-50/40 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            HTML Page Skeleton
          </CardTitle>
          <CardDescription className="text-base">
            Every page follows the same outline: doctype, html, head, and body.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FrontendCodePreview
            title="Minimal HTML Document"
            description="Every page follows the same outline: doctype, html, head, and body"
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
    }
    
    /* Light mode styles */
    h1 {
      color: #3b82f6;
      border-bottom: 3px solid #3b82f6;
      padding-bottom: 0.5rem;
      transition: color 0.3s, border-color 0.3s;
    }
    
    /* Dark mode styles */
    html.dark h1 {
      color: #60a5fa;
      border-bottom-color: #60a5fa;
    }
    
    p {
      line-height: 1.6;
      font-size: 1.1rem;
    }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first HTML page.</p>
  <p>The browser reads the HTML and displays it as a structured document.</p>
</body>
</html>`}
            colorTheme="blue"
            icon={FileCode}
            previewHeight="300px"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold">Head vs Body</h4>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="font-semibold text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-2">
                    <Binary className="w-4 h-4" />
                    &lt;head&gt;
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Metadata: title, meta tags, links to CSS, scripts</p>
                </div>
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <div className="font-semibold text-emerald-700 dark:text-emerald-300 mb-1 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    &lt;body&gt;
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Visible content: headings, paragraphs, images, etc.</p>
                </div>
              </div>
              <Alert className="mt-3">
                <Zap className="h-4 w-4" />
                <AlertTitle className="text-sm">Pro Tip</AlertTitle>
                <AlertDescription className="text-xs">
                  Use `defer` on scripts so HTML can render first for better performance!
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live HTML Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Eye className="w-6 h-6 text-orange-600/80 dark:text-orange-400/80" />
            Live HTML Examples
          </CardTitle>
          <CardDescription className="text-base">
            See HTML code and its rendered result side by side
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FrontendCodePreview
            title="Simple HTML Structure"
            description="Basic heading and paragraph example"
            html={`<h1>Welcome to HTML!</h1>
<p>HTML (HyperText Markup Language) is the standard language for creating web pages.</p>
<p>It uses <strong>tags</strong> to structure content and make it meaningful.</p>`}
            css={`h1 {
  color: #ea580c;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

html.dark h1 {
  color: #fb923c;
}

p {
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

strong {
  font-weight: 700;
  color: #dc2626;
  transition: color 0.3s;
}

html.dark strong {
  color: #f87171;
}`}
            colorTheme="orange"
            previewHeight="200px"
          />

          <FrontendCodePreview
            title="Styled Button"
            description="HTML with CSS styling"
            html={`<button class="my-button">Click Me!</button>`}
            css={`.my-button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.my-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}`}
            colorTheme="purple"
            previewHeight="150px"
          />

          <FrontendCodePreview
            title="Interactive Counter"
            description="HTML + CSS + JavaScript working together"
            html={`<div class="counter-box">
  <h2>Counter: <span id="count">0</span></h2>
  <div class="button-group">
    <button onclick="decrement()">-</button>
    <button onclick="reset()">Reset</button>
    <button onclick="increment()">+</button>
  </div>
</div>`}
            css={`/* Container with theme support */
.counter-box {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  border-radius: 12px;
  border: 2px solid #3b82f6;
  transition: all 0.3s;
}

/* Dark mode styles */
html.dark .counter-box {
  background: linear-gradient(135deg, #1e3a8a, #1e40af);
  border-color: #60a5fa;
}

/* Heading */
.counter-box h2 {
  font-size: 2rem;
  color: #1e40af;
  margin-bottom: 1.5rem;
  transition: color 0.3s;
}

html.dark .counter-box h2 {
  color: #93c5fd;
}

/* Counter number */
#count {
  color: #3b82f6;
  font-weight: bold;
  transition: color 0.3s;
}

html.dark #count {
  color: #60a5fa;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

button:hover {
  background: #2563eb;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

html.dark button {
  background: #60a5fa;
  color: #0f172a;
}

html.dark button:hover {
  background: #93c5fd;
}`}
            js={`let count = 0;

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('count').textContent = count;
}`}
            colorTheme="blue"
            previewHeight="250px"
          />
        </CardContent>
      </Card>

      {/* Live HTML Builder */}
      <Card className="bg-gradient-to-br from-amber-50/40 to-orange-50/40 dark:from-amber-950/10 dark:to-orange-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Settings className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            Live HTML Structure Builder
          </CardTitle>
          <CardDescription className="text-base">
            See how different HTML elements come together to create a webpage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Code View */}
            <div className="space-y-3">
              <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">HTML Structure</Badge>
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm space-y-1 border border-amber-300 dark:border-amber-700">
                <div className="text-gray-500">&lt;<span className="text-blue-400">section</span> <span className="text-yellow-300">class</span>=<span className="text-green-300">"card"</span>&gt;</div>
                <div className="pl-4 text-gray-500">&lt;<span className="text-blue-400">h2</span>&gt;<span className="text-white">Article Title</span>&lt;/<span className="text-blue-400">h2</span>&gt;</div>
                <div className="pl-4 text-gray-500">&lt;<span className="text-blue-400">p</span>&gt;<span className="text-white">Description text...</span>&lt;/<span className="text-blue-400">p</span>&gt;</div>
                <div className="pl-4 text-gray-500">&lt;<span className="text-blue-400">button</span>&gt;<span className="text-white">Click Me</span>&lt;/<span className="text-blue-400">button</span>&gt;</div>
                <div className="text-gray-500">&lt;/<span className="text-blue-400">section</span>&gt;</div>
              </div>
            </div>

            {/* Visual Preview */}
            <div className="space-y-3">
              <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">Visual Result</Badge>
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border-2 border-cyan-300 dark:border-cyan-700 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Article Title</h2>
                <p className="text-gray-600 dark:text-gray-300">Description text...</p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md hover:shadow-lg transform hover:scale-105 duration-200">
                  Click Me
                </button>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
            <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">HTML is Just Structure!</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              The styling (colors, spacing, effects) comes from CSS. HTML only defines what each element is—not how it looks.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>


      {/* Best practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use semantic tags (&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;).</li>
              <li>✅ Add alt text to images for accessibility.</li>
              <li>✅ Keep titles and meta descriptions relevant.</li>
              <li>✅ Validate HTML to catch missing tags.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Nesting block elements incorrectly (e.g., &lt;div&gt; inside &lt;p&gt;).</li>
              <li>❌ Omitting language attribute on &lt;html&gt;.</li>
              <li>❌ Using deprecated tags like &lt;font&gt; or &lt;center&gt;.</li>
              <li>❌ Relying on inline styles for layout.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="Interactive HTML Playground"
          description="Experiment with HTML tags, document structure, and see your code come to life. Includes multiple interactive demos with rotation functionality."
          features={[
            'Live HTML Editor',
            'Visual Preview',
            'Interactive Demos',
            'Instant Results'
          ]}
          buttonText="Launch HTML Playground"
          onLaunchPlayground={onOpenWebPlayground}
          playgroundData={{
            html: playgroundHtml,
            css: '',
            js: playgroundJs
          }}
          colorTheme="blue"
        />
      )}
    </div>
  );
}

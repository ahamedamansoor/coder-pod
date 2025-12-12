'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Paintbrush, Palette, Sparkles, Eye, Code, 
  CheckCircle, Info, Lightbulb, ArrowRight, 
  FileCode, Layers, AlertCircle 
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssIntroductionProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssIntroduction({ onOpenWebPlayground }: CssIntroductionProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Paintbrush}
        category="CSS · Fundamentals"
        title="Introduction to CSS"
        description="Learn what CSS is and how it transforms plain HTML into beautiful, styled web pages"
        colorTheme="indigo"
      />

      {/* What is CSS? */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">What is CSS?</CardTitle>
              <CardDescription className="text-base">The styling language of the web</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">CSS = Cascading Style Sheets</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              CSS is the language used to style and layout web pages. While HTML provides structure and content, 
              CSS makes it beautiful with colors, fonts, spacing, animations, and responsive layouts.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <FileCode className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold text-lg">HTML</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Provides the <strong>structure</strong> and <strong>content</strong> - the skeleton of your webpage
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-500 rounded-lg">
                  <Paintbrush className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">CSS</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Provides the <strong>styling</strong> and <strong>design</strong> - makes it beautiful and functional
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Palette, title: 'Colors', desc: 'Text, backgrounds, gradients' },
              { icon: Layers, title: 'Layouts', desc: 'Flexbox, Grid, positioning' },
              { icon: FileCode, title: 'Typography', desc: 'Fonts, sizes, spacing' },
              { icon: Sparkles, title: 'Effects', desc: 'Shadows, animations, transforms' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center hover:scale-105 transition-transform">
                <item.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* The Power of CSS - Visual Demo */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">The Power of CSS</CardTitle>
              <CardDescription className="text-base">See the dramatic difference CSS makes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      max-width: 1000px;
      width: 100%;
    }
    
    .box {
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    .badge {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 13px;
      margin-bottom: 20px;
    }
    
    .without .badge {
      background: #fee;
      color: #c33;
    }
    
    @media (prefers-color-scheme: dark) {
      .without .badge {
        background: #5a1a1a;
        color: #ff9999;
      }
    }
    
    .with .badge {
      background: #efe;
      color: #3c3;
    }
    
    @media (prefers-color-scheme: dark) {
      .with .badge {
        background: #1a4a1a;
        color: #99ff99;
      }
    }
    
    h1 {
      font-size: 28px;
      margin-bottom: 15px;
      color: #333;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #e5e5e5;
      }
    }
    
    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      p {
        color: #aaa;
      }
    }
    
    .with h1 {
      background: linear-gradient(135deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .with p {
      color: #667eea;
      font-size: 17px;
    }
    
    @media (prefers-color-scheme: dark) {
      .with p {
        color: #9fa9ff;
      }
    }
    
    button {
      border: none;
      padding: 14px 28px;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .without button {
      background: #ddd;
      color: #666;
    }
    
    .with button {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }
    
    .with button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }
    
    @media (max-width: 768px) {
      .container {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box without">
      <span class="badge">❌ Without CSS</span>
      <h1>Plain HTML</h1>
      <p>This is boring, unstyled content. No colors, no spacing, no design appeal.</p>
      <button>Boring Button</button>
    </div>
    
    <div class="box with">
      <span class="badge">✨ With CSS Magic</span>
      <h1>Beautiful Design!</h1>
      <p>CSS transforms HTML into stunning experiences with colors, layouts, and animations!</p>
      <button>Beautiful Button</button>
    </div>
  </div>
</body>
</html>`}
            title="HTML vs CSS Comparison"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                <span className="text-xl">❌</span> Without CSS
              </h4>
              <ul className="space-y-1 text-sm text-red-800 dark:text-red-200">
                <li>• Plain black text</li>
                <li>• Default fonts</li>
                <li>• No layout control</li>
                <li>• Boring appearance</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <span className="text-xl">✨</span> With CSS
              </h4>
              <ul className="space-y-1 text-sm text-green-800 dark:text-green-200">
                <li>• Beautiful colors & gradients</li>
                <li>• Custom fonts & spacing</li>
                <li>• Flexible layouts</li>
                <li>• Interactive effects</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Three Ways to Add CSS */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Three Ways to Add CSS
          </CardTitle>
          <CardDescription>Different methods of applying styles to your HTML</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Choose the Right Method</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Each method has its use case. External CSS is recommended for most projects!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Method 1: Inline */}
            <div className="p-6 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800 hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg text-cyan-900 dark:text-cyan-100">1️⃣ Inline CSS</h3>
                <Badge variant="outline" className="bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300">
                  Quick
                </Badge>
              </div>
              <p className="text-sm text-cyan-800 dark:text-cyan-200 mb-3">
                Styles applied directly to HTML elements using the <code className="px-1 py-0.5 bg-cyan-100 dark:bg-cyan-900 rounded text-xs">style</code> attribute
              </p>
              <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-lg">
                <code className="text-xs text-cyan-900 dark:text-cyan-100">
                  &lt;p style="color: blue;"&gt;
                </code>
              </div>
              <div className="mt-3 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5" />
                <p className="text-xs text-amber-700 dark:text-amber-300">
                  Not recommended for large projects
                </p>
              </div>
            </div>

            {/* Method 2: Internal */}
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100">2️⃣ Internal CSS</h3>
                <Badge variant="outline" className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                  Single Page
                </Badge>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Styles in <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900 rounded text-xs">&lt;style&gt;</code> tag within HTML <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900 rounded text-xs">&lt;head&gt;</code>
              </p>
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                <code className="text-xs text-purple-900 dark:text-purple-100">
                  &lt;style&gt;...&lt;/style&gt;
                </code>
              </div>
              <div className="mt-3 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                <p className="text-xs text-green-700 dark:text-green-300">
                  Good for single-page styles
                </p>
              </div>
            </div>

            {/* Method 3: External */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-300 dark:border-green-700 hover:scale-105 transition-transform shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg text-green-900 dark:text-green-100">3️⃣ External CSS</h3>
                <Badge className="bg-green-600 text-white">
                  ⭐ Best
                </Badge>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Separate <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900 rounded text-xs">.css</code> file linked to HTML
              </p>
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <code className="text-xs text-green-900 dark:text-green-100">
                  &lt;link rel="stylesheet"&gt;
                </code>
              </div>
              <div className="mt-3 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                <p className="text-xs text-green-700 dark:text-green-300">
                  Recommended for all projects!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CSS Syntax */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <FileCode className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            CSS Syntax - The Building Blocks
          </CardTitle>
          <CardDescription>Understanding how CSS rules are structured</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-300 dark:border-orange-700">
            <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-4 text-center text-xl">
              CSS Rule Anatomy
            </h3>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg font-mono text-lg border-2 border-orange-200 dark:border-orange-800">
              <div className="space-y-2">
                <div>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">selector</span>
                  <Badge className="ml-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs">
                    What to style
                  </Badge>
                </div>
                <div className="ml-0">{`{`}</div>
                <div className="ml-4">
                  <span className="text-green-600 dark:text-green-400 font-bold">property</span>
                  <span>: </span>
                  <span className="text-red-600 dark:text-red-400 font-bold">value</span>
                  <span>;</span>
                  <Badge className="ml-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs">
                    How to style
                  </Badge>
                </div>
                <div className="ml-0">{`}`}</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-indigo-600" />
                Example 1: Element Selector
              </h4>
              <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`h1 {
  color: blue;
  font-size: 32px;
}`}</pre>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Styles all <code>&lt;h1&gt;</code> elements
              </p>
            </div>

            <div className="p-5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-indigo-600" />
                Example 2: Class Selector
              </h4>
              <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`.button {
  background: #3b82f6;
  color: white;
  padding: 12px 24px;
}`}</pre>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Styles elements with <code>class="button"</code>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Concepts */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/30 to-purple-50/30 dark:from-indigo-950/10 dark:to-purple-950/10">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: CheckCircle,
                title: 'CSS Controls Appearance',
                desc: 'Every visual aspect of your webpage - colors, fonts, layouts, animations'
              },
              {
                icon: CheckCircle,
                title: 'Separate from HTML',
                desc: 'Keep structure (HTML) and styling (CSS) in separate files for better organization'
              },
              {
                icon: CheckCircle,
                title: 'Reusable Styles',
                desc: 'Write once, apply to multiple elements - saves time and ensures consistency'
              },
              {
                icon: CheckCircle,
                title: 'External is Best',
                desc: 'Use external CSS files for professional projects - easier to maintain and update'
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <item.icon className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <Sparkles className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Ready to Learn More?</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200">
          <p className="mb-3">
            Now that you understand what CSS is, you're ready to dive deeper into specific concepts like:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Badge variant="outline" className="justify-center">Selectors</Badge>
            <Badge variant="outline" className="justify-center">Box Model</Badge>
            <Badge variant="outline" className="justify-center">Flexbox</Badge>
            <Badge variant="outline" className="justify-center">Grid</Badge>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

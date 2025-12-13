'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Focus, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Shield, Zap
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssScopeProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssScope({ onOpenWebPlayground }: CssScopeProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Focus}
        category="CSS · Advanced CSS"
        title="CSS Scoping"
        description="Scope styles to specific DOM subtrees with @scope"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg animate-pulse">
              <Focus className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS @scope Rule</CardTitle>
              <CardDescription className="text-base">
                <Badge className="bg-green-600 text-white mr-2">NEW 2023</Badge>
                Component-level style isolation
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">@scope = Component Styles! 🎯</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              The <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">@scope</code> rule limits 
              styles to a specific DOM subtree. Perfect for <strong>component isolation</strong> without CSS Modules 
              or CSS-in-JS!
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Why Use @scope?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">✅ Benefits</h4>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Style isolation</li>
                  <li>• No class naming conflicts</li>
                  <li>• Component boundaries</li>
                  <li>• Native CSS solution</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">🎯 Use Cases</h4>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Component libraries</li>
                  <li>• Widget styling</li>
                  <li>• Avoiding conflicts</li>
                  <li>• Modular CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Basic @scope Syntax
          </CardTitle>
          <CardDescription>Scope styles to elements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              Simple Scope
            </h3>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-purple-100 block">
{`/* Scope styles to .card elements */
@scope (.card) {
  /* Only affects elements inside .card */
  h2 {
    color: blue;
  }
  
  p {
    font-size: 14px;
  }
}

/* HTML:
<div class="card">
  <h2>Styled ✓</h2>
  <p>Styled ✓</p>
</div>

<h2>Not styled ✗</h2>
*/`}
              </code>
            </div>
            <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
              <Lightbulb className="w-5 h-5 text-purple-600" />
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Styles inside <code>@scope (.card)</code> only affect elements <strong>inside</strong> .card!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Focus className="w-6 h-6 text-green-600 dark:text-green-400" />
            Scope Boundaries
          </CardTitle>
          <CardDescription>Define scope limits</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Use <strong>to</strong> keyword to stop scope at specific elements:
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <h3 className="font-bold text-lg text-green-900 dark:text-green-100 mb-3">
              Scope with Boundaries
            </h3>
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg">
              <code className="text-sm text-green-100 block">
{`/* Scope to .article, but stop at .comments */
@scope (.article) to (.comments) {
  p {
    line-height: 1.8;
  }
}

/* HTML:
<article class="article">
  <p>Styled ✓</p>
  
  <div class="comments">
    <p>NOT styled ✗</p>
  </div>
</article>
*/`}
              </code>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { 
                scenario: 'Component Isolation', 
                code: '@scope (.widget) to (.nested-widget)', 
                desc: 'Stop at nested widgets' 
              },
              { 
                scenario: 'Section Styling', 
                code: '@scope (.section) to (.section)', 
                desc: 'Stop at nested sections' 
              },
              { 
                scenario: 'Header Only', 
                code: '@scope (.card) to (.card-body)', 
                desc: 'Style header, stop at body' 
              }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">{item.scenario}</h4>
                <p className="text-sm text-green-800 dark:text-green-200 mb-2">{item.desc}</p>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded">
                  {item.code}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>See @scope in action</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      text-align: center;
      color: #667eea;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    /* SCOPED STYLES FOR .card-blue */
    @scope (.card-blue) {
      h2 {
        color: #3b82f6;
        background: #dbeafe;
        padding: 10px;
        border-radius: 6px;
      }
      
      p {
        color: #1e40af;
        font-weight: 600;
      }
    }
    
    /* SCOPED STYLES FOR .card-green */
    @scope (.card-green) {
      h2 {
        color: #10b981;
        background: #d1fae5;
        padding: 10px;
        border-radius: 6px;
      }
      
      p {
        color: #065f46;
        font-weight: 600;
      }
    }
    
    @media (prefers-color-scheme: dark) {
      @scope (.card-blue) {
        h2 {
          background: #1e3a8a;
          color: #93c5fd;
        }
        p {
          color: #93c5fd;
        }
      }
      
      @scope (.card-green) {
        h2 {
          background: #064e3b;
          color: #6ee7b7;
        }
        p {
          color: #6ee7b7;
        }
      }
    }
    
    /* General card styling (not scoped) */
    .card-blue,
    .card-green {
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 12px;
      background: #f3f4f6;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-blue,
      .card-green {
        background: #374151;
      }
    }
    
    .label {
      display: inline-block;
      padding: 6px 12px;
      background: #667eea;
      color: white;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        background: #a78bfa;
        color: #1a1a2e;
      }
    }
    
    /* Outside scope - different styling */
    .outside h2 {
      color: #ef4444;
      font-style: italic;
    }
    
    .outside p {
      color: #6b7280;
    }
    
    @media (prefers-color-scheme: dark) {
      .outside h2 {
        color: #fca5a5;
      }
      .outside p {
        color: #9ca3af;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 @scope Demo</h1>
    
    <div class="card-blue">
      <span class="label">Scoped to .card-blue</span>
      <h2>Blue Card Heading</h2>
      <p>This paragraph has blue scoped styles!</p>
    </div>
    
    <div class="card-green">
      <span class="label">Scoped to .card-green</span>
      <h2>Green Card Heading</h2>
      <p>This paragraph has green scoped styles!</p>
    </div>
    
    <div class="outside">
      <span class="label">Outside scope</span>
      <h2>Regular Heading</h2>
      <p>Not affected by @scope rules - different styling!</p>
    </div>
  </div>
</body>
</html>`}
            title="CSS @scope Demo"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            & Reference in @scope
          </CardTitle>
          <CardDescription>Simplify scope selectors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Use <code>&</code> to reference the scope root:
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`@scope (.card) {
  /* & refers to .card */
  & {
    padding: 20px;
  }
  
  /* Same as .card:hover */
  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  /* Same as .card.active */
  &.active {
    border: 2px solid blue;
  }
}`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>@scope (selector)</strong> limits styles to subtree</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>to</strong> keyword to set boundaries</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for <strong>component isolation</strong></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>Chrome 118+, Safari 17.4+</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

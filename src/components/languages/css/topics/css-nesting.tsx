'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Layers, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Code2, Zap
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssNestingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssNesting({ onOpenWebPlayground }: CssNestingProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="CSS · Modern Features"
        title="CSS Nesting"
        description="Native CSS nesting - no preprocessor needed!"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg animate-pulse">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Native CSS Nesting</CardTitle>
              <CardDescription className="text-base">
                <Badge className="bg-green-600 text-white mr-2">NEW 2023</Badge>
                Sass-like nesting in native CSS!
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">No Preprocessor Needed!</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              CSS now supports native nesting just like Sass! Write more organized, readable styles 
              without build tools. The <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">&</code> symbol 
              references the parent selector.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Before vs After
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Badge className="bg-red-600 text-white mb-2">❌ Before (Flat CSS)</Badge>
                <div className="bg-red-900 dark:bg-red-950 p-4 rounded-lg">
                  <code className="text-xs text-red-100 block">
{`.card { }
.card .title { }
.card .content { }
.card:hover { }
.card button { }
.card button:hover { }`}
                  </code>
                </div>
              </div>
              <div>
                <Badge className="bg-green-600 text-white mb-2">✅ After (Nested)</Badge>
                <div className="bg-green-900 dark:bg-green-950 p-4 rounded-lg">
                  <code className="text-xs text-green-100 block">
{`.card {
  .title { }
  .content { }
  &:hover { }
  
  button {
    &:hover { }
  }
}`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Basic Nesting
          </CardTitle>
          <CardDescription>Nest selectors inside each other</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              Element Nesting
            </h3>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-purple-100 block">
{`.card {
  background: white;
  padding: 20px;
  
  /* Nested selector for .card h2 */
  h2 {
    color: blue;
    margin-bottom: 10px;
  }
  
  /* Nested selector for .card p */
  p {
    color: gray;
  }
  
  /* Nested selector for .card button */
  button {
    background: blue;
    color: white;
  }
}`}
              </code>
            </div>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              ✨ Elements nested inside will automatically become descendants
            </p>
          </div>

          <div className="space-y-3">
            {[
              { title: 'Class Nesting', code: '.card {\n  .header { }\n  .content { }\n}' },
              { title: 'ID Nesting', code: '#main {\n  #sidebar { }\n  #content { }\n}' },
              { title: 'Multiple Levels', code: '.nav {\n  ul {\n    li {\n      a { }\n    }\n  }\n}' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">{item.title}</p>
                <pre className="text-xs bg-purple-900 dark:bg-purple-950 text-purple-100 px-3 py-2 rounded overflow-x-auto">
                  {item.code}
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            The & Symbol
          </CardTitle>
          <CardDescription>Reference the parent selector</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">&</code> symbol 
            represents the parent selector. Essential for pseudo-classes and modifiers!
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-3">
              Common & Usage
            </h3>
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`.button {
  background: blue;
  color: white;
  
  /* &:hover = .button:hover */
  &:hover {
    background: darkblue;
  }
  
  /* &:focus = .button:focus */
  &:focus {
    outline: 2px solid blue;
  }
  
  /* &.active = .button.active */
  &.active {
    background: green;
  }
  
  /* &--large = .button--large (BEM) */
  &--large {
    padding: 20px;
    font-size: 18px;
  }
}`}
              </code>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { use: 'Pseudo-classes', code: '&:hover { }\n&:focus { }\n&:active { }' },
              { use: 'Pseudo-elements', code: '&::before { }\n&::after { }' },
              { use: 'State modifiers', code: '&.active { }\n&.disabled { }' },
              { use: 'BEM modifiers', code: '&--primary { }\n&--large { }' },
              { use: 'Compound selectors', code: '&[disabled] { }\n&[type="text"] { }' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">{item.use}</p>
                <pre className="text-xs bg-blue-900 dark:bg-blue-950 text-blue-100 px-3 py-2 rounded overflow-x-auto">
                  {item.code}
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            Practical Example
          </CardTitle>
          <CardDescription>Real-world component styling</CardDescription>
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
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    /* NATIVE CSS NESTING! */
    .card {
      background: white;
      border-radius: 16px;
      padding: 30px;
      max-width: 400px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      transition: transform 0.3s;
      
      /* Nested hover state */
      &:hover {
        transform: translateY(-5px);
      }
      
      /* Nested header */
      .header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
        
        /* Nested icon inside header */
        .icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        
        /* Nested title inside header */
        h2 {
          color: #667eea;
          margin: 0;
        }
      }
      
      /* Nested content */
      .content {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 20px;
        
        /* Nested paragraph inside content */
        p {
          margin-bottom: 10px;
          
          /* Even deeper nesting! */
          strong {
            color: #667eea;
          }
        }
      }
      
      /* Nested button */
      button {
        width: 100%;
        padding: 12px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        
        /* Nested button hover */
        &:hover {
          transform: scale(1.02);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }
        
        /* Nested button active */
        &:active {
          transform: scale(0.98);
        }
      }
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        background: #1a1a2e;
        
        .header h2 {
          color: #a78bfa;
        }
        
        .content {
          color: #9ca3af;
          
          p strong {
            color: #a78bfa;
          }
        }
      }
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="icon">🎨</div>
      <h2>CSS Nesting</h2>
    </div>
    
    <div class="content">
      <p>
        This card is styled with <strong>native CSS nesting</strong>! 
        No Sass, no build tools needed.
      </p>
      <p>
        All the nested selectors, hover states, and even 
        <strong>dark mode</strong> support work natively in browsers.
      </p>
    </div>
    
    <button>Learn More</button>
  </div>
</body>
</html>`}
            title="CSS Nesting Example"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Important Rules
          </CardTitle>
          <CardDescription>Things to know about CSS nesting</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">When to Use &</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              <strong>Pseudo-classes and modifiers NEED &:</strong> Use <code>&:hover</code>, <code>&.active</code>, etc.<br />
              <strong>Element/class nesting DON'T NEED &:</strong> Just write <code>h2 {`{ }`}</code>, <code>.header {`{ }`}</code>
            </AlertDescription>
          </Alert>

          <div className="space-y-3">
            {[
              { rule: '✅ Works', code: '.card {\n  &:hover { } /* GOOD */\n  h2 { }      /* GOOD */\n}' },
              { rule: '❌ Wrong', code: '.card {\n  :hover { }  /* BAD - needs & */\n  .active { } /* OK but & preferred */\n}' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                <p className="font-bold mb-2">{item.rule}</p>
                <pre className="text-xs bg-orange-900 dark:bg-orange-950 text-orange-100 px-3 py-2 rounded overflow-x-auto">
                  {item.code}
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Native CSS nesting</strong> - No Sass/preprocessor needed!</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>&</strong> for pseudo-classes and modifiers</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Elements can be nested directly: <code>h2 {`{ }`}</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>Chrome 112+, Safari 16.5+, Firefox 117+</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

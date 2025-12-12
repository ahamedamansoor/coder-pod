'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Target, Sparkles, Lightbulb, Code, 
  CheckCircle, Info, ArrowRight, Hash, 
  Circle, Star, FileCode
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssSelectorsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssSelectors({ onOpenWebPlayground }: CssSelectorsProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Target}
        category="CSS · Fundamentals"
        title="CSS Selectors"
        description="Learn how to target and select HTML elements for styling"
        colorTheme="indigo"
      />

      {/* What are Selectors? */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">What are CSS Selectors?</CardTitle>
              <CardDescription className="text-base">Targeting elements for styling</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Selectors = Targeting System</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              CSS selectors are patterns used to select and target HTML elements you want to style. 
              Think of them as a way to "point" at specific elements on your webpage.
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-indigo-600" />
              Basic Selector Syntax
            </h3>
            <div className="bg-gray-900 dark:bg-black p-5 rounded-lg font-mono">
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-blue-400 font-bold">selector</span>
                  <span className="text-gray-400"> {`{`}</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-400">property</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-400">value</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-gray-400">{`}`}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Selectors */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Circle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Basic Selectors
          </CardTitle>
          <CardDescription>The three fundamental selector types</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Element Selector */}
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-3">
                <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-lg">Element</h3>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Selects all elements of a specific type
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-3 rounded-lg">
                <code className="text-sm text-blue-100">
                  p {`{ color: blue; }`}
                </code>
              </div>
              <Badge className="mt-3 bg-blue-600">
                All &lt;p&gt; elements
              </Badge>
            </div>

            {/* Class Selector */}
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-3">
                <Circle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h3 className="font-bold text-lg">Class</h3>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Selects elements with a specific class
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg">
                <code className="text-sm text-green-100">
                  .button {`{ ... }`}
                </code>
              </div>
              <Badge className="mt-3 bg-green-600">
                class="button"
              </Badge>
            </div>

            {/* ID Selector */}
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-3">
                <Hash className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-bold text-lg">ID</h3>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Selects a single unique element
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-3 rounded-lg">
                <code className="text-sm text-purple-100">
                  #header {`{ ... }`}
                </code>
              </div>
              <Badge className="mt-3 bg-purple-600">
                id="header"
              </Badge>
            </div>
          </div>

          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Best Practice</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <strong>Use classes for styling!</strong> IDs should be used sparingly (mainly for JavaScript). 
              Classes are reusable and more flexible.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Live Example */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Example
          </CardTitle>
          <CardDescription>See selectors in action</CardDescription>
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
      background: white;
      padding: 40px;
      border-radius: 20px;
      max-width: 600px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    /* Element Selector - targets ALL p elements */
    p {
      color: #333;
      line-height: 1.6;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      p {
        color: #ccc;
      }
    }
    
    /* Class Selector - targets elements with class="highlight" */
    .highlight {
      background: #fef3c7;
      padding: 8px 12px;
      border-radius: 5px;
      font-weight: 600;
      color: #92400e;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight {
        background: #78350f;
        color: #fef3c7;
      }
    }
    
    /* ID Selector - targets the unique element with id="special" */
    #special {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      margin-top: 20px;
    }
    
    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      margin-left: 8px;
    }
    
    .badge-blue {
      background: #dbeafe;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .badge-blue {
        background: #1e3a8a;
        color: #93c5fd;
      }
    }
    
    .badge-green {
      background: #d1fae5;
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .badge-green {
        background: #064e3b;
        color: #6ee7b7;
      }
    }
    
    .badge-purple {
      background: #e9d5ff;
      color: #6b21a8;
    }
    
    @media (prefers-color-scheme: dark) {
      .badge-purple {
        background: #581c87;
        color: #e9d5ff;
      }
    }
    
    h2 {
      color: #667eea;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      h2 {
        color: #a78bfa;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>CSS Selectors Demo</h2>
    
    <p>
      This paragraph is styled with an 
      <span class="badge badge-blue">element selector</span>
    </p>
    
    <p class="highlight">
      This paragraph has a class and is styled with a 
      <span class="badge badge-green">class selector</span>
    </p>
    
    <p>
      Another regular paragraph with element styling
    </p>
    
    <div id="special">
      This div has a unique ID and is styled with an 
      <span class="badge badge-purple">ID selector</span>
    </div>
  </div>
</body>
</html>`}
            title="CSS Selectors in Action"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Selector Specificity */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Star className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Selector Priority
          </CardTitle>
          <CardDescription>Which styles win when there's a conflict?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            When multiple selectors target the same element, CSS uses <strong>specificity</strong> to determine which styles apply:
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800">
              <Badge className="bg-red-600 text-white text-lg w-8 h-8 flex items-center justify-center">1</Badge>
              <div className="flex-1">
                <h4 className="font-bold text-red-900 dark:text-red-100">ID Selector</h4>
                <p className="text-sm text-red-700 dark:text-red-300">Highest priority - most specific</p>
              </div>
              <code className="text-sm bg-red-900 dark:bg-red-950 text-red-100 px-3 py-1 rounded">#header</code>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white text-lg w-8 h-8 flex items-center justify-center">2</Badge>
              <div className="flex-1">
                <h4 className="font-bold text-orange-900 dark:text-orange-100">Class Selector</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">Medium priority</p>
              </div>
              <code className="text-sm bg-orange-900 dark:bg-orange-950 text-orange-100 px-3 py-1 rounded">.button</code>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-lg w-8 h-8 flex items-center justify-center">3</Badge>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Element Selector</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Lowest priority - least specific</p>
              </div>
              <code className="text-sm bg-blue-900 dark:bg-blue-950 text-blue-100 px-3 py-1 rounded">p</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/30 to-emerald-50/30 dark:from-green-950/10 dark:to-emerald-950/10">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                selector: 'p',
                desc: 'All paragraph elements',
                example: 'Element'
              },
              {
                selector: '.card',
                desc: 'Elements with class="card"',
                example: 'Class'
              },
              {
                selector: '#logo',
                desc: 'Element with id="logo"',
                example: 'ID'
              },
              {
                selector: '*',
                desc: 'All elements (universal)',
                example: 'Universal'
              },
              {
                selector: 'div, p',
                desc: 'Multiple elements',
                example: 'Group'
              },
              {
                selector: 'div p',
                desc: 'Paragraphs inside divs',
                example: 'Descendant'
              }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400 font-bold">{item.selector}</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
                <Badge variant="outline" className="mt-2 text-xs">{item.example}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <Lightbulb className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Element selectors</strong> target all elements of that type</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Class selectors</strong> (.class) are reusable and flexible - use these most!</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>ID selectors</strong> (#id) are unique and have highest specificity</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Specificity</strong> determines which styles apply when there's a conflict</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

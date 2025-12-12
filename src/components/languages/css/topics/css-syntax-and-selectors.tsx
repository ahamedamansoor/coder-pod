'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Code, Target, Sparkles, Lightbulb, Hash, 
  Circle, CheckCircle, Info, ArrowRight, 
  FileCode, Star, Layers
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssSyntaxSelectorsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssSyntaxSelectors({ onOpenWebPlayground }: CssSyntaxSelectorsProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Code}
        category="CSS · Fundamentals"
        title="CSS Syntax & Selectors"
        description="Master CSS syntax structure and learn how to target elements with selectors"
        colorTheme="indigo"
      />

      {/* CSS Syntax */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Code className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Syntax Structure</CardTitle>
              <CardDescription className="text-base">Understanding CSS rule anatomy</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">CSS Rule = Selector + Declaration Block</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Every CSS rule consists of a <strong>selector</strong> (what to style) and a <strong>declaration block</strong> (how to style it).
            </AlertDescription>
          </Alert>

          {/* Visual Syntax Diagram */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-300 dark:border-gray-700">
            <h3 className="font-bold text-center text-xl mb-6 text-gray-900 dark:text-gray-100">
              CSS Rule Anatomy
            </h3>
            
            <div className="bg-white dark:bg-gray-950 p-8 rounded-xl border-2 border-gray-300 dark:border-gray-700 font-mono text-lg">
              <div className="space-y-3">
                {/* Selector */}
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-2xl">selector</span>
                  <Badge className="bg-blue-600 text-white">What to style</Badge>
                </div>
                
                {/* Opening Brace */}
                <div className="text-gray-600 dark:text-gray-400 text-2xl">{`{`}</div>
                
                {/* Property: Value */}
                <div className="ml-8 flex items-center gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">property</span>
                  <span className="text-gray-600 dark:text-gray-400">:</span>
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-xl">value</span>
                  <span className="text-gray-600 dark:text-gray-400">;</span>
                  <Badge className="bg-green-600 text-white text-xs">What to change</Badge>
                  <Badge className="bg-orange-600 text-white text-xs">How to change it</Badge>
                </div>
                
                {/* Another Property */}
                <div className="ml-8 flex items-center gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">property</span>
                  <span className="text-gray-600 dark:text-gray-400">:</span>
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-xl">value</span>
                  <span className="text-gray-600 dark:text-gray-400">;</span>
                </div>
                
                {/* Closing Brace */}
                <div className="text-gray-600 dark:text-gray-400 text-2xl">{`}`}</div>
              </div>
            </div>

            <div className="mt-6 p-5 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Real Example:
              </h4>
              <pre className="bg-blue-900 dark:bg-blue-950 text-blue-100 p-4 rounded-lg text-sm">
{`h1 {
  color: blue;
  font-size: 32px;
  text-align: center;
}`}
              </pre>
              <p className="text-sm text-blue-800 dark:text-blue-200 mt-3">
                This rule styles all <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">&lt;h1&gt;</code> elements with blue color, 32px size, and centered alignment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selectors Introduction */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Selectors</CardTitle>
              <CardDescription className="text-base">Targeting elements for styling</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
            <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Selectors = Targeting System</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Selectors are patterns that match HTML elements. They tell CSS which elements to style. 
              Think of them as a way to "point at" specific parts of your webpage.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Element Selector */}
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-3">
                <FileCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-lg">Element</h3>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Targets all elements of a specific type
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-blue-100">
                  p {`{ ... }`}
                </code>
              </div>
              <Badge className="bg-blue-600 text-white">
                All &lt;p&gt; tags
              </Badge>
            </div>

            {/* Class Selector */}
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-3">
                <Circle className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="font-bold text-lg">Class</h3>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Targets elements with specific class
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-green-100">
                  .button {`{ ... }`}
                </code>
              </div>
              <Badge className="bg-green-600 text-white">
                class="button"
              </Badge>
            </div>

            {/* ID Selector */}
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-3">
                <Hash className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="font-bold text-lg">ID</h3>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Targets a single unique element
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-purple-100">
                  #header {`{ ... }`}
                </code>
              </div>
              <Badge className="bg-purple-600 text-white">
                id="header"
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selector Types with Examples */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Selector Types
          </CardTitle>
          <CardDescription>Common selector patterns you'll use</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              {
                selector: 'p',
                name: 'Element Selector',
                desc: 'Selects all elements of that type',
                example: 'All paragraphs',
                color: 'blue'
              },
              {
                selector: '.card',
                name: 'Class Selector',
                desc: 'Selects elements with that class',
                example: 'Elements with class="card"',
                color: 'green'
              },
              {
                selector: '#logo',
                name: 'ID Selector',
                desc: 'Selects the unique element with that ID',
                example: 'Element with id="logo"',
                color: 'purple'
              },
              {
                selector: '*',
                name: 'Universal Selector',
                desc: 'Selects all elements on the page',
                example: 'Every single element',
                color: 'orange'
              },
              {
                selector: 'div, p, h1',
                name: 'Group Selector',
                desc: 'Selects multiple different elements',
                example: 'All divs, paragraphs, and h1s',
                color: 'red'
              },
              {
                selector: 'div p',
                name: 'Descendant Selector',
                desc: 'Selects elements inside other elements',
                example: 'Paragraphs inside divs',
                color: 'cyan'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-lg bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <code className="font-mono font-bold text-xl text-gray-900 dark:text-gray-100">{item.selector}</code>
                      <Badge variant="outline" className={`bg-${item.color}-100 dark:bg-${item.color}-900`}>
                        {item.name}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{item.desc}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{item.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Selector Demo
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
      max-width: 700px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h2 {
      color: #667eea;
      text-align: center;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h2 {
        color: #a78bfa;
      }
    }
    
    /* Element Selector - targets ALL p elements */
    p {
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
      background: #f3f4f6;
      color: #333;
    }
    
    @media (prefers-color-scheme: dark) {
      p {
        background: #374151;
        color: #e5e5e5;
      }
    }
    
    /* Class Selector - targets class="highlight" */
    .highlight {
      background: linear-gradient(135deg, #fef3c7, #fde68a);
      color: #92400e;
      font-weight: 600;
      border-left: 4px solid #f59e0b;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight {
        background: linear-gradient(135deg, #78350f, #92400e);
        color: #fef3c7;
        border-left-color: #fbbf24;
      }
    }
    
    /* ID Selector - targets id="special" */
    #special {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }
    
    .label {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 700;
      margin-left: 8px;
      text-transform: uppercase;
    }
    
    .label-element {
      background: #dbeafe;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-element {
        background: #1e3a8a;
        color: #93c5fd;
      }
    }
    
    .label-class {
      background: #d1fae5;
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-class {
        background: #064e3b;
        color: #6ee7b7;
      }
    }
    
    .label-id {
      background: #e9d5ff;
      color: #6b21a8;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-id {
        background: #581c87;
        color: #e9d5ff;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>🎯 CSS Selectors Demo</h2>
    
    <p>
      Regular paragraph styled with element selector
      <span class="label label-element">p selector</span>
    </p>
    
    <p class="highlight">
      Paragraph with class styled using class selector
      <span class="label label-class">.highlight</span>
    </p>
    
    <p>
      Another regular paragraph with element selector
      <span class="label label-element">p selector</span>
    </p>
    
    <p id="special">
      Unique paragraph with ID styled using ID selector
      <span class="label label-id">#special</span>
    </p>
  </div>
</body>
</html>`}
            title="Selector Types in Action"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Specificity */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Star className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Selector Specificity
          </CardTitle>
          <CardDescription>Which styles win when there's a conflict?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            When multiple selectors target the same element, CSS uses <strong>specificity</strong> to determine which styles apply. 
            More specific selectors override less specific ones.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-300 dark:border-purple-700 shadow-lg">
              <Badge className="bg-purple-700 text-white text-xl w-10 h-10 flex items-center justify-center">1</Badge>
              <div className="flex-1">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 text-lg">ID Selector</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Highest priority - most specific</p>
              </div>
              <code className="text-sm bg-purple-900 dark:bg-purple-950 text-purple-100 px-4 py-2 rounded font-bold">#header</code>
            </div>

            <div className="flex items-center gap-3 p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white text-xl w-10 h-10 flex items-center justify-center">2</Badge>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 dark:text-green-100 text-lg">Class Selector</h4>
                <p className="text-sm text-green-700 dark:text-green-300">Medium priority</p>
              </div>
              <code className="text-sm bg-green-900 dark:bg-green-950 text-green-100 px-4 py-2 rounded font-bold">.button</code>
            </div>

            <div className="flex items-center gap-3 p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-xl w-10 h-10 flex items-center justify-center">3</Badge>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 text-lg">Element Selector</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Lowest priority - least specific</p>
              </div>
              <code className="text-sm bg-blue-900 dark:bg-blue-950 text-blue-100 px-4 py-2 rounded font-bold">p</code>
            </div>
          </div>

          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Best Practice</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <strong>Use classes for most styling!</strong> They're reusable, flexible, and have good specificity. 
              Reserve IDs for JavaScript and unique page elements.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>CSS rules have a <strong>selector</strong> (what) and <strong>declarations</strong> (how)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Element selectors</strong> target all elements of that type</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Class selectors</strong> (.class) are reusable - use these most often!</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>ID selectors</strong> (#id) are unique and have highest specificity</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

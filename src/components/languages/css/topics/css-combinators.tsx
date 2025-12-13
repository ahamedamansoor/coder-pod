'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  GitBranch, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, ArrowDown, MoveRight
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssCombinatorsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssCombinators({ onOpenWebPlayground }: CssCombinatorsProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={GitBranch}
        category="CSS · Advanced Selectors"
        title="Combinators"
        description="Target elements based on their relationships"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <GitBranch className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Combinators</CardTitle>
              <CardDescription className="text-base">Select elements by their relationships</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Combinators = Element Relationships! 🔗</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Combinators define the relationship between selectors. Target children, descendants, 
              siblings, and more with simple symbols like <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">&gt;</code>, 
              <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">+</code>, and 
              <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">~</code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { symbol: ' ', name: 'Descendant', icon: ArrowDown },
              { symbol: '>', name: 'Child', icon: ArrowDown },
              { symbol: '+', name: 'Adjacent', icon: MoveRight },
              { symbol: '~', name: 'Sibling', icon: MoveRight }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 text-center">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <code className="font-bold text-2xl text-blue-700 dark:text-blue-400">{item.symbol === ' ' ? '(space)' : item.symbol}</code>
                <p className="text-xs text-blue-600 dark:text-blue-300 mt-2">{item.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <ArrowDown className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Descendant Selector (space)
          </CardTitle>
          <CardDescription>All nested elements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <Badge className="bg-purple-600 text-white text-lg mb-3">A B</Badge>
            <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
              Selects <strong>all B</strong> elements inside <strong>A</strong> (any level deep)
            </p>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-purple-100 block">
{`/* Select ALL p inside div */
div p {
  color: blue;
}

/* HTML matches:
<div>
  <p>Match ✓</p>
  <section>
    <p>Match ✓ (nested)</p>
  </section>
</div>
*/`}
              </code>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-purple-600 mt-1" />
              <span className="text-purple-800 dark:text-purple-200">Most commonly used combinator</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Child Selector &gt;
          </CardTitle>
          <CardDescription>Direct children only</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <Badge className="bg-blue-600 text-white text-lg mb-3">A &gt; B</Badge>
            <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
              Selects <strong>B</strong> only if it's a <strong>direct child</strong> of <strong>A</strong>
            </p>
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-blue-100 block">
{`/* Select ONLY direct p children */
div > p {
  color: red;
}

/* HTML:
<div>
  <p>Match ✓ (direct child)</p>
  <section>
    <p>No match ✗ (not direct)</p>
  </section>
</div>
*/`}
              </code>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <Info className="w-4 h-4 text-blue-600 mt-1" />
              <span className="text-blue-800 dark:text-blue-200">More specific than descendant selector</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MoveRight className="w-6 h-6 text-green-600 dark:text-green-400" />
            Adjacent Sibling +
          </CardTitle>
          <CardDescription>Immediately following sibling</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <Badge className="bg-green-600 text-white text-lg mb-3">A + B</Badge>
            <p className="text-sm text-green-800 dark:text-green-200 mb-3">
              Selects <strong>B</strong> only if it <strong>immediately follows</strong> <strong>A</strong>
            </p>
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-green-100 block">
{`/* Style p immediately after h2 */
h2 + p {
  font-weight: bold;
}

/* HTML:
<h2>Title</h2>
<p>Match ✓ (immediately after)</p>
<p>No match ✗ (not adjacent)</p>
*/`}
              </code>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <Lightbulb className="w-4 h-4 text-green-600 mt-1" />
              <span className="text-green-800 dark:text-green-200">Perfect for styling first paragraphs after headings</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MoveRight className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            General Sibling ~
          </CardTitle>
          <CardDescription>All following siblings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30 border-2 border-orange-300 dark:border-orange-700">
            <Badge className="bg-orange-600 text-white text-lg mb-3">A ~ B</Badge>
            <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
              Selects <strong>all B</strong> elements that are siblings <strong>after</strong> <strong>A</strong>
            </p>
            <div className="bg-orange-900 dark:bg-orange-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-orange-100 block">
{`/* Style ALL p siblings after h2 */
h2 ~ p {
  margin-left: 20px;
}

/* HTML:
<h2>Title</h2>
<p>Match ✓</p>
<div>Something</div>
<p>Match ✓ (still a sibling)</p>
*/`}
              </code>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <Info className="w-4 h-4 text-orange-600 mt-1" />
              <span className="text-orange-800 dark:text-orange-200">Selects ALL following siblings, not just adjacent</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>See all combinators in action</CardDescription>
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
    
    .example {
      margin-bottom: 40px;
      padding: 30px;
      background: #f3f4f6;
      border-radius: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .example {
        background: #374151;
      }
    }
    
    .label {
      display: inline-block;
      padding: 8px 16px;
      background: #667eea;
      color: white;
      border-radius: 6px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        background: #a78bfa;
        color: #1a1a2e;
      }
    }
    
    /* DESCENDANT: div p */
    .demo1 p {
      color: #3b82f6;
      padding: 10px;
      background: #dbeafe;
      margin: 5px 0;
      border-radius: 6px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo1 p {
        background: #1e3a8a;
        color: #93c5fd;
      }
    }
    
    /* CHILD: div > p */
    .demo2 > p {
      color: #10b981;
      padding: 10px;
      background: #d1fae5;
      margin: 5px 0;
      border-radius: 6px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo2 > p {
        background: #064e3b;
        color: #6ee7b7;
      }
    }
    
    /* ADJACENT: h3 + p */
    .demo3 h3 + p {
      color: #8b5cf6;
      padding: 10px;
      background: #ede9fe;
      border-radius: 6px;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo3 h3 + p {
        background: #4c1d95;
        color: #c4b5fd;
      }
    }
    
    /* GENERAL SIBLING: h3 ~ p */
    .demo4 h3 ~ p {
      color: #f59e0b;
      padding: 10px;
      background: #fef3c7;
      margin: 5px 0;
      border-radius: 6px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo4 h3 ~ p {
        background: #78350f;
        color: #fde68a;
      }
    }
    
    h3 {
      color: #667eea;
      margin: 10px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      h3 {
        color: #a78bfa;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔗 CSS Combinators</h1>
    
    <div class="example demo1">
      <span class="label">Descendant: div p (all p inside div)</span>
      <p>Direct p - Styled ✓</p>
      <section>
        <p>Nested p - Styled ✓</p>
      </section>
    </div>
    
    <div class="example demo2">
      <span class="label">Child: div > p (only direct children)</span>
      <p>Direct p - Styled ✓</p>
      <section>
        <p>Nested p - NOT styled ✗</p>
      </section>
    </div>
    
    <div class="example demo3">
      <span class="label">Adjacent: h3 + p (immediately after h3)</span>
      <h3>Heading</h3>
      <p>First p after h3 - Styled ✓</p>
      <p>Second p - NOT styled ✗</p>
    </div>
    
    <div class="example demo4">
      <span class="label">General Sibling: h3 ~ p (all p after h3)</span>
      <h3>Heading</h3>
      <p>First p - Styled ✓</p>
      <div>Some div</div>
      <p>Second p - Still styled ✓</p>
    </div>
  </div>
</body>
</html>`}
            title="Combinators Demo"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            Quick Reference
          </CardTitle>
          <CardDescription>Combinator cheat sheet</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { selector: 'A B', name: 'Descendant', matches: 'All B inside A (any level)' },
              { selector: 'A > B', name: 'Child', matches: 'B only if direct child of A' },
              { selector: 'A + B', name: 'Adjacent Sibling', matches: 'B immediately after A' },
              { selector: 'A ~ B', name: 'General Sibling', matches: 'All B siblings after A' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800">
                <div className="flex-1">
                  <code className="font-mono font-bold text-pink-700 dark:text-pink-400 text-lg">{item.selector}</code>
                  <p className="text-sm text-pink-600 dark:text-pink-300 mt-1">{item.matches}</p>
                </div>
                <Badge className="bg-pink-600 text-white">{item.name}</Badge>
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
            <span><strong>(space)</strong> = any descendant, <strong>&gt;</strong> = direct child only</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>+</strong> = next sibling, <strong>~</strong> = all following siblings</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Child selector <strong>&gt;</strong> is more specific than descendant</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Sibling selectors only work on <strong>same level</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

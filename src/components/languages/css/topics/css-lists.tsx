'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  List, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, ListOrdered
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssListsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssLists({ onOpenWebPlayground }: CssListsProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={List}
        category="CSS · Styling Basics"
        title="CSS Lists"
        description="Style ordered and unordered lists with markers and positioning"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <List className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Lists</CardTitle>
              <CardDescription className="text-base">Control list markers and styling</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Lists = Organized Content</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              CSS provides powerful control over list appearance - from bullet styles to custom markers. 
              Perfect for navigation menus, content lists, and organized information!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <List className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="font-bold mb-2">Unordered Lists</h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                &lt;ul&gt; with bullets, discs, squares
              </p>
            </div>
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <ListOrdered className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h3 className="font-bold mb-2">Ordered Lists</h3>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                &lt;ol&gt; with numbers, letters, roman numerals
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <List className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            List Style Type
          </CardTitle>
          <CardDescription>Different marker styles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <h3 className="font-bold mb-3 text-blue-900 dark:text-blue-100">Unordered Lists</h3>
              <div className="space-y-2 text-sm">
                {[
                  { value: 'disc', desc: 'Filled circle (default)' },
                  { value: 'circle', desc: 'Hollow circle' },
                  { value: 'square', desc: 'Filled square' },
                  { value: 'none', desc: 'No marker' }
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <code className="text-xs bg-blue-900 dark:bg-blue-950 text-blue-100 px-2 py-1 rounded">
                      {item.value}
                    </code>
                    <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <h3 className="font-bold mb-3 text-green-900 dark:text-green-100">Ordered Lists</h3>
              <div className="space-y-2 text-sm">
                {[
                  { value: 'decimal', desc: '1, 2, 3 (default)' },
                  { value: 'lower-alpha', desc: 'a, b, c' },
                  { value: 'upper-alpha', desc: 'A, B, C' },
                  { value: 'lower-roman', desc: 'i, ii, iii' },
                  { value: 'upper-roman', desc: 'I, II, III' }
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
                    <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded">
                      {item.value}
                    </code>
                    <p className="text-xs text-green-700 dark:text-green-300 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            List Styling Demo
          </CardTitle>
          <CardDescription>Different list marker styles</CardDescription>
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
      max-width: 1200px;
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
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    
    .list-card {
      padding: 25px;
      border-radius: 12px;
      background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
    }
    
    @media (prefers-color-scheme: dark) {
      .list-card {
        background: linear-gradient(135deg, #374151, #4b5563);
      }
    }
    
    .label {
      font-weight: 600;
      color: #667eea;
      margin-bottom: 15px;
      display: block;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #a78bfa;
      }
    }
    
    ul, ol {
      margin-left: 20px;
    }
    
    li {
      margin: 8px 0;
      line-height: 1.6;
    }
    
    /* Different list styles */
    .disc {
      list-style-type: disc;
    }
    
    .circle {
      list-style-type: circle;
    }
    
    .square {
      list-style-type: square;
    }
    
    .decimal {
      list-style-type: decimal;
    }
    
    .lower-alpha {
      list-style-type: lower-alpha;
    }
    
    .upper-alpha {
      list-style-type: upper-alpha;
    }
    
    .lower-roman {
      list-style-type: lower-roman;
    }
    
    .upper-roman {
      list-style-type: upper-roman;
    }
    
    .custom {
      list-style: none;
      padding-left: 0;
    }
    
    .custom li {
      padding-left: 30px;
      position: relative;
    }
    
    .custom li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: bold;
      font-size: 18px;
    }
    
    .none {
      list-style: none;
      margin-left: 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📝 List Styles</h1>
    
    <div class="grid">
      <div class="list-card">
        <span class="label">disc (default)</span>
        <ul class="disc">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
      
      <div class="list-card">
        <span class="label">circle</span>
        <ul class="circle">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
      
      <div class="list-card">
        <span class="label">square</span>
        <ul class="square">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
      
      <div class="list-card">
        <span class="label">decimal (1, 2, 3)</span>
        <ol class="decimal">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ol>
      </div>
      
      <div class="list-card">
        <span class="label">lower-alpha (a, b, c)</span>
        <ol class="lower-alpha">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ol>
      </div>
      
      <div class="list-card">
        <span class="label">upper-alpha (A, B, C)</span>
        <ol class="upper-alpha">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ol>
      </div>
      
      <div class="list-card">
        <span class="label">lower-roman (i, ii, iii)</span>
        <ol class="lower-roman">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ol>
      </div>
      
      <div class="list-card">
        <span class="label">upper-roman (I, II, III)</span>
        <ol class="upper-roman">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ol>
      </div>
      
      <div class="list-card">
        <span class="label">Custom with ::before</span>
        <ul class="custom">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
      
      <div class="list-card">
        <span class="label">none (no markers)</span>
        <ul class="none">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="List Styles Gallery"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            List Position
          </CardTitle>
          <CardDescription>Control marker placement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">list-style-position</code> property 
            controls whether markers appear inside or outside the list item's content box.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white mb-3">outside (default)</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Markers appear outside content area
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg">
                <code className="text-sm text-green-100">
                  list-style-position: outside;
                </code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white mb-3">inside</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Markers appear inside content area
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-3 rounded-lg">
                <code className="text-sm text-blue-100">
                  list-style-position: inside;
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            List Shorthand
          </CardTitle>
          <CardDescription>All properties in one</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-3">
              Shorthand Property
            </h3>
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-blue-100 block">
{`/* type | position | image */
list-style: square inside;
list-style: disc outside;
list-style: none;

/* Remove all list styling */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}`}
              </code>
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Commonly used to remove all default list styling!
            </p>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>list-style-type</strong> changes marker style</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>list-style: none</strong> removes all styling</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>::before</strong> for custom markers</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Great for navigation menus with <code>list-style: none</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

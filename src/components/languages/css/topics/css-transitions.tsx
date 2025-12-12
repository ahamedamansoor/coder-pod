'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Zap, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Clock, MousePointer
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssTransitionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssTransitions({ onOpenWebPlayground }: CssTransitionsProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Zap}
        category="CSS · Animations & Effects"
        title="CSS Transitions"
        description="Smooth animations between property changes"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Transitions</CardTitle>
              <CardDescription className="text-base">Smooth state changes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Transitions = Smooth Changes</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Transitions smoothly animate CSS property changes over time. Perfect for hover effects, 
              focus states, and any property that changes from one value to another.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3">Four Transition Properties:</h3>
            <div className="space-y-2 text-sm">
              <div><strong>transition-property:</strong> What to animate</div>
              <div><strong>transition-duration:</strong> How long</div>
              <div><strong>transition-timing-function:</strong> Speed curve</div>
              <div><strong>transition-delay:</strong> Wait before starting</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Basic Transition Syntax
          </CardTitle>
          <CardDescription>Simple hover effect</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-purple-100 block">
{`.button {
  background: blue;
  transition: background 0.3s ease;
}

.button:hover {
  background: red;
}`}
              </code>
            </div>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              When hovering, background smoothly transitions from blue to red over 0.3 seconds!
            </p>
          </div>

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
      padding: 60px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      color: #667eea;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .button {
      display: inline-block;
      padding: 20px 40px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      font-weight: 600;
      font-size: 18px;
      border-radius: 12px;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }
    
    .button:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.6);
      background: linear-gradient(135deg, #764ba2, #667eea);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Hover Me!</h1>
    <button class="button">Smooth Transition</button>
  </div>
</body>
</html>`}
            title="Basic Transition"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MousePointer className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Timing Functions
          </CardTitle>
          <CardDescription>Control animation speed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'ease', desc: 'Slow start, fast middle, slow end' },
              { name: 'linear', desc: 'Same speed throughout' },
              { name: 'ease-in', desc: 'Slow start, fast end' },
              { name: 'ease-out', desc: 'Fast start, slow end' },
              { name: 'ease-in-out', desc: 'Slow start and end' },
              { name: 'cubic-bezier()', desc: 'Custom curve' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
                <Badge className="bg-blue-600 text-white mb-2">{item.name}</Badge>
                <p className="text-sm text-blue-800 dark:text-blue-200">{item.desc}</p>
              </div>
            ))}
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Default: ease</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              If you don't specify a timing function, <code>ease</code> is used by default - 
              it's the most natural-looking animation!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-green-600 dark:text-green-400" />
            Transition Shorthand
          </CardTitle>
          <CardDescription>All properties in one line</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <h3 className="font-bold text-lg text-green-900 dark:text-green-100 mb-3">
              Shorthand Syntax
            </h3>
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-green-100 block">
{`/* property | duration | timing | delay */
transition: all 0.3s ease 0s;

/* Multiple properties */
transition: background 0.3s ease,
            transform 0.5s ease;`}
              </code>
            </div>
            <p className="text-sm text-green-800 dark:text-green-200">
              Use <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">all</code> to 
              transition all animatable properties!
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
            <span><strong>transition</strong> smooths property changes</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>0.3s</strong> is a good default duration</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>ease</strong> timing function feels most natural</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Works on: color, background, transform, opacity, etc.</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

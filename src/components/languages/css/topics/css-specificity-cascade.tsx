'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Scale, Sparkles, Lightbulb, Trophy, 
  CheckCircle, Info, ArrowRight, AlertTriangle,
  Star, Zap, Target
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssSpecificityProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssSpecificity({ onOpenWebPlayground }: CssSpecificityProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Scale}
        category="CSS · Fundamentals"
        title="Specificity & Cascade"
        description="Understanding how CSS determines which styles win when multiple rules target the same element"
        colorTheme="indigo"
      />

      {/* What is Specificity? */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">What is Specificity?</CardTitle>
              <CardDescription className="text-base">How CSS decides which rules win</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">The Winner Takes All</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              When multiple CSS rules target the same element with conflicting styles, <strong>specificity</strong> determines 
              which rule wins. Think of it as a scoring system - the selector with the highest score gets applied.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              The Analogy: Shouting Match
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Imagine different selectors are people shouting instructions at an HTML element:
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-bold">📢</span>
                <span><strong>Inline styles</strong> shout the loudest (right in the HTML)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 font-bold">📣</span>
                <span><strong>IDs</strong> shout very loud (#header)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold">🔊</span>
                <span><strong>Classes</strong> shout moderately (.button)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">🔉</span>
                <span><strong>Elements</strong> whisper (p, div)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Specificity Hierarchy */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Trophy className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Specificity Hierarchy
          </CardTitle>
          <CardDescription>From highest to lowest priority</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {/* Inline Styles */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-300 dark:border-purple-700 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-purple-700 text-white text-2xl w-14 h-14 flex items-center justify-center rounded-full">1</Badge>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-purple-900 dark:text-purple-100">Inline Styles</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Highest priority - styles in HTML</p>
                </div>
                <Badge className="bg-purple-900 dark:bg-purple-950 text-purple-100 font-mono">1,0,0,0</Badge>
              </div>
              <div className="bg-purple-900 dark:bg-purple-950 p-4 rounded-lg">
                <code className="text-sm text-purple-100">
                  &lt;div style="color: red;"&gt;
                </code>
              </div>
            </div>

            {/* ID Selectors */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-950/30 dark:to-orange-950/30 border-2 border-red-300 dark:border-red-700 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-red-600 text-white text-2xl w-14 h-14 flex items-center justify-center rounded-full">2</Badge>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-red-900 dark:text-red-100">ID Selectors</h4>
                  <p className="text-sm text-red-700 dark:text-red-300">Very high priority - unique identifiers</p>
                </div>
                <Badge className="bg-red-900 dark:bg-red-950 text-red-100 font-mono">0,1,0,0</Badge>
              </div>
              <div className="bg-red-900 dark:bg-red-950 p-4 rounded-lg">
                <code className="text-sm text-red-100">
                  #header {`{ color: blue; }`}
                </code>
              </div>
            </div>

            {/* Classes, Attributes, Pseudo-classes */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-green-600 text-white text-2xl w-14 h-14 flex items-center justify-center rounded-full">3</Badge>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-green-900 dark:text-green-100">Classes, Attributes, Pseudo-classes</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">Medium priority - reusable selectors</p>
                </div>
                <Badge className="bg-green-900 dark:bg-green-950 text-green-100 font-mono">0,0,1,0</Badge>
              </div>
              <div className="bg-green-900 dark:bg-green-950 p-4 rounded-lg space-y-2">
                <code className="text-sm text-green-100 block">.button {`{ ... }`}</code>
                <code className="text-sm text-green-100 block">[type="text"] {`{ ... }`}</code>
                <code className="text-sm text-green-100 block">:hover {`{ ... }`}</code>
              </div>
            </div>

            {/* Elements & Pseudo-elements */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-blue-600 text-white text-2xl w-14 h-14 flex items-center justify-center rounded-full">4</Badge>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-blue-900 dark:text-blue-100">Elements & Pseudo-elements</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Lowest priority - basic selectors</p>
                </div>
                <Badge className="bg-blue-900 dark:bg-blue-950 text-blue-100 font-mono">0,0,0,1</Badge>
              </div>
              <div className="bg-blue-900 dark:bg-blue-950 p-4 rounded-lg space-y-2">
                <code className="text-sm text-blue-100 block">div {`{ ... }`}</code>
                <code className="text-sm text-blue-100 block">::before {`{ ... }`}</code>
              </div>
            </div>
          </div>

          <Alert className="border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <Info className="w-5 h-5 text-gray-600" />
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>Universal selector (*)</strong> and inherited values have a specificity of 0,0,0,0
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Specificity Battle: Who Wins?
          </CardTitle>
          <CardDescription>Same element, four different rules - watch specificity in action</CardDescription>
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
      padding: 50px;
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
      text-align: center;
      color: #667eea;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h2 {
        color: #a78bfa;
      }
    }
    
    /* Element selector - Specificity: 0,0,0,1 */
    p {
      color: gray;
      padding: 20px;
      border-radius: 10px;
      background: #f3f4f6;
      font-size: 18px;
    }
    
    @media (prefers-color-scheme: dark) {
      p {
        background: #374151;
      }
    }
    
    /* Class selector - Specificity: 0,0,1,0 */
    .text {
      color: blue;
    }
    
    /* ID selector - Specificity: 0,1,0,0 */
    #special {
      color: green;
    }
    
    .code-box {
      background: #1e293b;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-box {
        background: #0f172a;
      }
    }
    
    .code-box code {
      color: #e2e8f0;
      font-size: 13px;
      display: block;
      margin: 5px 0;
    }
    
    .winner {
      background: linear-gradient(135deg, #fef3c7, #fde68a);
      border: 3px solid #f59e0b;
      padding: 15px;
      border-radius: 10px;
      margin-top: 20px;
      color: #92400e;
      font-weight: 600;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .winner {
        background: linear-gradient(135deg, #78350f, #92400e);
        border-color: #fbbf24;
        color: #fef3c7;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>🏆 Specificity Battle</h2>
    
    <!-- This element is targeted by 4 rules! -->
    <p id="special" class="text" style="color: red;">
      What color am I? Red!
    </p>
    
    <div class="code-box">
      <code>/* Element: p { color: gray; } → 0,0,0,1 */</code>
      <code>/* Class: .text { color: blue; } → 0,0,1,0 */</code>
      <code>/* ID: #special { color: green; } → 0,1,0,0 */</code>
      <code>/* Inline: style="color: red;" → 1,0,0,0 ✅ */</code>
    </div>
    
    <div class="winner">
      🎯 Winner: Inline style (red) - Highest specificity!
    </div>
  </div>
</body>
</html>`}
            title="Specificity Competition"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* The Cascade */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            The Cascade
          </CardTitle>
          <CardDescription>The "C" in CSS - how styles flow and combine</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            The <strong>cascade</strong> is the algorithm browsers use to combine and resolve conflicting styles from different sources. 
            It considers three main factors in order:
          </p>

          <div className="space-y-3">
            <div className="p-5 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-blue-600 text-white">Step 1</Badge>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Origin & Importance</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Browser styles → User styles → Author styles (your CSS)
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
                <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">!important</code> reverses this order
              </p>
            </div>

            <div className="p-5 rounded-lg bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-green-600 text-white">Step 2</Badge>
                <h4 className="font-bold text-green-900 dark:text-green-100">Specificity</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                If same origin, the selector with higher specificity wins
              </p>
            </div>

            <div className="p-5 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-purple-600 text-white">Step 3</Badge>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">Source Order</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                If same origin AND same specificity, the last rule in the code wins
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* !important Warning */}
      <Card className="border-2 border-red-300 dark:border-red-700 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/20 dark:to-orange-950/20">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2 text-red-900 dark:text-red-100">
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            The !important Rule
          </CardTitle>
          <CardDescription>Use with extreme caution!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-red-800 dark:text-red-200">
            Adding <code className="px-2 py-1 bg-red-100 dark:bg-red-900 rounded font-mono">!important</code> to a declaration 
            makes it override almost any other rule:
          </p>

          <div className="bg-red-900 dark:bg-red-950 p-4 rounded-lg">
            <code className="text-red-100">
              color: red !important;
            </code>
          </div>

          <Alert className="border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Why Avoid !important</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200 space-y-2">
              <div className="flex items-start gap-2">
                <span>❌</span>
                <span>Breaks the natural cascade</span>
              </div>
              <div className="flex items-start gap-2">
                <span>❌</span>
                <span>Makes debugging very difficult</span>
              </div>
              <div className="flex items-start gap-2">
                <span>❌</span>
                <span>Sign of poorly structured CSS</span>
              </div>
              <div className="flex items-start gap-2">
                <span>❌</span>
                <span>Hard to override later</span>
              </div>
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
            <span><strong>Specificity</strong> determines which rule wins: Inline &gt; ID &gt; Class &gt; Element</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Cascade</strong> considers: Origin → Specificity → Source Order</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Use classes</strong> for most styling - good balance of specificity and reusability</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Avoid !important</strong> - it makes CSS harder to maintain</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

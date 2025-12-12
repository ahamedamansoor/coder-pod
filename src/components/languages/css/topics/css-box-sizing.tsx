'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Box, Sparkles, Lightbulb, Maximize2, 
  CheckCircle, Info, ArrowRight, AlertTriangle,
  Star, Zap
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssBoxSizingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssBoxSizing({ onOpenWebPlayground }: CssBoxSizingProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Box}
        category="CSS · Fundamentals"
        title="Box Sizing"
        description="Understanding box-sizing property and how it affects element sizing calculations"
        colorTheme="indigo"
      />

      {/* Introduction */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Box className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Box Sizing Property</CardTitle>
              <CardDescription className="text-base">Control how width and height are calculated</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">The Sizing Problem</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              By default, when you set <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded">width: 200px</code>, 
              padding and border are <strong>added</strong> to that width, making the element bigger than expected. 
              The <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded">box-sizing</code> property changes this behavior.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              The Math Problem
            </h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <code className="text-blue-600 dark:text-blue-400">width: 200px + padding: 20px + border: 5px = ?</code>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Problem:</strong> The total width is actually <span className="text-red-600 dark:text-red-400 font-bold">250px</span>, 
                not 200px! This makes sizing calculations confusing.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong> Use <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">box-sizing: border-box</code> 
                to include padding and border in the width.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Two Values Comparison */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Maximize2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Two Box-Sizing Values
          </CardTitle>
          <CardDescription>Understanding content-box vs border-box</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Content Box */}
            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-300 dark:border-red-700">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-red-600 text-white text-lg">content-box</Badge>
                <Badge variant="outline" className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
                  Default
                </Badge>
              </div>
              <p className="text-sm text-red-800 dark:text-red-200 mb-4">
                Width/height applies <strong>only to content</strong>. Padding and border are added on top.
              </p>
              
              <div className="bg-red-900 dark:bg-red-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-red-100 block mb-2">
                  box-sizing: content-box;
                </code>
                <code className="text-sm text-red-100 block mb-2">
                  width: 200px;
                </code>
                <code className="text-sm text-red-100 block mb-2">
                  padding: 20px;
                </code>
                <code className="text-sm text-red-100 block">
                  border: 5px solid;
                </code>
              </div>

              <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900/50 border-2 border-red-400 dark:border-red-600">
                <p className="text-sm font-bold text-red-900 dark:text-red-100 mb-2">Total Width:</p>
                <p className="text-2xl font-bold text-red-700 dark:text-red-300">250px</p>
                <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                  200 + (20×2) + (5×2) = 250px
                </p>
              </div>

              <div className="mt-4 flex items-start gap-2 text-xs text-red-700 dark:text-red-300">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Confusing! Width is bigger than specified</span>
              </div>
            </div>

            {/* Border Box */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-300 dark:border-green-700 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-green-600 text-white text-lg">border-box</Badge>
                <Badge className="bg-green-700 text-white">
                  ⭐ Recommended
                </Badge>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Width/height <strong>includes</strong> content, padding, AND border. Much more intuitive!
              </p>
              
              <div className="bg-green-900 dark:bg-green-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-green-100 block mb-2">
                  box-sizing: border-box;
                </code>
                <code className="text-sm text-green-100 block mb-2">
                  width: 200px;
                </code>
                <code className="text-sm text-green-100 block mb-2">
                  padding: 20px;
                </code>
                <code className="text-sm text-green-100 block">
                  border: 5px solid;
                </code>
              </div>

              <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/50 border-2 border-green-400 dark:border-green-600">
                <p className="text-sm font-bold text-green-900 dark:text-green-100 mb-2">Total Width:</p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">200px</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                  Exactly as specified!
                </p>
              </div>

              <div className="mt-4 flex items-start gap-2 text-xs text-green-700 dark:text-green-300">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Intuitive! Width is exactly what you set</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Comparison */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Comparison
          </CardTitle>
          <CardDescription>See the difference in action</CardDescription>
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
      max-width: 900px;
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
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-bottom: 30px;
    }
    
    @media (max-width: 768px) {
      .comparison {
        grid-template-columns: 1fr;
      }
    }
    
    .section {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .section {
        background: #374151;
      }
    }
    
    .label {
      font-weight: 600;
      margin-bottom: 15px;
      padding: 8px 12px;
      border-radius: 8px;
      text-align: center;
      font-size: 14px;
    }
    
    .label-red {
      background: #fee;
      color: #991b1b;
      border: 2px solid #dc2626;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-red {
        background: #7f1d1d;
        color: #fca5a5;
      }
    }
    
    .label-green {
      background: #efe;
      color: #065f46;
      border: 2px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-green {
        background: #064e3b;
        color: #6ee7b7;
      }
    }
    
    /* Both boxes have same width, padding, border */
    .box {
      width: 200px;
      padding: 20px;
      border: 5px solid #667eea;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      font-weight: 600;
      text-align: center;
      margin: 0 auto;
      position: relative;
    }
    
    .content-box {
      box-sizing: content-box;
    }
    
    .border-box {
      box-sizing: border-box;
    }
    
    .measurement {
      margin-top: 15px;
      padding: 10px;
      background: rgba(255,255,255,0.9);
      color: #1f2937;
      border-radius: 8px;
      font-size: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .measurement {
        background: rgba(0,0,0,0.5);
        color: #e5e5e5;
      }
    }
    
    .measurement strong {
      color: #667eea;
      font-size: 18px;
      display: block;
      margin-top: 5px;
    }
    
    .note {
      background: linear-gradient(135deg, #fef3c7, #fde68a);
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #f59e0b;
      color: #92400e;
      font-weight: 600;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        background: linear-gradient(135deg, #78350f, #92400e);
        border-left-color: #fbbf24;
        color: #fef3c7;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📦 Box Sizing Comparison</h1>
    
    <div class="comparison">
      <div class="section">
        <div class="label label-red">content-box (default)</div>
        <div class="box content-box">
          width: 200px
        </div>
        <div class="measurement">
          Actual Total Width:<br>
          <strong>250px</strong>
          <div style="font-size: 10px; margin-top: 5px;">
            200 + (20×2) + (5×2)
          </div>
        </div>
      </div>
      
      <div class="section">
        <div class="label label-green">border-box ⭐</div>
        <div class="box border-box">
          width: 200px
        </div>
        <div class="measurement">
          Actual Total Width:<br>
          <strong>200px</strong>
          <div style="font-size: 10px; margin-top: 5px;">
            Exactly as specified!
          </div>
        </div>
      </div>
    </div>
    
    <div class="note">
      💡 Both boxes have the same CSS (width: 200px, padding: 20px, border: 5px) 
      but look how different they are!
    </div>
  </div>
</body>
</html>`}
            title="Box-Sizing Comparison"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practice */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Star className="w-6 h-6 text-green-600 dark:text-green-400" />
            Universal Box-Sizing
          </CardTitle>
          <CardDescription>The industry standard approach</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Lightbulb className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Best Practice: Apply to Everything</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Most developers apply <code>box-sizing: border-box</code> to <strong>all elements</strong> at the start of their CSS. 
              This makes sizing predictable and intuitive across the entire site.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <h3 className="font-bold text-lg text-green-900 dark:text-green-100 mb-3">
              The Universal Box-Sizing Reset
            </h3>
            <p className="text-sm text-green-800 dark:text-green-200 mb-4">
              Add this at the top of your CSS file:
            </p>
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg">
              <code className="text-sm text-green-100 block">
{`* {
  box-sizing: border-box;
}`}
              </code>
            </div>
            <p className="text-xs text-green-700 dark:text-green-300 mt-4">
              This applies <code>border-box</code> to every element, making width/height calculations consistent and predictable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-sm mb-2 text-gray-900 dark:text-gray-100">✅ With border-box</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                "I want this div to be 300px wide"<br />
                → It's exactly 300px wide!
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-sm mb-2 text-gray-900 dark:text-gray-100">❌ Without border-box</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                "I want this div to be 300px wide"<br />
                → It's actually 350px... wait, what?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>content-box (default)</strong> adds padding and border to specified width</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>border-box</strong> includes padding and border in specified width (recommended!)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use universal <code>* {`{ box-sizing: border-box; }`}</code> for consistency</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Makes sizing calculations intuitive and predictable</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

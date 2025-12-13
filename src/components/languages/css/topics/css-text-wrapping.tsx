'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  WrapText, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Zap
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssTextWrappingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssTextWrapping({ onOpenWebPlayground }: CssTextWrappingProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={WrapText}
        category="CSS · Styling Basics"
        title="Text Wrapping"
        description="Control how text wraps with text-wrap, word-break, and hyphens"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg animate-pulse">
              <WrapText className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Text Wrapping</CardTitle>
              <CardDescription className="text-base">
                <Badge className="bg-green-600 text-white mr-2">NEW 2023</Badge>
                Better text layout control
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Text Wrapping = Better Typography! 📝</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              New properties like <strong>text-wrap: balance</strong> and <strong>text-wrap: pretty</strong> help 
              create better-looking text layouts automatically. No more awkward orphans!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { prop: 'text-wrap', desc: 'How text wraps' },
              { prop: 'word-break', desc: 'Break long words' },
              { prop: 'hyphens', desc: 'Add hyphens' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 text-center">
                <code className="font-bold text-blue-700 dark:text-blue-400">{item.prop}</code>
                <p className="text-xs text-blue-600 dark:text-blue-300 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            text-wrap Property
          </CardTitle>
          <CardDescription>New ways to wrap text</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                value: 'wrap',
                name: 'Normal Wrap',
                desc: 'Default text wrapping behavior',
                example: 'text-wrap: wrap;',
                color: 'blue'
              },
              {
                value: 'nowrap',
                name: 'No Wrap',
                desc: 'Text stays on one line',
                example: 'text-wrap: nowrap;',
                color: 'green'
              },
              {
                value: 'balance',
                name: 'Balanced ⭐',
                desc: 'Balances line lengths in headings',
                example: 'text-wrap: balance;',
                color: 'purple'
              },
              {
                value: 'pretty',
                name: 'Pretty ⭐',
                desc: 'Avoids orphans and widows in paragraphs',
                example: 'text-wrap: pretty;',
                color: 'pink'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={`bg-${item.color}-600 text-white text-lg`}>{item.value}</Badge>
                  <span className="font-bold">{item.name}</span>
                </div>
                <p className="text-sm mb-3">{item.desc}</p>
                <div className={`bg-${item.color}-900 dark:bg-${item.color}-950 p-3 rounded-lg`}>
                  <code className={`text-sm text-${item.color}-100`}>
                    {item.example}
                  </code>
                </div>
              </div>
            ))}
          </div>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">NEW!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <code>text-wrap: balance</code> for headings, <code>text-wrap: pretty</code> for paragraphs!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>See text-wrap: balance in action</CardDescription>
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
      max-width: 800px;
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
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-bottom: 40px;
    }
    
    .box {
      padding: 30px;
      border-radius: 12px;
      background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: linear-gradient(135deg, #374151, #4b5563);
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
    
    h1 {
      font-size: 32px;
      line-height: 1.3;
      color: #1a1a2e;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #e5e5e5;
      }
    }
    
    .normal {
      text-wrap: wrap;
    }
    
    .balanced {
      text-wrap: balance;
    }
    
    p {
      line-height: 1.6;
      color: #4b5563;
    }
    
    @media (prefers-color-scheme: dark) {
      p {
        color: #9ca3af;
      }
    }
    
    .pretty {
      text-wrap: pretty;
    }
    
    @media (max-width: 768px) {
      .comparison {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 style="text-align: center; color: #667eea; margin-bottom: 40px;">
      Text Wrapping Comparison
    </h1>
    
    <div class="comparison">
      <div class="box">
        <span class="label">❌ Normal Wrap</span>
        <h1 class="normal">
          This is a Long Heading That Might Break Awkwardly
        </h1>
      </div>
      
      <div class="box">
        <span class="label">✅ text-wrap: balance</span>
        <h1 class="balanced">
          This is a Long Heading That Might Break Awkwardly
        </h1>
      </div>
    </div>
    
    <div class="comparison">
      <div class="box">
        <span class="label">❌ Normal Paragraph</span>
        <p>
          This is a paragraph with some text that demonstrates how normal wrapping works. 
          Sometimes the last word might end up all alone on the last line, which looks awkward. 
          This is called an orphan.
        </p>
      </div>
      
      <div class="box">
        <span class="label">✅ text-wrap: pretty</span>
        <p class="pretty">
          This is a paragraph with some text that demonstrates how normal wrapping works. 
          Sometimes the last word might end up all alone on the last line, which looks awkward. 
          This is called an orphan.
        </p>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Text Wrap Balance vs Pretty"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <WrapText className="w-6 h-6 text-green-600 dark:text-green-400" />
            word-break Property
          </CardTitle>
          <CardDescription>Breaking long words</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            {[
              { value: 'normal', desc: 'Default word breaking', use: 'Most text' },
              { value: 'break-all', desc: 'Break anywhere in word', use: 'URLs, codes' },
              { value: 'keep-all', desc: 'Never break words', use: 'CJK languages' },
              { value: 'break-word', desc: 'Break only if needed', use: 'Long URLs' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between mb-2">
                  <code className="font-bold text-green-700 dark:text-green-400">{item.value}</code>
                  <Badge className="bg-green-600 text-white text-xs">{item.use}</Badge>
                </div>
                <p className="text-sm text-green-600 dark:text-green-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            hyphens Property
          </CardTitle>
          <CardDescription>Automatic hyphenation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`p {
  hyphens: auto;
  /* Requires lang attribute! */
}

<p lang="en">Very long words...</p>`}
              </code>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { value: 'none', desc: 'No hyphenation' },
              { value: 'manual', desc: 'Only at &shy; or ‐' },
              { value: 'auto', desc: 'Browser decides (needs lang)' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <code className="font-bold text-blue-700 dark:text-blue-400">{item.value}</code>
                <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">{item.desc}</p>
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
            <span><strong>text-wrap: balance</strong> for headings</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>text-wrap: pretty</strong> for paragraphs</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>word-break: break-all</strong> for URLs</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>Chrome 114+, Safari 17+, Firefox 121+</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

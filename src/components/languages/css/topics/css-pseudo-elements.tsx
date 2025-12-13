'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Sparkles as SparklesIcon, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Quote, Code
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssPseudoElementsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssPseudoElements({ onOpenWebPlayground }: CssPseudoElementsProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={SparklesIcon}
        category="CSS · Selectors & States"
        title="Pseudo-Elements"
        description="Style specific parts of elements or add decorative content"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <SparklesIcon className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Pseudo-Elements</CardTitle>
              <CardDescription className="text-base">Style parts of elements</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Pseudo-Elements = Virtual Elements</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Pseudo-elements let you style specific parts of elements or insert content without adding HTML. 
              They use <strong>double colons</strong> <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">::</code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <h3 className="font-bold mb-2">Pseudo-Classes :</h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Select elements in certain <strong>states</strong>
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded mt-2 block">
                button:hover
              </code>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <h3 className="font-bold mb-2">Pseudo-Elements ::</h3>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Style specific <strong>parts</strong> of elements
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded mt-2 block">
                p::first-letter
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Common Pseudo-Elements
          </CardTitle>
          <CardDescription>The four most-used pseudo-elements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                name: '::before',
                desc: 'Insert content before element',
                example: 'p::before { content: "→ "; }',
                color: 'blue',
                use: 'Icons, quotes, decorations'
              },
              {
                name: '::after',
                desc: 'Insert content after element',
                example: 'a::after { content: " →"; }',
                color: 'green',
                use: 'Tooltips, badges, arrows'
              },
              {
                name: '::first-letter',
                desc: 'Style first letter of text',
                example: 'p::first-letter { font-size: 2em; }',
                color: 'purple',
                use: 'Drop caps, magazine style'
              },
              {
                name: '::first-line',
                desc: 'Style first line of text',
                example: 'p::first-line { font-weight: bold; }',
                color: 'orange',
                use: 'Emphasis, article intros'
              }
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className="flex items-center gap-3 mb-3">
                  <Badge className={`bg-${item.color}-600 text-white text-lg`}>{item.name}</Badge>
                  <Badge variant="outline" className={`bg-${item.color}-100 dark:bg-${item.color}-900`}>
                    {item.use}
                  </Badge>
                </div>
                <p className="text-sm mb-3">{item.desc}</p>
                <div className={`bg-${item.color}-900 dark:bg-${item.color}-950 p-3 rounded-lg`}>
                  <code className={`text-sm text-${item.color}-100`}>{item.example}</code>
                </div>
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
          <CardDescription>See pseudo-elements in action</CardDescription>
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
      font-family: Georgia, serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px;
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
      padding: 50px;
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
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    /* ::first-letter - Drop cap */
    .drop-cap::first-letter {
      font-size: 4em;
      font-weight: bold;
      float: left;
      margin-right: 10px;
      line-height: 0.8;
      color: #667eea;
    }
    
    @media (prefers-color-scheme: dark) {
      .drop-cap::first-letter {
        color: #a78bfa;
      }
    }
    
    /* ::first-line */
    .intro::first-line {
      font-weight: bold;
      font-size: 1.2em;
      color: #764ba2;
    }
    
    @media (prefers-color-scheme: dark) {
      .intro::first-line {
        color: #c4b5fd;
      }
    }
    
    /* ::before and ::after for quotes */
    .quote {
      position: relative;
      padding: 30px;
      margin: 30px 0;
      background: #f3f4f6;
      border-radius: 12px;
      font-style: italic;
    }
    
    @media (prefers-color-scheme: dark) {
      .quote {
        background: #374151;
      }
    }
    
    .quote::before {
      content: """;
      position: absolute;
      top: -10px;
      left: 10px;
      font-size: 80px;
      color: #667eea;
      opacity: 0.3;
      font-family: Georgia, serif;
    }
    
    .quote::after {
      content: """;
      position: absolute;
      bottom: -50px;
      right: 10px;
      font-size: 80px;
      color: #667eea;
      opacity: 0.3;
      font-family: Georgia, serif;
    }
    
    /* Links with ::after */
    .fancy-link {
      color: #667eea;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      .fancy-link {
        color: #a78bfa;
      }
    }
    
    .fancy-link::after {
      content: " →";
      transition: transform 0.3s;
      display: inline-block;
    }
    
    .fancy-link:hover {
      color: #764ba2;
    }
    
    .fancy-link:hover::after {
      transform: translateX(5px);
    }
    
    p {
      line-height: 1.8;
      margin-bottom: 20px;
    }
    
    .label {
      display: inline-block;
      background: #667eea;
      color: white;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 10px;
      font-family: -apple-system, sans-serif;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✨ Pseudo-Elements</h1>
    
    <div class="label">::first-letter (Drop Cap)</div>
    <p class="drop-cap">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Notice how the first letter is much larger and styled differently. 
      This is called a drop cap and is commonly used in magazines and books.
    </p>
    
    <div class="label">::first-line (Bold First Line)</div>
    <p class="intro">
      This entire first line is bold and larger. 
      The rest of the paragraph continues with normal styling. 
      This is great for introductions and article openings.
    </p>
    
    <div class="label">::before & ::after (Quotation Marks)</div>
    <div class="quote">
      CSS pseudo-elements are powerful tools that let you add style and 
      content without cluttering your HTML. Master them for cleaner code!
    </div>
    
    <div class="label">::after (Animated Arrow)</div>
    <p>
      <a href="#" class="fancy-link">Hover over this link</a> to see the arrow animation!
    </p>
  </div>
</body>
</html>`}
            title="Pseudo-Elements Examples"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            The content Property
          </CardTitle>
          <CardDescription>Required for ::before and ::after</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">content</code> property 
            is <strong>required</strong> for <code>::before</code> and <code>::after</code> pseudo-elements.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <h3 className="font-bold text-lg text-green-900 dark:text-green-100 mb-3">
              Common Values
            </h3>
            <div className="space-y-3">
              {[
                { value: 'content: "text";', desc: 'Insert text' },
                { value: 'content: "";', desc: 'Empty (for decorative shapes)' },
                { value: 'content: attr(href);', desc: 'Use attribute value' },
                { value: 'content: url(icon.png);', desc: 'Insert image' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <code className="text-sm font-mono text-green-700 dark:text-green-400">{item.value}</code>
                  <span className="text-xs text-green-600 dark:text-green-300">{item.desc}</span>
                </div>
              ))}
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
            <span>Pseudo-elements use <strong>double colon ::</strong></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>::before</strong> and <strong>::after</strong> require <code>content</code> property</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>::first-letter</strong> great for drop caps</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use for decorative content that shouldn't be in HTML</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

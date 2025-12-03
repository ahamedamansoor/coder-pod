'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';
import { 
  Code2, 
  CheckCircle2, 
  XCircle,
  Lightbulb,
  Brackets,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

interface HtmlSyntaxProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlSyntax({ onOpenWebPlayground }: HtmlSyntaxProps) {
  return (
    <div className="w-full space-y-8 pb-16">
      {/* Hero Section */}
      <PageHeader
        icon={Brackets}
        category="HTML · Fundamentals"
        title="HTML Syntax"
        description="Master the rules and patterns of writing HTML—from tags and attributes to best practices that make your code clean and professional."
        colorTheme="blue"
      />

      {/* 1. WHAT IS HTML SYNTAX */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Code2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Understanding HTML Syntax
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Syntax is the set of rules that define how HTML is written—like grammar for code
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-bold mb-4">Think of HTML Syntax Like a Sentence:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-3">
                  <Brackets className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="font-bold">Tags = Words</h4>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Like words in a sentence, tags are the building blocks of HTML.
                </p>
                <code className="block mt-2 text-xs bg-orange-100 dark:bg-orange-900/30 p-2 rounded text-orange-600 dark:text-orange-400">
                  &lt;p&gt;, &lt;h1&gt;, &lt;div&gt;
                </code>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-bold">Attributes = Adjectives</h4>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Attributes describe tags, like adjectives describe nouns.
                </p>
                <code className="block mt-2 text-xs bg-purple-100 dark:bg-purple-900/30 p-2 rounded text-purple-600 dark:text-purple-400">
                  class="blue" id="main"
                </code>
              </div>

              <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <div className="flex items-center gap-2 mb-3">
                  <FileCode className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="font-bold">Content = Message</h4>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  The content between tags is what users see.
                </p>
                <code className="block mt-2 text-xs bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded text-emerald-600 dark:text-emerald-400">
                  Hello World!
                </code>
              </div>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-700">
            <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Why Syntax Matters</AlertTitle>
            <AlertDescription className="text-blue-900 dark:text-blue-100">
              Correct syntax ensures browsers can read your content. One small mistake can break your entire page!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 2. TAG ANATOMY */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Brackets className="w-7 h-7" />
            Anatomy of an HTML Tag
          </CardTitle>
          <CardDescription className="text-base">
            Every HTML tag has a specific structure—learn to recognize and write them correctly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Visual Tag Breakdown */}
          <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl border-2 border-slate-300 dark:border-slate-600">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-3">Opening Tag with Attribute:</h4>
                <div className="flex flex-wrap items-center gap-2 text-lg font-mono bg-white dark:bg-slate-950 p-4 rounded-xl">
                  <span className="text-orange-600 dark:text-orange-400">&lt;</span>
                  <span className="text-purple-600 dark:text-purple-400">p</span>
                  <span className="text-emerald-600 dark:text-emerald-400">class</span>
                  <span className="text-slate-500">=</span>
                  <span className="text-cyan-600 dark:text-cyan-400">"intro"</span>
                  <span className="text-orange-600 dark:text-orange-400">&gt;</span>
                  <span className="text-slate-700 dark:text-slate-300">Hello World</span>
                  <span className="text-orange-600 dark:text-orange-400">&lt;/</span>
                  <span className="text-purple-600 dark:text-purple-400">p</span>
                  <span className="text-orange-600 dark:text-orange-400">&gt;</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="flex items-center gap-2 p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-sm font-medium">&lt; &gt; Brackets</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span className="text-sm font-medium">Tag Name</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                  <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                  <span className="text-sm font-medium">Attribute</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg">
                  <div className="w-4 h-4 bg-cyan-500 rounded"></div>
                  <span className="text-sm font-medium">Value</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="w-4 h-4 bg-slate-500 rounded"></div>
                  <span className="text-sm font-medium">Content</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tag Types */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Three Types of HTML Tags:</h3>
            
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg">1. Paired Tags</h4>
                <Badge className="bg-orange-500 text-white">MOST USED</Badge>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Have both opening and closing tags. Content goes between them.
              </p>
              <div className="grid md:grid-cols-3 gap-2">
                <code className="block text-xs bg-white dark:bg-slate-900 p-3 rounded text-orange-600 dark:text-orange-400">
                  &lt;p&gt;Text&lt;/p&gt;
                </code>
                <code className="block text-xs bg-white dark:bg-slate-900 p-3 rounded text-orange-600 dark:text-orange-400">
                  &lt;h1&gt;Title&lt;/h1&gt;
                </code>
                <code className="block text-xs bg-white dark:bg-slate-900 p-3 rounded text-orange-600 dark:text-orange-400">
                  &lt;div&gt;Box&lt;/div&gt;
                </code>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg">2. Self-Closing Tags</h4>
                <Badge className="bg-purple-500 text-white">NO CONTENT</Badge>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Don't need closing tags because they don't contain content.
              </p>
              <div className="grid md:grid-cols-3 gap-2">
                <code className="block text-xs bg-white dark:bg-slate-900 p-3 rounded text-purple-600 dark:text-purple-400">
                  &lt;img src="pic.jpg"&gt;
                </code>
                <code className="block text-xs bg-white dark:bg-slate-900 p-3 rounded text-purple-600 dark:text-purple-400">
                  &lt;br&gt;
                </code>
                <code className="block text-xs bg-white dark:bg-slate-900 p-3 rounded text-purple-600 dark:text-purple-400">
                  &lt;input type="text"&gt;
                </code>
              </div>
            </div>
          </div>

          <FrontendCodePreview
            title="Tag Types in Action"
            description="See how different tag types work together"
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tag Types</title>
</head>
<body>
  <h1>HTML Tag Types</h1>
  <p>This paragraph uses paired tags.</p>
  
  <img src="https://via.placeholder.com/300x150/667eea/ffffff?text=Self-Closing" alt="Demo">
  <br>
  <input type="text" placeholder="Type here...">
  
  <div class="tip">
    <strong>Remember:</strong> Always close paired tags!
  </div>
</body>
</html>`}
            css={`body {
  font-family: system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  margin: 0;
}

h1 {
  color: white;
  text-align: center;
  font-size: 2rem;
}

p {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
}

img {
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
  display: block;
}

input {
  padding: 1rem;
  border: 3px solid white;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
  display: block;
}

.tip {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
}`}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* 3. COMMON SYNTAX ERRORS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <AlertCircle className="w-7 h-7" />
            Common Syntax Mistakes
          </CardTitle>
          <CardDescription className="text-base">
            Learn from these common errors and write bug-free HTML
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400">Forgetting Closing Tags</h4>
            </div>
            <code className="block text-xs bg-white dark:bg-slate-900 p-3 rounded mb-2 text-rose-600 dark:text-rose-400">
              &lt;p&gt;Hello World<br/>
              &lt;div&gt;Content
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Always close your paired tags!
            </p>
          </div>

          <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">Correct Way</h4>
            </div>
            <code className="block text-xs bg-white dark:bg-slate-900 p-3 rounded mb-2 text-emerald-600 dark:text-emerald-400">
              &lt;p&gt;Hello World&lt;/p&gt;<br/>
              &lt;div&gt;Content&lt;/div&gt;
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Every opening tag needs closing.
            </p>
          </div>

          <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400">Missing Quotes</h4>
            </div>
            <code className="block text-xs bg-white dark:bg-slate-900 p-3 rounded mb-2 text-rose-600 dark:text-rose-400">
              &lt;a href=page.html&gt;Link&lt;/a&gt;
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Attribute values need quotes!
            </p>
          </div>

          <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">Correct Way</h4>
            </div>
            <code className="block text-xs bg-white dark:bg-slate-900 p-3 rounded mb-2 text-emerald-600 dark:text-emerald-400">
              &lt;a href="page.html"&gt;Link&lt;/a&gt;
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Always use quotes around values.
            </p>
          </div>

          <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400">Wrong Nesting</h4>
            </div>
            <code className="block text-xs bg-white dark:bg-slate-900 p-3 rounded mb-2 text-rose-600 dark:text-rose-400">
              &lt;strong&gt;&lt;em&gt;Bad&lt;/strong&gt;&lt;/em&gt;
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Tags overlap incorrectly!
            </p>
          </div>

          <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">Correct Way</h4>
            </div>
            <code className="block text-xs bg-white dark:bg-slate-900 p-3 rounded mb-2 text-emerald-600 dark:text-emerald-400">
              &lt;strong&gt;&lt;em&gt;Good&lt;/em&gt;&lt;/strong&gt;
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Close inner tags before outer.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 4. INTERACTIVE PLAYGROUND */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="✨ Master HTML Syntax"
          description="Practice writing clean, error-free HTML!"
          features={[
            'Correct tag structure',
            'Proper attributes',
            'Clean nesting',
            'Professional code'
          ]}
          buttonText="Launch Syntax Playground"
          onLaunchPlayground={() => onOpenWebPlayground(
            `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Syntax Practice</title>
</head>
<body>
  <h1>Perfect HTML Syntax</h1>
  <p class="intro">All tags and attributes are correct!</p>
  <button onclick="celebrate()">Click Me!</button>
  <div id="message"></div>
</body>
</html>`,
            `body {
  font-family: system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 2rem;
  text-align: center;
}

h1 {
  color: white;
  font-size: 3rem;
}

.intro {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 500px;
}

button {
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
}

#message {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 500px;
  opacity: 0;
  transition: opacity 0.3s;
}

#message.show {
  opacity: 1;
}`,
            `function celebrate() {
  const msg = document.getElementById('message');
  msg.textContent = '🎉 Perfect syntax! You\\'re a natural!';
  msg.classList.add('show');
}`
          )}
          playgroundData={{
            html: '<p>Practice here</p>',
            css: '',
            js: ''
          }}
          colorTheme="blue"
        />
      )}
    </div>
  );
}

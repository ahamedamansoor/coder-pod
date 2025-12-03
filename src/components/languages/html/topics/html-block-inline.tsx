'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Grid3x3, Lightbulb, CheckCircle2, Code } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlBlockInlineProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const blockVsInlineExample = {
  html: `<h2>Block vs Inline Elements</h2>

<!-- Block Elements -->
<div class="demo-section">
  <h3>Block Elements</h3>
  <div class="block-demo">
    <p>This is a paragraph - a block element</p>
    <p>Each paragraph takes full width and starts on new line</p>
  </div>
</div>

<!-- Inline Elements -->
<div class="demo-section">
  <h3>Inline Elements</h3>
  <p>
    This is <span class="inline-demo">inline text</span> mixed with 
    <strong class="inline-demo">strong text</strong> on the 
    <em class="inline-demo">same line</em>.
  </p>
</div>

<!-- Inline-Block -->
<div class="demo-section">
  <h3>Inline-Block Elements</h3>
  <div class="inline-block-demo">Box 1</div>
  <div class="inline-block-demo">Box 2</div>
  <div class="inline-block-demo">Box 3</div>
</div>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h2 {
  color: #1e293b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

h3 {
  color: #3b82f6;
  margin-top: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #60a5fa;
  }
}

.demo-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .demo-section {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.block-demo {
  margin: 1rem 0;
}

.block-demo p {
  background: #eff6ff;
  border-left: 4px solid #3b82f6;
  padding: 1rem;
  margin: 0.5rem 0;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  .block-demo p {
    background: #0f172a;
    border-left-color: #60a5fa;
    color: #f1f5f9;
  }
}

.inline-demo {
  background: #fef3c7;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: #92400e;
}

@media (prefers-color-scheme: dark) {
  .inline-demo {
    background: #78350f;
    color: #fcd34d;
  }
}

.inline-block-demo {
  display: inline-block;
  background: #d1fae5;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  border: 2px solid #10b981;
  color: #065f46;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .inline-block-demo {
    background: #064e3b;
    border-color: #10b981;
    color: #d1fae5;
  }
}`,
  js: ``,
};

const divSpanExample = {
  html: `<h2>Div vs Span</h2>

<!-- Div Example -->
<div class="demo-section">
  <h3>Div Elements (Block)</h3>
  <div class="box">
    <h4>Container Box 1</h4>
    <p>Divs are block elements used for grouping content</p>
  </div>
  <div class="box">
    <h4>Container Box 2</h4>
    <p>Each div starts on a new line</p>
  </div>
</div>

<!-- Span Example -->
<div class="demo-section">
  <h3>Span Elements (Inline)</h3>
  <p>
    The word <span class="highlight">span</span> is inline and 
    <span class="highlight">flows</span> within text without 
    <span class="highlight">breaking</span> lines.
  </p>
</div>

<!-- Semantic Alternative -->
<div class="demo-section">
  <h3>When to Use Semantic Elements Instead</h3>
  <p>✓ Use &lt;section&gt; instead of &lt;div&gt; for major content sections</p>
  <p>✓ Use &lt;article&gt; instead of &lt;div&gt; for independent content</p>
  <p>✓ Use &lt;strong&gt; instead of &lt;span&gt; for emphasis</p>
  <p>✓ Use &lt;em&gt; instead of &lt;span&gt; for italics</p>
</div>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h2 {
  color: #1e293b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

h3, h4 {
  color: #3b82f6;
  margin-top: 1rem;
}

@media (prefers-color-scheme: dark) {
  h3, h4 {
    color: #60a5fa;
  }
}

.demo-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .demo-section {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.box {
  background: #f0f9ff;
  border-left: 4px solid #0284c7;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
}

@media (prefers-color-scheme: dark) {
  .box {
    background: #082f49;
    border-left-color: #0284c7;
  }
}

p {
  color: #1e293b;
  line-height: 1.6;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #f1f5f9;
  }
}

.highlight {
  background: #fef08a;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: #713f12;
  font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  .highlight {
    background: #78350f;
    color: #fcd34d;
  }
}`,
  js: ``,
};

export default function HtmlBlockInline({ onOpenWebPlayground }: HtmlBlockInlineProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Grid3x3}
        category="HTML · Semantic Structure"
        title="Block vs Inline"
        description="Understanding block, inline, and inline-block display types"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Grid3x3 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Block vs Inline Elements
              </CardTitle>
              <CardDescription className="text-base mt-1">
                How HTML elements display and flow on the page
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            HTML elements are displayed as either <strong>block</strong>, <strong>inline</strong>, or <strong>inline-block</strong> by default.
            Understanding these display types is crucial for controlling page layout and structure.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Block</h4>
              <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                <li>✓ Full width</li>
                <li>✓ New line</li>
                <li>✓ Respects margins</li>
                <li>✓ Examples: p, div, h1-h6</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Inline</h4>
              <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                <li>✓ Only needed width</li>
                <li>✓ Same line</li>
                <li>✓ Limited margins</li>
                <li>✓ Examples: span, a, strong</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Inline-Block</h4>
              <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                <li>✓ Custom width</li>
                <li>✓ Same line</li>
                <li>✓ Full margins</li>
                <li>✓ Best of both</li>
              </ul>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Key Insight</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              CSS can change the default display property. You can make blocks inline and inline elements block using <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded text-xs">display: property</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Block vs Inline Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Grid3x3 className="w-7 h-7" />
            Visual Comparison
          </CardTitle>
          <CardDescription className="text-base">
            See how block, inline, and inline-block elements display
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Block elements stack vertically, inline elements flow horizontally, and inline-block combines both behaviors.
          </p>

          <FrontendCodePreview
            title="Block vs Inline Elements"
            description="Visual demonstration of display types"
            html={blockVsInlineExample.html}
            css={blockVsInlineExample.css}
            js={blockVsInlineExample.js}
            colorTheme="blue"
            previewHeight="500px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Div vs Span */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Code className="w-7 h-7" />
            Div vs Span
          </CardTitle>
          <CardDescription className="text-base">
            Generic container elements and when to use them
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;div&gt;</code> and
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;span&gt;</code> are generic containers.
            However, semantic elements should be preferred when their meaning matches the content.
          </p>

          <FrontendCodePreview
            title="Div vs Span"
            description="Generic containers and semantic alternatives"
            html={divSpanExample.html}
            css={divSpanExample.css}
            js={divSpanExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="grid gap-3 mt-4">
            {[
              { tag: '&lt;div&gt;', use: 'Generic block container, use semantic elements when possible' },
              { tag: '&lt;span&gt;', use: 'Generic inline container, use &lt;strong&gt;, &lt;em&gt;, etc when needed' },
              { tag: '&lt;section&gt;', use: 'Thematic grouping of content' },
              { tag: '&lt;article&gt;', use: 'Independent, self-contained content' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 className="font-mono font-semibold text-purple-600 dark:text-purple-400 mb-1">{item.tag}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.use}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="w-7 h-7" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Do This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Use semantic elements first</li>
                <li>✓ Use div/span only when needed</li>
                <li>✓ Understand default display values</li>
                <li>✓ Use CSS to control layout</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Always using div for everything</li>
                <li>✗ Ignoring semantic meaning</li>
                <li>✗ Fighting browser defaults</li>
                <li>✗ Overusing CSS hacks</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


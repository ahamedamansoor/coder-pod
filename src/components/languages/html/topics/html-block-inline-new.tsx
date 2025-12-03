'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Layers, Lightbulb, CheckCircle2, Zap, BookOpen, Grid3x3 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlBlockInlineProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

// Example 1: What are Block Elements
const blockElementsExample = {
  html: `<h2>Block Elements Demo</h2>

<div class="container">
  <h3>Block Elements - Full Width, New Lines</h3>
  
  <div class="block-item">
    <p style="color: #1e293b; margin: 0;">🔵 Paragraph (Block)</p>
  </div>
  
  <div class="block-item">
    <p style="color: #1e293b; margin: 0;">🔵 Heading (Block)</p>
  </div>
  
  <div class="block-item">
    <p style="color: #1e293b; margin: 0;">🔵 Div (Block)</p>
  </div>
  
  <div class="block-item">
    <p style="color: #1e293b; margin: 0;">🔵 Section (Block)</p>
  </div>
</div>

<div class="note">
  <strong>📌 Notice:</strong> Each block takes full width and starts on a new line
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

h2, h3 {
  color: #3b82f6;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h2, h3 {
    color: #60a5fa;
  }
}

.container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.block-item {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-left: 5px solid #3b82f6;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  .block-item {
    background: linear-gradient(135deg, #0f172a 0%, #082f49 100%);
    border-left-color: #60a5fa;
  }
}

.note {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  color: #92400e;
}

@media (prefers-color-scheme: dark) {
  .note {
    background: #78350f;
    border-left-color: #fcd34d;
    color: #fcd34d;
  }
}`,
  js: ``,
};

// Example 2: What are Inline Elements
const inlineElementsExample = {
  html: `<h2>Inline Elements Demo</h2>

<div class="container">
  <h3>Inline Elements - Flow Horizontally</h3>
  
  <p class="paragraph">
    This is a paragraph with 
    <span class="inline-item">inline element</span>
    mixed with 
    <strong class="inline-item">strong text</strong>
    and 
    <em class="inline-item">emphasized text</em>
    all on the same line.
  </p>
  
  <p class="paragraph">
    They flow like 
    <a href="#" class="inline-item">links</a>
    within text without breaking lines.
  </p>
</div>

<div class="note">
  <strong>📌 Notice:</strong> All inline elements stay on the same line
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

h2, h3 {
  color: #3b82f6;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h2, h3 {
    color: #60a5fa;
  }
}

.container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.paragraph {
  color: #1e293b;
  line-height: 1.8;
  font-size: 1.05rem;
}

@media (prefers-color-scheme: dark) {
  .paragraph {
    color: #f1f5f9;
  }
}

.inline-item {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  color: #92400e;
  font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  .inline-item {
    background: linear-gradient(135deg, #78350f 0%, #5a2e0d 100%);
    color: #fcd34d;
  }
}

.note {
  background: #d1fae5;
  border-left: 4px solid #10b981;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  color: #065f46;
}

@media (prefers-color-scheme: dark) {
  .note {
    background: #064e3b;
    border-left-color: #10b981;
    color: #d1fae5;
  }
}`,
  js: ``,
};

// Example 3: Inline-Block Elements
const inlineBlockExample = {
  html: `<h2>Inline-Block Elements Demo</h2>

<div class="container">
  <h3>Inline-Block: Best of Both Worlds</h3>
  
  <div class="button-group">
    <button class="inline-block-item">Button 1</button>
    <button class="inline-block-item">Button 2</button>
    <button class="inline-block-item">Button 3</button>
  </div>
  
  <p class="description">Inline-block elements:</p>
  <ul class="feature-list">
    <li>✓ Flow horizontally like inline</li>
    <li>✓ Accept width/height like block</li>
    <li>✓ Respect margins like block</li>
    <li>✓ Perfect for buttons and boxes</li>
  </ul>
</div>

<div class="note">
  <strong>📌 Notice:</strong> Buttons flow horizontally but have custom sizes
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

h2, h3 {
  color: #3b82f6;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h2, h3 {
    color: #60a5fa;
  }
}

.container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.inline-block-item {
  display: inline-block;
  background: linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%);
  color: #3730a3;
  border: 2px solid #6366f1;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  min-width: 120px;
}

.inline-block-item:hover {
  background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 100%);
  transform: translateY(-2px);
}

@media (prefers-color-scheme: dark) {
  .inline-block-item {
    background: linear-gradient(135deg, #312e81 0%, #1e1b4b 100%);
    border-color: #818cf8;
    color: #c7d2fe;
  }
  
  .inline-block-item:hover {
    background: linear-gradient(135deg, #4c1d95 0%, #3730a3 100%);
  }
}

.description {
  color: #1e293b;
  font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  .description {
    color: #f1f5f9;
  }
}

.feature-list {
  color: #1e293b;
  margin: 1rem 0;
}

@media (prefers-color-scheme: dark) {
  .feature-list {
    color: #f1f5f9;
  }
}

.note {
  background: #e0e7ff;
  border-left: 4px solid #6366f1;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  color: #3730a3;
}

@media (prefers-color-scheme: dark) {
  .note {
    background: #1e1b4b;
    border-left-color: #818cf8;
    color: #e0e7ff;
  }
}`,
  js: ``,
};

export default function HtmlBlockInline({ onOpenWebPlayground }: HtmlBlockInlineProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Grid3x3}
        category="HTML · Display & Layout"
        title="Block vs Inline"
        description="Master how block, inline, and inline-block elements display on web pages"
        colorTheme="blue"
      />

      {/* What is Block vs Inline */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Grid3x3 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What is Block vs Inline?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Understanding how elements display on web pages
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            Every HTML element has a <strong>display</strong> property that determines how it behaves and flows on the page.
            There are three main display types: <strong>block</strong>, <strong>inline</strong>, and <strong>inline-block</strong>.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Simple Analogy</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Think of block elements as <strong>paragraphs in a book</strong> - each starts on a new line.
              Inline elements are like <strong>words in a sentence</strong> - they flow together.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-3 flex items-center gap-2">
                <span className="text-xl">📦</span> Block
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li><strong>Width:</strong> 100%</li>
                <li><strong>New line:</strong> Yes</li>
                <li><strong>Margins:</strong> Full</li>
              </ul>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border-2 border-amber-200 dark:border-amber-700">
              <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
                <span className="text-xl">📝</span> Inline
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li><strong>Width:</strong> Content</li>
                <li><strong>New line:</strong> No</li>
                <li><strong>Margins:</strong> Limited</li>
              </ul>
            </div>

            <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                <span className="text-xl">⚙️</span> Inline-Block
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li><strong>Width:</strong> Custom</li>
                <li><strong>New line:</strong> No</li>
                <li><strong>Margins:</strong> Full</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Block Elements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <span className="text-2xl">📦</span> Block Elements
          </CardTitle>
          <CardDescription className="text-base">
            Full-width elements that start on new lines
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-700">
            <p className="text-slate-700 dark:text-slate-300 mb-3"><strong>Block elements always:</strong></p>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>✓ Take 100% of parent width</li>
              <li>✓ Start on a new line</li>
              <li>✓ Respect all margins and padding</li>
              <li>✓ Accept width and height CSS</li>
            </ul>
          </div>

          <p className="text-slate-700 dark:text-slate-300"><strong>Common block elements:</strong></p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {['p', 'div', 'h1-h6', 'section', 'article', 'header', 'footer', 'nav', 'ul, ol'].map((tag, i) => (
              <code key={i} className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-3 py-2 rounded text-sm">&lt;{tag}&gt;</code>
            ))}
          </div>

          <FrontendCodePreview
            title="Block Elements Demo"
            description="See how block elements display at full width"
            html={blockElementsExample.html}
            css={blockElementsExample.css}
            js={blockElementsExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Inline Elements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <span className="text-2xl">📝</span> Inline Elements
          </CardTitle>
          <CardDescription className="text-base">
            Elements that flow within text on the same line
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-700">
            <p className="text-slate-700 dark:text-slate-300 mb-3"><strong>Inline elements always:</strong></p>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>✓ Take only needed width (like words)</li>
              <li>✓ Stay on the same line</li>
              <li>✓ Ignore top/bottom margins</li>
              <li>✓ Ignore width and height CSS</li>
              <li>✓ Allow left/right margins</li>
            </ul>
          </div>

          <p className="text-slate-700 dark:text-slate-300"><strong>Common inline elements:</strong></p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {['span', 'a', 'strong', 'em', 'img', 'button', 'input', 'label', 'code'].map((tag, i) => (
              <code key={i} className="bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-3 py-2 rounded text-sm">&lt;{tag}&gt;</code>
            ))}
          </div>

          <FrontendCodePreview
            title="Inline Elements Demo"
            description="See how inline elements flow within text"
            html={inlineElementsExample.html}
            css={inlineElementsExample.css}
            js={inlineElementsExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Inline-Block */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <span className="text-2xl">⚙️</span> Inline-Block Elements
          </CardTitle>
          <CardDescription className="text-base">
            The best of both block and inline
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
            <p className="text-slate-700 dark:text-slate-300 mb-3"><strong>Inline-block combines:</strong></p>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>✓ Horizontal flow like inline</li>
              <li>✓ Custom width/height like block</li>
              <li>✓ Full margins like block</li>
              <li>✓ Perfect for buttons, images, boxes</li>
            </ul>
          </div>

          <FrontendCodePreview
            title="Inline-Block Elements Demo"
            description="See how inline-block combines both behaviors"
            html={inlineBlockExample.html}
            css={inlineBlockExample.css}
            js={inlineBlockExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
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
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Do This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Know default display values</li>
                <li>✓ Use CSS to control layout</li>
                <li>✓ Test in browser DevTools</li>
                <li>✓ Understand margin behavior</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border-2 border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Margins on inline elements</li>
                <li>✗ Width on inline elements</li>
                <li>✗ Fighting browser defaults</li>
                <li>✗ Not understanding display types</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Code2, Lightbulb, CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlDivSpanProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

// Example 1: Using Div
const divExample = {
  html: `<h2>Div Element Examples</h2>

<div class="demo-container">
  <h3>What is a Div?</h3>
  
  <div class="content-box">
    <h4>Box 1: Header Section</h4>
    <p>Divs are generic block containers. Each div takes full width and starts on a new line.</p>
  </div>
  
  <div class="content-box">
    <h4>Box 2: Main Content</h4>
    <p>Use divs for grouping sections of your page or creating layout containers.</p>
  </div>
  
  <div class="content-box">
    <h4>Box 3: Sidebar</h4>
    <p>Divs are versatile and work well for complex layouts.</p>
  </div>
</div>

<div class="code-info">
  <strong>📌 Key Point:</strong> Each div creates its own block-level space
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

h2, h3, h4 {
  color: #3b82f6;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h2, h3, h4 {
    color: #60a5fa;
  }
}

.demo-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .demo-container {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.content-box {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-left: 5px solid #0284c7;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
}

@media (prefers-color-scheme: dark) {
  .content-box {
    background: linear-gradient(135deg, #082f49 0%, #0c4a6e 100%);
    border-left-color: #0ea5e9;
  }
}

h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  color: #1e293b;
  line-height: 1.6;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #f1f5f9;
  }
}

.code-info {
  background: #e0e7ff;
  border-left: 4px solid #6366f1;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  color: #3730a3;
}

@media (prefers-color-scheme: dark) {
  .code-info {
    background: #1e1b4b;
    border-left-color: #818cf8;
    color: #e0e7ff;
  }
}`,
  js: ``,
};

// Example 2: Using Span
const spanExample = {
  html: `<h2>Span Element Examples</h2>

<div class="demo-container">
  <h3>What is a Span?</h3>
  
  <p class="main-text">
    A span is an inline element that 
    <span class="highlight-span">lets you style small portions</span>
    of text or content 
    <span class="highlight-span">without breaking the flow</span>.
  </p>
  
  <p class="main-text">
    You can use spans for 
    <span class="colored-span">different colors</span>,
    <span class="bold-span">emphasis</span>,
    <span class="underlined-span">highlighting</span>,
    and more, all on the same line.
  </p>
  
  <p class="main-text">
    Spans are perfect for styling individual words or phrases 
    <span class="background-span">without disrupting</span>
    the paragraph structure.
  </p>
</div>

<div class="code-info">
  <strong>📌 Key Point:</strong> Spans stay on the same line with surrounding text
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

.demo-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .demo-container {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.main-text {
  color: #1e293b;
  line-height: 1.8;
  font-size: 1.05rem;
}

@media (prefers-color-scheme: dark) {
  .main-text {
    color: #f1f5f9;
  }
}

.highlight-span {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  color: #92400e;
  font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  .highlight-span {
    background: linear-gradient(135deg, #78350f 0%, #5a2e0d 100%);
    color: #fcd34d;
  }
}

.colored-span {
  color: #dc2626;
  font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  .colored-span {
    color: #fca5a5;
  }
}

.bold-span {
  font-weight: 700;
  color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  .bold-span {
    color: #60a5fa;
  }
}

.underlined-span {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
  color: #059669;
}

@media (prefers-color-scheme: dark) {
  .underlined-span {
    color: #6ee7b7;
  }
}

.background-span {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: #065f46;
}

@media (prefers-color-scheme: dark) {
  .background-span {
    background: linear-gradient(135deg, #047857 0%, #10b981 100%);
    color: #d1fae5;
  }
}

.code-info {
  background: #d1fae5;
  border-left: 4px solid #10b981;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  color: #065f46;
}

@media (prefers-color-scheme: dark) {
  .code-info {
    background: #064e3b;
    border-left-color: #10b981;
    color: #d1fae5;
  }
}`,
  js: ``,
};

// Example 3: Div vs Span Comparison
const comparisonExample = {
  html: `<h2>Div vs Span: Direct Comparison</h2>

<div class="comparison">
  <div class="comparison-section">
    <h3>&lt;div&gt; Elements</h3>
    <div class="info-box">
      <p><strong>Block element</strong></p>
      <ul>
        <li>Takes full width</li>
        <li>New line before & after</li>
        <li>For grouping sections</li>
      </ul>
    </div>
  </div>
  
  <div class="comparison-section">
    <h3>&lt;span&gt; Elements</h3>
    <div class="info-box">
      <p><strong>Inline element</strong></p>
      <ul>
        <li>Takes needed width</li>
        <li>Flows with text</li>
        <li>For styling text</li>
      </ul>
    </div>
  </div>
</div>

<div class="code-info">
  <strong>💡 Remember:</strong> Choose based on layout needs, not just styling
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

.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 800px;
  margin: 2rem auto;
}

@media (max-width: 768px) {
  .comparison {
    grid-template-columns: 1fr;
  }
}

.comparison-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .comparison-section {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.info-box {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-left: 5px solid #0284c7;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

@media (prefers-color-scheme: dark) {
  .info-box {
    background: linear-gradient(135deg, #082f49 0%, #0c4a6e 100%);
    border-left-color: #0ea5e9;
  }
}

p, li {
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  p, li {
    color: #f1f5f9;
  }
}

ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.code-info {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 1rem;
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 800px;
  color: #92400e;
}

@media (prefers-color-scheme: dark) {
  .code-info {
    background: #78350f;
    border-left-color: #fcd34d;
    color: #fcd34d;
  }
}`,
  js: ``,
};

// Example 4: When to use Semantic Elements
const semanticExample = {
  html: `<h2>Semantic Alternatives to Div & Span</h2>

<div class="demo-container">
  <h3>Instead of &lt;div&gt;, use:</h3>
  
  <div class="semantic-example">
    <div class="code-label">&lt;section&gt;</div>
    <p>For thematic grouping of content</p>
  </div>
  
  <div class="semantic-example">
    <div class="code-label">&lt;article&gt;</div>
    <p>For independent, self-contained content</p>
  </div>
  
  <div class="semantic-example">
    <div class="code-label">&lt;header&gt;, &lt;footer&gt;</div>
    <p>For page or section headers/footers</p>
  </div>

  <h3>Instead of &lt;span&gt;, use:</h3>
  
  <div class="semantic-example">
    <div class="code-label">&lt;strong&gt;</div>
    <p>For important text that needs <strong>emphasis</strong></p>
  </div>
  
  <div class="semantic-example">
    <div class="code-label">&lt;em&gt;</div>
    <p>For <em>emphasized text</em> or stress</p>
  </div>
  
  <div class="semantic-example">
    <div class="code-label">&lt;mark&gt;</div>
    <p>For <mark>highlighted text</mark> or important bits</p>
  </div>
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

.demo-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .demo-container {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.semantic-example {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-left: 5px solid #4caf50;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
}

@media (prefers-color-scheme: dark) {
  .semantic-example {
    background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
    border-left-color: #66bb6a;
  }
}

.code-label {
  background: #4caf50;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  display: inline-block;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

@media (prefers-color-scheme: dark) {
  .code-label {
    background: #66bb6a;
    color: #1b5e20;
  }
}

p {
  color: #1e293b;
  margin: 0.5rem 0 0;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #f1f5f9;
  }
}

strong {
  font-weight: 700;
}

em {
  font-style: italic;
}

mark {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  color: #92400e;
}

@media (prefers-color-scheme: dark) {
  mark {
    background: linear-gradient(135deg, #78350f 0%, #5a2e0d 100%);
    color: #fcd34d;
  }
}`,
  js: ``,
};

export default function HtmlDivSpan({ onOpenWebPlayground }: HtmlDivSpanProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Code2}
        category="HTML · Elements & Containers"
        title="Div & Span"
        description="Learn when and how to use generic div and span elements effectively"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Code2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Div & Span: Generic Containers
              </CardTitle>
              <CardDescription className="text-base mt-1">
                When and how to use the most versatile HTML elements
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;div&gt;</code> and
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;span&gt;</code> are
            <strong> generic HTML containers</strong> that carry no semantic meaning. They're used when no other element fits your needs better.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Important Reminder</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              <strong>Always prefer semantic elements</strong> (&lt;header&gt;, &lt;section&gt;, &lt;strong&gt;, etc.)
              when their meaning matches your content. Use div and span only as a last resort.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <span className="text-xl">📦</span> Div
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li><strong>Type:</strong> Block element</li>
                <li><strong>Display:</strong> 100% width</li>
                <li><strong>Use for:</strong> Layout sections</li>
                <li><strong>Example:</strong> Containers, wrappers</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-200 dark:border-green-700">
              <h4 className="font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                <span className="text-xl">📝</span> Span
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li><strong>Type:</strong> Inline element</li>
                <li><strong>Display:</strong> Only needed width</li>
                <li><strong>Use for:</strong> Text styling</li>
                <li><strong>Example:</strong> Coloring, emphasis</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Div Explained */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <span className="text-2xl">📦</span> The Div Element
          </CardTitle>
          <CardDescription className="text-base">
            Generic block container for grouping content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-700">
            <p className="text-slate-700 dark:text-slate-300 mb-3"><strong>Div characteristics:</strong></p>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>✓ Block-level element</li>
              <li>✓ Takes 100% of parent width</li>
              <li>✓ Creates line breaks</li>
              <li>✓ Useful for layouts and grouping</li>
              <li>✓ Has no semantic meaning</li>
            </ul>
          </div>

          <FrontendCodePreview
            title="Using Div for Layout"
            description="See how divs create block-level containers"
            html={divExample.html}
            css={divExample.css}
            js={divExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">When to use Div</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Use &lt;div&gt; for wrapping content that doesn't have semantic meaning.
              For page structure, prefer &lt;section&gt;, &lt;article&gt;, &lt;header&gt;, etc.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Span Explained */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <span className="text-2xl">📝</span> The Span Element
          </CardTitle>
          <CardDescription className="text-base">
            Generic inline container for styling text
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
            <p className="text-slate-700 dark:text-slate-300 mb-3"><strong>Span characteristics:</strong></p>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>✓ Inline element</li>
              <li>✓ Only takes needed width</li>
              <li>✓ Flows with surrounding text</li>
              <li>✓ Useful for text styling</li>
              <li>✓ Has no semantic meaning</li>
            </ul>
          </div>

          <FrontendCodePreview
            title="Using Span for Text Styling"
            description="See how spans style portions of text"
            html={spanExample.html}
            css={spanExample.css}
            js={spanExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">When to use Span</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Use &lt;span&gt; for styling text when no semantic element fits.
              For emphasis, use &lt;strong&gt; or &lt;em&gt;. For highlighting, use &lt;mark&gt;.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <BookOpen className="w-7 h-7" />
            Side-by-Side Comparison
          </CardTitle>
          <CardDescription className="text-base">
            See the differences clearly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FrontendCodePreview
            title="Div vs Span"
            description="Direct comparison of both elements"
            html={comparisonExample.html}
            css={comparisonExample.css}
            js={comparisonExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Semantic Alternatives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <span className="text-2xl">⭐</span> Prefer Semantic Elements
          </CardTitle>
          <CardDescription className="text-base">
            These are better alternatives to div and span
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>HTML5 introduced semantic elements</strong> that replace generic divs and spans with meaning.
            When possible, always use these instead:
          </p>

          <FrontendCodePreview
            title="Semantic Alternatives"
            description="Replace div and span with meaningful elements"
            html={semanticExample.html}
            css={semanticExample.css}
            js={semanticExample.js}
            colorTheme="blue"
            previewHeight="500px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-700 dark:text-emerald-300">Best Practice</AlertTitle>
            <AlertDescription className="text-emerald-600 dark:text-emerald-400">
              <strong>Check semantic elements first.</strong> Only use div/span when no semantic element matches your content's meaning.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="w-7 h-7" />
            Best Practices & Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Use Div For:</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Layout containers</li>
                <li>✓ Grouping unrelated items</li>
                <li>✓ CSS styling/flexbox layouts</li>
                <li>✓ When no semantic fits</li>
              </ul>
            </div>

            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Use Span For:</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Inline text styling</li>
                <li>✓ Color changes</li>
                <li>✓ Small text formatting</li>
                <li>✓ When no semantic fits</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border-2 border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid:</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Using div for everything</li>
                <li>✗ Ignoring semantic elements</li>
                <li>✗ Span for block content</li>
                <li>✗ Div for text styling</li>
              </ul>
            </div>

            <div className="p-5 bg-blue-50 dark:bg-blue-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-3">💡 Remember:</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Semantic first approach</li>
                <li>✓ Div = block container</li>
                <li>✓ Span = inline styling</li>
                <li>✓ Test in browser DevTools</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


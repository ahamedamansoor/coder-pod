'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Image, Play, Code, CheckCircle, XCircle, Lightbulb, BookOpen, Quote, AlertCircle, Maximize2, Type } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlFigureFigcaptionProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void
}

const basicExample = {
  html: `<h2>Figure & Figcaption Semantic Elements</h2>

<div class="container">
  <!-- Example 1: Simple Image with Caption -->
  <div class="example-section">
    <h3>1. Image with Caption</h3>
    <figure>
      <img 
        src="https://picsum.photos/500/300?image=30"
        alt="A stunning mountain landscape at sunset"
        width="500"
        height="300"
      />
      <figcaption>Fig. 1 - Majestic mountain peaks bathed in golden sunset light, showcasing nature's beauty.</figcaption>
    </figure>
  </div>

  <!-- Example 2: Code Snippet with Figure -->
  <div class="example-section">
    <h3>2. Code Example with Caption</h3>
    <figure>
      <pre><code>function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));</code></pre>
      <figcaption>Fig. 2 - A simple JavaScript function demonstrating template literals and function declaration.</figcaption>
    </figure>
  </div>

  <!-- Example 3: Diagram or Chart -->
  <div class="example-section">
    <h3>3. Diagram with Caption</h3>
    <figure>
      <svg width="500" height="300" viewBox="0 0 500 300">
        <rect x="50" y="50" width="100" height="100" fill="#3b82f6" stroke="#1e293b" stroke-width="2"/>
        <circle cx="300" cy="100" r="50" fill="#10b981" stroke="#1e293b" stroke-width="2"/>
        <polygon points="450,150 400,250 500,250" fill="#f59e0b" stroke="#1e293b" stroke-width="2"/>
        <text x="100" y="105" font-size="14" fill="white" text-anchor="middle">Rectangle</text>
        <text x="300" y="110" font-size="14" fill="white" text-anchor="middle">Circle</text>
        <text x="450" y="170" font-size="14" fill="white" text-anchor="middle">Triangle</text>
      </svg>
      <figcaption>Fig. 3 - Basic geometric shapes: rectangle, circle, and triangle with different colors.</figcaption>
    </figure>
  </div>

  <!-- Example 4: Quote as Figure -->
  <div class="example-section">
    <h3>4. Blockquote with Attribution</h3>
    <figure>
      <blockquote>
        "The only way to do great work is to love what you do." - Steve Jobs
      </blockquote>
      <figcaption>A famous quote about passion and excellence in work.</figcaption>
    </figure>
  </div>

  <!-- Example 5: Multiple Images in Figure -->
  <div class="example-section">
    <h3>5. Related Images with Single Caption</h3>
    <figure>
      <div class="image-grid">
        <img 
          src="https://picsum.photos/400/300?image=40"
          alt="Forest with tall trees"
          width="400"
          height="300"
        />
        <img 
          src="https://picsum.photos/400/300?image=41"
          alt="Desert landscape at sunrise"
          width="400"
          height="300"
        />
      </div>
      <figcaption>Fig. 5 - Contrasting ecosystems: a dense forest and an expansive desert landscape.</figcaption>
    </figure>
  </div>

  <!-- Example 6: Video with Caption -->
  <div class="example-section">
    <h3>6. Video with Caption</h3>
    <figure>
      <video width="500" height="300" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <figcaption>Fig. 6 - A sample video demonstrating the HTML5 video element with controls.</figcaption>
    </figure>
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

h2 {
  color: #1e293b;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.example-section {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3b82f6;
}

@media (prefers-color-scheme: dark) {
  .example-section {
    background: #1e293b;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border-left-color: #60a5fa;
  }
}

.example-section h3 {
  color: #3b82f6;
  margin-top: 0;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  .example-section h3 {
    color: #60a5fa;
  }
}

/* Figure Styling */
figure {
  margin: 0;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s;
}

@media (prefers-color-scheme: dark) {
  figure {
    background: #0f172a;
    border-color: #334155;
  }
}

figure:hover {
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  border-color: #3b82f6;
}

/* Image within figure */
figure img,
figure video {
  width: 100%;
  height: auto;
  border-radius: 6px;
  display: block;
  margin-bottom: 1rem;
}

/* Figcaption Styling */
figcaption {
  font-style: italic;
  font-size: 0.95rem;
  color: #475569;
  text-align: center;
  padding: 0.75rem 0 0;
  border-top: 1px solid #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  figcaption {
    color: #cbd5e1;
    border-top-color: #334155;
  }
}

/* Code in figure */
figure pre {
  background: #1e293b;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 0 0 1rem;
  font-size: 0.85rem;
}

figure code {
  font-family: "Courier New", monospace;
}

/* Quote in figure */
figure blockquote {
  margin: 0 0 1rem;
  padding: 1.5rem;
  background: #eff6ff;
  border-left: 4px solid #3b82f6;
  font-size: 1.1rem;
  font-style: italic;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  figure blockquote {
    background: #1e3a8a;
    color: #e2e8f0;
    border-left-color: #60a5fa;
  }
}

/* SVG in figure */
figure svg {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

/* Grid for multiple images */
.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.image-grid img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin: 0;
}

@media (max-width: 600px) {
  .image-grid {
    grid-template-columns: 1fr;
  }
}`,
  js: ''
};

export default function HtmlFigureFigcaption({ onOpenWebPlayground }: HtmlFigureFigcaptionProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader
        icon={Maximize2}
        category='HTML · Images & Media'
        title='Figure & Figcaption'
        description='Semantic HTML elements for self-contained illustrations with captions'
        colorTheme='blue'
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Maximize2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What are Figure & Figcaption?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Semantic HTML elements for self-contained illustrations and their captions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded border border-blue-200 dark:border-blue-700'>&lt;figure&gt;</code> and <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded border border-blue-200 dark:border-blue-700'>&lt;figcaption&gt;</code> elements are <strong>semantic HTML5</strong> tags that group self-contained content (images, diagrams, code) with their captions. They're perfect for infographics, photos, charts, and other illustrative content that needs explanation.
          </p>
          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Semantic HTML</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              Using semantic elements improves <strong>accessibility</strong>, <strong>SEO</strong>, and <strong>code readability</strong>. Search engines and screen readers better understand your content.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* When to Use */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <BookOpen className='w-7 h-7' />
            When to Use Figure & Figcaption
          </CardTitle>
          <CardDescription className='text-base'>Perfect for self-contained content with explanations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Use Cases */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <CheckCircle className='w-5 h-5' />
                ✅ Perfect For
              </h4>
              <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-600 font-bold mt-0.5'>→</span>
                  <span><strong>Product images</strong> with descriptions</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-600 font-bold mt-0.5'>→</span>
                  <span><strong>Screenshots</strong> with explanations</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-600 font-bold mt-0.5'>→</span>
                  <span><strong>Infographics</strong> and diagrams</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-600 font-bold mt-0.5'>→</span>
                  <span><strong>Code examples</strong> in documentation</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-600 font-bold mt-0.5'>→</span>
                  <span><strong>Charts and graphs</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-600 font-bold mt-0.5'>→</span>
                  <span><strong>Quotes or famous sayings</strong></span>
                </li>
              </ul>
            </div>

            {/* Not For */}
            <div className='bg-rose-50 dark:bg-rose-950/20 p-4 rounded-lg border-2 border-rose-200 dark:border-rose-800'>
              <h4 className='font-semibold text-rose-700 dark:text-rose-300 mb-3 flex items-center gap-2'>
                <XCircle className='w-5 h-5' />
                ❌ Not For
              </h4>
              <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-rose-600 font-bold mt-0.5'>✗</span>
                  <span>Logo or branding images</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-rose-600 font-bold mt-0.5'>✗</span>
                  <span>Images that are part of paragraphs</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-rose-600 font-bold mt-0.5'>✗</span>
                  <span>Decorative or background images</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-rose-600 font-bold mt-0.5'>✗</span>
                  <span>Images needing complex styling</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-rose-600 font-bold mt-0.5'>✗</span>
                  <span>Content in page headers/footers</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-rose-600 font-bold mt-0.5'>✗</span>
                  <span>Images with SEO concerns</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Structure & Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Code className='w-7 h-7' />
            Structure & Syntax
          </CardTitle>
          <CardDescription className='text-base'>How to properly use figure and figcaption together</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
            <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-3'>Basic Syntax</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<figure>
  <!-- Content (image, code, etc) -->
  <img src="image.jpg" alt="Description" />
  
  <!-- Caption -->
  <figcaption>
    This is a caption explaining the figure
  </figcaption>
</figure>`}</code>
            </pre>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Figure Element */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3'>
                <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded text-sm'>&lt;figure&gt;</code>
              </h4>
              <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                  <span><strong>Container</strong> for self-contained content</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                  <span>Can hold <strong>images, code, diagrams, tables</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                  <span>Creates <strong>thematic grouping</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                  <span>Doesn't have to be <strong>inline with text</strong></span>
                </li>
              </ul>
            </div>

            {/* Figcaption Element */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-3'>
                <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded text-sm'>&lt;figcaption&gt;</code>
              </h4>
              <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span><strong>Caption or legend</strong> for the figure</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span>Must be <strong>first or last child</strong> of figure</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span>Can contain <strong>text, links, emphasis</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span>Improves <strong>accessibility and SEO</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <AlertCircle className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertTitle className='text-amber-700 dark:text-amber-300'>Figcaption Position</AlertTitle>
            <AlertDescription className='text-amber-600 dark:text-amber-400'>
              <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded text-sm'>&lt;figcaption&gt;</code> must be the <strong>first or last child</strong> of <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded text-sm'>&lt;figure&gt;</code>. You can't place it in the middle.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Content Types */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Image className='w-7 h-7' />
            Content Types in Figure
          </CardTitle>
          <CardDescription className='text-base'>What can you put inside a figure element?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Images */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2'>
                <Image className='w-4 h-4' />
                Images (Most Common)
              </h4>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-blue-200 dark:border-blue-700 mb-2 overflow-x-auto'>
                {`<figure>
  <img src="photo.jpg" alt="" />
  <figcaption>Photo caption</figcaption>
</figure>`}
              </code>
            </div>

            {/* Code Snippets */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2'>
                <Code className='w-4 h-4' />
                Code Snippets
              </h4>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-purple-200 dark:border-purple-700 mb-2 overflow-x-auto'>
                {`<figure>
  <pre><code>
    // Code here
  </code></pre>
  <figcaption>Code example</figcaption>
</figure>`}
              </code>
            </div>

            {/* Charts & Diagrams */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-2'>
                Charts & Diagrams
              </h4>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-emerald-200 dark:border-emerald-700 mb-2 overflow-x-auto'>
                {`<figure>
  <svg><!-- diagram --></svg>
  <figcaption>Diagram caption</figcaption>
</figure>`}
              </code>
            </div>

            {/* Videos */}
            <div className='bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-800'>
              <h4 className='font-semibold text-orange-700 dark:text-orange-300 mb-2'>
                Videos
              </h4>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-orange-200 dark:border-orange-700 mb-2 overflow-x-auto'>
                {`<figure>
  <video controls>
    <source src="video.mp4">
  </video>
  <figcaption>Video caption</figcaption>
</figure>`}
              </code>
            </div>

            {/* Blockquotes */}
            <div className='bg-pink-50 dark:bg-pink-950/20 p-4 rounded-lg border-2 border-pink-200 dark:border-pink-800'>
              <h4 className='font-semibold text-pink-700 dark:text-pink-300 mb-2'>
                Blockquotes
              </h4>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-pink-200 dark:border-pink-700 mb-2 overflow-x-auto'>
                {`<figure>
  <blockquote>
    A famous quote here
  </blockquote>
  <figcaption>Quote attribution</figcaption>
</figure>`}
              </code>
            </div>

            {/* Tables */}
            <div className='bg-cyan-50 dark:bg-cyan-950/20 p-4 rounded-lg border-2 border-cyan-200 dark:border-cyan-800'>
              <h4 className='font-semibold text-cyan-700 dark:text-cyan-300 mb-2'>
                Tables
              </h4>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-cyan-200 dark:border-cyan-700 mb-2 overflow-x-auto'>
                {`<figure>
  <table>
    <!-- table content -->
  </table>
  <figcaption>Table caption</figcaption>
</figure>`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Examples */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Play className='w-7 h-7' />
            See It in Action
          </CardTitle>
          <CardDescription className='text-base'>Various figure and figcaption examples</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <FrontendCodePreview
            title="Figure & Figcaption Examples"
            description="Different types of content with captions"
            html={basicExample.html}
            css={basicExample.css}
            js={basicExample.js}
            colorTheme="blue"
            previewHeight="900px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Accessibility & SEO Benefits */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Lightbulb className='w-7 h-7' />
            Accessibility & SEO Benefits
          </CardTitle>
          <CardDescription className='text-base'>Why semantic HTML matters</CardDescription>
        </CardHeader>
        <CardContent className='grid md:grid-cols-2 gap-4'>
          {/* Accessibility */}
          <div className='bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border-2 border-green-200 dark:border-green-800'>
            <h4 className='font-semibold text-green-700 dark:text-green-300 mb-3'>♿ Accessibility</h4>
            <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-green-600 flex-shrink-0 mt-0.5' />
                <span><strong>Screen readers</strong> understand the relationship</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-green-600 flex-shrink-0 mt-0.5' />
                <span>Figcaption <strong>describes the content</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-green-600 flex-shrink-0 mt-0.5' />
                <span>Better <strong>semantic meaning</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-green-600 flex-shrink-0 mt-0.5' />
                <span>Users understand <strong>context better</strong></span>
              </li>
            </ul>
          </div>

          {/* SEO */}
          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
            <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-3'>🔍 SEO Benefits</h4>
            <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5' />
                <span><strong>Search engines</strong> better index images</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5' />
                <span>Semantic <strong>HTML improves rankings</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5' />
                <span>Better <strong>image search visibility</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5' />
                <span>Improved <strong>document structure</strong></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <CheckCircle className='w-7 h-7' />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className='grid md:grid-cols-2 gap-4'>
          {/* Do's */}
          <div className='p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700'>
            <h4 className='font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2'>
              <CheckCircle className='w-5 h-5' />
              ✅ Do This
            </h4>
            <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Use for <strong>standalone, reference images</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Include <strong>descriptive figcaption</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Place figcaption at <strong>start or end</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Add <strong>alt text to images</strong> inside</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Use for <strong>numbered references</strong></span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className='p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border-2 border-rose-200 dark:border-rose-700'>
            <h4 className='font-bold text-lg text-rose-600 dark:text-rose-400 mb-3 flex items-center gap-2'>
              <XCircle className='w-5 h-5' />
              ❌ Avoid This
            </h4>
            <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Using for <strong>decorative images</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Placing figcaption in the <strong>middle</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Using <strong>multiple figcaptions</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Skipping <strong>alt text</strong> inside</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Using for <strong>logo or branding</strong></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Styling Examples */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Type className='w-7 h-7' />
            Common CSS Styling
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`/* Style the figure container */
figure {
  margin: 1.5rem auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 100%;
}

/* Style the figcaption */
figcaption {
  font-style: italic;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
}

/* Style images inside figure */
figure img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="🚀 Try It Yourself"
          description="Create your own figure and figcaption examples and experiment with styling!"
          features={[
            'Create figures with images',
            'Add captions and descriptions',
            'Style with CSS',
            'Test accessibility'
          ]}
          buttonText="Open Playground"
          onLaunchPlayground={() => onOpenWebPlayground(basicExample.html, basicExample.css, basicExample.js)}
          playgroundData={basicExample}
          colorTheme="blue"
        />
      )}
    </div>
  );
}


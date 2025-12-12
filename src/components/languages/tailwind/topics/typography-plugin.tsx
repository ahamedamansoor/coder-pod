'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Type, Lightbulb, ArrowRight, BookOpen } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function TypographyPlugin() {

  const proseHTML = `<div class="bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-950 dark:to-gray-950 p-8">
  <article class="prose dark:prose-invert lg:prose-lg max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
    <h1>The Power of Typography</h1>
    <p class="lead">Typography is the art and technique of arranging type to make written language legible, readable, and appealing.</p>
    
    <h2>Why Typography Matters</h2>
    <p>Good typography establishes a strong visual hierarchy, provides a <strong>graphic balance</strong> to the website, and sets the overall tone of the project.</p>
    
    <ul>
      <li>Enhances readability</li>
      <li>Creates visual hierarchy</li>
      <li>Sets the tone and mood</li>
    </ul>
    
    <blockquote>
      <p>"Typography is the craft of endowing human language with a durable visual form."</p>
    </blockquote>
    
    <pre><code>// Beautiful code blocks
const typography = 'amazing';</code></pre>
  </article>
</div>`;

  const proseColorsHTML = `<div class="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 p-8">
  <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    <article class="prose prose-blue max-w-none bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3>Blue Prose</h3>
      <p>This content uses <a href="#">blue colored links</a> and styling.</p>
    </article>
    
    <article class="prose prose-green max-w-none bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3>Green Prose</h3>
      <p>This content uses <a href="#">green colored links</a> and styling.</p>
    </article>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Type}
        category="Tailwind CSS · Typography"
        title="Typography Plugin"
        description="Beautiful prose styling with @tailwindcss/typography"
        colorTheme="slate"
      />

      <Card className="border-2 border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-slate-600 to-gray-700 rounded-xl">
              <Type className="w-8 h-8 text-white" />
            </div>
            What is @tailwindcss/typography?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/20">
            <Lightbulb className="w-5 h-5 text-slate-600" />
            <AlertTitle className="text-slate-900 dark:text-slate-100">Beautiful Prose</AlertTitle>
            <AlertDescription className="text-slate-800 dark:text-slate-200">
              Automatically style HTML content like blog posts, markdown, or any rich text
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Installation:</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
              npm install -D @tailwindcss/typography
            </pre>

            <h3 className="text-lg font-bold mb-3">Configure:</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            Prose Class
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={proseHTML}
            title="Typography Example"
            description="Add prose class for automatic styling"
            colorTheme="slate"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <Type className="w-6 h-6 text-white" />
            </div>
            Color Modifiers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={proseColorsHTML}
            title="Prose Colors"
            description="prose-blue, prose-green, prose-purple, etc."
            colorTheme="indigo"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Prose Modifiers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { class: 'prose', desc: 'Base typography styles' },
              { class: 'prose-sm / prose-lg / prose-xl', desc: 'Size variations' },
              { class: 'prose-slate / prose-gray', desc: 'Color themes' },
              { class: 'prose-invert', desc: 'Dark mode styling' },
              { class: 'max-w-none', desc: 'Remove max-width constraint' },
              { class: 'prose-headings:font-normal', desc: 'Customize specific elements' }
            ].map(item => (
              <div key={item.class} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <code className="font-mono text-sm text-purple-900 dark:text-purple-100 block mb-1">{item.class}</code>
                <p className="text-xs text-purple-700 dark:text-purple-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20">
        <Type className="w-5 h-5 text-slate-600" />
        <AlertTitle className="text-2xl text-slate-900 dark:text-slate-100">Typography Plugin Tips</AlertTitle>
        <AlertDescription className="text-slate-800 dark:text-slate-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded">prose</code> for blog posts and articles</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded">dark:prose-invert</code> for dark mode</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Customize with <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded">prose-headings:</code> modifiers</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for markdown-rendered content</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

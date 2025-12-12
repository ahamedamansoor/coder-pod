'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Code, Lightbulb, ArrowRight, FileCode } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function UsingWithPreprocessors() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Code}
        category="Tailwind CSS · Optimization"
        title="CSS Preprocessors"
        description="Using Tailwind with Sass, Less, and PostCSS"
        colorTheme="rose"
      />

      <Card className="border-2 border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            PostCSS (Recommended)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/20">
            <Lightbulb className="w-5 h-5 text-rose-600" />
            <AlertTitle className="text-rose-900 dark:text-rose-100">Built on PostCSS</AlertTitle>
            <AlertDescription className="text-rose-800 dark:text-rose-200">
              Tailwind is a PostCSS plugin - it works perfectly with the PostCSS ecosystem
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">PostCSS Setup:</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
{`// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <FileCode className="w-6 h-6 text-white" />
            </div>
            Using with Sass/SCSS
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Setup Required</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Process SCSS files through Sass first, then through PostCSS
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Step 1: Install Sass</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
              npm install -D sass
            </pre>

            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Step 2: Import Tailwind in SCSS</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// styles.scss
@tailwind base;
@tailwind components;
@tailwind utilities;

// Your custom SCSS
.custom-class {
  @apply px-4 py-2 bg-blue-500;
  
  &:hover {
    @apply bg-blue-600;
  }
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-amber-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                title: 'Prefer @apply sparingly',
                desc: 'Use utility classes directly in HTML when possible',
                do: 'Good for reusable components',
                dont: 'Avoid for one-off styles'
              },
              {
                title: 'Use @layer directive',
                desc: 'Organize custom CSS in proper layers',
                do: '@layer components { .btn { ... } }',
                dont: 'Direct CSS without layers'
              },
              {
                title: 'Avoid deep nesting',
                desc: 'Keep SCSS nesting shallow for better performance',
                do: '2-3 levels max',
                dont: 'Deep nested selectors'
              }
            ].map((item, i) => (
              <div key={i} className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">{item.title}</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">{item.desc}</p>
                <div className="grid md:grid-cols-2 gap-2 text-xs">
                  <div className="bg-green-100 dark:bg-green-900/30 px-3 py-2 rounded border border-green-300 dark:border-green-700">
                    <span className="font-bold text-green-800 dark:text-green-300">✓ Do:</span>
                    <span className="text-green-700 dark:text-green-400 ml-1">{item.do}</span>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 px-3 py-2 rounded border border-red-300 dark:border-red-700">
                    <span className="font-bold text-red-800 dark:text-red-300">✗ Don't:</span>
                    <span className="text-red-700 dark:text-red-400 ml-1">{item.dont}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            Using @apply
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">Extract common patterns with @apply:</p>
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded;
    @apply hover:bg-blue-600 focus:ring-2 focus:ring-blue-300;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-lg p-6;
    @apply dark:bg-slate-800;
  }
}`}
          </pre>
        </CardContent>
      </Card>

      <Alert className="border-2 border-rose-200 dark:border-rose-800 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20">
        <Code className="w-5 h-5 text-rose-600" />
        <AlertTitle className="text-2xl text-rose-900 dark:text-rose-100">Preprocessor Tips</AlertTitle>
        <AlertDescription className="text-rose-800 dark:text-rose-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>PostCSS is included by default - no setup needed</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-rose-200 dark:bg-rose-900 px-2 py-1 rounded">@apply</code> for component classes, not one-offs</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Organize custom CSS with <code className="bg-rose-200 dark:bg-rose-900 px-2 py-1 rounded">@layer</code> directive</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>SCSS variables and mixins work alongside Tailwind</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

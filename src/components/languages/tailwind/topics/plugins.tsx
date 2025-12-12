'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Puzzle, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Plugins() {

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Puzzle}
        category="Tailwind CSS · Advanced Features"
        title="Plugins"
        description="Extend Tailwind with official and community plugins"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Puzzle className="w-8 h-8 text-white" />
            </div>
            Official Plugins
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">What are Plugins?</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Plugins add new utilities, components, and variants to Tailwind CSS
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            {[
              { name: '@tailwindcss/forms', desc: 'Better default styles for form elements', install: 'npm install @tailwindcss/forms' },
              { name: '@tailwindcss/typography', desc: 'Beautiful typography for blog posts (prose classes)', install: 'npm install @tailwindcss/typography' },
              { name: '@tailwindcss/aspect-ratio', desc: 'Aspect ratio utilities (now built-in v3.1+)', install: 'npm install @tailwindcss/aspect-ratio' },
              { name: '@tailwindcss/container-queries', desc: 'Container query support', install: 'npm install @tailwindcss/container-queries' }
            ].map((plugin, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100">{plugin.name}</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">{plugin.desc}</p>
                <code className="text-xs bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">{plugin.install}</code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Using Plugins
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-cyan-400"><code>{`// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Puzzle className="w-6 h-6 text-white" />
            </div>
            Popular Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Typography Plugin</h4>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">Perfect for blog posts and articles:</p>
              <code className="text-xs bg-green-200 dark:bg-green-900 px-2 py-1 rounded">&lt;article className="prose dark:prose-invert"&gt;...&lt;/article&gt;</code>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Forms Plugin</h4>
              <p className="text-sm text-green-700 dark:text-green-300">Automatic better styling for inputs, checkboxes, radios</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Puzzle className="w-6 h-6 text-white" />
            </div>
            Creating Custom Plugins
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-amber-400"><code>{`// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          'text-shadow': '4px 4px 8px rgba(0,0,0,0.2)',
        },
      });
    }),
  ],
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <Puzzle className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Plugin Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always install official plugins for best compatibility</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Check <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">@tailwindcss/*</code> packages first</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Create custom plugins only when needed</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Code, Lightbulb, ArrowRight, Download } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function VscodeExtensions() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Code}
        category="Tailwind CSS · Tooling"
        title="VSCode Extensions"
        description="Essential extensions for Tailwind development"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            VSCode Extensions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Boost Your Productivity</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Essential extensions for better Tailwind development experience
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <Download className="w-6 h-6 text-white" />
            </div>
            Essential Extensions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: 'Tailwind CSS IntelliSense',
                author: 'Tailwind Labs',
                features: ['Autocomplete', 'Linting', 'Hover preview', 'Syntax highlighting'],
                must: true
              },
              {
                name: 'Prettier - Code formatter',
                author: 'Prettier',
                features: ['Code formatting', 'Auto-format on save', 'Works with Tailwind plugin'],
                must: true
              },
              {
                name: 'Prettier Plugin Tailwind',
                author: 'Tailwind Labs',
                features: ['Auto-sort classes', 'Consistent ordering', 'Team collaboration'],
                must: true
              },
              {
                name: 'Headwind',
                author: 'Ryan Heybourn',
                features: ['Class sorting', 'Custom order', 'Keyboard shortcuts'],
                must: false
              }
            ].map((ext, i) => (
              <div key={i} className="bg-indigo-50 dark:bg-indigo-950/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-indigo-900 dark:text-indigo-100">{ext.name}</h4>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400">by {ext.author}</p>
                  </div>
                  {ext.must && (
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded font-bold">
                      MUST HAVE
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {ext.features.map((feature, j) => (
                    <span key={j} className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Tailwind CSS IntelliSense Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                feature: 'Autocomplete',
                desc: 'Class suggestions as you type',
                example: 'Type "bg-" → See all background colors'
              },
              {
                feature: 'Hover Preview',
                desc: 'See CSS when hovering classes',
                example: 'Hover "mt-4" → See margin-top: 1rem'
              },
              {
                feature: 'Linting',
                desc: 'Warnings for invalid classes',
                example: 'Squiggly lines under typos'
              },
              {
                feature: 'Color Preview',
                desc: 'Visual color swatches',
                example: 'See blue-500 color inline'
              }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 text-sm mb-1">{item.feature}</h4>
                <p className="text-xs text-purple-700 dark:text-purple-300 mb-1">{item.desc}</p>
                <p className="text-xs text-purple-600 dark:text-purple-400">→ {item.example}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            Setup & Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Install Extension:</h4>
            <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>1. Open VSCode Extensions (Ctrl+Shift+X)</li>
              <li>2. Search "Tailwind CSS IntelliSense"</li>
              <li>3. Click Install</li>
              <li>4. Reload VSCode</li>
            </ol>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">VSCode Settings:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-xs overflow-x-auto">
{`{
  "editor.quickSuggestions": {
    "strings": true
  },
  "tailwindCSS.emmetCompletions": true,
  "files.associations": {
    "*.css": "tailwindcss"
  }
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-yellow-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Productivity Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { tip: 'Use Autocomplete', shortcut: 'Ctrl+Space', desc: 'Trigger suggestions manually' },
              { tip: 'Hover for CSS', shortcut: 'Hover', desc: 'See exact CSS values' },
              { tip: 'Go to Definition', shortcut: 'F12', desc: 'Jump to config definition' },
              { tip: 'Format on Save', shortcut: 'Auto', desc: 'Enable in settings' }
            ].map((item, i) => (
              <div key={i} className="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800 flex items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-yellow-900 dark:text-yellow-100 text-sm">{item.tip}</h4>
                    <kbd className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 rounded text-xs text-yellow-700 dark:text-yellow-300">
                      {item.shortcut}
                    </kbd>
                  </div>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <Code className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Extension Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Tailwind CSS IntelliSense is essential - install it first</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with Prettier plugin for auto-sorting</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Enable format on save for automatic formatting</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Hover over classes to see their CSS values</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

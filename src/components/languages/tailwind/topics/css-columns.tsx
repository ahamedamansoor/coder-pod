'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Columns, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function CssColumns() {

  const columnsHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="max-w-4xl mx-auto space-y-8">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">3-Column Layout</h3>
      <div class="columns-3 gap-8 text-gray-700 dark:text-gray-300 text-justify">
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <p class="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Responsive Columns (md:columns-2)</h3>
      <div class="columns-1 md:columns-2 gap-6 text-gray-700 dark:text-gray-300">
        <div class="mb-4 break-inside-avoid bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-bold text-green-900 dark:text-green-100 mb-2">Card 1</h4>
          <p class="text-sm">This card won't be split across columns</p>
        </div>
        <div class="mb-4 break-inside-avoid bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Card 2</h4>
          <p class="text-sm">break-inside-avoid prevents breaking</p>
        </div>
        <div class="mb-4 break-inside-avoid bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
          <h4 class="font-bold text-teal-900 dark:text-teal-100 mb-2">Card 3</h4>
          <p class="text-sm">Perfect for masonry layouts</p>
        </div>
        <div class="mb-4 break-inside-avoid bg-cyan-50 dark:bg-cyan-950/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-100 mb-2">Card 4</h4>
          <p class="text-sm">Flows naturally into columns</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Columns}
        category="Tailwind CSS · Modern CSS"
        title="Multi-Column Layout"
        description="Multi-column text layouts with CSS columns"
        colorTheme="green"
      />

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
              <Columns className="w-8 h-8 text-white" />
            </div>
            CSS Columns
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Lightbulb className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Magazine-Style Layouts</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Create newspaper and magazine-style multi-column text layouts
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={columnsHTML}
            title="Column Examples"
            description="Multi-column text and card layouts"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-emerald-500 rounded-lg">
              <Columns className="w-6 h-6 text-white" />
            </div>
            Column Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { util: 'columns-1', desc: 'Single column', count: '1 column' },
              { util: 'columns-2', desc: 'Two columns', count: '2 columns' },
              { util: 'columns-3', desc: 'Three columns', count: '3 columns' },
              { util: 'columns-4', desc: 'Four columns', count: '4 columns' },
              { util: 'columns-auto', desc: 'Auto column count', count: 'Automatic' },
              { util: 'columns-3xs', desc: 'Minimum 16rem columns', count: 'Min 16rem' },
              { util: 'columns-2xs', desc: 'Minimum 18rem columns', count: 'Min 18rem' },
              { util: 'columns-xs', desc: 'Minimum 20rem columns', count: 'Min 20rem' }
            ].map((item, i) => (
              <div key={i} className="bg-emerald-50 dark:bg-emerald-950/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
                <code className="font-mono text-sm text-emerald-900 dark:text-emerald-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 mb-1">{item.desc}</p>
                <span className="text-xs bg-emerald-100 dark:bg-emerald-900 px-2 py-1 rounded text-emerald-800 dark:text-emerald-200">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-teal-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Break & Gap Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { util: 'gap-{size}', desc: 'Space between columns', example: 'gap-8' },
              { util: 'break-inside-avoid', desc: 'Prevent breaking element', example: 'On cards/images' },
              { util: 'break-before-column', desc: 'Force break before', example: 'Start new column' },
              { util: 'break-after-column', desc: 'Force break after', example: 'End column' }
            ].map((item, i) => (
              <div key={i} className="bg-teal-50 dark:bg-teal-950/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800 flex items-center justify-between">
                <div>
                  <code className="text-sm bg-teal-100 dark:bg-teal-900 px-2 py-1 rounded text-teal-900 dark:text-teal-100 font-mono font-bold">
                    {item.util}
                  </code>
                  <p className="text-xs text-teal-700 dark:text-teal-300 mt-1">{item.desc}</p>
                </div>
                <span className="text-xs text-teal-600 dark:text-teal-400">{item.example}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { use: 'Blog Articles', desc: 'Magazine-style text', icon: '📰' },
              { use: 'Card Layouts', desc: 'Masonry-style grids', icon: '🎴' },
              { use: 'Lists', desc: 'Multi-column lists', icon: '📋' },
              { use: 'Galleries', desc: 'Image galleries', icon: '🖼️' }
            ].map((item, i) => (
              <div key={i} className="bg-cyan-50 dark:bg-cyan-950/20 rounded-lg p-3 border border-cyan-200 dark:border-cyan-800">
                <div className="text-2xl mb-1">{item.icon}</div>
                <h4 className="font-bold text-cyan-900 dark:text-cyan-100 text-sm mb-1">{item.use}</h4>
                <p className="text-xs text-cyan-700 dark:text-cyan-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <Columns className="w-5 h-5 text-green-600" />
        <AlertTitle className="text-2xl text-green-900 dark:text-green-100">Multi-Column Tips</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">break-inside-avoid</code> on cards to prevent splitting</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Responsive columns: <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">columns-1 md:columns-2 lg:columns-3</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Adjust gap: <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">gap-8</code> for spacing between columns</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Great alternative to CSS Grid for flowing content</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

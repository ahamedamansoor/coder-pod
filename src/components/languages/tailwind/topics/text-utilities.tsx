'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Type, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function TextUtilities() {

  const textHTML = `<div class="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 p-8">
  <div class="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 space-y-6">
    <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Text Utilities Demo</h2>
    
    <div class="space-y-4">
      <p class="text-gray-900 dark:text-white font-bold">Bold text</p>
      <p class="text-gray-700 dark:text-gray-300 italic">Italic text</p>
      <p class="text-gray-700 dark:text-gray-300 underline">Underlined text</p>
      <p class="text-gray-700 dark:text-gray-300 line-through">Strikethrough text</p>
      <p class="text-gray-700 dark:text-gray-300 uppercase">uppercase text</p>
      <p class="text-gray-700 dark:text-gray-300 lowercase">LOWERCASE TEXT</p>
      <p class="text-gray-700 dark:text-gray-300 capitalize">capitalize each word</p>
    </div>
    
    <div class="space-y-2">
      <p class="text-sm text-gray-600 dark:text-gray-400">Small text (text-sm)</p>
      <p class="text-base text-gray-700 dark:text-gray-300">Base text (text-base)</p>
      <p class="text-lg text-gray-800 dark:text-gray-200">Large text (text-lg)</p>
      <p class="text-2xl text-gray-900 dark:text-white">2XL text (text-2xl)</p>
    </div>
    
    <div class="w-64 space-y-2">
      <p class="text-gray-700 dark:text-gray-300 truncate">This text will be truncated with ellipsis if it's too long</p>
      <p class="text-gray-700 dark:text-gray-300 text-ellipsis overflow-hidden">Ellipsis overflow handling for long content</p>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Type}
        category="Tailwind CSS · Typography"
        title="Text Utilities"
        description="Text color, decoration, transform, and styling"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
              <Type className="w-8 h-8 text-white" />
            </div>
            Text Styling
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/20">
            <Lightbulb className="w-5 h-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Comprehensive Text Control</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Tailwind provides utilities for all text styling needs
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={textHTML}
            title="Text Utilities"
            description="Various text styling options"
            colorTheme="indigo"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Type className="w-6 h-6 text-white" />
            </div>
            Text Utility Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { 
                category: 'Font Weight',
                utilities: ['font-thin', 'font-normal', 'font-bold', 'font-black'],
                example: 'font-bold'
              },
              { 
                category: 'Font Style',
                utilities: ['italic', 'not-italic'],
                example: 'italic'
              },
              { 
                category: 'Text Decoration',
                utilities: ['underline', 'line-through', 'no-underline'],
                example: 'underline'
              },
              { 
                category: 'Text Transform',
                utilities: ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
                example: 'uppercase'
              },
              { 
                category: 'Text Alignment',
                utilities: ['text-left', 'text-center', 'text-right', 'text-justify'],
                example: 'text-center'
              },
              { 
                category: 'Text Overflow',
                utilities: ['truncate', 'text-ellipsis', 'text-clip'],
                example: 'truncate'
              },
              { 
                category: 'Vertical Align',
                utilities: ['align-baseline', 'align-top', 'align-middle', 'align-bottom'],
                example: 'align-middle'
              },
              { 
                category: 'Whitespace',
                utilities: ['whitespace-normal', 'whitespace-nowrap', 'whitespace-pre'],
                example: 'whitespace-nowrap'
              }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">{item.category}</h4>
                <div className="space-y-1 mb-3">
                  {item.utilities.map((util, j) => (
                    <code key={j} className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-800 dark:text-purple-200 block">
                      {util}
                    </code>
                  ))}
                </div>
                <div className="text-xs text-purple-700 dark:text-purple-300">
                  Example: <code className="bg-purple-200 dark:bg-purple-900 px-1.5 py-0.5 rounded">{item.example}</code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Text Color
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">Use text-{'{color}'}-{'{shade}'} for text colors:</p>
          <div className="flex flex-wrap gap-2">
            {['gray', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'].map((color) => (
              <div key={color} className={`text-${color}-600 dark:text-${color}-400 px-3 py-2 bg-${color}-50 dark:bg-${color}-950/20 rounded-lg border border-${color}-200 dark:border-${color}-800 text-sm font-medium`}>
                text-{color}-600
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <Type className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-2xl text-indigo-900 dark:text-indigo-100">Text Utility Tips</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">truncate</code> for single-line ellipsis</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine utilities: <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">text-lg font-bold text-blue-600</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">line-clamp-{'{n}'}</code> for multi-line truncation (requires @tailwindcss/line-clamp)</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

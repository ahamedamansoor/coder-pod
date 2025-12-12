'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { MousePointer2, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Buttons() {

  const buttonsHTML = `<div class="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 p-8">
  <div class="flex flex-wrap gap-4 justify-center">
    <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition">Primary</button>
    <button class="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">Secondary</button>
    <button class="px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition">Outline</button>
    <button class="px-6 py-2 text-blue-600 dark:text-blue-400 hover:underline transition">Ghost</button>
  </div>
</div>`;

  const sizesHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="flex flex-wrap items-center gap-4 justify-center">
    <button class="px-3 py-1 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 transition">Small</button>
    <button class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">Medium</button>
    <button class="px-8 py-3 text-lg bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">Large</button>
    <button class="px-10 py-4 text-xl font-bold bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">Extra Large</button>
  </div>
</div>`;

  const colorHTML = `<div class="bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-950 dark:to-slate-950 p-8">
  <div class="flex flex-wrap gap-4 justify-center">
    <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Blue</button>
    <button class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Success</button>
    <button class="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">Warning</button>
    <button class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">Danger</button>
    <button class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">Purple</button>
  </div>
</div>`;

  const statesHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="flex flex-wrap gap-4 justify-center">
    <button class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Normal</button>
    <button class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition">Focus Ring</button>
    <button disabled class="px-6 py-2 bg-gray-400 text-gray-200 rounded-lg cursor-not-allowed opacity-60">Disabled</button>
    <button class="px-6 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2 hover:bg-green-700 transition">
      <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      Loading...
    </button>
  </div>
</div>`;

  const iconHTML = `<div class="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 p-8">
  <div class="flex flex-wrap gap-4 justify-center">
    <button class="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2 transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
      Add Item
    </button>
    <button class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2 transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
      Delete
    </button>
    <button class="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    </button>
  </div>
</div>`;

  const groupHTML = `<div class="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-950 dark:to-rose-950 p-8">
  <div class="flex flex-col items-center gap-6">
    <div class="inline-flex rounded-lg shadow-sm">
      <button class="px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-l-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition">Left</button>
      <button class="px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-t border-b border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-700 transition">Center</button>
      <button class="px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-r-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition">Right</button>
    </div>
    
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">Save</button>
      <button class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">Cancel</button>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={MousePointer2}
        category="Tailwind CSS · Forms & UI Components"
        title="Button Patterns"
        description="Creating beautiful, interactive buttons with Tailwind"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
              <MousePointer2 className="w-8 h-8 text-white" />
            </div>
            Button Variants
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interactive States</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Always include <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">hover:</code>, <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">active:</code>, and <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">transition</code>
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={buttonsHTML}
            title="Button Styles"
            description="Primary, secondary, outline, and ghost variants"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <MousePointer2 className="w-6 h-6 text-white" />
            </div>
            Button Sizes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={sizesHTML}
            title="Size Variants"
            description="From small to extra large buttons"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gray-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Color Variants
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={colorHTML}
            title="Semantic Colors"
            description="Success, warning, danger, and more"
            colorTheme="gray"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <MousePointer2 className="w-6 h-6 text-white" />
            </div>
            Button States
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={statesHTML}
            title="Interactive States"
            description="Normal, focus, disabled, and loading states"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <MousePointer2 className="w-6 h-6 text-white" />
            </div>
            Icon Buttons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={iconHTML}
            title="Buttons with Icons"
            description="Add visual context with SVG icons"
            colorTheme="indigo"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <MousePointer2 className="w-6 h-6 text-white" />
            </div>
            Button Groups
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={groupHTML}
            title="Grouped Buttons"
            description="Connected button groups and action pairs"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <MousePointer2 className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Button Best Practices</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always add <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">transition</code> for smooth hover effects</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">disabled</code> attribute with <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">cursor-not-allowed opacity-60</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add focus rings for accessibility: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">focus:ring-4</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use semantic colors: green for success, red for destructive actions</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

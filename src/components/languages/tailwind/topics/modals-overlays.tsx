'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ModalsOverlays() {

  const modalHTML = `<div class="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 p-8 min-h-screen flex items-center justify-center">
  <!-- Overlay -->
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>
  
  <!-- Modal -->
  <div class="relative z-10 bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-md w-full mx-4 p-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">Modal Title</h3>
      <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mb-6">This is a modal dialog with an overlay background and backdrop blur effect.</p>
    <div class="flex gap-3 justify-end">
      <button class="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">Cancel</button>
      <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Confirm</button>
    </div>
  </div>
</div>`;

  const tooltipHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8 flex items-center justify-center min-h-[300px]">
  <div class="relative group">
    <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
      Hover for tooltip
    </button>
    <!-- Tooltip -->
    <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
      This is a tooltip!
      <div class="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
        <div class="border-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="Tailwind CSS · Forms & UI Components"
        title="Modals & Overlays"
        description="Creating modals, tooltips, and overlay components"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            Modal Dialog
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/20">
            <Lightbulb className="w-5 h-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Key Components</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Modal = Overlay + Content + Positioning + Animation
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={modalHTML}
            title="Modal with Overlay"
            description="Centered modal with backdrop blur"
            colorTheme="indigo"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Layers className="w-6 h-6 text-white" />
            </div>
            Tooltip
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={tooltipHTML}
            title="Hover Tooltip"
            description="Simple CSS-only tooltip"
            colorTheme="blue"
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
            Modal Building Blocks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { class: 'fixed inset-0', desc: 'Full-screen overlay' },
              { class: 'bg-black/50', desc: 'Semi-transparent background' },
              { class: 'backdrop-blur-sm', desc: 'Blur effect behind modal' },
              { class: 'z-50', desc: 'Ensure modal is on top' },
              { class: 'flex items-center justify-center', desc: 'Center the modal content' }
            ].map(item => (
              <div key={item.class} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <code className="font-mono text-sm text-purple-900 dark:text-purple-100">{item.class}</code>
                <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <Layers className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-2xl text-indigo-900 dark:text-indigo-100">Modal Tips</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">fixed</code> for overlay positioning</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">backdrop-blur-sm</code> for modern glass effect</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Consider using Headless UI for accessible modals with JavaScript</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

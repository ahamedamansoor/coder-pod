'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { FileInput, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function FormStyling() {

  const inputsHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="max-w-md mx-auto space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
      <input type="email" placeholder="you@example.com" 
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
      <textarea rows="3" placeholder="Your message..." 
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"></textarea>
    </div>
  </div>
</div>`;

  const checkboxHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="max-w-md mx-auto space-y-4">
    <div class="flex items-center gap-2">
      <input type="checkbox" id="check1" class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" checked />
      <label for="check1" class="text-gray-700 dark:text-gray-300">Remember me</label>
    </div>
    <div class="flex items-center gap-2">
      <input type="radio" id="radio1" name="option" class="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500" checked />
      <label for="radio1" class="text-gray-700 dark:text-gray-300">Option 1</label>
    </div>
    <div class="flex items-center gap-2">
      <input type="radio" id="radio2" name="option" class="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500" />
      <label for="radio2" class="text-gray-700 dark:text-gray-300">Option 2</label>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={FileInput}
        category="Tailwind CSS · Forms & UI Components"
        title="Form Styling"
        description="Beautiful form inputs with Tailwind utilities"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <FileInput className="w-8 h-8 text-white" />
            </div>
            Text Inputs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Focus States</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Always style focus states with <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">focus:ring-2</code> for accessibility
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={inputsHTML}
            title="Input Fields"
            description="Styled text inputs and textareas"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <FileInput className="w-6 h-6 text-white" />
            </div>
            Checkboxes & Radio Buttons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={checkboxHTML}
            title="Selection Inputs"
            description="Styled checkboxes and radio buttons"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <FileInput className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Form Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">@tailwindcss/forms</code> plugin for better defaults</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always include focus states for keyboard accessibility</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Dark mode: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">dark:bg-slate-800 dark:border-gray-600</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

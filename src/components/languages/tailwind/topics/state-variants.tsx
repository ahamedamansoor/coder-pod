'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { CheckSquare, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function StateVariants() {

  const stateHTML = `<div class="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 p-8">
  <div class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 space-y-4">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Form State Variants</h3>
    
    <input type="text" required placeholder="Required field" class="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg invalid:border-red-500 dark:bg-slate-900 dark:text-white"/>
    
    <input type="email" placeholder="Valid email" class="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg valid:border-green-500 dark:bg-slate-900 dark:text-white"/>
    
    <input type="text" disabled value="Disabled input" class="block w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-800"/>
    
    <div class="flex items-center gap-2">
      <input type="checkbox" id="check1" class="w-4 h-4 checked:bg-indigo-600"/>
      <label for="check1" class="text-gray-700 dark:text-gray-300">Checkbox checked state</label>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={CheckSquare}
        category="Tailwind CSS · Advanced Patterns"
        title="State Variants"
        description="Form state styling with Tailwind"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
              <CheckSquare className="w-8 h-8 text-white" />
            </div>
            Form State Styling
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/20">
            <Lightbulb className="w-5 h-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">State Variants</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Style elements based on their state: checked, disabled, required, invalid, etc.
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={stateHTML}
            title="State Examples"
            description="Interactive form states with Tailwind"
            colorTheme="indigo"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <CheckSquare className="w-6 h-6 text-white" />
            </div>
            Available State Variants
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { variant: 'checked:', desc: 'Checkbox/radio checked state' },
              { variant: 'disabled:', desc: 'Disabled form elements' },
              { variant: 'required:', desc: 'Required form fields' },
              { variant: 'invalid:', desc: 'Invalid form validation' },
              { variant: 'valid:', desc: 'Valid form validation' },
              { variant: 'focus:', desc: 'Element has focus' },
              { variant: 'focus-within:', desc: 'Child has focus' },
              { variant: 'enabled:', desc: 'Enabled form elements' }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <code className="font-mono text-sm text-purple-900 dark:text-purple-100 font-bold">{item.variant}</code>
                <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <CheckSquare className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-2xl text-indigo-900 dark:text-indigo-100">State Tips</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">invalid:</code> for form validation styling</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with peer: <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">peer-checked:bg-blue-500</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Works with group for parent-child patterns</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

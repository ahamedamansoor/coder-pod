'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { FileInput, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function FormsStyling() {

  const inputHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="max-w-md mx-auto space-y-4">
    <input 
      type="text" 
      placeholder="Text input"
      class="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition"
    />
    
    <input 
      type="email" 
      placeholder="Email input"
      class="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition"
    />
    
    <textarea 
      placeholder="Textarea"
      rows="3"
      class="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 outline-none transition resize-none"
    ></textarea>
  </div>
</div>`;

  const selectHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="max-w-md mx-auto space-y-4">
    <select class="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition">
      <option>Select an option</option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
    
    <div class="flex items-center gap-3">
      <input 
        type="checkbox" 
        id="check1"
        class="w-5 h-5 text-purple-600 border-gray-300 dark:border-gray-600 rounded focus:ring-purple-500"
      />
      <label for="check1" class="text-gray-700 dark:text-gray-300">Checkbox option</label>
    </div>
    
    <div class="flex items-center gap-3">
      <input 
        type="radio" 
        name="radio"
        id="radio1"
        class="w-5 h-5 text-purple-600 border-gray-300 dark:border-gray-600 focus:ring-purple-500"
      />
      <label for="radio1" class="text-gray-700 dark:text-gray-300">Radio option</label>
    </div>
  </div>
</div>`;

  const formHTML = `<div class="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Form</h2>
  
  <form class="space-y-4">
    <div>
      <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Name
      </label>
      <input 
        type="text"
        placeholder="John Doe"
        class="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition"
      />
    </div>
    
    <div>
      <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Email
      </label>
      <input 
        type="email"
        placeholder="john@example.com"
        class="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition"
      />
    </div>
    
    <div>
      <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Message
      </label>
      <textarea 
        rows="4"
        placeholder="Your message..."
        class="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition resize-none"
      ></textarea>
    </div>
    
    <button 
      type="submit"
      class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
    >
      Send Message
    </button>
  </form>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={FileInput}
        category="Tailwind CSS · Forms & UI"
        title="Forms Styling"
        description="Style beautiful, accessible form elements"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <FileInput className="w-8 h-8 text-white" />
            </div>
            Input Fields
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Focus States</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Always add <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">focus:ring</code> and 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">focus:border</code> for better UX
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={inputHTML}
            title="Text Inputs"
            description="Styled with focus states"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Selects & Checkboxes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={selectHTML}
            title="Form Controls"
            description="Dropdowns, checkboxes, and radios"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Complete Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={formHTML}
            title="Contact Form"
            description="Full form with dark mode"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <FileInput className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Form Styling Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">@tailwindcss/forms</code> plugin for better defaults</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always include focus states for accessibility</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">outline-none</code> when using custom focus styles</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

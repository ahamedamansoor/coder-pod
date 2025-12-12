'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Moon, CheckCircle, Lightbulb, ArrowRight, Sun } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function DarkMode() {

  const basicHTML = `<div class="bg-white dark:bg-slate-900 p-8 rounded-xl">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    Dark Mode Text
  </h2>
  <p class="text-gray-600 dark:text-gray-300 mb-4">
    This text adapts to dark mode automatically!
  </p>
  <button class="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
    Adaptive Button
  </button>
</div>`;

  const colorsHTML = `<div class="bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-900 dark:to-slate-900 p-8 rounded-xl">
  <div class="grid md:grid-cols-3 gap-4">
    <div class="bg-white dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 class="font-bold text-gray-900 dark:text-white mb-2">Card 1</h3>
      <p class="text-gray-600 dark:text-gray-400">Dark mode colors</p>
    </div>
    
    <div class="bg-blue-500 dark:bg-blue-600 p-6 rounded-lg">
      <h3 class="font-bold text-white mb-2">Card 2</h3>
      <p class="text-blue-100 dark:text-blue-200">Lighter in dark mode</p>
    </div>
    
    <div class="bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 p-6 rounded-lg">
      <h3 class="font-bold text-white mb-2">Card 3</h3>
      <p class="text-purple-100">Gradient adapts</p>
    </div>
  </div>
</div>`;

  const formsHTML = `<div class="bg-white dark:bg-slate-900 p-8 rounded-xl">
  <form class="space-y-4 max-w-md mx-auto">
    <div>
      <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Email
      </label>
      <input 
        type="email" 
        placeholder="your@email.com"
        class="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition"
      />
    </div>
    
    <div>
      <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Message
      </label>
      <textarea 
        placeholder="Your message..."
        rows="4"
        class="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition"
      ></textarea>
    </div>
    
    <button class="w-full bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
      Submit
    </button>
  </form>
</div>`;

  const cardHTML = `<div class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden">
  <!-- Header -->
  <div class="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 p-6">
    <h2 class="text-2xl font-bold text-white mb-1">Dark Mode Card</h2>
    <p class="text-blue-100">Fully adaptive design</p>
  </div>
  
  <!-- Content -->
  <div class="p-6">
    <div class="flex items-center gap-4 mb-6">
      <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full"></div>
      <div>
        <h3 class="font-bold text-gray-900 dark:text-white">John Doe</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Software Developer</p>
      </div>
    </div>
    
    <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
      This card demonstrates comprehensive dark mode styling with proper color contrast and visual hierarchy.
    </p>
    
    <div class="flex gap-3">
      <button class="flex-1 bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
        Connect
      </button>
      <button class="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-2 rounded-lg font-semibold transition">
        Message
      </button>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Moon}
        category="Tailwind CSS · Advanced Features"
        title="Dark Mode"
        description="Build beautiful dark mode interfaces"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl">
              <Moon className="w-8 h-8 text-white" />
            </div>
            Dark Mode Basics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Dark Mode Syntax</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Add <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">dark:</code> prefix before any utility: 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">dark:bg-slate-900</code>, 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">dark:text-white</code>
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Common Dark Mode Patterns:</h3>
            <div className="space-y-2 text-sm">
              {[
                { light: 'bg-white', dark: 'dark:bg-slate-900', use: 'Main background' },
                { light: 'text-gray-900', dark: 'dark:text-white', use: 'Primary text' },
                { light: 'text-gray-600', dark: 'dark:text-gray-400', use: 'Secondary text' },
                { light: 'bg-gray-100', dark: 'dark:bg-slate-800', use: 'Cards/panels' },
                { light: 'border-gray-200', dark: 'dark:border-gray-700', use: 'Borders' }
              ].map((item, i) => (
                <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                  <div className="flex flex-wrap gap-2 mb-1">
                    <code className="text-xs font-mono bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">{item.light}</code>
                    <code className="text-xs font-mono bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">{item.dark}</code>
                  </div>
                  <p className="text-xs text-purple-700 dark:text-purple-300">{item.use}</p>
                </div>
              ))}
            </div>
          </div>

          <FrontendCodePreview
            html={basicHTML}
            title="Basic Dark Mode"
            description="Text and buttons adapt automatically"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Sun className="w-6 h-6 text-white" />
            </div>
            Dark Mode Colors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={colorsHTML}
            title="Adaptive Colors"
            description="Different colors for dark mode"
            colorTheme="blue"
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
            Dark Mode Forms
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={formsHTML}
            title="Form Elements"
            description="Inputs styled for both modes"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Complete Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cardHTML}
            title="Profile Card"
            description="Fully styled for dark mode"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <Moon className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Dark Mode Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">bg-white dark:bg-slate-900</code> for backgrounds</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Gray shades: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">text-gray-600 dark:text-gray-400</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test in both modes during development!</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

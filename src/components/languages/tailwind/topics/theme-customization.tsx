'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Palette, Lightbulb, ArrowRight, Settings } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ThemeCustomization() {

  const customThemeHTML = `<div class="bg-gradient-to-r from-brand-light to-brand-dark p-8">
  <div class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-luxury p-6">
    <h3 class="text-2xl font-display text-gray-900 dark:text-white mb-4">Custom Theme</h3>
    <p class="text-gray-600 dark:text-gray-400 mb-6">Using custom colors, fonts, and spacing from config</p>
    <button class="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl shadow-luxury transition">
      Brand Button
    </button>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Palette}
        category="Tailwind CSS · Design Systems"
        title="Theme Customization"
        description="Extending and customizing Tailwind's default theme"
        colorTheme="violet"
      />

      <Card className="border-2 border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
              <Palette className="w-8 h-8 text-white" />
            </div>
            Customizing Your Theme
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/20">
            <Lightbulb className="w-5 h-5 text-violet-600" />
            <AlertTitle className="text-violet-900 dark:text-violet-100">Extend vs Override</AlertTitle>
            <AlertDescription className="text-violet-800 dark:text-violet-200">
              Use <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">extend</code> to add to defaults, or replace entirely
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">tailwind.config.js:</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5B21B6',
          secondary: '#7C3AED',
          light: '#A78BFA',
          dark: '#4C1D95',
        }
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(0,0,0,0.15)',
      }
    }
  }
}`}
            </pre>
          </div>

          <FrontendCodePreview
            html={customThemeHTML}
            title="Custom Theme in Action"
            description="Using brand colors and custom utilities"
            colorTheme="violet"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Settings className="w-6 h-6 text-white" />
            </div>
            Common Customizations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                category: 'Colors',
                example: 'colors: { brand: {...} }',
                usage: 'bg-brand-primary'
              },
              {
                category: 'Fonts',
                example: 'fontFamily: { display: [...] }',
                usage: 'font-display'
              },
              {
                category: 'Spacing',
                example: 'spacing: { 128: "32rem" }',
                usage: 'p-128'
              },
              {
                category: 'Breakpoints',
                example: 'screens: { tablet: "640px" }',
                usage: 'tablet:flex'
              },
              {
                category: 'Border Radius',
                example: 'borderRadius: { xl2: "1.5rem" }',
                usage: 'rounded-xl2'
              },
              {
                category: 'Shadows',
                example: 'boxShadow: { luxury: "..." }',
                usage: 'shadow-luxury'
              }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-purple-900 dark:text-purple-100">{item.category}</h4>
                  <code className="text-xs bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded text-purple-800 dark:text-purple-200">
                    {item.usage}
                  </code>
                </div>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-700 dark:text-purple-300 block">
                  {item.example}
                </code>
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
            Extend vs Replace
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ Extend (Recommended)</h4>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
{`theme: {
  extend: {
    colors: {
      brand: '#5B21B6'
    }
  }
}`}
              </pre>
              <p className="text-xs text-green-700 dark:text-green-300 mt-2">Keeps all default colors + adds brand</p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">⚠️ Replace (Use Carefully)</h4>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
{`theme: {
  colors: {
    brand: '#5B21B6'
  }
}`}
              </pre>
              <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">Removes all default colors!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20">
        <Palette className="w-5 h-5 text-violet-600" />
        <AlertTitle className="text-2xl text-violet-900 dark:text-violet-100">Customization Tips</AlertTitle>
        <AlertDescription className="text-violet-800 dark:text-violet-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always use <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">extend</code> unless you need to replace</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Create semantic color names: <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">brand-primary</code> not <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">purple-500</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use CSS variables for values that change: <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">colors: {'{ primary: "var(--primary)" }'}</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test your config: run build to verify customizations work</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

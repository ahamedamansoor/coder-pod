'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Settings, CheckCircle, Lightbulb, ArrowRight, Code } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Configuration() {

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Settings}
        category="Tailwind CSS · Fundamentals"
        title="Configuration"
        description="Customize Tailwind with tailwind.config.js"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Settings className="w-8 h-8 text-white" />
            </div>
            Config File Basics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">tailwind.config.js</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Customize colors, spacing, fonts, breakpoints, and more in your config file
            </AlertDescription>
          </Alert>

          <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400"><code>{`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#3b82f6',
      },
    },
  },
  plugins: [],
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            Custom Colors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-cyan-400"><code>{`theme: {
  extend: {
    colors: {
      'primary': '#3b82f6',
      'secondary': '#8b5cf6',
      'brand': {
        50: '#eff6ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      }
    }
  }
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Key Config Options
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { option: 'content', desc: 'Where to look for classes' },
              { option: 'theme.extend', desc: 'Add custom values' },
              { option: 'theme.colors', desc: 'Custom color palette' },
              { option: 'theme.spacing', desc: 'Custom spacing scale' },
              { option: 'theme.screens', desc: 'Custom breakpoints' },
              { option: 'plugins', desc: 'Add Tailwind plugins' }
            ].map(item => (
              <div key={item.option} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <code className="font-mono font-bold text-green-900 dark:text-green-100">{item.option}</code>
                <p className="text-sm text-green-700 dark:text-green-300 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Settings className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Config Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">theme.extend</code> to keep default values</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Restart dev server after config changes</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

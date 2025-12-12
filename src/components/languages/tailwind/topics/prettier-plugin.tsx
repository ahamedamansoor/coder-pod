'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function PrettierPlugin() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Sparkles}
        category="Tailwind CSS · Tooling"
        title="Prettier Plugin"
        description="Automatic class sorting"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            Prettier Plugin
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/20">
            <Lightbulb className="w-5 h-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Automatic Class Sorting</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Consistent class order across your entire codebase
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">What is prettier-plugin-tailwindcss?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              An official Prettier plugin that automatically sorts your Tailwind CSS 
              classes in a consistent, recommended order every time you format your code.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            Installation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Step 1: Install Plugin</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              npm install -D prettier prettier-plugin-tailwindcss
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Step 2: Configure Prettier</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Create .prettierrc file:</p>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`{
  "plugins": ["prettier-plugin-tailwindcss"]
}`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Step 3: Format on Save</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Enable &quot;Format on Save&quot; in VS Code settings, and you are done!
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Before and After
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">Before (Unordered):</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`<button class="text-white px-4 bg-blue-500 py-2 rounded hover:bg-blue-600">`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">After (Sorted):</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`<button class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">`}
            </pre>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Classes are sorted according to Tailwind recommended order
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Benefits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { benefit: 'Consistent Order', desc: 'Same class order across entire codebase' },
              { benefit: 'Better Readability', desc: 'Easier to scan and understand classes' },
              { benefit: 'Team Collaboration', desc: 'No arguments about class ordering' },
              { benefit: 'Automatic', desc: 'Happens on save, no manual work' },
              { benefit: 'Follows Best Practices', desc: 'Uses Tailwind recommended order' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 text-sm mb-1">{item.benefit}</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-yellow-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Custom Config Path:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindConfig": "./tailwind.config.js"
}`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">With Other Plugins:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`{
  "plugins": [
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss"
  ]
}`}
            </pre>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              Tip: Tailwind plugin should be last in the list
            </p>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <Sparkles className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-2xl text-indigo-900 dark:text-indigo-100">Prettier Plugin Tips</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Essential for team projects - ensures consistency</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Works with format-on-save in VS Code</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Sorts classes according to Tailwind best practices</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Must be last plugin in Prettier config</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

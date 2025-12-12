'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Box, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ContainerQueries() {

  const containerHTML = `<div class="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-950 dark:to-teal-950 p-8">
  <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    <div class="@container bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <div class="@md:flex @md:gap-4">
        <div class="w-16 h-16 bg-emerald-500 rounded-lg mb-4 @md:mb-0"></div>
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">Container Queries</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 @md:block hidden">This text appears when container is medium+</p>
        </div>
      </div>
    </div>
    
    <div class="@container/card bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Named Container</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 @lg/card:text-base">Resize to see responsive changes!</p>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Box}
        category="Tailwind CSS · Responsive Design"
        title="Container Queries"
        description="Responsive design based on container size, not viewport"
        colorTheme="emerald"
      />

      <Card className="border-2 border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
              <Box className="w-8 h-8 text-white" />
            </div>
            What are Container Queries?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20">
            <Lightbulb className="w-5 h-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Container vs Viewport</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Style elements based on their parent container's size, not the browser viewport
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={containerHTML}
            title="Container Query Example"
            description="Resize containers to see responsive changes"
            colorTheme="emerald"
            styleLanguage="tailwind"
          />

          <div>
            <h3 className="text-lg font-bold mb-3">Setup:</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// 1. Add container to parent
<div class="@container">
  
  // 2. Use @md:, @lg:, etc. on children
  <div class="@md:flex @lg:grid">
    Content
  </div>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-teal-500 rounded-lg">
              <Box className="w-6 h-6 text-white" />
            </div>
            Container Sizes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { size: '@sm', width: '384px (24rem)' },
              { size: '@md', width: '448px (28rem)' },
              { size: '@lg', width: '512px (32rem)' },
              { size: '@xl', width: '576px (36rem)' },
              { size: '@2xl', width: '672px (42rem)' }
            ].map((item, i) => (
              <div key={i} className="bg-teal-50 dark:bg-teal-950/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800">
                <code className="font-mono text-sm text-teal-900 dark:text-teal-100 font-bold block mb-1">{item.size}:</code>
                <p className="text-xs text-teal-700 dark:text-teal-300">{item.width}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Named Containers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">Use named containers for nested container queries:</p>
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="@container/card">
  <div class="@lg/card:flex">
    Responds to "card" container
  </div>
</div>`}
          </pre>
        </CardContent>
      </Card>

      <Alert className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
        <Box className="w-5 h-5 text-emerald-600" />
        <AlertTitle className="text-2xl text-emerald-900 dark:text-emerald-100">Container Query Tips</AlertTitle>
        <AlertDescription className="text-emerald-800 dark:text-emerald-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <code className="bg-emerald-200 dark:bg-emerald-900 px-2 py-1 rounded">@container</code> to parent element</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-emerald-200 dark:bg-emerald-900 px-2 py-1 rounded">@md:</code>, <code className="bg-emerald-200 dark:bg-emerald-900 px-2 py-1 rounded">@lg:</code> prefixes on children</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for component-based layouts and reusable cards</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Named containers: <code className="bg-emerald-200 dark:bg-emerald-900 px-2 py-1 rounded">@container/name</code> and <code className="bg-emerald-200 dark:bg-emerald-900 px-2 py-1 rounded">@lg/name:</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

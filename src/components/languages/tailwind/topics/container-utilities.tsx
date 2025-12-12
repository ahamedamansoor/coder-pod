'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Maximize2, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function ContainerUtilities() {

  const basicHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="container mx-auto bg-white dark:bg-slate-800 p-6 rounded-lg">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Container Class</h2>
    <p class="text-gray-600 dark:text-gray-300">
      The container centers content and sets max-width based on screen size. 
      Resize to see it adapt!
    </p>
  </div>
</div>`;

  const comparisonHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8 space-y-6">
  <!-- Without container -->
  <div>
    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">Without container (full width)</p>
    <div class="bg-red-500 text-white p-6 rounded">
      <p class="font-semibold">No container - stretches full width</p>
    </div>
  </div>
  
  <!-- With container -->
  <div>
    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">With container mx-auto</p>
    <div class="container mx-auto bg-green-500 text-white p-6 rounded">
      <p class="font-semibold">Container - constrained and centered</p>
    </div>
  </div>
</div>`;

  const contentHTML = `<div class="container mx-auto px-4 py-8">
  <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      Page Title
    </h1>
    <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
      Container keeps content readable by limiting max-width. 
      On large screens, content won't stretch too wide.
    </p>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 class="font-bold text-gray-800 dark:text-white mb-2">Feature 1</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm">Easy to read content</p>
      </div>
      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 class="font-bold text-gray-800 dark:text-white mb-2">Feature 2</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm">Responsive layout</p>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Maximize2}
        category="Tailwind CSS · Layout"
        title="Container"
        description="Center and constrain content width for better readability"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Maximize2 className="w-8 h-8 text-white" />
            </div>
            Container Basics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">How Container Works</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">container</code> sets max-width at each breakpoint. 
              Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">mx-auto</code> to center it.
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Breakpoint Max-Widths:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { bp: 'sm (640px)', width: '640px' },
                { bp: 'md (768px)', width: '768px' },
                { bp: 'lg (1024px)', width: '1024px' },
                { bp: 'xl (1280px)', width: '1280px' },
                { bp: '2xl (1536px)', width: '1536px' }
              ].map(item => (
                <div key={item.bp} className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 border border-blue-300 dark:border-blue-700">
                  <div className="font-mono text-sm text-blue-900 dark:text-blue-100">
                    {item.bp}
                  </div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                    max-width: {item.width}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FrontendCodePreview
            html={basicHTML}
            title="Basic Container"
            description="Centered, responsive width"
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
            With vs Without
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={comparisonHTML}
            title="Comparison"
            description="See the difference"
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
            Page Layout Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={contentHTML}
            title="Content Container"
            description="Professional page layout"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Maximize2 className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Container Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">container mx-auto</code> together</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">px-4</code> for padding on mobile</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

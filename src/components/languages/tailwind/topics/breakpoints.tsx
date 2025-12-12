'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Monitor, CheckCircle, Lightbulb, ArrowRight, Smartphone } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Breakpoints() {

  const basicHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="text-center p-6 bg-white dark:bg-slate-800 rounded-lg">
    <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 dark:text-white">
      Responsive Text Size
    </p>
    <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">
      Resize browser to see changes
    </p>
  </div>
</div>`;

  const layoutHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-purple-500 text-white p-6 rounded text-center">
      <p class="font-semibold">Box 1</p>
      <p class="text-xs mt-1">1→2→4 cols</p>
    </div>
    <div class="bg-purple-500 text-white p-6 rounded text-center">
      <p class="font-semibold">Box 2</p>
    </div>
    <div class="bg-purple-500 text-white p-6 rounded text-center">
      <p class="font-semibold">Box 3</p>
    </div>
    <div class="bg-purple-500 text-white p-6 rounded text-center">
      <p class="font-semibold">Box 4</p>
    </div>
  </div>
</div>`;

  const hiddenHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="space-y-4">
    <div class="bg-green-500 text-white p-4 rounded text-center">
      Always Visible
    </div>
    <div class="hidden md:block bg-blue-500 text-white p-4 rounded text-center">
      Hidden on Mobile (visible md+)
    </div>
    <div class="md:hidden bg-orange-500 text-white p-4 rounded text-center">
      Mobile Only (hidden md+)
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Monitor}
        category="Tailwind CSS · Responsive Design"
        title="Breakpoints"
        description="Responsive design with mobile-first breakpoints"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            Tailwind Breakpoints
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Mobile-First</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Start with mobile styles, then use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">sm:</code>, 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">md:</code>, 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">lg:</code> for larger screens
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Default Breakpoints:</h3>
            <div className="space-y-3">
              {[
                { prefix: 'sm:', width: '640px', desc: 'Small devices (tablets)' },
                { prefix: 'md:', width: '768px', desc: 'Medium devices (small laptops)' },
                { prefix: 'lg:', width: '1024px', desc: 'Large devices (desktops)' },
                { prefix: 'xl:', width: '1280px', desc: 'Extra large (large desktops)' },
                { prefix: '2xl:', width: '1536px', desc: 'Extra extra large' }
              ].map(item => (
                <div key={item.prefix} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center justify-between">
                    <code className="font-mono font-bold text-blue-900 dark:text-blue-100">{item.prefix}</code>
                    <span className="text-sm text-blue-700 dark:text-blue-300">≥ {item.width}</span>
                  </div>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <FrontendCodePreview
            html={basicHTML}
            title="Responsive Text"
            description="Text grows with screen size"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            Responsive Layouts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={layoutHTML}
            title="Grid Columns"
            description="1→2→4 columns as screen grows"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            Show/Hide Elements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={hiddenHTML}
            title="Responsive Visibility"
            description="Show different content per screen size"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Monitor className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Breakpoint Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Start mobile-first: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">text-sm md:text-lg</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Every utility works with breakpoints: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">lg:hover:bg-blue-500</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test on real devices for best results</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

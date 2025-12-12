'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Type, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ResponsiveTypography() {

  const typographyHTML = `<div class="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 p-8">
  <div class="max-w-4xl mx-auto space-y-6 text-center">
    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white">
      Responsive Heading
    </h1>
    <p class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
      This paragraph grows from small to extra large
    </p>
    <p class="text-xs text-gray-500 dark:text-gray-500">
      Resize browser to see typography scale
    </p>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Type}
        category="Tailwind CSS · Responsive Design"
        title="Responsive Typography"
        description="Fluid typography that adapts to screen size"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
              <Type className="w-8 h-8 text-white" />
            </div>
            Fluid Typography
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Scale Text</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Typography should grow from mobile to desktop for optimal readability
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={typographyHTML}
            title="Adaptive Typography"
            description="Text scales across breakpoints"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <Type className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Typography Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Start readable on mobile: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">text-lg</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Scale up for desktop: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">text-2xl md:text-4xl lg:text-6xl</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

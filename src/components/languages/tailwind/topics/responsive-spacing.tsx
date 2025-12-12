'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Ruler, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ResponsiveSpacing() {

  const spacingHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="space-y-4">
    <div class="p-4 sm:p-6 md:p-8 lg:p-12 bg-green-500 text-white rounded-lg text-center">
      <p class="font-bold">Responsive Padding</p>
      <p class="text-xs mt-1">p-4 → p-6 → p-8 → p-12</p>
    </div>
    <div class="mx-4 sm:mx-8 md:mx-12 lg:mx-20 bg-emerald-500 text-white p-6 rounded-lg text-center">
      <p class="font-bold">Responsive Margins</p>
      <p class="text-xs mt-1">mx-4 → mx-8 → mx-12 → mx-20</p>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Ruler}
        category="Tailwind CSS · Responsive Design"
        title="Responsive Spacing"
        description="Adaptive spacing across breakpoints"
        colorTheme="green"
      />

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
              <Ruler className="w-8 h-8 text-white" />
            </div>
            Adaptive Spacing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Lightbulb className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Progressive Spacing</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Start with tight spacing on mobile, increase as screen size grows
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={spacingHTML}
            title="Responsive Spacing"
            description="Spacing grows with viewport"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <Ruler className="w-5 h-5 text-green-600" />
        <AlertTitle className="text-2xl text-green-900 dark:text-green-100">Spacing Tips</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Mobile needs less spacing - start small</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Pattern: <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">p-4 sm:p-6 md:p-8 lg:p-12</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

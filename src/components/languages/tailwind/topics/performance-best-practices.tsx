'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Gauge, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function PerformanceBestPractices() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Gauge}
        category="Tailwind CSS · Optimization"
        title="Performance Best Practices"
        description="Optimizing Tailwind for maximum performance"
        colorTheme="green"
      />

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
              <Gauge className="w-8 h-8 text-white" />
            </div>
            Performance Optimization
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Lightbulb className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Performance Matters</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Faster sites = better UX, higher SEO rankings, and improved conversion rates
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            {[
              {
                title: 'Purge Unused CSS',
                desc: 'Configure content paths correctly to remove unused styles',
                impact: 'High',
                code: 'content: ["./src/**/*.{js,jsx,ts,tsx}"]'
              },
              {
                title: 'Use JIT Mode',
                desc: 'Just-in-Time mode generates styles on-demand',
                impact: 'High',
                code: 'Default in Tailwind v3+'
              },
              {
                title: 'Minimize Custom CSS',
                desc: 'Use Tailwind utilities instead of custom CSS when possible',
                impact: 'Medium',
                code: 'Utilities are optimized and reusable'
              },
              {
                title: 'Optimize Images',
                desc: 'Use next/image or similar for automatic optimization',
                impact: 'High',
                code: 'Lazy loading, WebP, responsive sizes'
              },
              {
                title: 'Enable Gzip/Brotli',
                desc: 'Server-side compression for smaller file sizes',
                impact: 'High',
                code: 'Configure in server/hosting platform'
              }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <h4 className="font-bold text-green-900 dark:text-green-100">{item.title}</h4>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.impact === 'High' ? 'bg-red-500' : 'bg-yellow-500'
                  } text-white font-bold`}>{item.impact}</span>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded text-green-800 dark:text-green-200">
                  {item.code}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            CSS Bundle Optimization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Development vs Production</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-bold text-red-600 mb-1">Development: ~3.8 MB</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300">All utilities included for fast dev</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-green-600 mb-1">Production: ~5-10 KB</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300">Only used utilities included</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <Gauge className="w-5 h-5 text-green-600" />
        <AlertTitle className="text-2xl text-green-900 dark:text-green-100">Performance Checklist</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Configure content paths in tailwind.config.js</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use JIT mode (default in v3+)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Enable production build optimizations</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test bundle size with tools like Bundlephobia</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

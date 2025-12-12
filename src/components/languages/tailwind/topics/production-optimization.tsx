'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Zap, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ProductionOptimization() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Zap}
        category="Tailwind CSS · Optimization"
        title="Production Build"
        description="Optimizing Tailwind for production deployment"
        colorTheme="yellow"
      />

      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            Purging Unused CSS
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            <AlertTitle className="text-yellow-900 dark:text-yellow-100">Automatic Purging</AlertTitle>
            <AlertDescription className="text-yellow-800 dark:text-yellow-200">
              Tailwind automatically removes unused styles in production builds
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Configure Content Paths:</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ...
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Build Size Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-red-900 dark:text-red-100">Development Build</span>
                <span className="text-red-700 dark:text-red-300">~3.8 MB</span>
              </div>
              <div className="text-sm text-red-600 dark:text-red-400">All utility classes included</div>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-green-900 dark:text-green-100">Production Build</span>
                <span className="text-green-700 dark:text-green-300">~5-10 KB</span>
              </div>
              <div className="text-sm text-green-600 dark:text-green-400">Only used classes included</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            Optimization Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { step: '1. Configure content paths', desc: 'Tell Tailwind where to look for classes' },
              { step: '2. Enable minification', desc: 'CSS is automatically minified in production' },
              { step: '3. Use PostCSS plugins', desc: 'cssnano and autoprefixer included' },
              { step: '4. Remove unused styles', desc: 'Automatic purging in production mode' },
              { step: '5. Gzip/Brotli compression', desc: 'Server-level compression for even smaller sizes' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-blue-900 dark:text-blue-100">{item.step}</div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
        <Zap className="w-5 h-5 text-yellow-600" />
        <AlertTitle className="text-2xl text-yellow-900 dark:text-yellow-100">Production Tips</AlertTitle>
        <AlertDescription className="text-yellow-800 dark:text-yellow-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always test production builds locally before deploying</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use environment variables: <code className="bg-yellow-200 dark:bg-yellow-900 px-2 py-1 rounded">NODE_ENV=production</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Verify purging works: check your final CSS bundle size</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

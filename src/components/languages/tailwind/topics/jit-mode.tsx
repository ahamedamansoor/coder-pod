'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Zap, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function JITMode() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Zap}
        category="Tailwind CSS · Core Concepts"
        title="JIT Mode"
        description="Just-in-Time compilation for instant builds"
        colorTheme="yellow"
      />

      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            What is JIT Mode?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            <AlertTitle className="text-yellow-900 dark:text-yellow-100">On-Demand Generation</AlertTitle>
            <AlertDescription className="text-yellow-800 dark:text-yellow-200">
              JIT generates styles on-demand as you use them, instead of generating everything upfront
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
              <h4 className="text-lg font-bold text-red-900 dark:text-red-100 mb-4">❌ Old Classic Mode</h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                <li>• Generated all utilities upfront</li>
                <li>• ~3.8 MB development CSS</li>
                <li>• Slow build times</li>
                <li>• Limited variant combinations</li>
                <li>• Manual purging needed</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h4 className="text-lg font-bold text-green-900 dark:text-green-100 mb-4">✅ JIT Mode (Default v3+)</h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <li>• Generates only what you use</li>
                <li>• ~10 KB development CSS</li>
                <li>• Lightning fast builds</li>
                <li>• Unlimited variant combinations</li>
                <li>• Automatic purging</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            JIT Benefits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: 'Instant Build Times',
                desc: 'Compile in milliseconds, not seconds',
                icon: '⚡'
              },
              {
                title: 'Unlimited Variants',
                desc: 'Stack modifiers without limits',
                icon: '♾️',
                example: 'hover:focus:lg:dark:bg-blue-500'
              },
              {
                title: 'Arbitrary Values',
                desc: 'Use any value with [value] syntax',
                icon: '🎨',
                example: 'bg-[#bada55] w-[789px]'
              },
              {
                title: 'Smaller Development CSS',
                desc: 'Only ~10 KB instead of 3.8 MB',
                icon: '📦'
              },
              {
                title: 'Same Production Size',
                desc: 'Production builds remain tiny',
                icon: '🚀'
              }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">{item.title}</h4>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-2">{item.desc}</p>
                    {item.example && (
                      <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded text-green-800 dark:text-green-200">
                        {item.example}
                      </code>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            Setup (Already Enabled!)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Default in Tailwind v3+</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              JIT mode is enabled by default - no configuration needed!
            </AlertDescription>
          </Alert>

          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Your tailwind.config.js:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  // JIT is enabled by default!
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20">
        <Zap className="w-5 h-5 text-yellow-600" />
        <AlertTitle className="text-2xl text-yellow-900 dark:text-yellow-100">JIT Mode Advantages</AlertTitle>
        <AlertDescription className="text-yellow-800 dark:text-yellow-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Development and production use the same CSS generation</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>No need to worry about purging configuration</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use any arbitrary value: <code className="bg-yellow-200 dark:bg-yellow-900 px-2 py-1 rounded">bg-[#anything]</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Stack unlimited modifiers: <code className="bg-yellow-200 dark:bg-yellow-900 px-2 py-1 rounded">hover:focus:lg:dark:...</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

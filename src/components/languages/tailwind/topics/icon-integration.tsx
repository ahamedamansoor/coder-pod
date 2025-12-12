'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Star, Lightbulb, ArrowRight, Heart, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function IconIntegration() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Star}
        category="Tailwind CSS · SVG & Icons"
        title="Icon Integration"
        description="Using icon libraries with Tailwind CSS"
        colorTheme="yellow"
      />

      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl">
              <Star className="w-8 h-8 text-white" />
            </div>
            Icon Libraries
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            <AlertTitle className="text-yellow-900 dark:text-yellow-100">Multiple Options</AlertTitle>
            <AlertDescription className="text-yellow-800 dark:text-yellow-200">
              Choose from several popular icon libraries that work perfectly with Tailwind
            </AlertDescription>
          </Alert>

          <div className="flex items-center gap-4 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <Star className="w-8 h-8 text-yellow-500" />
            <Heart className="w-8 h-8 text-red-500" />
            <CheckCircle className="w-8 h-8 text-green-500" />
            <Lightbulb className="w-8 h-8 text-blue-500" />
            <ArrowRight className="w-8 h-8 text-purple-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            Popular Icon Libraries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: 'Heroicons',
                desc: 'Official icons by Tailwind Labs',
                install: 'npm install @heroicons/react',
                best: 'Best integration with Tailwind'
              },
              {
                name: 'Lucide React',
                desc: 'Beautiful & consistent icon toolkit',
                install: 'npm install lucide-react',
                best: '1000+ icons, tree-shakeable'
              },
              {
                name: 'React Icons',
                desc: 'Popular icon packs collection',
                install: 'npm install react-icons',
                best: 'Multiple icon sets in one'
              },
              {
                name: 'Font Awesome',
                desc: 'Classic icon library',
                install: 'npm install @fortawesome/react-fontawesome',
                best: 'Huge collection, widely known'
              }
            ].map((lib, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">{lib.name}</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">{lib.desc}</p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-800 dark:text-blue-200 block mb-2">
                  {lib.install}
                </code>
                <span className="text-xs text-blue-600 dark:text-blue-400">✓ {lib.best}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Usage Examples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Heroicons:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { StarIcon } from '@heroicons/react/24/solid'

<StarIcon className="w-6 h-6 text-yellow-500" />`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Lucide React:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { Star } from 'lucide-react'

<Star className="w-6 h-6 text-yellow-500" />`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">React Icons:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { FaStar } from 'react-icons/fa'

<FaStar className="w-6 h-6 text-yellow-500" />`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Styling Icons
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// Size
<Icon className="w-4 h-4" />  // Small
<Icon className="w-6 h-6" />  // Medium
<Icon className="w-8 h-8" />  // Large

// Color
<Icon className="text-blue-500" />
<Icon className="text-red-600" />

// Hover effects
<Icon className="text-gray-500 hover:text-blue-500 transition" />

// With backgrounds
<div className="p-2 bg-blue-500 rounded-full">
  <Icon className="w-5 h-5 text-white" />
</div>

// Animated
<Icon className="w-6 h-6 animate-spin" />
<Icon className="w-6 h-6 animate-bounce" />`}
          </pre>
        </CardContent>
      </Card>

      <Alert className="border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20">
        <Star className="w-5 h-5 text-yellow-600" />
        <AlertTitle className="text-2xl text-yellow-900 dark:text-yellow-100">Icon Integration Tips</AlertTitle>
        <AlertDescription className="text-yellow-800 dark:text-yellow-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use Heroicons for best Tailwind integration</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>All libraries work with Tailwind's sizing and color utilities</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Icons are inline SVG, so use <code className="bg-yellow-200 dark:bg-yellow-900 px-2 py-1 rounded">text-*</code> for color</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with transitions for smooth hover effects</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

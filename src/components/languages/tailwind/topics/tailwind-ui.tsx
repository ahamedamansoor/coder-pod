'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, ArrowRight, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function TailwindUi() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Sparkles}
        category="Tailwind CSS · Tooling"
        title="Tailwind UI"
        description="Official premium component library"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            Tailwind UI
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Official Component Library</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Premium, professionally designed components by Tailwind Labs
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">What is Tailwind UI?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Tailwind UI is the official component library with 500+ professionally designed, 
              fully responsive HTML components built with Tailwind CSS.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            What's Included
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { category: 'Marketing', count: '60+', examples: 'Hero sections, features, CTAs' },
              { category: 'Application UI', count: '200+', examples: 'Forms, tables, navigation' },
              { category: 'Ecommerce', count: '100+', examples: 'Product pages, shopping carts' },
              { category: 'Page Examples', count: '30+', examples: 'Complete page templates' }
            ].map((item, i) => (
              <div key={i} className="bg-pink-50 dark:bg-pink-950/20 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-pink-900 dark:text-pink-100">{item.category}</h4>
                  <span className="text-xs bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 px-2 py-1 rounded font-bold">
                    {item.count}
                  </span>
                </div>
                <p className="text-xs text-pink-700 dark:text-pink-300">{item.examples}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Key Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { feature: 'Production Ready', desc: 'Fully tested and optimized components' },
              { feature: 'Fully Responsive', desc: 'Works perfectly on all devices' },
              { feature: 'Dark Mode Support', desc: 'All components support dark mode' },
              { feature: 'Framework Agnostic', desc: 'HTML, React, Vue versions available' },
              { feature: 'Copy & Paste', desc: 'Simple copy-paste workflow' },
              { feature: 'Commercial License', desc: 'Use in unlimited projects' }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800 flex items-start gap-2">
                <span className="text-lg">✓</span>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 text-sm mb-1">{item.feature}</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
            Pricing & Access
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Tailwind UI Pricing:</h4>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li>💰 One-time purchase (not subscription)</li>
              <li>📦 All current and future components included</li>
              <li>🎨 HTML, React, and Vue versions</li>
              <li>🔄 Free lifetime updates</li>
              <li>✨ Access to Figma files</li>
            </ul>
            <button 
              onClick={() => window.open('https://tailwindui.com', '_blank')}
              className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Tailwind UI
            </button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-yellow-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Free Alternatives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            If you're looking for free options:
          </p>
          <div className="space-y-2">
            {[
              { name: 'Headless UI', desc: 'Free unstyled components (official)' },
              { name: 'Flowbite', desc: 'Open-source component library' },
              { name: 'daisyUI', desc: 'Free Tailwind component library' },
              { name: 'Tailwind Components', desc: 'Community-built components' }
            ].map((alt, i) => (
              <div key={i} className="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-2 border border-yellow-200 dark:border-yellow-800 flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-yellow-900 dark:text-yellow-100 text-sm">{alt.name}</h5>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">{alt.desc}</p>
                </div>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                  FREE
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <Sparkles className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Tailwind UI Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Great for rapid prototyping and production apps</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>One-time purchase with lifetime updates (not subscription)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Consider free alternatives if budget is tight</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>All components are copy-paste friendly</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Package, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ComponentLibraries() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Package}
        category="Tailwind CSS · Design Systems"
        title="Component Libraries"
        description="Building reusable component libraries"
        colorTheme="teal"
      />

      <Card className="border-2 border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl">
              <Package className="w-8 h-8 text-white" />
            </div>
            Popular Tailwind Libraries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: 'Headless UI',
                desc: 'Official unstyled components by Tailwind team',
                features: ['Fully accessible', 'Unstyled', 'React & Vue'],
                url: 'headlessui.com'
              },
              {
                name: 'daisyUI',
                desc: 'Component library with themes',
                features: ['35+ components', 'Multiple themes', 'Easy to use'],
                url: 'daisyui.com'
              },
              {
                name: 'Flowbite',
                desc: 'UI components built with Tailwind',
                features: ['56+ components', 'Dark mode', 'Figma files'],
                url: 'flowbite.com'
              },
              {
                name: 'shadcn/ui',
                desc: 'Copy-paste components (not npm package)',
                features: ['Radix UI based', 'Customizable', 'TypeScript'],
                url: 'ui.shadcn.com'
              }
            ].map((lib, i) => (
              <div key={i} className="bg-teal-50 dark:bg-teal-950/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-teal-900 dark:text-teal-100 text-lg">{lib.name}</h4>
                  <code className="text-xs bg-teal-200 dark:bg-teal-900 px-2 py-1 rounded text-teal-800 dark:text-teal-200">
                    {lib.url}
                  </code>
                </div>
                <p className="text-sm text-teal-700 dark:text-teal-300 mb-3">{lib.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {lib.features.map((feat, j) => (
                    <span key={j} className="text-xs bg-teal-100 dark:bg-teal-900/50 px-2 py-1 rounded text-teal-800 dark:text-teal-200">
                      ✓ {feat}
                    </span>
                  ))}
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
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Building Your Own Library
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Component Approach</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Extract common patterns into reusable components
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Example Button Component:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md',
  children 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button className={\`
      \${variants[variant]} 
      \${sizes[size]} 
      rounded-lg font-medium transition
    \`}>
      {children}
    </button>
  );
};`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            Library Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Document Components', desc: 'Clear props, examples, and usage' },
              { title: 'Use TypeScript', desc: 'Type safety and autocomplete' },
              { title: 'Support Dark Mode', desc: 'Include dark: variants' },
              { title: 'Accessibility First', desc: 'ARIA labels, keyboard nav' },
              { title: 'Variant System', desc: 'Consistent variant names' },
              { title: 'Size Options', desc: 'sm, md, lg sizing scale' },
              { title: 'Composition', desc: 'Allow style overrides' },
              { title: 'Testing', desc: 'Unit and visual tests' }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-purple-900 dark:text-purple-100 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-purple-700 dark:text-purple-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20">
        <Package className="w-5 h-5 text-teal-600" />
        <AlertTitle className="text-2xl text-teal-900 dark:text-teal-100">Component Library Tips</AlertTitle>
        <AlertDescription className="text-teal-800 dark:text-teal-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Start small - build components as you need them</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use composition: allow className prop for customization</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Consider using <code className="bg-teal-200 dark:bg-teal-900 px-2 py-1 rounded">clsx</code> or <code className="bg-teal-200 dark:bg-teal-900 px-2 py-1 rounded">classnames</code> for conditional classes</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Document with Storybook or similar tool</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

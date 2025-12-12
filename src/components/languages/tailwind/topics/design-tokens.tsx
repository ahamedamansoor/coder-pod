'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Layers, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function DesignTokens() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="Tailwind CSS · Design Systems"
        title="Design Tokens"
        description="Managing design decisions with tokens"
        colorTheme="cyan"
      />

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            What are Design Tokens?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
            <Lightbulb className="w-5 h-5 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Design Decisions as Data</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              Design tokens are named entities that store visual design attributes
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Example Design Token System:</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`module.exports = {
  theme: {
    extend: {
      colors: {
        // Semantic color tokens
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        
        // Surface tokens
        surface: {
          base: '#FFFFFF',
          elevated: '#F9FAFB',
          muted: '#F3F4F6',
        }
      },
      spacing: {
        // Spacing tokens
        'xs': '0.5rem',    // 8px
        'sm': '0.75rem',   // 12px
        'md': '1rem',      // 16px
        'lg': '1.5rem',    // 24px
        'xl': '2rem',      // 32px
      },
      fontSize: {
        // Typography tokens
        'display': ['3rem', { lineHeight: '1.2' }],
        'heading-1': ['2.25rem', { lineHeight: '1.3' }],
        'heading-2': ['1.875rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
      }
    }
  }
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Layers className="w-6 h-6 text-white" />
            </div>
            Token Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { 
                category: 'Color Tokens',
                examples: ['primary, secondary', 'success, warning, danger', 'surface, text, border'],
                usage: 'bg-primary text-secondary'
              },
              { 
                category: 'Spacing Tokens',
                examples: ['xs, sm, md, lg, xl', 'section, container', 'gutter, margin'],
                usage: 'p-md m-lg'
              },
              { 
                category: 'Typography Tokens',
                examples: ['display, heading-1', 'body, caption', 'weight-normal, weight-bold'],
                usage: 'text-heading-1'
              },
              { 
                category: 'Shadow Tokens',
                examples: ['sm, md, lg', 'card, modal', 'focus, hover'],
                usage: 'shadow-card'
              },
              { 
                category: 'Border Tokens',
                examples: ['radius-sm, radius-lg', 'width-thin, width-thick', 'primary, secondary'],
                usage: 'rounded-card'
              },
              { 
                category: 'Animation Tokens',
                examples: ['fast, normal, slow', 'ease-in, ease-out', 'bounce, fade'],
                usage: 'duration-fast'
              }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">{item.category}</h4>
                <div className="space-y-2 mb-3">
                  {item.examples.map((ex, j) => (
                    <div key={j} className="text-xs text-blue-700 dark:text-blue-300">• {ex}</div>
                  ))}
                </div>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-800 dark:text-blue-200 block">
                  {item.usage}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Benefits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: 'Consistency', desc: 'Same values everywhere', icon: '🎯' },
              { title: 'Maintainability', desc: 'Update once, change everywhere', icon: '🔧' },
              { title: 'Scalability', desc: 'Easy to add new tokens', icon: '📈' },
              { title: 'Documentation', desc: 'Self-documenting design', icon: '📚' },
              { title: 'Collaboration', desc: 'Shared language for team', icon: '👥' },
              { title: 'Theming', desc: 'Easy light/dark mode', icon: '🌓' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                <div className="text-2xl mb-1">{item.icon}</div>
                <h4 className="font-bold text-green-900 dark:text-green-100 text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-green-700 dark:text-green-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
        <Layers className="w-5 h-5 text-cyan-600" />
        <AlertTitle className="text-2xl text-cyan-900 dark:text-cyan-100">Design Token Best Practices</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use semantic names: <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">primary</code> not <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">blue-500</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Create scales: xs, sm, md, lg, xl for consistent sizing</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Document your tokens with comments in config</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Consider using CSS variables for dynamic theming</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

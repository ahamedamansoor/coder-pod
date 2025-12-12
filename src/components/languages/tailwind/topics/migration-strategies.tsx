'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { RefreshCw, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function MigrationStrategies() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={RefreshCw}
        category="Tailwind CSS · Best Practices"
        title="Migration Strategies"
        description="Migrating from Bootstrap, Material UI, or custom CSS"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            Migration Strategies
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Gradual is Better</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Don't rewrite everything at once - migrate gradually
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            Migration Approaches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: 'Page by Page',
                desc: 'Migrate one page at a time',
                steps: ['Start with new pages', 'Move to least complex pages', 'Tackle complex pages last'],
                best: 'Large applications with many pages'
              },
              {
                name: 'Component by Component',
                desc: 'Migrate individual components',
                steps: ['Start with leaf components', 'Move up component tree', 'Keep both systems during transition'],
                best: 'Component-heavy applications'
              },
              {
                name: 'Feature by Feature',
                desc: 'Migrate complete features',
                steps: ['Choose self-contained feature', 'Migrate all pages/components', 'Test thoroughly'],
                best: 'Feature-based architecture'
              }
            ].map((approach, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{approach.name}</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">{approach.desc}</p>
                <div className="space-y-1 mb-3">
                  {approach.steps.map((step, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-purple-600 dark:text-purple-400">
                      <span className="text-purple-500">→</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
                <span className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-800 dark:text-purple-200">
                  Best for: {approach.best}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Migration Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { step: '1. Install Tailwind', action: 'Add to existing project without removing old CSS' },
              { step: '2. Configure PurgeCSS', action: 'Ensure only used classes are included' },
              { step: '3. Run Side-by-Side', action: 'Both old and new CSS coexist temporarily' },
              { step: '4. Create Utility Mapping', action: 'Document Bootstrap → Tailwind equivalents' },
              { step: '5. Migrate Gradually', action: 'Start with chosen strategy (page/component/feature)' },
              { step: '6. Remove Old Code', action: 'Delete old CSS after successful migration' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                    {item.step}
                  </span>
                  <h4 className="font-bold text-green-900 dark:text-green-100 text-sm">{item.action}</h4>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Common Mappings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Bootstrap → Tailwind:</h4>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <div className="flex justify-between bg-orange-50 dark:bg-orange-950/20 p-2 rounded border border-orange-200 dark:border-orange-800">
                <code className="text-orange-700 dark:text-orange-300">container</code>
                <code className="text-orange-900 dark:text-orange-100">container mx-auto</code>
              </div>
              <div className="flex justify-between bg-orange-50 dark:bg-orange-950/20 p-2 rounded border border-orange-200 dark:border-orange-800">
                <code className="text-orange-700 dark:text-orange-300">btn-primary</code>
                <code className="text-orange-900 dark:text-orange-100">bg-blue-500 text-white</code>
              </div>
              <div className="flex justify-between bg-orange-50 dark:bg-orange-950/20 p-2 rounded border border-orange-200 dark:border-orange-800">
                <code className="text-orange-700 dark:text-orange-300">d-flex</code>
                <code className="text-orange-900 dark:text-orange-100">flex</code>
              </div>
              <div className="flex justify-between bg-orange-50 dark:bg-orange-950/20 p-2 rounded border border-orange-200 dark:border-orange-800">
                <code className="text-orange-700 dark:text-orange-300">mt-3</code>
                <code className="text-orange-900 dark:text-orange-100">mt-4</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-red-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Common Pitfalls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { issue: 'Trying to migrate everything at once', fix: 'Gradual migration is safer' },
              { issue: 'Not configuring PurgeCSS', fix: 'Bundle size will be huge' },
              { issue: 'Mixing utility patterns', fix: 'Stick to Tailwind conventions' },
              { issue: 'Forgetting responsive design', fix: 'Add breakpoint prefixes' }
            ].map((item, i) => (
              <div key={i} className="bg-red-50 dark:bg-red-950/20 rounded-lg p-3 border border-red-200 dark:border-red-800 flex items-start gap-2">
                <span className="text-lg">⚠️</span>
                <div>
                  <h4 className="font-bold text-red-900 dark:text-red-100 text-sm mb-1">{item.issue}</h4>
                  <p className="text-xs text-red-700 dark:text-red-300">→ {item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <RefreshCw className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Migration Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Start small - migrate new features first</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Run both CSS systems in parallel during transition</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Document common class mappings for your team</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test thoroughly before removing old CSS</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

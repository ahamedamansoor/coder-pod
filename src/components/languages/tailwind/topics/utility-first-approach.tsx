'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Zap, Lightbulb, ArrowRight, Code } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function UtilityFirstApproach() {

  const utilityHTML = `<div class="bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-950 dark:to-yellow-950 p-8">
  <div class="max-w-2xl mx-auto space-y-6">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Utility-First Card</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">Built entirely with utility classes - no custom CSS!</p>
      <button class="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">Learn More</button>
    </div>
  </div>
</div>`;

  const comparisonHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
    <div class="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border-2 border-red-200 dark:border-red-800">
      <h4 class="text-lg font-bold text-red-900 dark:text-red-100 mb-3">❌ Traditional CSS</h4>
      <pre class="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto"><code>.card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.card:hover {
  box-shadow: 0 10px 15px rgba(0,0,0,0.2);
}</code></pre>
    </div>
    
    <div class="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-800">
      <h4 class="text-lg font-bold text-green-900 dark:text-green-100 mb-3">✅ Utility-First</h4>
      <pre class="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto"><code>&lt;div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl"&gt;
  Card content
&lt;/div&gt;</code></pre>
      <p class="text-xs text-green-700 dark:text-green-300 mt-2">No separate CSS file needed!</p>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Zap}
        category="Tailwind CSS · Core Concepts"
        title="Utility-First Approach"
        description="Understanding Tailwind's revolutionary methodology"
        colorTheme="amber"
      />

      <Card className="border-2 border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            What is Utility-First?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Core Philosophy</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Build designs directly in HTML using pre-defined utility classes instead of writing custom CSS
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={utilityHTML}
            title="Utility-First Example"
            description="Fully styled with Tailwind utilities"
            colorTheme="amber"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            Traditional vs Utility-First
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={comparisonHTML}
            title="Comparison"
            description="See the difference in approach"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
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
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Fast Development', desc: 'Build UI without leaving HTML', icon: '⚡' },
              { title: 'Consistent Design', desc: 'Pre-defined design system', icon: '🎨' },
              { title: 'No Naming', desc: 'No need to invent class names', icon: '🏷️' },
              { title: 'Small Bundle', desc: 'Only includes used utilities', icon: '📦' },
              { title: 'Easy Maintenance', desc: 'Changes are localized', icon: '🔧' },
              { title: 'Responsive', desc: 'Built-in responsive modifiers', icon: '📱' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">{item.title}</h4>
                <p className="text-sm text-green-700 dark:text-green-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20">
        <Zap className="w-5 h-5 text-amber-600" />
        <AlertTitle className="text-2xl text-amber-900 dark:text-amber-100">Why Utility-First Works</AlertTitle>
        <AlertDescription className="text-amber-800 dark:text-amber-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Faster development - no context switching between HTML and CSS</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Easier to maintain - all styles visible in markup</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Automatic optimization - unused styles are purged</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Better team collaboration - no CSS conflicts</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

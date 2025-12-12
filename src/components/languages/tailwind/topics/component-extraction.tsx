'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Package, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ComponentExtraction() {

  const buttonHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8 space-y-4">
  <!-- React Component -->
  <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition">
    Primary Button
  </button>
  
  <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition">
    Success Button
  </button>
  
  <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition">
    Danger Button
  </button>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Package}
        category="Tailwind CSS · Best Practices"
        title="Component Extraction"
        description="Build reusable components with React/Vue/Angular"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Package className="w-8 h-8 text-white" />
            </div>
            The Tailwind Way
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Best Practice</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use framework components (React/Vue/Angular) instead of CSS classes for reusability
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">React Component Example:</h3>
            <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-cyan-400"><code>{`// Button.tsx
export function Button({ children, variant = 'primary' }) {
  const baseClasses = 'font-bold py-3 px-6 rounded-lg transition';
  
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };
  
  return (
    <button className={\`\${baseClasses} \${variants[variant]}\`}>
      {children}
    </button>
  );
}

// Usage
<Button variant="primary">Click Me</Button>
<Button variant="success">Save</Button>`}</code></pre>
            </div>
          </div>

          <FrontendCodePreview
            html={buttonHTML}
            title="Component Result"
            description="Reusable button components"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Why Components?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { title: 'Single Source of Truth', desc: 'Change once, update everywhere' },
              { title: 'Props & Logic', desc: 'Pass data and handle interactions easily' },
              { title: 'Type Safety', desc: 'TypeScript support out of the box' },
              { title: 'No @apply Needed', desc: 'Keep utilities in HTML, not CSS' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-900 dark:text-green-100">{item.title}</h4>
                <p className="text-sm text-green-700 dark:text-green-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            Vue Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400"><code>{`<!-- Button.vue -->
<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
});

const buttonClasses = computed(() => {
  const base = 'font-bold py-3 px-6 rounded-lg transition';
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
  };
  return \`\${base} \${variants[props.variant]}\`;
});
</script>

<!-- Usage -->
<Button variant="primary">Click Me</Button>`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Package className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Component Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Prefer components over <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">@apply</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Keep utilities in your HTML/JSX - it's the Tailwind way!</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use props to control variants and states</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

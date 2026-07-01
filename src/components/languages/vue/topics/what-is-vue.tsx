'use client';

import React from 'react';
import { Sparkles, Zap, Layers, Code } from 'lucide-react';

export default function WhatIsVue() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/30">
            <Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">What is Vue.js?</h1>
            <p className="text-lg text-muted-foreground">The Progressive JavaScript Framework</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Introduction to Vue.js</h2>
        <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6">
          <p className="text-lg leading-relaxed">
            Vue.js is a progressive JavaScript framework for building user interfaces. Unlike other monolithic frameworks, 
            Vue is designed from the ground up to be incrementally adoptable. The core library focuses on the view layer only, 
            and is easy to pick up and integrate with other libraries or existing projects.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Key Features</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">Reactive Data Binding</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Automatic synchronization between data and DOM with minimal effort
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <Layers className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">Component-Based</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Build encapsulated components that manage their own state
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <Code className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">Declarative Rendering</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Describe what the UI should look like using intuitive template syntax
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <Sparkles className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">Progressive Framework</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Start small and scale up with additional libraries as needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vue.js Philosophy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Vue.js Philosophy</h2>
        <div className="space-y-4">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3 text-slate-800 dark:text-slate-200">Approachability</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Vue.js is designed to be easy to learn and approachable for developers with basic HTML, CSS, and JavaScript knowledge. 
              The official documentation is comprehensive and beginner-friendly.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3 text-slate-800 dark:text-slate-200">Performance</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Vue.js offers excellent performance with a small footprint (~34KB gzipped). The virtual DOM and optimized rendering 
              ensure smooth updates even in complex applications.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3 text-slate-800 dark:text-slate-200">Versatility</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Whether you're building a simple widget or a large-scale single-page application, Vue.js scales with your needs. 
              Use it as a library, a framework, or anything in between.
            </p>
          </div>
        </div>
      </section>

      {/* When to Use Vue.js */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">When to Use Vue.js</h2>
        <div className="grid gap-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">Single Page Applications (SPAs)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Perfect for building modern SPAs with Vue Router for navigation
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">Progressive Enhancement</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Enhance existing server-rendered pages with interactive components
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">Component Libraries</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Create reusable component libraries for design systems
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">Rapid Prototyping</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Quickly build and iterate on ideas with minimal setup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vue.js vs Other Frameworks */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Vue.js vs Other Frameworks</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-slate-700 rounded-lg">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Feature</th>
                <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Vue.js</th>
                <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">React</th>
                <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Angular</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2 font-medium">Learning Curve</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Easy</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Medium</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Steep</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2 font-medium">Template Syntax</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">HTML-like</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">JSX</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">HTML + directives</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2 font-medium">Bundle Size</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">~34KB</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">~42KB</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">~100KB+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-800">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">✓</span>
              <span>Vue.js is a progressive framework that can be adopted incrementally</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">✓</span>
              <span>Excellent balance between simplicity and powerful features</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">✓</span>
              <span>Great documentation and growing ecosystem</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">✓</span>
              <span>Suitable for projects of all sizes</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

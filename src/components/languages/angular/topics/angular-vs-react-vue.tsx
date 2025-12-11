'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import {
  Layers,
  Lightbulb,
  CheckCircle2,
  Code,
  Zap,
  TrendingUp,
  Users,
  Package,
  GitBranch,
  Rocket,
  Play,
  ArrowRight,
} from 'lucide-react';

export default function AngularVsReactVue() {
  const [activeTab, setActiveTab] = React.useState<'angular' | 'react' | 'vue'>('angular');

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Layers}
        category="Angular · Framework Comparison"
        title="Angular vs React vs Vue"
        description="A comprehensive, beginner-friendly comparison to help you choose the right frontend framework for your project."
        colorTheme="red"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>All Three Are Excellent Choices!</AlertTitle>
            <AlertDescription>
              There's no "best" framework - only the best fit for your specific needs. This guide helps you make an informed decision based on facts, not hype.
            </AlertDescription>
          </Alert>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-red-200 dark:border-red-800">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mb-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">Angular</h4>
              <p className="text-xs text-muted-foreground">Complete framework by Google with everything built-in</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">React</h4>
              <p className="text-xs text-muted-foreground">Flexible UI library by Meta with massive ecosystem</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-green-200 dark:border-green-800">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Vue</h4>
              <p className="text-xs text-muted-foreground">Progressive framework with gentle learning curve</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitBranch className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Quick Comparison at a Glance
          </CardTitle>
          <CardDescription className="text-base">
            Key differences between the three most popular frontend technologies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                  <th className="border border-purple-200 dark:border-purple-800 p-3 text-left font-semibold">Feature</th>
                  <th className="border border-purple-200 dark:border-purple-800 p-3 text-left font-semibold text-red-600 dark:text-red-400">Angular</th>
                  <th className="border border-purple-200 dark:border-purple-800 p-3 text-left font-semibold text-blue-600 dark:text-blue-400">React</th>
                  <th className="border border-purple-200 dark:border-purple-800 p-3 text-left font-semibold text-green-600 dark:text-green-400">Vue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 dark:border-purple-800 p-3 font-semibold">Type</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">Full Framework</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">UI Library</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">Progressive Framework</td>
                </tr>
                <tr className="bg-purple-50/30 dark:bg-purple-950/10">
                  <td className="border border-purple-200 dark:border-purple-800 p-3 font-semibold">Created By</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">Google (2016)</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">Meta/Facebook (2013)</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">Evan You (2014)</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 dark:border-purple-800 p-3 font-semibold">Language</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">TypeScript (required)</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">JavaScript (TS optional)</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">JavaScript (TS optional)</td>
                </tr>
                <tr className="bg-purple-50/30 dark:bg-purple-950/10">
                  <td className="border border-purple-200 dark:border-purple-800 p-3 font-semibold">Learning Curve</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">⭐⭐⭐⭐ (Steep)</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">⭐⭐⭐ (Moderate)</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">⭐⭐ (Gentle)</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 dark:border-purple-800 p-3 font-semibold">Bundle Size</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">~500KB</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">~100KB</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">~80KB</td>
                </tr>
                <tr className="bg-purple-50/30 dark:bg-purple-950/10">
                  <td className="border border-purple-200 dark:border-purple-800 p-3 font-semibold">Data Binding</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">Two-way</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">One-way</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">Two-way</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 dark:border-purple-800 p-3 font-semibold">Mobile Development</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">Ionic, NativeScript</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">React Native ⭐</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">NativeScript, Weex</td>
                </tr>
                <tr className="bg-purple-50/30 dark:bg-purple-950/10">
                  <td className="border border-purple-200 dark:border-purple-800 p-3 font-semibold">State Management</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">RxJS, NgRx</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">Redux, MobX, Zustand</td>
                  <td className="border border-purple-200 dark:border-purple-800 p-3">Vuex, Pinia</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Code Comparison - Hello World */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Hello World Comparison
          </CardTitle>
          <CardDescription className="text-base">
            See how each framework handles a simple component
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6">
            <Button
              variant={activeTab === 'angular' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('angular')}
              className={activeTab === 'angular' ? 'bg-gradient-to-r from-red-600 to-pink-600' : 'border-red-200 dark:border-red-800'}
            >
              Angular
            </Button>
            <Button
              variant={activeTab === 'react' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('react')}
              className={activeTab === 'react' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'border-blue-200 dark:border-blue-800'}
            >
              React
            </Button>
            <Button
              variant={activeTab === 'vue' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('vue')}
              className={activeTab === 'vue' ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'border-green-200 dark:border-green-800'}
            >
              Vue
            </Button>
          </div>

          {activeTab === 'angular' && (
            <div className="space-y-4">
              <CodeSnippetWithOutput
                title="Angular Component (TypeScript)"
                description="Component with decorator pattern"
                code={`import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: \`
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
  \`,
  styles: [\`
    h1 { color: #dd0031; }
  \`]
})
export class HelloComponent {
  title = 'Hello Angular!';
  message = 'Welcome to Angular 17';
}`}
                language="typescript"
                colorTheme="red"
              />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>TypeScript required, decorator pattern, everything in one file</span>
              </div>
            </div>
          )}

          {activeTab === 'react' && (
            <div className="space-y-4">
              <CodeSnippetWithOutput
                title="React Component (JavaScript)"
                description="Functional component with JSX"
                code={`import React from 'react';

function Hello() {
  const title = 'Hello React!';
  const message = 'Welcome to React 18';
  
  return (
    <div>
      <h1 style={{ color: '#61dafb' }}>
        {title}
      </h1>
      <p>{message}</p>
    </div>
  );
}

export default Hello;`}
                language="javascript"
                colorTheme="blue"
              />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>JSX syntax, functional approach, JavaScript/TypeScript flexible</span>
              </div>
            </div>
          )}

          {activeTab === 'vue' && (
            <div className="space-y-4">
              <CodeSnippetWithOutput
                title="Vue Component (Single File)"
                description="HTML-like template with script and style"
                code={`<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello Vue!',
      message: 'Welcome to Vue 3'
    }
  }
}
</script>

<style scoped>
h1 { color: #42b883; }
</style>`}
                language="html"
                colorTheme="emerald"
              />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Familiar HTML syntax, clear separation, easy to understand</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detailed Pros & Cons */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <TrendingUp className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Strengths & Considerations
          </CardTitle>
          <CardDescription className="text-base">
            Understanding what each framework excels at and where it has trade-offs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Angular */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-lg text-red-600 dark:text-red-400">Angular</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold mb-2 text-green-600 dark:text-green-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Strengths
                  </h5>
                  <ul className="text-xs space-y-1.5 text-muted-foreground pl-6">
                    <li>• Complete solution - no decision fatigue</li>
                    <li>• Strong TypeScript integration</li>
                    <li>• Excellent for large enterprise apps</li>
                    <li>• Built-in dependency injection</li>
                    <li>• Powerful CLI tools</li>
                    <li>• Consistent code structure</li>
                    <li>• Strong Angular team at Google</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold mb-2 text-amber-600 dark:text-amber-400 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Considerations
                  </h5>
                  <ul className="text-xs space-y-1.5 text-muted-foreground pl-6">
                    <li>• Steeper learning curve</li>
                    <li>• Larger bundle size</li>
                    <li>• More verbose code</li>
                    <li>• Frequent major updates</li>
                  </ul>
                </div>

                <Badge className="w-full justify-center bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800">
                  Best for Enterprise
                </Badge>
              </div>
            </div>

            {/* React */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400">React</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold mb-2 text-green-600 dark:text-green-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Strengths
                  </h5>
                  <ul className="text-xs space-y-1.5 text-muted-foreground pl-6">
                    <li>• Huge ecosystem & community</li>
                    <li>• Flexible architecture choices</li>
                    <li>• React Native for mobile</li>
                    <li>• Strong job market demand</li>
                    <li>• Backed by Meta (Facebook)</li>
                    <li>• Excellent documentation</li>
                    <li>• Server Components (React 18+)</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold mb-2 text-amber-600 dark:text-amber-400 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Considerations
                  </h5>
                  <ul className="text-xs space-y-1.5 text-muted-foreground pl-6">
                    <li>• Need to choose libraries</li>
                    <li>• JSX learning curve</li>
                    <li>• Rapid ecosystem changes</li>
                    <li>• More setup decisions</li>
                  </ul>
                </div>

                <Badge className="w-full justify-center bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                  Most Popular
                </Badge>
              </div>
            </div>

            {/* Vue */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-lg text-green-600 dark:text-green-400">Vue</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold mb-2 text-green-600 dark:text-green-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Strengths
                  </h5>
                  <ul className="text-xs space-y-1.5 text-muted-foreground pl-6">
                    <li>• Easiest to learn & understand</li>
                    <li>• Excellent documentation</li>
                    <li>• Lightweight & fast performance</li>
                    <li>• Progressive adoption friendly</li>
                    <li>• Single-file components</li>
                    <li>• Balanced flexibility</li>
                    <li>• Composition API (Vue 3)</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold mb-2 text-amber-600 dark:text-amber-400 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Considerations
                  </h5>
                  <ul className="text-xs space-y-1.5 text-muted-foreground pl-6">
                    <li>• Smaller ecosystem than React</li>
                    <li>• Fewer job opportunities</li>
                    <li>• Less corporate backing</li>
                    <li>• Smaller community size</li>
                  </ul>
                </div>

                <Badge className="w-full justify-center bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                  Easiest to Learn
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When to Choose Guide */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Decision Guide: When to Choose Each
          </CardTitle>
          <CardDescription className="text-base">
            Practical scenarios to help you make the right choice for your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Choose Angular */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <h5 className="font-semibold text-red-600 dark:text-red-400">Choose Angular if:</h5>
              </div>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span>Building large-scale enterprise applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span>Team has TypeScript experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span>Want everything included out of the box</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span>Prefer strong conventions and structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span>Long-term maintenance is important</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span>Need robust testing tools built-in</span>
                </li>
              </ul>

              <div className="mt-4 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Example Projects:</p>
                <p className="text-xs text-muted-foreground">Banking apps, CRM systems, Admin dashboards</p>
              </div>
            </div>

            {/* Choose React */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold">
                  R
                </div>
                <h5 className="font-semibold text-blue-600 dark:text-blue-400">Choose React if:</h5>
              </div>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Building complex single-page applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Want maximum flexibility in architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Need cross-platform mobile apps (React Native)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Large community support is essential</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Fast-paced startup environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Want to choose best tools for each need</span>
                </li>
              </ul>

              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Example Projects:</p>
                <p className="text-xs text-muted-foreground">Social media apps, E-commerce, Content platforms</p>
              </div>
            </div>

            {/* Choose Vue */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                  V
                </div>
                <h5 className="font-semibold text-green-600 dark:text-green-400">Choose Vue if:</h5>
              </div>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>You're new to frontend frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>Small to medium-sized projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>Progressive migration from jQuery or vanilla JS</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>Want gentle learning curve with great docs</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>Balance between simplicity and power</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>Working on prototypes or MVPs</span>
                </li>
              </ul>

              <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Example Projects:</p>
                <p className="text-xs text-muted-foreground">Portfolio sites, Small apps, Quick prototypes</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Community & Ecosystem */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Users className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Community & Ecosystem Size
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the support and resources available
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/10 dark:to-pink-950/10 rounded-xl border border-red-200 dark:border-red-800">
              <h5 className="font-semibold mb-3 text-red-600 dark:text-red-400">Angular</h5>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">GitHub Stars</p>
                  <p className="font-semibold">~90K+</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">NPM Downloads</p>
                  <p className="font-semibold">~3M+ weekly</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Companies Using</p>
                  <p className="font-semibold">Google, Microsoft, Forbes</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">React</h5>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">GitHub Stars</p>
                  <p className="font-semibold">~220K+ 🏆</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">NPM Downloads</p>
                  <p className="font-semibold">~20M+ weekly 🏆</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Companies Using</p>
                  <p className="font-semibold">Meta, Netflix, Airbnb</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
              <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">Vue</h5>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">GitHub Stars</p>
                  <p className="font-semibold">~205K+</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">NPM Downloads</p>
                  <p className="font-semibold">~4M+ weekly</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Companies Using</p>
                  <p className="font-semibold">Alibaba, Xiaomi, Adobe</p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6">
            <Package className="h-4 w-4" />
            <AlertTitle>React Leads in Popularity</AlertTitle>
            <AlertDescription>
              React has the largest community and ecosystem, which means more third-party libraries, tutorials, and job opportunities. However, Vue and Angular have strong, dedicated communities with excellent official tooling.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Final Recommendation */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border-2 border-purple-200 dark:border-purple-800">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">The Bottom Line</h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">All three are production-ready and used by major companies worldwide.</strong> Your choice should depend on your specific needs, not trends or hype.
                </p>
                <p>
                  <strong className="text-foreground">Angular</strong> excels in large-scale applications where consistency and structure matter most. Its complete framework approach means fewer decisions but less flexibility.
                </p>
                <p>
                  <strong className="text-foreground">React</strong> offers maximum flexibility and the largest ecosystem. Great for teams that want to choose their own tools and architecture patterns.
                </p>
                <p>
                  <strong className="text-foreground">Vue</strong> provides the easiest learning curve and excellent developer experience. Perfect for beginners and teams that value simplicity without sacrificing power.
                </p>
                <p className="pt-2">
                  <strong className="text-foreground">💡 Pro Tip:</strong> Try building the same small project in each framework before making your final decision. Nothing beats hands-on experience!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

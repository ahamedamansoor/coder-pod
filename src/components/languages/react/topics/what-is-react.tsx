'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Blocks, 
  Sparkles, 
  Zap, 
  Package,
  Component,
  RefreshCw,
  ArrowRight,
  Smile,
  Box,
  TrendingUp,
  Play,
  Shield,
  Users,
  Rocket,
  Target,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Smartphone,
  Monitor,
  Code,
  Cpu,
  Lightbulb,
  Award,
  Star,
  ThumbsUp,
  Clock,
  Database
} from 'lucide-react';

export default function WhatIsReact() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Blocks}
        category="React · Introduction & Setup"
        title="What is React?"
        description="Discover React - Facebook's powerful JavaScript library for building fast, interactive user interfaces with reusable components."
        colorTheme="cyan"
      />

      {/* Introduction: What is React? */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Package className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            What is React?
          </CardTitle>
          <CardDescription className="text-base">
            Discover React - Facebook's powerful JavaScript library for building fast, interactive user interfaces with reusable components
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>React</strong> is a <strong>JavaScript library</strong> created by Facebook (Meta) for building user interfaces. 
            Think of it as a smart toolbox that helps you create interactive websites and apps more easily!
          </p>

          {/* Founding Story */}
          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-cyan-300 dark:border-cyan-700">
            <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">The React Origin Story 🚀</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
              <p><strong>Created by Jordan Walke</strong>, a software engineer at Facebook, React was born in <strong>2011</strong> to solve Facebook's scaling problems. It was first deployed on Facebook's News Feed, then Instagram in 2012.</p>
              <p><strong>Open-sourced in May 2013</strong> at JSConf US, React revolutionized how developers build web applications. What started as Facebook's internal tool is now the <strong>#1 most loved web framework</strong> used by millions worldwide!</p>
            </AlertDescription>
          </Alert>

          {/* Key Facts Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                  <Package className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h4 className="font-bold text-cyan-700 dark:text-cyan-400">Library, Not Framework</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                React focuses solely on the view layer. Flexible and lightweight - add only what you need!
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h4 className="font-bold text-cyan-700 dark:text-cyan-400">Powered by Meta</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Maintained by Meta (Facebook) & open-source community. Used in Facebook, Instagram, WhatsApp & more!
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h4 className="font-bold text-cyan-700 dark:text-cyan-400">Industry Standard</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                16M+ weekly downloads on npm. Used by Netflix, Airbnb, Uber, Tesla, and thousands more!
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-lg mb-4 text-cyan-900 dark:text-cyan-100 flex items-center gap-2">
              <span className="text-2xl">⏱️</span> React Timeline
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <Badge className="bg-cyan-500 text-white shrink-0">2011</Badge>
                <p className="text-gray-700 dark:text-gray-300">Jordan Walke creates FaxJS (React prototype) at Facebook</p>
              </div>
              <div className="flex gap-3">
                <Badge className="bg-cyan-500 text-white shrink-0">2013</Badge>
                <p className="text-gray-700 dark:text-gray-300">React open-sourced at JSConf US - Game changer! 🎉</p>
              </div>
              <div className="flex gap-3">
                <Badge className="bg-cyan-500 text-white shrink-0">2015</Badge>
                <p className="text-gray-700 dark:text-gray-300">React Native launched - Build mobile apps with React!</p>
              </div>
              <div className="flex gap-3">
                <Badge className="bg-cyan-500 text-white shrink-0">2019</Badge>
                <p className="text-gray-700 dark:text-gray-300">React Hooks introduced - Revolutionized state management</p>
              </div>
              <div className="flex gap-3">
                <Badge className="bg-cyan-500 text-white shrink-0">2024</Badge>
                <p className="text-gray-700 dark:text-gray-300">React 19 - Compiler, Server Components, Actions & more! 🚀</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Concepts */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Blocks className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Core Concepts: How React Works
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the fundamental building blocks that make React so powerful
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Components */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400">🧱 Components: The Building Blocks</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <Component className="w-5 h-5 text-purple-500" />
                  What are Components?
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Components are reusable, independent pieces of UI that can be combined to build complex interfaces. Think of them as LEGO blocks for your website!
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <p className="text-xs font-mono text-purple-700 dark:text-purple-300">
                    function Button() {`{ return <button>Click me</button>; }`}
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-purple-500" />
                  Reusability Power
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Create once, use everywhere! Components can accept props (properties) to customize their appearance and behavior.
                </p>
                <div className="space-y-2">
                  <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                    Button text="Save"
                  </Badge>
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                    Button text="Cancel"
                  </Badge>
                  <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                    Button text="Submit"
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Virtual DOM */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-pink-600 dark:text-pink-400">⚡ Virtual DOM: The Speed Secret</h4>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-pink-200 dark:border-pink-700">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Box className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-semibold mb-2">Real DOM</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Slow and expensive to update. Every change requires full page re-render.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <RefreshCw className="w-8 h-8 text-white animate-spin" />
                  </div>
                  <h5 className="font-semibold mb-2">Virtual DOM</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lightweight copy of the real DOM. Fast updates and smart diffing.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-semibold mb-2">Lightning Fast</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Only updates what actually changed. Users see instant results!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* State & Props */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-indigo-600 dark:text-indigo-400">💾 State & Props: The Dynamic Duo</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-indigo-500" />
                  State
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Data that can change over time within a component. When state changes, React automatically re-renders the component.
                </p>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Component's internal memory</li>
                  <li>• Triggers re-renders when changed</li>
                  <li>• Managed with useState hook</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-indigo-500" />
                  Props
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Data passed from parent to child components. Props are read-only and help customize components.
                </p>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Data passed from parent to child</li>
                  <li>• Read-only (immutable)</li>
                  <li>• Enables component communication</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* React vs Competitors */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-red-50/60 dark:from-orange-950/10 dark:to-red-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="w-6 h-6 text-orange-600/80 dark:text-orange-400/80" />
            React vs Other Frameworks: Why Choose React?
          </CardTitle>
          <CardDescription className="text-base">
            A comprehensive comparison of React with other popular JavaScript frameworks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>The Framework Landscape</AlertTitle>
            <AlertDescription>
              Each framework has its strengths. React's philosophy is "learn once, write anywhere" - giving you maximum flexibility and control.
            </AlertDescription>
          </Alert>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-200 dark:border-orange-700">
              <div className="grid grid-cols-5 gap-0">
                {/* Header */}
                <div className="p-4 bg-orange-100 dark:bg-orange-900/30 font-semibold text-orange-800 dark:text-orange-200 border-r border-orange-200 dark:border-orange-700">
                  Feature
                </div>
                <div className="p-4 bg-cyan-100 dark:bg-cyan-900/30 font-semibold text-cyan-800 dark:text-cyan-200 border-r border-orange-200 dark:border-orange-700">
                  React
                </div>
                <div className="p-4 bg-green-100 dark:bg-green-900/30 font-semibold text-green-800 dark:text-green-200 border-r border-orange-200 dark:border-orange-700">
                  Vue
                </div>
                <div className="p-4 bg-purple-100 dark:bg-purple-900/30 font-semibold text-purple-800 dark:text-purple-200 border-r border-orange-200 dark:border-orange-700">
                  Angular
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 font-semibold text-gray-800 dark:text-gray-200">
                  Svelte
                </div>

                {/* Learning Curve */}
                <div className="p-4 bg-gray-50 dark:bg-gray-800 font-medium border-r border-t border-orange-200 dark:border-orange-700">
                  Learning Curve
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-700">Easy</Badge>
                    <span className="text-sm">JSX + Hooks</span>
                  </div>
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-700">Easiest</Badge>
                    <span className="text-sm">HTML-like</span>
                  </div>
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-orange-100 text-orange-700">Steep</Badge>
                    <span className="text-sm">TypeScript + RxJS</span>
                  </div>
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-700">Easy</Badge>
                    <span className="text-sm">Simple syntax</span>
                  </div>
                </div>

                {/* Performance */}
                <div className="p-4 bg-gray-50 dark:bg-gray-800 font-medium border-r border-t border-orange-200 dark:border-orange-700">
                  Performance
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Virtual DOM</span>
                  </div>
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Reactive system</span>
                  </div>
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Good, but heavy</span>
                  </div>
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Compile-time</span>
                  </div>
                </div>

                {/* Flexibility */}
                <div className="p-4 bg-gray-50 dark:bg-gray-800 font-medium border-r border-t border-orange-200 dark:border-orange-700">
                  Flexibility
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Library - Unopinionated</span>
                  </div>
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Progressive framework</span>
                  </div>
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Opinionated</span>
                  </div>
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Compiler-based</span>
                  </div>
                </div>

                {/* Ecosystem */}
                <div className="p-4 bg-gray-50 dark:bg-gray-800 font-medium border-r border-t border-orange-200 dark:border-orange-700">
                  Ecosystem
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Largest community</span>
                  </div>
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Growing fast</span>
                  </div>
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Enterprise-focused</span>
                  </div>
                </div>
                <div className="p-4 border-r border-t border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Smaller but active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* React's Unique Advantages */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-orange-600 dark:text-orange-400">🏆 React's Unique Advantages</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5 text-orange-500" />
                  Maximum Flexibility
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  React is a library, not a framework. You choose your tools, routing, state management, and styling approach.
                </p>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Use any router (React Router, Next.js, etc.)</li>
                  <li>• Choose state management (Redux, Zustand, Context)</li>
                  <li>• Pick styling (CSS Modules, Tailwind, Styled Components)</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-orange-500" />
                  Cross-Platform
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Learn React once and build for web, mobile, and desktop with the same knowledge.
                </p>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Web: React.js</li>
                  <li>• Mobile: React Native</li>
                  <li>• Desktop: Electron + React</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-orange-500" />
                  Industry Adoption
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Used by the world's biggest companies for production applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-700">Facebook</Badge>
                  <Badge className="bg-pink-100 text-pink-700">Instagram</Badge>
                  <Badge className="bg-red-100 text-red-700">Netflix</Badge>
                  <Badge className="bg-green-100 text-green-700">Uber</Badge>
                  <Badge className="bg-purple-100 text-purple-700">Airbnb</Badge>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  Job Market
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  React developers are in high demand with excellent salary prospects.
                </p>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• #1 most requested skill</li>
                  <li>• 40% higher average salary</li>
                  <li>• 100,000+ job openings worldwide</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When to Use React */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-teal-50/60 dark:from-emerald-950/10 dark:to-teal-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            When to Use React: Perfect Use Cases
          </CardTitle>
          <CardDescription className="text-base">
            Discover when React is the right choice for your project and when you might consider alternatives
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Ideal Use Cases */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">✅ Perfect for These Projects</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold mb-2">Single Page Applications</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Complex web apps like Gmail, Trello, or Facebook where user experience matters most.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold mb-2">Mobile Apps</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Native mobile apps using React Native - share code between iOS and Android.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold mb-2">Progressive Web Apps</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fast, reliable web apps that work offline and feel like native apps.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold mb-2">Social Media Platforms</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Real-time updates, complex interactions, and dynamic content feeds.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold mb-2">Data Dashboards</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Complex data visualization and real-time analytics interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* When NOT to Use React */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-orange-600 dark:text-orange-400">⚠️ Consider Alternatives When...</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Simple Static Websites
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  For basic websites with minimal interactivity, React might be overkill.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-orange-700 dark:text-orange-300">Better alternatives:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400">
                    <li>• Plain HTML/CSS/JS</li>
                    <li>• Static site generators (Hugo, Jekyll)</li>
                    <li>• Lightweight frameworks (Alpine.js)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  Quick Prototypes
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  When you need to build something quickly without complex setup.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-orange-700 dark:text-orange-300">Better alternatives:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400">
                    <li>• Vue.js (easier learning curve)</li>
                    <li>• jQuery for simple interactions</li>
                    <li>• No-code/Low-code platforms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Matrix */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h5 className="font-semibold mb-4">🤔 Quick Decision Guide</h5>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Choose React if:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You need a scalable, flexible solution with strong community support and don't mind the learning curve.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Choose Vue if:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You want something easier to learn with great documentation and progressive adoption.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Choose Angular if:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You're building enterprise applications and need a complete, opinionated framework.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Choose Svelte if:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You want the best performance with a compiler-based approach and minimal runtime overhead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why React Dominates */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 dark:from-blue-950/10 dark:to-indigo-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Star className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why React Dominates the Industry
          </CardTitle>
          <CardDescription className="text-base">
            The strategic advantages that make React the preferred choice for modern web development
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Excellence */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400">🔧 Technical Excellence</h4>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border hover:shadow-lg transition-all">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-500" />
                    Backward Compatibility
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React rarely breaks existing code. Your investment in learning React pays off for years.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border hover:shadow-lg transition-all">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-blue-500" />
                    Performance Optimizations
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Concurrent Mode, Suspense, and automatic batching make React incredibly fast.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border hover:shadow-lg transition-all">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-500" />
                    Developer Experience
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Excellent debugging tools, hot reloading, and clear error messages.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Advantages */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-indigo-600 dark:text-indigo-400">💼 Business Advantages</h4>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border hover:shadow-lg transition-all">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-500" />
                    Talent Availability
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Largest pool of developers makes hiring easier and reduces costs.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border hover:shadow-lg transition-all">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-indigo-500" />
                    Faster Development
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Component reusability and rich ecosystem accelerate time-to-market.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border hover:shadow-lg transition-all">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-indigo-500" />
                    Future-Proof
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Continuous innovation with React Server Components and the React Compiler.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h5 className="font-semibold mb-4 text-blue-800 dark:text-blue-200">🏆 Real-World Success Stories</h5>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2B+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Daily active users on Facebook</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1B+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monthly active users on Instagram</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">500M+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Downloads of React apps</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final Summary */}
      <Card className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white border-0">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold">React: The Smart Choice for Modern Web Development</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              React combines flexibility, performance, and an incredible ecosystem to help you build amazing user experiences. 
              Whether you're a beginner or an experienced developer, React provides the tools you need to succeed.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                🚀 Fast Performance
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                🧱 Component-Based
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                🌍 Huge Community
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                💼 Career Opportunities
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

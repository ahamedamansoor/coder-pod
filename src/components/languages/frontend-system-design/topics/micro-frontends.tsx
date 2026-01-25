'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Box, ArrowRight, ArrowLeft, ArrowUpDown, ArrowUp, ArrowDown, Database, Monitor, 
  Code, Zap, Shield, Users, Settings, Cpu, Globe, Cloud, Network,
  CheckCircle2, AlertTriangle, TrendingUp, Target, Eye, Brain, Heart,
  MessageSquare, Rocket, GitBranch, Building2, Puzzle, Activity, Star,
  Award, Lightbulb, TestTube, Smartphone, Laptop, Layers, FileText,
  Play, Square, Circle, Triangle, Hexagon, Package, Wrench, Hammer, XCircle,
  RefreshCw, MousePointer, Webhook, Router, Server, BarChart, CreditCard, ShoppingCart,
  Grid3x3, Layout, Blocks, Link2, Unlink, Dock, Terminal, GitPullRequest,
  MonitorSpeaker, PackageOpen, Archive, FolderTree, TreePine, Workflow
} from 'lucide-react';

interface MicroFrontendsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function MicroFrontends({ onOpenWebPlayground }: MicroFrontendsProps) {

  const architecturePatterns = [
    {
      name: 'Module Federation',
      description: 'Webpack-based runtime integration of separately deployed modules',
      icon: Grid3x3,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      features: [
        'Runtime module loading',
        'Shared dependencies management',
        'Independent deployments',
        'TypeScript support'
      ],
      useCase: 'Large enterprise applications with complex dependencies'
    },
    {
      name: 'Single-SPA',
      description: 'JavaScript router for front-end microservices',
      icon: Layout,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      features: [
        'Framework agnostic',
        'Lazy loading',
        'Native browser history',
        'Active community'
      ],
      useCase: 'Applications requiring multiple framework coexistence'
    },
    {
      name: 'qiankun (Ant Financial)',
      description: 'Production-ready micro frontend framework based on single-spa',
      icon: Blocks,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      features: [
        'Sandbox isolation',
        'Prefetch assets',
        'HTML entry support',
        'Styles isolation'
      ],
      useCase: 'Enterprise applications needing robust isolation'
    },
    {
      name: 'Web Components',
      description: 'Native browser standards for creating reusable components',
      icon: Package,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      borderColor: 'border-orange-200 dark:border-orange-800',
      features: [
        'Framework independent',
        'Shadow DOM isolation',
        'Custom elements',
        'Native browser support'
      ],
      useCase: 'Cross-framework component libraries'
    },
    {
      name: 'iframe-based',
      description: 'Traditional approach using iframes for complete isolation',
      icon: MonitorSpeaker,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      borderColor: 'border-red-200 dark:border-red-800',
      features: [
        'Complete isolation',
        'Simple implementation',
        'Security boundaries',
        'Independent styling'
      ],
      useCase: 'Third-party integrations and security-critical applications'
    },
    {
      name: 'Server-side Includes',
      description: 'Edge-side composition of micro frontends',
      icon: Server,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      features: [
        'Edge composition',
        'SEO friendly',
        'Fast initial load',
        'Server-side rendering'
      ],
      useCase: 'Content-heavy sites requiring SEO optimization'
    }
  ];

  const communicationStrategies = [
    {
      name: 'Event Bus Pattern',
      description: 'Centralized event system for cross-module communication',
      icon: MessageSquare,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/30',
      borderColor: 'border-cyan-200 dark:border-cyan-800',
      pros: ['Loose coupling', 'Scalable', 'Testable'],
      cons: ['Complex debugging', 'Event naming conflicts', 'Memory leaks risk']
    },
    {
      name: 'Shared State Management',
      description: 'Global state accessible by all micro frontends',
      icon: Database,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      pros: ['Consistent state', 'Easy debugging', 'Type safety'],
      cons: ['Tight coupling', 'Performance overhead', 'Complex migrations']
    },
    {
      name: 'Custom Props API',
      description: 'Direct prop passing between parent and child modules',
      icon: Link2,
      color: 'text-violet-600',
      bgColor: 'bg-violet-50 dark:bg-violet-950/30',
      borderColor: 'border-violet-200 dark:border-violet-800',
      pros: ['Simple implementation', 'Type safety', 'Predictable flow'],
      cons: ['Prop drilling', 'Limited to parent-child', 'Rigid structure']
    },
    {
      name: 'API Gateway Pattern',
      description: 'Backend-mediated communication through APIs',
      icon: Router,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
      borderColor: 'border-amber-200 dark:border-amber-800',
      pros: ['Security', 'Caching', 'Monitoring'],
      cons: ['Network latency', 'Server dependency', 'Complex setup']
    }
  ];

  const deploymentStrategies = [
    {
      name: 'Independent Deployment',
      description: 'Each micro frontend deployed separately',
      icon: Rocket,
      steps: [
        'Build individual modules',
        'Deploy to separate CDNs',
        'Update shell configuration',
        'Rollout gradually'
      ],
      benefits: ['Team autonomy', 'Reduced risk', 'Faster iterations']
    },
    {
      name: 'Coordinated Deployment',
      description: 'Synchronized deployment of related modules',
      icon: GitPullRequest,
      steps: [
        'Version compatibility check',
        'Automated testing pipeline',
        'Canary releases',
        'Rollback capabilities'
      ],
      benefits: ['Consistency', 'Reduced conflicts', 'Better coordination']
    },
    {
      name: 'Progressive Deployment',
      description: 'Gradual rollout with feature flags',
      icon: TrendingUp,
      steps: [
        'Feature flag integration',
        'A/B testing setup',
        'User segmentation',
        'Gradual rollout'
      ],
      benefits: ['Risk mitigation', 'User feedback', 'Quick iterations']
    }
  ];

  return (
    <div className="w-full pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Globe}
        category="System Design.Architecture"
        title="Micro Frontend Architecture"
        description="A comprehensive guide to building scalable, maintainable frontend applications with micro frontend patterns"
        colorTheme="teal"
      />

      {/* Introduction Section */}
      <Card className="mb-8 border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50/50 to-cyan-50/30 dark:from-teal-950/20 dark:to-cyan-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-teal-500 rounded-xl">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-teal-700 dark:text-teal-300">
                Understanding Micro Frontends
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Micro frontends extend microservices principles to frontend development, enabling independent teams to build and deploy features
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-teal-200 dark:border-teal-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>Micro Frontends</strong> are an architectural approach where a frontend application is broken down into individual, semi-independent "micro" applications that work together. This pattern allows different teams to work on separate features independently, using their preferred technologies and deployment schedules.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg border border-teal-200 dark:border-teal-800">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h4 className="font-semibold text-teal-700 dark:text-teal-300">Team Autonomy</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Independent teams work on separate features with their own tech stack
                </p>
              </div>
              <div className="p-4 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg border border-cyan-200 dark:border-cyan-800">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h4 className="font-semibold text-cyan-700 dark:text-cyan-300">Independent Deployment</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Each micro frontend can be developed, tested, and deployed independently
                </p>
              </div>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-center gap-2 mb-2">
                  <Puzzle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">Technology Diversity</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Different frameworks can coexist in the same application
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Architecture Patterns Section */}
      <Card className="mb-8 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500 rounded-xl">
              <Grid3x3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                Architecture Patterns
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Different approaches to implement micro frontend architecture
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {architecturePatterns.map((pattern, index) => (
              <div 
                key={index}
                className={`p-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-blue-400 shadow-lg bg-blue-50/50 dark:bg-blue-950/20`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 ${pattern.bgColor} rounded-lg border-2 ${pattern.borderColor}`}>
                    <pattern.icon className={`w-5 h-5 ${pattern.color}`} />
                  </div>
                  <h4 className={`font-bold ${pattern.color}`}>{pattern.name}</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {pattern.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Features:</h5>
                    <ul className="space-y-1">
                      {pattern.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Best For:</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                      {pattern.useCase}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Architecture Diagram */}
      <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-500 rounded-xl">
              <Layout className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                Interactive Architecture Diagram
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Visual representation of micro frontend ecosystem
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-center text-slate-700 dark:text-slate-300 mb-2">
                Micro Frontend Ecosystem
              </h3>
              <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
                Complete overview of micro frontend architecture components
              </p>
            </div>

            {/* Shell Application Layer */}
            <div className="mb-8">
              <div className="p-6 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl border-2 border-purple-500 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300">Shell Application (Container)</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  The main container that orchestrates all micro frontends and provides shared infrastructure
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                    <div className="flex items-center gap-2 mb-2">
                      <Router className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <h5 className="font-semibold text-purple-700 dark:text-purple-300">Routing</h5>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Manages navigation between micro frontends
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <h5 className="font-semibold text-purple-700 dark:text-purple-300">Authentication</h5>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Centralized auth and user management
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                    <div className="flex items-center gap-2 mb-2">
                      <Layout className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <h5 className="font-semibold text-purple-700 dark:text-purple-300">Layout</h5>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Shared layout components and styling
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Frontends Grid */}
            <div className="mb-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Product Catalog */}
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg border-2 border-blue-300 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Product Catalog</h5>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-3 h-3 text-green-600 dark:text-green-400" />
                      <span className="text-slate-600 dark:text-slate-400">React + TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      <span className="text-slate-600 dark:text-slate-400">Product Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      <span className="text-slate-600 dark:text-slate-400">Team A</span>
                    </div>
                  </div>
                </div>

                {/* Shopping Cart */}
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg border-2 border-green-300 dark:border-green-700 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <ShoppingCart className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <h5 className="font-semibold text-green-700 dark:text-green-300">Shopping Cart</h5>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-3 h-3 text-green-600 dark:text-green-400" />
                      <span className="text-slate-600 dark:text-slate-400">Vue 3 + Composition API</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      <span className="text-slate-600 dark:text-slate-400">Cart Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      <span className="text-slate-600 dark:text-slate-400">Team B</span>
                    </div>
                  </div>
                </div>

                {/* User Profile */}
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg border-2 border-purple-300 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300">User Profile</h5>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-3 h-3 text-green-600 dark:text-green-400" />
                      <span className="text-slate-600 dark:text-slate-400">Angular + RxJS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      <span className="text-slate-600 dark:text-slate-400">User Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      <span className="text-slate-600 dark:text-slate-400">Team C</span>
                    </div>
                  </div>
                </div>

                {/* Checkout */}
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg border-2 border-orange-300 dark:border-orange-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300">Checkout</h5>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-3 h-3 text-green-600 dark:text-green-400" />
                      <span className="text-slate-600 dark:text-slate-400">React + MobX</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      <span className="text-slate-600 dark:text-slate-400">Payment Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      <span className="text-slate-600 dark:text-slate-400">Team D</span>
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 rounded-lg border-2 border-red-300 dark:border-red-700 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <h5 className="font-semibold text-red-700 dark:text-red-300">Analytics</h5>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-3 h-3 text-green-600 dark:text-green-400" />
                      <span className="text-slate-600 dark:text-slate-400">Svelte + D3.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      <span className="text-slate-600 dark:text-slate-400">Analytics Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      <span className="text-slate-600 dark:text-slate-400">Team E</span>
                    </div>
                  </div>
                </div>

                {/* Admin Panel */}
                <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-lg border-2 border-indigo-300 dark:border-indigo-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h5 className="font-semibold text-indigo-700 dark:text-indigo-300">Admin Panel</h5>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-3 h-3 text-green-600 dark:text-green-400" />
                      <span className="text-slate-600 dark:text-slate-400">Vue 3 + Vuex</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      <span className="text-slate-600 dark:text-slate-400">Admin Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      <span className="text-slate-600 dark:text-slate-400">Team F</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Communication Layer */}
            <div className="mb-6">
              <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg border-2 border-amber-300 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-3">
                  <Webhook className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  <h4 className="text-lg font-bold text-amber-700 dark:text-amber-300">Communication Layer</h4>
                </div>
                <div className="grid md:grid-cols-4 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-slate-600 dark:text-slate-400">Event Bus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-slate-600 dark:text-slate-400">Shared State</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Router className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-slate-600 dark:text-slate-400">API Gateway</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-slate-600 dark:text-slate-400">Custom Props</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shared Infrastructure */}
            <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-300">Shared Infrastructure</h4>
              </div>
              <div className="grid md:grid-cols-4 gap-3 text-sm">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-emerald-200 dark:border-emerald-700">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-semibold text-emerald-700 dark:text-emerald-300">Auth</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">SSO & Security</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-emerald-200 dark:border-emerald-700">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-semibold text-emerald-700 dark:text-emerald-300">CDN</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Asset Delivery</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-emerald-200 dark:border-emerald-700">
                  <div className="flex items-center gap-2 mb-1">
                    <Cloud className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-semibold text-emerald-700 dark:text-emerald-300">Storage</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Shared Services</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-emerald-200 dark:border-emerald-700">
                  <div className="flex items-center gap-2 mb-1">
                    <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-semibold text-emerald-700 dark:text-emerald-300">Monitor</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Observability</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Communication Strategies Section */}
      <Card className="mb-8 border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-teal-50/30 dark:from-cyan-950/20 dark:to-teal-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-cyan-500 rounded-xl">
              <Webhook className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-cyan-700 dark:text-cyan-300">
                Communication Strategies
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Different approaches for micro frontends to communicate with each other
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {communicationStrategies.map((strategy, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-cyan-200 dark:border-cyan-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 ${strategy.bgColor} rounded-lg border-2 ${strategy.borderColor}`}>
                    <strategy.icon className={`w-6 h-6 ${strategy.color}`} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold ${strategy.color}`}>
                      {strategy.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {strategy.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">✅ Pros</h5>
                    <ul className="space-y-1">
                      {strategy.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                          <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">❌ Cons</h5>
                    <ul className="space-y-1">
                      {strategy.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400">
                          <XCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Deployment Strategies Section */}
      <Card className="mb-8 border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-500 rounded-xl">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                Deployment Strategies
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Approaches to deploy and manage micro frontend applications
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            {deploymentStrategies.map((strategy, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
                    <strategy.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                      {strategy.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {strategy.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">🚀 Deployment Steps</h5>
                    <ol className="space-y-2">
                      {strategy.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <span className="flex-shrink-0 w-5 h-5 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full flex items-center justify-center text-xs font-bold">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">💡 Key Benefits</h5>
                    <ul className="space-y-2">
                      {strategy.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Example */}
      <Card className="mb-8 border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/50 to-gray-50/30 dark:from-slate-950/20 dark:to-gray-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-slate-500 rounded-xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-slate-700 dark:text-slate-300">
                Implementation Example
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Practical code examples for building micro frontends
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Shell Configuration */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-4">
                Shell Application Config
              </h4>
              <pre className="text-xs bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
{`// webpack.config.js - Shell App
const ModuleFederationPlugin = require('@module-federation/webpack');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        products: 'products@http://localhost:3001/remoteEntry.js',
        cart: 'cart@http://localhost:3002/remoteEntry.js',
        profile: 'profile@http://localhost:3003/remoteEntry.js',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true },
      },
    }),
  ],
};`}
              </pre>
            </div>

            {/* Micro Frontend Config */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-4">
                Micro Frontend Config
              </h4>
              <pre className="text-xs bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
{`// webpack.config.js - Product App
const ModuleFederationPlugin = require('@module-federation/webpack');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductApp': './src/ProductApp',
        './ProductList': './src/components/ProductList',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
};`}
              </pre>
            </div>
          </div>

          {/* Component Structure */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800">
            <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-4">
              📁 Recommended Folder Structure
            </h4>
            <pre className="text-xs bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
{`micro-frontend-app/
├── packages/
│   ├── shell/                 # Main container app
│   │   ├── src/
│   │   │   ├── components/    # Shared components
│   │   │   ├── layouts/       # Layout components
│   │   │   ├── hooks/         # Shared hooks
│   │   │   └── App.tsx        # Main shell app
│   │   ├── public/
│   │   └── package.json
│   ├── products/              # Product micro frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── index.ts       # Export exposed components
│   │   └── package.json
│   ├── cart/                  # Cart micro frontend
│   └── profile/               # Profile micro frontend
├── shared/
│   ├── ui/                    # Shared UI components
│   ├── utils/                 # Shared utilities
│   ├── types/                 # Shared TypeScript types
│   └── constants/             # Shared constants
├── tools/
│   ├── webpack/               # Webpack configurations
│   └── scripts/               # Build and deployment scripts
└── package.json               # Root package.json`}
            </pre>
          </div>

          {/* Event Bus Implementation */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800">
            <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-4">
              📡 Event Bus Implementation
            </h4>
            <pre className="text-xs bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
{`// shared/event-bus.ts
type EventHandler = (data: any) => void;

class EventBus {
  private events: Map<string, EventHandler[]> = new Map();

  on(event: string, handler: EventHandler) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(handler);
  }

  off(event: string, handler: EventHandler) {
    const handlers = this.events.get(event);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }

  emit(event: string, data: any) {
    const handlers = this.events.get(event);
    if (handlers) {
      handlers.forEach(handler => handler(data));
    }
  }
}

export const eventBus = new EventBus();

// Usage in micro frontend
eventBus.on('cart:updated', (cartData) => {
  updateCartUI(cartData);
});

eventBus.emit('product:added', { productId: '123', quantity: 1 });`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="mb-8 border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-500 rounded-xl">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                Best Practices
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Key guidelines for successful micro frontend implementation
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-700 dark:text-green-300">Clear Boundaries</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Define clear domain boundaries and ownership for each micro frontend
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-700 dark:text-green-300">Security First</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Implement proper authentication, authorization, and data validation
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-700 dark:text-green-300">Performance Monitoring</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Monitor performance metrics and optimize loading times
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-3">
                <TestTube className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-700 dark:text-green-300">Testing Strategy</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Test micro frontends independently and in integration scenarios
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-700 dark:text-green-300">Version Management</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Use semantic versioning and manage dependencies carefully
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-700 dark:text-green-300">Team Coordination</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Establish clear communication channels and coordination processes
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="mb-8 border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-pink-50/30 dark:from-red-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-red-500 rounded-xl">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-red-700 dark:text-red-300">
                Common Pitfalls to Avoid
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Learn from common mistakes in micro frontend implementations
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
                    Over-fragmentation
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Breaking the application into too many small micro frontends can lead to unnecessary complexity.
                  </p>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Start with larger, domain-driven boundaries and split only when necessary.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
                    Ignoring Performance
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Multiple frameworks and bundles can significantly impact loading performance.
                  </p>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Implement code splitting, lazy loading, and shared dependencies optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
                    Inconsistent Design
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Different teams using different design systems can create inconsistent user experience.
                  </p>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Establish a shared design system and UI component library.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="mb-8 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500 rounded-xl">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                Key Takeaways
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Essential insights and learning points about micro frontend architecture
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Team Autonomy</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Micro frontends enable teams to work independently with their own technology choices and deployment schedules.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Scalable Architecture</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Independent scaling and deployment of different application parts based on specific needs.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Puzzle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Technology Diversity</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Different frameworks and tools can coexist, allowing teams to choose the best technology for their specific needs.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Isolation Benefits</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Proper isolation prevents conflicts and ensures that issues in one micro frontend don't affect others.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Faster Development</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Smaller, focused teams can develop and deploy features more quickly than large, monolithic teams.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Gradual Adoption</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Existing applications can be gradually migrated to micro frontend architecture without complete rewrites.
              </p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3">
              💡 Core Insight
            </h4>
            <p className="text-blue-600 dark:text-blue-400 leading-relaxed">
              Micro frontends represent a shift in how we think about frontend architecture, prioritizing team autonomy, 
              independent deployment, and technology diversity over traditional monolithic approaches. When implemented correctly, 
              they can significantly improve development velocity and scalability while maintaining excellent user experience.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

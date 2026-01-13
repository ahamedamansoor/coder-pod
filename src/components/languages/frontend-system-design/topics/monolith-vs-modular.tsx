'use client';

import React from 'react';
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
  MonitorSpeaker, PackageOpen, Archive, FolderTree, TreePine, Workflow, Layers3,
  Home, Building, Factory, Construction, BrickWall
} from 'lucide-react';

interface MonolithVsModularProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function MonolithVsModular({ onOpenWebPlayground }: MonolithVsModularProps) {

  const architectureTypes = [
    {
      name: 'Monolithic Architecture',
      description: 'Single, self-contained application with all functionality in one codebase',
      icon: Building,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      borderColor: 'border-red-200 dark:border-red-800',
      hoverBgColor: 'bg-red-100 dark:bg-red-900/50',
      advantages: [
        'Simple to develop and deploy',
        'Easy debugging and testing',
        'Single deployment unit',
        'Strong consistency',
        'Lower operational complexity'
      ],
      disadvantages: [
        'Difficult to scale individual components',
        'Technology lock-in',
        'Slower build and deployment times',
        'Tight coupling between modules',
        'Single point of failure'
      ],
      examples: [
        'Traditional web applications',
        'Small to medium projects',
        'Rapid prototypes',
        'Legacy systems',
        'Simple CRUD applications'
      ]
    },
    {
      name: 'Modular Architecture',
      description: 'Application divided into independent, loosely coupled modules',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      hoverBgColor: 'bg-blue-100 dark:bg-blue-900/50',
      advantages: [
        'Independent module development',
        'Better scalability',
        'Technology diversity',
        'Easier maintenance',
        'Team autonomy'
      ],
      disadvantages: [
        'Increased complexity',
        'Deployment coordination',
        'Inter-module communication overhead',
        'Initial setup complexity',
        'Potential for duplication'
      ],
      examples: [
        'Large enterprise applications',
        'Multi-team projects',
        'Service-oriented architectures',
        'Plugin systems',
        'Extensible platforms'
      ]
    }
  ];

  const comparisonPoints = [
    {
      category: 'Development',
      monolith: {
        title: 'Unified Development',
        description: 'Single codebase with shared dependencies',
        pros: ['Simple setup', 'No API overhead', 'Easy refactoring'],
        cons: ['Code conflicts', 'Slower builds', 'Deployment dependencies']
      },
      modular: {
        title: 'Independent Development',
        description: 'Separate modules with own dependencies',
        pros: ['Parallel development', 'Independent builds', 'Technology choice'],
        cons: ['API complexity', 'Version conflicts', 'Integration overhead']
      }
    },
    {
      category: 'Deployment',
      monolith: {
        title: 'Single Unit Deployment',
        description: 'Deploy entire application as one unit',
        pros: ['Simple process', 'Atomic updates', 'Easy rollback'],
        cons: ['Downtime required', 'All-or-nothing', 'Risk of failure']
      },
      modular: {
        title: 'Independent Deployment',
        description: 'Deploy modules independently',
        pros: ['Zero downtime', 'Selective updates', 'Lower risk'],
        cons: ['Complex orchestration', 'Version management', 'Deployment coordination']
      }
    },
    {
      category: 'Scalability',
      monolith: {
        title: 'Vertical Scaling',
        description: 'Scale entire application together',
        pros: ['Simple scaling', 'Resource efficiency', 'Cost effective for small apps'],
        cons: ['Limited flexibility', 'Resource waste', 'Single bottleneck']
      },
      modular: {
        title: 'Horizontal Scaling',
        description: 'Scale individual modules as needed',
        pros: ['Targeted scaling', 'Resource optimization', 'Better performance'],
        cons: ['Complex scaling', 'Resource overhead', 'Load balancing']
      }
    },
    {
      category: 'Maintenance',
      monolith: {
        title: 'Centralized Maintenance',
        description: 'Single codebase to maintain',
        pros: ['Consistent updates', 'Simple testing', 'Unified monitoring'],
        cons: ['Update complexity', 'Testing overhead', 'Deployment risk']
      },
      modular: {
        title: 'Distributed Maintenance',
        description: 'Maintain modules independently',
        pros: ['Isolated updates', 'Focused testing', 'Independent monitoring'],
        cons: ['Version management', 'Integration testing', 'Monitoring complexity']
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Monolith vs Modular Architecture"
        description="Compare and contrast monolithic and modular architectural approaches to make informed design decisions"
        icon={Layout}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-blue-50/30 dark:from-orange-950/20 dark:to-blue-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-500 rounded-xl">
                <Layout className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-orange-700 dark:text-orange-300">
                  Understanding Architectural Approaches
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Choosing between monolithic and modular architecture is a critical decision that impacts development speed, scalability, and maintainability of your application.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
                <h4 className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Key Considerations
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Team size and structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Application complexity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Scalability requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Development timeline</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
                <h4 className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
                  When to Choose
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Monolith: Small teams, simple apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Modular: Large teams, complex systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Hybrid: Gradual evolution approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Consider future growth needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Architecture Types Overview */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500 rounded-xl">
                <Layers3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                  Architecture Types
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Detailed comparison of monolithic and modular architectural approaches
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Architecture Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {architectureTypes.map((arch, index) => (
                <div key={index} className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl animate-pulse"></div>
                  
                  {/* Architecture Card */}
                  <div className={`relative p-6 rounded-2xl border-3 bg-gradient-to-br ${arch.bgColor} ${arch.borderColor} shadow-2xl transform transition-all duration-300 hover:scale-105`}>
                    <div className="absolute -top-3 -right-3">
                      <div className={`w-8 h-8 ${arch.color.replace('text', 'bg')} rounded-full flex items-center justify-center`}>
                        <arch.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <arch.icon className={`w-16 h-16 ${arch.color} mx-auto mb-3`} />
                      <h3 className={`text-xl font-bold ${arch.color} mb-2`}>
                        {arch.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                        {arch.description}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Advantages:
                        </h5>
                        <ul className="space-y-1">
                          {arch.advantages.map((adv, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              {adv}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Disadvantages:
                        </h5>
                        <ul className="space-y-1">
                          {arch.disadvantages.map((dis, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <AlertTriangle className="w-3 h-3 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                              {dis}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Best For:
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {arch.examples.map((example, i) => (
                            <span key={i} className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Comparison */}
        <Card className="border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50/50 to-cyan-50/30 dark:from-teal-950/20 dark:to-cyan-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-teal-500 rounded-xl">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-teal-700 dark:text-teal-300">
                  Detailed Comparison
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Side-by-side analysis of monolithic vs modular architecture across different aspects
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {comparisonPoints.map((point, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-teal-200 dark:border-teal-800">
                <h4 className="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-4">
                  {point.category}
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Monolith Side */}
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-3 mb-3">
                      <Building className="w-6 h-6 text-red-600 dark:text-red-400" />
                      <h5 className="font-semibold text-red-700 dark:text-red-300">
                        {point.monolith.title}
                      </h5>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {point.monolith.description}
                    </p>
                    <div className="space-y-2">
                      <div>
                        <h6 className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros:</h6>
                        <ul className="space-y-1">
                          {point.monolith.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h6 className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons:</h6>
                        <ul className="space-y-1">
                          {point.monolith.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <XCircle className="w-3 h-3 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Modular Side */}
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-3 mb-3">
                      <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <h5 className="font-semibold text-blue-700 dark:text-blue-300">
                        {point.modular.title}
                      </h5>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {point.modular.description}
                    </p>
                    <div className="space-y-2">
                      <div>
                        <h6 className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros:</h6>
                        <ul className="space-y-1">
                          {point.modular.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h6 className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons:</h6>
                        <ul className="space-y-1">
                          {point.modular.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <XCircle className="w-3 h-3 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Decision Matrix */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-emerald-500 rounded-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                  Decision Matrix
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Guidelines to help you choose the right architecture for your project
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Choose Monolith When */}
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <h4 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Choose Monolith When:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Small Team (1-5 developers)</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Single team can manage entire codebase effectively
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Simple Business Logic</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Straightforward requirements with limited complexity
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Rapid Development Needed</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Quick time-to-market is priority over long-term scalability
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Limited Scaling Requirements</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Vertical scaling is sufficient for expected load
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Choose Modular When */}
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Choose Modular When:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Large Team (5+ developers)</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Multiple teams need to work independently
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Complex Business Logic</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Different domains with distinct requirements
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">High Scaling Requirements</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Need to scale individual components independently
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Technology Diversity</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Different modules benefit from different technologies
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Hybrid Approach */}
            <div className="p-6 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl border border-orange-200 dark:border-orange-800">
              <h4 className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-4 flex items-center gap-2">
                <GitBranch className="w-5 h-5" />
                Hybrid Approach: Start Monolith, Evolve to Modular
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Start Simple</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Begin with monolith for rapid development
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Identify Boundaries</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Recognize natural module boundaries
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Extract Modules</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Gradually extract modules as needed
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/30 dark:from-indigo-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-indigo-500 rounded-xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-indigo-700 dark:text-indigo-300">
                  Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Guidelines for implementing both monolithic and modular architectures effectively
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Monolith Best Practices */}
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <h4 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Monolith Best Practices
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Use layered architecture (UI, Business, Data)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Implement dependency injection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Follow SOLID principles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Use feature toggles for gradual releases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Plan for future modularization</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Modular Best Practices */}
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Modular Best Practices
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Define clear module boundaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Use API contracts for communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Implement proper error handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Use shared libraries carefully</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Monitor inter-module dependencies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/50 to-gray-50/30 dark:from-slate-950/20 dark:to-gray-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-slate-500 rounded-xl">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-slate-700 dark:text-slate-300">
                  Key Takeaways
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential insights for making the right architectural decision
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  Remember: No Silver Bullet
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Context Matters:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Best architecture depends on your specific context and requirements
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Evolution is Key:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Architecture should evolve with your application and team
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Trade-offs Exist:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Every decision involves trade-offs between complexity and flexibility
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  Success Factors
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Team Alignment:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Ensure team understands and supports architectural decisions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Documentation:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Document architectural decisions and rationale
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Continuous Evaluation:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Regularly review and adapt architecture as needs change
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-900/30 dark:to-gray-900/30 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3 text-center">
                Choose Wisely, Build Successfully
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center">
                The right architecture choice sets the foundation for your application's success. 
                Consider your team, requirements, and future growth when deciding between 
                monolithic and modular approaches. Remember that you can always evolve your 
                architecture as your needs change.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

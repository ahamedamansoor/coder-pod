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
  RefreshCw, MousePointer, Webhook, Router, Server, Component, TreePine,
  Blocks, PackageOpen, Recycle, Copy, Merge, Split, Grid3X3, LayoutGrid, Plus, Minus, X
} from 'lucide-react';

interface ComponentBasedArchitectureProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function ComponentBasedArchitecture({ onOpenWebPlayground }: ComponentBasedArchitectureProps) {
  const [activeFlowStep, setActiveFlowStep] = useState<number | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const componentTypes = [
    {
      name: 'Atomic Components',
      description: 'Smallest indivisible UI elements like buttons, inputs, labels',
      icon: Circle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      hoverBgColor: 'bg-blue-100 dark:bg-blue-900/50',
      responsibilities: [
        'Single responsibility',
        'No internal state',
        'Highly reusable',
        'Framework agnostic'
      ],
      characteristics: [
        'Minimal dependencies',
        'Pure functions',
        'Testable in isolation',
        'Composable'
      ],
      examples: [
        'Button component',
        'Input field',
        'Avatar',
        'Icon'
      ]
    },
    {
      name: 'Molecular Components',
      description: 'Simple combinations of atomic components forming small UI patterns',
      icon: Package,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      hoverBgColor: 'bg-green-100 dark:bg-green-900/50',
      responsibilities: [
        'Combine atomic elements',
        'Handle simple interactions',
        'Provide basic functionality',
        'Maintain reusability'
      ],
      characteristics: [
        'Composition focused',
        'Limited state management',
        'Clear API surface',
        'Configurable behavior'
      ],
      examples: [
        'Search box',
        'Card component',
        'Form field',
        'Dropdown'
      ]
    },
    {
      name: 'Organism Components',
      description: 'Complex UI sections composed of molecules and atoms',
      icon: Blocks,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      hoverBgColor: 'bg-purple-100 dark:bg-purple-900/50',
      responsibilities: [
        'Orchestrate multiple components',
        'Manage complex state',
        'Handle business logic',
        'Provide complete features'
      ],
      characteristics: [
        'Complex composition',
        'State management',
        'Data flow coordination',
        'Feature complete'
      ],
      examples: [
        'Header navigation',
        'Product list',
        'User profile',
        'Dashboard widget'
      ]
    },
    {
      name: 'Template Components',
      description: 'Page-level layouts that organize organisms and molecules',
      icon: LayoutGrid,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      borderColor: 'border-orange-200 dark:border-orange-800',
      hoverBgColor: 'bg-orange-100 dark:bg-orange-900/50',
      responsibilities: [
        'Define page structure',
        'Arrange content sections',
        'Handle routing logic',
        'Manage page state'
      ],
      characteristics: [
        'Layout focused',
        'Route aware',
        'Content orchestration',
        'Page-level concerns'
      ],
      examples: [
        'Homepage layout',
        'Dashboard page',
        'Product detail page',
        'Settings page'
      ]
    }
  ];

  const compositionSteps = [
    {
      id: 1,
      title: 'Atomic Design Foundation',
      description: 'Start with smallest, reusable atomic components',
      icon: Circle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      details: [
        'Create base UI elements',
        'Define consistent styling',
        'Establish design tokens',
        'Ensure accessibility standards'
      ],
      components: ['Atoms'],
      direction: 'Foundation Layer'
    },
    {
      id: 2,
      title: 'Molecular Composition',
      description: 'Combine atoms into functional molecular components',
      icon: Package,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/50',
      details: [
        'Group related atoms',
        'Add interaction logic',
        'Create reusable patterns',
        'Define component APIs'
      ],
      components: ['Atoms', 'Molecules'],
      direction: 'Composition Layer'
    },
    {
      id: 3,
      title: 'Organism Assembly',
      description: 'Build complex UI sections from molecules and atoms',
      icon: Blocks,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/50',
      details: [
        'Orchestrate multiple molecules',
        'Manage component state',
        'Handle data flow',
        'Implement business logic'
      ],
      components: ['Atoms', 'Molecules', 'Organisms'],
      direction: 'Feature Layer'
    },
    {
      id: 4,
      title: 'Template Layout',
      description: 'Arrange organisms into page-level templates',
      icon: LayoutGrid,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/50',
      details: [
        'Define page structure',
        'Handle routing concerns',
        'Manage layout state',
        'Coordinate content flow'
      ],
      components: ['All Component Types'],
      direction: 'Page Layer'
    },
    {
      id: 5,
      title: 'Application Assembly',
      description: 'Combine templates into complete application',
      icon: Globe,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/50',
      details: [
        'Integrate all components',
        'Handle global state',
        'Manage application flow',
        'Ensure consistency'
      ],
      components: ['Complete System'],
      direction: 'Application Layer'
    }
  ];

  const lifecyclePhases = [
    {
      phase: 'Creation',
      description: 'Component initialization and setup',
      icon: Play,
      color: 'text-green-600',
      activities: [
        'Props validation',
        'State initialization',
        'Effect setup',
        'Context subscription'
      ]
    },
    {
      phase: 'Update',
      description: 'Component re-rendering and state changes',
      icon: RefreshCw,
      color: 'text-blue-600',
      activities: [
        'Props changes',
        'State updates',
        'Context changes',
        'Parent re-renders'
      ]
    },
    {
      phase: 'Destruction',
      description: 'Component cleanup and resource management',
      icon: Square,
      color: 'text-red-600',
      activities: [
        'Effect cleanup',
        'Event listener removal',
        'Memory deallocation',
        'Subscription cleanup'
      ]
    }
  ];

  return (
    <div className="w-full pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Component}
        category="System Design.Architecture"
        title="Component-Based Architecture"
        description="A comprehensive guide to designing scalable component systems with composition, reusability, and lifecycle management"
        colorTheme="indigo"
      />

      {/* Introduction Section */}
      <Card className="mb-8 border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/30 dark:from-indigo-950/20 dark:to-purple-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-indigo-500 rounded-xl">
              <Component className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-indigo-700 dark:text-indigo-300">
                Understanding Component-Based Architecture
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Modern approach to building scalable, maintainable UI systems through composable components
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>Component-Based Architecture</strong> is a design approach that breaks down user interfaces into small, independent, and reusable components. This pattern promotes modularity, reusability, and maintainability by creating a hierarchy of composable elements.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">Atomic Design</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Hierarchical component structure from atoms to templates
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <TestTube className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300">Composition Over Inheritance</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Build complex UIs by combining simple components
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300">Reusability First</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Design components for maximum reuse across applications
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Hierarchy Diagram */}
      <Card className="mb-8 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500 rounded-xl">
              <TreePine className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                Component Hierarchy
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Interactive visualization of atomic design hierarchy and component relationships
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Main Architecture Diagram */}
          <div className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-center text-slate-700 dark:text-slate-300 mb-2">
                Atomic Design Hierarchy
              </h3>
              <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
                Click on any component type to explore its characteristics
              </p>
            </div>
            
            {/* Enhanced Visual Layout */}
            <div className="relative">
              {/* Component Layout */}
              <div className="relative z-10">
                {/* Top Row: Templates */}
                <div className="flex justify-center mb-8">
                  <div className="text-center">
                    <div 
                      className={`relative group cursor-pointer transition-all duration-300 transform ${
                        selectedComponent === 'Template Components' 
                          ? 'scale-110' 
                          : 'hover:scale-105'
                      }`}
                      onClick={() => setSelectedComponent(selectedComponent === 'Template Components' ? null : 'Template Components')}
                    >
                      {/* Glow Effect */}
                      {selectedComponent === 'Template Components' && (
                        <div className="absolute inset-0 bg-orange-400/20 rounded-2xl blur-xl animate-pulse"></div>
                      )}
                      
                      {/* Component Card */}
                      <div className={`relative p-6 rounded-2xl border-3 transition-all duration-300 ${
                        selectedComponent === 'Template Components' 
                          ? 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800/50 dark:to-orange-900/50 border-orange-500 shadow-2xl' 
                          : 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 border-orange-300 dark:border-orange-700 shadow-lg hover:shadow-xl hover:border-orange-400'
                      }`}>
                        <div className="absolute -top-3 -right-3">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <LayoutGrid className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        
                        <LayoutGrid className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                        <h3 className="text-lg font-bold text-orange-700 dark:text-orange-300 mb-1">
                          Templates
                        </h3>
                        <p className="text-xs text-orange-600 dark:text-orange-400">
                          Page Layouts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center mb-8">
                  <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                {/* Organisms Row */}
                <div className="flex justify-center mb-8">
                  <div className="text-center">
                    <div 
                      className={`relative group cursor-pointer transition-all duration-300 transform ${
                        selectedComponent === 'Organism Components' 
                          ? 'scale-110' 
                          : 'hover:scale-105'
                      }`}
                      onClick={() => setSelectedComponent(selectedComponent === 'Organism Components' ? null : 'Organism Components')}
                    >
                      {/* Glow Effect */}
                      {selectedComponent === 'Organism Components' && (
                        <div className="absolute inset-0 bg-purple-400/20 rounded-2xl blur-xl animate-pulse"></div>
                      )}
                      
                      {/* Component Card */}
                      <div className={`relative p-6 rounded-2xl border-3 transition-all duration-300 ${
                        selectedComponent === 'Organism Components' 
                          ? 'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800/50 dark:to-purple-900/50 border-purple-500 shadow-2xl' 
                          : 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border-purple-300 dark:border-purple-700 shadow-lg hover:shadow-xl hover:border-purple-400'
                      }`}>
                        <div className="absolute -top-3 -right-3">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                            <Blocks className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        
                        <Blocks className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                        <h3 className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-1">
                          Organisms
                        </h3>
                        <p className="text-xs text-purple-600 dark:text-purple-400">
                          Complex Sections
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center mb-8">
                  <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                {/* Molecules Row */}
                <div className="flex justify-center mb-8">
                  <div className="text-center">
                    <div 
                      className={`relative group cursor-pointer transition-all duration-300 transform ${
                        selectedComponent === 'Molecular Components' 
                          ? 'scale-110' 
                          : 'hover:scale-105'
                      }`}
                      onClick={() => setSelectedComponent(selectedComponent === 'Molecular Components' ? null : 'Molecular Components')}
                    >
                      {/* Glow Effect */}
                      {selectedComponent === 'Molecular Components' && (
                        <div className="absolute inset-0 bg-green-400/20 rounded-2xl blur-xl animate-pulse"></div>
                      )}
                      
                      {/* Component Card */}
                      <div className={`relative p-6 rounded-2xl border-3 transition-all duration-300 ${
                        selectedComponent === 'Molecular Components' 
                          ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800/50 dark:to-green-900/50 border-green-500 shadow-2xl' 
                          : 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border-green-300 dark:border-green-700 shadow-lg hover:shadow-xl hover:border-green-400'
                      }`}>
                        <div className="absolute -top-3 -right-3">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <Package className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        
                        <Package className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-2" />
                        <h3 className="text-lg font-bold text-green-700 dark:text-green-300 mb-1">
                          Molecules
                        </h3>
                        <p className="text-xs text-green-600 dark:text-green-400">
                          Simple Combinations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center mb-8">
                  <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                {/* Atoms Row */}
                <div className="flex justify-center">
                  <div className="text-center">
                    <div 
                      className={`relative group cursor-pointer transition-all duration-300 transform ${
                        selectedComponent === 'Atomic Components' 
                          ? 'scale-110' 
                          : 'hover:scale-105'
                      }`}
                      onClick={() => setSelectedComponent(selectedComponent === 'Atomic Components' ? null : 'Atomic Components')}
                    >
                      {/* Glow Effect */}
                      {selectedComponent === 'Atomic Components' && (
                        <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl animate-pulse"></div>
                      )}
                      
                      {/* Component Card */}
                      <div className={`relative p-6 rounded-2xl border-3 transition-all duration-300 ${
                        selectedComponent === 'Atomic Components' 
                          ? 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800/50 dark:to-blue-900/50 border-blue-500 shadow-2xl' 
                          : 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-blue-300 dark:border-blue-700 shadow-lg hover:shadow-xl hover:border-blue-400'
                      }`}>
                        <div className="absolute -top-3 -right-3">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <Circle className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        
                        <Circle className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                        <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1">
                          Atoms
                        </h3>
                        <p className="text-xs text-blue-600 dark:text-blue-400">
                          Basic Elements
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Component Details Panel */}
          {selectedComponent && (
            <div className="mt-8 p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-xl">
              {(() => {
                const component = componentTypes.find(c => c.name === selectedComponent);
                if (!component) return null;
                
                return (
                  <div className="space-y-6">
                    {/* Component Header */}
                    <div className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                      <div className={`p-4 ${component.bgColor} rounded-xl border-2 ${component.borderColor}`}>
                        <component.icon className={`w-8 h-8 ${component.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-2xl font-bold ${component.color} mb-1`}>
                          {component.name}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {component.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Details Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Responsibilities */}
                      <div className="space-y-3">
                        <h5 className="text-lg font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                          Core Responsibilities
                        </h5>
                        <div className="space-y-2">
                          {component.responsibilities.map((resp: string, i: number) => (
                            <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-slate-700 dark:text-slate-300">
                                {resp}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Characteristics */}
                      <div className="space-y-3">
                        <h5 className="text-lg font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                          Key Characteristics
                        </h5>
                        <div className="space-y-2">
                          {component.characteristics.map((char: string, i: number) => (
                            <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-slate-700 dark:text-slate-300">
                                {char}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Examples */}
                    <div className="space-y-3">
                      <h5 className="text-lg font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Real-World Examples
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {component.examples.map((example: string, i: number) => (
                          <div key={i} className="px-4 py-2 bg-gradient-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-full text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 shadow-sm">
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Component Composition Visualization */}
      <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-500 rounded-xl">
              <Merge className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                Component Composition
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Interactive step-by-step breakdown of how components compose into complex UIs
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Interactive Composition Steps */}
          <div className="space-y-4">
            {compositionSteps.map((step: any, index: number) => (
              <div key={index} className="relative">
                <div 
                  className={`p-6 bg-white dark:bg-slate-800 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    activeFlowStep === step.id 
                      ? 'border-purple-500 shadow-2xl bg-purple-50/50 dark:bg-purple-950/20' 
                      : 'border-purple-200 dark:border-purple-800 hover:border-purple-400 hover:shadow-lg'
                  }`}
                  onClick={() => setActiveFlowStep(activeFlowStep === step.id ? null : step.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${step.bgColor} rounded-lg border-2 border-purple-200 dark:border-purple-800`}>
                      <div className="flex items-center gap-2">
                        <step.icon className={`w-5 h-5 ${step.color}`} />
                        <span className="text-sm font-bold text-purple-700 dark:text-purple-300">
                          Step {step.id}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className={`text-lg font-bold ${step.color}`}>
                          {step.title}
                        </h4>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200 rounded-full text-sm">
                          {step.direction}
                        </span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        {step.description}
                      </p>
                      
                      {activeFlowStep === step.id && (
                        <div className="grid md:grid-cols-2 gap-4 animate-in slide-in-from-top-2 duration-300">
                          <div>
                            <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                              What Happens:
                            </h5>
                            <ul className="space-y-1">
                              {step.details.map((detail: any, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                  <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                              Components Involved:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {step.components.map((comp: string, i: number) => (
                                <span key={i} className="px-2 py-1 bg-purple-50 dark:bg-purple-950/30 rounded-full text-xs text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">
                                  {comp}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {index < compositionSteps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Composition Summary */}
          <div className="p-6 bg-purple-100 dark:bg-purple-900/30 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-4">
              Composition Hierarchy Summary
            </h4>
            <div className="flex items-center justify-center gap-4 text-center flex-wrap">
              <div className="flex flex-col items-center">
                <Circle className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Atoms</span>
              </div>
              <Plus className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div className="flex flex-col items-center">
                <Package className="w-10 h-10 text-green-600 dark:text-green-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Molecules</span>
              </div>
              <Plus className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div className="flex flex-col items-center">
                <Blocks className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Organisms</span>
              </div>
              <Plus className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div className="flex flex-col items-center">
                <LayoutGrid className="w-10 h-10 text-orange-600 dark:text-orange-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Templates</span>
              </div>
              <X className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <div className="flex flex-col items-center">
                <Globe className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Application</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Lifecycle Management */}
      <Card className="mb-8 border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-500 rounded-xl">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                Component Lifecycle Management
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Understanding component creation, updates, and destruction for optimal performance
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Lifecycle Phases */}
          <div className="grid md:grid-cols-3 gap-6">
            {lifecyclePhases.map((phase: any, index: number) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-${phase.color === 'text-green-600' ? 'green' : phase.color === 'text-blue-600' ? 'blue' : 'red'}-100 dark:bg-${phase.color === 'text-green-600' ? 'green' : phase.color === 'text-blue-600' ? 'blue' : 'red'}-900 rounded-lg`}>
                    <phase.icon className={`w-6 h-6 ${phase.color}`} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold ${phase.color}`}>
                      {phase.phase}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {phase.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Key Activities:
                  </h5>
                  <ul className="space-y-1">
                    {phase.activities.map((activity: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Lifecycle Flow */}
          <div className="p-6 bg-green-100 dark:bg-green-900/30 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="text-lg font-bold text-green-700 dark:text-green-300 mb-4">
              Component Lifecycle Flow
            </h4>
            <div className="flex items-center justify-center gap-4 text-center flex-wrap">
              <div className="flex flex-col items-center">
                <Play className="w-10 h-10 text-green-600 dark:text-green-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Mount</span>
              </div>
              <ArrowRight className="w-6 h-6 text-green-600 dark:text-green-400" />
              <div className="flex flex-col items-center">
                <RefreshCw className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Update</span>
              </div>
              <ArrowRight className="w-6 h-6 text-green-600 dark:text-green-400" />
              <div className="flex flex-col items-center">
                <Square className="w-10 h-10 text-red-600 dark:text-red-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Unmount</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reusability Patterns */}
      <Card className="mb-8 border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/30 dark:from-orange-950/20 dark:to-amber-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-orange-500 rounded-xl">
              <Recycle className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-orange-700 dark:text-orange-300">
                Reusability Patterns
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Practical strategies for creating highly reusable and maintainable components
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* React Reusability Example */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                    React Reusability Patterns
                  </h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm">
                    JavaScript/React
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Modern React patterns for creating reusable components with hooks and composition
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Atomic Button Component */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Circle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300">Atomic Button</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Atomic Button Component
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'btn';
  const variantClasses = \`btn-\${variant}\`;
  const sizeClasses = \`btn-\${size}\`;
  
  const classes = [
    baseClasses,
    variantClasses,
    sizeClasses,
    disabled && 'btn-disabled',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Usage Examples
<Button variant="primary" size="large">
  Submit
</Button>

<Button variant="secondary" onClick={handleCancel}>
  Cancel
</Button>`}</code>
                  </pre>
                </div>
              </div>
              
              {/* Molecular Form Field */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <Package className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-300">Molecular Form Field</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Molecular Form Field Component
const FormField = ({ 
  label, 
  error, 
  required = false,
  children 
}) => {
  const fieldId = useId();
  
  return (
    <div className="form-field">
      {label && (
        <label 
          htmlFor={fieldId}
          className="form-label"
        >
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      
      {React.cloneElement(children, {
        id: fieldId,
        'aria-invalid': !!error,
        'aria-describedby': error ? \`\${fieldId}-error\` : undefined
      })}
      
      {error && (
        <div 
          id={\`\${fieldId}-error\`}
          className="form-error"
          role="alert"
        >
          {error}
        </div>
      )}
    </div>
  );
};

// Usage Example
<FormField 
  label="Email" 
  error={emailError} 
  required
>
  <Input 
    type="email" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</FormField>`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Flow Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Circle className="w-4 h-4 text-blue-600" />
                <span>Atomic</span>
              </div>
              <Plus className="w-4 h-4 text-orange-600" />
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-green-600" />
                <span>Molecular</span>
              </div>
              <Plus className="w-4 h-4 text-orange-600" />
              <div className="flex items-center gap-2">
                <Blocks className="w-4 h-4 text-purple-600" />
                <span>Organism</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Key Reusability Features:
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Props composition
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Render props
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Custom hooks
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Component composition
                </span>
              </div>
            </div>
          </div>
          
          {/* Vue Reusability Example */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                    Vue Reusability Patterns
                  </h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm">
                    JavaScript/Vue
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Vue 3 composition API patterns for creating reusable and composable components
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Composable Function */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Circle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300">Composable Logic</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Composable for counter logic
import { ref, computed } from 'vue';

export function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  
  const increment = () => count.value++;
  const decrement = () => count.value--;
  const reset = () => count.value = initialValue;
  
  const isEven = computed(() => count.value % 2 === 0);
  const isOdd = computed(() => !isEven.value);
  
  return {
    count,
    increment,
    decrement,
    reset,
    isEven,
    isOdd
  };
}

// Composable for validation
export function useValidation(rules) {
  const errors = ref({});
  
  const validate = (value) => {
    const newErrors = {};
    
    for (const [field, fieldRules] of Object.entries(rules)) {
      for (const rule of fieldRules) {
        const error = rule(value[field]);
        if (error) {
          newErrors[field] = error;
          break;
        }
      }
    }
    
    errors.value = newErrors;
    return Object.keys(newErrors).length === 0;
  };
  
  return {
    errors,
    validate
  };
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* Reusable Component */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <Package className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-300">Reusable Component</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`<!-- Reusable Card Component -->
<template>
  <div class="card" :class="cardClasses">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    
    <div class="card-body">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'secondary'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  elevation: {
    type: Number,
    default: 1
  }
});

const cardClasses = computed(() => [
  \`card--\${props.variant}\`,
  \`card--\${props.size}\`,
  \`card--elevation-\${props.elevation}\`
]);
</script>

<!-- Usage Example -->
<Card variant="primary" :elevation="2">
  <template #header>
    <h3>User Profile</h3>
  </template>
  
  <p>User information goes here...</p>
  
  <template #footer>
    <Button @click="save">Save</Button>
  </template>
</Card>`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Flow Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                <span>Composables</span>
              </div>
              <Plus className="w-4 h-4 text-orange-600" />
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-green-600" />
                <span>Components</span>
              </div>
              <Plus className="w-4 h-4 text-orange-600" />
              <div className="flex items-center gap-2">
                <Blocks className="w-4 h-4 text-purple-600" />
                <span>Applications</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Key Reusability Features:
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Composition API
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Slot system
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Provide/inject
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Props validation
                </span>
              </div>
            </div>
          </div>
          
          {/* Angular Reusability Example */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                    Angular Reusability Patterns
                  </h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm">
                    TypeScript/Angular
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Angular patterns for creating reusable components with dependency injection and content projection
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Component with Content Projection */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Circle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300">Card Component</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Card Component with Content Projection
import { Component, Input, ContentChild, 
         TemplateRef, AfterContentInit } from '@angular/core';

@Component({'{'} 
  selector: 'app-card',
  template: \`
    <div class="card" [class]="cardClasses">
      <ng-container *ngIf="headerTemplate">
        <div class="card-header">
          <ng-container 
            *ngTemplateOutlet="headerTemplate">
          </ng-container>
        </div>
      </ng-container>
      
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      
      <ng-container *ngIf="footerTemplate">
        <div class="card-footer">
          <ng-container 
            *ngTemplateOutlet="footerTemplate">
          </ng-container>
        </div>
      </ng-container>
    </div>
  \`
{'}'})
export class CardComponent implements AfterContentInit {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  
  @ContentChild('header') 
  headerTemplate: TemplateRef<any> | null;
  
  @ContentChild('footer') 
  footerTemplate: TemplateRef<any> | null;
  
  get cardClasses(): string {
    return \`card card--\${this.variant} card--\${this.size}\`;
  }
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* Directive Pattern */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <Package className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-300">Reusable Directive</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Reusable Tooltip Directive
import { Directive, Input, HostListener, 
         ElementRef, Renderer2 } from '@angular/core';

@Directive({'{'} 
  selector: '[appTooltip]',
  exportAs: 'appTooltip'
{'}'})
export class TooltipDirective {
  @Input() appTooltip: string = '';
  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  
  private tooltipElement: HTMLElement | null = null;
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}
  
  @HostListener('mouseenter') onMouseEnter() {
    if (this.appTooltip) {
      this.showTooltip();
    }
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }
  
  private showTooltip(): void {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'tooltip');
    this.renderer.addClass(this.tooltipElement, \`tooltip--\${this.tooltipPosition}\`);
    
    const text = this.renderer.createText(this.appTooltip);
    this.renderer.appendChild(this.tooltipElement, text);
    
    this.renderer.appendChild(document.body, this.tooltipElement);
    this.positionTooltip();
  }
  
  private hideTooltip(): void {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Usage Examples */}
            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Usage Examples:</h5>
              <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                <code>{`<!-- Card Component Usage -->
<app-card variant="primary" size="large">
  <ng-template #header>
    <h3>User Profile</h3>
  </ng-template>
  
  <p>User information and content...</p>
  
  <ng-template #footer>
    <button (click)="save()">Save</button>
    <button (click)="cancel()">Cancel</button>
  </ng-template>
</app-card>

<!-- Directive Usage -->
<button appTooltip="Click to save changes" 
        tooltipPosition="top">
  Save
</button>

<input appTooltip="Enter your email address" 
       type="email" />`}</code>
              </pre>
            </div>
            
            {/* Flow Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Component className="w-4 h-4 text-red-600" />
                <span>Components</span>
              </div>
              <Plus className="w-4 h-4 text-orange-600" />
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-green-600" />
                <span>Directives</span>
              </div>
              <Plus className="w-4 h-4 text-orange-600" />
              <div className="flex items-center gap-2">
                <Blocks className="w-4 h-4 text-purple-600" />
                <span>Services</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Key Reusability Features:
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Content projection
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Dependency injection
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Directives
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Template refs
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices Section */}
      <Card className="mb-8 border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-500 rounded-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                Best Practices for Scalable Component Systems
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Industry-proven guidelines for building maintainable and scalable component architectures
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Practice 1 */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                  <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                  Single Responsibility Principle
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Each component should have one reason to change and one well-defined responsibility.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Easier to test and maintain</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Clear component boundaries</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Better reusability</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <code className="text-xs text-emerald-700 dark:text-emerald-300">
                  // Button component only handles button logic
                </code>
              </div>
            </div>

            {/* Practice 2 */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                  <PackageOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                  Composition Over Inheritance
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Build complex components by composing simpler ones rather than using deep inheritance hierarchies.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Flexible component design</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Easier to understand</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Better runtime flexibility</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <code className="text-xs text-emerald-700 dark:text-emerald-300">
                  {'{'}/* Compose, don't inherit */{'}'}
                </code>
              </div>
            </div>

            {/* Practice 3 */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                  <Copy className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                  Design for Reusability
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Create components with configurable behavior and minimal assumptions about usage context.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Flexible API design</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Multiple use cases</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Extensibility support</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <code className="text-xs text-emerald-700 dark:text-emerald-300">
                  Props for configuration, slots for content
                </code>
              </div>
            </div>

            {/* Practice 4 */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                  <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                  Consistent Design System
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Establish and follow a consistent design system with shared tokens and patterns.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Visual consistency</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Faster development</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Easier maintenance</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <code className="text-xs text-emerald-700 dark:text-emerald-300">
                  Design tokens + component library
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes Section */}
      <Card className="mb-8 border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-pink-50/30 dark:from-red-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-red-500 rounded-xl">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-red-700 dark:text-red-300">
                Common Mistakes to Avoid
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Learn from these frequent component architecture pitfalls
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {/* Mistake 1 */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
                    Creating God Components
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Building components that do too many things violates the single responsibility principle.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Hard to test and maintain</li>
                      <li>• Low reusability</li>
                      <li>• Tight coupling</li>
                      <li>• Difficult to debug</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Break large components into smaller, focused ones with clear responsibilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mistake 2 */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
                    Prop Drilling Hell
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Passing props through many intermediate components creates tight coupling.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Fragile component chains</li>
                      <li>• Hard to refactor</li>
                      <li>• Performance issues</li>
                      <li>• Maintenance nightmare</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Use context, state management, or component composition to avoid prop drilling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mistake 3 */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
                    Inconsistent Component APIs
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Not following consistent patterns for component props and behavior.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Confusing developer experience</li>
                      <li>• Hard to learn and use</li>
                      <li>• Increased cognitive load</li>
                      <li>• More bugs and errors</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Establish and follow consistent API patterns across all components.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mistake 4 */}
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
                    Not optimizing component rendering and memory usage leads to poor performance.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Slow rendering</li>
                      <li>• Memory leaks</li>
                      <li>• Poor user experience</li>
                      <li>• Battery drain on mobile</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Use memoization, lazy loading, and proper cleanup for optimal performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mistake 5 */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
                    No Documentation or Testing
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Skipping documentation and testing makes components unreliable and hard to use.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Unknown component behavior</li>
                      <li>• Regressions and bugs</li>
                      <li>• Team friction</li>
                      <li>• Technical debt accumulation</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Document props, usage examples, and write comprehensive tests for all components.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="p-6 bg-red-100 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="text-lg font-bold text-red-700 dark:text-red-300 mb-3">
              🚨 Quick Prevention Tips
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-red-600 dark:text-red-400">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Always ask: "Does this component have one responsibility?"</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Test components in isolation</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Document component APIs and usage</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Optimize for performance early</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways Section */}
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
                Essential insights and learning points about component-based architecture
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Takeaway 1 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Component className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Atomic Design Thinking</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Start small with atomic components and build up complexity through composition.
              </p>
            </div>

            {/* Takeaway 2 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <TestTube className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Composition Over Inheritance</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Build complex UIs by combining simple components rather than deep inheritance.
              </p>
            </div>

            {/* Takeaway 3 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Recycle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Reusability First</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Design components for maximum reuse across different contexts and applications.
              </p>
            </div>

            {/* Takeaway 4 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Lifecycle Awareness</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Understand component lifecycle for optimal performance and resource management.
              </p>
            </div>

            {/* Takeaway 5 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Scalable Structure</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Organize components in a scalable hierarchy that grows with your application.
              </p>
            </div>

            {/* Takeaway 6 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Single Responsibility</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Each component should have one clear purpose and reason to change.
              </p>
            </div>
          </div>

          {/* Summary Box */}
          <div className="p-6 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3">
              💡 Core Insight
            </h4>
            <p className="text-blue-600 dark:text-blue-400 leading-relaxed">
              Component-based architecture transforms UI development from monolithic structures into 
              composable, reusable building blocks. By thinking in terms of atomic design and composition, 
              you create systems that are more maintainable, testable, and scalable.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

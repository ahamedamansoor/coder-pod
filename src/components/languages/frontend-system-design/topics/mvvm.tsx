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
  RefreshCw, MousePointer, Webhook, Router, Server
} from 'lucide-react';

interface MVVMProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function MVVM({ onOpenWebPlayground }: MVVMProps) {

  const mvvmComponents = [
    {
      name: 'Model',
      description: 'Contains the data, business logic, and validation rules',
      icon: Database,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      hoverBgColor: 'bg-blue-100 dark:bg-blue-900/50',
      responsibilities: [
        'Data management and persistence',
        'Business logic implementation',
        'Validation rules enforcement',
        'Data access operations',
        'Observable patterns'
      ],
      characteristics: [
        'Independent of UI',
        'Testable in isolation',
        'No UI dependencies',
        'Single responsibility',
        'Observable for data binding'
      ],
      examples: [
        'User data model',
        'Product repository',
        'Order service',
        'Authentication service'
      ]
    },
    {
      name: 'View',
      description: 'Declarative UI that binds to ViewModel properties',
      icon: Monitor,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      hoverBgColor: 'bg-green-100 dark:bg-green-900/50',
      responsibilities: [
        'Render UI declaratively',
        'Bind to ViewModel properties',
        'Handle user interactions',
        'Display data automatically'
      ],
      characteristics: [
        'Declarative and reactive',
        'No business logic',
        'Data binding enabled',
        'Easily testable with tools'
      ],
      examples: [
        'Login screen',
        'Product list view',
        'User profile page',
        'Settings panel'
      ]
    },
    {
      name: 'ViewModel',
      description: 'Exposes Model data and handles View logic via data binding',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      hoverBgColor: 'bg-purple-100 dark:bg-purple-900/50',
      responsibilities: [
        'Expose Model data to View',
        'Handle View-specific logic',
        'Manage UI state',
        'Implement commands and actions'
      ],
      characteristics: [
        'Observable properties',
        'Commands for user actions',
        'No direct View reference',
        'Testable independently'
      ],
      examples: [
        'Login ViewModel',
        'Product list ViewModel',
        'User profile ViewModel',
        'Settings ViewModel'
      ]
    }
  ];

  const dataFlowSteps = [
    {
      id: 1,
      title: 'Data Binding Setup',
      description: 'View binds to ViewModel properties and commands',
      icon: Webhook,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/50',
      details: [
        'View declaratively binds to ViewModel properties',
        'Commands are bound to user actions',
        'Two-way binding established',
        'Automatic UI updates configured'
      ],
      components: ['View', 'ViewModel'],
      direction: 'View ↔ ViewModel'
    },
    {
      id: 2,
      title: 'User Interaction',
      description: 'User interacts with View, triggering bound commands',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/50',
      details: [
        'User clicks button or enters data',
        'View captures the interaction',
        'Bound command is triggered',
        'ViewModel receives the action'
      ],
      components: ['User', 'View', 'ViewModel'],
      direction: 'User → View → ViewModel'
    },
    {
      id: 3,
      title: 'ViewModel Processing',
      description: 'ViewModel processes input and coordinates with Model',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/50',
      details: [
        'Command executes business logic',
        'Validates input data format',
        'Coordinates with Model for data operations',
        'Updates internal state'
      ],
      components: ['ViewModel', 'Model'],
      direction: 'ViewModel ↔ Model'
    },
    {
      id: 4,
      title: 'Model Operations',
      description: 'Model processes data changes and notifies ViewModel',
      icon: Database,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      details: [
        'Validates business rules at data level',
        'Updates persistent data state',
        'Notifies observers of changes',
        'Returns operation results'
      ],
      components: ['Model', 'ViewModel'],
      direction: 'Model → ViewModel'
    },
    {
      id: 5,
      title: 'Automatic UI Update',
      description: 'ViewModel properties change, automatically updating View',
      icon: RefreshCw,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/50',
      details: [
        'ViewModel properties update',
        'Data binding detects changes',
        'View automatically reflects new data',
        'No manual UI updates needed'
      ],
      components: ['ViewModel', 'View'],
      direction: 'ViewModel → View'
    }
  ];

  return (
    <div className="w-full pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Box}
        category="Architecture Patterns"
        title="Model-View-ViewModel (MVVM)"
        description="A comprehensive guide to the MVVM pattern with diagrammatic explanations and practical implementations"
        colorTheme="purple"
      />

      {/* Introduction Section */}
      <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-violet-50/30 dark:from-purple-950/20 dark:to-violet-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-500 rounded-xl">
              <Box className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                Understanding MVVM Pattern
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Model-View-ViewModel is designed for modern UI frameworks with data binding capabilities
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>Model-View-ViewModel (MVVM)</strong> is an architectural pattern that separates the application into three main components. The key innovation of MVVM is the introduction of data binding, which creates a declarative relationship between the View and ViewModel, eliminating the need for manual UI updates.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300">Data Binding</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Automatic synchronization between View and ViewModel
                </p>
              </div>
              <div className="p-4 bg-violet-50 dark:bg-violet-950/30 rounded-lg border border-violet-200 dark:border-violet-800">
                <div className="flex items-center gap-2 mb-2">
                  <TestTube className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <h4 className="font-semibold text-violet-700 dark:text-violet-300">Declarative UI</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  View describes what to display, not how to update
                </p>
              </div>
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">Command Pattern</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  User actions are encapsulated as commands
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced MVVM Components Diagram */}
      <Card className="mb-8 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                MVVM Architecture Diagram
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Interactive visualization of Model-View-ViewModel structure and data binding relationships
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Main Architecture Diagram */}
          <div className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-center text-slate-700 dark:text-slate-300 mb-2">
                MVVM Component Structure
              </h3>
              <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
                Click on any component to explore its detailed responsibilities
              </p>
            </div>
            
            {/* Enhanced Visual Layout */}
            <div className="relative">
              {/* Component Layout */}
              <div className="relative z-10">
                {/* Top Row: View and ViewModel */}
                <div className="flex justify-center items-center mb-12">
                  <div className="flex items-center gap-16">
                    {/* View Component */}
                    <div className="text-center">
                      <div className="relative group transition-all duration-300 transform scale-110">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-green-400/20 rounded-2xl blur-xl animate-pulse"></div>
                        
                        {/* Component Card */}
                        <div className="relative p-8 rounded-2xl border-3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800/50 dark:to-green-900/50 border-green-500 shadow-2xl">
                          <div className="absolute -top-3 -right-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <Monitor className="w-3 h-3 text-white" />
                            </div>
                          </div>
                          
                          <Monitor className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-3" />
                          <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">
                            View
                          </h3>
                          <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                            Declarative UI Layer
                          </p>
                          <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                            • Data binding<br/>
                            • Declarative markup<br/>
                            • No logic
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bidirectional Data Binding */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex items-center gap-2 group">
                        <RefreshCw className="w-8 h-8 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded">
                          Data Binding
                        </span>
                      </div>
                      <div className="h-px w-12 bg-indigo-300 dark:bg-indigo-700"></div>
                      <div className="flex items-center gap-2 group">
                        <RefreshCw className="w-8 h-8 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded">
                          Commands
                        </span>
                      </div>
                    </div>
                    
                    {/* ViewModel Component */}
                    <div className="text-center">
                      <div className="relative group transition-all duration-300 transform scale-110">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-purple-400/20 rounded-2xl blur-xl animate-pulse"></div>
                        
                        {/* Component Card */}
                        <div className="relative p-8 rounded-2xl border-3 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800/50 dark:to-purple-900/50 border-purple-500 shadow-2xl">
                          <div className="absolute -top-3 -right-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                              <Brain className="w-3 h-3 text-white" />
                            </div>
                          </div>
                          
                          <Brain className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                          <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                            ViewModel
                          </h3>
                          <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                            Data & Logic Layer
                          </p>
                          <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                            • Observable data<br/>
                            • Commands<br/>
                            • UI state
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connection to Model */}
                <div className="flex justify-center mb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 group">
                      <ArrowDown className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
                        operations
                      </span>
                    </div>
                    <div className="h-px w-16 bg-purple-300 dark:bg-purple-700"></div>
                    <div className="flex items-center gap-2 group">
                      <ArrowUp className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                        data
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Model Component */}
                <div className="flex justify-center">
                  <div className="relative group transition-all duration-300 transform scale-110">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl animate-pulse"></div>
                    
                    {/* Component Card */}
                    <div className="relative p-8 rounded-2xl border-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800/50 dark:to-blue-900/50 border-blue-500 shadow-2xl">
                      <div className="absolute -top-3 -right-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Database className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      
                      <Database className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
                        Model
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        Data & Business Logic
                      </p>
                      <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                        • Business rules<br/>
                        • Data persistence<br/>
                        • Observable
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* MVVM Components Overview */}
      <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-500 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                MVVM Components
              </CardTitle>
              <CardDescription className="text-base mt-2">
                The three core components of MVVM architecture, each with distinct responsibilities and data binding capabilities
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Component Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* View Component */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl blur-xl animate-pulse"></div>
              
              {/* Component Card */}
              <div className="relative p-6 rounded-2xl border-3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800/50 dark:to-green-900/50 border-green-500 shadow-2xl transform transition-all duration-300 hover:scale-105">
                <div className="absolute -top-3 -right-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <Eye className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">
                    View
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    Renders the user interface and displays data
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Key Responsibilities:
                    </h5>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Renders UI components and layouts</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Binds to ViewModel properties</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Captures user interactions</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Examples:
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        React/Vue components
                      </span>
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        HTML templates
                      </span>
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        XAML/WPF views
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ViewModel Component */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl animate-pulse"></div>
              
              {/* Component Card */}
              <div className="relative p-6 rounded-2xl border-3 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800/50 dark:to-purple-900/50 border-purple-500 shadow-2xl transform transition-all duration-300 hover:scale-105">
                <div className="absolute -top-3 -right-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <Brain className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                    ViewModel
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    Manages UI state and business logic with data binding
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Key Responsibilities:
                    </h5>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Exposes Model data to View</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Implements data binding</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Handles UI logic and commands</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Examples:
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        Observable objects
                      </span>
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        State stores
                      </span>
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        View models
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Model Component */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur-xl animate-pulse"></div>
              
              {/* Component Card */}
              <div className="relative p-6 rounded-2xl border-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800/50 dark:to-blue-900/50 border-blue-500 shadow-2xl transform transition-all duration-300 hover:scale-105">
                <div className="absolute -top-3 -right-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <Database className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
                    Model
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    Manages data, business logic, and rules
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Key Responsibilities:
                    </h5>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Manages application data and state</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Implements business logic</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Handles data persistence</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Examples:
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        Database models
                      </span>
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        API services
                      </span>
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        Data repositories
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Data Flow Visualization */}
      <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-500 rounded-xl">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                Enhanced Data Flow Visualization
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Interactive step-by-step breakdown of how data flows through MVVM components with data binding
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Interactive Flow Steps */}
          <div className="space-y-4">
            {dataFlowSteps.map((step: any, index: number) => (
              <div key={index} className="relative">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-purple-500 shadow-2xl bg-purple-50/50 dark:bg-purple-950/20">
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
                      
                      <div className="grid md:grid-cols-2 gap-4">
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
                    </div>
                  </div>
                </div>
                
                {index < dataFlowSteps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Complete Flow Summary */}
          <div className="p-6 bg-purple-100 dark:bg-purple-900/30 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-4">
              Complete MVVM Flow Summary
            </h4>
            <div className="flex items-center justify-center gap-4 text-center flex-wrap">
              <div className="flex flex-col items-center">
                <Users className="w-10 h-10 text-orange-600 dark:text-orange-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">User</span>
              </div>
              <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div className="flex flex-col items-center">
                <Monitor className="w-10 h-10 text-green-600 dark:text-green-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">View</span>
              </div>
              <RefreshCw className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <div className="flex flex-col items-center">
                <Brain className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">ViewModel</span>
              </div>
              <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div className="flex flex-col items-center">
                <Database className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Model</span>
              </div>
              <RefreshCw className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <div className="flex flex-col items-center">
                <Brain className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">ViewModel</span>
              </div>
              <ArrowLeft className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div className="flex flex-col items-center">
                <Monitor className="w-10 h-10 text-green-600 dark:text-green-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">View</span>
              </div>
              <ArrowLeft className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div className="flex flex-col items-center">
                <Users className="w-10 h-10 text-orange-600 dark:text-orange-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">User</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Implementation Examples */}
      <Card className="mb-8 border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/30 dark:from-orange-950/20 dark:to-amber-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-orange-500 rounded-xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-orange-700 dark:text-orange-300">
                Implementation Examples
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Practical MVVM implementations with clear, step-by-step code examples
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Angular MVVM Example - Side by Side */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                    Angular MVVM Example
                  </h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm">
                    TypeScript/HTML
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Modern Angular implementation with services and reactive forms - View all components side by side
                </p>
              </div>
            </div>
            
            {/* Side-by-Side Code Display */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Model */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300">Model (Service)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Model - User service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({'{'} providedIn: 'root' {'}'})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  
  constructor(private http: HttpClient) {}
  
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/auth/login', {
      email, password
    }).pipe(
      tap(user => this.currentUserSubject.next(user))
    );
  }
  
  logout(): void {
    this.currentUserSubject.next(null);
  }
  
  get currentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* ViewModel */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-300">ViewModel (Component)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// ViewModel - Login component
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({'{'} 
  selector: 'app-login',
  templateUrl: './login.component.html'
{'}'})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.error = '';
      
      this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      ).subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: (err) => {
          this.error = err.message;
          this.loading = false;
        },
        complete: () => this.loading = false
      });
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* View */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <Monitor className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-300">View (Template)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`<!-- View - Angular template -->
<div class="login-container">
  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
      <label for="email">Email</label>
      <input 
        id="email"
        type="email" 
        formControlName="email"
        class="form-control"
        [class.is-invalid]="
          loginForm.get('email')?.touched && 
          loginForm.get('email')?.invalid
        "
      />
      <div 
        *ngIf="loginForm.get('email')?.touched && 
               loginForm.get('email')?.errors?.required" 
        class="invalid-feedback"
      >
        Email is required
      </div>
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input 
        id="password"
        type="password" 
        formControlName="password"
        class="form-control"
      />
    </div>

    <button 
      type="submit" 
      class="btn btn-primary"
      [disabled]="loginForm.invalid || loading"
    >
      <span *ngIf="!loading">Login</span>
      <span *ngIf="loading">Loading...</span>
    </button>

    <div *ngIf="error" class="alert alert-danger mt-3">
      {{ error }}
    </div>
  </form>
</div>`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Flow Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-orange-600" />
                <span>User Input</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                <span>Form Binding</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-600" />
                <span>Service Call</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Key Features:
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Reactive forms
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Dependency injection
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  RxJS observables
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Template binding
                </span>
              </div>
            </div>
          </div>
          
          {/* React MVVM Example - Side by Side */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                    React MVVM Implementation
                  </h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm">
                    JavaScript/React
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Modern React with hooks and state management - Compare all layers at once
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Model */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300">Model (Service)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Model - Auth service
class AuthService {
  constructor() {
    this.user = null;
    this.observers = [];
  }
  
  async login(email, password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    
    if (response.ok) {
      this.user = await response.json();
      this.notifyObservers();
      return this.user;
    }
    throw new Error('Login failed');
  }
  
  subscribe(observer) {
    this.observers.push(observer);
  }
  
  notifyObservers() {
    this.observers.forEach(obs => obs(this.user));
  }
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* ViewModel */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-300">ViewModel (Hook)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// ViewModel - Custom hook
function useLoginViewModel(authService) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const login = useCallback(async () => {
    setLoading(true);
    setError('');
    
    try {
      const user = await authService.login(email, password);
      setUser(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [email, password, authService]);
  
  return {
    email, setEmail,
    password, setPassword,
    user, loading, error,
    login
  };
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* View */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <Monitor className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-300">View (Component)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// View - React Component
function LoginView() {
  const authService = new AuthService();
  const viewModel = useLoginViewModel(authService);
  
  return (
    <div className="login-form">
      <input
        value={viewModel.email}
        onChange={(e) => viewModel.setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={viewModel.password}
        onChange={(e) => viewModel.setPassword(e.target.value)}
        placeholder="Password"
      />
      <button 
        onClick={viewModel.login}
        disabled={viewModel.loading}
      >
        {viewModel.loading ? 'Loading...' : 'Login'}
      </button>
      {viewModel.error && (
        <div className="error">{viewModel.error}</div>
      )}
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Flow Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-orange-600" />
                <span>User Input</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                <span>State Update</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-green-600" />
                <span>UI Re-render</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Key Features:
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  React hooks
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Observable pattern
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Custom hooks
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Declarative JSX
                </span>
              </div>
            </div>
          </div>
          
          {/* Vue MVVM Implementation - Side by Side */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                    Vue MVVM Implementation
                  </h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm">
                    JavaScript/Vue
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Vue.js with Composition API - See all components together
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Model */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300">Model (Store)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Model - User store
import { reactive, computed } from 'vue';

export const useUserStore = () => {
  const state = reactive({
    user: null,
    isAuthenticated: false
  });
  
  const login = async (email, password) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    
    if (response.ok) {
      state.user = await response.json();
      state.isAuthenticated = true;
      return state.user;
    }
    throw new Error('Login failed');
  };
  
  const logout = () => {
    state.user = null;
    state.isAuthenticated = false;
  };
  
  return {
    state,
    login,
    logout
  };
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* ViewModel */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-300">ViewModel (Composition)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// ViewModel - Composable
import { ref, computed } from 'vue';

export function useLoginViewModel(userStore) {
  const email = ref('');
  const password = ref('');
  const loading = ref(false);
  const error = ref('');
  
  const canLogin = computed(() => {
    return email.value && password.value && !loading.value;
  });
  
  const login = async () => {
    if (!canLogin.value) return;
    
    loading.value = true;
    error.value = '';
    
    try {
      await userStore.login(email.value, password.value);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };
  
  return {
    email,
    password,
    loading,
    error,
    canLogin,
    login
  };
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* View */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <Monitor className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-300">View (Template)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`<!-- View - Vue template -->
<template>
  <div class="login-form">
    <input
      v-model="email"
      type="email"
      placeholder="Email"
    />
    <input
      v-model="password"
      type="password"
      placeholder="Password"
    />
    <button
      @click="login"
      :disabled="!canLogin || loading"
    >
      {{ loading ? 'Loading...' : 'Login' }}
    </button>
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { useLoginViewModel } from './useLoginViewModel';
import { useUserStore } from './stores/user';

const userStore = useUserStore();
const {
  email,
  password,
  loading,
  error,
  canLogin,
  login
} = useLoginViewModel(userStore);
</script>`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Flow Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-orange-600" />
                <span>v-model</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                <span>Reactive</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-green-600" />
                <span>Template</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Key Features:
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  v-model binding
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Composition API
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Reactive state
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Template syntax
                </span>
              </div>
            </div>
          </div>
          
          {/* Vue MVVM Example - Side by Side */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                    Vue MVVM Example
                  </h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm">
                    JavaScript/Vue
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Vue 3 implementation with Composition API and reactive data binding - View all components side by side
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Model */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300">Model (Store)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Model - User Store
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  const isAuthenticated = ref(false);
  
  const login = async (email, password) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    
    if (response.ok) {
      user.value = await response.json();
      isAuthenticated.value = true;
      return user.value;
    }
    throw new Error('Login failed');
  };
  
  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
  };
  
  return {
    user: readonly(user),
    isAuthenticated: readonly(isAuthenticated),
    login,
    logout
  };
});`}</code>
                  </pre>
                </div>
              </div>
              
              {/* ViewModel */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-300">ViewModel (Composition)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// ViewModel - Composable
import { ref, computed } from 'vue';

export function useLoginViewModel(userStore) {
  const email = ref('');
  const password = ref('');
  const loading = ref(false);
  const error = ref('');
  
  const canLogin = computed(() => {
    return email.value && password.value && !loading.value;
  });
  
  const login = async () => {
    if (!canLogin.value) return;
    
    loading.value = true;
    error.value = '';
    
    try {
      await userStore.login(email.value, password.value);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };
  
  return {
    email,
    password,
    loading: readonly(loading),
    error: readonly(error),
    canLogin: readonly(canLogin),
    login
  };
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* View */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <Monitor className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-300">View (Template)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`<!-- View - Vue template -->
<template>
  <div class="login-form">
    <input
      v-model="email"
      type="email"
      placeholder="Email"
    />
    <input
      v-model="password"
      type="password"
      placeholder="Password"
    />
    <button
      @click="login"
      :disabled="!canLogin || loading"
    >
      {{ loading ? 'Loading...' : 'Login' }}
    </button>
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { useLoginViewModel } from './useLoginViewModel';
import { useUserStore } from './stores/user';

const userStore = useUserStore();
const {
  email,
  password,
  loading,
  error,
  canLogin,
  login
} = useLoginViewModel(userStore);
</script>`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Flow Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-orange-600" />
                <span>v-model</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                <span>Reactive</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-green-600" />
                <span>Template</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Key Features:
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  v-model binding
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Composition API
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Reactive state
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Template syntax
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
                MVVM Best Practices
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Industry-proven guidelines for implementing MVVM pattern effectively
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
                  Leverage Data Binding
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Use data binding to its full potential to eliminate manual UI updates and reduce boilerplate code.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Automatic UI synchronization</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Reduced boilerplate code</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Better maintainability</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <code className="text-xs text-emerald-700 dark:text-emerald-300">
                  Text="{'{'}Binding Email, UpdateSourceTrigger=PropertyChanged{'}'}"
                </code>
              </div>
            </div>

            {/* Practice 2 */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                  <Monitor className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                  Keep Views Declarative
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Views should be purely declarative and contain no logic beyond presentation concerns.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Clear separation of concerns</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Easier testing with UI automation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Better designer workflow</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <code className="text-xs text-emerald-700 dark:text-emerald-300">
                  &lt;Button Command="{'{'}Binding SubmitCommand{'}'}" /&gt;
                </code>
              </div>
            </div>

            {/* Practice 3 */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                  <Package className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                  Use Commands for Actions
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Implement the Command pattern for user actions to enable better testability and separation.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Testable without UI</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">CanExecute logic</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Reusable actions</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <code className="text-xs text-emerald-700 dark:text-emerald-300">
                  public ICommand SaveCommand {'{'} get; {'}'}
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
                  Implement Validation in ViewModel
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Handle validation logic in the ViewModel and expose validation results to the View.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Consistent validation logic</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Real-time validation feedback</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Testable validation rules</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <code className="text-xs text-emerald-700 dark:text-emerald-300">
                  INotifyDataErrorInfo for validation
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
                Learn from these frequent MVVM implementation pitfalls
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
                    Putting Logic in Views
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Adding business logic, validation, or data processing in Views violates the MVVM principle.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Breaks data binding benefits</li>
                      <li>• Difficult to test business logic</li>
                      <li>• Code duplication across Views</li>
                      <li>• Harder to maintain and refactor</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Move all logic to ViewModels. Views should only contain declarative markup and bindings.
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
                    Ignoring Data Binding
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Not leveraging data binding and resorting to manual UI updates defeats MVVM's purpose.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Increased boilerplate code</li>
                      <li>• Missed synchronization benefits</li>
                      <li>• Manual error-prone updates</li>
                      <li>• Inconsistent state management</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Use data binding for all UI updates. Implement INotifyPropertyChanged or reactive patterns.
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
                    ViewModel Becomes Too Fat
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Putting too much logic in ViewModels creates bloated components that are hard to maintain.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Single responsibility violation</li>
                      <li>• Difficult to test and maintain</li>
                      <li>• Performance issues</li>
                      <li>• Hard to reuse ViewModels</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Extract business logic into services. Keep ViewModels focused on UI state and coordination.
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
                    Memory Leaks in Bindings
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Not properly disposing of bindings and event subscriptions causes memory leaks.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Memory usage increases over time</li>
                      <li>• Application performance degrades</li>
                      <li>• Potential crashes in long-running apps</li>
                      <li>• Resource exhaustion</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Implement IDisposable in ViewModels. Unsubscribe from events and dispose bindings properly.
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
                    Direct Model Access from View
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Allowing Views to directly access Model data bypasses the ViewModel's coordination role.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Bypasses ViewModel logic</li>
                      <li>• Inconsistent application state</li>
                      <li>• Tight coupling to Model</li>
                      <li>• Hard to maintain data flow</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      All data access must go through ViewModel. Views should only bind to ViewModel properties.
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
                <span>Always ask: "Can this be done with data binding?"</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Test ViewModels without UI frameworks</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Keep Views purely declarative</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Implement proper disposal patterns</span>
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
                Essential insights and learning points about MVVM pattern
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Takeaway 1 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Webhook className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Data Binding Power</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Data binding eliminates manual UI updates and creates a declarative relationship between View and ViewModel.
              </p>
            </div>

            {/* Takeaway 2 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <TestTube className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Enhanced Testability</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                ViewModels can be tested independently without UI frameworks, enabling comprehensive unit testing.
              </p>
            </div>

            {/* Takeaway 3 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">ViewModel as Bridge</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The ViewModel acts as a bridge, exposing Model data and handling View-specific logic through bindings.
              </p>
            </div>

            {/* Takeaway 4 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Command Pattern</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Commands encapsulate user actions, making them testable and reusable across different UI elements.
              </p>
            </div>

            {/* Takeaway 5 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Framework Friendly</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                MVVM is natively supported by modern frameworks like WPF, Angular, Vue, and React with hooks.
              </p>
            </div>

            {/* Takeaway 6 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Reactive Architecture</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                MVVM promotes reactive programming through observable properties and automatic UI updates.
              </p>
            </div>
          </div>

          {/* Summary Box */}
          <div className="p-6 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3">
              💡 Core Insight
            </h4>
            <p className="text-blue-600 dark:text-blue-400 leading-relaxed">
              MVVM's strength lies in data binding and the declarative nature of Views. By eliminating manual UI updates, 
              it reduces boilerplate code and enables better separation of concerns, making it ideal for modern UI applications 
              with complex data interactions and real-time updates.
            </p>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

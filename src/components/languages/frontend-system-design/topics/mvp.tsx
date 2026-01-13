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

interface MVPProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function MVP({ onOpenWebPlayground }: MVPProps) {

  const mvpComponents = [
    {
      name: 'Model',
      description: 'Contains the data and business logic',
      icon: Database,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      hoverBgColor: 'bg-blue-100 dark:bg-blue-900/50',
      responsibilities: [
        'Data management and persistence',
        'Business logic implementation',
        'Validation rules enforcement',
        'Data access operations'
      ],
      characteristics: [
        'Independent of UI',
        'Testable in isolation',
        'No UI dependencies',
        'Single responsibility'
      ],
      examples: [
        'User data class',
        'Product repository',
        'Order service',
        'Authentication service'
      ]
    },
    {
      name: 'View',
      description: 'Passive UI that displays data and forwards user events',
      icon: Monitor,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      hoverBgColor: 'bg-green-100 dark:bg-green-900/50',
      responsibilities: [
        'Render UI elements',
        'Display data from Presenter',
        'Capture user interactions',
        'Forward events to Presenter'
      ],
      characteristics: [
        'Passive and dumb',
        'No business logic',
        'Delegates all logic',
        'Easily testable'
      ],
      examples: [
        'Login screen',
        'Product list view',
        'User profile page',
        'Settings panel'
      ]
    },
    {
      name: 'Presenter',
      description: 'Mediates between Model and View, handling all presentation logic',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      hoverBgColor: 'bg-purple-100 dark:bg-purple-900/50',
      responsibilities: [
        'Handle user input from View',
        'Update Model with business logic',
        'Prepare data for View',
        'Manage View state'
      ],
      characteristics: [
        'Contains presentation logic',
        'No direct UI dependencies',
        'Testable with mock Views',
        'Coordinates Model and View'
      ],
      examples: [
        'Login presenter',
        'Product list presenter',
        'User profile presenter',
        'Settings presenter'
      ]
    }
  ];

  const dataFlowSteps = [
    {
      id: 1,
      title: 'User Interaction',
      description: 'User interacts with the View interface',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/50',
      details: [
        'User clicks button or enters data',
        'View captures the raw user input',
        'No processing occurs in View',
        'Event is immediately forwarded'
      ],
      components: ['User', 'View'],
      direction: 'View → Presenter'
    },
    {
      id: 2,
      title: 'Event Delegation',
      description: 'View forwards user events to Presenter',
      icon: ArrowRight,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      details: [
        'View calls Presenter method directly',
        'Passes raw event data unchanged',
        'Presenter receives control',
        'View becomes passive again'
      ],
      components: ['View', 'Presenter'],
      direction: 'View → Presenter'
    },
    {
      id: 3,
      title: 'Business Logic Processing',
      description: 'Presenter processes input and coordinates with Model',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/50',
      details: [
        'Validates input data format',
        'Applies business rules and logic',
        'Coordinates with Model for data operations',
        'Handles errors and exceptions'
      ],
      components: ['Presenter', 'Model'],
      direction: 'Presenter ↔ Model'
    },
    {
      id: 4,
      title: 'Data Operations',
      description: 'Model processes data changes and notifies Presenter',
      icon: Database,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/50',
      details: [
        'Validates business rules at data level',
        'Updates persistent data state',
        'Notifies observers of changes',
        'Returns operation results'
      ],
      components: ['Model', 'Presenter'],
      direction: 'Model → Presenter'
    },
    {
      id: 5,
      title: 'View Update',
      description: 'Presenter updates View with processed data',
      icon: Monitor,
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/50',
      details: [
        'Formats data for UI display',
        'Updates View properties and state',
        'Shows/hides UI elements as needed',
        'Displays success/error messages'
      ],
      components: ['Presenter', 'View'],
      direction: 'Presenter → View'
    }
  ];

  return (
    <div className="w-full pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Box}
        category="Architecture Patterns"
        title="Model-View-Presenter (MVP)"
        description="A comprehensive guide to the MVP pattern with diagrammatic explanations and practical implementations"
        colorTheme="green"
      />

      {/* Introduction Section */}
      <Card className="mb-8 border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-500 rounded-xl">
              <Box className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                Understanding MVP Pattern
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Model-View-Presenter is a derivative of MVC designed for better testability and separation of concerns
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>Model-View-Presenter (MVP)</strong> is an architectural pattern that separates the application into three main components. The key innovation of MVP is making the View completely passive, which significantly improves testability and maintainability.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="font-semibold text-green-700 dark:text-green-300">Passive View</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  View contains no logic, only displays UI
                </p>
              </div>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-center gap-2 mb-2">
                  <TestTube className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">High Testability</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Easy to unit test with mock Views
                </p>
              </div>
              <div className="p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg border border-teal-200 dark:border-teal-800">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h4 className="font-semibold text-teal-700 dark:text-teal-300">Clear Separation</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Well-defined boundaries between components
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced MVP Components Diagram */}
      <Card className="mb-8 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                MVP Architecture Diagram
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Interactive visualization of Model-View-Presenter structure and relationships
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Main Architecture Diagram */}
          <div className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-center text-slate-700 dark:text-slate-300 mb-2">
                MVP Component Structure
              </h3>
              <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
                Click on any component to explore its detailed responsibilities
              </p>
            </div>
            
            {/* Enhanced Visual Layout */}
            <div className="relative">
              {/* Component Layout */}
              <div className="relative z-10">
                {/* Top Row: View and Presenter */}
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
                            Passive UI Layer
                          </p>
                          <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                            • Renders UI<br/>
                            • Captures events<br/>
                            • Delegates to Presenter
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bidirectional Arrows */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex items-center gap-2 group">
                        <ArrowRight className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                          Events
                        </span>
                      </div>
                      <div className="h-px w-12 bg-blue-300 dark:bg-blue-700"></div>
                      <div className="flex items-center gap-2 group">
                        <ArrowLeft className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
                          updates
                        </span>
                      </div>
                    </div>
                    
                    {/* Presenter Component */}
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
                            Presenter
                          </h3>
                          <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                            Mediator Layer
                          </p>
                          <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                            • Handles logic<br/>
                            • Coordinates flow<br/>
                            • Updates View
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
                        • Manages data<br/>
                        • Business rules<br/>
                        • Data persistence
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* MVP Components Overview */}
      <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-500 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                MVP Components
              </CardTitle>
              <CardDescription className="text-base mt-2">
                The three core components of MVP architecture, each with distinct responsibilities and interactions
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
                        <span>Displays data from the Model</span>
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
                        UI components
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Presenter Component */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl animate-pulse"></div>
              
              {/* Component Card */}
              <div className="relative p-6 rounded-2xl border-3 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800/50 dark:to-purple-900/50 border-purple-500 shadow-2xl transform transition-all duration-300 hover:scale-105">
                <div className="absolute -top-3 -right-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <Cpu className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                    Presenter
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    Handles business logic and coordinates between View and Model
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
                        <span>Processes user input and events</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Coordinates Model and View</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Implements application logic</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Examples:
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        Event handlers
                      </span>
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        Form controllers
                      </span>
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        Business logic
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
                Interactive step-by-step breakdown of how data flows through MVP components
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
              Complete MVP Flow Summary
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
              <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div className="flex flex-col items-center">
                <Brain className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Presenter</span>
              </div>
              <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div className="flex flex-col items-center">
                <Database className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Model</span>
              </div>
              <RefreshCw className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div className="flex flex-col items-center">
                <Brain className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Presenter</span>
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
                Practical MVP implementations with clear, step-by-step code examples
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Android MVP Example - Side by Side */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                    Android MVP Example
                  </h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm">
                    Java/Kotlin
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Traditional Android implementation with interfaces - View all components side by side
                </p>
              </div>
            </div>
            
            {/* Side-by-Side Code Display */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Model */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300">Model Layer</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Model - User data
public class User {
    private String email;
    private String password;
    
    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }
    
    public boolean isValid() {
        return email != null && !email.isEmpty() 
            && password != null && password.length() >= 6;
    }
    
    // Getters and setters
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* View Interface */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <Monitor className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-300">View Interface</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// View - Interface contract
public interface LoginView {
    void showEmailError(String error);
    void showPasswordError(String error);
    void showLoading();
    void hideLoading();
    void navigateToHome();
    void showSuccess(String message);
    void showError(String message);
    
    // View state methods
    String getEmail();
    String getPassword();
    void setEmail(String email);
    void setPassword(String password);
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* Presenter */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-300">Presenter</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Presenter - Business logic
public class LoginPresenter {
    private LoginView view;
    private UserService userService;
    
    public LoginPresenter(LoginView view, UserService service) {
        this.view = view;
        this.userService = service;
    }
    
    public void onLoginClicked() {
        String email = view.getEmail();
        String password = view.getPassword();
        
        if (!validateInput(email, password)) {
            return;
        }
        
        view.showLoading();
        userService.login(email, password)
            .then(this::onLoginSuccess)
            .catch(this::onLoginError);
    }
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
                <ArrowRight className="w-4 h-4 text-purple-600" />
                <span>Presenter Logic</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 text-green-600" />
                <span>UI Update</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Key Features:
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Interface-based View
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Dependency injection
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Async operations
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Error handling
                </span>
              </div>
            </div>
          </div>
          
          {/* Web MVP Example - Side by Side */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                    Web MVP Example
                  </h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  JavaScript implementation for web applications - Compare all layers at once
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
  private api: ApiClient;
  
  constructor(api: ApiClient) {
    this.api = api;
  }
  
  async login(email: string, password: string): Promise<User> {
    const response = await this.api.post('/auth/login', {
      email,
      password
    });
    
    if (!response.success) {
      throw new Error(response.error);
    }
    
    return new User(response.data);
  }
  
  async validateToken(token: string): Promise<boolean> {
    try {
      await this.api.get('/auth/validate', {
        headers: { Authorization: \`Bearer \${token}\` }
      });
      return true;
    } catch {
      return false;
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* View Interface */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <Monitor className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-300">View Interface</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// View - Interface contract
interface ILoginView {
  // State methods
  setEmail(email: string): void;
  setPassword(password: string): void;
  getEmail(): string;
  getPassword(): string;
  
  // UI control methods
  showLoading(): void;
  hideLoading(): void;
  showError(message: string): void;
  showSuccess(message: string): void;
  
  // Navigation
  navigateToDashboard(): void;
  navigateToRegister(): void;
  
  // Form validation
  showEmailError(message: string): void;
  showPasswordError(message: string): void;
  clearErrors(): void;
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* Presenter */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-300">Presenter</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Presenter - Business logic
class LoginPresenter {
  constructor(
    private view: ILoginView,
    private authService: AuthService
  ) {}
  
  async onLogin(): Promise<void> {
    try {
      this.validateInput();
      const email = this.view.getEmail();
      const password = this.view.getPassword();
      
      this.view.showLoading();
      this.view.clearErrors();
      
      const user = await this.authService.login(email, password);
      this.view.showSuccess('Login successful!');
      
      setTimeout(() => {
        this.view.navigateToDashboard();
      }, 1000);
      
    } catch (error) {
      this.view.hideLoading();
      this.view.showError(error.message);
    }
  }
  
  private validateInput(): void {
    const email = this.view.getEmail();
    const password = this.view.getPassword();
    
    if (!email) {
      this.view.showEmailError('Email is required');
    }
    if (!password || password.length < 6) {
      this.view.showPasswordError('Password must be at least 6 characters');
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Flow Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-orange-600" />
                <span>Form Submit</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-blue-600" />
                <span>API Call</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-green-600" />
                <span>UI Response</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Key Features:
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  TypeScript interfaces
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Async/await
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Error boundaries
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Type safety
                </span>
              </div>
            </div>
          </div>
          
          {/* React MVP Implementation - Side by Side */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                    React MVP Implementation
                  </h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm">
                    JavaScript/React
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  React component with presenter pattern - See all components together
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
                    <code>{`// Model - Todo service
class TodoService {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }
  
  async getTodos() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...this.todos];
  }
  
  async addTodo(text) {
    if (!text || text.trim().length === 0) {
      throw new Error('Todo text cannot be empty');
    }
    
    const todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    this.todos.push(todo);
    this.saveTodos();
    return todo;
  }
  
  async toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveTodos();
    }
    return todo;
  }
  
  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* View Component */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <Monitor className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-300">View (Component)</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// View - React Component
function TodoListView() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [newTodo, setNewTodo] = useState('');
  
  const presenter = useMemo(() => 
    new TodoPresenter(
      {
        setTodos,
        setLoading,
        setError,
        setNewTodo,
        getNewTodo: () => newTodo
      },
      new TodoService()
    ), []
  );
  
  useEffect(() => {
    presenter.loadTodos();
  }, []);
  
  return (
    <div className="todo-app">
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      
      <div className="todo-input">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo..."
        />
        <button onClick={() => presenter.addTodo()}>
          Add
        </button>
      </div>
      
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => presenter.toggleTodo(todo.id)}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
              
              {/* Presenter */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-300">Presenter</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Presenter - Business logic
class TodoPresenter {
  constructor(view, todoService) {
    this.view = view;
    this.todoService = todoService;
  }
  
  async loadTodos() {
    this.view.setLoading(true);
    this.view.setError('');
    
    try {
      const todos = await this.todoService.getTodos();
      this.view.setTodos(todos);
    } catch (error) {
      this.view.setError('Failed to load todos');
    } finally {
      this.view.setLoading(false);
    }
  }
  
  async addTodo() {
    const text = this.view.getNewTodo();
    
    if (!text || text.trim().length === 0) {
      this.view.setError('Please enter a todo');
      return;
    }
    
    this.view.setLoading(true);
    this.view.setError('');
    
    try {
      const todo = await this.todoService.addTodo(text);
      this.view.setNewTodo('');
      
      // Reload todos to get updated list
      await this.loadTodos();
    } catch (error) {
      this.view.setError(error.message);
    } finally {
      this.view.setLoading(false);
    }
  }
  
  async toggleTodo(id) {
    try {
      await this.todoService.toggleTodo(id);
      await this.loadTodos(); // Reload to update UI
    } catch (error) {
      this.view.setError('Failed to update todo');
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Flow Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-orange-600" />
                <span>User Action</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-blue-600" />
                <span>State Update</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-green-600" />
                <span>UI Refresh</span>
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
                  Presenter class
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  State management
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Lifecycle handling
                </span>
              </div>
            </div>
          </div>
          
          {/* Vue MVP Example - Side by Side */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                    Vue MVP Example
                  </h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm">
                    JavaScript/Vue
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Vue 3 implementation with Composition API and presenter pattern - View all components side by side
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
                    <code>{`// Model - Task Service
import axios from 'axios';

export class TaskService {
  constructor() {
    this.api = axios.create({
      baseURL: '/api/tasks'
    });
  }
  
  async getTasks() {
    const response = await this.api.get('/');
    return response.data;
  }
  
  async getTaskById(id) {
    const response = await this.api.get(\`/\${id}\`);
    return response.data;
  }
  
  async createTask(taskData) {
    const response = await this.api.post('/', taskData);
    return response.data;
  }
  
  async updateTask(id, taskData) {
    const response = await this.api.put(\`/\${id}\`, taskData);
    return response.data;
  }
  
  async deleteTask(id) {
    await this.api.delete(\`/\${id}\`);
  }
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
                    <code>{`<!-- View - Task List Component -->
<template>
  <div class="task-list">
    <div class="task-header">
      <h2>Task Management</h2>
      <button @click="loadTasks" class="btn btn-primary">
        Refresh
      </button>
    </div>
    
    <div v-if="loading" class="loading">
      Loading tasks...
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else class="task-grid">
      <div v-for="task in tasks" :key="task.id" class="task-card">
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <div class="task-actions">
          <button @click="editTask(task)" class="btn btn-secondary">
            Edit
          </button>
          <button @click="deleteTask(task.id)" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TaskPresenter } from './TaskPresenter';

export default {
  name: 'TaskListView',
  data() {
    return {
      tasks: [],
      loading: false,
      error: null
    };
  },
  created() {
    this.presenter = new TaskPresenter(this);
    this.presenter.loadTasks();
  },
  methods: {
    loadTasks() {
      this.presenter.loadTasks();
    },
    editTask(task) {
      this.presenter.editTask(task);
    },
    deleteTask(id) {
      this.presenter.deleteTask(id);
    }
  }
};
</script>`}</code>
                  </pre>
                </div>
              </div>
              
              {/* Presenter */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-300">Presenter</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Presenter - Task Presenter
import { TaskService } from './TaskService';

export class TaskPresenter {
  constructor(view) {
    this.view = view;
    this.taskService = new TaskService();
  }
  
  async loadTasks() {
    try {
      this.view.loading = true;
      this.view.error = null;
      
      const tasks = await this.taskService.getTasks();
      this.view.tasks = tasks;
    } catch (error) {
      this.view.error = 'Failed to load tasks';
      console.error('Error loading tasks:', error);
    } finally {
      this.view.loading = false;
    }
  }
  
  async createTask(taskData) {
    try {
      const task = await this.taskService.createTask(taskData);
      this.view.tasks.push(task);
      return task;
    } catch (error) {
      this.view.error = 'Failed to create task';
      throw error;
    }
  }
  
  async updateTask(id, taskData) {
    try {
      const task = await this.taskService.updateTask(id, taskData);
      const index = this.view.tasks.findIndex(t => t.id === id);
      if (index !== -1) {
        this.view.tasks[index] = task;
      }
      return task;
    } catch (error) {
      this.view.error = 'Failed to update task';
      throw error;
    }
  }
  
  async deleteTask(id) {
    try {
      await this.taskService.deleteTask(id);
      this.view.tasks = this.view.tasks.filter(t => t.id !== id);
    } catch (error) {
      this.view.error = 'Failed to delete task';
      throw error;
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Flow Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-orange-600" />
                <span>User Action</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-purple-600" />
                <span>Presenter</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-blue-600" />
                <span>Service</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Key Features:
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Composition API
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Presenter pattern
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Service layer
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Event handling
                </span>
              </div>
            </div>
          </div>
          
          {/* Angular MVP Example - Side by Side */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300">
                    Angular MVP Example
                  </h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-sm">
                    TypeScript/Angular
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Angular implementation with services, components, and presenter architecture - View all components side by side
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
                    <code>{`// Model - Task Service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({'{'} providedIn: 'root' {'}'})
export class TaskService {
  private apiUrl = '/api/tasks';
  
  constructor(private http: HttpClient) {}
  
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(\`\${this.apiUrl}/\${id}\`);
  }
  
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
  
  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(\`\${this.apiUrl}/\${id}\`, task);
  }
  
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`);
  }
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
                    <code>{`// View - Task List Component
import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({'{'} 
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
{'}'})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  loading = false;
  error: string | null = null;
  
  constructor(private presenter: TaskPresenter) {}
  
  ngOnInit(): void {
    this.loadTasks();
  }
  
  loadTasks(): void {
    this.presenter.loadTasks();
  }
  
  editTask(task: Task): void {
    this.presenter.editTask(task);
  }
  
  deleteTask(id: number): void {
    this.presenter.deleteTask(id);
  }
}

<!-- Template -->
<div class="task-list">
  <div class="task-header">
    <h2>Task Management</h2>
    <button (click)="loadTasks()" class="btn btn-primary">
      Refresh
    </button>
  </div>
  
  <div *ngIf="loading" class="loading">
    Loading tasks...
  </div>
  
  <div *ngIf="error" class="error">
    {{ error }}
  </div>
  
  <div *ngIf="!loading && !error" class="task-grid">
    <div *ngFor="let task of tasks" class="task-card">
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>
      <div class="task-actions">
        <button (click)="editTask(task)" class="btn btn-secondary">
          Edit
        </button>
        <button (click)="deleteTask(task.id)" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </div>
</div>`}</code>
                  </pre>
                </div>
              </div>
              
              {/* Presenter */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-300">Presenter</h5>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                    <code>{`// Presenter - Task Presenter
import { Injectable } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from '../models/task.model';
import { TaskListComponent } from '../components/task-list.component';

@Injectable({'{'} providedIn: 'root' {'}'})
export class TaskPresenter {
  private view: TaskListComponent | null = null;
  
  constructor(private taskService: TaskService) {}
  
  setView(view: TaskListComponent): void {
    this.view = view;
  }
  
  async loadTasks(): Promise<void> {
    if (!this.view) return;
    
    try {
      this.view.loading = true;
      this.view.error = null;
      
      const tasks = await this.taskService.getTasks().toPromise();
      this.view.tasks = tasks || [];
    } catch (error) {
      this.view.error = 'Failed to load tasks';
      console.error('Error loading tasks:', error);
    } finally {
      this.view.loading = false;
    }
  }
  
  async createTask(taskData: Task): Promise<Task> {
    if (!this.view) throw new Error('View not set');
    
    try {
      const task = await this.taskService.createTask(taskData).toPromise();
      this.view.tasks.push(task);
      return task;
    } catch (error) {
      this.view.error = 'Failed to create task';
      throw error;
    }
  }
  
  async updateTask(id: number, taskData: Task): Promise<Task> {
    if (!this.view) throw new Error('View not set');
    
    try {
      const task = await this.taskService.updateTask(id, taskData).toPromise();
      const index = this.view.tasks.findIndex(t => t.id === id);
      if (index !== -1) {
        this.view.tasks[index] = task;
      }
      return task;
    } catch (error) {
      this.view.error = 'Failed to update task';
      throw error;
    }
  }
  
  async deleteTask(id: number): Promise<void> {
    if (!this.view) return;
    
    try {
      await this.taskService.deleteTask(id).toPromise();
      this.view.tasks = this.view.tasks.filter(t => t.id !== id);
    } catch (error) {
      this.view.error = 'Failed to delete task';
      throw error;
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Flow Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-orange-600" />
                <span>User Action</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-purple-600" />
                <span>Presenter</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-blue-600" />
                <span>Service</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Key Features:
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Dependency injection
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Observable patterns
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/30 rounded-full text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Presenter architecture
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
                MVP Best Practices
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Industry-proven guidelines for implementing MVP pattern effectively
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
                  Use Interfaces for Views
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Define View interfaces to enable easy mocking and testing of Presenters without requiring actual UI components.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Easy unit testing with mock Views</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Loose coupling between components</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Better documentation and contracts</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <code className="text-xs text-emerald-700 dark:text-emerald-300">
                  interface ILoginView {'{'} showError(message: string): void; {'}'}
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
                  Keep Views Completely Passive
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Views should contain no business logic and only delegate all user interactions to the Presenter.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Single responsibility principle</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Better testability of business logic</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Improved reusability of Views</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <code className="text-xs text-emerald-700 dark:text-emerald-300">
                  onClick={'{'}() ={'>'} presenter.handleLogin(){'}'} // No logic in View
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
                  Use Dependency Injection
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Inject dependencies into Presenters for better testability and flexibility.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Easily mock dependencies for testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Loose coupling between components</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Better architecture and flexibility</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <code className="text-xs text-emerald-700 dark:text-emerald-300">
                  constructor(view: ILoginView, service: AuthService)
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
                  Handle Errors Gracefully
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Implement comprehensive error handling in Presenters with proper user feedback.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Better user experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Stable application behavior</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Easier debugging and maintenance</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <code className="text-xs text-emerald-700 dark:text-emerald-300">
                  try/catch with View error display
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
                Learn from these frequent MVP implementation pitfalls
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
                    Putting Business Logic in View
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Adding validation, calculations, or data processing directly in View components violates the MVP principle.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Difficult to test business logic</li>
                      <li>• Tight coupling between UI and logic</li>
                      <li>• Code duplication across Views</li>
                      <li>• Harder to maintain and refactor</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Move all business logic to the Presenter. Views should only handle UI rendering and event delegation.
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
                    Direct Model Access from View
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Allowing Views to directly access or manipulate Model data bypasses the Presenter's coordination role.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Bypasses Presenter logic</li>
                      <li>• Inconsistent application state</li>
                      <li>• Security vulnerabilities</li>
                      <li>• Hard to debug data flow issues</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      All Model access must go through the Presenter. Views should only receive data from Presenter.
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
                    Presenter Becomes Bloated
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Putting too much logic in a single Presenter creates a "God object" that's hard to maintain.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Single responsibility violation</li>
                      <li>• Difficult to test and maintain</li>
                      <li>• Code becomes tightly coupled</li>
                      <li>• Hard to reuse Presenter logic</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Extract business logic into services and use cases. Keep Presenters focused on coordination only.
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
                    Ignoring Error Handling
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Not implementing proper error handling leads to poor user experience and unstable applications.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Poor user experience</li>
                      <li>• Application crashes</li>
                      <li>• Data loss and corruption</li>
                      <li>• User frustration and abandonment</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Implement comprehensive error handling with try/catch blocks and proper user feedback.
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
                    Tight Coupling Between Components
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Creating direct dependencies between concrete implementations reduces flexibility and testability.
                  </p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Consequences:</h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Difficult to unit test</li>
                      <li>• Hard to swap implementations</li>
                      <li>• Reduced code reusability</li>
                      <li>• Tight coupling prevents scaling</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">✅ Solution:</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Use interfaces and dependency injection to maintain loose coupling between components.
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
                <span>Always ask: "Does this belong in the Presenter?"</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Test Presenters with mock Views</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Keep View methods simple and declarative</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Extract complex logic into services</span>
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
                Essential insights and learning points about MVP pattern
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Takeaway 1 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Presenter as Mediator</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Presenter acts as the middleman between View and Model, handling all presentation logic.
              </p>
            </div>

            {/* Takeaway 2 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <TestTube className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Enhanced Testability</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Presenter can be unit tested independently of the View, improving code quality and reliability.
              </p>
            </div>

            {/* Takeaway 3 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">View Independence</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                View becomes a passive interface that only displays data and forwards user interactions.
              </p>
            </div>

            {/* Takeaway 4 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Clear Separation</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                MVP provides clear separation of concerns with well-defined responsibilities for each component.
              </p>
            </div>

            {/* Takeaway 5 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Platform Agnostic</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                MVP works well across different platforms including web, mobile, and desktop applications.
              </p>
            </div>

            {/* Takeaway 6 */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Event-Driven</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                MVP promotes event-driven architecture with clear communication patterns between components.
              </p>
            </div>
          </div>

          {/* Summary Box */}
          <div className="p-6 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3">
              💡 Core Insight
            </h4>
            <p className="text-blue-600 dark:text-blue-400 leading-relaxed">
              MVP's strength lies in its clear separation of concerns and enhanced testability. By introducing the Presenter 
              as a mediator, it eliminates direct dependencies between View and Model, making the codebase more maintainable, 
              testable, and adaptable to changing requirements across different platforms.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

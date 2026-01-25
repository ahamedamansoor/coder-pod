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
  RefreshCw, MousePointer, Webhook, Router, Server
} from 'lucide-react';

interface MVCProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function MVC({ onOpenWebPlayground }: MVCProps) {

  const mvcComponents = [
    {
      name: 'Model',
      description: 'Manages data, business logic, and rules',
      icon: Database,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      hoverBgColor: 'bg-blue-100 dark:bg-blue-900/50',
      responsibilities: [
        'Manages application data and state',
        'Implements business logic and validation',
        'Handles data persistence and retrieval',
        'Provides data access methods',
        'Maintains data integrity and consistency'
      ],
      characteristics: [
        'Data-centric and stateful',
        'Independent of UI concerns',
        'Reusable across different views',
        'Testable in isolation',
        'Single source of truth for data'
      ],
      examples: [
        'Database models (ORM entities)',
        'API service classes',
        'Data repositories',
        'Business logic services',
        'State management stores'
      ]
    },
    {
      name: 'View',
      description: 'Renders the user interface and displays data',
      icon: Eye,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      hoverBgColor: 'bg-green-100 dark:bg-green-900/50',
      responsibilities: [
        'Renders UI components and layouts',
        'Displays data from the Model',
        'Captures user interactions',
        'Delegates events to Controller',
        'Maintains presentation logic'
      ],
      characteristics: [
        'Passive and declarative',
        'Focused on presentation only',
        'No business logic',
        'Highly testable with snapshots',
        'Reusable and composable'
      ],
      examples: [
        'React/Vue components',
        'HTML templates',
        'CSS stylesheets',
        'UI component libraries',
        'Responsive layouts'
      ]
    },
    {
      name: 'Controller',
      description: 'Handles user input and coordinates between Model and View',
      icon: Cpu,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      hoverBgColor: 'bg-purple-100 dark:bg-purple-900/50',
      responsibilities: [
        'Processes user input and events',
        'Coordinates Model and View interactions',
        'Implements application logic',
        'Handles routing and navigation',
        'Manages user session state'
      ],
      characteristics: [
        'Active and event-driven',
        'Orchestrates component interactions',
        'Contains presentation logic',
        'Thin and focused',
        'Stateless when possible'
      ],
      examples: [
        'API route handlers',
        'Event listeners',
        'Form controllers',
        'Navigation controllers',
        'Command handlers'
      ]
    }
  ];

  const dataFlowSteps = [
    {
      id: 1,
      title: 'User Interaction',
      description: 'User performs an action in the View that triggers an event',
      direction: 'View → Controller',
      icon: MousePointer,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      details: [
        'User clicks button, submits form, or interacts with UI',
        'View captures the user interaction',
        'View delegates the event to Controller',
        'Event contains user input and context'
      ],
      components: ['View', 'Controller']
    },
    {
      id: 2,
      title: 'Event Processing',
      description: 'Controller processes the user input and determines the action',
      direction: 'Controller Logic',
      icon: Cpu,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      details: [
        'Controller receives the event from View',
        'Validates user input and permissions',
        'Determines appropriate business logic to execute',
        'Coordinates with Model for data operations'
      ],
      components: ['Controller']
    },
    {
      id: 3,
      title: 'Model Interaction',
      description: 'Controller interacts with Model to process data',
      direction: 'Controller → Model',
      icon: Database,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      details: [
        'Controller calls Model methods',
        'Model executes business logic',
        'Model validates and processes data',
        'Model updates internal state'
      ],
      components: ['Controller', 'Model']
    },
    {
      id: 4,
      title: 'Data Update',
      description: 'Model updates its state and notifies Controller',
      direction: 'Model → Controller',
      icon: ArrowUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      details: [
        'Model processes the requested operation',
        'Model updates its internal state',
        'Model returns results to Controller',
        'Model may trigger notifications or events'
      ],
      components: ['Model', 'Controller']
    },
    {
      id: 5,
      title: 'View Update',
      description: 'Controller updates View with new data from Model',
      direction: 'Controller → View',
      icon: Monitor,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      details: [
        'Controller receives updated data from Model',
        'Controller prepares data for View',
        'Controller passes data to View',
        'View updates its presentation'
      ],
      components: ['Controller', 'View']
    },
    {
      id: 6,
      title: 'UI Refresh',
      description: 'View re-renders to show updated information to user',
      direction: 'View Display',
      icon: Eye,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      details: [
        'View receives new data from Controller',
        'View re-renders UI components',
        'User sees updated interface',
        'Cycle is ready for next interaction'
      ],
      components: ['View']
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Model-View-Controller (MVC)"
        description="Master the MVC architectural pattern for building scalable, maintainable web applications with clear separation of concerns"
        icon={Box}
        category="System Design.Patterns"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Box className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Understanding MVC Architecture
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  MVC is a foundational architectural pattern that separates applications into three interconnected components,
                  enabling better organization, testability, and maintainability of complex web applications.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Clear separation of concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Improved code maintainability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Enhanced testability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Parallel development possible</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
                  When to Use MVC
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Large-scale enterprise applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Applications with complex business logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Team-based development projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Applications requiring extensive testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MVC Components Overview */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500 rounded-xl">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                  MVC Components
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  The three core components of MVC architecture, each with distinct responsibilities and interactions
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Component Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {mvcComponents.map((component, index) => (
                <div key={index} className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl animate-pulse"></div>
                  
                  {/* Component Card */}
                  <div className={`relative p-6 rounded-2xl border-3 bg-gradient-to-br ${component.bgColor} ${component.borderColor} shadow-2xl transform transition-all duration-300 hover:scale-105`}>
                    <div className="absolute -top-3 -right-3">
                      <div className={`w-8 h-8 ${component.color.replace('text', 'bg')} rounded-full flex items-center justify-center`}>
                        <component.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <component.icon className={`w-16 h-16 ${component.color} mx-auto mb-3`} />
                      <h3 className={`text-xl font-bold ${component.color} mb-2`}>
                        {component.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                        {component.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Key Responsibilities:
                        </h5>
                        <ul className="space-y-1">
                          {component.responsibilities.slice(0, 3).map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Examples:
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {component.examples.slice(0, 3).map((example, i) => (
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

        {/* Interactive Architecture Diagram */}
        <Card className="border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50/50 to-cyan-50/30 dark:from-teal-950/20 dark:to-cyan-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-teal-500 rounded-xl">
                <Network className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-teal-700 dark:text-teal-300">
                  MVC Architecture Flow
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Visual representation of how MVC components interact in a typical application flow
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Architecture Diagram */}
            <div className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-teal-200 dark:border-teal-800">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-center text-slate-700 dark:text-slate-300 mb-2">
                  Component Interaction Pattern
                </h3>
                <p className="text-center text-slate-600 dark:text-slate-400">
                  All components work together to create a cohesive application architecture
                </p>
              </div>
              
              {/* Visual Layout */}
              <div className="relative">
                {/* Component Layout */}
                <div className="relative z-10">
                  {/* Top Row: View and Controller */}
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
                                <Eye className="w-3 h-3 text-white" />
                              </div>
                            </div>
                            
                            <Monitor className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">
                              View
                            </h3>
                            <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                              User Interface
                            </p>
                            <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                              • Renders data<br/>
                              • Captures events<br/>
                              • Displays UI
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bidirectional Arrows */}
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2 group">
                          <ArrowRight className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
                            events
                          </span>
                        </div>
                        <div className="flex items-center gap-2 group">
                          <ArrowLeft className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
                            updates
                          </span>
                        </div>
                      </div>
                      
                      {/* Controller Component */}
                      <div className="text-center">
                        <div className="relative group transition-all duration-300 transform scale-110">
                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-purple-400/20 rounded-2xl blur-xl animate-pulse"></div>
                          
                          {/* Component Card */}
                          <div className="relative p-8 rounded-2xl border-3 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800/50 dark:to-purple-900/50 border-purple-500 shadow-2xl">
                            <div className="absolute -top-3 -right-3">
                              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                                <Cpu className="w-3 h-3 text-white" />
                              </div>
                            </div>
                            
                            <Cpu className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                              Controller
                            </h3>
                            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                              Business Logic
                            </p>
                            <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                              • Processes input<br/>
                              • Coordinates flow<br/>
                              • Manages logic
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
                          Data & Rules
                        </p>
                        <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                          • Manages data<br/>
                          • Business rules<br/>
                          • State management
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Data Flow Visualization */}
        <Card className="border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50/50 to-cyan-50/30 dark:from-teal-950/20 dark:to-cyan-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-teal-500 rounded-xl">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-teal-700 dark:text-teal-300">
                  Interactive Data Flow
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Step-by-step breakdown of how data flows through MVC components
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Interactive Flow Steps */}
            <div className="space-y-4">
              {dataFlowSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-teal-500 shadow-2xl bg-teal-50/50 dark:bg-teal-950/20">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${step.bgColor} rounded-lg border-2 border-teal-200 dark:border-teal-800`}>
                        <div className="flex items-center gap-2">
                          <step.icon className={`w-5 h-5 ${step.color}`} />
                          <span className="text-sm font-bold text-teal-700 dark:text-teal-300">
                            Step {step.id}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className={`text-lg font-bold ${step.color}`}>
                            {step.title}
                          </h4>
                          <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-200 rounded-full text-sm">
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
                              {step.details.map((detail, i) => (
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
                              {step.components.map((comp, i) => (
                                <span key={i} className="px-2 py-1 bg-teal-50 dark:bg-teal-950/30 rounded-full text-xs text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-700">
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
                      <ArrowRight className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Complete Flow Summary */}
            <div className="p-6 bg-teal-100 dark:bg-teal-900/30 rounded-xl border border-teal-200 dark:border-teal-800">
              <h4 className="text-lg font-bold text-teal-700 dark:text-teal-300 mb-4">
                Complete MVC Flow Summary
              </h4>
              <div className="flex items-center justify-center gap-4 text-center flex-wrap">
                <div className="flex flex-col items-center">
                  <Users className="w-10 h-10 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">User</span>
                </div>
                <ArrowRight className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <div className="flex flex-col items-center">
                  <Eye className="w-10 h-10 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">View</span>
                </div>
                <ArrowRight className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <div className="flex flex-col items-center">
                  <Cpu className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">Controller</span>
                </div>
                <ArrowRight className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <div className="flex flex-col items-center">
                  <Database className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">Model</span>
                </div>
                <ArrowRight className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <div className="flex flex-col items-center">
                  <Cpu className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">Controller</span>
                </div>
                <ArrowRight className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <div className="flex flex-col items-center">
                  <Eye className="w-10 h-10 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">View</span>
                </div>
                <ArrowRight className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <div className="flex flex-col items-center">
                  <Users className="w-10 h-10 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">User</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices Section */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-emerald-500 rounded-xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                  MVC Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Guidelines and recommendations for implementing MVC effectively
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    DO's
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Keep Controllers thin and focused</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Implement proper validation in Models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Make Views passive and declarative</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Use dependency injection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Test each component independently</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    DON'Ts
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Put business logic in Views</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Make Controllers too complex</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Create tight coupling between components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Ignore error handling patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Skip proper documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Examples */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/30 dark:from-orange-950/20 dark:to-amber-950/10">
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
                  Practical MVC implementations with clear, step-by-step code examples
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              {/* Example 1: Simple Todo App */}
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
                <h4 className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-4">
                  Example 1: Simple Todo Application
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Model</h5>
                    <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded overflow-x-auto">
{`class TodoModel {
  constructor() {
    this.todos = [];
  }
  
  addTodo(text) {
    const todo = {
      id: Date.now(),
      text,
      completed: false
    };
    this.todos.push(todo);
    return todo;
  }
  
  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return todo;
  }
}`}
                    </pre>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">View</h5>
                    <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded overflow-x-auto">
{`class TodoView {
  constructor(controller) {
    this.controller = controller;
    this.form = document.querySelector('form');
    this.list = document.querySelector('ul');
    this.bindEvents();
  }
  
  bindEvents() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = e.target.querySelector('input');
      this.controller.addTodo(input.value);
      input.value = '';
    });
  }
}`}
                    </pre>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Controller</h5>
                    <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded overflow-x-auto">
{`class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  
  addTodo(text) {
    const todo = this.model.addTodo(text);
    this.view.renderTodo(todo);
  }
  
  toggleTodo(id) {
    const todo = this.model.toggleTodo(id);
    this.view.updateTodo(todo);
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/20 dark:to-blue-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-indigo-500 rounded-xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-indigo-700 dark:text-indigo-300">
                  Key Takeaways
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential concepts and principles for mastering MVC architecture
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-4">
                  Core Principles
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Separation of Concerns:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Each component has a single, well-defined responsibility
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Loose Coupling:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Components interact through well-defined interfaces
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">High Cohesion:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Related functionality is grouped together within components
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-4">
                  When to Choose MVC
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Complex Applications:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        When you have complex business logic and multiple views
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Team Development:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        When multiple developers work on the same application
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Long-term Maintenance:</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        When the application needs to evolve and scale over time
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-3 text-center">
                Master MVC for Better Architecture
              </h4>
              <p className="text-blue-600 dark:text-blue-400 leading-relaxed text-center">
                MVC's strength lies in its clear separation of concerns and proven track record. 
                By properly implementing Model, View, and Controller components, you create 
                applications that are maintainable, testable, and scalable across different 
                platforms and requirements.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Settings, Target, Users, Lightbulb, Code, TestTube, 
  ArrowRight, CheckCircle2, AlertCircle, Zap, TrendingUp,
  Search, FileText, Database, Globe, Shield, Clock,
  BarChart3, Eye, Brain, Heart, MessageSquare, Rocket,
  GitBranch, Layers, Cpu, Network, Cloud, Smartphone,
  Monitor, Package, Lock, RefreshCw, Activity, Star
} from 'lucide-react';

interface SystemDesignProcessProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SystemDesignProcess({ onOpenWebPlayground }: SystemDesignProcessProps) {
  const designPhases = [
    {
      phase: 'Requirements Gathering',
      description: 'Understand stakeholder needs and system constraints',
      icon: Search,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      activities: ['Stakeholder interviews', 'User story creation', 'Requirement analysis', 'Constraint identification'],
      deliverables: ['Requirements document', 'User stories', 'Acceptance criteria', 'Technical constraints'],
      duration: '1-2 weeks',
      keyQuestions: ['What problem are we solving?', 'Who are the users?', 'What are the success criteria?']
    },
    {
      phase: 'System Analysis',
      description: 'Analyze requirements and identify system boundaries',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      activities: ['Functional requirements analysis', 'Non-functional requirements', 'System boundaries definition', 'Use case modeling'],
      deliverables: ['System analysis report', 'Use case diagrams', 'Functional specifications', 'System boundaries'],
      duration: '1-2 weeks',
      keyQuestions: ['What must the system do?', 'How well must it perform?', 'What are the limitations?']
    },
    {
      phase: 'High-Level Design',
      description: 'Create architectural blueprint and technology choices',
      icon: Layers,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      activities: ['Architecture pattern selection', 'Technology stack decisions', 'Component identification', 'Interface definition'],
      deliverables: ['Architecture diagram', 'Technology stack', 'Component structure', 'API contracts'],
      duration: '2-3 weeks',
      keyQuestions: ['Which architecture pattern fits best?', 'What technologies should we use?', 'How will components interact?']
    },
    {
      phase: 'Detailed Design',
      description: 'Design individual components and data structures',
      icon: Code,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      borderColor: 'border-orange-200 dark:border-orange-800',
      activities: ['Component design', 'Database schema design', 'API specification', 'UI/UX design'],
      deliverables: ['Component designs', 'Database schema', 'API documentation', 'UI mockups'],
      duration: '3-4 weeks',
      keyQuestions: ['How will each component work?', 'How will data be structured?', 'What will the user interface look like?']
    },
    {
      phase: 'Implementation',
      description: 'Build the system following the design specifications',
      icon: Code,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      borderColor: 'border-red-200 dark:border-red-800',
      activities: ['Frontend development', 'Backend development', 'Database implementation', 'Integration development'],
      deliverables: ['Working components', 'Integrated system', 'Unit tests', 'Documentation'],
      duration: '8-12 weeks',
      keyQuestions: ['Are we following the design?', 'Is the code quality high?', 'Are components working together?']
    },
    {
      phase: 'Testing & Validation',
      description: 'Verify system meets requirements and quality standards',
      icon: TestTube,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      activities: ['Unit testing', 'Integration testing', 'System testing', 'User acceptance testing'],
      deliverables: ['Test reports', 'Bug fixes', 'Performance metrics', 'User feedback'],
      duration: '2-4 weeks',
      keyQuestions: ['Does the system work correctly?', 'Does it meet requirements?', 'Is performance adequate?']
    },
    {
      phase: 'Deployment & Maintenance',
      description: 'Deploy system and provide ongoing support',
      icon: Rocket,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      activities: ['Production deployment', 'Monitoring setup', 'User training', 'Maintenance planning'],
      deliverables: ['Deployed system', 'Monitoring dashboard', 'User documentation', 'Maintenance plan'],
      duration: '1-2 weeks',
      keyQuestions: ['Is the system running smoothly?', 'Are users satisfied?', 'How will we maintain quality?']
    }
  ];

  const designPrinciples = [
    {
      principle: 'Simplicity',
      description: 'Keep designs simple and understandable',
      icon: Lightbulb,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/30',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      benefits: ['Easier maintenance', 'Better performance', 'Reduced bugs', 'Faster development'],
      examples: ['Clean architecture', 'Minimal dependencies', 'Clear naming', 'Consistent patterns']
    },
    {
      principle: 'Scalability',
      description: 'Design for growth and increased load',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      benefits: ['Handles growth', 'Cost-effective', 'Future-proof', 'Competitive advantage'],
      examples: ['Horizontal scaling', 'Load balancing', 'Caching strategies', 'Database sharding']
    },
    {
      principle: 'Reliability',
      description: 'Ensure system availability and fault tolerance',
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      benefits: ['User trust', 'Business continuity', 'Better reputation', 'Reduced downtime'],
      examples: ['Redundancy', 'Error handling', 'Monitoring', 'Backup systems']
    },
    {
      principle: 'Security',
      description: 'Protect system and user data from threats',
      icon: Lock,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      borderColor: 'border-red-200 dark:border-red-800',
      benefits: ['Data protection', 'User trust', 'Compliance', 'Risk mitigation'],
      examples: ['Authentication', 'Encryption', 'Access control', 'Security audits']
    }
  ];

  const commonMistakes = [
    {
      mistake: 'Skipping Requirements Analysis',
      description: 'Jumping into design without understanding needs',
      consequences: ['Wrong solution', 'Rework required', 'User dissatisfaction', 'Budget overruns'],
      prevention: ['Thorough stakeholder interviews', 'Requirements documentation', 'User research'],
      impact: 'High'
    },
    {
      mistake: 'Over-Engineering',
      description: 'Creating overly complex solutions for simple problems',
      consequences: ['Hard to maintain', 'Poor performance', 'Difficult to debug', 'High costs'],
      prevention: ['KISS principle', 'Regular reviews', 'Simplification efforts'],
      impact: 'Medium'
    },
    {
      mistake: 'Ignoring Non-Functional Requirements',
      description: 'Focusing only on features, ignoring performance, security, etc.',
      consequences: ['Poor performance', 'Security vulnerabilities', 'Scalability issues', 'User frustration'],
      prevention: ['Early consideration', 'Performance testing', 'Security reviews'],
      impact: 'High'
    },
    {
      mistake: 'No Iterative Feedback',
      description: 'Working in isolation without regular stakeholder feedback',
      consequences: ['Wrong direction', 'Late changes', 'Wasted effort', 'Misalignment'],
      prevention: ['Regular demos', 'Stakeholder reviews', 'Agile practices'],
      impact: 'Medium'
    }
  ];

  const bestPractices = [
    {
      practice: 'Start with Why',
      description: 'Always begin with understanding the problem and purpose',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      tips: ['Ask "why" repeatedly', 'Understand business value', 'Define success metrics'],
      benefits: ['Better solutions', 'Stakeholder alignment', 'Clear direction']
    },
    {
      practice: 'Think in Layers',
      description: 'Design systems in layers with clear separation of concerns',
      icon: Layers,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      tips: ['Presentation layer', 'Business logic layer', 'Data layer', 'Infrastructure layer'],
      benefits: ['Maintainability', 'Testability', 'Flexibility', 'Reusability']
    },
    {
      practice: 'Design for Change',
      description: 'Anticipate and accommodate future changes',
      icon: RefreshCw,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      tips: ['Loose coupling', 'Extensibility', 'Configuration', 'Modular design'],
      benefits: ['Adaptability', 'Lower maintenance', 'Future-proof', 'Cost-effective']
    },
    {
      practice: 'Measure Everything',
      description: 'Define metrics and monitoring from the start',
      icon: BarChart3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      borderColor: 'border-orange-200 dark:border-orange-800',
      tips: ['Performance metrics', 'User analytics', 'Error tracking', 'Business KPIs'],
      benefits: ['Data-driven decisions', 'Problem detection', 'Optimization opportunities', 'ROI measurement']
    }
  ];

  return (
    <div className="w-full pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Settings}
        category="System Design Fundamentals"
        title="System Design Process"
        description="A comprehensive methodology for designing robust, scalable, and maintainable frontend systems from requirements to deployment"
        colorTheme="blue"
      />

      {/* Introduction Section */}
      <Card className="mb-8 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500 rounded-xl">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                Understanding System Design Process
              </CardTitle>
              <CardDescription className="text-base mt-2">
                A structured approach to transform requirements into robust, scalable, and maintainable systems
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>System Design Process</strong> is a methodology that guides engineers from understanding requirements to creating a complete system architecture. It ensures that systems are built to meet current needs while being prepared for future growth and changes.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300">Goal-Oriented</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Every design decision serves specific business and user goals
                </p>
              </div>
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">Iterative</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Continuous refinement through feedback and learning cycles
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300">Quality-Focused</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Emphasizes reliability, performance, and maintainability
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Design Process Flow Diagram */}
      <Card className="mb-8 border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-500 rounded-xl">
              <GitBranch className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                System Design Process Flow
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Visual representation of the complete system design lifecycle
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
            {/* Process Flow Diagram */}
            <div className="space-y-4">
              {designPhases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Phase Card */}
                  <div className={`p-6 rounded-xl border-2 ${phase.borderColor} ${phase.bgColor} relative`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${phase.bgColor} rounded-lg`}>
                        <phase.icon className={`w-6 h-6 ${phase.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className={`text-xl font-bold ${phase.color}`}>
                            {phase.phase}
                          </h4>
                          <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600">
                            Phase {index + 1}
                          </span>
                          <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-4 text-lg">
                          {phase.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                              Key Activities:
                            </h5>
                            <ul className="space-y-1">
                              {phase.activities.map((activity, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                  <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                              Deliverables:
                            </h5>
                            <ul className="space-y-1">
                              {phase.deliverables.map((deliverable, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                  <FileText className="w-3 h-3 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                          <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Key Questions:
                          </h5>
                          <div className="space-y-1">
                            {phase.keyQuestions.map((question, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <AlertCircle className="w-3 h-3 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-slate-600 dark:text-slate-400 italic">
                                  {question}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow to next phase */}
                  {index < designPhases.length - 1 && (
                    <div className="flex justify-center my-4">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                        <ArrowRight className="w-6 h-6" />
                        <span className="text-sm font-medium">Continue to next phase</span>
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Design Principles Section */}
      <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-500 rounded-xl">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                Core Design Principles
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Fundamental principles that guide effective system design decisions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {designPrinciples.map((principle, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${principle.borderColor} ${principle.bgColor}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${principle.bgColor} rounded-lg`}>
                    <principle.icon className={`w-6 h-6 ${principle.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold ${principle.color} mb-2`}>
                      {principle.principle}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {principle.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Benefits:
                        </h5>
                        <ul className="space-y-1">
                          {principle.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Examples:
                        </h5>
                        <ul className="space-y-1">
                          {principle.examples.map((example, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <Lightbulb className="w-3 h-3 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes Section */}
      <Card className="mb-8 border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-orange-50/30 dark:from-red-950/20 dark:to-orange-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-red-500 rounded-xl">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-red-700 dark:text-red-300">
                Common Design Mistakes to Avoid
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Learn from common pitfalls and how to prevent them in your design process
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-red-200 dark:border-red-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold text-red-700 dark:text-red-300">
                        {mistake.mistake}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        mistake.impact === 'High' 
                          ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' 
                          : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200'
                      }`}>
                        {mistake.impact} Impact
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {mistake.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Consequences:
                        </h5>
                        <ul className="space-y-1">
                          {mistake.consequences.map((consequence, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <AlertCircle className="w-3 h-3 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              {consequence}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Prevention:
                        </h5>
                        <ul className="space-y-1">
                          {mistake.prevention.map((prevention, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <Shield className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              {prevention}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices Section */}
      <Card className="mb-8 border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-500 rounded-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                Best Practices for Effective System Design
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Proven approaches and techniques for successful system design
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {bestPractices.map((practice, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${practice.borderColor} ${practice.bgColor}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${practice.bgColor} rounded-lg`}>
                    <practice.icon className={`w-6 h-6 ${practice.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold ${practice.color} mb-2`}>
                      {practice.practice}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {practice.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Key Tips:
                        </h5>
                        <ul className="space-y-1">
                          {practice.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Benefits:
                        </h5>
                        <ul className="space-y-1">
                          {practice.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <Star className="w-3 h-3 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary Section */}
      <Card className="mb-8 border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/50 to-gray-50/30 dark:from-slate-950/20 dark:to-gray-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-slate-500 rounded-xl">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-slate-700 dark:text-slate-300">
                Key Takeaways
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Essential points to remember for successful system design
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  Process Essentials
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Requirements First:</strong> Always start with thorough understanding of needs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Iterative Approach:</strong> Continuously refine based on feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Document Everything:</strong> Create clear artifacts for each phase
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Validate Early:</strong> Test assumptions and designs with stakeholders
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  Design Wisdom
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Simplicity Wins:</strong> Complex solutions are rarely the best
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Design for Change:</strong> Systems evolve, prepare for it
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Measure Success:</strong> Define metrics and track them
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Learn from Mistakes:</strong> Both yours and others'
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

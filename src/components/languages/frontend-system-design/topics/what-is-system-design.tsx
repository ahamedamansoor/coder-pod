'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  BookOpen, Layers, Database, Server, Globe, Zap, Shield, 
  ArrowRight, Cpu, Code, Lightbulb, Target, TrendingUp,
  Users, Activity, Puzzle, CheckCircle2, AlertTriangle,
  Play, Pause, RotateCcw, Eye, EyeOff, Lock, Unlock,
  Clock, BarChart3, Settings, Wrench, Hammer, Building2
} from 'lucide-react';

interface WhatIsSystemDesignProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function WhatIsSystemDesign({ onOpenWebPlayground }: WhatIsSystemDesignProps) {
  const systemComponents = [
    {
      name: 'Frontend',
      icon: Globe,
      color: 'bg-sky-500',
      description: 'User interface and experience',
      responsibilities: ['UI/UX Design', 'User Interaction', 'Client-side Logic', 'Performance'],
      technologies: ['React', 'Vue', 'Angular', 'CSS', 'JavaScript']
    },
    {
      name: 'Backend',
      icon: Server,
      color: 'bg-violet-500',
      description: 'Business logic and APIs',
      responsibilities: ['API Design', 'Business Logic', 'Data Processing', 'Security'],
      technologies: ['Node.js', 'Python', 'Java', 'Go', 'Ruby']
    },
    {
      name: 'Database',
      icon: Database,
      color: 'bg-emerald-500',
      description: 'Data storage and management',
      responsibilities: ['Data Storage', 'Query Optimization', 'Consistency', 'Backups'],
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch']
    },
    {
      name: 'Infrastructure',
      icon: Shield,
      color: 'bg-amber-500',
      description: 'Deployment and operations',
      responsibilities: ['Deployment', 'Monitoring', 'Scaling', 'Security'],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    }
  ];

  const designPrinciples = [
    {
      title: 'Scalability',
      description: 'Ability to handle growing load',
      icon: TrendingUp,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      examples: ['Horizontal scaling', 'Load balancing', 'Caching', 'CDN']
    },
    {
      title: 'Reliability',
      description: 'System availability and fault tolerance',
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      examples: ['Redundancy', 'Failover', 'Circuit breakers', 'Health checks']
    },
    {
      title: 'Performance',
      description: 'Speed and efficiency optimization',
      icon: Zap,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
      borderColor: 'border-amber-200 dark:border-amber-800',
      examples: ['Caching', 'Optimization', 'Async processing', 'Compression']
    },
    {
      title: 'Maintainability',
      description: 'Code organization and evolution',
      icon: Wrench,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      examples: ['Modularity', 'Documentation', 'Testing', 'Code reviews']
    }
  ];

  const realWorldExamples = [
    {
      company: 'Netflix',
      challenge: 'Stream video to 220M+ users globally',
      solution: 'Microservices architecture with CDN and recommendation engine',
      technologies: ['React', 'Node.js', 'AWS', 'Kubernetes'],
      outcome: '99.99% uptime, <100ms latency'
    },
    {
      company: 'Amazon',
      challenge: 'Handle massive e-commerce traffic during peak seasons',
      solution: 'Microservices with auto-scaling and distributed caching',
      technologies: ['Java', 'AWS', 'Redis', 'PostgreSQL'],
      outcome: 'Handles 10M+ requests per minute'
    },
    {
      company: 'Spotify',
      challenge: 'Deliver personalized music to 400M+ users',
      solution: 'Event-driven architecture with ML recommendations',
      technologies: ['React', 'Go', 'Python', 'Kafka'],
      outcome: 'Real-time recommendations, 99.95% uptime'
    }
  ];

  return (
    <div className="w-full pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Layers}
        category="System Design · Fundamentals"
        title="What is System Design?"
        description="Master the art and science of building scalable, reliable software systems"
        colorTheme="blue"
      />

      {/* Definition Section */}
      <Card className="mb-8 border-2 border-sky-200 dark:border-sky-800 bg-gradient-to-br from-sky-50/50 to-indigo-50/30 dark:from-sky-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-sky-500 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-sky-700 dark:text-sky-300">
                What is System Design?
              </CardTitle>
              <CardDescription className="text-base mt-2">
                The foundation of building robust software systems
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-sky-200 dark:border-sky-800">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Formal Definition
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>System design</strong> is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It involves making high-level design decisions about the organization and structure of software systems.
            </p>
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
              <p className="text-slate-700 dark:text-slate-300">
                <strong>In simple terms:</strong> It's like being the architect of a building - you decide how all the pieces fit together, how they communicate, and how the entire structure will stand strong and serve its purpose.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                What System Design Answers
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">How will the system handle millions of users?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">What happens if a component fails?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">How do we ensure data consistency?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">How do we scale the system efficiently?</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-violet-50 dark:bg-violet-950/30 rounded-xl border border-violet-200 dark:border-violet-800">
              <h4 className="text-lg font-semibold text-violet-700 dark:text-violet-300 mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Key Design Decisions
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Architecture patterns and styles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Technology stack selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Data storage and processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Communication protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Importance Section */}
      <Card className="mb-8 border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-500 rounded-xl">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                Why System Design Matters
              </CardTitle>
              <CardDescription className="text-base mt-2">
                The critical role of system design in modern software development
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                User Experience
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                Good system design ensures fast, reliable, and responsive applications that users love.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg w-fit mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Business Growth
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                Scalable systems support business growth without requiring complete rewrites.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Risk Management
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                Well-designed systems handle failures gracefully and maintain data integrity.
              </p>
            </div>
          </div>

          <div className="p-6 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
            <h4 className="text-lg font-semibold text-amber-700 dark:text-amber-300 mb-4">
              Real-World Impact
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Poor System Design</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Slow loading times</li>
                  <li>• Frequent crashes</li>
                  <li>• Security vulnerabilities</li>
                  <li>• High maintenance costs</li>
                  <li>• Unable to scale</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Good System Design</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Fast performance</li>
                  <li>• High availability</li>
                  <li>• Robust security</li>
                  <li>• Easy maintenance</li>
                  <li>• Scales effortlessly</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Components Section */}
      <Card className="mb-8 border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50/50 to-purple-50/30 dark:from-violet-950/20 dark:to-purple-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-violet-500 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-violet-700 dark:text-violet-300">
                Core System Components
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Building blocks of modern software systems
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {systemComponents.map((component, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-violet-200 dark:border-violet-800 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 ${component.color} rounded-lg`}>
                    <component.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                      {component.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {component.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Key Responsibilities</h5>
                    <div className="flex flex-wrap gap-2">
                      {component.responsibilities.map((resp, i) => (
                        <span key={i} className="px-2 py-1 bg-violet-100 dark:bg-violet-900 rounded text-xs text-violet-700 dark:text-violet-300">
                          {resp}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Common Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {component.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs text-slate-700 dark:text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4">
              How Components Work Together
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <p className="text-slate-700 dark:text-slate-300">User interacts with Frontend interface</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <p className="text-slate-700 dark:text-slate-300">Frontend sends requests to Backend APIs</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <p className="text-slate-700 dark:text-slate-300">Backend processes logic and queries Database</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <p className="text-slate-700 dark:text-slate-300">Infrastructure ensures everything runs smoothly</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Principles Section */}
      <Card className="mb-8 border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-amber-500 rounded-xl">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-amber-700 dark:text-amber-300">
                Key Design Principles
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Fundamental principles that guide system design decisions
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
                      {principle.title}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {principle.description}
                    </p>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Implementation Examples:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {principle.examples.map((example, i) => (
                          <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
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

          <div className="p-6 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 rounded-xl border border-rose-200 dark:border-rose-800">
            <h4 className="text-lg font-semibold text-rose-700 dark:text-rose-300 mb-4">
              Trade-offs in System Design
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              System design is about making informed trade-offs. You can't optimize everything at once:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-rose-200 dark:border-rose-700">
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Common Trade-offs</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Performance vs. Consistency</li>
                  <li>• Availability vs. Partition Tolerance</li>
                  <li>• Latency vs. Throughput</li>
                  <li>• Development Speed vs. Quality</li>
                  <li>• Cost vs. Performance</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-rose-200 dark:border-rose-700">
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Making Decisions</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Understand requirements</li>
                  <li>• Consider constraints</li>
                  <li>• Evaluate alternatives</li>
                  <li>• Document decisions</li>
                  <li>• Monitor and iterate</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Examples Section */}
      <Card className="mb-8 border-2 border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50/50 to-pink-50/30 dark:from-rose-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-rose-500 rounded-xl">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-rose-700 dark:text-rose-300">
                Real-World Examples
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Learn from successful system design implementations
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            {realWorldExamples.map((example, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-rose-200 dark:border-rose-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-rose-100 dark:bg-rose-900 rounded-lg">
                    <Building2 className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      {example.company}
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="font-medium text-slate-700 dark:text-slate-300 mb-1">Challenge</h5>
                        <p className="text-slate-600 dark:text-slate-400">{example.challenge}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-700 dark:text-slate-300 mb-1">Solution</h5>
                        <p className="text-slate-600 dark:text-slate-400">{example.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {example.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-rose-100 dark:bg-rose-900 rounded text-xs text-rose-700 dark:text-rose-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <p className="text-emerald-700 dark:text-emerald-300 font-medium">
                        🎯 Result: {example.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-4">
              Key Takeaways
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Common Patterns</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Microservices for scalability</li>
                  <li>• CDN for global performance</li>
                  <li>• Caching for speed</li>
                  <li>• Auto-scaling for reliability</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Success Factors</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Understanding user needs</li>
                  <li>• Choosing right technology</li>
                  <li>• Planning for growth</li>
                  <li>• Continuous optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

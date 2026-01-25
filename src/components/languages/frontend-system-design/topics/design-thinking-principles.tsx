'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Lightbulb, Eye, Target, Zap, Users, ArrowRight, 
  Search, Brain, Heart, MessageSquare, CheckCircle2, 
  AlertTriangle, TrendingUp, Puzzle, Activity, Star,
  Compass, Palette, Cpu, Globe, Shield, Clock,
  BarChart3, Settings, Wrench, Hammer, Building2,
  Smartphone, Laptop, Cloud, Network, Router, Layers,
  Sparkles, TestTube, Rocket, Award, GitBranch
} from 'lucide-react';

interface DesignThinkingPrinciplesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function DesignThinkingPrinciples({ onOpenWebPlayground }: DesignThinkingPrinciplesProps) {
  const designThinkingPhases = [
    {
      title: 'Empathize',
      description: 'Understand your users deeply and their needs',
      icon: Heart,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50 dark:bg-rose-950/30',
      borderColor: 'border-rose-200 dark:border-rose-800',
      examples: ['User Interviews', 'Observation', 'Surveys', 'Persona Creation'],
      methods: ['Empathy Maps', 'User Journey Maps', 'Stakeholder Analysis', 'Contextual Inquiry']
    },
    {
      title: 'Define',
      description: 'Clearly articulate the problem you\'re solving',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      examples: ['Problem Statements', 'How Might We Questions', 'User Stories', 'Requirements'],
      methods: ['5 Whys', 'Problem Framing', 'Point of View Statements', 'Opportunity Mapping']
    },
    {
      title: 'Ideate',
      description: 'Generate creative solutions and possibilities',
      icon: Lightbulb,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
      borderColor: 'border-amber-200 dark:border-amber-800',
      examples: ['Brainstorming', 'Mind Mapping', 'Sketching', 'Concept Development'],
      methods: ['SCAMPER', 'Brainwriting', 'Reverse Brainstorming', 'Analogical Thinking']
    },
    {
      title: 'Prototype',
      description: 'Create tangible representations of your ideas',
      icon: Puzzle,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      examples: ['Wireframes', 'Mockups', 'Interactive Prototypes', 'Physical Models'],
      methods: ['Paper Prototyping', 'Digital Prototyping', 'Role Playing', 'Storyboards']
    },
    {
      title: 'Test',
      description: 'Validate solutions with real users and feedback',
      icon: TestTube,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      examples: ['Usability Testing', 'A/B Testing', 'User Feedback', 'Analytics'],
      methods: ['Think Aloud Testing', 'Heuristic Evaluation', 'User Testing Sessions', 'Feedback Analysis']
    }
  ];

  const corePrinciples = [
    {
      principle: 'Human-Centered',
      description: 'Always start and end with people',
      icon: Users,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50 dark:bg-sky-950/30',
      borderColor: 'border-sky-200 dark:border-sky-800',
      applications: ['User research', 'Persona development', 'Accessibility design', 'Inclusive design'],
      benefits: ['Higher adoption', 'Better satisfaction', 'Reduced rework', 'Market fit']
    },
    {
      principle: 'Iterative Process',
      description: 'Continuously refine through cycles of learning',
      icon: GitBranch,
      color: 'text-violet-600',
      bgColor: 'bg-violet-50 dark:bg-violet-950/30',
      borderColor: 'border-violet-200 dark:border-violet-800',
      applications: ['Agile development', 'Continuous improvement', 'Feedback loops', 'Rapid prototyping'],
      benefits: ['Faster learning', 'Risk reduction', 'Better quality', 'Adaptability']
    },
    {
      principle: 'Collaborative Approach',
      description: 'Leverage diverse perspectives and expertise',
      icon: MessageSquare,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      applications: ['Cross-functional teams', 'Stakeholder workshops', 'Co-design sessions', 'Group brainstorming'],
      benefits: ['Diverse solutions', 'Buy-in building', 'Knowledge sharing', 'Innovation culture']
    },
    {
      principle: 'Experimental Mindset',
      description: 'Embrace failure as learning opportunities',
      icon: Rocket,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      borderColor: 'border-orange-200 dark:border-orange-800',
      applications: ['A/B testing', 'Pilot programs', 'Minimum viable products', 'Controlled experiments'],
      benefits: ['Innovation encouragement', 'Risk mitigation', 'Data-driven decisions', 'Learning culture']
    }
  ];

  const methodologyComparison = [
    {
      aspect: 'Focus Area',
      designThinking: 'Human needs and experiences',
      traditionalApproach: 'Technical requirements and specifications',
      designThinkingIcon: Heart,
      traditionalIcon: Cpu
    },
    {
      aspect: 'Process Flow',
      designThinking: 'Non-linear, iterative, flexible',
      traditionalApproach: 'Linear, sequential, rigid',
      designThinkingIcon: GitBranch,
      traditionalIcon: ArrowRight
    },
    {
      aspect: 'Success Metrics',
      designThinking: 'User satisfaction, adoption, impact',
      traditionalApproach: 'Technical performance, efficiency, cost',
      designThinkingIcon: Star,
      traditionalIcon: BarChart3
    },
    {
      aspect: 'Risk Management',
      designThinking: 'Early validation, user feedback',
      traditionalApproach: 'Requirements analysis, testing phases',
      designThinkingIcon: Shield,
      traditionalIcon: CheckCircle2
    },
    {
      aspect: 'Innovation Level',
      designThinking: 'Breakthrough solutions, new possibilities',
      traditionalApproach: 'Incremental improvements, optimization',
      designThinkingIcon: Sparkles,
      traditionalIcon: TrendingUp
    },
    {
      aspect: 'Team Structure',
      designThinking: 'Cross-functional, collaborative',
      traditionalApproach: 'Specialized, siloed',
      designThinkingIcon: Users,
      traditionalIcon: Settings
    }
  ];

  const practicalApplications = [
    {
      domain: 'Product Development',
      description: 'Creating products that users love and need',
      icon: Smartphone,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      examples: ['Mobile apps', 'Web applications', 'Physical products', 'Digital services'],
      outcomes: ['Higher user engagement', 'Better retention rates', 'Reduced support costs', 'Competitive advantage']
    },
    {
      domain: 'Service Design',
      description: 'Designing end-to-end service experiences',
      icon: Globe,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      examples: ['Customer service', 'Healthcare services', 'Banking experiences', 'Retail journeys'],
      outcomes: ['Improved customer satisfaction', 'Reduced friction points', 'Higher loyalty', 'Better efficiency']
    },
    {
      domain: 'Business Strategy',
      description: 'Developing user-centered business models',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      examples: ['Business model innovation', 'Market entry strategies', 'Digital transformation', 'Service design'],
      outcomes: ['Market differentiation', 'Revenue growth', 'Competitive positioning', 'Sustainable advantage']
    },
    {
      domain: 'Organizational Innovation',
      description: 'Fostering creative problem-solving culture',
      icon: Building2,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
      borderColor: 'border-amber-200 dark:border-amber-800',
      examples: ['Process improvement', 'Culture change', 'Internal tools', 'Learning programs'],
      outcomes: ['Employee engagement', 'Innovation capability', 'Agility', 'Knowledge sharing']
    }
  ];

  const implementationFramework = [
    {
      phase: 'Preparation',
      description: 'Setting up for success',
      activities: ['Team formation', 'Goal definition', 'Resource allocation', 'Stakeholder alignment'],
      deliverables: ['Project charter', 'Team roles', 'Success metrics', 'Timeline'],
      duration: '1-2 weeks',
      criticalSuccess: ['Clear objectives', 'Executive support', 'Right team mix']
    },
    {
      phase: 'Discovery',
      description: 'Understanding the problem space',
      activities: ['User research', 'Stakeholder interviews', 'Competitive analysis', 'Market research'],
      deliverables: ['User personas', 'Journey maps', 'Insights report', 'Problem statement'],
      duration: '2-4 weeks',
      criticalSuccess: ['Deep user insights', 'Stakeholder buy-in', 'Clear problem definition']
    },
    {
      phase: 'Ideation',
      description: 'Generating potential solutions',
      activities: ['Brainstorming sessions', 'Concept development', 'Solution sketching', 'Feasibility analysis'],
      deliverables: ['Concept portfolio', 'Solution prototypes', 'Validation plan', 'Prioritization matrix'],
      duration: '1-3 weeks',
      criticalSuccess: ['Creative solutions', 'Diverse ideas', 'Clear evaluation criteria']
    },
    {
      phase: 'Prototyping',
      description: 'Making ideas tangible',
      activities: ['Prototype development', 'User testing', 'Iteration cycles', 'Refinement'],
      deliverables: ['Interactive prototypes', 'Test results', 'Refined concepts', 'Implementation plan'],
      duration: '2-6 weeks',
      criticalSuccess: ['User feedback', 'Technical feasibility', 'Clear requirements']
    },
    {
      phase: 'Implementation',
      description: 'Bringing solutions to life',
      activities: ['Development', 'Testing', 'Launch planning', 'Change management'],
      deliverables: ['Final product', 'Launch plan', 'Training materials', 'Support documentation'],
      duration: '4-12 weeks',
      criticalSuccess: ['Quality delivery', 'User adoption', 'Performance metrics']
    }
  ];

  const commonPitfalls = [
    {
      pitfall: 'Skipping User Research',
      description: 'Jumping to solutions without understanding users',
      consequences: ['Wrong problem solved', 'Low adoption', 'Wasted resources', 'Market failure'],
      prevention: ['Always start with empathy', 'Invest in user research', 'Validate assumptions'],
      recovery: ['Pause and research', 'User testing', 'Pivot based on feedback']
    },
    {
      pitfall: 'Analysis Paralysis',
      description: 'Overthinking and endless planning without action',
      consequences: ['Missed opportunities', 'Team demotivation', 'Budget overruns', 'Competitive disadvantage'],
      prevention: ['Set clear deadlines', 'Embrace good enough', 'Iterative approach'],
      recovery: ['Minimum viable approach', 'Time boxing', 'Decision frameworks']
    },
    {
      pitfall: 'Confirmation Bias',
      description: 'Only seeking evidence that supports existing beliefs',
      consequences: ['Blind spots', 'Flawed solutions', 'Groupthink', 'Innovation stagnation'],
      prevention: ['Diverse perspectives', 'Devil\'s advocate', 'External validation'],
      recovery: ['Fresh eyes review', 'Objective metrics', 'User feedback']
    },
    {
      pitfall: 'Solution Attachment',
      description: 'Falling in love with your first idea',
      consequences: ['Missed better solutions', 'Resistance to feedback', 'Suboptimal outcomes'],
      prevention: ['Generate multiple options', 'Kill your darlings', 'Focus on problems'],
      recovery: ['Idea diversity', 'Objective evaluation', 'User testing']
    }
  ];

  const successMetrics = [
    {
      category: 'User-Centric Metrics',
      description: 'Measures of user satisfaction and engagement',
      metrics: [
        { name: 'User Satisfaction Score', description: 'Overall user happiness with the solution' },
        { name: 'Net Promoter Score', description: 'Likelihood of users to recommend the solution' },
        { name: 'Task Success Rate', description: 'Percentage of users completing key tasks successfully' },
        { name: 'User Engagement', description: 'Frequency and depth of user interactions' }
      ],
      tools: ['Surveys', 'Analytics', 'User testing', 'Feedback collection']
    },
    {
      category: 'Business Impact Metrics',
      description: 'Measures of business value and ROI',
      metrics: [
        { name: 'Adoption Rate', description: 'Percentage of target users actively using the solution' },
        { name: 'Revenue Impact', description: 'Direct or indirect revenue generated' },
        { name: 'Cost Savings', description: 'Reduction in operational costs or support needs' },
        { name: 'Time to Value', description: 'Speed of realizing benefits from implementation' }
      ],
      tools: ['Financial analysis', 'Usage analytics', 'Cost tracking', 'ROI calculations']
    },
    {
      category: 'Process Metrics',
      description: 'Measures of design thinking effectiveness',
      metrics: [
        { name: 'Iteration Speed', description: 'Time between design iterations' },
        { name: 'Learning Rate', description: 'Speed of gaining insights from user feedback' },
        { name: 'Innovation Yield', description: 'Number of viable ideas generated' },
        { name: 'Team Collaboration', description: 'Quality and frequency of cross-functional collaboration' }
      ],
      tools: ['Project tracking', 'Team surveys', 'Idea management', 'Collaboration metrics']
    }
  ];

  return (
    <div className="w-full pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Lightbulb}
        category="System Design.Design Thinking"
        title="Design Thinking Principles"
        description="A comprehensive guide to human-centered innovation and creative problem-solving methodology"
        colorTheme="purple"
      />

      {/* Introduction Section */}
      <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-500 rounded-xl">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                Understanding Design Thinking
              </CardTitle>
              <CardDescription className="text-base mt-2">
                A human-centered approach to innovation that integrates the needs of people, the possibilities of technology, and the requirements for business success
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>Design Thinking</strong> is a non-linear, iterative process that teams use to understand users, challenge assumptions, redefine problems, and create innovative solutions to prototype and test. It combines analytical and creative thinking to drive innovation.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300">Human-Centered</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Starts and ends with people's needs and experiences
                </p>
              </div>
              <div className="p-4 bg-pink-50 dark:bg-pink-950/30 rounded-lg border border-pink-200 dark:border-pink-800">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <h4 className="font-semibold text-pink-700 dark:text-pink-300">Iterative</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Continuous cycles of learning, testing, and refinement
                </p>
              </div>
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">Innovative</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Breakthrough solutions through creative problem-solving
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Design Thinking Phases Section */}
      <Card className="mb-8 border-2 border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50/50 to-orange-50/30 dark:from-rose-950/20 dark:to-orange-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-rose-500 rounded-xl">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-rose-700 dark:text-rose-300">
                The Five Phases of Design Thinking
              </CardTitle>
              <CardDescription className="text-base mt-2">
                A structured approach to creative problem-solving and innovation
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            {designThinkingPhases.map((phase, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${phase.borderColor} ${phase.bgColor}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${phase.bgColor} rounded-lg`}>
                    <phase.icon className={`w-6 h-6 ${phase.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className={`text-xl font-bold ${phase.color}`}>
                        {phase.title}
                      </h4>
                      <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600">
                        Phase {index + 1}
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 text-lg">
                      {phase.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Examples:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {phase.examples.map((example, i) => (
                            <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Methods:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {phase.methods.map((method, i) => (
                            <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                              {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-4">
              Phase Interconnections
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              The phases are not always linear—teams often return to earlier phases to refine their understanding or solutions based on new insights.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-purple-700">
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Flexibility</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Jump between phases as needed</li>
                  <li>• Iterate based on learning</li>
                  <li>• Adapt to project requirements</li>
                  <li>• Embrace non-linear progress</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-purple-700">
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Continuous Learning</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Insights drive iteration</li>
                  <li>• Feedback informs next steps</li>
                  <li>• Assumptions are challenged</li>
                  <li>• Solutions evolve continuously</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Principles Section */}
      <Card className="mb-8 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-sky-50/30 dark:from-blue-950/20 dark:to-sky-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500 rounded-xl">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                Core Principles
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Fundamental beliefs that guide effective design thinking practice
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {corePrinciples.map((principle, index) => (
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
                          Applications:
                        </h5>
                        <ul className="space-y-1">
                          {principle.applications.map((app, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Benefits:
                        </h5>
                        <ul className="space-y-1">
                          {principle.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <Award className="w-3 h-3 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
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

      {/* Methodology Comparison Section */}
      <Card className="mb-8 border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-500 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                Design Thinking vs Traditional Approaches
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Key differences between human-centered and traditional methodologies
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {methodologyComparison.map((item, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                      <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                        {item.aspect}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <item.designThinkingIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium text-purple-700 dark:text-purple-300">
                        Design Thinking
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {item.designThinking}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                      <item.traditionalIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium text-slate-700 dark:text-slate-300">
                        Traditional
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {item.traditionalApproach}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4">
              When to Use Each Approach
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-700">
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Design Thinking Best For:</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Complex, ill-defined problems</li>
                  <li>• High uncertainty environments</li>
                  <li>• User experience critical projects</li>
                  <li>• Innovation initiatives</li>
                  <li>• Service and experience design</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-700">
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Traditional Best For:</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Well-defined technical problems</li>
                  <li>• Established requirements</li>
                  <li>• Infrastructure and systems</li>
                  <li>• Compliance-driven projects</li>
                  <li>• Optimization of existing solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Applications Section */}
      <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-indigo-50/30 dark:from-purple-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-500 rounded-xl">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                Practical Applications
              </CardTitle>
              <CardDescription className="text-base mt-2">
                How design thinking transforms different domains and industries
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {practicalApplications.map((application, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${application.borderColor} ${application.bgColor}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${application.bgColor} rounded-lg`}>
                    <application.icon className={`w-6 h-6 ${application.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold ${application.color} mb-2`}>
                      {application.domain}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {application.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Examples:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {application.examples.map((example, i) => (
                          <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Expected Outcomes:
                      </h5>
                      <ul className="space-y-1">
                        {application.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Framework Section */}
      <Card className="mb-8 border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-amber-500 rounded-xl">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-amber-700 dark:text-amber-300">
                Implementation Framework
              </CardTitle>
              <CardDescription className="text-base mt-2">
                A step-by-step guide to implementing design thinking in your organization
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {implementationFramework.map((phase, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-lg">
                    <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                        {phase.phase}
                      </h4>
                      <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 rounded-full text-xs text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-700">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {phase.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Key Activities
                        </h5>
                        <ul className="space-y-1">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="text-xs text-slate-600 dark:text-slate-400">
                              • {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Deliverables
                        </h5>
                        <ul className="space-y-1">
                          {phase.deliverables.map((deliverable, i) => (
                            <li key={i} className="text-xs text-slate-600 dark:text-slate-400">
                              • {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:col-span-2">
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Critical Success Factors
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {phase.criticalSuccess.map((factor, i) => (
                            <span key={i} className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded text-xs text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700">
                              {factor}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls Section */}
      <Card className="mb-8 border-2 border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50/50 to-pink-50/30 dark:from-rose-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-rose-500 rounded-xl">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-rose-700 dark:text-rose-300">
                Common Pitfalls and How to Avoid Them
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Learn from common mistakes and build resilience in your design thinking practice
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {commonPitfalls.map((pitfall, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-rose-200 dark:border-rose-800">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-rose-100 dark:bg-rose-900 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-rose-700 dark:text-rose-300 mb-2">
                      {pitfall.pitfall}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {pitfall.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">
                          Consequences:
                        </h5>
                        <ul className="space-y-1">
                          {pitfall.consequences.map((consequence, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <AlertTriangle className="w-3 h-3 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              {consequence}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        <div>
                          <h5 className="text-sm font-semibold text-amber-700 dark:text-amber-300 mb-2">
                            Prevention:
                          </h5>
                          <ul className="space-y-1">
                            {pitfall.prevention.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <Shield className="w-3 h-3 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                            Recovery:
                          </h5>
                          <ul className="space-y-1">
                            {pitfall.recovery.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Success Metrics Section */}
      <Card className="mb-8 border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-500 rounded-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                Measuring Success
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Key metrics and indicators to evaluate design thinking effectiveness
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            {successMetrics.map((category, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {category.category}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      Key Metrics
                    </h5>
                    <div className="space-y-3">
                      {category.metrics.map((metric, i) => (
                        <div key={i} className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800">
                          <h6 className="font-medium text-emerald-700 dark:text-emerald-300 mb-1">
                            {metric.name}
                          </h6>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            {metric.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      Measurement Tools
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 rounded-full text-xs text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4">
              Building a Measurement Culture
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Success measurement should be continuous, collaborative, and focused on learning rather than judgment.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-700">
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Regular Cadence</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Weekly check-ins</li>
                  <li>• Monthly reviews</li>
                  <li>• Quarterly assessments</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-700">
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Team Involvement</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Cross-functional participation</li>
                  <li>• Shared ownership</li>
                  <li>• Transparent reporting</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-700">
                <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Action Orientation</h5>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Data-driven decisions</li>
                  <li>• Iterative improvements</li>
                  <li>• Learning focus</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

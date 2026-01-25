'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Scale, TrendingUp, TrendingDown, AlertTriangle, 
  CheckCircle2, XCircle, ArrowRight, ArrowLeft, ArrowUpDown,
  Zap, Shield, Clock, DollarSign, Users, Cpu, Database,
  Globe, Smartphone, Monitor, Package, Lock, RefreshCw,
  BarChart3, Target, Eye, Brain, Heart, MessageSquare, Rocket,
  GitBranch, Layers, Settings, Wrench, Hammer, Building2,
  Activity, Star, Award, Lightbulb, Search, FileText
} from 'lucide-react';

interface TradeOffsAnalysisProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function TradeOffsAnalysis({ onOpenWebPlayground }: TradeOffsAnalysisProps) {
  const tradeOffCategories = [
    {
      category: 'Performance vs Maintainability',
      description: 'Balancing speed optimization with code readability and maintenance',
      icon: Zap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      firstFactorFocus: ['Code optimization', 'Caching strategies', 'Lazy loading', 'Bundle size reduction'],
      secondFactorFocus: ['Clean code', 'Documentation', 'Modular design', 'Testing'],
      decisionFactors: ['Project complexity', 'Team size', 'Long-term maintenance', 'Performance requirements'],
      realWorldExample: 'E-commerce site choosing between optimized JavaScript bundles vs. maintainable component architecture'
    },
    {
      category: 'Security vs Usability',
      description: 'Finding the right balance between protection measures and user experience',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      borderColor: 'border-red-200 dark:border-red-800',
      firstFactorFocus: ['Authentication', 'Encryption', 'Access control', 'Security audits'],
      secondFactorFocus: ['Simple interface', 'Quick access', 'Minimal friction', 'User guidance'],
      decisionFactors: ['Data sensitivity', 'User base', 'Compliance requirements', 'Risk tolerance'],
      realWorldExample: 'Banking app balancing multi-factor authentication with seamless user experience'
    },
    {
      category: 'Scalability vs Complexity',
      description: 'Designing for growth while keeping the system manageable',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      firstFactorFocus: ['Horizontal scaling', 'Load balancing', 'Microservices', 'Caching'],
      secondFactorFocus: ['Monolithic design', 'Single database', 'Simple deployment', 'Minimal dependencies'],
      decisionFactors: ['Expected growth', 'Team expertise', 'Time to market', 'Budget constraints'],
      realWorldExample: 'Startup choosing between simple monolith vs. complex microservices architecture'
    },
    {
      category: 'Speed vs Quality',
      description: 'Rapid development vs. thorough testing and refinement',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      borderColor: 'border-orange-200 dark:border-orange-800',
      firstFactorFocus: ['MVP approach', 'Rapid prototyping', 'Agile sprints', 'Quick iterations'],
      secondFactorFocus: ['Comprehensive testing', 'Code reviews', 'Performance optimization', 'User feedback'],
      decisionFactors: ['Market competition', 'Budget timeline', 'Criticality of bugs', 'Brand reputation'],
      realWorldExample: 'Social media app launching quickly vs. ensuring bug-free experience'
    },
    {
      category: 'Features vs Performance',
      description: 'Adding functionality vs. maintaining system responsiveness',
      icon: Package,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      firstFactorFocus: ['Rich functionality', 'User options', 'Advanced capabilities', 'Integration'],
      secondFactorFocus: ['Fast loading', 'Smooth interactions', 'Low resource usage', 'Optimized rendering'],
      decisionFactors: ['User expectations', 'Device capabilities', 'Network conditions', 'Competitive landscape'],
      realWorldExample: 'Mobile app choosing between feature-rich interface vs. fast, responsive experience'
    },
    {
      category: 'Cost vs Quality',
      description: 'Budget constraints vs. premium user experience and reliability',
      icon: DollarSign,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      firstFactorFocus: ['Open source tools', 'Cloud optimization', 'Minimal infrastructure', 'In-house development'],
      secondFactorFocus: ['Premium services', 'Advanced monitoring', 'Expert support', 'Extensive testing'],
      decisionFactors: ['Budget availability', 'Revenue model', 'User expectations', 'Market positioning'],
      realWorldExample: 'SaaS platform choosing between affordable hosting vs. premium infrastructure'
    }
  ];

  const analysisFramework = [
    {
      step: 1,
      title: 'Identify Trade-offs',
      description: 'Recognize competing factors and constraints',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      activities: ['Stakeholder interviews', 'Requirement analysis', 'Constraint identification', 'Priority mapping'],
      outputs: ['Trade-off matrix', 'Constraint list', 'Priority ranking', 'Stakeholder requirements'],
      keyQuestions: ['What are we optimizing for?', 'What are the limiting factors?', 'Who are the stakeholders?']
    },
    {
      step: 2,
      title: 'Quantify Impact',
      description: 'Measure and evaluate each factor objectively',
      icon: BarChart3,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      activities: ['Metrics definition', 'Data collection', 'Impact assessment', 'Risk analysis'],
      outputs: ['Impact scores', 'Risk assessment', 'Metrics dashboard', 'Quantitative analysis'],
      keyQuestions: ['How do we measure success?', 'What are the key metrics?', 'What are the potential risks?']
    },
    {
      step: 3,
      title: 'Evaluate Options',
      description: 'Compare different approaches and solutions',
      icon: Scale,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      activities: ['Solution brainstorming', 'Cost-benefit analysis', 'Technical evaluation', 'Feasibility study'],
      outputs: ['Solution comparison', 'Cost analysis', 'Technical assessment', 'Feasibility report'],
      keyQuestions: ['What are the alternatives?', 'Which solution fits best?', 'What are the trade-offs?']
    },
    {
      step: 4,
      title: 'Make Decision',
      description: 'Choose the optimal approach based on analysis',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      activities: ['Decision criteria', 'Stakeholder approval', 'Risk mitigation', 'Implementation planning'],
      outputs: ['Decision document', 'Implementation plan', 'Risk mitigation strategy', 'Stakeholder agreement'],
      keyQuestions: ['Which option provides the best balance?', 'How do we mitigate risks?', 'What is the implementation plan?']
    },
    {
      step: 5,
      title: 'Monitor & Adjust',
      description: 'Track results and refine decisions as needed',
      icon: RefreshCw,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      activities: ['Performance monitoring', 'User feedback', 'Metrics tracking', 'Iterative improvement'],
      outputs: ['Performance reports', 'User feedback analysis', 'Improvement recommendations', 'Adjustment plan'],
      keyQuestions: ['Are we achieving our goals?', 'What needs adjustment?', 'How can we improve?']
    }
  ];

  const decisionMatrices = [
    {
      title: 'Performance vs Maintainability Matrix',
      description: 'Evaluating code optimization strategies',
      criteria: ['Development Speed', 'Code Complexity', 'Runtime Performance', 'Maintenance Effort'],
      options: [
        {
          name: 'Highly Optimized Code',
          scores: [2, 5, 5, 2],
          pros: ['Maximum performance', 'Efficient resource usage'],
          cons: ['Hard to maintain', 'Slower development', 'Higher learning curve']
        },
        {
          name: 'Balanced Approach',
          scores: [4, 3, 4, 4],
          pros: ['Good performance', 'Maintainable code', 'Reasonable development speed'],
          cons: ['Not optimal performance', 'Moderate complexity']
        },
        {
          name: 'Clean Code First',
          scores: [5, 2, 3, 5],
          pros: ['Easy maintenance', 'Fast development', 'Team collaboration'],
          cons: ['Lower performance', 'May need optimization later']
        }
      ]
    },
    {
      title: 'Security vs Usability Matrix',
      description: 'Choosing authentication and security measures',
      criteria: ['User Convenience', 'Security Level', 'Implementation Cost', 'Support Overhead'],
      options: [
        {
          name: 'Maximum Security',
          scores: [1, 5, 4, 3],
          pros: ['Highest protection', 'Compliance ready', 'Risk mitigation'],
          cons: ['Poor user experience', 'High support costs', 'User resistance']
        },
        {
          name: 'Balanced Security',
          scores: [3, 4, 3, 3],
          pros: ['Good security', 'Reasonable UX', 'Manageable cost'],
          cons: ['Not foolproof', 'Some user friction']
        },
        {
          name: 'User-Friendly',
          scores: [5, 2, 2, 2],
          pros: ['Excellent UX', 'Low support needs', 'Fast adoption'],
          cons: ['Lower security', 'Higher risk', 'Compliance issues']
        }
      ]
    }
  ];

  const evaluationCriteria = [
    {
      criterion: 'Business Impact',
      description: 'Effect on business goals and revenue',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      weight: 'High',
      questions: ['How does this affect revenue?', 'What is the ROI?', 'Impact on competitive advantage?'],
      metrics: ['Revenue impact', 'Market share', 'Customer acquisition', 'Competitive position']
    },
    {
      criterion: 'User Experience',
      description: 'Effect on user satisfaction and engagement',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      weight: 'High',
      questions: ['How will users perceive this?', 'Effect on satisfaction?', 'Impact on engagement?'],
      metrics: ['User satisfaction', 'Task completion rate', 'Engagement metrics', 'Support tickets']
    },
    {
      criterion: 'Technical Complexity',
      description: 'Implementation difficulty and maintenance requirements',
      icon: Cpu,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      weight: 'Medium',
      questions: ['How complex is implementation?', 'What skills are needed?', 'Maintenance burden?'],
      metrics: ['Development time', 'Learning curve', 'Maintenance effort', 'Technical risk']
    },
    {
      criterion: 'Cost Considerations',
      description: 'Financial impact and resource requirements',
      icon: DollarSign,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      weight: 'High',
      questions: ['What are the costs?', 'ROI timeline?', 'Ongoing expenses?'],
      metrics: ['Development cost', 'Infrastructure cost', 'Operational cost', 'Total cost of ownership']
    },
    {
      criterion: 'Risk Assessment',
      description: 'Potential risks and mitigation strategies',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      borderColor: 'border-red-200 dark:border-red-800',
      weight: 'Medium',
      questions: ['What are the risks?', 'Probability of failure?', 'Impact if it fails?'],
      metrics: ['Risk probability', 'Impact severity', 'Mitigation cost', 'Recovery time']
    },
    {
      criterion: 'Scalability',
      description: 'Ability to handle growth and increased load',
      icon: Activity,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      borderColor: 'border-orange-200 dark:border-orange-800',
      weight: 'Medium',
      questions: ['How will it scale?', 'Growth capacity?', 'Performance under load?'],
      metrics: ['User capacity', 'Performance scaling', 'Cost scaling', 'Complexity growth']
    }
  ];

  const practicalExamples = [
    {
      scenario: 'E-commerce Platform Architecture',
      description: 'Choosing between monolith and microservices',
      tradeoffs: {
        monolith: {
          pros: ['Simpler development', 'Easier debugging', 'Lower initial cost', 'Faster deployment'],
          cons: ['Limited scalability', 'Technology lock-in', 'Single point of failure', 'Harder to scale team']
        },
        microservices: {
          pros: ['Independent scaling', 'Technology flexibility', 'Team autonomy', 'Better fault isolation'],
          cons: ['Higher complexity', 'Network overhead', 'Deployment complexity', 'Higher initial cost']
        }
      },
      decision: 'Start with monolith, migrate to microservices as needed',
      rationale: 'Begin simple for speed, evolve complexity as scale demands'
    },
    {
      scenario: 'Mobile App Performance',
      description: 'Balancing feature richness with performance',
      tradeoffs: {
        featureRich: {
          pros: ['More functionality', 'Better user retention', 'Competitive advantage', 'Higher user satisfaction'],
          cons: ['Larger app size', 'Slower performance', 'Higher battery usage', 'Complex maintenance']
        },
        performanceFocused: {
          pros: ['Fast performance', 'Small app size', 'Better battery life', 'Simpler maintenance'],
          cons: ['Limited features', 'Competitive disadvantage', 'Lower user retention', 'Basic functionality']
        }
      },
      decision: 'Core features optimized, advanced features as optional modules',
      rationale: 'Essential performance first, progressive enhancement for advanced features'
    },
    {
      scenario: 'Real-time Data Processing',
      description: 'Choosing between consistency and availability',
      tradeoffs: {
        strongConsistency: {
          pros: ['Data accuracy', 'Simplified logic', 'Better for transactions', 'User trust'],
          cons: ['Lower availability', 'Higher latency', 'Complex failure handling', 'Limited scalability']
        },
        eventualConsistency: {
          pros: ['High availability', 'Low latency', 'Better scalability', 'Fault tolerance'],
          cons: ['Temporary inconsistencies', 'Complex conflict resolution', 'User confusion', 'Data reconciliation']
        }
      },
      decision: 'Eventual consistency with user notifications',
      rationale: 'Prioritize availability, inform users about data synchronization'
    }
  ];

  const commonPitfalls = [
    {
      pitfall: 'Analysis Paralysis',
      description: 'Over-analyzing trade-offs without making decisions',
      consequences: ['Missed opportunities', 'Team frustration', 'Delayed delivery', 'Competitive disadvantage'],
      prevention: ['Set decision deadlines', 'Use 80/20 rule', 'Iterative approach', 'Clear decision criteria'],
      solution: 'Time-box analysis and make decisions with available information'
    },
    {
      pitfall: 'Optimizing Prematurely',
      description: 'Making trade-off decisions too early without sufficient data',
      consequences: ['Wrong optimization', 'Wasted effort', 'Technical debt', 'Missed requirements'],
      prevention: ['Gather data first', 'Prototype solutions', 'Measure actual usage', 'Delay optimization'],
      solution: 'Make it work, then make it right, then make it fast'
    },
    {
      pitfall: 'Ignoring Stakeholders',
      description: 'Making decisions without considering all stakeholder needs',
      consequences: ['Poor adoption', 'Resistance to change', 'Missed requirements', 'Political issues'],
      prevention: ['Involve stakeholders early', 'Regular communication', 'Feedback loops', 'Consensus building'],
      solution: 'Include all stakeholders in the trade-off analysis process'
    },
    {
      pitfall: 'One-Dimensional Thinking',
      description: 'Focusing on single factor without considering holistic impact',
      consequences: ['Suboptimal solutions', 'Unexpected side effects', 'Poor user experience', 'Business impact'],
      prevention: ['Multi-criteria analysis', 'System thinking', 'Cross-functional review', 'Impact assessment'],
      solution: 'Consider all dimensions: technical, business, user, and operational'
    }
  ];

  return (
    <div className="w-full pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Scale}
        category="System Design.Analysis"
        title="Trade-offs Analysis"
        description="Master the art of balancing competing factors in frontend system design to make optimal decisions"
        colorTheme="purple"
      />

      {/* Introduction Section */}
      <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-500 rounded-xl">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                Understanding Trade-offs Analysis
              </CardTitle>
              <CardDescription className="text-base mt-2">
                A systematic approach to evaluating and balancing competing factors in system design decisions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>Trade-offs Analysis</strong> is the process of evaluating competing factors and making informed decisions when perfect solutions don't exist. In frontend system design, every decision involves balancing multiple, often conflicting, requirements and constraints.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300">Balanced Decisions</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Find optimal balance between competing requirements
                </p>
              </div>
              <div className="p-4 bg-pink-50 dark:bg-pink-950/30 rounded-lg border border-pink-200 dark:border-pink-800">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <h4 className="font-semibold text-pink-700 dark:text-pink-300">Informed Choices</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Base decisions on data, analysis, and stakeholder input
                </p>
              </div>
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">Goal Alignment</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Ensure decisions align with business and user goals
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trade-off Categories Section */}
      <Card className="mb-8 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/30 dark:from-blue-950/20 dark:to-cyan-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500 rounded-xl">
              <ArrowUpDown className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                Common Trade-off Categories
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Key areas where trade-offs frequently occur in frontend system design
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            {tradeOffCategories.map((category, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${category.borderColor} ${category.bgColor}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${category.bgColor} rounded-lg`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold ${category.color} mb-2`}>
                      {category.category}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 text-lg">
                      {category.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          First Factor Focus:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {category.firstFactorFocus.map((focus, i) => (
                            <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                              {focus}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Second Factor Focus:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {category.secondFactorFocus.map((focus, i) => (
                            <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                              {focus}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Decision Factors:
                      </h5>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {category.decisionFactors.map((factor, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-950/50 rounded-full text-xs text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
                            {factor}
                          </span>
                        ))}
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          <strong>Real-world Example:</strong> {category.realWorldExample}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analysis Framework Section */}
      <Card className="mb-8 border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-500 rounded-xl">
              <Search className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                Trade-off Analysis Framework
              </CardTitle>
              <CardDescription className="text-base mt-2">
                A systematic 5-step approach to making balanced decisions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {analysisFramework.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${step.bgColor} rounded-lg border-2 border-emerald-200 dark:border-emerald-800`}>
                    <div className="flex items-center gap-2">
                      <step.icon className={`w-5 h-5 ${step.color}`} />
                      <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
                        Step {step.step}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold ${step.color} mb-2`}>
                      {step.title}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {step.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Key Activities:
                        </h5>
                        <ul className="space-y-1">
                          {step.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Expected Outputs:
                        </h5>
                        <ul className="space-y-1">
                          {step.outputs.map((output, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <FileText className="w-3 h-3 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                              {output}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Key Questions to Answer:
                      </h5>
                      <div className="space-y-1">
                        {step.keyQuestions.map((question, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Target className="w-3 h-3 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-400 italic">
                              {question}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {index < analysisFramework.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                      <ArrowRight className="w-6 h-6" />
                      <span className="text-sm font-medium">Continue to next step</span>
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Decision Matrices Section */}
      <Card className="mb-8 border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/30 dark:from-orange-950/20 dark:to-amber-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-orange-500 rounded-xl">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-orange-700 dark:text-orange-300">
                Decision Matrices
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Structured comparison tools for evaluating trade-offs
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-8">
            {decisionMatrices.map((matrix, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800">
                <h4 className="text-xl font-bold text-orange-700 dark:text-orange-300 mb-2">
                  {matrix.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {matrix.description}
                </p>
                
                {/* Criteria Headers */}
                <div className="mb-4">
                  <div className="grid grid-cols-6 gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <div>Option</div>
                    {matrix.criteria.map((criterion, i) => (
                      <div key={i} className="text-center">{criterion}</div>
                    ))}
                  </div>
                </div>
                
                {/* Options with Scores */}
                <div className="space-y-4">
                  {matrix.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                      <div className="grid grid-cols-6 gap-2 items-center mb-3">
                        <div className="font-medium text-orange-700 dark:text-orange-300">
                          {option.name}
                        </div>
                        {option.scores.map((score, scoreIndex) => (
                          <div key={scoreIndex} className="text-center">
                            <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                              score >= 4 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
                              score >= 3 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200' :
                              'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                            }`}>
                              {score}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                            Pros:
                          </h5>
                          <ul className="space-y-1">
                            {option.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">
                            Cons:
                          </h5>
                          <ul className="space-y-1">
                            {option.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <XCircle className="w-3 h-3 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-800">
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    <strong>Scoring:</strong> 1 = Poor, 2 = Below Average, 3 = Average, 4 = Good, 5 = Excellent
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Evaluation Criteria Section */}
      <Card className="mb-8 border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/30 dark:from-indigo-950/20 dark:to-purple-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-indigo-500 rounded-xl">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-indigo-700 dark:text-indigo-300">
                Evaluation Criteria
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Key dimensions to consider when making trade-off decisions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {evaluationCriteria.map((criterion, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${criterion.borderColor} ${criterion.bgColor}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${criterion.bgColor} rounded-lg`}>
                    <criterion.icon className={`w-6 h-6 ${criterion.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className={`text-lg font-bold ${criterion.color}`}>
                        {criterion.criterion}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        criterion.weight === 'High' 
                          ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' 
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'
                      }`}>
                        {criterion.weight} Priority
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {criterion.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Key Questions:
                        </h5>
                        <ul className="space-y-1">
                          {criterion.questions.map((question, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <Target className="w-3 h-3 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                              {question}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Metrics to Track:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {criterion.metrics.map((metric, i) => (
                            <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                              {metric}
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

      {/* Practical Examples Section */}
      <Card className="mb-8 border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-500 rounded-xl">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                Practical Examples
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Real-world scenarios and trade-off decisions in frontend system design
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            {practicalExamples.map((example, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800">
                <h4 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">
                  {example.scenario}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {example.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {Object.entries(example.tradeoffs).map(([optionName, optionData], index) => (
                    <div key={index} className={`p-4 ${index === 0 ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800' : 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800'} rounded-lg border`}>
                      <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
                        Option {index + 1}: {optionName}
                      </h5>
                      <div className="space-y-2">
                        <div>
                          <h6 className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">Pros:</h6>
                          <ul className="space-y-1">
                            {optionData.pros.map((pro: string, i: number) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">Cons:</h6>
                          <ul className="space-y-1">
                            {optionData.cons.map((con: string, i: number) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <XCircle className="w-3 h-3 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <h5 className="text-sm font-semibold text-green-700 dark:text-green-300">
                      Recommended Decision: {example.decision}
                    </h5>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    <strong>Rationale:</strong> {example.rationale}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls Section */}
      <Card className="mb-8 border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-orange-50/30 dark:from-red-950/20 dark:to-orange-950/10">
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
                Typical mistakes in trade-off analysis and how to prevent them
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {commonPitfalls.map((pitfall, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-red-200 dark:border-red-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
                      {pitfall.pitfall}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {pitfall.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">
                          Consequences:
                        </h5>
                        <ul className="space-y-1">
                          {pitfall.consequences.map((consequence, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <XCircle className="w-3 h-3 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              {consequence}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                          Prevention:
                        </h5>
                        <ul className="space-y-1">
                          {pitfall.prevention.map((prevention, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <Shield className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              {prevention}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                      <p className="text-sm text-green-700 dark:text-green-400">
                        <strong>Solution:</strong> {pitfall.solution}
                      </p>
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
              <Star className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl text-slate-700 dark:text-slate-300">
                Key Takeaways
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Essential principles for effective trade-off analysis
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  Analysis Principles
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Systematic Approach:</strong> Use structured frameworks for consistent decisions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Multi-Dimensional:</strong> Consider technical, business, user, and operational factors
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Quantitative Analysis:</strong> Use metrics and data to support decisions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Stakeholder Involvement:</strong> Include all relevant perspectives in analysis
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  Decision Wisdom
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>No Perfect Solutions:</strong> Every decision involves compromise
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Context Matters:</strong> Best choice depends on specific situation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Iterative Refinement:</strong> Monitor and adjust decisions over time
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Document Rationale:</strong> Record why decisions were made for future reference
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

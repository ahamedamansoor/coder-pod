'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Users, 
  UserPlus, 
  GitBranch, 
  MessageSquare, 
  Palette,
  Monitor,
  Zap,
  UserCheck,
  Clock,
  Target,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Settings,
  FileText,
  Eye,
  Layers,
  Grid3x3,
  Layout,
  Component,
  Brush,
  Smartphone,
  Tablet,
  MonitorIcon,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface TeamScalabilityPatternProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  category: string;
  complexity: string;
  frameworks: {
    react: string[];
    angular: string[];
    vue: string[];
  };
  benefits: string[];
  challenges: string[];
  useCases: string[];
}

const TeamScalabilityPatternCard: React.FC<TeamScalabilityPatternProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color,
  category,
  complexity,
  frameworks,
  benefits,
  challenges,
  useCases
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="transition-all duration-300 hover:shadow-lg border-2 hover:border-opacity-50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            category === 'Fundamental' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
            category === 'Advanced' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' :
            'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
          }`}>
            {category}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            complexity === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
            complexity === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
            'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
          }`}>
            {complexity}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Benefits</h4>
            <div className="flex flex-wrap gap-1">
              {benefits.slice(0, isExpanded ? benefits.length : 3).map((benefit, index) => (
                <span key={index} className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">
                  {benefit}
                </span>
              ))}
              {!isExpanded && benefits.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{benefits.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Common Use Cases</h4>
            <div className="flex flex-wrap gap-1">
              {useCases.slice(0, isExpanded ? useCases.length : 3).map((useCase, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                  {useCase}
                </span>
              ))}
              {!isExpanded && useCases.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                  +{useCases.length - 3} more
                </span>
              )}
            </div>
          </div>

          {isExpanded && (
            <div className="space-y-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <div>
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Framework Support</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">React:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {frameworks.react.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-red-600 dark:text-red-400">Angular:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {frameworks.angular.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-green-600 dark:text-green-400">Vue:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {frameworks.vue.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">Challenges</h4>
                <div className="flex flex-wrap gap-1">
                  {challenges.map((challenge, index) => (
                    <span key={index} className="px-2 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2 px-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function TeamScalability() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const teamStructures = [
    {
      icon: Users,
      title: 'Feature Teams',
      description: 'Cross-functional teams focused on specific user features',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      characteristics: [
        'End-to-end feature ownership',
        'Mixed skill sets (UI/UX, dev, testing)',
        'Direct user feedback loops',
        'Feature-based code organization'
      ],
      benefits: [
        'Faster feature delivery',
        'Better user experience focus',
        'Reduced handoffs between teams',
        'Clear accountability'
      ],
      diagram: (
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Feature Team Structure</div>
            
            {/* Feature Teams */}
            <div className="flex space-x-4">
              <div className="w-20 h-16 border-2 border-blue-500 rounded flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-950/20">
                <Users className="w-4 h-4 text-blue-500" />
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Auth Team</div>
              </div>
              <div className="w-20 h-16 border-2 border-blue-500 rounded flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-950/20">
                <Users className="w-4 h-4 text-blue-500" />
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Product Team</div>
              </div>
              <div className="w-20 h-16 border-2 border-blue-500 rounded flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-950/20">
                <Users className="w-4 h-4 text-blue-500" />
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Checkout Team</div>
              </div>
            </div>
            
            {/* Shared Platform */}
            <ArrowDown className="w-3 h-3 text-blue-400" />
            <div className="w-32 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-xs text-white font-medium">Shared Platform</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Layers,
      title: 'Component Teams',
      description: 'Specialized teams focused on reusable UI components',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-800',
      characteristics: [
        'Component ownership and maintenance',
        'Design system implementation',
        'Cross-team component support',
        'Performance optimization focus'
      ],
      benefits: [
        'Consistent UI across products',
        'Reduced duplicate development',
        'Specialized expertise',
        'Better component quality'
      ],
      diagram: (
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Component Team Structure</div>
            
            {/* Component Team */}
            <div className="w-32 h-8 bg-green-500 rounded flex items-center justify-center">
              <span className="text-xs text-white font-medium">Component Team</span>
            </div>
            
            {/* Arrows */}
            <div className="flex space-x-4">
              <ArrowDown className="w-3 h-3 text-green-400" />
              <ArrowDown className="w-3 h-3 text-green-400" />
              <ArrowDown className="w-3 h-3 text-green-400" />
            </div>
            
            {/* Components */}
            <div className="flex space-x-2">
              <div className="w-12 h-12 border-2 border-green-500 rounded flex flex-col items-center justify-center bg-green-50 dark:bg-green-950/20">
                <Component className="w-3 h-3 text-green-500" />
                <div className="text-xs text-green-600 dark:text-green-400 mt-1">UI Kit</div>
              </div>
              <div className="w-12 h-12 border-2 border-green-500 rounded flex flex-col items-center justify-center bg-green-50 dark:bg-green-950/20">
                <Palette className="w-3 h-3 text-green-500" />
                <div className="text-xs text-green-600 dark:text-green-400 mt-1">Design</div>
              </div>
              <div className="w-12 h-12 border-2 border-green-500 rounded flex flex-col items-center justify-center bg-green-50 dark:bg-green-950/20">
                <Settings className="w-3 h-3 text-green-500" />
                <div className="text-xs text-green-600 dark:text-green-400 mt-1">Config</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const collaborationPatterns = [
    {
      icon: MessageSquare,
      title: 'Design System Collaboration',
      description: 'Unified design language across teams and products',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      strategies: [
        'Centralized design tokens',
        'Shared component libraries',
        'Design review processes',
        'Cross-team design syncs'
      ],
      tools: [
        'Figma for collaborative design',
        'Storybook for component documentation',
        'Design system documentation sites',
        'Component versioning strategies'
      ],
      diagram: (
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Design System Flow</div>
            
            {/* Design System */}
            <div className="w-32 h-8 bg-purple-500 rounded flex items-center justify-center">
              <span className="text-xs text-white font-medium">Design System</span>
            </div>
            
            {/* Arrows */}
            <div className="flex space-x-4">
              <ArrowDown className="w-3 h-3 text-purple-400" />
              <ArrowDown className="w-3 h-3 text-purple-400" />
            </div>
            
            {/* Teams */}
            <div className="flex space-x-4">
              <div className="w-20 h-8 border-2 border-purple-500 rounded flex items-center justify-center bg-purple-50 dark:bg-purple-950/20">
                <span className="text-xs text-purple-600 dark:text-purple-400">Team A</span>
              </div>
              <div className="w-20 h-8 border-2 border-purple-500 rounded flex items-center justify-center bg-purple-50 dark:bg-purple-950/20">
                <span className="text-xs text-purple-600 dark:text-purple-400">Team B</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: GitBranch,
      title: 'Code Ownership Patterns',
      description: 'Clear ownership and contribution guidelines',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      strategies: [
        'CODEOWNERS file configuration',
        'Feature branch ownership',
        'Review assignment rules',
        'Expert consultation protocols'
      ],
      tools: [
        'GitHub CODEOWNERS',
        'Automated review assignments',
        'Slack/Discord expert channels',
        'Knowledge sharing sessions'
      ],
      diagram: (
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-orange-200 dark:border-orange-800">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Code Ownership</div>
            
            {/* Repository */}
            <div className="w-32 h-8 border-2 border-slate-300 dark:border-slate-600 rounded flex items-center justify-center">
              <span className="text-xs text-slate-600 dark:text-slate-400">Repository</span>
            </div>
            
            {/* Ownership Areas */}
            <div className="flex space-x-2">
              <div className="w-16 h-8 border-2 border-orange-500 rounded flex items-center justify-center bg-orange-50 dark:bg-orange-950/20">
                <span className="text-xs text-orange-600 dark:text-orange-400">/components</span>
              </div>
              <div className="w-16 h-8 border-2 border-orange-500 rounded flex items-center justify-center bg-orange-50 dark:bg-orange-950/20">
                <span className="text-xs text-orange-600 dark:text-orange-400">/pages</span>
              </div>
              <div className="w-16 h-8 border-2 border-orange-500 rounded flex items-center justify-center bg-orange-50 dark:bg-orange-950/20">
                <span className="text-xs text-orange-600 dark:text-orange-400">/utils</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const uiConsistency = [
    {
      icon: Palette,
      title: 'Design System Governance',
      description: 'Maintaining consistent UI across multiple teams',
      color: 'text-cyan-600 dark:text-cyan-400',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/20',
      borderColor: 'border-cyan-200 dark:border-cyan-800',
      practices: [
        'Design token management',
        'Component version control',
        'Design review boards',
        'Compliance checking tools'
      ],
      examples: [
        'Automated design token validation',
        'Component prop linting',
        'Visual regression testing',
        'Design system audits'
      ],
      diagram: (
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-cyan-200 dark:border-cyan-800">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Design Governance</div>
            
            {/* Design Tokens */}
            <div className="w-32 h-8 bg-cyan-500 rounded flex items-center justify-center">
              <span className="text-xs text-white font-medium">Design Tokens</span>
            </div>
            <ArrowDown className="w-3 h-3 text-cyan-400" />
            
            {/* Components */}
            <div className="w-32 h-8 bg-cyan-600 rounded flex items-center justify-center">
              <span className="text-xs text-white font-medium">Components</span>
            </div>
            <ArrowDown className="w-3 h-3 text-cyan-400" />
            
            {/* Products */}
            <div className="flex space-x-2">
              <div className="w-16 h-8 border-2 border-cyan-500 rounded flex items-center justify-center bg-cyan-50 dark:bg-cyan-950/20">
                <span className="text-xs text-cyan-600 dark:text-cyan-400">Web App</span>
              </div>
              <div className="w-16 h-8 border-2 border-cyan-500 rounded flex items-center justify-center bg-cyan-50 dark:bg-cyan-950/20">
                <span className="text-xs text-cyan-600 dark:text-cyan-400">Mobile</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Eye,
      title: 'User Experience Consistency',
      description: 'Ensuring consistent UX patterns across teams',
      color: 'text-pink-600 dark:text-pink-400',
      bgColor: 'bg-pink-50 dark:bg-pink-950/20',
      borderColor: 'border-pink-200 dark:border-pink-800',
      practices: [
        'UX pattern libraries',
        'Interaction guidelines',
        'Accessibility standards',
        'User testing protocols'
      ],
      examples: [
        'Consistent navigation patterns',
        'Standardized form interactions',
        'Unified error handling',
        'Common loading states'
      ],
      diagram: (
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-pink-200 dark:border-pink-800">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">UX Consistency</div>
            
            {/* UX Guidelines */}
            <div className="w-32 h-8 bg-pink-500 rounded flex items-center justify-center">
              <span className="text-xs text-white font-medium">UX Guidelines</span>
            </div>
            
            {/* Consistent Elements */}
            <div className="flex space-x-2 mt-2">
              <div className="w-12 h-8 border-2 border-pink-500 rounded flex items-center justify-center bg-pink-50 dark:bg-pink-950/20">
                <span className="text-xs text-pink-600 dark:text-pink-400">Forms</span>
              </div>
              <div className="w-12 h-8 border-2 border-pink-500 rounded flex items-center justify-center bg-pink-50 dark:bg-pink-950/20">
                <span className="text-xs text-pink-600 dark:text-pink-400">Nav</span>
              </div>
              <div className="w-12 h-8 border-2 border-pink-500 rounded flex items-center justify-center bg-pink-50 dark:bg-pink-950/20">
                <span className="text-xs text-pink-600 dark:text-pink-400">Modals</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const scalingChallenges = [
    {
      icon: AlertTriangle,
      title: 'Communication Overhead',
      challenges: [
        'Increased meeting frequency',
        'Cross-team coordination complexity',
        'Information silos formation',
        'Decision-making bottlenecks'
      ],
      solutions: [
        'Async communication tools',
        'Clear documentation practices',
        'Automated status updates',
        'Decision-making frameworks'
      ]
    },
    {
      icon: Clock,
      title: 'Onboarding Complexity',
      challenges: [
        'Longer ramp-up times',
        'Complex codebase navigation',
        'Multiple team processes',
        'Toolchain complexity'
      ],
      solutions: [
        'Comprehensive onboarding docs',
        'Mentorship programs',
        'Interactive tutorials',
        'Simplified development setup'
      ]
    },
    {
      icon: Settings,
      title: 'Technical Coordination',
      challenges: [
        'Dependency management',
        'API version conflicts',
        'Shared resource contention',
        'Environment management'
      ],
      solutions: [
        'Dependency governance',
        'API versioning strategies',
        'Resource scheduling',
        'Environment standardization'
      ]
    }
  ];

  const scalingMetrics = [
    {
      icon: Users,
      title: 'Team Productivity',
      metrics: [
        { name: 'Feature Velocity', description: 'Features delivered per sprint' },
        { name: 'Code Review Time', description: 'Average time for PR approval' },
        { name: 'Bug Resolution Time', description: 'Time to fix critical bugs' },
        { name: 'Deployment Frequency', description: 'Deployments per week' }
      ]
    },
    {
      icon: Target,
      title: 'Quality Metrics',
      metrics: [
        { name: 'UI Consistency Score', description: 'Adherence to design system' },
        { name: 'Code Quality Index', description: 'Maintainability and test coverage' },
        { name: 'User Satisfaction', description: 'CSAT and NPS scores' },
        { name: 'Accessibility Compliance', description: 'WCAG adherence percentage' }
      ]
    },
    {
      icon: Zap,
      title: 'Collaboration Metrics',
      metrics: [
        { name: 'Cross-team Dependencies', description: 'Number of inter-team dependencies' },
        { name: 'Knowledge Sharing Index', description: 'Documentation and training activities' },
        { name: 'Onboarding Success Rate', description: 'New team member productivity time' },
        { name: 'Communication Efficiency', description: 'Meeting time vs async work ratio' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Team Scalability"
        description="Scaling frontend teams: collaboration patterns, UI consistency, and organizational structures for growing development teams"
        icon={Users}
        category="System Design.Scalability"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Frontend Team Scalability
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Team scalability in frontend development focuses on organizing growing teams while maintaining 
                  UI consistency, effective collaboration, and high-quality user experiences. Learn how to structure 
                  frontend teams for scale without compromising design integrity or development velocity.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-800">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Team Structure</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Organize teams for effective collaboration
                </p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-800">
                <Palette className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">UI Consistency</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Maintain consistent design across teams
                </p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-800">
                <MessageSquare className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Collaboration</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Enable effective cross-team communication
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Structures */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-500 rounded-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                  Team Organization Patterns
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Different ways to structure frontend teams for optimal collaboration and UI consistency.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {teamStructures.map((structure, index) => (
                <Card key={index} className={`${structure.bgColor} ${structure.borderColor} border-2`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <structure.icon className={`w-6 h-6 ${structure.color}`} />
                      <CardTitle className="text-xl text-slate-800 dark:text-slate-200">
                        {structure.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{structure.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">Characteristics</h5>
                        <ul className="space-y-1">
                          {structure.characteristics.map((char, i) => (
                            <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Benefits</h5>
                        <ul className="space-y-1">
                          {structure.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  {structure.diagram}
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Collaboration Patterns */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500 rounded-xl">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                  Collaboration Patterns
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Effective collaboration strategies for frontend teams working on shared UI components and design systems.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {collaborationPatterns.map((pattern, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <pattern.icon className={`w-6 h-6 ${pattern.color}`} />
                      <CardTitle className="text-lg text-slate-900 dark:text-white">
                        {pattern.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{pattern.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Strategies</h5>
                        <ul className="space-y-1">
                          {pattern.strategies.map((strategy, i) => (
                            <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {strategy}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-700 dark:text-orange-300 mb-2">Tools</h5>
                        <ul className="space-y-1">
                          {pattern.tools.map((tool, i) => (
                            <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  {pattern.diagram}
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* UI Consistency */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-cyan-950/20 dark:to-blue-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-cyan-500 rounded-xl">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-cyan-700 dark:text-cyan-300">
                  UI Consistency at Scale
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Maintaining consistent user interfaces and experiences across multiple frontend teams.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {uiConsistency.map((consistency, index) => (
                <Card 
                  key={index} 
                  className={`${consistency.bgColor} ${consistency.borderColor} border-2 cursor-pointer transition-all duration-300`}
                  onClick={() => toggleCard(index)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <consistency.icon className={`w-6 h-6 ${consistency.color}`} />
                      <CardTitle className="text-xl text-slate-800 dark:text-slate-200">
                        {consistency.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{consistency.description}</CardDescription>
                  </CardHeader>
                  {expandedCard === index && (
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-cyan-700 dark:text-cyan-300 mb-2">Practices</h5>
                          <ul className="space-y-1">
                            {consistency.practices.map((practice, i) => (
                              <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                {practice}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-pink-700 dark:text-pink-300 mb-2">Examples</h5>
                          <ul className="space-y-1">
                            {consistency.examples.map((example, i) => (
                              <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  )}
                  {consistency.diagram}
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Scaling Challenges */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-red-50/30 dark:from-orange-950/20 dark:to-red-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-500 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-orange-700 dark:text-orange-300">
                  Team Scaling Challenges
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Common challenges when scaling frontend teams and practical solutions to overcome them.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-3 gap-6">
              {scalingChallenges.map((challenge, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <challenge.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      <CardTitle className="text-lg text-slate-900 dark:text-white">
                        {challenge.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-red-700 dark:text-red-300 mb-2">Challenges</h5>
                        <ul className="space-y-1">
                          {challenge.challenges.map((item, i) => (
                            <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">Solutions</h5>
                        <ul className="space-y-1">
                          {challenge.solutions.map((solution, i) => (
                            <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Scalability Metrics */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-emerald-500 rounded-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                  Team Scalability Metrics
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Key metrics to measure team scalability, collaboration effectiveness, and UI consistency.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-3 gap-6">
              {scalingMetrics.map((metricGroup, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <metricGroup.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      <CardTitle className="text-lg text-slate-900 dark:text-white">
                        {metricGroup.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {metricGroup.metrics.map((metric, i) => (
                        <div key={i} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                          <h5 className="font-medium text-slate-800 dark:text-slate-200 text-sm">
                            {metric.name}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            {metric.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

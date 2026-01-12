'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  GitBranch, 
  Terminal, 
  Plus, 
  Save, 
  Eye, 
  GitCommit, 
  GitMerge, 
  GitPullRequest, 
  Clock, 
  History, 
  CheckCircle, 
  AlertTriangle, 
  Code, 
  FolderOpen, 
  GitFork, 
  GitCompare,
  ArrowRight,
  Copy,
  Trash2,
  GitBranchPlus,
  Layers,
  Zap,
  Users,
  Shield,
  Rocket,
  Target
} from 'lucide-react';

interface GitTopicProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function GitBranchStrategies({ onOpenWebPlayground }: GitTopicProps) {
  const [activeStrategy, setActiveStrategy] = useState<string>('git-flow');

  const strategies = [
    {
      id: 'git-flow',
      name: 'Git Flow',
      description: 'Robust branching model for projects with scheduled releases',
      icon: GitFork,
      color: 'blue',
      complexity: 'Complex',
      teamSize: 'Medium to Large',
      releaseCycle: 'Scheduled',
      purpose: 'Comprehensive branching strategy for release-based development',
      branches: [
        { name: 'main', type: 'Production', description: 'Always deployable code' },
        { name: 'develop', type: 'Integration', description: 'Next release integration' },
        { name: 'feature/*', type: 'Development', description: 'New features' },
        { name: 'release/*', type: 'Preparation', description: 'Release preparation' },
        { name: 'hotfix/*', type: 'Fixes', description: 'Critical production fixes' }
      ],
      workflow: [
        'Create feature branch from develop',
        'Develop and test feature',
        'Merge feature back to develop',
        'Create release branch from develop',
        'Test and finalize release',
        'Merge release to main and develop',
        'Tag release and deploy'
      ],
      pros: [
        'Clear separation of concerns',
        'Parallel development streams',
        'Structured release process',
        'Hotfix capability for production'
      ],
      cons: [
        'Complex for beginners',
        'Many branches to manage',
        'Overhead for small projects',
        'Requires strict discipline'
      ]
    },
    {
      id: 'github-flow',
      name: 'GitHub Flow',
      description: 'Simple workflow for continuous deployment',
      icon: GitPullRequest,
      color: 'green',
      complexity: 'Simple',
      teamSize: 'Small to Medium',
      releaseCycle: 'Continuous',
      purpose: 'Lightweight workflow focused on continuous deployment',
      branches: [
        { name: 'main', type: 'Production', description: 'Always deployable' },
        { name: 'feature/*', type: 'Development', description: 'Feature branches' }
      ],
      workflow: [
        'Create feature branch from main',
        'Make changes and commit',
        'Push to remote repository',
        'Open pull request',
        'Review and discuss changes',
        'Merge to main',
        'Deploy immediately'
      ],
      pros: [
        'Simple to understand',
        'Fast deployment cycle',
        'Fewer branches to manage',
        'Good for SaaS products'
      ],
      cons: [
        'Requires robust testing',
        'Less structured for releases',
        'No dedicated release branches',
        'Main branch must always be stable'
      ]
    },
    {
      id: 'trunk-based',
      name: 'Trunk-Based Development',
      description: 'Develop directly on main with short-lived branches',
      icon: Zap,
      color: 'orange',
      complexity: 'Very Simple',
      teamSize: 'Small to Large',
      releaseCycle: 'Continuous',
      purpose: 'Maximize integration and reduce merge complexity',
      branches: [
        { name: 'main', type: 'Production', description: 'Primary development line' },
        { name: 'feature/*', type: 'Development', description: 'Short-lived features' }
      ],
      workflow: [
        'Create short-lived feature branch',
        'Develop in small increments',
        'Merge to main frequently',
        'Automated testing and deployment',
        'Continuous integration'
      ],
      pros: [
        'Minimal merge conflicts',
        'Fast feedback loop',
        'Simple to implement',
        'Excellent for CI/CD'
      ],
      cons: [
        'Requires strong discipline',
        'Main branch can be unstable',
        'No release isolation',
        'Difficult for large features'
      ]
    },
    {
      id: 'gitlab-flow',
      name: 'GitLab Flow',
      description: 'Combination of Git Flow and GitHub Flow',
      icon: Layers,
      color: 'purple',
      complexity: 'Medium',
      teamSize: 'Medium',
      releaseCycle: 'Environment-based',
      purpose: 'Environment-based branching with production safety',
      branches: [
        { name: 'main', type: 'Production', description: 'Production code' },
        { name: 'environment/*', type: 'Environment', description: 'Environment branches' },
        { name: 'feature/*', type: 'Development', description: 'Feature branches' }
      ],
      workflow: [
        'Create feature branch from main',
        'Develop and test feature',
        'Merge to main',
        'Create environment branch',
        'Deploy to specific environment',
        'Merge environment to main'
      ],
      pros: [
        'Environment isolation',
        'Flexible deployment',
        'Production safety',
        'Good for multiple environments'
      ],
      cons: [
        'More complex than GitHub Flow',
        'Environment branch management',
        'Requires good automation',
        'Can be confusing initially'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
      blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-200 dark:border-blue-700', text: 'text-blue-900 dark:text-blue-100', badge: 'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200' },
      green: { bg: 'bg-green-50 dark:bg-green-950/30', border: 'border-green-200 dark:border-green-700', text: 'text-green-900 dark:text-green-100', badge: 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200' },
      purple: { bg: 'bg-purple-50 dark:bg-purple-950/30', border: 'border-purple-200 dark:border-purple-700', text: 'text-purple-900 dark:text-purple-100', badge: 'bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200' },
      orange: { bg: 'bg-orange-50 dark:bg-orange-950/30', border: 'border-orange-200 dark:border-orange-700', text: 'text-orange-900 dark:text-orange-100', badge: 'bg-orange-200 text-orange-800 dark:bg-orange-800 dark:text-orange-200' }
    };
    return colors[color] || colors.blue;
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Very Simple': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Simple': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Complex': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Git Branch Strategies"
        description="Learn different branching strategies and choose the right workflow for your team and project."
        icon={GitFork}
      />

      {/* Strategy Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitFork className="w-5 h-5" />
            Choose Your Strategy
          </CardTitle>
          <CardDescription>
            Select a branching strategy that fits your team size, release cycle, and project complexity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strategies.map((strategy) => {
              const colors = getColorClasses(strategy.color);
              const Icon = strategy.icon;
              return (
                <div
                  key={strategy.id}
                  className={`p-4 ${colors.bg} ${colors.border} border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    activeStrategy === strategy.id ? 'ring-2 ring-offset-2 ring-offset-background ring-blue-500' : ''
                  }`}
                  onClick={() => setActiveStrategy(activeStrategy === strategy.id ? '' : strategy.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon className={`w-6 h-6 ${colors.text.replace('text-', 'text-').replace('900', '600').replace('100', '400')}`} />
                    <div className="flex flex-col gap-1">
                      <Badge variant="secondary" className={colors.badge}>
                        {strategy.name}
                      </Badge>
                      <Badge className={getComplexityColor(strategy.complexity)}>
                        {strategy.complexity}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className={`font-semibold ${colors.text} mb-2`}>{strategy.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{strategy.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">{strategy.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">{strategy.releaseCycle}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Strategy View */}
      {activeStrategy && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              {strategies.find(s => s.id === activeStrategy)?.name} Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            {(() => {
              const strategy = strategies.find(s => s.id === activeStrategy);
              if (!strategy) return null;
              const colors = getColorClasses(strategy.color);
              const Icon = strategy.icon;
              
              return (
                <div className="space-y-6">
                  {/* Overview */}
                  <div className={`p-4 ${colors.bg} ${colors.border} border rounded-lg`}>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className={`w-6 h-6 ${colors.text.replace('text-', 'text-').replace('900', '600').replace('100', '400')}`} />
                      <div>
                        <h3 className={`font-semibold ${colors.text}`}>{strategy.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{strategy.purpose}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Team Size</p>
                          <p className="text-sm font-medium">{strategy.teamSize}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Release Cycle</p>
                          <p className="text-sm font-medium">{strategy.releaseCycle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Complexity</p>
                          <p className="text-sm font-medium">{strategy.complexity}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Branch Diagram */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Branch Diagram</h4>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      {/* Git Flow Diagram */}
                      {strategy.id === 'git-flow' && (
                        <div className="space-y-4">
                          <div className="relative h-[400px] w-full">
                            <svg className="absolute inset-0 w-full h-full">
                              {/* Drop shadow filter */}
                              <defs>
                                <filter id="lineShadow" x="-50%" y="-50%" width="200%" height="200%">
                                  <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                                </filter>
                                <filter id="arrowShadow" x="-50%" y="-50%" width="200%" height="200%">
                                  <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.4"/>
                                </filter>
                              </defs>
                              
                              {/* Main branch - straight horizontal line */}
                              <line x1="30" y1="100" x2="85%" y2="100" stroke="#1E40AF" strokeWidth="4" />
                              
                              {/* Develop branch - straight horizontal line */}
                              <line x1="30" y1="200" x2="85%" y2="200" stroke="#059669" strokeWidth="4" />
                              
                              {/* Feature branches */}
                              <line x1="200" y1="200" x2="200" y2="280" stroke="#D97706" strokeWidth="3" strokeDasharray="5,3" />
                              <line x1="200" y1="280" x2="280" y2="280" stroke="#D97706" strokeWidth="3" />
                              <line x1="280" y1="280" x2="280" y2="200" stroke="#D97706" strokeWidth="3" strokeDasharray="5,3" />
                              
                              <line x1="400" y1="200" x2="400" y2="280" stroke="#D97706" strokeWidth="3" strokeDasharray="5,3" />
                              <line x1="400" y1="280" x2="480" y2="280" stroke="#D97706" strokeWidth="3" />
                              <line x1="480" y1="280" x2="480" y2="200" stroke="#D97706" strokeWidth="3" strokeDasharray="5,3" />
                              
                              {/* Release branch */}
                              <line x1="600" y1="200" x2="600" y2="150" stroke="#7C3AED" strokeWidth="4" strokeDasharray="5,3" />
                              <line x1="600" y1="150" x2="700" y2="150" stroke="#7C3AED" strokeWidth="4" />
                              <line x1="700" y1="150" x2="700" y2="100" stroke="#7C3AED" strokeWidth="4" strokeDasharray="5,3" />
                              <line x1="700" y1="150" x2="700" y2="200" stroke="#7C3AED" strokeWidth="4" strokeDasharray="5,3" />
                              
                              {/* Hotfix branch */}
                              <line x1="800" y1="100" x2="800" y2="50" stroke="#DC2626" strokeWidth="4" strokeDasharray="5,3" />
                              <line x1="800" y1="50" x2="850" y2="50" stroke="#DC2626" strokeWidth="4" />
                              <line x1="850" y1="50" x2="850" y2="100" stroke="#DC2626" strokeWidth="4" strokeDasharray="5,3" />
                              
                              {/* Branch labels */}
                              <text x="40" y="95" fill="#1E40AF" fontSize="14" fontWeight="bold">main</text>
                              <text x="40" y="195" fill="#059669" fontSize="14" fontWeight="bold">develop</text>
                              <text x="180" y="300" fill="#D97706" fontSize="12">feature/*</text>
                              <text x="580" y="140" fill="#7C3AED" fontSize="12">release/*</text>
                              <text x="780" y="40" fill="#DC2626" fontSize="12">hotfix/*</text>
                            </svg>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-1 bg-blue-600 rounded"></div>
                              <span>main</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-1 bg-green-600 rounded"></div>
                              <span>develop</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-1 bg-amber-600 rounded"></div>
                              <span>feature</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-1 bg-purple-600 rounded"></div>
                              <span>release</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-1 bg-red-600 rounded"></div>
                              <span>hotfix</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* GitHub Flow Diagram */}
                      {strategy.id === 'github-flow' && (
                        <div className="space-y-4">
                          <div className="relative h-[300px] w-full">
                            <svg className="absolute inset-0 w-full h-full">
                              <defs>
                                <filter id="lineShadow" x="-50%" y="-50%" width="200%" height="200%">
                                  <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                                </filter>
                                <filter id="arrowShadow" x="-50%" y="-50%" width="200%" height="200%">
                                  <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.4"/>
                                </filter>
                              </defs>
                              
                              {/* Main branch - straight horizontal line */}
                              <line x1="50" y1="150" x2="90%" y2="150" stroke="#1E40AF" strokeWidth="4" />
                              
                              {/* Feature branches */}
                              <line x1="200" y1="150" x2="200" y2="80" stroke="#059669" strokeWidth="3" strokeDasharray="5,3" />
                              <line x1="200" y1="80" x2="300" y2="80" stroke="#059669" strokeWidth="3" />
                              <line x1="300" y1="80" x2="300" y2="150" stroke="#059669" strokeWidth="3" strokeDasharray="5,3" />
                              
                              <line x1="400" y1="150" x2="400" y2="220" stroke="#059669" strokeWidth="3" strokeDasharray="5,3" />
                              <line x1="400" y1="220" x2="500" y2="220" stroke="#059669" strokeWidth="3" />
                              <line x1="500" y1="220" x2="500" y2="150" stroke="#059669" strokeWidth="3" strokeDasharray="5,3" />
                              
                              <line x1="600" y1="150" x2="600" y2="80" stroke="#059669" strokeWidth="3" strokeDasharray="5,3" />
                              <line x1="600" y1="80" x2="700" y2="80" stroke="#059669" strokeWidth="3" />
                              <line x1="700" y1="80" x2="700" y2="150" stroke="#059669" strokeWidth="3" strokeDasharray="5,3" />
                              
                              {/* Branch labels */}
                              <text x="40" y="145" fill="#1E40AF" fontSize="14" fontWeight="bold">main</text>
                              <text x="180" y="70" fill="#059669" fontSize="12">feature/*</text>
                              <text x="380" y="240" fill="#059669" fontSize="12">feature/*</text>
                              <text x="580" y="70" fill="#059669" fontSize="12">feature/*</text>
                            </svg>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-1 bg-blue-600 rounded"></div>
                              <span>main (always deployable)</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-1 bg-green-600 rounded"></div>
                              <span>feature branches</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Trunk-Based Development Diagram */}
                      {strategy.id === 'trunk-based' && (
                        <div className="space-y-4">
                          <div className="relative h-[250px] w-full">
                            <svg className="absolute inset-0 w-full h-full">
                              <defs>
                                <filter id="lineShadow" x="-50%" y="-50%" width="200%" height="200%">
                                  <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                                </filter>
                                <filter id="arrowShadow" x="-50%" y="-50%" width="200%" height="200%">
                                  <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.4"/>
                                </filter>
                              </defs>
                              
                              {/* Main branch (trunk) - straight horizontal line */}
                              <line x1="50" y1="125" x2="90%" y2="125" stroke="#1E40AF" strokeWidth="4" />
                              
                              {/* Very short feature branches */}
                              <line x1="200" y1="125" x2="200" y2="90" stroke="#059669" strokeWidth="2" strokeDasharray="3,2" />
                              <line x1="200" y1="90" x2="220" y2="90" stroke="#059669" strokeWidth="2" />
                              <line x1="220" y1="90" x2="220" y2="125" stroke="#059669" strokeWidth="2" strokeDasharray="3,2" />
                              
                              <line x1="350" y1="125" x2="350" y2="160" stroke="#059669" strokeWidth="2" strokeDasharray="3,2" />
                              <line x1="350" y1="160" x2="370" y2="160" stroke="#059669" strokeWidth="2" />
                              <line x1="370" y1="160" x2="370" y2="125" stroke="#059669" strokeWidth="2" strokeDasharray="3,2" />
                              
                              <line x1="500" y1="125" x2="500" y2="90" stroke="#059669" strokeWidth="2" strokeDasharray="3,2" />
                              <line x1="500" y1="90" x2="520" y2="90" stroke="#059669" strokeWidth="2" />
                              <line x1="520" y1="90" x2="520" y2="125" stroke="#059669" strokeWidth="2" strokeDasharray="3,2" />
                              
                              {/* Branch labels */}
                              <text x="40" y="120" fill="#1E40AF" fontSize="14" fontWeight="bold">main/trunk</text>
                              <text x="180" y="80" fill="#059669" fontSize="11">short-lived</text>
                              <text x="330" y="180" fill="#059669" fontSize="11">features</text>
                              <text x="480" y="80" fill="#059669" fontSize="11">merge quickly</text>
                            </svg>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-2 bg-blue-600 rounded"></div>
                              <span>main/trunk (primary)</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-1 bg-green-600 rounded"></div>
                              <span>short-lived features</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* GitLab Flow Diagram */}
                      {strategy.id === 'gitlab-flow' && (
                        <div className="space-y-4">
                          <div className="relative h-[350px] w-full">
                            <svg className="absolute inset-0 w-full h-full">
                              <defs>
                                <filter id="lineShadow" x="-50%" y="-50%" width="200%" height="200%">
                                  <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                                </filter>
                                <filter id="arrowShadow" x="-50%" y="-50%" width="200%" height="200%">
                                  <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.4"/>
                                </filter>
                              </defs>
                              
                              {/* Main branch - straight horizontal line */}
                              <line x1="50" y1="100" x2="90%" y2="100" stroke="#1E40AF" strokeWidth="4" />
                              
                              {/* Environment branches */}
                              <line x1="200" y1="100" x2="200" y2="150" stroke="#7C3AED" strokeWidth="4" strokeDasharray="5,3" />
                              <line x1="200" y1="150" x2="350" y2="150" stroke="#7C3AED" strokeWidth="4" />
                              <line x1="350" y1="150" x2="350" y2="100" stroke="#7C3AED" strokeWidth="4" strokeDasharray="5,3" />
                              
                              <line x1="500" y1="100" x2="500" y2="200" stroke="#7C3AED" strokeWidth="4" strokeDasharray="5,3" />
                              <line x1="500" y1="200" x2="650" y2="200" stroke="#7C3AED" strokeWidth="4" />
                              <line x1="650" y1="200" x2="650" y2="100" stroke="#7C3AED" strokeWidth="4" strokeDasharray="5,3" />
                              
                              {/* Feature branches */}
                              <line x1="250" y1="150" x2="250" y2="250" stroke="#059669" strokeWidth="3" strokeDasharray="5,3" />
                              <line x1="250" y1="250" x2="300" y2="250" stroke="#059669" strokeWidth="3" />
                              <line x1="300" y1="250" x2="300" y2="150" stroke="#059669" strokeWidth="3" strokeDasharray="5,3" />
                              
                              <line x1="550" y1="200" x2="550" y2="250" stroke="#059669" strokeWidth="3" strokeDasharray="5,3" />
                              <line x1="550" y1="250" x2="600" y2="250" stroke="#059669" strokeWidth="3" />
                              <line x1="600" y1="250" x2="600" y2="200" stroke="#059669" strokeWidth="3" strokeDasharray="5,3" />
                              
                              {/* Branch labels */}
                              <text x="40" y="95" fill="#1E40AF" fontSize="14" fontWeight="bold">main</text>
                              <text x="180" y="145" fill="#7C3AED" fontSize="12">env/*</text>
                              <text x="480" y="195" fill="#7C3AED" fontSize="12">env/*</text>
                              <text x="230" y="270" fill="#059669" fontSize="12">feature/*</text>
                              <text x="530" y="270" fill="#059669" fontSize="12">feature/*</text>
                            </svg>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-1 bg-blue-600 rounded"></div>
                              <span>main</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-1 bg-purple-600 rounded"></div>
                              <span>environment</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-1 bg-green-600 rounded"></div>
                              <span>feature</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Branch Types */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Branch Types</h4>
                    <div className="space-y-2">
                      {strategy.branches.map((branch, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <GitBranch className="w-4 h-4 text-gray-500" />
                            <div>
                              <code className="text-sm font-medium">{branch.name}</code>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{branch.description}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {branch.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Workflow */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Workflow Steps</h4>
                    <div className="space-y-2">
                      {strategy.workflow.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-medium text-gray-700 dark:text-gray-300">
                            {idx + 1}
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{step}</span>
                          {idx < strategy.workflow.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Advantages
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {strategy.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Disadvantages
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {strategy.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })()}
          </CardContent>
        </Card>
      )}

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitCompare className="w-5 h-5" />
            Strategy Comparison
          </CardTitle>
          <CardDescription>
            Compare different branching strategies at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Strategy</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Complexity</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Team Size</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Release Cycle</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Best For</th>
                </tr>
              </thead>
              <tbody>
                {strategies.map((strategy, idx) => (
                  <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <strategy.icon className="w-4 h-4" />
                        <span className="font-medium">{strategy.name}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge className={getComplexityColor(strategy.complexity)}>
                        {strategy.complexity}
                      </Badge>
                    </td>
                    <td className="p-3 text-sm">{strategy.teamSize}</td>
                    <td className="p-3 text-sm">{strategy.releaseCycle}</td>
                    <td className="p-3 text-sm">
                      {strategy.id === 'git-flow' && 'Enterprise software'}
                      {strategy.id === 'github-flow' && 'SaaS products'}
                      {strategy.id === 'trunk-based' && 'Fast-paced teams'}
                      {strategy.id === 'gitlab-flow' && 'Multi-environment apps'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Choosing the Right Strategy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Choosing the Right Strategy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Consider Your Team</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Small teams (2-5):</strong> GitHub Flow or Trunk-Based
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Medium teams (6-20):</strong> GitLab Flow or GitHub Flow
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Large teams (20+):</strong> Git Flow or GitLab Flow
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Consider Your Project</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Rocket className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Continuous deployment:</strong> GitHub Flow or Trunk-Based
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Scheduled releases:</strong> Git Flow
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Multiple environments:</strong> GitLab Flow
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Pro Tip:</strong> Start simple and evolve your strategy as your team grows. You can begin with GitHub Flow and adopt more complex strategies like Git Flow when needed.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

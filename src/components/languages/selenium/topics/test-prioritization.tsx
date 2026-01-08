'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Target,
  Flag,
  Clock,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Users,
  DollarSign,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Minus,
  Star,
  Award,
  Trophy,
  Medal,
  Gem,
  Crown,
  Filter,
  Search,
  SortAsc,
  Calendar,
  Activity,
  Bug,
  Lightbulb,
  Rocket,
  Target as TargetIcon,
  Crosshair,
  Compass,
  MapPin,
  Navigation,
  GitBranch,
  Layers,
  Grid3X3,
  List,
  Eye,
  Edit,
  Trash2,
  Plus,
  RefreshCw,
  Play,
  Pause,
  SkipForward,
  FastForward
} from 'lucide-react';

export default function TestPrioritizationComponent() {
  const [activeView, setActiveView] = useState<'matrix' | 'list' | 'impact'>('matrix');
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'impact' | 'effort' | 'risk' | 'frequency'>('impact');

  const priorityLevels = [
    {
      id: 'critical',
      name: 'Critical',
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-100 dark:bg-red-900/20',
      textColor: 'text-red-700 dark:text-red-300',
      icon: AlertTriangle,
      description: 'Must run immediately, blocks release',
      criteria: ['Security vulnerabilities', 'Core functionality failure', 'Data corruption risk'],
      examples: ['Payment processing failures', 'Authentication bypass', 'Database connection issues']
    },
    {
      id: 'high',
      name: 'High',
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
      textColor: 'text-orange-700 dark:text-orange-300',
      icon: TrendingUp,
      description: 'High business impact, run early in cycle',
      criteria: ['Major feature issues', 'Performance degradation', 'User experience problems'],
      examples: ['Checkout process issues', 'Search functionality failure', 'Mobile responsiveness problems']
    },
    {
      id: 'medium',
      name: 'Medium',
      color: 'from-yellow-500 to-yellow-700',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
      textColor: 'text-yellow-700 dark:text-yellow-300',
      icon: Clock,
      description: 'Important but not urgent, standard priority',
      criteria: ['Feature enhancements', 'Minor UX issues', 'Non-critical bugs'],
      examples: ['UI alignment issues', 'Content formatting problems', 'Minor performance issues']
    },
    {
      id: 'low',
      name: 'Low',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      textColor: 'text-green-700 dark:text-green-300',
      icon: CheckCircle,
      description: 'Nice to have, run when time permits',
      criteria: ['Cosmetic issues', 'Edge cases', 'Documentation updates'],
      examples: ['Tooltip text improvements', 'Minor color adjustments', 'Spelling corrections']
    }
  ];

  const testCases = [
    {
      id: 'payment-failure',
      name: 'Payment Processing Failure',
      category: 'Financial',
      priority: 'critical',
      impact: 9,
      effort: 3,
      risk: 'high',
      frequency: 'always',
      lastRun: '2 hours ago',
      status: 'failing',
      description: 'Tests payment gateway integration and transaction processing'
    },
    {
      id: 'login-security',
      name: 'Login Security Bypass',
      category: 'Security',
      priority: 'critical',
      impact: 10,
      effort: 2,
      risk: 'critical',
      frequency: 'always',
      lastRun: '1 hour ago',
      status: 'failing',
      description: 'Validates authentication mechanisms and prevents unauthorized access'
    },
    {
      id: 'search-functionality',
      name: 'Search Functionality',
      category: 'Core Features',
      priority: 'high',
      impact: 8,
      effort: 4,
      risk: 'medium',
      frequency: 'daily',
      lastRun: '4 hours ago',
      status: 'passing',
      description: 'Tests search algorithms and result accuracy'
    },
    {
      id: 'mobile-responsive',
      name: 'Mobile Responsive Design',
      category: 'UI/UX',
      priority: 'medium',
      impact: 6,
      effort: 5,
      risk: 'low',
      frequency: 'weekly',
      lastRun: '1 day ago',
      status: 'passing',
      description: 'Validates mobile layout and touch interactions'
    },
    {
      id: 'tooltip-text',
      name: 'Tooltip Text Updates',
      category: 'Documentation',
      priority: 'low',
      impact: 2,
      effort: 1,
      risk: 'low',
      frequency: 'monthly',
      lastRun: '1 week ago',
      status: 'passing',
      description: 'Verifies tooltip accuracy and helpfulness'
    },
    {
      id: 'checkout-flow',
      name: 'Checkout Flow',
      category: 'E-commerce',
      priority: 'high',
      impact: 9,
      effort: 6,
      risk: 'high',
      frequency: 'daily',
      lastRun: '3 hours ago',
      status: 'passing',
      description: 'End-to-end checkout process validation'
    },
    {
      id: 'user-profile',
      name: 'User Profile Management',
      category: 'User Management',
      priority: 'medium',
      impact: 5,
      effort: 3,
      risk: 'low',
      frequency: 'weekly',
      lastRun: '2 days ago',
      status: 'passing',
      description: 'Profile creation, editing, and deletion tests'
    },
    {
      id: 'email-notifications',
      name: 'Email Notifications',
      category: 'Communication',
      priority: 'medium',
      impact: 4,
      effort: 2,
      risk: 'low',
      frequency: 'weekly',
      lastRun: '5 days ago',
      status: 'passing',
      description: 'Email delivery and content validation'
    }
  ];

  const getPriorityIcon = (priority: string) => {
    const icons: Record<string, React.ComponentType<any>> = {
      critical: AlertTriangle,
      high: TrendingUp,
      medium: Clock,
      low: CheckCircle
    };
    return icons[priority] || Target;
  };

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      critical: 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20',
      high: 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/20',
      medium: 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20',
      low: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20'
    };
    return colors[priority] || colors.medium;
  };

  const getRiskColor = (risk: string) => {
    const colors: Record<string, string> = {
      critical: 'bg-red-500',
      high: 'bg-orange-500',
      medium: 'bg-yellow-500',
      low: 'bg-green-500'
    };
    return colors[risk] || colors.medium;
  };

  const sortedTestCases = [...testCases].sort((a, b) => {
    switch (sortBy) {
      case 'impact':
        return b.impact - a.impact;
      case 'effort':
        return a.effort - b.effort;
      case 'risk':
        const riskOrder = { critical: 4, high: 3, medium: 2, low: 1 };
        return riskOrder[b.risk as keyof typeof riskOrder] - riskOrder[a.risk as keyof typeof riskOrder];
      case 'frequency':
        const freqOrder = { always: 4, daily: 3, weekly: 2, monthly: 1 };
        return freqOrder[b.frequency as keyof typeof freqOrder] - freqOrder[a.frequency as keyof typeof freqOrder];
      default:
        return 0;
    }
  });

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background/20">
      <PageHeader
        title="Test Prioritization"
        description="Master strategic test prioritization techniques to maximize testing efficiency, focus on high-impact areas, and optimize resource allocation for comprehensive quality assurance"
        icon={Target}
        colorTheme="orange"
        badges={[
          { label: 'Test Prioritization', variant: 'secondary' },
          { label: 'Risk Assessment', variant: 'secondary' },
          { label: 'Impact Analysis', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Overview Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-6 h-6 text-orange-500" />
              Understanding Test Prioritization
            </CardTitle>
            <CardDescription>
              Learn how to prioritize tests based on business impact, risk assessment, and resource constraints
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-orange-500" />
                What is Test Prioritization?
              </h4>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Test prioritization is the process of ordering test cases based on their importance, 
                risk, and business impact. It helps teams focus on testing the most critical aspects 
                first, ensuring that high-priority issues are caught early in the development cycle.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Risk-Based Testing</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Prioritize tests based on the likelihood and impact of potential failures
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Business Impact</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Focus on areas that directly affect business objectives and user experience
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Resource Optimization</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Allocate testing resources efficiently to maximize coverage and value
                  </p>
                </div>
              </div>
            </div>

            {/* Priority Matrix */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Grid3X3 className="w-5 h-5 text-orange-500" />
                Priority Matrix Framework
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Impact vs. Effort Analysis</h5>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                    <div className="grid grid-cols-3 gap-2 text-xs font-medium text-center mb-2">
                      <div></div>
                      <div>Low Effort</div>
                      <div>High Effort</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="font-medium text-center">High Impact</div>
                      <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded text-center">
                        <div className="font-semibold text-red-600 dark:text-red-400">Quick Wins</div>
                        <div className="text-slate-600 dark:text-slate-400">Do First</div>
                      </div>
                      <div className="bg-orange-100 dark:bg-orange-900/20 p-2 rounded text-center">
                        <div className="font-semibold text-orange-600 dark:text-orange-400">Major Projects</div>
                        <div className="text-slate-600 dark:text-slate-400">Plan Carefully</div>
                      </div>
                      <div className="font-medium text-center">Low Impact</div>
                      <div className="bg-yellow-100 dark:bg-yellow-900/20 p-2 rounded text-center">
                        <div className="font-semibold text-yellow-600 dark:text-yellow-400">Fill-ins</div>
                        <div className="text-slate-600 dark:text-slate-400">Do Later</div>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded text-center">
                        <div className="font-semibold text-green-600 dark:text-green-400">Time Sinks</div>
                        <div className="text-slate-600 dark:text-slate-400">Avoid</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Risk-Based Prioritization</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3 p-2 bg-red-50 dark:bg-red-900/20 rounded">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <div>
                        <div className="font-medium text-red-700 dark:text-red-300">Critical Risk</div>
                        <div className="text-slate-600 dark:text-slate-400">Security, data loss, compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                      <TrendingUp className="w-4 h-4 text-orange-500" />
                      <div>
                        <div className="font-medium text-orange-700 dark:text-orange-300">High Risk</div>
                        <div className="text-slate-600 dark:text-slate-400">Core features, revenue impact</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                      <Clock className="w-4 h-4 text-yellow-500" />
                      <div>
                        <div className="font-medium text-yellow-700 dark:text-yellow-300">Medium Risk</div>
                        <div className="text-slate-600 dark:text-slate-400">User experience, performance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-green-50 dark:bg-green-900/20 rounded">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <div>
                        <div className="font-medium text-green-700 dark:text-green-300">Low Risk</div>
                        <div className="text-slate-600 dark:text-slate-400">Cosmetic, documentation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Priority Levels */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flag className="w-6 h-6 text-orange-500" />
              Priority Levels and Criteria
            </CardTitle>
            <CardDescription>
              Understanding different priority levels and when to apply them
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {priorityLevels.map((level) => {
                const Icon = level.icon;
                return (
                  <div key={level.id} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${level.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                          {level.name} Priority
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {level.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Criteria:</h4>
                        <ul className="space-y-1">
                          {level.criteria.map((criterion, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
                              {criterion}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {level.examples.map((example, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Interactive Test Case Prioritization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-orange-500" />
                Interactive Test Case Prioritization
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={activeView === 'matrix' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveView('matrix')}
                >
                  <Grid3X3 className="w-4 h-4 mr-1" />
                  Matrix
                </Button>
                <Button
                  variant={activeView === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveView('list')}
                >
                  <List className="w-4 h-4 mr-1" />
                  List
                </Button>
                <Button
                  variant={activeView === 'impact' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveView('impact')}
                >
                  <Target className="w-4 h-4 mr-1" />
                  Impact
                </Button>
              </div>
            </CardTitle>
            <CardDescription>
              Visualize and manage test case priorities with interactive tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activeView === 'matrix' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">Sort by:</span>
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800"
                    >
                      <option value="impact">Impact</option>
                      <option value="effort">Effort</option>
                      <option value="risk">Risk</option>
                      <option value="frequency">Frequency</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-10 gap-1 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  {/* Headers */}
                  <div className="col-span-2 text-xs font-semibold text-slate-600 dark:text-slate-400">Test Case</div>
                  <div className="text-xs font-semibold text-center text-slate-600 dark:text-slate-400">Impact</div>
                  <div className="text-xs font-semibold text-center text-slate-600 dark:text-slate-400">Effort</div>
                  <div className="text-xs font-semibold text-center text-slate-600 dark:text-slate-400">Risk</div>
                  <div className="text-xs font-semibold text-center text-slate-600 dark:text-slate-400">Frequency</div>
                  <div className="text-xs font-semibold text-center text-slate-600 dark:text-slate-400">Priority</div>
                  <div className="text-xs font-semibold text-center text-slate-600 dark:text-slate-400">Status</div>
                  <div className="text-xs font-semibold text-center text-slate-600 dark:text-slate-400">Actions</div>
                  
                  {/* Test Cases */}
                  {sortedTestCases.map((testCase) => {
                    const PriorityIcon = getPriorityIcon(testCase.priority);
                    return (
                      <div key={testCase.id} className="contents">
                        <div className="col-span-2 p-2 text-xs font-medium">{testCase.name}</div>
                        <div className="p-2 text-center">
                          <div className="flex items-center justify-center">
                            <div className="w-8 bg-slate-200 dark:bg-slate-700 rounded-full relative">
                              <div 
                                className="absolute left-0 top-0 h-full bg-orange-500 rounded-full"
                                style={{ width: `${testCase.impact * 10}%` }}
                              />
                              <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                                {testCase.impact}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 text-center">
                          <div className="flex items-center justify-center">
                            <div className="w-8 bg-slate-200 dark:bg-slate-700 rounded-full relative">
                              <div 
                                className="absolute left-0 top-0 h-full bg-blue-500 rounded-full"
                                style={{ width: `${testCase.effort * 10}%` }}
                              />
                              <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                                {testCase.effort}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 text-center">
                          <div className={`w-2 h-2 rounded-full ${getRiskColor(testCase.risk)} mx-auto`} />
                        </div>
                        <div className="p-2 text-center text-xs">{testCase.frequency}</div>
                        <div className="p-2 text-center">
                          <Badge className={`text-xs ${getPriorityColor(testCase.priority)}`}>
                            {testCase.priority}
                          </Badge>
                        </div>
                        <div className="p-2 text-center">
                          <div className={`w-2 h-2 rounded-full mx-auto ${
                            testCase.status === 'passing' ? 'bg-green-500' : 'bg-red-500'
                          }`} />
                        </div>
                        <div className="p-2 text-center">
                          <div className="flex gap-1 justify-center">
                            <Button size="sm" variant="outline" className="w-6 h-6 p-0">
                              <Play className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="outline" className="w-6 h-6 p-0">
                              <Eye className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeView === 'list' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">Sort by:</span>
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800"
                    >
                      <option value="impact">Impact</option>
                      <option value="effort">Effort</option>
                      <option value="risk">Risk</option>
                      <option value="frequency">Frequency</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {sortedTestCases.map((testCase) => {
                    const PriorityIcon = getPriorityIcon(testCase.priority);
                    return (
                      <div key={testCase.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${
                              testCase.priority === 'critical' ? 'from-red-500 to-red-700' :
                              testCase.priority === 'high' ? 'from-orange-500 to-orange-700' :
                              testCase.priority === 'medium' ? 'from-yellow-500 to-yellow-700' :
                              'from-green-500 to-green-700'
                            }`}>
                              <PriorityIcon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900 dark:text-slate-100">{testCase.name}</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400">{testCase.description}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="text-sm font-medium">Impact: {testCase.impact}/10</div>
                              <div className="text-sm font-medium">Effort: {testCase.effort}/10</div>
                            </div>
                            <div className="text-right">
                              <Badge className={getPriorityColor(testCase.priority)}>
                                {testCase.priority}
                              </Badge>
                              <div className="text-xs text-slate-500 mt-1">{testCase.lastRun}</div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Play className="w-3 h-3 mr-1" />
                                Run
                              </Button>
                              <Button size="sm" variant="outline">
                                <Eye className="w-3 h-3 mr-1" />
                                View
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeView === 'impact' && (
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4">
                  {priorityLevels.map((level) => {
                    const Icon = level.icon;
                    const levelTests = testCases.filter(t => t.priority === level.id);
                    return (
                      <div key={level.id} className={`p-4 rounded-xl border-2 ${
                        level.id === 'critical' ? 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10' :
                        level.id === 'high' ? 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10' :
                        level.id === 'medium' ? 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10' :
                        'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10'
                      }`}>
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className={`w-5 h-5 ${
                            level.id === 'critical' ? 'text-red-600' :
                            level.id === 'high' ? 'text-orange-600' :
                            level.id === 'medium' ? 'text-yellow-600' :
                            'text-green-600'
                          }`} />
                          <h3 className="font-semibold">{level.name}</h3>
                        </div>
                        <div className="space-y-2">
                          <div className="text-2xl font-bold">{levelTests.length}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">test cases</div>
                          <div className="text-sm font-medium">
                            Total Impact: {levelTests.reduce((sum, t) => sum + t.impact, 0)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-4">Impact Distribution</h4>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="space-y-3">
                      {priorityLevels.map((level) => {
                        const levelTests = testCases.filter(t => t.priority === level.id);
                        const percentage = (levelTests.length / testCases.length) * 100;
                        return (
                          <div key={level.id} className="flex items-center gap-4">
                            <div className="w-20 text-sm font-medium">{level.name}</div>
                            <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-6 relative">
                              <div 
                                className={`h-full rounded-full ${
                                  level.id === 'critical' ? 'bg-red-500' :
                                  level.id === 'high' ? 'bg-orange-500' :
                                  level.id === 'medium' ? 'bg-yellow-500' :
                                  'bg-green-500'
                                }`}
                                style={{ width: `${percentage}%` }}
                              />
                              <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                                {percentage.toFixed(1)}%
                              </span>
                            </div>
                            <div className="w-12 text-sm text-right">{levelTests.length}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-orange-500" />
              Best Practices for Test Prioritization
            </CardTitle>
            <CardDescription>
              Industry-standard approaches to effective test prioritization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-orange-600 dark:text-orange-400">Prioritization Framework</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600 dark:text-orange-400">1</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Business Impact Assessment</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Evaluate the potential business impact of failures in each area
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600 dark:text-orange-400">2</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Risk Analysis</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Assess the likelihood and severity of potential failures
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600 dark:text-orange-400">3</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Resource Constraints</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Consider available time, budget, and team capacity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-orange-600 dark:text-orange-400">Implementation Strategies</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600 dark:text-orange-400">4</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Dynamic Prioritization</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Adjust priorities based on changing requirements and feedback
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600 dark:text-orange-400">5</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Stakeholder Input</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Gather input from business stakeholders and development teams
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600 dark:text-orange-400">6</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Continuous Review</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Regularly review and update priorities based on project evolution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert>
          <AlertTitle>Key Takeaway</AlertTitle>
          <AlertDescription>
            Effective test prioritization is essential for maximizing testing efficiency and ensuring that 
            critical issues are identified early. By combining business impact analysis, risk assessment, 
            and resource constraints, teams can create a prioritization strategy that delivers maximum value.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Code, 
  Layers, 
  GitBranch, 
  Package, 
  FolderTree, 
  Puzzle,
  Box,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Zap,
  Users,
  Settings,
  FileText,
  GitMerge,
  TreePine,
  Blocks,
  Braces,
  FileCode,
  FolderOpen,
  Link,
  CheckCircle,
  AlertTriangle,
  Info,
  BarChart3
} from 'lucide-react';

interface CodeScalabilityPatternProps {
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

const CodeScalabilityPatternCard: React.FC<CodeScalabilityPatternProps> = ({ 
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

export default function CodeScalability() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const modularArchitecture = [
    {
      icon: FolderTree,
      title: 'Component-Based Architecture',
      description: 'Build reusable, independent UI components',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      principles: [
        'Single responsibility principle',
        'Component composition over inheritance',
        'Props-driven component design',
        'Stateless pure components when possible'
      ],
      benefits: [
        'Reusable across different parts of application',
        'Easier to test and maintain',
        'Parallel development by different teams',
        'Independent deployment in micro-frontends'
      ],
      diagram: (
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Component Architecture</div>
            
            {/* App Container */}
            <div className="w-32 h-8 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-xs text-white font-medium">App</span>
            </div>
            
            {/* Arrows */}
            <div className="flex space-x-4">
              <ArrowDown className="w-3 h-3 text-blue-400" />
              <ArrowDown className="w-3 h-3 text-blue-400" />
              <ArrowDown className="w-3 h-3 text-blue-400" />
            </div>
            
            {/* Components */}
            <div className="grid grid-cols-3 gap-2">
              <div className="w-12 h-12 border-2 border-blue-500 rounded flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-950/20">
                <FileCode className="w-3 h-3 text-blue-500" />
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Header</div>
              </div>
              <div className="w-12 h-12 border-2 border-blue-500 rounded flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-950/20">
                <FileCode className="w-3 h-3 text-blue-500" />
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Card</div>
              </div>
              <div className="w-12 h-12 border-2 border-blue-500 rounded flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-950/20">
                <FileCode className="w-3 h-3 text-blue-500" />
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Button</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Layers,
      title: 'Layered Architecture',
      description: 'Separate concerns into distinct layers',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-800',
      principles: [
        'Presentation layer (UI components)',
        'Business logic layer (services/hooks)',
        'Data access layer (API clients)',
        'Cross-cutting concerns (utilities)'
      ],
      benefits: [
        'Clear separation of responsibilities',
        'Easier to maintain and refactor',
        'Better testability',
        'Reusable business logic'
      ],
      diagram: (
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Layered Architecture</div>
            
            {/* UI Layer */}
            <div className="w-32 h-8 bg-green-500 rounded flex items-center justify-center">
              <span className="text-xs text-white font-medium">UI Layer</span>
            </div>
            <ArrowDown className="w-3 h-3 text-green-400" />
            
            {/* Business Logic */}
            <div className="w-32 h-8 bg-green-600 rounded flex items-center justify-center">
              <span className="text-xs text-white font-medium">Business Logic</span>
            </div>
            <ArrowDown className="w-3 h-3 text-green-400" />
            
            {/* Data Access */}
            <div className="w-32 h-8 bg-green-700 rounded flex items-center justify-center">
              <span className="text-xs text-white font-medium">Data Access</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const dependencyManagement = [
    {
      icon: Package,
      title: 'Package Management',
      description: 'Manage external dependencies efficiently',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      strategies: [
        'Use package managers (npm, yarn, pnpm)',
        'Implement dependency version locking',
        'Regular dependency audits and updates',
        'Tree shaking to eliminate unused code'
      ],
      bestPractices: [
        'Minimize bundle size with dynamic imports',
        'Use CDN for popular libraries',
        'Implement code splitting at route level',
        'Monitor bundle size with tools'
      ],
      diagram: (
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Package Management</div>
            
            {/* App */}
            <div className="w-24 h-8 border-2 border-slate-300 dark:border-slate-600 rounded flex items-center justify-center">
              <span className="text-xs text-slate-600 dark:text-slate-400">App.js</span>
            </div>
            
            {/* Dependencies */}
            <div className="flex space-x-2">
              <div className="w-16 h-8 border-2 border-purple-500 rounded flex items-center justify-center bg-purple-50 dark:bg-purple-950/20">
                <span className="text-xs text-purple-600 dark:text-purple-400">React</span>
              </div>
              <div className="w-16 h-8 border-2 border-purple-500 rounded flex items-center justify-center bg-purple-50 dark:bg-purple-950/20">
                <span className="text-xs text-purple-600 dark:text-purple-400">Utils</span>
              </div>
              <div className="w-16 h-8 border-2 border-purple-500 rounded flex items-center justify-center bg-purple-50 dark:bg-purple-950/20">
                <span className="text-xs text-purple-600 dark:text-purple-400">UI Lib</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: GitBranch,
      title: 'Module Federation',
      description: 'Share modules across different frontend applications',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      strategies: [
        'Webpack Module Federation',
        'Shared dependencies between micro-frontends',
        'Dynamic remote module loading',
        'Version compatibility management'
      ],
      bestPractices: [
        'Define clear module contracts',
        'Implement fallback mechanisms',
        'Use semantic versioning',
        'Monitor module loading performance'
      ],
      diagram: (
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-orange-200 dark:border-orange-800">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Module Federation</div>
            
            {/* Shared Module */}
            <div className="w-32 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-xs text-white font-medium">Shared Module</span>
            </div>
            
            {/* Arrows */}
            <div className="flex space-x-4">
              <ArrowDown className="w-3 h-3 text-orange-400" />
              <ArrowDown className="w-3 h-3 text-orange-400" />
            </div>
            
            {/* Apps */}
            <div className="flex space-x-4">
              <div className="w-20 h-8 border-2 border-orange-500 rounded flex items-center justify-center bg-orange-50 dark:bg-orange-950/20">
                <span className="text-xs text-orange-600 dark:text-orange-400">App 1</span>
              </div>
              <div className="w-20 h-8 border-2 border-orange-500 rounded flex items-center justify-center bg-orange-50 dark:bg-orange-950/20">
                <span className="text-xs text-orange-600 dark:text-orange-400">App 2</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const codeOrganization = [
    {
      icon: FolderOpen,
      title: 'Directory Structure',
      description: 'Organize code for scalability and maintainability',
      color: 'text-cyan-600 dark:text-cyan-400',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/20',
      borderColor: 'border-cyan-200 dark:border-cyan-800',
      patterns: [
        'Feature-based organization',
        'Domain-driven design structure',
        'Atomic design methodology',
        'Custom hooks separation'
      ],
      examples: [
        'src/features/auth/components',
        'src/shared/hooks/useApi',
        'src/components/ui/Button',
        'src/services/apiClient'
      ],
      diagram: (
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-cyan-200 dark:border-cyan-800">
          <div className="flex flex-col items-start space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Directory Structure</div>
            
            {/* Tree Structure */}
            <div className="flex items-center space-x-2">
              <FolderOpen className="w-4 h-4 text-cyan-500" />
              <span className="text-xs text-slate-700 dark:text-slate-300">src/</span>
            </div>
            <div className="ml-4 flex items-center space-x-2">
              <div className="w-2 h-2 border-l-2 border-b-2 border-cyan-500"></div>
              <FolderOpen className="w-4 h-4 text-cyan-500" />
              <span className="text-xs text-slate-700 dark:text-slate-300">components/</span>
            </div>
            <div className="ml-8 flex items-center space-x-2">
              <div className="w-2 h-2 border-l-2 border-b-2 border-cyan-500"></div>
              <FileCode className="w-3 h-3 text-cyan-500" />
              <span className="text-xs text-slate-700 dark:text-slate-300">Button.jsx</span>
            </div>
            <div className="ml-4 flex items-center space-x-2">
              <div className="w-2 h-2 border-l-2 border-b-2 border-cyan-500"></div>
              <FolderOpen className="w-4 h-4 text-cyan-500" />
              <span className="text-xs text-slate-700 dark:text-slate-300">hooks/</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Braces,
      title: 'Code Reusability',
      description: 'Create reusable code patterns and utilities',
      color: 'text-pink-600 dark:text-pink-400',
      bgColor: 'bg-pink-50 dark:bg-pink-950/20',
      borderColor: 'border-pink-200 dark:border-pink-800',
      patterns: [
        'Custom hooks for shared logic',
        'Higher-order components (HOCs)',
        'Render props pattern',
        'Utility functions library'
      ],
      examples: [
        'useApi hook for data fetching',
        'withAuth HOC for authentication',
        'DataProvider render prop',
        'formatDate utility function'
      ],
      diagram: (
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-pink-200 dark:border-pink-800">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Code Reusability</div>
            
            {/* Shared Logic */}
            <div className="w-32 h-8 bg-pink-500 rounded flex items-center justify-center">
              <span className="text-xs text-white font-medium">useApi Hook</span>
            </div>
            
            {/* Arrows */}
            <div className="flex space-x-4">
              <ArrowDown className="w-3 h-3 text-pink-400" />
              <ArrowDown className="w-3 h-3 text-pink-400" />
            </div>
            
            {/* Components using it */}
            <div className="flex space-x-4">
              <div className="w-16 h-8 border-2 border-pink-500 rounded flex items-center justify-center bg-pink-50 dark:bg-pink-950/20">
                <span className="text-xs text-pink-600 dark:text-pink-400">UserList</span>
              </div>
              <div className="w-16 h-8 border-2 border-pink-500 rounded flex items-center justify-center bg-pink-50 dark:bg-pink-950/20">
                <span className="text-xs text-pink-600 dark:text-pink-400">ProductList</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const scalabilityMetrics = [
    {
      icon: Zap,
      title: 'Code Quality Metrics',
      metrics: [
        { name: 'Bundle Size', description: 'Total JavaScript bundle size' },
        { name: 'Code Complexity', description: 'Cyclomatic complexity of functions' },
        { name: 'Test Coverage', description: 'Percentage of code covered by tests' },
        { name: 'Code Duplication', description: 'Percentage of duplicated code' }
      ]
    },
    {
      icon: Users,
      title: 'Team Productivity Metrics',
      metrics: [
        { name: 'Build Time', description: 'Time to build the application' },
        { name: 'Hot Reload Speed', description: 'Development server refresh time' },
        { name: 'Code Review Time', description: 'Average time for code review' },
        { name: 'Onboarding Time', description: 'Time for new developer to be productive' }
      ]
    },
    {
      icon: Settings,
      title: 'Maintainability Metrics',
      metrics: [
        { name: 'Technical Debt', description: 'Estimated effort to fix issues' },
        { name: 'Bug Density', description: 'Bugs per thousand lines of code' },
        { name: 'Refactoring Frequency', description: 'How often code is refactored' },
        { name: 'Documentation Coverage', description: 'Documented vs undocumented code' }
      ]
    }
  ];

  const bestPractices = [
    {
      icon: CheckCircle,
      title: 'Development Practices',
      practices: [
        'Use TypeScript for type safety',
        'Implement comprehensive testing strategy',
        'Follow consistent coding standards',
        'Use ESLint and Prettier for code quality'
      ]
    },
    {
      icon: GitMerge,
      title: 'Version Control',
      practices: [
        'Feature branch workflow',
        'Semantic commit messages',
        'Regular code reviews',
        'Automated testing in CI/CD'
      ]
    },
    {
      icon: Blocks,
      title: 'Architecture Decisions',
      practices: [
        'Document architectural decisions (ADRs)',
        'Choose frameworks with long-term support',
        'Implement progressive enhancement',
        'Design for mobile-first approach'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Code Scalability"
        description="Designing scalable codebases: modular architecture, dependency management, and code organization strategies for frontend applications"
        icon={Code}
        category="System Design.Scalability"
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
                  Frontend Code Scalability
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Code scalability in frontend development focuses on creating maintainable, reusable, 
                  and organized codebases that can grow with your team and application complexity. 
                  Learn how frontend architects design code structures that support long-term development.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-800">
                <Layers className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Modular Design</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Build with reusable components
                </p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-800">
                <Package className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Dependency Management</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Efficient package organization
                </p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-800">
                <FolderTree className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Code Organization</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Scalable directory structures
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modular Architecture */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-500 rounded-xl">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-green-700 dark:text-green-300">
                  Modular Architecture
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Building frontend applications with modular, reusable components and clear separation of concerns.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {modularArchitecture.map((pattern, index) => (
                <Card key={index} className={`${pattern.bgColor} ${pattern.borderColor} border-2`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <pattern.icon className={`w-6 h-6 ${pattern.color}`} />
                      <CardTitle className="text-xl text-slate-800 dark:text-slate-200">
                        {pattern.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{pattern.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">Principles</h5>
                        <ul className="space-y-1">
                          {pattern.principles.map((principle, i) => (
                            <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {principle}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Benefits</h5>
                        <ul className="space-y-1">
                          {pattern.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {benefit}
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

        {/* Dependency Management */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500 rounded-xl">
                <Package className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-purple-700 dark:text-purple-300">
                  Dependency Management
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Managing external dependencies and shared modules for scalable frontend development.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {dependencyManagement.map((strategy, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <strategy.icon className={`w-6 h-6 ${strategy.color}`} />
                      <CardTitle className="text-lg text-slate-900 dark:text-white">
                        {strategy.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Strategies</h5>
                        <ul className="space-y-1">
                          {strategy.strategies.map((item, i) => (
                            <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-700 dark:text-orange-300 mb-2">Best Practices</h5>
                        <ul className="space-y-1">
                          {strategy.bestPractices.map((practice, i) => (
                            <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {practice}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  {strategy.diagram}
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Code Organization */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-cyan-950/20 dark:to-blue-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-cyan-500 rounded-xl">
                <FolderTree className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-cyan-700 dark:text-cyan-300">
                  Code Organization
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Structuring frontend code for maintainability, scalability, and team collaboration.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {codeOrganization.map((pattern, index) => (
                <Card 
                  key={index} 
                  className={`${pattern.bgColor} ${pattern.borderColor} border-2 cursor-pointer transition-all duration-300`}
                  onClick={() => toggleCard(index)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <pattern.icon className={`w-6 h-6 ${pattern.color}`} />
                      <CardTitle className="text-xl text-slate-800 dark:text-slate-200">
                        {pattern.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{pattern.description}</CardDescription>
                  </CardHeader>
                  {expandedCard === index && (
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-cyan-700 dark:text-cyan-300 mb-2">Patterns</h5>
                          <ul className="space-y-1">
                            {pattern.patterns.map((item, i) => (
                              <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-pink-700 dark:text-pink-300 mb-2">Examples</h5>
                          <ul className="space-y-1">
                            {pattern.examples.map((example, i) => (
                              <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">
                                  {example}
                                </code>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  )}
                  {pattern.diagram}
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Code Scalability Metrics */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-red-50/30 dark:from-orange-950/20 dark:to-red-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-500 rounded-xl">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-orange-700 dark:text-orange-300">
                  Code Scalability Metrics
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Key metrics to measure and monitor code scalability and maintainability.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-3 gap-6">
              {scalabilityMetrics.map((metricGroup, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <metricGroup.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
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

        {/* Best Practices */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-emerald-500 rounded-xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl text-emerald-700 dark:text-emerald-300">
                  Frontend Code Best Practices
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Essential practices for building scalable and maintainable frontend codebases.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-3 gap-6">
              {bestPractices.map((practice, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <practice.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                      {practice.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {practice.practices.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

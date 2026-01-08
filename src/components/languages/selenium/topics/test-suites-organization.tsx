'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  FolderTree,
  FileText,
  Layers,
  Package,
  GitBranch,
  Tag,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  Settings,
  Grid3X3,
  List,
  ChevronRight,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Copy,
  Archive,
  RefreshCw,
  Play,
  Pause,
  BarChart3,
  TrendingUp,
  Calendar,
  Target,
  Zap,
  Code,
  Database,
  Globe,
  Shield,
  Smartphone
} from 'lucide-react';

export default function TestSuitesOrganizationComponent() {
  const [activeView, setActiveView] = useState<'tree' | 'grid' | 'list'>('tree');
  const [selectedSuite, setSelectedSuite] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['suites', 'functional', 'api', 'ui']);

  const testSuites = [
    {
      id: 'functional',
      name: 'Functional Tests',
      description: 'Core application functionality validation',
      icon: CheckCircle,
      color: 'from-blue-500 to-blue-700',
      testCount: 245,
      lastRun: '2 hours ago',
      status: 'passing',
      subSuites: [
        {
          id: 'login',
          name: 'Login Module',
          testCount: 45,
          status: 'passing',
          tests: [
            { name: 'Valid Login Test', status: 'pass', duration: '2.3s' },
            { name: 'Invalid Login Test', status: 'pass', duration: '1.8s' },
            { name: 'Password Reset Test', status: 'pass', duration: '3.1s' }
          ]
        },
        {
          id: 'checkout',
          name: 'Checkout Process',
          testCount: 67,
          status: 'passing',
          tests: [
            { name: 'Add to Cart Test', status: 'pass', duration: '4.2s' },
            { name: 'Payment Processing Test', status: 'pass', duration: '5.1s' },
            { name: 'Order Confirmation Test', status: 'pass', duration: '2.7s' }
          ]
        },
        {
          id: 'user-management',
          name: 'User Management',
          testCount: 89,
          status: 'passing',
          tests: [
            { name: 'User Registration Test', status: 'pass', duration: '3.5s' },
            { name: 'Profile Update Test', status: 'pass', duration: '2.9s' },
            { name: 'Account Deletion Test', status: 'pass', duration: '4.1s' }
          ]
        }
      ]
    },
    {
      id: 'api',
      name: 'API Tests',
      description: 'REST API endpoint validation',
      icon: Code,
      color: 'from-green-500 to-green-700',
      testCount: 156,
      lastRun: '1 hour ago',
      status: 'passing',
      subSuites: [
        {
          id: 'authentication',
          name: 'Authentication API',
          testCount: 34,
          status: 'passing',
          tests: [
            { name: 'Token Generation Test', status: 'pass', duration: '0.8s' },
            { name: 'Token Validation Test', status: 'pass', duration: '0.6s' },
            { name: 'Refresh Token Test', status: 'pass', duration: '1.2s' }
          ]
        },
        {
          id: 'user-api',
          name: 'User API',
          testCount: 56,
          status: 'passing',
          tests: [
            { name: 'Create User Test', status: 'pass', duration: '1.1s' },
            { name: 'Get User Test', status: 'pass', duration: '0.9s' },
            { name: 'Update User Test', status: 'pass', duration: '1.3s' }
          ]
        },
        {
          id: 'product-api',
          name: 'Product API',
          testCount: 66,
          status: 'passing',
          tests: [
            { name: 'Product Listing Test', status: 'pass', duration: '1.5s' },
            { name: 'Product Details Test', status: 'pass', duration: '1.2s' },
            { name: 'Product Search Test', status: 'pass', duration: '2.1s' }
          ]
        }
      ]
    },
    {
      id: 'ui',
      name: 'UI Tests',
      description: 'User interface and interaction testing',
      icon: Eye,
      color: 'from-purple-500 to-purple-700',
      testCount: 189,
      lastRun: '30 minutes ago',
      status: 'passing',
      subSuites: [
        {
          id: 'navigation',
          name: 'Navigation Tests',
          testCount: 45,
          status: 'passing',
          tests: [
            { name: 'Main Navigation Test', status: 'pass', duration: '6.2s' },
            { name: 'Breadcrumb Test', status: 'pass', duration: '4.1s' },
            { name: 'Menu Dropdown Test', status: 'pass', duration: '3.8s' }
          ]
        },
        {
          id: 'forms',
          name: 'Form Validation',
          testCount: 78,
          status: 'passing',
          tests: [
            { name: 'Contact Form Test', status: 'pass', duration: '5.4s' },
            { name: 'Registration Form Test', status: 'pass', duration: '7.2s' },
            { name: 'Search Form Test', status: 'pass', duration: '4.9s' }
          ]
        },
        {
          id: 'responsive',
          name: 'Responsive Design',
          testCount: 66,
          status: 'passing',
          tests: [
            { name: 'Mobile View Test', status: 'pass', duration: '8.1s' },
            { name: 'Tablet View Test', status: 'pass', duration: '7.5s' },
            { name: 'Desktop View Test', status: 'pass', duration: '6.8s' }
          ]
        }
      ]
    },
    {
      id: 'performance',
      name: 'Performance Tests',
      description: 'Load and stress testing',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-700',
      testCount: 67,
      lastRun: '4 hours ago',
      status: 'passing',
      subSuites: [
        {
          id: 'load',
          name: 'Load Testing',
          testCount: 23,
          status: 'passing',
          tests: [
            { name: 'Concurrent Users Test', status: 'pass', duration: '120s' },
            { name: 'Peak Load Test', status: 'pass', duration: '180s' },
            { name: 'Sustained Load Test', status: 'pass', duration: '300s' }
          ]
        },
        {
          id: 'stress',
          name: 'Stress Testing',
          testCount: 22,
          status: 'passing',
          tests: [
            { name: 'Memory Stress Test', status: 'pass', duration: '240s' },
            { name: 'CPU Stress Test', status: 'pass', duration: '180s' },
            { name: 'Network Stress Test', status: 'pass', duration: '150s' }
          ]
        },
        {
          id: 'endurance',
          name: 'Endurance Testing',
          testCount: 22,
          status: 'passing',
          tests: [
            { name: 'Long Running Test', status: 'pass', duration: '7200s' },
            { name: 'Resource Leak Test', status: 'pass', duration: '3600s' },
            { name: 'Stability Test', status: 'pass', duration: '5400s' }
          ]
        }
      ]
    },
    {
      id: 'security',
      name: 'Security Tests',
      description: 'Security vulnerability testing',
      icon: Shield,
      color: 'from-red-500 to-red-700',
      testCount: 134,
      lastRun: '6 hours ago',
      status: 'passing',
      subSuites: [
        {
          id: 'authentication',
          name: 'Authentication Security',
          testCount: 45,
          status: 'passing',
          tests: [
            { name: 'SQL Injection Test', status: 'pass', duration: '2.1s' },
            { name: 'XSS Protection Test', status: 'pass', duration: '1.8s' },
            { name: 'CSRF Protection Test', status: 'pass', duration: '2.4s' }
          ]
        },
        {
          id: 'authorization',
          name: 'Authorization Tests',
          testCount: 44,
          status: 'passing',
          tests: [
            { name: 'Role Based Access Test', status: 'pass', duration: '1.9s' },
            { name: 'Permission Test', status: 'pass', duration: '2.2s' },
            { name: 'Access Control Test', status: 'pass', duration: '2.6s' }
          ]
        },
        {
          id: 'data-protection',
          name: 'Data Protection',
          testCount: 45,
          status: 'passing',
          tests: [
            { name: 'Data Encryption Test', status: 'pass', duration: '3.1s' },
            { name: 'Data Masking Test', status: 'pass', duration: '2.8s' },
            { name: 'Privacy Test', status: 'pass', duration: '3.4s' }
          ]
        }
      ]
    }
  ];

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderId) 
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
  };

  const getSuiteIcon = (suiteId: string) => {
    const icons: Record<string, React.ComponentType<any>> = {
      functional: CheckCircle,
      api: Code,
      ui: Eye,
      performance: TrendingUp,
      security: Shield
    };
    return icons[suiteId] || FileText;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      passing: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20',
      failing: 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20',
      skipped: 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20',
      running: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20'
    };
    return colors[status] || colors.passing;
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background/20">
      <PageHeader
        title="Test Suites Organization"
        description="Master the art of organizing test suites efficiently with hierarchical structures, logical categorization, and maintainable test architecture for scalable testing frameworks"
        icon={FolderTree}
        colorTheme="indigo"
        badges={[
          { label: 'Test Organization', variant: 'secondary' },
          { label: 'Suite Structure', variant: 'secondary' },
          { label: 'Test Architecture', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Overview Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="w-6 h-6 text-indigo-500" />
              Understanding Test Suites Organization
            </CardTitle>
            <CardDescription>
              Learn how to structure and organize your test suites for maximum efficiency and maintainability
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-indigo-500" />
                What are Test Suites?
              </h4>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Test suites are collections of related test cases grouped together based on functionality, 
                features, or testing objectives. They provide a structured way to organize tests and enable 
                selective test execution.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Logical Grouping</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Tests are grouped by functionality, modules, or features for better organization
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Selective Execution</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Run specific suites or groups of tests based on requirements
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Maintainability</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Easier to maintain and update tests when properly organized
                  </p>
                </div>
              </div>
            </div>

            {/* Organization Principles */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-indigo-500" />
                Organization Principles
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Hierarchical Structure</h5>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>Main suites contain sub-suites for detailed organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>Each level represents a different granularity of testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>Clear parent-child relationships for easy navigation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Naming Conventions</h5>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>Use descriptive names that reflect the functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>Follow consistent naming patterns across suites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>Include version or environment information when needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Test Suite Explorer */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Grid3X3 className="w-6 h-6 text-indigo-500" />
                Interactive Test Suite Explorer
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={activeView === 'tree' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveView('tree')}
                >
                  <GitBranch className="w-4 h-4 mr-1" />
                  Tree
                </Button>
                <Button
                  variant={activeView === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveView('grid')}
                >
                  <Grid3X3 className="w-4 h-4 mr-1" />
                  Grid
                </Button>
                <Button
                  variant={activeView === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveView('list')}
                >
                  <List className="w-4 h-4 mr-1" />
                  List
                </Button>
              </div>
            </CardTitle>
            <CardDescription>
              Explore different organizational patterns and structures for test suites
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activeView === 'tree' && (
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <FolderTree className="w-5 h-5 text-indigo-500" />
                    <span className="font-semibold">Test Suite Tree Structure</span>
                  </div>
                  
                  <div className="space-y-2">
                    {/* Root Level */}
                    <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600">
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                      <FolderTree className="w-4 h-4 text-indigo-500" />
                      <span className="font-medium">test-suites/</span>
                      <Badge variant="secondary" className="ml-auto">791 tests</Badge>
                    </div>

                    {/* Test Suites */}
                    {testSuites.map((suite) => {
                      const Icon = getSuiteIcon(suite.id);
                      const isExpanded = expandedFolders.includes(suite.id);
                      
                      return (
                        <div key={suite.id} className="ml-4">
                          <div 
                            className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700"
                            onClick={() => toggleFolder(suite.id)}
                          >
                            <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                            <Icon className="w-4 h-4 text-indigo-500" />
                            <span className="font-medium">{suite.name}/</span>
                            <Badge variant="secondary" className="ml-auto">{suite.testCount} tests</Badge>
                            <Badge className={getStatusColor(suite.status)}>{suite.status}</Badge>
                          </div>
                          
                          {isExpanded && (
                            <div className="ml-4 mt-2 space-y-1">
                              {suite.subSuites.map((subSuite) => (
                                <div key={subSuite.id} className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                                  <ChevronRight className="w-4 h-4 text-slate-400" />
                                  <FileText className="w-4 h-4 text-indigo-400" />
                                  <span className="text-sm">{subSuite.name}/</span>
                                  <Badge variant="outline" className="ml-auto text-xs">{subSuite.testCount} tests</Badge>
                                  <Badge className={`text-xs ${getStatusColor(subSuite.status)}`}>{subSuite.status}</Badge>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeView === 'grid' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {testSuites.map((suite) => {
                  const Icon = getSuiteIcon(suite.id);
                  
                  return (
                    <div key={suite.id} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${suite.color}`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <Badge className={getStatusColor(suite.status)}>{suite.status}</Badge>
                      </div>
                      
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{suite.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{suite.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Test Count:</span>
                          <span className="font-medium">{suite.testCount}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Last Run:</span>
                          <span className="font-medium">{suite.lastRun}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Sub-suites:</span>
                          <span className="font-medium">{suite.subSuites.length}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Play className="w-3 h-3 mr-1" />
                            Run
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Eye className="w-3 h-3 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {activeView === 'list' && (
              <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-6 gap-4 p-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                  <div className="font-semibold text-sm">Suite Name</div>
                  <div className="font-semibold text-sm">Description</div>
                  <div className="font-semibold text-sm">Tests</div>
                  <div className="font-semibold text-sm">Status</div>
                  <div className="font-semibold text-sm">Last Run</div>
                  <div className="font-semibold text-sm">Actions</div>
                </div>
                
                {testSuites.map((suite) => {
                  const Icon = getSuiteIcon(suite.id);
                  
                  return (
                    <div key={suite.id} className="grid grid-cols-6 gap-4 p-4 border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <div className="flex items-center gap-2">
                        <div className={`p-1 rounded bg-gradient-to-br ${suite.color}`}>
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium">{suite.name}</span>
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{suite.description}</div>
                      <div className="text-sm font-medium">{suite.testCount}</div>
                      <div>
                        <Badge className={getStatusColor(suite.status)}>{suite.status}</Badge>
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{suite.lastRun}</div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          <Play className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-6 h-6 text-indigo-500" />
              Best Practices for Test Suite Organization
            </CardTitle>
            <CardDescription>
              Follow these industry-standard practices for optimal test suite management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Structural Guidelines</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">1</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Single Responsibility Principle</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Each test suite should focus on one specific functionality or feature area
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">2</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Logical Grouping</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Group related tests together based on business functionality or technical layers
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">3</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Consistent Hierarchy</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Maintain consistent depth and structure across all test suites
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Management Guidelines</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">4</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Regular Maintenance</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Review and refactor test suites regularly to maintain relevance
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">5</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Documentation</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Document suite purposes, dependencies, and execution requirements
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">6</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Version Control</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Track changes and maintain version history for test suite modifications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-6 h-6 text-indigo-500" />
              Implementation Examples
            </CardTitle>
            <CardDescription>
              Practical code examples for implementing test suite organization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 border border-slate-300 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">TestSuite.java</span>
                </div>
                <pre className="text-sm text-slate-800 dark:text-slate-300 overflow-x-auto">
{`@RunWith(Suite.class)
@Suite.SuiteClasses({
    LoginTest.class,
    RegistrationTest.class,
    ProfileManagementTest.class
})
public class UserManagementTestSuite {
    // Suite configuration and setup
    @BeforeClass
    public static void setUpSuite() {
        // Initialize test data and environment
        System.out.println("Setting up User Management Test Suite");
    }
    
    @AfterClass
    public static void tearDownSuite() {
        // Clean up test data and environment
        System.out.println("Tearing down User Management Test Suite");
    }
}`}
                </pre>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 border border-slate-300 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">pytest.ini</span>
                </div>
                <pre className="text-sm text-slate-800 dark:text-slate-300 overflow-x-auto">
{`[tool:pytest]
# Test suite organization
testpaths = tests
python_files = test_*.py *_test.py
python_classes = Test*
python_functions = test_*

# Suite markers
markers =
    unit: Unit tests
    integration: Integration tests
    ui: UI tests
    api: API tests
    slow: Slow running tests
    smoke: Smoke tests`}
                </pre>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 border border-slate-300 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">package.json</span>
                </div>
                <pre className="text-sm text-slate-800 dark:text-slate-300 overflow-x-auto">
{`{
  "scripts": {
    "test": "jest",
    "test:unit": "jest --testPathPattern=unit",
    "test:integration": "jest --testPathPattern=integration",
    "test:ui": "jest --testPathPattern=ui",
    "test:api": "jest --testPathPattern=api",
    "test:smoke": "jest --testPathPattern=smoke",
    "test:all": "jest --testPathPattern=unit|integration|ui|api"
  },
  "jest": {
    "testMatch": [
      "**/tests/**/*.test.js",
      "**/__tests__/**/*.js"
    ],
    "collectCoverageFrom": [
      "src/**/*.js",
      "!src/index.js"
    ]
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert>
          <AlertTitle>Key Takeaway</AlertTitle>
          <AlertDescription>
            Proper test suite organization is crucial for maintaining scalable and efficient test automation frameworks. 
            By following hierarchical structures, logical grouping, and consistent naming conventions, you can create 
            test suites that are easy to navigate, maintain, and execute.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

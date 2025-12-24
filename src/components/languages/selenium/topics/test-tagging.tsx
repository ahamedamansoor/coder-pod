'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Tag,
  Hash,
  FolderOpen,
  Filter,
  Search,
  Plus,
  X,
  Edit,
  Trash2,
  Copy,
  CheckCircle,
  Clock,
  AlertTriangle,
  Zap,
  Shield,
  Smartphone,
  Globe,
  Database,
  Code,
  Eye,
  Users,
  Calendar,
  Settings,
  BarChart3,
  Layers,
  Grid3X3,
  List,
  Tag as TagIcon,
  Bookmark,
  Flag,
  Star,
  Target,
  Rocket,
  Bug,
  Lightbulb,
  Package,
  Archive,
  RefreshCw,
  Play,
  Pause,
  SkipForward,
  FastForward,
  CheckSquare,
  Square,
  MoreHorizontal,
  ChevronDown,
  ChevronRight,
  FolderTree,
  FileText,
  Folder,
  Tag as TagIcon2
} from 'lucide-react';

export default function TestTaggingComponent() {
  const [activeView, setActiveView] = useState<'grid' | 'list' | 'tree'>('grid');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showTagManager, setShowTagManager] = useState(false);

  const tagCategories = [
    {
      id: 'test-type',
      name: 'Test Type',
      description: 'Categorize tests by their purpose and methodology',
      icon: Flag,
      color: 'from-blue-500 to-blue-700',
      tags: [
        { id: 'unit', name: 'Unit', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300', description: 'Individual component testing' },
        { id: 'integration', name: 'Integration', color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300', description: 'Component interaction testing' },
        { id: 'e2e', name: 'E2E', color: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300', description: 'End-to-end workflow testing' },
        { id: 'api', name: 'API', color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300', description: 'API endpoint testing' },
        { id: 'ui', name: 'UI', color: 'bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300', description: 'User interface testing' },
        { id: 'performance', name: 'Performance', color: 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300', description: 'Performance and load testing' }
      ]
    },
    {
      id: 'priority',
      name: 'Priority',
      description: 'Mark tests by execution priority',
      icon: Target,
      color: 'from-red-500 to-red-700',
      tags: [
        { id: 'critical', name: 'Critical', color: 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300', description: 'Must run immediately' },
        { id: 'high', name: 'High', color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300', description: 'High priority tests' },
        { id: 'medium', name: 'Medium', color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300', description: 'Standard priority' },
        { id: 'low', name: 'Low', color: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300', description: 'Low priority tests' }
      ]
    },
    {
      id: 'environment',
      name: 'Environment',
      description: 'Specify target test environments',
      icon: Globe,
      color: 'from-green-500 to-green-700',
      tags: [
        { id: 'dev', name: 'Dev', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300', description: 'Development environment' },
        { id: 'staging', name: 'Staging', color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300', description: 'Staging environment' },
        { id: 'production', name: 'Production', color: 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300', description: 'Production environment' },
        { id: 'local', name: 'Local', color: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300', description: 'Local testing' }
      ]
    },
    {
      id: 'device',
      name: 'Device/Platform',
      description: 'Target specific devices or platforms',
      icon: Smartphone,
      color: 'from-purple-500 to-purple-700',
      tags: [
        { id: 'desktop', name: 'Desktop', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300', description: 'Desktop browser testing' },
        { id: 'mobile', name: 'Mobile', color: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300', description: 'Mobile device testing' },
        { id: 'tablet', name: 'Tablet', color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300', description: 'Tablet testing' },
        { id: 'ios', name: 'iOS', color: 'bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300', description: 'iOS platform' },
        { id: 'android', name: 'Android', color: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300', description: 'Android platform' }
      ]
    },
    {
      id: 'feature',
      name: 'Feature',
      description: 'Group tests by application features',
      icon: Package,
      color: 'from-orange-500 to-orange-700',
      tags: [
        { id: 'authentication', name: 'Authentication', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300', description: 'Login and security' },
        { id: 'payment', name: 'Payment', color: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300', description: 'Payment processing' },
        { id: 'search', name: 'Search', color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300', description: 'Search functionality' },
        { id: 'checkout', name: 'Checkout', color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300', description: 'Checkout process' },
        { id: 'user-profile', name: 'User Profile', color: 'bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300', description: 'User management' }
      ]
    },
    {
      id: 'execution',
      name: 'Execution',
      description: 'Define execution characteristics',
      icon: Clock,
      color: 'from-indigo-500 to-indigo-700',
      tags: [
        { id: 'smoke', name: 'Smoke', color: 'bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300', description: 'Quick smoke tests' },
        { id: 'regression', name: 'Regression', color: 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300', description: 'Regression testing' },
        { id: 'sanity', name: 'Sanity', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300', description: 'Sanity checks' },
        { id: 'slow', name: 'Slow', color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300', description: 'Slow running tests' },
        { id: 'flaky', name: 'Flaky', color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300', description: 'Unstable tests' }
      ]
    }
  ];

  const testCases = [
    {
      id: 'login-success',
      name: 'Login Success Test',
      description: 'Validates successful user login with valid credentials',
      tags: ['unit', 'authentication', 'critical', 'dev', 'desktop', 'smoke'],
      status: 'passing',
      lastRun: '2 hours ago',
      duration: '2.3s'
    },
    {
      id: 'payment-processing',
      name: 'Payment Processing Test',
      description: 'Tests payment gateway integration and transaction processing',
      tags: ['integration', 'payment', 'critical', 'staging', 'desktop', 'regression'],
      status: 'passing',
      lastRun: '1 hour ago',
      duration: '5.1s'
    },
    {
      id: 'mobile-checkout',
      name: 'Mobile Checkout Test',
      description: 'End-to-end checkout flow on mobile devices',
      tags: ['e2e', 'checkout', 'high', 'production', 'mobile', 'regression'],
      status: 'failing',
      lastRun: '30 minutes ago',
      duration: '12.4s'
    },
    {
      id: 'search-api',
      name: 'Search API Test',
      description: 'Validates search API endpoints and response formats',
      tags: ['api', 'search', 'medium', 'dev', 'desktop', 'sanity'],
      status: 'passing',
      lastRun: '4 hours ago',
      duration: '1.2s'
    },
    {
      id: 'user-profile-ui',
      name: 'User Profile UI Test',
      description: 'Tests user profile interface and interactions',
      tags: ['ui', 'user-profile', 'medium', 'staging', 'desktop', 'regression'],
      status: 'passing',
      lastRun: '3 hours ago',
      duration: '8.7s'
    },
    {
      id: 'performance-load',
      name: 'Performance Load Test',
      description: 'Load testing for application performance',
      tags: ['performance', 'slow', 'high', 'staging', 'desktop', 'regression'],
      status: 'passing',
      lastRun: '6 hours ago',
      duration: '300s'
    }
  ];

  const getAllTags = () => {
    return tagCategories.flatMap(category => category.tags);
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const getTagById = (tagId: string) => {
    return getAllTags().find(tag => tag.id === tagId);
  };

  const filteredTestCases = testCases.filter(testCase => {
    const matchesSearch = testCase.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testCase.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tagId => testCase.tags.includes(tagId));
    return matchesSearch && matchesTags;
  });

  const getTagStats = () => {
    const stats: Record<string, number> = {};
    testCases.forEach(testCase => {
      testCase.tags.forEach(tag => {
        stats[tag] = (stats[tag] || 0) + 1;
      });
    });
    return stats;
  };

  const tagStats = getTagStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900/20">
      <PageHeader
        title="Test Tagging"
        description="Master comprehensive test tagging strategies to organize, categorize, and manage your test suite efficiently with advanced filtering and search capabilities"
        icon={Tag}
        colorTheme="purple"
        badges={[
          { label: 'Test Tagging', variant: 'secondary' },
          { label: 'Tag Management', variant: 'secondary' },
          { label: 'Test Organization', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Overview Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tag className="w-6 h-6 text-purple-500" />
              Understanding Test Tagging
            </CardTitle>
            <CardDescription>
              Learn how to effectively tag and categorize tests for better organization and management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Hash className="w-5 h-5 text-purple-500" />
                What is Test Tagging?
              </h4>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Test tagging is the practice of adding descriptive labels or tags to test cases to 
                categorize them based on various criteria such as test type, priority, environment, 
                feature, or execution characteristics. This enables efficient test management, 
                filtering, and execution.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Organization</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Group related tests together for better organization and navigation
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Filtering</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Quickly filter and find specific tests based on tags
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Execution</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Run specific subsets of tests based on tag combinations
                  </p>
                </div>
              </div>
            </div>

            {/* Tag Categories */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-purple-500" />
                Tag Categories
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tagCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div key={category.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-900 dark:text-slate-100">{category.name}</h5>
                          <p className="text-xs text-slate-500">{category.tags.length} tags</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{category.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {category.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag.id} className={`text-xs ${tag.color}`}>
                            {tag.name}
                          </Badge>
                        ))}
                        {category.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Tag Manager */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TagIcon className="w-6 h-6 text-purple-500" />
                Interactive Tag Manager
              </div>
              <Button
                variant={showTagManager ? 'default' : 'outline'}
                size="sm"
                onClick={() => setShowTagManager(!showTagManager)}
              >
                <Settings className="w-4 h-4 mr-1" />
                {showTagManager ? 'Hide' : 'Show'} Manager
              </Button>
            </CardTitle>
            <CardDescription>
              Manage tags and filter test cases interactively
            </CardDescription>
          </CardHeader>
          <CardContent>
            {showTagManager && (
              <div className="space-y-6">
                {/* Search and Filter */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search test cases..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-1" />
                    Filter
                  </Button>
                </div>

                {/* Tag Selection */}
                <div>
                  <h4 className="font-semibold mb-3">Select Tags to Filter:</h4>
                  <div className="space-y-4">
                    {tagCategories.map((category) => (
                      <div key={category.id}>
                        <div className="flex items-center gap-2 mb-2">
                          <category.icon className="w-4 h-4 text-purple-500" />
                          <span className="font-medium text-sm">{category.name}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.tags.map((tag) => (
                            <Badge
                              key={tag.id}
                              className={`cursor-pointer transition-all ${
                                selectedTags.includes(tag.id)
                                  ? `${tag.color} ring-2 ring-purple-400`
                                  : `${tag.color} opacity-70 hover:opacity-100`
                              }`}
                              onClick={() => toggleTag(tag.id)}
                            >
                              {tag.name}
                              {tagStats[tag.id] && (
                                <span className="ml-1 text-xs">({tagStats[tag.id]})</span>
                              )}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selected Tags Summary */}
                {selectedTags.length > 0 && (
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300">
                        Selected Tags ({selectedTags.length})
                      </h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedTags([])}
                      >
                        <X className="w-3 h-3 mr-1" />
                        Clear All
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedTags.map((tagId) => {
                        const tag = getTagById(tagId);
                        if (!tag) return null;
                        return (
                          <Badge key={tagId} className={`${tag.color}`}>
                            {tag.name}
                            <button
                              onClick={() => toggleTag(tagId)}
                              className="ml-1 hover:text-purple-600"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Test Cases Display */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-purple-500" />
                Test Cases ({filteredTestCases.length})
              </div>
              <div className="flex items-center gap-2">
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
              Browse and filter test cases by tags
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activeView === 'grid' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTestCases.map((testCase) => (
                  <div key={testCase.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{testCase.name}</h4>
                      <div className={`w-2 h-2 rounded-full ${
                        testCase.status === 'passing' ? 'bg-green-500' : 'bg-red-500'
                      }`} />
                    </div>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{testCase.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {testCase.tags.map((tagId) => {
                        const tag = getTagById(tagId);
                        if (!tag) return null;
                        return (
                          <Badge key={tagId} className={`text-xs ${tag.color}`}>
                            {tag.name}
                          </Badge>
                        );
                      })}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{testCase.lastRun}</span>
                      <span>{testCase.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeView === 'list' && (
              <div className="space-y-2">
                {filteredTestCases.map((testCase) => (
                  <div key={testCase.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full ${
                          testCase.status === 'passing' ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">{testCase.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{testCase.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex flex-wrap gap-1">
                          {testCase.tags.map((tagId) => {
                            const tag = getTagById(tagId);
                            if (!tag) return null;
                            return (
                              <Badge key={tagId} className={`text-xs ${tag.color}`}>
                                {tag.name}
                              </Badge>
                            );
                          })}
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-slate-500">{testCase.lastRun}</div>
                          <div className="text-xs text-slate-500">{testCase.duration}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-purple-500" />
              Best Practices for Test Tagging
            </CardTitle>
            <CardDescription>
              Industry-standard approaches to effective test tagging
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400">Tag Management</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400">1</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Consistent Naming</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Use consistent naming conventions across all tags
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400">2</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Meaningful Categories</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Create logical categories that make sense for your project
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400">3</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Regular Maintenance</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Review and clean up unused tags regularly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400">Usage Guidelines</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400">4</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Avoid Over-tagging</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Use a reasonable number of tags per test case
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400">5</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Document Tag Meanings</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Maintain documentation for tag definitions and usage
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400">6</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Team Consensus</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Ensure team agreement on tagging standards
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
            Effective test tagging is essential for managing large test suites. By implementing a 
            comprehensive tagging strategy with clear categories and consistent naming conventions, 
            teams can significantly improve test organization, filtering capabilities, and overall 
            testing efficiency.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

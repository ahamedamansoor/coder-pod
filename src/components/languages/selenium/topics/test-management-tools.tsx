'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Settings,
  BarChart3,
  Calendar,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Zap,
  Database,
  Globe,
  Shield,
  Smartphone,
  Code,
  Eye,
  Play,
  Pause,
  RefreshCw,
  Download,
  Upload,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Copy,
  FileText,
  FolderOpen,
  GitBranch,
  Activity,
  Target,
  Award,
  Star,
  Layers,
  Grid3X3,
  List,
  Monitor,
  Server,
  Cloud,
  Lock,
  Unlock,
  Key,
  Terminal,
  Cpu,
  HardDrive,
  Wifi,
  Network,
  Plug,
  Zap as ZapIcon,
  Rocket,
  Package,
  Archive,
  TestTube,
  FlaskConical,
  Microscope,
  Bug,
  Lightbulb,
  Wrench,
  Hammer,
  Cog,
  Gauge,
  Timer,
  ChartLine,
  ChartBar,
  ChartPie,
  FileSpreadsheet,
  FileCode,
  FileCheck,
  FileSearch,
  FilePlus,
  FileMinus
} from 'lucide-react';

type CategoryId = 'execution' | 'reporting' | 'management' | 'integration';
type ActiveCategory = CategoryId | 'all';

type ToolCategory = {
  id: CategoryId;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
};

type TestTool = {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  icon: React.ElementType;
  features: string[];
  pricing: string;
  integration: string[];
  pros: string[];
  cons: string[];
  rating: number;
  website: string;
};

export default function TestManagementToolsComponent() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('all');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const toolCategories: ToolCategory[] = [
    {
      id: 'execution',
      name: 'Test Execution',
      description: 'Tools for running and managing test execution',
      icon: Play,
      color: 'from-green-500 to-green-700'
    },
    {
      id: 'reporting',
      name: 'Test Reporting',
      description: 'Tools for generating and analyzing test reports',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'management',
      name: 'Test Management',
      description: 'Tools for managing test cases and test data',
      icon: Settings,
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 'integration',
      name: 'CI/CD Integration',
      description: 'Tools for integrating tests into CI/CD pipelines',
      icon: GitBranch,
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const testTools: TestTool[] = [
    // Test Execution Tools
    {
      id: 'selenium-grid',
      name: 'Selenium Grid',
      category: 'execution',
      description: 'Distributed test execution across multiple browsers and platforms',
      icon: Globe,
      features: ['Parallel execution', 'Cross-browser testing', 'Remote execution', 'Load balancing'],
      pricing: 'Free (Open Source)',
      integration: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps'],
      pros: ['Scalable', 'Cross-platform', 'Large community', 'Free'],
      cons: ['Complex setup', 'Resource intensive', 'Maintenance overhead'],
      rating: 4.5,
      website: 'https://www.selenium.dev/documentation/grid/'
    },
    {
      id: 'testng',
      name: 'TestNG',
      category: 'execution',
      description: 'Advanced testing framework for Java with powerful annotations',
      icon: Code,
      features: ['Annotations', 'Data providers', 'Parallel execution', 'Test dependencies'],
      pricing: 'Free (Open Source)',
      integration: ['Maven', 'Gradle', 'Jenkins', 'Eclipse'],
      pros: ['Flexible', 'Powerful features', 'Good documentation', 'IDE support'],
      cons: ['Java only', 'Learning curve', 'Configuration complexity'],
      rating: 4.3,
      website: 'https://testng.org/'
    },
    {
      id: 'pytest',
      name: 'Pytest',
      category: 'execution',
      description: 'Powerful testing framework for Python with simple syntax',
      icon: Code,
      features: ['Fixtures', 'Parametrized tests', 'Plugins', 'Assertions'],
      pricing: 'Free (Open Source)',
      integration: ['pip', 'tox', 'Jenkins', 'GitHub Actions'],
      pros: ['Easy to use', 'Extensible', 'Great documentation', 'Active community'],
      cons: ['Python only', 'Plugin dependencies', 'Performance overhead'],
      rating: 4.7,
      website: 'https://pytest.org/'
    },
    {
      id: 'jest',
      name: 'Jest',
      category: 'execution',
      description: 'JavaScript testing framework with focus on simplicity',
      icon: Code,
      features: ['Snapshot testing', 'Mocking', 'Coverage', 'Parallel execution'],
      pricing: 'Free (Open Source)',
      integration: ['npm', 'Yarn', 'Jenkins', 'GitHub Actions'],
      pros: ['Fast', 'Easy setup', 'Great features', 'Facebook backing'],
      cons: ['JavaScript only', 'Memory usage', 'Configuration limits'],
      rating: 4.6,
      website: 'https://jestjs.io/'
    },
    
    // Test Reporting Tools
    {
      id: 'allure',
      name: 'Allure Report',
      category: 'reporting',
      description: 'Advanced test reporting framework with rich visualizations',
      icon: BarChart3,
      features: ['Interactive reports', 'Test history', 'Attachments', 'Categories'],
      pricing: 'Free (Open Source)',
      integration: ['TestNG', 'Pytest', 'Jest', 'Jenkins'],
      pros: ['Beautiful reports', 'Rich features', 'Multiple languages', 'Free'],
      cons: ['Setup complexity', 'Resource usage', 'Learning curve'],
      rating: 4.4,
      website: 'https://allurereport.org/'
    },
    {
      id: 'extent-reports',
      name: 'Extent Reports',
      category: 'reporting',
      description: 'Professional HTML reporting with customizable views',
      icon: FileText,
      features: ['HTML reports', 'Screenshots', 'Logs', 'Test categorization'],
      pricing: 'Free (Community) / $299 (Pro)',
      integration: ['TestNG', 'JUnit', 'Pytest', 'Jenkins'],
      pros: ['Professional look', 'Easy integration', 'Good features', 'Support'],
      cons: ['License cost', 'Limited free version', 'Java focus'],
      rating: 4.2,
      website: 'https://extentreports.com/'
    },
    {
      id: 'testrail',
      name: 'TestRail',
      category: 'reporting',
      description: 'Comprehensive test management and reporting platform',
      icon: BarChart3,
      features: ['Test cases', 'Test runs', 'Reports', 'Metrics'],
      pricing: '$34/user/month',
      integration: ['Jira', 'Jenkins', 'GitHub', 'Azure DevOps'],
      pros: ['Complete solution', 'Great UI', 'API access', 'Support'],
      cons: ['Expensive', 'Cloud dependency', 'Learning curve'],
      rating: 4.3,
      website: 'https://www.gurock.com/testrail/'
    },
    
    // Test Management Tools
    {
      id: 'testlink',
      name: 'TestLink',
      category: 'management',
      description: 'Open source test management system',
      icon: Settings,
      features: ['Test cases', 'Test plans', 'Requirements', 'Execution tracking'],
      pricing: 'Free (Open Source)',
      integration: ['Bugzilla', 'Mantis', 'Jira', 'Jenkins'],
      pros: ['Free', 'Feature rich', 'Customizable', 'Active community'],
      cons: ['Outdated UI', 'Complex setup', 'Limited support'],
      rating: 3.8,
      website: 'https://testlink.org/'
    },
    {
      id: 'qase',
      name: 'Qase',
      category: 'management',
      description: 'Modern test management platform with collaboration features',
      icon: Users,
      features: ['Test cases', 'Test runs', 'Collaboration', 'API'],
      pricing: '$8/user/month',
      integration: ['Jira', 'GitHub', 'Slack', 'Jenkins'],
      pros: ['Modern UI', 'Good features', 'API access', 'Collaboration'],
      cons: ['New platform', 'Limited features', 'Learning curve'],
      rating: 4.1,
      website: 'https://qase.io/'
    },
    {
      id: 'practitest',
      name: 'PractiTest',
      category: 'management',
      description: 'End-to-end test management solution',
      icon: Target,
      features: ['Test management', 'Requirements', 'Reports', 'Integrations'],
      pricing: '$39/user/month',
      integration: ['Jira', 'Jenkins', 'Azure DevOps', 'Salesforce'],
      pros: ['Complete solution', 'Great support', 'Customizable', 'Enterprise ready'],
      cons: ['Expensive', 'Complex', 'Learning curve'],
      rating: 4.2,
      website: 'https://www.practitest.com/'
    },
    
    // CI/CD Integration Tools
    {
      id: 'jenkins',
      name: 'Jenkins',
      category: 'integration',
      description: 'Open source automation server with extensive plugin ecosystem',
      icon: Server,
      features: ['Pipeline as code', 'Distributed builds', 'Plugins', 'Notifications'],
      pricing: 'Free (Open Source)',
      integration: ['Git', 'Maven', 'Docker', 'Kubernetes'],
      pros: ['Free', 'Extensible', 'Large community', 'Flexible'],
      cons: ['Complex setup', 'Resource intensive', 'UI outdated'],
      rating: 4.0,
      website: 'https://www.jenkins.io/'
    },
    {
      id: 'github-actions',
      name: 'GitHub Actions',
      category: 'integration',
      description: 'CI/CD platform directly integrated with GitHub',
      icon: GitBranch,
      features: ['Workflow automation', 'Parallel jobs', 'Matrix builds', 'Secrets management'],
      pricing: 'Free tier / $0.008/minute',
      integration: ['GitHub', 'Docker', 'AWS', 'Azure'],
      pros: ['Easy setup', 'GitHub integration', 'Free tier', 'Growing ecosystem'],
      cons: ['GitHub dependency', 'Pricing complexity', 'Limited features'],
      rating: 4.5,
      website: 'https://github.com/features/actions'
    },
    {
      id: 'gitlab-ci',
      name: 'GitLab CI/CD',
      category: 'integration',
      description: 'Built-in CI/CD pipeline for GitLab repositories',
      icon: GitBranch,
      features: ['Auto DevOps', 'Pipeline visualization', 'Docker support', 'Kubernetes integration'],
      pricing: 'Free tier / $29/user/month',
      integration: ['GitLab', 'Docker', 'Kubernetes', 'Jira'],
      pros: ['Integrated solution', 'Auto DevOps', 'Free tier', 'Good features'],
      cons: ['GitLab dependency', 'Complex features', 'Learning curve'],
      rating: 4.3,
      website: 'https://docs.gitlab.com/ee/ci/'
    }
  ];

  const filteredTools = activeCategory === 'all' 
    ? testTools 
    : testTools.filter(tool => tool.category === activeCategory);

  const getToolIcon = (toolId: string) => {
    const tool = testTools.find(t => t.id === toolId);
    return tool?.icon || Wrench;
  };

  const getCategoryIcon = (categoryId: CategoryId) => {
    const category = toolCategories.find(c => c.id === categoryId);
    return category?.icon || Settings;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'
            }`}
          />
        ))}
        <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
      <PageHeader
        title="Test Management Tools"
        description="Explore comprehensive test management tools and platforms for organizing, executing, and managing your test automation ecosystem with advanced features and integrations"
        icon={Wrench}
        colorTheme="blue"
        badges={[
          { label: 'Test Management', variant: 'secondary' },
          { label: 'Tool Comparison', variant: 'secondary' },
          { label: 'Integration Guide', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Overview Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="w-6 h-6 text-blue-500" />
              Understanding Test Management Tools
            </CardTitle>
            <CardDescription>
              Learn about different categories of test management tools and how to choose the right ones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-500" />
                What are Test Management Tools?
              </h4>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Test management tools are software applications that help teams plan, execute, and track 
                testing activities. They provide centralized platforms for managing test cases, test 
                execution, reporting, and collaboration among team members.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Centralized Management</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Single platform for all testing activities and artifacts
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Collaboration</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Enable team collaboration and communication
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Traceability</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Track requirements, tests, and defects relationships
                  </p>
                </div>
              </div>
            </div>

            {/* Tool Categories */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-500" />
                Tool Categories
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {toolCategories.map((category) => {
                  const Icon = category.icon;
                  const categoryTools = testTools.filter(tool => tool.category === category.id);
                  return (
                    <div key={category.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-900 dark:text-slate-100">{category.name}</h5>
                          <p className="text-xs text-slate-500">{categoryTools.length} tools</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{category.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tool Categories Filter */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-6 h-6 text-blue-500" />
              Browse by Category
            </CardTitle>
            <CardDescription>
              Filter tools by category to find the right solution for your needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              <Button
                variant={activeCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory('all')}
              >
                All Tools ({testTools.length})
              </Button>
              {toolCategories.map((category) => {
                const Icon = category.icon;
                const categoryTools = testTools.filter(tool => tool.category === category.id);
                return (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {category.name} ({categoryTools.length})
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Tools Grid */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Grid3X3 className="w-6 h-6 text-blue-500" />
              Available Tools ({filteredTools.length})
            </CardTitle>
            <CardDescription>
              Comprehensive comparison of test management tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => {
                const Icon = tool.icon;
                const CategoryIcon = getCategoryIcon(tool.category);
                return (
                  <div key={tool.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700">
                          <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-slate-100">{tool.name}</h3>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <CategoryIcon className="w-3 h-3" />
                            {toolCategories.find(c => c.id === tool.category)?.name}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {tool.pricing}
                      </Badge>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{tool.description}</p>

                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {tool.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {tool.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{tool.features.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      {renderStars(tool.rating)}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Pros:</span>
                        <span className="text-green-600">{tool.pros.length} benefits</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Cons:</span>
                        <span className="text-red-600">{tool.cons.length} limitations</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="w-3 h-3 mr-1" />
                        Details
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Visit
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Tool Comparison */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-500" />
              Tool Comparison Matrix
            </CardTitle>
            <CardDescription>
              Compare popular test management tools across key criteria
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900">
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700">Tool</th>
                    <th className="text-center p-3 border border-slate-200 dark:border-slate-700">Category</th>
                    <th className="text-center p-3 border border-slate-200 dark:border-slate-700">Pricing</th>
                    <th className="text-center p-3 border border-slate-200 dark:border-slate-700">Rating</th>
                    <th className="text-center p-3 border border-slate-200 dark:border-slate-700">Open Source</th>
                    <th className="text-center p-3 border border-slate-200 dark:border-slate-700">Cloud</th>
                    <th className="text-center p-3 border border-slate-200 dark:border-slate-700">API</th>
                  </tr>
                </thead>
                <tbody>
                  {testTools.slice(0, 8).map((tool) => (
                    <tr key={tool.id} className="hover:bg-slate-50 dark:hover:bg-slate-900">
                      <td className="p-3 border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-2">
                          <tool.icon className="w-4 h-4" />
                          <span className="font-medium">{tool.name}</span>
                        </div>
                      </td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 text-center">
                        <Badge variant="secondary" className="text-xs">
                          {toolCategories.find(c => c.id === tool.category)?.name}
                        </Badge>
                      </td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 text-center text-sm">
                        {tool.pricing}
                      </td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 text-center">
                        {renderStars(tool.rating)}
                      </td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 text-center">
                        {tool.pricing.includes('Free') ? (
                          <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 text-center">
                        {['testrail', 'qase', 'practitest', 'github-actions', 'gitlab-ci'].includes(tool.id) ? (
                          <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-3 border border-slate-200 dark:border-slate-700 text-center">
                        {['testrail', 'qase', 'practitest', 'jenkins', 'github-actions', 'gitlab-ci'].includes(tool.id) ? (
                          <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-blue-500" />
              Choosing the Right Tool
            </CardTitle>
            <CardDescription>
              Guidelines for selecting the best test management tools for your needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Evaluation Criteria</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">1</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Team Size and Structure</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Consider team size, distribution, and collaboration needs
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">2</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Budget Constraints</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Evaluate licensing costs, maintenance, and ROI
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">3</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Technical Requirements</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Assess integration needs, scalability, and technical compatibility
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Implementation Strategy</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">4</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Start Small</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Begin with pilot projects to validate tool suitability
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">5</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Team Training</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Invest in proper training and documentation
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">6</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Continuous Evaluation</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Regularly assess tool effectiveness and ROI
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
            Choosing the right test management tools is crucial for successful test automation. 
            Consider your team size, budget, technical requirements, and long-term goals when 
            selecting tools. Start with pilot implementations and continuously evaluate effectiveness 
            to ensure you're getting the best ROI from your tool investments.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

// ExternalLink component for the website links
const ExternalLink = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// X component for table
const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

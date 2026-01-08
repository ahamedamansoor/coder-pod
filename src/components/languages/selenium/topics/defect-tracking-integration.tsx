'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Bug,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
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
  FileMinus,
  GitBranch,
  Activity,
  Target,
  Award,
  Star,
  Flag,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Copy,
  ExternalLink,
  MessageSquare,
  Bell,
  Mail,
  Phone,
  MapPin,
  Link,
  Unlink,
  RefreshCw,
  Download,
  Upload,
  Save,
  FolderOpen,
  Folder,
  FileText,
  File,
  Image,
  Video,
  Camera,
  Mic,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  FastForward,
  Rewind,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Diamond,
  Heart,
  Bolt,
  Sparkles,
  Flame,
  Snowflake,
  Wind,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Sun,
  Moon,
  Star as StarIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
  Cloud as CloudIcon,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  Wind as WindIcon,
  Flame as FlameIcon,
  Snowflake as SnowflakeIcon,
  Bolt as BoltIcon,
  Sparkles as SparklesIcon
} from 'lucide-react';

export default function DefectTrackingIntegrationComponent() {
  const [activeView, setActiveView] = useState<'overview' | 'integration' | 'workflow' | 'tools'>('overview');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [showWorkflow, setShowWorkflow] = useState(false);

  const defectTrackingTools = [
    {
      id: 'jira',
      name: 'Jira',
      description: 'Comprehensive issue tracking and project management platform',
      icon: Bug,
      features: ['Issue tracking', 'Project management', 'Agile boards', 'Reporting'],
      pricing: '$7.50/user/month',
      integration: ['Selenium', 'TestNG', 'Jenkins', 'GitHub'],
      pros: ['Feature rich', 'Great UI', 'Extensive integrations', 'Scalable'],
      cons: ['Expensive', 'Complex setup', 'Learning curve', 'Performance issues'],
      rating: 4.3,
      website: 'https://www.atlassian.com/software/jira'
    },
    {
      id: 'bugzilla',
      name: 'Bugzilla',
      description: 'Open source bug tracking system by Mozilla',
      icon: Bug,
      features: ['Bug tracking', 'Email notifications', 'Search', 'Reports'],
      pricing: 'Free (Open Source)',
      integration: ['Selenium', 'TestNG', 'Jenkins', 'Custom APIs'],
      pros: ['Free', 'Reliable', 'Customizable', 'Mature'],
      cons: ['Outdated UI', 'Complex setup', 'Limited features', 'Steep learning curve'],
      rating: 3.8,
      website: 'https://www.bugzilla.org/'
    },
    {
      id: 'mantis',
      name: 'MantisBT',
      description: 'Open source issue tracker with simple interface',
      icon: Bug,
      features: ['Issue tracking', 'Email notifications', 'Time tracking', 'Charts'],
      pricing: 'Free (Open Source)',
      integration: ['Selenium', 'TestNG', 'Jenkins', 'REST API'],
      pros: ['Free', 'Simple', 'Lightweight', 'Easy to customize'],
      cons: ['Basic features', 'Limited scalability', 'Outdated design', 'Poor mobile support'],
      rating: 3.5,
      website: 'https://www.mantisbt.org/'
    },
    {
      id: 'azure-devops',
      name: 'Azure DevOps',
      description: 'Complete DevOps solution with work item tracking',
      icon: Cloud,
      features: ['Work items', 'Boards', 'Pipelines', 'Test plans'],
      pricing: '$6/user/month',
      integration: ['Selenium', 'TestNG', 'Azure Pipelines', 'GitHub'],
      pros: ['Integrated solution', 'Great features', 'Microsoft support', 'Scalable'],
      cons: ['Microsoft lock-in', 'Complex', 'Expensive', 'Performance issues'],
      rating: 4.1,
      website: 'https://azure.microsoft.com/en-us/services/devops/'
    },
    {
      id: 'youtrack',
      name: 'YouTrack',
      description: 'Modern issue tracking and project management tool',
      icon: Target,
      features: ['Issue tracking', 'Agile boards', 'Time tracking', 'Reports'],
      pricing: '$8/user/month',
      integration: ['Selenium', 'TestNG', 'Jenkins', 'GitHub'],
      pros: ['Modern UI', 'Great features', 'Fast', 'Good integrations'],
      cons: ['Expensive', 'Learning curve', 'Limited customization', 'Resource intensive'],
      rating: 4.2,
      website: 'https://www.jetbrains.com/youtrack/'
    },
    {
      id: 'redmine',
      name: 'Redmine',
      description: 'Open source project management and issue tracking',
      icon: Target,
      features: ['Issue tracking', 'Project management', 'Time tracking', 'Gantt charts'],
      pricing: 'Free (Open Source)',
      integration: ['Selenium', 'TestNG', 'Jenkins', 'REST API'],
      pros: ['Free', 'Flexible', 'Plugin ecosystem', 'Multi-project'],
      cons: ['Outdated UI', 'Complex setup', 'Maintenance overhead', 'Limited support'],
      rating: 3.7,
      website: 'https://www.redmine.org/'
    }
  ];

  const integrationSteps = [
    {
      id: 'test-failure',
      name: 'Test Failure Detection',
      description: 'Automatically detect test failures during execution',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-700',
      details: [
        'Test framework captures failure details',
        'Screenshots and logs are collected',
        'Error messages and stack traces captured',
        'Test environment information recorded'
      ]
    },
    {
      id: 'defect-analysis',
      name: 'Defect Analysis',
      description: 'Analyze test failure to determine if it\'s a new defect',
      icon: Search,
      color: 'from-orange-500 to-orange-700',
      details: [
        'Compare with known issues',
        'Check for duplicate defects',
        'Analyze failure patterns',
        'Determine defect severity and priority'
      ]
    },
    {
      id: 'defect-creation',
      name: 'Defect Creation',
      description: 'Create defect ticket in tracking system',
      icon: Plus,
      color: 'from-yellow-500 to-yellow-700',
      details: [
        'Populate defect template with failure details',
        'Attach screenshots and logs',
        'Set appropriate severity and priority',
        'Assign to relevant team members'
      ]
    },
    {
      id: 'notification',
      name: 'Team Notification',
      description: 'Notify relevant team members about new defect',
      icon: Bell,
      color: 'from-green-500 to-green-700',
      details: [
        'Send email notifications',
        'Update chat channels',
        'Trigger dashboard alerts',
        'Update project metrics'
      ]
    },
    {
      id: 'tracking',
      name: 'Defect Tracking',
      description: 'Track defect lifecycle and resolution',
      icon: Clock,
      color: 'from-blue-500 to-blue-700',
      details: [
        'Monitor defect status changes',
        'Track resolution progress',
        'Update test cases when fixed',
        'Close loop with verification'
      ]
    }
  ];

  const workflowExamples = [
    {
      id: 'selenium-jira',
      name: 'Selenium + Jira Integration',
      description: 'Automated defect creation from Selenium test failures',
      steps: [
        'Selenium test fails and captures details',
        'TestNG listener processes failure',
        'Jira REST API called with defect data',
        'Defect ticket created with attachments',
        'Team notified via email/slack',
        'Defect tracked through resolution'
      ],
      benefits: ['Automated reporting', 'Consistent data', 'Fast turnaround', 'Full traceability']
    },
    {
      id: 'pytest-bugzilla',
      name: 'Pytest + Bugzilla Integration',
      description: 'Open source defect tracking with Python tests',
      steps: [
        'Pytest test fails with assertion error',
        'Custom plugin captures failure details',
        'Bugzilla XML-RPC API called',
        'Bug created with test information',
        'Development team notified',
        'Bug status tracked in dashboard'
      ],
      benefits: ['Free solution', 'Customizable', 'Lightweight', 'Open source']
    },
    {
      id: 'jenkins-azure',
      name: 'Jenkins + Azure DevOps Integration',
      description: 'CI/CD pipeline with integrated defect tracking',
      steps: [
        'Jenkins pipeline runs automated tests',
        'Test failures trigger defect creation',
        'Azure DevOps work item created',
        'Build marked as failed',
        'Team alerted with defect details',
        'Defect linked to build for traceability'
      ],
      benefits: ['CI/CD integration', 'Build linkage', 'Automated triage', 'Full visibility']
    }
  ];

  const getToolIcon = (toolId: string) => {
    const tool = defectTrackingTools.find(t => t.id === toolId);
    return tool?.icon || Bug;
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
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background/20">
      <PageHeader
        title="Defect Tracking Integration"
        description="Master comprehensive defect tracking integration strategies to automate bug reporting, streamline issue management, and create seamless workflows between test automation and defect tracking systems"
        icon={Bug}
        category="Selenium · Test Management"
        colorTheme="red"
        badges={[
          { label: 'Defect Tracking', variant: 'secondary' },
          { label: 'Integration', variant: 'secondary' },
          { label: 'Automation', variant: 'secondary' }
        ]}
      />

      <div className="w-full px-4 py-8 space-y-8">
        {/* Overview Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bug className="w-6 h-6 text-red-500" />
              Understanding Defect Tracking Integration
            </CardTitle>
            <CardDescription>
              Learn how to integrate test automation with defect tracking systems for streamlined bug management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Bug className="w-5 h-5 text-red-500" />
                What is Defect Tracking Integration?
              </h4>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Defect tracking integration is the process of connecting your test automation framework 
                with defect tracking systems to automatically create, update, and manage bug reports 
                when tests fail. This eliminates manual bug reporting and ensures consistent, timely 
                defect management.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">Automation</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Automatically create defects when tests fail
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">Consistency</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Ensure consistent defect reporting format and data
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">Traceability</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Maintain clear link between test failures and defects
                  </p>
                </div>
              </div>
            </div>

            {/* Integration Benefits */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-red-500" />
                Integration Benefits
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3">For Development Teams</h5>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Faster defect detection and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Reduced manual effort in bug reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Better defect data and context</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Improved collaboration between QA and Dev</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3">For Business</h5>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Faster time to market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Reduced development costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Better product quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Improved customer satisfaction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration Workflow */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GitBranch className="w-6 h-6 text-red-500" />
                Integration Workflow
              </div>
              <Button
                variant={showWorkflow ? 'default' : 'outline'}
                size="sm"
                onClick={() => setShowWorkflow(!showWorkflow)}
              >
                <Activity className="w-4 h-4 mr-1" />
                {showWorkflow ? 'Hide' : 'Show'} Workflow
              </Button>
            </CardTitle>
            <CardDescription>
              Understand the step-by-step process of defect tracking integration
            </CardDescription>
          </CardHeader>
          <CardContent>
            {showWorkflow && (
              <div className="space-y-6">
                <div className="relative">
                  {/* Workflow Timeline */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
                  
                  {integrationSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.id} className="relative flex items-start gap-6 mb-8">
                        <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            {step.name}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 mb-4">{step.description}</p>
                          
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm text-slate-700 dark:text-slate-300">Key Activities:</h4>
                            <ul className="space-y-1">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Defect Tracking Tools */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tool className="w-6 h-6 text-red-500" />
              Popular Defect Tracking Tools
            </CardTitle>
            <CardDescription>
              Compare and choose the right defect tracking tool for your needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {defectTrackingTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div key={tool.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700">
                          <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-slate-100">{tool.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {tool.pricing}
                          </Badge>
                        </div>
                      </div>
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

        {/* Workflow Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-6 h-6 text-red-500" />
              Integration Examples
            </CardTitle>
            <CardDescription>
              Real-world examples of defect tracking integration implementations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {workflowExamples.map((example) => (
                <div key={example.id} className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {example.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{example.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-sm mb-3">Implementation Steps:</h4>
                      <ol className="space-y-2">
                        {example.steps.map((step, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm">
                            <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-red-600 dark:text-red-400">{index + 1}</span>
                            </div>
                            <span className="text-slate-600 dark:text-slate-400">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {example.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-400">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Code Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-6 h-6 text-red-500" />
              Implementation Examples
            </CardTitle>
            <CardDescription>
              Code examples for implementing defect tracking integration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 border border-slate-300 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">Selenium + Jira Integration</span>
                </div>
                <pre className="text-sm text-slate-800 dark:text-slate-300 overflow-x-auto">
{`import org.openqa.selenium.*;
import org.openqa.selenium.support.*;
import net.rcarz.jiraclient.*;

public class JiraIntegration {
    private JiraClient jiraClient;
    
    public JiraIntegration(String jiraUrl, String username, String password) {
        this.jiraClient = new JiraClient(jiraUrl, username, password);
    }
    
    public void createDefectFromTestFailure(String testName, String errorMessage, 
                                         String stackTrace, WebDriver driver) {
        try {
            // Take screenshot
            File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            
            // Create issue
            Issue issue = jiraClient.createIssue("TEST", "Bug")
                .field(Field.SUMMARY, "Test Failure: " + testName)
                .field(Field.DESCRIPTION, "Test failed with error: " + errorMessage + 
                                      "\\n\\nStack Trace:\\n" + stackTrace)
                .execute();
            
            // Attach screenshot
            jiraClient.addAttachment(issue.getKey(), screenshot);
            
            System.out.println("Created defect: " + issue.getKey());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`}
                </pre>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 border border-slate-300 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">Pytest + Bugzilla Integration</span>
                </div>
                <pre className="text-sm text-slate-800 dark:text-slate-300 overflow-x-auto">
{`import pytest
import xmlrpc.client
from datetime import datetime

class BugzillaIntegration:
    def __init__(self, url, username, password):
        self.proxy = xmlrpc.client.ServerProxy(url)
        self.username = username
        self.password = password
    
    def create_bug_from_test_failure(self, test_name, error_message, traceback_info):
        try:
            # Login to Bugzilla
            self.proxy.User.login({'login': self.username, 'password': self.password})
            
            # Create bug
            bug_data = {
                'product': 'Test Application',
                'component': 'Automation',
                'summary': f'Test Failure: {test_name}',
                'description': f'Test failed with error: {error_message}\\n\\nTraceback:\\n{traceback_info}',
                'version': '1.0',
                'op_sys': 'All',
                'platform': 'All',
                'severity': 'normal',
                'priority': 'P2'
            }
            
            bug_id = self.proxy.Bug.create(bug_data)
            print(f"Created bug: {bug_id}")
            
            return bug_id
        except Exception as e:
            print(f"Error creating bug: {e}")
            return None

@pytest.hookimpl(tryfirst=True, hookwrapper=True)
def pytest_runtest_makereport(item, call):
    outcome = yield
    rep = outcome.get_result()
    
    if rep.when == "call" and rep.failed:
        bugzilla = BugzillaIntegration("https://bugzilla.example.com/xmlrpc.cgi", 
                                      "user@example.com", "password")
        bugzilla.create_bug_from_test_failure(
            item.name, 
            str(rep.longrepr), 
            rep.longreprtext
        )
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-red-500" />
              Best Practices for Defect Tracking Integration
            </CardTitle>
            <CardDescription>
              Industry-standard approaches to effective defect tracking integration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-red-600 dark:text-red-400">Integration Guidelines</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-red-600 dark:text-red-400">1</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Automate Judiciously</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Not all test failures should create defects - use smart filtering
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-red-600 dark:text-red-400">2</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Rich Context</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Include screenshots, logs, and environment information
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-red-600 dark:text-red-400">3</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Duplicate Detection</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Check for existing defects before creating new ones
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-red-600 dark:text-red-400">Quality Assurance</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-red-600 dark:text-red-400">4</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Validate Data</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Ensure defect data is accurate and complete
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-red-600 dark:text-red-400">5</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Monitor Integration</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Track integration health and performance
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-red-600 dark:text-red-400">6</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Feedback Loop</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Collect feedback from teams and improve integration
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
          Effective defect tracking integration is essential for modern software development. 
          By automating defect creation and management, teams can significantly reduce the 
          time between bug detection and resolution, improve communication, and maintain 
          better quality standards throughout the development lifecycle.
        </AlertDescription>
      </Alert>
      </div>
    </div>
  );
}

// Tool component for the tools grid
const Tool = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

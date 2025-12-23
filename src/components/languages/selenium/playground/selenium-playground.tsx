'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Target, 
  Clock, 
  MousePointer, 
  FormInput, 
  Table, 
  Layers,
  Zap,
  CheckCircle,
  Code,
  Monitor
} from 'lucide-react';
import { useSeleniumPlayground } from '../playground/selenium-playground-context';
import { SeleniumPlaygroundModal } from '../playground/selenium-playground-modal';
import { PageHeader } from '@/components/shared/page-header';

export function SeleniumPlayground() {
  const { openPlayground } = useSeleniumPlayground();

  const playgroundFeatures = [
    {
      icon: Target,
      title: 'Locator Tester',
      description: 'Practice CSS selectors and XPath expressions with real-time highlighting',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      icon: Clock,
      title: 'Wait Visualizer',
      description: 'Understand implicit, explicit, and fluent waits with visual demonstrations',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
    },
    {
      icon: MousePointer,
      title: 'Actions Demo',
      description: 'Practice complex mouse and keyboard interactions using the Actions class',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    },
    {
      icon: Layers,
      title: 'Practice Page',
      description: 'Interactive HTML elements for testing various Selenium operations',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
    },
    {
      icon: FormInput,
      title: 'Forms Playground',
      description: 'Master form interactions including inputs, checkboxes, and dropdowns',
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/20',
    },
    {
      icon: Table,
      title: 'Tables & Data Grids',
      description: 'Learn to handle dynamic tables, sorting, filtering, and pagination',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100 dark:bg-teal-900/20',
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Play}
        title="Selenium Interactive Playground"
        subtitle="Practice Selenium concepts in a safe, interactive environment with real-time feedback and visual demos."
        centered
        action={
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge variant="default" className="text-sm px-3 py-1">
              <CheckCircle className="w-3 h-3 mr-1" />
              Interactive
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Code className="w-3 h-3 mr-1" />
              Code Generation
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              <Monitor className="w-3 h-3 mr-1" />
              Visual Learning
            </Badge>
          </div>
        }
      />

      {/* Main CTA */}
      <Card className="p-8 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border-green-200 dark:border-green-800">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-green-900 dark:text-green-100">
            Ready to Start Practicing?
          </h2>
          <p className="text-lg text-green-800 dark:text-green-200 max-w-2xl mx-auto">
            Launch the interactive playground and start mastering Selenium with hands-on exercises. 
            No setup required - everything runs in your browser!
          </p>
          <Button
            onClick={() => openPlayground('practice')}
            size="lg"
            className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold px-8 py-3 text-lg"
          >
            <Play className="w-5 h-5 mr-2" />
            Launch Playground
          </Button>
        </div>
      </Card>

      {/* Features Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">What You Can Practice</h2>
          <p className="text-muted-foreground">
            Each playground section focuses on specific Selenium skills with interactive examples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playgroundFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
              onClick={() => openPlayground(
                feature.title === 'Locator Tester' ? 'locators' :
                feature.title === 'Wait Visualizer' ? 'waits' :
                feature.title === 'Actions Demo' ? 'actions' :
                feature.title === 'Forms Playground' ? 'forms' :
                feature.title === 'Tables & Data Grids' ? 'tables' :
                'practice'
              )}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-primary font-medium">
                    <span>Try it now</span>
                    <Play className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            How It Works
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold text-blue-600">
                1
              </div>
              <div>
                <p className="font-medium">Choose a Practice Area</p>
                <p className="text-sm text-muted-foreground">
                  Select from locators, waits, actions, forms, or tables
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold text-blue-600">
                2
              </div>
              <div>
                <p className="font-medium">Interact with Elements</p>
                <p className="text-sm text-muted-foreground">
                  Click, type, and manipulate the interactive elements
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold text-blue-600">
                3
              </div>
              <div>
                <p className="font-medium">Get Instant Feedback</p>
                <p className="text-sm text-muted-foreground">
                  See your actions highlighted and get generated code
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold text-blue-600">
                4
              </div>
              <div>
                <p className="font-medium">Copy Real Code</p>
                <p className="text-sm text-muted-foreground">
                  Export working Selenium code in Python, Java, or JavaScript
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Learning Benefits
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Visual Feedback</p>
                <p className="text-xs text-muted-foreground">
                  See exactly which elements match your locators
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Safe Environment</p>
                <p className="text-xs text-muted-foreground">
                  Practice without breaking real applications
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Real Scenarios</p>
                <p className="text-xs text-muted-foreground">
                  Work with common web automation challenges
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Code Generation</p>
                <p className="text-xs text-muted-foreground">
                  Get working code examples in multiple languages
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">No Setup Required</p>
                <p className="text-xs text-muted-foreground">
                  Start practicing immediately in your browser
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Tips Section */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">
              Pro Tips for Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800 dark:text-blue-200">
              <div className="space-y-2">
                <p>• Start with the Locator Tester to understand element selection</p>
                <p>• Use the Wait Visualizer to master synchronization concepts</p>
                <p>• Practice complex interactions with the Actions Demo</p>
              </div>
              <div className="space-y-2">
                <p>• Test form handling with the Forms Playground</p>
                <p>• Learn table operations with dynamic data examples</p>
                <p>• Copy generated code and modify it for your projects</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Final CTA */}
      <div className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-bold">Start Your Selenium Journey Today!</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The best way to learn Selenium is by practicing. Launch the playground and 
          start building your automation skills right now!
        </p>
        <Button
          onClick={() => openPlayground('practice')}
          size="lg"
          className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold"
        >
          <Play className="w-5 h-5 mr-2" />
          Start Practicing Now
        </Button>
      </div>

      {/* Include the modal */}
      <SeleniumPlaygroundModal />
    </div>
  );
}

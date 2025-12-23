'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Layers,
  Workflow, 
  TreePine, 
  GitMerge, 
  CheckCircle, 
  AlertCircle, 
  Code,
  Eye,
  MousePointer,
  Target,
  Zap,
  Play,
  Pause,
  RotateCcw,
  Copy
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useToast } from '@/hooks/use-toast';

export function CreatingPageObjects() {
  const { toast } = useToast();
  const [selectedLocatorStrategy, setSelectedLocatorStrategy] = React.useState<string>('id');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };


  const pageObjectSteps = [
    {
      id: 'analyze',
      title: 'Analyze the Page',
      description: 'Identify all interactive elements and their relationships',
      tasks: [
        "Map out all user interactions",
        "Identify form elements and inputs", 
        "Document navigation flows",
        "Note dynamic content areas"
      ],
      visualElements: ["page-layout", "interactive-elements", "navigation-flows"],
      outputs: ["Element Inventory", "User Journey Map", "Interaction Matrix"]
    },
    {
      id: 'base-class',
      title: 'Create Base Class',
      description: 'Build a foundation class with common functionality',
      tasks: [
        "Define common element locators",
        "Implement basic interaction methods",
        "Add wait strategies",
        "Create error handling mechanisms"
      ],
      visualElements: ["base-class-structure", "common-methods", "wait-strategies"],
      outputs: ["BasePage Class", "Common Methods", "Wait Utilities"]
    },
    {
      id: 'locators',
      title: 'Define Element Locators',
      description: 'Create reliable and maintainable element location strategies',
      tasks: [
        "Choose appropriate locator strategies",
        "Implement page-specific locators",
        "Add fallback mechanisms",
        "Create locator utilities"
      ],
      visualElements: ["locator-strategies", "element-mapping", "fallback-options"],
      outputs: ["Locator Constants", "Element Maps", "Strategy Patterns"]
    },
    {
      id: 'methods',
      title: 'Implement Page Methods',
      description: 'Create business-oriented methods for user interactions',
      tasks: [
        "Implement user action methods",
        "Create validation methods",
        "Add business logic wrappers",
        "Implement error handling"
      ],
      visualElements: ["method-signatures", "business-logic", "error-handling"],
      outputs: ["Action Methods", "Validation Methods", "Business Logic"]
    },
    {
      id: 'navigation',
      title: 'Add Navigation Methods',
      description: 'Implement page transitions and navigation flows',
      tasks: [
        "Return appropriate page objects from methods",
        "Handle page transitions and loading states",
        "Add wait conditions for navigation completion",
        "Implement page verification methods"
      ],
      visualElements: ["navigation-flows", "page-transitions", "user-journeys"],
      outputs: ["Navigation Methods", "Page Transitions", "User Journey Maps"]
    }
  ];

  const locatorStrategies = [
    {
      id: 'id',
      name: 'ID Locator',
      description: 'Uses element ID attributes for precise location',
      pros: ['Fastest execution', 'Most reliable', 'Unique identification'],
      cons: ['IDs may not always be present', 'Can be dynamically generated'],
      example: "By.id('username')",
      priority: 1
    },
    {
      id: 'css',
      name: 'CSS Selector',
      description: 'Uses CSS selectors for element location',
      pros: ['Flexible and powerful', 'Good performance', 'Supports complex queries'],
      cons: ['Can be brittle', 'Requires CSS knowledge', 'May break with design changes'],
      example: "By.cssSelector('.login-form input[name=\"username\"]')",
      priority: 2
    },
    {
      id: 'xpath',
      name: 'XPath',
      description: 'Uses XPath expressions for element location',
      pros: ['Very flexible', 'Can traverse DOM', 'Supports complex conditions'],
      cons: ['Slower performance', 'Complex syntax', 'Browser inconsistencies'],
      example: "By.xpath('//input[@name=\"username\" and @type=\"text\"]')",
      priority: 3
    },
    {
      id: 'name',
      name: 'Name Locator',
      description: 'Uses name attributes for element location',
      pros: ['Simple to use', 'Good for form elements', 'Readable'],
      cons: ['Not always present', 'May not be unique', 'Limited to form elements'],
      example: "By.name('username')",
      priority: 4
    },
    {
      id: 'classname',
      name: 'Class Name Locator',
      description: 'Uses CSS class names for element location',
      pros: ['Simple syntax', 'Good for styling hooks', 'Multiple elements support'],
      cons: ['Multiple classes can cause issues', 'Design changes break locators', 'Not unique'],
      example: "By.className('form-control')",
      priority: 5
    }
  ];

  const bestPractices = [
    {
      id: '1',
      title: 'Use meaningful method names',
      description: 'Method names should describe user actions, not technical implementation',
      category: 'Naming',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Return page objects from navigation methods',
      description: 'Methods that navigate to other pages should return the corresponding page object',
      category: 'Navigation',
      priority: 'high'
    },
    {
      id: '3',
      title: 'Implement proper wait strategies',
      description: 'Use explicit waits instead of thread sleeps for better reliability',
      category: 'Timing',
      priority: 'high'
    },
    {
      id: '4',
      title: 'Keep page objects focused on single pages',
      description: 'Each page object should represent only one page or component',
      category: 'Structure',
      priority: 'medium'
    },
    {
      id: '5',
      title: 'Use composition over inheritance',
      description: 'Prefer composition for shared functionality instead of deep inheritance hierarchies',
      category: 'Design',
      priority: 'medium'
    },
    {
      id: '6',
      title: 'Add validation methods',
      description: 'Include methods to verify page state and element visibility',
      category: 'Validation',
      priority: 'medium'
    },
    {
      id: '7',
      title: 'Implement proper error handling',
      description: 'Handle exceptions gracefully and provide meaningful error messages',
      category: 'Error Handling',
      priority: 'medium'
    }
  ];



  return (
    <div className="space-y-6">
      <PageHeader
        title="Creating Page Objects"
        description="Master the art of creating maintainable and efficient page objects with interactive visualizations"
        icon={Layers}
        category="Page Object Model"
        colorTheme="blue"
      />

      {/* Page Object Creation Workflow Diagram */}
      <Card>
        <CardHeader>
          <div>
            <CardTitle className="flex items-center gap-2">
              <Workflow className="w-5 h-5" />
              Page Object Creation Workflow
            </CardTitle>
            <CardDescription>
              Step-by-step process for creating effective page objects
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {pageObjectSteps.map((step, index) => (
              <div key={step.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  {index < pageObjectSteps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <Card className="bg-gray-50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <MousePointer className="w-4 h-4 text-blue-500" />
                            Key Tasks:
                          </h5>
                          <ul className="text-sm space-y-1">
                            {step.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Visual Elements:</h5>
                            <div className="flex flex-wrap gap-1">
                              {step.visualElements.map((element, elementIndex) => (
                                <Badge key={elementIndex} variant="outline" className="text-xs">
                                  {element}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Expected Outputs:</h5>
                            <div className="flex flex-wrap gap-1">
                              {step.outputs.map((output, outputIndex) => (
                                <Badge key={outputIndex} variant="secondary" className="text-xs">
                                  {output}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Page Hierarchy Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TreePine className="w-5 h-5" />
            Page Object Hierarchy
          </CardTitle>
          <CardDescription>
            Understand the inheritance structure and relationships between page objects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800">BasePage</h4>
                <p className="text-xs text-blue-600">Common functionality</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-8">
              <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">
                <h4 className="font-semibold text-green-800">LoginPage</h4>
                <p className="text-xs text-green-600">Authentication</p>
              </div>
              <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">
                <h4 className="font-semibold text-green-800">DashboardPage</h4>
                <p className="text-xs text-green-600">Main interface</p>
              </div>
              <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">
                <h4 className="font-semibold text-green-800">ProfilePage</h4>
                <p className="text-xs text-green-600">User settings</p>
              </div>
            </div>
          </div>
          
          <Alert className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Best Practice:</strong> Use inheritance for common functionality but keep page objects focused on single pages. 
              Consider composition for shared utilities and complex interactions.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Locator Strategies Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Element Locator Strategies
          </CardTitle>
          <CardDescription>
            Choose the right locator strategy for reliable and maintainable tests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locatorStrategies.map((strategy) => (
              <Card 
                key={strategy.id}
                className={`cursor-pointer transition-all ${
                  selectedLocatorStrategy === strategy.id 
                    ? 'ring-2 ring-blue-500 bg-blue-50' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedLocatorStrategy(strategy.id)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{strategy.name}</CardTitle>
                    <Badge variant={strategy.priority <= 2 ? 'default' : 'secondary'}>
                      Priority {strategy.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{strategy.description}</p>
                  <div className="space-y-2">
                    <div>
                      <h5 className="text-xs font-semibold text-green-600">Pros:</h5>
                      <ul className="text-xs text-green-700">
                        {strategy.pros.map((pro, index) => (
                          <li key={index}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-red-600">Cons:</h5>
                      <ul className="text-xs text-red-700">
                        {strategy.cons.map((con, index) => (
                          <li key={index}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {locatorStrategies.find(s => s.id === selectedLocatorStrategy) && (
            <Card className="mt-4 bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  {locatorStrategies.find(s => s.id === selectedLocatorStrategy)?.name} Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto flex-1">
                    <code>{locatorStrategies.find(s => s.id === selectedLocatorStrategy)?.example}</code>
                  </pre>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-2"
                    onClick={() => copyToClipboard(
                      locatorStrategies.find(s => s.id === selectedLocatorStrategy)?.example || '',
                      'Locator example'
                    )}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Best Practices Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Page Object Best Practices
          </CardTitle>
          <CardDescription>
            Follow these proven practices to create robust and maintainable page objects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {bestPractices.map((practice) => (
              <div key={practice.id} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{practice.title}</h4>
                    <Badge variant={
                      practice.priority === 'high' ? 'destructive' :
                      practice.priority === 'medium' ? 'default' : 'secondary'
                    }>
                      {practice.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{practice.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

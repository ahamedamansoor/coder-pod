'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Layers, Play, ArrowRight, AlertCircle, CheckCircle, Sparkles, 
  Zap, Target, TrendingUp, Box, Code, Calculator, Monitor, 
  Database, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, RotateCcw
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function StackOperationsAndApplications() {
  const [activeApp, setActiveApp] = useState('calculator');
  const [expression, setExpression] = useState('3+4*2/(1-5)');
  const [browserHistory, setBrowserHistory] = useState(['google.com', 'github.com', 'stackoverflow.com']);
  const [newSite, setNewSite] = useState('');
  const [undoStack, setUndoStack] = useState(['Initial state']);
  const [newAction, setNewAction] = useState('');

  // Stack operation examples
  const stackOperationsCode = `class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to top
  push(element) {
    this.items.push(element);
  }

  // Remove and return top element
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Return top element without removing
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return stack size
  size() {
    return this.items.length;
  }

  // Clear stack
  clear() {
    this.items = [];
  }

  // Print stack
  print() {
    console.log(this.items.toString());
  }
}

// Usage example
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.size()); // 2`;

  // Expression evaluation using stack
  const evaluateExpression = () => {
    try {
      // Simple expression evaluator (in real implementation, would use proper parsing)
      const result = eval(expression);
      return result;
    } catch (error) {
      return 'Invalid Expression';
    }
  };

  // Browser navigation functions
  const navigateToSite = () => {
    if (newSite.trim()) {
      setBrowserHistory([...browserHistory, newSite.trim()]);
      setNewSite('');
    }
  };

  const goBack = () => {
    if (browserHistory.length > 1) {
      const newHistory = [...browserHistory];
      newHistory.pop();
      setBrowserHistory(newHistory);
    }
  };

  // Undo/Redo functions
  const addAction = () => {
    if (newAction.trim()) {
      setUndoStack([...undoStack, newAction.trim()]);
      setNewAction('');
    }
  };

  const undo = () => {
    if (undoStack.length > 1) {
      const newStack = [...undoStack];
      newStack.pop();
      setUndoStack(newStack);
    }
  };

  const applications = [
    {
      id: 'calculator',
      title: 'Expression Calculator',
      icon: Calculator,
      description: 'Evaluate mathematical expressions using stack-based parsing',
      color: 'blue'
    },
    {
      id: 'browser',
      title: 'Browser History',
      icon: Monitor,
      description: 'Navigate through web pages using stack-based history',
      color: 'green'
    },
    {
      id: 'editor',
      title: 'Text Editor Undo/Redo',
      icon: Code,
      description: 'Implement undo/redo functionality with action stacks',
      color: 'purple'
    }
  ];

  return (
    <div className="space-y-8">
      <PageHeader 
        icon={Zap} 
        category="DSA · Stacks" 
        title="Stack Operations and Applications" 
        description="Master stack operations and explore real-world applications in software development"
        colorTheme="green"
        badges={[
          { label: 'Operations', variant: 'default' },
          { label: 'Applications', variant: 'success' },
          { label: 'Interactive', variant: 'info' }
        ]}
      />

      {/* Introduction */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Stack Operations and Applications
          </CardTitle>
          <CardDescription>
            Master stack operations and explore real-world applications in software development
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800">
            <Sparkles className="w-4 h-4" />
            <AlertTitle>Why Stack Operations Matter</AlertTitle>
            <AlertDescription>
              Stack operations form the foundation of many algorithms and systems. Understanding how to 
              implement and use stacks efficiently is crucial for solving complex problems in programming.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">
                Core Operations
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ArrowDown className="w-4 h-4 text-blue-500" />
                  <span className="text-sm"><strong>Push:</strong> Add element to top</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUp className="w-4 h-4 text-orange-500" />
                  <span className="text-sm"><strong>Pop:</strong> Remove top element</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-500" />
                  <span className="text-sm"><strong>Peek:</strong> View top element</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm"><strong>IsEmpty:</strong> Check if empty</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">
                Time Complexity
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Push/Pop/Peek:</span>
                  <span className="font-mono text-green-600">O(1)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>IsEmpty/Size:</span>
                  <span className="font-mono text-green-600">O(1)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Search:</span>
                  <span className="font-mono text-orange-600">O(n)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Space:</span>
                  <span className="font-mono text-green-600">O(n)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stack Implementation */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Stack Implementation
          </CardTitle>
          <CardDescription>
            Complete implementation of stack data structure with all operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet 
            code={stackOperationsCode}
            language="javascript"
            title="JavaScript Stack Implementation"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* Interactive Applications */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
            Interactive Applications
          </CardTitle>
          <CardDescription>
            Explore real-world applications of stack data structure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Application Selector */}
          <div className="flex flex-wrap gap-3">
            {applications.map((app) => (
              <Button
                key={app.id}
                onClick={() => setActiveApp(app.id)}
                variant={activeApp === app.id ? 'default' : 'outline'}
                className={`flex items-center gap-2 ${
                  activeApp === app.id 
                    ? `bg-${app.color}-600 hover:bg-${app.color}-700` 
                    : `border-${app.color}-300`
                }`}
              >
                <app.icon className="w-4 h-4" />
                {app.title}
              </Button>
            ))}
          </div>

          {/* Expression Calculator */}
          {activeApp === 'calculator' && (
            <div className="p-6 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                Expression Calculator
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Mathematical Expression:</label>
                  <input
                    type="text"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter expression (e.g., 3+4*2/(1-5))"
                  />
                </div>
                <Button 
                  onClick={() => alert(`Result: ${evaluateExpression()}`)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Evaluate Expression
                </Button>
                <Alert className="border-blue-200 dark:border-blue-800">
                  <AlertCircle className="w-4 h-4" />
                  <AlertTitle>How it works:</AlertTitle>
                  <AlertDescription>
                    Stack-based expression evaluation converts infix to postfix notation, 
                    then evaluates using operator precedence and parentheses matching.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          )}

          {/* Browser History */}
          {activeApp === 'browser' && (
            <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-green-600" />
                Browser History Navigation
              </h3>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newSite}
                    onChange={(e) => setNewSite(e.target.value)}
                    className="flex-1 px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter website (e.g., example.com)"
                  />
                  <Button onClick={navigateToSite} className="bg-green-600 hover:bg-green-700">
                    Navigate
                  </Button>
                  <Button 
                    onClick={goBack} 
                    disabled={browserHistory.length <= 1}
                    variant="outline"
                    className="border-green-300"
                  >
                    <ArrowUp className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">History Stack (Top = Current):</h4>
                  <div className="space-y-1">
                    {browserHistory.slice().reverse().map((site, index) => (
                      <div 
                        key={index}
                        className={`px-3 py-2 rounded border ${
                          index === 0 
                            ? 'bg-green-100 dark:bg-green-900/50 border-green-500 font-medium' 
                            : 'bg-white dark:bg-slate-800 border-green-200'
                        }`}
                      >
                        {index === 0 && '📍 '}{site}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Alert className="border-green-200 dark:border-green-800">
                  <AlertCircle className="w-4 h-4" />
                  <AlertTitle>Stack-based Navigation:</AlertTitle>
                  <AlertDescription>
                    Browser history uses a stack where each new page is pushed on top. 
                    The "Back" button pops the current page to return to the previous one.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          )}

          {/* Text Editor Undo/Redo */}
          {activeApp === 'editor' && (
            <div className="p-6 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-600" />
                Text Editor - Undo/Redo System
              </h3>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newAction}
                    onChange={(e) => setNewAction(e.target.value)}
                    className="flex-1 px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter action (e.g., Type text, Delete, Format)"
                  />
                  <Button onClick={addAction} className="bg-purple-600 hover:bg-purple-700">
                    Add Action
                  </Button>
                  <Button 
                    onClick={undo}
                    disabled={undoStack.length <= 1}
                    variant="outline"
                    className="border-purple-300"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Undo
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Action Stack (Top = Latest):</h4>
                  <div className="space-y-1 max-h-40 overflow-y-auto">
                    {undoStack.slice().reverse().map((action, index) => (
                      <div 
                        key={index}
                        className={`px-3 py-2 rounded border ${
                          index === 0 
                            ? 'bg-purple-100 dark:bg-purple-900/50 border-purple-500 font-medium' 
                            : 'bg-white dark:bg-slate-800 border-purple-200'
                        }`}
                      >
                        {index === 0 && '✏️ '}{action}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Alert className="border-purple-200 dark:border-purple-800">
                  <AlertCircle className="w-4 h-4" />
                  <AlertTitle>Undo/Redo Implementation:</AlertTitle>
                  <AlertDescription>
                    Text editors use two stacks: one for undo operations and another for redo. 
                    Each action is pushed onto the undo stack, enabling users to reverse changes.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Real-World Applications */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Real-World Stack Applications
          </CardTitle>
          <CardDescription>
            Discover how stacks power essential software systems and algorithms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
              <Database className="w-8 h-8 text-orange-600 mb-2" />
              <h4 className="font-semibold mb-1">Function Call Stack</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Manages function calls, local variables, and return addresses in program execution
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
              <Box className="w-8 h-8 text-orange-600 mb-2" />
              <h4 className="font-semibold mb-1">Expression Parsing</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Evaluates mathematical expressions and validates syntax in compilers
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
              <Layers className="w-8 h-8 text-orange-600 mb-2" />
              <h4 className="font-semibold mb-1">Memory Management</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Stack memory allocation for local variables and function parameters
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
              <Target className="w-8 h-8 text-orange-600 mb-2" />
              <h4 className="font-semibold mb-1">Graph Algorithms</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Depth-First Search (DFS) traversal uses stack for backtracking
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
              <ArrowRight className="w-8 h-8 text-orange-600 mb-2" />
              <h4 className="font-semibold mb-1">Backtracking</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Solves puzzles and optimization problems through systematic exploration
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
              <CheckCircle className="w-8 h-8 text-orange-600 mb-2" />
              <h4 className="font-semibold mb-1">Undo Systems</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Implements undo/redo functionality in text editors and design software
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Alert className="border-green-200 dark:border-green-800">
        <CheckCircle className="w-4 h-4" />
        <AlertTitle>Ready for Practice?</AlertTitle>
        <AlertDescription>
          Now that you understand stack operations and applications, try implementing 
          your own stack-based solutions. Move on to basic stack operations to practice 
          implementing stacks from scratch!
        </AlertDescription>
      </Alert>
    </div>
  );
}

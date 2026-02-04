'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Button } from '@/components/ui/button';
import { 
  TestTube, 
  Shield, 
  Lightbulb, 
  CheckCircle2, 
  Code,
  ArrowRight,
  Rocket,
  Target,
  Layers,
  Box,
  FileCode,
  Zap
} from 'lucide-react';

interface TestingOverviewProps {
  onOpenEditor?: (code: string) => void;
}

export default function TestingOverview({ onOpenEditor }: TestingOverviewProps) {
  const testableComponentCode = `function Counter() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        color: '#06b6d4', 
        marginBottom: '20px',
        fontSize: '24px'
      }}>
        Counter Component
      </h2>
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#334155',
        marginBottom: '30px',
        padding: '20px',
        background: '#f1f5f9',
        borderRadius: '12px'
      }}>
        {count}
      </div>
      <div style={{ 
        display: 'flex', 
        gap: '12px',
        justifyContent: 'center',
        marginBottom: '20px'
      }}>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            background: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            background: '#22c55e',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Increment
        </button>
      </div>
      <button 
        onClick={() => setCount(0)}
        style={{
          padding: '10px 20px',
          fontSize: '14px',
          background: '#64748b',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '500'
        }}
      >
        Reset
      </button>
    </div>
  );
}

// Render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);`;

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={TestTube}
        category="React · Testing"
        title="Testing Overview"
        description="Learn the fundamentals of testing React applications, understand why testing matters, explore different testing approaches, and discover the tools that make testing efficient and reliable."
        colorTheme="cyan"
      />

      {/* Introduction Section */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Shield className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="What is Testing?"
            description="Building confidence in your code"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Testing is the process of verifying that your React components work correctly. It's like having a safety net that catches bugs before your users do!
          </p>

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Think of tests as automated checks that run every time you make changes. They ensure your app behaves as expected and give you confidence to refactor and add new features.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">Catch Bugs Early</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Find and fix issues before they reach production and affect users.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Refactor Safely</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Make changes with confidence knowing tests will alert you to problems.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                <FileCode className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-purple-700 dark:text-purple-300">Document Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Tests serve as living documentation showing how components should work.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testing Pyramid Diagram */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="The Testing Pyramid"
            description="Different levels of testing"
            size="lg"
          />

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The testing pyramid is a concept that shows how many tests you should have at each level. More unit tests at the bottom, fewer E2E tests at the top.
          </p>

          {/* Visual Pyramid */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
            <div className="space-y-3">
              {/* E2E Tests - Top */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="h-20 bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-lg flex items-center justify-center border-2 border-red-400 dark:border-red-700" style={{ width: '40%', margin: '0 auto' }}>
                    <div className="text-center">
                      <p className="font-bold text-red-700 dark:text-red-300 text-sm">E2E Tests</p>
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">Fewer (Slow)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </div>

              {/* Integration Tests - Middle */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="h-24 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg flex items-center justify-center border-2 border-orange-400 dark:border-orange-700" style={{ width: '70%', margin: '0 auto' }}>
                    <div className="text-center">
                      <p className="font-bold text-orange-700 dark:text-orange-300">Integration Tests</p>
                      <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">Moderate (Medium Speed)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </div>

              {/* Unit Tests - Base */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="h-28 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg flex items-center justify-center border-2 border-green-400 dark:border-green-700" style={{ width: '100%' }}>
                    <div className="text-center">
                      <p className="font-bold text-green-700 dark:text-green-300 text-lg">Unit Tests</p>
                      <p className="text-sm text-green-600 dark:text-green-400 mt-1">Most (Fast)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-6 italic">
              Foundation at the bottom → Comprehensive coverage at the top
            </p>
          </div>

          {/* Test Type Descriptions */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <Badge className="bg-green-500 mb-3">🔬 Unit Tests</Badge>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Test individual components in isolation. Fast and numerous.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                "Does this button render correctly?"
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <Badge className="bg-orange-500 mb-3">🔗 Integration Tests</Badge>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Test how multiple components work together.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                "Does the form submit and show a success message?"
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <Badge className="bg-red-500 mb-3">🌐 E2E Tests</Badge>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Test complete user flows in a real browser.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                "Can a user sign up, log in, and make a purchase?"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example - Testable Component */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border-2 border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-cyan-600 dark:text-cyan-400">
                Try a Testable Component
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                See a simple Counter component in action! This is the kind of component we'll learn to test. Click the buttons to interact with it.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="text-xs border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  State Management
                </Badge>
                <Badge variant="outline" className="text-xs border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Event Handlers
                </Badge>
                <Badge variant="outline" className="text-xs border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  User Interactions
                </Badge>
              </div>

              {onOpenEditor && (
                <Button
                  onClick={() => onOpenEditor(testableComponentCode)}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Open React Playground
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Preview of Component */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
          title="Interactive Component Preview"
          description="See the component we'll test"
          size="lg"
        />
        <FrontendCodePreview learningContext="react"
          title="Counter Component"
          html={`<div id="root"></div>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`}
          react={testableComponentCode}
          js={testableComponentCode}
          colorTheme="cyan"
        />
      </div>

      {/* Testing Tools Section */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Essential Testing Tools"
            description="The React testing ecosystem"
            size="lg"
          />

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            React has a rich ecosystem of testing tools. Here are the most important ones you'll use:
          </p>

          <div className="space-y-4">
            {/* Jest */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">Jest</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    A delightful JavaScript testing framework with a focus on simplicity. It comes with everything built-in: test runner, assertions, mocking, and coverage.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">Test Runner</Badge>
                    <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">Assertions</Badge>
                    <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">Mocking</Badge>
                    <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">Coverage</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* React Testing Library */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-300">React Testing Library</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    The most popular library for testing React components. It encourages testing from the user's perspective, focusing on behavior rather than implementation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">User-Centric</Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">Accessible Queries</Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">Best Practices</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Vitest */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 text-green-700 dark:text-green-300">Vitest</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    A blazing fast unit test framework powered by Vite. Jest-compatible API with better performance and modern features. Great for Vite projects!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">Super Fast</Badge>
                    <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">Vite Native</Badge>
                    <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">Jest Compatible</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Cypress/Playwright */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 text-orange-700 dark:text-orange-300">Cypress / Playwright</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    End-to-end testing frameworks that run tests in a real browser. Perfect for testing complete user journeys and workflows across your entire application.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300">E2E Testing</Badge>
                    <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300">Real Browser</Badge>
                    <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300">Visual Testing</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Simple Test Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-green-600 dark:text-green-400" />}
          title="Your First Test"
          description="A simple example to get started"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing a Button Component"
          description="Basic test using Jest and React Testing Library"
          code={`// Button.jsx
function Button({ onClick, children }) {
  return (
    <button onClick={onClick} aria-label={children}>
      {children}
    </button>
  );
}

// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click Me</Button>);
    
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});`}
          output={[
            '✓ Button Component › renders button with text (12ms)',
            '✓ Button Component › calls onClick when clicked (8ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       2 passed, 2 total',
            'Time:        1.845 s',
            '// ✅ All tests passed!'
          ]}
          language="javascript"
          colorTheme="green"
        />
      </div>

      {/* Testing Flow Diagram */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 dark:from-blue-950/10 dark:to-indigo-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="The Testing Flow"
            description="How testing works step-by-step"
            size="lg"
          />

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Here's the typical flow when testing a React component:
          </p>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                  1
                </div>
                <div className="flex-1 px-4 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <p className="font-semibold text-blue-700 dark:text-blue-300">Render Component</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                    Use <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">render()</code> to mount your component
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                  2
                </div>
                <div className="flex-1 px-4 py-3 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <p className="font-semibold text-green-700 dark:text-green-300">Query Elements</p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    Find elements using <code className="bg-green-200 dark:bg-green-800 px-1 rounded">screen.getByText()</code> or similar queries
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                  3
                </div>
                <div className="flex-1 px-4 py-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                  <p className="font-semibold text-purple-700 dark:text-purple-300">Interact</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">
                    Simulate user actions with <code className="bg-purple-200 dark:bg-purple-800 px-1 rounded">fireEvent.click()</code> or <code className="bg-purple-200 dark:bg-purple-800 px-1 rounded">userEvent</code>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                  4
                </div>
                <div className="flex-1 px-4 py-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                  <p className="font-semibold text-orange-700 dark:text-orange-300">Assert</p>
                  <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">
                    Verify behavior with <code className="bg-orange-200 dark:bg-orange-800 px-1 rounded">expect()</code> assertions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testing Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Testing Best Practices"
            description="Write effective tests"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <Badge className="bg-green-500 mb-4">✅ DO</Badge>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Test user behavior and interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use accessible queries (getByRole, getByLabelText)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Write clear, descriptive test names</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Test edge cases and error states</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Keep tests simple and focused</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <Badge className="bg-red-500 mb-4">❌ DON'T</Badge>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">×</span>
                  <span>Test implementation details (internal state)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">×</span>
                  <span>Use className or component structure to query</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">×</span>
                  <span>Test multiple things in one test</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">×</span>
                  <span>Rely on test execution order</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">×</span>
                  <span>Skip tests or use .only in commits</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Golden Rule of Testing</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <strong>Test your components the way users use them.</strong> If you refactor your component and the tests still pass, but the component is broken, you're testing the wrong things!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center mb-3">
                <TestTube className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Testing Matters</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Tests catch bugs early and give you confidence to refactor code safely.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mb-3">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Testing Pyramid</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Many unit tests, some integration tests, few E2E tests for optimal coverage.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">React Testing Library</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                The recommended tool for testing React components from user's perspective.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">User-Centric</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Test behavior users see and interact with, not implementation details.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Simple Workflow</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Render → Query → Interact → Assert. That's the testing flow!
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Modern Tools</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Jest, Vitest, Cypress, and Playwright make testing fast and reliable.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-2 border-cyan-300 dark:border-cyan-700">
        <Rocket className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
        <AlertTitle className="text-cyan-900 dark:text-cyan-100 text-lg">Ready to Write Tests?</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
          <p>
            Now that you understand testing fundamentals, you're ready to dive deeper! In the next topics, you'll learn:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Component Testing - Test props, state, and rendering</li>
            <li>Hook Testing - Test custom hooks in isolation</li>
            <li>Async Testing - Handle async operations and API calls</li>
            <li>Mocking and Stubbing - Isolate components with mocks</li>
          </ul>
        </AlertDescription>
      </Alert>

    </div>
  );
}

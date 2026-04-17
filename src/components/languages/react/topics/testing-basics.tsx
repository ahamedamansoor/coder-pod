'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Lightbulb, CheckCircle2, TestTube, Shield } from 'lucide-react';

export default function TestingBasics() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={TestTube}
        category="React · Testing"
        title="Testing Basics"
        description="Learn the fundamentals of testing React components, understand different types of tests, and discover why testing is crucial for building reliable applications."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<TestTube className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Why Test React Components?"
              description="Confidence in your code"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Testing ensures your components work correctly and continue to work as you make changes. Tests catch bugs before your users do!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ Benefits</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Catch bugs early</li>
                  <li>• Refactor with confidence</li>
                  <li>• Document behavior</li>
                  <li>• Faster debugging</li>
                  <li>• Better code quality</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">📊 Test Types</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Unit tests (components)</li>
                  <li>• Integration tests</li>
                  <li>• End-to-end tests</li>
                  <li>• Snapshot tests</li>
                  <li>• Visual regression tests</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Shield className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Testing Library"
              description="The recommended way to test React"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>React Testing Library</strong> is the most popular testing tool for React. It encourages testing from the user's perspective!
            </p>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">Key Principles</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Test behavior, not implementation</li>
                <li>• Query elements like users do</li>
                <li>• Avoid testing internal state</li>
                <li>• Focus on accessibility</li>
                <li>• Test what users see and do</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Your First Test"
            description="Testing a simple button component"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="Button Component Test"
            description="Complete test example with Jest and React Testing Library"
            language="javascript"
            colorTheme="green"
            code={`// Button.jsx
function Button({ onClick, children, disabled }) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      aria-label={children}
    >
      {children}
    </button>
  );
}

// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders with text', () => {
    render(<Button>Click Me</Button>);
    
    // Find button by its text
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

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click Me</Button>);
    
    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
  });
});`}
            output={[
              '✓ Button Component › renders with text (15ms)',
              '✓ Button Component › calls onClick when clicked (8ms)',
              '✓ Button Component › is disabled when disabled prop is true (5ms)',
              '',
              'Test Suites: 1 passed, 1 total',
              'Tests:       3 passed, 3 total',
              'Snapshots:   0 total',
              'Time:        2.134 s'
            ]}
          />
        </div>

        <div className="space-y-6">
          <TopicTitle
            icon={<TestTube className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Testing Component State"
            description="Test components that manage state"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="Counter Component Test"
            description="Testing state changes and user interactions"
            language="javascript"
            colorTheme="blue"
            code={`// Counter.jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

// Counter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('starts at zero', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('increments count', () => {
    render(<Counter />);
    
    const incrementBtn = screen.getByText('Increment');
    fireEvent.click(incrementBtn);
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  test('decrements count', () => {
    render(<Counter />);
    
    const decrementBtn = screen.getByText('Decrement');
    fireEvent.click(decrementBtn);
    
    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

  test('resets to zero', () => {
    render(<Counter />);
    
    // Increment a few times
    const incrementBtn = screen.getByText('Increment');
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    
    // Then reset
    const resetBtn = screen.getByText('Reset');
    fireEvent.click(resetBtn);
    
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
});`}
            output={[
              '✓ Counter Component › starts at zero (12ms)',
              '✓ Counter Component › increments count (9ms)',
              '✓ Counter Component › decrements count (8ms)',
              '✓ Counter Component › resets to zero (11ms)',
              '',
              'Test Suites: 1 passed, 1 total',
              'Tests:       4 passed, 4 total'
            ]}
          />
        </div>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Testing Best Practices"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ DO</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Test user behavior</li>
                  <li>• Use accessible queries</li>
                  <li>• Test one thing per test</li>
                  <li>• Write descriptive test names</li>
                  <li>• Test edge cases</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <Badge className="bg-orange-500 mb-3">❌ DON'T</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Test implementation details</li>
                  <li>• Use component internals</li>
                  <li>• Test multiple things together</li>
                  <li>• Write vague test names</li>
                  <li>• Only test happy path</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Test Like a User!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                The more your tests resemble how users interact with your app, the more confidence they'll give you. Focus on what users see and do, not implementation details!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">React Testing Library</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The recommended tool for testing React
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">User Perspective</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Test from user's point of view
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Queries</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use getByText, getByRole for accessibility
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">fireEvent</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Simulate user interactions like clicks
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

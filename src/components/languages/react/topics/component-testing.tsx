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
  Lightbulb, 
  CheckCircle2, 
  Code,
  Box,
  Zap,
  Target,
  FileCode,
  Rocket,
  ArrowRight,
  Play
} from 'lucide-react';

interface ComponentTestingProps {
  onOpenEditor?: (code: string) => void;
}

export default function ComponentTesting({ onOpenEditor }: ComponentTestingProps) {
  const greetingComponentCode = `function Greeting({ name, isLoggedIn }) {
  if (!isLoggedIn) {
    return <div style={{
      padding: '30px',
      textAlign: 'center',
      fontFamily: 'system-ui',
      background: '#fef2f2',
      borderRadius: '12px',
      border: '2px solid #ef4444',
      color: '#991b1b'
    }}>
      <h3 style={{ marginBottom: '10px' }}>Please log in</h3>
      <p>You must be logged in to see the greeting</p>
    </div>;
  }

  return (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'system-ui',
      background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      borderRadius: '16px',
      color: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    }}>
      <h2 style={{ 
        fontSize: '32px',
        marginBottom: '10px',
        fontWeight: 'bold'
      }}>
        Welcome, {name}!
      </h2>
      <p style={{ 
        fontSize: '18px',
        opacity: 0.9
      }}>
        Great to see you again 👋
      </p>
    </div>
  );
}

// Render examples
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Greeting name="Sarah" isLoggedIn={true} />
    <Greeting name="John" isLoggedIn={false} />
  </div>
);`;

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={TestTube}
        category="React · Testing"
        title="Component Testing"
        description="Master the art of testing React components - learn how to test rendering, props, state changes, events, and conditional logic with practical examples."
        colorTheme="cyan"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="What is Component Testing?"
            description="Testing individual building blocks"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Component testing focuses on testing individual React components in isolation. You verify that each component renders correctly, handles props properly, and responds to user interactions as expected.
          </p>

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Unlike integration or E2E tests, component tests are fast and focused. They help you catch bugs early and refactor with confidence!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-cyan-700 dark:text-cyan-300">Fast</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Run hundreds of tests in seconds without a real browser.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Focused</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Test one component at a time in isolation from others.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                <FileCode className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-purple-700 dark:text-purple-300">Reliable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Catch regressions immediately when you break something.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What to Test */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="What Should You Test?"
            description="Focus on user-visible behavior"
            size="lg"
          />

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Test what users see and do, not how your component works internally. Here are the key areas:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <Badge className="bg-green-500 mb-4">✅ Test These</Badge>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Rendering:</strong> Does the component appear on screen?
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Props:</strong> Does it display data correctly?
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>User Events:</strong> Do clicks and inputs work?
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Conditional Logic:</strong> Does it show/hide correctly?
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>State Changes:</strong> Does UI update when state changes?
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <Badge className="bg-red-500 mb-4">❌ Don't Test These</Badge>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">×</span>
                  <div>
                    <strong>Internal State:</strong> Don't access component.state
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">×</span>
                  <div>
                    <strong>Implementation:</strong> Don't test function names
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">×</span>
                  <div>
                    <strong>CSS Classes:</strong> Don't query by className
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">×</span>
                  <div>
                    <strong>Component Structure:</strong> Don't test JSX structure
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">×</span>
                  <div>
                    <strong>Third-Party Code:</strong> Don't test library internals
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border-2 border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-cyan-600 dark:text-cyan-400">
                Try a Greeting Component
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This component shows different content based on props. Perfect example for testing conditional rendering and props!
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="text-xs border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Conditional Rendering
                </Badge>
                <Badge variant="outline" className="text-xs border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Props Testing
                </Badge>
                <Badge variant="outline" className="text-xs border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Multiple States
                </Badge>
              </div>

              {onOpenEditor && (
                <Button
                  onClick={() => onOpenEditor(greetingComponentCode)}
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

      {/* Live Preview */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Play className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
          title="Component Preview"
          description="See both logged-in and logged-out states"
          size="lg"
        />
        <FrontendCodePreview
          title="Greeting Component"
          html={`<div id="root"></div>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`}
          js={greetingComponentCode}
          colorTheme="cyan"
        />
      </div>

      {/* Test Example 1: Testing Props */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-green-600 dark:text-green-400" />}
          title="Test 1: Testing Props"
          description="Verify component renders with different props"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing Props Rendering"
          description="Check if the component displays the correct name"
          code={`import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component - Props', () => {
  test('displays the user name when logged in', () => {
    render(<Greeting name="Sarah" isLoggedIn={true} />);
    
    // Query for text that includes the name
    const heading = screen.getByText(/Welcome, Sarah!/i);
    expect(heading).toBeInTheDocument();
  });

  test('displays welcome message for different users', () => {
    render(<Greeting name="John" isLoggedIn={true} />);
    
    expect(screen.getByText(/Welcome, John!/i)).toBeInTheDocument();
  });

  test('displays generic text with different props', () => {
    render(<Greeting name="Alice" isLoggedIn={true} />);
    
    expect(screen.getByText(/Great to see you again/i)).toBeInTheDocument();
  });
});`}
          output={[
            '✓ Greeting Component - Props › displays the user name when logged in (18ms)',
            '✓ Greeting Component - Props › displays welcome message for different users (12ms)',
            '✓ Greeting Component - Props › displays generic text with different props (9ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ All props tests passed!'
          ]}
          language="javascript"
          colorTheme="green"
        />
      </div>

      {/* Test Example 2: Testing Conditional Rendering */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
          title="Test 2: Conditional Rendering"
          description="Test component behavior with different conditions"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing Conditional Logic"
          description="Verify the component shows/hides content correctly"
          code={`import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component - Conditional Rendering', () => {
  test('shows welcome message when logged in', () => {
    render(<Greeting name="Sarah" isLoggedIn={true} />);
    
    expect(screen.getByText(/Welcome, Sarah!/i)).toBeInTheDocument();
    expect(screen.queryByText(/Please log in/i)).not.toBeInTheDocument();
  });

  test('shows login prompt when not logged in', () => {
    render(<Greeting name="Sarah" isLoggedIn={false} />);
    
    expect(screen.getByText(/Please log in/i)).toBeInTheDocument();
    expect(screen.queryByText(/Welcome, Sarah!/i)).not.toBeInTheDocument();
  });

  test('shows correct message for logged out state', () => {
    render(<Greeting name="John" isLoggedIn={false} />);
    
    const loginPrompt = screen.getByText(/You must be logged in/i);
    expect(loginPrompt).toBeInTheDocument();
  });
});`}
          output={[
            '✓ Greeting Component - Conditional Rendering › shows welcome message when logged in (15ms)',
            '✓ Greeting Component - Conditional Rendering › shows login prompt when not logged in (11ms)',
            '✓ Greeting Component - Conditional Rendering › shows correct message for logged out state (10ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ Conditional rendering works!'
          ]}
          language="javascript"
          colorTheme="blue"
        />
      </div>

      {/* Test Example 3: Testing State Changes */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
          title="Test 3: State Changes"
          description="Test components that manage state"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing State Updates"
          description="Verify state changes update the UI correctly"
          code={`import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component - State', () => {
  test('initializes with count of 0', () => {
    render(<Counter />);
    
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  test('increments count when button clicked', () => {
    render(<Counter />);
    
    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementBtn);
    
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });

  test('handles multiple increments', () => {
    render(<Counter />);
    
    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    
    // Click 3 times
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    
    expect(screen.getByText(/Count: 3/i)).toBeInTheDocument();
  });

  test('resets count to 0', () => {
    render(<Counter />);
    
    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    const resetBtn = screen.getByRole('button', { name: /reset/i });
    
    // Increment then reset
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(resetBtn);
    
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });
});`}
          output={[
            '✓ Counter Component - State › initializes with count of 0 (14ms)',
            '✓ Counter Component - State › increments count when button clicked (16ms)',
            '✓ Counter Component - State › handles multiple increments (18ms)',
            '✓ Counter Component - State › resets count to 0 (17ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       4 passed, 4 total',
            '// ✅ State management works perfectly!'
          ]}
          language="javascript"
          colorTheme="purple"
        />
      </div>

      {/* Test Example 4: Testing Events */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
          title="Test 4: User Events"
          description="Test click handlers and form inputs"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing User Interactions"
          description="Verify buttons, inputs, and event handlers work"
          code={`import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm';

describe('SearchForm Component - Events', () => {
  test('calls onSearch with input value when submitted', () => {
    const handleSearch = jest.fn();
    render(<SearchForm onSearch={handleSearch} />);
    
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });
    
    // Type and submit
    fireEvent.change(input, { target: { value: 'React' } });
    fireEvent.click(button);
    
    expect(handleSearch).toHaveBeenCalledWith('React');
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  test('clears input after submission', async () => {
    const user = userEvent.setup();
    render(<SearchForm onSearch={jest.fn()} />);
    
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });
    
    // Type and submit
    await user.type(input, 'Testing');
    await user.click(button);
    
    expect(input).toHaveValue('');
  });

  test('does not call onSearch with empty value', () => {
    const handleSearch = jest.fn();
    render(<SearchForm onSearch={handleSearch} />);
    
    const button = screen.getByRole('button', { name: /search/i });
    fireEvent.click(button);
    
    // Should not be called with empty string
    expect(handleSearch).not.toHaveBeenCalled();
  });
});`}
          output={[
            '✓ SearchForm Component - Events › calls onSearch with input value when submitted (19ms)',
            '✓ SearchForm Component - Events › clears input after submission (22ms)',
            '✓ SearchForm Component - Events › does not call onSearch with empty value (11ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ Event handlers working correctly!'
          ]}
          language="javascript"
          colorTheme="orange"
        />
      </div>

      {/* Query Methods */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Query Methods"
            description="How to find elements in your tests"
            size="lg"
          />

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            React Testing Library provides several ways to query elements. Choose the right one for accessibility and reliability:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {/* getBy */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <Badge className="bg-green-500 mb-3">getBy*</Badge>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Returns element or throws error if not found
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-green-600 dark:text-green-400">getByRole('button')</div>
                <div className="text-green-600 dark:text-green-400 mt-1">getByText('Submit')</div>
                <div className="text-green-600 dark:text-green-400 mt-1">getByLabelText('Email')</div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                ✅ Best for elements that should exist
              </p>
            </div>

            {/* queryBy */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <Badge className="bg-blue-500 mb-3">queryBy*</Badge>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Returns null if not found (no error)
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-blue-600 dark:text-blue-400">queryByText('Error')</div>
                <div className="text-blue-600 dark:text-blue-400 mt-1">queryByRole('alert')</div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                ✅ Best for checking if element is NOT there
              </p>
            </div>

            {/* findBy */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <Badge className="bg-purple-500 mb-3">findBy*</Badge>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Waits for element to appear (async)
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-purple-600 dark:text-purple-400">await findByText('Done')</div>
                <div className="text-purple-600 dark:text-purple-400 mt-1">await findByRole('status')</div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                ✅ Best for elements that appear after loading
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
            <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Priority Order</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              <strong>1. getByRole</strong> (most accessible) → <strong>2. getByLabelText</strong> → <strong>3. getByPlaceholderText</strong> → <strong>4. getByText</strong> → <strong>5. getByTestId</strong> (last resort)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Component Testing Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Test Behavior, Not Implementation</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Focus on what the user sees and does. If you refactor and tests still pass but the component is broken, you're testing the wrong things.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Use Accessible Queries</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Prefer <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">getByRole</code> and <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">getByLabelText</code>. They ensure your app is accessible and tests mimic real users.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Test One Thing Per Test</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Each test should verify one specific behavior. This makes failures easy to debug and tests easy to understand.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Clean Up After Tests</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React Testing Library automatically cleans up after each test. But if you add timers or global listeners, clean them up in <code className="bg-orange-100 dark:bg-orange-900 px-1 rounded">afterEach</code>.
                </p>
              </div>
            </div>
          </div>
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
                <Box className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Test Rendering</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Verify components render correctly with different props using render() and screen queries.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Test Props</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Pass different props and verify the component displays the correct data.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Test State</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use fireEvent or userEvent to trigger state changes and verify UI updates.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Test Events</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Simulate clicks, typing, and form submissions with fireEvent or userEvent.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Query Methods</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use getBy* for existing elements, queryBy* for absence, findBy* for async.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">User-Centric</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Always test from the user's perspective - what they see and do!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-2 border-cyan-300 dark:border-cyan-700">
        <Rocket className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
        <AlertTitle className="text-cyan-900 dark:text-cyan-100 text-lg">Ready for More?</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
          <p>
            You now know how to test component rendering, props, state, and events! Next topics:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Hook Testing - Test custom hooks in isolation</li>
            <li>Async Testing - Handle loading states and API calls</li>
            <li>Mocking - Isolate components with mocks and stubs</li>
          </ul>
        </AlertDescription>
      </Alert>

    </div>
  );
}

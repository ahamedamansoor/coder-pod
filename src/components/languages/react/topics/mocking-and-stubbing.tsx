'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  TestTube, 
  Lightbulb, 
  CheckCircle2, 
  Code,
  Zap,
  Target,
  Rocket,
  Shield,
  Layers,
  Box,
  FileCode
} from 'lucide-react';

export default function MockingAndStubbing() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Shield}
        category="React · Testing"
        title="Mocking and Stubbing"
        description="Master the art of isolating components for testing - learn to mock functions, modules, APIs, and external dependencies to create reliable, fast, and isolated tests."
        colorTheme="cyan"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Shield className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="What is Mocking?"
            description="Isolating code from external dependencies"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Mocking is the practice of replacing real implementations with fake versions during testing. This lets you test components in isolation without relying on external APIs, databases, or other dependencies.
          </p>

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Jest provides powerful mocking capabilities built-in, making it easy to mock functions, modules, and timers!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-cyan-700 dark:text-cyan-300">Isolation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Test components independently without external dependencies.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Speed</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Tests run faster without real network calls or file I/O.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-purple-700 dark:text-purple-300">Control</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Control exactly what your dependencies return for testing.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types of Mocking */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Types of Mocking"
            description="Different mocking strategies"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <Badge className="bg-purple-500 mb-4">Mock Functions</Badge>
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">jest.fn()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Create mock functions to track calls and control return values.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-purple-600 dark:text-purple-400">const mockFn = jest.fn();</div>
                <div className="text-purple-600 dark:text-purple-400 mt-1">mockFn.mockReturnValue(42);</div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <Badge className="bg-blue-500 mb-4">Mock Modules</Badge>
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">jest.mock()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Replace entire modules with mock implementations.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-blue-600 dark:text-blue-400">jest.mock('./api');</div>
                <div className="text-blue-600 dark:text-blue-400 mt-1">import {'{ fetchUser }'} from './api';</div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <Badge className="bg-green-500 mb-4">Spy Functions</Badge>
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">jest.spyOn()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Spy on existing methods while keeping original implementation.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-green-600 dark:text-green-400">jest.spyOn(console, 'log');</div>
                <div className="text-green-600 dark:text-green-400 mt-1">// Original still called</div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <Badge className="bg-orange-500 mb-4">Partial Mocks</Badge>
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">requireActual</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Mock only specific parts of a module, keep the rest real.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-orange-600 dark:text-orange-400">jest.requireActual('./utils');</div>
                <div className="text-orange-600 dark:text-orange-400 mt-1">// Mix real + mock</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Test Example 1: Mock Functions */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-green-600 dark:text-green-400" />}
          title="Test 1: Mocking Functions"
          description="Mock callbacks and event handlers"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Mocking Callback Functions"
          description="Test that functions are called with correct arguments"
          code={`import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';

describe('SearchBox - Mock Functions', () => {
  test('calls onSearch with input value', () => {
    // Create a mock function
    const mockOnSearch = jest.fn();
    
    render(<SearchBox onSearch={mockOnSearch} />);
    
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });
    
    // User types and clicks search
    fireEvent.change(input, { target: { value: 'React' } });
    fireEvent.click(button);
    
    // Verify mock was called with correct argument
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('React');
  });

  test('tracks multiple calls', () => {
    const mockOnChange = jest.fn();
    
    render(<Input onChange={mockOnChange} />);
    
    const input = screen.getByRole('textbox');
    
    fireEvent.change(input, { target: { value: 'H' } });
    fireEvent.change(input, { target: { value: 'He' } });
    fireEvent.change(input, { target: { value: 'Hel' } });
    
    // Check call count and arguments
    expect(mockOnChange).toHaveBeenCalledTimes(3);
    expect(mockOnChange).toHaveBeenNthCalledWith(1, 'H');
    expect(mockOnChange).toHaveBeenNthCalledWith(2, 'He');
    expect(mockOnChange).toHaveBeenNthCalledWith(3, 'Hel');
  });

  test('provides mock return values', () => {
    const mockCalculate = jest.fn();
    mockCalculate.mockReturnValue(42);
    
    render(<Calculator onCalculate={mockCalculate} />);
    
    const result = mockCalculate(5, 7);
    
    expect(result).toBe(42);
    expect(mockCalculate).toHaveBeenCalledWith(5, 7);
  });
});`}
          output={[
            '✓ SearchBox - Mock Functions › calls onSearch with input value (18ms)',
            '✓ SearchBox - Mock Functions › tracks multiple calls (12ms)',
            '✓ SearchBox - Mock Functions › provides mock return values (9ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ Mock functions work perfectly!'
          ]}
          language="javascript"
          colorTheme="green"
        />
      </div>

      {/* Test Example 2: Mock Modules */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
          title="Test 2: Mocking Modules"
          description="Mock entire modules and their exports"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Mocking Module Dependencies"
          description="Replace module imports with mocks"
          code={`import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';
import * as api from './api';

// Mock the entire api module
jest.mock('./api');

describe('UserProfile - Mock Modules', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('displays user data from API', async () => {
    // Mock the specific function
    api.fetchUser.mockResolvedValue({
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@test.com'
    });
    
    render(<UserProfile userId={1} />);
    
    // Wait for data to load
    expect(await screen.findByText('Sarah Johnson')).toBeInTheDocument();
    expect(await screen.findByText('sarah@test.com')).toBeInTheDocument();
    
    // Verify API was called correctly
    expect(api.fetchUser).toHaveBeenCalledWith(1);
  });

  test('handles API errors', async () => {
    // Mock API to reject
    api.fetchUser.mockRejectedValue(new Error('Network error'));
    
    render(<UserProfile userId={1} />);
    
    // Wait for error message
    expect(await screen.findByText(/network error/i)).toBeInTheDocument();
  });

  test('calls API only once on mount', async () => {
    api.fetchUser.mockResolvedValue({ id: 1, name: 'Test' });
    
    const { rerender } = render(<UserProfile userId={1} />);
    
    await screen.findByText('Test');
    
    expect(api.fetchUser).toHaveBeenCalledTimes(1);
    
    // Rerender with same props - should not call again
    rerender(<UserProfile userId={1} />);
    
    expect(api.fetchUser).toHaveBeenCalledTimes(1);
  });
});`}
          output={[
            '✓ UserProfile - Mock Modules › displays user data from API (156ms)',
            '✓ UserProfile - Mock Modules › handles API errors (134ms)',
            '✓ UserProfile - Mock Modules › calls API only once on mount (145ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ Module mocking works!'
          ]}
          language="javascript"
          colorTheme="blue"
        />
      </div>

      {/* Test Example 3: Spying on Methods */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
          title="Test 3: Spying on Methods"
          description="Track method calls while keeping original behavior"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Using jest.spyOn()"
          description="Spy on console.log, localStorage, and other methods"
          code={`import { render, screen } from '@testing-library/react';
import Logger from './Logger';

describe('Logger - Spy Methods', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Spy on console.log
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Restore original implementation
    consoleLogSpy.mockRestore();
  });

  test('logs messages to console', () => {
    render(<Logger message="Test message" />);
    
    // Verify console.log was called
    expect(consoleLogSpy).toHaveBeenCalledWith('Test message');
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test('spies on localStorage', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
    
    render(<Settings />);
    
    const button = screen.getByRole('button', { name: /save/i });
    fireEvent.click(button);
    
    // Verify localStorage methods were called
    expect(setItemSpy).toHaveBeenCalledWith('theme', 'dark');
    expect(getItemSpy).toHaveBeenCalled();
    
    setItemSpy.mockRestore();
    getItemSpy.mockRestore();
  });

  test('spies on custom methods', () => {
    const utils = {
      formatDate: (date) => date.toLocaleDateString()
    };
    
    const spy = jest.spyOn(utils, 'formatDate');
    
    const result = utils.formatDate(new Date('2024-01-01'));
    
    expect(spy).toHaveBeenCalled();
    expect(result).toBeDefined(); // Original still works
    
    spy.mockRestore();
  });
});`}
          output={[
            '✓ Logger - Spy Methods › logs messages to console (15ms)',
            '✓ Logger - Spy Methods › spies on localStorage (22ms)',
            '✓ Logger - Spy Methods › spies on custom methods (11ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ Spying works perfectly!'
          ]}
          language="javascript"
          colorTheme="purple"
        />
      </div>

      {/* Test Example 4: Partial Mocks */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
          title="Test 4: Partial Mocking"
          description="Mock only specific module exports"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Partial Module Mocking"
          description="Keep some real implementations, mock others"
          code={`import { render, screen } from '@testing-library/react';
import DataDisplay from './DataDisplay';

// Partial mock - keep some real, mock others
jest.mock('./utils', () => {
  const originalModule = jest.requireActual('./utils');
  
  return {
    ...originalModule,
    // Keep real implementations
    // formatDate: originalModule.formatDate,
    // calculateTotal: originalModule.calculateTotal,
    
    // Mock only fetchData
    fetchData: jest.fn()
  };
});

import { fetchData, formatDate, calculateTotal } from './utils';

describe('DataDisplay - Partial Mocks', () => {
  test('uses real formatDate, mocked fetchData', async () => {
    // Mock only fetchData
    fetchData.mockResolvedValue({
      amount: 100,
      date: '2024-01-01'
    });
    
    render(<DataDisplay />);
    
    // fetchData is mocked
    expect(fetchData).toHaveBeenCalled();
    
    // formatDate still uses real implementation
    const formattedDate = formatDate('2024-01-01');
    expect(typeof formattedDate).toBe('string');
    
    // calculateTotal also real
    const total = calculateTotal([10, 20, 30]);
    expect(total).toBe(60);
  });

  test('mixes real and mock implementations', () => {
    // Real function behavior
    const result1 = calculateTotal([5, 10, 15]);
    expect(result1).toBe(30); // Real calculation
    
    // Mock function behavior
    fetchData.mockResolvedValue({ data: 'mocked' });
    
    expect(fetchData).toBeDefined();
    expect(fetchData.mock).toBeDefined(); // It's a mock
  });
});`}
          output={[
            '✓ DataDisplay - Partial Mocks › uses real formatDate, mocked fetchData (98ms)',
            '✓ DataDisplay - Partial Mocks › mixes real and mock implementations (12ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       2 passed, 2 total',
            '// ✅ Partial mocking works!'
          ]}
          language="javascript"
          colorTheme="orange"
        />
      </div>

      {/* Common Mock Patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Common Mocking Patterns"
            description="Frequently used mocking techniques"
            size="lg"
          />

          <div className="space-y-4">
            {/* Mock fetch */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <Badge className="bg-purple-500 mb-3">Mock Fetch API</Badge>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 font-mono text-xs">
                <div className="text-purple-600 dark:text-purple-400">global.fetch = jest.fn();</div>
                <div className="text-purple-600 dark:text-purple-400 mt-2">fetch.mockResolvedValue({'{'}</div>
                <div className="text-purple-600 dark:text-purple-400 ml-4">json: async () {'=>'} ({'{ data: "test" }'})</div>
                <div className="text-purple-600 dark:text-purple-400">{'});'}</div>
              </div>
            </div>

            {/* Mock axios */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <Badge className="bg-blue-500 mb-3">Mock Axios</Badge>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 font-mono text-xs">
                <div className="text-blue-600 dark:text-blue-400">import axios from 'axios';</div>
                <div className="text-blue-600 dark:text-blue-400 mt-2">jest.mock('axios');</div>
                <div className="text-blue-600 dark:text-blue-400 mt-2">axios.get.mockResolvedValue({'{'}</div>
                <div className="text-blue-600 dark:text-blue-400 ml-4">data: {'{ users: [] }'}</div>
                <div className="text-blue-600 dark:text-blue-400">{'});'}</div>
              </div>
            </div>

            {/* Mock React Router */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <Badge className="bg-green-500 mb-3">Mock React Router</Badge>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 font-mono text-xs">
                <div className="text-green-600 dark:text-green-400">jest.mock('react-router-dom', () {'=>'} ({'{'}</div>
                <div className="text-green-600 dark:text-green-400 ml-4">...jest.requireActual('react-router-dom'),</div>
                <div className="text-green-600 dark:text-green-400 ml-4">useNavigate: () {'=>'} mockNavigate,</div>
                <div className="text-green-600 dark:text-green-400 ml-4">useParams: () {'=>'} ({'{ id: "123" }'})</div>
                <div className="text-green-600 dark:text-green-400">{'}));'}</div>
              </div>
            </div>

            {/* Mock Context */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <Badge className="bg-orange-500 mb-3">Mock Context</Badge>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 font-mono text-xs">
                <div className="text-orange-600 dark:text-orange-400">const mockContextValue = {'{'}</div>
                <div className="text-orange-600 dark:text-orange-400 ml-4">user: {'{ name: "Test" }'},</div>
                <div className="text-orange-600 dark:text-orange-400 ml-4">logout: jest.fn()</div>
                <div className="text-orange-600 dark:text-orange-400">{'};\n'}</div>
                <div className="text-orange-600 dark:text-orange-400 mt-2">{'<UserContext.Provider value={mockContextValue}>'}</div>
                <div className="text-orange-600 dark:text-orange-400 ml-4">{'<Component />'}</div>
                <div className="text-orange-600 dark:text-orange-400">{'</UserContext.Provider>'}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Mocking Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Clear Mocks Between Tests</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Always clear or reset mocks in <code className="bg-green-100 dark:bg-green-900 px-1 rounded">beforeEach</code> to avoid test pollution.
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 font-mono text-xs">
                  <div className="text-green-600 dark:text-green-400">beforeEach(() {'=>'} {'{'}</div>
                  <div className="text-green-600 dark:text-green-400 ml-2">jest.clearAllMocks();</div>
                  <div className="text-green-600 dark:text-green-400">{'});'}</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Mock Only What You Need</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Don't over-mock. Only mock external dependencies that are outside your control (APIs, databases, etc.).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Restore Spies</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Always restore spies after tests to avoid affecting other tests.
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 font-mono text-xs">
                  <div className="text-purple-600 dark:text-purple-400">afterEach(() {'=>'} {'{'}</div>
                  <div className="text-purple-600 dark:text-purple-400 ml-2">spy.mockRestore();</div>
                  <div className="text-purple-600 dark:text-purple-400">{'});'}</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Test Mock Behavior</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Verify mocks are called correctly: check call count, arguments, and return values.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mock Assertions */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 dark:from-blue-950/10 dark:to-indigo-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Mock Assertions Cheat Sheet"
            description="Common assertions for testing mocks"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Call Tracking</h4>
              <div className="space-y-2 font-mono text-xs">
                <div className="text-blue-600 dark:text-blue-400">expect(mock).toHaveBeenCalled()</div>
                <div className="text-blue-600 dark:text-blue-400">expect(mock).toHaveBeenCalledTimes(2)</div>
                <div className="text-blue-600 dark:text-blue-400">expect(mock).toHaveBeenCalledWith(arg1)</div>
                <div className="text-blue-600 dark:text-blue-400">expect(mock).toHaveBeenLastCalledWith(arg)</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Return Values</h4>
              <div className="space-y-2 font-mono text-xs">
                <div className="text-green-600 dark:text-green-400">mock.mockReturnValue(value)</div>
                <div className="text-green-600 dark:text-green-400">mock.mockResolvedValue(value)</div>
                <div className="text-green-600 dark:text-green-400">mock.mockRejectedValue(error)</div>
                <div className="text-green-600 dark:text-green-400">mock.mockImplementation(fn)</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Call Order</h4>
              <div className="space-y-2 font-mono text-xs">
                <div className="text-purple-600 dark:text-purple-400">expect(mock).toHaveBeenNthCalledWith(1, arg)</div>
                <div className="text-purple-600 dark:text-purple-400">mock.mock.calls[0][0] // First call, first arg</div>
                <div className="text-purple-600 dark:text-purple-400">mock.mock.results[0].value // First return</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">Reset & Clear</h4>
              <div className="space-y-2 font-mono text-xs">
                <div className="text-orange-600 dark:text-orange-400">mock.mockClear() // Clear history</div>
                <div className="text-orange-600 dark:text-orange-400">mock.mockReset() // Clear + remove impl</div>
                <div className="text-orange-600 dark:text-orange-400">mock.mockRestore() // Restore original</div>
                <div className="text-orange-600 dark:text-orange-400">jest.clearAllMocks() // Clear all</div>
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
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">jest.fn()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Create mock functions to track calls and control return values.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mb-3">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">jest.mock()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Mock entire modules to isolate components from dependencies.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">jest.spyOn()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Spy on methods while keeping original implementation intact.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Clear Mocks</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Always clear mocks between tests to avoid test pollution.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Mock APIs</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Mock fetch, axios, and external APIs for fast, isolated tests.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center mb-3">
                <Box className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Partial Mocks</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use requireActual to mix real and mocked implementations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-2 border-cyan-300 dark:border-cyan-700">
        <Rocket className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
        <AlertTitle className="text-cyan-900 dark:text-cyan-100 text-lg">Congratulations!</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
          <p>
            You've completed the React Testing series! You now know:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Testing Overview - Why testing matters and testing tools</li>
            <li>Component Testing - Testing rendering, props, state, and events</li>
            <li>Hook Testing - Testing custom hooks in isolation</li>
            <li>Async Testing - Handling loading states and API calls</li>
            <li>Mocking & Stubbing - Isolating components with mocks</li>
          </ul>
          <p className="mt-3 font-semibold">
            You're now equipped to write comprehensive, reliable tests for any React application! 🎉
          </p>
        </AlertDescription>
      </Alert>

    </div>
  );
}

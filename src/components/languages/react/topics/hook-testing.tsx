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
  Zap,
  Target,
  Rocket,
  ArrowRight,
  Play,
  Box,
  Layers
} from 'lucide-react';

interface HookTestingProps {
  onOpenEditor?: (code: string) => void;
}

export default function HookTesting({ onOpenEditor }: HookTestingProps) {
  const useCounterHookCode = `// Custom Hook
function useCounter(initialValue = 0) {
  const [count, setCount] = React.useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Component using the hook
function CounterApp() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'system-ui',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        color: '#06b6d4',
        marginBottom: '30px',
        fontSize: '28px'
      }}>
        useCounter Hook Demo
      </h2>
      
      <div style={{
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0ea5e9',
        marginBottom: '30px',
        padding: '30px',
        background: '#f0f9ff',
        borderRadius: '16px',
        border: '3px solid #0ea5e9'
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
          onClick={decrement}
          style={{
            padding: '14px 28px',
            fontSize: '16px',
            background: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          - Decrement
        </button>
        <button 
          onClick={increment}
          style={{
            padding: '14px 28px',
            fontSize: '16px',
            background: '#22c55e',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          + Increment
        </button>
      </div>
      
      <button 
        onClick={reset}
        style={{
          padding: '12px 24px',
          fontSize: '14px',
          background: '#64748b',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '500'
        }}
      >
        🔄 Reset
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CounterApp />);`;

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Zap}
        category="React · Testing"
        title="Hook Testing"
        description="Learn how to test custom React hooks in isolation using renderHook from React Testing Library. Master testing hook state, side effects, and complex hook logic."
        colorTheme="cyan"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Why Test Hooks?"
            description="Custom hooks need isolated testing"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Custom hooks contain reusable logic that you want to test independently from components. Testing hooks in isolation ensures your logic works correctly before using it across your app.
          </p>

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            React Testing Library provides <code className="bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded text-cyan-700 dark:text-cyan-300">renderHook()</code> specifically for testing hooks without needing a full component!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-cyan-700 dark:text-cyan-300">Isolated Testing</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Test hook logic independently without rendering components.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Faster Tests</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No DOM rendering needed, hooks tests run lightning fast.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-purple-700 dark:text-purple-300">Reusable Logic</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Ensure your shared hook logic works before using it everywhere.
              </p>
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
                Try a Custom useCounter Hook
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                See a custom hook in action! This useCounter hook provides state and functions. We'll learn to test it in isolation.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="text-xs border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Custom Hook
                </Badge>
                <Badge variant="outline" className="text-xs border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  State Management
                </Badge>
                <Badge variant="outline" className="text-xs border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Function Returns
                </Badge>
              </div>

              {onOpenEditor && (
                <Button
                  onClick={() => onOpenEditor(useCounterHookCode)}
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
          title="Hook Preview"
          description="See useCounter hook in action"
          size="lg"
        />
        <FrontendCodePreview
          title="useCounter Hook Demo"
          html={`<div id="root"></div>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`}
          js={useCounterHookCode}
          colorTheme="cyan"
        />
      </div>

      {/* renderHook Basics */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="The renderHook Function"
            description="Your tool for testing hooks"
            size="lg"
          />

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-700 dark:text-purple-300">renderHook()</code> function from React Testing Library lets you test hooks without creating a component. It returns the hook's result and helper functions.
          </p>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-4 text-lg">Basic Structure</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="px-4 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-500 flex-1">
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">1. Call renderHook</p>
                  <code className="text-xs text-blue-600 dark:text-blue-400">const {'{ result }'} = renderHook(() {'=>'} useCounter())</code>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-3 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-500 flex-1">
                  <p className="font-semibold text-green-700 dark:text-green-300 mb-1">2. Access Current Value</p>
                  <code className="text-xs text-green-600 dark:text-green-400">result.current.count // Get hook's return value</code>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-2 border-purple-500 flex-1">
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-1">3. Call Hook Functions</p>
                  <code className="text-xs text-purple-600 dark:text-purple-400">act(() {'=>'} result.current.increment())</code>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg border-2 border-orange-500 flex-1">
                  <p className="font-semibold text-orange-700 dark:text-orange-300 mb-1">4. Assert New Value</p>
                  <code className="text-xs text-orange-600 dark:text-orange-400">expect(result.current.count).toBe(1)</code>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Important: Use result.current</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Always access hook values through <code className="bg-purple-200 dark:bg-purple-800 px-1 rounded">result.current</code>. This ensures you're reading the most up-to-date value after state changes!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Test Example 1: Basic Hook Test */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-green-600 dark:text-green-400" />}
          title="Test 1: Basic Hook Testing"
          description="Test initial state and simple updates"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing useCounter Hook"
          description="Test hook initialization and state updates"
          code={`import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter Hook', () => {
  test('initializes with default value of 0', () => {
    const { result } = renderHook(() => useCounter());
    
    expect(result.current.count).toBe(0);
  });

  test('initializes with custom value', () => {
    const { result } = renderHook(() => useCounter(10));
    
    expect(result.current.count).toBe(10);
  });

  test('increments count', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });

  test('decrements count', () => {
    const { result } = renderHook(() => useCounter(5));
    
    act(() => {
      result.current.decrement();
    });
    
    expect(result.current.count).toBe(4);
  });

  test('resets to initial value', () => {
    const { result } = renderHook(() => useCounter(10));
    
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(12);
    
    act(() => {
      result.current.reset();
    });
    
    expect(result.current.count).toBe(10);
  });
});`}
          output={[
            '✓ useCounter Hook › initializes with default value of 0 (8ms)',
            '✓ useCounter Hook › initializes with custom value (6ms)',
            '✓ useCounter Hook › increments count (9ms)',
            '✓ useCounter Hook › decrements count (7ms)',
            '✓ useCounter Hook › resets to initial value (11ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       5 passed, 5 total',
            '// ✅ All hook tests passed!'
          ]}
          language="javascript"
          colorTheme="green"
        />
      </div>

      {/* Test Example 2: Hook with Props */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
          title="Test 2: Updating Hook Props"
          description="Test hooks when props change"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing Hook Prop Changes with rerender"
          description="Use rerender to update hook arguments"
          code={`import { renderHook } from '@testing-library/react';
import { useUserData } from './useUserData';

describe('useUserData Hook - Props', () => {
  test('returns data for initial user ID', () => {
    const { result } = renderHook(
      ({ userId }) => useUserData(userId),
      { initialProps: { userId: 1 } }
    );
    
    expect(result.current.userId).toBe(1);
  });

  test('updates when user ID changes', () => {
    const { result, rerender } = renderHook(
      ({ userId }) => useUserData(userId),
      { initialProps: { userId: 1 } }
    );
    
    expect(result.current.userId).toBe(1);
    
    // Rerender with new props
    rerender({ userId: 2 });
    
    expect(result.current.userId).toBe(2);
  });

  test('handles multiple prop updates', () => {
    const { result, rerender } = renderHook(
      ({ userId }) => useUserData(userId),
      { initialProps: { userId: 1 } }
    );
    
    expect(result.current.userId).toBe(1);
    
    rerender({ userId: 2 });
    expect(result.current.userId).toBe(2);
    
    rerender({ userId: 3 });
    expect(result.current.userId).toBe(3);
  });
});`}
          output={[
            '✓ useUserData Hook - Props › returns data for initial user ID (10ms)',
            '✓ useUserData Hook - Props › updates when user ID changes (12ms)',
            '✓ useUserData Hook - Props › handles multiple prop updates (14ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ Hook props testing works!'
          ]}
          language="javascript"
          colorTheme="blue"
        />
      </div>

      {/* Test Example 3: Hook with Side Effects */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
          title="Test 3: Hooks with useEffect"
          description="Test hooks that perform side effects"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing Side Effects"
          description="Test hooks that use useEffect or call APIs"
          code={`import { renderHook, waitFor } from '@testing-library/react';
import { useDocumentTitle } from './useDocumentTitle';

describe('useDocumentTitle Hook - Side Effects', () => {
  // Store original title
  const originalTitle = document.title;
  
  afterEach(() => {
    // Restore original title after each test
    document.title = originalTitle;
  });

  test('sets document title on mount', () => {
    renderHook(() => useDocumentTitle('New Title'));
    
    expect(document.title).toBe('New Title');
  });

  test('updates document title when it changes', () => {
    const { rerender } = renderHook(
      ({ title }) => useDocumentTitle(title),
      { initialProps: { title: 'First Title' } }
    );
    
    expect(document.title).toBe('First Title');
    
    rerender({ title: 'Second Title' });
    
    expect(document.title).toBe('Second Title');
  });

  test('restores original title on unmount', () => {
    const { unmount } = renderHook(() => useDocumentTitle('Test Title'));
    
    expect(document.title).toBe('Test Title');
    
    unmount();
    
    expect(document.title).toBe(originalTitle);
  });
});`}
          output={[
            '✓ useDocumentTitle Hook - Side Effects › sets document title on mount (9ms)',
            '✓ useDocumentTitle Hook - Side Effects › updates document title when it changes (11ms)',
            '✓ useDocumentTitle Hook - Side Effects › restores original title on unmount (8ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ Side effects tested successfully!'
          ]}
          language="javascript"
          colorTheme="purple"
        />
      </div>

      {/* Test Example 4: Async Hooks */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
          title="Test 4: Async Hooks"
          description="Test hooks with async operations"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing Async Hooks"
          description="Handle async operations with waitFor"
          code={`import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from './useFetch';

// Mock fetch API
global.fetch = jest.fn();

describe('useFetch Hook - Async', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('starts with loading state', () => {
    fetch.mockResolvedValue({
      json: async () => ({ data: 'test' })
    });
    
    const { result } = renderHook(() => useFetch('/api/data'));
    
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
  });

  test('fetches and returns data', async () => {
    const mockData = { id: 1, name: 'Test' };
    fetch.mockResolvedValue({
      json: async () => mockData
    });
    
    const { result } = renderHook(() => useFetch('/api/users/1'));
    
    expect(result.current.loading).toBe(true);
    
    // Wait for async operation to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });

  test('handles fetch errors', async () => {
    const errorMessage = 'Network error';
    fetch.mockRejectedValue(new Error(errorMessage));
    
    const { result } = renderHook(() => useFetch('/api/data'));
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    
    expect(result.current.error).toBe(errorMessage);
    expect(result.current.data).toBe(null);
  });
});`}
          output={[
            '✓ useFetch Hook - Async › starts with loading state (7ms)',
            '✓ useFetch Hook - Async › fetches and returns data (45ms)',
            '✓ useFetch Hook - Async › handles fetch errors (38ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ Async hooks tested!'
          ]}
          language="javascript"
          colorTheme="orange"
        />
      </div>

      {/* Common Patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Common Hook Testing Patterns"
            description="Best practices for different scenarios"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            {/* act() wrapper */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <Badge className="bg-purple-500 mb-4">act() Wrapper</Badge>
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">State Updates</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Wrap state-changing functions in <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">act()</code>
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-purple-600 dark:text-purple-400">act(() {'=>'} {'{'})</div>
                <div className="text-purple-600 dark:text-purple-400 ml-4">result.current.increment();</div>
                <div className="text-purple-600 dark:text-purple-400">{'});'}</div>
              </div>
            </div>

            {/* rerender */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <Badge className="bg-blue-500 mb-4">rerender()</Badge>
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Prop Changes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Use <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">rerender()</code> to update hook props
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-blue-600 dark:text-blue-400">const {'{ rerender }'} = renderHook(...);</div>
                <div className="text-blue-600 dark:text-blue-400 mt-1">rerender({'{ userId: 2 }'});</div>
              </div>
            </div>

            {/* waitFor */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <Badge className="bg-green-500 mb-4">waitFor()</Badge>
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Async Operations</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Wait for async updates with <code className="bg-green-100 dark:bg-green-900 px-1 rounded">waitFor()</code>
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-green-600 dark:text-green-400">await waitFor(() {'=>'} {'{'})</div>
                <div className="text-green-600 dark:text-green-400 ml-4">expect(result.current.data)</div>
                <div className="text-green-600 dark:text-green-400 ml-6">.toBeDefined();</div>
                <div className="text-green-600 dark:text-green-400">{'});'}</div>
              </div>
            </div>

            {/* unmount */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <Badge className="bg-orange-500 mb-4">unmount()</Badge>
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">Cleanup Testing</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Test cleanup with <code className="bg-orange-100 dark:bg-orange-900 px-1 rounded">unmount()</code>
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-orange-600 dark:text-orange-400">const {'{ unmount }'} = renderHook(...);</div>
                <div className="text-orange-600 dark:text-orange-400 mt-1">unmount();</div>
                <div className="text-orange-600 dark:text-orange-400 mt-1">// Test cleanup happened</div>
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
            title="Hook Testing Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Test Hooks in Isolation</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use <code className="bg-green-100 dark:bg-green-900 px-1 rounded">renderHook()</code> to test hooks without components. This makes tests faster and more focused on the hook's logic.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Always Use result.current</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Access hook values through <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">result.current</code>. This ensures you read the latest state after updates. Don't destructure directly!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Wrap State Changes in act()</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Wrap all state-changing function calls in <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">act()</code>. This ensures React processes all updates before assertions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Test Cleanup</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If your hook has side effects, test that cleanup happens properly using <code className="bg-orange-100 dark:bg-orange-900 px-1 rounded">unmount()</code>.
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
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">renderHook()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Test hooks in isolation without creating components. Returns result object.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">result.current</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Always access hook values through result.current for latest state.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
                <Box className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">act() Wrapper</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Wrap state-changing calls in act() to ensure all updates are processed.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">rerender()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Update hook props/arguments by calling rerender with new values.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">waitFor()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Handle async operations by waiting for conditions to be met.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Test Cleanup</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use unmount() to test side effect cleanup and memory leaks.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-2 border-cyan-300 dark:border-cyan-700">
        <Rocket className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
        <AlertTitle className="text-cyan-900 dark:text-cyan-100 text-lg">Master Hook Testing!</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
          <p>
            You now know how to test custom hooks in isolation! Next topics:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Async Testing - Handle loading states and API calls in tests</li>
            <li>Mocking & Stubbing - Isolate code with mocks and test doubles</li>
          </ul>
        </AlertDescription>
      </Alert>

    </div>
  );
}

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
  Clock,
  Loader2,
  AlertCircle
} from 'lucide-react';

interface AsyncTestingProps {
  onOpenEditor?: (code: string) => void;
}

export default function AsyncTesting({ onOpenEditor }: AsyncTestingProps) {
  const asyncComponentCode = `function UserProfile({ userId }) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    
    // Simulate API call
    setTimeout(() => {
      if (userId === 'error') {
        setError('Failed to load user');
        setLoading(false);
      } else {
        setUser({
          id: userId,
          name: 'Sarah Johnson',
          email: 'sarah@example.com',
          role: 'Developer'
        });
        setLoading(false);
      }
    }, 1500);
  }, [userId]);

  if (loading) {
    return (
      <div style={{
        padding: '40px',
        textAlign: 'center',
        fontFamily: 'system-ui',
        background: '#f0f9ff',
        borderRadius: '12px',
        border: '2px solid #0ea5e9'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '4px solid #e0f2fe',
          borderTopColor: '#0ea5e9',
          borderRadius: '50%',
          margin: '0 auto 20px',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p style={{ color: '#0369a1', fontSize: '18px', fontWeight: '600' }}>
          Loading user data...
        </p>
        <style>{\`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        \`}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        padding: '40px',
        textAlign: 'center',
        fontFamily: 'system-ui',
        background: '#fef2f2',
        borderRadius: '12px',
        border: '2px solid #ef4444'
      }}>
        <div style={{
          fontSize: '48px',
          marginBottom: '15px'
        }}>❌</div>
        <h3 style={{ color: '#991b1b', marginBottom: '10px' }}>Error</h3>
        <p style={{ color: '#7f1d1d' }}>{error}</p>
      </div>
    );
  }

  return (
    <div style={{
      padding: '40px',
      fontFamily: 'system-ui',
      background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      borderRadius: '16px',
      color: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '20px'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '36px'
        }}>👤</div>
        <div>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>
            {user.name}
          </h2>
          <p style={{ opacity: 0.9, fontSize: '16px' }}>{user.role}</p>
        </div>
      </div>
      <div style={{
        background: 'rgba(255,255,255,0.2)',
        padding: '20px',
        borderRadius: '12px'
      }}>
        <p style={{ marginBottom: '10px' }}>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>User ID:</strong> {user.id}
        </p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ padding: '20px' }}>
    <UserProfile userId="user123" />
  </div>
);`;

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Clock}
        category="React · Testing"
        title="Async Testing"
        description="Master testing asynchronous operations in React - learn to handle loading states, API calls, timers, and async side effects with confidence using waitFor and findBy queries."
        colorTheme="cyan"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Clock className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Why Async Testing Matters"
            description="Most apps depend on async operations"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Modern React apps are full of asynchronous operations: fetching data from APIs, waiting for user actions, handling loading states, and more. Testing these scenarios requires special techniques to wait for async operations to complete.
          </p>

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            React Testing Library provides powerful tools like <code className="bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded text-cyan-700 dark:text-cyan-300">waitFor()</code> and <code className="bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded text-cyan-700 dark:text-cyan-300">findBy*</code> queries to handle these async scenarios!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center mb-4">
                <Loader2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-cyan-700 dark:text-cyan-300">Loading States</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Test that loading indicators appear and disappear correctly.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">API Calls</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Verify data fetching, success, and error handling work correctly.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-purple-700 dark:text-purple-300">Timers & Delays</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Test components with setTimeout, debounce, and throttle.
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
                Try an Async Component
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This UserProfile component fetches data asynchronously. Watch it transition from loading → success state. Perfect for testing async behavior!
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="text-xs border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Loading State
                </Badge>
                <Badge variant="outline" className="text-xs border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Async Data Fetch
                </Badge>
                <Badge variant="outline" className="text-xs border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Error Handling
                </Badge>
              </div>

              {onOpenEditor && (
                <Button
                  onClick={() => onOpenEditor(asyncComponentCode)}
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
          title="Async Component Preview"
          description="See loading, success, and error states"
          size="lg"
        />
        <FrontendCodePreview
          title="UserProfile Async Component"
          html={`<div id="root"></div>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`}
          js={asyncComponentCode}
          colorTheme="cyan"
        />
      </div>

      {/* Async Testing Tools */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Async Testing Tools"
            description="Three ways to wait for async updates"
            size="lg"
          />

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            React Testing Library gives you multiple tools to handle async operations. Choose the right one for your situation:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {/* waitFor */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <Badge className="bg-purple-500 mb-4">waitFor()</Badge>
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3 text-lg">Wait for Condition</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Wait until a condition becomes true. Most flexible option!
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-purple-600 dark:text-purple-400">await waitFor(() => {'{'}</div>
                <div className="text-purple-600 dark:text-purple-400 ml-4">expect(element)</div>
                <div className="text-purple-600 dark:text-purple-400 ml-6">.toBeInTheDocument();</div>
                <div className="text-purple-600 dark:text-purple-400">{'});'}</div>
              </div>
            </div>

            {/* findBy */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <Badge className="bg-blue-500 mb-4">findBy*</Badge>
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3 text-lg">Find Async Element</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Query + wait combined. Returns promise that resolves when element appears.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-blue-600 dark:text-blue-400">const user = await</div>
                <div className="text-blue-600 dark:text-blue-400 ml-2">screen.findByText(</div>
                <div className="text-blue-600 dark:text-blue-400 ml-4">'Sarah Johnson'</div>
                <div className="text-blue-600 dark:text-blue-400 ml-2">);</div>
              </div>
            </div>

            {/* waitForElementToBeRemoved */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <Badge className="bg-green-500 mb-4">waitForElementToBeRemoved()</Badge>
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3 text-lg">Wait for Removal</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Wait for an element to disappear from the DOM.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-green-600 dark:text-green-400">await</div>
                <div className="text-green-600 dark:text-green-400 ml-2">waitForElementToBeRemoved(</div>
                <div className="text-green-600 dark:text-green-400 ml-4">loadingSpinner</div>
                <div className="text-green-600 dark:text-green-400 ml-2">);</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Test Example 1: Testing Loading States */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-green-600 dark:text-green-400" />}
          title="Test 1: Loading States"
          description="Test that loading indicators appear and disappear"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing Loading State"
          description="Verify loading appears then disappears when data loads"
          code={`import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';

// Mock fetch API
global.fetch = jest.fn();

describe('UserProfile - Loading State', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('shows loading state initially', () => {
    fetch.mockResolvedValue({
      json: async () => ({ name: 'Sarah', email: 'sarah@test.com' })
    });
    
    render(<UserProfile userId="123" />);
    
    // Loading should appear immediately
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('hides loading after data loads', async () => {
    fetch.mockResolvedValue({
      json: async () => ({ name: 'Sarah', email: 'sarah@test.com' })
    });
    
    render(<UserProfile userId="123" />);
    
    // Wait for loading to disappear
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
  });

  test('shows user data after loading completes', async () => {
    const userData = { name: 'Sarah Johnson', email: 'sarah@test.com' };
    fetch.mockResolvedValue({
      json: async () => userData
    });
    
    render(<UserProfile userId="123" />);
    
    // Wait for and verify user data appears
    expect(await screen.findByText('Sarah Johnson')).toBeInTheDocument();
    expect(await screen.findByText(/sarah@test.com/i)).toBeInTheDocument();
  });
});`}
          output={[
            '✓ UserProfile - Loading State › shows loading state initially (12ms)',
            '✓ UserProfile - Loading State › hides loading after data loads (156ms)',
            '✓ UserProfile - Loading State › shows user data after loading completes (178ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ Loading state tests passed!'
          ]}
          language="javascript"
          colorTheme="green"
        />
      </div>

      {/* Test Example 2: Testing API Calls */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
          title="Test 2: API Calls"
          description="Test data fetching and API integration"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing API Integration"
          description="Mock API calls and verify correct data handling"
          code={`import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

global.fetch = jest.fn();

describe('UserList - API Calls', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('fetches and displays users', async () => {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];
    
    fetch.mockResolvedValue({
      json: async () => users
    });
    
    render(<UserList />);
    
    // Wait for users to appear
    expect(await screen.findByText('Alice')).toBeInTheDocument();
    expect(await screen.findByText('Bob')).toBeInTheDocument();
    
    // Verify fetch was called correctly
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/api/users');
  });

  test('calls API with correct parameters', async () => {
    fetch.mockResolvedValue({
      json: async () => []
    });
    
    render(<UserList filter="active" />);
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/users?status=active');
    });
  });

  test('refetches when props change', async () => {
    fetch.mockResolvedValue({
      json: async () => []
    });
    
    const { rerender } = render(<UserList filter="active" />);
    
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    
    // Change props and verify new fetch
    rerender(<UserList filter="inactive" />);
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(fetch).toHaveBeenLastCalledWith('/api/users?status=inactive');
    });
  });
});`}
          output={[
            '✓ UserList - API Calls › fetches and displays users (185ms)',
            '✓ UserList - API Calls › calls API with correct parameters (142ms)',
            '✓ UserList - API Calls › refetches when props change (203ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ API integration works!'
          ]}
          language="javascript"
          colorTheme="blue"
        />
      </div>

      {/* Test Example 3: Error Handling */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-red-600 dark:text-red-400" />}
          title="Test 3: Error Handling"
          description="Test error states and error messages"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing Error States"
          description="Verify error handling and error messages display correctly"
          code={`import { render, screen, waitFor } from '@testing-library/react';
import DataFetcher from './DataFetcher';

global.fetch = jest.fn();

describe('DataFetcher - Error Handling', () => {
  beforeEach(() => {
    fetch.mockClear();
    // Suppress console errors in tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  test('displays error message when fetch fails', async () => {
    fetch.mockRejectedValue(new Error('Network error'));
    
    render(<DataFetcher />);
    
    // Wait for error message to appear
    expect(await screen.findByText(/network error/i)).toBeInTheDocument();
    
    // Loading should be gone
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });

  test('displays error for 404 response', async () => {
    fetch.mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({ message: 'Not found' })
    });
    
    render(<DataFetcher url="/api/users/999" />);
    
    expect(await screen.findByText(/not found/i)).toBeInTheDocument();
  });

  test('allows retry after error', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed'))
          .mockResolvedValueOnce({
            json: async () => ({ data: 'Success' })
          });
    
    render(<DataFetcher />);
    
    // Wait for error
    const retryButton = await screen.findByRole('button', { name: /retry/i });
    
    // Click retry
    fireEvent.click(retryButton);
    
    // Wait for success
    expect(await screen.findByText('Success')).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledTimes(2);
  });
});`}
          output={[
            '✓ DataFetcher - Error Handling › displays error message when fetch fails (167ms)',
            '✓ DataFetcher - Error Handling › displays error for 404 response (145ms)',
            '✓ DataFetcher - Error Handling › allows retry after error (198ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ Error handling tested!'
          ]}
          language="javascript"
          colorTheme="orange"
        />
      </div>

      {/* Test Example 4: Testing Timers */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
          title="Test 4: Timers & Debounce"
          description="Test components with setTimeout and debounce"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Testing Timers"
          description="Handle setTimeout, setInterval, and debounce in tests"
          code={`import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from './SearchBox';

// Mock timer functions
jest.useFakeTimers();

describe('SearchBox - Timers', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  test('debounces search input', async () => {
    const handleSearch = jest.fn();
    const user = userEvent.setup({ delay: null });
    
    render(<SearchBox onSearch={handleSearch} debounceMs={500} />);
    
    const input = screen.getByRole('textbox');
    
    // Type quickly (should be debounced)
    await user.type(input, 'React');
    
    // Search should not be called yet
    expect(handleSearch).not.toHaveBeenCalled();
    
    // Fast-forward time
    jest.advanceTimersByTime(500);
    
    // Now search should be called
    await waitFor(() => {
      expect(handleSearch).toHaveBeenCalledWith('React');
      expect(handleSearch).toHaveBeenCalledTimes(1);
    });
  });

  test('shows notification after delay', async () => {
    render(<Notification message="Saved!" duration={3000} />);
    
    // Notification should be visible
    expect(screen.getByText('Saved!')).toBeInTheDocument();
    
    // Fast-forward time
    jest.advanceTimersByTime(3000);
    
    // Wait for notification to disappear
    await waitFor(() => {
      expect(screen.queryByText('Saved!')).not.toBeInTheDocument();
    });
  });

  test('auto-saves with interval', async () => {
    const handleSave = jest.fn();
    
    render(<AutoSaveEditor onSave={handleSave} interval={5000} />);
    
    // No saves yet
    expect(handleSave).not.toHaveBeenCalled();
    
    // Fast-forward 5 seconds
    jest.advanceTimersByTime(5000);
    expect(handleSave).toHaveBeenCalledTimes(1);
    
    // Fast-forward another 5 seconds
    jest.advanceTimersByTime(5000);
    expect(handleSave).toHaveBeenCalledTimes(2);
  });
});`}
          output={[
            '✓ SearchBox - Timers › debounces search input (89ms)',
            '✓ SearchBox - Timers › shows notification after delay (52ms)',
            '✓ SearchBox - Timers › auto-saves with interval (67ms)',
            '',
            'Test Suites: 1 passed, 1 total',
            'Tests:       3 passed, 3 total',
            '// ✅ Timer tests passed!'
          ]}
          language="javascript"
          colorTheme="purple"
        />
      </div>

      {/* Common Patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Async Testing Decision Tree"
            description="Choose the right approach"
            size="lg"
          />

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                  ?
                </div>
                <div className="flex-1 px-4 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Need to wait for an element to appear?</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    ✅ Use <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">findBy*</code> queries
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                  ?
                </div>
                <div className="flex-1 px-4 py-3 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <p className="font-semibold text-green-700 dark:text-green-300 mb-2">Need to wait for an element to disappear?</p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    ✅ Use <code className="bg-green-200 dark:bg-green-800 px-1 rounded">waitForElementToBeRemoved()</code>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                  ?
                </div>
                <div className="flex-1 px-4 py-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                  <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Need to wait for any custom condition?</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400">
                    ✅ Use <code className="bg-purple-200 dark:bg-purple-800 px-1 rounded">waitFor(() => expect(...))</code>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                  ?
                </div>
                <div className="flex-1 px-4 py-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                  <p className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Testing setTimeout or setInterval?</p>
                  <p className="text-sm text-orange-600 dark:text-orange-400">
                    ✅ Use <code className="bg-orange-200 dark:bg-orange-800 px-1 rounded">jest.useFakeTimers()</code> and <code className="bg-orange-200 dark:bg-orange-800 px-1 rounded">jest.advanceTimersByTime()</code>
                  </p>
                </div>
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
            title="Async Testing Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Prefer findBy Over getBy + waitFor</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Use <code className="bg-green-100 dark:bg-green-900 px-1 rounded">findBy*</code> instead of wrapping <code className="bg-green-100 dark:bg-green-900 px-1 rounded">getBy*</code> in <code className="bg-green-100 dark:bg-green-900 px-1 rounded">waitFor</code>.
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 font-mono text-xs mt-2">
                  <div className="text-green-600 dark:text-green-400">// ✅ Good</div>
                  <div className="text-green-600 dark:text-green-400">await screen.findByText('Loaded');</div>
                  <div className="text-red-600 dark:text-red-400 mt-2">// ❌ Verbose</div>
                  <div className="text-red-600 dark:text-red-400">await waitFor(() => screen.getByText('Loaded'));</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Don't Forget to Await</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">await</code> async queries and <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">waitFor</code>. Forgetting causes tests to fail unexpectedly!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Mock External Dependencies</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always mock <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">fetch</code>, axios, or other external APIs. Don't make real network requests in tests!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Test All Async States</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Test loading state, success state, and error state. Cover the full async lifecycle!
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
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">findBy* Queries</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Wait for elements to appear. Returns a promise that resolves when found.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">waitFor()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Wait for any custom condition. Most flexible async testing tool.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
                <Loader2 className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Test Loading States</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Verify loading indicators appear and disappear correctly.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Mock APIs</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Always mock fetch and external APIs. No real network calls!
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-3">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Test Errors</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Test error states and verify error messages display correctly.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Fake Timers</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use jest.useFakeTimers() for setTimeout and debounce testing.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-2 border-cyan-300 dark:border-cyan-700">
        <Rocket className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
        <AlertTitle className="text-cyan-900 dark:text-cyan-100 text-lg">You're an Async Testing Pro!</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
          <p>
            You now know how to test all async scenarios! Final topic:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Mocking & Stubbing - Master mocking functions, modules, and APIs</li>
          </ul>
        </AlertDescription>
      </Alert>

    </div>
  );
}

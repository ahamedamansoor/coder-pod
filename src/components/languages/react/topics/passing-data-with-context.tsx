'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Lightbulb, CheckCircle2, Database, Share2 } from 'lucide-react';

export default function PassingDataWithContext() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Share2}
        category="React · Context API"
        title="Passing Data with Context"
        description="Learn how to pass different types of data through Context, including strings, objects, and functions for updating state."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Database className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What Can You Pass?"
              description="Context accepts any value"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Context can pass <strong>any JavaScript value</strong> - strings, numbers, booleans, arrays, objects, and even functions!
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">Primitives</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Strings</li>
                  <li>• Numbers</li>
                  <li>• Booleans</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Badge className="bg-purple-500 mb-3">Complex Types</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Objects</li>
                  <li>• Arrays</li>
                  <li>• Nested data</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">Functions</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Event handlers</li>
                  <li>• State updaters</li>
                  <li>• Callbacks</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Share2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="User Authentication Context - Live Demo"
            description="Complete example with state and functions"
            size="lg"
          />
          <FrontendCodePreview
            title="Auth Context with Login/Logout"
            description="Real-world example: user authentication with Context"
            colorTheme="green"
            react={`// Create Auth Context
const AuthContext = React.createContext();

// Auth Provider with state and functions
function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  // Login function
  const login = (username, password) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUser({
        id: 1,
        username,
        email: \`\${username}@example.com\`,
        role: 'user'
      });
      setIsLoading(false);
    }, 1000);
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // Context value: object with state and functions
  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Components consuming context
function NavBar() {
  const { user, logout, isAuthenticated } = React.useContext(AuthContext);

  return (
    <nav className="navbar">
      <h2>My App</h2>
      {isAuthenticated ? (
        <div className="user-section">
          <span className="username">👤 {user.username}</span>
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </div>
      ) : (
        <span className="guest">Guest User</span>
      )}
    </nav>
  );
}

function Dashboard() {
  const { user, isAuthenticated } = React.useContext(AuthContext);

  if (!isAuthenticated) {
    return (
      <div className="dashboard">
        <div className="message">
          <h3>Welcome!</h3>
          <p>Please login to access the dashboard</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="user-card">
        <h3>Dashboard</h3>
        <div className="user-details">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  const { login, isLoading, isAuthenticated } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username, 'password123');
    }
  };

  if (isAuthenticated) return null;

  return (
    <div className="login-form">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !username.trim()}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

// Root App
function App() {
  return (
    <AuthProvider>
      <div className="app">
        <NavBar />
        <Dashboard />
        <LoginForm />
      </div>
    </AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
            html={`<div id="root"></div>`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  min-height: 100vh;
  padding: 20px;
}

.app {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

.navbar {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar h2 {
  font-size: 1.5rem;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.username {
  font-weight: 600;
}

.guest {
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
}

.logout-btn {
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.dashboard {
  padding: 40px;
  min-height: 300px;
}

.message {
  text-align: center;
  padding: 60px 20px;
}

.message h3 {
  color: #10b981;
  margin-bottom: 10px;
  font-size: 1.8rem;
}

.message p {
  color: #6b7280;
  font-size: 1.1rem;
}

.user-card {
  background: #f9fafb;
  padding: 30px;
  border-radius: 16px;
  border: 2px solid #10b981;
}

.user-card h3 {
  color: #10b981;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.user-details p {
  padding: 10px 0;
  color: #4b5563;
  border-bottom: 1px solid #e5e7eb;
}

.user-details p:last-child {
  border-bottom: none;
}

.user-details strong {
  color: #1f2937;
}

.login-form {
  padding: 0 40px 40px;
}

.login-form h3 {
  color: #10b981;
  margin-bottom: 20px;
}

.login-form form {
  display: flex;
  gap: 10px;
}

.login-form input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
}

.login-form input:focus {
  outline: none;
  border-color: #10b981;
}

.login-form input:disabled {
  background: #f3f4f6;
  cursor: not-allowed;
}

.login-form button {
  padding: 12px 32px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.login-form button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
}

.login-form button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (prefers-color-scheme: dark) {
  .app {
    background: #1f2937;
  }

  .message p {
    color: #9ca3af;
  }

  .user-card {
    background: #111827;
    border-color: #6ee7b7;
  }

  .user-card h3 {
    color: #6ee7b7;
  }

  .user-details p {
    color: #d1d5db;
    border-bottom-color: #374151;
  }

  .user-details strong {
    color: #f3f4f6;
  }

  .login-form h3 {
    color: #6ee7b7;
  }

  .login-form input {
    background: #111827;
    border-color: #374151;
    color: #f3f4f6;
  }

  .login-form input:focus {
    border-color: #6ee7b7;
  }
}`}
          />
        </div>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Pass Objects</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Group related state and functions in one object
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Include Functions</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Allow components to update shared state
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Keep It Simple</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Only pass what components need
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Type Safety</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use TypeScript for better type checking
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Best Practice!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Pass an object containing both state and functions. This makes it easy to consume context with destructuring: const {'{'}user, login, logout{'}'} = useContext(AuthContext)
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
